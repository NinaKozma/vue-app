import Home from "../components/Home.vue";
import About from "../components/About.vue";
import Products from "../components/Products/Products.vue";
import RomanceProducts from "../components/Products/RomanceProducts.vue";
import HorrorProducts from "../components/Products/HorrorProducts.vue";
import ScifiProducts from "../components/Products/ScifiProducts.vue";
import ClassicsProducts from "../components/Products/ClassicsProducts.vue";
import Login from "../components/Login.vue";
import Register from "../components/Register.vue";

const routes = [
  { path: "/", component: Home },
  { path: "/home", component: Home },
  { path: "/about", component: About },
  { path: "/products", component: Products },
  { path: "/products/romance-products", component: RomanceProducts },
  { path: "/products/scifi-products", component: ScifiProducts },
  { path: "/products/horror-products", component: HorrorProducts },
  { path: "/products/classics-products", component: ClassicsProducts },
  { path: "/login", component: Login },
  { path: "/register", component: Register }
];

export default routes;
