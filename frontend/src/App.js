import { BrowserRouter, Route, Switch } from "react-router-dom";
import { AuthProvider } from "./contexts/AuthContext";
import Home from "./Home";

import Navigation from "./Navigation";
import Error404 from "./Error404";

import SearchPage from "./pages/SearchPage";
import UserMyPage from "./pages/UserMyPage";
import UserPageWithId from "./pages/UserPageWithId";
import ChatPage from "./pages/ChatPage"
import SearchType from "./pages/SearchType";
import PokemonPage from "./pages/PokemonPage";
import LoginForm from "./users/LoginForm";
import SignUpForm from "./users/SignUpForm"

function App() {
    return (
        <AuthProvider>
            <BrowserRouter>
                <Navigation />
                <Switch>
                    <Route exact path="/" component={Home} />
                    <Route exact path="/searchpage" component={SearchPage} />
                    <Route exact path="/searchtype/:id" component={SearchType} />
                    <Route exact path="/pokemonpage/:id" component={PokemonPage} />
                    <Route exact path="/usermypage" component={UserMyPage} />
                    <Route exact path="/userpage/:id" component={UserPageWithId} />
                    <Route exact path="/chatpage" component={ChatPage} />
                    <Route exact path="/login" component={LoginForm} />
                    <Route exact path="/signup" component={SignUpForm} />
                    <Route path="/" component={Error404} />
                </Switch>
            </BrowserRouter>
        </AuthProvider>
     
            
     

    );
}

export default App;
