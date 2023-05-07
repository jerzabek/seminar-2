'use client'

import Header from '@/modules/Header'
import NoteForm from '@/modules/NoteForm'
import { Main as MainWrapper } from '@/ui/components'
import Head from 'next/head'

function Create() {
  return (
    <>
      <Head>
        <title>Create Note | TODO App</title>
      </Head>
      <MainWrapper>
        <Header />
        <NoteForm />
      </MainWrapper>
    </>
  )
}

export default Create
