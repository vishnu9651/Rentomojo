import {Route,Routes} from "react-router-dom"
import Cart from "./Cart";
import City from "./City";
import HomePage from "./HomePage";
import Login from "./Login";


function AllRoutes(){

return(
    <div>
<Routes>
    <Route path="/" element={<HomePage />}     />
    <Route path="/cart" element={<Cart />}     />
    <Route path="/" element={<Login />}     />
    <Route path="/" element={<City />}     />
</Routes>

    </div>
)




}
export default AllRoutes;