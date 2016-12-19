var React = require('react');
var ReactRouter = require('react-router');
var Link = ReactRouter.Link;

var Examples = (props) => {
    return (
        <div>
            <h1 className="text-center page-title">Examples</h1>
            <p>Here are a few example locations to try out:</p>
            <ol>
                <li>
                    <Link to="/?location=London">London</Link>
                </li>
                <li>
                    <Link to="/?location=Budapest">Budapest</Link>
                </li>
                <li>
                    <Link to="/?location=Los Angeles">Los Angeles, CA</Link>
                </li>
            </ol>
        </div>
    );
}

module.exports = Examples;