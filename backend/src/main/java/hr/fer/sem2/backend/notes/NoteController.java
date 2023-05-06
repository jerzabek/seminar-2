package hr.fer.sem2.backend.notes;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.Optional;

@RestController
public class NoteController {

  @Autowired
  private NoteRepository noteRepository;

  @GetMapping(value = "/notes")
  public Iterable<Note> getAllNotes() {
    return noteRepository.findAll();
  }

  @PostMapping(value = "/notes")
  public Note createNote(@RequestBody Note note) {
    return noteRepository.save(note);
  }

  @DeleteMapping(value = "/notes/{id}")
  public ResponseEntity<Void> deleteNote(@PathVariable(value = "id") Long noteId) {
    Optional<Note> note = noteRepository.findById(noteId);

    if (note.isEmpty()) {
      return new ResponseEntity<>(HttpStatus.NOT_FOUND);
    }

    noteRepository.delete(note.get());

    return new ResponseEntity<>(HttpStatus.NO_CONTENT);
  }

}
