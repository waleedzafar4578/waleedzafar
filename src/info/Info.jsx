import self from "../img/self.jpeg"
import mock1 from "../img/mock1.jpeg"
import mock2 from "../img/mock2.png"
import mock3 from "../img/mock3.png"
import mock4 from "../img/mock4.png"
import mock5 from "../img/mock5.png"

/* Hi there! Thanks for checking out my portfolio template. Be sure to read the comments to get a better understanding of
how to make this template work best for you! */

export let colors = ["rgb(0,255,164)", "rgb(166,104,255)"];
/*
I highly recommend using a gradient generator like https://gradientgenerator.paytonpierce.dev/ to generate a pair of colors that you like.
These colors will be used to style your name on the homepage, the background of your picture, and some other accents throughout
the site.
 */

/* 
This variable will change the layout of the website from multipage to single, scrollable page
*/
export let singlePage = false;

/*
So let's get started! Some of the info below is pretty self-explanatory, like 'firstName' and 'bio'. I'll try to explain anything
that might not be obvious right off the bat :) I recommend looking at the template example live using "npm start" to get an idea
of what each of the values mean.
 */

export const info = {
    firstName: "Waleed",
    lastName: "Zafar",
    initials: "WZ", // the example uses first and last, but feel free to use three or more if you like.
    position: "a Full Stack Developer",
    selfPortrait: self, // don't change this unless you want to name your self-portrait in the "img" folder something else!
    gradient: `-webkit-linear-gradient(135deg, ${colors})`, // don't change this either
    baseColor: colors[0],
    miniBio: [
        {
            emoji: '🚀',
            text: 'SQL Innovator'
        },
        {
            emoji: '🌎',
            text: 'based in the Lahore'
        },
        {
            emoji: "💼",
            text: "Software Developer"
        },
        {
            emoji: "📧",
            text: "waleedzafar4578@gmail.com"
        }
    ],
    socials: [
        {
            link: "https://facebook.com",
            icon: 'fa fa-facebook',
            label: 'facebook'
        },
        {
            link: "https://instagram.com",
            icon: 'fa fa-instagram',
            label: 'instagram'
        },
        {
            link: "https://github.com",
            icon: "fa fa-github",
            label: 'github'
        },
        {
            link: "https://linkedin.com",
            icon: "fa fa-linkedin",
            label: 'linkedin'
        },
        {
            link: "https://twitter.com",
            icon: "fa fa-twitter",
            label: 'twitter'
        }
// Feel free to remove any of these that you don't have. I'll write an FAQ on how to add new ones later, let me know if you have a request for an icon!
// Just change the links so that they lead to your social profiles.

    ],
    bio: "I am a dedicated Computer Science graduate with a passion for pushing boundaries in software development and database engineering. My academic journey culminated in creating innovative projects like a Triadic SQL Database Engine, integrating React for front-end interfaces, Rust for robust server solutions, and a unique programming language rooted in Charles Peirce's Triadic Logic. Industry professionals recognized our work's pioneering approach in structured database solutions. With skills in SQL, React, Rust, and a keen interest in logical frameworks, I am driven to continue innovating and solving complex challenges in the tech industry.",
    skills:
        {
            proficientWith: ['Rust','SQL Developer','Nodejs','Expressjs','javascript', 'react', 'C/C++', 'Compiler Design','Charles Peirce\'s Triadic Logic','Linux Bash','Server Development'],
            exposedTo: ['Tailwind', 'python', 'Docker','git', 'github']
        }
    ,
    hobbies: [
        {
            label: 'Playing Video Games',
            emoji: '🎮'
        },
        {
            label: 'Playing Cricket',
            emoji: '🏏'
        },
        {
            label: 'Sleeping',
            emoji: '😴'
        },
        {
            label: 'Traveling',
            emoji: '✈️'
        }
// Same as above, change the emojis to match / relate to your hobbies or interests.
// You can also remove the emojis if you'd like, I just think they look cute :P
    ],
    portfolio: [ // This is where your portfolio projects will be detailed
        {
            title: "Triadic Sql Engine",
            live: "https://waleedzafar4578.github.io/TriadicGui/", //this should be a link to the live version of your project, think github pages, netlify, heroku, etc. Or your own domain, if you have it.
            source: "https://github.com/waleedzafar4578/TriadicSqlDb", // this should be a link to the **repository** of the project, where the code is hosted.
            image: mock1
        },
        {
            title: "Custom Triadic C++ Language",
            live: "",
            source: "https://github.com/waleedzafar4578/Triadic-C-Language",
            image: mock2
        }

    ]
}