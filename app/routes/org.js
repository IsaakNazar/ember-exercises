import Ember from 'ember';
import Constants from '../constants';

export default Ember.Route.extend({
 model(params) {
	 return $.get(`https://api.github.com/orgs/${params.id}?access_token=${Constants.Token}`).then(rawOrg => {
		 rawOrg.oldId = rawOrg.id;
		 rawOrg.id = rawOrg.name;
		 return rawOrg;
	 })

 }
});
