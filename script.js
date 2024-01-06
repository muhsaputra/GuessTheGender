// Api
const base_api = "https://api.genderize.io";

function showResult(name, gender, probability) {
  const predictionElement = document.querySelector(".prediction");
  const probabilityPercentage = probability * 100;
  let genderDecode;

  if (gender == "male") {
    genderDecode = "Laki-laki";
  } else if (gender == "female") {
    genderDecode = "Perempuan";
  } else {
    genderDecode = "Tidak diketahui";
  }

  const predictionText = `${name} Kemungkinan Gender Kamu ${probabilityPercentage}% adalah ${genderDecode} `;
  predictionElement.textContent = predictionText;
}

async function predict(event) {
  if (event.key == "Enter") {
    const name = event.target.value;
    const queryUrl = `${base_api}/?name=${name}&country_id=ID`;
    const response = await fetch(queryUrl);
    const data = await response.json();
    showResult(data.name, data.gender, data.probability);
  }
}
