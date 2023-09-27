import heroImage from './assets/hero.svg';

const Hero = () => {
  return (
    <section className="hero">
      <div className="hero-center">
        <div className="hero-title">
          <h1>Contentful CMS</h1>
          <p>
            A composable content platform meets the unique demands of digital
            content and all the teams that produce and work with it. Built with
            an API-first architecture, a composable content platform
            orchestrates content from multiple sources and publishes it to any
            digital channel. It ensures content is discoverable and reusable,
            provides tailored interfaces, and incorporates governance through
            role-based access management and workflows.
          </p>
        </div>
        <div className="img-container">
          <img src={heroImage} alt="women and the browser" className="img" />
        </div>
      </div>
    </section>
  );
};

export default Hero;
