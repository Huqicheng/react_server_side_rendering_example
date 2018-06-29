/*
* Definition of the Index Page, will generate a new file page.generator.js
 */

var React = require('react');
var ReactDOMServer = require("react-dom/server");

var App = require('../app/app');

var ReactDOM = require('react-dom');

module.exports = function(props) {

    var content = ReactDOMServer.renderToString(
        <App content={props.content}></App>
    );

    var propsScript = 'var APP_PROPS = ' + JSON.stringify(props);

    var html = ReactDOMServer.renderToStaticMarkup(
        <html>
        <head>
            <link href="/stylesheets/github.css" rel="stylesheet" />
            <link href="/stylesheets/bootstrap.min.css" rel="stylesheet" />
        </head>
        <body>

        <div id="root" dangerouslySetInnerHTML={
            {__html: content}
        } />
        <script dangerouslySetInnerHTML={
            {__html: propsScript}
        }></script>
        <script src={"/javascripts/entry.generator.js"}></script>
        </body>
        </html>
    );

    return html;
}