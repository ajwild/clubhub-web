import React from 'react';

import Link from '../components/link';

const SSG = ({ joke }) => {
  return (
    <div>
      <h1>SSG</h1>
      <p>{joke}</p>
      <Link href="/">Home</Link>
    </div>
  );
};

export async function getStaticProps() {
  const response = await fetch('https://icanhazdadjoke.com/', {
    headers: { Accept: 'application/json' },
  });
  const { joke } = await response.json();

  return {
    props: {
      joke,
    },
  };
}

export default SSG;
