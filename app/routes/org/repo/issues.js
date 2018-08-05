import Ember from 'ember';
import Constants from '../../../constants';

export default Ember.Route.extend({
	model() {
		let orgId = Ember.get(this.modelFor('org'), 'login');let repoId = Ember.get(this.modelFor('org.repo'), 'name');
		
		return $.get(`https://api.github.com/repos/${orgId}/${repoId}/issues?access_token=${Constants.Token}`).then(rawIssues => {
			return rawIssues.map(rawIssue => {
				rawIssue.oldId = rawIssue.id;
				rawIssue.id = rawIssue.name;
				
				return rawIssue;
				
			})
		})
	}
});
