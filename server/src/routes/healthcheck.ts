import { Router } from "express";
const router = Router();

router.get("/", function (req, res) {
  res.send("Hello from Healthcheck :)");
});

export default router;
