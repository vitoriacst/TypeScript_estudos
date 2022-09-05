"use strict";
function firstElement(arr) {
    return arr[0];
}
// podendo  receber as mesmas coisas -> sendo generic
function mergeObjects(obj1, obj2) {
    return Object.assign(Object.assign({}, obj1), obj2);
}
// dando para eles um tipo generic
const newObject = mergeObjects({ name: "vivi" }, { age: 19 });
