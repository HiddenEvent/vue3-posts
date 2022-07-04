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
import { inject } from 'vue';

const person = inject('person');
console.log(person);

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
// plugins 객체 가져올 경우 setup 훅안에서는 사용 못해서 일반 script태그에서 사용해야됨
// export default {
//   created() {
//     console.log(this.$person.name);
//   },
// };
</script>

<style scoped></style>
