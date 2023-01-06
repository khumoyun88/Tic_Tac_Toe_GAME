
// let son2;
// let html_son2;
// const start2 = (value) => {
//     son2 = value
//     if (son2 == 1) {
//         html_son2 = "X"
//     }else {
//         html_son2 = 0
//     }
//     document.getElementById("modal1").style.display = "";
// }








let son;
let html_son;
const start = (value) => {
    son = value
    if (son == 1) {
        html_son = "X"
    }else {
        html_son = 0
    }
    document.getElementById("modal1").style.display = "block";
    
}
const func = (e) => {
    if (son == 1){
        document.getElementById(e).value = 'X'
        document.getElementById(e).disabled=true
        
        son = 0;
    }
    else{
        document.getElementById(e).value = '0'
        document.getElementById(e).disabled=true
        
        son = 1;
    }
}

let k= () =>{
    let b1=document.querySelector('#b1'),
        b2=document.querySelector('#b2'),
        b3=document.querySelector('#b3'),
        b4=document.querySelector('#b4'),
        b5=document.querySelector('#b5'),
        b6=document.querySelector('#b6'),
        b7=document.querySelector('#b7'),
        b8=document.querySelector('#b8'),
        b9=document.querySelector('#b9'),
        modal1=document.querySelector('.modal1'),
        container=document.querySelector('.container');
        

        if (
        ((b1.value == 'X') && (b2.value == 'X') && (b3.value == 'X'))||
        ((b4.value == 'X') && (b5.value == 'X') && (b6.value == 'X'))||
        ((b7.value == 'X') && (b8.value == 'X') && (b9.value == 'X'))||
        ((b1.value == 'X') && (b4.value == 'X') && (b7.value == 'X'))||
        ((b2.value == 'X') && (b5.value == 'X') && (b8.value == 'X'))||
        ((b3.value == 'X') && (b6.value == 'X') && (b9.value == 'X'))||
        ((b1.value == 'X') && (b5.value == 'X') && (b9.value == 'X'))||
        ((b3.value == 'X') && (b5.value == 'X') && (b7.value == 'X')) 
        ){
        modal1.style.display='block'
        container.style.display='block'
    }else if(
        ((b1.value == '0') && (b2.value == '0') && (b3.value == '0'))||
        ((b4.value == '0') && (b5.value == '0') && (b6.value == '0'))||
        ((b7.value == '0') && (b8.value == '0') && (b9.value == '0'))||
        ((b1.value == '0') && (b4.value == '0') && (b7.value == '0'))||
        ((b2.value == '0') && (b5.value == '0') && (b8.value == '0'))||
        ((b3.value == '0') && (b6.value == '0') && (b9.value == '0'))||
        ((b1.value == '0') && (b5.value == '0') && (b9.value == '0'))||
        ((b3.value == '0') && (b5.value == '0') && (b7.value == '0'))
    ){
    
    modal1.style.display='block'
    container.style.display='block'
    } else if (
    (b1.value == 'X' || b1.value == '0') && 
    (b2.value == 'X' || b2.value == '0') &&
    (b3.value == 'X' || b3.value == '0') &&
    (b4.value == 'X' || b4.value == '0') &&
    (b5.value == 'X' || b5.value == '0') && 
    (b6.value == 'X' || b6.value == '0') &&
    (b7.value == 'X' || b7.value == '0') &&
    (b8.value == 'X' || b8.value == '0') &&
    (b9.value == 'X' || b9.value == '0')) {
        alert('toe')
}
 
}

  

   
        
        
        

          
        
      






























            
       



        

   

      


           
  






