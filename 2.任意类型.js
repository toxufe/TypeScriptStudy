"use strict";
// typescript 类型阶梯
// https://static.xuehuafei.cn/i/2024/02/05/65c0984d75547.png
// let anys:any = 123
// anys = '123'
// anys = true
// anys = Symbol(1)
// console.log(anys)
//这样写会报错unknow类型不能作为子类型只能作为父类型 any可以作为父类型和子类型
//unknown类型不能赋值给其他类型
// let names: unknown = '123'
// let names21xxx: string = names
//这样就没问题 any类型是可以的
// let names:any = '123'
// let names2:string = names   
//unknown可赋值对象只有unknown 和 any
// let bbb: unknown = '123'
// let aaa: any = '456'
