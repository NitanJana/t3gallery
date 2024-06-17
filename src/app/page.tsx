import { db } from "@/server/db";
import Link from "next/link";

const mockData = [
  "https://utfs.io/f/472ac2c1-73b3-4a0f-8c75-1efff1406340-r0eilc.png",
  "https://utfs.io/f/21971f06-7f66-4257-8a19-6dba2959c246-6lknxp.png",
  "https://utfs.io/f/f5a9f4b3-a543-450e-81a3-26f9ab715186-1svj6.png",
];

const mockImages = mockData.map((url, index) => ({
  id: index + 1,
  url,
}));

export default async function HomePage() {
  const posts = await db.query.posts.findMany();

  return (
    <main className="">
      <div className="flex flex-wrap gap-4">
        {posts.map((post) => (
          <div key={post.id}>{post.name}</div>
        ))}
        {[...mockImages, ...mockImages, ...mockImages, ...mockImages].map(
          (image,index) => (
            <div key={image.id + '-' + index} className="w-48">
              <img src={image.url} />
            </div>
          ),
        )}
      </div>
    </main>
  );
}
