import React from 'react'
import './styles.css'
import SearchIcon from '@material-ui/icons/Search';
import {
    Paper,
    InputBase,
    IconButton
} from '@material-ui/core'
import { connect } from 'react-redux'
import styled from 'styled-components'
import { filterByText } from '../store/actions'

const FilterSurface = styled(Paper)`
    display: flex;
    flex-flow: row wrap;
    min-height: 60px;
    align-items: center;
`;

const FilterInputs = (props) => {
    const handleInput = e => {
        e.preventDefault()
        let filterValue = e.currentTarget.value
        console.log(filterValue)
        props.filterByText(filterValue)
    }
    return(
        <div className="filter-inputs">
            <FilterSurface>
                <div className="action-inputs">
                    <IconButton><SearchIcon /></IconButton>
                    <InputBase onChange={handleInput}  label="Search"></InputBase>
                </div>
            </FilterSurface>
        </div>
    );
}

const mapDispatchToProps = dispatch => {
    return {
        filterByText: (text) => dispatch(filterByText(text))
    }
}


export default connect(null, mapDispatchToProps)(FilterInputs);