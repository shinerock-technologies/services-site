import Button from "../ui-components/Button";
import identity from "../../data/useIdentity";

const Hero = () => {
  const { hero } = identity;
  return (
    <section className="mt-2 md:mt-12">
      <h1 className=" text-3xl md:text-6xl font-semibold tracking-tight">
        {hero.greeting}
        <br />
        {hero.title.prefix}{" "}
        <span className="bg-clip-text light:text-black dark:text-transparent bg-gradient-to-r from-pink-500 to-violet-500">
          {hero.title.highlight1}
        </span>{" "}
        <span className="bg-clip-text light:text-black dark:text-transparent bg-gradient-to-r from-green-500 to-lime-500">
          {hero.title.highlight2}
        </span>
        {hero.title.suffix}
      </h1>
      <h2 className="text-lg md:text-2xl mt-4">{hero.subtitle}</h2>
      <p className="text-lg md:text-xl mt-4">{hero.description}</p>
      <p className="text-lg md:text-xl mt-4 bg-clip-text light: text-red-500 dark:text-transparent bg-gradient-to-r from-yellow-500 to-orange-500 font-semibold">
        {hero.status}
      </p>
      {/* <Button className="bg-purple-600 text-white px-6">Hire Me!</Button> */}
    </section>
  );
};

export default Hero;
