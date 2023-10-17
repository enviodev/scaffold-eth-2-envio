/* eslint-disable */
import { TypedDocumentNode as DocumentNode } from '@graphql-typed-document-node/core';
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
export type MakeEmpty<T extends { [key: string]: unknown }, K extends keyof T> = { [_ in K]?: never };
export type Incremental<T> = T | { [P in keyof T]?: P extends ' $fragmentName' | '__typename' ? T[P] : never };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: { input: string; output: string; }
  String: { input: string; output: string; }
  Boolean: { input: boolean; output: boolean; }
  Int: { input: number; output: number; }
  Float: { input: number; output: number; }
  contract_type: { input: any; output: any; }
  event_type: { input: any; output: any; }
  json: { input: any; output: any; }
  numeric: { input: any; output: any; }
  timestamp: { input: any; output: any; }
};

/** Boolean expression to compare columns of type "Boolean". All fields are combined with logical 'AND'. */
export type Boolean_Comparison_Exp = {
  _eq?: InputMaybe<Scalars['Boolean']['input']>;
  _gt?: InputMaybe<Scalars['Boolean']['input']>;
  _gte?: InputMaybe<Scalars['Boolean']['input']>;
  _in?: InputMaybe<Array<Scalars['Boolean']['input']>>;
  _is_null?: InputMaybe<Scalars['Boolean']['input']>;
  _lt?: InputMaybe<Scalars['Boolean']['input']>;
  _lte?: InputMaybe<Scalars['Boolean']['input']>;
  _neq?: InputMaybe<Scalars['Boolean']['input']>;
  _nin?: InputMaybe<Array<Scalars['Boolean']['input']>>;
};

/** columns and relationships of "Greeting" */
export type Greeting = {
  __typename?: 'Greeting';
  db_write_timestamp?: Maybe<Scalars['timestamp']['output']>;
  event_chain_id: Scalars['Int']['output'];
  event_id: Scalars['numeric']['output'];
  greeting: Scalars['String']['output'];
  id: Scalars['String']['output'];
  premium: Scalars['Boolean']['output'];
  user: Scalars['String']['output'];
  value: Scalars['numeric']['output'];
};

/** order by aggregate values of table "Greeting" */
export type Greeting_Aggregate_Order_By = {
  avg?: InputMaybe<Greeting_Avg_Order_By>;
  count?: InputMaybe<Order_By>;
  max?: InputMaybe<Greeting_Max_Order_By>;
  min?: InputMaybe<Greeting_Min_Order_By>;
  stddev?: InputMaybe<Greeting_Stddev_Order_By>;
  stddev_pop?: InputMaybe<Greeting_Stddev_Pop_Order_By>;
  stddev_samp?: InputMaybe<Greeting_Stddev_Samp_Order_By>;
  sum?: InputMaybe<Greeting_Sum_Order_By>;
  var_pop?: InputMaybe<Greeting_Var_Pop_Order_By>;
  var_samp?: InputMaybe<Greeting_Var_Samp_Order_By>;
  variance?: InputMaybe<Greeting_Variance_Order_By>;
};

/** order by avg() on columns of table "Greeting" */
export type Greeting_Avg_Order_By = {
  event_chain_id?: InputMaybe<Order_By>;
  event_id?: InputMaybe<Order_By>;
  value?: InputMaybe<Order_By>;
};

/** Boolean expression to filter rows from the table "Greeting". All fields are combined with a logical 'AND'. */
export type Greeting_Bool_Exp = {
  _and?: InputMaybe<Array<Greeting_Bool_Exp>>;
  _not?: InputMaybe<Greeting_Bool_Exp>;
  _or?: InputMaybe<Array<Greeting_Bool_Exp>>;
  db_write_timestamp?: InputMaybe<Timestamp_Comparison_Exp>;
  event_chain_id?: InputMaybe<Int_Comparison_Exp>;
  event_id?: InputMaybe<Numeric_Comparison_Exp>;
  greeting?: InputMaybe<String_Comparison_Exp>;
  id?: InputMaybe<String_Comparison_Exp>;
  premium?: InputMaybe<Boolean_Comparison_Exp>;
  user?: InputMaybe<String_Comparison_Exp>;
  value?: InputMaybe<Numeric_Comparison_Exp>;
};

