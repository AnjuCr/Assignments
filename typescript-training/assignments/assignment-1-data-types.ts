//1. Temperature of a city in degrees Celsius: 25.5

let temperature : number = 25.5;
console.log(`1. Teperature of the city is : ${temperature}`);
console.log("1. City temperature is : "+temperature);

//2. Whether a customer has placed an order: true or false

let isPlaceOrder : boolean=true;
console.log(`2. Customer has placed order: ${isPlaceOrder}`);

//3. Person's phone number: "123-456-7890"

let phNumber : string = '"123-456-7890"';
console.log(`3. The phone number of the person is: ${phNumber}`);

// 4. Amount of money in a customer's bank account: 1000.50

let custAcBalance : number = 1000.50;
console.log('4. The customer Account balance is:' +custAcBalance);

// 5. Person's email address: "john.doe@example.com"

let personEmail : string = '"john.doe@example.com"';
console.log(`5. Email of the person is : ${personEmail}`);

//6. Coordinates of a location (latitude, longitude): 37.7749, -122.4194


interface coordInfo {   
    longitude: number,
    latitude : number
}

let coord : coordInfo = {
    longitude: 37.7749,
    latitude: -122.4194
}

console.log(`6. The coordinates of a location(latitude, longitude): ${coord.longitude}, ${coord.latitude}`)


//7. Person's marital status: true or false

let maritalStatus : boolean = false;
console.log(`7. Person's marital status: ${maritalStatus}`)

// 8. Person's occupation: "Software Engineer"

let occupatin : string =' "Software Engineer" ';
console.log(`8. Occupation of the person is :${occupatin}`);

//9. Person's favourite colour: "Blue"

let fvtColor : string =' "Blue" ';
console.log(`9. Person's favourite colour: ${fvtColor}`)

// 10.Current year: 2023

let currentYear : number = new Date().getFullYear();
console.log(`10.Current year: ${currentYear}`);

//11.Number of followers on a social media platform: 1,000,000

let numOfFolwrs : number = 100000;
console.log(`11.Number of followers on a social media platform: ${numOfFolwrs}`);

let nmFlwrs: string = "1,000,000";
console.log(`11.The number of followers on socialmedia is : ${nmFlwrs}`);

// 12.Rating of a movie: 7.5

let movieRating: number = 7.5;
console.log(`12.Rating of a movie: ${movieRating}`);

//13.Person's blood type: 'A'

let bloodType :string = "'A'"
console.log(`13.Person's blood type: ${bloodType}`);

//14.Title of a book: "To Kill a Mockingbird"

let bookTitle : string = '"To Kill a Mockingbird"';
console.log(`14.Title of a book: ${bookTitle}`);

// 17.Name of a country: "United States"

let countryName : string = '"United States"';
console.log(`17.Name of a country: ${countryName}`);

//18.Person's eye color: "Brown"

let eyeColor : string = '"Brown"';
console.log(`18.Person's eye color: ${eyeColor}`);

//19.Person's birthplace: "New York City"

let birthPlace : string = '"New York City"';
console.log(`19.Person's birthplace: ${birthPlace}`);

//20. Distance between two cities: 200.5

let cityDifference : number = 200.5
console.log(`20. Distance between two cities: ${cityDifference}`);



