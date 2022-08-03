
interface User{
  id?:number;
  name:string;
  age: number;
}

class UserModel{
  private database: User[]=[];
  private lastId = 0;
  create(user:User){
    const newUser = {...user,id:this.lastId++};
    this.database.push(newUser);
    return newUser;
  }
  getAll():User[]{
    return [...this.database]
  }
}

class UserService{
  constructor(protected userModel: UserModel){
    create(user:User): User{
      if(user.age>200){
        throw new Error('Idade esta um pouco avancada!')
      }
        return this.userModel.create(user);
    }
    getAll(){
      return this.userModel.getAll()
    }
  }
}
