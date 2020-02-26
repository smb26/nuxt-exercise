<template>
  <div class="absolute inset-0 h-screen w-full bg-white p-10">
    <div class="flex justify-between items-center mb-10">
      <p class="text-6xl font-bold">My favorite repositories:</p>
      <button @click="$emit('close')">Close</button>
    </div>
    <p
      v-for="repository in getFavorites"
      :key="repository.id"
      class="text-2xl font-bold mb-3"
    >
      {{ repository.name }}
    </p>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
export default {
  computed: {
    ...mapGetters('repositories', ['getFavorites'])
  }
}
</script>
