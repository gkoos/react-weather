var React = require('react');
var ReactDOM = require('react-dom');

var ReactRouter = require('react-router');
var Route = ReactRouter.Route;
var Router = ReactRouter.Router;
var IndexRoute = ReactRouter.IndexRoute;
var hashHistory = ReactRouter.hashHistory;

var Main = require('Main');
var Weather = require('Weather');
var About = require('About');
var Examples = require('Examples');

require('style!css!foundation-sites/dist/css/foundation.min.css');
$(document).foundation();

require('style!css!sass!applicationStyles');

ReactDOM.render(
    <Router history={hashHistory}>
        <Route path="/" component={Main}>
            <Route path="about" component={About}/>
            <Route path="examples" component={Examples}/>
            <IndexRoute component={Weather}/>
        </Route>
    </Router>,
    document.getElementById('app')
);
