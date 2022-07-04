<template>
  <div>
    <h2>게시글 목록</h2>
    <h2>페이지 총 {{ paging.totalPages }} 개</h2>
    <h2>총 {{ paging.totalElements }} 개</h2>
    {{ paging.number }}
    <hr class="my-4" />
    <div class="row g-3">
      <div v-for="post in posts" :key="post.id" class="col-4">
        <PostItem
          :title="post.title"
          :content="post.content"
          :created-at="post.createdAt"
          @click="goPage(post.id)"
        ></PostItem>
      </div>
    </div>
    <nav class="mt-5" aria-label="Page navigation example">
      <ul class="pagination justify-content-center">
        <li class="page-item" :class="{ disabled: paging.first }">
          <a class="page-link" href="#" aria-label="Previous" @click.prevent="--paging.number">
            <span aria-hidden="true">&laquo;</span>
          </a>
        </li>
        <li
          v-for="number in paging.totalPages"
          :key="number"
          :class="{ active: paging.number + 1 === number }"
          class="page-item"
        >
          <a class="page-link" href="#" @click.prevent="paging.number = number - 1">{{ number }}</a>
        </li>
        <li class="page-item" :class="{ disabled: paging.last }">
          <a class="page-link" href="#" aria-label="Next" @click.prevent="++paging.number">
            <span aria-hidden="true">&raquo;</span>
          </a>
        </li>
      </ul>
    </nav>
    <div class="my-4">
      <AppCard>
        <PostDetailView :id="'2'"></PostDetailView>
      </AppCard>
    </div>
  </div>
</template>
<script setup>
import PostItem from '@/components/posts/PostItem.vue';
import PostDetailView from '@/views/posts/PostDetailView.vue';
import { ref, watchEffect } from 'vue';
import { getPosts } from '@/api/posts';
import { useRouter } from 'vue-router';
import AppCard from '@/components/AppCard.vue';
const router = useRouter();
const paging = ref({
  first: false,
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
    const { data } = await getPosts(paging.value.number);
    const page = data.data;
    posts.value = page.content;
    paging.value.totalPages = page.totalPages;
    paging.value.totalElements = page.totalElements;
    paging.value.last = page.last;
    paging.value.first = page.first;
    paging.value.number = page.number;
  } catch (e) {
    console.error(e);
  }
};
watchEffect(fetchPosts);

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
fetchPosts();
</script>
<script>
export default {};
</script>

<style scoped></style>
