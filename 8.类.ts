
interface Options {
    el: string | HTMLElement
}

interface IVue {
    options: Options
    init(): void
}

// 虚拟dom 数据结构
interface Vnode {
    tag:string
    text?:string
    children?:Vnode[]
}

// 虚拟dom 简单版
class Dom {
    // 创建节点的方法
    createElement(tag:string){
        return document.createElement(tag)
    }
    // 填充文本的方法
    setText(el:HTMLElement,text:string | null){
        el.textContent = text
    }
    // 渲染函数
    render(data:Vnode){
        let root = this.createElement(data.tag)
        if(data.children && Array.isArray(data.children)){
            data.children.forEach(item=>{
                let child = this.render(item)
                root.appendChild(child)
            })
        }else{
            this.setText(root,data.text)
        }
        return root;
    }

}

// 虚拟dom 通过js对象来描述dom结构

// Vue类 implements IVue 类型
class Vue extends Dom implements IVue {
    options: Options
    constructor(options: Options) {
        super()
        this.options = options
        this.init()
    }
    init(): void {
        let data:Vnode = {
            
            tag: 'div',
            children:[
                {
                    tag: 'h1',
                    text: 'hello world'
                },
                {
                    tag: 'h2',
                    children:[
                        {
                            tag:'p',
                            text: 'hello world'
                        }
                    ]
                }
            ]
        }
        console.log('data: ', data);
        let app = typeof this.options.el =='string' ? document.querySelector(this.options.el):this.options.el;
        app.appendChild(this.render(data))
    }
}
new Vue({
    el: '#app',
});

console.log('Vue: ', Vue);

// 93975671-8BE0-E938-12D0-AD57C62002F2
// 93975671-8BE0-E938-12D0-AD57C62002F2