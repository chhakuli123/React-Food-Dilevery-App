import { Provider } from "react-redux";
import { Outlet } from "react-router-dom";
import "./App.css";
import Footer from "./Components/Footer";
import Header from "./Components/Header";
import store from "./Redux_Store/store";
function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <Header />
        <Outlet />
        <Footer />
      </div>
    </Provider>
  );
}

export default App;
