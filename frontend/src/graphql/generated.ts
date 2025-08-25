import { gql } from '@apollo/client';
import * as Apollo from '@apollo/client';
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
export type MakeEmpty<T extends { [key: string]: unknown }, K extends keyof T> = { [_ in K]?: never };
export type Incremental<T> = T | { [P in keyof T]?: P extends ' $fragmentName' | '__typename' ? T[P] : never };
const defaultOptions = {} as const;
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: { input: string; output: string; }
  String: { input: string; output: string; }
  Boolean: { input: boolean; output: boolean; }
  Int: { input: number; output: number; }
  Float: { input: number; output: number; }
  bytea: { input: any; output: any; }
  numeric: { input: any; output: any; }
  timestamp: { input: any; output: any; }
  timestamptz: { input: any; output: any; }
  uuid: { input: any; output: any; }
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

export type Me = {
  __typename?: 'Me';
  display_name: Scalars['String']['output'];
  email: Scalars['String']['output'];
  id: Scalars['String']['output'];
  role: Scalars['String']['output'];
};

export type MessageResponse = {
  __typename?: 'MessageResponse';
  message: Scalars['String']['output'];
};

export type SignUpInput = {
  display_name: Scalars['String']['input'];
  email: Scalars['String']['input'];
  password: Scalars['String']['input'];
};

export type SignUpOutPut = {
  __typename?: 'SignUpOutPut';
  code: Scalars['String']['output'];
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

export type SyncSocialAccountInput = {
  token: Scalars['String']['input'];
};

/** Boolean expression to compare columns of type "bytea". All fields are combined with logical 'AND'. */
export type Bytea_Comparison_Exp = {
  _eq?: InputMaybe<Scalars['bytea']['input']>;
  _gt?: InputMaybe<Scalars['bytea']['input']>;
  _gte?: InputMaybe<Scalars['bytea']['input']>;
  _in?: InputMaybe<Array<Scalars['bytea']['input']>>;
  _is_null?: InputMaybe<Scalars['Boolean']['input']>;
  _lt?: InputMaybe<Scalars['bytea']['input']>;
  _lte?: InputMaybe<Scalars['bytea']['input']>;
  _neq?: InputMaybe<Scalars['bytea']['input']>;
  _nin?: InputMaybe<Array<Scalars['bytea']['input']>>;
};

/** ordering argument of a cursor */
export enum Cursor_Ordering {
  /** ascending ordering of the cursor */
  Asc = 'ASC',
  /** descending ordering of the cursor */
  Desc = 'DESC'
}

/** columns and relationships of "languages" */
export type Languages = {
  __typename?: 'languages';
  compile_cmd?: Maybe<Scalars['String']['output']>;
  id: Scalars['Int']['output'];
  is_archived?: Maybe<Scalars['Boolean']['output']>;
  name?: Maybe<Scalars['String']['output']>;
  run_cmd?: Maybe<Scalars['String']['output']>;
  source_file?: Maybe<Scalars['String']['output']>;
};

/** aggregated selection of "languages" */
export type Languages_Aggregate = {
  __typename?: 'languages_aggregate';
  aggregate?: Maybe<Languages_Aggregate_Fields>;
  nodes: Array<Languages>;
};

/** aggregate fields of "languages" */
export type Languages_Aggregate_Fields = {
  __typename?: 'languages_aggregate_fields';
  avg?: Maybe<Languages_Avg_Fields>;
  count: Scalars['Int']['output'];
  max?: Maybe<Languages_Max_Fields>;
  min?: Maybe<Languages_Min_Fields>;
  stddev?: Maybe<Languages_Stddev_Fields>;
  stddev_pop?: Maybe<Languages_Stddev_Pop_Fields>;
  stddev_samp?: Maybe<Languages_Stddev_Samp_Fields>;
  sum?: Maybe<Languages_Sum_Fields>;
  var_pop?: Maybe<Languages_Var_Pop_Fields>;
  var_samp?: Maybe<Languages_Var_Samp_Fields>;
  variance?: Maybe<Languages_Variance_Fields>;
};


/** aggregate fields of "languages" */
export type Languages_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<Array<Languages_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']['input']>;
};

/** aggregate avg on columns */
export type Languages_Avg_Fields = {
  __typename?: 'languages_avg_fields';
  id?: Maybe<Scalars['Float']['output']>;
};

/** Boolean expression to filter rows from the table "languages". All fields are combined with a logical 'AND'. */
export type Languages_Bool_Exp = {
  _and?: InputMaybe<Array<Languages_Bool_Exp>>;
  _not?: InputMaybe<Languages_Bool_Exp>;
  _or?: InputMaybe<Array<Languages_Bool_Exp>>;
  compile_cmd?: InputMaybe<String_Comparison_Exp>;
  id?: InputMaybe<Int_Comparison_Exp>;
  is_archived?: InputMaybe<Boolean_Comparison_Exp>;
  name?: InputMaybe<String_Comparison_Exp>;
  run_cmd?: InputMaybe<String_Comparison_Exp>;
  source_file?: InputMaybe<String_Comparison_Exp>;
};

/** unique or primary key constraints on table "languages" */
export enum Languages_Constraint {
  /** unique or primary key constraint on columns "id" */
  LanguagesPkey = 'languages_pkey'
}

/** input type for incrementing numeric columns in table "languages" */
export type Languages_Inc_Input = {
  id?: InputMaybe<Scalars['Int']['input']>;
};

/** input type for inserting data into table "languages" */
export type Languages_Insert_Input = {
  compile_cmd?: InputMaybe<Scalars['String']['input']>;
  id?: InputMaybe<Scalars['Int']['input']>;
  is_archived?: InputMaybe<Scalars['Boolean']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
  run_cmd?: InputMaybe<Scalars['String']['input']>;
  source_file?: InputMaybe<Scalars['String']['input']>;
};

/** aggregate max on columns */
export type Languages_Max_Fields = {
  __typename?: 'languages_max_fields';
  compile_cmd?: Maybe<Scalars['String']['output']>;
  id?: Maybe<Scalars['Int']['output']>;
  name?: Maybe<Scalars['String']['output']>;
  run_cmd?: Maybe<Scalars['String']['output']>;
  source_file?: Maybe<Scalars['String']['output']>;
};

/** aggregate min on columns */
export type Languages_Min_Fields = {
  __typename?: 'languages_min_fields';
  compile_cmd?: Maybe<Scalars['String']['output']>;
  id?: Maybe<Scalars['Int']['output']>;
  name?: Maybe<Scalars['String']['output']>;
  run_cmd?: Maybe<Scalars['String']['output']>;
  source_file?: Maybe<Scalars['String']['output']>;
};

/** response of any mutation on the table "languages" */
export type Languages_Mutation_Response = {
  __typename?: 'languages_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int']['output'];
  /** data from the rows affected by the mutation */
  returning: Array<Languages>;
};

/** on_conflict condition type for table "languages" */
export type Languages_On_Conflict = {
  constraint: Languages_Constraint;
  update_columns?: Array<Languages_Update_Column>;
  where?: InputMaybe<Languages_Bool_Exp>;
};

/** Ordering options when selecting data from "languages". */
export type Languages_Order_By = {
  compile_cmd?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  is_archived?: InputMaybe<Order_By>;
  name?: InputMaybe<Order_By>;
  run_cmd?: InputMaybe<Order_By>;
  source_file?: InputMaybe<Order_By>;
};

/** primary key columns input for table: languages */
export type Languages_Pk_Columns_Input = {
  id: Scalars['Int']['input'];
};

/** select columns of table "languages" */
export enum Languages_Select_Column {
  /** column name */
  CompileCmd = 'compile_cmd',
  /** column name */
  Id = 'id',
  /** column name */
  IsArchived = 'is_archived',
  /** column name */
  Name = 'name',
  /** column name */
  RunCmd = 'run_cmd',
  /** column name */
  SourceFile = 'source_file'
}

/** input type for updating data in table "languages" */
export type Languages_Set_Input = {
  compile_cmd?: InputMaybe<Scalars['String']['input']>;
  id?: InputMaybe<Scalars['Int']['input']>;
  is_archived?: InputMaybe<Scalars['Boolean']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
  run_cmd?: InputMaybe<Scalars['String']['input']>;
  source_file?: InputMaybe<Scalars['String']['input']>;
};

/** aggregate stddev on columns */
export type Languages_Stddev_Fields = {
  __typename?: 'languages_stddev_fields';
  id?: Maybe<Scalars['Float']['output']>;
};

/** aggregate stddev_pop on columns */
export type Languages_Stddev_Pop_Fields = {
  __typename?: 'languages_stddev_pop_fields';
  id?: Maybe<Scalars['Float']['output']>;
};

/** aggregate stddev_samp on columns */
export type Languages_Stddev_Samp_Fields = {
  __typename?: 'languages_stddev_samp_fields';
  id?: Maybe<Scalars['Float']['output']>;
};

/** Streaming cursor of the table "languages" */
export type Languages_Stream_Cursor_Input = {
  /** Stream column input with initial value */
  initial_value: Languages_Stream_Cursor_Value_Input;
  /** cursor ordering */
  ordering?: InputMaybe<Cursor_Ordering>;
};

/** Initial value of the column from where the streaming should start */
export type Languages_Stream_Cursor_Value_Input = {
  compile_cmd?: InputMaybe<Scalars['String']['input']>;
  id?: InputMaybe<Scalars['Int']['input']>;
  is_archived?: InputMaybe<Scalars['Boolean']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
  run_cmd?: InputMaybe<Scalars['String']['input']>;
  source_file?: InputMaybe<Scalars['String']['input']>;
};

/** aggregate sum on columns */
export type Languages_Sum_Fields = {
  __typename?: 'languages_sum_fields';
  id?: Maybe<Scalars['Int']['output']>;
};

/** update columns of table "languages" */
export enum Languages_Update_Column {
  /** column name */
  CompileCmd = 'compile_cmd',
  /** column name */
  Id = 'id',
  /** column name */
  IsArchived = 'is_archived',
  /** column name */
  Name = 'name',
  /** column name */
  RunCmd = 'run_cmd',
  /** column name */
  SourceFile = 'source_file'
}

export type Languages_Updates = {
  /** increments the numeric columns with given value of the filtered values */
  _inc?: InputMaybe<Languages_Inc_Input>;
  /** sets the columns of the filtered rows to the given values */
  _set?: InputMaybe<Languages_Set_Input>;
  /** filter the rows which have to be updated */
  where: Languages_Bool_Exp;
};

/** aggregate var_pop on columns */
export type Languages_Var_Pop_Fields = {
  __typename?: 'languages_var_pop_fields';
  id?: Maybe<Scalars['Float']['output']>;
};

/** aggregate var_samp on columns */
export type Languages_Var_Samp_Fields = {
  __typename?: 'languages_var_samp_fields';
  id?: Maybe<Scalars['Float']['output']>;
};

/** aggregate variance on columns */
export type Languages_Variance_Fields = {
  __typename?: 'languages_variance_fields';
  id?: Maybe<Scalars['Float']['output']>;
};

/** mutation root */
export type Mutation_Root = {
  __typename?: 'mutation_root';
  /** delete data from the table: "languages" */
  delete_languages?: Maybe<Languages_Mutation_Response>;
  /** delete single row from the table: "languages" */
  delete_languages_by_pk?: Maybe<Languages>;
  /** delete data from the table: "problems" */
  delete_problems?: Maybe<Problems_Mutation_Response>;
  /** delete single row from the table: "problems" */
  delete_problems_by_pk?: Maybe<Problems>;
  /** delete data from the table: "submissions" */
  delete_submissions?: Maybe<Submissions_Mutation_Response>;
  /** delete single row from the table: "submissions" */
  delete_submissions_by_pk?: Maybe<Submissions>;
  /** delete data from the table: "test_cases" */
  delete_test_cases?: Maybe<Test_Cases_Mutation_Response>;
  /** delete single row from the table: "test_cases" */
  delete_test_cases_by_pk?: Maybe<Test_Cases>;
  /** delete data from the table: "user_submissions" */
  delete_user_submissions?: Maybe<User_Submissions_Mutation_Response>;
  /** delete single row from the table: "user_submissions" */
  delete_user_submissions_by_pk?: Maybe<User_Submissions>;
  /** delete data from the table: "users" */
  delete_users?: Maybe<Users_Mutation_Response>;
  /** delete single row from the table: "users" */
  delete_users_by_pk?: Maybe<Users>;
  /** insert data into the table: "languages" */
  insert_languages?: Maybe<Languages_Mutation_Response>;
  /** insert a single row into the table: "languages" */
  insert_languages_one?: Maybe<Languages>;
  /** insert data into the table: "problems" */
  insert_problems?: Maybe<Problems_Mutation_Response>;
  /** insert a single row into the table: "problems" */
  insert_problems_one?: Maybe<Problems>;
  /** insert data into the table: "submissions" */
  insert_submissions?: Maybe<Submissions_Mutation_Response>;
  /** insert a single row into the table: "submissions" */
  insert_submissions_one?: Maybe<Submissions>;
  /** insert data into the table: "test_cases" */
  insert_test_cases?: Maybe<Test_Cases_Mutation_Response>;
  /** insert a single row into the table: "test_cases" */
  insert_test_cases_one?: Maybe<Test_Cases>;
  /** insert data into the table: "user_submissions" */
  insert_user_submissions?: Maybe<User_Submissions_Mutation_Response>;
  /** insert a single row into the table: "user_submissions" */
  insert_user_submissions_one?: Maybe<User_Submissions>;
  /** insert data into the table: "users" */
  insert_users?: Maybe<Users_Mutation_Response>;
  /** insert a single row into the table: "users" */
  insert_users_one?: Maybe<Users>;
  sign_up?: Maybe<SignUpOutPut>;
  sync_social_account?: Maybe<MessageResponse>;
  /** update data of the table: "languages" */
  update_languages?: Maybe<Languages_Mutation_Response>;
  /** update single row of the table: "languages" */
  update_languages_by_pk?: Maybe<Languages>;
  /** update multiples rows of table: "languages" */
  update_languages_many?: Maybe<Array<Maybe<Languages_Mutation_Response>>>;
  /** update data of the table: "problems" */
  update_problems?: Maybe<Problems_Mutation_Response>;
  /** update single row of the table: "problems" */
  update_problems_by_pk?: Maybe<Problems>;
  /** update multiples rows of table: "problems" */
  update_problems_many?: Maybe<Array<Maybe<Problems_Mutation_Response>>>;
  /** update data of the table: "submissions" */
  update_submissions?: Maybe<Submissions_Mutation_Response>;
  /** update single row of the table: "submissions" */
  update_submissions_by_pk?: Maybe<Submissions>;
  /** update multiples rows of table: "submissions" */
  update_submissions_many?: Maybe<Array<Maybe<Submissions_Mutation_Response>>>;
  /** update data of the table: "test_cases" */
  update_test_cases?: Maybe<Test_Cases_Mutation_Response>;
  /** update single row of the table: "test_cases" */
  update_test_cases_by_pk?: Maybe<Test_Cases>;
  /** update multiples rows of table: "test_cases" */
  update_test_cases_many?: Maybe<Array<Maybe<Test_Cases_Mutation_Response>>>;
  /** update data of the table: "user_submissions" */
  update_user_submissions?: Maybe<User_Submissions_Mutation_Response>;
  /** update single row of the table: "user_submissions" */
  update_user_submissions_by_pk?: Maybe<User_Submissions>;
  /** update multiples rows of table: "user_submissions" */
  update_user_submissions_many?: Maybe<Array<Maybe<User_Submissions_Mutation_Response>>>;
  /** update data of the table: "users" */
  update_users?: Maybe<Users_Mutation_Response>;
  /** update single row of the table: "users" */
  update_users_by_pk?: Maybe<Users>;
  /** update multiples rows of table: "users" */
  update_users_many?: Maybe<Array<Maybe<Users_Mutation_Response>>>;
};


