import Head from 'next/head'
import Image from 'next/image'
import { Header } from '../components/Header'
import { Nav } from '../components/NavBar'
import styles from '../styles/Home.module.css'
import { useState } from 'react'
export default function Home() {
  return (
    <div>
    <Nav></Nav>
    <Header></Header>
    </div>
  )
}
