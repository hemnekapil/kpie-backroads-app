import { tours } from "../data";
import Title from "./Title";

const Tours = () => {
  return (
    <section className="section" id="tours">
        <Title title="featured" subTitle="tours"/>

      <div className="section-center featured-center">
        {tours.map((tav)=>(
            <article key={tav.id} className="tour-card">
            <div className="tour-img-container">
              <img src={tav.image} className="tour-img" alt="" />
              <p className="tour-date">{tav.date}</p>
            </div>
            <div className="tour-info">
              <div className="tour-title">
                <h4>{tav.title}</h4>
              </div>
              <p>
                {tav.info}
              </p>
              <div className="tour-footer">
                <p>
                  <span>
                    <i className="fas fa-map"></i>
                  </span>{" "}
                  {tav.location}
                </p>
                <p>{tav.duration} days</p>
                <p>from ₨.{tav.cost}</p>
              </div>
            </div>
          </article>

        ))}
      </div>
    </section>
  );
};

export default Tours;
