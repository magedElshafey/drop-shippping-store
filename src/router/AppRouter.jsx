import { createBrowserRouter, RouterProvider } from "react-router-dom";
// error element
import NotFound from "../components/errors/NotFound";
import OfflineNerwork from "../components/errors/OfflineNerwork";
// layouts
import WebsiteLayout from "../layouts/website/WebsiteLayout";
// common components
import Meta from "../components/common/seo/Meta";
import useNetworkStatus from "../hooks/network/useNetworkStatus";
// pages
import Home from "../pages/home/Home";
// authentication pages
import Login from "../pages/auth/Login";
import Regester from "../pages/auth/Regester";
import ActiveEmail from "../pages/auth/ActiveEmail";
import ActiveForgetPassword from "../pages/auth/ActiveForgetPassword";
import ForgetPassword from "../pages/auth/ForgetPassword";
import NewPassword from "../pages/auth/NewPassword";
// static pages
import Blogs from "../pages/static/Blogs";
import Blog from "../pages/static/Blog";
import About from "../pages/static/About";
import Contact from "../pages/static/Contact";
import FAQ from "../pages/static/FAQ";
import PrvicayAndPolicy from "../pages/static/PrvicayAndPolicy";
import TermsAndConditions from "../pages/static/TermsAndConditions";
// dashboard pages
import MyAccount from "../pages/dashboard/MyAccount";
import MyOrders from "../pages/dashboard/MyOrders";
import MyWhishlist from "../pages/dashboard/MyWhishlist";

const router = createBrowserRouter([
  {
    path: "/",
    element: <WebsiteLayout />,
    errorElement: <NotFound />,
    children: [
      {
        path: "/",
        index: true,
        element: <Home />,
      },
      {
        path: "login",
        element: <Login />,
      },
      {
        path: "regester",
        element: <Regester />,
      },
      {
        path: "active-email",
        element: <ActiveEmail />,
      },
      {
        path: "forget-password",
        element: <ForgetPassword />,
      },
      {
        path: "active-forget-password",
        element: <ActiveForgetPassword />,
      },
      {
        path: "new-password",
        element: <NewPassword />,
      },
      {
        path: "blogs",
        element: <Blogs />,
      },
      {
        path: "blogs/:id",
        element: <Blog />,
      },
      {
        path: "about",
        element: <About />,
      },
      {
        path: "contact",
        element: <Contact />,
      },
      {
        path: "faq",
        element: <FAQ />,
      },
      {
        path: "prvicay-policy",
        element: <PrvicayAndPolicy />,
      },
      {
        path: "terms-conditions",
        element: <TermsAndConditions />,
      },
    ],
  },
  {
    path: "user-dashboard",
    element: <div></div>,
    errorElement: <NotFound />,
    children: [
      {
        path: "my-account",
        element: <MyAccount />,
      },
      {
        path: "my-whishlist",
        element: <MyWhishlist />,
      },
      {
        path: "my-orders",
        element: <MyOrders />,
      },
    ],
  },
]);
const AppRouter = () => {
  const { isOnline } = useNetworkStatus();
  return (
    <>{isOnline ? <RouterProvider router={router} /> : <OfflineNerwork />}</>
  );
};

export default AppRouter;
