import Ember from 'ember';
import Constants from '../../constants';

export default Ember.Route.extend({
	model(params) {
		let org = this.modelFor('org')
		return $.get(`https://api.github.com/repos/${org.id}/${params.repoid}?access_token=${Constants.Token}`).then(rawRepo => {
		 rawRepo.oldId = rawRepo.id;
		 rawRepo.id = rawRepo.name;
		 return rawRepo;
	 })
	}
});
