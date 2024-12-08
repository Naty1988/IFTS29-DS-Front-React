 
                            

function addTwo(a, b) {

    console.log(a + b);

}

function addThree(a, b, c) {

    console.log(a + b + c);

}

//exportar ambas funciones como exportaciones con nombre
 
                            

export function addTwo(a, b) {

    console.log(a + b);

}

export function addThree(a, b, c) {

    console.log(a + b + c);

}


                        
//Otra forma de exportar
 
                            

function addTwo(a, b) {

    console.log(a + b);

}

function addThree(a, b, c) {

    console.log(a + b + c);

}

export { addTwo, addThree };


                        
                        