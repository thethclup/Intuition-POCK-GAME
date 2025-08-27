import { type Abi } from 'viem';

export const MULTIVAULT_ADDRESS = (process.env.NEXT_PUBLIC_MULTIVAULT_CONTRACT_ADDRESS ||
  process.env.MULTIVAULT_CONTRACT_ADDRESS ||
  '0x1A6950807E33d5bC9975067e6D6b5Ea4cD661665') as `0x${string}`;

// GraphQL endpoint (Base Sepolia için varsayılan)
export const GRAPHQL_URL =
  process.env.NEXT_PUBLIC_INTUITION_GRAPHQL_URL ||
  process.env.INTUITION_GRAPHQL_URL ||
  'https://dev.base-sepolia.intuition-api.com/v1/graphql';

// Minimal ABI subset
export const MULTIVAULT_ABI: Abi = [
  {
    type: 'function',
    name: 'getAtomCost',
    stateMutability: 'view',
    inputs: [],
    outputs: [{ name: '', type: 'uint256' }]
  },
  {
    type: 'function',
    name: 'createAtom',
    stateMutability: 'payable',
    inputs: [{ name: 'atomUri', type: 'bytes' }],
    outputs: [{ name: '', type: 'uint256' }]
  },
  {
    type: 'function',
    name: 'atomsByHash',
    stateMutability: 'view',
    inputs: [{ name: 'hash', type: 'bytes32' }],
    outputs: [{ name: '', type: 'uint256' }]
  }
];
