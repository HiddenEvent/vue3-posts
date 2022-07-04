<template>
  <div>
    <h2>게시글 수정</h2>
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
      <button type="button" class="btn btn-outline-danger me-2" @click="goDetailPage">취소</button>
      <button class="btn btn-primary" @click="edit">수정</button>
    </div>
    <AppAlert :show="showAlert" :message="alertMessage" :type="alertType" />
  </div>
</template>
<script setup>
import { useRoute, useRouter } from 'vue-router';
import { getPostById, updatePost } from '@/api/posts';
import { ref } from 'vue';

const route = useRoute();
const router = useRouter();
const id = route.params.id;
const goDetailPage = () => {
  router.push({
    name: 'PostDetail',
    params: { id },
  });
};

const form = ref({
  title: null,
  content: null,
});

const fetchPost = async () => {
  try {
    const { data } = await getPostById(id);
    setForm(data.data);
  } catch (e) {
    console.log(e);
  }
};
const setForm = ({ title, content }) => {
  form.value.title = title;
  form.value.content = content;
};
fetchPost();
const edit = async () => {
  try {
    await updatePost(id, { ...form.value });
    // router.push({ name: 'PostDetail', params: { id } });
    vAlert('수정완료', 'success');
  } catch (e) {
    console.log(e);
    vAlert('네트워크 오류');
  }
};
//alert
const showAlert = ref(false);
const alertMessage = ref('');
const alertType = ref('error');
const vAlert = (message, type = 'error') => {
  showAlert.value = true;
  alertMessage.value = message;
  alertType.value = type;
  setTimeout(() => {
    showAlert.value = false;
  }, 2000);
};
</script>
<script>
export default {};
</script>

<style></style>
