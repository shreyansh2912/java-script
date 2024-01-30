var date1 = new Date("2022-01-15");
var date2 = new Date("2024-01-25");

var diff = date2 -date1

var final = Math.round(diff/(1000*60*60*24))
var final2 = Math.round(diff/(1000*60*60*24*30))
var final3 = Math.round(diff/(1000*60*60*24*30*365))

if(final >= 365)
{
    let diff = (final - 365)/365 
    console.log(Math.ceil(diff))
}