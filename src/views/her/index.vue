<script lang="ts" setup>
  import { onMounted } from 'vue';
  // import chapter from './chapter';
  const obj = {
    name: '小明',
    age: '12',
  };
  const keys = Object.keys(obj);
  for (let i = 0; i < keys.length; i++) {
    // console.log(obj[keys[i]]);
  }

  const arr = ['01', '02', '03'];
  for (let i = 0; i < arr.length; i++) {
    console.log(arr[i], JSON.parse(JSON.stringify(arr)), 'ooooooo');
    if (arr[i] == '02') {
      arr.push('04');
    }
  }
  onMounted(() => {
    // chapter('XXX专用章', 'XXX科技股份有限公司');
  });
</script>
<template>
  <div>
    <p>电子印章</p>
    <canvas id="canvas" width="200" height="200"></canvas>
  </div>
</template>
<style lang="less"></style>
