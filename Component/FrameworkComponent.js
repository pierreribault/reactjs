import Component from './Component.js';
import { React } from '../React.js'

export default class FrameworkComponent extends Component {

    propsRequire = {
        type: "object",
        properties: {
            back: {
                type: "array",
                propertiesType: {
                    type: "string",
                }
            },
            front: {
                type: "array",
                propertiesType: {
                    type: "string",
                }
            }
        }
    }

    structure() {
        return React.createElement(
            "div",
            { className: 'container' },
            React.createElement(
                "h1",
                { className: 'text-2xl' },
                "Liste des frameworks back"
            ),
            React.createElement(
                "div",
                { className: 'flex mt-8' },
                ...this.props.back.map((element) => React.createElement(
                    "a",
                    { className: 'mr-2 rounded-full py-2 px-4 bg-blue-100', href: `${element.toLowerCase()}` },
                    element
                ))
            ), 
            React.createElement(
                "h1",
                { className: 'text-2xl mt-8' },
                "Liste des frameworks front"
            ),
            React.createElement(
                "div",
                { className: 'flex mt-8' },
                ...this.props.front.map((element) => React.createElement(
                    "a",
                    { className: 'mr-2 rounded-full py-2 px-4 bg-green-100', href: `${element.toLowerCase()}` },
                    element
                ))
            ), 
        )
    }
}
