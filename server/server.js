const axios = require("axios");
const express = require("express");
const cors = require("cors");

const app = express();
const port = 3001;
const args = process.argv.slice(2);
const FLATICON_API_KEY = args[0];
const TOKEN_EXPIRE_OFFSET = 5 * 60;

axios.defaults.headers.post["Content-Type"] = "application/json";

if (FLATICON_API_KEY) {
    console.log("FLATICON_API_KEY:", FLATICON_API_KEY);
} else {
    console.error("No FLATICON_API_KEY provided");
    process.exit(1);
}

let token = null;
let expires = 0;

app.use(cors());

app.use(express.static('../client/build'))

app.get("/token", async (req, res) => {
    const now = Date.now() / 1000; // timestamp in seconds
    let result = {
        token,
        expires,
        success: true,
        error: null,
    };

    if (expires < now + TOKEN_EXPIRE_OFFSET) {
        console.log("Getting new token");
        try {
            const flaticonRes = await axios.post(
                "https://api.flaticon.com/v2/app/authentication",
                {
                    apikey: FLATICON_API_KEY,
                }
            );
            const data = flaticonRes.data.data;

            // Set cached data
            expires = data.expires;
            token = data.token;

            // Update result
            result.token = token;
            result.expires = expires;
        } catch (error) {
            errorRes = error.response;
            result = {
                data: errorRes ? errorRes.data : null,
                success: false,
                error: "Error getting token",
            };
        }
    } else {
        console.log("Using existing token");
    }
    res.send(result);
});

app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`);
});
