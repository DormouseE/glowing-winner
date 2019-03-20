const obj = {
        name: 'Alex',
        age: 33,
        adress: {
                country: 'UA',
                city: 'Dnipro'
        }
}


function cloningObject(value) {
        let copy = Array.isArray(value) ? [] : {};

        for (let key in value) {
                if (typeof (value[key]) == "object" && value[key] != null) {
                        copy[key] = cloningObject(value[key])
                } else {
                        copy[key] = value[key]
                }
        };
        return copy;
};


const clonedObject = cloningObject(obj);
console.log(obj, clonedObjObject);
