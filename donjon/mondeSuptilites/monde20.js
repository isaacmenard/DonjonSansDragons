if (selectMap == 20) {
    map = [
        93 ,	93 ,	93 ,	93 ,	93 ,	93 ,	93,	93 ,
93 ,	93 ,	93 ,	93 ,	93 ,	93 ,	93 ,	93 ,
93 ,	93,	93,	93 ,	110,	93 ,	93 ,	93 ,
93,	93 ,	110,	110,	110,	110,	93 ,	93 ,
93 ,	93 ,	93 ,	110,	93 ,	93 ,	54 ,	54 ,
93 ,	93 ,	93 ,	93 ,	93 ,	54 ,	55,	55,
94 ,	94 ,	94 ,	53 ,	53 ,	55,	83 ,	83 ,
94 ,	94,	53 ,	53 ,	55,	83 ,	83 ,	83 
    ];
    setTimeout(() => {
        deltaTimeG = 500;
        intervalMechant = setInterval(mechant, deltaTimeG);
        mechantCreation(4, 4, 6, 20, 0, 500, ["S_Water01", "img/S_Water01.png"], 50, 1,"img/slime_bkeu.png")
    }, 200);
}