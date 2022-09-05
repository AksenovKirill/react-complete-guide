import React from 'react';
import classes from './AvailableMeals.module.css';
import {DUMMY_MEALS} from '../../../assets/const';
import {Card} from '../../UI/Card';
import {MealItem} from '../MealItem/MealItem';

export const AvailableMeals = () => {
  const mealList = DUMMY_MEALS.map((meal) => (
    <MealItem
      id={meal.id}
      key={meal.id}
      name={meal.name}
      price={meal.price}
      description={meal.description}
    />
  ));

  return (
    <section className={classes.meals}>
      <Card>
        <ul>{mealList}</ul>
      </Card>
    </section>
  );
};
