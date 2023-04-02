# Cookies
- Data
    - Set by the webserver
    - Stored by the web client
    - Cookies are sent back to the server on **every** request 

# Uses
- Helps with tracking data and time signature over time
- Store data without using server space
- Early ver of **local** storage on the client side

## Limitations
- not secure
- not very large
  - client can restrict further
- users can erase them at any time.
  - browser settings can erase them after sessions.

## Cookie-Parser Dependency
- Stop our server to install the parses with the following command
```npm i cookie-parser```

## Local Storage vs Cookies

| Cookies | Local Storage |
| --- | --- |
| server-side reference | client-side reference |
| in headers request | server can't access |
| required when servers need to access data | stores user settings (light/dark modes) |
| Max size: 4096 bytes | Max size: 5MB |
| expires | no expiration |