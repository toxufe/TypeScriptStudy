function fn(a:number,b:number):number {
    return a+b;
}

console.log(fn(1,2)); // 3

function fn1(a:number,b:number = 20):number {
    return a+b;
}

console.log(fn1(1)); // 21


function fn2(a:number,b?:number):number {
    return a+b!;
}

console.log(fn2(1)); // 21


interface User {
    name:string
    age:number
}

function fn3(user:User):User{
    return user;
}

console.log(fn3({name:'张三',age:20})); // { name: 'zhangsan', age: 20 }

// ts 可以定义对象this的类型。在js中无法使用
interface Obj {
    user:number[]
    add:(num:number)=>void
}

let obj:Obj = {
    user:[1,2,3],
    add(num:number){
        this.user.push(num)
    }
}

obj.add(4);

console.log(obj.user); // [ 1, 2, 3, 4 ]
