import React, { useState } from 'react';
import shenkarLogo from '../carousel/active_shenkar.png';
import shternLogo from '../carousel/active_shtern.png';
import mentorLogo from '../carousel/active_mentor.png';

const courses = [
  {
    id: 'photoshop',
    header: "Shenkar", 
    label: 'Adobe Photoshop course',
    icon: shenkarLogo,
        list: [
      'User Experience Design and Interface Design course'
    ]
  },
  {
    id: 'afterEffects',
    header: "SternFX", 
    label: 'Engineering. Design. Art.',
    icon: shternLogo,
    list: [
      'Adobe Photoshop course',
      'Adobe After Effects course',
      'Adobe Illustartor course',
    ]
  },
  {
    id: 'illustrator',
    header: "Mentor" ,
    label: 'The College for Design, New Media, and Photography.',
    icon: mentorLogo,
        list: [
      'Adobe Photoshop course',
      'Adobe After Effects course',
      'Adobe Illustartor course',
    ]
  },
];

function EducationCaruosel() {
  const [selectedCourse, setSelectedCourse] = useState('photoshop');

  const activeCourse = courses.find((c) => c.id === selectedCourse);

  return (
    <div className="carousel-wrapper">
      <div className="carousel-icons">
        {courses.map((course) => (
          <div
            key={course.id}
            className={`carousel-icon ${selectedCourse === course.id ? 'active' : ''}`}
            onClick={() => setSelectedCourse(course.id)}
          >
            <img src={course.icon} alt={course.label} />
          </div>
        ))}
      </div>

      <div className="carousel-content">
        <h2>{activeCourse.header}</h2>
        <p>{activeCourse.label}</p>
        <ul>
            {activeCourse.list.map((item, index) => (
            <li key={index}>{item}</li>
            ))}
        </ul>
        <p className="description">{activeCourse.description}</p>
      </div>
    </div>
  );
}

export default EducationCaruosel;
