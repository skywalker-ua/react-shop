import React from 'react'
import Header from '../components/Header'
import './Layout.css'
import FilterInputs from '../components/FilterInputs'

const Layout = ({ children }) => {
    return(
        <div>
            <div>
                <Header />
                
            </div>
            <div className="children">
                <FilterInputs />
                {children}
            </div>
        </div>
    );
}

export default Layout;