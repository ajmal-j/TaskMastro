import Header from "./components/header/header";
import { Toaster } from "react-hot-toast";
import Home from "./pages/home";
import "./App.css";
import Footer from "./components/footer/footer";

function App() {
  return (
    <>
      <Header />
      <Home />
      <Footer/>
      <Toaster
        position='top-right'
        toastOptions={{
          success: {
            style: {
              borderRadius: "10px",
              background: "#8732ff",
              color: "#fff",
            },
          },
          error: {
            style: {
              borderRadius: "10px",
              background: "#8732ff",
              color: "#fff",
            },
          },
        }}
      />
    </>
  );
}

export default App;
