import Ember from 'ember';
import org from '../../org';

export default Ember.Route.extend({
	model() {
		let orgId = Ember.get(this.modelFor('org'), 'login');let repoId = Ember.get(this.modelFor('org.repo'), 'name');
		
		return $.get(`https://api.github.com/repos/${orgId}/${repoId}/contributors?access_token=964ca690458ff5533a6a1bbddda9630ae4035025`).then(rawContributors => {
			return rawContributors.map(rawCont => {
				rawCont.oldId = rawCont.id;
				rawCont.id = rawCont.name;
				
				return rawCont;
				
			})
		})
	}
});
