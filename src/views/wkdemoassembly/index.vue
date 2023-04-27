<script lang="ts" setup>
  import { computed, provide, reactive, ref } from 'vue';
  import ChildB from './child/childB.vue';
  import ModalB from './child/modalB.vue';
  import ModalC from './child/modalC.vue';
  import { demoData } from '@/store/modules/wkdemo';
  const store = demoData();
  const body = reactive({
    name: '宸薰樱桃,这是我A组件传给B组件的值',
  });
  const visible = ref(false);
  const pageData = reactive({
    visibleAC: false,
    data: '这是Provide传的值',
  });
  const btnClick = () => {
    // 一般情况下父子组件适用props，emit，子组件中改变props属性的值，不会影响父组件。父组件中的改变会影响子组件。
    visible.value = true;
  };
  const closevisible = (val: boolean) => {
    visible.value = val;
  };
  const btnClickC = () => {
    // 通过vue3 pinia进行传值
    store.status = true;
  };
  // 修改状态时计算参数的变化需要computed
  provide(
    'visibleAC',
    computed(() => pageData),
  );
  const clickProvide = () => {
    pageData.visibleAC = true;
  };
</script>
<template>
  <div>
    <div>组件A <p>---------美丽的分割线--------</p> </div>
    <a-button @click="btnClick">打开B组件弹窗</a-button>
    <a-button @click="btnClickC">打开C组件弹窗</a-button>
    <a-button @click="clickProvide">打开C组件弹窗使用provide</a-button>
    <ChildB :body="body"></ChildB>

    <ModalB :visible="visible" :body="body" @closevisible="closevisible"></ModalB>
    <ModalC></ModalC>
  </div>
</template>

<style lang="scss" scoped></style>
