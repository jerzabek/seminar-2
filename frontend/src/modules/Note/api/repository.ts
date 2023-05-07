import { getData } from '@/api/api'

export const getNote = (id: number) => getData(`/notes/${id}`)
