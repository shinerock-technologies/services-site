"use client";
import { useState } from "react";
import { useModal } from "../contexts/ModalContext";
import data from "../data/useData";
import CustomMainPagesHead from "../components/shared-components/CustomMainPagesHead";

const Consulting = () => {
  const { consultations: pricing } = data;
  const { openModal } = useModal();
  const [openFaqIndex, setOpenFaqIndex] = useState<number | null>(null);

  return (
    <>
      <CustomMainPagesHead name="Consulting | Shinerock Labs" type="" />
      <main className="py-12">
        {/* Hero Section */}
        <div className="mb-20">
          <h1 className="text-5xl md:text-7xl font-semibold tracking-tight mb-6 text-customBlack dark:text-white">
            {pricing.hero.title}
          </h1>
          <p className="text-2xl md:text-3xl text-gray-600 dark:text-gray-400 mb-4 max-w-4xl">
            {pricing.hero.subtitle}
          </p>
          <p className="text-lg md:text-xl text-gray-600 dark:text-gray-400 max-w-3xl">
            {pricing.hero.description}
          </p>
        </div>

        {/* Plans Header Section */}
        <div className="mb-12">
          <h2 className="text-3xl md:text-5xl font-semibold tracking-tight mb-4 text-customBlack dark:text-white">
            {pricing.heading}
          </h2>
          <p className="text-lg md:text-xl text-gray-600 dark:text-gray-400 max-w-3xl">
            {pricing.subheading}
          </p>
        </div>

        {/* Pricing Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-20">
          {pricing.plans.map((plan, index) => (
            <div
              key={index}
              className={`border border-zinc-500 bg-white dark:bg-zinc-900 p-8 flex flex-col ${
                plan.popular ? "relative" : ""
              }`}>
              {plan.popular && (
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 bg-orange-500 text-white px-4 py-1 text-sm font-semibold">
                  Most Popular
                </div>
              )}

              <div className="mb-6">
                <h2 className="text-2xl font-semibold mb-2 text-customBlack dark:text-white">
                  {plan.name}
                </h2>
                <div className="flex items-baseline gap-1 mb-4">
                  <span className="text-4xl font-bold text-customBlack dark:text-white">
                    {plan.price}
                  </span>
                  {plan.period && (
                    <span className="text-gray-600 dark:text-gray-400">
                      {plan.period}
                    </span>
                  )}
                </div>
                <p className="text-gray-600 dark:text-gray-400">
                  {plan.description}
                </p>
              </div>

              <ul className="space-y-3 mb-8 flex-grow">
                {plan.features.map((feature, featureIndex) => (
                  <li
                    key={featureIndex}
                    className="flex items-start gap-3 text-gray-600 dark:text-gray-400">
                    <span className="text-green-500 mt-1">✓</span>
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>

              <button
                onClick={openModal}
                className={`w-full py-3 font-semibold transition-colors ${
                  plan.popular
                    ? "bg-orange-500 text-white hover:bg-orange-600"
                    : "border border-zinc-500 hover:bg-zinc-500 hover:text-white text-customBlack dark:text-white"
                }`}>
                {plan.cta}
              </button>
            </div>
          ))}
        </div>

        {/* What's Included Section */}
        <div className="mb-20 border border-zinc-500 p-8 bg-gray-50 dark:bg-zinc-800">
          <h2 className="text-3xl font-semibold mb-6 text-customBlack dark:text-white">
            {pricing.whatsIncluded.title}
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {pricing.whatsIncluded.items.map((item, index) => (
              <div key={index} className="flex gap-3">
                <span className="text-orange-500 text-xl">✓</span>
                <div>
                  <h3 className="font-semibold text-customBlack dark:text-white mb-1">
                    {item.title}
                  </h3>
                  <p className="text-gray-600 dark:text-gray-400 text-sm">
                    {item.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Case Studies Section */}
        <div className="mb-20">
          <h2 className="text-3xl font-semibold mb-4 text-customBlack dark:text-white">
            {pricing.caseStudies.title}
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-400 mb-8">
            {pricing.caseStudies.subtitle}
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {pricing.caseStudies.studies.map((study, index) => (
              <div
                key={index}
                className="border border-zinc-500 p-6 bg-white dark:bg-zinc-900">
                <h3 className="text-xl font-semibold mb-2 text-customBlack dark:text-white">
                  {study.title}
                </h3>
                <p className="text-sm text-orange-500 mb-3">{study.client}</p>
                <p className="text-gray-600 dark:text-gray-400 mb-4">
                  {study.description}
                </p>
                <p className="text-sm font-semibold text-customBlack dark:text-white">
                  Results: {study.results}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* FAQ Section */}
        <div className="mb-20">
          <h2 className="text-3xl font-semibold mb-8 text-customBlack dark:text-white">
            Frequently Asked Questions
          </h2>
          <div className="space-y-4">
            {pricing.faq.map((item, index) => (
              <div
                key={index}
                className="border border-zinc-500 bg-white dark:bg-zinc-900">
                <button
                  onClick={() =>
                    setOpenFaqIndex(openFaqIndex === index ? null : index)
                  }
                  className="w-full p-6 text-left flex justify-between items-center">
                  <h3 className="font-semibold text-lg text-customBlack dark:text-white">
                    {item.question}
                  </h3>
                  <span className="text-2xl text-gray-600 dark:text-gray-400">
                    {openFaqIndex === index ? "−" : "+"}
                  </span>
                </button>
                {openFaqIndex === index && (
                  <div className="px-6 pb-6">
                    <p className="text-gray-600 dark:text-gray-400">
                      {item.answer}
                    </p>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>

        {/* CTA Section */}
        <div className="border border-zinc-500 p-12 bg-white dark:bg-zinc-900 text-center">
          <h2 className="text-3xl font-semibold mb-4 text-customBlack dark:text-white">
            {pricing.cta.title}
          </h2>
          <p className="text-gray-600 dark:text-gray-400 mb-6 max-w-2xl mx-auto">
            {pricing.cta.description}
          </p>
          <button
            onClick={openModal}
            className="border border-zinc-500 hover:bg-zinc-500 hover:text-white px-8 py-3 font-semibold transition-colors text-customBlack dark:text-white">
            {pricing.cta.buttonText}
          </button>
        </div>
      </main>
    </>
  );
};

export default Consulting;
