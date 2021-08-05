import { userData, UserData } from "../database/user"
import { idGenerator, IdGenerator } from "../services/idGenerator"

export class UserBusiness {
    constructor(
        private idGenerator: IdGenerator,
        private userData: UserData
    ) {}
    async create (){
        try {
            
        } catch (err) {
            throw err
        }
    }

    async update (){
        try {
            
        } catch (err) {
            throw err
        }
    }

    async getAllUsers (){
        try {
            
        } catch (err) {
            throw err
        }
    }

    async getUser (){
        try {
            
        } catch (err) {
            throw err
        }
    }

    async deleteUser (){
        try {
            
        } catch (err) {
            throw err
        }
    }
}
export const userBusiness = new UserBusiness(idGenerator, userData)
