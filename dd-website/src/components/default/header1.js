import React from 'react';

const style = {
    'color': '#66FCF1',
    'font-family': 'Hind Siliguri',
    'font-weight': 'bold',
    'font-size': '3em',
}


class Component extends React.Component {
    render() {
        return (
            <h1 style={style}>{this.props.content}</h1>

        )
    };
}

export const H1 = props => <Component content={props.content} />