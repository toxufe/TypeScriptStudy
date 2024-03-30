"use strict";
// interface Person {
//     name: string;
//     readonly age?: number;// 可选操作符 和 readonly
//     [propName: string]: any;// 索引签名 任意属性
//     cb:()=>void
// }
// interface A {
//     extend?: string
// }
// //重名interface  可以合并
// interface Person extends A {
//     sex:string
// }
// let person:Person = {
//     name: 'Tom',
//     // age: 25,
//     sex:'Boy',
//     cb:()=>{
//         console.log("---")
//     }
// }
// console.log(person);
// // person.age = 10; // 报错 只读属性
// // console.log(person.age);
// console.log(person.cb());
// // 定义函数类型
// interface Fn {
//     (name:string):number[]
// }
// const fn:Fn = function (name:string){
//     console.log("fn"+name);
//     return [1];
// }
// fn("111");
