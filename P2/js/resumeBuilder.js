var name = "Lilly Hope Borchardt"
var role = "&nbsp; Front End Ninja"

var formattedName = HTMLheaderName.replace("%data%", name);
var formattedRole = HTMLheaderRole.replace("%data%", role);

$("#header").prepend(formattedName, formattedRole);

var biopic = "http://lillyhb.com/images/about-image2.png";
var formattedbioPic = HTMLbioPic.replace("%data%", biopic);
$("#header").prepend(formattedbioPic);

var bio={
	"name" : "Lilly Hope Borchardt",
	"role" : "Front End Ninja",
	"contacts" : {
		"email" : "<a href='mailto:hello@lillyhb.com'>hello@lillyhb.com</a>",
		"twitter" : "<a href='https://twitter.com/lillyborchardt'>@lillyborchardt</a>",
		"linkedin" : "<a href='https://www.linkedin.com/pub/lilly-borchardt'>Lilly Borchardt</a>",
		"location" : "Brisbane, Queensland, Australia",
		"github" : "<a href='http://lollyborch.github.io/'>lollyborch</a>"
	},
	"pic" : "http://lillyhb.com/images/about-image2.png",
	"welcome" : "Hello :) My name is Lilly and I like to create things with pixels, vectors, and code.  I am a designer &amp; front-end developer based in Brisbane, Australia.",
	"skills" : ["graphic design", "typography", "illustration", "web design", "HTML/CSS", "Javascript/jQuery", "kitten taming" ]
};

bio.display = function() {
  
  $("#findme").prepend(HTMLcontactStart);

  var formattedEmail = HTMLemail.replace("%data%", bio.contacts.email);
  $("#topContacts").append(formattedEmail);
  $("#footerContacts").append(formattedEmail);
  var formattedGithub = HTMLgithub.replace("%data%", bio.contacts.github);
  $("#topContacts").append(formattedGithub);
  $("#footerContacts").append(formattedGithub);
  var formattedLinkedin = HTMLlinkedin.replace("%data%", bio.contacts.linkedin);
  $("#topContacts").append(formattedLinkedin);
  $("#footerContacts").append(formattedLinkedin);
  var formattedTwitter = HTMLtwitter.replace("%data%", bio.contacts.twitter);
  $("#topContacts").append(formattedTwitter);
  $("#footerContacts").append(formattedTwitter);
  var formattedWelcomeMsg = HTMLWelcomeMsg.replace("%data%", bio.welcome);
  $("#aboutme").append(formattedWelcomeMsg);

  if (bio.skills.length > 0) {
	$("#madskills").append(HTMLskillsStart);

	var formattedSkill = HTMLskills.replace("%data%", bio.skills[0]);
	$("#skills").append(formattedSkill);
	formattedSkill = HTMLskills.replace("%data%", bio.skills[1]);
	$("#skills").append(formattedSkill);
	formattedSkill = HTMLskills.replace("%data%", bio.skills[2]);
	$("#skills").append(formattedSkill);
	formattedSkill = HTMLskills.replace("%data%", bio.skills[3]);
	$("#skills").append(formattedSkill);
	formattedSkill = HTMLskills.replace("%data%", bio.skills[4]);
	$("#skills").append(formattedSkill);
	formattedSkill = HTMLskills.replace("%data%", bio.skills[5]);
	$("#skills").append(formattedSkill);
	formattedSkill = HTMLskills.replace("%data%", bio.skills[6]);
	$("#skills").append(formattedSkill);
  }
};






var education = {
	"uni": [
		{
			"name" : "The University of Queensland",
			"degree" : "Masters of Interaction Design",
			"skills" : ["HTML/CSS", "&nbsp; Javascript/jQuery", "&nbsp; Human-Computer Interaction", "&nbsp; User Centered Design" ],
			"year" : "2016 (expected)",
			"location" : "St Lucia, Queensland, Australia"

		},
		{
			"name" : "Udacity",
			"degree" : "Front-End Web Developer Nanodegree",
			"skills" : ["HTML/CSS", "&nbsp; Javascript/jQuery" ],
			"year" : "2015 (expected)"

		},
		{
			"name" : "Grenadi School of Design",
			"degree" : "Certificate in Web Design",
			"skills" : ["HTML/CSS" ],
			"year" : "2012",
			"location" : "Melbourne, Victoria, Australia"

		},
		{
			"name" : "Grenadi School of Design",
			"degree" : "Diploma of Graphic Design",
			"skills" : ["Typography", "&nbsp; Publication Design", "&nbsp; Advertising", "&nbsp; Branding" ],
			"year" : "2011",
			"location" : "Melbourne, Victoria, Australia"

		},
		{
			"name" : "The University of Queensland",
			"degree" : "Bachelor of Arts",
			"skills" : ["Music" ],
			"year" : "2008",
			"location" : "St Lucia, Queensland, Australia"
		}
	],

	"online": [
		{
			"title" : "Intro to HTML and CSS",
			"school" : "Udacity",
			"year" : "2014",
			"url" : "https://www.udacity.com"

		},
		{
			"title" : "Javascript Basics",
			"school" : "Udacity",
			"year" : "2014",
			"url" : "https://www.udacity.com"

		},
		{
			"title" : "Intro to jQuery",
			"school" : "Udacity",
			"year" : "2014",
			"url" : "https://www.udacity.com"

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
      "pic" : ["images/project2.png"],
      "description" : "Udacity Project 2 - Javascript <a href='http://lollyborch.github.io/P2/P2.html'>http://lollyborch.github.io/P2/P2.html</a>"
    }
  ]
};


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
};

education.display = function (){
  for (university in education.uni) {
  	$("#education").append(HTMLschoolStart);

  	var formattedUnidegree = HTMLschoolDegree.replace("%data%", education.uni[university].degree);
  	$(".education-entry:last").append(formattedUnidegree);

  	var formattedUniname = HTMLschoolName.replace("%data%", education.uni[university].name);
  	var formattedUnidate = HTMLschoolDates.replace("%data%", education.uni[university].year);
  	var formattedUninamedate = formattedUniname + formattedUnidate ;
  	$(".education-entry:last").append(formattedUninamedate);

	var formattedUniskills = HTMLschoolMajor.replace("%data%", education.uni[university].skills);
  	$(".education-entry:last").append(formattedUniskills);
  }


  $(".education-entry:last").append(HTMLonlineClasses);

  for (course in education.online) {
      
	var formattedOnlinetitle =  HTMLonlineTitle.replace("%data%", education.online[course].title);
	$(".education-entry:last").append(formattedOnlinetitle);
	  
	var formattedOnlineedu =  HTMLonlineSchool.replace("%data%", education.online[course].school);
	var formattedOnlineyear =  HTMLonlineDates.replace("%data%", education.online[course].year);
	var formattedOnlineEduYear = formattedOnlineedu + formattedOnlineyear ;
	$(".education-entry:last").append(formattedOnlineEduYear);
	   
	var formattedOnlineURL =  HTMLonlineURL.replace("%data%", education.online[course].url).replace("#", education.online[course].url);
	$(".education-entry:last").append(formattedOnlineURL);
  
  }

}; 

bio.display();
displayWork();
projects.display();
education.display();


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
$('#header').append(internationalizeButton);


$("#mapDiv").append(googleMap);

