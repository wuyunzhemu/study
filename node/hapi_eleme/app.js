const Hapi = require('Hapi');
const server = new Hapi.Server();
const routesHelloHapi = require('./routes/hello-hapi');
const routesShops = require('./routes/shops');
const routeUsers = require('./routes/users');
const pluginHapiSwagger = require('./plugins/hapi-swagger');
require('env2')('./.env');
const config = require('./config');


server.connection({
  port:config.port,
  host:config.host
});

const init = async() =>{
  await server.register([
    ...pluginHapiSwagger
  ]);
  server.route([
     ...routesHelloHapi,
     ...routesShops,
     ...routeUsers
  ]);
  await server.start();
  console.log(`Server running as:${server.info.uri}`);
}

init();