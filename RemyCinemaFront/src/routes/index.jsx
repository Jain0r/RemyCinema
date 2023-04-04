import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import routes from "../shared/navigation";
import Home from "../pages/User/Home";
import MovieInitPage from "../pages/User/Movie";
import AdminPerformancesPage from "../pages/Admin/AdminPerformances";
import AdminBookingsPage from "../pages/Admin/AdminBookings";
import AdminUsersPage from "../pages/Admin/AdminUsers";
import AdminCinemasPage from "../pages/Admin/AdminCinemas";
import AdminTicketsPage from "../pages/Admin/AdminTickets";
import AdminFoodsPage from "../pages/Admin/AdminFoods";
import AdminHallsPage from "../pages/Admin/AdminHalls";
import MovieDetailsPage from "../pages/User/MovieDetails";
import AdminInitPage from "../pages/Admin/AdminInit";
import AdminMoviePage from "../pages/Admin/AdminMovies";
import UserContainer from "../pages/User/Container";
import AuthPage from "../pages/User/Auth";
import ShopPage from "../pages/User/Shop";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useLayoutEffect } from "react";
import useNotification from "../hooks/useNotification";
import { useDispatch } from "react-redux";
import { cleanNotifications } from "../redux/actions/notificationActions";
// minified version is also included
// import 'react-toastify/dist/ReactToastify.min.css';

const ScrollToTop = ({ children }) => {
  const location = useLocation();

  useLayoutEffect(() => {
    window.scrollTo(0, 0);
  }, [location.pathname]);
  return children;
};

const App = () => {
  const { allNotifications } = useNotification();

  return (
    <div className="App">
      <BrowserRouter>
        <ScrollToTop>
          <Routes>
            <Route path="/" element={<UserContainer />}>
              <Route
                index
                path={`${routes.home.init}`}
                element={<Home />}
              ></Route>
              <Route path={`${routes.shop.init}`} element={<Home />}></Route>
              <Route
                path={`${routes.movies.init}`}
                element={<MovieInitPage />}
              ></Route>
              <Route
                path={`${routes.movies.item}`}
                element={<MovieDetailsPage />}
              ></Route>
              <Route
                path={`${routes.shop.item}`}
                element={<ShopPage />}
              ></Route>
            </Route>
            <Route path={`${routes.login.init}`} element={<AuthPage />}></Route>
            <Route path={`${routes.admin.init}`} element={<AdminInitPage />}>
              <Route
                path={`${routes.admin.movies}`}
                element={<AdminMoviePage />}
              ></Route>
              <Route
                path={`${routes.admin.functions}`}
                element={<AdminPerformancesPage />}
              ></Route>
              <Route
                path={`${routes.admin.users}`}
                element={<AdminUsersPage />}
              ></Route>
              <Route
                path={`${routes.admin.cinemas}`}
                element={<AdminCinemasPage />}
              ></Route>
              <Route
                path={`${routes.admin.halls}`}
                element={<AdminHallsPage />}
              ></Route>
              <Route
                path={`${routes.admin.tickets}`}
                element={<AdminTicketsPage />}
              ></Route>
              <Route
                path={`${routes.admin.foods}`}
                element={<AdminFoodsPage />}
              ></Route>
              <Route
                path={`${routes.admin.bookings}`}
                element={<AdminBookingsPage />}
              ></Route>
            </Route>
          </Routes>
        </ScrollToTop>
      </BrowserRouter>
      {allNotifications}
      <ToastContainer />
    </div>
  );
};

export default App;
