<script setup lang="ts">
import { computed, ref } from "vue";
import { searchSuggestion } from "@/consts/seggestion";

const search = ref("");
const suggestions = computed(() => {
  const s = searchSuggestion
    .filter((s) => s.includes(search.value.toLowerCase()))
    .slice(0, 3);
  if (search.value.length === 0 || s.length === 0 || s[0] === search.value) {
    return [];
  }
  return s;
});

const handleSubmit = (data) => {
  window.location.href = `/buscar/${data.search}`
};
</script>

<template>
  <div class="relative">
    <FormKit
      id="form_1"
      @submit="handleSubmit"
      type="form"
      submit-label="Buscar"
      incomplete-message="Error, revisa lo que estás enviando al formulario"
    >
      <FormKit
        type="search"
        name="search"
        v-model="search"
        placeholder="Buscar aquí..."
        autocomplete="off"
        prefixIcon="ri-search-line"
      />
      <template #actions>
        <button type="submit" class="absolute right-0 p-2 px-4 bg-orange-500 hover:bg-orange-600 text-neutral-50 border border-orange-500 hover:border-orange-600 rounded-r-md">
          <i class="ri-search-line"></i>
        </button>
      </template>
    </FormKit>
    <div
      v-if="suggestions.length > 0"
      class="absolute top-12 rounded-md flex flex-col bg-neutral-50 shadow-md p-2 text-neutral-600 dark:text-neutral-300 dark:hover:text-neutral-200 dark:bg-neutral-700"
    >
      <button
        v-for="s in suggestions"
        :key="s"
        class="w-full text-left text-ellipsis overflow-hidden text-nowrap hover:text-neutral-800 dark:hover:text-neutral-100 p-2 px-4 rounded-md hover:bg-neutral-200 dark:hover:bg-neutral-600"
        @click="search = s"
        type="button"
      >
        {{ s }}
      </button>
    </div>
  </div>
</template>

<style scoped>
.formkit-form {
  display: flex;
  align-items: center;
}
.formkit-outer {
  min-width: 4rem;
  margin-bottom: 0px;
}
@media screen and (min-width: 640px) {
  .formkit-outer {
    min-width: 24rem;
  }
}
</style>
