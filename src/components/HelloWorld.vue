<template>
  <div class="hello">
    <!-- <mu-appbar style="width: 100%;" color="primary">
      <mu-button icon slot="left">
        <mu-icon value="menu"></mu-icon>
      </mu-button>
      Title

      <mu-button flat slot="right">LOGIN</mu-button>
    </mu-appbar> -->
    <Slide></Slide>
    <Content></Content>
  </div>
</template>

<script>
import Content from "./Content";
import Slide from "./Slide";
export default {
  components: {
    Content,
    Slide
  }
}
</script>
<style lang="less">
.button-wrapper {
  text-align: center;
  .mu-button{
    margin: 8px;
  }
}
</style>
