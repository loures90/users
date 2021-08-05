import { Request, Response } from 'express';

export class userController {
    constructor() {}
    async create (req: Request, res:Response){
        try {
            
        } catch (err) {
            res.status(400).send({ error: err.message });
        }
    }

    async update (req: Request, res:Response){
        try {
            
        } catch (err) {
            res.status(400).send({ error: err.message });
        }
    }

    async getAllUsers (req: Request, res:Response){
        try {
            
        } catch (err) {
            res.status(400).send({ error: err.message });
        }
    }

    async getUser (req: Request, res:Response){
        try {
            
        } catch (err) {
            res.status(400).send({ error: err.message });
        }
    }

    async deleteUser (req: Request, res:Response){
        try {
            
        } catch (err) {
            res.status(400).send({ error: err.message });
        }
    }
}