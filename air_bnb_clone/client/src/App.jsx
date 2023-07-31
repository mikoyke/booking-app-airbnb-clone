import { Route, Routes } from "react-router-dom";
import axios from "axios";
import { UserContextProvider } from "./UserContext";
import IndexPage from "./pages/IndexPage";
import LoginPage from "./pages/LoginPage";
import ProfilePage from "./pages/ProfilePage";
import Layout from "./Layout";
import RegisterPage from "./pages/RegisterPage";
import PlacesPage from "./pages/PlacesPage";
import PlacesFormPage from "./pages/PlacesFormPage";
import SinglePlacePage from "./pages/SInglePlacePage";
import BookingsPage from "./pages/BookingsPage";
import SingleBookingPage from "./pages/SingleBookingPage";

axios.defaults.baseURL = "http://localhost:4040";
axios.defaults.withCredentials = true;

function App() {
  return (
    <UserContextProvider>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<IndexPage />} />
          <Route path="/login" element={<LoginPage />}></Route>
          <Route path="/register" element={<RegisterPage />}></Route>
          <Route path="/account" element={<ProfilePage />}></Route>
          <Route path="/account/places" element={<PlacesPage />}></Route>
          <Route
            path="/account/places/new"
            element={<PlacesFormPage />}
          ></Route>
          <Route
            path="/account/places/:id"
            element={<PlacesFormPage />}
          ></Route>
          <Route path="/place/:id" element={<SinglePlacePage />}></Route>

          <Route path="/account/bookings" element={<BookingsPage />}></Route>
          <Route
            path="/account/bookings/:id"
            element={<SingleBookingPage />}
          ></Route>
        </Route>
      </Routes>
    </UserContextProvider>
  );
}

export default App;
