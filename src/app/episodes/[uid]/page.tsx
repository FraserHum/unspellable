import { createClient } from "@/prismicio";

export default function Page({ params }: { params: { uid: string } }) {
  return <div>My Post: {params.uid}</div>;
}
export async function generateStaticParams() {
  const client = createClient();

  const episodes = await client.getAllByType("episode");

  return episodes.map((episode) => ({
    uid: episode.uid,
  }));
}