/** order by max() on columns of table "Greeting" */
export type Greeting_Max_Order_By = {
  db_write_timestamp?: InputMaybe<Order_By>;
  event_chain_id?: InputMaybe<Order_By>;
  event_id?: InputMaybe<Order_By>;
  greeting?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  user?: InputMaybe<Order_By>;
  value?: InputMaybe<Order_By>;
};

/** order by min() on columns of table "Greeting" */
export type Greeting_Min_Order_By = {
  db_write_timestamp?: InputMaybe<Order_By>;
  event_chain_id?: InputMaybe<Order_By>;
  event_id?: InputMaybe<Order_By>;
  greeting?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  user?: InputMaybe<Order_By>;
  value?: InputMaybe<Order_By>;
};

/** Ordering options when selecting data from "Greeting". */
export type Greeting_Order_By = {
  db_write_timestamp?: InputMaybe<Order_By>;
  event_chain_id?: InputMaybe<Order_By>;
  event_id?: InputMaybe<Order_By>;
  greeting?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  premium?: InputMaybe<Order_By>;
  user?: InputMaybe<Order_By>;
  value?: InputMaybe<Order_By>;
};

/** select columns of table "Greeting" */
export enum Greeting_Select_Column {
  /** column name */
  DbWriteTimestamp = 'db_write_timestamp',
  /** column name */
  EventChainId = 'event_chain_id',
  /** column name */
  EventId = 'event_id',
  /** column name */
  Greeting = 'greeting',
  /** column name */
  Id = 'id',
  /** column name */
  Premium = 'premium',
  /** column name */
  User = 'user',
  /** column name */
  Value = 'value'
}

/** order by stddev() on columns of table "Greeting" */
export type Greeting_Stddev_Order_By = {
  event_chain_id?: InputMaybe<Order_By>;
  event_id?: InputMaybe<Order_By>;
  value?: InputMaybe<Order_By>;
};

/** order by stddev_pop() on columns of table "Greeting" */
export type Greeting_Stddev_Pop_Order_By = {
  event_chain_id?: InputMaybe<Order_By>;
  event_id?: InputMaybe<Order_By>;
  value?: InputMaybe<Order_By>;
};

/** order by stddev_samp() on columns of table "Greeting" */
export type Greeting_Stddev_Samp_Order_By = {
  event_chain_id?: InputMaybe<Order_By>;
  event_id?: InputMaybe<Order_By>;
  value?: InputMaybe<Order_By>;
};

/** Streaming cursor of the table "Greeting" */
export type Greeting_Stream_Cursor_Input = {
  /** Stream column input with initial value */
  initial_value: Greeting_Stream_Cursor_Value_Input;
  /** cursor ordering */
  ordering?: InputMaybe<Cursor_Ordering>;
};

/** Initial value of the column from where the streaming should start */
export type Greeting_Stream_Cursor_Value_Input = {
  db_write_timestamp?: InputMaybe<Scalars['timestamp']['input']>;
  event_chain_id?: InputMaybe<Scalars['Int']['input']>;
  event_id?: InputMaybe<Scalars['numeric']['input']>;
  greeting?: InputMaybe<Scalars['String']['input']>;
  id?: InputMaybe<Scalars['String']['input']>;
  premium?: InputMaybe<Scalars['Boolean']['input']>;
  user?: InputMaybe<Scalars['String']['input']>;
  value?: InputMaybe<Scalars['numeric']['input']>;
};

/** order by sum() on columns of table "Greeting" */
export type Greeting_Sum_Order_By = {
  event_chain_id?: InputMaybe<Order_By>;
  event_id?: InputMaybe<Order_By>;
  value?: InputMaybe<Order_By>;
};

/** order by var_pop() on columns of table "Greeting" */
export type Greeting_Var_Pop_Order_By = {
  event_chain_id?: InputMaybe<Order_By>;
  event_id?: InputMaybe<Order_By>;
  value?: InputMaybe<Order_By>;
};

/** order by var_samp() on columns of table "Greeting" */
export type Greeting_Var_Samp_Order_By = {
  event_chain_id?: InputMaybe<Order_By>;
  event_id?: InputMaybe<Order_By>;
  value?: InputMaybe<Order_By>;
};

/** order by variance() on columns of table "Greeting" */
export type Greeting_Variance_Order_By = {
  event_chain_id?: InputMaybe<Order_By>;
  event_id?: InputMaybe<Order_By>;
  value?: InputMaybe<Order_By>;
};

