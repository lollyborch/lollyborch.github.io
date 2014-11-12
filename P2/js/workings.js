//$("#main").append("Lilly Borchardt");
//var firstName = "Lilly";
//var age = 30;
//var awesomeThoughts = "I am Lilly and I am Awesome!"
//console.log(awesomeThoughts);
//var funThoughts = awesomeThoughts.replace("Awesome", "Fun");
//$("#main").append(funThoughts);
//console.log(funThoughts);

var name = "Lilly"
var role = "Front End Ninja"

var formattedName = HTMLheaderName.replace("%data%", name);
var formattedRole = HTMLheaderRole.replace("%data%", role);

$("#header").prepend(formattedName, formattedRole);

var skills = ["awesomeness", "programming", "teaching", "JS"];

//$("#main").append(skills);
//$("#main").append(skills[0]);

//$("#main").append(skills.length);

var bio={
	"name" : "Lilly",
	"role" : "Front End Ninja",
	"contact" : {
		"email" : "hello@lillyhb.com",
		"twitter" : "@lillyborchardt"
	},
	"pic" : "http://lillyhb.com/images/about-image2.png",
	"welcome" : "My name is Lilly and I like to create things with pixels, vectors, and code.",
	"skills" : skills
};

$("#main").append(bio.welcome);

bio["city"] = "Brisbane";


var work = {};
work.position = "Graphic Designer";
work.employer = "UQ Library";

//var education = {};
//education["name"] = "The University of Queensland";
//education["degree"] = "Masters of Interaction Design";
//education["year"] = "2016";

$("#main").append(work["position"]);
//$("#main").append(education.name);

var education = {
	"uni": [
		{
			"name" : "The University of Queensland",
			"degree" : "Masters of Interaction Design",
			"year" : "2016"

		},
		{
			"name" : "Grenadi School of Design",
			"degree" : "Diploma of Graphic Design",
			"year" : "2011"
		}
	]
};


//Projects list

		{
			"title" : "Classic Arcade Game Clone",
			"date" : "TBC",
			"description" : "Udacity Project 3 - Object Oriented Javascript"
		},
		{
			"title" : "Website Optimisation",
			"date" : "TBC",
			"description" : "Udacity Project 4 - Website Optimisation"
		},
		{
			"title" : "Neighbourhood Map",
			"date" : "TBC",
			"description" : "Udacity Project 5 - Javascript Design Patterns"
		},
		{
			"title" : "Project 6",
			"date" : "TBC",
			"description" : "Udacity Project 6"
		},
		{
			"title" : "Project 7",
			"date" : "TBC",
			"description" : "Udacity Project 7"
		}


