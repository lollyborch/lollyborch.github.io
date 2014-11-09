var html = '<script src="http://hackyourwebsite.com/eviljavascript.js"></script>';

var charEscape = function(_html) {
    var newHTML = _html;
    newHTML = encodeURI(newHTML);
    // How will you make sure that newHTML doesn't contain any < or > ?
    // Your code goes here!

    // Don't delete this line!
    return newHTML;
};

// Did your code work? The line below will tell you!
console.log(charEscape(html));

var name = "Lilly Hope Borchardt"
var role = "Front End Ninja"

var formattedName = HTMLheaderName.replace("%data%", name);
var formattedRole = HTMLheaderRole.replace("%data%", role);

$("#header").prepend(formattedName, formattedRole);

var bio={
	"name" : "Lilly Hope Borchardt",
	"role" : "Front End Ninja",
	"contacts" : {
		"email" : "hello@lillyhb.com",
		"twitter" : "https://twitter.com/lillyborchardt",
		"linkedin" : "https://www.linkedin.com/pub/lilly-borchardt",
		"tumblr" : "http://lollyandbee.tumblr.com/",
		"pinterest" : "http://www.pinterest.com/lollyborch/",
		"location" : "Brisbane, Queensland, Australia"
	},
	"pic" : "http://lillyhb.com/images/about-image2.png",
	"welcome" : "My name is Lilly and I like to create things with pixels, vectors, and code.",
	"skills" : ["graphic design", "publication design", "typography", "illustration", "social media wrangling", "web design", "HTML/CSS", "Javascript/jQuery", "JSON", "tea drinking", "kitten taming" ]
};

$("#main").append(bio.welcome);


var education = {
	"uni": [
		{
			"name" : "The University of Queensland",
			"degree" : "Masters of Interaction Design",
			"skills" : ["HTML/CSS", "Javascript/jQuery", "Human-Computer Interaction", "User Centered Design", "Python" ],
			"year" : "2016 (expected)",
			"location" : "St Lucia, Queensland, Australia"

		},
		{
			"name" : "Udacity",
			"degree" : "Front-End Web Developer Nanodegree",
			"skills" : ["HTML & CSS", "Git and GitHub", "Javascript", "jQuery", "Object Oriented Javascript", "Website Performance Optimisation", "AJAX" ],
			"year" : "2015 (expected)"

		},
		{
			"name" : "Grenadi School of Design",
			"degree" : "Certificate in Web Design",
			"year" : "2012",
			"location" : "Melbourne, Victoria, Australia"

		},
		{
			"name" : "Grenadi School of Design",
			"degree" : "Diploma of Graphic Design",
			"year" : "2011",
			"location" : "Melbourne, Victoria, Australia"

		},
		{
			"name" : "The University of Queensland",
			"degree" : "Bachelor of Arts",
			"year" : "2008",
			"location" : "St Lucia, Queensland, Australia"
		}
	]
};

var work = {
	"design": [
		{
			"Employer" : "UQ Library",
			"role" : "Graphic Designer",
			"years" : "May 2012 - current",
			"location" : "St Lucia, Queensland, Australia",
			"Description" : "Provide high quality graphic design services including creative solutions, concepts and designs for a variety of publications types including print, display and online."

		},
		{
			"Employer" : "Lilly HB",
			"role" : "Freelance Graphic Designer",
			"years" : "November 2010 - current",
			"location" : "Fairfield, Queensland, Australia",
			"Description" : "Provide design solutions for a range of corporate clients and individuals"

		},
		{
			"Employer" : "Moustache Magazine",
			"role" : " Graphic Designer",
			"years" : "December 2011 - June 2012",
			"location" : "Fortitude Valley, Queensland, Australia",
			"Description" : "6 month design internship for Moustache Magazine"

		},
		{
			"Employer" : "Bluestar Go",
			"role" : "Graphic Designer/Internal Sales Coordinator",
			"years" : "February 2009 - May 2012",
			"location" : "St Lucia, Queensland, Australia",
			"Description" : "Provide a range of design solutions for UQ and and other corporate clients."
		}
	]
};

