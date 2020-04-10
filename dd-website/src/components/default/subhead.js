import React from 'react';

const style = {
    'color': 'white'
}


class Component extends React.Component {
    render() {
        return (
            <subhead style={style}>{this.props.content}</subhead>

        )
    };
}

export const Subhead = props => <Component content={props.content} />