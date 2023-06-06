import React from 'react';
import PropTypes from 'prop-types';
import { useState } from "react";
import Recipe from './Recipe';
/**
 * Random Selection Component
 *
 * E.g.:
 * ```html
 * <ReactRoller fps={ 60 } duration={ 2000 } list={ [1, 2, 3, 4, 5, 6] } />
 * ```
 */
const CustomRandomRoller = (props) => {

    const [state, setState ]= useState({
        item: "",
        interval: null
      })

  const pickItem = ()=> {
    const { list = [] } = props;


    let startTime;

    let fps = props.fps;
    let now;
    let then = Date.now();
    let interval = 1000 / fps;
    let delta;

    const spin = (timestamp, duration) => {

      timestamp = timestamp || new Date().getTime();

      let runTime = timestamp - startTime;
      let progress = runTime / duration;

      progress = Math.min(progress, 1);

      // check if run time is met
      if (runTime < duration) {
          requestAnimationFrame((timestamp) => {
              spin(timestamp, duration);
          });
      }

      now = Date.now();
      delta = now - then;

      if (delta > interval) {
        then = now - (delta % interval);

        setState({ item: list[Math.floor(Math.random() * list.length)] });
      }
    }

    requestAnimationFrame((timestamp) => {
      startTime = timestamp || new Date().getTime();
      spin(startTime, props.duration);
      console.log('spin complete');
    });
  }

  
    return (
        
      <div className="CustomRollDiv">
        <button onClick={pickItem} className='summaryButton'>Choose Food</button>
        {state.item && 
        <Recipe
              recipe={state.item}
        ></Recipe>
        }
      </div>
    );
  
}

CustomRandomRoller.propTypes = {
  /**
   * Custom css class for the component
   */
  className: PropTypes.string,
  /**
   * Frames per second the item should be animating at
   */
  fps: PropTypes.number,
  /**
   * Amount of time the animation should last in milliseconds
   */
  duration: PropTypes.number,
  /**
   * List of items to select from
   */
  list: PropTypes.array.isRequired,

  /**
   * Custom click message
   */
  message: PropTypes.string,

  /**
   * Run the roller after mounting, immediately
   */
  auto: PropTypes.bool
}

CustomRandomRoller.defaultProps = {
  className: '',
  fps: 60,
  duration: 2000,
  message:"Click to Pick",
  auto: false
}

export default CustomRandomRoller;