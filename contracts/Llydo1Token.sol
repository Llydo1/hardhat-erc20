// contracts/GLDToken.sol
// SPDX-License-Identifier: MIT
pragma solidity ^0.8.7;

import "@openzeppelin/contracts/token/ERC20/ERC20.sol";

contract Llydo1Token is ERC20 {
    constructor(uint256 initialSupply) ERC20("Llydo1", "LD") {
        _mint(msg.sender, initialSupply);
    }
}
