<template>
  <div>
    <HeaderBar title='test'></HeaderBar>
    <div class="mod_wrap"></div>
    <section class="aui-content">
        <section class="col-head">
            <h2 class="title">片库共有
                <span class="text-color">
                <b style="color: red;">20</b>
            </span>个影片</h2>
        </section>

        <scroller :on-refresh="refresh"
                  :on-infinite="infinite">
          <card-container>
              <card-item :movie='movie' v-for="movie,index in items" :key="index"></card-item>
          </card-container>
        </scroller>


    </section>
  </div>
</template>
<script>
import Vue from 'vue'
import VueScroller from 'vue-scroller'
import CardContainer from './card/CardContainer';
import CardItem from './card/CardItem';
import CardTitle from './card/CardTitle';
import HeaderBar from './header/HeaderBar';
import { mapGetters } from "vuex";
Vue.use(VueScroller)
    export default {
        data() {
            return {
            }
        },
        components: {
          CardContainer,
          CardItem,
          CardTitle,
          HeaderBar,
        },
        computed: {
          ...mapGetters({
            items: 'recomLists',
          })
        },
        created() {
          this.$store.dispatch('getIndexData');
          console.log(this.$vueScroller);
        },
        methods: {
          refresh(done) {
            console.log('in');
            done();
          },
          infinite(done) {
            console.log(1111);
            // done();
            console.log(done);
          }
        }
    }
</script>
<style scoped>
._v-container {
  position: relative;
}
</style>

