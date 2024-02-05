interface Person {
    name: string;
    readonly age?: number;
    [propName: string]: any;
    cb:()=>void
}

let person:Person = {
    name: 'Tom',
    // age: 25,
    sex:'Boy',
    cb:()=>{
        console.log("---")
    }
}


console.log(person);
// person.age = 10; // 报错 只读属性
// console.log(person.age);


console.log(person.cb());