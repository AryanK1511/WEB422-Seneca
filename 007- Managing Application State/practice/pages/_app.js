import '@/styles/globals.css';
import { useState, createContext } from 'react';

export const NameContext = createContext();
export const SetNameContext = createContext();

export default function App({ Component, pageProps }) {
  const [ name, setName ] = useState("");
  return (
    <>
      <NameContext.Provider value={name}>
        <SetNameContext.Provider value={setName}>
          <Component {...pageProps} />
        </SetNameContext.Provider>
      </NameContext.Provider>
    </>
  );
}
