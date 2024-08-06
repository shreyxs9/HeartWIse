import React from 'react';
import '../styles/CardTab.css';

const CardContainer = () => {
  const cardData = [
    {
      imgSrc: '../image1.jpg',
      altText: 'Image description 1',
      title: 'Heart Disease Overview',
      description: 'An overview of heart disease statistics.',
      stats: [
        '1 in 4 deaths is due to heart disease.',
        'Risk factors include high blood pressure, smoking, and high cholesterol.',
      ],
    },
    {
      imgSrc: '../image2.png',
      altText: 'Image description 2',
      title: 'Risk Factors',
      description: 'Common risk factors for heart disease.',
      stats: ['High blood pressure', 'Smoking', 'High cholesterol'],
    },
    {
        imgSrc: '../image333.jpg',
        altText: 'Image description 3',
      title: 'Prevention',
      description: 'How to reduce your risk of heart disease.',
      stats: ['Eat a healthy diet', 'Exercise regularly', 'Maintain a healthy weight'],
    },
    {
        imgSrc:'../image44.jpg',
        altText: 'Image description 4',
      title: 'Symptoms',
      description: 'Common symptoms of heart disease.',
      stats: ['Chest pain', 'Shortness of breath', 'Fatigue'],
    },
  ];

  return (
    <div className="card-tab-container">
      {cardData.map((card, index) => (
        <div className="card" key={index}>
          <img src={card.imgSrc} alt={card.altText} className="card-image" />
          <div className="card-content">
            <h2>{card.title}</h2>
            <p>{card.description}</p>
            <ul>
              {card.stats.map((stat, idx) => (
                <li key={idx}>{stat}</li>
              ))}
            </ul>
          </div>
        </div>
      ))}
    </div>
  );
};

export default CardContainer;
