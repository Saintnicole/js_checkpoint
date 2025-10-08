function reverseString(str) {
    let reversed = "";
    //the last character is at index str.length-1 because string index starts from 0
    // i-- makes sure i is decreased by 1 as it loops through backwards.
    for(let i = str.length -1; i>=0; i--){
        reversed += str[i];
    }
    return reversed;

}
console.log(reverseString("Foods"));



// function to count the number of characters in a string.
function countChar(str) {
    let noc = 0;
    for(let i =0; i<str.length; i++){
        noc++
    }  
    return noc;
}

console.log(countChar("Books"));

// function to capitalize the first letter of the word in a sentence
function capitalize(str) {
   let sentence = ""
    
}


// ARRAY FUNCTIONS

// function to find the minimum and maximum values in an array of numbers.
function minMax(arr){
    let max = arr[0];
    let min = arr[0];
    for (let i = 1; i< arr.length; i++){
        if (arr[i] > max){
            max = arr[i];
        }
        else if (arr[i]< min){
            min = arr[i];
        }
    }
    return [min, max];
    
}
console.log(minMax([5, 8, 1, 10, 3]));

// function to calculate the sum of elements in an array
function sumElem(arr) {

    
}

// function to filter out elements from an array based on a given condition



// MATHEMATICAL FUNCTIONS
// function to calculate the factorial of a given number

// function to check if a number is prime of not

// function to generate the fibonacci sequenece up to a given number of terms

