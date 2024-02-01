import CafeContainer from "./CafeContainer"
import cafesData from "./cafesData"

export default function CafesSection() {
  return (
    <section>
      <div className="cafes-menu-section">
        <CafeContainer cafesData={cafesData}/>
      </div>
    </section>
  )
}