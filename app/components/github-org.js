import Ember from 'ember';

export default Ember.Component.extend({
	tagName: 'li',
	actions: {
		favWasClicked() {
			this.sendAction('on-fav-clicked', this.get('org'))
		}
	}
});
