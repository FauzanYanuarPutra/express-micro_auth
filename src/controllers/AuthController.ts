import { Request, Response } from "express"
import AuthService from "../services/AuthService"

export default new class AuthController {

  async googleLogin(req: Request, res: Response) {
    return await AuthService.googleLogin(req, res)
  }

  async googleCallback(req: Request, res: Response) {
    return await AuthService.googleCallback(req, res)
  }

  async checkToken(req: Request, res: Response) {
    return await AuthService.checkToken(req, res)
  }

  async register(req: Request, res: Response) {
    return await AuthService.register(req, res)
  }
}

