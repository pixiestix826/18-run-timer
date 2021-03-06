export default Backbone.View.extend({
  model: null,
  collection: null,

  tagName: 'form',

  attributes: {
    class: 'run-form',
  },

  events: {
    submit(ev) {
      ev.preventDefault();

      // Get user input
      var date = this.$el.find('#run-date').val();
      var time = this.$el.find('#run-time').val();
      var notes = this.$el.find('#run-notes').val();

      // Save the model
      this.model.save({date, time, notes}).then(() => {
        // Redirect somewhere
        this.collection.add(this.model);

        Backbone.history.navigate('', {trigger: true});
      });
    },
  },

  initialize() {
    this.render();
  },

  render() {
    this.$el.html(this.template(this.model));
  },

  template(model) {
    return `
    <div class="new-run">
      <h1 class="new-heading">New Run</h1>

        <input class="new-run-items" type="text" id="run-time" placeholder="Run Time" value="${model.get('time')}">
        <input class="new-run-items" type="text" id="run-date" placeholder="Run Date" value="${model.get('date')}">
        <input class="new-run-items" type="text" id="run-notes" placeholder="Run Notes" value="${model.get('notes')}">

      <div>
        <a href="#"><button class="btn cancel">CANCEL</button></a>
        <a href="#"><button class="btn save">SAVE</button></a>
      </div>
    </div>
    `;
  },
});
