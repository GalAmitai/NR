import { Router } from "express";
import * as data from "../mocks/mock_data.json";
const router = Router();

router.get("/", function (req, res) {
  res.send(data);
});

export default router;
