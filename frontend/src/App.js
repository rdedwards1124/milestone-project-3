import { BrowserRouter, Route, Switch } from "react-router-dom";
import Home from "./Home";

import Navigation from "./Navigation";
import Error404 from "./Error404";
import CurrentUserProvider from "./contexts/CurrentUser";
import SearchPage from "./pages/SearchPage";
import UserMyPage from "./pages/UserMyPage";
import ChatPage from "./pages/ChatPage"
import SearchType from "./pages/SearchType";
import PokemonPage from "./pages/PokemonPage";
import LoginForm from "./users/LoginForm";

function App() {
    return (
        <CurrentUserProvider>
            <BrowserRouter>
                <Navigation />
                <Switch>
                    <Route exact path="/" component={Home} />
                    <Route exact path="/searchpage" component={SearchPage} />
                    <Route exact path="/searchtype/:id" component={SearchType} />
                    <Route exact path="/pokemonpage/:id" component={PokemonPage} />
                    <Route exact path="/usermypage" component={UserMyPage} />
                    <Route exact path="/chatpage" component={ChatPage} />
                    <Route exact path="/login" component={LoginForm} />
                    <Route path="/" component={Error404} />
                </Switch>
            </BrowserRouter>
        </CurrentUserProvider>

    );
}

export default App;
