<template>
  <div>
    <HeaderBar title='test' v-show="!$store.state.show_search"></HeaderBar>
    <Search v-show="$store.state.show_search" routerName='search'></Search>
    <HeaderNav :navs='navs'></HeaderNav>
    <div>
      <CardTitle
        class="card-margin-top-27"
        title='热门推荐'
        titleRight="排行榜"
        iconVal="aui-icon-paper"></CardTitle>
      <card-container>
        <card-item :movie='movie' v-for="movie,index in recoms" :key="index"></card-item>
      </card-container>
    </div>
    <div>
      <CardTitle
        title='热播影院'
        titleRight="观影更方便"
        iconVal="aui-icon-location"></CardTitle>
      <card-container>
        <card-item :movie='movie' v-for="movie,index in movies" :key="index"></card-item>
      </card-container>
    </div>
    <div>
      <CardTitle
        title='同步剧场'
        titleRight="热剧随意追"
        iconVal="aui-icon-location"></CardTitle>
      <card-container>
        <card-item :movie='movie' v-for="movie,index in tvs" :key="index"></card-item>
      </card-container>
    </div>
    <div>
      <CardTitle
        title='劲爆综艺'
        titleRight="综艺聚多看"
        iconVal="aui-icon-location"></CardTitle>
      <card-container>
        <card-item :movie='movie' v-for="movie,index in zys" :key="index"></card-item>
      </card-container>
    </div>
    <div>
      <CardTitle
        title='热播动漫'
        titleRight="回归纯与真"
        iconVal="aui-icon-location"></CardTitle>
      <card-container>
        <card-item :movie='movie' v-for="movie,index in dms" :key="index"></card-item>
      </card-container>
    </div>
  </div>
</template>
<script>
  import HeaderBar from './header/HeaderBar';
  import HeaderNav from './header/HeaderNav';
  import Search from './search/Search';
  import CardContainer from './card/CardContainer';
  import CardItem from './card/CardItem';
  import CardTitle from './card/CardTitle';
  import { mapGetters } from "vuex";
  export default {
    name: 'Home',
    components: {
      HeaderBar,
      HeaderNav,
      CardContainer,
      CardItem,
      CardTitle,
      Search
    },
    computed: {
      ...mapGetters({
        recoms: 'recomLists',
        movies: 'movieLists',
        tvs: 'tvLists',
        zys: 'zyLists',
        dms: 'dmLists',
        navs: 'navs'
      })
    },
    created: function() {
      this.$store.dispatch('getIndexData');
    }
  }

</script>
