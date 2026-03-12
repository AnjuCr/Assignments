
// Program to find the hikepercentage 

let empNames        = ["Alice", "Bob Smith", "Carol Davis", "David Brown", "Eva Green"];
let empSalaries     = [75000, 68000, 82000, 90000, 60000];
let empExperience   = [5.1, 3.2, 7.1, 10.2, 2.4];
let empRatings      = [4.2, 3.8, 4.5, 2.5, 3.5];

let hikeEmpMap         = new Map();

// Finding the bonus based on the condition

for( let i: number = 0; i< empRatings.length; i++)
{
    let varPayPerc: number = 0;
    let bonus : number     = 0;
    let reward : number    = 0;

    if(empRatings[i] >= 4.0)
    {
         varPayPerc = 15;
         bonus      = 1500;
    }
       
    else if(empRatings[i] >= 3.0 && empRatings[i] < 4.0)
    {
        varPayPerc = 10;
        bonus      = 1200;
    }
        
    else
    {
        varPayPerc = 3;
        bonus      = 300
    }
        
    // Special condition

    if (empExperience[i]>5)
        reward = 5000;

    let hike     = (empSalaries[i]*(varPayPerc)/100)+bonus+reward;
    let hikePerc = (hike/empSalaries[i])*100;

    //  setting the items to the map
    hikeEmpMap.set(empNames[i], hikePerc);

}

// Printing the Map details

console.log("Details of employee hike percentage");
console.log(hikeEmpMap);

