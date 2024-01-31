export default function Icon( {icons} ) {
  return (
    <div className="cafes-container__icons-container">
      {icons.map((icon, index) => (
        <div key={index} className="cafes-container__icons-box">
          <div className="cafes-container__icons-box__title">
            <h2>{icon.title}</h2>
          </div>
          <p>{icon.text}</p>
          {icon.img && <img src={icon.img} alt={icon.title} />}
        </div>
      ))}
    </div>
  );
};
