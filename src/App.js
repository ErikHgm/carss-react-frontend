import styles from "./App.module.css";
import NavBar from "./components/NavBar";
import CarCreateForm from "./pages/cars/CarCreateForm";
import Container from "react-bootstrap/Container";
import { Route, Switch } from "react-router-dom";
import "./api/axiosDefaults";
import SignUpForm from "./pages/auth/SignUpForm";
import SignInForm from "./pages/auth/SignInForm";
import CarPage from "./pages/cars/CarPage";
import CarsList from "./pages/cars/CarsList";
import { useCurrentUser } from "./contexts/CurrentUserContext";
import CarEditForm from "./pages/cars/CarEditForm";
import ProfilePage from "./pages/profiles/ProfilePage";
import UsernameForm from "./pages/profiles/UsernameForm";
import UserPasswordForm from "./pages/profiles/UserPasswordForm";
import ProfileEditForm from "./pages/profiles/ProfileEditForm";
import NotFound from "./components/NotFound";

function App() {
  const currentUser = useCurrentUser();
  const profile_id = currentUser?.profile_id || "";

  return (
    <div className={styles.App}>
      <NavBar />
      <Container className={styles.Main}>
        <Switch>
          <Route
            exact
            path="/"
            render={() => (
              <CarsList message="No results found, adjust the search keyword." />
            )}
          />
          <Route
            exact
            path="/feed"
            render={() => (
              <CarsList
                message="No results found, adjust the search keyword or follow a user."
                filter={`owner__followed__owner__profile=${profile_id}&`}
              />
            )}
          />
          <Route
            exact
            path="/saved"
            render={() => (
              <CarsList
                message="No results found, adjust the search keyword or save a car."
                filter={`saved__owner__profile=${profile_id}&ordering=-saved__created_at&`}
              />
            )}
          />
          <Route exact path="/signin" render={() => <SignInForm />} />
          <Route exact path="/signup" render={() => <SignUpForm />} />
          <Route exact path="/cars/create" render={() => <CarCreateForm />} />
          <Route exact path="/cars/:id" render={() => <CarPage />} />
          <Route exact path="/cars/:id/edit" render={() => <CarEditForm />} />
          <Route exact path="/profiles/:id" render={() => <ProfilePage />} />
          <Route
            exact
            path="/profiles/:id/edit/username"
            render={() => <UsernameForm />}
          />
          <Route
            exact
            path="/profiles/:id/edit/password"
            render={() => <UserPasswordForm />}
          />
          <Route
            exact
            path="/profiles/:id/edit"
            render={() => <ProfileEditForm />}
          />
          <Route render={() => <NotFound />} />
        </Switch>
      </Container>
    </div>
  );
}

export default App;
