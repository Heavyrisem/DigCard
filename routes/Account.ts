import { Router } from "express";
import middleware from "../middleware";

import Controller from '../controllers/Accounts';

const router = Router();

router.post("/register", middleware.Parser, Controller.Register);
router.post("/login", middleware.Parser, Controller.Login);

export default router;