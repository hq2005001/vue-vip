<template>
  <div class="search">
    <div class="form">
		  <input type="search" v-model="kw" class="input" @keypress="checkKey($event)" @change="changeKw" placeholder="想要搜点什么呢？" autocomplete="off">
		  <button type="submit" class="aui-iconfont aui-icon-search" @click="search"></button>
    </div>
	  <div class="search-cancel" @click="cancelSearch()">取消</div>
</div>
</template>
<script>

  export default {
    name: 'Search',
    props: [
      'routerName',
    ],
    data() {
      return {
        kw: '',
      }
    },
    methods: {
      cancelSearch() {
        this.$store.state.show_search = false;
        this.$store.state.kw = '';
      },
      changeKw() {
        this.$store.kw = this.kw;
      },
      checkKey(e) {
        console.log(e.keyCode == 13);
        if(e.keyCode == 13) {
          //调用vuex的action
          this.search();
        }
      },
      search() {
        console.log(this.kw);
        this.$router.replace({
          name: this.routerName,
          params: {
            kw: this.kw
          }
        });
      }
    }
  }
</script>
