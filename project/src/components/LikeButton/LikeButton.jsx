import React from 'react'
import PropTypes from 'prop-types'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeart as fasHeart } from '@fortawesome/free-solid-svg-icons';
import { faHeart as farHeart } from '@fortawesome/free-regular-svg-icons';
import { faCoffee } from '@fortawesome/free-solid-svg-icons'

const LikeButton = props => {
    const { value, onClick } = props;
    return (
        <>
            {onClick
                && (
                    <FontAwesomeIcon
                        icon={value === true ? fasHeart : farHeart}
                        onClick={onClick} />
                )
            }
        </>
    )
}

LikeButton.propTypes = {
    onClick: PropTypes.func
}

export default LikeButton
