export default function (array, callback) {
    let hasChanged = false;

    const newArray = array.map(item => {
        const newItem = callback(item);

        if (newItem !== item) {
            hasChanged = true;
        }

        return newItem;
    });

    if (!hasChanged) {
        return array;
    } else {
        return newArray;
    }
}
