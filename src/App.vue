<template>
  <div id="app">
    <h1>BEEERS</h1>

    <div class="">
<nav> <router-link :to="{ name: 'beer'}">Beers</router-link>
      | <router-link :to="{ name: 'favourite'}">Favourite</router-link>
</nav>
    </div>
    <router-view :beers="beers" :favourites="favourites" id="view"></router-view>
  </div>

</template>

<script>
import { eventBus } from '@/main.js'
import BeerList from './components/BeerList.vue'

export default {
  name: 'app',
  data(){
    return {
      beers: [],
      favourites: []
    }
  },
  mounted(){
    fetch("https://api.punkapi.com/v2/beers")
    .then(res => res.json())
    .then(beers => this.beers = beers)

    eventBus.$on('beer-selected', (beer) => {
      this.favourites.push(beer)
    })
  },
  components: {
    "beer-list": BeerList
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
