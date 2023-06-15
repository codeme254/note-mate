import {
  getNotes,
  getNote,
  createNote,
  updateNote,
  deleteNote,
  getNotesByUser,
  getSpecificNoteByUser,
} from "../controllers/notesController.js";
const notesRoutes = (app) => {
  app.route("/notes").get(getNotes);

  app.route("/notes/:noteTitle").get(getNote);

  app.route("/:username/notes").get(getNotesByUser);

  app.route("/:username/new").post(createNote);

  app
    .route("/:username/:noteTitle")
    .get(getSpecificNoteByUser)
    .put(updateNote)
    .delete(deleteNote);
};

export default notesRoutes;
