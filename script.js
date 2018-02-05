var componentsCounter = 0;

var Counter = React.createClass({

    propTypes: {
        id: React.PropTypes.number.isRequired,
        resetable: React.PropTypes.bool
    },

    getInitialState: function() {
        return {
            counter: 0
        };
    },

    increment: function() {
        this.setState({
            counter: this.state.counter + 1
        });
    },

    decrement: function() {
        this.setState({
            counter: this.state.counter - 1
        });
    },

    resetCounter: function() {
        this.setState({
            counter: 0
        })
    },

    componentWillMount: function () {
        console.log('Making new component');
        
    },

    componentDidMount: function () {
        console.log( 'Component mounted');
    },

    componentWillReceiveProps: function() {
        console.log('Component gets props');
    },

    shouldComponentUpdate: function () {
        console.log('Component get new state');
        return true;
    },
    
    componentWillUpdate: function() {
        console.log('Updating component')
    },

    componentDidUpdate: function() {
        console.log('Component updated');
    },

    componentWillUnmount: function(){
        console.log('Deleting counter. Component will unmount');
    },



    render: function() {
        return React.createElement('div', {className: 'counter'}, 
            
            React.createElement('div', {className: 'btn-group'}, 
                React.createElement('button', {
                    className: 'btn btn-danger',
                    onClick: this.decrement
                }, '-'),
                React.createElement('div', {
                    className: 'btn btn-success',
                    onDoubleClick: this.resetCounter
                }, 'Counter no. ' + this.props.id +  ': ' + this.state.counter),
                React.createElement('button', {
                    className: 'btn btn-primary',
                    onClick: this.increment
                }, '+'),
            )
        );
    }
});

var element = React.createElement('div', {}, 
    React.createElement(Counter, {'id' : componentsCounter++ }),
    React.createElement(Counter, {'id' : componentsCounter++ }),
    React.createElement(Counter, {'id' : componentsCounter++ }),
);
ReactDOM.render(element, document.getElementById('app'));


