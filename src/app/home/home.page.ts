import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  nombre= "Juan Perez";
  edad= "32";
  // console.log("Hola, " + `${nombre} ${edad}`);

  calculate(altura,base){
    

     var area = (base * altura)/2;
     var perimetro = (base + altura)*2;
     
     
    console.log("Estoy en el metodo calculate del TS");
    console.log("El area es: "+area);
    console.log("El perimetro es: "+perimetro );
  }
  //           var area, base, altura, perimetro;
  //           base = prompt("Coloca la base");
  //           altura = prompt("Coloca la altura");

  //           base = parseInt(base);
  //           altura = parseInt(altura);
  //           area = (base * altura)/2;
  //           perimetro = (base + altura)*2;
            

  //           alert("El area del cuadrado es:" +area);
  //           alert("El perimetro del cuadrado es:" +perimetro);

      }