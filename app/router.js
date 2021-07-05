import EmberRouter from '@ember/routing/router';
import config from 'crud/config/environment';

export default class Router extends EmberRouter {
  location = config.locationType;
  rootURL = config.rootURL;
}

Router.map(function () {
  this.route('login');
  this.route('post', { path: '/posts/:id' });
  this.route('create');
  this.route('update', { path: '/update/:id' });
});
