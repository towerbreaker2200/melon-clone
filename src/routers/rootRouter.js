import express from "express";
import {
  home,
  play,
  getUpload,
  postUpload,
} from "../controllers/songController";

const rootRouter = express.Router();

rootRouter.route("/upload").get(getUpload).post(postUpload);
rootRouter.get("/:id", play);
rootRouter.get("/", home);

export default rootRouter;
