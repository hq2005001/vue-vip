<template>
  <section class="header">
    <header class="aui-bar aui-bar-nav" id="aui-header">
      <div style="float: left;margin-left: 10px;">{{title}}</div>
        <router-link to="/" class="aui-pull-right aui-btn" aui-popup-for="top-right"><i class="aui-iconfont aui-icon-home"></i></router-link>
        <a class="aui-pull-right aui-btn show-search" @click="showSearch()">
          <i class="aui-iconfont aui-icon-search"></i>
        </a>
    </header>
  </section>
</template>
<script>
  export default {
    props: [
      'title',
    ],
    methods: {
      showSearch() {
        this.$store.state.show_search = true;
        this.$store.state.kw = '';
      }
    }
  }
</script>
