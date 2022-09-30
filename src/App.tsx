import { BrowserRouter } from "react-router-dom";
import { Footer } from "./components/Footer";
import { Header } from "./components/Header";
import { Router } from "./Router";

function App() {
  return (
    <div>
      <BrowserRouter>
        <Header />
        <Router />
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
