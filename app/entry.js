var React = require('react'),
    ReactDOM = require('react-dom'),
    App = require('./app');

var APP_PROPS = window.APP_PROPS || {};

ReactDOM.render(
    <App content={"## Default"}/>,
    document.getElementById('root')
);