const convert = require('xml-js');
const fs = require('fs');

var xml = require('fs').readFileSync('alertResponse.xml', 'utf8');
let result = convert.xml2js(xml, {compact: true}, {Pretty: true});
console.log(result.FlightPlanAlert.Route.Segment[0].WayPointId);


// fs.writeFile("alertResponse.json", result, function(err) {
//     if(err) {
//         return console.log(err);
//     }
//
//     console.log("The file was saved!");
// });





