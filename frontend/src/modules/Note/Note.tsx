import { MouseEventHandler, useEffect, useState } from 'react'

import { Note as NoteModel, NotePreview } from '@/model/Note'

import { Button, NoteComponent, NoteDescription, NoteTitle } from './styles'
import { getNote } from './api/repository'
import { Flex } from '@/ui/components'
import { FadedDetail } from '../NoteContainer/styles'

interface Props {
  note: NotePreview
  openNoteId?: number
  setOpenNoteId: (id?: number) => void
  deleteNote: (id: number) => void
}

function Note({ note, openNoteId, setOpenNoteId, deleteNote }: Props) {
  const [noteDetails, setNoteDetails] = useState<NoteModel | undefined>(undefined)

  const handleClick = () => setOpenNoteId(openNoteId === note.id ? undefined : note.id)

  const handleDelete: MouseEventHandler<HTMLButtonElement> = e => {
    e.stopPropagation()
    deleteNote(note.id)
  }

  const isOpen = openNoteId === note.id
  const formattedDate =
    noteDetails &&
    new Intl.DateTimeFormat('hr', { dateStyle: 'short', timeStyle: 'short' }).format(new Date(noteDetails.dateCreated))

  useEffect(() => {
    if (!isOpen) return
    if (noteDetails) return

    getNote(note.id).then(data => setNoteDetails(data))
  }, [isOpen, noteDetails, note.id])

  return (
    <NoteComponent isOpen={isOpen} onClick={handleClick}>
      <Flex vertical spaceBetween fullHeight>
        {isOpen && noteDetails ? (
          <>
            <div>
              <NoteTitle>{note.title}</NoteTitle>

              <FadedDetail style={{ marginRight: '1em' }}>
                <b>Created at:</b> {formattedDate}
              </FadedDetail>
              <FadedDetail>
                <b>id:</b> {note.id}
              </FadedDetail>

              <NoteDescription>{noteDetails.description}</NoteDescription>
            </div>

            <Button onClick={handleDelete}>Delete</Button>
          </>
        ) : (
          <NoteTitle>{note.title}</NoteTitle>
        )}
      </Flex>
    </NoteComponent>
  )
}

export default Note
