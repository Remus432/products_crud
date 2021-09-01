export function formValidation({ sku, name, price, productType, property }) {
  if (!sku || !name || !price || !productType || Object.keys(property).length === 0) {
    return "empty"
  }

  if (isNaN(property.weight) && property.weight !== undefined) return "invalid"
  if (isNaN(property.size) && property.size !== undefined) return "invalid"
  if (isNaN(property.height) && property.height !== undefined) return "invalid"
  if (isNaN(property.width) && property.width !== undefined) return "invalid"
  if (isNaN(property.length) && property.length !== undefined) return "invalid"
  if (isNaN(property.price) && property.price !== undefined) return "invalid"

  return true
}

export function errMsg(err) {
  if (err === "invalid") return "Please, provide the data of indicated type"
  if (err === "empty") return "Please, submit required data"
}

export function sendData(state) {
  return fetch("http://localhost:3001/add.php", {
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
  return fetch("http://localhost:3001/delete.php", {
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