import React, { useState, useEffect } from 'react';
import styles from '@/styles/Home.module.css';
import Button from '@/src/components/Button.jsx';
import ComparisonButtons from '@/src/components/ComparisonButtons.jsx';
import 'bootstrap/dist/css/bootstrap.min.css';

export default function Home() {
  const [count, setCount] = useState(0);

  const onButtonClick = () => {
    setCount(count + 1);
  }

  return (
    <>
      <h1>Counter:</h1>
      <p>Click on the button below</p>
      <Button onClick={onButtonClick} count={count} /> <br /> <br />
      <ComparisonButtons buttonCount={count} />
    </>
  )
}
