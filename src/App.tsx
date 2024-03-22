import { Route, Routes } from "react-router-dom";
import ErrorPage from "./pages/error";
import Layout from "./components/Layout";
import HomePage from "./pages/home";
import OrdersPage from "./pages/orders";
import TransportPage from "./pages/transport";
import UserPage from "./pages/user";
import RestaurantPage from "./pages/restaurant";
import BillPage from "./pages/bill";
import OffersPage from "./pages/offers";
import OrderDetailsPage from "./pages/order-details";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />} errorElement={<ErrorPage />}>
        <Route path="/orders">
          <Route index element={<OrdersPage />} />
          <Route path=":id" element={<OrderDetailsPage />} />
        </Route>
        <Route path="" element={<HomePage />} />
        <Route path="/transport" element={<TransportPage />} />
        <Route path="/users" element={<UserPage />} />
        <Route path="/restaurants" element={<RestaurantPage />} />
        <Route path="/bills" element={<BillPage />} />
        <Route path="/offers" element={<OffersPage />} />
      </Route>
    </Routes>
  );
}

export default App;
