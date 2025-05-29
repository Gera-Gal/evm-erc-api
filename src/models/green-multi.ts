export const greenMultiABI = {
  "_format": "hh-sol-artifact-1",
  "contractName": "GreenMulti",
  "sourceName": "contracts/GreenMulti.sol",
  "abi": [
    {
      "inputs": [
        {
          "internalType": "string",
          "name": "uri",
          "type": "string"
        },
        {
          "internalType": "address",
          "name": "certifying_auth",
          "type": "address"
        },
        {
          "internalType": "address",
          "name": "producing_co",
          "type": "address"
        }
      ],
      "stateMutability": "nonpayable",
      "type": "constructor"
    },
    {
      "inputs": [],
      "name": "AccessControlBadConfirmation",
      "type": "error"
    },
    {
      "inputs": [
        {
          "internalType": "address",
          "name": "account",
          "type": "address"
        },
        {
          "internalType": "bytes32",
          "name": "neededRole",
          "type": "bytes32"
        }
      ],
      "name": "AccessControlUnauthorizedAccount",
      "type": "error"
    },
    {
      "inputs": [
        {
          "internalType": "address",
          "name": "sender",
          "type": "address"
        },
        {
          "internalType": "uint256",
          "name": "balance",
          "type": "uint256"
        },
        {
          "internalType": "uint256",
          "name": "needed",
          "type": "uint256"
        },
        {
          "internalType": "uint256",
          "name": "tokenId",
          "type": "uint256"
        }
      ],
      "name": "ERC1155InsufficientBalance",
      "type": "error"
    },
    {
      "inputs": [
        {
          "internalType": "address",
          "name": "approver",
          "type": "address"
        }
      ],
      "name": "ERC1155InvalidApprover",
      "type": "error"
    },
    {
      "inputs": [
        {
          "internalType": "uint256",
          "name": "idsLength",
          "type": "uint256"
        },
        {
          "internalType": "uint256",
          "name": "valuesLength",
          "type": "uint256"
        }
      ],
      "name": "ERC1155InvalidArrayLength",
      "type": "error"
    },
    {
      "inputs": [
        {
          "internalType": "address",
          "name": "operator",
          "type": "address"
        }
      ],
      "name": "ERC1155InvalidOperator",
      "type": "error"
    },
    {
      "inputs": [
        {
          "internalType": "address",
          "name": "receiver",
          "type": "address"
        }
      ],
      "name": "ERC1155InvalidReceiver",
      "type": "error"
    },
    {
      "inputs": [
        {
          "internalType": "address",
          "name": "sender",
          "type": "address"
        }
      ],
      "name": "ERC1155InvalidSender",
      "type": "error"
    },
    {
      "inputs": [
        {
          "internalType": "address",
          "name": "operator",
          "type": "address"
        },
        {
          "internalType": "address",
          "name": "owner",
          "type": "address"
        }
      ],
      "name": "ERC1155MissingApprovalForAll",
      "type": "error"
    },
    {
      "anonymous": false,
      "inputs": [
        {
          "indexed": true,
          "internalType": "address",
          "name": "account",
          "type": "address"
        },
        {
          "indexed": true,
          "internalType": "address",
          "name": "operator",
          "type": "address"
        },
        {
          "indexed": false,
          "internalType": "bool",
          "name": "approved",
          "type": "bool"
        }
      ],
      "name": "ApprovalForAll",
      "type": "event"
    },
    {
      "anonymous": false,
      "inputs": [
        {
          "indexed": true,
          "internalType": "bytes32",
          "name": "role",
          "type": "bytes32"
        },
        {
          "indexed": true,
          "internalType": "bytes32",
          "name": "previousAdminRole",
          "type": "bytes32"
        },
        {
          "indexed": true,
          "internalType": "bytes32",
          "name": "newAdminRole",
          "type": "bytes32"
        }
      ],
      "name": "RoleAdminChanged",
      "type": "event"
    },
    {
      "anonymous": false,
      "inputs": [
        {
          "indexed": true,
          "internalType": "bytes32",
          "name": "role",
          "type": "bytes32"
        },
        {
          "indexed": true,
          "internalType": "address",
          "name": "account",
          "type": "address"
        },
        {
          "indexed": true,
          "internalType": "address",
          "name": "sender",
          "type": "address"
        }
      ],
      "name": "RoleGranted",
      "type": "event"
    },
    {
      "anonymous": false,
      "inputs": [
        {
          "indexed": true,
          "internalType": "bytes32",
          "name": "role",
          "type": "bytes32"
        },
        {
          "indexed": true,
          "internalType": "address",
          "name": "account",
          "type": "address"
        },
        {
          "indexed": true,
          "internalType": "address",
          "name": "sender",
          "type": "address"
        }
      ],
      "name": "RoleRevoked",
      "type": "event"
    },
    {
      "anonymous": false,
      "inputs": [
        {
          "indexed": true,
          "internalType": "address",
          "name": "operator",
          "type": "address"
        },
        {
          "indexed": true,
          "internalType": "address",
          "name": "from",
          "type": "address"
        },
        {
          "indexed": true,
          "internalType": "address",
          "name": "to",
          "type": "address"
        },
        {
          "indexed": false,
          "internalType": "uint256[]",
          "name": "ids",
          "type": "uint256[]"
        },
        {
          "indexed": false,
          "internalType": "uint256[]",
          "name": "values",
          "type": "uint256[]"
        }
      ],
      "name": "TransferBatch",
      "type": "event"
    },
    {
      "anonymous": false,
      "inputs": [
        {
          "indexed": true,
          "internalType": "address",
          "name": "operator",
          "type": "address"
        },
        {
          "indexed": true,
          "internalType": "address",
          "name": "from",
          "type": "address"
        },
        {
          "indexed": true,
          "internalType": "address",
          "name": "to",
          "type": "address"
        },
        {
          "indexed": false,
          "internalType": "uint256",
          "name": "id",
          "type": "uint256"
        },
        {
          "indexed": false,
          "internalType": "uint256",
          "name": "value",
          "type": "uint256"
        }
      ],
      "name": "TransferSingle",
      "type": "event"
    },
    {
      "anonymous": false,
      "inputs": [
        {
          "indexed": false,
          "internalType": "string",
          "name": "value",
          "type": "string"
        },
        {
          "indexed": true,
          "internalType": "uint256",
          "name": "id",
          "type": "uint256"
        }
      ],
      "name": "URI",
      "type": "event"
    },
    {
      "inputs": [],
      "name": "CERTIFYING_AUTH_ROLE",
      "outputs": [
        {
          "internalType": "bytes32",
          "name": "",
          "type": "bytes32"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [],
      "name": "DEFAULT_ADMIN_ROLE",
      "outputs": [
        {
          "internalType": "bytes32",
          "name": "",
          "type": "bytes32"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [],
      "name": "GREEN_LAND",
      "outputs": [
        {
          "internalType": "uint256",
          "name": "",
          "type": "uint256"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [],
      "name": "GREEN_TOKEN",
      "outputs": [
        {
          "internalType": "uint256",
          "name": "",
          "type": "uint256"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [],
      "name": "MAX_TITLES",
      "outputs": [
        {
          "internalType": "uint256",
          "name": "",
          "type": "uint256"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [],
      "name": "PRODUCING_CO_ROLE",
      "outputs": [
        {
          "internalType": "bytes32",
          "name": "",
          "type": "bytes32"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "address",
          "name": "account",
          "type": "address"
        },
        {
          "internalType": "uint256",
          "name": "id",
          "type": "uint256"
        }
      ],
      "name": "balanceOf",
      "outputs": [
        {
          "internalType": "uint256",
          "name": "",
          "type": "uint256"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "address[]",
          "name": "accounts",
          "type": "address[]"
        },
        {
          "internalType": "uint256[]",
          "name": "ids",
          "type": "uint256[]"
        }
      ],
      "name": "balanceOfBatch",
      "outputs": [
        {
          "internalType": "uint256[]",
          "name": "",
          "type": "uint256[]"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "bytes32",
          "name": "role",
          "type": "bytes32"
        }
      ],
      "name": "getRoleAdmin",
      "outputs": [
        {
          "internalType": "bytes32",
          "name": "",
          "type": "bytes32"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "bytes32",
          "name": "role",
          "type": "bytes32"
        },
        {
          "internalType": "address",
          "name": "account",
          "type": "address"
        }
      ],
      "name": "grantRole",
      "outputs": [],
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "bytes32",
          "name": "role",
          "type": "bytes32"
        },
        {
          "internalType": "address",
          "name": "account",
          "type": "address"
        }
      ],
      "name": "hasRole",
      "outputs": [
        {
          "internalType": "bool",
          "name": "",
          "type": "bool"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "address",
          "name": "account",
          "type": "address"
        },
        {
          "internalType": "address",
          "name": "operator",
          "type": "address"
        }
      ],
      "name": "isApprovedForAll",
      "outputs": [
        {
          "internalType": "bool",
          "name": "",
          "type": "bool"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "address",
          "name": "to",
          "type": "address"
        },
        {
          "internalType": "uint256[]",
          "name": "ids",
          "type": "uint256[]"
        },
        {
          "internalType": "uint256[]",
          "name": "amounts",
          "type": "uint256[]"
        },
        {
          "internalType": "bytes",
          "name": "data",
          "type": "bytes"
        }
      ],
      "name": "mintBatch",
      "outputs": [],
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "address",
          "name": "to",
          "type": "address"
        },
        {
          "internalType": "bytes",
          "name": "data",
          "type": "bytes"
        }
      ],
      "name": "mintTitle",
      "outputs": [],
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "address",
          "name": "to",
          "type": "address"
        },
        {
          "internalType": "uint256",
          "name": "amount",
          "type": "uint256"
        },
        {
          "internalType": "bytes",
          "name": "data",
          "type": "bytes"
        }
      ],
      "name": "mintUserReturns",
      "outputs": [],
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "bytes32",
          "name": "role",
          "type": "bytes32"
        },
        {
          "internalType": "address",
          "name": "callerConfirmation",
          "type": "address"
        }
      ],
      "name": "renounceRole",
      "outputs": [],
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "bytes32",
          "name": "role",
          "type": "bytes32"
        },
        {
          "internalType": "address",
          "name": "account",
          "type": "address"
        }
      ],
      "name": "revokeRole",
      "outputs": [],
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "address",
          "name": "from",
          "type": "address"
        },
        {
          "internalType": "address",
          "name": "to",
          "type": "address"
        },
        {
          "internalType": "uint256[]",
          "name": "ids",
          "type": "uint256[]"
        },
        {
          "internalType": "uint256[]",
          "name": "values",
          "type": "uint256[]"
        },
        {
          "internalType": "bytes",
          "name": "data",
          "type": "bytes"
        }
      ],
      "name": "safeBatchTransferFrom",
      "outputs": [],
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "address",
          "name": "from",
          "type": "address"
        },
        {
          "internalType": "address",
          "name": "to",
          "type": "address"
        },
        {
          "internalType": "uint256",
          "name": "id",
          "type": "uint256"
        },
        {
          "internalType": "uint256",
          "name": "value",
          "type": "uint256"
        },
        {
          "internalType": "bytes",
          "name": "data",
          "type": "bytes"
        }
      ],
      "name": "safeTransferFrom",
      "outputs": [],
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "address",
          "name": "operator",
          "type": "address"
        },
        {
          "internalType": "bool",
          "name": "approved",
          "type": "bool"
        }
      ],
      "name": "setApprovalForAll",
      "outputs": [],
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "bytes4",
          "name": "interfaceId",
          "type": "bytes4"
        }
      ],
      "name": "supportsInterface",
      "outputs": [
        {
          "internalType": "bool",
          "name": "",
          "type": "bool"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [],
      "name": "totalPropertyTitlesMinted",
      "outputs": [
        {
          "internalType": "uint256",
          "name": "",
          "type": "uint256"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "uint256",
          "name": "",
          "type": "uint256"
        }
      ],
      "name": "uri",
      "outputs": [
        {
          "internalType": "string",
          "name": "",
          "type": "string"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    }
  ],
  "bytecode": "0x6080604052600060045534801561001557600080fd5b506040516132e13803806132e183398181016040528101906100379190610409565b82610047816100b260201b60201c565b506100787f0500d362a92e3bf9fc14564a9862507583ac61f2ae0151e104b174a0ed8a755c836100c560201b60201c565b506100a97fdfde78fdd119b4ccde60786fee3cb616076efeecafe2c704383fca389d46a6bc826100c560201b60201c565b5050505061076b565b80600290816100c19190610699565b5050565b60006100d783836101c360201b60201c565b6101b85760016003600085815260200190815260200160002060000160008473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060006101000a81548160ff02191690831515021790555061015561022e60201b60201c565b73ffffffffffffffffffffffffffffffffffffffff168273ffffffffffffffffffffffffffffffffffffffff16847f2f8788117e7eff1d82e926ec794901d17c78024a50270940304540a733656f0d60405160405180910390a4600190506101bd565b600090505b92915050565b60006003600084815260200190815260200160002060000160008373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060009054906101000a900460ff16905092915050565b600033905090565b6000604051905090565b600080fd5b600080fd5b600080fd5b600080fd5b6000601f19601f8301169050919050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052604160045260246000fd5b61029d82610254565b810181811067ffffffffffffffff821117156102bc576102bb610265565b5b80604052505050565b60006102cf610236565b90506102db8282610294565b919050565b600067ffffffffffffffff8211156102fb576102fa610265565b5b61030482610254565b9050602081019050919050565b60005b8381101561032f578082015181840152602081019050610314565b60008484015250505050565b600061034e610349846102e0565b6102c5565b90508281526020810184848401111561036a5761036961024f565b5b610375848285610311565b509392505050565b600082601f8301126103925761039161024a565b5b81516103a284826020860161033b565b91505092915050565b600073ffffffffffffffffffffffffffffffffffffffff82169050919050565b60006103d6826103ab565b9050919050565b6103e6816103cb565b81146103f157600080fd5b50565b600081519050610403816103dd565b92915050565b60008060006060848603121561042257610421610240565b5b600084015167ffffffffffffffff8111156104405761043f610245565b5b61044c8682870161037d565b935050602061045d868287016103f4565b925050604061046e868287016103f4565b9150509250925092565b600081519050919050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052602260045260246000fd5b600060028204905060018216806104ca57607f821691505b6020821081036104dd576104dc610483565b5b50919050565b60008190508160005260206000209050919050565b60006020601f8301049050919050565b600082821b905092915050565b6000600883026105457fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff82610508565b61054f8683610508565b95508019841693508086168417925050509392505050565b6000819050919050565b6000819050919050565b600061059661059161058c84610567565b610571565b610567565b9050919050565b6000819050919050565b6105b08361057b565b6105c46105bc8261059d565b848454610515565b825550505050565b600090565b6105d96105cc565b6105e48184846105a7565b505050565b5b81811015610608576105fd6000826105d1565b6001810190506105ea565b5050565b601f82111561064d5761061e816104e3565b610627846104f8565b81016020851015610636578190505b61064a610642856104f8565b8301826105e9565b50505b505050565b600082821c905092915050565b600061067060001984600802610652565b1980831691505092915050565b6000610689838361065f565b9150826002028217905092915050565b6106a282610478565b67ffffffffffffffff8111156106bb576106ba610265565b5b6106c582546104b2565b6106d082828561060c565b600060209050601f83116001811461070357600084156106f1578287015190505b6106fb858261067d565b865550610763565b601f198416610711866104e3565b60005b8281101561073957848901518255600182019150602085019450602081019050610714565b868310156107565784890151610752601f89168261065f565b8355505b6001600288020188555050505b505050505050565b612b678061077a6000396000f3fe608060405234801561001057600080fd5b506004361061014c5760003560e01c80638277d2ee116100c3578063c01f12ce1161007c578063c01f12ce146103ad578063d547741f146103cb578063e93cbda4146103e7578063e985e9c514610405578063f242432a14610435578063fce6f446146104515761014c565b80638277d2ee146102eb57806391d148541461030757806397ac162c14610337578063a217fddf14610355578063a22cb46514610373578063a43198761461038f5761014c565b80632eb2c2d6116101155780632eb2c2d61461022d5780632f2ff15d1461024957806334a8e5e81461026557806336568abe146102835780633bb165b51461029f5780634e1273f4146102bb5761014c565b8062fdd58e1461015157806301ffc9a7146101815780630e89341c146101b15780631f7fdffa146101e1578063248a9ca3146101fd575b600080fd5b61016b60048036038101906101669190611cb2565b61046f565b6040516101789190611d01565b60405180910390f35b61019b60048036038101906101969190611d74565b6104c9565b6040516101a89190611dbc565b60405180910390f35b6101cb60048036038101906101c69190611dd7565b6104eb565b6040516101d89190611e94565b60405180910390f35b6101fb60048036038101906101f691906120b3565b61057f565b005b610217600480360381019061021291906121a4565b6105bc565b60405161022491906121e0565b60405180910390f35b610247600480360381019061024291906121fb565b6105dc565b005b610263600480360381019061025e91906122ca565b610684565b005b61026d6106a6565b60405161027a9190611d01565b60405180910390f35b61029d600480360381019061029891906122ca565b6106ab565b005b6102b960048036038101906102b4919061230a565b610726565b005b6102d560048036038101906102d0919061243c565b610763565b6040516102e29190612572565b60405180910390f35b61030560048036038101906103009190612594565b61086c565b005b610321600480360381019061031c91906122ca565b610908565b60405161032e9190611dbc565b60405180910390f35b61033f610973565b60405161034c9190611d01565b60405180910390f35b61035d610979565b60405161036a91906121e0565b60405180910390f35b61038d6004803603810190610388919061261c565b610980565b005b610397610996565b6040516103a491906121e0565b60405180910390f35b6103b56109ba565b6040516103c291906121e0565b60405180910390f35b6103e560048036038101906103e091906122ca565b6109de565b005b6103ef610a00565b6040516103fc9190611d01565b60405180910390f35b61041f600480360381019061041a919061265c565b610a05565b60405161042c9190611dbc565b60405180910390f35b61044f600480360381019061044a919061269c565b610a99565b005b610459610b41565b6040516104669190611d01565b60405180910390f35b600080600083815260200190815260200160002060008473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002054905092915050565b60006104d482610b46565b806104e457506104e382610c28565b5b9050919050565b6060600280546104fa90612762565b80601f016020809104026020016040519081016040528092919081815260200182805461052690612762565b80156105735780601f1061054857610100808354040283529160200191610573565b820191906000526020600020905b81548152906001019060200180831161055657829003601f168201915b50505050509050919050565b7fdfde78fdd119b4ccde60786fee3cb616076efeecafe2c704383fca389d46a6bc6105a981610ca2565b6105b585858585610cb6565b5050505050565b600060036000838152602001908152602001600020600101549050919050565b60006105e6610d3c565b90508073ffffffffffffffffffffffffffffffffffffffff168673ffffffffffffffffffffffffffffffffffffffff161415801561062b57506106298682610a05565b155b1561066f5780866040517fe237d9220000000000000000000000000000000000000000000000000000000081526004016106669291906127a2565b60405180910390fd5b61067c8686868686610d44565b505050505050565b61068d826105bc565b61069681610ca2565b6106a08383610e3c565b50505050565b600081565b6106b3610d3c565b73ffffffffffffffffffffffffffffffffffffffff168173ffffffffffffffffffffffffffffffffffffffff1614610717576040517f6697b23200000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b6107218282610f2e565b505050565b7fdfde78fdd119b4ccde60786fee3cb616076efeecafe2c704383fca389d46a6bc61075081610ca2565b61075d8460008585611021565b50505050565b606081518351146107af57815183516040517f5b0599910000000000000000000000000000000000000000000000000000000081526004016107a69291906127cb565b60405180910390fd5b6000835167ffffffffffffffff8111156107cc576107cb611ebb565b5b6040519080825280602002602001820160405280156107fa5781602001602082028036833780820191505090505b50905060005b84518110156108615761083761081f82876110ba90919063ffffffff16565b61083283876110ce90919063ffffffff16565b61046f565b82828151811061084a576108496127f4565b5b602002602001018181525050806001019050610800565b508091505092915050565b7f0500d362a92e3bf9fc14564a9862507583ac61f2ae0151e104b174a0ed8a755c61089681610ca2565b600360045411156108dc576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016108d390612895565b60405180910390fd5b6108e98360018085611021565b6001600460008282546108fc91906128e4565b92505081905550505050565b60006003600084815260200190815260200160002060000160008373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060009054906101000a900460ff16905092915050565b60045481565b6000801b81565b61099261098b610d3c565b83836110e2565b5050565b7f0500d362a92e3bf9fc14564a9862507583ac61f2ae0151e104b174a0ed8a755c81565b7fdfde78fdd119b4ccde60786fee3cb616076efeecafe2c704383fca389d46a6bc81565b6109e7826105bc565b6109f081610ca2565b6109fa8383610f2e565b50505050565b600181565b6000600160008473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060008373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060009054906101000a900460ff16905092915050565b6000610aa3610d3c565b90508073ffffffffffffffffffffffffffffffffffffffff168673ffffffffffffffffffffffffffffffffffffffff1614158015610ae85750610ae68682610a05565b155b15610b2c5780866040517fe237d922000000000000000000000000000000000000000000000000000000008152600401610b239291906127a2565b60405180910390fd5b610b398686868686611252565b505050505050565b600381565b60007fd9b67a26000000000000000000000000000000000000000000000000000000007bffffffffffffffffffffffffffffffffffffffffffffffffffffffff1916827bffffffffffffffffffffffffffffffffffffffffffffffffffffffff19161480610c1157507f0e89341c000000000000000000000000000000000000000000000000000000007bffffffffffffffffffffffffffffffffffffffffffffffffffffffff1916827bffffffffffffffffffffffffffffffffffffffffffffffffffffffff1916145b80610c215750610c208261135d565b5b9050919050565b60007f7965db0b000000000000000000000000000000000000000000000000000000007bffffffffffffffffffffffffffffffffffffffffffffffffffffffff1916827bffffffffffffffffffffffffffffffffffffffffffffffffffffffff19161480610c9b5750610c9a82610b46565b5b9050919050565b610cb381610cae610d3c565b6113c7565b50565b600073ffffffffffffffffffffffffffffffffffffffff168473ffffffffffffffffffffffffffffffffffffffff1603610d285760006040517f57f447ce000000000000000000000000000000000000000000000000000000008152600401610d1f9190612918565b60405180910390fd5b610d36600085858585611418565b50505050565b600033905090565b600073ffffffffffffffffffffffffffffffffffffffff168473ffffffffffffffffffffffffffffffffffffffff1603610db65760006040517f57f447ce000000000000000000000000000000000000000000000000000000008152600401610dad9190612918565b60405180910390fd5b600073ffffffffffffffffffffffffffffffffffffffff168573ffffffffffffffffffffffffffffffffffffffff1603610e285760006040517f01a83514000000000000000000000000000000000000000000000000000000008152600401610e1f9190612918565b60405180910390fd5b610e358585858585611418565b5050505050565b6000610e488383610908565b610f235760016003600085815260200190815260200160002060000160008473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060006101000a81548160ff021916908315150217905550610ec0610d3c565b73ffffffffffffffffffffffffffffffffffffffff168273ffffffffffffffffffffffffffffffffffffffff16847f2f8788117e7eff1d82e926ec794901d17c78024a50270940304540a733656f0d60405160405180910390a460019050610f28565b600090505b92915050565b6000610f3a8383610908565b156110165760006003600085815260200190815260200160002060000160008473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060006101000a81548160ff021916908315150217905550610fb3610d3c565b73ffffffffffffffffffffffffffffffffffffffff168273ffffffffffffffffffffffffffffffffffffffff16847ff6391f5c32d9c69d2a47ea670b442974b53935d1edc7fd64eb21e047a839171b60405160405180910390a46001905061101b565b600090505b92915050565b600073ffffffffffffffffffffffffffffffffffffffff168473ffffffffffffffffffffffffffffffffffffffff16036110935760006040517f57f447ce00000000000000000000000000000000000000000000000000000000815260040161108a9190612918565b60405180910390fd5b6000806110a085856114ca565b915091506110b2600087848487611418565b505050505050565b600060208202602084010151905092915050565b600060208202602084010151905092915050565b600073ffffffffffffffffffffffffffffffffffffffff168273ffffffffffffffffffffffffffffffffffffffff16036111545760006040517fced3e10000000000000000000000000000000000000000000000000000000000815260040161114b9190612918565b60405180910390fd5b80600160008573ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060008473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060006101000a81548160ff0219169083151502179055508173ffffffffffffffffffffffffffffffffffffffff168373ffffffffffffffffffffffffffffffffffffffff167f17307eab39ab6107e8899845ad3d59bd9653f200f220920489ca2b5937696c31836040516112459190611dbc565b60405180910390a3505050565b600073ffffffffffffffffffffffffffffffffffffffff168473ffffffffffffffffffffffffffffffffffffffff16036112c45760006040517f57f447ce0000000000000000000000000000000000000000000000000000000081526004016112bb9190612918565b60405180910390fd5b600073ffffffffffffffffffffffffffffffffffffffff168573ffffffffffffffffffffffffffffffffffffffff16036113365760006040517f01a8351400000000000000000000000000000000000000000000000000000000815260040161132d9190612918565b60405180910390fd5b60008061134385856114ca565b915091506113548787848487611418565b50505050505050565b60007f01ffc9a7000000000000000000000000000000000000000000000000000000007bffffffffffffffffffffffffffffffffffffffffffffffffffffffff1916827bffffffffffffffffffffffffffffffffffffffffffffffffffffffff1916149050919050565b6113d18282610908565b6114145780826040517fe2517d3f00000000000000000000000000000000000000000000000000000000815260040161140b929190612933565b60405180910390fd5b5050565b611424858585856114fa565b600073ffffffffffffffffffffffffffffffffffffffff168473ffffffffffffffffffffffffffffffffffffffff16146114c3576000611462610d3c565b905060018451036114b25760006114836000866110ce90919063ffffffff16565b9050600061149b6000866110ce90919063ffffffff16565b90506114ab8389898585896118a2565b50506114c1565b6114c0818787878787611a56565b5b505b5050505050565b60608060405191506001825283602083015260408201905060018152826020820152604081016040529250929050565b805182511461154457815181516040517f5b05999100000000000000000000000000000000000000000000000000000000815260040161153b9291906127cb565b60405180910390fd5b600061154e610d3c565b905060005b835181101561175d57600061157182866110ce90919063ffffffff16565b9050600061158883866110ce90919063ffffffff16565b9050600073ffffffffffffffffffffffffffffffffffffffff168873ffffffffffffffffffffffffffffffffffffffff16146116b557600080600084815260200190815260200160002060008a73ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020016000205490508181101561165d57888183856040517f03dee4c5000000000000000000000000000000000000000000000000000000008152600401611654949392919061295c565b60405180910390fd5b81810360008085815260200190815260200160002060008b73ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002081905550505b600073ffffffffffffffffffffffffffffffffffffffff168773ffffffffffffffffffffffffffffffffffffffff1614611750578060008084815260200190815260200160002060008973ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020600082825461174891906128e4565b925050819055505b5050806001019050611553565b50600183510361181c57600061177d6000856110ce90919063ffffffff16565b905060006117956000856110ce90919063ffffffff16565b90508573ffffffffffffffffffffffffffffffffffffffff168773ffffffffffffffffffffffffffffffffffffffff168473ffffffffffffffffffffffffffffffffffffffff167fc3d58168c5ae7397731d063d5bbf3d657854427343f4c083240f7aacaa2d0f62858560405161180d9291906127cb565b60405180910390a4505061189b565b8373ffffffffffffffffffffffffffffffffffffffff168573ffffffffffffffffffffffffffffffffffffffff168273ffffffffffffffffffffffffffffffffffffffff167f4a39dc06d4c0dbc64b70af90fd698a233a518aa5d07e595d983b8c0526c8f7fb86866040516118929291906129a1565b60405180910390a45b5050505050565b60008473ffffffffffffffffffffffffffffffffffffffff163b1115611a4e578373ffffffffffffffffffffffffffffffffffffffff1663f23a6e6187878686866040518663ffffffff1660e01b8152600401611903959493929190612a2d565b6020604051808303816000875af192505050801561193f57506040513d601f19601f8201168201806040525081019061193c9190612a9c565b60015b6119c3573d806000811461196f576040519150601f19603f3d011682016040523d82523d6000602084013e611974565b606091505b5060008151036119bb57846040517f57f447ce0000000000000000000000000000000000000000000000000000000081526004016119b29190612918565b60405180910390fd5b805181602001fd5b63f23a6e6160e01b7bffffffffffffffffffffffffffffffffffffffffffffffffffffffff1916817bffffffffffffffffffffffffffffffffffffffffffffffffffffffff191614611a4c57846040517f57f447ce000000000000000000000000000000000000000000000000000000008152600401611a439190612918565b60405180910390fd5b505b505050505050565b60008473ffffffffffffffffffffffffffffffffffffffff163b1115611c02578373ffffffffffffffffffffffffffffffffffffffff1663bc197c8187878686866040518663ffffffff1660e01b8152600401611ab7959493929190612ac9565b6020604051808303816000875af1925050508015611af357506040513d601f19601f82011682018060405250810190611af09190612a9c565b60015b611b77573d8060008114611b23576040519150601f19603f3d011682016040523d82523d6000602084013e611b28565b606091505b506000815103611b6f57846040517f57f447ce000000000000000000000000000000000000000000000000000000008152600401611b669190612918565b60405180910390fd5b805181602001fd5b63bc197c8160e01b7bffffffffffffffffffffffffffffffffffffffffffffffffffffffff1916817bffffffffffffffffffffffffffffffffffffffffffffffffffffffff191614611c0057846040517f57f447ce000000000000000000000000000000000000000000000000000000008152600401611bf79190612918565b60405180910390fd5b505b505050505050565b6000604051905090565b600080fd5b600080fd5b600073ffffffffffffffffffffffffffffffffffffffff82169050919050565b6000611c4982611c1e565b9050919050565b611c5981611c3e565b8114611c6457600080fd5b50565b600081359050611c7681611c50565b92915050565b6000819050919050565b611c8f81611c7c565b8114611c9a57600080fd5b50565b600081359050611cac81611c86565b92915050565b60008060408385031215611cc957611cc8611c14565b5b6000611cd785828601611c67565b9250506020611ce885828601611c9d565b9150509250929050565b611cfb81611c7c565b82525050565b6000602082019050611d166000830184611cf2565b92915050565b60007fffffffff0000000000000000000000000000000000000000000000000000000082169050919050565b611d5181611d1c565b8114611d5c57600080fd5b50565b600081359050611d6e81611d48565b92915050565b600060208284031215611d8a57611d89611c14565b5b6000611d9884828501611d5f565b91505092915050565b60008115159050919050565b611db681611da1565b82525050565b6000602082019050611dd16000830184611dad565b92915050565b600060208284031215611ded57611dec611c14565b5b6000611dfb84828501611c9d565b91505092915050565b600081519050919050565b600082825260208201905092915050565b60005b83811015611e3e578082015181840152602081019050611e23565b60008484015250505050565b6000601f19601f8301169050919050565b6000611e6682611e04565b611e708185611e0f565b9350611e80818560208601611e20565b611e8981611e4a565b840191505092915050565b60006020820190508181036000830152611eae8184611e5b565b905092915050565b600080fd5b7f4e487b7100000000000000000000000000000000000000000000000000000000600052604160045260246000fd5b611ef382611e4a565b810181811067ffffffffffffffff82111715611f1257611f11611ebb565b5b80604052505050565b6000611f25611c0a565b9050611f318282611eea565b919050565b600067ffffffffffffffff821115611f5157611f50611ebb565b5b602082029050602081019050919050565b600080fd5b6000611f7a611f7584611f36565b611f1b565b90508083825260208201905060208402830185811115611f9d57611f9c611f62565b5b835b81811015611fc65780611fb28882611c9d565b845260208401935050602081019050611f9f565b5050509392505050565b600082601f830112611fe557611fe4611eb6565b5b8135611ff5848260208601611f67565b91505092915050565b600080fd5b600067ffffffffffffffff82111561201e5761201d611ebb565b5b61202782611e4a565b9050602081019050919050565b82818337600083830152505050565b600061205661205184612003565b611f1b565b90508281526020810184848401111561207257612071611ffe565b5b61207d848285612034565b509392505050565b600082601f83011261209a57612099611eb6565b5b81356120aa848260208601612043565b91505092915050565b600080600080608085870312156120cd576120cc611c14565b5b60006120db87828801611c67565b945050602085013567ffffffffffffffff8111156120fc576120fb611c19565b5b61210887828801611fd0565b935050604085013567ffffffffffffffff81111561212957612128611c19565b5b61213587828801611fd0565b925050606085013567ffffffffffffffff81111561215657612155611c19565b5b61216287828801612085565b91505092959194509250565b6000819050919050565b6121818161216e565b811461218c57600080fd5b50565b60008135905061219e81612178565b92915050565b6000602082840312156121ba576121b9611c14565b5b60006121c88482850161218f565b91505092915050565b6121da8161216e565b82525050565b60006020820190506121f560008301846121d1565b92915050565b600080600080600060a0868803121561221757612216611c14565b5b600061222588828901611c67565b955050602061223688828901611c67565b945050604086013567ffffffffffffffff81111561225757612256611c19565b5b61226388828901611fd0565b935050606086013567ffffffffffffffff81111561228457612283611c19565b5b61229088828901611fd0565b925050608086013567ffffffffffffffff8111156122b1576122b0611c19565b5b6122bd88828901612085565b9150509295509295909350565b600080604083850312156122e1576122e0611c14565b5b60006122ef8582860161218f565b925050602061230085828601611c67565b9150509250929050565b60008060006060848603121561232357612322611c14565b5b600061233186828701611c67565b935050602061234286828701611c9d565b925050604084013567ffffffffffffffff81111561236357612362611c19565b5b61236f86828701612085565b9150509250925092565b600067ffffffffffffffff82111561239457612393611ebb565b5b602082029050602081019050919050565b60006123b86123b384612379565b611f1b565b905080838252602082019050602084028301858111156123db576123da611f62565b5b835b8181101561240457806123f08882611c67565b8452602084019350506020810190506123dd565b5050509392505050565b600082601f83011261242357612422611eb6565b5b81356124338482602086016123a5565b91505092915050565b6000806040838503121561245357612452611c14565b5b600083013567ffffffffffffffff81111561247157612470611c19565b5b61247d8582860161240e565b925050602083013567ffffffffffffffff81111561249e5761249d611c19565b5b6124aa85828601611fd0565b9150509250929050565b600081519050919050565b600082825260208201905092915050565b6000819050602082019050919050565b6124e981611c7c565b82525050565b60006124fb83836124e0565b60208301905092915050565b6000602082019050919050565b600061251f826124b4565b61252981856124bf565b9350612534836124d0565b8060005b8381101561256557815161254c88826124ef565b975061255783612507565b925050600181019050612538565b5085935050505092915050565b6000602082019050818103600083015261258c8184612514565b905092915050565b600080604083850312156125ab576125aa611c14565b5b60006125b985828601611c67565b925050602083013567ffffffffffffffff8111156125da576125d9611c19565b5b6125e685828601612085565b9150509250929050565b6125f981611da1565b811461260457600080fd5b50565b600081359050612616816125f0565b92915050565b6000806040838503121561263357612632611c14565b5b600061264185828601611c67565b925050602061265285828601612607565b9150509250929050565b6000806040838503121561267357612672611c14565b5b600061268185828601611c67565b925050602061269285828601611c67565b9150509250929050565b600080600080600060a086880312156126b8576126b7611c14565b5b60006126c688828901611c67565b95505060206126d788828901611c67565b94505060406126e888828901611c9d565b93505060606126f988828901611c9d565b925050608086013567ffffffffffffffff81111561271a57612719611c19565b5b61272688828901612085565b9150509295509295909350565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052602260045260246000fd5b6000600282049050600182168061277a57607f821691505b60208210810361278d5761278c612733565b5b50919050565b61279c81611c3e565b82525050565b60006040820190506127b76000830185612793565b6127c46020830184612793565b9392505050565b60006040820190506127e06000830185611cf2565b6127ed6020830184611cf2565b9392505050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052603260045260246000fd5b7f59612073652068616e20617369676e61646f20617369676e61646f20746f646f60008201527f73206c6f7320746974756c6f7300000000000000000000000000000000000000602082015250565b600061287f602d83611e0f565b915061288a82612823565b604082019050919050565b600060208201905081810360008301526128ae81612872565b9050919050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052601160045260246000fd5b60006128ef82611c7c565b91506128fa83611c7c565b9250828201905080821115612912576129116128b5565b5b92915050565b600060208201905061292d6000830184612793565b92915050565b60006040820190506129486000830185612793565b61295560208301846121d1565b9392505050565b60006080820190506129716000830187612793565b61297e6020830186611cf2565b61298b6040830185611cf2565b6129986060830184611cf2565b95945050505050565b600060408201905081810360008301526129bb8185612514565b905081810360208301526129cf8184612514565b90509392505050565b600081519050919050565b600082825260208201905092915050565b60006129ff826129d8565b612a0981856129e3565b9350612a19818560208601611e20565b612a2281611e4a565b840191505092915050565b600060a082019050612a426000830188612793565b612a4f6020830187612793565b612a5c6040830186611cf2565b612a696060830185611cf2565b8181036080830152612a7b81846129f4565b90509695505050505050565b600081519050612a9681611d48565b92915050565b600060208284031215612ab257612ab1611c14565b5b6000612ac084828501612a87565b91505092915050565b600060a082019050612ade6000830188612793565b612aeb6020830187612793565b8181036040830152612afd8186612514565b90508181036060830152612b118185612514565b90508181036080830152612b2581846129f4565b9050969550505050505056fea264697066735822122090ce8e97762468ac972e96ab2db72cb778095ec04ade042f5326ea176c94a45764736f6c634300081c0033",
  "deployedBytecode": "0x608060405234801561001057600080fd5b506004361061014c5760003560e01c80638277d2ee116100c3578063c01f12ce1161007c578063c01f12ce146103ad578063d547741f146103cb578063e93cbda4146103e7578063e985e9c514610405578063f242432a14610435578063fce6f446146104515761014c565b80638277d2ee146102eb57806391d148541461030757806397ac162c14610337578063a217fddf14610355578063a22cb46514610373578063a43198761461038f5761014c565b80632eb2c2d6116101155780632eb2c2d61461022d5780632f2ff15d1461024957806334a8e5e81461026557806336568abe146102835780633bb165b51461029f5780634e1273f4146102bb5761014c565b8062fdd58e1461015157806301ffc9a7146101815780630e89341c146101b15780631f7fdffa146101e1578063248a9ca3146101fd575b600080fd5b61016b60048036038101906101669190611cb2565b61046f565b6040516101789190611d01565b60405180910390f35b61019b60048036038101906101969190611d74565b6104c9565b6040516101a89190611dbc565b60405180910390f35b6101cb60048036038101906101c69190611dd7565b6104eb565b6040516101d89190611e94565b60405180910390f35b6101fb60048036038101906101f691906120b3565b61057f565b005b610217600480360381019061021291906121a4565b6105bc565b60405161022491906121e0565b60405180910390f35b610247600480360381019061024291906121fb565b6105dc565b005b610263600480360381019061025e91906122ca565b610684565b005b61026d6106a6565b60405161027a9190611d01565b60405180910390f35b61029d600480360381019061029891906122ca565b6106ab565b005b6102b960048036038101906102b4919061230a565b610726565b005b6102d560048036038101906102d0919061243c565b610763565b6040516102e29190612572565b60405180910390f35b61030560048036038101906103009190612594565b61086c565b005b610321600480360381019061031c91906122ca565b610908565b60405161032e9190611dbc565b60405180910390f35b61033f610973565b60405161034c9190611d01565b60405180910390f35b61035d610979565b60405161036a91906121e0565b60405180910390f35b61038d6004803603810190610388919061261c565b610980565b005b610397610996565b6040516103a491906121e0565b60405180910390f35b6103b56109ba565b6040516103c291906121e0565b60405180910390f35b6103e560048036038101906103e091906122ca565b6109de565b005b6103ef610a00565b6040516103fc9190611d01565b60405180910390f35b61041f600480360381019061041a919061265c565b610a05565b60405161042c9190611dbc565b60405180910390f35b61044f600480360381019061044a919061269c565b610a99565b005b610459610b41565b6040516104669190611d01565b60405180910390f35b600080600083815260200190815260200160002060008473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002054905092915050565b60006104d482610b46565b806104e457506104e382610c28565b5b9050919050565b6060600280546104fa90612762565b80601f016020809104026020016040519081016040528092919081815260200182805461052690612762565b80156105735780601f1061054857610100808354040283529160200191610573565b820191906000526020600020905b81548152906001019060200180831161055657829003601f168201915b50505050509050919050565b7fdfde78fdd119b4ccde60786fee3cb616076efeecafe2c704383fca389d46a6bc6105a981610ca2565b6105b585858585610cb6565b5050505050565b600060036000838152602001908152602001600020600101549050919050565b60006105e6610d3c565b90508073ffffffffffffffffffffffffffffffffffffffff168673ffffffffffffffffffffffffffffffffffffffff161415801561062b57506106298682610a05565b155b1561066f5780866040517fe237d9220000000000000000000000000000000000000000000000000000000081526004016106669291906127a2565b60405180910390fd5b61067c8686868686610d44565b505050505050565b61068d826105bc565b61069681610ca2565b6106a08383610e3c565b50505050565b600081565b6106b3610d3c565b73ffffffffffffffffffffffffffffffffffffffff168173ffffffffffffffffffffffffffffffffffffffff1614610717576040517f6697b23200000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b6107218282610f2e565b505050565b7fdfde78fdd119b4ccde60786fee3cb616076efeecafe2c704383fca389d46a6bc61075081610ca2565b61075d8460008585611021565b50505050565b606081518351146107af57815183516040517f5b0599910000000000000000000000000000000000000000000000000000000081526004016107a69291906127cb565b60405180910390fd5b6000835167ffffffffffffffff8111156107cc576107cb611ebb565b5b6040519080825280602002602001820160405280156107fa5781602001602082028036833780820191505090505b50905060005b84518110156108615761083761081f82876110ba90919063ffffffff16565b61083283876110ce90919063ffffffff16565b61046f565b82828151811061084a576108496127f4565b5b602002602001018181525050806001019050610800565b508091505092915050565b7f0500d362a92e3bf9fc14564a9862507583ac61f2ae0151e104b174a0ed8a755c61089681610ca2565b600360045411156108dc576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016108d390612895565b60405180910390fd5b6108e98360018085611021565b6001600460008282546108fc91906128e4565b92505081905550505050565b60006003600084815260200190815260200160002060000160008373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060009054906101000a900460ff16905092915050565b60045481565b6000801b81565b61099261098b610d3c565b83836110e2565b5050565b7f0500d362a92e3bf9fc14564a9862507583ac61f2ae0151e104b174a0ed8a755c81565b7fdfde78fdd119b4ccde60786fee3cb616076efeecafe2c704383fca389d46a6bc81565b6109e7826105bc565b6109f081610ca2565b6109fa8383610f2e565b50505050565b600181565b6000600160008473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060008373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060009054906101000a900460ff16905092915050565b6000610aa3610d3c565b90508073ffffffffffffffffffffffffffffffffffffffff168673ffffffffffffffffffffffffffffffffffffffff1614158015610ae85750610ae68682610a05565b155b15610b2c5780866040517fe237d922000000000000000000000000000000000000000000000000000000008152600401610b239291906127a2565b60405180910390fd5b610b398686868686611252565b505050505050565b600381565b60007fd9b67a26000000000000000000000000000000000000000000000000000000007bffffffffffffffffffffffffffffffffffffffffffffffffffffffff1916827bffffffffffffffffffffffffffffffffffffffffffffffffffffffff19161480610c1157507f0e89341c000000000000000000000000000000000000000000000000000000007bffffffffffffffffffffffffffffffffffffffffffffffffffffffff1916827bffffffffffffffffffffffffffffffffffffffffffffffffffffffff1916145b80610c215750610c208261135d565b5b9050919050565b60007f7965db0b000000000000000000000000000000000000000000000000000000007bffffffffffffffffffffffffffffffffffffffffffffffffffffffff1916827bffffffffffffffffffffffffffffffffffffffffffffffffffffffff19161480610c9b5750610c9a82610b46565b5b9050919050565b610cb381610cae610d3c565b6113c7565b50565b600073ffffffffffffffffffffffffffffffffffffffff168473ffffffffffffffffffffffffffffffffffffffff1603610d285760006040517f57f447ce000000000000000000000000000000000000000000000000000000008152600401610d1f9190612918565b60405180910390fd5b610d36600085858585611418565b50505050565b600033905090565b600073ffffffffffffffffffffffffffffffffffffffff168473ffffffffffffffffffffffffffffffffffffffff1603610db65760006040517f57f447ce000000000000000000000000000000000000000000000000000000008152600401610dad9190612918565b60405180910390fd5b600073ffffffffffffffffffffffffffffffffffffffff168573ffffffffffffffffffffffffffffffffffffffff1603610e285760006040517f01a83514000000000000000000000000000000000000000000000000000000008152600401610e1f9190612918565b60405180910390fd5b610e358585858585611418565b5050505050565b6000610e488383610908565b610f235760016003600085815260200190815260200160002060000160008473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060006101000a81548160ff021916908315150217905550610ec0610d3c565b73ffffffffffffffffffffffffffffffffffffffff168273ffffffffffffffffffffffffffffffffffffffff16847f2f8788117e7eff1d82e926ec794901d17c78024a50270940304540a733656f0d60405160405180910390a460019050610f28565b600090505b92915050565b6000610f3a8383610908565b156110165760006003600085815260200190815260200160002060000160008473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060006101000a81548160ff021916908315150217905550610fb3610d3c565b73ffffffffffffffffffffffffffffffffffffffff168273ffffffffffffffffffffffffffffffffffffffff16847ff6391f5c32d9c69d2a47ea670b442974b53935d1edc7fd64eb21e047a839171b60405160405180910390a46001905061101b565b600090505b92915050565b600073ffffffffffffffffffffffffffffffffffffffff168473ffffffffffffffffffffffffffffffffffffffff16036110935760006040517f57f447ce00000000000000000000000000000000000000000000000000000000815260040161108a9190612918565b60405180910390fd5b6000806110a085856114ca565b915091506110b2600087848487611418565b505050505050565b600060208202602084010151905092915050565b600060208202602084010151905092915050565b600073ffffffffffffffffffffffffffffffffffffffff168273ffffffffffffffffffffffffffffffffffffffff16036111545760006040517fced3e10000000000000000000000000000000000000000000000000000000000815260040161114b9190612918565b60405180910390fd5b80600160008573ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060008473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060006101000a81548160ff0219169083151502179055508173ffffffffffffffffffffffffffffffffffffffff168373ffffffffffffffffffffffffffffffffffffffff167f17307eab39ab6107e8899845ad3d59bd9653f200f220920489ca2b5937696c31836040516112459190611dbc565b60405180910390a3505050565b600073ffffffffffffffffffffffffffffffffffffffff168473ffffffffffffffffffffffffffffffffffffffff16036112c45760006040517f57f447ce0000000000000000000000000000000000000000000000000000000081526004016112bb9190612918565b60405180910390fd5b600073ffffffffffffffffffffffffffffffffffffffff168573ffffffffffffffffffffffffffffffffffffffff16036113365760006040517f01a8351400000000000000000000000000000000000000000000000000000000815260040161132d9190612918565b60405180910390fd5b60008061134385856114ca565b915091506113548787848487611418565b50505050505050565b60007f01ffc9a7000000000000000000000000000000000000000000000000000000007bffffffffffffffffffffffffffffffffffffffffffffffffffffffff1916827bffffffffffffffffffffffffffffffffffffffffffffffffffffffff1916149050919050565b6113d18282610908565b6114145780826040517fe2517d3f00000000000000000000000000000000000000000000000000000000815260040161140b929190612933565b60405180910390fd5b5050565b611424858585856114fa565b600073ffffffffffffffffffffffffffffffffffffffff168473ffffffffffffffffffffffffffffffffffffffff16146114c3576000611462610d3c565b905060018451036114b25760006114836000866110ce90919063ffffffff16565b9050600061149b6000866110ce90919063ffffffff16565b90506114ab8389898585896118a2565b50506114c1565b6114c0818787878787611a56565b5b505b5050505050565b60608060405191506001825283602083015260408201905060018152826020820152604081016040529250929050565b805182511461154457815181516040517f5b05999100000000000000000000000000000000000000000000000000000000815260040161153b9291906127cb565b60405180910390fd5b600061154e610d3c565b905060005b835181101561175d57600061157182866110ce90919063ffffffff16565b9050600061158883866110ce90919063ffffffff16565b9050600073ffffffffffffffffffffffffffffffffffffffff168873ffffffffffffffffffffffffffffffffffffffff16146116b557600080600084815260200190815260200160002060008a73ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020016000205490508181101561165d57888183856040517f03dee4c5000000000000000000000000000000000000000000000000000000008152600401611654949392919061295c565b60405180910390fd5b81810360008085815260200190815260200160002060008b73ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002081905550505b600073ffffffffffffffffffffffffffffffffffffffff168773ffffffffffffffffffffffffffffffffffffffff1614611750578060008084815260200190815260200160002060008973ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020600082825461174891906128e4565b925050819055505b5050806001019050611553565b50600183510361181c57600061177d6000856110ce90919063ffffffff16565b905060006117956000856110ce90919063ffffffff16565b90508573ffffffffffffffffffffffffffffffffffffffff168773ffffffffffffffffffffffffffffffffffffffff168473ffffffffffffffffffffffffffffffffffffffff167fc3d58168c5ae7397731d063d5bbf3d657854427343f4c083240f7aacaa2d0f62858560405161180d9291906127cb565b60405180910390a4505061189b565b8373ffffffffffffffffffffffffffffffffffffffff168573ffffffffffffffffffffffffffffffffffffffff168273ffffffffffffffffffffffffffffffffffffffff167f4a39dc06d4c0dbc64b70af90fd698a233a518aa5d07e595d983b8c0526c8f7fb86866040516118929291906129a1565b60405180910390a45b5050505050565b60008473ffffffffffffffffffffffffffffffffffffffff163b1115611a4e578373ffffffffffffffffffffffffffffffffffffffff1663f23a6e6187878686866040518663ffffffff1660e01b8152600401611903959493929190612a2d565b6020604051808303816000875af192505050801561193f57506040513d601f19601f8201168201806040525081019061193c9190612a9c565b60015b6119c3573d806000811461196f576040519150601f19603f3d011682016040523d82523d6000602084013e611974565b606091505b5060008151036119bb57846040517f57f447ce0000000000000000000000000000000000000000000000000000000081526004016119b29190612918565b60405180910390fd5b805181602001fd5b63f23a6e6160e01b7bffffffffffffffffffffffffffffffffffffffffffffffffffffffff1916817bffffffffffffffffffffffffffffffffffffffffffffffffffffffff191614611a4c57846040517f57f447ce000000000000000000000000000000000000000000000000000000008152600401611a439190612918565b60405180910390fd5b505b505050505050565b60008473ffffffffffffffffffffffffffffffffffffffff163b1115611c02578373ffffffffffffffffffffffffffffffffffffffff1663bc197c8187878686866040518663ffffffff1660e01b8152600401611ab7959493929190612ac9565b6020604051808303816000875af1925050508015611af357506040513d601f19601f82011682018060405250810190611af09190612a9c565b60015b611b77573d8060008114611b23576040519150601f19603f3d011682016040523d82523d6000602084013e611b28565b606091505b506000815103611b6f57846040517f57f447ce000000000000000000000000000000000000000000000000000000008152600401611b669190612918565b60405180910390fd5b805181602001fd5b63bc197c8160e01b7bffffffffffffffffffffffffffffffffffffffffffffffffffffffff1916817bffffffffffffffffffffffffffffffffffffffffffffffffffffffff191614611c0057846040517f57f447ce000000000000000000000000000000000000000000000000000000008152600401611bf79190612918565b60405180910390fd5b505b505050505050565b6000604051905090565b600080fd5b600080fd5b600073ffffffffffffffffffffffffffffffffffffffff82169050919050565b6000611c4982611c1e565b9050919050565b611c5981611c3e565b8114611c6457600080fd5b50565b600081359050611c7681611c50565b92915050565b6000819050919050565b611c8f81611c7c565b8114611c9a57600080fd5b50565b600081359050611cac81611c86565b92915050565b60008060408385031215611cc957611cc8611c14565b5b6000611cd785828601611c67565b9250506020611ce885828601611c9d565b9150509250929050565b611cfb81611c7c565b82525050565b6000602082019050611d166000830184611cf2565b92915050565b60007fffffffff0000000000000000000000000000000000000000000000000000000082169050919050565b611d5181611d1c565b8114611d5c57600080fd5b50565b600081359050611d6e81611d48565b92915050565b600060208284031215611d8a57611d89611c14565b5b6000611d9884828501611d5f565b91505092915050565b60008115159050919050565b611db681611da1565b82525050565b6000602082019050611dd16000830184611dad565b92915050565b600060208284031215611ded57611dec611c14565b5b6000611dfb84828501611c9d565b91505092915050565b600081519050919050565b600082825260208201905092915050565b60005b83811015611e3e578082015181840152602081019050611e23565b60008484015250505050565b6000601f19601f8301169050919050565b6000611e6682611e04565b611e708185611e0f565b9350611e80818560208601611e20565b611e8981611e4a565b840191505092915050565b60006020820190508181036000830152611eae8184611e5b565b905092915050565b600080fd5b7f4e487b7100000000000000000000000000000000000000000000000000000000600052604160045260246000fd5b611ef382611e4a565b810181811067ffffffffffffffff82111715611f1257611f11611ebb565b5b80604052505050565b6000611f25611c0a565b9050611f318282611eea565b919050565b600067ffffffffffffffff821115611f5157611f50611ebb565b5b602082029050602081019050919050565b600080fd5b6000611f7a611f7584611f36565b611f1b565b90508083825260208201905060208402830185811115611f9d57611f9c611f62565b5b835b81811015611fc65780611fb28882611c9d565b845260208401935050602081019050611f9f565b5050509392505050565b600082601f830112611fe557611fe4611eb6565b5b8135611ff5848260208601611f67565b91505092915050565b600080fd5b600067ffffffffffffffff82111561201e5761201d611ebb565b5b61202782611e4a565b9050602081019050919050565b82818337600083830152505050565b600061205661205184612003565b611f1b565b90508281526020810184848401111561207257612071611ffe565b5b61207d848285612034565b509392505050565b600082601f83011261209a57612099611eb6565b5b81356120aa848260208601612043565b91505092915050565b600080600080608085870312156120cd576120cc611c14565b5b60006120db87828801611c67565b945050602085013567ffffffffffffffff8111156120fc576120fb611c19565b5b61210887828801611fd0565b935050604085013567ffffffffffffffff81111561212957612128611c19565b5b61213587828801611fd0565b925050606085013567ffffffffffffffff81111561215657612155611c19565b5b61216287828801612085565b91505092959194509250565b6000819050919050565b6121818161216e565b811461218c57600080fd5b50565b60008135905061219e81612178565b92915050565b6000602082840312156121ba576121b9611c14565b5b60006121c88482850161218f565b91505092915050565b6121da8161216e565b82525050565b60006020820190506121f560008301846121d1565b92915050565b600080600080600060a0868803121561221757612216611c14565b5b600061222588828901611c67565b955050602061223688828901611c67565b945050604086013567ffffffffffffffff81111561225757612256611c19565b5b61226388828901611fd0565b935050606086013567ffffffffffffffff81111561228457612283611c19565b5b61229088828901611fd0565b925050608086013567ffffffffffffffff8111156122b1576122b0611c19565b5b6122bd88828901612085565b9150509295509295909350565b600080604083850312156122e1576122e0611c14565b5b60006122ef8582860161218f565b925050602061230085828601611c67565b9150509250929050565b60008060006060848603121561232357612322611c14565b5b600061233186828701611c67565b935050602061234286828701611c9d565b925050604084013567ffffffffffffffff81111561236357612362611c19565b5b61236f86828701612085565b9150509250925092565b600067ffffffffffffffff82111561239457612393611ebb565b5b602082029050602081019050919050565b60006123b86123b384612379565b611f1b565b905080838252602082019050602084028301858111156123db576123da611f62565b5b835b8181101561240457806123f08882611c67565b8452602084019350506020810190506123dd565b5050509392505050565b600082601f83011261242357612422611eb6565b5b81356124338482602086016123a5565b91505092915050565b6000806040838503121561245357612452611c14565b5b600083013567ffffffffffffffff81111561247157612470611c19565b5b61247d8582860161240e565b925050602083013567ffffffffffffffff81111561249e5761249d611c19565b5b6124aa85828601611fd0565b9150509250929050565b600081519050919050565b600082825260208201905092915050565b6000819050602082019050919050565b6124e981611c7c565b82525050565b60006124fb83836124e0565b60208301905092915050565b6000602082019050919050565b600061251f826124b4565b61252981856124bf565b9350612534836124d0565b8060005b8381101561256557815161254c88826124ef565b975061255783612507565b925050600181019050612538565b5085935050505092915050565b6000602082019050818103600083015261258c8184612514565b905092915050565b600080604083850312156125ab576125aa611c14565b5b60006125b985828601611c67565b925050602083013567ffffffffffffffff8111156125da576125d9611c19565b5b6125e685828601612085565b9150509250929050565b6125f981611da1565b811461260457600080fd5b50565b600081359050612616816125f0565b92915050565b6000806040838503121561263357612632611c14565b5b600061264185828601611c67565b925050602061265285828601612607565b9150509250929050565b6000806040838503121561267357612672611c14565b5b600061268185828601611c67565b925050602061269285828601611c67565b9150509250929050565b600080600080600060a086880312156126b8576126b7611c14565b5b60006126c688828901611c67565b95505060206126d788828901611c67565b94505060406126e888828901611c9d565b93505060606126f988828901611c9d565b925050608086013567ffffffffffffffff81111561271a57612719611c19565b5b61272688828901612085565b9150509295509295909350565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052602260045260246000fd5b6000600282049050600182168061277a57607f821691505b60208210810361278d5761278c612733565b5b50919050565b61279c81611c3e565b82525050565b60006040820190506127b76000830185612793565b6127c46020830184612793565b9392505050565b60006040820190506127e06000830185611cf2565b6127ed6020830184611cf2565b9392505050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052603260045260246000fd5b7f59612073652068616e20617369676e61646f20617369676e61646f20746f646f60008201527f73206c6f7320746974756c6f7300000000000000000000000000000000000000602082015250565b600061287f602d83611e0f565b915061288a82612823565b604082019050919050565b600060208201905081810360008301526128ae81612872565b9050919050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052601160045260246000fd5b60006128ef82611c7c565b91506128fa83611c7c565b9250828201905080821115612912576129116128b5565b5b92915050565b600060208201905061292d6000830184612793565b92915050565b60006040820190506129486000830185612793565b61295560208301846121d1565b9392505050565b60006080820190506129716000830187612793565b61297e6020830186611cf2565b61298b6040830185611cf2565b6129986060830184611cf2565b95945050505050565b600060408201905081810360008301526129bb8185612514565b905081810360208301526129cf8184612514565b90509392505050565b600081519050919050565b600082825260208201905092915050565b60006129ff826129d8565b612a0981856129e3565b9350612a19818560208601611e20565b612a2281611e4a565b840191505092915050565b600060a082019050612a426000830188612793565b612a4f6020830187612793565b612a5c6040830186611cf2565b612a696060830185611cf2565b8181036080830152612a7b81846129f4565b90509695505050505050565b600081519050612a9681611d48565b92915050565b600060208284031215612ab257612ab1611c14565b5b6000612ac084828501612a87565b91505092915050565b600060a082019050612ade6000830188612793565b612aeb6020830187612793565b8181036040830152612afd8186612514565b90508181036060830152612b118185612514565b90508181036080830152612b2581846129f4565b9050969550505050505056fea264697066735822122090ce8e97762468ac972e96ab2db72cb778095ec04ade042f5326ea176c94a45764736f6c634300081c0033",
  "linkReferences": {},
  "deployedLinkReferences": {}
}
