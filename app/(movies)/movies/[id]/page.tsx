// params 말고 props를 넣어서 확인해 보면 객체 안에 params와 searchParams가 들어 있는 것을 확인할 수 있다.
// react와 다르게 hook을 이용할 필요 없이 next 자체에서 제공한다.
export default function MovieDetail({
  params: { id },
}: {
  params: { id: string };
}) {
  return <h1>movie {id}</h1>;
}
