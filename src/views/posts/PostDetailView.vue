<template>
  <AppLoading v-if="loading"></AppLoading>
  <AppError v-else-if="error" :message="error.message"></AppError>
  <div v-else>
    <h2>{{ post.title }}</h2>
    <p>{{ post.content }}</p>

    <p>{{ isOdd }} : {{ idRef }}</p>
    <p class="text-muted">{{ $dayjs(post.createdAt).format('YYYY. MM. DD HH:mm:ss') }}</p>
    <hr class="my-4" />
    <div class="row g-2">
      <div class="col-auto">
        <button class="btn btn-outline-dark" @click="$router.push(`/posts/2`)">이전글</button>
      </div>
      <div class="col-auto">
        <button class="btn btn-outline-dark" @click="$router.push(`/posts/3`)">다음글</button>
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
import { onBeforeRouteLeave, onBeforeRouteUpdate, useRouter } from 'vue-router';
import { useAxios } from '@/composables/useAxios';
import { useAlert } from '@/composables/alert';
import { computed, toRefs } from 'vue';
import { useNumber } from '@/composables/number';

const { vAlert, vSuccess } = useAlert();
const props = defineProps({
  id: (String, Number),
});
// const idRef = toRef(props, 'id');
const { id: idRef } = toRefs(props);
const { isOdd } = useNumber(idRef);
const router = useRouter();
const url = computed(() => `/post/${props.id}`);
const { data, error, loading, response: post } = useAxios(url);
const { execute } = useAxios(
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
/*  ============== 컴포넌트내에 가드 설정  =====================*/
onBeforeRouteUpdate(() => {
  console.log('onBeforeRouteUpdate'); /*router 경로가 변경 되었을때*/
});
onBeforeRouteLeave(() => {
  console.log('onBeforeRouteLeave'); /*페이지를 나갈때 변경 되었을때*/
});
</script>

<script>
export default {
  beforeRouteEnter() {
    console.log('beforeRouteEnter'); /*페이지를 들어오때 호출*/
  },
};
</script>

<style scoped></style>
