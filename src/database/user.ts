import { userInput, UserMongoDB } from "../model/user"

export class UserData {
    constructor() { }
    async create(user: userInput): Promise<any> {
        try {
            await UserMongoDB.create(user)
            return { message: "User created successfully" }
        } catch (err) {
            throw err
        }
    }

    async update(id: string, user: userInput): Promise<any> {
        try {
            const result = await UserMongoDB.findOneAndUpdate({ id: id }, user)
            return { message: "User updated successfully" }
        } catch (err) {
            throw err
        }
    }

    async getAllUsers(): Promise<any> {
        try {
            const result = await UserMongoDB.find()
            return result
        } catch (err) {
            throw err
        }
    }

    async getUser(id: string): Promise<any> {
        try {
            const result = await UserMongoDB.find({ id: id })
            return result
        } catch (err) {
            throw err
        }
    }

    async getUserByEmail(email: string): Promise<any> {
        try {
            const result = await UserMongoDB.find({ email: email })
            return result
        } catch (err) {
            throw err
        }
    }

    async deleteUser(id: string): Promise<any> {
        try {
            await UserMongoDB.deleteOne({ id })
            return { message: "User was deleted successfully" }
        } catch (err) {
            throw err
        }
    }
}
export const userData = new UserData()
