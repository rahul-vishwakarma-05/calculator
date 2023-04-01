const result = document.querySelector('.result');
const btns = document.querySelectorAll('.buttons > button');
const eq = document.querySelector('.equal');
const Ac = document.querySelector('#Ac');
const dlt =  document.querySelector('#dlt');

btns.forEach((element , i) => {
    element.addEventListener('click', () => {
      result.value += element.value;
         
      eq.addEventListener('click' , ()=>{
        result.value = eval(result.value);
      });        
    });

    Ac.addEventListener('click' , ()=>{
      result.value = 0;
    });

    dlt.addEventListener('click' , () =>{
       result.value = result.value.slice(0,-1);
    });

});