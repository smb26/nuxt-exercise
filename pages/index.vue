<template>
  <div class="w-full flex">
    <div class="p-10">
      <div class="flex justify-between items-center  mb-10">
        <h1 class="text-6xl font-bold">
          Nuxt ecosystem
        </h1>
        <button
          v-if="repositories"
          @click="showFavoriteList = !showFavoriteList"
        >
          See favorites
        </button>
      </div>
      <FavoriteList v-if="showFavoriteList" @close="showFavoriteList = false" />
      <div
        class="grid grid-flow-row grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-10"
      >
        <Card
          v-for="repository in repositories"
          :key="repository.id"
          :repository="repository"
        />
      </div>
    </div>
  </div>
</template>

<script>
import axios from 'axios'
import { mapMutations, mapState } from 'vuex'
import Card from '@/components/Card.vue'
import FavoriteList from '@/components/FavoriteList.vue'

export default {
  components: {
    Card,
    FavoriteList
  },
  data() {
    return {
      showFavoriteList: false
    }
  },
  computed: {
    ...mapState('repositories', ['repositories'])
  },
  mounted() {
    axios.get('https://api.github.com/orgs/nuxt/repos').then((result) => {
      this.addRepositories(result.data)
    })
  },
  methods: {
    ...mapMutations('repositories', ['addRepositories'])
  }
}
</script>
