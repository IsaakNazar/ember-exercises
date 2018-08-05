import Ember from 'ember';
import { resolve, reject } from 'rsvp';

export default Ember.Route.extend({
  model() {
		return new Ember.RSVP.Promise((resolve, reject) => {
			Ember.run.later(() => {
				resolve([
					{id: 'emberjs'},
					{id: 'ember-cli'},
					{id: 'microsoft'},
					{id: 'yahoo'},
					{id: 'netflix'},
					{id: 'facebook'}
				])
			}, 2000)
		})
	},
	favorites: Ember.inject.service(),
	
	actions: {
		showItems(value){
			this.get('favorites.items').pushObject(value)
			console.log(this.get('favorites.items').join(", "))
		}
	}
});
