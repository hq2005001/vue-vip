<template>
  <div>
    <HeaderBar title='test' v-show="!$store.state.show_search"></HeaderBar>
    <Search v-show="$store.state.show_search" routerName='search'></Search>
    <section class="aui-content">
      <div class="aui-tips show-tips" v-show="showTip">
          <i class="aui-iconfont aui-icon-info"></i>
          <div class="aui-tips-title tip-content" >正在播放：{{movie.name}}&nbsp;&nbsp;{{link.name}}</div>
          <i class="aui-iconfont aui-icon-close hide-tips" @click="close()"></i>
      </div>
      <div id="playleft" ref="player">

      </div>

    </section>
    <!-- <section class="col-head">
        <div class="title">猜您喜欢</div>
    </section>
    <card-container>
        <card-item :movie='related' v-for="related,index in relateds" :key="index" tag="相关影片"></card-item>
    </card-container> -->
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
import DPlayer from 'dplayer';
import 'dplayer/dist/DPlayer.min.css';
import Hls from 'hls.js';


Vue.use(Tab).use(Tabs).use(Toast);

export default {
  data() {
    return {
      currentPage: 1,
      loading: false,
      active: 0,
      movie: [],
      links: [],
      link: {},
      relateds: [],
      type: '',
      index: 0,
      dp: {},
      container: '',
      showTip: true,
      options: {
        autoplay: true,
        video: {
        }
      }
    };
  },
  components: {
    HeaderBar,
    Search,
    Detail,
    CardContainer,
    CardItem,
    PlayList,
  },
  mounted() {
    this.type = this.$route.params.type;
    this.index = this.$route.params.index;
    this.container = this.$refs.player;
    this.getDetail(this.$route.params.id);

  },
  methods: {
    getDetail(id) {
        Api.getDetail(id, data => {
          if (data.status == "200") {
            this.movie = data.recordset.movie;
            this.links = data.recordset.links;
            this.link = data.recordset.links[this.type];
            console.log(this.link.play_url[this.index].url);
            this.options.video = {
              url: this.link.play_url[this.index].url,
              type: 'customHls',
              customType: {
                'customHls': function(video, player) {
                  console.log(video);
                  const hls = new Hls();
                  hls.loadSource(video.src);
                  hls.attachMedia(video);
                }
              }
            };
            this.options.container = this.container;
            console.log(this.container);
            console.log(this.options.video);
            this.dp = new DPlayer(this.options)
            console.log(this.link);
            this.relateds = data.recordset.related;
          }
        });
    },
    play() {

    },
    close() {
      this.showTip = false;
    }
  }
};
</script>
