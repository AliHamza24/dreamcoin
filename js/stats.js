async function getPriceData() {
  let res = await fetch("https://api.dex.guru/v1/tokens/0x3504de9e61fdff2fc70f5cc8a6d1ee493434c1aa-bsc");
  let data = res.json()
  return data
}

async function getSupplyData() {
  let res = await fetch("https://api.bscscan.com/api?module=account&action=tokenbalance&contractaddress=0x3504de9e61fdff2fc70f5cc8a6d1ee493434c1aa&address=0x0000000000000000000000000000000000000001&tag=latest&apikey=428F24U49DPCZXAG41HUV52GREUXXI8ERR");
  let data = res.json()
  return data
}

async function calculatePriceSupplyAndDisplay() {
  const priceData = 0.01
  let price = parseFloat(priceData.priceUSD).toFixed(14)

  const totalSupply = 1000000000000
  const supplyData = 1000000000
  const burnedSupply = supplyData.result.slice(0, 15)
  const supply = totalSupply - burnedSupply 
  displayStatsData(price, supply)
}

function displayStatsData(coinPrice, coinSupply) {
  document.getElementById("coin-price").innerText = coinPrice
  document.getElementById("coin-supply").innerText = coinSupply
  let MC = coinPrice * coinSupply
  document.getElementById("MC").innerText = MC.toFixed(0)
}

calculatePriceSupplyAndDisplay();
