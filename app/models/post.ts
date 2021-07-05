import DS from 'ember-data';

export default class Post extends DS.Model.extend({
  title: DS.attr('string'),
  body: DS.attr('string')
}) {
  // normal class body definition here
}

// DO NOT DELETE: this is how TypeScript knows how to look up your models.
declare module 'ember-data/types/registries/model' {
  export default interface ModelRegistry {
    'post': Post;
  }
}
