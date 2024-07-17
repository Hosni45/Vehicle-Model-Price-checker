const express = require("express");
const cors = require("cors");
const db = require('./server/sequelize/db.js')
const router = require('./server/routes')
const PORT = 5000;
const app = express();

app.use(express.json());
app.use(cors());
app.use("/", router);

app.listen(PORT, () => {
  console.log(`Server listening at http://localhost:${PORT}`);
});
