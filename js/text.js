$(document).ready(function(){
    $("#aboutHeader").html(aboutMe.header);
    $("#aboutMain").html(aboutMe.main);

    $("#principalHeader").html(principal.header);
    $("#principalMain").html(principal.main);
    $("#principalSecondary").html(principal.secondary);
    $("#principalCodeJam").html(principal.codeJam);

    $("#cernerHeader").html(cerner.header);
    $("#cernerMain").html(cerner.main);

    $("#norwayHeader").html(studyAbroad.header);
    $("#norwayMain").html(studyAbroad.main);

    $("#climbing").html(besidesCoding.climbing);
    $("#volunteering").html(besidesCoding.volunteering);
    $("#travel").html(besidesCoding.travel);

    $("#java").html(languages.java);
    $("#javascript").html(languages.javascript);
    $("#python").html(languages.python);
    $("#sql").html(languages.sql);
    $("#php").html(languages.php);
    $("#html").html(languages.html);
});

var aboutMe = {
    header: "I am currently on track to complete my Bachelor of Science at Iowa State University in Software Engineering in December of 2018.",
    main: "I was first introduced to programming by my father in sixth grade when he taught me html to create a website. Later in high school, after taking some intro engineering courses and a basic Java class, I knew that Iowa State was the school for me. I first declared Computer Engineering as my major but later switched to Software after my sophomore year. Since coming to Iowa State, I have learned a laundry list of programming languages, various tools and frameworks that are used in the industry and secured my first internship at Principal Financial. I have also studied abroad in Norway and have participated in a number of clubs during my time at Iowa State."};

var principal = {
    header: "<strong>Principal Financial Group:</strong> I worked as an Application Development Support Intern on the ITSM and ESM Support Team during the summer of 2017.<br><button class=\"btn btn-default btn-sm button workToggle\">More</button>",
    main: "<strong>Main Role:</strong> Over the summer I redesigned and developed a business object for the ITSM and ESM support team. I worked with another intern to communicate with the product owner about the various business requirements and implement them in an intuitive way. After some training in how to use Principal\'s software and brainstorming for what should be included we were given the freedom to work on the project for the summer. The other intern and I delegated tasks and managed our time between working on this project and our other projects.<br>The most exciting thing for me on this project was that it was codeless which was not something I had been exposed to before this. In addition to that learning curve I worked in an Agile environment and worked on a team with experts in the field. At the end of the summer I worked with my mentor to put our project into production and was able to experience other people at the company use what I had been working on.",
    secondary: "<strong>Desired States Configuration Project:</strong> My second project was to create a web application to host settings for desired server states. I worked on this project with a team of 13 other interns split up into various roles. I worked on the front-end team for the project, using html and JavaScript for the most part, as well as a Principal specific bootstrap framework. I also took the lead in connecting the front-end and back in towards the end of the summer using php. We managed to create a product that was a major improvement over their previous solution. After the interns left for the summer Principal assigned a team to our project to expand on it which was their plan at the start of the summer.",
    codeJam: "<strong>Principal Code Jam:</strong> Every year Principal conducts a code jam where they take all the IT interns and put them into teams of six. Each team is then given a project and they have four days to complete it, after which all the teams give presentations on their respective projects.<br>My team was tasked with creating a data scraper for a team in the Principal Global Investors division. They wanted us to find news articles that were relevant to business openings and closings, store that information in a database, and then display it in a web application. I did not know python before we started this project so I had to learn it quickly and then was able to create the data scraper for our team. After the teams gave their presentations ours was recognized as one of the top three teams, in no particular order. Towards the end of the summer we had a meeting to hand off the project to a full-time team at Principal that would be able to finish a production ready version of our project."};

var cerner = {
    header: "<strong>Cerner Corporation:</strong> During the summer of 2018 I will be working as a Software Intern for Cerner at their Innovations Campus in Kansas City.<br><button class=\"btn btn-default btn-sm button workToggle\">More</button>",
    main: "<strong>Start Date:</strong> May 23rd, 2018."};

var languages = {
    java: "I have taken Java courses in high school and college. I have created a few projects using this language, including an Android App that utilizes Wi-Fi peer-to-peer to share music.",
    ruby: "",
    javascript: "I have used JavaScript a number of times in various projects and in course work. Most notably I used JS in my Desired States Configuration project at Principal this past summer. I was introduced to the language in one of my courses during my Junior year.",
    python: "During Principal's Code Jam this past summer I needed to pick up python quickly and use it to create a data scraper for our web app. Since then I have created a few other data scrapers for my own entertainment using python. Besides that, I have been doing various coding problems on the internet to improve my skills with python.",
    sql: "After learning MySQL in a databases course at Iowa State I have had the opportunity to use the language in several projects. I worked with a group of three other students to set up a database and use SQL statements to add and delete data in an Android App we created.",
    php: "During my internship at Principal I had the chance to use php in our Desired States Configuration project. I led the effort in connecting our front-end and back end as I had the most experience with the language. We created a solid foundation for the company to build off once our internships ended.",
    html: "My dad taught me html and guided me in creating my first website when I was in sixth grade. I created a website for National History Day which is a competition in which students are given a topic to research and then make a presentation about it. I had a lot of fun making it and ever since have been interested in programming."
};

var studyAbroad = {
    header: "I had the opportunity to spend my fall semester of sophomore year in Trondheim, Norway at the Norwegian University of Science and Technology (NTNU).",
    main: "I took classes that I was able to apply to my major at Iowa State, as well as study a foreign language, experience new culture, make friends from around the world, and travel all over Europe. While in Trondheim I took courses in Norwegian language, climate change, Differential Equations, and Norwegian history. I learned how to manage my time efficiently while taking a full course load, and doing my best to travel and explore the country and culture as much as I could at the same time. I made friends from all over Europe and gained insight in how to effectively communicate with people from different backgrounds and whose first language isn't English. I'm very lucky I had the opportunity to do this through Iowa State's study abroad program and I recommend it to everyone if they can."
};

var besidesCoding = {
    climbing: "I started rock climbing the summer before my freshman year at Iowa State and have been obsessed with it ever since. I climb indoors when I am in school and take trips to go climbing outdoors with my friends when I can. My favorite spot that I have been is Flatanger, Norway, which has some of the most beautiful climbing in the world. Some closer spots that are fun to go to as well are in Blue Mounds, Minnesota and Devil's Lake Wisconsin.",
    volunteering: "I spent two summers in high school on the Student Leadership Board for Meals from the Heartland. They are a charity that packages meals to send to people in need in Iowa and all over the world. Find out more about them here!<br><strong><a href=\"https://mealsfromtheheartland.org\" target=\"_blank\">https://mealsfromtheheartland.org</a></strong><br><br>I am also a founding member of Generation Pay It Forward which is an organization to raise money to provide underprivileged middle schoolers from my home town of Johnston, IA with free and reduced meals on weekends. Click the link below to find out more.<br><strong><a href=\"https://www.generationpayitforward.com\" target=\"_blank\">https://www.generationpayitforward.com</a></strong>",
    travel: "I love to travel and take the opportunity to whenever I have the time and money (which can be tough as a student). I've have visited a range of national parks with friends and family. I found out how much I want to explore Europe after I studied abroad my sophomore year. Besides Norway I have been to Poland, France, Belgium, and the Netherlands but I am looking to add more to that list as soon as I can!"
};
