const type = [
	2,2,2,2,2,2,2,2,2,2,2,2,2,2,0,2,
	2,2,2,2,2,2,2,2,2,2,2,2,2,2,0,2,
	2,2,2,2,2,2,2,2,2,2,2,2,2,2,0,0,
	2,2,2,2,2,2,2,2,2,2,2,2,2,2,0,0,
	2,2,2,2,2,2,2,2,2,2,2,2,0,0,0,0,
	2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,
	2,2,2,2,2,2,0,0,0,0,0,0,0,0,0,0,
	2,0,0,2,0,0,0,0,0,0,0,0,0,0,0,0,
	2,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,
	1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,
	1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,
	1,1,1,0,0,0,0,0,0,0,0,0,0,0,0,0,
	0,0,0,0,0,0,0,0,0,0,0,0,0,2,2,2,
	0,0,0,0,0,0,0,0,0,0,0,0,0,0,2,2,
	0,0,0,0,0,0,0,0,0,0,0,0,0,2,2,2,
	0,0,0,0,0,0,0,0,0,0,0,0,0,0,2,2
];

//TODO: implement a way of reading data that doesn't require empty strings. old method produced odd results
const blocks = [
	"Grass Block","Stone","Dirt","Grass Block","Wooden Planks","Smooth Stone Slab","Smooth Stone Slab","Bricks","TNT","TNT","TNT","Cobweb","Flower","Flower","","Sapling",
	"Cobblestone","Bedrock","Sand","Gravel","Log","Log","Block of Iron","Block of Gold","Block of Diamond","Chest","Chest","Chest","Mushroom","Mushroom","","Fire",
	"Gold Ore","Iron Ore","Coal Ore","Bookshelf","Mossy Cobblestone","Obsidian","Block of Iron","Block of Gold","Block of Diamond","Chest","Chest","Crafting Table","Furnace","Furnace","","",
	"Sponge","Glass","Diamond Ore","Redstone Ore","Leaves","Leaves","Block of Iron","Block of Gold","Block of Diamond","Chest","Chest","Crafting Table","Crafting Table","Furnace","","",
	"Cloth","Spawner","Snow","Ice","Grass","Cactus","Cactus","Cactus","Clay","Sugar Cane","Jukebox","Jukebox","","","","",
	"Torch","Door","Door","Ladder","Greenstone","Greenstone","Farmland","Farmland","Wheat","Wheat","Wheat","Wheat","Wheat","Wheat","Wheat","Wheat",
	"Lever","Door","Door","Redstone Torch","Greenstone","Greenstone","","","","","","","","","","",
	"Rail","","","Redstone Torch","","","","","","","","","","","","",
	"Rail","","","","","","","","","","","","","","","",
	"Pillar","Reinforced Glass","Tile","Tile","Dimension Tile","Dimension Wall","Debug Block","Dimension Tile","Dimension Tile","Fake Blocks","Fake Blocks","Fake Blocks","Mojang Blocks","Mojang Blocks","Mojang Blocks","Barrier",
	"Barrier","Stair Ladder","Fake Blocks","Fake Blocks","Fake Blocks","Cloth","Cloth","Cloth","Cloth","Salt Block","Salt Block","Lilypads","Celestial Flame","Lilypads","Lilypads","Lilypads",
	"Safe Block","Safe Block","Unused Assets","","","","","","","","","","","","","",
	"","","","","","","","","","","","","","Water","Water","Water",
	"","","","","","","","","","","","","","","Water","Water",
	"","","","","","","","","","","","","","Lava","Lava","Lava",
	"","","","","","","","","","","","","","","Lava","Lava"
];

/*const blank = [
	"","","","","","","","","","","","","","","","",
	"","","","","","","","","","","","","","","","",
	"","","","","","","","","","","","","","","","",
	"","","","","","","","","","","","","","","","",
	"","","","","","","","","","","","","","","","",
	"","","","","","","","","","","","","","","","",
	"","","","","","","","","","","","","","","","",
	"","","","","","","","","","","","","","","","",
	"","","","","","","","","","","","","","","","",
	"","","","","","","","","","","","","","","","",
	"","","","","","","","","","","","","","","","",
	"","","","","","","","","","","","","","","","",
	"","","","","","","","","","","","","","","","",
	"","","","","","","","","","","","","","","","",
	"","","","","","","","","","","","","","","","",
	"","","","","","","","","","","","","","","",""
];*/

let url = null;
let box = null;
//let height = null;
const height = 16;
let empty = 0;
let i = null;

function generate() {
	let size = 1;
	//height = document.getElementById("input").value;
	for(let i = 0; i < (16 * height); i++) {
		//combine groups of identical elements
		if(blocks[i] === blocks[i + 1] && i % 16 != 15) {
			size++;
		} else {
			//create/read data
			switch(type[i]) {
				case 1:
					url = "https://alphaver.miraheze.org/wiki/" + blocks[i];
					break;
				case 2:
					url = "https://minecraft.wiki/w/" + blocks[i];
					break;
				default:
					url = null;
					break;
				}
			//create elements
			if(url === null) {
				box = document.createElement("div");
			} else {
				box = document.createElement("a");
				box.setAttribute("href", url);
			}
			
			box.setAttribute("class", "box");
			box.setAttribute("draggable", "false");
			//remove this check maybe???? might make changing the size of the link table harder
			if(size !== 0) {
				box.style.width = size * 64 + "px";
			}
			document.getElementById("terrain").appendChild(box);
			size = 1;
		}
	}
}