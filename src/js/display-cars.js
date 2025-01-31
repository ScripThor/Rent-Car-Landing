let cars = []
let filteredCars = []

// Функция для загрузки данных с сервера
async function loadCars() {
  try {
    const response = await fetch('http://localhost:5000/api/cars')
    if (!response.ok) {
      throw new Error(`Ошибка загрузки данных: ${response.statusText}`)
    }
    cars = await response.json() // Присваиваем полученные данные
    filteredCars = [...cars] // Делаем копию для фильтрации
    displayCars() // Отображение машин
  } catch (error) {
    console.error(error)
    document.getElementById('carList').innerHTML =
      'Ошибка загрузки данных. Попробуйте позже.'
  }
}

function displayCars() {
  const carList = document.getElementById('carList')
  carList.innerHTML = ''

  filteredCars.forEach((car) => {
    const carDiv = document.createElement('div')
    carDiv.classList.add('car-card')

    if (!car.available) {
      carDiv.classList.add('disabled') // Если машина недоступна, добавляем класс
    }

    const carImage = document.createElement('img')
    carImage.src = car.image
    carImage.alt = car.model
    carImage.classList.add('car-image')

    const carModel = document.createElement('span')
    carModel.textContent = car.model
    carModel.classList.add('car-name')

    const carClass = document.createElement('span')
    carClass.textContent = `${car.carClass}`
    carClass.classList.add('car-class')

    const carInfo = document.createElement('ul')
    carInfo.classList.add('car-info')

    const seatsItem = document.createElement('li')
    seatsItem.textContent = `${car.seats_number}`
    seatsItem.classList.add('seats_number')
    carInfo.appendChild(seatsItem)

    const doorsItem = document.createElement('li')
    doorsItem.textContent = `${car.doors_number}`
    doorsItem.classList.add('doors_number')
    carInfo.appendChild(doorsItem)

    const transmissionItem = document.createElement('li')
    transmissionItem.textContent = `${car.transmission}`
    transmissionItem.classList.add('transmission')
    carInfo.appendChild(transmissionItem)

    const priceBlock = document.createElement('div')
    priceBlock.classList.add('price-block')

    const carPrice = document.createElement('span')
    carPrice.textContent = `${car.price}/сутки`
    carPrice.classList.add('car-price')

    const priceButton = document.createElement('button')
    priceButton.textContent = `Забронировать`
    priceButton.classList.add('price-button')
    priceButton.setAttribute('onclick', 'openModal()')

    const formTopMessage = document.getElementById('feedbackForm-message')
    priceButton.addEventListener('click', () => {
      if (!dateStart.value || !dateEnd.value) {
        formTopMessage.innerHTML = `Уточните свободную дату у менеджера для бронирования <strong>${car.model}</strong>`
        return
      }
      formTopMessage.innerHTML = `Бронирование автомобиля <strong>${car.model}</strong> с <strong>${dateStart.value}</strong> по <strong>${dateEnd.value}</strong>`
    })

    carDiv.appendChild(carModel)
    carDiv.appendChild(carClass)
    carDiv.appendChild(carImage)
    carDiv.appendChild(carInfo)
    carDiv.appendChild(priceBlock)
    priceBlock.appendChild(priceButton)
    priceBlock.appendChild(carPrice)

    carList.appendChild(carDiv)
  })
}

document.addEventListener('DOMContentLoaded', () => {
  loadCars().catch((error) => console.error('Ошибка при загрузке:', error))
})
