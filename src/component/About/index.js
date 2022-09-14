import React from 'react';
import myPhoto from '../../assets/images/touxiang.jpg';

function About() {
  return (
    <section>
      <h1>About me</h1>
      <img src={myPhoto} className='' style={{ width: '20%' }} alt='this is me' />
      <p>Hello! My name is Longyang Wang. It's a full-stack developer.</p>
    </section>
  );
}

export default About;