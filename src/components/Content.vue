<template>
  <ul>
    <li v-for="item in items">{{item}}</li>
  </ul>
</template>
<script>

  import { mapGetters } from "vuex";

  export default {
    computed: {
      ...mapGetters({
        items: 'getItem'
      })
    }
  }
</script>
