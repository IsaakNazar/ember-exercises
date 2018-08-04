import Ember from 'ember';

export default Ember.Route.extend({
	model(params) {
		let org = this.modelFor('org')
		return $.get(`https://api.github.com/repos/${org.id}/${params.repoid}?access_token=964ca690458ff5533a6a1bbddda9630ae4035025`).then(rawRepo => {
		 rawRepo.oldId = rawRepo.id;
		 rawRepo.id = rawRepo.name;
		 return rawRepo;
	 })
	}
});
