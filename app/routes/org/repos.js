import Ember from 'ember';

export default Ember.Route.extend({
	model() {
		let orgId = Ember.get(this.modelFor('org'), 'login');
		return $.get(`https://api.github.com/orgs/${orgId}/repos?access_token=964ca690458ff5533a6a1bbddda9630ae4035025`).then(rawRepos => {
			return rawRepos.map(rawRepo => {
				rawRepo.oldId = rawRepo.id;
				rawRepo.id = rawRepo.name;
				
				return rawRepo;
				
			})
		})
		
	}
});
