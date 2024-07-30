import { connectDB } from "../util/database";
import Link from "next/link";

export default async function List() {
  let db = (await connectDB).db("forum");
  let result = await db.collection("post").find().toArray();

  return (
    <div className="list-bg">
      {result.map((a, i) => (
        <div className="list-item" key={i}>
          <h4>{result[i].title}</h4>
          <p>1월 1일</p>
        </div>
      ))}
    </div>
  );
}
