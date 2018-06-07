import axios from 'axios';
export default {
  getIndexData: state => {
    axios.get('/apis/index/index.json')
      .then(res => {
        state.recoms = res.data.recordset.recoms;
        state.movies = res.data.recordset.movies;
        state.tvs = res.data.recordset.tvs;
        state.dms = res.data.recordset.dms;
        state.zys = res.data.recordset.zys;
        state.navs = res.data.recordset.navs;
      });
  },
  getRelateds: (state, item) => {

  },
  getSearch: (state, kw) => {
    axios.get('/apis/search/index.json', {params: {
      kw: kw,
      page: state.page,
      row: state.row
    }})
      .then(res => {
        state.searchLists = res.data.recordset.data;
        state.totalPage = res.data.recordset.page;
        state.count = parseInt(res.data.recordset.count);
      })
  },
  getDetail: (state, id) => {
    axios.get('/apis/detail/index.json', {
      params: {
        id: id
      }
    }).then(res => {
      state.movie = res.data.recordset.movie;
    });
  }
}
