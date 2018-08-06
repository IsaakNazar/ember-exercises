import Ember from 'ember';
import isInArray from '../utils/is-in-array';

export default Ember.Component.extend({
	tagName: 'li',
	favorites: Ember.inject.service(),
	isFavorited: isInArray('org', 'favorites.items'),
	actions: {
		favWasClicked() {
			this.sendAction('on-fav-clicked', this.get('org'))
		}
	}
});
