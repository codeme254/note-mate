import sql from "mssql";
import config from "../db/config.js";

export const getAllUsers = async (req, res) => {
  try {
    let pool = sql.connect(config.sql);
    const result = await pool.request().query("SELECT * FROM users");
    if (!result) {
      res
        .status(404)
        .json({ message: "We could not find any users at this moment" });
    } else {
      res.status(201).json(result.recordsets[0]);
    }
  } catch (e) {
    res.status(404).json({ message: "an error occured during this operation" });
  } finally {
    sql.close();
  }
};

export const getUser = async (req, res) => {
  const { username } = req.params;
  try {
    let pool = await sql.connect(config.sql);
    const result = await pool
      .request()
      .input("username", sql.VarChar, username)
      .query("SELECT * FROM users WHERE username = @username");
    // res.send(result)
    if (!result.recordset[0]) {
      res
        .status(404)
        .json({
          message: `There is no user with username ${username}, please try again`,
        });
    } else {
      res.status(200).json(result.recordset[0]);
    }
  } catch (e) {
    res
      .status(404)
      .json({ message: `There is no user with the username ${username}` });
  } finally {
    sql.close();
  }
};

export const createUser = (req, res) => {
  res.send("Create a  user using this route");
};

export const editUserInformation = (req, res) => {
  res.send("Update user information using this route");
};

export const deleteUserInformation = (req, res) => {
  res.send("Delete user using this route");
};
