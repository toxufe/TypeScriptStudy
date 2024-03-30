var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
// 虚拟dom 简单版
var Dom = /** @class */ (function () {
    function Dom() {
    }
    // 创建节点的方法
    Dom.prototype.createElement = function (tag) {
        return document.createElement(tag);
    };
    // 填充文本的方法
    Dom.prototype.setText = function (el, text) {
        el.textContent = text;
    };
    // 渲染函数
    Dom.prototype.render = function (data) {
        var _this = this;
        var root = this.createElement(data.tag);
        if (data.children && Array.isArray(data.children)) {
            data.children.forEach(function (item) {
                var child = _this.render(item);
                root.appendChild(child);
            });
        }
        else {
            this.setText(root, data.text);
        }
        return root;
    };
    return Dom;
}());
// 虚拟dom 通过js对象来描述dom结构
// Vue类 implements IVue 类型
var Vue = /** @class */ (function (_super) {
    __extends(Vue, _super);
    function Vue(options) {
        var _this = _super.call(this) || this;
        _this.options = options;
        _this.init();
        return _this;
    }
    Vue.prototype.init = function () {
        var data = {
            tag: 'div',
            children: [
                {
                    tag: 'h1',
                    text: 'hello world'
                },
                {
                    tag: 'h2',
                    children: [
                        {
                            tag: 'p',
                            text: 'hello world'
                        }
                    ]
                }
            ]
        };
        console.log('data: ', data);
        var app = typeof this.options.el == 'string' ? document.querySelector(this.options.el) : this.options.el;
        app.appendChild(this.render(data));
    };
    return Vue;
}(Dom));
new Vue({
    el: '#app',
});
console.log('Vue: ', Vue);
// 93975671-8BE0-E938-12D0-AD57C62002F2
// 93975671-8BE0-E938-12D0-AD57C62002F2
