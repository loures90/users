import { userData, UserData } from "../database/user"
import { userInput } from "../model/user"
import { idGenerator, IdGenerator } from "../services/idGenerator"

export class UserBusiness {
    constructor(
        private idGenerator: IdGenerator,
        private userData: UserData
    ) { }
    async create(user: userInput) {
        try {

        } catch (err) {
            throw err
        }
    }

    async update(user: userInput, id: string) {
        try {

        } catch (err) {
            throw err
        }
    }

    async getAllUsers() {
        try {

        } catch (err) {
            throw err
        }
    }

    async getUser(id: string) {
        try {

        } catch (err) {
            throw err
        }
    }

    async deleteUser(id: string) {
        try {

        } catch (err) {
            throw err
        }
    }
}
export const userBusiness = new UserBusiness(idGenerator, userData)
