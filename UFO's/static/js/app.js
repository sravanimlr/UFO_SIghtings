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
  console.log('filtering working')
  var elementChange = d3.select(this).select("input");
  var elementValue = elementChange.property("value");
  var elementId = elementChange.attr("id");
  // If a filter value was entered then add that filterId and value
  // to the filters list. Otherwise, clear that filter from the filters object
  if (elementValue) {
    filters[elementId] = elementValue;
  }
  else {
    delete filters[elementId];
  }
   // Call function to apply a filters and rebuild the table
  filterTable();
}

function filterTable() {

  // Set the filteredData to the tableData
   let filteredData = tableData;
  
  // Loop through all of the filters and keep any data that
  // matches the filter values arrow function, forEach 
  Object.entries(filters).forEach(([key, value]) => {
    filteredData = filteredData.filter(row => row[key] === value);
  });

  // Finally, rebuild the table using the filtered Data
  buildTable(filteredData);
   
};
// ; is needed end a line for interpretation by browser

// Attach an event to listen for changes to each filter, on change button 
// Hint: You'll need to select the event and what it is listening for within each set of parenthesis
d3.selectAll(".list-group-item").on("change", updateFilters);
// # needed for the id when referencing HTML 

// Build the table when the page loads
buildTable(tableData);
