import Route from '@ember/routing/route';

export default class Create extends Route {
  model() {
    this.store
      .createRecord('post', {
        title: 'tite',
        body: 'body',
      })
      .save();
    return this.store.findAll('post');
  }
}
