import { Factory } from 'ember-cli-mirage';
export default Factory.extend({
  title() {
    return 'titre';
  },
  body() {
    return 'test';
  },
});
