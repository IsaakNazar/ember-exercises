import Ember from 'ember';

export default Ember.Component.extend({
	isExpanded: true,
	actoins: {
		toggleLinkSection() {
			this.toggleProperty('isExpanded');
			this.sendAction('on-links-toggle');
		}
	}
});
