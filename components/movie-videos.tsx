async function getVideos(id: string) {
  const response = await fetch(
    `${process.env.NEXT_PUBLIC_BASE_URL}/${id}/videos`
  );
  return response.json();
}

// video의 ui만 가진 코드
export default async function MovieVideos({ id }: { id: string }) {
  const videos = await getVideos(id);
  return <h6>{JSON.stringify(videos)}</h6>;
}
