import styles from "../styles/movie-info.module.css";

export async function getMovie(id: string) {
  const response = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/${id}`);
  return response.json();
}

// 영화 정보의 ui만 가진 코드
export default async function MovieInfo({ id }: { id: string }) {
  const movie = await getMovie(id);
  return (
    <div className={styles.container}>
      <img
        src={movie.poster_path}
        alt={movie.title}
        className={styles.poster}
      />
      <div>
        <h1 className={styles.title}>{movie.title}</h1>
        <h3>⭐️ {movie.vote_average.toFixed(1)}</h3>
        <p className={styles.info}>{movie.overview}</p>
        <a href={movie.hompage} target={"_blank"}>
          Homepage &rarr;
        </a>
      </div>
    </div>
  );
}
