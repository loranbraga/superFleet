import {Router} from "express";
import createTask from "@framework/functions/task/createTask";
// eslint-disable-next-line new-cap
const router = Router();


router.post("/task", createTask);

export default router;

