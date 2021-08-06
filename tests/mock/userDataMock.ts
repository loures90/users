import { UserData } from "../../src/database/user"
import { User, userInput } from "../../src/model/user"

export const userInputMock: userInput = { name: "Name", email: "email@email.com", age: 50 }
export const userOutputMock = new User("abc123", "Name", "email@email.com", 50)
export const user1 = { id: "abc123", name: "Name", email: "email@email.com", age: 50 }

export class UserDataMock extends UserData {
    async create(user: userInput) {
        return { message: "User created successfully" }
    }

    async update(id: string, user: userInput) {
        return {message: "User updated successfully"}
    }

    async getAllUsers() {
        return [userOutputMock, user1]
    }

    async getUser(id: string) {
        if (id == "def456")
            return []
        return [userOutputMock]
    }

    async getUserByEmail(email: string) {
        if (email == "RepeatedEmail@email.com")
            return [user1]
        else
            return []
    }

    async deleteUser(id: string) {
        return { message: "user was deleted successfully" }
    }
}
export const userDataMock = new UserDataMock()
