function renovationXML() {
  var renXml = new XMLHttpRequest();

  console.log(renXml.readyState);

  renXml.onreadystatechange = function () {
    console.log(renXml.readyState);
    if (this.readyState == 4 && this.status == 200) {
      // document.getElementById('customer_info').innerHTML = this.responseText;
      cusinfo(this);
      // console.log(renXml.readyState);
    }
  };

  renXml.open("GET", "ren.xml", "TRUE");

  renXml.send();
}

var xmlDoc;
var table;
var x;

function cusinfo(info) {
  var i;
  xmlDoc = info.responseXML;
  // console.log(xmlDoc);
  displayTable(xmlDoc);
}
function displayTable(xmlDoc) {
  table = `<thead><tr>
          <th>Name</th>
         <th>Date</th>
         <th>Address</th>
         <th>Renovation-Type</th>
         <th>Designtype</th>
         <th>Budget</th>
         <th>Status</th>
         <th>Area</th>
         <th>Remove customer</th>
        </tr></thead>`;

  x = xmlDoc.getElementsByTagName("Customer");

  for (i = 0; i < x.length; i++) {
    table +=
      "<tr><td>" +
      x[i].getElementsByTagName("Name")[0].childNodes[0].nodeValue +
      "</td><td data-label='Date'>" +
      x[i].getElementsByTagName("Date")[0].childNodes[0].nodeValue +
      "</td><td>" +
      x[i].getElementsByTagName("Address")[0].childNodes[0].nodeValue +
      "</td><td>" +
      x[i].getElementsByTagName("Renovation-Type")[0].childNodes[0].nodeValue +
      "</td><td>" +
      x[i].getElementsByTagName("Designtype")[0].childNodes[0].nodeValue +
      "</td><td>" +
      x[i].getElementsByTagName("Budget")[0].childNodes[0].nodeValue +
      "</td><td>" +
      x[i].getElementsByTagName("Status")[0].childNodes[0].nodeValue +
      "</td><td>" +
      x[i].getElementsByTagName("Area")[0].childNodes[0].nodeValue +
      "</td><td><button onclick='removecus()'> remove </button></td></tr>";
  }
  document.getElementById("customer_info").innerHTML = table;
}

function removecus() {
  // console.log(xmlDoc.getElementsByTagName('customer')[0]);
  // var x = xmlDoc.getElementsByTagName("customer")[0];

  var index,
    table = document.getElementById("customer_info");

  for (var i = 0; i < table.rows.length; i++) {
    table.rows[i].onclick = function () {
      index = this.rowIndex;

      x = xmlDoc.getElementsByTagName("Customer")[index - 1];
      xmlDoc.documentElement.removeChild(x);
      console.log(xmlDoc);
      displayTable(xmlDoc);
    };
  }
  alert("This customer detail removed!");
}

function removeNodeElement() {
  var i;

  for (i = 0; i < x.length; i++) {
    a = xmlDoc
      .getElementsByTagName("Customer")
      [i].getElementsByTagName("Designtype")[0];
    b = a.childNodes[0];
    a.removeChild(b);
  }
  console.log(xmlDoc);
  table = `<thead><tr>
  <th>Name</th>
 <th>Date</th>
 <th>Address</th>
 <th>Renovation-Type</th>
 <th>Budget</th>
 <th>Status</th>
 <th>Area</th>
 <th>Remove customer</th>
</tr></thead>`;
var some = xmlDoc;
x = xmlDoc.getElementsByTagName("Customer");

for (i = 0; i < x.length; i++) {
table +=
"<tr><td>" +
x[i].getElementsByTagName("Name")[0].childNodes[0].nodeValue +
"</td><td>" +
x[i].getElementsByTagName("Date")[0].childNodes[0].nodeValue +
"</td><td>" +
x[i].getElementsByTagName("Address")[0].childNodes[0].nodeValue +
"</td><td>" +
x[i].getElementsByTagName("Renovation-Type")[0].childNodes[0].nodeValue +
"</td><td>" +
x[i].getElementsByTagName("Budget")[0].childNodes[0].nodeValue +
"</td><td>" +
x[i].getElementsByTagName("Status")[0].childNodes[0].nodeValue +
"</td><td><button onclick='removecus()'> remove </button></td></tr>";
}
document.getElementById("customer_info").innerHTML = table;
  alert('The node element  "Designtype" has been removed!');

  
}

function changeNodeValue() {
  var j;
  for (j = 0; j < x.length; j++) {
    xmlDoc
      .getElementsByTagName("Customer")
      [j].getElementsByTagName("Status")[0].childNodes[0].nodeValue = "ongoing";
  }
  console.log(xmlDoc);
  alert("The renovation status has been changed ongoing!");
  displayTable(xmlDoc);
}

function addNewElement() {
  var i;
  newEle = xmlDoc.createElement("other_info");
  newText = xmlDoc.createTextNode("some info");
  newEle.appendChild(newText);
  xmlDoc.getElementsByTagName("Customer")[0].appendChild(newEle);
  console.log(xmlDoc);
  alert('The new node element "other info" has been added to the second node!');
  var table = `<thead><tr>
          <th>Name</th>
         <th>Date</th>
         <th>Address</th>
         <th>Renovation-Type</th>
         <th>Designtype</th>
         <th>Budget</th>
         <th>Status</th>
         <th>Area</th>
         <th>Other info</th>
         <th>Remove customer</th>
        </tr></thead>`;

  x = xmlDoc.getElementsByTagName("Customer");

  for (i = 0; i < x.length; i++) {
    table +=
      "<tr><td>" +
      x[i].getElementsByTagName("Name")[0].childNodes[0].nodeValue +
      "</td><td>" +
      x[i].getElementsByTagName("Date")[0].childNodes[0].nodeValue +
      "</td><td>" +
      x[i].getElementsByTagName("Address")[0].childNodes[0].nodeValue +
      "</td><td>" +
      x[i].getElementsByTagName("Renovation-Type")[0].childNodes[0].nodeValue +
      "</td><td>" +
      x[i].getElementsByTagName("Designtype")[0].childNodes[0].nodeValue +
      "</td><td>" +
      x[i].getElementsByTagName("Budget")[0].childNodes[0].nodeValue +
      "</td><td>" +
      x[i].getElementsByTagName("Status")[0].childNodes[0].nodeValue +
      "</td><td>" +
      x[i].getElementsByTagName("Area")[0].childNodes[0].nodeValue +
      "</td><td>" +
      x[0].getElementsByTagName("other_info")[0].childNodes[0].nodeValue +
      "</td><td><button onclick='removecus()'> remove </button></td></tr>";
  }
  document.getElementById("customer_info").innerHTML = table;
}