import PropTypes from 'prop-types';
import React, { useState } from 'react';
import LikeButton from '../../../components/LikeButton/LikeButton';
import { useSelector } from "react-redux";

const UniversityItem = props => {
    let { idx, name, country, web_pages } = props;
    const loggedInUser = useSelector((state) => state.user.current);
    const isLoggedIn = !!loggedInUser.id;

    const [liked, setLiked] = useState(false)

    const handleLikeClick = () => {
        if (isLoggedIn) {
            setLiked(x => !x);
        }
        else {
            alert("Please login to add to your favorite");
        }
    }
    return (
        <>
            <li className="university-item">
                Name: <a href={web_pages}>{name}</a>
                <div className="location">
                    Location:    {country}
                </div>
                <LikeButton name={idx} value={liked} onClick={handleLikeClick} />
            </li>
        </>
    )
}

UniversityItem.propTypes = {
    idx: PropTypes.number.isRequired,
    name: PropTypes.string.isRequired,
    country: PropTypes.string.isRequired,
    web_pages: PropTypes.array,
}

export default UniversityItem
