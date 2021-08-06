import { idGenerator } from "../src/services/idGenerator"

describe("IDGENERATOR", ()=>{
    it("Should return an id",()=>{
        expect.assertions(1)
        const id = idGenerator.generate()
        expect(typeof(id)).toBe("string")
    })
})