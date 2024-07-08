const express = require("express");
const cors = require("cors");
const router = require("./src/routes/router");
const port = 4000;

const app = express();
app.use(cors());
app.use(express.json());
app.use(router);

app.listen(port, () => console.log(`Port OK, listening on ${port} 🚀`));