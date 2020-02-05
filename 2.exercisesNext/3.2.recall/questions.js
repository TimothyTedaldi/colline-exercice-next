let selectElementsStartingWithA = (array) => array.filter(word => word[0] == 'a');

let selectElementsStartingWithVowel = (array) => array.filter(word=>word[0] == 'a' || word[0] == 'o' || word[0] == 'e' || word[0] == 'i' || word[0] == 'u' || word[0] == 'y')    

let removeNullElements = (array) => array.filter(word => word != null);

let removeNullAndFalseElements = (array) => array.filter(word => word != null).filter(word => word !== false);

let reverseWordsInArray = (array) => {
    for(i=0; i<array.length;i++){
        array[i]=array[i].split('').reverse().join('')
    }
    return array
}

let everyPossiblePair = (array) => {
    let tempArr = []
    tempArr.push([array[2], array[0]]);
    tempArr.push([array[2], array[1]]);
    tempArr.push([array[0], array[1]]);
    return tempArr;
    
}

let allElementsExceptFirstThree = (array) => array=array.splice(3, array.length-3);

let addElementToBeginning = (array, element) => {
    array.unshift(element)
    return array;
}
let sortByLastLetter = (array) => {
    array.sort((a, b) => a.charCodeAt(a.length - 1) - b.charCodeAt(b.length - 1));
    return array;
}

let getFirstHalf = (string) => {
    return string.split('').splice(0, Math.ceil(string.length / 2)).join('');}

let makeNegative = (number) => {
    return -Math.abs(number);
}

let numberOfPalindromes = (array) => {
    return array.filter(word => word == word.split('').reverse().join('')).length;
}

let shortestWord = (array) => {
    return array.sort((a, b) => {
        if (a.length > b.length) {
            return 1;
        } else if (a.length < b.length) {
            return -1;
        }
    })[0];
}

let longestWord = (array) => {
    return array.sort((a, b) => {
        if (a.length < b.length) {
            return 1;
        } else if (a.length > b.length) {
            return -1;
        }
    })[0];
}


let sumNumbers = (array) => {
    sum=0;
    for(i=0; i<array.length; i++){
        sum+=array[i];
    }
    return sum;
}

let repeatElements = (array) => {
}

let stringToNumber = (string) => {
    return 'Write your method here';
}

let calculateAverage = (array) => {
    return 'Write your method here';
}

let getElementsUntilGreaterThanFive = (array) => {
    return 'Write your method here';
}

let convertArrayToObject = (array) => {
    return 'Write your method here';
}

let getAllLetters = (array) => {
    return 'Write your method here';
}

let swapKeysAndValues = (object) => {
    return 'Write your method here';
}

let sumKeysAndValues = (object) => {
    return 'Write your method here';
}

let removeCapitals = (string) => {
    return 'Write your method here';
}

let roundUp = (number) => {
    return 'Write your method here';
}

let formatDateNicely = (date) => {
    return 'Write your method here';
}

let getDomainName = (string) => {
    return 'Write your method here';
}

let titleize = (string) => {
    return 'Write your method here';
}

let checkForSpecialCharacters = (string) => {
    return 'Write your method here';
}

let squareRoot = (number) => {
    return 'Write your method here';
}

let factorial = (number) => {
    return 'Write your method here';
}

let findAnagrams = (string) => {
    return 'Write your method here';
}

let convertToCelsius = (number) => {
    return 'Write your method here';
}

let letterPosition = (array) => {
    return 'Write your method here';
}
