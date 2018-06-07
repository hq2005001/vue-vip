<template>
  <li class="item">
    <router-link :to="{ name: 'detail', params: { id: movie.id }}" class="item-link">

        <div class="item-pic item-lazy" style="height: 150px;">
            <img :src="movie.pic" style="height: 150px;">
        </div>
        <span class="covericon">{{tag}}</span>
    </router-link>

    <router-link :to="{ name: 'detail', params: { id: movie.id }}" :title="movie.name" class="item-info">
      <span class="sTit">{{movie.name}}</span>
      <span class="sDes">{{movie.content}}</span>
    </router-link>
  </li>
</template>
<script>
export default {
  props: {
    movie: {
      type: Object,
      default: {}
    },
    tag: {
      type: String,
      default: '热播中'
    }
  }
};
</script>
