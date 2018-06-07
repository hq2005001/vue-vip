import axios from 'axios';

export default {
  getDetail(id, done) {
    axios.get('/apis/detail/index.json', {
      params: {
        id: id
      }
    }).then(res => {
      done(res.data);
    });
  }
}
