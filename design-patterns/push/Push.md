**Request/response isn’t always ideal:**

- Client wants real time notification from backend
    - A user just logged in
    - A message is just received
- Push model is good for certain cases

**What is Push?**

- Client connects to a server
- Server sends data to the client
- Client doesn’t have to request anything
- Protocol must be bidirectional
- Used by RabbitMQ

**Push Pros and Cons**

- Pros
    - Real time
- Cons
    - Clients must be online
    - Clients might not be able to handle
    - Requires a bidirectional protocol
    - Polling is preferred for light clients