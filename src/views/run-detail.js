export default Backbone.View.extend({
  attributes: {
    class: 'run-details',
  },

  initialize() {
    this.render();
  },

  render() {
    this.$el.html(this.template(this.model));
  },

  template(model) {
    return `
    <div class="run-detail">
      <h1 class="my-heading">My Run</h1>
        <span class="list-items date">${model.get('date')}</span>
        <span class="list-items time">${model.get('time')}</span>


        <a href="#"><button class="btn back"><</button></a>
        <a href#editRun class="btn edit"><i class="fa fa-pencil"></i></a>
    `;
  },
});
