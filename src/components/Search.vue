<template>
  <div>
    <HeaderBar title='test' v-show="!$store.state.show_search"></HeaderBar>
    <Search v-show="$store.state.show_search" routerName='search'></Search>
    <div class="mod_wrap"></div>
    <section class="aui-content">
      <section class="col-head">
          <h2 class="title">片库共有
              <span class="text-color">
              <b style="color: red;">20</b>
          </span>个影片</h2>
      </section>
      <card-container>
          <card-item :movie='movie' v-for="movie,index in items" :key="index"></card-item>
      </card-container>
    </section>
    <van-pagination
      v-model="currentPage"
      :total-items="total"
      :show-page-size="3"
      force-ellipses
      @change="change"
    />
  </div>
</template>
<script>
import Vue from "vue";
import VueScroller from "vue-scroller";
import CardContainer from "./card/CardContainer";
import CardItem from "./card/CardItem";
import CardTitle from "./card/CardTitle";
import HeaderBar from "./header/HeaderBar";
import Search from "./search/Search";
import { mapGetters } from "vuex";
import { Pagination, Loading, Toast } from "vant";

Vue.use(Pagination);
Vue.use(Loading);
Vue.use(Toast);
export default {
  data() {
    return {
      currentPage: 1,
      loading: false
    };
  },
  components: {
    CardContainer,
    CardItem,
    CardTitle,
    HeaderBar,
    Search
  },
  computed: {
    items() {
      return this.$store.state.searchLists;
    },
    total() {
      return this.$store.state.count;
    }
  },
  mounted() {
    this.search();
  },
  methods: {
    change() {
      this.$store.state.page = this.currentPage;
      window.scrollTo(0, 0);
       Toast.loading({
        duration: 1000,
        forbidClick: true,
        loadingType: 'spinner',
        message: '加载中...',
        mask: true,
      });
      this.search();
    },
    search() {
      this.$store.dispatch("getSearch", this.$route.params.kw);
    }
  }
};
</script>
<style scoped>
/* ._v-container {
  position: relative;
} */
</style>

