const form = document.getElementById('form_submit');


form.addEventListener('submit', function(e){
    e.preventDefault();

    const num1 = document.getElementById('campo1').value;
    const num2 = document.getElementById('campo2').value;

    if (num1 >= num2) {
        alert('Número 1 é maior que o numero 2, informe um número menor!');
    }else{ 
        alert('Tudo certo, parabéns!');
        }
   
})

console.log(form);
