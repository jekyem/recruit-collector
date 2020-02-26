import { Router } from "express";
import Recruits from "./recruits";

// Init router and path
const router = Router();

// Add sub-routes
router.use("/recruits", Recruits);
// router.use('/users', UserRouter);

// Export the base-router
export default router;
