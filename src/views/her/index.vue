<script lang="ts" setup>
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
</script>
<template>
  <div>dd</div>
</template>
<style lang="less"></style>
