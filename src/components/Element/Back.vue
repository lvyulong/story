<!--
usage：
一、属性：
    1、type：按钮的风格，primary、info、success...
    2、plain：是否用幽灵模式
    3、label：文案，默认显示返回
    4、route：指定跳转的路由，默认返回上一页
二、方法：
    没有父组件可调用的方法
三、事件
    没有触发父组件的事件
四、功能：
    1、页面的返回功能按钮
    2、可以指定route属性跳转指定的路由，文案也可以自定义
-->
<template>
    <div>
        <el-button type="primary" @click="back">{{label}}</el-button>
    </div>
</template>
<script>
    import Vue from 'vue';
    import {Button} from 'element-ui';
    import 'element-ui/lib/theme-chalk/index.css';

    Vue.component(Button.name, Button);
    export default {
        props: {
            label: {
                type: String,
                default: '返回',
                required: true
            }
        },
        methods: {
            back() {
                history.back();
                this.$emit('back');
            }
        }
    }
</script>
<style scoped>
</style>