/** Boolean expression to compare columns of type "Int". All fields are combined with logical 'AND'. */
export type Int_Comparison_Exp = {
  _eq?: InputMaybe<Scalars['Int']['input']>;
  _gt?: InputMaybe<Scalars['Int']['input']>;
  _gte?: InputMaybe<Scalars['Int']['input']>;
  _in?: InputMaybe<Array<Scalars['Int']['input']>>;
  _is_null?: InputMaybe<Scalars['Boolean']['input']>;
  _lt?: InputMaybe<Scalars['Int']['input']>;
  _lte?: InputMaybe<Scalars['Int']['input']>;
  _neq?: InputMaybe<Scalars['Int']['input']>;
  _nin?: InputMaybe<Array<Scalars['Int']['input']>>;
};

/** Boolean expression to compare columns of type "String". All fields are combined with logical 'AND'. */
export type String_Comparison_Exp = {
  _eq?: InputMaybe<Scalars['String']['input']>;
  _gt?: InputMaybe<Scalars['String']['input']>;
  _gte?: InputMaybe<Scalars['String']['input']>;
  /** does the column match the given case-insensitive pattern */
  _ilike?: InputMaybe<Scalars['String']['input']>;
  _in?: InputMaybe<Array<Scalars['String']['input']>>;
  /** does the column match the given POSIX regular expression, case insensitive */
  _iregex?: InputMaybe<Scalars['String']['input']>;
  _is_null?: InputMaybe<Scalars['Boolean']['input']>;
  /** does the column match the given pattern */
  _like?: InputMaybe<Scalars['String']['input']>;
  _lt?: InputMaybe<Scalars['String']['input']>;
  _lte?: InputMaybe<Scalars['String']['input']>;
  _neq?: InputMaybe<Scalars['String']['input']>;
  /** does the column NOT match the given case-insensitive pattern */
  _nilike?: InputMaybe<Scalars['String']['input']>;
  _nin?: InputMaybe<Array<Scalars['String']['input']>>;
  /** does the column NOT match the given POSIX regular expression, case insensitive */
  _niregex?: InputMaybe<Scalars['String']['input']>;
  /** does the column NOT match the given pattern */
  _nlike?: InputMaybe<Scalars['String']['input']>;
  /** does the column NOT match the given POSIX regular expression, case sensitive */
  _nregex?: InputMaybe<Scalars['String']['input']>;
  /** does the column NOT match the given SQL regular expression */
  _nsimilar?: InputMaybe<Scalars['String']['input']>;
  /** does the column match the given POSIX regular expression, case sensitive */
  _regex?: InputMaybe<Scalars['String']['input']>;
  /** does the column match the given SQL regular expression */
  _similar?: InputMaybe<Scalars['String']['input']>;
};

/** columns and relationships of "User" */
export type User = {
  __typename?: 'User';
  address: Scalars['String']['output'];
  db_write_timestamp?: Maybe<Scalars['timestamp']['output']>;
  event_chain_id: Scalars['Int']['output'];
  event_id: Scalars['numeric']['output'];
  /** An array relationship */
  greetings: Array<Greeting>;
  greetingsCount: Scalars['Int']['output'];
  id: Scalars['String']['output'];
  premium: Scalars['Boolean']['output'];
};


/** columns and relationships of "User" */
export type UserGreetingsArgs = {
  distinct_on?: InputMaybe<Array<Greeting_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Greeting_Order_By>>;
  where?: InputMaybe<Greeting_Bool_Exp>;
};

/** Boolean expression to filter rows from the table "User". All fields are combined with a logical 'AND'. */
export type User_Bool_Exp = {
  _and?: InputMaybe<Array<User_Bool_Exp>>;
  _not?: InputMaybe<User_Bool_Exp>;
  _or?: InputMaybe<Array<User_Bool_Exp>>;
  address?: InputMaybe<String_Comparison_Exp>;
  db_write_timestamp?: InputMaybe<Timestamp_Comparison_Exp>;
  event_chain_id?: InputMaybe<Int_Comparison_Exp>;
  event_id?: InputMaybe<Numeric_Comparison_Exp>;
  greetings?: InputMaybe<Greeting_Bool_Exp>;
  greetingsCount?: InputMaybe<Int_Comparison_Exp>;
  id?: InputMaybe<String_Comparison_Exp>;
  premium?: InputMaybe<Boolean_Comparison_Exp>;
};

