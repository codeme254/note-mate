import sql from "mssql";
import { config } from "../db/config.js";
const pool = new sql.ConnectionPool(config.sql);
await pool.connect();

const checkIfUserExists = async (username) => {
  const user = await pool
    .request()
    .input("username", sql.VarChar, username)
    .query("SELECT * FROM users WHERE username = @username");

  if (user.recordset.length === 0) return false;
  return true;
};
// console.log(await checkIfUserExists("gracebaker"))
// console.log(await checkIfUserExists("sdlfksdlfjdlskjfdl"))

export const getNotes = async (req, res) => {
  try {
    const notes = await pool
      .request()
      .query("SELECT * FROM notes ORDER BY dateCreated DESC");
    if (notes.recordset.length == 0) {
      res.status(204).json({ message: "No notes were found at this time" });
    } else {
      res.status(200).json(notes.recordset);
    }
  } catch (error) {
    res.status(400).json({
      message: "An error was encountered while attempting this operation",
    });
  }
};

export const getNote = async (req, res) => {
  let { noteTitle } = req.params;
  try {
    const note = await pool
      .request()
      .input("noteTitle", sql.VarChar, noteTitle)
      .query("SELECT * FROM notes WHERE title = @noteTitle");
    if (note.recordset.length === 0) {
      res
        .status(204)
        .json({ message: "We didn't find any note(s) with that title" });
    } else {
      res.status(200).json(note);
    }
  } catch (error) {
    res.status(400).json({
      message: "An error was encountered while trying to retrieve that note",
    });
  }
};

export const createNote = async (req, res) => {
  const { username } = req.params;
  const userExists = await checkIfUserExists(username);
  if (userExists) {
    try {
      const { title, synopsis, body } = req.body;
      const newNote = await pool
        .request()
        .input("username", sql.VarChar, username)
        .input("title", sql.VarChar, title)
        .input("synopsis", sql.VarChar, synopsis)
        .input("body", sql.VarChar, body)
        .query(
          "INSERT INTO notes (username, title, synopsis, body) VALUES (@username, @title, @synopsis, @body)"
        );

      res.status(200).json({ message: "New note created successfuly" });
    } catch (error) {
      res.status(400).json({ message: `${error.message}` });
    }
  } else {
    res.status(403).json({ message: `${username} does not exist` });
  }
};

export const updateNote = (req, res) => {
  res.send("Update a note using this route");
};

export const deleteNote = (req, res) => {
  res.send("Delete a note using this route");
};

export const getNotesByUser = async (req, res) => {
  const { username } = req.params;
  if (await checkIfUserExists(username)) {
    try {
      const notesForUser = await pool
        .request()
        .input("username", sql.VarChar, username)
        .query("SELECT * FROM notes WHERE username = @username");
      if (notesForUser.recordset.length === 0) {
        res
          .status(404)
          .json({ message: `${username} has not taken any notes yet` });
      } else {
        res.status(200).json(notesForUser.recordset);
      }
    } catch (e) {
      res.json(e.message);
    }
  } else {
    res.status(404).json({ message: `User does not exist` });
  }
};

export const getSpecificNoteByUser = (req, res) => {
  res.send("Get a single note by a user");
};
