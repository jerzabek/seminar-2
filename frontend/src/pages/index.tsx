import Header from '@/modules/Header'
import NoteContainer from '@/modules/NoteContainer'
import { Main as MainWrapper } from '@/ui/components'
import Head from 'next/head'

export default function Home() {
  return (
    <>
      <Head>
        <title>Home | TODO App</title>
      </Head>
      <MainWrapper>
        <Header />
        <NoteContainer />
      </MainWrapper>
    </>
  )
}
