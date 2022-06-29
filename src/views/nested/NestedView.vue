<template>
  <div>
    <ul class="nav">
      <li class="nav-item">
        <RouterLink class="nav-link" active-class="active" to="/nested/one"> Nested One </RouterLink>
      </li>
      <li class="nav-item">
        <RouterLink class="nav-link" active-class="active" to="/nested/two"> Nested Two </RouterLink>
      </li>
    </ul>
    <hr class="my-4" />
    <RouterView></RouterView>
  </div>
</template>
<script setup></script>
<script>
export default {};
</script>

<style scoped></style>
