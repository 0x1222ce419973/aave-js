/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import {
  ethers,
  EventFilter,
  Signer,
  BigNumber,
  BigNumberish,
  PopulatedTransaction,
} from "ethers";
import {
  Contract,
  ContractTransaction,
  CallOverrides,
} from "@ethersproject/contracts";
import { BytesLike } from "@ethersproject/bytes";
import { Listener, Provider } from "@ethersproject/providers";
import { FunctionFragment, EventFragment, Result } from "@ethersproject/abi";

interface IGovernanceV2HelperInterface extends ethers.utils.Interface {
  functions: {
    "getProposal(uint256,address)": FunctionFragment;
    "getProposals(uint256,uint256,address)": FunctionFragment;
    "getTokensPower(address,address[],address)": FunctionFragment;
  };

  encodeFunctionData(
    functionFragment: "getProposal",
    values: [BigNumberish, string]
  ): string;
  encodeFunctionData(
    functionFragment: "getProposals",
    values: [BigNumberish, BigNumberish, string]
  ): string;
  encodeFunctionData(
    functionFragment: "getTokensPower",
    values: [string, string[], string]
  ): string;

  decodeFunctionResult(
    functionFragment: "getProposal",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "getProposals",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "getTokensPower",
    data: BytesLike
  ): Result;

  events: {};
}

export class IGovernanceV2Helper extends Contract {
  connect(signerOrProvider: Signer | Provider | string): this;
  attach(addressOrName: string): this;
  deployed(): Promise<this>;

  on(event: EventFilter | string, listener: Listener): this;
  once(event: EventFilter | string, listener: Listener): this;
  addListener(eventName: EventFilter | string, listener: Listener): this;
  removeAllListeners(eventName: EventFilter | string): this;
  removeListener(eventName: any, listener: Listener): this;

  interface: IGovernanceV2HelperInterface;

