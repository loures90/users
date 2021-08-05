import { Request, Response } from 'express';

export class UserController {
    constructor(
        
    ) {}
    async create (req: Request, res:Response): Promise<any>{
        try {
            
        } catch (err: any) {
            res.status(400).send({ message: err.message, code: err.status });
        }
    }

    async update (req: Request, res:Response): Promise<any>{
        try {
            
        } catch (err: any) {
            res.status(400).send({ message: err.message, code: err.status });
        }
    }

    async getAllUsers (req: Request, res:Response): Promise<any>{
        try {
            
        } catch (err: any) {
            res.status(400).send({ message: err.message, code: err.status });
        }
    }

    async getUser (req: Request, res:Response): Promise<any>{
        try {
            
        } catch (err: any) {
            res.status(400).send({ message: err.message, code: err.status });
        }
    }

    async deleteUser (req: Request, res:Response): Promise<any>{
        try {
            
        } catch (err: any) {
            res.status(400).send({ message: err.message, code: err.status });
        }
    }
}
export const userController = new UserController()
