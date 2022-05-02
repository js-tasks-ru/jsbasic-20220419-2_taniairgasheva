function getMinMax(str) {
    let numbers = str.split(' ').filter(el => !isNaN(el));
    let result = {
        min: Math.min(...numbers),
        max: Math.max(...numbers),
    };
    return result;
};



