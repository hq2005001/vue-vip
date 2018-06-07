export default {
  getIndexData(context) {
    context.commit('getIndexData');
  },
  getRelateds(context, item) {
    context.commit('getRelateds',item);
  },
  getSearch(context, kw) {
    context.commit('getSearch', kw);
  },
  getDetail(context, id) {
    context.commit('getDetail', id);
  }
}
