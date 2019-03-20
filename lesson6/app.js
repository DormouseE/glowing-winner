const obj = {
        name: 'Alex',
        age: 33,
        adress: {
                country: 'UA',
                city: 'Dnipro'
        }
}

function clone(value) {
        let copy;
        for (let key in value) {
                if (null == value[key] || "object" != typeof (value[key]))
                        return value;
                else if (Array.isArray(value[key])) {
                        copy[key] = obj.slice(0);
                        for (i = 0; i < copy.length; i++) {
                                copy[i] = clone(copy[i]);
                        }
                        return copy;
                }
                else {

                        copy[key] = value[key];
                }
        }
        return clone;
}

const objectCopied = clone(obj);
console.log(obj, objectCopied)
console.log(JSON.stringify(obj) === JSON.stringify(objectCopied));

