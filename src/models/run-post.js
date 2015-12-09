export default Backbone.Model.extend({
  urlRoot: 'http://tiny-lr.herokuapp.com/collections/runs-bbs',
  idAttribute: '_id',

  defaults: {
    time: '',
    date: '',
    notes: '',
  },
});
