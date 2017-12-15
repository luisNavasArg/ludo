(function() {
    //Inicializamos con el constructor las variables a usar
    self.Tablero = function() {

        /*son 56 puntos*/

        this.caminoAzul = [];
        this.coordenadasCamino = ["220, 340", "180,340", "140,340", "100,340", "60,340", "20,340", "20,300", "20,260", "60,260", "100,260", "140,260", "180,260", "220,260"];

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
                if (this.lanzarDado() == 1 || this.lanzarDado() == 6) {
                    console.log("Salimos");
                }*/
               
                var luisN = setInterval(this.lanzarDado(), 1000);
                for (var z = 0; z < this.coordenadasCamino.length; z++) {
                    arregloDeSubCoor = this.coordenadasCamino[z].split(',');
                    var a = arregloDeSubCoor[0];
                    var b = arregloDeSubCoor[1];
                    this.crearZonasJuego(a,b,"white");

                }
                
        },

            lanzarDado: function() {
        for (var p = 0; p < 10; p++) {
            var numero = parseInt(Math.random() * 6) + 1;
            console.log(numero);

            var luis = document.getElementById('etiqueta');
            luis.innerHTML = numero;

        }
        return numero;


    },
            
            moviendoJugadores: function (valuex,valuey) {
                

            },
             moverFicha:function (event) {
        var x = event.clientX - 300;
        var y = event.clientY - 30;
        if ((x >= 0 && x <= 39) && (y>= 240 && y<=279)){
            x = 20;
        
            y = 260;
        }
        for (var d = 0; d < this.coordenadasCamino.length; d++){
           
            if (this.coordenadasCamino[d] == x + " , " + y) {
                this.crearJugadores(x, y, "verde");

            }
        }
        arregloDeSubCadenas = this.coordenadasCamino[0].split(',' );
        alert(parseInt(arregloDeSubCadenas[0]) +90);
        

    },

            crearZonasJuego: function (valorx, valory, colorf) {
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
