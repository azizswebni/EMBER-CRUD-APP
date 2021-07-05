import Controller from '@ember/controller';
import { action } from '@ember/object';
export default class Index extends Controller {
  @action
  deletePost(post: any):void {
    post.destroyRecord();
  }
}

// DO NOT DELETE: this is how TypeScript knows how to look up your controllers.
declare module '@ember/controller' {
  interface Registry {
    'index': Index;
  }
}
