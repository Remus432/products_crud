export function formValidation({ sku, name, price, productType, property }) {
  if (!sku || !name || !price || !productType || !property) {
    return "empty"
  }

  if (isNaN(property.size) || isNaN(property.weight) || isNaN(property.height) || isNaN(property.width) || isNaN(property.length)) {
    return "invalid"
  }

  return true
}

export function errMsg(err) {
  if (err === "invalid") return "Please, provide the data of indicated type"
  if (err === "empty") return "Please, submit required data"
}

export function sendData(state) {
  return fetch("http://localhost:3001/index.php", {
      method: "POST",
      mode: "no-cors",
      credentials: "omit",
      headers: { 
        'Content-Type': 'application/json',
        "Access-Control-Allow-Origin": "*"
      },
      body: JSON.stringify({
        ...state, property: JSON.stringify(state.property)
      })
    })
}

export function deleteData(list) {
  return fetch("http://localhost:3001/index.php", {
      method: "POST",
      mode: "no-cors",
      credentials: "omit",
      headers: { 
        'Content-Type': 'application/json',
        "Access-Control-Allow-Origin": "*"
      },
      body: JSON.stringify(list)
    })
}