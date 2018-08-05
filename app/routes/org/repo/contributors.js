import Ember from 'ember';
import org from '../../org';
import Constants from '../../../constants';

export default Ember.Route.extend({
	model() {
		let orgId = Ember.get(this.modelFor('org'), 'login');let repoId = Ember.get(this.modelFor('org.repo'), 'name');
		
		return $.get(`https://api.github.com/repos/${orgId}/${repoId}/contributors?access_token=${Constants.Token}`).then(rawContributors => {
			return rawContributors.map(rawCont => {
				rawCont.oldId = rawCont.id;
				rawCont.id = rawCont.name;
				
				return rawCont;
				
			})
		})
	}
});
