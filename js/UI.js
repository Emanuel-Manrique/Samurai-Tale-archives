

export class UI {
    constructor(game){
        this.game = game
        this.fontSize = 30
        this.fontFamily = "FontGame"
    }
    draw(context){
        context.save()
        document.getElementById("score").innerHTML = localStorage["Score"]
        context.font = this.fontSize + "px " + this.fontFamily
        context.textAlign = "left"
        context.fillStyle = "white"

        // Score
        context.fillText("Score: " + this.game.score, 20, 50)
        context.fillText("Lifes: " + this.game.lifes, 21, 85)
      
        context.fillText("Energy: " + this.game.energy.toFixed(0), 460, 50)
        this.prueba = (this.game.time * 0.001 + 30).toFixed(1) + this.game.score
        context.fillText("Time: " + this.prueba, 460, 85)
        // Timer


        //Game over message
        if(this.game.gameOver){
            context.textAlign = "center"
            this.game.soundBackground.pause()
            context.font = this.fontSize * 2 + "px " + this.fontFamily
            if(this.game.lifes <= 0){
                context.fillText("Samu has died...", this.game.width * 0.5, this.game.height * 0.4);
                context.fillText("Press R", this.game.width * 0.5, this.game.height * 0.6);
                localStorage["Score"] = document.getElementById("score").innerHTML = this.game.score;
                this.game.soundSad.play()
            } 
            if(this.game.lifes > 0){
                context.fillText("Time out!", this.game.width * 0.5, this.game.height * 0.4);
                context.fillText("Press R", this.game.width * 0.5, this.game.height * 0.6);
                localStorage["Score"] = document.getElementById("score").innerHTML = this.game.score;
                this.game.soundHappy.play()
               
            }
        }
        context.restore()
    }
}