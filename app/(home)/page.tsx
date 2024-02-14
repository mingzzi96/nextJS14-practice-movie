// server component

// "use client" 필요 없음!

export const metadata = {
  title: "HOME",
};

async function getMovies() {
  // 로딩 상태를 위해 일부러 프로그램을 느리게 만들어주는 트릭
  // getMovies 함수가 이 구문에서 2초간 멈췄다가 실행될 것이다.
  // 그럼 사용자는 화면이 로딩될 때 까지 접근이 불가능하다.
  // await new Promise((resolve) => setTimeout(resolve, 2000));

  // 라이브러리 필요 없이 자동으로 url을 fetch해 준다.
  // 첫 fetch때만 API에 요청을 한다. 그리고 그 결과 상태를 기억해 두었다가 다음 부터는 재사용한다. 그래서 빨라보임
  const response = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/movies`);
  const json = await response.json();
  return json;
}

export default async function HomePage() {
  const movies = await getMovies();
  return <div>{JSON.stringify(movies)}</div>;
}