/** Ordering options when selecting data from "User". */
export type User_Order_By = {
  address?: InputMaybe<Order_By>;
  db_write_timestamp?: InputMaybe<Order_By>;
  event_chain_id?: InputMaybe<Order_By>;
  event_id?: InputMaybe<Order_By>;
  greetingsCount?: InputMaybe<Order_By>;
  greetings_aggregate?: InputMaybe<Greeting_Aggregate_Order_By>;
  id?: InputMaybe<Order_By>;
  premium?: InputMaybe<Order_By>;
};

/** select columns of table "User" */
export enum User_Select_Column {
  /** column name */
  Address = 'address',
  /** column name */
  DbWriteTimestamp = 'db_write_timestamp',
  /** column name */
  EventChainId = 'event_chain_id',
  /** column name */
  EventId = 'event_id',
  /** column name */
  GreetingsCount = 'greetingsCount',
  /** column name */
  Id = 'id',
  /** column name */
  Premium = 'premium'
}

/** Streaming cursor of the table "User" */
export type User_Stream_Cursor_Input = {
  /** Stream column input with initial value */
  initial_value: User_Stream_Cursor_Value_Input;
  /** cursor ordering */
  ordering?: InputMaybe<Cursor_Ordering>;
};

/** Initial value of the column from where the streaming should start */
export type User_Stream_Cursor_Value_Input = {
  address?: InputMaybe<Scalars['String']['input']>;
  db_write_timestamp?: InputMaybe<Scalars['timestamp']['input']>;
  event_chain_id?: InputMaybe<Scalars['Int']['input']>;
  event_id?: InputMaybe<Scalars['numeric']['input']>;
  greetingsCount?: InputMaybe<Scalars['Int']['input']>;
  id?: InputMaybe<Scalars['String']['input']>;
  premium?: InputMaybe<Scalars['Boolean']['input']>;
};

/** Boolean expression to compare columns of type "contract_type". All fields are combined with logical 'AND'. */
export type Contract_Type_Comparison_Exp = {
  _eq?: InputMaybe<Scalars['contract_type']['input']>;
  _gt?: InputMaybe<Scalars['contract_type']['input']>;
  _gte?: InputMaybe<Scalars['contract_type']['input']>;
  _in?: InputMaybe<Array<Scalars['contract_type']['input']>>;
  _is_null?: InputMaybe<Scalars['Boolean']['input']>;
  _lt?: InputMaybe<Scalars['contract_type']['input']>;
  _lte?: InputMaybe<Scalars['contract_type']['input']>;
  _neq?: InputMaybe<Scalars['contract_type']['input']>;
  _nin?: InputMaybe<Array<Scalars['contract_type']['input']>>;
};

/** ordering argument of a cursor */
export enum Cursor_Ordering {
  /** ascending ordering of the cursor */
  Asc = 'ASC',
  /** descending ordering of the cursor */
  Desc = 'DESC'
}

/** columns and relationships of "dynamic_contract_registry" */
export type Dynamic_Contract_Registry = {
  __typename?: 'dynamic_contract_registry';
  chain_id: Scalars['Int']['output'];
  contract_address: Scalars['String']['output'];
  contract_type: Scalars['contract_type']['output'];
  event_id: Scalars['numeric']['output'];
};

/** Boolean expression to filter rows from the table "dynamic_contract_registry". All fields are combined with a logical 'AND'. */
export type Dynamic_Contract_Registry_Bool_Exp = {
  _and?: InputMaybe<Array<Dynamic_Contract_Registry_Bool_Exp>>;
  _not?: InputMaybe<Dynamic_Contract_Registry_Bool_Exp>;
  _or?: InputMaybe<Array<Dynamic_Contract_Registry_Bool_Exp>>;
  chain_id?: InputMaybe<Int_Comparison_Exp>;
  contract_address?: InputMaybe<String_Comparison_Exp>;
  contract_type?: InputMaybe<Contract_Type_Comparison_Exp>;
  event_id?: InputMaybe<Numeric_Comparison_Exp>;
};

