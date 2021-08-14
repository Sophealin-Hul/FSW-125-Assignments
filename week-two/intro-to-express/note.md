Express.js
Express is a minimal and flexible node.js web application framework that provides a robust set of feature for web and mobile applications, with a myriad of HTTP utility method and middleware at your disposol, creating a robust API is quick and easy.

Routing
refers to the determining how the application response to client request to a particular endpoint, which is a URI (or path) and a specific HTTP request method (GET, POST, and so on).
Each route can have one or more handler functions, which are excecuted when the route is matched. Route definition takes the following structure.
app.METHOD(PATH, HANDLER)
Where:
App is an instance of Express
METHOD is a HTTP request, in lowercase 
PATH is a path on the server
HANDLER is the function executed when the route is matched 

NODEMON is a tool that helps develops node.js based application by automatically restarting the node application when file change and the directory are deleted.