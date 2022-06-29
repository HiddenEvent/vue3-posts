<template>
  <div>
    <h2>Home View</h2>
    <p>{{ $route.path }}</p>
    <p>{{ $route.name }}</p>
    <button class="btn btn-primary" @click="goAboutPage">AboutPage로 이동</button>
  </div>
</template>
<script setup>
import { useRoute, useRouter } from 'vue-router';

const route = useRoute();
console.log('route.path : ', route.path);
const router = useRouter();
const goAboutPage = () => {
  router.push({
    name: 'About',
  });
};
</script>
<script>
export default {};
</script>

<style scoped></style>
