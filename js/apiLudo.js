(function() {
    //Inicializamos con el constructor las variables a usar
    self.Tablero = function(x, y, ac, al) {
            this.x = x;
            this.y = y;
            this.ac = ac;
            this.al = al;
            this.activo = [];
            this.posicionX = [];
            this.posicionY = [];
            this.sitio = [];
            this.movetoX = [];
            this.movetoY = [];
            this.linetoX = [];
            this.linetoY = [];
            this.res = " ";
            for (var i = 0; i <= 32; i++) {
                this.activo[i] = false;
            }

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


                //Creamos las 4 fichas azules
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

                    var cuadrosChicos=[0,40,80,160,200,240,280,320,360,400,440,480,520,560];
                    var acumuladorX = 0;
                    var acumuladorY = 240;

                    for(var j=0;j < 3;j++){

                        for(var i=0;i<15;i++){
                          if((acumuladorX>=40)&&(acumuladorX<=240)&&(acumuladorY==280)||(acumuladorX==40)&&(acumuladorY==240)){
                            ctx.fillStyle = "blue";
                          }else if((acumuladorX>=320)&&(acumuladorX<=520)&&(acumuladorY==280)||(acumuladorY==320)&&(acumuladorX==520)){
                            ctx.fillStyle = "green";
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
                      for(var i=0;i<7;i++){
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

                    }

            }

        } //finalizamos el prototipo
})();



var tablero = new Tablero(0, 0, 600, 600);
