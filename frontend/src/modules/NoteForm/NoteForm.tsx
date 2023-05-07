'use client'

import { useState } from 'react'
import { FormWrapper, StyledButton, StyledForm, StyledInput, StyledLabel, StyledTextarea } from './styles'
import { createNote } from './api/repository'
import { useRouter } from 'next/navigation'
import { Flex } from '@/ui/components'
import Link from 'next/link'

function NoteForm() {
  const [title, setTitle] = useState('')
  const [description, setDescription] = useState('')

  const router = useRouter()

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    createNote({ title, description })
      .then(() => router.push('/'))
      .catch(e => alert('Something went wrong'))
  }

  return (
    <>
      <Flex style={{ marginBottom: '2em' }}>
        <Link href="/">Click here to go back to the list of notes</Link>
      </Flex>
      <FormWrapper>
        <StyledForm onSubmit={handleSubmit}>
          <StyledLabel htmlFor="title">Title</StyledLabel>
          <StyledInput type="text" id="title" value={title} onChange={e => setTitle(e.target.value)} />

          <StyledLabel htmlFor="description">Description</StyledLabel>
          <StyledTextarea
            id="description"
            rows={4}
            value={description}
            onChange={e => setDescription(e.target.value)}
          />

          <StyledButton type="submit">Create note</StyledButton>
        </StyledForm>
      </FormWrapper>
    </>
  )
}

export default NoteForm
