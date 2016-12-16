var React = require('react');

var WeatherMessage = (props) => {
    var location = props.location;
    var temp = props.temp;

    return (
        <div>
            It's {temp} degrees in {location}
        </div>
    );
}

module.exports = WeatherMessage;