  functions: {
    getProposal(
      id: BigNumberish,
      governance: string,
      overrides?: CallOverrides
    ): Promise<{
      proposalStats: {
        totalVotingSupply: BigNumber;
        minimumQuorum: BigNumber;
        minimumDiff: BigNumber;
        executionTimeWithGracePeriod: BigNumber;
        proposalCreated: BigNumber;
        id: BigNumber;
        creator: string;
        executor: string;
        targets: string[];
        values: BigNumber[];
        signatures: string[];
        calldatas: string[];
        withDelegatecalls: boolean[];
        startBlock: BigNumber;
        endBlock: BigNumber;
        executionTime: BigNumber;
        forVotes: BigNumber;
        againstVotes: BigNumber;
        executed: boolean;
        canceled: boolean;
        strategy: string;
        ipfsHash: string;
        proposalState: number;
        0: BigNumber;
        1: BigNumber;
        2: BigNumber;
        3: BigNumber;
        4: BigNumber;
        5: BigNumber;
        6: string;
        7: string;
        8: string[];
        9: BigNumber[];
        10: string[];
        11: string[];
        12: boolean[];
        13: BigNumber;
        14: BigNumber;
        15: BigNumber;
        16: BigNumber;
        17: BigNumber;
        18: boolean;
        19: boolean;
        20: string;
        21: string;
        22: number;
      };
      0: {
        totalVotingSupply: BigNumber;
        minimumQuorum: BigNumber;
        minimumDiff: BigNumber;
        executionTimeWithGracePeriod: BigNumber;
        proposalCreated: BigNumber;
        id: BigNumber;
        creator: string;
        executor: string;
        targets: string[];
        values: BigNumber[];
        signatures: string[];
        calldatas: string[];
        withDelegatecalls: boolean[];
        startBlock: BigNumber;
        endBlock: BigNumber;
        executionTime: BigNumber;
        forVotes: BigNumber;
        againstVotes: BigNumber;
        executed: boolean;
        canceled: boolean;
        strategy: string;
        ipfsHash: string;
        proposalState: number;
        0: BigNumber;
        1: BigNumber;
        2: BigNumber;
        3: BigNumber;
        4: BigNumber;
        5: BigNumber;
        6: string;
        7: string;
        8: string[];
        9: BigNumber[];
        10: string[];
        11: string[];
        12: boolean[];
        13: BigNumber;
        14: BigNumber;
        15: BigNumber;
        16: BigNumber;
        17: BigNumber;
        18: boolean;
        19: boolean;
        20: string;
        21: string;
        22: number;
      };
    }>;

    "getProposal(uint256,address)"(
      id: BigNumberish,
      governance: string,
      overrides?: CallOverrides
    ): Promise<{
      proposalStats: {
        totalVotingSupply: BigNumber;
        minimumQuorum: BigNumber;
        minimumDiff: BigNumber;
        executionTimeWithGracePeriod: BigNumber;
        proposalCreated: BigNumber;
        id: BigNumber;
        creator: string;
        executor: string;
        targets: string[];
        values: BigNumber[];
        signatures: string[];
        calldatas: string[];
        withDelegatecalls: boolean[];
        startBlock: BigNumber;
        endBlock: BigNumber;
        executionTime: BigNumber;
        forVotes: BigNumber;
        againstVotes: BigNumber;
        executed: boolean;
        canceled: boolean;
        strategy: string;
        ipfsHash: string;
        proposalState: number;
        0: BigNumber;
        1: BigNumber;
        2: BigNumber;
        3: BigNumber;
        4: BigNumber;
        5: BigNumber;
        6: string;
        7: string;
        8: string[];
        9: BigNumber[];
        10: string[];
        11: string[];
        12: boolean[];
        13: BigNumber;
        14: BigNumber;
        15: BigNumber;
        16: BigNumber;
        17: BigNumber;
        18: boolean;
        19: boolean;
        20: string;
        21: string;
        22: number;
      };
      0: {
        totalVotingSupply: BigNumber;
        minimumQuorum: BigNumber;
        minimumDiff: BigNumber;
        executionTimeWithGracePeriod: BigNumber;
        proposalCreated: BigNumber;
        id: BigNumber;
        creator: string;
        executor: string;
        targets: string[];
        values: BigNumber[];
        signatures: string[];
        calldatas: string[];
        withDelegatecalls: boolean[];
        startBlock: BigNumber;
        endBlock: BigNumber;
        executionTime: BigNumber;
        forVotes: BigNumber;
        againstVotes: BigNumber;
        executed: boolean;
        canceled: boolean;
        strategy: string;
        ipfsHash: string;
        proposalState: number;
        0: BigNumber;
        1: BigNumber;
        2: BigNumber;
        3: BigNumber;
        4: BigNumber;
        5: BigNumber;
        6: string;
        7: string;
        8: string[];
        9: BigNumber[];
        10: string[];
        11: string[];
        12: boolean[];
        13: BigNumber;
        14: BigNumber;
        15: BigNumber;
        16: BigNumber;
        17: BigNumber;
        18: boolean;
        19: boolean;
        20: string;
        21: string;
        22: number;
      };
    }>;

    getProposals(
      skip: BigNumberish,
      limit: BigNumberish,
      governance: string,
      overrides?: CallOverrides
    ): Promise<{
      proposalsStats: {
        totalVotingSupply: BigNumber;
        minimumQuorum: BigNumber;
        minimumDiff: BigNumber;
        executionTimeWithGracePeriod: BigNumber;
        proposalCreated: BigNumber;
        id: BigNumber;
        creator: string;
        executor: string;
        targets: string[];
        values: BigNumber[];
        signatures: string[];
        calldatas: string[];
        withDelegatecalls: boolean[];
        startBlock: BigNumber;
        endBlock: BigNumber;
        executionTime: BigNumber;
        forVotes: BigNumber;
        againstVotes: BigNumber;
        executed: boolean;
        canceled: boolean;
        strategy: string;
        ipfsHash: string;
        proposalState: number;
        0: BigNumber;
        1: BigNumber;
        2: BigNumber;
        3: BigNumber;
        4: BigNumber;
        5: BigNumber;
        6: string;
        7: string;
        8: string[];
        9: BigNumber[];
        10: string[];
        11: string[];
        12: boolean[];
        13: BigNumber;
        14: BigNumber;
        15: BigNumber;
        16: BigNumber;
        17: BigNumber;
        18: boolean;
        19: boolean;
        20: string;
        21: string;
        22: number;
      }[];
      0: {
        totalVotingSupply: BigNumber;
        minimumQuorum: BigNumber;
        minimumDiff: BigNumber;
        executionTimeWithGracePeriod: BigNumber;
        proposalCreated: BigNumber;
        id: BigNumber;
        creator: string;
        executor: string;
        targets: string[];
        values: BigNumber[];
        signatures: string[];
        calldatas: string[];
        withDelegatecalls: boolean[];
        startBlock: BigNumber;
        endBlock: BigNumber;
        executionTime: BigNumber;
        forVotes: BigNumber;
        againstVotes: BigNumber;
        executed: boolean;
        canceled: boolean;
        strategy: string;
        ipfsHash: string;
        proposalState: number;
        0: BigNumber;
        1: BigNumber;
        2: BigNumber;
        3: BigNumber;
        4: BigNumber;
        5: BigNumber;
        6: string;
        7: string;
        8: string[];
        9: BigNumber[];
        10: string[];
        11: string[];
        12: boolean[];
        13: BigNumber;
        14: BigNumber;
        15: BigNumber;
        16: BigNumber;
        17: BigNumber;
        18: boolean;
        19: boolean;
        20: string;
        21: string;
        22: number;
      }[];
    }>;

    "getProposals(uint256,uint256,address)"(
      skip: BigNumberish,
      limit: BigNumberish,
      governance: string,
      overrides?: CallOverrides
    ): Promise<{
      proposalsStats: {
        totalVotingSupply: BigNumber;
        minimumQuorum: BigNumber;
        minimumDiff: BigNumber;
        executionTimeWithGracePeriod: BigNumber;
        proposalCreated: BigNumber;
        id: BigNumber;
        creator: string;
        executor: string;
        targets: string[];
        values: BigNumber[];
        signatures: string[];
        calldatas: string[];
        withDelegatecalls: boolean[];
        startBlock: BigNumber;
        endBlock: BigNumber;
        executionTime: BigNumber;
        forVotes: BigNumber;
        againstVotes: BigNumber;
        executed: boolean;
        canceled: boolean;
        strategy: string;
        ipfsHash: string;
        proposalState: number;
        0: BigNumber;
        1: BigNumber;
        2: BigNumber;
        3: BigNumber;
        4: BigNumber;
        5: BigNumber;
        6: string;
        7: string;
        8: string[];
        9: BigNumber[];
        10: string[];
        11: string[];
        12: boolean[];
        13: BigNumber;
        14: BigNumber;
        15: BigNumber;
        16: BigNumber;
        17: BigNumber;
        18: boolean;
        19: boolean;
        20: string;
        21: string;
        22: number;
      }[];
      0: {
        totalVotingSupply: BigNumber;
        minimumQuorum: BigNumber;
        minimumDiff: BigNumber;
        executionTimeWithGracePeriod: BigNumber;
        proposalCreated: BigNumber;
        id: BigNumber;
        creator: string;
        executor: string;
        targets: string[];
        values: BigNumber[];
        signatures: string[];
        calldatas: string[];
        withDelegatecalls: boolean[];
        startBlock: BigNumber;
        endBlock: BigNumber;
        executionTime: BigNumber;
        forVotes: BigNumber;
        againstVotes: BigNumber;
        executed: boolean;
        canceled: boolean;
        strategy: string;
        ipfsHash: string;
        proposalState: number;
        0: BigNumber;
        1: BigNumber;
        2: BigNumber;
        3: BigNumber;
        4: BigNumber;
        5: BigNumber;
        6: string;
        7: string;
        8: string[];
        9: BigNumber[];
        10: string[];
        11: string[];
        12: boolean[];
        13: BigNumber;
        14: BigNumber;
        15: BigNumber;
        16: BigNumber;
        17: BigNumber;
        18: boolean;
        19: boolean;
        20: string;
        21: string;
        22: number;
      }[];
    }>;

    getTokensPower(
      user: string,
      tokens: string[],
      governance: string,
      overrides?: CallOverrides
    ): Promise<{
      power: {
        votingPower: BigNumber;
        delegatedAddressVotingPower: string;
        propositionPower: BigNumber;
        delegatedAddressPropositionPower: string;
        0: BigNumber;
        1: string;
        2: BigNumber;
        3: string;
      }[];
      0: {
        votingPower: BigNumber;
        delegatedAddressVotingPower: string;
        propositionPower: BigNumber;
        delegatedAddressPropositionPower: string;
        0: BigNumber;
        1: string;
        2: BigNumber;
        3: string;
      }[];
    }>;

    "getTokensPower(address,address[],address)"(
      user: string,
      tokens: string[],
      governance: string,
      overrides?: CallOverrides
    ): Promise<{
      power: {
        votingPower: BigNumber;
        delegatedAddressVotingPower: string;
        propositionPower: BigNumber;
        delegatedAddressPropositionPower: string;
        0: BigNumber;
        1: string;
        2: BigNumber;
        3: string;
      }[];
      0: {
        votingPower: BigNumber;
        delegatedAddressVotingPower: string;
        propositionPower: BigNumber;
        delegatedAddressPropositionPower: string;
        0: BigNumber;
        1: string;
        2: BigNumber;
        3: string;
      }[];
    }>;
  };

