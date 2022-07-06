<template>
  <div>
    <h2>Home View</h2>
    <p>{{ position }}</p>
    <p>x :{{ x }}, y :{{ y }}</p>
    <button class="btn btn-primary" @click="goAboutPage">AboutPage로 이동</button>
  </div>
</template>
<script setup>
import { useRoute, useRouter } from 'vue-router';
import { inject, reactive, ref, toRef, toRefs } from 'vue';

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

const position = reactive({
  x: 100,
  y: 1000,
});
// const x = position.x;  // 반응형 X
// const { x, y } = position; // 반응형 X

// const x = ref(position.x); // 반응형 O, 동기화 X
// const y = ref(position.y); // 반응형 O, 동기화 X

const { x, y } = toRefs(position); // 반응형 O, 동기화 O
// const x = toRef(position, 'x'); // 반응형 O, 동기화 O
// const y = toRef(position, 'y'); // 반응형 O, 동기화 O
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
