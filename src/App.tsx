import { Route, Routes } from "react-router-dom";
import ErrorPage from "./pages/error";
import Layout from "./components/Layout";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />} errorElement={<ErrorPage />}>
        <Route path="" element={<h1>HomePage</h1>} />
        <Route path="/transport" element={<h1>Transport</h1>} />
        <Route path="/orders" element={<h1>Orders</h1>} />
        <Route path="/users" element={<h1>Users</h1>} />
        <Route path="/restaurants" element={<h1>Restaurants</h1>} />
        <Route path="/bills" element={<h1>Bills</h1>} />
        <Route path="/offers" element={<h1>Offers</h1>} />
      </Route>
    </Routes>
  );
}

export default App;