  getProposal(
    id: BigNumberish,
    governance: string,
    overrides?: CallOverrides
  ): Promise<{
    totalVotingSupply: BigNumber;
    minimumQuorum: BigNumber;
    minimumDiff: BigNumber;
    executionTimeWithGracePeriod: BigNumber;
    proposalCreated: BigNumber;
    id: BigNumber;
    creator: string;
    executor: string;
    targets: string[];
    values: BigNumber[];
    signatures: string[];
    calldatas: string[];
    withDelegatecalls: boolean[];
    startBlock: BigNumber;
    endBlock: BigNumber;
    executionTime: BigNumber;
    forVotes: BigNumber;
    againstVotes: BigNumber;
    executed: boolean;
    canceled: boolean;
    strategy: string;
    ipfsHash: string;
    proposalState: number;
    0: BigNumber;
    1: BigNumber;
    2: BigNumber;
    3: BigNumber;
    4: BigNumber;
    5: BigNumber;
    6: string;
    7: string;
    8: string[];
    9: BigNumber[];
    10: string[];
    11: string[];
    12: boolean[];
    13: BigNumber;
    14: BigNumber;
    15: BigNumber;
    16: BigNumber;
    17: BigNumber;
    18: boolean;
    19: boolean;
    20: string;
    21: string;
    22: number;
  }>;

