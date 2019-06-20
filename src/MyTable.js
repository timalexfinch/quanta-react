import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import Table from 'react-bootstrap/Table';
import Button from 'react-bootstrap/Button';

const TableHeader = () => {
    return (
        <thead>
            <tr>
                <th>Name</th>
                <th>Job</th>
                <th>Remove</th>
            </tr>
        </thead>
    )
}

const TableBody = props => {
    const rows = props.characterData.map((row, index) => {
        return (
            <tr key={index}>
                <td>{row.name}</td>
                <td>{row.job}</td>
                <td>
                    <Button variant="outline-danger"
                        onClick={() => props.removeCharacter(index)}>
                        Delete
                    </Button>
                </td>
            </tr>
        )
    })

    return <tbody>{rows}</tbody>
}

class MyTable extends Component {
    render() {
        const { characterData, removeCharacter } = this.props

        return (
            <Table hover striped bordered size="sm">
                <TableHeader />
                <TableBody characterData={characterData}
                    removeCharacter={removeCharacter} />
            </Table>
        )
    }
}

export default MyTable