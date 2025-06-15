// components/FeaturesSection.js
import React from 'react';
import { FaMoneyBillWave, FaLightbulb, FaChartBar } from 'react-icons/fa';
import './FeatureSection.css';

const features = [
  {
    title: 'What We Really Do?',
    description: 'Vivamus accusamus, vel nam quisquam. Ipsa aliqua nostrum in cum ut fugiat penatibus cubilia cubilia.',
    icon: <FaMoneyBillWave style={{ height: '30px', width: '30px'}}/>,
  },
  {
    title: 'Our Company Vision',
    description: 'Vivamus accusamus, vel nam quisquam. Ipsa aliqua nostrum in cum ut fugiat penatibus cubilia cubilia.',
    icon: <FaLightbulb style={{ height: '30px', width: '30px'}}/>,
  },
  {
    title: 'History Of Beginning',
    description: 'Vivamus accusamus, vel nam quisquam. Ipsa aliqua nostrum in cum ut fugiat penatibus cubilia cubilia.',
    icon: <FaChartBar style={{ height: '30px', width: '30px'}} />,

  },
];

const FeaturesSection = () => {
  return (
    <section className="features-section">
      <div className="features-container">
        {features.map((feature, index) => (
          <div className="feature-card" key={index}>
            <div className="feature-icon">{feature.icon}</div>
            <h3 className="feature-title">{feature.title}</h3>
            <p className="feature-description">{feature.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default FeaturesSection;
