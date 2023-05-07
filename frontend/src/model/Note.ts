export interface NotePreview {
  id: number
  title: string
}

export interface Note {
  id: number
  title: string
  description: string
  dateCreated: string
}

export interface NoteForm {
  title: string
  description: string
}
