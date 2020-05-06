import React from 'react';
import { Card, CardContent, Typography, Icon } from '@material-ui/core';
import { useStyles } from './styles';

function CardComponent({ title, subtitle, value, icon, ...props }) {
  const classes = useStyles(props);

  return (
    <Card className={classes.card}>
      <CardContent>
        <Typography variant="h5" component="h2">
          {title}
        </Typography>
        <Typography className={classes.pos} color="textSecondary">
          {subtitle}
        </Typography>
        <Typography variant="h3" component="p" className={classes.cardValue}>
          {value}
        </Typography>
      </CardContent>
      <Icon className={classes.icon}>{icon}</Icon>
    </Card>
  );
}

export default CardComponent;
