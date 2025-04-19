
const equipamentos = {
  "CO₂ 6kg": 23.600,
  "CO₂ 4kg": 12.680,
  "ABC 12kg": 17.060,
  "BC 12kg": 17.060,
  "ABC 8kg": 11.300,
  "BC 8kg": 11.300,
  "ABC 6kg": 8.920,
  "BC 6kg": 8.920,
  "ABC 4kg": 6.360,
  "BC 4kg": 6.360,
  "ABC 20kg": 30.100,
  "BC 20kg": 30.100,
  "AP 10L": 14.180,
  "Mangueira 2.1/2 - 15m": 10.780,
  "Mangueira 1.1/2 - 15m": 5.260,
  "Mangueira 2.1/2 - 20m": 10.780,
  "Mangueira 1.1/2 - 20m": 5.260
};

const container = document.getElementById('itens');

Object.keys(equipamentos).forEach(nome => {
  const div = document.createElement('div');
  div.className = 'item';
  div.innerHTML = `
    <label for="${nome}">${nome} (${equipamentos[nome]} kg)</label>
    <input type="number" min="0" value="0" id="${nome}" />
  `;
  container.appendChild(div);
});

function calcular() {
  let total = 0;
  Object.keys(equipamentos).forEach(nome => {
    const qtd = parseInt(document.getElementById(nome).value) || 0;
    total += qtd * equipamentos[nome];
  });

  const limite = parseFloat(document.getElementById('limite').value);
  const resultadoDiv = document.getElementById('resultado');

  let mensagem = `Peso total: ${total.toFixed(2)} kg`;
  if (limite && total > limite) {
    mensagem += `\n⚠️ Excedeu o limite de ${limite} kg!`;
  }

  resultadoDiv.innerText = mensagem;
}
