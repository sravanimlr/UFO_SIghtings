// from data.js
const tableData = data;

// get table references
var tbody = d3.select("tbody");

function buildTable(data) {
  // First, clear out any existing data
  tbody.html("");

  // Next, loop through each object in the data
  // and append a row and cells for each value in the row
  data.forEach((dataRow) => {
    // Append a row to the table body
    let row = tbody.append("tr");

    // Loop through each field in the dataRow and add
    // each value as a table cell (td)
    Object.values(dataRow).forEach((val) => {
      let cell = row.append("td");
      cell.text(val);
    });
  });
}

// Keep track of all filters
// empty array
var filters = {};

// This function will replace your handleClick function
function updateFilters() {
  //entire list item is grabbed 
  let point = d3.select(this).select("input");
  let points = d3.selectAll(".list-group-item")

  value = filters.property("value");
  key = filters.attr("id");



  //let date = d3.select("#datetime").property("value");
  //let country = d3.select("#countryName").property("value");
  //let state = d3.select("#stateName").property("value");
  //let city = d3.select("#cityName").property("value");
  //let shape = d3.select("#shapeType").property("value");
  //let filteredData = tableData;
  // If a filter value was entered then add that filterId and value
  // to the filters list. Otherwise, clear that filter from the filters object

  // Call function to apply a filters and rebuild the table
  filterTable(filters);
}

function filterTable(filters) {

  // Set the filteredData to the tableData

  
  // Loop through all of the filters and keep any data that
  // matches the filter values arrow function, forEach 
  Object.entries(filters).forEach(([key, value]) => {
    filteredData = tableData.filter(row => row[key] === value);
  });

  // Finally, rebuild the table using the filtered Data
  buildTable(filteredData);
   
}
// ; is needed end a line for interpretation by browser

// Attach an event to listen for changes to each filter, on change button 
// Hint: You'll need to select the event and what it is listening for within each set of parenthesis
d3.selectAll("#filter-btn").on("click", updateFilters);
d3.selectAll(".list-group-item").on("change", updateFilters);
// # needed for the id when referencing HTML 

// Build the table when the page loads
buildTable(tableData);
