import { deleteData, getData } from '@/api/api'

export const getNotes = () => getData('/notes')
export const deleteNote = (id: number) => deleteData(`/notes/${id}`)
