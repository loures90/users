import { UserBusiness } from "../../src/business/user"
import { idGeneratorMock } from "../mock/idGeneratorMock"
import { userDataMock, userOutputMock } from "../mock/userDataMock"
const userBusiness = new UserBusiness(idGeneratorMock, userDataMock)

describe("USER BUSINESS", () => {
    describe("CREATE USER", () => {
        it("should return error because name is not valid", async ():Promise<any> => {
            expect.assertions(2)
            const newUser = { name: "", email: "email", age: 50 }
            try {
                await userBusiness.create(newUser)
            } catch (err: any) {
                expect(err.message).toBe("Invalid input")
                expect(err.code).toBe(400)
            }
        })

        it("should return error because e-mail is not valid", async () => {
            expect.assertions(2)
            const newUser = { name: "Name", email: "", age: 50 }
            try {
                await userBusiness.create(newUser)
            } catch (err: any) {
                expect(err.message).toBe("Invalid input")
                expect(err.code).toBe(400)
            }
        })

        it("should return error because age is not valid", async () => {
            expect.assertions(2)
            const newUser = { name: "Name", email: "email", age: 0 }
            try {
                await userBusiness.create(newUser)
            } catch (err: any) {
                expect(err.message).toBe("Invalid input")
                expect(err.code).toBe(400)
            }
        })

        it("should return error because e-mail already exist", async () => {
            expect.assertions(2)
            const newUser = { name: "name", email: "RepeatedEmail@email.com", age: 50 }
            try {
                await userBusiness.create(newUser)
            } catch (err:any) {
                expect(err.message).toBe("E-mail already signed-up.")
                expect(err.code).toBe(400)
            }
        })

        it("should save a new user and return Success", async () => {
            expect.assertions(1)
            const newUser = { name: "Name", email: "email", age: 50 }
            const result = await userBusiness.create(newUser)
            expect(result.message).toBe("User created successfully.")
        })
    })

    describe("UPDATE USER", () => {
        it("should return error because name is not valid", async () => {
            expect.assertions(2)
            const newUser = { name: "", email: "email@email.com", age: 50 }
            const id = "abc123"
            try {
                await userBusiness.update(newUser, id)
            } catch (err: any) {
                expect(err.message).toBe("Invalid input")
                expect(err.code).toBe(400)
            }
        })

        it("should return error because e-mail is not valid", async () => {
            expect.assertions(2)
            const id = "abc123"

            const newUser = { name: "name", email: "", age: 50 }
            try {
                await userBusiness.update(newUser, id)
            } catch (err: any) {
                expect(err.message).toBe("Invalid input")
                expect(err.code).toBe(400)
            }
        })

        it("should return error because age is not valid", async () => {
            expect.assertions(2)
            const id = "abc123"
            const newUser = { name: "Name", email: "email@email.com", age: 0 }
            try {
                await userBusiness.update(newUser, id)
            } catch (err: any) {
                expect(err.message).toBe("Invalid input")
                expect(err.code).toBe(400)
            }
        })

        it("should return error because id is not found", async () => {
            expect.assertions(2)
            const newUser = { name: "Name", email: "email@email.com", age: 50 }
            const id = "def456"
            try {
                await userBusiness.update(newUser, id)
            } catch (err: any) {
                expect(err.message).toBe("Not Found")
                expect(err.code).toBe(404)
            }
        })

        it("should update a user and return Success", async () => {
            const id = "abc123"
            expect.assertions(1)
            const newUser = { name: "Name", email: "email@email.com", age: 50 }
            const result = await userBusiness.update(newUser, id)
            expect(result.message).toBe("User updated successfully")
        })
    })

    describe("GET ALL USERS", () => {
         it("should return a list of users", async () => {
            expect.assertions(2)
            const id = "abc123"
            const result = await userBusiness.getAllUsers()
            expect(result.length).toBe(2)
            expect(result[0].id).toBe("abc123")
        })
    })
    
    describe("GET A USER USER", () => {
        const userBusiness = new UserBusiness(idGeneratorMock, userDataMock)
        it("should return error because ID is not FOUND", async () => {
            expect.assertions(2)
            const id = "def456"
            try {
                await userBusiness.getUser(id)
            } catch (err:any) {
                expect(err.message).toBe("Not Found")
                expect(err.code).toBe(404)
            }
        })

        it("should return a user - success", async () => {
            expect.assertions(2)
            const id = "abc123"
            const result = await userBusiness.getUser(id)
            expect(result.length).toBe(1)
            expect(result[0].id).toBe("abc123")
        })
    })

    describe("DELETE A USER", () => {

        const userBusiness = new UserBusiness(idGeneratorMock, userDataMock)
        it("should return error because id was not found", async () => {
            expect.assertions(2)
            const id = "def456"
            try {
                await userBusiness.deleteUser(id)
            } catch (err:any) {
                expect(err.message).toBe("Not Found")
                expect(err.code).toBe(404)
            }
        })

        it("should delete the user and return success", async () => {
            expect.assertions(1)
            const id = "abc123"
            const result = await userBusiness.deleteUser(id)
            expect(result.message).toBe("user was deleted successfully")
        })
    })
})