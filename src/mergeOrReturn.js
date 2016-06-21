export default function (obj, addition) {
    let hasChanged = false;

    for (let key in addition) {
        if (addition.hasOwnProperty(key)) {
            if (obj[key] !== addition[key]) {
                hasChanged = true;
            }
        }
    }

    if (!hasChanged) {
        return obj;
    } else {
        return {
            ...obj,
            ...addition,
        };
    }
}
