import data from "../../data/useData";

type ProcessTimelineProps = {
  onBookingClick: () => void;
};

const ProcessTimeline = ({ onBookingClick }: ProcessTimelineProps) => {
  const { process } = data;

  return (
    <div className="py-12">
      <div className="mb-12">
        <h2 className="text-3xl md:text-6xl font-semibold tracking-tight mb-4 text-customBlack dark:text-white">
          {process.heading}
        </h2>
        <p className="text-lg md:text-xl text-gray-600 dark:text-gray-400">
          {process.subheading}
        </p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 items-start">
        {/* Left side - Timeline */}
        <div className="space-y-4">
          {process.steps.map((step, index) => (
            <div key={index} className="w-full">
              <div className="border border-zinc-500 p-4 bg-white dark:bg-zinc-900">
                <div className="flex items-start gap-4">
                  {/* Number badge */}
                  <div className="flex-shrink-0 w-10 h-10 border border-zinc-500 flex items-center justify-center font-semibold text-customBlack dark:text-white text-sm">
                    {step.number}
                  </div>

                  {/* Content */}
                  <div className="flex-1">
                    <div className="flex items-baseline gap-3 mb-2">
                      <h3 className="text-lg font-semibold text-customBlack dark:text-white">
                        {step.title}
                      </h3>
                      <span className="text-xs text-gray-500 dark:text-gray-400">
                        {step.duration}
                      </span>
                    </div>
                    <p className="text-sm text-gray-600 dark:text-gray-400">
                      {step.description}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Right side - CTA Card */}
        <div className="sticky top-24">
          <div className="border border-zinc-500 p-6 bg-white dark:bg-zinc-900">
            <h3 className="text-2xl font-semibold mb-4 text-customBlack dark:text-white">
              {process.cta.title}
            </h3>
            <p className="text-gray-600 dark:text-gray-400 mb-6">
              {process.cta.description}
            </p>
            <button
              onClick={onBookingClick}
              className="border border-zinc-500 hover:bg-zinc-500 hover:text-white px-8 py-3 font-semibold transition-colors text-customBlack dark:text-white">
              Get In Touch
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProcessTimeline;
