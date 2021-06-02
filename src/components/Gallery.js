const Gallery = ({ Data }) => {
  const galeryData = Data.map((obj) => (
    <li key={obj.id} className="GalaryFoto">
      <img class="picture" src={obj.img} alt={obj.title} />
    </li>
  ));
  return <ul className="gallery">{galeryData}</ul>;
};
export default Gallery;
