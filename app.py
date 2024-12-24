# import csv
# from flask import Flask, request, jsonify, render_template
# import os

# app = Flask(__name__)
# UPLOAD_FOLDER = "uploads"
# os.makedirs(UPLOAD_FOLDER, exist_ok=True)

# # Variable to store uploaded data
# csv_data = []

# @app.route("/")
# def index():
#     return render_template("index.html")

# @app.route("/upload", methods=["POST"])
# def upload_csv():
#     global csv_data
#     file = request.files.get("file")
#     if file:
#         file_path = os.path.join(UPLOAD_FOLDER, file.filename)
#         file.save(file_path)
#         # Read CSV with UTF-8-SIG encoding to handle BOM
#         with open(file_path, encoding="utf-8-sig") as csv_file:
#             csv_reader = csv.DictReader(csv_file)
#             csv_data = list(csv_reader)
#         return "File uploaded and processed successfully!", 200
#     return "Failed to upload file.", 400

# @app.route("/get_result", methods=["POST"])
# def get_result():
#     global csv_data
#     roll_number = request.form.get("roll_number")
#     if not csv_data or not roll_number:
#         return "No data available or invalid roll number.", 400
    
#     for row in csv_data:
#         if row.get("Roll") == roll_number:  # Use "Roll" as the correct key
#             # Calculate total marks, percentage, and status
#             total_marks = sum(int(row[subject]) for subject in ["maths", "science", "english", "history"])
#             percentage = (total_marks / 400) * 100
#             status = "Pass" if percentage >= 40 else "Fail"
#             result = {
#                 "roll_number": roll_number,
#                 "name": row["Name"],
#                 "maths": row["maths"],
#                 "science": row["science"],
#                 "english": row["english"],
#                 "history": row["history"],
#                 "total_marks": total_marks,
#                 "percentage": percentage,
#                 "status": status
#             }
#             return jsonify(result)
#     return "Roll number not found.", 404

# if __name__ == "__main__":
#     app.run(debug=True)
# import csv
# from flask import Flask, request, jsonify, render_template, send_file
# import os
# from io import BytesIO
# from reportlab.pdfgen import canvas

# app = Flask(__name__)
# UPLOAD_FOLDER = "uploads"
# os.makedirs(UPLOAD_FOLDER, exist_ok=True)

# # Variable to store uploaded data
# csv_data = []

# @app.route("/")
# def index():
#     return render_template("index.html")

# @app.route("/upload", methods=["POST"])
# def upload_csv():
#     global csv_data
#     file = request.files.get("file")
#     if file:
#         file_path = os.path.join(UPLOAD_FOLDER, file.filename)
#         file.save(file_path)
#         # Read CSV with UTF-8-SIG encoding to handle BOM
#         with open(file_path, encoding="utf-8-sig") as csv_file:
#             csv_reader = csv.DictReader(csv_file)
#             csv_data = list(csv_reader)
#         return "File uploaded and processed successfully!", 200
#     return "Failed to upload file.", 400

# @app.route("/get_result", methods=["POST"])
# def get_result():
#     global csv_data
#     roll_number = request.form.get("roll_number")
#     if not csv_data or not roll_number:
#         return "No data available or invalid roll number.", 400
    
#     for row in csv_data:
#         if row.get("Roll") == roll_number:
#             # Calculate total marks, percentage, and status
#             total_marks = sum(int(row[subject]) for subject in ["maths", "science", "english", "history"])
#             percentage = (total_marks / 400) * 100
#             status = "Pass" if percentage >= 40 else "Fail"
#             result = {
#                 "roll_number": roll_number,
#                 "name": row["Name"],
#                 "maths": row["maths"],
#                 "science": row["science"],
#                 "english": row["english"],
#                 "history": row["history"],
#                 "total_marks": total_marks,
#                 "percentage": percentage,
#                 "status": status
#             }
#             return jsonify(result)
#     return "Roll number not found.", 404

# @app.route("/download_pdf", methods=["POST"])
# def download_pdf():
#     global csv_data
#     roll_number = request.form.get("roll_number")
#     if not csv_data or not roll_number:
#         return "No data available or invalid roll number.", 400
    
#     for row in csv_data:
#         if row.get("Roll") == roll_number:
#             # Calculate total marks, percentage, and status
#             total_marks = sum(int(row[subject]) for subject in ["maths", "science", "english", "history"])
#             percentage = (total_marks / 400) * 100
#             status = "Pass" if percentage >= 40 else "Fail"
            
