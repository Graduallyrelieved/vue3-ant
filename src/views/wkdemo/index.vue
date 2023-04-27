<script lang="ts" setup>
  import { onMounted, ref } from 'vue';
  import { useRouter, useRoute } from 'vue-router';
  const router = useRouter();
  const route = useRoute();
  const ABclick = () => {
    router.push({
      name: 'child1',
      query: {
        Adata: inputValue.value,
      },
    });
  };
  const Acclick = () => {
    router.push({
      name: 'grandson',
    });
  };
  const inputValue = ref('');
  onMounted(() => {
    if (route.query.temp) {
      const temp = route.query.temp;
      inputValue.value = temp;
    }
  });
</script>

<template>
  <div>
    <a-button @click="ABclick">A页面传值到B</a-button>
    <a-button @click="Acclick">A页面传值到c</a-button>
    <a-input v-model:value="inputValue"></a-input>
    <p>{{ inputValue }}</p>
  </div>
</template>

<style lang="scss" scoped></style>
