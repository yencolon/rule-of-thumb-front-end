import * as React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { setCelebritiesShowMode } from '../../redux/celebritiesSlice'
import { RootState } from '../../redux/store'
import "./styles.css"


const VotingContentHeading = () => {

    const viewStyle = useSelector((state: RootState) => state.celebritiesReducer.celebritiesShowMode)
    const dispatch = useDispatch()

    const handleChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
        dispatch(setCelebritiesShowMode(event.target.value as "list" | "grid"))
    }

    return (
        <div className="voting-cards__heading">
            <h2>Previous Rulings</h2>
            <div className="select">
                <select name="select view" value={viewStyle} onChange={handleChange}>
                    <option value="grid">Grid</option>
                    <option value="list">List</option>
                </select>
            </div>
        </div>)
}

export default VotingContentHeading