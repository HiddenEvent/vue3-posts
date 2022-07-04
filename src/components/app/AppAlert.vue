<template>
  <!--  <Transition>
    <div v-if="show" class="app-alert alert" :class="styleClass" role="alert">{{ message }}</div>
  </Transition>-->
  <div class="app-alert">
    <div v-for="({ message, type }, index) in items" :key="index" class="alert" :class="typeStyle(type)" role="alert">
      {{ message }}
    </div>
  </div>
</template>

<script setup>
defineProps({
  items: Array,
});
const typeStyle = type => (type === 'error' ? 'alert-danger' : 'alert-success');

// const props = defineProps({
//   show: {
//     type: Boolean,
//     default: false,
//   },
//   message: {
//     type: String,
//     required: true,
//   },
//   type: {
//     type: String,
//     default: '',
//     validator: value => ['success', 'error'].includes(value),
//   },
// });
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
