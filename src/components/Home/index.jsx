import React from 'react'
import { Link } from 'react-router-dom';

import styles from './index.module.scss';
import { questions } from '../../data/questions';

const Home = () => {
  return (
    // <div>
      <Link className={styles.testButton} to={`./question/${questions[0].id}`}>Take the test</Link>
    // </div>
  )
}

export default Home;
