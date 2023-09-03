import { BrowserRouter, Route, Routes } from "react-router-dom";
import { createBrowserRouter } from "react-router";
import home from "./home";
import MoveIndex from "./moves/MoveIndex";
import MoveDescription from "./moves/MoveDescription";
import NewDescriptionForm from "./moves/NewDescriptionForm";
import Error404 from "./Error404";
import NewMoveForm from "./moves/NewMoveForm";
import EditMoveForm from "./moves/EditMoveForm";
import SignUpForm from "./users/SignUpForm";
import LoginForm from "./users/LoginForm";
import CurrentUserProvider from "./contexts/CurrentUserProvider";
import Navigation from "./Navigation";

function App() {
  return (
    <CurrentUserProvider>
      <BrowserRouter>
        <Navigation />
        <Routes>
          <Route exact path="/" component={home} />
          <Route exact path="/" component={MoveDescription} />
          <Route exact path="/sign-up" component={SignUpForm} />
          <Route exact path="/login" component={LoginForm} />
          <Route exact path="/moves" component={MoveIndex} />
          <Route exact path="/moves/new" component={NewMoveForm} />
          <Route exact path="/moves/:moveId" component={NewDescriptionForm} />
          <Route exact path="/moves/:moveId/edit" component={EditMoveForm} />
          <Route path="/" component={Error404} />
        </Routes>
      </BrowserRouter>
    </CurrentUserProvider>
  );
}

export default App;
