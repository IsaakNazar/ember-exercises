import Ember from 'ember';
import { resolve, reject } from 'rsvp';

export default Ember.Route.extend({
  
	favorites: Ember.inject.service(),
	
	actions: {
		showFavoriteItems(org){
			if (this.get('favorites.items').indexOf('org') < 0) {
				this.get('favorites').favoriteItem(org)
			} else {
				this.get('favorites').unfavoriteItem(org)
			}
			
		}
	},
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
	}
});
