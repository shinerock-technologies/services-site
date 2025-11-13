import data from "../../data/useData";
import ServiceCodeAnimation from "./ServiceCodeAnimation";

const Services = () => {
  const { pages, services } = data;

  return (
    <section id="services" className="mt-2 md:mt-12">
      <h1 className="text-3xl md:text-6xl font-semibold tracking-tight text-customBlack dark:text-white">
        {pages.services.heading}
      </h1>

      <p className="text-lg md:text-xl mt-4 text-gray-600 dark:text-gray-400">
        {pages.services.description}
      </p>

      {/* Services Grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-12">
        {services.items.map((service, index) => (
          <div key={index} className="w-full">
            <div className="border border-zinc-500 bg-white dark:bg-zinc-900 overflow-hidden h-full flex flex-col">
              <ServiceCodeAnimation serviceTitle={service.title} />
              <div className="p-4 flex flex-col gap-2">
                <h3 className="text-lg font-semibold text-customBlack dark:text-white">
                  {service.title}
                </h3>
                <p className="text-sm text-gray-600 dark:text-gray-400">
                  {service.description}
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Services;
