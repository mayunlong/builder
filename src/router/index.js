import React from "react";
import {
    HashRouter as Router,
    Switch,
    Route,
    Redirect
} from "react-router-dom";
import Main from "@pages/main"

export function useQuery() {
    return new URLSearchParams(useLocation().search);
}



export default function router() {
    return (
        <Router>
            <Switch>
                <Route exact path="/">
                    <Redirect to="/main" />
                </Route>
                <Route path="/main">
                    <Main />
                </Route>
            </Switch>
        </Router>
    );
}