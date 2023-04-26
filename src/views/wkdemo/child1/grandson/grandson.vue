<script lang="ts" setup>
  import { onBeforeRouteLeave, useRoute } from 'vue-router';
  const route = useRoute();
  onBeforeRouteLeave((to, from, next) => {
    //
    if (to.name == 'wkdemo') {
      to.query.temp = 'c回传到A';
    }
    next();
  });
</script>
<template>
  <div> 这是c页面 {{ route.query.dataB }}</div>
</template>

<style lang="scss" scoped></style>
