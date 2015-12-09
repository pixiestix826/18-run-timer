var RunView = Backbone.View.extend({
  model: null,

  tagName: 'li',

  template(model) {
    // Wire up model events
    return `
      <span class="list-items date">Dec 1, 2015</span>
      <span class="list-items time">00:00:00</span>`;
  },

  render() {
    // Sets up the DOM
    this.$el.html(this.template(this.model));

    return this.$el;
  },
});

export default Backbone.View.extend({
  collection: null,

  tagName: 'ul',

  attributes: {
    class: 'run-list',
  },

  initialize() {
    // Setup events
    this.listenTo(this.collection, 'change reset add remove', this.render);

    // Make sure that if no new items are fetched we still see something on screen
    this.render();
  },

  render() {
    this.$el.empty();

    // For each item in collection make a new 'li'
    this.collection.forEach((run) => {
      var listItem = new RunView({model: run});

      this.$el.append(listItem.render());
    });

    this.$el.append(`<li class="new-btn">
      <a href="#new" class="plus button"><i class="fa fa-plus"></i></a>
    </li>`);
  },
});
