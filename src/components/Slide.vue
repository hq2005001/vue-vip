<template>
  <div class="slide">
    <ul>
      <li @click="addItem(Math.random())">add</li>
      <li @click="deleteItem()">delete</li>
    </ul>
  </div>
</template>

<script>
  import { mapActions } from "vuex";
  export default {
    methods: {
      ...mapActions([
        'addItem',
        'deleteItem'
      ])
    }
  }
</script>
