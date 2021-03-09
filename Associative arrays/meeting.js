function solve (input){

    let calendar = {};
    for(let line of input){
        //parse input
        let [day,name]=line.split(' ')
        //check conlifcts
        if(calendar.hasOwnProperty(day)){
            console.log(`Conflict on ${day}!`);
        }else{
            //schedule meeting
            console.log(`Scheduled for ${day}`);
            calendar[day] = name;
        }
    }
    
    //print result
    for(let day in calendar){
        console.log(`${day} -> ${calendar[day]}`);
    }
}
solve(['Monday Peter',
'Wednesday Bill',
'Monday Tim',
'Friday Tim']
)