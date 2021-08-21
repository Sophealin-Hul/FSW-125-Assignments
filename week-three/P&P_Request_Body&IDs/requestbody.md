request body
contains key-value paris of data submiited in the request body. By default, it is undefined, and is populated when you use body-parsing middleware such as express.json() or express.urlencoded().


Middleware: 
Express is a routing and middleware web framework that hs minimal functionality of its own: an Express applicationis essentially a series of middleware function calls

Middleware functions are functions that have access to the request object (req), the response object (res), and the next middleware function in the application's request-response cycle. the next middleware function is commonly denoted by a variable named next.

can perform 
- execute any code
- make changes to the request and the response objects
- end the request response cycle
- call the next middleware function in the stack 
*** if the current middleware function does not end the request-response cycle, it must call next() to pass control to the next middleware function. otherwise, the request will be left hanging. ***

express.json([options])
this is a build-in middleware function in express. it parses incoming requests with json payloads and is based on body-parser.