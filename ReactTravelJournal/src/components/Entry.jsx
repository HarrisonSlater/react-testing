export default function Entry(props) {
  const {country, title, date, text, img, googleMapsLink} = props;
  console.log(props);
  return (
    <article class="entry">
      <img class="entry-image" src={img.src} alt={img.alt} />
      <div class="entry-wrapper">
        <div class="entry-header">
          <img src="./src/assets/marker.svg" alt="Map Marker" class="entry-map-marker" />
          <span class="entry-country">{country}</span>
          <a href={googleMapsLink} class="entry-map-link">View on Google Maps</a>

        </div>
        <h2 class="entry-title">{title}</h2>
        <span class="entry-date">{date}</span>
        <p class="entry-text">{text}</p>
      </div>
    </article>
  );
}