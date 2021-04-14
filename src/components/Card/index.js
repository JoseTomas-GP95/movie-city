import React from 'react';
import CardExport from './Card';
import CardContainerExport from './CardContainer';
import MovieExport from './Movie';

export function Card(props) {

  return <CardExport {...props}/>;
  
}

export function CardContainer(props) {

  return <CardContainerExport {...props}/>;
  
}

export function Movie(props) {

  return <MovieExport {...props}/>;
  
}
