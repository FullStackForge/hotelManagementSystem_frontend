export default function Page() {
  return (
    <>
      <div className="py-12 bg-white sm:py-16 lg:py-20">
        <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
          <div className="max-w-sm mx-auto">
            <div>
              <p className="text-3xl font-bold text-gray-900">Checkout</p>
            </div>

            <div className="flow-root mt-10">
              <div className="-my-5 divide-y divide-gray-200">
                <div className="py-5">
                  <div className="flex items-center justify-between space-x-5">
                    <div className="flex items-center flex-1 min-w-0">
                      <p className="ml-3 text-sm font-bold text-gray-900 truncate">
                        Total Guests
                      </p>
                    </div>

                    <p className="text-sm font-medium text-indigo-600 transition-all duration-200 hover:text-indigo-700">
                      {" "}
                      4{" "}
                    </p>
                  </div>
                </div>
                <div className="py-5">
                  <div className="flex items-center justify-between space-x-5">
                    <div className="flex items-center flex-1 min-w-0">
                      <p className="ml-3 text-sm font-bold text-gray-900 truncate">
                        Total Rooms
                      </p>
                    </div>

                    <p className="text-sm font-medium text-indigo-600 transition-all duration-200 hover:text-indigo-700">
                      {" "}
                      2{" "}
                    </p>
                  </div>
                </div>
                <div className="py-5">
                  <div className="flex items-center justify-between space-x-5">
                    <div className="flex items-center flex-1 min-w-0">
                      <p className="ml-3 text-sm font-bold text-gray-900 truncate">
                        CheckIn Date
                      </p>
                    </div>

                    <p className="text-sm font-medium text-indigo-600 transition-all duration-200 hover:text-indigo-700">
                      {" "}
                      4-12-2222{" "}
                    </p>
                  </div>
                </div>
                <div className="py-5">
                  <div className="flex items-center justify-between space-x-5">
                    <div className="flex items-center flex-1 min-w-0">
                      <p className="ml-3 text-sm font-bold text-gray-900 truncate">
                        Checkou DAte
                      </p>
                    </div>

                    <p className="text-sm font-medium text-indigo-600 transition-all duration-200 hover:text-indigo-700">
                      {" "}
                      12-12-2222{" "}
                    </p>
                  </div>
                </div>
                <div className="py-5">
                  <div className="flex items-center justify-between space-x-5">
                    <div className="flex items-center flex-1 min-w-0">
                      <p className="ml-3 text-sm font-bold text-gray-900 truncate">
                        Charges
                      </p>
                    </div>

                    <p className="text-sm font-medium text-indigo-600 transition-all duration-200 hover:text-indigo-700">
                      {" "}
                      1400x10 = 14000{" "}
                    </p>
                  </div>
                </div>
                <div className="py-5">
                  <div className="flex items-center justify-between space-x-5">
                    <div className="flex items-center flex-1 min-w-0">
                      <p className="ml-3 text-sm font-bold text-gray-900 truncate">
                        Tax
                      </p>
                    </div>

                    <p className="text-sm font-medium text-indigo-600 transition-all duration-200 hover:text-indigo-700">
                      {" "}
                      10%{" "}
                    </p>
                  </div>
                </div>
                <div className="py-5">
                  <div className="flex items-center justify-between space-x-5">
                    <div className="flex items-center flex-1 min-w-0">
                      <p className="ml-3 text-sm font-bold text-gray-900 truncate">
                        Total amount
                      </p>
                    </div>

                    <p className="text-sm font-medium text-indigo-600 transition-all duration-200 hover:text-indigo-700">
                      {" "}
                      14000 + 1400 = 15400{" "}
                    </p>
                  </div>
                </div>
              </div>
              <div className="space-x-4 mt-8">
                <a href="/" className="bg-gray-500 hover:bg-gray-300 p-4 rounded-full">
                  Cancel
                </a>
                <a href="/payment/success" className="bg-red-400 hover:bg-red-600 p-4 rounded-full">
                  Pay now success
                </a>
                <a href="/payment/failure" className="bg-red-400 hover:bg-red-600 p-4 rounded-full">
                  Pay now fail
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
