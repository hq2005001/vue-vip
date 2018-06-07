<template>

    <div>
        <!-- 详细介绍  -->
        <section class="detail">
            <div class="detail-wrap">
                <div class="detail-cover">
                    <img v-lazy="bg" :alt="movie.name">
                </div>
                <div class="detail-img">
                    <img v-lazy="movie.pic" :alt="movie.name">
                </div>
                <div class="detail-txt">
                    <h1 class="aui-ellipsis-2">{{movie.name}}</h1>
                    <p class="detail-category">
                        <span class="video-year">{{movie.year}}</span>
                    </p>
                    <p class="detail-actor">
                        <span>主演：</span>
                        <a href="" target="_self">{{movie.starring}}</a>
                    </p>
                    <p class="detail-director">
                        <span>导演：</span>
                        <span>
                          <a href="" target="_self">{{movie.directed}}</a></span>
                    </p>
                    <p class="detail-director">
                        <span></span>
                    </p>

                    <div class="detail-btn">
                        <a href="#play-list" class="greenBtn">
                            <span>播放</span>
                        </a>
                    </div>
                </div>
            </div>
        </section>

        <!--会隐藏的简介  -->
        <section class="detail-intro" style="margin-bottom: 2.5rem;">
            <p class="detail-intro-txt" :class="{'aui-ellipsis-2': !show_more}">{{movie.content}}</p>
            <div id="_js_detail_area" class="more toggle-detail" @click="toggleDescription()">
                <i class="aui-iconfont" :class="{'aui-icon-top': show_more, 'aui-icon-down': !show_more}"></i>
            </div>
        </section>

        <!-- 信息条  -->
        <p class="detail-tips">如果播放失败可以尝试使用网盘资源观看，网盘资源获取方式请关注微信公众号'vip资源铺'即可获得! ^_^</p>
    </div>
</template>
<script>
  import bg from '@/assets/images/bg-blue.png';
  export default {
    props: [
      'movie'
    ],
    data() {
      return {
        show_more: false,
        bg: bg
      }
    },
    methods: {
      toggleDescription() {
        this.show_more = !this.show_more;
      }
    }
  }
</script>
