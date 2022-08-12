<template lang="pug">
div
  PartsFromView(:id="$props.id")
</template>

<script setup lang="ts">
defineProps<{ id: string }>();
</script>
