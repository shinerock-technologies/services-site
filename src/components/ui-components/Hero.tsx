import data from "../../data/useData";

type HeroProps = {
  onBookingClick: () => void;
};

const Hero = ({ onBookingClick }: HeroProps) => {
  const { hero } = data;
  return (
    <section className="mt-2 md:mt-12">
      <h1 className=" text-4xl -mb-20 md:text-9xl font-semibold tracking-tight">
        {" "}
        {hero.greeting}
      </h1>
      <h1 className=" text-3xl md:text-6xl font-semibold tracking-tight">
        <span className="bg-clip-text text-8xl text-transparent bg-gradient-to-r from-pink-500 to-violet-500">
          {" "}
        </span>
        <br />
        {hero.title.prefix} <br />
        {hero.title.highlight1} <br />
        {hero.title.highlight2}
      </h1>

      <p className="text-lg md:text-xl mt-4">{hero.description}</p>
      <p className="text-lg md:text-xl mt-4 bg-clip-text text-transparent bg-gradient-to-r from-yellow-500 to-orange-500 font-semibold">
        {hero.status}
      </p>
      <button
        onClick={onBookingClick}
        className="mt-6 border border-zinc-500 hover:bg-zinc-500 hover:text-white px-8 py-3 font-semibold transition-colors">
        Get Started
      </button>
    </section>
  );
};

export default Hero;
