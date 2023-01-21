import { BrowserRouter } from "react-router-dom";
import { Footer } from "./components/Footer";
import { Header } from "./components/Header";
import { StackContextProvider } from "./context/StackContext";
import { Router } from "./Router";

function App() {
  return (
    <StackContextProvider>
      <BrowserRouter>
        <Header />
        <Router />
        <Footer />
      </BrowserRouter>
    </StackContextProvider>
  );
}

export default App;
