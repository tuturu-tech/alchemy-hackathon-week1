const hre = require("hardhat");

async function main() {
	const Loot = await hre.ethers.getContractFactory("Loot");
	const loot = await Loot.deploy("testURI");

	await loot.deployed();
	console.log("Loot deployed to:", loot.address);

	const Raider = await hre.ethers.getContractFactory("Raider");
	const raider = await Raider.deploy(loot.address);

	await raider.deployed();
	console.log("Loot deployed to:", raider.address);

	const Dungeon = await hre.ethers.getContractFactory("DungeonRaid");
	const dungeon = await Dungeon.deploy(raider.address, loot.address, 1234);

	await dungeon.deployed();
	console.log("DungeonRaid deployed to:", dungeon.address);
}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main()
	.then(() => process.exit(0))
	.catch((error) => {
		console.error(error);
		process.exit(1);
	});
