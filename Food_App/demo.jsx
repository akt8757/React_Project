<div class="container mx-auto px-4 h-screen flex flex-col">
  <nav class="bg-navbg rounded-full mt-4 px-8 py-3 flex justify-between items-center">
    <div class="flex items-center ">
      <div class="text-primary mr-2">
        <img src="./assets/logo.svg" />
      </div>
      <h1 class="text-2xl font-bold">
        <span class="text-primary">Dine</span>Out
      </h1>
    </div>
    <div class="flex items-center">
      <img src="./assets/user-icon.svg" class="h-10" />
    </div>
  </nav>

  <div class="grid grid-cols-1 md:grid-cols-3 gap-6 mt-6 flex-grow">
    <div class="bg-cardbg rounded-lg p-6 h-[calc(100vh_-_130px)]">
      <h2 class="text-xl font-bold mb-1">CREATE ORDER</h2>
      <p class="text-gray-400 text-sm mb-4">
        Accurately fulfill customer orders based on a precise understanding of
        their requirements.
      </p>

      <div class="mb-4">
        <label class="block text-sm font-medium mb-2">Customer Name</label>
        <input
          type="text"
          class="w-full bg-gray-700 bg-opacity-50 rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-primary transition-all duration-300"
        />
      </div>

      <div class="mb-4">
        <label class="block text-sm font-medium mb-2">Choose Items</label>
        <div class="items-container">
          <div class="bg-gray-700 bg-opacity-30 rounded-md p-3 mb-3 flex justify-between items-center hover:bg-opacity-40 transition-all duration-300">
            <div class="flex items-center">
              <div class="w-12 h-12   flex items-center justify-center mr-3">
                <img
                  src="./assets/hamburger.svg"
                  alt="Hamburger"
                  class="w-10 h-10"
                />
              </div>
              <div>
                <h3 class="font-medium">Hamburger</h3>
                <p class="text-xs text-gray-400">BDT 300</p>
              </div>
            </div>
            <button class="w-8 h-8 bg-gray-800 hover:bg-primary rounded-full flex items-center justify-center transition-colors duration-300">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                class="h-5 w-5 text-green-500"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path
                  fill-rule="evenodd"
                  d="M10 5a1 1 0 011 1v3h3a1 1 0 110 2h-3v3a1 1 0 11-2 0v-3H6a1 1 0 110-2h3V6a1 1 0 011-1z"
                  clip-rule="evenodd"
                />
              </svg>
            </button>
          </div>

          <div class="bg-gray-700 bg-opacity-30 rounded-md p-3 mb-3 flex justify-between items-center hover:bg-opacity-40 transition-all duration-300">
            <div class="flex items-center">
              <div class="w-12 h-12 flex items-center justify-center mr-3">
                <img
                  src="./assets/chicken.svg"
                  alt="Chicken Nuggets"
                  class="w-10 h-10"
                />
              </div>
              <div>
                <h3 class="font-medium">Chicken Nuggets</h3>
                <p class="text-xs text-gray-400">BDT 300</p>
              </div>
            </div>
            <button class="w-8 h-8 bg-gray-800 hover:bg-primary rounded-full flex items-center justify-center transition-colors duration-300">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                class="h-5 w-5 text-green-500"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path
                  fill-rule="evenodd"
                  d="M10 5a1 1 0 011 1v3h3a1 1 0 110 2h-3v3a1 1 0 11-2 0v-3H6a1 1 0 110-2h3V6a1 1 0 011-1z"
                  clip-rule="evenodd"
                />
              </svg>
            </button>
          </div>

          <div class="bg-gray-700 bg-opacity-30 rounded-md p-3 mb-3 flex justify-between items-center hover:bg-opacity-40 transition-all duration-300">
            <div class="flex items-center">
              <div class="w-12 h-12 flex items-center justify-center mr-3">
                <img
                  src="./assets/submarine.svg"
                  alt="Submarine Sandwich"
                  class="w-10 h-10"
                />
              </div>
              <div>
                <h3 class="font-medium">Submarine Sandwich</h3>
                <p class="text-xs text-gray-400">BDT 300</p>
              </div>
            </div>
            <button class="w-8 h-8 bg-gray-800 hover:bg-primary rounded-full flex items-center justify-center transition-colors duration-300">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                class="h-5 w-5 text-red-500"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path
                  fill-rule="evenodd"
                  d="M3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
                  clip-rule="evenodd"
                />
              </svg>
            </button>
          </div>

          <div class="bg-gray-700 bg-opacity-30 rounded-md p-3 mb-3 flex justify-between items-center hover:bg-opacity-40 transition-all duration-300">
            <div class="flex items-center">
              <div class="w-12 h-12 bg-yellow-600 rounded-md flex items-center justify-center mr-3">
                <img
                  src="./assets/pizza.svg"
                  alt="Pizza slices"
                  class="w-10 h-10"
                />
              </div>
              <div>
                <h3 class="font-medium">Pizza slices</h3>
                <p class="text-xs text-gray-400">BDT 300</p>
              </div>
            </div>
            <button class="w-8 h-8 bg-gray-800 hover:bg-primary rounded-full flex items-center justify-center transition-colors duration-300">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                class="h-5 w-5 text-green-500"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path
                  fill-rule="evenodd"
                  d="M10 5a1 1 0 011 1v3h3a1 1 0 110 2h-3v3a1 1 0 11-2 0v-3H6a1 1 0 110-2h3V6a1 1 0 011-1z"
                  clip-rule="evenodd"
                />
              </svg>
            </button>
          </div>
        </div>
      </div>

      <button class="w-full bg-primary hover:bg-opacity-90 text-white font-medium py-3 rounded-full transition-all duration-300 hover:shadow-lg transform hover:-translate-y-1">
        Place Order (BDT 100)
      </button>
    </div>

    <div class="md:col-span-2 h-[calc(100vh_-_130px)]">
      <div>
        <h2 class="text-xl font-bold mb-4">Order Summary</h2>
        <div class="grid grid-cols-3 gap-4 mb-6">
          <div class="bg-cardbg rounded-lg p-4 relative overflow-hidden">
            <div class="text-5xl font-bold text-yellow-500 mb-2">8</div>
            <div class="bg-yellow-800 bg-opacity-50 text-yellow-200 text-xs font-medium px-3 py-1 rounded-full inline-block">
              Total Order
            </div>
          </div>

          <div class="bg-cardbg rounded-lg p-4 relative overflow-hidden">
            <div class="text-5xl font-bold text-red-500 mb-2">7</div>
            <div class="bg-red-800 bg-opacity-50 text-red-200 text-xs font-medium px-3 py-1 rounded-full inline-block">
              Pending
            </div>
          </div>

          <div class="bg-cardbg rounded-lg p-4 relative overflow-hidden">
            <div class="text-5xl font-bold text-green-500 mb-2">1</div>
            <div class="bg-green-800 bg-opacity-50 text-green-200 text-xs font-medium px-3 py-1 rounded-full inline-block">
              Delivered
            </div>
          </div>
        </div>
      </div>

      <div>
        <div class="flex justify-between">
          <h2 class="text-xl font-bold mb-4">Order Reports</h2>

          <div class="flex gap-4 items-center">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="18"
              height="18"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
              class="lucide lucide-funnel-icon lucide-funnel"
            >
              <path d="M10 20a1 1 0 0 0 .553.895l2 1A1 1 0 0 0 14 21v-7a2 2 0 0 1 .517-1.341L21.74 4.67A1 1 0 0 0 21 3H3a1 1 0 0 0-.742 1.67l7.225 7.989A2 2 0 0 1 10 14z" />
            </svg>
            <select class="appearance-none bg-zinc-900 accent-orange-600 border-none outline-none rounded-sm">
              <option>All</option>
              <option>Pending</option>
              <option>Delivered</option>
            </select>
          </div>
        </div>
        <div class="bg-cardbg rounded-lg p-4">
          <div class="reports-container">
            <table class="min-w-full">
              <thead>
                <tr class="text-left text-sm">
                  <th class="pb-3 font-medium">ID</th>
                  <th class="pb-3 font-medium">Customer Name</th>
                  <th class="pb-3 font-medium">Items</th>
                  <th class="pb-3 font-medium">Amount</th>
                  <th class="pb-3 font-medium">Status</th>
                  <th class="pb-3 font-medium">Action</th>
                </tr>
              </thead>
              <tbody class="text-sm">
                <tr class="border-t border-gray-700">
                  <td class="py-3">21</td>
                  <td class="py-3">Sumit Saha</td>
                  <td class="py-3">5</td>
                  <td class="py-3">123123</td>
                  <td class="py-3">
                    <span class="text-red-500">PENDING</span>
                  </td>
                  <td class="py-3">
                    <button class="bg-gray-800 hover:bg-red-600 text-xs px-3 py-1 rounded-full mr-1 transition-colors duration-300">
                      Delete
                    </button>
                    <button class="bg-gray-800 hover:bg-green-600 text-xs px-3 py-1 rounded-full transition-colors duration-300">
                      DELIVER
                    </button>
                  </td>
                </tr>

                <tr class="border-t border-gray-700">
                  <td class="py-3">21</td>
                  <td class="py-3">Akash Ahmed</td>
                  <td class="py-3">5</td>
                  <td class="py-3">123123</td>
                  <td class="py-3">
                    <span class="text-green-500">DELIVERED</span>
                  </td>
                  <td class="py-3">
                    <button class="bg-gray-800 hover:bg-red-600 text-xs px-3 py-1 rounded-full mr-1 transition-colors duration-300">
                      Delete
                    </button>
                  </td>
                </tr>

                <tr class="border-t border-gray-700">
                  <td class="py-3">21</td>
                  <td class="py-3">Saad Hasan</td>
                  <td class="py-3">5</td>
                  <td class="py-3">123123</td>
                  <td class="py-3">
                    <span class="text-red-500">PENDING</span>
                  </td>
                  <td class="py-3">
                    <button class="bg-gray-800 hover:bg-red-600 text-xs px-3 py-1 rounded-full mr-1 transition-colors duration-300">
                      Delete
                    </button>
                    <button class="bg-gray-800 hover:bg-green-600 text-xs px-3 py-1 rounded-full transition-colors duration-300">
                      DELIVER
                    </button>
                  </td>
                </tr>

                <tr class="border-t border-gray-700">
                  <td class="py-3">21</td>
                  <td class="py-3">MD Salahuddin</td>
                  <td class="py-3">5</td>
                  <td class="py-3">123123</td>
                  <td class="py-3">
                    <span class="text-red-500">PENDING</span>
                  </td>
                  <td class="py-3">
                    <button class="bg-gray-800 hover:bg-red-600 text-xs px-3 py-1 rounded-full mr-1 transition-colors duration-300">
                      Delete
                    </button>
                    <button class="bg-gray-800 hover:bg-green-600 text-xs px-3 py-1 rounded-full transition-colors duration-300">
                      DELIVER
                    </button>
                  </td>
                </tr>

                <tr class="border-t border-gray-700">
                  <td class="py-3">21</td>
                  <td class="py-3">Ferdous</td>
                  <td class="py-3">5</td>
                  <td class="py-3">123123</td>
                  <td class="py-3">
                    <span class="text-red-500">PENDING</span>
                  </td>
                  <td class="py-3">
                    <button class="bg-gray-800 hover:bg-red-600 text-xs px-3 py-1 rounded-full mr-1 transition-colors duration-300">
                      Delete
                    </button>
                    <button class="bg-gray-800 hover:bg-green-600 text-xs px-3 py-1 rounded-full transition-colors duration-300">
                      DELIVER
                    </button>
                  </td>
                </tr>

                <tr class="border-t border-gray-700">
                  <td class="py-3">21</td>
                  <td class="py-3">Rafe</td>
                  <td class="py-3">5</td>
                  <td class="py-3">123123</td>
                  <td class="py-3">
                    <span class="text-red-500">PENDING</span>
                  </td>
                  <td class="py-3">
                    <button class="bg-gray-800 hover:bg-red-600 text-xs px-3 py-1 rounded-full mr-1 transition-colors duration-300">
                      Delete
                    </button>
                    <button class="bg-gray-800 hover:bg-green-600 text-xs px-3 py-1 rounded-full transition-colors duration-300">
                      DELIVER
                    </button>
                  </td>
                </tr>

                <tr class="border-t border-gray-700">
                  <td class="py-3">21</td>
                  <td class="py-3">Sarwar</td>
                  <td class="py-3">5</td>
                  <td class="py-3">123123</td>
                  <td class="py-3">
                    <span class="text-red-500">PENDING</span>
                  </td>
                  <td class="py-3">
                    <button class="bg-gray-800 hover:bg-red-600 text-xs px-3 py-1 rounded-full mr-1 transition-colors duration-300">
                      Delete
                    </button>
                    <button class="bg-gray-800 hover:bg-green-600 text-xs px-3 py-1 rounded-full transition-colors duration-300">
                      DELIVER
                    </button>
                  </td>
                </tr>

                <tr class="border-t border-gray-700">
                  <td class="py-3">21</td>
                  <td class="py-3">Obaidul</td>
                  <td class="py-3">5</td>
                  <td class="py-3">123123</td>
                  <td class="py-3">
                    <span class="text-red-500">PENDING</span>
                  </td>
                  <td class="py-3">
                    <button class="bg-gray-800 hover:bg-red-600 text-xs px-3 py-1 rounded-full mr-1 transition-colors duration-300">
                      Delete
                    </button>
                    <button class="bg-gray-800 hover:bg-green-600 text-xs px-3 py-1 rounded-full transition-colors duration-300">
                      DELIVER
                    </button>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>;
