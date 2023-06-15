import sql from 'mssql';
import { config } from '../db/config.js';
const pool = new sql.ConnectionPool(config.sql)
await pool.connect()

const checkIfUserExists = async username => {
    const user = await pool.request()
    .input("username", sql.VarChar, username)
    .query("SELECT * FROM users WHERE username = @username")

    if (user.recordset.length === 0) return false
    return true
}
// console.log(await checkIfUserExists("gracebaker"))
// console.log(await checkIfUserExists("sdlfksdlfjdlskjfdl"))

export const getNotes = async (req, res) => {
  try {
    const notes = await pool.request().query("SELECT * FROM notes");
    if (notes.recordset.length == 0){
        res.status(204).json({ message: "No notes were found at this time" })
    } else {
        res.status(200).json(notes.recordset)
    }
  } catch (error){
    res.status(400).json({ message: "An error was encountered while attempting this operation" })
  }
};

export const getNote = async (req, res) => {
  let { noteTitle } = req.params;
  try {
    const note = await pool.request()
    .input("noteTitle", sql.VarChar, noteTitle)
    .query("SELECT * FROM notes WHERE title = @noteTitle")
    if (note.recordset.length === 0){
        res.status(204).json({ message: "We didn't find any note(s) with that title"})
    } else {
        res.status(200).json(note)
    }
  } catch (error){
    res.status(400).json({ message: "An error was encountered while trying to retrieve that note"})
  }
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