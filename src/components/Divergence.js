import React, { useState } from 'react';
import './Divergence.css';
import Toggle from './Toggle';
import Modal from './Modal';
//importing the unique modals for each plan button
import DietA1 from './Modals/DietA1';
import DietA2 from './Modals/DietA2';
import DietA3 from './Modals/DietA3';
import DietM1 from './Modals/DietM1';
import DietM2 from './Modals/DietM2';
import DietM3 from './Modals/DietM3';
import ExerciseA1 from './Modals/ExerciseA1';
import ExerciseA2 from './Modals/ExerciseA2';
import ExerciseA3 from './Modals/ExerciseA3';
import ExerciseM1 from './Modals/ExerciseM1';
import ExerciseM2 from './Modals/ExerciseM2';
import ExerciseM3 from './Modals/ExerciseM3';
import WorkA1 from './Modals/WorkA1';
import WorkA2 from './Modals/WorkA2';
import WorkA3 from './Modals/WorkA3';
import WorkM1 from './Modals/WorkM1';
import WorkM2 from './Modals/WorkM2';
import WorkM3 from './Modals/WorkM3';

const plans = [
  { name: 'Workout', monthly: 'See fun activities to implement into your workouts', annual: 'See fun activities to implement into your workouts' },
  { name: 'Exercise', monthly: 'See some games that can help do essential exercises', annual: 'See some games that can help do essential exercises' },
  { name: 'Dieting', monthly: 'See how you can remain healthy while eating what you love', annual: 'See how you can remain healthy while eating what you love' },
];

const options = {
  monthly: {
    Workout: ['Save the cats', 'Team Spirit', 'Coming Soon!'],
    Exercise: ['Beat Saber', 'Just Dance', 'Wii Fit'],
    Dieting: ['Losing Weight in a Month', 'Green Importance', 'Vegan Dieting'],
  },
  annual: {
    Workout: ['Getting Over it', 'The Fit Olympics', 'Coming Soon!'],
    Exercise: ['Pokemon Go', 'Dinosaur Run', 'Subway Surfers VR'],
    Dieting: ['Long Term Dieting', 'Health Benefits', 'Delicious Recipes with results'],
  }
};

const PlanCard = ({ plan, isAnnual, options }) => {
  const [isExpanded, setIsExpanded] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [modalContent, setModalContent] = useState(null);

  const handleToggleOptions = () => {
    setIsExpanded(!isExpanded);
  };

  const handleOpenModal = (option) => {
      //Dieting
    if (option.includes('Long Term Dieting')) {
      setModalContent(<DietA1 />);
    } else if(option.includes('Health Benefits')) {
      setModalContent(<DietA2 />);
    } else if(option.includes('Delicious Recipes with results')) {
      setModalContent(<DietA3 />);
    } else if(option.includes('Losing Weight in a Month')) {
      setModalContent(<DietM1 />);
    } else if(option.includes('Green Importance')) {
      setModalContent(<DietM2 />);
    } else if(option.includes('Vegan Dieting')) {
      setModalContent(<DietM3 />);
      //Exercise
    } else if(option.includes('Pokemon Go')) {
      setModalContent(<ExerciseA1 />);
    } else if(option.includes('Dinosaur Run')) {
      setModalContent(<ExerciseA2 />);
    } else if(option.includes('Subway Surfers VR')) {
      setModalContent(<ExerciseA3 />);
    } else if(option.includes('Beat Saber')) {
      setModalContent(<ExerciseM1 />);
    } else if(option.includes('Just Dance')) {
      setModalContent(<ExerciseM2 />);
    } else if(option.includes('Wii Fit')) {
      setModalContent(<ExerciseM3 />);
      //Workout
    } else if(option.includes('Getting Over it')) {
      setModalContent(<WorkA1 />);
    } else if(option.includes('The Fit Olympics')) {
      setModalContent(<WorkA2 />);
    } else if(option.includes('Coming Soon!')) {
      setModalContent(<WorkA3 />);
    } else if(option.includes('Save the cats')) {
      setModalContent(<WorkM1 />);
    } else if(option.includes('Team Spirit')) {
      setModalContent(<WorkM2 />);
    } else if(option.includes('Coming Soon!')) {
      setModalContent(<WorkM3 />);
    } else {
      setModalContent(<div>Content for {option}</div>);
    }
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
    setModalContent(null);
  };

  const currentOptions = isAnnual ? options.annual[plan.name] : options.monthly[plan.name];

  return (
    <div className={`plan-card ${isExpanded ? 'expanded' : ''}`}>
      <div className="plan-details">
        <h3>{plan.name} Plan</h3>
        <p>{isAnnual ? plan.annual : plan.monthly}</p>
      </div>
      <button onClick={handleToggleOptions} className="select-button">See More</button>
      {isExpanded && (
        <div className="dropdown-options">
          {currentOptions.map((option, index) => (
            <div key={index}>
              <a href="#!" onClick={() => handleOpenModal(option)}>{option}</a>
            </div>
          ))}
        </div>
      )}
      {isModalOpen && (
        <Modal isOpen={isModalOpen} onClose={handleCloseModal}>
          {modalContent}
        </Modal>
      )}
    </div>
  );
};

const Divergence = () => {
  const [isAnnual, setIsAnnual] = useState(false);

  return (
    <section id="divergence" className="divergence">
      <h2>Our Plans</h2>
      <div className="toggle-container">
        <Toggle isAnnual={isAnnual} setIsAnnual={setIsAnnual} />
      </div>
      <div className="pricing-cards">
        {plans.map((plan) => (
          <PlanCard key={plan.name} plan={plan} isAnnual={isAnnual} options={options} />
        ))}
      </div>
    </section>
  );
};

export default Divergence;