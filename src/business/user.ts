import { userData, UserData } from "../database/user"
import { BaseError } from "../error/baseError"
import { userInput } from "../model/user"
import { idGenerator, IdGenerator } from "../services/idGenerator"

export class UserBusiness {
    constructor(
        private idGenerator: IdGenerator,
        private userData: UserData
    ) {

    }
    async create(user: userInput) {
        try {
            if (!user.name || !user.email || !user.age)
                throw new BaseError("Invalid input", 400);

            const emailExist = await this.userData.getUserByEmail(user.email)
            if (emailExist[0]?.id)
                throw new BaseError("E-mail already signed-up.", 400);
            return await this.userData.create(user)
        } catch (err) {
            throw err
        }
    }

    async update(user: userInput, id: string) {
        try {
            if (!user.name || !user.email || !user.age)
                throw new BaseError("Invalid input", 400);

            const userExist = await this.userData.getUser(id)
            if (!userExist[0]?.id)
                throw new BaseError("Not Found", 404);
            return await this.userData.update(id, user)
        } catch (err) {
            throw err
        }
    }

    async getAllUsers() {
        try {
            return await this.userData.getAllUsers()
        } catch (err) {
            throw err
        }
    }

    async getUser(id: string) {
        try {
            const userExist = await this.userData.getUser(id)
            if (!userExist[0]?.id)
                throw new BaseError("Not Found", 404);
            return userExist

        } catch (err) {
            throw err
        }
    }

    async deleteUser(id: string) {
        try {
            const userExist = await this.userData.getUser(id)
            if (!userExist[0]?.id)
                throw new BaseError("Not Found", 404);
                
            return await this.userData.deleteUser(id)
        } catch (err) {
            throw err
        }
    }
}
export const userBusiness = new UserBusiness(idGenerator, userData)
