import { Router, Request, Response } from "express";
import { OK } from "http-status-codes";
import moment from "moment";
import Recruits from "model/Recruits";

const router = Router();

router.get("/", async (req: Request, res: Response) => {
  const searchTerm = req.query.searchTerm ? req.query.searchTerm : "";
  const offset = req.query.offset ? Number(req.query.offset) : 0;
  const limit = req.query.limit ? Number(req.query.limit) : 10;

  const recruits = await Recruits.getPageList(searchTerm, [], offset, limit);

  res.status(OK).json({ ...recruits });
});

export default router;
