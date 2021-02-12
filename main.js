import Router from './Router.js';
import FrameworkComponent from "./Component/FrameworkComponent.js";
import DetailsComponent from './Component/DetailsComponent.js';

let root = document.getElementById('root');
let dom = null
const router = new Router();

router
    .add('/laravel', () => {
        let detailsComponent = new DetailsComponent()

        let data = {
            name: "laravel",
            objectif: "back",
            language: "PHP",
            author: {
                name: "Taylor Otwell",
                image: "https://pbs.twimg.com/profile_images/914894066072113152/pWD-GUwG_400x400.jpg"
            }
        }

        dom = detailsComponent
            .display(data)
            .then((HTMLElement) => {
                root.appendChild(HTMLElement)
            })
    })
    .add('/expressjs', () => {
        let detailsComponent = new DetailsComponent()

        let data = {
            name: "ExpressJS",
            objectif: "back",
            language: "JS",
            author: {
                name: "TJ Holowaychuk",
                image: "https://avatars.githubusercontent.com/u/25254?s=460&u=d332bdd6d335df9f08e7cdac0e17143d898ec70d&v=4"
            }
        }

        dom = detailsComponent
            .display(data)
            .then((HTMLElement) => {
                root.appendChild(HTMLElement)
            })
    })
    .add('/angular', () => {
        let detailsComponent = new DetailsComponent()

        let data = {
            name: "Angular",
            objectif: "front",
            language: "JS",
            author: {
                name: "Google",
                image: "https://www.presse-citron.net/app/uploads/2020/05/Section-Google.jpg"
            }
        }

        dom = detailsComponent
            .display(data)
            .then((HTMLElement) => {
                root.appendChild(HTMLElement)
            })
    })
    .add('/symfony', () => {
        let detailsComponent = new DetailsComponent()

        let data = {
            name: "symfony",
            objectif: "back",
            language: "PHP",
            author: {
                name: "SensioLabs",
                image: "https://www.skillup.co/assets/organizations/4c8f34c0-736a-11e6-b0ad-0242ac170003/336c017fc3433517ff181e81919df716.jpg"
            }
        }

        dom = detailsComponent
            .display(data)
            .then((HTMLElement) => {
                root.appendChild(HTMLElement)
            })
    })
    .add('/reactjs', () => {
        let detailsComponent = new DetailsComponent()

        let data = {
            name: "ReactJS",
            objectif: "front",
            language: "JS",
            author: {
                name: "Facebook",
                image: "https://www.facebook.com/images/fb_icon_325x325.png"
            }
        }

        dom = detailsComponent
            .display(data)
            .then((HTMLElement) => {
                root.appendChild(HTMLElement)
            })
    })
    .add('/vuejs', () => {
        let detailsComponent = new DetailsComponent()

        let data = {
            name: "VueJS",
            objectif: "front",
            language: "JS",
            author: {
                name: "Evan You",
                image: "https://static.frontendmasters.com/assets/teachers/you/thumb.png"
            }
        }

        dom = detailsComponent
            .display(data)
            .then((HTMLElement) => {
                root.appendChild(HTMLElement)
            })
    })
    .add('/', () => {
        let frameworkComponent = new FrameworkComponent()

        let data = {
            back: [
                "laravel",
                "symfony",
                "expressjs",
            ],
            front: [
                "ReactJS",
                "VueJS",
                "Angular"
            ]
        }

        dom = frameworkComponent
            .display(data)
            .then((HTMLElement) => {
                root.appendChild(HTMLElement)
            })
    })
    .init()