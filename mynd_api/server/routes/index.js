import express from "express";

// Init router
const router = express.Router();

router.get("/", (req, res) => {
  res.status(200).json({
    status: 200,
    message: "welcome to our API",
  });
});

router.use("*", (req, res) => {
  res.status(404).json({
    status: 404,
    message: "Route Not Found",
  });
});

export default router;
