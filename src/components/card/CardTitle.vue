<template>
  <section class="col-head">
    <div class="title">
      {{title}}
    </div>
    <div class="more">
        <i :class="icon_val_new"></i>
        &nbsp;{{titleRight}}&nbsp;
        <i class="aui-iconfont aui-icon-right"></i>
    </div>
  </section>
</template>
<script>

  export default {
    props: {
      title: {
        type: String,
        default: ''
      },
      titleRight: {
        type: String,
        default: ''
      },
      iconVal: {
        type: String,
        default: 'aui-icon-paper'
      }
    },
    computed:{
      icon_val_new(){
        return 'aui-iconfont ' + this.iconVal;
      }
    }
  }
</script>
