function getHackathonsData() {
  return [
    {
      name: "Study With Me",
      timeframe:
        "10/25 - 9 hrs + ~30 hrs from 2/1/2015 - 2/6/2015 + app store release",
      blurb:
        "Released an iOS app through UC Berkeley designed to allow students to broadcast and find current study groups",
      language: "Objective-C",
      event_type: "hackathon",
      repo: "https://github.com/Fortisque/studywithme",
      image_src: "studywithmeupdated.png",
      description: `This started as a hackathon. My partner and I wanted to build an app to help students find study groups. Currently it is difficult to find people
                          that want to study at the same time as you. We won 3rd place in the 2014 Code 4 Cal Hackathon, and then continued developing to win 1st place in
                          the following STC Mobile App Competition. UC Berkeley then invited us to have them launch our application through their name, so we cleaned up
                          the hackathon code and now have an app on the app store`,
    },
    {
      name: "Jarvis",
      timeframe: "2/20/15 - 2/22/15, 36 hours",
      blurb:
        "Submission for TreeHacks. Built a google chrome extension that allows voice control.",
      language: "Chrome Extension",
      event_type: "hackathon",
      repo: "https://github.com/Fortisque/jarvis",
      demo: "https://www.youtube.com/watch?v=tYwndoL8l0I",
      result: "http://challengepost.com/software/jarvis-z2lhh",
      image_src: "jarvis.png",
      description: `We were inspired by Jarvis from Ironman. Our target user is anyone who uses Chrome. 
                          The key feature we are most proud of is the ability to associate a voice command with 
                          arbitrary code on arbitrary page. This allows us to do things such as posting on a friend's wall 
                            by saying "hi" or controlling a SmartThings light bulb with "light". Check out the youtube
                            video from the demo link`,
    },
    {
      name: "Beam",
      timeframe: "12/21/14 - 1/3/15 ~ 10 days",
      blurb:
        "Submission for the Happiness Challenge. Released an iOS app designed to give out daily challenges.",
      language: "Objective-C",
      event_type: "hackathon",
      repo: "https://github.com/Fortisque/beam",
      result: "http://challengepost.com/software/beam-zmfqu",
      image_src: "beam.png",
      description: `My team that I met in IEOR190 decided try the happiness challenge. We wanted to create a simple
                          app that would give you daily challenges. We didn't win, but I had a lot of fun integrating Facebook
                          login, notifications and going through all the steps to get an app on the app store. Beam is a mobile
                          app that motivates you to take a little time out of your day to do things that make you happy. Everyday,
                          Beam gives you a bite-sized happiness challenge that anyone can do, such as “Take a walk outside”, 
                          “Call an old friend”, or “Dance to your favorite song” so you can enhance your health, 
                          better your relationships, or have some fun.`,
    },
    {
      name: "Cool Beans - 3rd Place",
      timeframe: "hackathon (10/19), project October 2014",
      blurb:
        "Finalist in the Play Hackathon. Built a platform to encourage personalized recommendations from friends.",
      language: "Python",
      event_type: "hackathon",
      repo: "https://github.com/aliceliu/TBD",
      image_src: "cool-beans.png",
      description: `My IEOR190 team wanted to pivot, so we decided to try to make this recommendation based app, and for the Play Hackathon we narrowed down
                          our idea to target small/medium businesses. Currently this is a web app designed to be used on mobile. The idea is that people commonly
                          tell each other recommendations on places to go, but the current format is through messages or talking,
                          which can easily be lost/forgotten. From the user's perspective we offer a clean storage for personal recommendations
                          from your friends, an exciting leaderboard and reward opportunities. From the businesses perspective we offer
                          custom analytics and most importantly a way to track word of mouth which is currently impossible to quantify, let alone reward.`,
    },
    {
      name: "Delight",
      timeframe: "September/October 2014",
      blurb:
        "Calhacks submission. Website and mobile app. Scan QR codes on receipts to administer survey and custom analytics.",
      language: "Python",
      event_type: "hackathon",
      repo: "https://github.com/Fortisque/Delight",
      image_src: "delight.png",
      description: `My IEOR190 team worked on this as our project during Cal Hacks (10/3-10/5). We wanted to use this as our class project
                        for mobile entrepreneurship. We managed to link up an Android app to a Google App Engine backend and proved that
                        if we could intercept the payment process and get QR codes on receipts then we could have a beautiful interface to help
                        restaurants gather genuine feedback rather than just the really amazing or terrible reviews. We wanted to give the user a
                        chance to rate each dish and server individually in order to provide analysis which would help businesses make decisions
                        about their products. We interviewed various restaurants, some like Eureka were very enthusiastic about the product, however
                        we found that other restaurants didn't particularly want to even talk to us. We ended up pivoting to the idea to 'Cool-Beans'
                        because we started realizing that the cost to sell this product to businesses would likely be more than the money we would get
                        for the product.`,
    },
    {
      name: "Break it Build it Fix it - 1st Place",
      timeframe: "8/28/14 - 9/23/14",
      blurb:
        "First place in a Security Hackathon. Built an secure log file to describe the state of an art gallery.",
      language: "Python",
      event_type: "hackathon",
      repo: "https://github.com/craighiller/BuildItBreakItFixItForSparta",
      description: `I really enjoyed this competition because we got to use a lot of the concepts we learned from security class. I used an AES cipher,
                  a cryptographically secure random nonce with a magic constant and decided to use the secret token itself to encrypt the log.
                  In the encrypted section we used a JSON 'database' to save the state of the art gallery and a sha256 hash over it. To optimize I used zlib for compression
                  and I dabbled with Cython to try to improve the speed, but Cython didn't seem to improve the speed.`,
    },
    {
      name: "Get Matched - 1st Place",
      timeframe: "7/9/14 - 7/10/14 (2 days)",
      blurb:
        "First place in the Godaddy 2014 Intern Hackathon. Built a web app that allows small business to get matched up in the Tinder model",
      language: "Ruby on Rails",
      event_type: "hackathon",
      repo: "https://github.com/skleung/get-matched",
      image_src: "get-matched.png",
      description: `We used the Locu api in order to pull information about businesses and used a custom algorithm to match up the businesses.
                  The idea being that we only match businesses if both the businesses hit accept on each other.  Search for businesses by filling in needs and search
                  for customers so that both people can accept each other.  Have a custom chat system built in.`,
    },
    {
      name: "Serendipity",
      timeframe: "5/3/14 - 5/4/14 (2 days)",
      blurb:
        "Our entry for the Hackbright for good event! Built a web app that allows people to make wishes and fulfill them with the intent of charity donations fueling the system.",
      language: "Python",
      event_type: "hackathon",
      repo: "https://github.com/craighiller/serendipity",
      image_src: "serendipity.png",
      description: `We wanted this to be a cute app to encourage people to donate to charity and also help random strangers.  We struggled a lot on this because we
                rolled our own user authentication system (which is also completely insecure, sorry).  We managed to get out features of texting through twillio
                and fairly pleasing UI.`,
    },
    {
      name: "Hack FSM - 1st Place",
      timeframe: "4/1/14 - 4/12/14 (12 days)",
      blurb:
        "1st place in a weeklong hackathon hosted by the Bancroft Library at Berkeley. Designed and built a web interface for the FSM Archive.",
      language: "Python",
      event_type: "hackathon",
      repo: "https://github.com/craighiller/hackfsm",
      image_src: "fsm.png",
      description: `We managed to provide a clean interface for
                researchers exploring the Free Speech Movement Archive.  We were a team of 3 programmers (myself included) and one humanist.
                One of the programmers and our humanist managed give us brilliant ideas for design and feature requests.  I mainly worked on
                parsing and sending requests to a web SOLR database.`,
    },
    {
      name: "Hall Of Time - Best Nonprofit",
      timeframe: "3/8/14 - 18 hrs",
      blurb:
        "Best Nonprofit in Blueprint's Social good hackathon. Built a timesheet app for the Lawrence Hall Of Science",
      language: "Ruby on Rails",
      event_type: "hackathon",
      repo: "https://github.com/Fortisque/halloftime",
      image_src: "halloftime.png",
      description: `This was a rails app, and I was the only one that knew rails beforehand so I handled the controller and backend logic.
                Luckily my 3 other teammates were able to build and design a beautiful front-end on top of my database.  We added various features from just
                a basic database time logging including a dashboard that can log current tasks and a calendar view.`,
    },
    {
      name: "Food Me",
      timeframe: "3/1/14 - 12 hrs",
      blurb:
        "Hackers@Berkeley's HackJam. Built a when to meet with perks for food",
      language: "Python",
      event_type: "hackathon",
      repo: "https://github.com/craighiller/foodme",
      image_src: "foodme.png",
      description: `This was a really basic app and our first attempt at a hackathon.  It was really fun to try to build something on our own.
                  Features include logging into Facebook to get access to friends and linking the app to texting.  I worked on the backend and did
                  some of the frontend for this.`,
    },
  ];
}
function getSchoolProjectsData() {
  return [
    {
      name: "storybubbles",
      timeframe: "November/December 2014",
      blurb: "Built an iPad to foster interactive storytelling",
      language: "Objective-C",
      event_type: "school project",
      repo: "https://github.com/Fortisque/storybubbles",
      description: `This was the final pivot for our IEOR190 team. We wanted to build an app that would provide a fun, yet educational experience
                        for young children (4-9). We had finally discovered a mission that could have real impact on the world. In today's society, kids
                        spend a significant amount time on their iPad and resort to playing games to hold their attention. However, a interactive stories
                        could be as interesting as games, but at the same time increase reading proficiency. We developed three interactions - drawing,
                        summarizing, and word unscrambling - that would act as the intersection of learning, creativity and fun. The app pulls JSON from
                        the server, the idea being that eventually a website would exist to allow collaboration of artists and writers to make high quality
                        stories that would seamlessly be added to our app. Although we didn't win the competition for our class, I am very proud of what our
                        team did here.`,
    },
    {
      name: "Photo Evidence Gallery",
      timeframe: "Fall 2013",
      blurb: "Website developed for BAMRU designed to privately store photos",
      language: "Ruby on Rails",
      event_type: "school project",
      repo: "https://github.com/cs169-2013/photo_evidence_gallery",
      image_src: "photoevidence.png",
      description: `This was my first experience building a web app, so it was exciting because none of us knew what we were doing. We were 
                a team of 6 and were connected to our client BAMRU (Bay Area Mountain Rescue Unit) through our CS169 class at Berkeley. Our client
                wanted secure photos in order to share potentially crime sensitive information to each other during a rescure operation. Over the 
                course of 4 iterations we developed various features including cropping, rotation and uploading photos to Flickr and Facebook.
                We used TDD and Agile, and during the project I worked all over the stack to make sure everything worked.`,
    },
  ];
}

