# typescript 学习

## 安装
npm install typescript -g

tsc -v 安装成功打印版本

nodejs 环境执行ts

npm i @types/node --save-dev （node环境支持的依赖必装）

npm i ts-node --g

npm i xmzs -g

mmp


## 语法
### 基础类型

### 任意类型
unknown可赋值对象只有unknown 和 any
unknown不能调用对象属性和方法 any可以

### Object 、object、{}
object 代表所有非值类型的类型，例如 数组 对象 函数等，常用于泛型约束，支持所有的引用类型。

`{}`看起来很别扭的一个东西 你可以把他理解成new Object 就和我们的第一个Object基本一样 包含所有类型

### 接口和对象类型
在typescript中，我们定义对象的方式要用关键字interface（接口），我的理解是使用interface来定义一种约束，让数据的结构满足约束的格式。

```typescript
interface AAA {}
// 第一个字母要大写
```

```typescript
//继承
interface A{
    name:string
}
 
interface B extends A{
    age:number
}
```
```typescript
// 可选属性的含义是该属性可以不存在
interface Person {
    b?:string,
    a:string
}
 
const person:Person  = {
    a:"213"
}
```

任意属性 [propName: string]

需要注意的是，一旦定义了任意属性，那么确定属性和可选属性的类型都必须是它的类型的子集：

```typescript
//在这个例子当中我们看到接口中并没有定义C但是并没有报错
//应为我们定义了[propName: string]: any;
//允许添加新的任意属性
interface Person {
    b?:string,
    a:string,
    [propName: string]: any;
    cb:()=>void
}
 
const person:Person  = {
    a:"213",
    c:"123",
    cb:()=>{
        console.log("a")
    }
}
```

版权声明：本文为博主原创文章，遵循 CC 4.0 BY-SA 版权协议，转载请附上原文出处链接和本声明。
                        
原文链接：https://blog.csdn.net/qq1195566313/article/details/122173993

## tsconfig.json
```json
    // 打开或关闭严格模式
    "strict": false,   
```
