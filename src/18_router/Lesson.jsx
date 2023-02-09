import React, { Fragment } from "react";

const App = ({ children }) => (
    <Fragment>
        <header>Header</header>
        {children}
        <footer>Footer</footer>
    </Fragment>
);

export default App;