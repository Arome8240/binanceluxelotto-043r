import Loki from "lokijs";

export default defineNuxtPlugin((nuxtApp) => {
  // Create or open the LokiJS database
  const db = new Loki("userDatabase.db", {
    autosave: true,
    autosaveInterval: 5000, // Save every 5 seconds
    persistenceMethod: "localStorage", // Use localStorage for persistence
  });

  // Create or get the 'users' collection
  let usersCollection;

  const initializeDB = () => {
    db.loadDatabase({}, () => {
      usersCollection = db.getCollection("users");
      if (!usersCollection) {
        usersCollection = db.addCollection("users");
      }
    });
  };

  const addUser = (email, password) => {
    usersCollection.insert({ email, password });
    db.saveDatabase();
  };

  const getAllUsers = () => {
    return usersCollection.find();
  };

  const clearUsers = () => {
    usersCollection.clear();
    db.saveDatabase();
  };

  const deleteUser = (email) => {
    usersCollection.removeWhere({ email });
    db.saveDatabase();
  };

  // Initialize the database
  initializeDB();

  // Provide these methods to the rest of the app
  nuxtApp.provide("db", {
    addUser,
    getAllUsers,
    clearUsers,
    deleteUser,
  });
});
