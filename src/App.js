import Header from "./pages/Home"
import Play from "./pages/Play"
import { BrowserRouter, Switch, Route } from "react-router-dom"

function App() {
  return (
    <BrowserRouter>
      <div className="h-screen">
        <Switch>
          <Route exact path="/">
            <Header />
          </Route>
          <Route path="/play">
            <Play />
          </Route>
        </Switch>
      </div>
    </BrowserRouter>
  )
}

export default App;
