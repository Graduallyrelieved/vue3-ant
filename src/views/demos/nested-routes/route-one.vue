<!--
 * @Author: wangkun wangkun@axhome.com.cn
 * @Date: 2022-12-06 13:03:22
 * @LastEditors: wangkun wangkun@axhome.com.cn
 * @LastEditTime: 2022-12-09 11:17:33
 * @FilePath: \apms-accommodation-front\src\views\storeAccounts\storeAccounts.vue
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
-->
<script lang="ts" setup>
  import { reactive } from 'vue';
  import draggable from 'vuedraggable';
  const state = reactive({
    //需要拖拽的数据，拖拽后数据的顺序也会变化
    itemsList: [
      { name: '我是夹月新' },
      { name: '我是加月歆' },
      { name: '我是贾悦歆' },
      { name: '我是贾月新' },
      { name: '我是夹月新1111' },
      { name: '我是夹月新6565' },
      { name: '我是夹月新78787' },
    ],
  });

  //拖拽开始的事件
  const onStart = () => {
    console.log('开始拖拽');
    console.log(state);
  };
  //拖拽结束的事件
  const onEnd = () => {
    console.log('结束拖拽');
  };
</script>
<template>
  <div>
    <draggable
      :list="state.itemsList"
      ghost-class="ghost"
      chosen-class="chosenClass"
      animation="300"
      class="draggable"
      :sort="false"
      @start="onStart"
      @end="onEnd"
    >
      <template #item="{ element }">
        <div class="draggable-div">
          {{ element.name }}
        </div>
      </template>
    </draggable>
  </div>
</template>
<style lang="less" scoped>
  .draggable {
    display: flex;
    flex-wrap: wrap;

    .draggable-div {
      width: 300px;
      height: 100px;
      background-color: rgb(224, 116, 176);
      margin: 10px;
    }
  }
</style>