function getSchoolCompetitionsData() {
  return [
    {
      name: "Artificial Intelligence - Pacman Contest",
      timeframe: "Spring 2014",
      blurb:
        "1st place winner in a contest of programming multi-agent competitive capture the flag (food pellet) game",
      language: "Python",
      event_type: "school contest",
      image_src: "capture_the_flag.png",
      description: `There were 4 different releases to the contest, making the parameters increasingly difficult.
                    The first part was a search problem, agents could not be killed, so the problem was a two agent travelling salesman problem.
                    I used brute force randomized improvement with a backing of MST and clusting.  For the 3rd and 4th part we used a smart reflex agent
                    and as a lookahead used a precomputed 'trap table' solved through dynamic programming to determine whether or not a 
                    ghost could kill a pacman agent one on one in a given situation.  We managed to get first place in all but the 2nd release!`,
    },
    {
      name: "Machine Structures - Matrix Multiplication Contest",
      timeframe: "Summer 2013",
      blurb:
        "1st place in a speed competition for multiplying (A * B = C) matrix using pthreads",
      language: "C",
      event_type: "school contest",
      result:
        "http://www-inst.eecs.berkeley.edu/~cs61c/su13/lec/29/29LecSu13Summary.pdf#page=44",
      image_src: "matrix_multiplication.png",
      description: `Had the fastest algorithm among 140 students for multiplying matricies.  We used techniques including register/cache blocking, SSE instructions and
                    multi-threading to get up to 70 GFlops.  The most interesting thing was that we realized a lot of the hard work was done computing edge cases (literally
                    the edge of the matrix multiplication) because padding the matricies takes too much time and reusing the cache is much more difficult`,
    },
    {
      name: "Data Structures - Network Contest",
      timeframe: "Spring 2013",
      blurb:
        "1st place winner for a contest of playing the game called Network (it's similar to checkers)",
      language: "Java",
      event_type: "school contest",
      result: "http://www.cs.berkeley.edu/~jrs/61bs13/",
      image_src: "network.png",
      description: `Used concepts of intermediate board evaluation, hash mapping, and depth 5 alpha-beta pruning to win a
                    bracket based tournament in a class of 500.  My board evaluation was critical, and made sure to only favor positions
                    closer to winning.  I saw the game as a simplified game of chess and was able to program a very strong bot to play the game.`,
    },
  ];
}
function getPersonalProjectsData() {
  return [
    {
      name: "Community",
      timeframe: "Summer 2014",
      blurb:
        "Built a web app designed to help assist roommates in splitting the cost of ingredients when cooking.",
      language: "Ruby on Rails",
      event_type: "personal projects",
      repo: "https://github.com/skleung/Community",
      image_src: "community.png",
      description: `My friend thought of the idea for this app and I designed most of the backend for this project.
                Nothing like this really exists currently.  We focus on splitting food cost so we can do it right: people
                attend meals on our site and we track how many times an ingredient is used so we can accurately gauge how
                much of the ingredient was used at each meal so we know the cost of the meal.  With a custom calendar to signup
                for meals and integration with Venmo we have a very real solution to help people that experience this.`,
    },
    {
      name: "HearthstoneCounter",
      timeframe: "Summer 2014",
      blurb:
        "Built a simple web app to record which decks counter which decks in Hearthstone",
      language: "Ruby on Rails",
      event_type: "personal projects",
      repo: "https://github.com/chungs1/hearthstone_counter",
      image_src: "hearthstonecounter.png",
      description: `My friend, a buisness major thought of the idea to log the current meta game of the Blizzard
                  card game called Hearthstone.  The admin can add decks, and specify the matchups as which deck counters the other.
                  Nonadmins can explore the decks and give a thumbs up or thumbs down based on what they think.`,
    },
    {
      name: "Irrational Mind",
      timeframe: "January 2014",
      blurb:
        "Designed and built a simple app to convert decimal approximations of irrational numbers to approximate rational numbers. E.g. 0.392699 -> π/8.",
      language: "Ruby on Rails",
      event_type: "personal projects",
      repo: "github.com/Fortisque/irrational_mind",
      image_src: "irrationalmind.png",
      description: `I envisioned this app as a solution to the problem of finding eigenvectors of matricies.  When using an online
                caclulator for this it would always give you back the solution in the form of decimal values, but it was obviously more
                useful and intuitive to be able to see the result as a familar figure such as sqrt(5).  I used a brute force
                solution to solve the problem which clearly is not the most elegent solution but it worked for what I intended.`,
    },
    {
      name: "Bluetooth Markers",
      timeframe: "Spring 2013",
      blurb:
        "Designed and built an iPhone app that would add a marker to a map when Bluetooth connections were severed",
      language: "Objective-C",
      event_type: "personal projects",
      repo: "github.com/Fortisque/BluetoothMarkers",
      description: `My friend actually gave me the idea for this because he kept forgetting where he parked his car.
                The idea was that when you turn off your car to park it the bluetooth connection is dropped, thus your phone
                can automatically track where you stopped.  I managed to make it work for a faked bluetooth connection coming from
                my iPad, but I never really stablized it for use with actual cars (there was a lot of problems with the app backgrounding
                and finding singnals). So unfortunately the app was left in an unfinished state (and will likely remain that way)`,
    },
  ];
}

export {
  getHackathonsData,
  getSchoolProjectsData,
  getSchoolCompetitionsData,
  getPersonalProjectsData,
};
