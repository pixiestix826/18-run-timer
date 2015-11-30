var ListItem = Backbone.View.extend({
  model: null,

  tagName: 'li',

  initialize() {
    // Wire up model events
  },
  render () {
    // Sets up the DOM
    this.$el.html(`
      ${this.model.get('date')} - ${this.model.get('time')}

        <a href="#"><i class="fa fa-plus-circle"></i></i></a>
        `);
      return this.$el;
    }
});

export default Backbone.View.extend({
  collection: null,

  tagName: 'ul',

  initialize(){
    // Setup events
    this.listenTo(this.collection, 'change reset add remove', this.render);

    // Make sure that if no new items are fetched we still see something on screen
    this.render();
  },

  render() {
    this.$el.empty();

    // For each item in collection make a new 'li'
    this.collection.forEach((post) => {
      var listItem = new RunPost({model: post});

      this.$el.append(listItem.render());
    })
  }
})
