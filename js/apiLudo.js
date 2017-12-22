(function () {
    //Inicializamos con el constructor las variables a usar
    self.Tablero = function () {
        this.numero = 0;
        this.statusCoord = [52];
        this.statusCoordInicialAzu = [];
        this.statusCoordInicialAma = [false, false, false, false];
        this.statusCoordInicialVerd = [false, false, false, false];
        this.statusCoordInicialRojo = [false, false, false, false];
        this.zonaAzulxInicial = [60, 180];
        this.zonaAzulyInicial = [60, 180];
        this.zonaAmaxInicial = [420, 540];
        this.zonaAmayInicial = [60, 180];
        this.zonaVerdxInicial = [420, 540];
        this.zonaVerdyInicial = [540, 420];
        this.zonaRojaxInicial = [60, 180];
        this.zonaRojayInicial = [540, 420];
        this.contador = 0;
        for (var f = 0; f < this.statusCoord.length; f++) {
            this.statusCoord[f] = false;
        }
        this.numeroJugada = 0;
        /*Creamos un arreglo para entrara en cada color y para la ruta de todos*/
        this.caminoEntrada = ["60,300", "100,300", "140,300", "180,300", "220,300", "260,300",
            "300,60", "300,100", "300,140", "300,180", "300,220", "300,260",
            "340,300", "380,300", "420,300", "460,300", "500,300", "540,300",
            "300,340", "300,380", "300,420", "300,460", "300,500", "300,540"];
        this.coordenadasCamino = [ "20,260", "60,260", "100,260", "140,260", "180,260", "220,260",
            "260,220", "260,180", "260,140", "260,100", "260,60", "260,20", "300,20", "340,20", "340,60", "340,100", "340,140", "340,180", "340,220",
            "380,260", "420,260", "460,260", "500,260", "540,260", "580,260", "580,300", "580,340", "540,340", "500,340", "460,340", "420,340", "380,340",
            "340,380", "340,420", "340,460", "340,500", "340,540", "340,580",
            "300,580", "260,580", "260,540", "260,500", "260,460", "260,420", "260,380", "220, 340", "180,340", "140,340", "100,340", "60,340", "20,340", "20,300"];


    }, //finalizamos el constructor y comenzamos el prototipo
        self.Tablero.prototype = {
            dibujarTablero: function () {
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
                    if (i == 0) {
                        ctx.beginPath();
                        ctx.rect(0, 0, 240, 240);
                        ctx.fill();
                        ctx.stroke();
                    } else if (i == 1) {
                        ctx.fillStyle = "yellow";
                        ctx.beginPath();
                        ctx.rect(360, 0, 240, 240);
                        ctx.fill();
                        ctx.stroke();
                    } else if (i == 2) {
                        ctx.fillStyle = "red";
                        ctx.beginPath();
                        ctx.rect(0, 360, 240, 240);
                        ctx.fill();
                        ctx.stroke();
                    } else {
                        ctx.fillStyle = "green";
                        ctx.beginPath();
                        ctx.rect(360, 360, 240, 240);
                        ctx.fill();
                        ctx.stroke();
                    }
                }


                /*
                  if (this.lanzarDado() == 1 || this.lanzarDado() == 6) {
                      console.log("Salimos");
                  }*/

                //var luisN = setInterval(this.lanzarDado(), 1000);
                this.cantJugadores = parseInt(prompt("Introduce la cantidad de jugadores de 2 a 4"));
                this.turno = 0;
                this.botonActivo = document.getElementById('boton');
                this.botonActivo.value = "Juega Azul";
                for (var s = 0; s < 3; s++) {

                    this.botonActivo.style.backgroundColor = "blue";

                }






                if (this.cantJugadores == 2) {
                    for (var a = 0; a < 2; a++) {
                        for (b = 0; b < 2; b++) {
                            this.crearJugadores(this.zonaAzulxInicial[a], this.zonaAzulyInicial[b], "blue");
                            this.statusCoordInicialAzu.push(this.zonaAzulxInicial[a] + "," + this.zonaAzulyInicial[b]);
                            this.crearJugadores(this.zonaAmaxInicial[a], this.zonaAmayInicial[b], "yellow");
                        }
                    }

                    ctx.fillStyle = "black";
                    ctx.font = "10px Arial";
                    ctx.fillText(1, this.zonaAzulxInicial[0], this.zonaAzulyInicial[0]);
                    ctx.fillText(2, this.zonaAzulxInicial[0], this.zonaAzulyInicial[1]);
                    ctx.fillText(3, this.zonaAzulxInicial[1], this.zonaAzulyInicial[0]);
                    ctx.fillText(4, this.zonaAzulxInicial[1], this.zonaAzulyInicial[01]);



                } else if (this.cantJugadores == 3) {
                    for (var a = 0; a < 2; a++) {
                        for (b = 0; b < 2; b++) {
                            this.crearJugadores(this.zonaAzulxInicial[a], this.zonaAzulyInicial[b], "blue");
                            this.crearJugadores(this.zonaAmaxInicial[a], this.zonaAmayInicial[b], "yellow");
                            this.crearJugadores(this.zonaVerdxInicial[a], this.zonaVerdyInicial[b], "green");
                        }

                    }

                } else if (this.cantJugadores == 4) {
                    for (var a = 0; a < 2; a++) {
                        for (b = 0; b < 2; b++) {
                            this.crearJugadores(this.zonaAzulxInicial[a], this.zonaAzulyInicial[b], "blue");
                            this.crearJugadores(this.zonaAmaxInicial[a], this.zonaAmayInicial[b], "yellow");
                            this.crearJugadores(this.zonaVerdxInicial[a], this.zonaVerdyInicial[b], "green");
                            this.crearJugadores(this.zonaRojaxInicial[a], this.zonaRojayInicial[b], "red");
                        }
                    }
                } else {
                    alert("Recuerda que la cantidad es de : 2 a 4 jugadores");
                    location.href = "index.html";
                }



                for (var x = 0; x < this.statusCoordInicialAzu.length; x++) {
                    console.log(this.statusCoordInicialAzu[x]);
                }


                /*
                                /*CReamos la ruta principal*/
                for (var z = 0; z < this.coordenadasCamino.length; z++) {
                    var col = "white";
                    if (z == 1) {
                        col = "blue";
                    }
                    if (z == 14) {
                        col = "yellow";
                    }
                    if (z == 27) {
                        col = "green";
                    }
                    if (z == 40) {
                        col = "red";
                    }
                    arregloDeSubCoor = this.coordenadasCamino[z].split(',');
                    var a = arregloDeSubCoor[0];
                    var b = arregloDeSubCoor[1];
                    this.crearZonasJuego(a, b, col);

                }
                /*Creamos la zona donde entrara cada color*/
                for (var w = 0; w < this.caminoEntrada.length; w++) {
                    var colorFo = "blue";
                    if (w > 5) {
                        colorFo = "yellow";
                    } if (w > 11) {
                        colorFo = "green";
                    } if (w > 17) {
                        colorFo = "red";
                    }
                    zonEntArreglo = this.caminoEntrada[w].split(',');
                    c = zonEntArreglo[0];
                    d = zonEntArreglo[1];
                    this.crearZonasJuego(c, d, colorFo);
                }


            },

            lanzarDado: function () {
                for (var p = 0; p < 10; p++) {
                    this.numero = parseInt(Math.random() * 6) + 1;
                    var luis = document.getElementById('etiqueta');
                    luis.innerHTML = this.numero;
                }
                if (this.botonActivo.style.backgroundColor == "blue") {
                    var numFicha = parseInt(prompt("El Resultado es : " + this.numero + "\n Introduce el número de ficha a jugar"));
                    this.moviendoJugadores(numFicha - 1, this.numero);
                }
                return this.numero;


            },

            moviendoJugadores: function (number, numero2) {
                this.contador = this.contador + numero2;
                var coordActual = this.statusCoordInicialAzu[number];
                var nuevaCoordenada = this.coordenadasCamino[number + this.contador];
                var nuevaCoord = nuevaCoordenada.split(',');
                var nuevaZona = coordActual.split(',');
                console.log(" Actual " + coordActual);
                console.log("Nueva " + nuevaCoordenada);
                this.crearZonasJuego(nuevaZona[0], nuevaZona[1], "white");
                this.crearJugadores(nuevaCoord[0], nuevaCoord[1], "blue");
                ctx.fillStyle = "black";
                ctx.font = "10px Arial";
                ctx.fillText(this.numeroJugada, this.zonaAzulxInicial[0], this.zonaAzulyInicial[0]);

                this.statusCoordInicialAzu[this.contador] = nuevaCoord[0] + "," + nuevaCoord[1];
                console.log(" final" + this.statusCoordInicialAzu[this.contador]);



            },

            verificarEstatus: function (uno) {
                if (this.statusCoord[uno] == "false") {
                    return false;
                } else {
                    return true;
                }
            },
            moverFicha: function (event) {
                /*
               por medio del evento click capturamos las coordenadas del canvas 
                 */
                var x = event.clientX - 300;
                var y = event.clientY - 30;
                /*
                Si está dentro de un rango lo llevamos al valor y luego comparamos con el arreglo */
                if ((x >= 0 && x <= 39) && (y >= 240 && y <= 279)) {
                    x = 20;
                    y = 260;

                }
                for (var d = 0; d < this.coordenadasCamino.length; d++) {


                    if (this.coordenadasCamino[d] == x + "," + y) {
                        var numeNuevo = d + this.numero;
                        if (this.verificarEstatus(d)) {
                            if (this.verificarEstatus(d) == true && this.verificarEstatus(numeNuevo) == true) {
                                var nuevaCoord = this.coordenadasCamino[numeNuevo].split(',');
                                this.crearJugadores(nuevaCoord[0], nuevaCoord[1], "blue");

                            }

                        } else {
                            /*
                               alert(parseInt(this.numero));
                               this.crearJugadores(x, y, "verde");
                               var valores = this.coordenadasCamino[d];
                               this.verificarEstatus(d);
                               return alert(valores);*/
                        }
                    }
                }
                arregloDeSubCadenas = this.coordenadasCamino[0].split(',');



            },
            borrarJugador: function () {

            },

            crearZonasJuego: function (valorx, valory, colorf) {
                ctx.fillStyle = colorf;
                ctx.beginPath();
                ctx.rect(valorx - 20, valory - 20, canvas.width / 10 / 2, canvas.height / 10 / 2);
                ctx.fill();
                ctx.stroke();


            },
            crearJugadores: function (valorX, valorY, coloR) {

                var c = document.getElementById("canvas");
                var ctx = c.getContext("2d");
                ctx.lineWidth = 4;
                ctx.fillStyle = coloR;
                ctx.beginPath();
                ctx.arc(valorX, valorY, 16, 0, 2 * Math.PI);
                ctx.fill();
                ctx.stroke();

            }



        } //finalizamos el prototipo
})();





var tablero = new Tablero();



//tablero.crearJugadores();
