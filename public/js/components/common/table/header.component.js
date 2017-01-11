import React, {Component} from 'react';

class Header extends Component {

    render() {

        let columns = this.props.columns; // [{title, accessor}]
        return (
            <thead>
                <tr>
                    {
                        columns.map((colData, index) => (
                            <th key={index}> {colData.title} </th>
                        ))
                    }
                </tr>
            </thead>
        );
    }
}

export default Header