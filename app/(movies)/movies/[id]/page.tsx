// params 말고 props를 넣어서 확인해 보면 객체 안에 params와 searchParams가 들어 있는 것을 확인할 수 있다.

import { Suspense } from "react";
import MovieInfo from "../../../../components/movie-info";
import MovieVideos from "../../../../components/movie-videos";

// react와 다르게 hook을 이용할 필요 없이 next 자체에서 제공한다.
export default async function MovieDetail({
  params: { id },
}: {
  params: { id: string };
}) {
  // Promise.all을 통해 여러개의 api를 동시에 fetch해 올 수 있다.
  // 이렇게 해주지 않고 따로 작성하게 되면 순서대로 호출을 기다려야만한다.
  // const [movie, videos] = await Promise.all([getMovie(id), getVideos(id)]);

  // Suspense를 활용하면 각 ui에 대한 데이터를(컴포넌트) 따로 기다려줄 수 있다.
  return (
    <div>
      <Suspense fallback={<h1>Loading movie info</h1>}>
        <MovieInfo id={id} />
      </Suspense>
      <Suspense fallback={<h1>Loading movie videos</h1>}>
        <MovieVideos id={id} />
      </Suspense>
    </div>
  );
}