/** Ordering options when selecting data from "dynamic_contract_registry". */
export type Dynamic_Contract_Registry_Order_By = {
  chain_id?: InputMaybe<Order_By>;
  contract_address?: InputMaybe<Order_By>;
  contract_type?: InputMaybe<Order_By>;
  event_id?: InputMaybe<Order_By>;
};

/** select columns of table "dynamic_contract_registry" */
export enum Dynamic_Contract_Registry_Select_Column {
  /** column name */
  ChainId = 'chain_id',
  /** column name */
  ContractAddress = 'contract_address',
  /** column name */
  ContractType = 'contract_type',
  /** column name */
  EventId = 'event_id'
}

/** Streaming cursor of the table "dynamic_contract_registry" */
export type Dynamic_Contract_Registry_Stream_Cursor_Input = {
  /** Stream column input with initial value */
  initial_value: Dynamic_Contract_Registry_Stream_Cursor_Value_Input;
  /** cursor ordering */
  ordering?: InputMaybe<Cursor_Ordering>;
};

/** Initial value of the column from where the streaming should start */
export type Dynamic_Contract_Registry_Stream_Cursor_Value_Input = {
  chain_id?: InputMaybe<Scalars['Int']['input']>;
  contract_address?: InputMaybe<Scalars['String']['input']>;
  contract_type?: InputMaybe<Scalars['contract_type']['input']>;
  event_id?: InputMaybe<Scalars['numeric']['input']>;
};

/** Boolean expression to compare columns of type "event_type". All fields are combined with logical 'AND'. */
export type Event_Type_Comparison_Exp = {
  _eq?: InputMaybe<Scalars['event_type']['input']>;
  _gt?: InputMaybe<Scalars['event_type']['input']>;
  _gte?: InputMaybe<Scalars['event_type']['input']>;
  _in?: InputMaybe<Array<Scalars['event_type']['input']>>;
  _is_null?: InputMaybe<Scalars['Boolean']['input']>;
  _lt?: InputMaybe<Scalars['event_type']['input']>;
  _lte?: InputMaybe<Scalars['event_type']['input']>;
  _neq?: InputMaybe<Scalars['event_type']['input']>;
  _nin?: InputMaybe<Array<Scalars['event_type']['input']>>;
};

/** Boolean expression to compare columns of type "json". All fields are combined with logical 'AND'. */
export type Json_Comparison_Exp = {
  _eq?: InputMaybe<Scalars['json']['input']>;
  _gt?: InputMaybe<Scalars['json']['input']>;
  _gte?: InputMaybe<Scalars['json']['input']>;
  _in?: InputMaybe<Array<Scalars['json']['input']>>;
  _is_null?: InputMaybe<Scalars['Boolean']['input']>;
  _lt?: InputMaybe<Scalars['json']['input']>;
  _lte?: InputMaybe<Scalars['json']['input']>;
  _neq?: InputMaybe<Scalars['json']['input']>;
  _nin?: InputMaybe<Array<Scalars['json']['input']>>;
};

/** Boolean expression to compare columns of type "numeric". All fields are combined with logical 'AND'. */
export type Numeric_Comparison_Exp = {
  _eq?: InputMaybe<Scalars['numeric']['input']>;
  _gt?: InputMaybe<Scalars['numeric']['input']>;
  _gte?: InputMaybe<Scalars['numeric']['input']>;
  _in?: InputMaybe<Array<Scalars['numeric']['input']>>;
  _is_null?: InputMaybe<Scalars['Boolean']['input']>;
  _lt?: InputMaybe<Scalars['numeric']['input']>;
  _lte?: InputMaybe<Scalars['numeric']['input']>;
  _neq?: InputMaybe<Scalars['numeric']['input']>;
  _nin?: InputMaybe<Array<Scalars['numeric']['input']>>;
};

/** column ordering options */
export enum Order_By {
  /** in ascending order, nulls last */
  Asc = 'asc',
  /** in ascending order, nulls first */
  AscNullsFirst = 'asc_nulls_first',
  /** in ascending order, nulls last */
  AscNullsLast = 'asc_nulls_last',
  /** in descending order, nulls first */
  Desc = 'desc',
  /** in descending order, nulls first */
  DescNullsFirst = 'desc_nulls_first',
  /** in descending order, nulls last */
  DescNullsLast = 'desc_nulls_last'
}

