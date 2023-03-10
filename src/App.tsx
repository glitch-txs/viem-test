import type { Component } from 'solid-js';
import { decodeAbiParameters } from 'viem'

import logo from './logo.svg';
import styles from './App.module.css';

const App: Component = () => {

  const values = decodeAbiParameters(
    [
      { name: '_to', type: 'address' },
      { name: '_value', type: 'uint256' }
    ],
    '0x0000000000000000000000000d744e4fec1987490f9ca1b7b9023d154be6ae290000000000000000000000000000000000000000000000000000000000e4e1c0',
  )

  console.log(values)

  return (
    <div class={styles.App}>
      <header class={styles.header}>
        <img src={logo} class={styles.logo} alt="logo" />
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        <a
          class={styles.link}
          href="https://github.com/solidjs/solid"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn Solid
        </a>
      </header>
    </div>
  );
};

export default App;
