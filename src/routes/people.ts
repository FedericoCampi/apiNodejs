import { Router } from "express";
import { getPeoples } from "../controllers/people";

const router = Router();

router.get('/', getPeoples);

export { router };