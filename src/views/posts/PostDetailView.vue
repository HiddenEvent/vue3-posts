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
import { deletePost, getPostById } from '@/api/posts';
import { ref } from 'vue';

const props = defineProps({
  id: (String, Number),
});
const error = ref(null);
const loading = ref(false);

const router = useRouter();
// const route = useRoute();
// const id = route.params.id;
const post = ref({
  title: null,
  content: null,
});
const fetchPost = async () => {
  try {
    loading.value = true;
    const { data } = await getPostById(props.id);
    setPost(data.data);
  } catch (e) {
    error.value = e;
  } finally {
    loading.value = false;
  }
};
const setPost = ({ title, content }) => {
  post.value.title = title;
  post.value.content = content;
};
fetchPost();
const remove = async () => {
  if (confirm('삭제 하시겠습니까?') === false) {
    return false;
  }
  try {
    const { data } = await deletePost(props.id);
    alert(data.msg);
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
