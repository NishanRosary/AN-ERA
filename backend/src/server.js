const http = require("http");
const { URL } = require("url");
const { actions } = require("./data/actions");
const { loadEnvFile } = require("./utils/env");

loadEnvFile();

const PORT = Number(process.env.PORT || 4000);
const CLIENT_ORIGIN = process.env.CLIENT_ORIGIN || "http://localhost:3000";

function sendJson(response, statusCode, payload) {
  response.writeHead(statusCode, {
    "Content-Type": "application/json; charset=utf-8",
    "Access-Control-Allow-Origin": CLIENT_ORIGIN,
    "Access-Control-Allow-Methods": "GET,POST,OPTIONS",
    "Access-Control-Allow-Headers": "Content-Type"
  });

  response.end(JSON.stringify(payload));
}

function matchesQuery(action, normalizedQuery) {
  if (!normalizedQuery) {
    return true;
  }

  const searchable = [
    action.label,
    action.description,
    action.category,
    action.end
  ]
    .join(" ")
    .toLowerCase();

  return searchable.includes(normalizedQuery);
}

const server = http.createServer((request, response) => {
  if (!request.url || !request.method) {
    sendJson(response, 400, { error: "Invalid request." });
    return;
  }

  if (request.method === "OPTIONS") {
    response.writeHead(204, {
      "Access-Control-Allow-Origin": CLIENT_ORIGIN,
      "Access-Control-Allow-Methods": "GET,POST,OPTIONS",
      "Access-Control-Allow-Headers": "Content-Type"
    });
    response.end();
    return;
  }

  const url = new URL(request.url, `http://${request.headers.host || "localhost"}`);

  if (request.method === "GET" && url.pathname === "/health") {
    sendJson(response, 200, {
      status: "ok",
      service: "an-era-backend",
      timestamp: new Date().toISOString()
    });
    return;
  }

  if (request.method === "GET" && url.pathname === "/api/meta") {
    sendJson(response, 200, {
      company: "AN-ERA",
      version: "0.1.0",
      features: ["health", "command-search"],
      clientOrigin: CLIENT_ORIGIN
    });
    return;
  }

  if (request.method === "GET" && url.pathname === "/api/actions") {
    const query = (url.searchParams.get("q") || "").trim().toLowerCase();
    const results = actions.filter((action) => matchesQuery(action, query));

    sendJson(response, 200, {
      query,
      count: results.length,
      actions: results
    });
    return;
  }

  sendJson(response, 404, {
    error: "Route not found.",
    path: url.pathname
  });
});

server.listen(PORT, () => {
  console.log(`AN-ERA backend listening on http://localhost:${PORT}`);
});
