<template>
  <AppLoading v-if="loading"></AppLoading>
  <AppError v-else-if="error" :message="error.message"></AppError>
  <div v-else>
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
  </div>
</template>
<script setup>
import { useRoute, useRouter } from 'vue-router';
import { useAlert } from '@/composables/alert';
import { useAxios } from '@/composables/useAxios';

const { vAlert, vSuccess } = useAlert();

const route = useRoute();
const router = useRouter();
const id = route.params.id;
const goDetailPage = () => {
  router.push({
    name: 'PostDetail',
    params: { id },
  });
};
const { response: form, loading, error, data } = useAxios(`/post/${id}`);

const { execute } = useAxios(
  `/post/${id}`,
  { method: 'put' },
  {
    immediate: false,
    onSuccess: () => {
      router.push({ name: 'PostDetail', params: { id } });
      vSuccess('수정완료');
    },
    onError: err => {
      vAlert(err.message);
    },
  },
);

const edit = async () => {
  execute({ title: form.value.title, content: form.value.content });
};
</script>
<script>
export default {};
</script>

<style></style>
