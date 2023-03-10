import type { Component } from 'solid-js';
import { decodeFunctionData, encodeFunctionData, encodeAbiParameters } from 'viem'
import {abi} from './abi/erc20.json'

import logo from './logo.svg';
import styles from './App.module.css';

const App: Component = () => {

  //encode

  const encodedDataB = encodeAbiParameters(
    [
      { name: '_value', type: 'uint256' },
    ],
    [15000000n]
  )

  console.log("Encoded params: ", encodedDataB)

  const data = encodeFunctionData({
    abi,
    functionName: "transfer",
    args: ["0x0D744E4fEc1987490f9CA1B7b9023D154Be6ae29", encodedDataB]
  })

  console.log("encoded data: ", data)

    //decode
    const values = decodeFunctionData ({
      abi,
      data: data,
    })
  
    console.log("Final values: ",values)

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
