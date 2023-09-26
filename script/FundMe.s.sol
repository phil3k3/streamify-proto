// SPDX-License-Identifier: UNLICENSED
pragma solidity ^0.8.13;

import "forge-std/Script.sol";
import "../src/FundMe.sol";

import {
ISuperToken
} from "@superfluid-finance/ethereum-contracts/contracts/interfaces/superfluid/ISuperfluid.sol";
import '../src/TestToken.sol';

contract FundMeScript is Script {

    address public constant SUPER_TOKEN_ADDRESS = address(0x4Ec89DF8B16474A9333Bb94A5F21197ef89a8D87);
    address public constant ERC20_TOKEN_ADDRESS = address(0x5735C32C38f5Af0FB04a7c77C832Ba4D7aBfFeC8);

    function setUp() public {}

    function run() public {
        uint256 deployerPrivateKey = vm.envUint("OWNER_PRIVATE_KEY");
        address deployerAddress = vm.addr(deployerPrivateKey);

        vm.startBroadcast(deployerAddress);

        FundMe fundMe = new FundMe(ISuperToken(SUPER_TOKEN_ADDRESS), TestToken(ERC20_TOKEN_ADDRESS));

        vm.stopBroadcast();
    }
}
