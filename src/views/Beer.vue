<template lang="html">
  <div id="">
    <beer-list />
  </div>
</template>

<script>
import BeerList from '@/components/BeerList.vue'
export default {
  name: 'beer',
  components: {
    "beer-list": BeerList
  }
}
</script>

<style lang="css" scoped>
</style>
