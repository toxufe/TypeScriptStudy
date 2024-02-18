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

// 函数的重载
let arr:number[] = [1,2,3]
function fn5(id:number):number[];
function fn5(arr:number[]):number[];
function fn5():number[];
function fn5(ids?:number|number[]):number[]{
    if(typeof ids == 'number'){
        return arr.filter((num)=>ids==num);
    }else if(Array.isArray(ids)){
        arr.push(...ids);
        return arr;
    }else{
        return arr;
    }
        
}

console.log(fn5(1)); // [ 1 ]
console.log(fn5([2,3])); // [ 1, 2, 3 ]
console.log(fn5()); // [ 1, 2, 3 ]