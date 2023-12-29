import { Router } from "express";
import { myLogger } from "../middleware/loggerMiddleware.js";
import { getAllUsers, getByIdUser, getDeleteUser, getPostUser, getPutUser } from "../controller/UserController.js";
export const userRouter = Router();

userRouter.get('/' , myLogger , getAllUsers)
userRouter.get('/:id'  , getByIdUser)
userRouter.post('/', getPostUser)
userRouter.put('/:id', getPutUser)
userRouter.delete('/:id', getDeleteUser)
