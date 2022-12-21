import Head from 'next/head'
import spamApi from 'services/spam.api'

import Footer from '@components/Footer'
import { useEffect, useState } from 'react'
import { StyledContainer, Text } from '@nextui-org/react'

export default function Success({query}) {

  return (
    <div className="container">
      <Head>
        <link rel="icon" href="/imaicon.png" />
        <title>ImAI AI ToolKit</title>
      </Head>

      <main>
        <h1>Submission Received!</h1>
      </main>

      <StyledContainer>
        <Text>Catagory : {res.label}</Text>
        <Text>Spam Probability: {res.spam_probability}</Text>

      </StyledContainer>

      <Footer />
    </div>
  )
}
