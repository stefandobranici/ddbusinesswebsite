import React from 'react';

const style = {
    'color': 'white',
    'font-family': 'Hind Siliguri',
    'font-size': '1.3em',
    'white-space': 'pre-line'
}


class Component extends React.Component {
    render() {
        return (
            <subhead style={style}>{this.props.content}</subhead>

        )
    };
}

export const Subhead = props => <Component content={props.content} />