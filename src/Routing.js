import { useEffect } from "react";
import { useState } from "react";
import { Route, Routes, Link, useParams, useNavigate } from "react-router-dom";

const Home = () => <h1>Home</h1>;
const Projects = () => <h1>Projects</h1>;
const NotFound = () => <h1>404</h1>;
const Orders = () => {
  const { id } = useParams();

  return (
    <div>
      <h1>Orders</h1>
      <p> Order ID: {id}</p>
    </div>
  );
};
const PriceOrders = () => {
  const { id, price } = useParams();
  return (
    <div>
      <h1>Price Orders</h1>
      <p>
        Order ID: {id} Price: {price}{" "}
      </p>
    </div>
  );
};

const isLoggedIn = false;

const Dashboard = () => {
  //const [id, setId] = useState(1);
  const navigate = useNavigate();

  useEffect(() => {
    if (!isLoggedIn) {
      navigate("/login");
    }
    //addToLocalStorage(id);
  }, []); //add dependicies inside this array i.e. [id]
  return <h1>Dashboard</h1>;
};

const Login = () => <h1> Login </h1>;

const Routing = () => {
  return (
    <div>
      <div>
        <Link to="/">Home</Link>
        <span style={{ paddingRight: "10px" }} />
        <Link to="/projects"> Projects </Link>
      </div>
      <Routes>
        <Route path="/" element={<Home />} />
        {/* <Route path="/projects" element={<Projects />} />
        <Route path="*" element={<NotFound />} />
        <Route path="/orders/:id" element={<Orders />} />
        <Route path="/priceorders/:id/:price" element={<PriceOrders />} />
        <Route path="/login/" element={<Login />} />
        <Route path="/dashboard" element={<Dashboard />} /> */}
      </Routes>
    </div>
  );
};

export default Routing;
