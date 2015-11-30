export default Backbone.Model.extend({

  urlRoot: 'http://tiny-lr.herokuapp.com/collections/runs-bbs',

  defaults: {
    time: '',
    date: '',
  },
});
