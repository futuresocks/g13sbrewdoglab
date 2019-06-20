<template lang="html">
  <div id="">
    <beer-list :beers="beers"/>
  </div>
</template>

<script>
import BeerList from '@/components/BeerList.vue'
export default {
  name: 'beer',
  props: ["beers"],
  components: {
    "beer-list": BeerList
  }
}
</script>

<style lang="css" scoped>
</style>
