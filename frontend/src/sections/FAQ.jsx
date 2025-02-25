import React, { useState } from 'react';

function FAQ() {
  const [activeAccordion, setActiveAccordion] = useState(null);

  const toggleAccordion = (index) => {
    setActiveAccordion(activeAccordion === index ? null : index);
  };

  return (
    <div>
      <section className="py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mb-16">
            <h2 className="text-4xl font-manrope text-center font-bold text-[#A7A8A7] leading-[3.25rem]">
              Frequently asked questions
            </h2>
          </div>

          <div className="accordion-group">
            {[...Array(4)].map((_, index) => (
              <div
                key={index}
                className={`accordion py-8 px-6 border-b border-solid border-gray-200 transition-all duration-500 rounded-2xl hover:bg-indigo-50 ${activeAccordion === index ? 'accordion-active:bg-indigo-50' : ''}`}
              >
                <button
                  className="accordion-toggle group inline-flex items-center justify-between leading-8 text-gray-900 w-full transition duration-500 text-left hover:text-indigo-600"
                  onClick={() => toggleAccordion(index)}
                  aria-controls={`basic-collapse-${index}-with-arrow`}
                >
                  <h5>{`Question ${index + 1}`}</h5>
                  <svg
                    className={`text-gray-500 transition duration-500 group-hover:text-indigo-600 ${activeAccordion === index ? 'accordion-active:text-indigo-600 accordion-active:rotate-180' : ''}`}
                    width="22"
                    height="22"
                    viewBox="0 0 22 22"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M16.5 8.25L12.4142 12.3358C11.7475 13.0025 11.4142 13.3358 11 13.3358C10.5858 13.3358 10.2525 13.0025 9.58579 12.3358L5.5 8.25"
                      stroke="currentColor"
                      strokeWidth="1.6"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    ></path>
                  </svg>
                </button>
                <div
                  id={`basic-collapse-${index}-with-arrow`}
                  className="accordion-content w-full px-0 overflow-hidden"
                  aria-labelledby={`basic-heading-${index}-with-arrow`}
                  style={{ maxHeight: activeAccordion === index ? '250px' : '0' }}
                >
                  <p className="text-base text-gray-900 leading-6">
                    {`Answer to question ${index + 1}`}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}

export default FAQ;
