pragma solidity ^0.8.4;

import {
ISuperfluid,
ISuperToken
} from "@superfluid-finance/ethereum-contracts/contracts/interfaces/superfluid/ISuperfluid.sol";
import TestToken from './TestToken.sol';

contract FundMe {

    ISuperToken superToken;
    TestToken erc20Token;

    constructor(ISuperToken _superToken, TestToken _erc20Token) {
        superToken = _superToken;
        erc20Token = _erc20Token;
    }

    function mintAndUpgrade(address target, uint256 allowance) {
        erc20Token.mint(target, 100000000000000000000);
        superToken.upgradeTo(target, 100000000000000000000);
    }
}
