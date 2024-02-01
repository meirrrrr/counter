import icons from "./iconstData";
import Icon from "./Icon";

export default function GoodsSection() {
  return (
    <section>
      <div className="cafes-container">
        <div className="cafes-container__text">
          <div className="cafes-container__headerText"><h1>
            Halal cafes
          </h1>
          </div>
          <div className="cafes-container__pargraphText">
          <h2>
            Indulge in a culinary journey at our distinguished collection of halal cafes. Experience the rich tapestry of flavors that celebrate diverse cuisines, all prepared in accordance with halal standards. From cozy ambiances to chic settings, our cafes provide a welcoming space to enjoy delectable meals, desserts, and beverages. Discover the perfect blend of taste and tradition, where every dish is a reflection of quality, authenticity, and culinary excellence. Join us in creating lasting memories as you relish in the joy of halal dining at its finest.
          </h2>
          </div>
        </div>
      <div className="cafes-container__menu">
        <Icon icons={icons}/>
        </div>  
      </div>
    </section>
  )
}
