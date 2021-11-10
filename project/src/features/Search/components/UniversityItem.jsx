import React from 'react'
import PropTypes from 'prop-types'

const UniversityItem = props => {
    let { name, country, web_pages } = props;
    return (
        <>
            <li className="university-item">
                Name: <a href={web_pages}>{name}</a>
                <div className="location">
                    Location:    {country}
                </div>
            </li>
        </>
    )
}

UniversityItem.propTypes = {
    name: PropTypes.string.isRequired,
    country: PropTypes.string.isRequired,
    web_pages: PropTypes.array,
}

export default UniversityItem
