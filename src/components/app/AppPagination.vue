<template>
  <nav class="mt-5" aria-label="Page navigation example">
    <ul class="pagination justify-content-center">
      <li class="page-item" :class="{ disabled: isFirst }">
        <a class="page-link" href="#" aria-label="Previous" @click.prevent="$emit('page', currentPage - 1)">
          <span aria-hidden="true">&laquo;</span>
        </a>
      </li>
      <li v-for="number in pageCount" :key="number" :class="{ active: currentPage + 1 === number }" class="page-item">
        <a class="page-link" href="#" @click.prevent="$emit('page', number - 1)">{{ number }}</a>
      </li>
      <li class="page-item" :class="{ disabled: isLast }">
        <a class="page-link" href="#" aria-label="Next" @click.prevent="$emit('page', currentPage + 1)">
          <span aria-hidden="true">&raquo;</span>
        </a>
      </li>
    </ul>
  </nav>
</template>
<script setup>
let props = defineProps({
  currentPage: {
    type: Number,
    required: true,
  },
  pageCount: {
    type: Number,
    required: true,
  },
  isFirst: {
    type: Boolean,
    required: true,
  },
  isLast: {
    type: Boolean,
    required: true,
  },
});
defineEmits(['page']);
</script>
<script>
export default {};
</script>

<style scoped></style>
