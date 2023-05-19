// import { useRoutes } from "react-router-dom";
import Home from '../Home';
import MyAccount from '../MyAccount';
import MyOrder from '../MyOrder';
import MyOrders from '../MyOrders';
import NotFound from '../NotFound';
import SignIn from '../SignIn';

function App() {
  return (
    <>
      <div>
        <h1 className="text-4xl font-bold text-center text-purple-600">APP</h1>
        <Home />
        <MyAccount />
        <MyOrder />
        <MyOrders />
        <NotFound />
        <SignIn />
      </div>
    </>
  );
}

export default App;
