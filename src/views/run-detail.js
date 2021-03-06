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
        <span class="run-items date">${model.get('date')}</span>
        <span class="run-items time">${model.get('time')}</span>
        <input class="run-items" id="detail-run-notes" placeholder="Run Notes" value="${model.get('notes')}">
      </div>
        <a href="#"><button class="btn back"><</button></a>
        <a href="#${model.id}/edit" class="btn edit"><i class="fa fa-pencil"></i></a>
    `;
  },
});
