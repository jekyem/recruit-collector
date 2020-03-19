import { Router, Request, Response } from "express";
import { OK } from "http-status-codes";
import RecruitService from "service/RecruitService";

const router = Router();
const DEFAULT_OFFSET = 0;
const DEFAULT_LIMIT_SIZE = 10;

/*------------------------------
  method : get
  URI : /api/recruits/
  parm : {
    searchTerm : String
    tag : string[]
    offset : Number
    limit : Number
  }
------------------------------ */
router.get("/", async (req: Request, res: Response) => {
  const searchTerm = req.query.searchTerm ? req.query.searchTerm : "";
  const offset = req.query.offset ? Number(req.query.offset) : DEFAULT_OFFSET;
  const limit = req.query.limit ? Number(req.query.limit) : DEFAULT_LIMIT_SIZE;

  const recruits = await RecruitService.getRecruits(
    searchTerm,
    [],
    offset,
    limit
  );

  const totalCount = await RecruitService.countRecruits(searchTerm, []);

  res.status(OK).json({ recruits, total: totalCount });
});

export default router;
