// Assignment -8: Write a program to search for all occurrences of a “Java” word in the paragraph and print their
// indexes.
// 1. Find total number of occurrences
// 2. Print count and Indexes of the word

// String paragraph = "Java is a popular programming language. Java is used for web
// development, mobile applications, and more.";

const paragraph: string = "Java is a popular programming language. Java is used for web development, mobile applications, and more.";
const searchWord: string = "Java";
let wordCount: number = 0;


for (let i: number = 0; i <= paragraph.length - searchWord.length; i++) {
    let splitStr: string = paragraph.substring(i, i + searchWord.length);

    if (splitStr === searchWord) {
        wordCount++;  
    }
}

console.log("The total number of occurrences of the word '" + searchWord + "' is: " + wordCount);


// Another solution

// ########################################################

const para: string =
    "Java is a popular programming language. Java is used for web development, mobile applications, and more.";

const words: string[] = para.split(" ");

// Get total count and index of 'Java' words
let count: number = 0;

for (let i: number = 0; i < words.length; i++) {
    if (words[i].toLowerCase() === "java") {
            console.log("Java word is present in Array with Index : " + i);
            count++;
    }
    }


console.log("Total words with Java are : " + count);