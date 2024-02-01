export default function CafeContainer({ cafesData }) {
  return (
    <div className="cafes-menu-section__box">
      {cafesData.map((cafe, index) => (
        <div className="cafe-box" key={index}>
          <div className="cafe-box-title">
            <h2>
              {cafe.title}
            </h2>
          </div>
          <p>{cafe.text}</p>
          <p>{cafe.price}</p>
        </div>
      ))}
    </div>
  )
}