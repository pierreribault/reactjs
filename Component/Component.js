import checkType from '../TypeChecker.js'
import { React } from '../React.js'

export default class Component {

    validateProps(props) {
        if (props && !checkType(props, this.propsRequire)) {
            throw new Error("Wrong configuration");
        }
    }

    display(props) {
        this.validateProps(props)

        return (this.shouldUpdate(props))
            ? this.render().then(() => this.HTMLElement)
            : Promise.resolve(this.HTMLElement);
    }

    shouldUpdate(newProps) {
        if (newProps == null) {
            return true
        }
        
        if (newProps !== this.props) {
            this.props = newProps;

            return true;
        }

        return false;
    }

    render() {
        this.HTMLElement = React.render(this.structure())

        return Promise.resolve(null)
    }

    structure() {}
}
