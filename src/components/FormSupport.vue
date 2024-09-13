<script setup lang="ts">
import { computed, reactive } from "vue";
import { materias } from "@/consts/db";

const theSupportMaterial = reactive({
  title: "",
  desc: "",
  year: 1,
  materia: "",
  docente: "",
  url: "",
  parcial: 1,
  type: "",
});

// Filtrar materias por año seleccionado
const materiasFiltradasByYear = computed(() => {
  return materias.filter((m) => m.year == theSupportMaterial.year);
});

// Filtrar docentes según la materia y el año seleccionados
const docentesFiltrados = computed(() => {
  const materiaSeleccionada = materias.find(
    (materia) =>
      `${materia.name}` === theSupportMaterial.materia
  );

  return materiaSeleccionada ? materiaSeleccionada.docentes : [];
});

const reWrite = {
  1: "Primer",
  2: "Segundo",
  3: "Tercer",
  4: "Cuarto",
  5: "Quinto",
};

const createSupportMaterial = async (newSupportMaterial) => {
  if (!newSupportMaterial.title) return alert("Título es obligatorio");
  if (!newSupportMaterial.desc) return alert("Descripción es obligatoria");
  if (!newSupportMaterial.materia) return alert("Materia es obligatoria");
  if (!newSupportMaterial.docente) return alert("Docente es obligatorio");
  if (!newSupportMaterial.url) return alert("Url es obligatorio");
  const response = await fetch("/api/supportMaterial/create", {
    method: "POST",
    body: JSON.stringify(newSupportMaterial),
  });
  if (!response.ok) {
    return alert("Error al crear el material de apoyo");
  }
  alert("Material de apoyo creado con exito");
  window.location.reload();
  return
}

</script>

<template>
  <section class="grid grid-cols-1 lg:grid-cols-2 lg:gap-8 place-items-start">
    <form @submit.prevent="createSupportMaterial(theSupportMaterial)" class="w-full">
      <!-- Título -->
      <label class="block">
        <span class="block text-neutral-700 dark:text-neutral-50">Título</span>
        <input
          v-model="theSupportMaterial.title"
          type="text"
          name="title"
          class="w-full border outline-none bg-white dark:bg-neutral-800 dark:text-white  rounded-md p-2"
          required
        />
      </label>

      <!-- Descripción -->
      <label class="block">
        <span class="block text-neutral-700 dark:text-neutral-50"
          >Descripción</span
        >
        <textarea
          v-model="theSupportMaterial.desc"
          name="desc"
          class="w-full border min-h-20 outline-none bg-white dark:bg-neutral-800 dark:text-white  rounded-md p-2"
          required
        ></textarea>
      </label>

      <!-- Mostrar tipo de material de apoyo -->
      <label class="block">
        <span class="block text-neutral-700 dark:text-neutral-50"
          >Tipo de material de apoyo</span
        >
        <select
          v-model="theSupportMaterial.type"
          class="w-full border outline-none bg-white dark:bg-neutral-800 dark:text-white  rounded-md p-2"
          name="type"
        >
        <option value="">Seleccione un tipo</option>
          <option value="material de apoyo">Material de apoyo</option>
          <option value="Banco De Pregunta">Banco De Pregunta</option>
        </select>
      </label>

      <!-- Url -->
      <label class="block">
        <span class="block text-neutral-700 dark:text-neutral-50">Url</span>
        <input
          v-model="theSupportMaterial.url"
          type="url"
          name="url"
          class="w-full border outline-none bg-white dark:bg-neutral-800 dark:text-white  rounded-md p-2"
          required
        />
      </label>

      <!-- Seleccionar año -->
      <label class="block">
        <span class="block text-neutral-700 dark:text-neutral-50">Año</span>
        <select
          v-model="theSupportMaterial.year"
          class="w-full border outline-none bg-white dark:bg-neutral-800 dark:text-white  rounded-md p-2"
          name="year"
        >
          <option value="1">1</option>
          <option value="2">2</option>
          <option value="3">3</option>
          <option value="4">4</option>
          <option value="5">5</option>
        </select>
      </label>

      <!-- Seleccionar materia -->
      <label class="block">
        <span class="block text-neutral-700 dark:text-neutral-50">Materia</span>
        <select
          v-model="theSupportMaterial.materia"
          class="w-full border outline-none bg-white dark:bg-neutral-800 dark:text-white  rounded-md p-2"
          name="materia"
        >
          <option value="">Seleccione una materia</option>
          <option
            v-for="materia in materiasFiltradasByYear"
            :key="materia.id"
            :value="`${materia.name}`"
          >
            {{ materia.sigla }} - {{ materia.name }}
          </option>
        </select>
      </label>

      <!-- Mostrar docentes según la materia seleccionada -->
      <label
        v-if="theSupportMaterial.materia !== '' && theSupportMaterial.year"
        class="block"
      >
        <span class="block text-neutral-700 dark:text-neutral-50">Docente</span>
        <select
          v-model="theSupportMaterial.docente"
          class="w-full border outline-none bg-white dark:bg-neutral-800 dark:text-white  rounded-md p-2"
          name="docente"
        >
          <option value="">Seleccione un docente</option>
          <option
            v-for="docente in docentesFiltrados"
            :key="docente.id"
            :value="docente.name"
          >
            {{ docente.name }}
          </option>
        </select>
      </label>

      <!-- Seleccionar parcial -->
      <label class="block">
        <span class="block text-neutral-700 dark:text-neutral-50">Parcial</span>
        <select
          v-model="theSupportMaterial.parcial"
          class="w-full border outline-none bg-white dark:bg-neutral-800 dark:text-white  rounded-md p-2"
          name="parcial"
        >
          <option value="1">1</option>
          <option value="2">2</option>
          <option value="3">3</option>
        </select>
      </label>

      <!-- Enviar -->
      <button type="submit" class="mt-4 bg-blue-500 text-white rounded-md p-2">
        Enviar
      </button>
    </form>

    <!-- Vista previa del objeto reactivo -->
    <ul class="space-y-2 pt-4 w-full">
      <li class="py-6 px-8 bg-white dark:bg-neutral-800 shadow-md rounded-md">
    <h3 class="text-xl font-bold uppercase text-neutral-700 dark:text-neutral-50 border-b pb-4">
      {{
            theSupportMaterial.title === "" ? "Título" : theSupportMaterial.title
          }}
    </h3>
    <p class="py-2 font-medium text-neutral-600 dark:text-neutral-300">
      {{
            theSupportMaterial.desc === ""
              ? "Descripción"
              : theSupportMaterial.desc
          }}
    </p>
    <a class="text-primary underline" target="_blank" :href="theSupportMaterial.url == '' ? 'no-url' : theSupportMaterial.url">Ver</a>
