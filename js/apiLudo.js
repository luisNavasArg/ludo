(function() {
    //Inicializamos con el constructor las variables a usar
    self.Tablero = function() {

        /*son 56 puntos*/
            

            this.zonaAzulx = [[20, 60, 100, 140, 180, 220], [220, 180, 140, 100, 60, 20], [20, 60, 100, 140, 180, 220]];
            this.zonaAzuly = [260, 300, 340];


            this.zonaAmax = [260, 300, 340];
            this.zonaAmay = [[20, 60, 100, 140, 180, 220], [220, 180, 140, 100, 60, 20], [20, 60, 100, 140, 180, 220]];

            this.zonaVerdx = [[380, 420, 460, 500, 540, 580], [580, 540, 500, 460, 420, 380], [380, 420, 460, 500, 540, 580]];
            this.zonaVerdy = [260, 300, 340];

            this.zonaRojax = [260, 300, 340];
            this.zonaRojay = [[580, 540, 500, 460, 420, 380], [380, 420, 460, 500, 540, 580], [580, 540, 500, 460, 420, 380]];


        }, //finalizamos el constructor y comenzamos el prototipo
        self.Tablero.prototype = {
            dibujarTablero: function() {
                //capturo el elemento canvas por medio de su id
                var canvas = document.getElementById('canvas');
                ctx = canvas.getContext("2d");
                //le asigno color con el estilo azul
                ctx.fillStyle = "LightBlue";
                //dibujo un rectangulo en la posición x, y con un ancho y alto
                ctx.rect(this.x, this.y, this.ac, this.al);
                //relleno el rectangulo
                ctx.fill();
                ctx.lineWidth = 2;

                ctx.stroke();


                //Creamos las zonas de las fichas
                ctx.fillStyle = "blue";
                ctx.lineWidth = 0;

                for (var i = 0; i < 4; i++) {
                    if(i==0){
                        ctx.beginPath();
                        ctx.rect(0,0,240,240);
                        ctx.fill();
                        ctx.stroke();
                    } else if(i==1){
                        ctx.fillStyle = "yellow";
                        ctx.beginPath();
                        ctx.rect(360,0,240,240);
                        ctx.fill();
                        ctx.stroke();
                    } else if(i==2){
                        ctx.fillStyle = "red";
                        ctx.beginPath();
                        ctx.rect(0,360,240,240);
                        ctx.fill();
                        ctx.stroke();
                    }else{
                        ctx.fillStyle = "green";
                        ctx.beginPath();
                        ctx.rect(360,360,240,240);
                        ctx.fill();
                        ctx.stroke();
                    }
                  }


                /*
                
                    var c=[0,40,80,160,200,240,280,320,360,400,440,480,520,560];
                    var acumuladorX = 0;
                    var acumuladorY = 240;

                    for(var j=0;j < 3;j++){

                        for(var i=0;i<15;i++){
                          if((acumuladorX>=40)&&(acumuladorX<=200)&&(acumuladorY==280)||
                          (acumuladorX==40)&&(acumuladorY==240)){
                            ctx.fillStyle = "blue";
                          }else if((acumuladorX>=360)&&(acumuladorX<=520)&&(acumuladorY==280)||(acumuladorY==320)&&(acumuladorX==520)){
                            ctx.fillStyle = "green";
                          }else if((acumuladorX==240)&&(acumuladorY==240)||(acumuladorX==240)&&(acumuladorY==280)||
                          (acumuladorX==280)&&(acumuladorY==240)|| (acumuladorX==280)&&(acumuladorY==280)||
                          (acumuladorX==320)&&(acumuladorY==240)||(acumuladorX==320)&&(acumuladorY==280)){
                            ctx.fillStyle = "grey";
                          }else{
                            ctx.fillStyle = "white";
                          }

                        ctx.beginPath();
                        ctx.rect(acumuladorX,acumuladorY,40,40);
                        ctx.fill();
                        ctx.stroke();
                        acumuladorX=acumuladorX + 40;

                    }
                    acumuladorY=acumuladorY + 40;
                    acumuladorX=0;
                    }
                    acumuladorX = 240;
                    acumuladorY = 0;
                    for(var x=0;x<3;x++){
                      for(var i=0;i<6;i++){
                        if((acumuladorY>=40)&&(acumuladorY<=440)&&(acumuladorX==280)||((acumuladorX==320)&&(acumuladorY==40))){
                          ctx.fillStyle = "yellow";
                        }else{
                          ctx.fillStyle = "white";
                        }

                      ctx.beginPath();
                      ctx.rect(acumuladorX,acumuladorY,40,40);
                      ctx.fill();
                      ctx.stroke();
                      acumuladorY=acumuladorY + 40;

                  }
                  acumuladorX=acumuladorX + 40;
                  acumuladorY = 0;

                    }
                    acumuladorX = 240;
                    acumuladorY = 320;
                    for(var x=0;x<3;x++){
                      for(var i=0;i<7;i++){
                        if((acumuladorY>=360)&&(acumuladorY<=520)&&(acumuladorX==280)||(acumuladorX==240)&&(acumuladorY==520)){
                          ctx.fillStyle = "red";
                        }else if((acumuladorX>=240)&&(acumuladorX<=320)&&(acumuladorY==320)||(acumuladorX==280)&&(acumuladorY==320)){
                          ctx.fillStyle = "grey";
                        }else {
                          ctx.fillStyle = "white";


                        }
                      ctx.beginPath();
                      ctx.rect(acumuladorX,acumuladorY,40,40);
                      ctx.fill();
                      ctx.stroke();
                      acumuladorY=acumuladorY + 40;

                  }
                  acumuladorX=acumuladorX + 40;
                  acumuladorY = 320;

                    }*/

              // this.moviendoJugadores(this.zonaVerdx[0][0], this.zonaVerdy[0]);
                
                //this.crearJugadores(this.zonaAmax[0], this.zonaAmay[0][0]);

                for (var cx = 0; cx < this.zonaAmax.length; cx++) {
                    for (var cy = 0; cy < this.zonaAmay.length + 3; cy++){
                        this.crearZonasJuego(this.zonaAmax[cx], this.zonaAmay[cx][cy], "white");
                        this.crearZonasJuego(this.zonaRojax[cx], this.zonaRojay[cx][cy], "white");
                        this.crearZonasJuego(this.zonaVerdx[cx][cy], this.zonaVerdy[cx], "white");
                        this.crearZonasJuego(this.zonaAzulx[cx][cy], this.zonaAzuly[cx], "white");

                      
                    }
                }

                this.crearJugadores(60, this.zonaAmay[2][4], "green");
                    
               

        },
            
            moviendoJugadores: function (valuex,valuey) {
                

            }, crearZonasJuego: function (valorx,valory,colorf) {
                ctx.fillStyle = colorf;
                ctx.beginPath();
                ctx.rect(valorx - 20, valory - 20, 40, 40);
                ctx.fill();
                ctx.stroke();

            },
            crearJugadores: function(valorX, valorY, coloR){

                var c = document.getElementById("canvas");
                var ctx = c.getContext("2d");
                ctx.lineWidth = 4;
                ctx.fillStyle = coloR;
                ctx.beginPath();
                ctx.arc(valorX,valorY, 16, 0, 2 * Math.PI);
                ctx.fill();
                ctx.stroke();
            }
                            

        } //finalizamos el prototipo
})();




var tablero = new Tablero();


//tablero.crearJugadores();
