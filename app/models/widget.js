import DS from 'ember-data';

let Widget = DS.Model.extend({
  name: DS.attr('string')
});

Widget.reopenClass({
  FIXTURES: [
    { id: 1, name: 'Test 1' },
    { id: 2, name: 'Test 2' },
    { id: 3, name: 'Test 3' }
  ]
});

export default Widget;
