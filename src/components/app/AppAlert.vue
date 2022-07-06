<template>
  <!--  <Transition>
    <div v-if="show" class="app-alert alert" :class="styleClass" role="alert">{{ message }}</div>
  </Transition>-->
  <div class="app-alert">
    <div v-for="({ message, type }, index) in alerts" :key="index" class="alert" :class="typeStyle(type)" role="alert">
      {{ message }}
    </div>
  </div>
</template>

<script setup>
import { useAlert } from '@/composables/alert';

const { alerts } = useAlert();

const typeStyle = type => (type === 'error' ? 'alert-danger' : 'alert-success');
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