  "getProposal(uint256,address)"(
    id: BigNumberish,
    governance: string,
    overrides?: CallOverrides
  ): Promise<{
    totalVotingSupply: BigNumber;
    minimumQuorum: BigNumber;
    minimumDiff: BigNumber;
    executionTimeWithGracePeriod: BigNumber;
    proposalCreated: BigNumber;
    id: BigNumber;
    creator: string;
    executor: string;
    targets: string[];
    values: BigNumber[];
    signatures: string[];
    calldatas: string[];
    withDelegatecalls: boolean[];
    startBlock: BigNumber;
    endBlock: BigNumber;
    executionTime: BigNumber;
    forVotes: BigNumber;
    againstVotes: BigNumber;
    executed: boolean;
    canceled: boolean;
    strategy: string;
    ipfsHash: string;
    proposalState: number;
    0: BigNumber;
    1: BigNumber;
    2: BigNumber;
    3: BigNumber;
    4: BigNumber;
    5: BigNumber;
    6: string;
    7: string;
    8: string[];
    9: BigNumber[];
    10: string[];
    11: string[];
    12: boolean[];
    13: BigNumber;
    14: BigNumber;
    15: BigNumber;
    16: BigNumber;
    17: BigNumber;
    18: boolean;
    19: boolean;
    20: string;
    21: string;
    22: number;
  }>;

