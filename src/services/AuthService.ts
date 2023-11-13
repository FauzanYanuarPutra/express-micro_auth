import { Repository } from "typeorm"
import { User } from "../entity/User"
import { AppDataSource } from "../data-source"
import { Request, Response } from "express"
// import * as bcrypt from "bcrypt"
// import * as jwt from "jsonwebtoken"
// import cloudinary from "../config/cloudinary"
// import {google} from "googleapis"
import { config } from 'dotenv';
config();

export default new class AuthService {
  private readonly UserRepository: Repository<User> = AppDataSource.getRepository(User)
  
  googleLogin = async (req: Request, res: Response) => {
    const {  email, username, imageURL } = req.body;

    const user = this.UserRepository.findOne({
      where: {
        email
      }
    })

    if (!user) {
      const newUser = this.UserRepository.create({
        email,
        username,
        profile_picture: imageURL
      })
      this.UserRepository.save(newUser)
    }


    return res.status(200).json({
      user,
      message: "You are logged in"
    })
  }

}

