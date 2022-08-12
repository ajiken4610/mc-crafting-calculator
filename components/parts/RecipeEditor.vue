<template lang="pug">
.p-2.border.rounded
  .input-group
    input.count-input.form-control.flex-grow-0(type="number" min="0" v-model.number="current.count")
    .input-group-text x
    .input-group-text.flex-grow-1 {{id}}
    button.btn.btn-secondary.dropdown-toggle.input-group-text(data-bs-toggle="collapse" :data-bs-target="'#'+uniqueId")
  .collapse.show.m-2(:id="uniqueId")
    TransitionGroup.w-100.position-relative(tag="table" name="list")
      tr.input-group(v-for="(cost) of current.costs" :key="cost.id")
        td.input-group-text
          input.form-control.count-input(type="number" min="0" v-model.number="cost.count")
        td.input-group-text x
        td.input-group-text.flex-grow-1
          input.form-control(v-focus placeholder="id" v-model="cost.id")
        td.input-group-text
          button.btn.btn-danger.h-100(@click="current.costs = current.costs.filter(val=>val!==cost)") X
    button.btn.btn-outline-primary.ms-auto.d-block(@click="current.costs.push({count:1,id:''})") +
</template>

<script setup lang="ts">
import { RecipeData } from "~~/composables/RecipeData";

const props = defineProps<{ id: string; data: RecipeData }>();
const current = reactive(toRef(props.data, props.id));
const uniqueId = "cp-" + Math.random().toString(36).substring(2);
watch(
  current,
  () => {
    saveRecipe(props.id, current.value);
  },
  { deep: true }
);
onUnmounted(() => {
  saveRecipe(props.id, current.value);
});
let loaded = false;
const vFocus = {
  mounted: (el) => loaded && el.focus(),
};
onMounted(() => (loaded = true));
</script>

<style scoped lang="scss">
.count-input {
  width: 4rem !important;
}
.list-move {
  transition: all 0.25s ease;
}

.list-enter-from,
.list-leave-to {
  opacity: 0;
  transform: translateX(20px);
}
.list-enter-active,
.list-leave-active {
  transition: all 0.25s ease;
}
.list-leave-active {
  position: absolute;
}
</style>
