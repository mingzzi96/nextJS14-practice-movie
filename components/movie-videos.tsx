import styles from "../styles/movie-videos.module.css";

async function getVideos(id: string) {
  const response = await fetch(
    `${process.env.NEXT_PUBLIC_BASE_URL}/${id}/videos`
  );
  return response.json();
}

// video의 ui만 가진 코드
export default async function MovieVideos({ id }: { id: string }) {
  const videos = await getVideos(id);
  return (
    <div className={styles.container}>
      {videos.map((video) => (
        <iframe
          key={video.id}
          src={`https://youtube.com/embed/${video.key}`}
          title={video.name}
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        />
      ))}
    </div>
  );
}
