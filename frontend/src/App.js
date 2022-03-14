import "./App.css";
import { BrowserRouter, Route } from "react-router-dom";
//components
import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";
import LandingPage from "./screens/LandingPage/LandingPage";
import MyNotes from "./screens/MyNotes/MyNotes";
import LoginScreen from "./screens/LoginScreen/LoginScreen";
import SignupScreen from "./screens/SignupScreen/SignupScreen";
import CreateNote from "./screens/CreateNote/CreateNote";
import UpdateNote from "./screens/UpdateNote/UpdateNote";
import { useState } from "react";

function App() {
  const [search, setSearch] = useState("");
  return (
    <BrowserRouter>
      <Header setSearch={setSearch} />
      <main>
        <Route exact path="/" component={LandingPage} />
        <Route exact path="/login" component={LoginScreen} />
        <Route exact path="/register" component={SignupScreen} />
        <Route exact path="/createnote" component={CreateNote} />
        <Route exact path="/notes/:id" component={UpdateNote} />
        <Route
          exact
          path="/mynotes"
          component={() => <MyNotes search={search} />}
        />
      </main>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
