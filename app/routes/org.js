import Ember from 'ember';

export default Ember.Route.extend({
 model(params) {
	 return $.get(`https://api.github.com/orgs/${params.id}?access_token=964ca690458ff5533a6a1bbddda9630ae4035025`).then(rawOrg => {
		 rawOrg.oldId = rawOrg.id;
		 rawOrg.id = rawOrg.name;
		 return rawOrg;
	 })

 }
});
