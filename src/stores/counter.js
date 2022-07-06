import { defineStore } from 'pinia';

// 매개변수1 : 어플리케이션 전체에서 고유키값
// 매개변수2 : 옵션정의
/*
 * state 부분: 컴포넌트의 상태
 * state 부분: 컴포넌트의 컴퓨티드 역할
 * actions 부분 : 컴포넌트의 메서드 역할
 * */
export const useCounterStore = defineStore('counter', {
  state: () => ({
    counter: 1,
  }),
  getters: {
    doubleCount: state => state.counter * 2,
    /* this 사용하기 위해  함수로 작성*/
    doubleCountPlusOne() {
      return this.doubleCount + 1;
    },
  },
  actions: {
    /* 화살표 함수로 정의하면 this를 인식하지 못한다. 화살표 함수 ㄴㄴ*/
    increment() {
      this.counter++;
    },
  },
});
