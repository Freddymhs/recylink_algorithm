// 1. Composite function
var rokket = (dataA, dataB, dataC) => {
    return (dataA * dataB * dataC)
}

const a = 8, b = 2, c = 1;
console.log(rokket(a, b, c))


// 2. Longest string
var rokket = (list) => {
    var longestString = undefined;
    for (var i = 0; i < list.length; i++) {
        longestString == undefined ? longestString = list[i]
            : list[i].length > longestString.length ? longestString = list[i] : null;
    }

    return longestString;
}

const list = ['best', 'company', 'ever']
console.log(rokket(list))

//3. String repetition
var rokket = (someString, times) => {
    var resSomeString = '';
    while (times > 0) {
        resSomeString += someString
        times--
    }
    return resSomeString
}

console.log(rokket('palabra', 10))

// 4. Only last names
var rokket = (someListObj) => {
    let resultado = someListObj.map((a) => {
        return a.lastName
    })
    return resultado

}

const contacts = [
    { firstName: 'Juanito', lastName: 'Rokket' },
    { firstName: 'James', lastName: 'Bond' },
    { firstName: 'Harry', lastName: 'Potter' },
]
console.log(rokket(contacts))

// 5. Unique numbers   
var rokket = (listA, listB) => {
    var arrResult = listA.concat(listB)
    return [...new Set(arrResult)]

}

const listA = [1, 2, 3], listB = [4, 5, 6]
console.log(rokket(listA, listB))






