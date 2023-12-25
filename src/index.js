import express from "express";
import morgan from "morgan";
import cors from "cors";

const app = express();

// default values
const PORT = process.env.PORT || 3030;
app.use(cors({ _origin: "*" }));

// Console log server requests
app.use(morgan("dev"));

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// ----- Routes
import tasaBCV from "./routes/tasaBCV.js";
app.use("/api/tasaBCV", tasaBCV);

// ----- Starting server
app.listen(PORT, () => {
  console.log(`server on port ${PORT}`);
});
