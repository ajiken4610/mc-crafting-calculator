<template lang="pug">
.wrapper
  h1 Edit Recipes
  .d-flex
    .ms-auto
      button.btn.btn-success.dropdown-toggle(data-bs-toggle="dropdown") Import
      ul.dropdown-menu
        li.dropdown-item Overwrite
        li.dropdown-item Merge
      button.btn.btn-primary(@click="exportToClipboard") Export
  input.form-control(placeholder="Search...")
  button.btn.btn-outline-primary.w-100(@click="newRecipe") New
  div
    div(v-for="(recipe,key) in recipes" :key="key")
      .float-end.btn-close.m-2(@click="remove(key.toString())")
      PartsRecipeEditor(:id="key.toString()" :data="recipes")
  button.btn.btn-outline-primary.w-100(@click="newRecipe") New
</template>

<script setup lang="ts">
const recipes = ref(useRecipe().value);
const newRecipe = () => {
  const id = prompt("Enter item id to make into.", "item_id");
  if (id) {
    recipes.value = saveRecipe(id, { count: 1, method: "crafting", costs: [] });
  }
};
const remove = (id: string) => {
  recipes.value = removeRecipe(id, recipes.value);
};
const exportToClipboard = () => {
  console.log(JSON.stringify(useRecipe().value));
  navigator.clipboard.writeText(JSON.stringify(useRecipe().value));
};
</script>
<style scoped lang="scss">
.wrapper > :not(:last-child) {
  margin-bottom: 0.25rem;
}
</style>
