"use strict";
class UserModel {
    constructor() {
        this.database = [];
        this.lastId = 0;
    }
    create(user) {
        const newUser = Object.assign(Object.assign({}, user), { id: this.lastId++ });
        this.database.push(newUser);
        return newUser;
    }
    getAll() {
        return [...this.database];
    }
}
class UserService {
    constructor(userModel) {
        this.userModel = userModel;
        create(user, User);
        User;
        {
            if (user.age > 200) {
                throw new Error('Idade esta um pouco avancada!');
            }
            return this.userModel.create(user);
        }
        getAll();
        {
            return this.userModel.getAll();
        }
    }
}