  getProposals(
    skip: BigNumberish,
    limit: BigNumberish,
    governance: string,
    overrides?: CallOverrides
  ): Promise<
    {
      totalVotingSupply: BigNumber;
      minimumQuorum: BigNumber;
      minimumDiff: BigNumber;
      executionTimeWithGracePeriod: BigNumber;
      proposalCreated: BigNumber;
      id: BigNumber;
      creator: string;
      executor: string;
      targets: string[];
      values: BigNumber[];
      signatures: string[];
      calldatas: string[];
      withDelegatecalls: boolean[];
      startBlock: BigNumber;
      endBlock: BigNumber;
      executionTime: BigNumber;
      forVotes: BigNumber;
      againstVotes: BigNumber;
      executed: boolean;
      canceled: boolean;
      strategy: string;
      ipfsHash: string;
      proposalState: number;
      0: BigNumber;
      1: BigNumber;
      2: BigNumber;
      3: BigNumber;
      4: BigNumber;
      5: BigNumber;
      6: string;
      7: string;
      8: string[];
      9: BigNumber[];
      10: string[];
      11: string[];
      12: boolean[];
      13: BigNumber;
      14: BigNumber;
      15: BigNumber;
      16: BigNumber;
      17: BigNumber;
      18: boolean;
      19: boolean;
      20: string;
      21: string;
      22: number;
    }[]
  >;

  "getProposals(uint256,uint256,address)"(
    skip: BigNumberish,
    limit: BigNumberish,
    governance: string,
    overrides?: CallOverrides
  ): Promise<
    {
      totalVotingSupply: BigNumber;
      minimumQuorum: BigNumber;
      minimumDiff: BigNumber;
      executionTimeWithGracePeriod: BigNumber;
      proposalCreated: BigNumber;
      id: BigNumber;
      creator: string;
      executor: string;
      targets: string[];
      values: BigNumber[];
      signatures: string[];
      calldatas: string[];
      withDelegatecalls: boolean[];
      startBlock: BigNumber;
      endBlock: BigNumber;
      executionTime: BigNumber;
      forVotes: BigNumber;
      againstVotes: BigNumber;
      executed: boolean;
      canceled: boolean;
      strategy: string;
      ipfsHash: string;
      proposalState: number;
      0: BigNumber;
      1: BigNumber;
      2: BigNumber;
      3: BigNumber;
      4: BigNumber;
      5: BigNumber;
      6: string;
      7: string;
      8: string[];
      9: BigNumber[];
      10: string[];
      11: string[];
      12: boolean[];
      13: BigNumber;
      14: BigNumber;
      15: BigNumber;
      16: BigNumber;
      17: BigNumber;
      18: boolean;
      19: boolean;
      20: string;
      21: string;
      22: number;
    }[]
  >;

  getTokensPower(
    user: string,
    tokens: string[],
    governance: string,
    overrides?: CallOverrides
  ): Promise<
    {
      votingPower: BigNumber;
      delegatedAddressVotingPower: string;
      propositionPower: BigNumber;
      delegatedAddressPropositionPower: string;
      0: BigNumber;
      1: string;
      2: BigNumber;
      3: string;
    }[]
  >;

