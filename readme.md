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


## tsconfig.json
```json
    // 打开或关闭严格模式
    "strict": false,   
```
