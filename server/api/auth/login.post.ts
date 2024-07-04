import { defineEventHandler, readBody, createError } from "h3";
import User from "~/server/models/User";

const config = useRuntimeConfig();

interface LoginRequestBody {
  email: string;
  password: string;
}

interface UserDocument {
  _id: string;
  email: string;
  password: string;
}

export default defineEventHandler(async (event) => {
  const body: LoginRequestBody = await readBody(event);
  const { email, password } = body;

  try {
    const userData = new User({
      email,
      password,
    });

    let data = await userData.save();

    return {
      data,
    };
  } catch (error) {}
});
