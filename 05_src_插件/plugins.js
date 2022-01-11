export default {
    install(Vue) {
        console.log(Vue)

        // 全局过滤器，在插值语法/作为标签的属性使用
        Vue.filter('mySlice', function (value) {
            return value.slice(1, 4)
        })

        // 自定义组件
        Vue.directive('fbind', {
            // 指定和元素绑定之后
            bind(el, binding) {
                el.value = binding.value
            },
            // 指定所绑定的DOM元素插入页面之后
            inserted(el) {
                el.focus()
            },
            // 指令所在的模板被重新编译之后
            update(el, binding) {
                el.value = binding.value
            },
        });

        // 需要在组件里面添加一个配置项才可以应用混入
        Vue.mixin({
            data() {
                return {
                    x: 100,
                    y: 200
                }
            },
        })

        //Vue原型对象上的方法和变量，vm和vc实例对象都可以访问到
        Vue.prototype.hello = () => {
            alert('你好！')
        }
    }
}