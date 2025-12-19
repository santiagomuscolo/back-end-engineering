const http = require("http");
const WebSocketServer = require("websocket").server;
let connections = [];

//create a raw http server (this will help us create the TCP which will then pass to the websocket to do the magic)
const httpServer = http.createServer();

//pass the http server to the websocket server library to do all the job
const websocket = new WebSocketServer({ httpServer: httpServer });

httpServer.listen(8080, () => console.log("Server is running on port 8080"));

websocket.on("request", (request) => {
  const connection = request.accept(null, request.origin);
  connection.on("message", (message) => {
    //send the message to all the connections
    connections.forEach((c) =>
      c.send(`User ${connection.socket.remotePort} says: ${message.utf8Data}`)
    );
  });

  //add the connection to the connections array
  connections.push(connection);

  //somebody joined, tell everyone
  connections.forEach((c) =>
    c.send(`User ${connection.socket.remotePort} joined`)
  );
});
