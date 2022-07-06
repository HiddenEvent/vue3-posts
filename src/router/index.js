import { createRouter, createWebHistory } from 'vue-router';
import HomeView from '@/views/HomeView.vue';
import AboutView from '@/views/AboutView.vue';
import postListView from '@/views/posts/PostListView.vue';
import PostDetailView from '@/views/posts/PostDetailView.vue';
import PostCreateView from '@/views/posts/PostCreateView.vue';
import PostEditView from '@/views/posts/PostEditView.vue';
import NotFoundView from '@/views/NotFoundView.vue';
import NestedView from '@/views/nested/NestedView.vue';
import NestedOneView from '@/views/nested/NestedOneView.vue';
import NestedTwoView from '@/views/nested/NestedTwoView.vue';
import NestedHomeView from '@/views/nested/NestedHomeView.vue';
import MyPage from '@/views/MyPage.vue';

const routes = [
  {
    path: '/',
    name: 'Home',
    component: HomeView,
  },
  {
    path: '/about',
    name: 'About',
    component: AboutView,
  },
  {
    path: '/posts',
    name: 'PostList',
    component: postListView,
  },
  {
    path: '/posts/:id',
    name: 'PostDetail',
    component: PostDetailView,
    props: true,
    // props: route => ({ id: parseInt(route.params.id) }),
  },
  {
    path: '/posts/create',
    name: 'PostCreate',
    component: PostCreateView,
  },
  {
    path: '/posts/:id/edit',
    name: 'PostEdit',
    component: PostEditView,
  },
  {
    path: '/:pathMatch(.*)*',
    name: 'NotFound',
    component: NotFoundView,
  },
  {
    path: '/my',
    name: 'MyPage',
    component: MyPage,
    /*  ============== 지역가드 설정 (Global Before Guards) =====================*/
    beforeEnter: (to, from) => {
      // console.log('to 이동할 페이지 : ', to);
      // console.log('from 이동하기전 페이지 : ', from);
      // return false;
      // return '/posts';
      // return router.push({ name: 'Home' });
      console.log(to.query);
      if (Object.keys(to.query).length > 0) {
        /*queryString 삭제*/
        return { path: to.path, query: {} };
      }
    },
  },
  {
    path: '/nested',
    name: 'Nested',
    component: NestedView,
    children: [
      {
        // /nested
        path: '',
        name: 'NestedHome',
        component: NestedHomeView,
      },
      {
        // /nested/one
        path: 'one',
        name: 'NestedOne',
        component: NestedOneView,
      },
      {
        // /nested/two
        path: 'two',
        name: 'NestedTwo',
        component: NestedTwoView,
      },
    ],
  },
];
const router = createRouter({
  /*createWebHistory: 히스토리 모드로 동작*/
  history: createWebHistory('/'),
  /*createWebHashHistory: #이 붙는 url이 자동생성 된다.*/
  /*seo에 최적화가 매우 나쁨.. 사용하지 말자..*/
  // history: createWebHashHistory(),
  routes,
});

// ============== 전역가드 설정 (Global Before Guards) =====================
/*
 * return 값
 * - undefined / true =>  반환되면 해당 네비게이션 가드가 검증이 된것으로 판단
 * - false => 현재 라우팅(네비게이션)을 취소합니다.
 * */
// router.beforeEach((to, from) => {
//   console.log('to 이동할 페이지 : ', to);
//   console.log('from 이동하기전 페이지 : ', from);
//   if (to.name === 'MyPage') {
//     // return false;
//     // return '/posts';
//     // return router.push({ name: 'Home' });
//   }
// });
// /*=========================================================================*/
export default router;
