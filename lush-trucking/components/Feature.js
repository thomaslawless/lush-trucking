export const Feature = () => {
    return (
      <div className="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">
        <div className="grid row-gap-8 sm:row-gap-0 sm:grid-cols-2 lg:grid-cols-3">
          <div className="p-8 border-b sm:border-r">
            <div className="max-w-md text-center">
              <div className="flex items-center justify-center w-16 h-16 mx-auto mb-4 rounded-full bg-indigo-50 sm:w-16 sm:h-16">
                <svg
                  className="w-8 h-8 text-deep-purple-accent-400 sm:w-12 sm:h-12"
                  stroke="currentColor"
                  viewBox="0 0 52 52"
                >
                  <polygon
                    strokeWidth="3"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    fill="none"
                    points="29 13 14 29 25 29 23 39 38 23 27 23"
                  />
                </svg>
              </div>
              <h6 className="mb-2 font-semibold leading-5">Fleet</h6>
              <p className="mb-3 text-sm text-gray-900">
                We have two full time semi-trailer trucks, capable of transporting your cargo across the contential United States.
              </p>
            </div>
          </div>
          <div className="p-8 border-b lg:border-r">
            <div className="max-w-md text-center">
              <div className="flex items-center justify-center w-16 h-16 mx-auto mb-4 rounded-full bg-indigo-50 sm:w-16 sm:h-16">
                <svg
                  className="w-8 h-8 text-deep-purple-accent-400 sm:w-12 sm:h-12"
                  stroke="currentColor"
                  viewBox="0 0 52 52"
                >
                  <polygon
                    strokeWidth="3"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    fill="none"
                    points="29 13 14 29 25 29 23 39 38 23 27 23"
                  />
                </svg>
              </div>
              <h6 className="mb-2 font-semibold leading-5">Insured</h6>
              <p className="mb-3 text-sm text-gray-900">
                Our fleet is fully insured for transport of goods in the contential United States.
              </p>
            </div>
          </div>
          <div className="p-8 border-b sm:border-r lg:border-r-0">
            <div className="max-w-md text-center">
              <div className="flex items-center justify-center w-16 h-16 mx-auto mb-4 rounded-full bg-indigo-50 sm:w-16 sm:h-16">
                <svg
                  className="w-8 h-8 text-deep-purple-accent-400 sm:w-12 sm:h-12"
                  stroke="currentColor"
                  viewBox="0 0 52 52"
                >
                  <polygon
                    strokeWidth="3"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    fill="none"
                    points="29 13 14 29 25 29 23 39 38 23 27 23"
                  />
                </svg>
              </div>
              <h6 className="mb-2 font-semibold leading-5">Drivers</h6>
              <p className="mb-3 text-sm text-gray-900">
                Our team of highly skilled drivers have over fifty years of combined experience.
              </p>
            </div>
              </div>
            </div>
          </div>
    );
  };