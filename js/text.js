$(document).ready(function(){
    $("#aboutHeader").html(aboutMe.header);
    $("#aboutMain").html(aboutMe.main);

    $("#principalHeader").html(principal.header);
    $("#principalMain").html(principal.main);
    $("#principalSecondary").html(principal.secondary);
    $("#principalCodeJam").html(principal.codeJam);
});

var aboutMe = {
    header : "I am currently on track to complete my Bachelor of Science at Iowa State University in Software Engineering in December of 2018.",
    main : "I was first introduced to programming by my father in sixth grade when he taught me html to create a website. Later in high school, after taking some intro engineering courses and a basic Java class, I knew that Iowa State was the school for me. I first declared Computer Engineering as my major but later switched to Software after my sophomore year. Since coming to Iowa State, I have learned a laundry list of programming languages, various tools and frameworks that are used in the industry and secured my first internship at Principal Financial. I have also studied abroad in Norway and have participated in a number of clubs during my time at Iowa State."};

var principal = {
    header : "<strong>Principal Financial Group:</strong> I worked as an Application Development Support Intern on the ITSM and ESM Support Team during the summer of 2017.<br><button class=\"btn btn-default btn-sm button workToggle\">More</button>",
    main : "<strong>Main Role:</strong> Over the summer I redesigned and developed a business object for the ITSM and ESM support team. I worked with another intern to communicate with the product owner about the various business requirements and implement them in an intuitive way. After some training in how to use Principal\'s software and brainstorming for what should be included we were given the freedom to work on the project for the summer. The other intern and I delegated tasks and managed our time between working on this project and our other projects.<br>The most exciting thing for me on this project was that it was codeless which was not something I had been exposed to before this. In addition to that learning curve I worked in an Agile environment and worked on a team with experts in the field. At the end of the summer I worked with my mentor to put our project into production and was able to experience other people at the company use what I had been working on.",
    secondary : "<strong>Desired States Configuration Project:</strong> My second project was to create a web application to host settings for desired server states. I worked on this project with a team of 13 other interns split up into various roles. I worked on the front-end team for the project, using html and JavaScript for the most part, as well as a Principal specific bootstrap framework. I also took the lead in connecting the front-end and back in towards the end of the summer using php. We managed to create a product that was a major improvement over their previous solution. After the interns left for the summer Principal assigned a team to our project to expand on it which was their plan at the start of the summer.",
    codeJam : "<strong>Principal Code Jam:</strong> Every year Principal conducts a code jam where they take all the IT interns and put them into teams of six. Each team is then given a project and they have four days to complete it, after which all the teams give presentations on their respective projects.<br>My team was tasked with creating a data scraper for a team in the Principal Global Investors division. They wanted us to find news articles that were relevant to business openings and closings, store that information in a database, and then display it in a web application. I did not know python before we started this project so I had to learn it quickly and then was able to create the data scraper for our team. After the teams gave their presentations ours was recognized as one of the top three teams, in no particular order. Towards the end of the summer we had a meeting to hand off the project to a full-time team at Principal that would be able to finish a production ready version of our project."};

var cerner = "";
var languages = "";
var besidesCoding = "";

