
interface Options {
    el: string | HTMLElement
}

interface IVue {
    options: Options
    init(): void
}

// Vue类 implements IVue 类型
class Vue implements IVue {
    options: Options
    constructor(options: Options) {
        this.options = options
    }
    init(): void {
        console.log('init')
    }
}
new Vue({
    el: '#app',
});

// 93975671-8BE0-E938-12D0-AD57C62002F2
// 93975671-8BE0-E938-12D0-AD57C62002F2