#             # Generate PDF
#             buffer = BytesIO()
#             pdf = canvas.Canvas(buffer)
#             pdf.setFont("Helvetica", 12)
#             pdf.drawString(100, 800, f"Result for Roll Number: {roll_number}")
#             pdf.drawString(100, 780, f"Name: {row['Name']}")
#             pdf.drawString(100, 760, f"Maths: {row['maths']}")
#             pdf.drawString(100, 740, f"Science: {row['science']}")
#             pdf.drawString(100, 720, f"English: {row['english']}")
#             pdf.drawString(100, 700, f"History: {row['history']}")
#             pdf.drawString(100, 680, f"Total Marks: {total_marks}")
#             pdf.drawString(100, 660, f"Percentage: {percentage:.2f}%")
#             pdf.drawString(100, 640, f"Status: {status}")
#             pdf.save()
#             buffer.seek(0)
#             return send_file(buffer, as_attachment=True, download_name=f"Result_{roll_number}.pdf", mimetype='application/pdf')
    
#     return "Roll number not found.", 404

# if __name__ == "__main__":
#     app.run(debug=True)
from flask import Flask, request, jsonify, render_template, send_file
from fpdf import FPDF
import pandas as pd  # Import pandas for CSV handling
import matplotlib.pyplot as plt  # Import matplotlib for plotting
from io import BytesIO  # Import BytesIO for in-memory file handling
import base64 
import os
import csv

app = Flask(__name__)
UPLOAD_FOLDER = "uploads"
app.config["UPLOAD_FOLDER"] = UPLOAD_FOLDER

data = []


@app.route("/")
def index():
    return render_template("landing.html")


@app.route("/viewer", methods=["GET", "POST"])
def viewer():
    return render_template("index.html")


# CSV Upload Route
@app.route("/upload", methods=["POST"])
def upload_csv():
    file = request.files["file"]
    if file and file.filename.endswith(".csv"):
        file.save(os.path.join(app.config["UPLOAD_FOLDER"], file.filename))
        global data
        with open(os.path.join(app.config["UPLOAD_FOLDER"], file.filename), "r", encoding="utf-8-sig") as csvfile:
            reader = csv.DictReader(csvfile)
            data = list(reader)
        return "CSV uploaded and processed successfully!"
    return "Invalid file type. Please upload a CSV file."

# Get Result Route
@app.route("/get_result", methods=["POST"])
def get_result():
    roll_number = request.form["roll_number"]
    for row in data:
        if row["Roll"] == roll_number:
            total_marks = sum(int(row[subject]) for subject in ["maths", "science", "english", "history"])
            percentage = (total_marks / 400) * 100
            status = "Pass" if percentage >= 40 else "Fail"
            result = {
                "roll_number": row["Roll"],
                "name": row["Name"],
                "maths": row["maths"],
                "science": row["science"],
                "english": row["english"],
                "history": row["history"],
                "total_marks": total_marks,
                "percentage": percentage,
                "status": status
            }
            return jsonify(result)
    return "Roll number not found!", 400

# Generate PDF Route
@app.route("/download_pdf", methods=["POST"])
def download_pdf():
    roll_number = request.form["roll_number"]
    for row in data:
        if row["Roll"] == roll_number:
            total_marks = sum(int(row[subject]) for subject in ["maths", "science", "english", "history"])
            percentage = (total_marks / 400) * 100
            status = "Pass" if percentage >= 40 else "Fail"

            # Generate PDF
            pdf = FPDF()
            pdf.add_page()
            pdf.set_font("Arial", "B", 16)

            # Add Title
            pdf.cell(200, 10, "RESULT", ln=True, align="C")
            pdf.ln(10)

            # Student Details
            pdf.set_font("Arial", size=12)
            pdf.cell(200, 10, f"Roll Number: {row['Roll']}", ln=True, align="C")
            pdf.cell(200, 10, f"Name: {row['Name']}", ln=True, align="C")
            pdf.ln(10)

            # Marks Table
            pdf.set_font("Arial", "B", 12)
            pdf.cell(80, 10, "Subject", border=1, align="C")
            pdf.cell(50, 10, "Marks Obtained", border=1, align="C")
            pdf.cell(50, 10, "Full Marks", border=1, align="C")
            pdf.ln()

            # Table Rows
            pdf.set_font("Arial", size=12)
            subjects = ["maths", "science", "english", "history"]
            for subject in subjects:
                pdf.cell(80, 10, subject.capitalize(), border=1)
                pdf.cell(50, 10, row[subject], border=1, align="C")
                pdf.cell(50, 10, "100", border=1, align="C")
                pdf.ln()

            # Total and Percentage
            pdf.ln(10)
            pdf.cell(80, 10, "Total Marks Obtained", border=1)
            pdf.cell(50, 10, str(total_marks), border=1, align="C")
            pdf.cell(50, 10, "400", border=1, align="C")
            pdf.ln()

            pdf.cell(80, 10, "Percentage", border=1)
            pdf.cell(100, 10, f"{percentage:.2f}%", border=1, align="C")
            pdf.ln()

            pdf.cell(80, 10, "Status", border=1)
            pdf.cell(100, 10, status, border=1, align="C")

            # Save PDF to a file
            pdf_path = os.path.join(app.config["UPLOAD_FOLDER"], f"result_{row['Roll']}.pdf")
            pdf.output(pdf_path)

            return send_file(pdf_path, as_attachment=True)

    return "Roll number not found!", 400
