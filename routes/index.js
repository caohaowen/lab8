var projects = require('../projects.json');

/*
 * GET home page.
 */

exports.view = function(req, res){
	var grid = {'grid' :false};
  	res.render('index', {
  		projects:projects.projects, 
  		grid:false});
};

exports.viewGrid = function(req, res){
	var grid = {'grid' :true};
  	res.render('index', {
  		projects:projects.projects, 
  		grid:true});
};