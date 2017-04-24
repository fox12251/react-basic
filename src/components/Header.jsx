import React from 'react';

import Stats from './Stats';
import Stopwatch from './Stopwatch';

function Header(props) {
    return (
        <header>
            <Stopwatch />
            <h1>React Todo</h1>
            <Stats todos={props.todos} />            
        </header>
    );
}

Header.propTypes = {
    todos: React.PropTypes.array.isRequired
};

export default Header;