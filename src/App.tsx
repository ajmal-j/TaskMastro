import Header from "./components/header/header";
import "./App.css";
import { Toaster } from "react-hot-toast";
import Home from "./pages/home";

function App() {
  return (
    <>
      <Header />
      <Home />
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
