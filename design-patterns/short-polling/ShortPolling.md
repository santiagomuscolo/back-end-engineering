**Where request response isn’t ideal?**

- A request takes long time to process.
  - Upload a youtube video.
- The backend want to sends notification.
  - A user just logged in.

**What is Short Polling?**

- Client sends a request.
- Server responds immediately with a handle.
- Server continues to process the request.
- Client uses that handle to check for status.
- Multiple “short” request response as polls.

Short Polling Pros and Cons

- Pros
  - Simple.
  - Good for long running requests.
  - Client can disconnect.
- Cons
  - Too chatty.
  - Network bandwidth.
  - Wasted Backend resources.
