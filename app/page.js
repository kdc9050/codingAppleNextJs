import { connectDB } from "/util/database.js";
import Link from "next/link";

export default async function Home() {
  let client = await connectDB;
  const db = client.db("forum");
  let result = await db.collection("post").find().toArray();

  return (
    <div>
      {result[0].title}
      {result[0].content}
    </div>
  );
}
