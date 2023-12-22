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
              borderRadius: "1rem",
            },
          },
          error: {
            style: {
              borderRadius: "1rem",
            },
          },
        }}
      />
    </>
  );
}

export default App;
