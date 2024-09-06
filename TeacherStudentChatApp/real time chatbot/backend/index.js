const express = require("express");
const cors = require("cors");
const axios = require("axios");

const app = express();
app.use(express.json());
app.use(cors({ origin: true }));

app.post("/authenticate", async (req, res) => {
    const { username } = req.body;

    try {
        const r = await axios.put(
            'https://api.chatengine.io/users/',
            { username: username, secret: username, first_name: username },
            { headers: { "private-key": "7514aa76-74c1-43e7-b998-f1b7f6480a04" } }
        );
        res.json(r.data);
    } catch (e) {
        console.error(e);
        res.json({});
    }
});

app.listen(3001, () => {
    console.log("Server is running on port 3001");
});
