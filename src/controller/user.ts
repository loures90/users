import { Request, Response } from 'express';
import { userBusiness } from '../business/user';
import { userInput } from '../model/user';

export class UserController {
    constructor(
    ) {}
    async create (req: Request, res:Response): Promise<any>{
        try {
            const user: userInput = req.body
            const result = await userBusiness.create(user)
            res.status(200).send(result)
        } catch (err: any) {
            res.status(400).send({ message: err.message, code: err.status });
        }
    }

    async update (req: Request, res:Response): Promise<any>{
        try {
            const user: userInput = req.body
            const id: string = req.params.id
            const result = await userBusiness.update(user,id)
            res.status(200).send(result)
        } catch (err: any) {
            res.status(400).send({ message: err.message, code: err.status });
        }
    }

    async getAllUsers (req: Request, res:Response): Promise<any>{
        try {
            const result = await userBusiness.getAllUsers()
            res.status(200).send(result)
        } catch (err: any) {
            res.status(400).send({ message: err.message, code: err.status });
        }
    }

    async getUser (req: Request, res:Response): Promise<any>{
        try {
            const id:string = req.params.id
            const result = await userBusiness.getUser(id)
            res.status(200).send(result)
        } catch (err: any) {
            res.status(400).send({ message: err.message, code: err.status });
        }
    }

    async deleteUser (req: Request, res:Response): Promise<any>{
        try {
            const id:string = req.params.id
            const result = await userBusiness.deleteUser(id)
            res.status(200).send(result)
        } catch (err: any) {
            res.status(400).send({ message: err.message, code: err.status });
        }
    }
}
export const userController = new UserController()
