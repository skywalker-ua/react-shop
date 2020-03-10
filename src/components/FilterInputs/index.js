import React from 'react'
import './styles.css'
import SearchIcon from '@material-ui/icons/Search';
import SortIcon from '@material-ui/icons/Sort';
import {
    Paper,
    InputBase,
    IconButton,
    ButtonGroup,
    Tooltip
} from '@material-ui/core'
import { connect } from 'react-redux'
import styled from 'styled-components'
import { filterByText, filterByPrice } from '../../store/actions'


const FilterSurface = styled(Paper)`
    display: flex;
    flex-flow: row wrap;
    min-height: 60px;
    align-items: center;
    width: 100%;
`;

const FilterInputs = (props) => {

    const [sortActive, setActive] = React.useState(true)

    const handleInput = e => {
        e.preventDefault()
        let filterValue = e.currentTarget.value
        props.filterByText(filterValue)
    }

    const handleSort = () => {
        setActive(sortActive => !sortActive)
        let stat = sortActive
        props.filterByPrice(stat)
    }

    return(
        <div className="filter-inputs">
            <FilterSurface>
                <div className="action-inputs">
                    <Tooltip title="Search by text">
                        <IconButton><SearchIcon /></IconButton>
                    </Tooltip>
                    <InputBase onChange={handleInput}  label="Search"></InputBase>
                    <ButtonGroup>
                        <Tooltip title="Filter by price">
                         <IconButton onClick={handleSort}>
                            {!sortActive ? <SortIcon color='primary'/> : <SortIcon />}
                         </IconButton>
                         </Tooltip>
                    </ButtonGroup>
                </div>
            </FilterSurface>
        </div>
    );
}

const mapDispatchToProps = dispatch => {
    return {
        filterByText: (text) => dispatch(filterByText(text)),
        filterByPrice: (stat) => dispatch(filterByPrice(stat))
    }
}

export default connect(null, mapDispatchToProps)(FilterInputs);