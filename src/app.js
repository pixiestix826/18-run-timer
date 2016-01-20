import Router from './router';

export default function() {
  var r = new Router();

  Backbone.history.start();
}
