<template>
  <div>
    <HeaderBar title='test' v-show="!$store.state.show_search"></HeaderBar>
    <Search v-show="$store.state.show_search" routerName='search'></Search>
    <section class="aui-content">
      <Detail :movie='movie'></Detail>
      <section class="col-head" style="margin-top: 0;" id="play-list">
          <div class="title">影片片源</div>
          <p style="margin-left: 1rem;float: left;font-size: 12px;color: #FF6666;">下方左右滑动即可切换资源</p>
      </section>
      <section class="col-main">
        <div class="numBox">
      <van-tabs v-model="active" swipeable>
        <van-tab v-for="link, index  in links" :title="link.play_type" :key="index">
          <play-list :items="link.play_url" :movie="movie" :type="link.play_type"></play-list>
        </van-tab>
      </van-tabs>
        </div>
      </section>

    </section>
    <section class="col-head">
        <div class="title">猜您喜欢</div>
    </section>
    <card-container>
        <card-item :movie='related' v-for="related,index in relateds" :key="index" tag="相关影片"></card-item>
    </card-container>
  </div>
</template>
<script>
import Vue from "vue";
import HeaderBar from "./header/HeaderBar";
import Search from "./search/Search";
import Detail from "./detail/Detail";
import CardContainer from "./card/CardContainer";
import CardItem from "./card/CardItem";
import Api from "@/api/index";
import { Tab, Tabs, Toast } from "vant";
import PlayList from "./detail/PlayList";

Vue.use(Tab).use(Tabs).use(Toast);
export default {
  data() {
    return {
      currentPage: 1,
      loading: false,
      active: 0,
      movie: [],
      links: [],
      relateds: []
    };
  },
  components: {
    HeaderBar,
    Search,
    Detail,
    CardContainer,
    CardItem,
    PlayList
  },
  mounted() {
    this.getDetail(this.$route.params.id);
  },
  methods: {
    getDetail(id) {
        Api.getDetail(id, data => {
          if (data.status == "200") {
            this.movie = data.recordset.movie;
            this.links = data.recordset.links;
            this.relateds = data.recordset.related;
          }
        });
    }
  },
  watch: {
    $route(to, from) {
      window.scrollTo(0, 0);
      Api.getDetail(to.params.id, data => {
          if (data.status == "200") {
            this.movie = data.recordset.movie;
            this.links = data.recordset.links;
            this.relateds = data.recordset.related;
          }
        });
    }
  }

};
</script>

