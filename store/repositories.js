export const state = () => ({
  repositories: null,
  favorites: []
})

export const mutations = {
  addRepositories: (state, repositories) => {
    state.repositories = repositories
  },

  toggleFavorite: (state, favoriteToToggle) => {
    if (state.favorites.includes(favoriteToToggle.id)) {
      state.favorites = state.favorites.filter(
        (favorite) => favorite !== favoriteToToggle.id
      )
    } else {
      state.favorites.push(favoriteToToggle.id)
    }
  }
}

export const getters = {
  getFavorite: (state) => (id) => {
    return state.favorites.includes(id)
  },

  getFavorites: (state) => {
    return state.repositories.filter((repository) =>
      state.favorites.includes(repository.id)
    )
  }
}
