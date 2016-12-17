var React = require('react');

var About = (props) => {
    return (
        <div>
            <h1 className="text-center">About</h1>
            <p>Udemy React course app.</p>
            <p>React.js-powered example application to retrieve weather information using the OpenWeatherMap API.</p>
            <ul>
                <li>
                    <a href="//openweathermap.org">OpenWeatherMap site</a>
                </li>
                <li>
                    <a href="https://facebook.github.io/react/">React.js on GitHub</a>
                </li>
            </ul>
        </div>
    );
}

module.exports = About;