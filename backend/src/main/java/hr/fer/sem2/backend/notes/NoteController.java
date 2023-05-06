package hr.fer.sem2.backend.notes;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

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

}
