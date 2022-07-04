<script setup>
import TheHeader from '@/layout/TheHeader.vue';
import TheView from '@/layout/TheView.vue';
import { useAlert } from '@/composables/alert';
const { alerts } = useAlert();
</script>

<template>
  <TheHeader></TheHeader>

  <TheView></TheView>

  <AppAlert :items="alerts" />
</template>

<style></style>
