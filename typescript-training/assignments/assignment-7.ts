// String sentence = "Java programming is fun and challenging";
    
//1. count the number of words in the string

    const sentence: string = "Java programming is fun and challenging";
    const words:string[]= sentence.split(" ")//split the sentence into an array of words using space 
    console.log("The total number of words in the sentence is: " + words.length);

// 2. Print the sentence words in reverse order.

    let reversedSentence: string = "";
    for (let i=words.length - 1;i>=0;i--)
    {
        reversedSentence += words[i] + " ";
    
    }

    console.log("The sentence in reverse order is: " + reversedSentence);

//3. Convert the first character of each word to uppercase and print original senten
    let firstCapitalSent: string = "";
    for (let i: number = 0; i < words.length; i++)
     {
      firstCapitalSent += words[i].charAt(0).toUpperCase() + words[i].slice(1) + " ";
     }
    console.log("The sentence with first character of each word in uppercase is: " + firstCapitalSent);
    console.log("The original sentence is: " + sentence);

