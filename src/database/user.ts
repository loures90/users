import { userInput } from "../model/user"

export class UserData {
    constructor() {}
    async create (user: userInput):Promise<any>{
        try {
            
        } catch (err) {
            throw err
        }
    }

    async update (id: string, user: userInput):Promise<any>{
        try {
            
        } catch (err) {
            throw err
        }
    }

    async getAllUsers ():Promise<any>{
        try {
            
        } catch (err) {
            throw err
        }
    }

    async getUser (id: string):Promise<any>{
        try {
            
        } catch (err) {
            throw err
        }
    }

    async getUserByEmail (email: string):Promise<any>{
        try {
            
        } catch (err) {
            throw err
        }
    }

    async deleteUser (id:string):Promise<any>{
        try {
            
        } catch (err) {
            throw err
        }
    }
}
export const userData = new UserData()
