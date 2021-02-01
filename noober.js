async function pageLoaded() {
  let response = await fetch('https://kiei451.com/api/rides.json')
  let json = await response.json()

  // writes the returned JSON to the console
  console.dir(json)

  // 🔧 Function to write out level of service 🔧
  function renderLevelOfService (levelOfService) {
    outputElement.insertAdjacentHTML('beforeend', `
    <h1 class="inline-block mt-8 px-4 py-2 rounded-xl text-2xl bg-clip-text text-transparent bg-gradient-to-r from-blue-500 to-purple-500">
    <i class="fas fa-car-side"></i>
    <span>${levelOfService}</span>
    </h1>
  `)
  }

  // 🔧 🚕 Function to write out normal ride (Pool / X / XL) 🔧 🚕
  function renderRide (ride) {
    outputElement.insertAdjacentHTML('beforeend', `
    <div class="border-4 border-gray-900 p-4 my-4 text-left">
    <div class="flex">
      <div class="w-1/2">
        <h2 class="text-2xl py-1">${ride.passengerDetails.first} ${ride.passengerDetails.last}</h2>
        <p class="font-bold text-gray-600">${ride.passengerDetails.phoneNumber}</p>
      </div>
      <div class="w-1/2 text-right">
        <span class="rounded-xl bg-gray-600 text-white p-2">
        ${ride.numberOfPassengers} passengers
        </span>
      </div>
    </div>
    <div class="mt-4 flex">
      <div class="w-1/2">
        <div class="text-sm font-bold text-gray-600">PICKUP</div>
        <p>${ride.pickupLocation.address}</p>
        <p>${ride.pickupLocation.city}, ${ride.pickupLocation.state} ${ride.pickupLocation.zip}</p>
      </div>
      <div class="w-1/2">
        <div class="text-sm font-bold text-gray-600">DROPOFF</div>
        <p>${ride.dropoffLocation.address}</p>
        <p>${ride.dropoffLocation.city}, ${ride.dropoffLocation.state} ${ride.dropoffLocation.zip}</p>
      </div>
    </div>
    `)

  }

  // 🔧 🟪 Function to write out Noober Purple ride 🔧 🟪
  function renderPurple (ride) {
    outputElement.insertAdjacentHTML('beforeend', `
    <div class="border-4 border-purple-500 p-4 my-4 text-left">
    <div class="flex">
      <div class="w-1/2">
        <h2 class="text-2xl py-1">${ride.passengerDetails.first} ${ride.passengerDetails.last}</h2>
        <p class="font-bold text-gray-600">${ride.passengerDetails.phoneNumber}</p>
      </div>
      <div class="w-1/2 text-right">
        <span class="rounded-xl bg-purple-600 text-white p-2">
        ${ride.numberOfPassengers} passengers
        </span>
      </div>
    </div>
    <div class="mt-4 flex">
      <div class="w-1/2">
        <div class="text-sm font-bold text-gray-600">PICKUP</div>
        <p>${ride.pickupLocation.address}</p>
        <p>${ride.pickupLocation.city}, ${ride.pickupLocation.state} ${ride.pickupLocation.zip}</p>
      </div>
      <div class="w-1/2">
        <div class="text-sm font-bold text-gray-600">DROPOFF</div>
        <p>${ride.dropoffLocation.address}</p>
        <p>${ride.dropoffLocation.city}, ${ride.dropoffLocation.state} ${ride.dropoffLocation.zip}</p>
      </div>
    </div>
  </div>
  `)
  }
  
// MAIN CODE BEGINS HERE
  // find the HTML element on the page with the class name `ride`
let outputElement = document.querySelector('.rides')

  // 🔥 start here: write code to loop through the rides
  for (let i=0; i<json.length; i++) {
    let ride = json[i]

    // 💥 Outputs for rides with >1 length (Noober Pool)
    if (ride.length > 1) {
      // 💧 Print 'Noober Pool' as level of service
      levelOfService = "Noober Pool"
      renderLevelOfService(levelOfService)    
      // 💧 Start for loop to print ride details for all legs of Pool ride
      for (j=0; j<ride.length; j++) {
        renderRide(ride[j])
      }
    }

    // 💥 Outputs for rides with = 1 length (Noober X / Noober XL / Noober Purple)
    else if (ride.length = 1) {

      // 🟪 print "Noober Purple" if purpleRequested = True
      if (ride[0].purpleRequested == true) {
        levelOfService = "Noober Purple"
        renderLevelOfService(levelOfService)
        renderPurple(ride[0])
      }

      // ❎❗ print "Noober XL" if numberOfPassengers > 3
      else if (ride[0].numberOfPassengers > 3) {
        levelOfService = "Noober XL"
        renderLevelOfService(levelOfService)
        renderRide(ride[0])      
      }

      // ❌ print 'Noober X" for all other single request rides
      else {
        levelOfService = "Noober X"
        renderLevelOfService(levelOfService)
        renderRide(ride[0])
      }   
    }
  }  // End original loop  
}

window.addEventListener('DOMContentLoaded', pageLoaded)