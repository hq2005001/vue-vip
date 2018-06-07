<template>
  <section class="header-nav">

    <div class="nav-wrap">
      <div class="shadow-l"></div>
      <div class="shadow-r"></div>
        <div class="wrap">
        <ul>
          <li class="active"><a href="/">首页</a></li>
          <li v-for="nav,index in navs" :key='index'>
              <router-link :to="{ name: 'lists', params: { type: nav.id, area:0, year:0 }}">{{nav.name}}</router-link>
          </li>
          <li><a href="http://www.vipsource.cn/books">图书</a></li>
          <li><a href="http://novel.vipsource.com.cn">小说</a></li>
        </ul>
      </div>
    </div>

    <div class="nav-wrapp">
      <div class="more">
        <a href="http://www.vipsource.cn/filter" rel="nofollow">
                  <i class="aui-iconfont aui-icon-menu"></i>
        </a>
      </div>
    </div>
  </section>
</template>
<script>
export default {
  props: ["navs"],
  methods: {
    nav_list(id) {
      return this.$router.push({
        path: "/lists",
        query: {
          type: id,
          area: 0,
          year: 0
        }
      });
    }
  }
};
</script>
