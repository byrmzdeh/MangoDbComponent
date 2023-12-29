import { UserModel } from "../model/UserModel.js";


export const getAllUsers = async (req, res) => {
    try {
        const users = await UserModel.find({});
        res.json(users)
    } catch (error) {
        res.send(error.message)
    }
}

export const getByIdUser = async (req, res) => {
    try {
        const { id } = req.params
        const users = await UserModel.findById(id)
        res.json(users)
    } catch (error) {
        res.send(error.message)
    }
}

export const getPostUser = async (req, res) => {
    try {
        const { username, email, password, age, isMarried } = req.body
        const newUser = new UserModel({ username, email, password, age, isMarried });
        await newUser.save();
        res.json('User Yarandi !')
        console.log(process.env.PORT);
    } catch (error) {
        res.send(error.message)

    }
}


export const getDeleteUser = async (req, res) => {
    try {
        const { id } = req.params
        const users = await UserModel.findByIdAndDelete(id)
        res.json(users)
    } catch (error) {
        res.send(error.message)
    }
}


export const getPutUser = async (req, res) => {
    try {
        const { id } = req.params
        const { username, email, password, age, isMarried } = req.body
        const users = await UserModel.findByIdAndUpdate(id, { username, email, password, age, isMarried })
        res.json(users)
    } catch (error) {
        res.send(error.message)
    }
}