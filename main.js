import Router from './Router.js';
import FrameworkComponent from "./Component/FrameworkComponent.js";

let root = document.getElementById('root');
let dom = null
const router = new Router();

router
    .add('/', () => {
        let frameworkComponent = new FrameworkComponent()

        let data = {
            back: [
                "laravel",
                "symfony",
                "expressjs",
                "adonis"
            ],
            front: [
                "ReactJS",
                "VueJS"
            ]
        }

        dom = frameworkComponent
            .display(data)
            .then((HTMLElement) => {
                root.appendChild(HTMLElement)
            })
    })
    .init()