<template>
  <TodoInput @add="onAddNewTask"></TodoInput>
  <TodoList :list="tasklist" class="mt-2"></TodoList>
  <TodoButton v-model:active="activeBtnIndex"></TodoButton>
</template>

<script>
import TodoList from './components/TodoList.vue'
import TodoInput from './components/TodoInput.vue'
import TodoButton from './components/TodoButton.vue'


export default {
  name: 'Myapp',
  data() {
    return {
      todolist: [
        { id: 1, task: '周一9点开会', done: false },
        { id: 2, task: '周二8点吃饭', done: false },
        { id: 3, task: '周三14点演讲', done: true },
      ],
      nextId:4,
      activeBtnIndex:0
    }
  },
  computed:{
    tasklist(){
      switch(this.activeBtnIndex){
        case 0:return this.todolist;
        case 1:return this.todolist.filter(x=>x.done==true)
        case 2:return this.todolist.filter(x=>x.done!=true)
      }
    }
  },
  components: {
    TodoList,
    TodoInput,
    TodoButton
  },
  methods:{
    onAddNewTask(taskname){
      console.log(taskname);
        this.todolist.push({
          id:this.nextId,
          task:taskname,
          done:false
        })
        this.nextId++
    }
  }
}
</script>

<style lang="less" scoped>

</style>