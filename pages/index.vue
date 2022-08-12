<template lang="pug">
div
  NuxtLink.float-end(to="recipes") Edit recipe
  h1 Minecraft Crafting Calculator
  PartsVSelect.mb-4(placeholder="Select to calculate" :options="Object.keys(useRecipe().value)" v-model="calItem")
    template(#no-options)
      | No match
  ul.nav.nav-tabs.mb-2
    li.nav-item
      NuxtLink.nav-link(to="/from" activeClass="active") From
    li.nav-item
      NuxtLink.nav-link(to="/to" activeClass="active") To
  NuxtPage(:id="calItem" v-if="calItem")
</template>

<script setup lang="ts">
const calItem = ref("ultimate_hybrid_solar");
</script>
