import { BrowserRouter, Route, Switch } from 'react-router-dom'
import Home from './Home'

import Navigation from './Navigation'
import Error404 from './Error404'


function App() {
  return (

      <BrowserRouter>
        <Navigation />
        <Switch>
          <Route exact path="/" component={Home} />

          <Route path="/" component={Error404} />
        </Switch>
      </BrowserRouter>

  );
}

export default App;