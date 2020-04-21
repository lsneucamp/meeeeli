const nextRoutes = require("next-routes");

const routes = (module.exports = nextRoutes());

routes.add("home","/" );
routes.add("search","/search");
routes.add("items", "/product/:id");

export default routes;
