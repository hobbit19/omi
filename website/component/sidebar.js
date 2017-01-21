import Omi from '../../src/index.js';
import List from './list.js';

Omi.makeHTML(List);

class Sidebar extends Omi.Component {
    constructor(data) {
        super(data);
    }

    install () {
        if(this.data.lan==="cn") {
            this.data.items =  [
                {title: "快速开始", list: [
                    {"name": "安装"},
                    {"name": "Hello World"},
                    {"name": "组件"},
                    {"name": "生命周期"},
                    {"name": "事件处理"},
                    {"name": "条件判断"},
                    {"name": "数组列表"},
                    {"name": "表单"},
                    {"name": "继承"},
                    {"name": "容器系统"},
                    {"name": "模板切换"},
                    {"name": "服务器端渲染"},
                    {"name": "Omi的理念"}
                ]},
                {title: "ABC", list: [{"name": "aaa"}, {"name": "cccdd"}]},  {title: "ABC", list: [{"name": "aaa"}, {"name": "cccdd"}]},  {title: "ABC", list: [{"name": "aaa"}, {"name": "cccdd"}]},  {title: "ABC", list: [{"name": "aaa"}, {"name": "cccdd"}]},  {title: "ABC", list: [{"name": "aaa"}, {"name": "cccdd"}]},  {title: "ABC", list: [{"name": "aaa"}, {"name": "cccdd"}]},  {title: "ABC", list: [{"name": "aaa"}, {"name": "cccdd"}]},  {title: "ABC", list: [{"name": "aaa"}, {"name": "cccdd"}]},  {title: "ABC", list: [{"name": "aaa"}, {"name": "cccdd"}]},  {title: "ABC", list: [{"name": "aaa"}, {"name": "cccdd"}]},  {title: "ABC", list: [{"name": "aaa"}, {"name": "cccdd"}]},  {title: "ABC", list: [{"name": "aaa"}, {"name": "cccdd"}]},  {title: "ABC", list: [{"name": "aaa"}, {"name": "cccdd"}]},  {title: "ABC", list: [{"name": "aaa"}, {"name": "cccdd"}]},  {title: "ABC", list: [{"name": "aaa"}, {"name": "cccdd"}]},  {title: "ABC", list: [{"name": "aaa"}, {"name": "cccdd"}]},  {title: "ABC", list: [{"name": "aaa"}, {"name": "cccdd"}]},  {title: "ABC", list: [{"name": "aaa"}, {"name": "cccdd"}]},  {title: "ABC", list: [{"name": "aaa"}, {"name": "cccdd"}]},  {title: "ABC", list: [{"name": "aaa"}, {"name": "cccdd"}]},  {title: "ABC", list: [{"name": "aaa"}, {"name": "cccdd"}]},  {title: "ABC", list: [{"name": "aaa"}, {"name": "cccdd"}]},  {title: "ABC", list: [{"name": "aaa"}, {"name": "cccdd"}]},  {title: "ABC", list: [{"name": "aaa"}, {"name": "cccdd"}]},  {title: "ABC", list: [{"name": "aaa"}, {"name": "cccdd"}]},  {title: "ABC", list: [{"name": "aaa"}, {"name": "cccdd"}]},  {title: "ABC", list: [{"name": "aaa"}, {"name": "cccdd"}]},  {title: "ABC", list: [{"name": "aaa"}, {"name": "cccdd"}]},  {title: "ABC", list: [{"name": "aaa"}, {"name": "cccdd"}]},  {title: "ABC", list: [{"name": "aaa"}, {"name": "cccdd"}]},  {title: "ABC", list: [{"name": "aaa"}, {"name": "cccdd"}]},  {title: "ABC", list: [{"name": "aaa"}, {"name": "cccdd"}]},  {title: "ABC", list: [{"name": "aaa"}, {"name": "cccdd"}]},  {title: "ABC", list: [{"name": "aaa"}, {"name": "cccdd"}]},
                {title: "AasfsfasBC", list: [{"name": "aaa"}, {"name": "ddd"}]}
            ];
        }else{
            this.data.items =  [
                {title: "QUICK START", list: [
                    {"name": "Installation"},
                    {"name": "Hello World"},
                    {"name": "Components"},
                    {"name": "Lifecycle"},
                    {"name": "Handling Events"},
                    {"name": "Conditional Rendering"},
                    {"name": "Lists and Keys"},
                    {"name": "Forms"},
                    {"name": "Inheritance"},
                    {"name": "Sever-side Rendering"},
                    {"name": "Thinking In Omi"}
                ]},
                {title: "ABC", list: [{"name": "aaa"}, {"name": "cccdd"}]},  {title: "ABC", list: [{"name": "aaa"}, {"name": "cccdd"}]},  {title: "ABC", list: [{"name": "aaa"}, {"name": "cccdd"}]},  {title: "ABC", list: [{"name": "aaa"}, {"name": "cccdd"}]},  {title: "ABC", list: [{"name": "aaa"}, {"name": "cccdd"}]},  {title: "ABC", list: [{"name": "aaa"}, {"name": "cccdd"}]},  {title: "ABC", list: [{"name": "aaa"}, {"name": "cccdd"}]},  {title: "ABC", list: [{"name": "aaa"}, {"name": "cccdd"}]},  {title: "ABC", list: [{"name": "aaa"}, {"name": "cccdd"}]},  {title: "ABC", list: [{"name": "aaa"}, {"name": "cccdd"}]},  {title: "ABC", list: [{"name": "aaa"}, {"name": "cccdd"}]},  {title: "ABC", list: [{"name": "aaa"}, {"name": "cccdd"}]},  {title: "ABC", list: [{"name": "aaa"}, {"name": "cccdd"}]},  {title: "ABC", list: [{"name": "aaa"}, {"name": "cccdd"}]},  {title: "ABC", list: [{"name": "aaa"}, {"name": "cccdd"}]},  {title: "ABC", list: [{"name": "aaa"}, {"name": "cccdd"}]},  {title: "ABC", list: [{"name": "aaa"}, {"name": "cccdd"}]},  {title: "ABC", list: [{"name": "aaa"}, {"name": "cccdd"}]},  {title: "ABC", list: [{"name": "aaa"}, {"name": "cccdd"}]},  {title: "ABC", list: [{"name": "aaa"}, {"name": "cccdd"}]},  {title: "ABC", list: [{"name": "aaa"}, {"name": "cccdd"}]},  {title: "ABC", list: [{"name": "aaa"}, {"name": "cccdd"}]},  {title: "ABC", list: [{"name": "aaa"}, {"name": "cccdd"}]},  {title: "ABC", list: [{"name": "aaa"}, {"name": "cccdd"}]},  {title: "ABC", list: [{"name": "aaa"}, {"name": "cccdd"}]},  {title: "ABC", list: [{"name": "aaa"}, {"name": "cccdd"}]},  {title: "ABC", list: [{"name": "aaa"}, {"name": "cccdd"}]},  {title: "ABC", list: [{"name": "aaa"}, {"name": "cccdd"}]},  {title: "ABC", list: [{"name": "aaa"}, {"name": "cccdd"}]},  {title: "ABC", list: [{"name": "aaa"}, {"name": "cccdd"}]},  {title: "ABC", list: [{"name": "aaa"}, {"name": "cccdd"}]},  {title: "ABC", list: [{"name": "aaa"}, {"name": "cccdd"}]},  {title: "ABC", list: [{"name": "aaa"}, {"name": "cccdd"}]},  {title: "ABC", list: [{"name": "aaa"}, {"name": "cccdd"}]},
                {title: "AasfsfasBC", list: [{"name": "aaa"}, {"name": "ddd"}]}
            ];

        }


        this.data.height = window.innerHeight -45;
        this.childrenData = this.data.items;
    }

    style () {
        return `
        .list{
            width:280px;
            text-indent: 20px;
            border-right: 1px solid #eee;
            overflow-x: hidden;
            overflow-y: auto;
            position:fixed;
            top:45px;
        }
        .version{
            height:20px;
        }
        `;
    }

    render () {
        return `
        <div class="list" style="height:{{height}}px;">
           <div class="version"></div>
          {{#items}}<List /> {{/items}}
        </div>`;
    }
}

export default Sidebar;