var projects = {
  "projects": [
    {
      "title" : "Lilly HB Website",
      "date" : "2014",
      "pic" : ["images/project1.png"],
      "description" : "Portfolio website built from scratch <a href='http://lillyhb.com'>http://lillyhb.com</a>"

    },
    {
      "title" : "Portfolio Mockup to HTML",
      "date" : "2014",
      "pic" : ["images/project2.png"],
      "description" : "Udacity Project 1 - HTML/CSS <a href='http://lollyborch.github.io/P1/P1.html'>http://lollyborch.github.io/P1/P1.html</a>"
    },
    {
      "title" : "Interactive Resume",
      "date" : "2014",
      "description" : "Udacity Project 2 - Javascript <a href='http://lollyborch.github.io/P2/P2.html'>http://lollyborch.github.io/P2/P2.html</a>"
    },
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
  ]
};

if (bio.skills.length > 0) {
	$("#header").append(HTMLskillsStart);

	var formattedSkill = HTMLskills.replace(
		"%data%", bio.skills[0]);
	$("#skills").append(formattedSkill);
	formattedSkill = HTMLskills.replace(
		"%data%", bio.skills[1]);
	$("#skills").append(formattedSkill);
	formattedSkill = HTMLskills.replace(
		"%data%", bio.skills[2]);
	$("#skills").append(formattedSkill);
	formattedSkill = HTMLskills.replace(
		"%data%", bio.skills[3]);
	$("#skills").append(formattedSkill);
}

function displayWork() {
	for (job in work.design) {
		$("#workExperience").append(HTMLworkStart);

		//combine employer and position into formattedJobBiz
		var formattedEmployer = HTMLworkEmployer.replace("%data%", work.design[job].Employer);
		var formattedTitle = HTMLworkTitle.replace("%data%", work.design[job].role);
		var formattedJobBiz = formattedEmployer + formattedTitle ;
		$(".work-entry:last").append(formattedJobBiz);

		//add work dates
		var formattedYears = HTMLworkDates.replace("%data%", work.design[job].years);
		$(".work-entry:last").append(formattedYears);

		//add work description
		var formattedDescription = HTMLworkDescription.replace("%data%", work.design[job].Description);
		$(".work-entry:last").append(formattedDescription);
	}
}

displayWork();

//log x and y locations of clicks to console
$(document).click(function(loc) {
	var x = loc.pageX;
	var y = loc.pageY;

	logClicks(x,y);
});

//log work locations to console
function locationizer(work_obj) {
	var locationArray = [];

	for (job in work_obj.design) {
		var newLocation = work_obj.design[job].location;
		locationArray.push(newLocation);
	}

	return locationArray;
}

console.log(locationizer(work));

//internationalise name by all caps last
function inName(name) {
	var arrayname = bio.name.trim().split(" ");
	console.log(arrayname);
	arrayname[1] = arrayname[1].toUpperCase();
	arrayname[2] = arrayname[2].toUpperCase();
	arrayname[0] = arrayname[0].slice(0,1).toUpperCase() + arrayname[0].slice(1).toLowerCase();

	return arrayname[0] + " " + arrayname[1] + " " + arrayname[2];

}
$('#main').prepend(internationalizeButton);



projects.display = function () {
  for (item in projects.projects) {
    $("#projects").append(HTMLprojectStart);

      var formattedProjTitle = HTMLprojectTitle.replace("%data%", projects.projects[item].title);
      $(".project-entry:last").append(formattedProjTitle);

      var formattedProjDate = HTMLprojectDates.replace("%data%", projects.projects[item].date);
      $(".project-entry:last").append(formattedProjDate);

      var formattedProjDesc = HTMLprojectDescription.replace("%data%", projects.projects[item].description);
      $(".project-entry:last").append(formattedProjDesc);

      if (projects.projects[item].pic.length > 0) {
        for (image in projects.projects[item].pic) {
          var formattedProjImg = HTMLprojectImage.replace("%data%", projects.projects[item].pic[image]);
          $(".project-entry:last").append(formattedProjImg);
        }

      }

  }
}

projects.display();

$("#mapDiv").append(googleMap);

