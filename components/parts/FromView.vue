<template lang="pug">
.dropdown-toggle(data-bs-toggle="collapse" :data-bs-target="'#'+uniqueId") {{recipes[id].count * count}} x {{id}}
.collapse.show.ms-1.ps-1.border-start.border-bottom(:id="uniqueId")
  template(v-for="item in recipes[id].costs")
    FromView(v-if="recipes[item.id]" :id="item.id",:count="Math.ceil(count*item.count/recipes[id].count)")
    div(v-else) {{Math.ceil(count*item.count/recipes[id].count)}} x {{item.id}}
</template>

<script setup lang="ts">
withDefaults(defineProps<{ id: string; count?: number }>(), { count: 1 });

const uniqueId = "cp-" + Math.random().toString(36).substring(2);
const recipes = useRecipe();
</script>
