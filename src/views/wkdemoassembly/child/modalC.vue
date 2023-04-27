<script lang="ts" setup>
  import { inject } from 'vue';
  import { demoData } from '@/store/modules/wkdemo';
  const store = demoData();
  console.log(store, 'store');

  const props = defineProps({
    visiblecData: Boolean,
    valueC: String,
  });
  const emits = defineEmits(['chervisible']);
  const close = () => {
    emits('chervisible', false);
  };
  const closeStore = () => {
    store.status = false;
  };
  const her = inject('visibleAC');
  const closeProvide = () => {};
</script>
<template>
  <div>
    <a-modal title="C组件使用props" :visible="props.visiblecData" @cancel="close">
      <div>
        {{ props.valueC }}
      </div></a-modal
    >
    <a-modal title="C组件使用store" :visible="store.status" @cancel="closeStore">
      <div>
        A组件直接打开C组件
        <p> 这是store传的值</p>
        {{ store.name }}
      </div></a-modal
    >
    <a-modal title="C组件使用注入传值" :visible="her.visibleAC" @cancel="closeProvide">
      <div>
        A组件直接打开C组件
        <p> {{ her.data }}</p>
      </div></a-modal
    >
  </div>
</template>

<style lang="scss" scoped></style>
