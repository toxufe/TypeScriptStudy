"use strict";
function fn(a, b) {
    return a + b;
}
console.log(fn(1, 2)); // 3
function fn1(a, b = 20) {
    return a + b;
}
console.log(fn1(1)); // 21
function fn2(a, b) {
    return a + b;
}
console.log(fn2(1)); // 21
function fn3(user) {
    return user;
}
console.log(fn3({ name: '张三', age: 20 })); // { name: 'zhangsan', age: 20 }
let obj = {
    user: [1, 2, 3],
    add(num) {
        this.user.push(num);
    }
};
obj.add(4);
console.log(obj.user); // [ 1, 2, 3, 4 ]
// 函数的重载
let arr = [1, 2, 3];
function fn5(ids) {
    if (typeof ids == 'number') {
        return arr.filter((num) => ids == num);
    }
    else if (Array.isArray(ids)) {
        arr.push(...ids);
        return arr;
    }
    else {
        return arr;
    }
}
console.log(fn5(1)); // [ 1 ]
console.log(fn5([2, 3])); // [ 1, 2, 3 ]
console.log(fn5()); // [ 1, 2, 3 ]
