import React from 'react'
import Card from './Card';

const Cards = ({ courses }) => {
  if (!courses) return null; // or a loader

  const allCourses = Object.values(courses)
    .filter(Array.isArray)
    .flat();

  return (
    <div>
      {allCourses.map(course => (
        <Card key={course.id} course={course} />
      ))}
    </div>
  );
}

export default Cards
