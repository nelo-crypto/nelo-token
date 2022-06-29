pragma solidity ^0.8.0;

import "@openzeppelin/contracts/token/ERC777/ERC777.sol";

contract Nelo is ERC777 {
    constructor() ERC777("Nelo", "NELO", new address[](0))
    {
        _mint(msg.sender, 1000000000*1e18, "", "");
    }
}