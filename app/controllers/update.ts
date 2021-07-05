import Controller from '@ember/controller';
import { action } from '@ember/object';
import { tracked } from '@glimmer/tracking';
export default class Update extends Controller {
  @tracked declare title: string;
  @tracked declare body: string;
  @action
  UpdateTitle(event: any): void {
    this["title"] = event.target.value;
  }
  @action
  UpdateBody(event: any): void {
    this["body"] = event.target.value;
  }
  @action
  Update(event: any): void {
    event.preventDefault();
    this.model.title = this.title;
    this.model.body = this.body;
    let post = this.model;
    post.save().then(() => this.transitionToRoute('post', post.id));
  }
}

// DO NOT DELETE: this is how TypeScript knows how to look up your controllers.
declare module '@ember/controller' {
  interface Registry {
    'update': Update;
  }
}
