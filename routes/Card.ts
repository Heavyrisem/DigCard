import { Router } from "express";
import middleware from "../middleware";

import Controller from '../controllers/Cards';

const router = Router();

router.post("/create", middleware.Parser, Controller.CreateCard);
router.post("/test", Controller.UpdateCard);
router.get("/:id", Controller.ReadCard);

export default router;