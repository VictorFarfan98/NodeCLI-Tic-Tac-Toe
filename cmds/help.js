module.exports = (args) => {
    var info = `This is a Tic-Tac-Toe game made using NodeCLI 

    HOW TO PLAY:
    
        "start": Empezar nuevo juego o Reiniciar el juego actual
        "write": El formato de este comando es write <position_command> <figure_command>
            --Los <position_command> pueden ser:
                "tl": Esquina superior izquierda
                "tc": Centro superior
                "tr": Esquina superior derecha
                "cl": Centro lado izquierdo
                "cc": Centro
                "cr": Centro lado derecho
                "bl": Esquina inferior izquierda
                "bc": Parte inferior central
                "br": Esquina inferior izquierda
            --Los <figure command> pueden ser <X> o <O>
        "help": Reiniciar un juego ya empezado`


    console.log(info)
}