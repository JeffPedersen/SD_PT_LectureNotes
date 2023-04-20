# Postman

An API client that allows us to create and read HTTP/s requests and responses.

- A testing environment that helps us use client facing requests when we don't have a client side built out.
  - Usually a full stack app is built server first in small dev groups because the server determines what the data looks like/how it's structured
- Basically used as sudo front end to test our server endpoints and database connection.
- A way for us to test APIs

[Postman Learning Center Docs](https://learning.postman.com/docs/introduction/overview/)

## Creating a Collection in Postman

Collections button is at the top right of the left side bar.

After clicking collections, we can create a new collection with the "+", our collection is like a folder for our API requests. We can rename/etc. by right clicking the three dots on the collection name.

- We can right click the Collection name, to add a new request
- We can then name the request and save it to use as reference for later
- Ctrl+S or the Floppy Disc icon and save button will save the request to the collection

## Setting the method in Postman

To set methods in Postman:

- In the top left of the request, the dropdown in front of the URL bar needs to be changed to the method matching our route.
- GET / POST / PATCH / PUT / DELETE

## Sending the Request via the URL

When calling to a local server, we typically will start our URL:

> `http://` + `localhost:PORT#`
Depending on the server routes, we would then add the needed routing and endpoint:

> `http://` + `localhost:PORT#` + `/user` + `/signup`
If the Request needs a JSON body (req.body):

1. Click the body button/tab under the URL address bar.
2. Choose the `raw` option radio button/dropdown (depending on width of Postman).
3. Change the dropdown to the right from `text` to `json`.
4. Build out a JSON object to satisfy the need properties for the endpoint (key value pairs).