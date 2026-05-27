function MovieItem({ image, title, genre }) {
  return (
    <div className="movie-item">
      <img src={image} alt={title} width={40} />
      <div>
        <div><b>{title}</b></div>
        {genre && <small>{genre}</small>}
      </div>
    </div>
  )
}

export default MovieItem
