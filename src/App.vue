<template>
  <div id="app">
    <h1>BEEERS</h1>
    
    <div class="">
      <beer-list :beers="beers"></beer-list>
    </div>
  </div>

</template>

<script>
import BeerList from './components/BeerList.vue'

export default {
  name: 'app',
  data(){
    return {
      beers: []
    }
  },
  mounted(){
    fetch("https://api.punkapi.com/v2/beers")
    .then(res => res.json())
    .then(beers => this.beers = beers)
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
