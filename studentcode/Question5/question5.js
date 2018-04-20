import React from 'react';
import ReactDOM from 'react-dom';

    var rootdiv = document.getElementById("root")
    var elem = React.createElement('h1', null, "this is a test")
    ReactDOM.render(elem, rootdiv)