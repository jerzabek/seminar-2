package hr.fer.sem2.backend.notes;

import org.springframework.data.repository.CrudRepository;

import java.util.Optional;

public interface NoteRepository extends CrudRepository<Note, Long> {

  Iterable<NotePreview> findAllBy();

}
