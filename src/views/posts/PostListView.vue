<template>
  <div>
    <h2>게시글 목록</h2>
    <h2>페이지 총 {{ paging.totalPages }} 개</h2>
    <h2>총 {{ paging.totalElements }} 개</h2>
    {{ paging.number }}
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
          ></PostItem>
        </template>
      </AppGrid>
    </template>
    <AppPagination
      :is-last="paging.last"
      :is-first="paging.first"
      :page-count="paging.totalPages"
      :current-page="paging.number"
      @page="page => (paging.number = page)"
    />
    <template v-if="posts && posts.length > 0">
      <hr class="my-5" />
      <AppCard>
        <PostDetailView :id="posts[0].id"></PostDetailView>
      </AppCard>
    </template>
  </div>
</template>
<script setup>
import PostItem from '@/components/posts/PostItem.vue';
import PostDetailView from '@/views/posts/PostDetailView.vue';
import { ref, watchEffect } from 'vue';
import { getPosts } from '@/api/posts';
import { useRouter } from 'vue-router';
const error = ref(null);
const loading = ref(false);
const router = useRouter();
const paging = ref({
  first: true,
  empty: false,
  last: false,
  totalPages: 0,
  totalElements: 0,
  size: 0,
  number: 0,
  numberOfElements: 0,
});
const posts = ref([]);

const fetchPosts = async () => {
  try {
    loading.value = true;
    const { data } = await getPosts(paging.value.number);
    const page = data.data;
    posts.value = page.content;
    paging.value.totalPages = page.totalPages;
    paging.value.totalElements = page.totalElements;
    paging.value.last = page.last;
    paging.value.first = page.first;
  } catch (e) {
    error.value = e;
  } finally {
    loading.value = false;
  }
};
// fetchPosts();
watchEffect(fetchPosts); /* 초기 1회 실행 한다.*/

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
