import React from 'react';


const style = {
    'color': 'rgb(0,0,0)',
    'border-width': '4.5px',
    'background-color': '#66FCF1',
    'margin-left': '20vw',
    'margin-right': '20vw',

}


class Component extends React.Component {
    render() {
        return (
            <hr style={style}></hr>
        )
    };
}

export const Line = props => <Component/>