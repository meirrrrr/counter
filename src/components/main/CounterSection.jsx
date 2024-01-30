import zeekr from "./data";
import Button from "../button/Button";

export default function CounterSection() {
  return (
    <main>
      <div className="zeekr-container">
        <div className="zeekr-header">
          <p>{zeekr[0].title}</p>
        </div>
        <div className="zeekr-main">
          <p className="zeekr-main__arab">{zeekr[0].arabian}</p>
          <p className="zeekr-main__translate">{zeekr[0].transcript}</p>
        </div>
        <div className="zeekr-footer">
          <p>{zeekr[0].translate}</p>
        </div>
        <Button />
      </div>
    </main>
  );
}
