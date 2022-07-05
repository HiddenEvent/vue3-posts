<template>
  <div>
    <h2>게시글 등록</h2>
    <hr class="my-4" />
    <AppError v-if="error" :message="error.message"></AppError>
    <PostForm v-model:title="form.title" v-model:content="form.content" @submit.prevent="save">
      <template #actions>
        <div class="pt-4">
          <button type="button" class="btn btn-outline-dark me-2" @click="goListPage">목록</button>
          <!--          <button class="btn btn-primary" @click="save">저장</button>-->
          <button class="btn btn-primary" :disabled="loading">
            <template v-if="loading">
              <span class="spinner-border spinner-border-sm" role="status" aria-hidden="true"></span>
              <span class="visually-hidden">Loading...</span>
            </template>
            <template v-else> 저장 </template>
          </button>
        </div>
      </template>
    </PostForm>
  </div>
</template>
<script setup>
import { useRouter } from 'vue-router';
import { ref } from 'vue';
import PostForm from '@/components/posts/PostForm.vue';
import { useAlert } from '@/composables/alert';
import { useAxios } from '@/composables/useAxios';

const { vAlert, vSuccess } = useAlert();

const router = useRouter();
const form = ref({
  title: null,
  content: null,
});

const { error, loading, execute } = useAxios(
  '/post',
  {
    method: 'post',
  },
  {
    immediate: false /* immediate: false = axios를 바로 호출하지 않고 나중에 실행하기 위함*/,
    onSuccess: () => {
      router.push({ name: 'PostList' });
      vSuccess('등록이 완료되었습니다.');
    },
    onError: err => {
      vAlert(err.message);
    },
  },
);

const save = async () => {
  execute({ ...form.value, createAt: Date.now() });
};
const goListPage = () => {
  router.push({ name: 'PostList' });
};
</script>
<script>
export default {};
</script>

<style scoped></style>
