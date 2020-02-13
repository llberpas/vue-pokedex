var app = new Vue({
  el: '#app', // Nos conectamos al elemento html
  // Con esto, desde la consola ya podemos acceder al elemento app y a los objetos.
  // La reactividad de Vue es que se pueden cambiar dinamicamente desde el front y se van actualizando.
  data: {
    COLORS: {
      "grass": "#78C850",
      "poison": "#A040A0",
      "fire": "#F08030",
      "flying": "#A890F0",
      "water": "#6890F0",
      "bug": "#A8B820",
      "normal": "#A8A878",
      "electric": "#F8D030"
    },
    pokemons: [],
    searchText: ''
  },
  // Toma los cambios sobre la pagina.
  computed: {
    filteredPokemons() {
      return this.pokemons
        .filter(pokemon => {
          return pokemon.name.includes(this.searchText);
        })
    },
  },
  methods: {
    removePokemon(pokemonToRemove) {
      this.pokemons = this.pokemons
        .filter(pokemon => {
          return pokemon !== pokemonToRemove;
        })
    },
    search(text) {
      this.pokemons = this.pokemons
        .filter(pokemon => {
          return pokemon.name.indexOf(name);
        })
    }
  },
  // lifecycle hook: funcion que se ejecuta cuando se crea el componente.
  created() {
    fetch('https://raw.githubusercontent.com/rubnvp/vue-pokedex/master/data/pokemons.json')
      .then(response => response.json())
      .then(pokemons => {
        this.pokemons = pokemons;
      })
  }
})