export type Query_Root = {
  __typename?: 'query_root';
  /** fetch data from the table: "Greeting" */
  Greeting: Array<Greeting>;
  /** fetch data from the table: "Greeting" using primary key columns */
  Greeting_by_pk?: Maybe<Greeting>;
  /** fetch data from the table: "User" */
  User: Array<User>;
  /** fetch data from the table: "User" using primary key columns */
  User_by_pk?: Maybe<User>;
  /** fetch data from the table: "dynamic_contract_registry" */
  dynamic_contract_registry: Array<Dynamic_Contract_Registry>;
  /** fetch data from the table: "dynamic_contract_registry" using primary key columns */
  dynamic_contract_registry_by_pk?: Maybe<Dynamic_Contract_Registry>;
  /** fetch data from the table: "raw_events" */
  raw_events: Array<Raw_Events>;
  /** fetch data from the table: "raw_events" using primary key columns */
  raw_events_by_pk?: Maybe<Raw_Events>;
};


export type Query_RootGreetingArgs = {
  distinct_on?: InputMaybe<Array<Greeting_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Greeting_Order_By>>;
  where?: InputMaybe<Greeting_Bool_Exp>;
};


export type Query_RootGreeting_By_PkArgs = {
  id: Scalars['String']['input'];
};


export type Query_RootUserArgs = {
  distinct_on?: InputMaybe<Array<User_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<User_Order_By>>;
  where?: InputMaybe<User_Bool_Exp>;
};


export type Query_RootUser_By_PkArgs = {
  id: Scalars['String']['input'];
};


export type Query_RootDynamic_Contract_RegistryArgs = {
  distinct_on?: InputMaybe<Array<Dynamic_Contract_Registry_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Dynamic_Contract_Registry_Order_By>>;
  where?: InputMaybe<Dynamic_Contract_Registry_Bool_Exp>;
};


export type Query_RootDynamic_Contract_Registry_By_PkArgs = {
  chain_id: Scalars['Int']['input'];
  contract_address: Scalars['String']['input'];
};


export type Query_RootRaw_EventsArgs = {
  distinct_on?: InputMaybe<Array<Raw_Events_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Raw_Events_Order_By>>;
  where?: InputMaybe<Raw_Events_Bool_Exp>;
};


export type Query_RootRaw_Events_By_PkArgs = {
  chain_id: Scalars['Int']['input'];
  event_id: Scalars['numeric']['input'];
};

/** columns and relationships of "raw_events" */
export type Raw_Events = {
  __typename?: 'raw_events';
  block_hash: Scalars['String']['output'];
  block_number: Scalars['Int']['output'];
  block_timestamp: Scalars['Int']['output'];
  chain_id: Scalars['Int']['output'];
  db_write_timestamp?: Maybe<Scalars['timestamp']['output']>;
  event_id: Scalars['numeric']['output'];
  event_type: Scalars['event_type']['output'];
  log_index: Scalars['Int']['output'];
  params: Scalars['json']['output'];
  src_address: Scalars['String']['output'];
  transaction_hash: Scalars['String']['output'];
  transaction_index: Scalars['Int']['output'];
};


/** columns and relationships of "raw_events" */
export type Raw_EventsParamsArgs = {
  path?: InputMaybe<Scalars['String']['input']>;
};

/** Boolean expression to filter rows from the table "raw_events". All fields are combined with a logical 'AND'. */
export type Raw_Events_Bool_Exp = {
  _and?: InputMaybe<Array<Raw_Events_Bool_Exp>>;
  _not?: InputMaybe<Raw_Events_Bool_Exp>;
  _or?: InputMaybe<Array<Raw_Events_Bool_Exp>>;
  block_hash?: InputMaybe<String_Comparison_Exp>;
  block_number?: InputMaybe<Int_Comparison_Exp>;
  block_timestamp?: InputMaybe<Int_Comparison_Exp>;
  chain_id?: InputMaybe<Int_Comparison_Exp>;
  db_write_timestamp?: InputMaybe<Timestamp_Comparison_Exp>;
  event_id?: InputMaybe<Numeric_Comparison_Exp>;
  event_type?: InputMaybe<Event_Type_Comparison_Exp>;
  log_index?: InputMaybe<Int_Comparison_Exp>;
  params?: InputMaybe<Json_Comparison_Exp>;
  src_address?: InputMaybe<String_Comparison_Exp>;
  transaction_hash?: InputMaybe<String_Comparison_Exp>;
  transaction_index?: InputMaybe<Int_Comparison_Exp>;
};

