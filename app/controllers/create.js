import Controller from '@ember/controller';
import { action } from '@ember/object';
import { tracked } from '@glimmer/tracking';

export default class Create extends Controller {
  @tracked title;
  @tracked body;
  @action
  update(attr, event) {
    this[attr] = event.target.value;
    console.log(this.title, this.body);
  }

  @action
  Create(event) {
    event.preventDefault();

    let post = this.store.createRecord('post', {
      title: this.title,
      body: this.body,
    });

    post.save().then(() => this.transitionToRoute('post', post.id));
  }
}
