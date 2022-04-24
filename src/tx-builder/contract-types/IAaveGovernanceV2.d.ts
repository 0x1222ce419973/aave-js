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
  Overrides,
  PayableOverrides,
  CallOverrides,
} from "@ethersproject/contracts";
import { BytesLike } from "@ethersproject/bytes";
import { Listener, Provider } from "@ethersproject/providers";
import { FunctionFragment, EventFragment, Result } from "@ethersproject/abi";

interface IAaveGovernanceV2Interface extends ethers.utils.Interface {
  functions: {
    "__abdicate()": FunctionFragment;
    "authorizeExecutors(address[])": FunctionFragment;
    "cancel(uint256)": FunctionFragment;
    "create(address,string,string,address[],uint256[],string[],bytes[],bool[])": FunctionFragment;
    "execute(uint256)": FunctionFragment;
    "getGovernanceStrategy()": FunctionFragment;
    "getGuardian()": FunctionFragment;
    "getProposalById(uint256)": FunctionFragment;
    "getProposalState(uint256)": FunctionFragment;
    "getProposalsCount()": FunctionFragment;
    "getVoteOnProposal(uint256,address)": FunctionFragment;
    "getVotingDelay()": FunctionFragment;
    "isExecutorAuthorized(address)": FunctionFragment;
    "queue(uint256)": FunctionFragment;
    "setGovernanceStrategy(address)": FunctionFragment;
    "setVotingDelay(uint256)": FunctionFragment;
    "submitVote(uint256,bool)": FunctionFragment;
    "submitVoteBySignature(uint256,bool,uint8,bytes32,bytes32)": FunctionFragment;
    "unauthorizeExecutors(address[])": FunctionFragment;
  };

