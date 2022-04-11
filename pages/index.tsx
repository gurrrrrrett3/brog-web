import type { NextPage } from 'next'
import Head from 'next/head'
import Image from "next/image"
import { Button, Card, Container, Stack } from 'react-bootstrap'
import GlobalNavbar from '../modules/components/navbar'
import styles from '../styles/index.module.css'

const Home: NextPage = () => {
  return (
    <div className={styles.container}>
      <Head>
        <title>Broglands Nation | Home</title>
        <meta name="description" content="The Homepage for The Broglands Federation" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      

    <main className='main'>
        <Container className={styles.content}>
        <GlobalNavbar/>

    <Stack gap={3}>
    
    <Card>
      
    </Card>

    </Stack>

        </Container>
    </main>
    </div>
  )
}

export default Home
