async function getMovie(id: string) {
  const response = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/${id}`);
  return response.json();
}

// 영화 정보의 ui만 가진 코드
export default async function MovieInfo({ id }: { id: string }) {
  const movie = await getMovie(id);
  return <h6>{JSON.stringify(movie)}</h6>;
}
