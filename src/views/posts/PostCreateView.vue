<template>
  <div>
    <h2>게시글 등록</h2>
    <hr class="my-4" />
    <div class="mb-3">
      <label for="exampleFormControlInput1" class="form-label">제목</label>
      <input type="email" class="form-control" id="exampleFormControlInput1" placeholder="name@example.com" />
    </div>
    <div class="mb-3">
      <label for="exampleFormControlTextarea1" class="form-label">내용</label>
      <textarea class="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>
    </div>
    <div class="pt-4">
      <button type="button" class="btn btn-outline-dark me-2" @click="goListPage">목록</button>
      <button class="btn btn-primary">저장</button>
    </div>
  </div>
</template>
<script setup>
import { useRouter } from 'vue-router';

const router = useRouter();
const goListPage = () => {
  router.push({
    name: 'PostList',
  });
};
</script>
<script>
export default {};
</script>

<style scoped></style>
