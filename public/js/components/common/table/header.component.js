import React, {Component} from 'react';

class Header extends Component {

    render() {

        let columns = this.props.columns; // [{displayName, attribute}]
        return (
            <thead>
                <tr>
                    {
                        columns.map((colData, index) => (
                            <th key={index}> {colData.displayName} </th>
                        ))
                    }
                </tr>
            </thead>
        );
    }
}

export default Header