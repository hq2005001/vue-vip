<template>

  <div class="swiper-slide yjm3u8" style="">
      <div class="numList">
          <ul>
              <li v-for="item, index in items" :key="index">
                  <router-link :to="{name:'play', params: {
                    id: movie.id,
                    type: type,
                    index: index
                  }}">{{item.name}}</router-link>
              </li>
          </ul>
      </div>
  </div>

</template>
<script>
  export default {
    props: [
      'items',
      'movie',
      'type'
    ]
  }
</script>
