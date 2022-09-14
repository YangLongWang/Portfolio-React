import React from 'react';
import myPhoto from '../../assets/images/touxiang.jpg';

function About() {
  return (
    <section>
      <h2>About me</h2>
      <img src={myPhoto} className='' style={{ width: '20%' }} alt='this is me' />
      <p>Hello! My name is Longyang Wang. It's a full-stack developer.</p>
    </section>
  );
}

export default About;