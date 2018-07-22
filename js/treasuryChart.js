// let getXMLFile = function(path, callback) {
//   let request = new XMLHttpRequest();
//   request.open("GET", path);
//   request.setRequestHeader("Content-Type", "text/xml");
// 
//   request.onreadystatechange = function() {
//     if (request.readyState === 4 && request.status === 200) {
//       callback(request.responseXML);
//     }
//   };
//   request.send();
// };


console.log("huh?");
// getXMLFile("./data/dtltrd.xml", function(json) {
//
// });

anychart.onDocumentReady(function () {
  chart = anychart.line();
  chart.title('Historical Treasury Rates');

  chart.container('container');
  chart.draw();
});