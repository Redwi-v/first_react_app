import { useState } from 'react';
import classes from './pagination.module.css';
import arrowIcon from '../../../img/arrow.png';

const Pagination = ({ clickHandler, totalItemsCount, step, selectedItem }) => {
  const stepsCount = Math.ceil(totalItemsCount / step);
  const [selectedStep, setSelectedStep] = useState(1);
  const letftPosition = (selectedStep - 1) * step + 1;
  const rightPosition = selectedStep * step;

  const changeSelectedStep = (mission) => {
    setSelectedStep((step) => (mission === 'decrement' ? step - 1 : step + 1));
  };

  // Dop renders
  const renderStep = (index) => {
    return (
      <li key={index}>
        <button
          className={`${classes.pagination_button} ${
            selectedItem === index ? classes.selectedPage : ''
          } `}
          onClick={() => clickHandler(index)}
        >
          {index}
        </button>
      </li>
    );
  };

  const renderSteps = () => {
    const arraySteps = [];
    console.log(letftPosition, rightPosition, selectedStep, step);
    for (let i = 1; i < stepsCount; i++) {
      if (i >= letftPosition && i <= rightPosition) {
        arraySteps.push(renderStep(i));
      }
    }
    return arraySteps;
  };

  // main render
  return (
    <div className={classes.pagination_block}>
      {selectedStep !== 1 ? (
        <button
          className={classes.control}
          onClick={() => changeSelectedStep('decrement')}
        >
          <img src={arrowIcon} alt="prev" />
        </button>
      ) : (
        ''
      )}

      <ul>{renderSteps()}</ul>
      {selectedStep !== stepsCount ? (
        <button
          className={classes.control}
          onClick={() => changeSelectedStep('increment')}
        >
          <img src={arrowIcon} alt="next" />
        </button>
      ) : (
        ''
      )}
    </div>
  );
};

export default Pagination;
