<script lang="ts" setup>
  import { ref } from 'vue';
  import modalC from './modalC.vue';
  const props = defineProps({
    visible: Boolean,
    body: Object,
  });
  console.log(props.visible);
  const emits = defineEmits(['closevisible']);
  const close = () => {
    emits('closevisible', false);
  };
  const valueC = ref('白发传给C的组件');
  const visibleC = ref(false);
  const btnClickb = () => {
    visibleC.value = true;
  };
  const chervisible = (val) => {
    visibleC.value = val;
  };
</script>
<template>
  <div>
    <a-modal title="这是B组件弹窗" :visible="props.visible" @cancel="close">
      <div>
        <p>{{ props.body.name }}</p>
      </div>
      <a-button @click="btnClickb">打开组件C弹窗</a-button>
    </a-modal>
    <modalC :visiblec-data="visibleC" :value-c="valueC" @chervisible="chervisible"></modalC>
  </div>
</template>

<style lang="scss" scoped></style>
