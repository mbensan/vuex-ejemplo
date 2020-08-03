<template>
  <div>
    <p>
      <input v-model="numero_pokemon" type="number" placeholder="selecciona el numero del pokemon"/>
      <button class="waves-effect waves-light btn" @click="cargar_datos">Cargar Datos del Pokemon</button>
      </p>
    <h2>Nombre: {{ nombre_pokemon }}</h2>
    <h4>Tipos:</h4>
    <ul>
      <li v-for="(tipo, i) in tipos" :key="i">{{tipo.type.name}}</li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'Pokemon',
  data() {
    return {
      nombre_pokemon: '',
      tipos: [],
      numero_pokemon: 1
    }
  },
  methods: {
    cargar_datos() {
      this.axios.get(`https://pokeapi.co/api/v2/pokemon/${this.numero_pokemon}`)
      .then((datos) => {
        const pokemon = datos.data;
        console.log(pokemon);
        this.nombre_pokemon = pokemon.name;
        this.tipos = pokemon.types;
      })
      .catch((error) => {
        alert(error);
      });
    }
  },
  mounted() {
    // axios en forma de promesas (ES6)
    
  }
}
</script>