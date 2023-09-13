import { BrowserRouter, Route, Switch } from "react-router-dom";
import Home from "./Home";

import Navigation from "./Navigation";
import Error404 from "./Error404";
import CurrentUserProvider from "./contexts/CurrentUser";
import SearchPage from "./pages/SearchPage";
import UserMyPage from "./pages/UserMyPage";

function App() {
    return (
        <BrowserRouter>
            <Navigation />
            <Switch>
                <Route exact path="/" component={Home} />
                <Route exact path="/searchpage" component={SearchPage} />
                <Route exact path="/usermypage" component={UserMyPage} />
                <Route path="/" component={Error404} />
            </Switch>
        </BrowserRouter>
    );
}

export default App;
