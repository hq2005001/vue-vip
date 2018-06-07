<template>
  <div>
    <CardTitle :title="title"></CardTitle>
    <card-container>
      <card-item></card-item>
    </card-container>
  </div>
</template>
<script>
  import CardContainer from './CardContainer';
  import CardItem from './CardItem';
  import CardTitle from './CardTitle';

  export default {
    name: 'Card',
    props: [
      'title-right',
      'title',
    ],
    components: {
      CardContainer,
      CardItem,
      CardTitle
    }
  }
</script>
