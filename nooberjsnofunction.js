async function pageLoaded() {
    let response = await fetch('https://kiei451.com/api/rides.json')
    let json = await response.json()
  
    // writes the returned JSON to the console
    console.dir(json)
  
    // find the HTML element on the page with the class name `ride`
  let outputElement = document.querySelector('.rides')
  
    // 🔥 start here: write code to loop through the rides
    for (let i=0; i<json.length; i++) {
      let trip = json[i]
  
      // 💥 Outputs for trips with >1 length (Noober Pool)
      if (trip.length > 1) {
  
        // 💧 Print 'Noober Pool' as level of service
        levelOfService = "Noober Pool"
        outputElement.insertAdjacentHTML('beforeend', `
          <h1 class="inline-block mt-8 px-4 py-2 rounded-xl text-2xl bg-clip-text text-transparent bg-gradient-to-r from-blue-500 to-purple-500">
          <i class="fas fa-car-side"></i>
          <span>${levelOfService}</span>
          </h1>
        `)
        
        // 💧 Start for loop to print ride details for all legs of Pool ride
        for (j=0; j<trip.length; j++) {
          outputElement.insertAdjacentHTML('beforeend', `
          <div class="border-4 border-gray-900 p-4 my-4 text-left">
          <div class="flex">
            <div class="w-1/2">
              <h2 class="text-2xl py-1">${trip[j].passengerDetails.first} ${trip[j].passengerDetails.last}</h2>
              <p class="font-bold text-gray-600">${trip[j].passengerDetails.phoneNumber}</p>
            </div>
            <div class="w-1/2 text-right">
              <span class="rounded-xl bg-gray-600 text-white p-2">
              ${trip[j].numberOfPassengers} passengers
              </span>
            </div>
          </div>
          <div class="mt-4 flex">
            <div class="w-1/2">
              <div class="text-sm font-bold text-gray-600">PICKUP</div>
              <p>${trip[j].pickupLocation.address}</p>
              <p>${trip[j].pickupLocation.city}, ${trip[j].pickupLocation.state} ${trip[j].pickupLocation.zip}</p>
            </div>
            <div class="w-1/2">
              <div class="text-sm font-bold text-gray-600">DROPOFF</div>
              <p>${trip[j].dropoffLocation.address}</p>
              <p>${trip[j].dropoffLocation.city}, ${trip[j].dropoffLocation.state} ${trip[j].dropoffLocation.zip}</p>
            </div>
          </div>
          `)
        }
      }
  
      // 💥 Outputs for trips with = 1 length (Noober X / Noober XL / Noober Purple)
      else if (trip.length = 1) {
  
        // 🟪 print "Noober Purple" if purpleRequested = True
        if (trip[0].purpleRequested == true) {
          levelOfService = "Noober Purple"
          outputElement.insertAdjacentHTML('beforeend', `
          <h1 class="inline-block mt-8 px-4 py-2 rounded-xl text-2xl bg-clip-text text-transparent bg-gradient-to-r from-blue-500 to-purple-500">
          <i class="fas fa-car-side"></i>
          <span>${levelOfService}</span>
          </h1>
        `)
        // 🟪 Print ride details
          outputElement.insertAdjacentHTML('beforeend', `
          <div class="border-4 border-purple-500 p-4 my-4 text-left">
          <div class="flex">
            <div class="w-1/2">
              <h2 class="text-2xl py-1">${trip[0].passengerDetails.first} ${trip[0].passengerDetails.last}</h2>
              <p class="font-bold text-gray-600">${trip[0].passengerDetails.phoneNumber}</p>
            </div>
            <div class="w-1/2 text-right">
              <span class="rounded-xl bg-purple-600 text-white p-2">
              ${trip[0].numberOfPassengers} passengers
              </span>
            </div>
          </div>
          <div class="mt-4 flex">
            <div class="w-1/2">
              <div class="text-sm font-bold text-gray-600">PICKUP</div>
              <p>${trip[0].pickupLocation.address}</p>
              <p>${trip[0].pickupLocation.city}, ${trip[0].pickupLocation.state} ${trip[0].pickupLocation.zip}</p>
            </div>
            <div class="w-1/2">
              <div class="text-sm font-bold text-gray-600">DROPOFF</div>
              <p>${trip[0].dropoffLocation.address}</p>
              <p>${trip[0].dropoffLocation.city}, ${trip[0].dropoffLocation.state} ${trip[0].dropoffLocation.zip}</p>
            </div>
          </div>
        </div>
        `)
        }
  
        // ❎❗ print "Noober XL" if numberOfPassengers > 3
        else if (trip[0].numberOfPassengers > 3) {
          levelOfService = "Noober XL"
          outputElement.insertAdjacentHTML('beforeend', `
          <h1 class="inline-block mt-8 px-4 py-2 rounded-xl text-2xl bg-clip-text text-transparent bg-gradient-to-r from-blue-500 to-purple-500">
          <i class="fas fa-car-side"></i>
          <span>${levelOfService}</span>
          </h1>
        `)
          //❎❗ Print ride details
          outputElement.insertAdjacentHTML('beforeend', `
          <div class="border-4 border-gray-900 p-4 my-4 text-left">
          <div class="flex">
            <div class="w-1/2">
              <h2 class="text-2xl py-1">${trip[0].passengerDetails.first} ${trip[0].passengerDetails.last}</h2>
              <p class="font-bold text-gray-600">${trip[0].passengerDetails.phoneNumber}</p>
            </div>
            <div class="w-1/2 text-right">
              <span class="rounded-xl bg-gray-600 text-white p-2">
              ${trip[0].numberOfPassengers} passengers
              </span>
            </div>
          </div>
          <div class="mt-4 flex">
            <div class="w-1/2">
              <div class="text-sm font-bold text-gray-600">PICKUP</div>
              <p>${trip[0].pickupLocation.address}</p>
              <p>${trip[0].pickupLocation.city}, ${trip[0].pickupLocation.state} ${trip[0].pickupLocation.zip}</p>
            </div>
            <div class="w-1/2">
              <div class="text-sm font-bold text-gray-600">DROPOFF</div>
              <p>${trip[0].dropoffLocation.address}</p>
              <p>${trip[0].dropoffLocation.city}, ${trip[0].dropoffLocation.state} ${trip[0].dropoffLocation.zip}</p>
            </div>
          </div>
          `)      
        }
  
        // ❌ print 'Noober X" for all other single request trips
        else {
          levelOfService = "Noober X"
          outputElement.insertAdjacentHTML('beforeend', `
          <h1 class="inline-block mt-8 px-4 py-2 rounded-xl text-2xl bg-clip-text text-transparent bg-gradient-to-r from-blue-500 to-purple-500">
          <i class="fas fa-car-side"></i>
          <span>${levelOfService}</span>
          </h1>
        `)
        // ❌ print 'Noober X" details
          outputElement.insertAdjacentHTML('beforeend', `
          <div class="border-4 border-gray-900 p-4 my-4 text-left">
          <div class="flex">
            <div class="w-1/2">
              <h2 class="text-2xl py-1">${trip[0].passengerDetails.first} ${trip[0].passengerDetails.last}</h2>
              <p class="font-bold text-gray-600">${trip[0].passengerDetails.phoneNumber}</p>
            </div>
            <div class="w-1/2 text-right">
              <span class="rounded-xl bg-gray-600 text-white p-2">
              ${trip[0].numberOfPassengers} passengers
              </span>
            </div>
          </div>
          <div class="mt-4 flex">
            <div class="w-1/2">
              <div class="text-sm font-bold text-gray-600">PICKUP</div>
              <p>${trip[0].pickupLocation.address}</p>
              <p>${trip[0].pickupLocation.city}, ${trip[0].pickupLocation.state} ${trip[0].pickupLocation.zip}</p>
            </div>
            <div class="w-1/2">
              <div class="text-sm font-bold text-gray-600">DROPOFF</div>
              <p>${trip[0].dropoffLocation.address}</p>
              <p>${trip[0].dropoffLocation.city}, ${trip[0].dropoffLocation.state} ${trip[0].dropoffLocation.zip}</p>
            </div>
          </div>
          `) 
        }
  
  
        
  
      }
  
    }  // End original for loop  
  }
  
  window.addEventListener('DOMContentLoaded', pageLoaded)