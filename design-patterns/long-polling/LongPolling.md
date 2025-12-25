**Where request/response & polling isn’t ideal**

- A request takes long time to process
    - Upload a youtube video
- The backend want to sends notification
    - A user just logged in
- Short Polling is a good but chatty.

**What is Long Polling?**

- Client send a request.
- Server responds inmediately with a handle.
- Server continues to process the request.
- Client uses that handle to check for status.
- Server DOES not reply until it has the response.
- So we got a handle, we can disconnect a client, we are less chatty.
- Some variation has timeouts too.

**Long Polling pros and cons**

- Pros
    - Less chatty and backend friendly
    - Client can still disconnect
- Cons
    - Not real time