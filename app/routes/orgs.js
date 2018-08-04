import Ember from 'ember';

export default Ember.Route.extend({
  model() {
    return [
      {id: 'emberjs'},
      {id: 'ember-cli'},
      {id: 'microsoft'},
      {id: 'yahoo'},
      {id: 'netflix'},
      {id: 'facebook'}
    ]
	},
	favorites: Ember.inject.service(),
	
	actions: {
		showItems(value){
			this.get('favorites.items').pushObject(value)
			console.log(this.get('favorites.items').join(", "))
		}
	}
});
