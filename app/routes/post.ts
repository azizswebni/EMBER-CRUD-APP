import Route from '@ember/routing/route';

export default class Post extends Route {
  model(params: any) {
    return this.store.findRecord('post', params.id);
  }
}
