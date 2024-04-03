

const input1 = document.querySelector('#calcular1')
const input2 = document.querySelector('#calcular2')
const btn = document.querySelector('#btn_calular')
const pResult = document.querySelector('#result')


function btnOnclik() {
  const sumaInputs= input1.value + input2.value


  pResult.innerText = "Resultado de la suma es: "+  sumaInputs;

}