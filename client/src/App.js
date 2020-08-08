import React, { Component } from 'react';
import { HashRouter, Route, Switch } from 'react-router-dom';
import './scss/style.scss';
import CreateRoom from "./routes/CreateRoom"
import Room from "./routes/Room"
const loading = (
  <div className="pt-3 text-center">
    <div className="sk-spinner sk-spinner-pulse"></div>
  </div>
)

// Containers
const TheLayout = React.lazy(() => import('./containers/TheLayout'));

// Pages
const Login = React.lazy(() => import('./views/pages/login/Login'));
const Register = React.lazy(() => import('./views/pages/register/Register'));
const Page404 = React.lazy(() => import('./views/pages/page404/Page404'));
const Page500 = React.lazy(() => import('./views/pages/page500/Page500'));
//아이디/비밀번호 찾기 추가
// const SearchIDPW = React.lazy(() => import("./views/pages/search_idPw/SearchIDPW"));

class App extends Component {

  render() {
    return (
      <HashRouter>
        <React.Suspense fallback={loading}>
          <Switch>
            <Route exact path="/login" name="Login Page" render={props => <Login {...props} />}
              onCreate={this.handleCreate} />
            <Route exact path="/register" name="Register Page" render={props => <Register {...props} />} />
            <Route exact path="/404" name="Page 404" render={props => <Page404 {...props} />} />
            <Route exact path="/500" name="Page 500" render={props => <Page500 {...props} />} />
            <Route path="/" name="Home" render={props => <TheLayout {...props} />} />
            {/* <Route exact path="/pages/search_idPw" name="Search ID/PW page" render={props => <SearchIDPW {...props}/>} /> */}
            <Route path="/room" name="create room" exact component={CreateRoom} />
            <Route path="/room/new/:roomID" name="new room" component={Room} />
          </Switch>
        </React.Suspense>
      </HashRouter>
    );
  }
}

export default App;