/** Ordering options when selecting data from "raw_events". */
export type Raw_Events_Order_By = {
  block_hash?: InputMaybe<Order_By>;
  block_number?: InputMaybe<Order_By>;
  block_timestamp?: InputMaybe<Order_By>;
  chain_id?: InputMaybe<Order_By>;
  db_write_timestamp?: InputMaybe<Order_By>;
  event_id?: InputMaybe<Order_By>;
  event_type?: InputMaybe<Order_By>;
  log_index?: InputMaybe<Order_By>;
  params?: InputMaybe<Order_By>;
  src_address?: InputMaybe<Order_By>;
  transaction_hash?: InputMaybe<Order_By>;
  transaction_index?: InputMaybe<Order_By>;
};

/** select columns of table "raw_events" */
export enum Raw_Events_Select_Column {
  /** column name */
  BlockHash = 'block_hash',
  /** column name */
  BlockNumber = 'block_number',
  /** column name */
  BlockTimestamp = 'block_timestamp',
  /** column name */
  ChainId = 'chain_id',
  /** column name */
  DbWriteTimestamp = 'db_write_timestamp',
  /** column name */
  EventId = 'event_id',
  /** column name */
  EventType = 'event_type',
  /** column name */
  LogIndex = 'log_index',
  /** column name */
  Params = 'params',
  /** column name */
  SrcAddress = 'src_address',
  /** column name */
  TransactionHash = 'transaction_hash',
  /** column name */
  TransactionIndex = 'transaction_index'
}

/** Streaming cursor of the table "raw_events" */
export type Raw_Events_Stream_Cursor_Input = {
  /** Stream column input with initial value */
  initial_value: Raw_Events_Stream_Cursor_Value_Input;
  /** cursor ordering */
  ordering?: InputMaybe<Cursor_Ordering>;
};

/** Initial value of the column from where the streaming should start */
export type Raw_Events_Stream_Cursor_Value_Input = {
  block_hash?: InputMaybe<Scalars['String']['input']>;
  block_number?: InputMaybe<Scalars['Int']['input']>;
  block_timestamp?: InputMaybe<Scalars['Int']['input']>;
  chain_id?: InputMaybe<Scalars['Int']['input']>;
  db_write_timestamp?: InputMaybe<Scalars['timestamp']['input']>;
  event_id?: InputMaybe<Scalars['numeric']['input']>;
  event_type?: InputMaybe<Scalars['event_type']['input']>;
  log_index?: InputMaybe<Scalars['Int']['input']>;
  params?: InputMaybe<Scalars['json']['input']>;
  src_address?: InputMaybe<Scalars['String']['input']>;
  transaction_hash?: InputMaybe<Scalars['String']['input']>;
  transaction_index?: InputMaybe<Scalars['Int']['input']>;
};

export type Subscription_Root = {
  __typename?: 'subscription_root';
  /** fetch data from the table: "Greeting" */
  Greeting: Array<Greeting>;
  /** fetch data from the table: "Greeting" using primary key columns */
  Greeting_by_pk?: Maybe<Greeting>;
  /** fetch data from the table in a streaming manner: "Greeting" */
  Greeting_stream: Array<Greeting>;
  /** fetch data from the table: "User" */
  User: Array<User>;
  /** fetch data from the table: "User" using primary key columns */
  User_by_pk?: Maybe<User>;
  /** fetch data from the table in a streaming manner: "User" */
  User_stream: Array<User>;
  /** fetch data from the table: "dynamic_contract_registry" */
  dynamic_contract_registry: Array<Dynamic_Contract_Registry>;
  /** fetch data from the table: "dynamic_contract_registry" using primary key columns */
  dynamic_contract_registry_by_pk?: Maybe<Dynamic_Contract_Registry>;
  /** fetch data from the table in a streaming manner: "dynamic_contract_registry" */
  dynamic_contract_registry_stream: Array<Dynamic_Contract_Registry>;
  /** fetch data from the table: "raw_events" */
  raw_events: Array<Raw_Events>;
  /** fetch data from the table: "raw_events" using primary key columns */
  raw_events_by_pk?: Maybe<Raw_Events>;
  /** fetch data from the table in a streaming manner: "raw_events" */
  raw_events_stream: Array<Raw_Events>;
};


