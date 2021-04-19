import React from 'react';
import CardExport from './Card';
import CardContainerExport from './CardContainer';
import MovieExport from './Movie';
import MovieCardExport from './MovieCard';

export function Card(props) {

  return <CardExport {...props}/>;
  
}

export function CardContainer(props) {

  return <CardContainerExport {...props}/>;
  
}

export function Movie(props) {

  return <MovieExport {...props}/>;
  
}

export function MovieCard(props) {

  return <MovieCardExport {...props}/>;
  
}
