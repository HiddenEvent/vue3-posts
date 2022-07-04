export default {
  install(app, options) {
    const person = {
      name: '리차드킴',
      say() {
        alert(this.name);
      },
    };
    /* 일반 템플릿 문법 사용 :  $person.name
     * 스크립트 내에서 사용 시 : this.$person.name
     */
    app.config.globalProperties.$person = person;

    /* setup 훅 사용을 위해 provide에 넣고 사용시 :  inject('person') */
    app.provide('person', person);
  },
};
