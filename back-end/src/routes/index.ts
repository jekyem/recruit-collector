import { Router } from "express";
import Recruits from "./recruits";
import Oauth from "./oauth";

// Init router and path
const router = Router();

// Add sub-routes
router.use("/oauth", Oauth);
router.use("/recruits", Recruits);

// Export the base-router
export default router;
