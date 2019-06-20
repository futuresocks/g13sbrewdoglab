<template lang="html">
  <div id="">
    <h1>Favourite</h1>
    <beer-list :beers="favourites" :favourites="favourites"></beer-list>
  </div>

</template>

<script>
import BeerList from '@/components/BeerList.vue'
export default {
  props: ['favourites'],
  components: {
    'beer-list': BeerList
  }
}
</script>

<style lang="css" scoped>
</style>
