// 按需全局引入 vant组件
import Vue from 'vue'
import { Button, List, Cell, Tabbar, TabbarItem, NavBar, Form, Field, Image as VanImage } from 'vant'
Vue.use(Button)
Vue.use(Cell)
Vue.use(List)
Vue.use(Form)
Vue.use(NavBar)
Vue.use(Field)
Vue.use(Tabbar).use(TabbarItem)
Vue.use(VanImage)
