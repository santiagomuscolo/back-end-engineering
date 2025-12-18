This pattern is one of the most important ones at software development we can apply it on the client and the server and have many benefits.

To start let’s have a fast check-in to the topic. When we are talking about synchronous workloads we mean that our client and server are in sync, they work togheter but if we use an asynchronous workload we allow the server to do different things, despite all of the concerns we can work on different topics (process data) at the same time right?

Let’s start with this topic:

**Synchronous I/O**

- Caller sends a request and blocks.
- Caller cannot execute any code meanwhile.
- Receiver responds, Caller unblocks.
- Caller and Receiver are in “sync”.

**Examples of an OS synchronous I/O**

- Program asks OS to read from disk.
- Program main thread is taken off of the CPU.
- Read completes, program can resume execution.

**Asynchronous I/O**

- Caller sends a request.
- Caller can work until it gets a response.
- Caller either:
    - Checks if the response is ready (epoll).
    - Receiver calls back when it’s done (io_uring).
    - Spins up a new thread that blocks.
- Caller and receiver are not necessary in sync.

**Example of an OS asynchronous call (NodeJS)**

- Program spins up a secondary thread.
- Secondary thread reads from disk, OS blocks it.
- Thread finish reading and calls back main thread.
- Main program still running and executing code.

```jsx
//Program starts
//Program uses CPU to execute stuff
doWork();
//Program requests read from disk
//Program asks to callback when done
//Program moves on to doWork2
readFile("largefile.dat", onReadFinished(theFile);
//file is probably not read yet
//Program happy doing stuff
doWork2();
//someone just called onReadFinished
//processing it.
---->onReadFinished(theFile)
```

**Synchronous vs Asynchronous in Request Response**

- Synchronocity is a client property
- Most modern client libraries are asynchronous
- E.g. Clients send an HTTP request and do work

**Asynchronous workload is everywhere**

- Asynchronous Programmin (promises/futures).
- Asynchronous backend processing.
- Asynchronous commits in postgres.
- Asynchronous  IO in linux (epoll, io_uring).
- Asynchronous replication.
- Asynchronous OS fsync (fs cache).