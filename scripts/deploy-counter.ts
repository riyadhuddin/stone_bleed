import _ from "@nomiclabs/hardhat-ethers"
import { ethers } from "hardhat"
const hre = require("hardhat")
async function deploy() {
    const C = await hre.ethers.getContractFactory("Counter")
    const c = await C.deploy()
    console.log(await c.count())
}
deploy()