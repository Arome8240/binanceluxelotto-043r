import User from "~/server/models/User";

export default defineEventHandler(async (event) => {
  try {
    let users = await User.find();
    return { users };
  } catch (error) {}
});
//2MywIlPfZjV8klVL
