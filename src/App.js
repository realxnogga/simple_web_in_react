import { Login } from "./pages/login";
import { Register } from "./pages/register";
import Home from "./pages/home";
import { Provider } from "react-redux";
import { Store } from "./store"; // Assuming you've exported your Redux store as 'store'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { useSelector } from "react-redux";

import { loginCookieTemp } from "./feature/accountslice/loginSlice";
import { CustomToastContainer } from "./components/toaster";

function WrapperApp() {
  const loginCookie = useSelector(loginCookieTemp);

  return (

    <Router>
      <Routes>
        {loginCookie ? (
          <>
            <Route path="/" element={<Login />} />
            <Route path="/register" element={<Register />} />
            <Route path="/home" element={<Home />} />
          </>
        ) : (
          <>
            <Route path="/" element={<Login />} />
            <Route path="/register" element={<Register />} />
          </>
        )}
      </Routes>
    </Router>

  );
}

const App = () => (
  <>
    <Provider store={Store}>
      <WrapperApp />
      <CustomToastContainer />
    </Provider>
  </>

);

export default App;
