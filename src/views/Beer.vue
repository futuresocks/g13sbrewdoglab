<template lang="html">
  <div id="">
    <beer-list :beers="beers" :favourites="favourites"></beer-list>
  </div>
</template>

<script>
import BeerList from '@/components/BeerList.vue'
export default {
  name: 'beer',
  props: ["beers", "favourites"],
  components: {
    "beer-list": BeerList
  }
}
</script>

<style lang="css" scoped>
</style>