  "getTokensPower(address,address[],address)"(
    user: string,
    tokens: string[],
    governance: string,
    overrides?: CallOverrides
  ): Promise<
    {
      votingPower: BigNumber;
      delegatedAddressVotingPower: string;
      propositionPower: BigNumber;
      delegatedAddressPropositionPower: string;
      0: BigNumber;
      1: string;
      2: BigNumber;
      3: string;
    }[]
  >;

  callStatic: {
    getProposal(
      id: BigNumberish,
      governance: string,
      overrides?: CallOverrides
    ): Promise<{
      totalVotingSupply: BigNumber;
      minimumQuorum: BigNumber;
      minimumDiff: BigNumber;
      executionTimeWithGracePeriod: BigNumber;
      proposalCreated: BigNumber;
      id: BigNumber;
      creator: string;
      executor: string;
      targets: string[];
      values: BigNumber[];
      signatures: string[];
      calldatas: string[];
      withDelegatecalls: boolean[];
      startBlock: BigNumber;
      endBlock: BigNumber;
      executionTime: BigNumber;
      forVotes: BigNumber;
      againstVotes: BigNumber;
      executed: boolean;
      canceled: boolean;
      strategy: string;
      ipfsHash: string;
      proposalState: number;
      0: BigNumber;
      1: BigNumber;
      2: BigNumber;
      3: BigNumber;
      4: BigNumber;
      5: BigNumber;
      6: string;
      7: string;
      8: string[];
      9: BigNumber[];
      10: string[];
      11: string[];
      12: boolean[];
      13: BigNumber;
      14: BigNumber;
      15: BigNumber;
      16: BigNumber;
      17: BigNumber;
      18: boolean;
      19: boolean;
      20: string;
      21: string;
      22: number;
    }>;

    "getProposal(uint256,address)"(
      id: BigNumberish,
      governance: string,
      overrides?: CallOverrides
    ): Promise<{
      totalVotingSupply: BigNumber;
      minimumQuorum: BigNumber;
      minimumDiff: BigNumber;
      executionTimeWithGracePeriod: BigNumber;
      proposalCreated: BigNumber;
      id: BigNumber;
      creator: string;
      executor: string;
      targets: string[];
      values: BigNumber[];
      signatures: string[];
      calldatas: string[];
      withDelegatecalls: boolean[];
      startBlock: BigNumber;
      endBlock: BigNumber;
      executionTime: BigNumber;
      forVotes: BigNumber;
      againstVotes: BigNumber;
      executed: boolean;
      canceled: boolean;
      strategy: string;
      ipfsHash: string;
      proposalState: number;
      0: BigNumber;
      1: BigNumber;
      2: BigNumber;
      3: BigNumber;
      4: BigNumber;
      5: BigNumber;
      6: string;
      7: string;
      8: string[];
      9: BigNumber[];
      10: string[];
      11: string[];
      12: boolean[];
      13: BigNumber;
      14: BigNumber;
      15: BigNumber;
      16: BigNumber;
      17: BigNumber;
      18: boolean;
      19: boolean;
      20: string;
      21: string;
      22: number;
    }>;

    getProposals(
      skip: BigNumberish,
      limit: BigNumberish,
      governance: string,
      overrides?: CallOverrides
    ): Promise<
      {
        totalVotingSupply: BigNumber;
        minimumQuorum: BigNumber;
        minimumDiff: BigNumber;
        executionTimeWithGracePeriod: BigNumber;
        proposalCreated: BigNumber;
        id: BigNumber;
        creator: string;
        executor: string;
        targets: string[];
        values: BigNumber[];
        signatures: string[];
        calldatas: string[];
        withDelegatecalls: boolean[];
        startBlock: BigNumber;
        endBlock: BigNumber;
        executionTime: BigNumber;
        forVotes: BigNumber;
        againstVotes: BigNumber;
        executed: boolean;
        canceled: boolean;
        strategy: string;
        ipfsHash: string;
        proposalState: number;
        0: BigNumber;
        1: BigNumber;
        2: BigNumber;
        3: BigNumber;
        4: BigNumber;
        5: BigNumber;
        6: string;
        7: string;
        8: string[];
        9: BigNumber[];
        10: string[];
        11: string[];
        12: boolean[];
        13: BigNumber;
        14: BigNumber;
        15: BigNumber;
        16: BigNumber;
        17: BigNumber;
        18: boolean;
        19: boolean;
        20: string;
        21: string;
        22: number;
      }[]
    >;

    "getProposals(uint256,uint256,address)"(
      skip: BigNumberish,
      limit: BigNumberish,
      governance: string,
      overrides?: CallOverrides
    ): Promise<
      {
        totalVotingSupply: BigNumber;
        minimumQuorum: BigNumber;
        minimumDiff: BigNumber;
        executionTimeWithGracePeriod: BigNumber;
        proposalCreated: BigNumber;
        id: BigNumber;
        creator: string;
        executor: string;
        targets: string[];
        values: BigNumber[];
        signatures: string[];
        calldatas: string[];
        withDelegatecalls: boolean[];
        startBlock: BigNumber;
        endBlock: BigNumber;
        executionTime: BigNumber;
        forVotes: BigNumber;
        againstVotes: BigNumber;
        executed: boolean;
        canceled: boolean;
        strategy: string;
        ipfsHash: string;
        proposalState: number;
        0: BigNumber;
        1: BigNumber;
        2: BigNumber;
        3: BigNumber;
        4: BigNumber;
        5: BigNumber;
        6: string;
        7: string;
        8: string[];
        9: BigNumber[];
        10: string[];
        11: string[];
        12: boolean[];
        13: BigNumber;
        14: BigNumber;
        15: BigNumber;
        16: BigNumber;
        17: BigNumber;
        18: boolean;
        19: boolean;
        20: string;
        21: string;
        22: number;
      }[]
    >;

    getTokensPower(
      user: string,
      tokens: string[],
      governance: string,
      overrides?: CallOverrides
    ): Promise<
      {
        votingPower: BigNumber;
        delegatedAddressVotingPower: string;
        propositionPower: BigNumber;
        delegatedAddressPropositionPower: string;
        0: BigNumber;
        1: string;
        2: BigNumber;
        3: string;
      }[]
    >;

    "getTokensPower(address,address[],address)"(
      user: string,
      tokens: string[],
      governance: string,
      overrides?: CallOverrides
    ): Promise<
      {
        votingPower: BigNumber;
        delegatedAddressVotingPower: string;
        propositionPower: BigNumber;
        delegatedAddressPropositionPower: string;
        0: BigNumber;
        1: string;
        2: BigNumber;
        3: string;
      }[]
    >;
  };

  filters: {};

  estimateGas: {
    getProposal(
      id: BigNumberish,
      governance: string,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    "getProposal(uint256,address)"(
      id: BigNumberish,
      governance: string,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    getProposals(
      skip: BigNumberish,
      limit: BigNumberish,
      governance: string,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    "getProposals(uint256,uint256,address)"(
      skip: BigNumberish,
      limit: BigNumberish,
      governance: string,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    getTokensPower(
      user: string,
      tokens: string[],
      governance: string,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    "getTokensPower(address,address[],address)"(
      user: string,
      tokens: string[],
      governance: string,
      overrides?: CallOverrides
    ): Promise<BigNumber>;
  };

  populateTransaction: {
    getProposal(
      id: BigNumberish,
      governance: string,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    "getProposal(uint256,address)"(
      id: BigNumberish,
      governance: string,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    getProposals(
      skip: BigNumberish,
      limit: BigNumberish,
      governance: string,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    "getProposals(uint256,uint256,address)"(
      skip: BigNumberish,
      limit: BigNumberish,
      governance: string,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    getTokensPower(
      user: string,
      tokens: string[],
      governance: string,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    "getTokensPower(address,address[],address)"(
      user: string,
      tokens: string[],
      governance: string,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;
  };
}
