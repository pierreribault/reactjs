export default function checkType(value, configuration) {
    if(!configuration) {
        throw new Error("Aucune configuration donnée")
    }

    switch(configuration.type) {
        case "string":
        case "boolean":
        case "number":
            return typeof value === configuration.type
        case "array":
            if(!Array.isArray(value)) {
                return false
            }

            value.forEach(item => {
                if(!checkType(item, configuration.propertiesType)) {
                    return false
                }
            });
            return true
        case "object":
            if(value instanceof Object) {
                if(configuration.properties == null) {
                    throw new Error("Les propriétés de l'object doivent être déclarées");
                }
                for(const key in configuration.properties) {
                    if(configuration.properties.hasOwnProperty(key)) {

                        let hasKey = value.hasOwnProperty(key);
                        if(!hasKey) {
                            return false
                        }

                        if(!checkType(value[key], configuration.properties[key])) {
                            return false
                        }
                    }
                }

                return true
            }

            return false
    }

    throw new Error("Le type n'est pas supporté");
}
