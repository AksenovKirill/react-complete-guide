import React from 'react';
import classes from './Header.module.css';
import meals from '../../../assets/images/meals.jpg';
import {HeaderCartButton} from './HeaderCartButton';

export const Header = () => {
  return (
    <>
      <header className={classes.header}>
        <h1>ReactMeals</h1>
        <HeaderCartButton />
      </header>
      <div className={classes['main-image']}>
        <img src={meals} alt='meals' />
      </div>
    </>
  );
};