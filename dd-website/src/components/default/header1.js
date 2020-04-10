import React from 'react';

const style = {
    'color': 'white',
}


class Component extends React.Component {
    render() {
        return (
            <h1 style={style}>{this.props.content}</h1>

        )
    };
}

export const H1 = props => <Component content={props.content} />