import aboutImg from "../images/about.jpeg"
import Title from "./Title";
const About = () => {
  return (
    <section className="section" id="about">
      <Title title="about" subTitle="us"/>

      <div className="section-center about-center">
        <div className="about-img">
          <img
            src={aboutImg}
            className="about-photo"
            alt="awesome beach"
          />
        </div>
        <article className="about-info">
          <h3>explore the difference</h3>
          <p>
            Embark on a journey to breathtaking destinations across the globe!
            Whether youre chasing sunsets on pristine beaches, hiking through
            lush mountains, or uncovering ancient cities, our tours are designed
            to awaken your inner explorer. Let your wanderlust lead the way!
          </p>
          <p>
            We believe no two journeys should be the same. That’s why we offer
            customized travel experiences that cater to your unique interests.
            From solo expeditions to family getaways, we’ve got you covered with
            personalized itineraries that match your dream vacation.
          </p>
          <a href="#" className="btn">
            read more
          </a>
        </article>
      </div>
    </section>
  );
};

export default About;
