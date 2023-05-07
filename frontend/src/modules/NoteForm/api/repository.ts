import { postData } from '@/api/api'
import { NoteForm } from '@/model/Note'

export const createNote = (note: NoteForm) => postData('/notes', note)
