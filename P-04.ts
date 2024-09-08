function createUser(name:string, ci:string, email:string): { name: string; ci: string; email: string }{
    return{
        name:name,
        ci:ci,
        email:email
    };
}
console.log(createUser('luis','6576','lpz6317@gmail.com'));