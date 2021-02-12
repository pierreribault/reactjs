import Component from './Component.js';
import { React } from '../React.js'

export default class DetailsComponent extends Component {

    propsRequire = {
        type: "object",
        properties: {
            name: {
                type: "string",
            },
            objectif: {
                type: "string",
            },
            language: {
                type: "string",
            },
            author: {
                type: "object",
                properties: {
                    name: {
                        type: "string",
                    },
                    image: {
                        type: "string",
                    },
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
                { className: 'text-2xl mb-4' },
                `Le Framework ${this.props.name}`
            ),
            React.createElement(
                "div",
                { className: 'border rounded-md p-4' },
                React.createElement(
                    "div",
                    { className: 'flex mb-10' },
                    React.createElement(
                        "p",
                        { className: '' },
                        `Language:  ${this.props.language}`
                    ),
                    React.createElement(
                        "p",
                        { className: 'ml-10' },
                        `Type:  ${this.props.objectif}`
                    ),
                ),
                React.createElement(
                    "div",
                    { className: '' },
                    React.createElement(
                        "p",
                        { className: '' },
                        `Auteur:  ${this.props.author.name}`
                    ),
                    React.createElement(
                        "img",
                        { src: `${this.props.author.image}` },
                        ``
                    ),
                ),
            ), 
        )
    }
}
