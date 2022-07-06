<template>
  <AppCard>
    <h5 class="card-title">{{ title }}</h5>
    <p class="card-text">{{ content }}</p>
    <p class="text-muted">{{ createdAt }}</p>
    <button @click.stop="$emit('preview')">
      <i class="bi bi-app"></i>
    </button>
  </AppCard>
</template>
<script setup>
defineProps({
  title: {
    type: String,
    required: true,
  },
  content: {
    type: String,
  },
  createdAt: {
    type: [String, Date, Number],
  },
});
defineEmits(['preview']);
</script>
<script>
export default {};
</script>

<style scoped></style>
