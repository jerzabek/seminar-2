'use client'

import { useEffect, useState } from 'react'

import { Flex } from '@/ui/components'

import { deleteNote, getNotes } from './api/repository'
import { NotePreview } from '@/model/Note'
import { FadedH2 } from './styles'
import Note from '../Note'
import Link from 'next/link'

function NoteContainer() {
  const [notes, setNotes] = useState<NotePreview[] | undefined>(undefined)
  const [openNote, setOpenNote] = useState<number | undefined>(undefined)

  const revalidate = () => getNotes().then(data => setNotes(data))

  const handleDeleteNote = (id: number) => deleteNote(id).then(revalidate)

  useEffect(() => {
    revalidate()
  }, [])

  if (!notes || !notes.length) {
    return (
      <Flex>
        <FadedH2>
          No notes available. <Link href="/create">Create a note by clicking here</Link>
        </FadedH2>
      </Flex>
    )
  }

  return (
    <>
      <Flex>
        <Link href="/create">Create a note by clicking here</Link>
      </Flex>
      <Flex>
        {notes.map(note => (
          <Note
            key={note.id}
            note={note}
            openNoteId={openNote}
            setOpenNoteId={setOpenNote}
            deleteNote={handleDeleteNote}
          />
        ))}
      </Flex>
    </>
  )
}

export default NoteContainer
