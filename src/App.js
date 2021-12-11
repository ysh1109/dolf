import React from "react";
import { Outlet, Routes, Route, Link, NavLink } from "react-router-dom";

import "./App.css";
import LogInPage from "./pages/LogInPage";
import DriverHome from "./pages/DriverHome";
import UserHome from "./pages/user-pages/UserHome";
import { Provider } from "react-redux";
import { store } from "./redux/store";
import { backgroundImage } from "./image";
import { AuthContext, useAuth, useProvideAuth } from "./userContext/userContext";
import SelectDetailsPage from "./pages/user-pages/SelectDetailsPage";
import VehicleDetailsForm from "./pages/user-pages/user-form/VihicleDetailsForm";
import SelectLocationForm from "./pages/user-pages/user-form/SelectLocationForm";
import TowDestination from "./pages/user-pages/user-form/TowDestination";
import TowFuelForm from "./pages/user-pages/user-form/TowFuel";
import ProfileDetaisForm from "./pages/user-pages/user-form/ProfileDetaisForm";
import RequestAcceptForm from "./pages/user-pages/user-form/RequestAcceptForm";
// import RequestForm from "./pages/RequestForm";
import { NotificationsProvider } from "@mantine/notifications";
import Directions from "./components/Directions/DirectionsIndex";
import DriverHomeTabs from "./pages/driver-page/DriverHomeTabs";
import SignupPage from "./pages/SignUp";
import { MantineProvider } from "@mantine/styles";

function App() {
  const auth = useProvideAuth();
  const { user } = auth || {};
  return (
    <AuthContext.Provider value={auth}>
      <MantineProvider
        theme={{
          primaryColor: "bright-pink",
          colors: {
            "ocean-blue": [
              "#7AD1DD",
              "#5FCCDB",
              "#44CADC",
              "#2AC9DE",
              "#1AC2D9",
              "#11B7CD",
              "#09ADC3",
              "#0E99AC",
              "#128797",
              "#147885",
            ],
            "bright-pink": [
              "#F0BBDD",
              "#ED9BCF",
              "#EC7CC3",
              "#ED5DB8",
              "#F13EAF",
              "#F71FA7",
              "#FF00A1",
              "#E00890",
              "#C50E82",
              "#AD1374",
            ],
          },
        }}
      >
        <NotificationsProvider>
          <Provider store={store}>
            <div
              className="App"
              style={{
                backgroundImage: `url(${backgroundImage})`,
                backgroundRepeat: "no-repeat",
                backgroundSize: "cover",
              }}
            >
              <Routes>
                {user ? (
                  user?.userType === "User" ? (
                    <>
                      <Route index path="/" element={<UserHome />} />
                      <Route path="user-select-details" element={<SelectDetailsPage />} />
                      <Route path="vehicle-details-form" element={<VehicleDetailsForm />} />
                      <Route path="locaion-details-form" element={<SelectLocationForm />} />
                      <Route path="tow-destination-details-form" element={<TowDestination />} />
                      <Route path="tow-fuel-details-form" element={<TowFuelForm />} />
                      <Route path="profile-details-form" element={<ProfileDetaisForm />} />
                      <Route path="requst-accept-details-form" element={<RequestAcceptForm />} />
                    </>
                  ) : (
                    <>
                      <Route index path="/" element={<DriverHomeTabs />} />
                    </>
                  )
                ) : (
                  <>
                    <Route index path="/" element={<LogInPage />} />
                    <Route index path="/sign-up" element={<SignupPage />} />
                  </>
                )}

                {/* <Route path="user-form" element={<RequestForm />} /> */}
                <Route path="*" element={<>No Route Found</>} />
              </Routes>
            </div>
          </Provider>
        </NotificationsProvider>
      </MantineProvider>
    </AuthContext.Provider>
  );
}

export default App;
