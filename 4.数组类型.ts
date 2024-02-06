
// // 类型[]
// let num:number[] = [1,2,3];

// // Array<类型> 泛型数组
// let num1:Array<number> = [1,2,3];


// console.log(num);
// console.log(num1);

// // 对象类型的数组
// interface Person {
//     name:string;
//     age:number;
// }

// const persons:Person[] = [{name:'xxx',age:18},{name:'yyy',age:20}];

// console.log(persons);

// type aaa = string|boolean|string|number;
// // 多维数组类型定义
// let arr:number[][] = [[1],[2],[3]];
// let arr1:aaa[][] = [[1,],[true],[333,111,"xxx"]]

// console.log(arr);
// console.log(arr1);

// // 多维数组的泛型定义
// let arr2:Array<Array<number>> = [[1],[2],[3]];
// console.log(arr2);

// // 剩余参数 定义数组类型
// function sum(...args:number[]){
//     return args.reduce((prev,curr)=>prev+curr,0);
// }
// console.log(sum(1,2,3,4,5,6,7,8,9,10));

// // 函数类数组
// function xxx(ccc:any){
//     let a:IArguments = arguments;
//     console.log(a);
    
// }

// xxx(1);