</li>
      <li
        class="block w-full bg-white shadow-md dark:border-neutral-800 rounded-md py-4 px-8 dark:bg-neutral-800"
      >
        <h5 class="text-lg font-semibold text-neutral-800 dark:text-neutral-200 pb-1 border-b">Meta Datos</h5>
        <p :class="theSupportMaterial.url === '' ? 'text-red-500' : 'text-green-500'">
          <span class="font-medium text-neutral-800 dark:text-neutral-200">Url: </span>
          {{
            theSupportMaterial.url === ""
              ? "No seleccionado"
              : theSupportMaterial.url
          }}
        </p>
        <p :class="theSupportMaterial.year === 0 ? 'text-red-500' : 'text-green-500'">
          <span class="font-medium text-neutral-800 dark:text-neutral-200">Año: </span>
          {{
            theSupportMaterial.year === 0
              ? "Año"
              : reWrite[theSupportMaterial.year]
          }}
          Año
        </p>
        <p :class="theSupportMaterial.materia === '' ? 'text-red-500' : 'text-green-500'">
          <span class="font-medium text-neutral-800 dark:text-neutral-200">Materia: </span>
          {{
            theSupportMaterial.materia === ""
              ? "No seleccionado"
              : theSupportMaterial.materia
          }}
        </p>
        <p :class="theSupportMaterial.docente === '' ? 'text-red-500' : 'text-green-500'">
          <span class="font-medium text-neutral-800 dark:text-neutral-200">Docente: </span>
          {{
            theSupportMaterial.docente === ""
              ? "No seleccionado"
              : theSupportMaterial.docente
          }}
        </p>
        <p :class="theSupportMaterial.parcial === 0 ? 'text-red-500' : 'text-green-500'">
          <span class="font-medium text-neutral-800 dark:text-neutral-200">Parcial: </span>
          {{
            theSupportMaterial.parcial === 0
              ? "No seleccionado"
              : reWrite[theSupportMaterial.parcial]
          }} Parcial
        </p>
        <p :class="theSupportMaterial.type === '' ? 'text-red-500' : 'text-green-500'">
          <span class="font-medium text-neutral-800 dark:text-neutral-200">Tipo: </span>
          {{
            theSupportMaterial.type === ""
              ? "No seleccionado"
              : theSupportMaterial.type
          }}
        </p>
      </li>
    </ul>
  </section>
</template>
