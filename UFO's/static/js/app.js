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
var filters = {date : datetime, country : countryName, state : stateName, city : cityName, shape : shapeType};

// This function will replace your handleClick function
function updateFilters() {
  let date = d3.select("#datetime").property("value");
  let country = d3.select("#countryName").property("value");
  let state = d3.select("#stateName").property("value");
  let city = d3.select("#cityName").property("value");
  let shape = d3.select("#shapeType").property("value");
  let filteredData = tableData;
  // If a filter value was entered then add that filterId and value
  // to the filters list. Otherwise, clear that filter from the filters object
  if (date) {
    filters = filters.append(datetime)
  } else {
      tbody.html("");
  }

  if (country) {
    filters = filters.append(countryName)
  } else {
      tbody.html("");
  }

  if (state) {
    filters = filters.append(stateName)
  } else {
      tbody.html("");
  }

  if (city) {
    filters = filters.append(cityName)
  } else {
      tbody.html("");
  }

  if (shape) {
    filters = filters.append(shapeType)
  } else {
      tbody.html("");
  }
  // Call function to apply all filters and rebuild the table
  updateFilters();
}

function filterTable() {

  // Set the filteredData to the tableData
  tableData(filteredData);
  };
  
  // Loop through all of the filters and keep any data that
  // matches the filter values arrow function, forEach 
  Object.values(datRow).forEach((val) => {
    let cell = row.append("td");
    cell.text(val);
    });
  });
}

  // Finally, rebuild the table using the filtered Data
   buildTable(filteredData);
};

// Attach an event to listen for changes to each filter
// Hint: You'll need to select the event and what it is listening for within each set of parenthesis
d3.selectAll("filter-btn").on("click", updateFilters);


// Build the table when the page loads
buildTable(tableData);
