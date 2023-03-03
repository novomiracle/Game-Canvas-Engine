let grass = Sprite('grass', 0, 0, 'materials/images/grass.png', ['materials/images/grass.png'], [], 1, false);
let battle = false;
let battleBox = Sprite("BBox", 0, 112, 'materials/images/battlebox.png', ['materials/images/battlebox.png'], [], 6, false)
addTile(grass)
let player = Sprite('player', 0, 0, 'materials/images/player.png', ['materials/images/player.png'], [Hitbox(1, 1, 14, 14, "red")], 3, true);
changeGameCanvasSize(320, 208)
startGame = function() {
    for (let i = 0; i < Math.ceil(300 / 16) + 1; i++) {
        for (let j = 0; j < Math.ceil(200 / 16) + 1; j++) {
            Sprite('grass', i * 16, j * 16, 'materials/images/grass.png', ['materials/images/grass.png'], [], 0, true)
        }
    }
    display(sprites)
}

UpdateGame = function() {}
document.addEventListener("keyup", function(e) {
    if (!battle) {
        clearCanvas();
        if (e.key == "d") {
            player.x += 16
        }
        if (e.key == "a") {
            player.x -= 16
        }
        if (e.key == "s") {
            player.y += 16
        }
        if (e.key == "w") {
            player.y -= 16
        }

        display(sprites)
    }
})

loadScene("pog.js")