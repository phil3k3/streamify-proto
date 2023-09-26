pragma solidity ^0.8.4;

import {
ISuperfluid,
ISuperToken
} from "@superfluid-finance/ethereum-contracts/contracts/interfaces/superfluid/ISuperfluid.sol";
import './TestToken.sol';

contract FundMe {

    ISuperToken superToken;
    TestToken erc20Token;

    uint256 targetAmount = 100000000000000000000;

    event Funded(address);

    constructor(ISuperToken _superToken, TestToken _erc20Token) {
        superToken = _superToken;
        erc20Token = _erc20Token;
    }

    function mintAndUpgrade(address target) public {
        erc20Token.mint(address(this), targetAmount);
        erc20Token.approve(address(superToken), targetAmount);
        superToken.upgrade(targetAmount);
        superToken.transfer(target, targetAmount);
        emit Funded(target);
    }
}
