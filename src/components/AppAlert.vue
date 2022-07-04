<template>
  <Transition>
    <div v-if="show" class="app-alert alert" :class="styleClass" role="alert">{{ message }}</div>
  </Transition>
</template>

<script setup>
import { computed } from 'vue';

const props = defineProps({
  show: {
    type: Boolean,
    default: false,
  },
  message: {
    type: String,
    required: true,
  },
  type: {
    type: String,
    default: '',
    validator: value => ['success', 'error'].includes(value),
  },
});
const styleClass = computed(() => (props.type === 'error' ? 'alert-danger' : 'alert-success'));
</script>
<script>
export default {};
</script>

<style>
.app-alert {
  position: fixed;
  top: 10px;
  right: 10px;
}
/*Transition 적용*/
.v-enter-active {
  opacity: 0;
}
.v-enter-active {
  transition: opacity 0.5s ease;
}
.v-enter-to {
  opacity: 1;
}
</style>
