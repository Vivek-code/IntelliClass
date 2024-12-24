import React, { useRef, useEffect, useState, useCallback } from "react";
import axios from "axios";
import API_BASE_URL from "./API";

function MasterComponent() {
  const [lastFrame, setLastFrame] = useState(null);
  const [showWebcam, setShowWebcam] = useState(true);
  const [showImg, setShowImg] = useState(false);
  const [isRegistering, setIsRegistering] = useState(false);
  const [isAdmin, setIsAdmin] = useState(false);
  const [value, setValue] = useState("");

  const videoRef = useRef(null);
  const canvasRef = useRef(null);

  const registerNewUser = useCallback(async (text) => {
    if (lastFrame) {
      const apiUrl = `${API_BASE_URL}/register_new_user?text=${text}`;
      try {
        const response = await fetch(lastFrame);
        const blob = await response.blob();
        const file = new File([blob], "webcam-frame.png", { type: "image/png" });
        const formData = new FormData();
        formData.append("file", file);

        const res = await axios.post(apiUrl, formData, {
          headers: { "Content-Type": "multipart/form-data" },
        });

        if (res.data.registration_status === 200) {
          alert("User was registered successfully!");
        }
      } catch (error) {
        console.error("Error sending image to API:", error);
      }
    }
  }, [lastFrame]);

  const downloadLogs = useCallback(async () => {
    try {
      const response = await axios.get(`${API_BASE_URL}/get_attendance_logs`, {
        responseType: "blob",
      });

      const url = window.URL.createObjectURL(new Blob([response.data]));
      const link = document.createElement("a");
      link.href = url;
      link.setAttribute("download", "logs.zip");
      document.body.appendChild(link);
      link.click();
    } catch (error) {
      console.error("Error downloading logs:", error);
    }
  }, []);

  const captureImage = useCallback((apiUrl) => {
    if (videoRef.current && canvasRef.current) {
      const context = canvasRef.current.getContext("2d");
      context.drawImage(videoRef.current, 0, 0, 400, 300);

      canvasRef.current.toBlob(async (blob) => {
        const file = new File([blob], "webcam-frame.png", { type: "image/png" });
        const formData = new FormData();
        formData.append("file", file);

        try {
          const response = await axios.post(apiUrl, formData, {
            headers: { "Content-Type": "multipart/form-data" },
          });

          if (response.data.match_status) {
            alert(`Welcome back ${response.data.user}!`);
          } else {
            alert("Unknown user! Please try again or register new user!");
          }
        } catch (error) {
          console.error("Error sending image to API:", error);
        }
      });
    }
  }, []);

  const handleLogin = useCallback(() => {
    captureImage(`${API_BASE_URL}/login`);
  }, [captureImage]);

  const handleLogout = useCallback(() => {
    captureImage(`${API_BASE_URL}/logout`);
  }, [captureImage]);

  const handleRegister = useCallback(() => {
    setIsAdmin(false);
    setIsRegistering(true);
    setShowWebcam(false);
    setShowImg(true);
    setValue("");
  }, []);

  const handleRegisterOk = useCallback(() => {
    setIsAdmin(false);
    setIsRegistering(false);
    setShowWebcam(true);
    setShowImg(false);
    registerNewUser(value);
  }, [registerNewUser, value]);

  const handleRegisterCancel = useCallback(() => {
    setIsAdmin(false);
    setIsRegistering(false);
    setShowWebcam(true);
    setShowImg(false);
  }, []);

  const handleAdmin = useCallback(() => {
    setIsAdmin(true);
    setIsRegistering(false);
  }, []);

  const handleGoBack = useCallback(() => {
    setIsAdmin(false);
    setIsRegistering(false);
  }, []);

  const handleDownload = useCallback(() => {
    setIsAdmin(false);
    setIsRegistering(false);
    downloadLogs();
  }, [downloadLogs]);

  useEffect(() => {
    const setupCamera = async () => {
      const stream = await navigator.mediaDevices.getUserMedia({ video: true });
      videoRef.current.srcObject = stream;
    };
    setupCamera();
  }, []);

  return (
    <div className="master-component">
      {showWebcam ? (
        <Webcam videoRef={videoRef} canvasRef={canvasRef} setLastFrame={setLastFrame} />
      ) : (
        <img className="img" src={lastFrame} alt="Captured frame" />
      )}
      <Buttons
        isAdmin={isAdmin}
        isRegistering={isRegistering}
        value={value}
        setValue={setValue}
        handleLogin={handleLogin}
        handleLogout={handleLogout}
        handleRegister={handleRegister}
        handleRegisterOk={handleRegisterOk}
        handleRegisterCancel={handleRegisterCancel}
        handleAdmin={handleAdmin}
        handleGoBack={handleGoBack}
        handleDownload={handleDownload}
      />
    </div>
  );
}

function Webcam({ videoRef, canvasRef, setLastFrame }) {
  useEffect(() => {
    const context = canvasRef.current.getContext("2d");
    const drawFrame = () => {
      context.drawImage(videoRef.current, 0, 0, 400, 300);
      canvasRef.current.toBlob((blob) => {
        setLastFrame(URL.createObjectURL(blob));
      });
      requestAnimationFrame(drawFrame);
    };
    drawFrame();
  }, [videoRef, canvasRef, setLastFrame]);

  return (
    <div className="webcam">
      <canvas ref={canvasRef} width={400} height={300} />
      <video ref={videoRef} autoPlay playsInline />
    </div>
  );
}

function Buttons({
  isAdmin,
  isRegistering,
  value,
  setValue,
  handleLogin,
  handleLogout,
  handleRegister,
  handleRegisterOk,
  handleRegisterCancel,
  handleAdmin,
  handleGoBack,
  handleDownload,
}) {
  return (
    <div className="buttons-container">
      {isRegistering && (
        <div className="register-text-container">
          <input
            className="register-text"
            type="text"
            placeholder="Enter user name"
            value={value}
            onChange={(e) => setValue(e.target.value)}
          />
          <button className="register-ok-button" onClick={handleRegisterOk}>OK</button>
          <button className="register-cancel-button" onClick={handleRegisterCancel}>Cancel</button>
        </div>
      )}
      {!isAdmin && !isRegistering && (
        <>
          <button className="login-button" onClick={handleLogin}>Login</button>
          <button className="logout-button" onClick={handleLogout}>Logout</button>
          <button className="admin-button" onClick={handleAdmin}>Admin</button>
        </>
      )}
      {isAdmin && (
        <>
          <button className="register-button" onClick={handleRegister}>Register</button>
          <button className="goback-button" onClick={handleGoBack}>Go Back</button>
          <button className="download-button" onClick={handleDownload}>Download Logs</button>
        </>
      )}
    </div>
  );
}

export default MasterComponent;
