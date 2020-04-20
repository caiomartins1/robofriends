import React, { Fragment } from 'react';
import Card from './Card';

const CardList = ({ robots }) => {

  return (
    <Fragment>
      {
        robots.map((user, i) => {
          return (
            <Card 
              name={robots[i].name} 
              email={robots[i].email} 
              id={robots[i].id} 
              key={i}
            />
          );
        })
      }
    </Fragment>
  );
}

export default CardList;

