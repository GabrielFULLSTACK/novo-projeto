// function abrir_menu()
// {
     
     
//       if(items.style.display == 'block'){
//          items.style.display = 'none'
//       }
//       else  { 
//          items.style.display = 'block'
//      }


// }

const fundo = color => {
  const body =  document.querySelector('body');
  const dark = document.querySelector('button#dark');
  const claro = document.querySelector('button#claro')
  if (color == 'dark') {
   body.style = 'background-color:rgb(59, 57, 57);; color: white'
   dark.style.display = 'none';
   claro.style.display = 'block'
 
  }
else if(color=='whiite'){
  body.style = 'background-color:;white color:black ';
  dark.style.display = 'block';
  claro.style.display = 'none'
 }
}



function color(cores) {
    document.querySelector('body').style.backgroundImage = 'black'
   
   }
   










