<template>
  <div>
    <h2>게시글 등록</h2>
    <hr class="my-4" />
    <div class="mb-3">
      <label for="title" class="form-label">제목</label>
      <input v-model="form.title" type="email" class="form-control" id="title" />
    </div>
    <div class="mb-3">
      <label for="content" class="form-label">내용</label>
      <textarea v-model="form.content" class="form-control" id="content" rows="3"></textarea>
    </div>
    <div class="pt-4">
      <button type="button" class="btn btn-outline-dark me-2" @click="goListPage">목록</button>
      <button class="btn btn-primary" @click="save">저장</button>
    </div>
  </div>
</template>
<script setup>
import { useRouter } from 'vue-router';
import { ref } from 'vue';
import { createPost } from '@/api/posts';
const router = useRouter();
const form = ref({
  title: null,
  content: null,
});
const save = () => {
  try {
    const data = {
      ...form.value,
      createAt: Date.now(),
    };
    createPost(data);
    router.push({ name: 'PostList' });
  } catch (e) {
    console.error(e);
  }
};

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
