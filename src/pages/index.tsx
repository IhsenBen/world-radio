import { Inter } from 'next/font/google'
import styles from '@/styles/Home.module.css'
import styled from "@emotion/styled";
import { keyframes } from "@emotion/react";
import RadioDisplay from '../../components/RadioDisplay';
import { createGlobalStyle, ThemeProvider } from 'styled-components'

const GlobalStyle = createGlobalStyle`
  body {
    background-color: #000;
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100vh;
    margin: 0;
    padding: 0;
  
  } 
`





export default function Home() {
  return (
  <>
   <main className={styles.main} >
      <GlobalStyle />
     <RadioDisplay /> 
    </main>
    </>
  )
}
