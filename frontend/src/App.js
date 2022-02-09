import "./App.css";
import {
  BrowserRouter, Route
} from "react-router-dom";
//components
import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";
import LandingPage from "./screens/LandingPage/LandingPage";
import MyNotes from "./screens/MyNotes/MyNotes";

function App() {
  return (
    <BrowserRouter >
      <Header />
      <main >
        <Route exact path='/' component={LandingPage} />
        <Route exact path='/mynotes' component={MyNotes} />
      </main>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
