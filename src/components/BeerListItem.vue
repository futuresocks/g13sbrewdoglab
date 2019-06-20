<template lang="html">
  <div class="">
    <h2>{{beer.name}}</h2>
    <button v-if="!inFavourites" v-on:click="handleButton" type="button" name="button">Add Favourite</button>
  </div>
</template>

<script>
import {eventBus} from '@/main.js'

export default {
  name: 'beer-list-item',
  props: ['beer', 'favourites'],
  computed: {
    inFavourites: function(){
      return this.favourites.includes(this.beer)
    }
  },
  methods: {
    handleButton: function(){
      eventBus.$emit('beer-selected', this.beer)
    }
  }
}
</script>

<style lang="css" scoped>
</style>
