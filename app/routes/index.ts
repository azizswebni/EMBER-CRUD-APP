import Route from '@ember/routing/route';

export default class Index extends Route {
  /* 
  beforeModel(transition: any) {
    this.session.requireAuthentication(transition, 'login');
  } */
  model() {
    let posts = this.store.findAll('post');
    return posts;
  }
}
