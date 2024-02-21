//função para pegar os dados do json
const catchData = async () => {
  await fetch("./data.json").then((response) => {
    response.json().then((data) => {
      main(data);
    });
  });
};

catchData();

const main = async (data) => {
  const formatted = (value) => {
    return value.split("").sort().join("");
  };

  const objAnagramas = {};

  data.forEach((item) => {
    const response = item.str;
    const formattedWord = formatted(response);
    if (objAnagramas[formattedWord]) {
      objAnagramas[formattedWord].push(response);
    } else {
      objAnagramas[formattedWord] = [response];
    }
  });

  const resultado = [];
  for (const cont in objAnagramas) {
    if (objAnagramas.hasOwnProperty(cont)) {
      if (objAnagramas[cont].length > 1) {
        resultado.push({ anagramas: objAnagramas[cont] });
      }
    }
  }

  console.log(JSON.stringify(resultado, null, 2));
  return resultado;
};
