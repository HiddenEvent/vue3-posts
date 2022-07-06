<template>
  <div>
    <h2>About View</h2>
    <p>{{ $route.path }}</p>
    <p>{{ $route.name }}</p>
    <button class="btn btn-primary" @click="$router.push('/')">Home으로 이동</button>
    <h2>Store 테스트</h2>
    <p>counter: {{ counter }}</p>
    <p>doubleCount: {{ doubleCount }}</p>
    <p>doubleCountPlusOne: {{ doubleCountPlusOne }}</p>
    <button @click="increment">증가</button>
  </div>
</template>
<script setup>
import { useRoute } from 'vue-router';
import { useCounterStore } from '@/stores/counter';
import { storeToRefs } from 'pinia';

const route = useRoute();
console.log('route.path : ', route.path);

//store
const store = useCounterStore();
const { counter, doubleCount, doubleCountPlusOne } = storeToRefs(store); /* store 반응형으로 구조분해 할당*/
const { increment } = store;
increment();
</script>
<script>
export default {};
</script>

<style scoped></style>
