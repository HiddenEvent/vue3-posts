<template>
  <form>
    <div class="mb-3">
      <label for="title" class="form-label">제목</label>
      <input
        v-focus
        v-color="'blue'"
        :value="title"
        @input="$emit('update:title', $event.target.value)"
        class="form-control"
        id="title"
      />
    </div>
    <div class="mb-3">
      <label for="content" class="form-label">내용</label>
      <textarea
        :value="content"
        @input="$emit('update:content', $event.target.value)"
        class="form-control"
        id="content"
        rows="3"
      ></textarea>
    </div>
    <slot name="actions"></slot>
  </form>
</template>
<script setup>
defineProps({
  title: String,
  content: String,
});
defineEmits(['update:title', 'update:content']);
</script>
<script>
export default {};
</script>

<style scoped></style>