/** mutation root */
export type Mutation_RootDelete_LanguagesArgs = {
  where: Languages_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_Languages_By_PkArgs = {
  id: Scalars['Int']['input'];
};


/** mutation root */
export type Mutation_RootDelete_ProblemsArgs = {
  where: Problems_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_Problems_By_PkArgs = {
  id: Scalars['uuid']['input'];
};


/** mutation root */
export type Mutation_RootDelete_SubmissionsArgs = {
  where: Submissions_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_Submissions_By_PkArgs = {
  id: Scalars['Int']['input'];
};


/** mutation root */
export type Mutation_RootDelete_Test_CasesArgs = {
  where: Test_Cases_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_Test_Cases_By_PkArgs = {
  id: Scalars['uuid']['input'];
};


/** mutation root */
export type Mutation_RootDelete_User_SubmissionsArgs = {
  where: User_Submissions_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_User_Submissions_By_PkArgs = {
  id: Scalars['uuid']['input'];
};


/** mutation root */
export type Mutation_RootDelete_UsersArgs = {
  where: Users_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_Users_By_PkArgs = {
  id: Scalars['String']['input'];
};


/** mutation root */
export type Mutation_RootInsert_LanguagesArgs = {
  objects: Array<Languages_Insert_Input>;
  on_conflict?: InputMaybe<Languages_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Languages_OneArgs = {
  object: Languages_Insert_Input;
  on_conflict?: InputMaybe<Languages_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_ProblemsArgs = {
  objects: Array<Problems_Insert_Input>;
  on_conflict?: InputMaybe<Problems_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Problems_OneArgs = {
  object: Problems_Insert_Input;
  on_conflict?: InputMaybe<Problems_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_SubmissionsArgs = {
  objects: Array<Submissions_Insert_Input>;
  on_conflict?: InputMaybe<Submissions_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Submissions_OneArgs = {
  object: Submissions_Insert_Input;
  on_conflict?: InputMaybe<Submissions_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Test_CasesArgs = {
  objects: Array<Test_Cases_Insert_Input>;
  on_conflict?: InputMaybe<Test_Cases_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Test_Cases_OneArgs = {
  object: Test_Cases_Insert_Input;
  on_conflict?: InputMaybe<Test_Cases_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_User_SubmissionsArgs = {
  objects: Array<User_Submissions_Insert_Input>;
  on_conflict?: InputMaybe<User_Submissions_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_User_Submissions_OneArgs = {
  object: User_Submissions_Insert_Input;
  on_conflict?: InputMaybe<User_Submissions_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_UsersArgs = {
  objects: Array<Users_Insert_Input>;
  on_conflict?: InputMaybe<Users_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Users_OneArgs = {
  object: Users_Insert_Input;
  on_conflict?: InputMaybe<Users_On_Conflict>;
};


/** mutation root */
export type Mutation_RootSign_UpArgs = {
  form: SignUpInput;
};


/** mutation root */
export type Mutation_RootSync_Social_AccountArgs = {
  form: SyncSocialAccountInput;
};


/** mutation root */
export type Mutation_RootUpdate_LanguagesArgs = {
  _inc?: InputMaybe<Languages_Inc_Input>;
  _set?: InputMaybe<Languages_Set_Input>;
  where: Languages_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_Languages_By_PkArgs = {
  _inc?: InputMaybe<Languages_Inc_Input>;
  _set?: InputMaybe<Languages_Set_Input>;
  pk_columns: Languages_Pk_Columns_Input;
};


/** mutation root */
export type Mutation_RootUpdate_Languages_ManyArgs = {
  updates: Array<Languages_Updates>;
};


/** mutation root */
export type Mutation_RootUpdate_ProblemsArgs = {
  _set?: InputMaybe<Problems_Set_Input>;
  where: Problems_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_Problems_By_PkArgs = {
  _set?: InputMaybe<Problems_Set_Input>;
  pk_columns: Problems_Pk_Columns_Input;
};


/** mutation root */
export type Mutation_RootUpdate_Problems_ManyArgs = {
  updates: Array<Problems_Updates>;
};


/** mutation root */
export type Mutation_RootUpdate_SubmissionsArgs = {
  _inc?: InputMaybe<Submissions_Inc_Input>;
  _set?: InputMaybe<Submissions_Set_Input>;
  where: Submissions_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_Submissions_By_PkArgs = {
  _inc?: InputMaybe<Submissions_Inc_Input>;
  _set?: InputMaybe<Submissions_Set_Input>;
  pk_columns: Submissions_Pk_Columns_Input;
};


/** mutation root */
export type Mutation_RootUpdate_Submissions_ManyArgs = {
  updates: Array<Submissions_Updates>;
};


/** mutation root */
export type Mutation_RootUpdate_Test_CasesArgs = {
  _set?: InputMaybe<Test_Cases_Set_Input>;
  where: Test_Cases_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_Test_Cases_By_PkArgs = {
  _set?: InputMaybe<Test_Cases_Set_Input>;
  pk_columns: Test_Cases_Pk_Columns_Input;
};


/** mutation root */
export type Mutation_RootUpdate_Test_Cases_ManyArgs = {
  updates: Array<Test_Cases_Updates>;
};


/** mutation root */
export type Mutation_RootUpdate_User_SubmissionsArgs = {
  _inc?: InputMaybe<User_Submissions_Inc_Input>;
  _set?: InputMaybe<User_Submissions_Set_Input>;
  where: User_Submissions_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_User_Submissions_By_PkArgs = {
  _inc?: InputMaybe<User_Submissions_Inc_Input>;
  _set?: InputMaybe<User_Submissions_Set_Input>;
  pk_columns: User_Submissions_Pk_Columns_Input;
};


/** mutation root */
export type Mutation_RootUpdate_User_Submissions_ManyArgs = {
  updates: Array<User_Submissions_Updates>;
};


/** mutation root */
export type Mutation_RootUpdate_UsersArgs = {
  _set?: InputMaybe<Users_Set_Input>;
  where: Users_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_Users_By_PkArgs = {
  _set?: InputMaybe<Users_Set_Input>;
  pk_columns: Users_Pk_Columns_Input;
};


/** mutation root */
export type Mutation_RootUpdate_Users_ManyArgs = {
  updates: Array<Users_Updates>;
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

/** columns and relationships of "problems" */
export type Problems = {
  __typename?: 'problems';
  code: Scalars['String']['output'];
  created_at: Scalars['timestamptz']['output'];
  description: Scalars['String']['output'];
  difficulty: Scalars['String']['output'];
  id: Scalars['uuid']['output'];
  /** An array relationship */
  test_cases: Array<Test_Cases>;
  /** An aggregate relationship */
  test_cases_aggregate: Test_Cases_Aggregate;
  title: Scalars['String']['output'];
  updated_at: Scalars['timestamptz']['output'];
  /** An array relationship */
  user_submissions: Array<User_Submissions>;
  /** An aggregate relationship */
  user_submissions_aggregate: User_Submissions_Aggregate;
};


/** columns and relationships of "problems" */
export type ProblemsTest_CasesArgs = {
  distinct_on?: InputMaybe<Array<Test_Cases_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Test_Cases_Order_By>>;
  where?: InputMaybe<Test_Cases_Bool_Exp>;
};


/** columns and relationships of "problems" */
export type ProblemsTest_Cases_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Test_Cases_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Test_Cases_Order_By>>;
  where?: InputMaybe<Test_Cases_Bool_Exp>;
};


/** columns and relationships of "problems" */
export type ProblemsUser_SubmissionsArgs = {
  distinct_on?: InputMaybe<Array<User_Submissions_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<User_Submissions_Order_By>>;
  where?: InputMaybe<User_Submissions_Bool_Exp>;
};


/** columns and relationships of "problems" */
export type ProblemsUser_Submissions_AggregateArgs = {
  distinct_on?: InputMaybe<Array<User_Submissions_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<User_Submissions_Order_By>>;
  where?: InputMaybe<User_Submissions_Bool_Exp>;
};

/** aggregated selection of "problems" */
export type Problems_Aggregate = {
  __typename?: 'problems_aggregate';
  aggregate?: Maybe<Problems_Aggregate_Fields>;
  nodes: Array<Problems>;
};

/** aggregate fields of "problems" */
export type Problems_Aggregate_Fields = {
  __typename?: 'problems_aggregate_fields';
  count: Scalars['Int']['output'];
  max?: Maybe<Problems_Max_Fields>;
  min?: Maybe<Problems_Min_Fields>;
};


/** aggregate fields of "problems" */
export type Problems_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<Array<Problems_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']['input']>;
};

/** Boolean expression to filter rows from the table "problems". All fields are combined with a logical 'AND'. */
export type Problems_Bool_Exp = {
  _and?: InputMaybe<Array<Problems_Bool_Exp>>;
  _not?: InputMaybe<Problems_Bool_Exp>;
  _or?: InputMaybe<Array<Problems_Bool_Exp>>;
  code?: InputMaybe<String_Comparison_Exp>;
  created_at?: InputMaybe<Timestamptz_Comparison_Exp>;
  description?: InputMaybe<String_Comparison_Exp>;
  difficulty?: InputMaybe<String_Comparison_Exp>;
  id?: InputMaybe<Uuid_Comparison_Exp>;
  test_cases?: InputMaybe<Test_Cases_Bool_Exp>;
  test_cases_aggregate?: InputMaybe<Test_Cases_Aggregate_Bool_Exp>;
  title?: InputMaybe<String_Comparison_Exp>;
  updated_at?: InputMaybe<Timestamptz_Comparison_Exp>;
  user_submissions?: InputMaybe<User_Submissions_Bool_Exp>;
  user_submissions_aggregate?: InputMaybe<User_Submissions_Aggregate_Bool_Exp>;
};

/** unique or primary key constraints on table "problems" */
export enum Problems_Constraint {
  /** unique or primary key constraint on columns "id" */
  ProblemsPkey = 'problems_pkey'
}

/** input type for inserting data into table "problems" */
export type Problems_Insert_Input = {
  code?: InputMaybe<Scalars['String']['input']>;
  created_at?: InputMaybe<Scalars['timestamptz']['input']>;
  description?: InputMaybe<Scalars['String']['input']>;
  difficulty?: InputMaybe<Scalars['String']['input']>;
  id?: InputMaybe<Scalars['uuid']['input']>;
  test_cases?: InputMaybe<Test_Cases_Arr_Rel_Insert_Input>;
  title?: InputMaybe<Scalars['String']['input']>;
  updated_at?: InputMaybe<Scalars['timestamptz']['input']>;
  user_submissions?: InputMaybe<User_Submissions_Arr_Rel_Insert_Input>;
};

/** aggregate max on columns */
export type Problems_Max_Fields = {
  __typename?: 'problems_max_fields';
  code?: Maybe<Scalars['String']['output']>;
  created_at?: Maybe<Scalars['timestamptz']['output']>;
  description?: Maybe<Scalars['String']['output']>;
  difficulty?: Maybe<Scalars['String']['output']>;
  id?: Maybe<Scalars['uuid']['output']>;
  title?: Maybe<Scalars['String']['output']>;
  updated_at?: Maybe<Scalars['timestamptz']['output']>;
};

/** aggregate min on columns */
export type Problems_Min_Fields = {
  __typename?: 'problems_min_fields';
  code?: Maybe<Scalars['String']['output']>;
  created_at?: Maybe<Scalars['timestamptz']['output']>;
  description?: Maybe<Scalars['String']['output']>;
  difficulty?: Maybe<Scalars['String']['output']>;
  id?: Maybe<Scalars['uuid']['output']>;
  title?: Maybe<Scalars['String']['output']>;
  updated_at?: Maybe<Scalars['timestamptz']['output']>;
};

/** response of any mutation on the table "problems" */
export type Problems_Mutation_Response = {
  __typename?: 'problems_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int']['output'];
  /** data from the rows affected by the mutation */
  returning: Array<Problems>;
};

/** input type for inserting object relation for remote table "problems" */
export type Problems_Obj_Rel_Insert_Input = {
  data: Problems_Insert_Input;
  /** upsert condition */
  on_conflict?: InputMaybe<Problems_On_Conflict>;
};

/** on_conflict condition type for table "problems" */
export type Problems_On_Conflict = {
  constraint: Problems_Constraint;
  update_columns?: Array<Problems_Update_Column>;
  where?: InputMaybe<Problems_Bool_Exp>;
};

/** Ordering options when selecting data from "problems". */
export type Problems_Order_By = {
  code?: InputMaybe<Order_By>;
  created_at?: InputMaybe<Order_By>;
  description?: InputMaybe<Order_By>;
  difficulty?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  test_cases_aggregate?: InputMaybe<Test_Cases_Aggregate_Order_By>;
  title?: InputMaybe<Order_By>;
  updated_at?: InputMaybe<Order_By>;
  user_submissions_aggregate?: InputMaybe<User_Submissions_Aggregate_Order_By>;
};

/** primary key columns input for table: problems */
export type Problems_Pk_Columns_Input = {
  id: Scalars['uuid']['input'];
};

/** select columns of table "problems" */
export enum Problems_Select_Column {
  /** column name */
  Code = 'code',
  /** column name */
  CreatedAt = 'created_at',
  /** column name */
  Description = 'description',
  /** column name */
  Difficulty = 'difficulty',
  /** column name */
  Id = 'id',
  /** column name */
  Title = 'title',
  /** column name */
  UpdatedAt = 'updated_at'
}

/** input type for updating data in table "problems" */
export type Problems_Set_Input = {
  code?: InputMaybe<Scalars['String']['input']>;
  created_at?: InputMaybe<Scalars['timestamptz']['input']>;
  description?: InputMaybe<Scalars['String']['input']>;
  difficulty?: InputMaybe<Scalars['String']['input']>;
  id?: InputMaybe<Scalars['uuid']['input']>;
  title?: InputMaybe<Scalars['String']['input']>;
  updated_at?: InputMaybe<Scalars['timestamptz']['input']>;
};

/** Streaming cursor of the table "problems" */
export type Problems_Stream_Cursor_Input = {
  /** Stream column input with initial value */
  initial_value: Problems_Stream_Cursor_Value_Input;
  /** cursor ordering */
  ordering?: InputMaybe<Cursor_Ordering>;
};

/** Initial value of the column from where the streaming should start */
export type Problems_Stream_Cursor_Value_Input = {
  code?: InputMaybe<Scalars['String']['input']>;
  created_at?: InputMaybe<Scalars['timestamptz']['input']>;
  description?: InputMaybe<Scalars['String']['input']>;
  difficulty?: InputMaybe<Scalars['String']['input']>;
  id?: InputMaybe<Scalars['uuid']['input']>;
  title?: InputMaybe<Scalars['String']['input']>;
  updated_at?: InputMaybe<Scalars['timestamptz']['input']>;
};

/** update columns of table "problems" */
export enum Problems_Update_Column {
  /** column name */
  Code = 'code',
  /** column name */
  CreatedAt = 'created_at',
  /** column name */
  Description = 'description',
  /** column name */
  Difficulty = 'difficulty',
  /** column name */
  Id = 'id',
  /** column name */
  Title = 'title',
  /** column name */
  UpdatedAt = 'updated_at'
}

export type Problems_Updates = {
  /** sets the columns of the filtered rows to the given values */
  _set?: InputMaybe<Problems_Set_Input>;
  /** filter the rows which have to be updated */
  where: Problems_Bool_Exp;
};

export type Query_Root = {
  __typename?: 'query_root';
  /** fetch data from the table: "languages" */
  languages: Array<Languages>;
  /** fetch aggregated fields from the table: "languages" */
  languages_aggregate: Languages_Aggregate;
  /** fetch data from the table: "languages" using primary key columns */
  languages_by_pk?: Maybe<Languages>;
  me: Me;
  /** fetch data from the table: "problems" */
  problems: Array<Problems>;
  /** fetch aggregated fields from the table: "problems" */
  problems_aggregate: Problems_Aggregate;
  /** fetch data from the table: "problems" using primary key columns */
  problems_by_pk?: Maybe<Problems>;
  /** fetch data from the table: "submissions" */
  submissions: Array<Submissions>;
  /** fetch aggregated fields from the table: "submissions" */
  submissions_aggregate: Submissions_Aggregate;
  /** fetch data from the table: "submissions" using primary key columns */
  submissions_by_pk?: Maybe<Submissions>;
  /** An array relationship */
  test_cases: Array<Test_Cases>;
  /** An aggregate relationship */
  test_cases_aggregate: Test_Cases_Aggregate;
  /** fetch data from the table: "test_cases" using primary key columns */
  test_cases_by_pk?: Maybe<Test_Cases>;
  /** An array relationship */
  user_submissions: Array<User_Submissions>;
  /** An aggregate relationship */
  user_submissions_aggregate: User_Submissions_Aggregate;
  /** fetch data from the table: "user_submissions" using primary key columns */
  user_submissions_by_pk?: Maybe<User_Submissions>;
  /** fetch data from the table: "users" */
  users: Array<Users>;
  /** fetch aggregated fields from the table: "users" */
  users_aggregate: Users_Aggregate;
  /** fetch data from the table: "users" using primary key columns */
  users_by_pk?: Maybe<Users>;
};


export type Query_RootLanguagesArgs = {
  distinct_on?: InputMaybe<Array<Languages_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Languages_Order_By>>;
  where?: InputMaybe<Languages_Bool_Exp>;
};


export type Query_RootLanguages_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Languages_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Languages_Order_By>>;
  where?: InputMaybe<Languages_Bool_Exp>;
};


export type Query_RootLanguages_By_PkArgs = {
  id: Scalars['Int']['input'];
};


export type Query_RootProblemsArgs = {
  distinct_on?: InputMaybe<Array<Problems_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Problems_Order_By>>;
  where?: InputMaybe<Problems_Bool_Exp>;
};


export type Query_RootProblems_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Problems_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Problems_Order_By>>;
  where?: InputMaybe<Problems_Bool_Exp>;
};


export type Query_RootProblems_By_PkArgs = {
  id: Scalars['uuid']['input'];
};


export type Query_RootSubmissionsArgs = {
  distinct_on?: InputMaybe<Array<Submissions_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Submissions_Order_By>>;
  where?: InputMaybe<Submissions_Bool_Exp>;
};


export type Query_RootSubmissions_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Submissions_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Submissions_Order_By>>;
  where?: InputMaybe<Submissions_Bool_Exp>;
};


export type Query_RootSubmissions_By_PkArgs = {
  id: Scalars['Int']['input'];
};


export type Query_RootTest_CasesArgs = {
  distinct_on?: InputMaybe<Array<Test_Cases_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Test_Cases_Order_By>>;
  where?: InputMaybe<Test_Cases_Bool_Exp>;
};


export type Query_RootTest_Cases_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Test_Cases_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Test_Cases_Order_By>>;
  where?: InputMaybe<Test_Cases_Bool_Exp>;
};


export type Query_RootTest_Cases_By_PkArgs = {
  id: Scalars['uuid']['input'];
};


export type Query_RootUser_SubmissionsArgs = {
  distinct_on?: InputMaybe<Array<User_Submissions_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<User_Submissions_Order_By>>;
  where?: InputMaybe<User_Submissions_Bool_Exp>;
};


export type Query_RootUser_Submissions_AggregateArgs = {
  distinct_on?: InputMaybe<Array<User_Submissions_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<User_Submissions_Order_By>>;
  where?: InputMaybe<User_Submissions_Bool_Exp>;
};


export type Query_RootUser_Submissions_By_PkArgs = {
  id: Scalars['uuid']['input'];
};


export type Query_RootUsersArgs = {
  distinct_on?: InputMaybe<Array<Users_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Users_Order_By>>;
  where?: InputMaybe<Users_Bool_Exp>;
};


export type Query_RootUsers_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Users_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Users_Order_By>>;
  where?: InputMaybe<Users_Bool_Exp>;
};


export type Query_RootUsers_By_PkArgs = {
  id: Scalars['String']['input'];
};

/** columns and relationships of "submissions" */
export type Submissions = {
  __typename?: 'submissions';
  additional_files?: Maybe<Scalars['bytea']['output']>;
  callback_url?: Maybe<Scalars['String']['output']>;
  command_line_arguments?: Maybe<Scalars['String']['output']>;
  compile_output?: Maybe<Scalars['String']['output']>;
  compiler_options?: Maybe<Scalars['String']['output']>;
  cpu_extra_time?: Maybe<Scalars['numeric']['output']>;
  cpu_time_limit?: Maybe<Scalars['numeric']['output']>;
  created_at?: Maybe<Scalars['timestamp']['output']>;
  enable_network?: Maybe<Scalars['Boolean']['output']>;
  enable_per_process_and_thread_memory_limit?: Maybe<Scalars['Boolean']['output']>;
  enable_per_process_and_thread_time_limit?: Maybe<Scalars['Boolean']['output']>;
  exit_code?: Maybe<Scalars['Int']['output']>;
  exit_signal?: Maybe<Scalars['Int']['output']>;
  expected_output?: Maybe<Scalars['String']['output']>;
  finished_at?: Maybe<Scalars['timestamp']['output']>;
  id: Scalars['Int']['output'];
  language_id?: Maybe<Scalars['Int']['output']>;
  max_file_size?: Maybe<Scalars['Int']['output']>;
  max_processes_and_or_threads?: Maybe<Scalars['Int']['output']>;
  memory?: Maybe<Scalars['Int']['output']>;
  memory_limit?: Maybe<Scalars['Int']['output']>;
  message?: Maybe<Scalars['String']['output']>;
  number_of_runs?: Maybe<Scalars['Int']['output']>;
  redirect_stderr_to_stdout?: Maybe<Scalars['Boolean']['output']>;
  source_code?: Maybe<Scalars['String']['output']>;
  stack_limit?: Maybe<Scalars['Int']['output']>;
  status_id?: Maybe<Scalars['Int']['output']>;
  stderr?: Maybe<Scalars['String']['output']>;
  stdin?: Maybe<Scalars['String']['output']>;
  stdout?: Maybe<Scalars['String']['output']>;
  time?: Maybe<Scalars['numeric']['output']>;
  token?: Maybe<Scalars['String']['output']>;
  /** An array relationship */
  user_submissions: Array<User_Submissions>;
  /** An aggregate relationship */
  user_submissions_aggregate: User_Submissions_Aggregate;
  wall_time?: Maybe<Scalars['numeric']['output']>;
  wall_time_limit?: Maybe<Scalars['numeric']['output']>;
};


/** columns and relationships of "submissions" */
export type SubmissionsUser_SubmissionsArgs = {
  distinct_on?: InputMaybe<Array<User_Submissions_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<User_Submissions_Order_By>>;
  where?: InputMaybe<User_Submissions_Bool_Exp>;
};


/** columns and relationships of "submissions" */
export type SubmissionsUser_Submissions_AggregateArgs = {
  distinct_on?: InputMaybe<Array<User_Submissions_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<User_Submissions_Order_By>>;
  where?: InputMaybe<User_Submissions_Bool_Exp>;
};

/** aggregated selection of "submissions" */
export type Submissions_Aggregate = {
  __typename?: 'submissions_aggregate';
  aggregate?: Maybe<Submissions_Aggregate_Fields>;
  nodes: Array<Submissions>;
};

/** aggregate fields of "submissions" */
export type Submissions_Aggregate_Fields = {
  __typename?: 'submissions_aggregate_fields';
  avg?: Maybe<Submissions_Avg_Fields>;
  count: Scalars['Int']['output'];
  max?: Maybe<Submissions_Max_Fields>;
  min?: Maybe<Submissions_Min_Fields>;
  stddev?: Maybe<Submissions_Stddev_Fields>;
  stddev_pop?: Maybe<Submissions_Stddev_Pop_Fields>;
  stddev_samp?: Maybe<Submissions_Stddev_Samp_Fields>;
  sum?: Maybe<Submissions_Sum_Fields>;
  var_pop?: Maybe<Submissions_Var_Pop_Fields>;
  var_samp?: Maybe<Submissions_Var_Samp_Fields>;
  variance?: Maybe<Submissions_Variance_Fields>;
};


/** aggregate fields of "submissions" */
export type Submissions_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<Array<Submissions_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']['input']>;
};

/** aggregate avg on columns */
export type Submissions_Avg_Fields = {
  __typename?: 'submissions_avg_fields';
  cpu_extra_time?: Maybe<Scalars['Float']['output']>;
  cpu_time_limit?: Maybe<Scalars['Float']['output']>;
  exit_code?: Maybe<Scalars['Float']['output']>;
  exit_signal?: Maybe<Scalars['Float']['output']>;
  id?: Maybe<Scalars['Float']['output']>;
  language_id?: Maybe<Scalars['Float']['output']>;
  max_file_size?: Maybe<Scalars['Float']['output']>;
  max_processes_and_or_threads?: Maybe<Scalars['Float']['output']>;
  memory?: Maybe<Scalars['Float']['output']>;
  memory_limit?: Maybe<Scalars['Float']['output']>;
  number_of_runs?: Maybe<Scalars['Float']['output']>;
  stack_limit?: Maybe<Scalars['Float']['output']>;
  status_id?: Maybe<Scalars['Float']['output']>;
  time?: Maybe<Scalars['Float']['output']>;
  wall_time?: Maybe<Scalars['Float']['output']>;
  wall_time_limit?: Maybe<Scalars['Float']['output']>;
};

/** Boolean expression to filter rows from the table "submissions". All fields are combined with a logical 'AND'. */
export type Submissions_Bool_Exp = {
  _and?: InputMaybe<Array<Submissions_Bool_Exp>>;
  _not?: InputMaybe<Submissions_Bool_Exp>;
  _or?: InputMaybe<Array<Submissions_Bool_Exp>>;
  additional_files?: InputMaybe<Bytea_Comparison_Exp>;
  callback_url?: InputMaybe<String_Comparison_Exp>;
  command_line_arguments?: InputMaybe<String_Comparison_Exp>;
  compile_output?: InputMaybe<String_Comparison_Exp>;
  compiler_options?: InputMaybe<String_Comparison_Exp>;
  cpu_extra_time?: InputMaybe<Numeric_Comparison_Exp>;
  cpu_time_limit?: InputMaybe<Numeric_Comparison_Exp>;
  created_at?: InputMaybe<Timestamp_Comparison_Exp>;
  enable_network?: InputMaybe<Boolean_Comparison_Exp>;
  enable_per_process_and_thread_memory_limit?: InputMaybe<Boolean_Comparison_Exp>;
  enable_per_process_and_thread_time_limit?: InputMaybe<Boolean_Comparison_Exp>;
  exit_code?: InputMaybe<Int_Comparison_Exp>;
  exit_signal?: InputMaybe<Int_Comparison_Exp>;
  expected_output?: InputMaybe<String_Comparison_Exp>;
  finished_at?: InputMaybe<Timestamp_Comparison_Exp>;
  id?: InputMaybe<Int_Comparison_Exp>;
  language_id?: InputMaybe<Int_Comparison_Exp>;
  max_file_size?: InputMaybe<Int_Comparison_Exp>;
  max_processes_and_or_threads?: InputMaybe<Int_Comparison_Exp>;
  memory?: InputMaybe<Int_Comparison_Exp>;
  memory_limit?: InputMaybe<Int_Comparison_Exp>;
  message?: InputMaybe<String_Comparison_Exp>;
  number_of_runs?: InputMaybe<Int_Comparison_Exp>;
  redirect_stderr_to_stdout?: InputMaybe<Boolean_Comparison_Exp>;
  source_code?: InputMaybe<String_Comparison_Exp>;
  stack_limit?: InputMaybe<Int_Comparison_Exp>;
  status_id?: InputMaybe<Int_Comparison_Exp>;
  stderr?: InputMaybe<String_Comparison_Exp>;
  stdin?: InputMaybe<String_Comparison_Exp>;
  stdout?: InputMaybe<String_Comparison_Exp>;
  time?: InputMaybe<Numeric_Comparison_Exp>;
  token?: InputMaybe<String_Comparison_Exp>;
  user_submissions?: InputMaybe<User_Submissions_Bool_Exp>;
  user_submissions_aggregate?: InputMaybe<User_Submissions_Aggregate_Bool_Exp>;
  wall_time?: InputMaybe<Numeric_Comparison_Exp>;
  wall_time_limit?: InputMaybe<Numeric_Comparison_Exp>;
};

/** unique or primary key constraints on table "submissions" */
export enum Submissions_Constraint {
  /** unique or primary key constraint on columns "id" */
  SubmissionsPkey = 'submissions_pkey',
  /** unique or primary key constraint on columns "token" */
  SubmissionsTokenKey = 'submissions_token_key'
}

/** input type for incrementing numeric columns in table "submissions" */
export type Submissions_Inc_Input = {
  cpu_extra_time?: InputMaybe<Scalars['numeric']['input']>;
  cpu_time_limit?: InputMaybe<Scalars['numeric']['input']>;
  exit_code?: InputMaybe<Scalars['Int']['input']>;
  exit_signal?: InputMaybe<Scalars['Int']['input']>;
  id?: InputMaybe<Scalars['Int']['input']>;
  language_id?: InputMaybe<Scalars['Int']['input']>;
  max_file_size?: InputMaybe<Scalars['Int']['input']>;
  max_processes_and_or_threads?: InputMaybe<Scalars['Int']['input']>;
  memory?: InputMaybe<Scalars['Int']['input']>;
  memory_limit?: InputMaybe<Scalars['Int']['input']>;
  number_of_runs?: InputMaybe<Scalars['Int']['input']>;
  stack_limit?: InputMaybe<Scalars['Int']['input']>;
  status_id?: InputMaybe<Scalars['Int']['input']>;
  time?: InputMaybe<Scalars['numeric']['input']>;
  wall_time?: InputMaybe<Scalars['numeric']['input']>;
  wall_time_limit?: InputMaybe<Scalars['numeric']['input']>;
};

/** input type for inserting data into table "submissions" */
export type Submissions_Insert_Input = {
  additional_files?: InputMaybe<Scalars['bytea']['input']>;
  callback_url?: InputMaybe<Scalars['String']['input']>;
  command_line_arguments?: InputMaybe<Scalars['String']['input']>;
  compile_output?: InputMaybe<Scalars['String']['input']>;
  compiler_options?: InputMaybe<Scalars['String']['input']>;
  cpu_extra_time?: InputMaybe<Scalars['numeric']['input']>;
  cpu_time_limit?: InputMaybe<Scalars['numeric']['input']>;
  created_at?: InputMaybe<Scalars['timestamp']['input']>;
  enable_network?: InputMaybe<Scalars['Boolean']['input']>;
  enable_per_process_and_thread_memory_limit?: InputMaybe<Scalars['Boolean']['input']>;
  enable_per_process_and_thread_time_limit?: InputMaybe<Scalars['Boolean']['input']>;
  exit_code?: InputMaybe<Scalars['Int']['input']>;
  exit_signal?: InputMaybe<Scalars['Int']['input']>;
  expected_output?: InputMaybe<Scalars['String']['input']>;
  finished_at?: InputMaybe<Scalars['timestamp']['input']>;
  id?: InputMaybe<Scalars['Int']['input']>;
  language_id?: InputMaybe<Scalars['Int']['input']>;
  max_file_size?: InputMaybe<Scalars['Int']['input']>;
  max_processes_and_or_threads?: InputMaybe<Scalars['Int']['input']>;
  memory?: InputMaybe<Scalars['Int']['input']>;
  memory_limit?: InputMaybe<Scalars['Int']['input']>;
  message?: InputMaybe<Scalars['String']['input']>;
  number_of_runs?: InputMaybe<Scalars['Int']['input']>;
  redirect_stderr_to_stdout?: InputMaybe<Scalars['Boolean']['input']>;
  source_code?: InputMaybe<Scalars['String']['input']>;
  stack_limit?: InputMaybe<Scalars['Int']['input']>;
  status_id?: InputMaybe<Scalars['Int']['input']>;
  stderr?: InputMaybe<Scalars['String']['input']>;
  stdin?: InputMaybe<Scalars['String']['input']>;
  stdout?: InputMaybe<Scalars['String']['input']>;
  time?: InputMaybe<Scalars['numeric']['input']>;
  token?: InputMaybe<Scalars['String']['input']>;
  user_submissions?: InputMaybe<User_Submissions_Arr_Rel_Insert_Input>;
  wall_time?: InputMaybe<Scalars['numeric']['input']>;
  wall_time_limit?: InputMaybe<Scalars['numeric']['input']>;
};

/** aggregate max on columns */
export type Submissions_Max_Fields = {
  __typename?: 'submissions_max_fields';
  callback_url?: Maybe<Scalars['String']['output']>;
  command_line_arguments?: Maybe<Scalars['String']['output']>;
  compile_output?: Maybe<Scalars['String']['output']>;
  compiler_options?: Maybe<Scalars['String']['output']>;
  cpu_extra_time?: Maybe<Scalars['numeric']['output']>;
  cpu_time_limit?: Maybe<Scalars['numeric']['output']>;
  created_at?: Maybe<Scalars['timestamp']['output']>;
  exit_code?: Maybe<Scalars['Int']['output']>;
  exit_signal?: Maybe<Scalars['Int']['output']>;
  expected_output?: Maybe<Scalars['String']['output']>;
  finished_at?: Maybe<Scalars['timestamp']['output']>;
  id?: Maybe<Scalars['Int']['output']>;
  language_id?: Maybe<Scalars['Int']['output']>;
  max_file_size?: Maybe<Scalars['Int']['output']>;
  max_processes_and_or_threads?: Maybe<Scalars['Int']['output']>;
  memory?: Maybe<Scalars['Int']['output']>;
  memory_limit?: Maybe<Scalars['Int']['output']>;
  message?: Maybe<Scalars['String']['output']>;
  number_of_runs?: Maybe<Scalars['Int']['output']>;
  source_code?: Maybe<Scalars['String']['output']>;
  stack_limit?: Maybe<Scalars['Int']['output']>;
  status_id?: Maybe<Scalars['Int']['output']>;
  stderr?: Maybe<Scalars['String']['output']>;
  stdin?: Maybe<Scalars['String']['output']>;
  stdout?: Maybe<Scalars['String']['output']>;
  time?: Maybe<Scalars['numeric']['output']>;
  token?: Maybe<Scalars['String']['output']>;
  wall_time?: Maybe<Scalars['numeric']['output']>;
  wall_time_limit?: Maybe<Scalars['numeric']['output']>;
};

/** aggregate min on columns */
export type Submissions_Min_Fields = {
  __typename?: 'submissions_min_fields';
  callback_url?: Maybe<Scalars['String']['output']>;
  command_line_arguments?: Maybe<Scalars['String']['output']>;
  compile_output?: Maybe<Scalars['String']['output']>;
  compiler_options?: Maybe<Scalars['String']['output']>;
  cpu_extra_time?: Maybe<Scalars['numeric']['output']>;
  cpu_time_limit?: Maybe<Scalars['numeric']['output']>;
  created_at?: Maybe<Scalars['timestamp']['output']>;
  exit_code?: Maybe<Scalars['Int']['output']>;
  exit_signal?: Maybe<Scalars['Int']['output']>;
  expected_output?: Maybe<Scalars['String']['output']>;
  finished_at?: Maybe<Scalars['timestamp']['output']>;
  id?: Maybe<Scalars['Int']['output']>;
  language_id?: Maybe<Scalars['Int']['output']>;
  max_file_size?: Maybe<Scalars['Int']['output']>;
  max_processes_and_or_threads?: Maybe<Scalars['Int']['output']>;
  memory?: Maybe<Scalars['Int']['output']>;
  memory_limit?: Maybe<Scalars['Int']['output']>;
  message?: Maybe<Scalars['String']['output']>;
  number_of_runs?: Maybe<Scalars['Int']['output']>;
  source_code?: Maybe<Scalars['String']['output']>;
  stack_limit?: Maybe<Scalars['Int']['output']>;
  status_id?: Maybe<Scalars['Int']['output']>;
  stderr?: Maybe<Scalars['String']['output']>;
  stdin?: Maybe<Scalars['String']['output']>;
  stdout?: Maybe<Scalars['String']['output']>;
  time?: Maybe<Scalars['numeric']['output']>;
  token?: Maybe<Scalars['String']['output']>;
  wall_time?: Maybe<Scalars['numeric']['output']>;
  wall_time_limit?: Maybe<Scalars['numeric']['output']>;
};

/** response of any mutation on the table "submissions" */
export type Submissions_Mutation_Response = {
  __typename?: 'submissions_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int']['output'];
  /** data from the rows affected by the mutation */
  returning: Array<Submissions>;
};

/** input type for inserting object relation for remote table "submissions" */
export type Submissions_Obj_Rel_Insert_Input = {
  data: Submissions_Insert_Input;
  /** upsert condition */
  on_conflict?: InputMaybe<Submissions_On_Conflict>;
};

/** on_conflict condition type for table "submissions" */
export type Submissions_On_Conflict = {
  constraint: Submissions_Constraint;
  update_columns?: Array<Submissions_Update_Column>;
  where?: InputMaybe<Submissions_Bool_Exp>;
};

/** Ordering options when selecting data from "submissions". */
export type Submissions_Order_By = {
  additional_files?: InputMaybe<Order_By>;
  callback_url?: InputMaybe<Order_By>;
  command_line_arguments?: InputMaybe<Order_By>;
  compile_output?: InputMaybe<Order_By>;
  compiler_options?: InputMaybe<Order_By>;
  cpu_extra_time?: InputMaybe<Order_By>;
  cpu_time_limit?: InputMaybe<Order_By>;
  created_at?: InputMaybe<Order_By>;
  enable_network?: InputMaybe<Order_By>;
  enable_per_process_and_thread_memory_limit?: InputMaybe<Order_By>;
  enable_per_process_and_thread_time_limit?: InputMaybe<Order_By>;
  exit_code?: InputMaybe<Order_By>;
  exit_signal?: InputMaybe<Order_By>;
  expected_output?: InputMaybe<Order_By>;
  finished_at?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  language_id?: InputMaybe<Order_By>;
  max_file_size?: InputMaybe<Order_By>;
  max_processes_and_or_threads?: InputMaybe<Order_By>;
  memory?: InputMaybe<Order_By>;
  memory_limit?: InputMaybe<Order_By>;
  message?: InputMaybe<Order_By>;
  number_of_runs?: InputMaybe<Order_By>;
  redirect_stderr_to_stdout?: InputMaybe<Order_By>;
  source_code?: InputMaybe<Order_By>;
  stack_limit?: InputMaybe<Order_By>;
  status_id?: InputMaybe<Order_By>;
  stderr?: InputMaybe<Order_By>;
  stdin?: InputMaybe<Order_By>;
  stdout?: InputMaybe<Order_By>;
  time?: InputMaybe<Order_By>;
  token?: InputMaybe<Order_By>;
  user_submissions_aggregate?: InputMaybe<User_Submissions_Aggregate_Order_By>;
  wall_time?: InputMaybe<Order_By>;
  wall_time_limit?: InputMaybe<Order_By>;
};

/** primary key columns input for table: submissions */
export type Submissions_Pk_Columns_Input = {
  id: Scalars['Int']['input'];
};

/** select columns of table "submissions" */
export enum Submissions_Select_Column {
  /** column name */
  AdditionalFiles = 'additional_files',
  /** column name */
  CallbackUrl = 'callback_url',
  /** column name */
  CommandLineArguments = 'command_line_arguments',
  /** column name */
  CompileOutput = 'compile_output',
  /** column name */
  CompilerOptions = 'compiler_options',
  /** column name */
  CpuExtraTime = 'cpu_extra_time',
  /** column name */
  CpuTimeLimit = 'cpu_time_limit',
  /** column name */
  CreatedAt = 'created_at',
  /** column name */
  EnableNetwork = 'enable_network',
  /** column name */
  EnablePerProcessAndThreadMemoryLimit = 'enable_per_process_and_thread_memory_limit',
  /** column name */
  EnablePerProcessAndThreadTimeLimit = 'enable_per_process_and_thread_time_limit',
  /** column name */
  ExitCode = 'exit_code',
  /** column name */
  ExitSignal = 'exit_signal',
  /** column name */
  ExpectedOutput = 'expected_output',
  /** column name */
  FinishedAt = 'finished_at',
  /** column name */
  Id = 'id',
  /** column name */
  LanguageId = 'language_id',
  /** column name */
  MaxFileSize = 'max_file_size',
  /** column name */
  MaxProcessesAndOrThreads = 'max_processes_and_or_threads',
  /** column name */
  Memory = 'memory',
  /** column name */
  MemoryLimit = 'memory_limit',
  /** column name */
  Message = 'message',
  /** column name */
  NumberOfRuns = 'number_of_runs',
  /** column name */
  RedirectStderrToStdout = 'redirect_stderr_to_stdout',
  /** column name */
  SourceCode = 'source_code',
  /** column name */
  StackLimit = 'stack_limit',
  /** column name */
  StatusId = 'status_id',
  /** column name */
  Stderr = 'stderr',
  /** column name */
  Stdin = 'stdin',
  /** column name */
  Stdout = 'stdout',
  /** column name */
  Time = 'time',
  /** column name */
  Token = 'token',
  /** column name */
  WallTime = 'wall_time',
  /** column name */
  WallTimeLimit = 'wall_time_limit'
}

/** input type for updating data in table "submissions" */
export type Submissions_Set_Input = {
  additional_files?: InputMaybe<Scalars['bytea']['input']>;
  callback_url?: InputMaybe<Scalars['String']['input']>;
  command_line_arguments?: InputMaybe<Scalars['String']['input']>;
  compile_output?: InputMaybe<Scalars['String']['input']>;
  compiler_options?: InputMaybe<Scalars['String']['input']>;
  cpu_extra_time?: InputMaybe<Scalars['numeric']['input']>;
  cpu_time_limit?: InputMaybe<Scalars['numeric']['input']>;
  created_at?: InputMaybe<Scalars['timestamp']['input']>;
  enable_network?: InputMaybe<Scalars['Boolean']['input']>;
  enable_per_process_and_thread_memory_limit?: InputMaybe<Scalars['Boolean']['input']>;
  enable_per_process_and_thread_time_limit?: InputMaybe<Scalars['Boolean']['input']>;
  exit_code?: InputMaybe<Scalars['Int']['input']>;
  exit_signal?: InputMaybe<Scalars['Int']['input']>;
  expected_output?: InputMaybe<Scalars['String']['input']>;
  finished_at?: InputMaybe<Scalars['timestamp']['input']>;
  id?: InputMaybe<Scalars['Int']['input']>;
  language_id?: InputMaybe<Scalars['Int']['input']>;
  max_file_size?: InputMaybe<Scalars['Int']['input']>;
  max_processes_and_or_threads?: InputMaybe<Scalars['Int']['input']>;
  memory?: InputMaybe<Scalars['Int']['input']>;
  memory_limit?: InputMaybe<Scalars['Int']['input']>;
  message?: InputMaybe<Scalars['String']['input']>;
  number_of_runs?: InputMaybe<Scalars['Int']['input']>;
  redirect_stderr_to_stdout?: InputMaybe<Scalars['Boolean']['input']>;
  source_code?: InputMaybe<Scalars['String']['input']>;
  stack_limit?: InputMaybe<Scalars['Int']['input']>;
  status_id?: InputMaybe<Scalars['Int']['input']>;
  stderr?: InputMaybe<Scalars['String']['input']>;
  stdin?: InputMaybe<Scalars['String']['input']>;
  stdout?: InputMaybe<Scalars['String']['input']>;
  time?: InputMaybe<Scalars['numeric']['input']>;
  token?: InputMaybe<Scalars['String']['input']>;
  wall_time?: InputMaybe<Scalars['numeric']['input']>;
  wall_time_limit?: InputMaybe<Scalars['numeric']['input']>;
};

/** aggregate stddev on columns */
export type Submissions_Stddev_Fields = {
  __typename?: 'submissions_stddev_fields';
  cpu_extra_time?: Maybe<Scalars['Float']['output']>;
  cpu_time_limit?: Maybe<Scalars['Float']['output']>;
  exit_code?: Maybe<Scalars['Float']['output']>;
  exit_signal?: Maybe<Scalars['Float']['output']>;
  id?: Maybe<Scalars['Float']['output']>;
  language_id?: Maybe<Scalars['Float']['output']>;
  max_file_size?: Maybe<Scalars['Float']['output']>;
  max_processes_and_or_threads?: Maybe<Scalars['Float']['output']>;
  memory?: Maybe<Scalars['Float']['output']>;
  memory_limit?: Maybe<Scalars['Float']['output']>;
  number_of_runs?: Maybe<Scalars['Float']['output']>;
  stack_limit?: Maybe<Scalars['Float']['output']>;
  status_id?: Maybe<Scalars['Float']['output']>;
  time?: Maybe<Scalars['Float']['output']>;
  wall_time?: Maybe<Scalars['Float']['output']>;
  wall_time_limit?: Maybe<Scalars['Float']['output']>;
};

/** aggregate stddev_pop on columns */
export type Submissions_Stddev_Pop_Fields = {
  __typename?: 'submissions_stddev_pop_fields';
  cpu_extra_time?: Maybe<Scalars['Float']['output']>;
  cpu_time_limit?: Maybe<Scalars['Float']['output']>;
  exit_code?: Maybe<Scalars['Float']['output']>;
  exit_signal?: Maybe<Scalars['Float']['output']>;
  id?: Maybe<Scalars['Float']['output']>;
  language_id?: Maybe<Scalars['Float']['output']>;
  max_file_size?: Maybe<Scalars['Float']['output']>;
  max_processes_and_or_threads?: Maybe<Scalars['Float']['output']>;
  memory?: Maybe<Scalars['Float']['output']>;
  memory_limit?: Maybe<Scalars['Float']['output']>;
  number_of_runs?: Maybe<Scalars['Float']['output']>;
  stack_limit?: Maybe<Scalars['Float']['output']>;
  status_id?: Maybe<Scalars['Float']['output']>;
  time?: Maybe<Scalars['Float']['output']>;
  wall_time?: Maybe<Scalars['Float']['output']>;
  wall_time_limit?: Maybe<Scalars['Float']['output']>;
};

/** aggregate stddev_samp on columns */
export type Submissions_Stddev_Samp_Fields = {
  __typename?: 'submissions_stddev_samp_fields';
  cpu_extra_time?: Maybe<Scalars['Float']['output']>;
  cpu_time_limit?: Maybe<Scalars['Float']['output']>;
  exit_code?: Maybe<Scalars['Float']['output']>;
  exit_signal?: Maybe<Scalars['Float']['output']>;
  id?: Maybe<Scalars['Float']['output']>;
  language_id?: Maybe<Scalars['Float']['output']>;
  max_file_size?: Maybe<Scalars['Float']['output']>;
  max_processes_and_or_threads?: Maybe<Scalars['Float']['output']>;
  memory?: Maybe<Scalars['Float']['output']>;
  memory_limit?: Maybe<Scalars['Float']['output']>;
  number_of_runs?: Maybe<Scalars['Float']['output']>;
  stack_limit?: Maybe<Scalars['Float']['output']>;
  status_id?: Maybe<Scalars['Float']['output']>;
  time?: Maybe<Scalars['Float']['output']>;
  wall_time?: Maybe<Scalars['Float']['output']>;
  wall_time_limit?: Maybe<Scalars['Float']['output']>;
};

/** Streaming cursor of the table "submissions" */
export type Submissions_Stream_Cursor_Input = {
  /** Stream column input with initial value */
  initial_value: Submissions_Stream_Cursor_Value_Input;
  /** cursor ordering */
  ordering?: InputMaybe<Cursor_Ordering>;
};

/** Initial value of the column from where the streaming should start */
export type Submissions_Stream_Cursor_Value_Input = {
  additional_files?: InputMaybe<Scalars['bytea']['input']>;
  callback_url?: InputMaybe<Scalars['String']['input']>;
  command_line_arguments?: InputMaybe<Scalars['String']['input']>;
  compile_output?: InputMaybe<Scalars['String']['input']>;
  compiler_options?: InputMaybe<Scalars['String']['input']>;
  cpu_extra_time?: InputMaybe<Scalars['numeric']['input']>;
  cpu_time_limit?: InputMaybe<Scalars['numeric']['input']>;
  created_at?: InputMaybe<Scalars['timestamp']['input']>;
  enable_network?: InputMaybe<Scalars['Boolean']['input']>;
  enable_per_process_and_thread_memory_limit?: InputMaybe<Scalars['Boolean']['input']>;
  enable_per_process_and_thread_time_limit?: InputMaybe<Scalars['Boolean']['input']>;
  exit_code?: InputMaybe<Scalars['Int']['input']>;
  exit_signal?: InputMaybe<Scalars['Int']['input']>;
  expected_output?: InputMaybe<Scalars['String']['input']>;
  finished_at?: InputMaybe<Scalars['timestamp']['input']>;
  id?: InputMaybe<Scalars['Int']['input']>;
  language_id?: InputMaybe<Scalars['Int']['input']>;
  max_file_size?: InputMaybe<Scalars['Int']['input']>;
  max_processes_and_or_threads?: InputMaybe<Scalars['Int']['input']>;
  memory?: InputMaybe<Scalars['Int']['input']>;
  memory_limit?: InputMaybe<Scalars['Int']['input']>;
  message?: InputMaybe<Scalars['String']['input']>;
  number_of_runs?: InputMaybe<Scalars['Int']['input']>;
  redirect_stderr_to_stdout?: InputMaybe<Scalars['Boolean']['input']>;
  source_code?: InputMaybe<Scalars['String']['input']>;
  stack_limit?: InputMaybe<Scalars['Int']['input']>;
  status_id?: InputMaybe<Scalars['Int']['input']>;
  stderr?: InputMaybe<Scalars['String']['input']>;
  stdin?: InputMaybe<Scalars['String']['input']>;
  stdout?: InputMaybe<Scalars['String']['input']>;
  time?: InputMaybe<Scalars['numeric']['input']>;
  token?: InputMaybe<Scalars['String']['input']>;
  wall_time?: InputMaybe<Scalars['numeric']['input']>;
  wall_time_limit?: InputMaybe<Scalars['numeric']['input']>;
};

/** aggregate sum on columns */
export type Submissions_Sum_Fields = {
  __typename?: 'submissions_sum_fields';
  cpu_extra_time?: Maybe<Scalars['numeric']['output']>;
  cpu_time_limit?: Maybe<Scalars['numeric']['output']>;
  exit_code?: Maybe<Scalars['Int']['output']>;
  exit_signal?: Maybe<Scalars['Int']['output']>;
  id?: Maybe<Scalars['Int']['output']>;
  language_id?: Maybe<Scalars['Int']['output']>;
  max_file_size?: Maybe<Scalars['Int']['output']>;
  max_processes_and_or_threads?: Maybe<Scalars['Int']['output']>;
  memory?: Maybe<Scalars['Int']['output']>;
  memory_limit?: Maybe<Scalars['Int']['output']>;
  number_of_runs?: Maybe<Scalars['Int']['output']>;
  stack_limit?: Maybe<Scalars['Int']['output']>;
  status_id?: Maybe<Scalars['Int']['output']>;
  time?: Maybe<Scalars['numeric']['output']>;
  wall_time?: Maybe<Scalars['numeric']['output']>;
  wall_time_limit?: Maybe<Scalars['numeric']['output']>;
};

/** update columns of table "submissions" */
export enum Submissions_Update_Column {
  /** column name */
  AdditionalFiles = 'additional_files',
  /** column name */
  CallbackUrl = 'callback_url',
  /** column name */
  CommandLineArguments = 'command_line_arguments',
  /** column name */
  CompileOutput = 'compile_output',
  /** column name */
  CompilerOptions = 'compiler_options',
  /** column name */
  CpuExtraTime = 'cpu_extra_time',
  /** column name */
  CpuTimeLimit = 'cpu_time_limit',
  /** column name */
  CreatedAt = 'created_at',
  /** column name */
  EnableNetwork = 'enable_network',
  /** column name */
  EnablePerProcessAndThreadMemoryLimit = 'enable_per_process_and_thread_memory_limit',
  /** column name */
  EnablePerProcessAndThreadTimeLimit = 'enable_per_process_and_thread_time_limit',
  /** column name */
  ExitCode = 'exit_code',
  /** column name */
  ExitSignal = 'exit_signal',
  /** column name */
  ExpectedOutput = 'expected_output',
  /** column name */
  FinishedAt = 'finished_at',
  /** column name */
  Id = 'id',
  /** column name */
  LanguageId = 'language_id',
  /** column name */
  MaxFileSize = 'max_file_size',
  /** column name */
  MaxProcessesAndOrThreads = 'max_processes_and_or_threads',
  /** column name */
  Memory = 'memory',
  /** column name */
  MemoryLimit = 'memory_limit',
  /** column name */
  Message = 'message',
  /** column name */
  NumberOfRuns = 'number_of_runs',
  /** column name */
  RedirectStderrToStdout = 'redirect_stderr_to_stdout',
  /** column name */
  SourceCode = 'source_code',
  /** column name */
  StackLimit = 'stack_limit',
  /** column name */
  StatusId = 'status_id',
  /** column name */
  Stderr = 'stderr',
  /** column name */
  Stdin = 'stdin',
  /** column name */
  Stdout = 'stdout',
  /** column name */
  Time = 'time',
  /** column name */
  Token = 'token',
  /** column name */
  WallTime = 'wall_time',
  /** column name */
  WallTimeLimit = 'wall_time_limit'
}

export type Submissions_Updates = {
  /** increments the numeric columns with given value of the filtered values */
  _inc?: InputMaybe<Submissions_Inc_Input>;
  /** sets the columns of the filtered rows to the given values */
  _set?: InputMaybe<Submissions_Set_Input>;
  /** filter the rows which have to be updated */
  where: Submissions_Bool_Exp;
};

/** aggregate var_pop on columns */
export type Submissions_Var_Pop_Fields = {
  __typename?: 'submissions_var_pop_fields';
  cpu_extra_time?: Maybe<Scalars['Float']['output']>;
  cpu_time_limit?: Maybe<Scalars['Float']['output']>;
  exit_code?: Maybe<Scalars['Float']['output']>;
  exit_signal?: Maybe<Scalars['Float']['output']>;
  id?: Maybe<Scalars['Float']['output']>;
  language_id?: Maybe<Scalars['Float']['output']>;
  max_file_size?: Maybe<Scalars['Float']['output']>;
  max_processes_and_or_threads?: Maybe<Scalars['Float']['output']>;
  memory?: Maybe<Scalars['Float']['output']>;
  memory_limit?: Maybe<Scalars['Float']['output']>;
  number_of_runs?: Maybe<Scalars['Float']['output']>;
  stack_limit?: Maybe<Scalars['Float']['output']>;
  status_id?: Maybe<Scalars['Float']['output']>;
  time?: Maybe<Scalars['Float']['output']>;
  wall_time?: Maybe<Scalars['Float']['output']>;
  wall_time_limit?: Maybe<Scalars['Float']['output']>;
};

/** aggregate var_samp on columns */
export type Submissions_Var_Samp_Fields = {
  __typename?: 'submissions_var_samp_fields';
  cpu_extra_time?: Maybe<Scalars['Float']['output']>;
  cpu_time_limit?: Maybe<Scalars['Float']['output']>;
  exit_code?: Maybe<Scalars['Float']['output']>;
  exit_signal?: Maybe<Scalars['Float']['output']>;
  id?: Maybe<Scalars['Float']['output']>;
  language_id?: Maybe<Scalars['Float']['output']>;
  max_file_size?: Maybe<Scalars['Float']['output']>;
  max_processes_and_or_threads?: Maybe<Scalars['Float']['output']>;
  memory?: Maybe<Scalars['Float']['output']>;
  memory_limit?: Maybe<Scalars['Float']['output']>;
  number_of_runs?: Maybe<Scalars['Float']['output']>;
  stack_limit?: Maybe<Scalars['Float']['output']>;
  status_id?: Maybe<Scalars['Float']['output']>;
  time?: Maybe<Scalars['Float']['output']>;
  wall_time?: Maybe<Scalars['Float']['output']>;
  wall_time_limit?: Maybe<Scalars['Float']['output']>;
};

/** aggregate variance on columns */
export type Submissions_Variance_Fields = {
  __typename?: 'submissions_variance_fields';
  cpu_extra_time?: Maybe<Scalars['Float']['output']>;
  cpu_time_limit?: Maybe<Scalars['Float']['output']>;
  exit_code?: Maybe<Scalars['Float']['output']>;
  exit_signal?: Maybe<Scalars['Float']['output']>;
  id?: Maybe<Scalars['Float']['output']>;
  language_id?: Maybe<Scalars['Float']['output']>;
  max_file_size?: Maybe<Scalars['Float']['output']>;
  max_processes_and_or_threads?: Maybe<Scalars['Float']['output']>;
  memory?: Maybe<Scalars['Float']['output']>;
  memory_limit?: Maybe<Scalars['Float']['output']>;
  number_of_runs?: Maybe<Scalars['Float']['output']>;
  stack_limit?: Maybe<Scalars['Float']['output']>;
  status_id?: Maybe<Scalars['Float']['output']>;
  time?: Maybe<Scalars['Float']['output']>;
  wall_time?: Maybe<Scalars['Float']['output']>;
  wall_time_limit?: Maybe<Scalars['Float']['output']>;
};

export type Subscription_Root = {
  __typename?: 'subscription_root';
  /** fetch data from the table: "languages" */
  languages: Array<Languages>;
  /** fetch aggregated fields from the table: "languages" */
  languages_aggregate: Languages_Aggregate;
  /** fetch data from the table: "languages" using primary key columns */
  languages_by_pk?: Maybe<Languages>;
  /** fetch data from the table in a streaming manner: "languages" */
  languages_stream: Array<Languages>;
  /** fetch data from the table: "problems" */
  problems: Array<Problems>;
  /** fetch aggregated fields from the table: "problems" */
  problems_aggregate: Problems_Aggregate;
  /** fetch data from the table: "problems" using primary key columns */
  problems_by_pk?: Maybe<Problems>;
  /** fetch data from the table in a streaming manner: "problems" */
  problems_stream: Array<Problems>;
  /** fetch data from the table: "submissions" */
  submissions: Array<Submissions>;
  /** fetch aggregated fields from the table: "submissions" */
  submissions_aggregate: Submissions_Aggregate;
  /** fetch data from the table: "submissions" using primary key columns */
  submissions_by_pk?: Maybe<Submissions>;
  /** fetch data from the table in a streaming manner: "submissions" */
  submissions_stream: Array<Submissions>;
  /** An array relationship */
  test_cases: Array<Test_Cases>;
  /** An aggregate relationship */
  test_cases_aggregate: Test_Cases_Aggregate;
  /** fetch data from the table: "test_cases" using primary key columns */
  test_cases_by_pk?: Maybe<Test_Cases>;
  /** fetch data from the table in a streaming manner: "test_cases" */
  test_cases_stream: Array<Test_Cases>;
  /** An array relationship */
  user_submissions: Array<User_Submissions>;
  /** An aggregate relationship */
  user_submissions_aggregate: User_Submissions_Aggregate;
  /** fetch data from the table: "user_submissions" using primary key columns */
  user_submissions_by_pk?: Maybe<User_Submissions>;
  /** fetch data from the table in a streaming manner: "user_submissions" */
  user_submissions_stream: Array<User_Submissions>;
  /** fetch data from the table: "users" */
  users: Array<Users>;
  /** fetch aggregated fields from the table: "users" */
  users_aggregate: Users_Aggregate;
  /** fetch data from the table: "users" using primary key columns */
  users_by_pk?: Maybe<Users>;
  /** fetch data from the table in a streaming manner: "users" */
  users_stream: Array<Users>;
};


export type Subscription_RootLanguagesArgs = {
  distinct_on?: InputMaybe<Array<Languages_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Languages_Order_By>>;
  where?: InputMaybe<Languages_Bool_Exp>;
};


export type Subscription_RootLanguages_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Languages_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Languages_Order_By>>;
  where?: InputMaybe<Languages_Bool_Exp>;
};


export type Subscription_RootLanguages_By_PkArgs = {
  id: Scalars['Int']['input'];
};


export type Subscription_RootLanguages_StreamArgs = {
  batch_size: Scalars['Int']['input'];
  cursor: Array<InputMaybe<Languages_Stream_Cursor_Input>>;
  where?: InputMaybe<Languages_Bool_Exp>;
};


export type Subscription_RootProblemsArgs = {
  distinct_on?: InputMaybe<Array<Problems_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Problems_Order_By>>;
  where?: InputMaybe<Problems_Bool_Exp>;
};


export type Subscription_RootProblems_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Problems_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Problems_Order_By>>;
  where?: InputMaybe<Problems_Bool_Exp>;
};


export type Subscription_RootProblems_By_PkArgs = {
  id: Scalars['uuid']['input'];
};


export type Subscription_RootProblems_StreamArgs = {
  batch_size: Scalars['Int']['input'];
  cursor: Array<InputMaybe<Problems_Stream_Cursor_Input>>;
  where?: InputMaybe<Problems_Bool_Exp>;
};


export type Subscription_RootSubmissionsArgs = {
  distinct_on?: InputMaybe<Array<Submissions_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Submissions_Order_By>>;
  where?: InputMaybe<Submissions_Bool_Exp>;
};


export type Subscription_RootSubmissions_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Submissions_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Submissions_Order_By>>;
  where?: InputMaybe<Submissions_Bool_Exp>;
};


export type Subscription_RootSubmissions_By_PkArgs = {
  id: Scalars['Int']['input'];
};


export type Subscription_RootSubmissions_StreamArgs = {
  batch_size: Scalars['Int']['input'];
  cursor: Array<InputMaybe<Submissions_Stream_Cursor_Input>>;
  where?: InputMaybe<Submissions_Bool_Exp>;
};


export type Subscription_RootTest_CasesArgs = {
  distinct_on?: InputMaybe<Array<Test_Cases_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Test_Cases_Order_By>>;
  where?: InputMaybe<Test_Cases_Bool_Exp>;
};


export type Subscription_RootTest_Cases_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Test_Cases_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Test_Cases_Order_By>>;
  where?: InputMaybe<Test_Cases_Bool_Exp>;
};


export type Subscription_RootTest_Cases_By_PkArgs = {
  id: Scalars['uuid']['input'];
};


export type Subscription_RootTest_Cases_StreamArgs = {
  batch_size: Scalars['Int']['input'];
  cursor: Array<InputMaybe<Test_Cases_Stream_Cursor_Input>>;
  where?: InputMaybe<Test_Cases_Bool_Exp>;
};


export type Subscription_RootUser_SubmissionsArgs = {
  distinct_on?: InputMaybe<Array<User_Submissions_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<User_Submissions_Order_By>>;
  where?: InputMaybe<User_Submissions_Bool_Exp>;
};


export type Subscription_RootUser_Submissions_AggregateArgs = {
  distinct_on?: InputMaybe<Array<User_Submissions_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<User_Submissions_Order_By>>;
  where?: InputMaybe<User_Submissions_Bool_Exp>;
};


export type Subscription_RootUser_Submissions_By_PkArgs = {
  id: Scalars['uuid']['input'];
};


export type Subscription_RootUser_Submissions_StreamArgs = {
  batch_size: Scalars['Int']['input'];
  cursor: Array<InputMaybe<User_Submissions_Stream_Cursor_Input>>;
  where?: InputMaybe<User_Submissions_Bool_Exp>;
};


export type Subscription_RootUsersArgs = {
  distinct_on?: InputMaybe<Array<Users_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Users_Order_By>>;
  where?: InputMaybe<Users_Bool_Exp>;
};


export type Subscription_RootUsers_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Users_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Users_Order_By>>;
  where?: InputMaybe<Users_Bool_Exp>;
};


export type Subscription_RootUsers_By_PkArgs = {
  id: Scalars['String']['input'];
};


export type Subscription_RootUsers_StreamArgs = {
  batch_size: Scalars['Int']['input'];
  cursor: Array<InputMaybe<Users_Stream_Cursor_Input>>;
  where?: InputMaybe<Users_Bool_Exp>;
};

/** columns and relationships of "test_cases" */
export type Test_Cases = {
  __typename?: 'test_cases';
  expected_output: Scalars['String']['output'];
  id: Scalars['uuid']['output'];
  input: Scalars['String']['output'];
  is_sample: Scalars['Boolean']['output'];
  /** An object relationship */
  problem: Problems;
  problem_id: Scalars['uuid']['output'];
};

/** aggregated selection of "test_cases" */
export type Test_Cases_Aggregate = {
  __typename?: 'test_cases_aggregate';
  aggregate?: Maybe<Test_Cases_Aggregate_Fields>;
  nodes: Array<Test_Cases>;
};

export type Test_Cases_Aggregate_Bool_Exp = {
  bool_and?: InputMaybe<Test_Cases_Aggregate_Bool_Exp_Bool_And>;
  bool_or?: InputMaybe<Test_Cases_Aggregate_Bool_Exp_Bool_Or>;
  count?: InputMaybe<Test_Cases_Aggregate_Bool_Exp_Count>;
};

export type Test_Cases_Aggregate_Bool_Exp_Bool_And = {
  arguments: Test_Cases_Select_Column_Test_Cases_Aggregate_Bool_Exp_Bool_And_Arguments_Columns;
  distinct?: InputMaybe<Scalars['Boolean']['input']>;
  filter?: InputMaybe<Test_Cases_Bool_Exp>;
  predicate: Boolean_Comparison_Exp;
};

export type Test_Cases_Aggregate_Bool_Exp_Bool_Or = {
  arguments: Test_Cases_Select_Column_Test_Cases_Aggregate_Bool_Exp_Bool_Or_Arguments_Columns;
  distinct?: InputMaybe<Scalars['Boolean']['input']>;
  filter?: InputMaybe<Test_Cases_Bool_Exp>;
  predicate: Boolean_Comparison_Exp;
};

export type Test_Cases_Aggregate_Bool_Exp_Count = {
  arguments?: InputMaybe<Array<Test_Cases_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']['input']>;
  filter?: InputMaybe<Test_Cases_Bool_Exp>;
  predicate: Int_Comparison_Exp;
};

/** aggregate fields of "test_cases" */
export type Test_Cases_Aggregate_Fields = {
  __typename?: 'test_cases_aggregate_fields';
  count: Scalars['Int']['output'];
  max?: Maybe<Test_Cases_Max_Fields>;
  min?: Maybe<Test_Cases_Min_Fields>;
};


/** aggregate fields of "test_cases" */
export type Test_Cases_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<Array<Test_Cases_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']['input']>;
};

/** order by aggregate values of table "test_cases" */
export type Test_Cases_Aggregate_Order_By = {
  count?: InputMaybe<Order_By>;
  max?: InputMaybe<Test_Cases_Max_Order_By>;
  min?: InputMaybe<Test_Cases_Min_Order_By>;
};

/** input type for inserting array relation for remote table "test_cases" */
export type Test_Cases_Arr_Rel_Insert_Input = {
  data: Array<Test_Cases_Insert_Input>;
  /** upsert condition */
  on_conflict?: InputMaybe<Test_Cases_On_Conflict>;
};

/** Boolean expression to filter rows from the table "test_cases". All fields are combined with a logical 'AND'. */
export type Test_Cases_Bool_Exp = {
  _and?: InputMaybe<Array<Test_Cases_Bool_Exp>>;
  _not?: InputMaybe<Test_Cases_Bool_Exp>;
  _or?: InputMaybe<Array<Test_Cases_Bool_Exp>>;
  expected_output?: InputMaybe<String_Comparison_Exp>;
  id?: InputMaybe<Uuid_Comparison_Exp>;
  input?: InputMaybe<String_Comparison_Exp>;
  is_sample?: InputMaybe<Boolean_Comparison_Exp>;
  problem?: InputMaybe<Problems_Bool_Exp>;
  problem_id?: InputMaybe<Uuid_Comparison_Exp>;
};

/** unique or primary key constraints on table "test_cases" */
export enum Test_Cases_Constraint {
  /** unique or primary key constraint on columns "id" */
  TestCasesPkey = 'test_cases_pkey'
}

/** input type for inserting data into table "test_cases" */
export type Test_Cases_Insert_Input = {
  expected_output?: InputMaybe<Scalars['String']['input']>;
  id?: InputMaybe<Scalars['uuid']['input']>;
  input?: InputMaybe<Scalars['String']['input']>;
  is_sample?: InputMaybe<Scalars['Boolean']['input']>;
  problem?: InputMaybe<Problems_Obj_Rel_Insert_Input>;
  problem_id?: InputMaybe<Scalars['uuid']['input']>;
};

/** aggregate max on columns */
export type Test_Cases_Max_Fields = {
  __typename?: 'test_cases_max_fields';
  expected_output?: Maybe<Scalars['String']['output']>;
  id?: Maybe<Scalars['uuid']['output']>;
  input?: Maybe<Scalars['String']['output']>;
  problem_id?: Maybe<Scalars['uuid']['output']>;
};

/** order by max() on columns of table "test_cases" */
export type Test_Cases_Max_Order_By = {
  expected_output?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  input?: InputMaybe<Order_By>;
  problem_id?: InputMaybe<Order_By>;
};

/** aggregate min on columns */
export type Test_Cases_Min_Fields = {
  __typename?: 'test_cases_min_fields';
  expected_output?: Maybe<Scalars['String']['output']>;
  id?: Maybe<Scalars['uuid']['output']>;
  input?: Maybe<Scalars['String']['output']>;
  problem_id?: Maybe<Scalars['uuid']['output']>;
};

/** order by min() on columns of table "test_cases" */
export type Test_Cases_Min_Order_By = {
  expected_output?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  input?: InputMaybe<Order_By>;
  problem_id?: InputMaybe<Order_By>;
};

/** response of any mutation on the table "test_cases" */
export type Test_Cases_Mutation_Response = {
  __typename?: 'test_cases_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int']['output'];
  /** data from the rows affected by the mutation */
  returning: Array<Test_Cases>;
};

/** on_conflict condition type for table "test_cases" */
export type Test_Cases_On_Conflict = {
  constraint: Test_Cases_Constraint;
  update_columns?: Array<Test_Cases_Update_Column>;
  where?: InputMaybe<Test_Cases_Bool_Exp>;
};

/** Ordering options when selecting data from "test_cases". */
export type Test_Cases_Order_By = {
  expected_output?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  input?: InputMaybe<Order_By>;
  is_sample?: InputMaybe<Order_By>;
  problem?: InputMaybe<Problems_Order_By>;
  problem_id?: InputMaybe<Order_By>;
};

/** primary key columns input for table: test_cases */
export type Test_Cases_Pk_Columns_Input = {
  id: Scalars['uuid']['input'];
};

/** select columns of table "test_cases" */
export enum Test_Cases_Select_Column {
  /** column name */
  ExpectedOutput = 'expected_output',
  /** column name */
  Id = 'id',
  /** column name */
  Input = 'input',
  /** column name */
  IsSample = 'is_sample',
  /** column name */
  ProblemId = 'problem_id'
}

/** select "test_cases_aggregate_bool_exp_bool_and_arguments_columns" columns of table "test_cases" */
export enum Test_Cases_Select_Column_Test_Cases_Aggregate_Bool_Exp_Bool_And_Arguments_Columns {
  /** column name */
  IsSample = 'is_sample'
}

/** select "test_cases_aggregate_bool_exp_bool_or_arguments_columns" columns of table "test_cases" */
export enum Test_Cases_Select_Column_Test_Cases_Aggregate_Bool_Exp_Bool_Or_Arguments_Columns {
  /** column name */
  IsSample = 'is_sample'
}

/** input type for updating data in table "test_cases" */
export type Test_Cases_Set_Input = {
  expected_output?: InputMaybe<Scalars['String']['input']>;
  id?: InputMaybe<Scalars['uuid']['input']>;
  input?: InputMaybe<Scalars['String']['input']>;
  is_sample?: InputMaybe<Scalars['Boolean']['input']>;
  problem_id?: InputMaybe<Scalars['uuid']['input']>;
};

/** Streaming cursor of the table "test_cases" */
export type Test_Cases_Stream_Cursor_Input = {
  /** Stream column input with initial value */
  initial_value: Test_Cases_Stream_Cursor_Value_Input;
  /** cursor ordering */
  ordering?: InputMaybe<Cursor_Ordering>;
};

/** Initial value of the column from where the streaming should start */
export type Test_Cases_Stream_Cursor_Value_Input = {
  expected_output?: InputMaybe<Scalars['String']['input']>;
  id?: InputMaybe<Scalars['uuid']['input']>;
  input?: InputMaybe<Scalars['String']['input']>;
  is_sample?: InputMaybe<Scalars['Boolean']['input']>;
  problem_id?: InputMaybe<Scalars['uuid']['input']>;
};

/** update columns of table "test_cases" */
export enum Test_Cases_Update_Column {
  /** column name */
  ExpectedOutput = 'expected_output',
  /** column name */
  Id = 'id',
  /** column name */
  Input = 'input',
  /** column name */
  IsSample = 'is_sample',
  /** column name */
  ProblemId = 'problem_id'
}

export type Test_Cases_Updates = {
  /** sets the columns of the filtered rows to the given values */
  _set?: InputMaybe<Test_Cases_Set_Input>;
  /** filter the rows which have to be updated */
  where: Test_Cases_Bool_Exp;
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

/** Boolean expression to compare columns of type "timestamptz". All fields are combined with logical 'AND'. */
export type Timestamptz_Comparison_Exp = {
  _eq?: InputMaybe<Scalars['timestamptz']['input']>;
  _gt?: InputMaybe<Scalars['timestamptz']['input']>;
  _gte?: InputMaybe<Scalars['timestamptz']['input']>;
  _in?: InputMaybe<Array<Scalars['timestamptz']['input']>>;
  _is_null?: InputMaybe<Scalars['Boolean']['input']>;
  _lt?: InputMaybe<Scalars['timestamptz']['input']>;
  _lte?: InputMaybe<Scalars['timestamptz']['input']>;
  _neq?: InputMaybe<Scalars['timestamptz']['input']>;
  _nin?: InputMaybe<Array<Scalars['timestamptz']['input']>>;
};

/** columns and relationships of "user_submissions" */
export type User_Submissions = {
  __typename?: 'user_submissions';
  id: Scalars['uuid']['output'];
  /** An object relationship */
  problem: Problems;
  problem_id: Scalars['uuid']['output'];
  raw_submission?: Maybe<Scalars['String']['output']>;
  /** An object relationship */
  submission: Submissions;
  submission_id: Scalars['Int']['output'];
  submitted_at: Scalars['timestamptz']['output'];
  /** An object relationship */
  user: Users;
  user_id: Scalars['String']['output'];
};

/** aggregated selection of "user_submissions" */
export type User_Submissions_Aggregate = {
  __typename?: 'user_submissions_aggregate';
  aggregate?: Maybe<User_Submissions_Aggregate_Fields>;
  nodes: Array<User_Submissions>;
};

export type User_Submissions_Aggregate_Bool_Exp = {
  count?: InputMaybe<User_Submissions_Aggregate_Bool_Exp_Count>;
};

export type User_Submissions_Aggregate_Bool_Exp_Count = {
  arguments?: InputMaybe<Array<User_Submissions_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']['input']>;
  filter?: InputMaybe<User_Submissions_Bool_Exp>;
  predicate: Int_Comparison_Exp;
};

/** aggregate fields of "user_submissions" */
export type User_Submissions_Aggregate_Fields = {
  __typename?: 'user_submissions_aggregate_fields';
  avg?: Maybe<User_Submissions_Avg_Fields>;
  count: Scalars['Int']['output'];
  max?: Maybe<User_Submissions_Max_Fields>;
  min?: Maybe<User_Submissions_Min_Fields>;
  stddev?: Maybe<User_Submissions_Stddev_Fields>;
  stddev_pop?: Maybe<User_Submissions_Stddev_Pop_Fields>;
  stddev_samp?: Maybe<User_Submissions_Stddev_Samp_Fields>;
  sum?: Maybe<User_Submissions_Sum_Fields>;
  var_pop?: Maybe<User_Submissions_Var_Pop_Fields>;
  var_samp?: Maybe<User_Submissions_Var_Samp_Fields>;
  variance?: Maybe<User_Submissions_Variance_Fields>;
};


/** aggregate fields of "user_submissions" */
export type User_Submissions_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<Array<User_Submissions_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']['input']>;
};

/** order by aggregate values of table "user_submissions" */
export type User_Submissions_Aggregate_Order_By = {
  avg?: InputMaybe<User_Submissions_Avg_Order_By>;
  count?: InputMaybe<Order_By>;
  max?: InputMaybe<User_Submissions_Max_Order_By>;
  min?: InputMaybe<User_Submissions_Min_Order_By>;
  stddev?: InputMaybe<User_Submissions_Stddev_Order_By>;
  stddev_pop?: InputMaybe<User_Submissions_Stddev_Pop_Order_By>;
  stddev_samp?: InputMaybe<User_Submissions_Stddev_Samp_Order_By>;
  sum?: InputMaybe<User_Submissions_Sum_Order_By>;
  var_pop?: InputMaybe<User_Submissions_Var_Pop_Order_By>;
  var_samp?: InputMaybe<User_Submissions_Var_Samp_Order_By>;
  variance?: InputMaybe<User_Submissions_Variance_Order_By>;
};

/** input type for inserting array relation for remote table "user_submissions" */
export type User_Submissions_Arr_Rel_Insert_Input = {
  data: Array<User_Submissions_Insert_Input>;
  /** upsert condition */
  on_conflict?: InputMaybe<User_Submissions_On_Conflict>;
};

/** aggregate avg on columns */
export type User_Submissions_Avg_Fields = {
  __typename?: 'user_submissions_avg_fields';
  submission_id?: Maybe<Scalars['Float']['output']>;
};

/** order by avg() on columns of table "user_submissions" */
export type User_Submissions_Avg_Order_By = {
  submission_id?: InputMaybe<Order_By>;
};

/** Boolean expression to filter rows from the table "user_submissions". All fields are combined with a logical 'AND'. */
export type User_Submissions_Bool_Exp = {
  _and?: InputMaybe<Array<User_Submissions_Bool_Exp>>;
  _not?: InputMaybe<User_Submissions_Bool_Exp>;
  _or?: InputMaybe<Array<User_Submissions_Bool_Exp>>;
  id?: InputMaybe<Uuid_Comparison_Exp>;
  problem?: InputMaybe<Problems_Bool_Exp>;
  problem_id?: InputMaybe<Uuid_Comparison_Exp>;
  raw_submission?: InputMaybe<String_Comparison_Exp>;
  submission?: InputMaybe<Submissions_Bool_Exp>;
  submission_id?: InputMaybe<Int_Comparison_Exp>;
  submitted_at?: InputMaybe<Timestamptz_Comparison_Exp>;
  user?: InputMaybe<Users_Bool_Exp>;
  user_id?: InputMaybe<String_Comparison_Exp>;
};

/** unique or primary key constraints on table "user_submissions" */
export enum User_Submissions_Constraint {
  /** unique or primary key constraint on columns "id" */
  UserSubmissionsPkey = 'user_submissions_pkey'
}

/** input type for incrementing numeric columns in table "user_submissions" */
export type User_Submissions_Inc_Input = {
  submission_id?: InputMaybe<Scalars['Int']['input']>;
};

/** input type for inserting data into table "user_submissions" */
export type User_Submissions_Insert_Input = {
  id?: InputMaybe<Scalars['uuid']['input']>;
  problem?: InputMaybe<Problems_Obj_Rel_Insert_Input>;
  problem_id?: InputMaybe<Scalars['uuid']['input']>;
  raw_submission?: InputMaybe<Scalars['String']['input']>;
  submission?: InputMaybe<Submissions_Obj_Rel_Insert_Input>;
  submission_id?: InputMaybe<Scalars['Int']['input']>;
  submitted_at?: InputMaybe<Scalars['timestamptz']['input']>;
  user?: InputMaybe<Users_Obj_Rel_Insert_Input>;
  user_id?: InputMaybe<Scalars['String']['input']>;
};

/** aggregate max on columns */
export type User_Submissions_Max_Fields = {
  __typename?: 'user_submissions_max_fields';
  id?: Maybe<Scalars['uuid']['output']>;
  problem_id?: Maybe<Scalars['uuid']['output']>;
  raw_submission?: Maybe<Scalars['String']['output']>;
  submission_id?: Maybe<Scalars['Int']['output']>;
  submitted_at?: Maybe<Scalars['timestamptz']['output']>;
  user_id?: Maybe<Scalars['String']['output']>;
};

/** order by max() on columns of table "user_submissions" */
export type User_Submissions_Max_Order_By = {
  id?: InputMaybe<Order_By>;
  problem_id?: InputMaybe<Order_By>;
  raw_submission?: InputMaybe<Order_By>;
  submission_id?: InputMaybe<Order_By>;
  submitted_at?: InputMaybe<Order_By>;
  user_id?: InputMaybe<Order_By>;
};

/** aggregate min on columns */
export type User_Submissions_Min_Fields = {
  __typename?: 'user_submissions_min_fields';
  id?: Maybe<Scalars['uuid']['output']>;
  problem_id?: Maybe<Scalars['uuid']['output']>;
  raw_submission?: Maybe<Scalars['String']['output']>;
  submission_id?: Maybe<Scalars['Int']['output']>;
  submitted_at?: Maybe<Scalars['timestamptz']['output']>;
  user_id?: Maybe<Scalars['String']['output']>;
};

/** order by min() on columns of table "user_submissions" */
export type User_Submissions_Min_Order_By = {
  id?: InputMaybe<Order_By>;
  problem_id?: InputMaybe<Order_By>;
  raw_submission?: InputMaybe<Order_By>;
  submission_id?: InputMaybe<Order_By>;
  submitted_at?: InputMaybe<Order_By>;
  user_id?: InputMaybe<Order_By>;
};

/** response of any mutation on the table "user_submissions" */
export type User_Submissions_Mutation_Response = {
  __typename?: 'user_submissions_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int']['output'];
  /** data from the rows affected by the mutation */
  returning: Array<User_Submissions>;
};

/** on_conflict condition type for table "user_submissions" */
export type User_Submissions_On_Conflict = {
  constraint: User_Submissions_Constraint;
  update_columns?: Array<User_Submissions_Update_Column>;
  where?: InputMaybe<User_Submissions_Bool_Exp>;
};

/** Ordering options when selecting data from "user_submissions". */
export type User_Submissions_Order_By = {
  id?: InputMaybe<Order_By>;
  problem?: InputMaybe<Problems_Order_By>;
  problem_id?: InputMaybe<Order_By>;
  raw_submission?: InputMaybe<Order_By>;
  submission?: InputMaybe<Submissions_Order_By>;
  submission_id?: InputMaybe<Order_By>;
  submitted_at?: InputMaybe<Order_By>;
  user?: InputMaybe<Users_Order_By>;
  user_id?: InputMaybe<Order_By>;
};

/** primary key columns input for table: user_submissions */
export type User_Submissions_Pk_Columns_Input = {
  id: Scalars['uuid']['input'];
};

/** select columns of table "user_submissions" */
export enum User_Submissions_Select_Column {
  /** column name */
  Id = 'id',
  /** column name */
  ProblemId = 'problem_id',
  /** column name */
  RawSubmission = 'raw_submission',
  /** column name */
  SubmissionId = 'submission_id',
  /** column name */
  SubmittedAt = 'submitted_at',
  /** column name */
  UserId = 'user_id'
}

/** input type for updating data in table "user_submissions" */
export type User_Submissions_Set_Input = {
  id?: InputMaybe<Scalars['uuid']['input']>;
  problem_id?: InputMaybe<Scalars['uuid']['input']>;
  raw_submission?: InputMaybe<Scalars['String']['input']>;
  submission_id?: InputMaybe<Scalars['Int']['input']>;
  submitted_at?: InputMaybe<Scalars['timestamptz']['input']>;
  user_id?: InputMaybe<Scalars['String']['input']>;
};

/** aggregate stddev on columns */
export type User_Submissions_Stddev_Fields = {
  __typename?: 'user_submissions_stddev_fields';
  submission_id?: Maybe<Scalars['Float']['output']>;
};

/** order by stddev() on columns of table "user_submissions" */
export type User_Submissions_Stddev_Order_By = {
  submission_id?: InputMaybe<Order_By>;
};

/** aggregate stddev_pop on columns */
export type User_Submissions_Stddev_Pop_Fields = {
  __typename?: 'user_submissions_stddev_pop_fields';
  submission_id?: Maybe<Scalars['Float']['output']>;
};

/** order by stddev_pop() on columns of table "user_submissions" */
export type User_Submissions_Stddev_Pop_Order_By = {
  submission_id?: InputMaybe<Order_By>;
};

/** aggregate stddev_samp on columns */
export type User_Submissions_Stddev_Samp_Fields = {
  __typename?: 'user_submissions_stddev_samp_fields';
  submission_id?: Maybe<Scalars['Float']['output']>;
};

/** order by stddev_samp() on columns of table "user_submissions" */
export type User_Submissions_Stddev_Samp_Order_By = {
  submission_id?: InputMaybe<Order_By>;
};

/** Streaming cursor of the table "user_submissions" */
export type User_Submissions_Stream_Cursor_Input = {
  /** Stream column input with initial value */
  initial_value: User_Submissions_Stream_Cursor_Value_Input;
  /** cursor ordering */
  ordering?: InputMaybe<Cursor_Ordering>;
};

/** Initial value of the column from where the streaming should start */
export type User_Submissions_Stream_Cursor_Value_Input = {
  id?: InputMaybe<Scalars['uuid']['input']>;
  problem_id?: InputMaybe<Scalars['uuid']['input']>;
  raw_submission?: InputMaybe<Scalars['String']['input']>;
  submission_id?: InputMaybe<Scalars['Int']['input']>;
  submitted_at?: InputMaybe<Scalars['timestamptz']['input']>;
  user_id?: InputMaybe<Scalars['String']['input']>;
};

/** aggregate sum on columns */
export type User_Submissions_Sum_Fields = {
  __typename?: 'user_submissions_sum_fields';
  submission_id?: Maybe<Scalars['Int']['output']>;
};

/** order by sum() on columns of table "user_submissions" */
export type User_Submissions_Sum_Order_By = {
  submission_id?: InputMaybe<Order_By>;
};

/** update columns of table "user_submissions" */
export enum User_Submissions_Update_Column {
  /** column name */
  Id = 'id',
  /** column name */
  ProblemId = 'problem_id',
  /** column name */
  RawSubmission = 'raw_submission',
  /** column name */
  SubmissionId = 'submission_id',
  /** column name */
  SubmittedAt = 'submitted_at',
  /** column name */
  UserId = 'user_id'
}

export type User_Submissions_Updates = {
  /** increments the numeric columns with given value of the filtered values */
  _inc?: InputMaybe<User_Submissions_Inc_Input>;
  /** sets the columns of the filtered rows to the given values */
  _set?: InputMaybe<User_Submissions_Set_Input>;
  /** filter the rows which have to be updated */
  where: User_Submissions_Bool_Exp;
};

/** aggregate var_pop on columns */
export type User_Submissions_Var_Pop_Fields = {
  __typename?: 'user_submissions_var_pop_fields';
  submission_id?: Maybe<Scalars['Float']['output']>;
};

/** order by var_pop() on columns of table "user_submissions" */
export type User_Submissions_Var_Pop_Order_By = {
  submission_id?: InputMaybe<Order_By>;
};

/** aggregate var_samp on columns */
export type User_Submissions_Var_Samp_Fields = {
  __typename?: 'user_submissions_var_samp_fields';
  submission_id?: Maybe<Scalars['Float']['output']>;
};

/** order by var_samp() on columns of table "user_submissions" */
export type User_Submissions_Var_Samp_Order_By = {
  submission_id?: InputMaybe<Order_By>;
};

/** aggregate variance on columns */
export type User_Submissions_Variance_Fields = {
  __typename?: 'user_submissions_variance_fields';
  submission_id?: Maybe<Scalars['Float']['output']>;
};

/** order by variance() on columns of table "user_submissions" */
export type User_Submissions_Variance_Order_By = {
  submission_id?: InputMaybe<Order_By>;
};

/** columns and relationships of "users" */
export type Users = {
  __typename?: 'users';
  created_at: Scalars['timestamptz']['output'];
  display_name: Scalars['String']['output'];
  email: Scalars['String']['output'];
  id: Scalars['String']['output'];
  provider?: Maybe<Scalars['String']['output']>;
  role: Scalars['String']['output'];
  updated_at: Scalars['timestamptz']['output'];
  /** An array relationship */
  user_submissions: Array<User_Submissions>;
  /** An aggregate relationship */
  user_submissions_aggregate: User_Submissions_Aggregate;
};


/** columns and relationships of "users" */
export type UsersUser_SubmissionsArgs = {
  distinct_on?: InputMaybe<Array<User_Submissions_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<User_Submissions_Order_By>>;
  where?: InputMaybe<User_Submissions_Bool_Exp>;
};


/** columns and relationships of "users" */
export type UsersUser_Submissions_AggregateArgs = {
  distinct_on?: InputMaybe<Array<User_Submissions_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<User_Submissions_Order_By>>;
  where?: InputMaybe<User_Submissions_Bool_Exp>;
};

/** aggregated selection of "users" */
export type Users_Aggregate = {
  __typename?: 'users_aggregate';
  aggregate?: Maybe<Users_Aggregate_Fields>;
  nodes: Array<Users>;
};

/** aggregate fields of "users" */
export type Users_Aggregate_Fields = {
  __typename?: 'users_aggregate_fields';
  count: Scalars['Int']['output'];
  max?: Maybe<Users_Max_Fields>;
  min?: Maybe<Users_Min_Fields>;
};


/** aggregate fields of "users" */
export type Users_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<Array<Users_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']['input']>;
};

/** Boolean expression to filter rows from the table "users". All fields are combined with a logical 'AND'. */
export type Users_Bool_Exp = {
  _and?: InputMaybe<Array<Users_Bool_Exp>>;
  _not?: InputMaybe<Users_Bool_Exp>;
  _or?: InputMaybe<Array<Users_Bool_Exp>>;
  created_at?: InputMaybe<Timestamptz_Comparison_Exp>;
  display_name?: InputMaybe<String_Comparison_Exp>;
  email?: InputMaybe<String_Comparison_Exp>;
  id?: InputMaybe<String_Comparison_Exp>;
  provider?: InputMaybe<String_Comparison_Exp>;
  role?: InputMaybe<String_Comparison_Exp>;
  updated_at?: InputMaybe<Timestamptz_Comparison_Exp>;
  user_submissions?: InputMaybe<User_Submissions_Bool_Exp>;
  user_submissions_aggregate?: InputMaybe<User_Submissions_Aggregate_Bool_Exp>;
};

/** unique or primary key constraints on table "users" */
export enum Users_Constraint {
  /** unique or primary key constraint on columns "email" */
  UsersEmailKey = 'users_email_key',
  /** unique or primary key constraint on columns "id" */
  UsersPkey = 'users_pkey'
}

/** input type for inserting data into table "users" */
export type Users_Insert_Input = {
  created_at?: InputMaybe<Scalars['timestamptz']['input']>;
  display_name?: InputMaybe<Scalars['String']['input']>;
  email?: InputMaybe<Scalars['String']['input']>;
  id?: InputMaybe<Scalars['String']['input']>;
  provider?: InputMaybe<Scalars['String']['input']>;
  role?: InputMaybe<Scalars['String']['input']>;
  updated_at?: InputMaybe<Scalars['timestamptz']['input']>;
  user_submissions?: InputMaybe<User_Submissions_Arr_Rel_Insert_Input>;
};

/** aggregate max on columns */
export type Users_Max_Fields = {
  __typename?: 'users_max_fields';
  created_at?: Maybe<Scalars['timestamptz']['output']>;
  display_name?: Maybe<Scalars['String']['output']>;
  email?: Maybe<Scalars['String']['output']>;
  id?: Maybe<Scalars['String']['output']>;
  provider?: Maybe<Scalars['String']['output']>;
  role?: Maybe<Scalars['String']['output']>;
  updated_at?: Maybe<Scalars['timestamptz']['output']>;
};

/** aggregate min on columns */
export type Users_Min_Fields = {
  __typename?: 'users_min_fields';
  created_at?: Maybe<Scalars['timestamptz']['output']>;
  display_name?: Maybe<Scalars['String']['output']>;
  email?: Maybe<Scalars['String']['output']>;
  id?: Maybe<Scalars['String']['output']>;
  provider?: Maybe<Scalars['String']['output']>;
  role?: Maybe<Scalars['String']['output']>;
  updated_at?: Maybe<Scalars['timestamptz']['output']>;
};

/** response of any mutation on the table "users" */
export type Users_Mutation_Response = {
  __typename?: 'users_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int']['output'];
  /** data from the rows affected by the mutation */
  returning: Array<Users>;
};

/** input type for inserting object relation for remote table "users" */
export type Users_Obj_Rel_Insert_Input = {
  data: Users_Insert_Input;
  /** upsert condition */
  on_conflict?: InputMaybe<Users_On_Conflict>;
};

/** on_conflict condition type for table "users" */
export type Users_On_Conflict = {
  constraint: Users_Constraint;
  update_columns?: Array<Users_Update_Column>;
  where?: InputMaybe<Users_Bool_Exp>;
};

/** Ordering options when selecting data from "users". */
export type Users_Order_By = {
  created_at?: InputMaybe<Order_By>;
  display_name?: InputMaybe<Order_By>;
  email?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  provider?: InputMaybe<Order_By>;
  role?: InputMaybe<Order_By>;
  updated_at?: InputMaybe<Order_By>;
  user_submissions_aggregate?: InputMaybe<User_Submissions_Aggregate_Order_By>;
};

/** primary key columns input for table: users */
export type Users_Pk_Columns_Input = {
  id: Scalars['String']['input'];
};

/** select columns of table "users" */
export enum Users_Select_Column {
  /** column name */
  CreatedAt = 'created_at',
  /** column name */
  DisplayName = 'display_name',
  /** column name */
  Email = 'email',
  /** column name */
  Id = 'id',
  /** column name */
  Provider = 'provider',
  /** column name */
  Role = 'role',
  /** column name */
  UpdatedAt = 'updated_at'
}

/** input type for updating data in table "users" */
export type Users_Set_Input = {
  created_at?: InputMaybe<Scalars['timestamptz']['input']>;
  display_name?: InputMaybe<Scalars['String']['input']>;
  email?: InputMaybe<Scalars['String']['input']>;
  id?: InputMaybe<Scalars['String']['input']>;
  provider?: InputMaybe<Scalars['String']['input']>;
  role?: InputMaybe<Scalars['String']['input']>;
  updated_at?: InputMaybe<Scalars['timestamptz']['input']>;
};

/** Streaming cursor of the table "users" */
export type Users_Stream_Cursor_Input = {
  /** Stream column input with initial value */
  initial_value: Users_Stream_Cursor_Value_Input;
  /** cursor ordering */
  ordering?: InputMaybe<Cursor_Ordering>;
};

/** Initial value of the column from where the streaming should start */
export type Users_Stream_Cursor_Value_Input = {
  created_at?: InputMaybe<Scalars['timestamptz']['input']>;
  display_name?: InputMaybe<Scalars['String']['input']>;
  email?: InputMaybe<Scalars['String']['input']>;
  id?: InputMaybe<Scalars['String']['input']>;
  provider?: InputMaybe<Scalars['String']['input']>;
  role?: InputMaybe<Scalars['String']['input']>;
  updated_at?: InputMaybe<Scalars['timestamptz']['input']>;
};

/** update columns of table "users" */
export enum Users_Update_Column {
  /** column name */
  CreatedAt = 'created_at',
  /** column name */
  DisplayName = 'display_name',
  /** column name */
  Email = 'email',
  /** column name */
  Id = 'id',
  /** column name */
  Provider = 'provider',
  /** column name */
  Role = 'role',
  /** column name */
  UpdatedAt = 'updated_at'
}

export type Users_Updates = {
  /** sets the columns of the filtered rows to the given values */
  _set?: InputMaybe<Users_Set_Input>;
  /** filter the rows which have to be updated */
  where: Users_Bool_Exp;
};

/** Boolean expression to compare columns of type "uuid". All fields are combined with logical 'AND'. */
export type Uuid_Comparison_Exp = {
  _eq?: InputMaybe<Scalars['uuid']['input']>;
  _gt?: InputMaybe<Scalars['uuid']['input']>;
  _gte?: InputMaybe<Scalars['uuid']['input']>;
  _in?: InputMaybe<Array<Scalars['uuid']['input']>>;
  _is_null?: InputMaybe<Scalars['Boolean']['input']>;
  _lt?: InputMaybe<Scalars['uuid']['input']>;
  _lte?: InputMaybe<Scalars['uuid']['input']>;
  _neq?: InputMaybe<Scalars['uuid']['input']>;
  _nin?: InputMaybe<Array<Scalars['uuid']['input']>>;
};

export type GetMeQueryVariables = Exact<{ [key: string]: never; }>;


export type GetMeQuery = { __typename?: 'query_root', me: { __typename?: 'Me', id: string, email: string, role: string, display_name: string } };

export type SignUpMutationVariables = Exact<{
  form: SignUpInput;
}>;


export type SignUpMutation = { __typename?: 'mutation_root', sign_up?: { __typename?: 'SignUpOutPut', code: string } | null };

export type SyncSocialAccountMutationVariables = Exact<{
  form: SyncSocialAccountInput;
}>;


export type SyncSocialAccountMutation = { __typename?: 'mutation_root', sync_social_account?: { __typename?: 'MessageResponse', message: string } | null };


export const GetMeDocument = gql`
    query GetMe {
  me {
    id
    email
    role
    display_name
  }
}
    `;

/**
 * __useGetMeQuery__
 *
 * To run a query within a React component, call `useGetMeQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetMeQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetMeQuery({
 *   variables: {
 *   },
 * });
 */
export function useGetMeQuery(baseOptions?: Apollo.QueryHookOptions<GetMeQuery, GetMeQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<GetMeQuery, GetMeQueryVariables>(GetMeDocument, options);
      }
export function useGetMeLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetMeQuery, GetMeQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<GetMeQuery, GetMeQueryVariables>(GetMeDocument, options);
        }
export function useGetMeSuspenseQuery(baseOptions?: Apollo.SkipToken | Apollo.SuspenseQueryHookOptions<GetMeQuery, GetMeQueryVariables>) {
          const options = baseOptions === Apollo.skipToken ? baseOptions : {...defaultOptions, ...baseOptions}
          return Apollo.useSuspenseQuery<GetMeQuery, GetMeQueryVariables>(GetMeDocument, options);
        }
export type GetMeQueryHookResult = ReturnType<typeof useGetMeQuery>;
export type GetMeLazyQueryHookResult = ReturnType<typeof useGetMeLazyQuery>;
export type GetMeSuspenseQueryHookResult = ReturnType<typeof useGetMeSuspenseQuery>;
export type GetMeQueryResult = Apollo.QueryResult<GetMeQuery, GetMeQueryVariables>;
export const SignUpDocument = gql`
    mutation SignUp($form: SignUpInput!) {
  sign_up(form: $form) {
    code
  }
}
    `;
export type SignUpMutationFn = Apollo.MutationFunction<SignUpMutation, SignUpMutationVariables>;

/**
 * __useSignUpMutation__
 *
 * To run a mutation, you first call `useSignUpMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useSignUpMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [signUpMutation, { data, loading, error }] = useSignUpMutation({
 *   variables: {
 *      form: // value for 'form'
 *   },
 * });
 */
export function useSignUpMutation(baseOptions?: Apollo.MutationHookOptions<SignUpMutation, SignUpMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<SignUpMutation, SignUpMutationVariables>(SignUpDocument, options);
      }
export type SignUpMutationHookResult = ReturnType<typeof useSignUpMutation>;
export type SignUpMutationResult = Apollo.MutationResult<SignUpMutation>;
export type SignUpMutationOptions = Apollo.BaseMutationOptions<SignUpMutation, SignUpMutationVariables>;
export const SyncSocialAccountDocument = gql`
    mutation SyncSocialAccount($form: SyncSocialAccountInput!) {
  sync_social_account(form: $form) {
    message
  }
}
    `;
export type SyncSocialAccountMutationFn = Apollo.MutationFunction<SyncSocialAccountMutation, SyncSocialAccountMutationVariables>;

/**
 * __useSyncSocialAccountMutation__
 *
 * To run a mutation, you first call `useSyncSocialAccountMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useSyncSocialAccountMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [syncSocialAccountMutation, { data, loading, error }] = useSyncSocialAccountMutation({
 *   variables: {
 *      form: // value for 'form'
 *   },
 * });
 */
export function useSyncSocialAccountMutation(baseOptions?: Apollo.MutationHookOptions<SyncSocialAccountMutation, SyncSocialAccountMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<SyncSocialAccountMutation, SyncSocialAccountMutationVariables>(SyncSocialAccountDocument, options);
      }
export type SyncSocialAccountMutationHookResult = ReturnType<typeof useSyncSocialAccountMutation>;
export type SyncSocialAccountMutationResult = Apollo.MutationResult<SyncSocialAccountMutation>;
export type SyncSocialAccountMutationOptions = Apollo.BaseMutationOptions<SyncSocialAccountMutation, SyncSocialAccountMutationVariables>;