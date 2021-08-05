export class User {
    constructor(
        private id: string,
        private name: string,
        private email: string,
        private age: number
    ) {}
    getId(){
        return this.id
    }
    getName(){
        return this.name
    }
    getEmail(){
        return this.email
    }
    getAge(){
        return this.age
    }
    setId(id:string){
        this.id = id
    }
    setName(name: string){
        this.name = name
    }
    setEmail(email:string){
        this.email = email
    }
    setAge(age: number){
        this.age = age
    }
}

export interface userInput{
    name: string,
    email: string,
    age: number
}