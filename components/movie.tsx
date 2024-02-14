import Link from "next/link";
import styles from "../styles/movie.module.css";

interface MovieProps {
  title: string;
  poster_path: string;
  id: string;
}

export default function Movie({ poster_path, title, id }: MovieProps) {
  return (
    <div className={styles.movie}>
      <img src={poster_path} alt={title} />
      <Link href={`/movies/${id}`}>{title}</Link>
    </div>
  );
}
