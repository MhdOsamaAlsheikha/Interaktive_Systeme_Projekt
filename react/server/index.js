// Required modules
const express = require("express");
const fetch = require("node-fetch");
const jsonServer = require("json-server");
const path = require("path");

// Set server parameter
// Adjust if blocked by firewall rules or used port then also adjust in client/scripts/fetchPost and fetchGet
const hostname = "127.0.0.1";
const expressPort = 3002;
const jsonPort = 3001;

// Create express webserver
const httpServer = express();

// Create json server with middleware
const server = jsonServer.create();
const router = jsonServer.router(path.join(__dirname, "db.json"));
const middlewares = jsonServer.defaults();

// Middleware to parse json in responses
// Set HTTP-SizeLimit to 2mb
httpServer.use(express.json({ limit: "2mb" }));
httpServer.use(function (req, res, next) {
  // Website you wish to allow to connect
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader("Access-Control-Allow-Headers", "content-type");
  next();
});

/**
 * Returns the items search results from the JSONServer
 * HTTP GET on http://hostname:expressPort/api/items?search=
 */
httpServer.get("/api/items", async function (request, response) {
  try {
    // Get request param called search
    const querySearch = request.query.search;

    // Convert from JSON format into JavaScript object
    const querySearchJS = JSON.parse(querySearch);

    // Fetch data from JSON server
    const fetchData = await fetchGet();

    // Use filter function filterByCategory with fetched data from JSON server and url param search as javascript object
    const filteredData = filterByCategory(fetchData, querySearchJS);

    // Convert result to JSON
    const JSONData = JSON.stringify(filteredData);

    // Create response
    response
      // Assign the status to the response
      .status(200)
      // Assign the response body
      .json(JSONData);
  } catch (error) {
    // Write logs to console and set response status to 500 for internal error
    console.error(error);
    response.status(500);
  }
});

/**
 * Uses the Fetch API to get records from an url
 */
async function fetchGet() {
  const url = `http://${hostname}:${jsonPort}/items`;
  /**
   * Insert your fetchGet here with url from JSON-Server
   */
  const response = await fetch(url)
    .then((res) => res.json())
    .then((data) => {
      console.log(data);
      return data;
    })
    .catch((err) => console.log(err));
  return response;
}

/**
 * Filters given inputAll by given categoryArray
 */
function filterByCategory(inputAll, categoryArray) {
  const match = inputAll.filter((category) => {
    if (
      category.categories
        .map((curElement) => categoryArray.includes(curElement))
        .includes(true)
    ) {
      return category;
    }
  });
  console.log(match);
  return match;
}

/**
 * Accepts a new item
 * HTTP POST on http://hostname:expressPort/api/items
 * adds it to the JSON-Server
 */
httpServer.post("/api/items", async function (request, response) {
  try {
    // Get the request body data
    const requestBody = request.body;

    // Convert to JSON
    // Cause express middleware auto parsed JSON to JavaScipt object
    const requestBodyJSON = JSON.stringify(requestBody);

    // Add new record to JSON-Server
    const postData = await fetchPost(requestBody);

    // Assign the status to the response
    response.status(201);
    // Send the response
    response.send(postData);
  } catch (error) {
    console.error(error);
    response.status(500);
  }
});

/**
 * Uses the Fetch API to post the record to the url
 */
async function fetchPost(jsonPayload) {
  const url = `http://${hostname}:${jsonPort}/items`;
  const response = await fetch(url, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(jsonPayload),
  })
    .then((res) => res.json())
    .then((data) => {
      console.log(data);
      return data;
    })
    .catch((err) => console.log(err));
  return response;
}

/**
 * Start json server listening
 */
server.use(middlewares);
server.use(router);
server.listen(jsonPort, hostname, () => {
  console.log(`JSON server is listening on http://${hostname}:${jsonPort}/`);
});

/**
 * Start express server listening
 */
httpServer.listen(expressPort, hostname, () => {
  console.log(
    `Express server is listening on http://${hostname}:${expressPort}/`
  );
  console.log(`End server with ^C (CTRL + C)`);
});