export type Subscription_RootGreetingArgs = {
  distinct_on?: InputMaybe<Array<Greeting_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Greeting_Order_By>>;
  where?: InputMaybe<Greeting_Bool_Exp>;
};


export type Subscription_RootGreeting_By_PkArgs = {
  id: Scalars['String']['input'];
};


export type Subscription_RootGreeting_StreamArgs = {
  batch_size: Scalars['Int']['input'];
  cursor: Array<InputMaybe<Greeting_Stream_Cursor_Input>>;
  where?: InputMaybe<Greeting_Bool_Exp>;
};


export type Subscription_RootUserArgs = {
  distinct_on?: InputMaybe<Array<User_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<User_Order_By>>;
  where?: InputMaybe<User_Bool_Exp>;
};


export type Subscription_RootUser_By_PkArgs = {
  id: Scalars['String']['input'];
};


export type Subscription_RootUser_StreamArgs = {
  batch_size: Scalars['Int']['input'];
  cursor: Array<InputMaybe<User_Stream_Cursor_Input>>;
  where?: InputMaybe<User_Bool_Exp>;
};


export type Subscription_RootDynamic_Contract_RegistryArgs = {
  distinct_on?: InputMaybe<Array<Dynamic_Contract_Registry_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Dynamic_Contract_Registry_Order_By>>;
  where?: InputMaybe<Dynamic_Contract_Registry_Bool_Exp>;
};


export type Subscription_RootDynamic_Contract_Registry_By_PkArgs = {
  chain_id: Scalars['Int']['input'];
  contract_address: Scalars['String']['input'];
};


export type Subscription_RootDynamic_Contract_Registry_StreamArgs = {
  batch_size: Scalars['Int']['input'];
  cursor: Array<InputMaybe<Dynamic_Contract_Registry_Stream_Cursor_Input>>;
  where?: InputMaybe<Dynamic_Contract_Registry_Bool_Exp>;
};


export type Subscription_RootRaw_EventsArgs = {
  distinct_on?: InputMaybe<Array<Raw_Events_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Raw_Events_Order_By>>;
  where?: InputMaybe<Raw_Events_Bool_Exp>;
};


export type Subscription_RootRaw_Events_By_PkArgs = {
  chain_id: Scalars['Int']['input'];
  event_id: Scalars['numeric']['input'];
};


export type Subscription_RootRaw_Events_StreamArgs = {
  batch_size: Scalars['Int']['input'];
  cursor: Array<InputMaybe<Raw_Events_Stream_Cursor_Input>>;
  where?: InputMaybe<Raw_Events_Bool_Exp>;
};

/** Boolean expression to compare columns of type "timestamp". All fields are combined with logical 'AND'. */
export type Timestamp_Comparison_Exp = {
  _eq?: InputMaybe<Scalars['timestamp']['input']>;
  _gt?: InputMaybe<Scalars['timestamp']['input']>;
  _gte?: InputMaybe<Scalars['timestamp']['input']>;
  _in?: InputMaybe<Array<Scalars['timestamp']['input']>>;
  _is_null?: InputMaybe<Scalars['Boolean']['input']>;
  _lt?: InputMaybe<Scalars['timestamp']['input']>;
  _lte?: InputMaybe<Scalars['timestamp']['input']>;
  _neq?: InputMaybe<Scalars['timestamp']['input']>;
  _nin?: InputMaybe<Array<Scalars['timestamp']['input']>>;
};

export type GetUsersQueryVariables = Exact<{ [key: string]: never; }>;


export type GetUsersQuery = { __typename?: 'query_root', User: Array<{ __typename?: 'User', id: string, address: string, greetingsCount: number, premium: boolean, greetings: Array<{ __typename?: 'Greeting', id: string, premium: boolean, greeting: string, value: any }> }> };


export const GetUsersDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"GetUsers"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"User"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"address"}},{"kind":"Field","name":{"kind":"Name","value":"greetingsCount"}},{"kind":"Field","name":{"kind":"Name","value":"premium"}},{"kind":"Field","name":{"kind":"Name","value":"greetings"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"premium"}},{"kind":"Field","name":{"kind":"Name","value":"greeting"}},{"kind":"Field","name":{"kind":"Name","value":"value"}}]}}]}}]}}]} as unknown as DocumentNode<GetUsersQuery, GetUsersQueryVariables>;