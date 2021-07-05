import Route from '@ember/routing/route';

export default class Update extends Route {
  model(params: any) {
    return this.store.findRecord('post', params.id);
  }
}
