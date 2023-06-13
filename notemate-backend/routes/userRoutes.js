import {
  getAllUsers,
  getUser,
  createUser,
  editUserInformation,
  deleteUserInformation,
} from "../controllers/usersController.js";
const userRoutes = (app) => {
  app.route("/users").get(getAllUsers).post(createUser);

  app
    .route("/users/:username")
    .get(getUser)
    .put(editUserInformation)
    .delete(deleteUserInformation);
};

export default userRoutes;
