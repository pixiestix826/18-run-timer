export default Backbone.Model.extend({
  urlRoot: 'http://tiny-lr.herokuapp.com/collections/runs-bbs',
  idAttribute: '_id',

  defaults: {
    time: '',
    date: '',
    notes: '',
  },

  initialize() {
    var runDate = this.get('runDate');
    var runTime = this.get('runTime');

    if (runDate === '') {
      this.set('runDate', new Date());
    }

    if (runTime === '') {
      this.set('runTime', new Time());
    }
  },
});
