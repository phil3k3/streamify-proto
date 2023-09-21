export var cfa = [
    {
        "constant": false,
        "inputs": [
            {
                "internalType": "contract ISuperToken",
                "name": "token",
                "type": "address"
            },
            {
                "internalType": "address",
                "name": "sender",
                "type": "address"
            },
            {
                "internalType": "address",
                "name": "receiver",
                "type": "address"
            },
            {
                "internalType": "int96",
                "name": "flowrate",
                "type": "int96"
            },
            {
                "internalType": "bytes",
                "name": "userData",
                "type": "bytes"
            }
        ],
        "name": "createFlow",
        "outputs": [
            {
                "internalType": "bool",
                "name": "",
                "type": "bool"
            }
        ],
        "payable": false,
        "stateMutability": "nonpayable",
        "type": "function"
    }
]