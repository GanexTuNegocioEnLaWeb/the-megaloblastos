<script setup>
import Cookie from "js-cookie";

const submitHandlerLogin = async ({ email, password }) => {
  const result = await fetch("/api/user/login", {
    method: "POST",
    body: JSON.stringify({
      email,
      password,
    }),
  });
  if (!result.ok) {
    return alert("Error al iniciar sesión");
  }

  // set cookie
  const { token, user } = await result.json();
  Cookie.set("user", JSON.stringify({ token, ...user }), { expires: 1 });

  // redirect to profile
  window.location.href = "/admin/profile";
};
</script>

<template>
  <FormKit
    id="form_login_admin"
    @submit="submitHandlerLogin"
    type="form"
    submit-label="Iniciar sesión"
    incomplete-message="Error, revisa lo que estás enviando al formulario"
  >
    <FormKit
      type="email"
      label="Email"
      name="email"
      placeholder="tucorreo@tucorreo.com"
      autocomplete="off"
      help="Escribe tu correo electrónico"
      validation="required|email"
      :validation-messages="{
        required: 'Es obligatorio',
        email: 'Debe ser un correo electrónico',
      }"
      validation-visibility="submit"
    />
    <FormKit
      type="password"
      label="Tu Contraseña"
      name="password"
      placeholder="******"
      autocomplete="off"
      help="Escribe tu Contraseña"
      validation="required"
      :validation-messages="{
        required: 'Es obligatorio',
      }"
      validation-visibility="submit"
    />
  </FormKit>
</template>

<style scoped>
.formkit-outer {
  max-width: 100%;
}
</style>
