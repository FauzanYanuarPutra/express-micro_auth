// import * as express from "express";
import { Router } from "express";
import AuthController from "../controllers/AuthController";
// import AuthMiddware from "../middlewares/AuthMiddleware";
// import { upload } from "../middlewares/UploadFIle";


const router = Router();
router.get('/auth/google', AuthController.googleLogin)


export default router;


