<template>
  <AppLoading v-if="loading"></AppLoading>
  <AppError v-else-if="error" :message="error.message"></AppError>
  <div v-else>
    <h2>{{ post.title }}</h2>
    <p>{{ post.content }}</p>
    <p class="text-muted">{{ $dayjs(post.createdAt).format('YYYY. MM. DD HH:mm:ss') }}</p>
    <hr class="my-4" />
    <div class="row g-2">
      <div class="col-auto">
        <button class="btn btn-outline-dark">이전글</button>
      </div>
      <div class="col-auto">
        <button class="btn btn-outline-dark">다음글</button>
      </div>
      <div class="col-auto me-auto"></div>
      <div class="col-auto">
        <button class="btn btn-outline-dark" @click="goListPage">목록</button>
      </div>
      <div class="col-auto">
        <button class="btn btn-outline-primary" @click="goEditPage">수정</button>
      </div>
      <div class="col-auto">
        <button class="btn btn-outline-danger" @click="remove">삭제</button>
      </div>
    </div>
  </div>
</template>
<script setup>
import { useRouter } from 'vue-router';
import { useAxios } from '@/composables/useAxios';
import { useAlert } from '@/composables/alert';
const { vAlert, vSuccess } = useAlert();
const props = defineProps({
  id: (String, Number),
});

const router = useRouter();

const { data, error, loading, response: post } = useAxios(`/post/${props.id}`);
const {
  execute,
  error: removeError,
  loading: removeLoading,
} = useAxios(
  `/post/${props.id}`,
  { method: 'delete' },
  {
    immediate: false,
    onSuccess: () => {
      vSuccess('삭제가 완료되었습니다.');
      router.push({ name: 'PostList' });
    },
    onError: err => {
      vAlert(err.message);
    },
  },
);
const remove = async () => {
  if (confirm('삭제 하시겠습니까?') === false) {
    return false;
  }
  execute();
};

const goListPage = () => {
  router.push({
    name: 'PostList',
  });
};
const goEditPage = () => {
  router.push({
    name: 'PostEdit',
    params: {
      id: props.id,
    },
  });
};
</script>
<script>
export default {};
</script>

<style scoped></style>
