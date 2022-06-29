# NELO Token

This repository holds the *NELO* token contract code used for deployment.

## Information

BSC: [0xa9a2565c7e055eee01e944cf4d6836074100fdf3](https://bscscan.com/token/0xa9a2565c7e055eee01e944cf4d6836074100fdf3)

Total supply: 1 billion

## Compile token contract

```shell
npx hardhat compile
```

## Deploy token contract

```shell
npx hardhat run --network bsc scripts/deploy.js
```

## Verifying contracts

```shell
npx hardhat verify "<contract-address>" --network bsc
```

### Nelo Token

```shell
npx hardhat verify "<token-contract-address>" --network bsc NELO NELO 1000000000000000000000000000
```
