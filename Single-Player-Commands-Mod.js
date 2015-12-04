//SinglePlayerCommands made by AndrewModsPE

/*
Commands
heal
infinehealth
about
coords
kill
game mode [0, 1]
*/

//Commands

var mPlayer = new android.media.MediaPlayer();
var path =
android.os.Environment.getExternalStorageDirectory().getAbsolutePath();
var vertexX=0
var vertexY=0
var vertexZ=0
Level.getAddress();
Level.getWorldDir();
Level.getWorldName();
getPlayerX(); getPlayerY(); getPlayerZ();

//about command

if(cmd == "about"){
clientMessage("§7Single Player Commands");
clientMessage("§1Version 1.0")
clientMessage("Youtube: Xxgamerxxroleplayerxx acpd")
}

//heal

if(cmd == "heal"){
Player.setHealth(20);
clientMessage("§2Healed");
}

if(cmd == "infinehealth"){
Player.setHealth(999999);
clientMessage("§5Infinite Health applied");
}

//kill
if(cmd == "kill"){
Player.setHealth(0);
}

//creative
if(cmd == "gamemode 1"){
Level.setGameMode(1);
clientMessage("Creative");
}

//survival
if(cmd == "gamemode 0"){
Level.setGameMode(0);
clientMessage("Survival")
}
