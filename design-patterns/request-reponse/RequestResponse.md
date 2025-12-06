## Back-end communication design patterns

### Request-reponse

This is everywhere, you make a request then back-end process the request and give a response.

**Request Response model**

- Client sends a request
- Server parses the request
- Server processes the request
- Server sends the response
- Client parses the response and consume

**Where it is used?**

- Web, HTTP (request response protocol), DNS (domain name system, request response protocol), SSH (secure shell protocol, request response protocol).
- RPC (remote procedure call).
- SQL and Database Protocols.
- APIs (REST/SOAP/GraphQL).

**Anatomy of a Request / Response**

- A request structure is defined by both client and server.
- Request has a boundary.
- Defined by a protocol and message format.
- Same for response.

**Building an upload image service with request response**

- Send large request with the image (simple).
- Chunk image and send a request per chunk (resumable)

**Doesn’t work everywhere**

- Notification service.
- Chatting application.
- Very long running requests.
- What if client disconnects?