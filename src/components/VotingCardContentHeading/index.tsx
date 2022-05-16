import * as React from 'react'
import "./styles.css"

interface IVotingContentHeadingProps {
    onChange: (value: "list" | "grid") => void,
    value: "list" | "grid"
}
const VotingContentHeading = ({ onChange, value }: IVotingContentHeadingProps) => {

    const handleChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
        onChange(event.target.value as "list" | "grid")
    }

    return (
        <div className="voting-cards__heading">
            <h2>Previous Rulings</h2>
            <div className="select">
                <select name="Selecciona el tipo de vista" value={value} onChange={handleChange}>
                    <option value="grid">Grid</option>
                    <option value="list">List</option>
                </select>
            </div>
        </div>)
}

export default VotingContentHeading