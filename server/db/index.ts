import mongoose from "mongoose";

export default async (nitroApp: any) => {
  const config = useRuntimeConfig();

  mongoose
    .connect("mongodb+srv://mike:!ti_jjdiL.8nhn2@cluster0.hg4jdzy.mongodb.net/")
    .then(() => console.log("Connect to DB"))
    .catch((e: any) => console.log(e));
};
