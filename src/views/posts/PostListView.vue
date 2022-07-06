<template>
  <div>
    <h2>게시글 목록</h2>
    <!--    <h2>페이지 총 {{ paging.totalPages }} 개</h2>-->
    <!--    <h2>총 {{ paging.totalElements }} 개</h2>-->
    <!--    {{ params.number }}-->
    <hr class="my-4" />
    <AppLoading v-if="loading"></AppLoading>
    <AppError v-else-if="error" :message="error.message"></AppError>
    <template v-else>
      <AppGrid :items="posts">
        <template v-slot="{ item }">
          <PostItem
            :title="item.title"
            :content="item.content"
            :created-at="item.createdAt"
            @click="goPage(item.id)"
            @preview="selectPreview(item.id)"
          ></PostItem>
        </template>
      </AppGrid>
      <AppPagination
        :is-last="paging.last"
        :is-first="paging.first"
        :page-count="paging.totalPages"
        :current-page="params.number"
        @page="page => (params.number = page)"
      />
      <template v-if="previewId">
        <hr class="my-5" />
        <AppCard>
          <PostDetailView :id="previewId"></PostDetailView>
        </AppCard>
      </template>
    </template>
  </div>
</template>
<script setup>
import PostDetailView from '@/views/posts/PostDetailView.vue';
import { computed, ref } from 'vue';
import { useRouter } from 'vue-router';
import { useAxios } from '@/composables/useAxios';
const previewId = ref(null);
const selectPreview = id => (previewId.value = id);
const router = useRouter();
const params = ref({
  number: 0,
});
// const paging = ref({
//   first: true,
//   last: false,
//   totalPages: 0,
//   totalElements: 0,
// });
const { response: paging, data: posts, error, loading } = useAxios('/post', { params });
// const totalPages = computed(() => response.value.totalPages);

const goPage = id => {
  // router.push(`/posts/${id}`);
  // http://localhost:3000/posts/1?searchText=hello#world!
  router.push({
    name: 'PostDetail',
    params: {
      id,
    },
    query: {
      searchText: 'hello',
    },
    hash: '#world!',
  });
};
</script>
<script>
export default {};
</script>

<style scoped></style>
