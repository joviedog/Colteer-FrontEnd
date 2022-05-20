<template>
  <form @submit.prevent="submit">
    <h1 class="h3 mb-3 fw-normal">Please register</h1>

    <input v-model="data.name" class="form-control" placeholder="Name" required>
    <br>
    <input v-model="data.username" class="form-control" placeholder="Username" required>
    <br>
    <input v-model="data.email" type="email" class="form-control" placeholder="Email" required>
    <br>
    <input v-model="data.phone" class="form-control" placeholder="Phone" required>
    <br>
    <input v-model="data.document" class="form-control" placeholder="Document" required>
    <br>
    <input v-model="data.birthday" class="form-control" placeholder="Type of Organization" required>
    <br>
    <input v-model="data.password" type="password" class="form-control" placeholder="Password" required>
    <br>
    <button class="w-100 btn btn-lg btn-primary" type="submit">Submit</button>
  </form>
</template>

<script lang="ts">
import {reactive} from 'vue';
import {useRouter} from "vue-router";

export default {
  name: "Register",
  setup() {
    const data = reactive({
      name: '',
      email: '',
      password: ''
    });
    const router = useRouter();

    const submit = async () => {
      await fetch('http://localhost:8000/api/auth/register_organization', {
        method: 'POST',
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify(data)
      });

      await router.push('/login');
    }

    return {
      data,
      submit
    }
  }
}
</script>