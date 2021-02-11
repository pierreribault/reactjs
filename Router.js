export default class Router {

    constructor() {
        this.routes = [];
        this.pathname = window.location.pathname;
    }

    add = (path, callback) => {
        if (!path || !callback) {
            throw new Error('L\'URI ou le Callback sont manquant');
        }

        this.routes.forEach(route => {
            if (route.path === path) throw new Error(`L'uri est déjà enregistrée`);
        });

        this.routes.push({path, callback})

        return this
    }

    init = () => {
        this.routes.some(route => {
            if (this.pathname == route.path) {
                return route.callback()
            }

            return false;
        })
    }
}