@app.route("/statistics")
def statistics():
    filepath = os.path.join(app.config['UPLOAD_FOLDER'], os.listdir(app.config['UPLOAD_FOLDER'])[0])
    try:
        data = pd.read_csv(filepath)
        if 'ï»¿Roll' in data.columns:  # Handle BOM issue
            data.rename(columns={'ï»¿Roll': 'Roll'}, inplace=True)

        # Insights
        average_scores = data.iloc[:, 2:].mean()  # Average marks for each subject
        pass_fail = (data.iloc[:, 2:].mean(axis=1) >= 40).value_counts()  # Pass/Fail stats

        # Total marks and top 5 students
        data['Total Marks'] = data.iloc[:, 2:].sum(axis=1)
        top_students = data.nlargest(5, 'Total Marks')[['Roll', 'Name', 'Total Marks']]

        # Subject-wise toppers
        subject_toppers = {}
        for subject in data.columns[2:-1]:  # Skip Roll, Name, and Total Marks
            max_score = data[subject].max()
            toppers = data[data[subject] == max_score][['Roll', 'Name', subject]]
            subject_toppers[subject] = toppers.to_dict(orient='records')

        # Marks distribution
        marks_distribution = {}
        for subject in data.columns[2:-1]:  # Skip Roll, Name, and Total Marks
            plt.figure(figsize=(6, 4))
            data[subject].plot(kind='hist', bins=10, color='skyblue', alpha=0.7, rwidth=0.85)
            plt.title(f"Marks Distribution in {subject}")
            plt.xlabel("Marks")
            plt.ylabel("Frequency")
            plt.tight_layout()
            buf = BytesIO()
            plt.savefig(buf, format="png")
            buf.seek(0)
            marks_distribution[subject] = base64.b64encode(buf.getvalue()).decode('utf-8')
            buf.close()

        # Plots
        plots = {}

        # Bar chart: Average scores
        plt.figure(figsize=(6, 4))
        average_scores.plot(kind="bar", color="skyblue")
        plt.title("Average Scores by Subject")
        plt.ylabel("Average Marks")
        plt.tight_layout()
        buf = BytesIO()
        plt.savefig(buf, format="png")
        buf.seek(0)
        plots["average_scores"] = base64.b64encode(buf.getvalue()).decode('utf-8')
        buf.close()

        # Pie chart: Pass/Fail
        plt.figure(figsize=(6, 4))
        pass_fail.plot(kind="pie", labels=["Pass", "Fail"], autopct="%1.1f%%", colors=["lightgreen", "salmon"])
        plt.title("Pass/Fail Distribution")
        plt.ylabel("")  # Remove y-axis label for clarity
        plt.tight_layout()
        buf = BytesIO()
        plt.savefig(buf, format="png")
        buf.seek(0)
        plots["pass_fail"] = base64.b64encode(buf.getvalue()).decode('utf-8')
        buf.close()

        return render_template(
            "statistics.html",
            plots=plots,
            top_students=top_students.to_dict(orient="records"),
            subject_toppers=subject_toppers,
            marks_distribution=marks_distribution
        )

    except Exception as e:
        return jsonify({"error": str(e)}), 500


if __name__ == "__main__":
    if not os.path.exists(UPLOAD_FOLDER):
        os.makedirs(UPLOAD_FOLDER)
    app.run(debug=True)




