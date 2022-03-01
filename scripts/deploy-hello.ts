import "@nomiclabs/hardhat-ethers";
import { ethers } from "ethers";
const hre = require("hardhat");

async function deploy() {
    
  const HelloWorld = await hre.ethers.getContractFactory("HelloWorld");
    const helloWorld = await HelloWorld.deploy();
    await helloWorld.deployed();
    return helloWorld;
}
//@ts-ignore
async function sayHello(helloWorld) {
    console.log("Say Hello:", await helloWorld.hello());
}
deploy().then(sayHello);