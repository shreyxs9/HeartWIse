import React from 'react';
import PropTypes from 'prop-types';
import '../styles/card.css';

const Card = ({ image, title, description, statistics }) => {
    return (
        <div className="card">
            <img src={image} alt={title} className="card-image" />
            <div className="card-content">
                <h3>{title}</h3>
                <p>{description}</p>
                <div className="card-statistics">
                    <h4>Statistics:</h4>
                    <ul>
                        {statistics.map((stat, index) => (
                            <li key={index}>{stat}</li>
                        ))}
                    </ul>
                </div>
            </div>
        </div>
    );
};

Card.propTypes = {
    image: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    statistics: PropTypes.arrayOf(PropTypes.string).isRequired,
};

export default Card;
