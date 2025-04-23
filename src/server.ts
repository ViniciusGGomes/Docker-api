import http from "node:http";

const PORT = 3333;

const server = http.createServer((request, response) => {
  if (request.method === "GET" && request.url === "/") {
    return response.end("Hello World");
  }

  return response.end("Hello World");
});

server.listen(PORT, () => console.log("Server is running on port:", PORT));
