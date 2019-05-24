// function on Router
const mainRoute = (request, response) => {                  // request, response  same from the server 

  response.writeHead(200, {"Content-Type": "text/html"});    // header 
  response.write("<h1>Hello world 222!</h1>");               // bady 
  response.end();                                            // send 

};

module.exports = mainRoute;
