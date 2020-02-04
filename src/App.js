import React from 'react';
import { BrowserRouter as Router, Route } from "react-router-dom";

import Navbar from "./components/layout/navbar/Navbar"
import routes from "./routes"

import Firebase, { FirebaseProvider } from './firebase'




function App() {
  return (
    <Router basename={process.env.REACT_APP_BASENAME || ""}>
      <div>
        <FirebaseProvider value={Firebase}>
        <Navbar />
        </FirebaseProvider>
        {routes.map((route, index) => {
          return (
            <FirebaseProvider value={Firebase} key={index}>
              <Route
                path={route.path}
                exact={route.exact}
                render={(props) => <route.component {...props} />}
              />
            </FirebaseProvider>
          );
        })}
      </div>
    </Router>
  );
}

export default App;
