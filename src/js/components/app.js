/**
* @jsx React.DOM
*/

var React = require('react');
    
var APP = React.createClass({
    _handleClick: function () {
        console.log('Clicked!');
    },

    render: function() {
        return (
            <h1 onClick={this._handleClick}>React app</h1>
        );
    }

});

module.exports = APP;