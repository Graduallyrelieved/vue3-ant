<script lang="ts" setup>
  import { object } from 'vue-types';

  const props = defineProps({
    body: Object,
  });
  console.log(props.body);
</script>
<template>
  <div style="">
    <div>---------这是B组件--------</div>
    <span>{{ props.body.name }}</span></div
  >
</template>

<style lang="scss" scoped></style>
