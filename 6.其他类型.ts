// 类型断言 | 联合类型 | 交叉类型


// 类型断言
// 语法：　　值 as 类型　　或　　<类型>值  value as string  <string>value

interface People {
    name: string
    age: number
}

interface Man {
    sex: string
}

let fnn = (man: People & Man): void => {
    console.log(man);
}

fnn({ name: 'zhangsan', age: 20, sex: '男1' });