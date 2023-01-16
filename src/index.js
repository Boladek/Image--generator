const express = require("express");
const morgan = require("morgan");
const dotenv = require("dotenv").config();
const path = require("path");
const port = process.env.PORT || 9999;
const openAiRoutes = require("./routes/openAiRoutes");

const app = express();

app.use(morgan("combined"));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use("/openai", openAiRoutes);

app.listen(port, () => console.log(`Server is running on port ${port}`));
