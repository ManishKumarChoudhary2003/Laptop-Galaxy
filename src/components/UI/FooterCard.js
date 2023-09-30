import React from 'react';

import classes from './FooterCard.module.css';

const FooterCard = (props) => {
  return (
    <div className={`${classes.card} ${props.className}`}>{props.children}</div>
  );
};

export default FooterCard;
