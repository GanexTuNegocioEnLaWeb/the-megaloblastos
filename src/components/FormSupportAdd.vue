<script setup lang="ts">
import { ref, computed } from "vue";
import { materias } from "@/consts/db";
import Cookie from "js-cookie";

const theSupportMaterial = ref({
  type: "",
  url: "",
  year: 0,
  materia: "",
  docente: "",
  partial: 0
});

// filtrar materia según año seleccionado
const materiasFiltradasByYear = computed(() => {
  return materias.filter((m) => m.year == theSupportMaterial.value.year);
});

// filtrar docente segun la materia y el año seleccionados
const docentesFiltrados = computed(() => {
  const materiaSeleccionada = theSupportMaterial.value.materia
    ? materias.find(
        (materia) => `${materia.name}` == theSupportMaterial.value.materia
      )
    : null;
  
    if (materiaSeleccionada?.name == "Cirugía 2") {
      return [
        {
          name: "Viruez Soleto Erwin",
        },
      ]
    }

    if (materiaSeleccionada?.name == "Cirugía 3") {
      return [
        {
          name: "Jorge Fernando Aparicio",
        }
      ]
    }

    return materiaSeleccionada ? materiaSeleccionada.docentes : [];
});

// ver si la materia no es multigrupo
const isMultigrupo = computed(() => {
  const materiaIsMultigrupo = materiasFiltradasByYear.value.find(
    (materia) => `${materia.name}` == theSupportMaterial.value.materia
  )?.multigrupo;
  const materiaAndDocenteNoMultigrupo = [
    {
      materia: "Cirugía 2",
      docente: "Viruez Soleto Erwin",
    },
    {
      materia: "Cirugía 3",
      docente: "Jorge Fernando Aparicio",
    },
  ];
  const isMultigrupo = materiaIsMultigrupo && materiaAndDocenteNoMultigrupo.includes(theSupportMaterial.value);

  return isMultigrupo;
});

const session = Cookie.get("user");
const user = session ? JSON.parse(session) : null;
const handleSubmit = async ({type, url, year, subject, teacher, partial}) => {
  const result = await fetch("/api/supportMaterial/create", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      type,
      url,
      year,
      subject,
      teacher,
      partial,
      token: user.token,
    }),
  });
  if (!result.ok) {
    return alert("Error al crear material de apoyo");
  }

  // reload page
  window.location.href = "/admin/profile";
};
</script>

<template>
  <FormKit
    id="form_Support_Add"
    @submit="handleSubmit"
    type="form"
    submit-label="Enviar"
    incomplete-message="Error, revisa lo que estás enviando al formulario"
  >
    <FormKit
      type="select"
      label="Selecciona el tipo"
      name="type"
      placeholder="Selecciona un tipo"
      v-model="theSupportMaterial.type"
      :options="['Material de apoyo', 'Bancos de preguntas']"
      validation="required"
      :validation-messages="{
        required: 'Es obligatorio',
      }"
      validation-visibility="submit"
    />
    <FormKit
      type="text"
      label="Url"
      name="url"
      v-model="theSupportMaterial.url"
      placeholder="https://drive.google.com/drive/folders/id-del-folder?usp=sharing"
      validation="required"
      :validation-messages="{
        required: 'Es obligatorio',
      }"
      validation-visibility="submit"
    />

    <FormKit
      type="select"
      label="Año"
      name="year"
      placeholder="Selecciona un año"
      v-model="theSupportMaterial.year"
      @update:model-value="
        () => (theSupportMaterial.materia = materiasFiltradasByYear[0].name)
      "
      :options="[1, 2, 3, 4, 5]"
      validation="required"
      :validation-messages="{
        required: 'Es obligatorio',
      }"
      validation-visibility="submit"
    />
    <FormKit
      type="select"
      label="Materia"
      name="subject"
      placeholder="Selecciona una materia"
      v-model="theSupportMaterial.materia"
      @update:model-value="
        () => (theSupportMaterial.docente = docentesFiltrados[0].name)
      "
      :options="materiasFiltradasByYear.map((materia) => materia.name)"
      validation="required"
      :validation-messages="{
        required: 'Es obligatorio',
      }"
      validation-visibility="submit"
    />
    <FormKit
      v-if="!isMultigrupo"
      type="select"
      label="Docente"
      name="teacher"
      placeholder="Selecciona un docente"
      v-model="theSupportMaterial.docente"
      :options="docentesFiltrados.map((docente) => docente.name)"
      validation="required"
      :validation-messages="{
        required: 'Es obligatorio',
      }"
      validation-visibility="submit"
    />
    <FormKit
      type="select"
      label="Parcial"
      name="partial"
      placeholder="Selecciona un parcial"
      v-model="theSupportMaterial.partial"
      :options="[1, 2, 3]"
      validation="required"
      :validation-messages="{
        required: 'Es obligatorio',
      }"
      validation-visibility="submit"
    />
  </FormKit>

  <div class="py-6 px-8 bg-white dark:bg-neutral-800 shadow-md rounded-md w-full">
    <h3 class="text-center text-ellipsis overflow-hidden text-nowrap capitalize text-2xl text-neutral-800 dark:text-neutral-200">{{ theSupportMaterial.type == '' ? 'Tipo' : theSupportMaterial.type }}</h3>
    <div class="flex justify-center py-3">
        <a
          :href="theSupportMaterial.url == '' ? '#' : theSupportMaterial.url"
          :class="theSupportMaterial.url == '' ? 'cursor-not-allowed bg-neutral-500' : 'bg-primary hover:bg-orange-500'"
          class="py-2 px-6 rounded-md font-medium text-neutral-200 text-center inline-block inset-x-auto"
          :target="theSupportMaterial.url == '' ? '_self' : '_blank'"
          rel="noopener noreferrer"
        >
          Ver Recursos
        </a>
    </div>
</div>
</template>

<style scoped>
.formkit-outer {
  max-width: 100%;
}
</style>
