export const getNotes = (req, res) => {
  res.send("Get all notes using this route");
};

export const getNote = (req, res) => {
  res.send("Get a specific note using this route");
};

export const createNote = (req, res) => {
  res.send("Create a note using this route");
};

export const updateNote = (req, res) => {
  res.send("Update a note using this route");
};

export const deleteNote = (req, res) => {
  res.send("Delete a note using this route");
};

export const getNotesByUser = (req, res) => {
  res.send("Get notes by a certain user");
};

export const getSpecificNoteByUser = (req, res) => {
  res.send("Get a single note by a user");
};
