"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// herdamos  essa interface na classe blog post , que devera seguir as regras da interface
class blogPost {
    constructor(title) {
        this.title = title;
    }
    itemTitle() {
        return `o titulo do post : ${this.title}`;
    }
}
const myPost = new blogPost('hello world');
