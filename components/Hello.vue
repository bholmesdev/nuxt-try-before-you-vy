<script setup>
const { data, refresh, pending } = await useAsyncData('/api/hello', () => $fetch('/api/hello'), {server: false});
</script>

<template>
  <IconsSpinner v-if="pending" />
  {{data?.api}}
</template>

