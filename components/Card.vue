<template>
  <div
    class="bg-white rounded-lg flex flex-col justify-between overflow-hidden p-3 shadow"
  >
    <div>
      <p class="text-2xl font-bold mb-3">{{ repository.name }}</p>
      <p class="mb-5">{{ repository.description }}</p>
    </div>
    <button
      class="bg-pink-700 hover:bg-pink-900 text-white font-semibold px-4 py-2 rounded w-full"
      @click="toggleFavorite(repository)"
    >
      {{ isFavorite ? `It's my favorite` : 'Add to favorites' }}
    </button>
  </div>
</template>

<script>
import { mapMutations, mapGetters } from 'vuex'
export default {
  props: {
    repository: {
      type: Object,
      required: true
    }
  },
  data() {
    return {
      ready: false
    }
  },
  computed: {
    isFavorite() {
      return this.getFavorite(this.repository.id)
    },
    ...mapGetters('repositories', ['getFavorite'])
  },
  methods: {
    ...mapMutations('repositories', ['toggleFavorite'])
  }
}
</script>
