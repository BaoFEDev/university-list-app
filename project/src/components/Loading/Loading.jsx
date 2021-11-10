import React from 'react'
import PropTypes from 'prop-types'
import './style.scss';
const Loading = props => {
    return (
        <>
            <div className="spinner-container d-flex justify-content-center">
                <div className="spinner mt-5 "></div>
            </div>
        </>
    )
}

Loading.propTypes = {

}

export default Loading
