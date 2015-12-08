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
      <h1 class="heading">My Run</h1>
        <input class="run-items" type="time" id="run-time" placeholder="Run Time">
        <input class="run-items" type="date" id="run-date" placeholder="Run Date">
        <input class="run-items" id="run-notes" placeholder="Run Notes">
    `;
  },
});
