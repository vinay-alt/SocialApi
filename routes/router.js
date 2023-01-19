import express from 'express';
import { Auth } from '../controllers/AuthController.js';
import { follow } from '../controllers/followcontroller.js';

const router  = express.Router();


router.post("/api/authenticate", Auth);
router.get("/api/follow/:id", follow);

export default router;