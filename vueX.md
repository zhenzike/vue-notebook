# 1、VUEX

Vuex是实现组件全局状态(数据）管理的一种机制，可以方便的实现**组件之间数据的共享**。



**使Vuex统—管理状态的好处**：

- 能够在vuex中集中管理共享的数据。易于开发和后期维护
- 能够高效地实现组件之间的数据共享，提高开发效率
- 存储在vuex 中的数据都是**响应式的**，能够**实时保持数据与页面的同步**。



**什么样的数据适合存储到Vuex中**：

一般情况下，只有组件之间共享的数据，才有必要存储到vuex中;

对于组件中的私有数据，依旧存储在组件自身的data中即可。

# 2、VUEX基本使用

## 1.安装vuex

```js
安装依赖包
npm i vuex
------------------------
导入
import vuex from 'vuex'
Vue.use(vuex)
-------------------
创建store对象
const store=new vuex.Store({
    //state 中存放全局共享的数据
    state:{count:0}
})
----------------------
将vuex挂载到vue实例中
new Vue({
    el:'#app',
    ......,
    store
})
```



## 2.  State

State提供唯一的公共数据源，所有共享的数据都要统一放到Store的State中进行存储。

### 2.1 访问state的方式

注意：虽然可以一下的方式可以访问到state中的数据，并且也可以修改，但是vue是<span style="color:red">不推荐组件直接修改vuex中的数据</span>的

```js
第一种方式：
this.$store.state.全局数据名称

第二种方式：
//step1: 从vuex中按需导入mapState函数
import {mapState} from 'vuex'

//step2:通过导入的mapState 函数，将当前组件需要的全局数据，映射为当前组件的computed计算属性
computed:{
    ...mapState(['count']) //此时state中的count就是这个组件的一个计算属性
}
```



## 3. Mutation

注意：<span style="color:red">在 mutations中不能写异步方法</span>.【会导致vuex的调试器无法正常工作】

Mutation用于变更Store中的数据。

- 只能通过mutation变更Store数据，不可以直接操作Store 中的数据。
- 通过这种方式虽然操作起来稍微繁琐一些，但是可以集中监控所有数据的变化。[可以观察到是哪个组件修改了数据]
- **用于执行同步任务**。

```js
//在store中
const store=new vuex.Store({
    state:{count:0},
    mutations:{
        add(state){
            state.count++
        }
    }
})
--------------------------------
//在组件中
methods:{
    fun(){
        this.$store.commit('add')
    }
}
```

### 3.1 调用mutation传递参数

可以在触发mutations时传递参数：

```js
//在store中
const store=new vuex.Store({
    state:{count:0},
    mutations:{
        add1(state,step){
            state.count+=step
        }
    }
})
--------------------------------
//在组件中
methods:{
    fun(){
       // 在调用commit函数，
       //触发mutations时携带参数
        this.$store.commit('add1',3)
    }
}
```

### 3.2 触发mutations的方式

```js
第一种方式：
this.$store.commit('mutations中的方法名')

第二种方式：
//step1: 从vuex中按需导入mapMutations函数
import {mapMutations} from 'vuex'

//step2:通过导入的mapMutations 函数，将当前组件需要的mutations函数，映射为当前组件的methods方法
methods:{
    ...mapMutations(['add','add1']) //此时state中的add方法就是这个组件的一个方法
}

```



## 4. Action

Action用于**执行异步任务**。

如果通过异步操作变更数据，**必须**通过Action，而不能使用Mutation，但是在==Action中还是要通过触发Mutation的方式间接变更数据==。

### 4.1 定义actions中的方法

```js
const store=new vuex.Store({
    state:{count:0},
    
    mutations:{
        add1(state,step){
            state.count+=step
        }
    },
    
    actions:{
        addAsync(context){
            setTimeout(()=>{
                //在actions中，不能直接修改state中的数据;
               // 必须通过context.commit('mutations中方法')触发某个mutation才行
                context.commit('add1',step)
            },1000)
        }
    }
})
```



### 4.2 调用actions传递参数

由组件触发actions时传参给actions方法，再由actions方法传参给mutations方法

```js
const store=new vuex.Store({
    state:{count:0},   
    mutations:{
        add1(state,step){
            state.count+=step
        }
    },
    actions:{
        addAsync(context){
            setTimeout(()=>{
                context.commit('add1',step)
            },1000)
        }
    }
})
----------------
组件中：
methods:{
    fun(){this.$store.dispath('addAsunc',5)}
}

```



### 4.3 触发actions的方式

```js
第一种方式：
this.$store.dispath('actions中的方法名')

第二种方式：
//step1: 从vuex中按需导入mapActions函数
import {mapActions} from 'vuex'

//step2:通过导入的mapActions 函数，将当前组件需要的actions函数，映射为当前组件的methods方法
methods:{
    ...mapActions(['add1']) //此时store中的add1方法就是这个组件的一个方法
}
```



## 5. Getter

Getter用于对Store 中的数据进行**加工处理形成新的数据**【不会修改store中的原数据】。

- Getter可以对Store 中已有的数据加工处理之后形成新的数据，类似Vue的计算属性。
- Store 中数据发生变化，Getter的数据也会跟着变化。

```js
const store=new vuex.Store({
    state:{count:0},   
    getter:{
        showNum:state=>{
            return '当前'+state.count+'.'
        }
    }
})
```

### 5.1 触发getter的方法

```js
第一种方式：
this.$store.getter.方法名

第二种方式：
//step1: 从vuex中按需导入mapGetters函数
import {mapGetters} from 'vuex'

//step2:通过导入的mapGetters 函数，将当前组件需要的getters函数，映射为当前组件的一个计算属性
computed:{
    ...mapGetters(['showNum']) //此时store中的showNum方法就是这个组件的一个计算属性
}
```