  encodeFunctionData(
    functionFragment: "__abdicate",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "authorizeExecutors",
    values: [string[]]
  ): string;
  encodeFunctionData(
    functionFragment: "cancel",
    values: [BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "create",
    values: [
      string,
      string,
      string,
      string[],
      BigNumberish[],
      string[],
      BytesLike[],
      boolean[],
    ]
  ): string;
  encodeFunctionData(
    functionFragment: "execute",
    values: [BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "getGovernanceStrategy",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "getGuardian",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "getProposalById",
    values: [BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "getProposalState",
    values: [BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "getProposalsCount",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "getVoteOnProposal",
    values: [BigNumberish, string]
  ): string;
  encodeFunctionData(
    functionFragment: "getVotingDelay",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "isExecutorAuthorized",
    values: [string]
  ): string;
  encodeFunctionData(functionFragment: "queue", values: [BigNumberish]): string;
  encodeFunctionData(
    functionFragment: "setGovernanceStrategy",
    values: [string]
  ): string;
  encodeFunctionData(
    functionFragment: "setVotingDelay",
    values: [BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "submitVote",
    values: [BigNumberish, boolean]
  ): string;
  encodeFunctionData(
    functionFragment: "submitVoteBySignature",
    values: [BigNumberish, boolean, BigNumberish, BytesLike, BytesLike]
  ): string;
  encodeFunctionData(
    functionFragment: "unauthorizeExecutors",
    values: [string[]]
  ): string;

  decodeFunctionResult(functionFragment: "__abdicate", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "authorizeExecutors",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "cancel", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "create", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "execute", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "getGovernanceStrategy",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "getGuardian",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "getProposalById",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "getProposalState",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "getProposalsCount",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "getVoteOnProposal",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "getVotingDelay",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "isExecutorAuthorized",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "queue", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "setGovernanceStrategy",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "setVotingDelay",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "submitVote", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "submitVoteBySignature",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "unauthorizeExecutors",
    data: BytesLike
  ): Result;

  events: {
    "ExecutorAuthorized(address)": EventFragment;
    "ExecutorUnauthorized(address)": EventFragment;
    "GovernanceStrategyChanged(address,address)": EventFragment;
    "ProposalCanceled(uint256)": EventFragment;
    "ProposalCreated(uint256,address,address,string,string,address[],uint256[],string[],bytes[],bool[],uint256,uint256,address)": EventFragment;
    "ProposalExecuted(uint256,address)": EventFragment;
    "ProposalQueued(uint256,uint256,address)": EventFragment;
    "VoteEmitted(uint256,address,bool,uint256)": EventFragment;
    "VotingDelayChanged(uint256,address)": EventFragment;
  };

  getEvent(nameOrSignatureOrTopic: "ExecutorAuthorized"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "ExecutorUnauthorized"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "GovernanceStrategyChanged"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "ProposalCanceled"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "ProposalCreated"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "ProposalExecuted"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "ProposalQueued"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "VoteEmitted"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "VotingDelayChanged"): EventFragment;
}

export class IAaveGovernanceV2 extends Contract {
  connect(signerOrProvider: Signer | Provider | string): this;
  attach(addressOrName: string): this;
  deployed(): Promise<this>;

  on(event: EventFilter | string, listener: Listener): this;
  once(event: EventFilter | string, listener: Listener): this;
  addListener(eventName: EventFilter | string, listener: Listener): this;
  removeAllListeners(eventName: EventFilter | string): this;
  removeListener(eventName: any, listener: Listener): this;

  interface: IAaveGovernanceV2Interface;

  functions: {
    __abdicate(overrides?: Overrides): Promise<ContractTransaction>;

    "__abdicate()"(overrides?: Overrides): Promise<ContractTransaction>;

    authorizeExecutors(
      executors: string[],
      overrides?: Overrides
    ): Promise<ContractTransaction>;

    "authorizeExecutors(address[])"(
      executors: string[],
      overrides?: Overrides
    ): Promise<ContractTransaction>;

    cancel(
      proposalId: BigNumberish,
      overrides?: Overrides
    ): Promise<ContractTransaction>;

    "cancel(uint256)"(
      proposalId: BigNumberish,
      overrides?: Overrides
    ): Promise<ContractTransaction>;

    create(
      executor: string,
      title: string,
      description: string,
      targets: string[],
      values: BigNumberish[],
      signatures: string[],
      calldatas: BytesLike[],
      withDelegatecalls: boolean[],
      overrides?: Overrides
    ): Promise<ContractTransaction>;

    "create(address,string,string,address[],uint256[],string[],bytes[],bool[])"(
      executor: string,
      title: string,
      description: string,
      targets: string[],
      values: BigNumberish[],
      signatures: string[],
      calldatas: BytesLike[],
      withDelegatecalls: boolean[],
      overrides?: Overrides
    ): Promise<ContractTransaction>;

    execute(
      proposalId: BigNumberish,
      overrides?: PayableOverrides
    ): Promise<ContractTransaction>;

    "execute(uint256)"(
      proposalId: BigNumberish,
      overrides?: PayableOverrides
    ): Promise<ContractTransaction>;

    getGovernanceStrategy(
      overrides?: CallOverrides
    ): Promise<{
      0: string;
    }>;

    "getGovernanceStrategy()"(
      overrides?: CallOverrides
    ): Promise<{
      0: string;
    }>;

    getGuardian(
      overrides?: CallOverrides
    ): Promise<{
      0: string;
    }>;

    "getGuardian()"(
      overrides?: CallOverrides
    ): Promise<{
      0: string;
    }>;

    getProposalById(
      proposalId: BigNumberish,
      overrides?: CallOverrides
    ): Promise<{
      0: {
        id: BigNumber;
        creator: string;
        executor: string;
        title: string;
        description: string;
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
        0: BigNumber;
        1: string;
        2: string;
        3: string;
        4: string;
        5: string[];
        6: BigNumber[];
        7: string[];
        8: string[];
        9: boolean[];
        10: BigNumber;
        11: BigNumber;
        12: BigNumber;
        13: BigNumber;
        14: BigNumber;
        15: boolean;
        16: boolean;
        17: string;
      };
    }>;

    "getProposalById(uint256)"(
      proposalId: BigNumberish,
      overrides?: CallOverrides
    ): Promise<{
      0: {
        id: BigNumber;
        creator: string;
        executor: string;
        title: string;
        description: string;
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
        0: BigNumber;
        1: string;
        2: string;
        3: string;
        4: string;
        5: string[];
        6: BigNumber[];
        7: string[];
        8: string[];
        9: boolean[];
        10: BigNumber;
        11: BigNumber;
        12: BigNumber;
        13: BigNumber;
        14: BigNumber;
        15: boolean;
        16: boolean;
        17: string;
      };
    }>;

    getProposalState(
      proposalId: BigNumberish,
      overrides?: CallOverrides
    ): Promise<{
      0: number;
    }>;

    "getProposalState(uint256)"(
      proposalId: BigNumberish,
      overrides?: CallOverrides
    ): Promise<{
      0: number;
    }>;

    getProposalsCount(
      overrides?: CallOverrides
    ): Promise<{
      0: BigNumber;
    }>;

    "getProposalsCount()"(
      overrides?: CallOverrides
    ): Promise<{
      0: BigNumber;
    }>;

    getVoteOnProposal(
      proposalId: BigNumberish,
      voter: string,
      overrides?: CallOverrides
    ): Promise<{
      0: { support: boolean; votingPower: BigNumber; 0: boolean; 1: BigNumber };
    }>;

    "getVoteOnProposal(uint256,address)"(
      proposalId: BigNumberish,
      voter: string,
      overrides?: CallOverrides
    ): Promise<{
      0: { support: boolean; votingPower: BigNumber; 0: boolean; 1: BigNumber };
    }>;

    getVotingDelay(
      overrides?: CallOverrides
    ): Promise<{
      0: BigNumber;
    }>;

    "getVotingDelay()"(
      overrides?: CallOverrides
    ): Promise<{
      0: BigNumber;
    }>;

    isExecutorAuthorized(
      executor: string,
      overrides?: CallOverrides
    ): Promise<{
      0: boolean;
    }>;

    "isExecutorAuthorized(address)"(
      executor: string,
      overrides?: CallOverrides
    ): Promise<{
      0: boolean;
    }>;

    queue(
      proposalId: BigNumberish,
      overrides?: Overrides
    ): Promise<ContractTransaction>;

    "queue(uint256)"(
      proposalId: BigNumberish,
      overrides?: Overrides
    ): Promise<ContractTransaction>;

    setGovernanceStrategy(
      governanceStrategy: string,
      overrides?: Overrides
    ): Promise<ContractTransaction>;

    "setGovernanceStrategy(address)"(
      governanceStrategy: string,
      overrides?: Overrides
    ): Promise<ContractTransaction>;

    setVotingDelay(
      votingDelay: BigNumberish,
      overrides?: Overrides
    ): Promise<ContractTransaction>;

    "setVotingDelay(uint256)"(
      votingDelay: BigNumberish,
      overrides?: Overrides
    ): Promise<ContractTransaction>;

    submitVote(
      proposalId: BigNumberish,
      support: boolean,
      overrides?: Overrides
    ): Promise<ContractTransaction>;

    "submitVote(uint256,bool)"(
      proposalId: BigNumberish,
      support: boolean,
      overrides?: Overrides
    ): Promise<ContractTransaction>;

    submitVoteBySignature(
      proposalId: BigNumberish,
      support: boolean,
      v: BigNumberish,
      r: BytesLike,
      s: BytesLike,
      overrides?: Overrides
    ): Promise<ContractTransaction>;

    "submitVoteBySignature(uint256,bool,uint8,bytes32,bytes32)"(
      proposalId: BigNumberish,
      support: boolean,
      v: BigNumberish,
      r: BytesLike,
      s: BytesLike,
      overrides?: Overrides
    ): Promise<ContractTransaction>;

    unauthorizeExecutors(
      executors: string[],
      overrides?: Overrides
    ): Promise<ContractTransaction>;

    "unauthorizeExecutors(address[])"(
      executors: string[],
      overrides?: Overrides
    ): Promise<ContractTransaction>;
  };

  __abdicate(overrides?: Overrides): Promise<ContractTransaction>;

  "__abdicate()"(overrides?: Overrides): Promise<ContractTransaction>;

  authorizeExecutors(
    executors: string[],
    overrides?: Overrides
  ): Promise<ContractTransaction>;

  "authorizeExecutors(address[])"(
    executors: string[],
    overrides?: Overrides
  ): Promise<ContractTransaction>;

  cancel(
    proposalId: BigNumberish,
    overrides?: Overrides
  ): Promise<ContractTransaction>;

  "cancel(uint256)"(
    proposalId: BigNumberish,
    overrides?: Overrides
  ): Promise<ContractTransaction>;

  create(
    executor: string,
    title: string,
    description: string,
    targets: string[],
    values: BigNumberish[],
    signatures: string[],
    calldatas: BytesLike[],
    withDelegatecalls: boolean[],
    overrides?: Overrides
  ): Promise<ContractTransaction>;

  "create(address,string,stringaddress[],uint256[],string[],bytes[],bool[])"(
    executor: string,
    title: string,
    description: string,
    targets: string[],
    values: BigNumberish[],
    signatures: string[],
    calldatas: BytesLike[],
    withDelegatecalls: boolean[],
    overrides?: Overrides
  ): Promise<ContractTransaction>;

  execute(
    proposalId: BigNumberish,
    overrides?: PayableOverrides
  ): Promise<ContractTransaction>;

  "execute(uint256)"(
    proposalId: BigNumberish,
    overrides?: PayableOverrides
  ): Promise<ContractTransaction>;

  getGovernanceStrategy(overrides?: CallOverrides): Promise<string>;

  "getGovernanceStrategy()"(overrides?: CallOverrides): Promise<string>;

  getGuardian(overrides?: CallOverrides): Promise<string>;

  "getGuardian()"(overrides?: CallOverrides): Promise<string>;

  getProposalById(
    proposalId: BigNumberish,
    overrides?: CallOverrides
  ): Promise<{
    id: BigNumber;
    creator: string;
    executor: string;
    title: string;
    description: string;
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
    0: BigNumber;
    1: string;
    2: string;
    3: string;
    4: string;
    5: string[];
    6: BigNumber[];
    7: string[];
    8: string[];
    9: boolean[];
    10: BigNumber;
    11: BigNumber;
    12: BigNumber;
    13: BigNumber;
    14: BigNumber;
    15: boolean;
    16: boolean;
    17: string;
  }>;

  "getProposalById(uint256)"(
    proposalId: BigNumberish,
    overrides?: CallOverrides
  ): Promise<{
    id: BigNumber;
    creator: string;
    executor: string;
    title: string;
    description: string;
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
    0: BigNumber;
    1: string;
    2: string;
    3: string;
    4: string;
    5: string[];
    6: BigNumber[];
    7: string[];
    8: string[];
    9: boolean[];
    10: BigNumber;
    11: BigNumber;
    12: BigNumber;
    13: BigNumber;
    14: BigNumber;
    15: boolean;
    16: boolean;
    17: string;
  }>;

  getProposalState(
    proposalId: BigNumberish,
    overrides?: CallOverrides
  ): Promise<number>;

  "getProposalState(uint256)"(
    proposalId: BigNumberish,
    overrides?: CallOverrides
  ): Promise<number>;

  getProposalsCount(overrides?: CallOverrides): Promise<BigNumber>;

  "getProposalsCount()"(overrides?: CallOverrides): Promise<BigNumber>;

  getVoteOnProposal(
    proposalId: BigNumberish,
    voter: string,
    overrides?: CallOverrides
  ): Promise<{
    support: boolean;
    votingPower: BigNumber;
    0: boolean;
    1: BigNumber;
  }>;

  "getVoteOnProposal(uint256,address)"(
    proposalId: BigNumberish,
    voter: string,
    overrides?: CallOverrides
  ): Promise<{
    support: boolean;
    votingPower: BigNumber;
    0: boolean;
    1: BigNumber;
  }>;

  getVotingDelay(overrides?: CallOverrides): Promise<BigNumber>;

  "getVotingDelay()"(overrides?: CallOverrides): Promise<BigNumber>;

  isExecutorAuthorized(
    executor: string,
    overrides?: CallOverrides
  ): Promise<boolean>;

  "isExecutorAuthorized(address)"(
    executor: string,
    overrides?: CallOverrides
  ): Promise<boolean>;

  queue(
    proposalId: BigNumberish,
    overrides?: Overrides
  ): Promise<ContractTransaction>;

  "queue(uint256)"(
    proposalId: BigNumberish,
    overrides?: Overrides
  ): Promise<ContractTransaction>;

  setGovernanceStrategy(
    governanceStrategy: string,
    overrides?: Overrides
  ): Promise<ContractTransaction>;

  "setGovernanceStrategy(address)"(
    governanceStrategy: string,
    overrides?: Overrides
  ): Promise<ContractTransaction>;

  setVotingDelay(
    votingDelay: BigNumberish,
    overrides?: Overrides
  ): Promise<ContractTransaction>;

  "setVotingDelay(uint256)"(
    votingDelay: BigNumberish,
    overrides?: Overrides
  ): Promise<ContractTransaction>;

  submitVote(
    proposalId: BigNumberish,
    support: boolean,
    overrides?: Overrides
  ): Promise<ContractTransaction>;

  "submitVote(uint256,bool)"(
    proposalId: BigNumberish,
    support: boolean,
    overrides?: Overrides
  ): Promise<ContractTransaction>;

  submitVoteBySignature(
    proposalId: BigNumberish,
    support: boolean,
    v: BigNumberish,
    r: BytesLike,
    s: BytesLike,
    overrides?: Overrides
  ): Promise<ContractTransaction>;

  "submitVoteBySignature(uint256,bool,uint8,bytes32,bytes32)"(
    proposalId: BigNumberish,
    support: boolean,
    v: BigNumberish,
    r: BytesLike,
    s: BytesLike,
    overrides?: Overrides
  ): Promise<ContractTransaction>;

  unauthorizeExecutors(
    executors: string[],
    overrides?: Overrides
  ): Promise<ContractTransaction>;

  "unauthorizeExecutors(address[])"(
    executors: string[],
    overrides?: Overrides
  ): Promise<ContractTransaction>;

  callStatic: {
    __abdicate(overrides?: CallOverrides): Promise<void>;

    "__abdicate()"(overrides?: CallOverrides): Promise<void>;

    authorizeExecutors(
      executors: string[],
      overrides?: CallOverrides
    ): Promise<void>;

    "authorizeExecutors(address[])"(
      executors: string[],
      overrides?: CallOverrides
    ): Promise<void>;

    cancel(proposalId: BigNumberish, overrides?: CallOverrides): Promise<void>;

    "cancel(uint256)"(
      proposalId: BigNumberish,
      overrides?: CallOverrides
    ): Promise<void>;

    create(
      executor: string,
      title: string,
      description: string,
      targets: string[],
      values: BigNumberish[],
      signatures: string[],
      calldatas: BytesLike[],
      withDelegatecalls: boolean[],
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    "create(address,string,string,address[],uint256[],string[],bytes[],bool[])"(
      executor: string,
      title: string,
      description: string,
      targets: string[],
      values: BigNumberish[],
      signatures: string[],
      calldatas: BytesLike[],
      withDelegatecalls: boolean[],
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    execute(proposalId: BigNumberish, overrides?: CallOverrides): Promise<void>;

    "execute(uint256)"(
      proposalId: BigNumberish,
      overrides?: CallOverrides
    ): Promise<void>;

    getGovernanceStrategy(overrides?: CallOverrides): Promise<string>;

    "getGovernanceStrategy()"(overrides?: CallOverrides): Promise<string>;

    getGuardian(overrides?: CallOverrides): Promise<string>;

    "getGuardian()"(overrides?: CallOverrides): Promise<string>;

    getProposalById(
      proposalId: BigNumberish,
      overrides?: CallOverrides
    ): Promise<{
    id: BigNumber;
    creator: string;
    executor: string;
    title: string;
    description: string;
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
    0: BigNumber;
    1: string;
    2: string;
    3: string;
    4: string;
    5: string[];
    6: BigNumber[];
    7: string[];
    8: string[];
    9: boolean[];
    10: BigNumber;
    11: BigNumber;
    12: BigNumber;
    13: BigNumber;
    14: BigNumber;
    15: boolean;
    16: boolean;
    17: string;
    }>;

    "getProposalById(uint256)"(
      proposalId: BigNumberish,
      overrides?: CallOverrides
    ): Promise<{
      id: BigNumber;
      creator: string;
      executor: string;
      title: string;
      description: string;
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
      0: BigNumber;
      1: string;
      2: string;
      3: string;
      4: string;
      5: string[];
      6: BigNumber[];
      7: string[];
      8: string[];
      9: boolean[];
      10: BigNumber;
      11: BigNumber;
      12: BigNumber;
      13: BigNumber;
      14: BigNumber;
      15: boolean;
      16: boolean;
      17: string;
    }>;

    getProposalState(
      proposalId: BigNumberish,
      overrides?: CallOverrides
    ): Promise<number>;

    "getProposalState(uint256)"(
      proposalId: BigNumberish,
      overrides?: CallOverrides
    ): Promise<number>;

    getProposalsCount(overrides?: CallOverrides): Promise<BigNumber>;

    "getProposalsCount()"(overrides?: CallOverrides): Promise<BigNumber>;

    getVoteOnProposal(
      proposalId: BigNumberish,
      voter: string,
      overrides?: CallOverrides
    ): Promise<{
      support: boolean;
      votingPower: BigNumber;
      0: boolean;
      1: BigNumber;
    }>;

    "getVoteOnProposal(uint256,address)"(
      proposalId: BigNumberish,
      voter: string,
      overrides?: CallOverrides
    ): Promise<{
      support: boolean;
      votingPower: BigNumber;
      0: boolean;
      1: BigNumber;
    }>;

    getVotingDelay(overrides?: CallOverrides): Promise<BigNumber>;

    "getVotingDelay()"(overrides?: CallOverrides): Promise<BigNumber>;

    isExecutorAuthorized(
      executor: string,
      overrides?: CallOverrides
    ): Promise<boolean>;

    "isExecutorAuthorized(address)"(
      executor: string,
      overrides?: CallOverrides
    ): Promise<boolean>;

    queue(proposalId: BigNumberish, overrides?: CallOverrides): Promise<void>;

    "queue(uint256)"(
      proposalId: BigNumberish,
      overrides?: CallOverrides
    ): Promise<void>;

    setGovernanceStrategy(
      governanceStrategy: string,
      overrides?: CallOverrides
    ): Promise<void>;

    "setGovernanceStrategy(address)"(
      governanceStrategy: string,
      overrides?: CallOverrides
    ): Promise<void>;

    setVotingDelay(
      votingDelay: BigNumberish,
      overrides?: CallOverrides
    ): Promise<void>;

    "setVotingDelay(uint256)"(
      votingDelay: BigNumberish,
      overrides?: CallOverrides
    ): Promise<void>;

    submitVote(
      proposalId: BigNumberish,
      support: boolean,
      overrides?: CallOverrides
    ): Promise<void>;

    "submitVote(uint256,bool)"(
      proposalId: BigNumberish,
      support: boolean,
      overrides?: CallOverrides
    ): Promise<void>;

    submitVoteBySignature(
      proposalId: BigNumberish,
      support: boolean,
      v: BigNumberish,
      r: BytesLike,
      s: BytesLike,
      overrides?: CallOverrides
    ): Promise<void>;

    "submitVoteBySignature(uint256,bool,uint8,bytes32,bytes32)"(
      proposalId: BigNumberish,
      support: boolean,
      v: BigNumberish,
      r: BytesLike,
      s: BytesLike,
      overrides?: CallOverrides
    ): Promise<void>;

    unauthorizeExecutors(
      executors: string[],
      overrides?: CallOverrides
    ): Promise<void>;

    "unauthorizeExecutors(address[])"(
      executors: string[],
      overrides?: CallOverrides
    ): Promise<void>;
  };

  filters: {
    ExecutorAuthorized(executor: null): EventFilter;

    ExecutorUnauthorized(executor: null): EventFilter;

    GovernanceStrategyChanged(
      newStrategy: string | null,
      initiatorChange: string | null
    ): EventFilter;

    ProposalCanceled(id: null): EventFilter;

    ProposalCreated(
      id: null,
      creator: string | null,
      executor: string | null,
      title: string | null,
      description: string | null,
      targets: null,
      values: null,
      signatures: null,
      calldatas: null,
      withDelegatecalls: null,
      startBlock: null,
      endBlock: null,
      strategy: null,
    ): EventFilter;

    ProposalExecuted(id: null, initiatorExecution: string | null): EventFilter;

    ProposalQueued(
      id: null,
      executionTime: null,
      initiatorQueueing: string | null
    ): EventFilter;

    VoteEmitted(
      id: null,
      voter: string | null,
      support: null,
      votingPower: null
    ): EventFilter;

    VotingDelayChanged(
      newVotingDelay: null,
      initiatorChange: string | null
    ): EventFilter;
  };

  estimateGas: {
    __abdicate(overrides?: Overrides): Promise<BigNumber>;

    "__abdicate()"(overrides?: Overrides): Promise<BigNumber>;

    authorizeExecutors(
      executors: string[],
      overrides?: Overrides
    ): Promise<BigNumber>;

    "authorizeExecutors(address[])"(
      executors: string[],
      overrides?: Overrides
    ): Promise<BigNumber>;

    cancel(proposalId: BigNumberish, overrides?: Overrides): Promise<BigNumber>;

    "cancel(uint256)"(
      proposalId: BigNumberish,
      overrides?: Overrides
    ): Promise<BigNumber>;

    create(
      executor: string,
      title: string,
      description: string,
      targets: string[],
      values: BigNumberish[],
      signatures: string[],
      calldatas: BytesLike[],
      withDelegatecalls: boolean[],
      overrides?: Overrides
    ): Promise<BigNumber>;

    "create(address,string,string,address[],uint256[],string[],bytes[],bool[])"(
      executor: string,
      title: string,
      description: string,
      targets: string[],
      values: BigNumberish[],
      signatures: string[],
      calldatas: BytesLike[],
      withDelegatecalls: boolean[],
      overrides?: Overrides
    ): Promise<BigNumber>;

    execute(
      proposalId: BigNumberish,
      overrides?: PayableOverrides
    ): Promise<BigNumber>;

    "execute(uint256)"(
      proposalId: BigNumberish,
      overrides?: PayableOverrides
    ): Promise<BigNumber>;

    getGovernanceStrategy(overrides?: CallOverrides): Promise<BigNumber>;

    "getGovernanceStrategy()"(overrides?: CallOverrides): Promise<BigNumber>;

    getGuardian(overrides?: CallOverrides): Promise<BigNumber>;

    "getGuardian()"(overrides?: CallOverrides): Promise<BigNumber>;

    getProposalById(
      proposalId: BigNumberish,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    "getProposalById(uint256)"(
      proposalId: BigNumberish,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    getProposalState(
      proposalId: BigNumberish,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    "getProposalState(uint256)"(
      proposalId: BigNumberish,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    getProposalsCount(overrides?: CallOverrides): Promise<BigNumber>;

    "getProposalsCount()"(overrides?: CallOverrides): Promise<BigNumber>;

    getVoteOnProposal(
      proposalId: BigNumberish,
      voter: string,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    "getVoteOnProposal(uint256,address)"(
      proposalId: BigNumberish,
      voter: string,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    getVotingDelay(overrides?: CallOverrides): Promise<BigNumber>;

    "getVotingDelay()"(overrides?: CallOverrides): Promise<BigNumber>;

    isExecutorAuthorized(
      executor: string,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    "isExecutorAuthorized(address)"(
      executor: string,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    queue(proposalId: BigNumberish, overrides?: Overrides): Promise<BigNumber>;

    "queue(uint256)"(
      proposalId: BigNumberish,
      overrides?: Overrides
    ): Promise<BigNumber>;

    setGovernanceStrategy(
      governanceStrategy: string,
      overrides?: Overrides
    ): Promise<BigNumber>;

    "setGovernanceStrategy(address)"(
      governanceStrategy: string,
      overrides?: Overrides
    ): Promise<BigNumber>;

    setVotingDelay(
      votingDelay: BigNumberish,
      overrides?: Overrides
    ): Promise<BigNumber>;

    "setVotingDelay(uint256)"(
      votingDelay: BigNumberish,
      overrides?: Overrides
    ): Promise<BigNumber>;

    submitVote(
      proposalId: BigNumberish,
      support: boolean,
      overrides?: Overrides
    ): Promise<BigNumber>;

    "submitVote(uint256,bool)"(
      proposalId: BigNumberish,
      support: boolean,
      overrides?: Overrides
    ): Promise<BigNumber>;

    submitVoteBySignature(
      proposalId: BigNumberish,
      support: boolean,
      v: BigNumberish,
      r: BytesLike,
      s: BytesLike,
      overrides?: Overrides
    ): Promise<BigNumber>;

    "submitVoteBySignature(uint256,bool,uint8,bytes32,bytes32)"(
      proposalId: BigNumberish,
      support: boolean,
      v: BigNumberish,
      r: BytesLike,
      s: BytesLike,
      overrides?: Overrides
    ): Promise<BigNumber>;

    unauthorizeExecutors(
      executors: string[],
      overrides?: Overrides
    ): Promise<BigNumber>;

    "unauthorizeExecutors(address[])"(
      executors: string[],
      overrides?: Overrides
    ): Promise<BigNumber>;
  };

  populateTransaction: {
    __abdicate(overrides?: Overrides): Promise<PopulatedTransaction>;

    "__abdicate()"(overrides?: Overrides): Promise<PopulatedTransaction>;

    authorizeExecutors(
      executors: string[],
      overrides?: Overrides
    ): Promise<PopulatedTransaction>;

    "authorizeExecutors(address[])"(
      executors: string[],
      overrides?: Overrides
    ): Promise<PopulatedTransaction>;

    cancel(
      proposalId: BigNumberish,
      overrides?: Overrides
    ): Promise<PopulatedTransaction>;

    "cancel(uint256)"(
      proposalId: BigNumberish,
      overrides?: Overrides
    ): Promise<PopulatedTransaction>;

    create(
      executor: string,
      title: string,
      description: string,
      targets: string[],
      values: BigNumberish[],
      signatures: string[],
      calldatas: BytesLike[],
      withDelegatecalls: boolean[],
      overrides?: Overrides
    ): Promise<PopulatedTransaction>;

    "create(address,string,string,address[],uint256[],string[],bytes[],bool[])"(
      executor: string,
      title: string,
      description: string,
      targets: string[],
      values: BigNumberish[],
      signatures: string[],
      calldatas: BytesLike[],
      withDelegatecalls: boolean[],
      overrides?: Overrides
    ): Promise<PopulatedTransaction>;

    execute(
      proposalId: BigNumberish,
      overrides?: PayableOverrides
    ): Promise<PopulatedTransaction>;

    "execute(uint256)"(
      proposalId: BigNumberish,
      overrides?: PayableOverrides
    ): Promise<PopulatedTransaction>;

    getGovernanceStrategy(
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    "getGovernanceStrategy()"(
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    getGuardian(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    "getGuardian()"(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    getProposalById(
      proposalId: BigNumberish,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    "getProposalById(uint256)"(
      proposalId: BigNumberish,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    getProposalState(
      proposalId: BigNumberish,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    "getProposalState(uint256)"(
      proposalId: BigNumberish,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    getProposalsCount(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    "getProposalsCount()"(
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    getVoteOnProposal(
      proposalId: BigNumberish,
      voter: string,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    "getVoteOnProposal(uint256,address)"(
      proposalId: BigNumberish,
      voter: string,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    getVotingDelay(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    "getVotingDelay()"(
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    isExecutorAuthorized(
      executor: string,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    "isExecutorAuthorized(address)"(
      executor: string,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    queue(
      proposalId: BigNumberish,
      overrides?: Overrides
    ): Promise<PopulatedTransaction>;

    "queue(uint256)"(
      proposalId: BigNumberish,
      overrides?: Overrides
    ): Promise<PopulatedTransaction>;

    setGovernanceStrategy(
      governanceStrategy: string,
      overrides?: Overrides
    ): Promise<PopulatedTransaction>;

    "setGovernanceStrategy(address)"(
      governanceStrategy: string,
      overrides?: Overrides
    ): Promise<PopulatedTransaction>;

    setVotingDelay(
      votingDelay: BigNumberish,
      overrides?: Overrides
    ): Promise<PopulatedTransaction>;

    "setVotingDelay(uint256)"(
      votingDelay: BigNumberish,
      overrides?: Overrides
    ): Promise<PopulatedTransaction>;

    submitVote(
      proposalId: BigNumberish,
      support: boolean,
      overrides?: Overrides
    ): Promise<PopulatedTransaction>;

    "submitVote(uint256,bool)"(
      proposalId: BigNumberish,
      support: boolean,
      overrides?: Overrides
    ): Promise<PopulatedTransaction>;

    submitVoteBySignature(
      proposalId: BigNumberish,
      support: boolean,
      v: BigNumberish,
      r: BytesLike,
      s: BytesLike,
      overrides?: Overrides
    ): Promise<PopulatedTransaction>;

    "submitVoteBySignature(uint256,bool,uint8,bytes32,bytes32)"(
      proposalId: BigNumberish,
      support: boolean,
      v: BigNumberish,
      r: BytesLike,
      s: BytesLike,
      overrides?: Overrides
    ): Promise<PopulatedTransaction>;

    unauthorizeExecutors(
      executors: string[],
      overrides?: Overrides
    ): Promise<PopulatedTransaction>;

    "unauthorizeExecutors(address[])"(
      executors: string[],
      overrides?: Overrides
    ): Promise<PopulatedTransaction>;
  };
}
