<script lang="ts" setup>
  import { onMounted } from 'vue';
  import { useRouter, useRoute } from 'vue-router';
  const router = useRouter();
  const route = useRoute();
  onMounted(() => {
    const routeData = route.query.Adata;
    console.log(routeData, 'routeData');
  });
  const BCclick = () => {
    router.push({
      name: 'grandson',
      query: {
        dataB: '从B传给C',
      },
    });
  };
</script>
<template>
  <div>
    这是一个链接
    <a>{{ route.query.Adata }}</a>
    <a-button @click="BCclick"> B传C </a-button>
  </div>
</template>

<style lang="scss" scoped></style>
