
/**
 * Client
**/

import * as runtime from './runtime/library.js';
import $Types = runtime.Types // general types
import $Public = runtime.Types.Public
import $Utils = runtime.Types.Utils
import $Extensions = runtime.Types.Extensions
import $Result = runtime.Types.Result

export type PrismaPromise<T> = $Public.PrismaPromise<T>


/**
 * Model User
 * 
 */
export type User = $Result.DefaultSelection<Prisma.$UserPayload>
/**
 * Model Subscription
 * 
 */
export type Subscription = $Result.DefaultSelection<Prisma.$SubscriptionPayload>
/**
 * Model Integrations
 * 
 */
export type Integrations = $Result.DefaultSelection<Prisma.$IntegrationsPayload>
/**
 * Model Automation
 * 
 */
export type Automation = $Result.DefaultSelection<Prisma.$AutomationPayload>
/**
 * Model Dms
 * 
 */
export type Dms = $Result.DefaultSelection<Prisma.$DmsPayload>
/**
 * Model Post
 * 
 */
export type Post = $Result.DefaultSelection<Prisma.$PostPayload>
/**
 * Model Listener
 * 
 */
export type Listener = $Result.DefaultSelection<Prisma.$ListenerPayload>
/**
 * Model Trigger
 * 
 */
export type Trigger = $Result.DefaultSelection<Prisma.$TriggerPayload>
/**
 * Model Keyword
 * 
 */
export type Keyword = $Result.DefaultSelection<Prisma.$KeywordPayload>

/**
 * Enums
 */
export namespace $Enums {
  export const SUBSCRIPTION_PLAN: {
  PRO: 'PRO',
  FREE: 'FREE'
};

export type SUBSCRIPTION_PLAN = (typeof SUBSCRIPTION_PLAN)[keyof typeof SUBSCRIPTION_PLAN]


export const INTEGRATIONS: {
  INSTAGRAM: 'INSTAGRAM'
};

export type INTEGRATIONS = (typeof INTEGRATIONS)[keyof typeof INTEGRATIONS]


export const MEDIATYPE: {
  IMAGE: 'IMAGE',
  VIDEO: 'VIDEO',
  CAROSEL_ALBUM: 'CAROSEL_ALBUM'
};

export type MEDIATYPE = (typeof MEDIATYPE)[keyof typeof MEDIATYPE]


export const LISTENERS: {
  SMARTAI: 'SMARTAI',
  MESSAGE: 'MESSAGE'
};

export type LISTENERS = (typeof LISTENERS)[keyof typeof LISTENERS]

}

export type SUBSCRIPTION_PLAN = $Enums.SUBSCRIPTION_PLAN

export const SUBSCRIPTION_PLAN: typeof $Enums.SUBSCRIPTION_PLAN

export type INTEGRATIONS = $Enums.INTEGRATIONS

export const INTEGRATIONS: typeof $Enums.INTEGRATIONS

export type MEDIATYPE = $Enums.MEDIATYPE

export const MEDIATYPE: typeof $Enums.MEDIATYPE

export type LISTENERS = $Enums.LISTENERS

export const LISTENERS: typeof $Enums.LISTENERS

/**
 * ##  Prisma Client ʲˢ
 *
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more Users
 * const users = await prisma.user.findMany()
 * ```
 *
 *
 * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
 */
export class PrismaClient<
  ClientOptions extends Prisma.PrismaClientOptions = Prisma.PrismaClientOptions,
  U = 'log' extends keyof ClientOptions ? ClientOptions['log'] extends Array<Prisma.LogLevel | Prisma.LogDefinition> ? Prisma.GetEvents<ClientOptions['log']> : never : never,
  ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
> {
  [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['other'] }

    /**
   * ##  Prisma Client ʲˢ
   *
   * Type-safe database client for TypeScript & Node.js
   * @example
   * ```
   * const prisma = new PrismaClient()
   * // Fetch zero or more Users
   * const users = await prisma.user.findMany()
   * ```
   *
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
   */

  constructor(optionsArg ?: Prisma.Subset<ClientOptions, Prisma.PrismaClientOptions>);
  $on<V extends U>(eventType: V, callback: (event: V extends 'query' ? Prisma.QueryEvent : Prisma.LogEvent) => void): PrismaClient;

  /**
   * Connect with the database
   */
  $connect(): $Utils.JsPromise<void>;

  /**
   * Disconnect from the database
   */
  $disconnect(): $Utils.JsPromise<void>;

  /**
   * Add a middleware
   * @deprecated since 4.16.0. For new code, prefer client extensions instead.
   * @see https://pris.ly/d/extensions
   */
  $use(cb: Prisma.Middleware): void

/**
   * Executes a prepared raw query and returns the number of affected rows.
   * @example
   * ```
   * const result = await prisma.$executeRaw`UPDATE User SET cool = ${true} WHERE email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Executes a raw query and returns the number of affected rows.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$executeRawUnsafe('UPDATE User SET cool = $1 WHERE email = $2 ;', true, 'user@email.com')
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Performs a prepared raw query and returns the `SELECT` data.
   * @example
   * ```
   * const result = await prisma.$queryRaw`SELECT * FROM User WHERE id = ${1} OR email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<T>;

  /**
   * Performs a raw query and returns the `SELECT` data.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$queryRawUnsafe('SELECT * FROM User WHERE id = $1 OR email = $2;', 1, 'user@email.com')
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<T>;


  /**
   * Allows the running of a sequence of read/write operations that are guaranteed to either succeed or fail as a whole.
   * @example
   * ```
   * const [george, bob, alice] = await prisma.$transaction([
   *   prisma.user.create({ data: { name: 'George' } }),
   *   prisma.user.create({ data: { name: 'Bob' } }),
   *   prisma.user.create({ data: { name: 'Alice' } }),
   * ])
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/concepts/components/prisma-client/transactions).
   */
  $transaction<P extends Prisma.PrismaPromise<any>[]>(arg: [...P], options?: { isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<runtime.Types.Utils.UnwrapTuple<P>>

  $transaction<R>(fn: (prisma: Omit<PrismaClient, runtime.ITXClientDenyList>) => $Utils.JsPromise<R>, options?: { maxWait?: number, timeout?: number, isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<R>


  $extends: $Extensions.ExtendsHook<"extends", Prisma.TypeMapCb<ClientOptions>, ExtArgs, $Utils.Call<Prisma.TypeMapCb<ClientOptions>, {
    extArgs: ExtArgs
  }>>

      /**
   * `prisma.user`: Exposes CRUD operations for the **User** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Users
    * const users = await prisma.user.findMany()
    * ```
    */
  get user(): Prisma.UserDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.subscription`: Exposes CRUD operations for the **Subscription** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Subscriptions
    * const subscriptions = await prisma.subscription.findMany()
    * ```
    */
  get subscription(): Prisma.SubscriptionDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.integrations`: Exposes CRUD operations for the **Integrations** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Integrations
    * const integrations = await prisma.integrations.findMany()
    * ```
    */
  get integrations(): Prisma.IntegrationsDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.automation`: Exposes CRUD operations for the **Automation** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Automations
    * const automations = await prisma.automation.findMany()
    * ```
    */
  get automation(): Prisma.AutomationDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.dms`: Exposes CRUD operations for the **Dms** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Dms
    * const dms = await prisma.dms.findMany()
    * ```
    */
  get dms(): Prisma.DmsDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.post`: Exposes CRUD operations for the **Post** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Posts
    * const posts = await prisma.post.findMany()
    * ```
    */
  get post(): Prisma.PostDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.listener`: Exposes CRUD operations for the **Listener** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Listeners
    * const listeners = await prisma.listener.findMany()
    * ```
    */
  get listener(): Prisma.ListenerDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.trigger`: Exposes CRUD operations for the **Trigger** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Triggers
    * const triggers = await prisma.trigger.findMany()
    * ```
    */
  get trigger(): Prisma.TriggerDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.keyword`: Exposes CRUD operations for the **Keyword** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Keywords
    * const keywords = await prisma.keyword.findMany()
    * ```
    */
  get keyword(): Prisma.KeywordDelegate<ExtArgs, ClientOptions>;
}

export namespace Prisma {
  export import DMMF = runtime.DMMF

  export type PrismaPromise<T> = $Public.PrismaPromise<T>

  /**
   * Validator
   */
  export import validator = runtime.Public.validator

  /**
   * Prisma Errors
   */
  export import PrismaClientKnownRequestError = runtime.PrismaClientKnownRequestError
  export import PrismaClientUnknownRequestError = runtime.PrismaClientUnknownRequestError
  export import PrismaClientRustPanicError = runtime.PrismaClientRustPanicError
  export import PrismaClientInitializationError = runtime.PrismaClientInitializationError
  export import PrismaClientValidationError = runtime.PrismaClientValidationError

  /**
   * Re-export of sql-template-tag
   */
  export import sql = runtime.sqltag
  export import empty = runtime.empty
  export import join = runtime.join
  export import raw = runtime.raw
  export import Sql = runtime.Sql



  /**
   * Decimal.js
   */
  export import Decimal = runtime.Decimal

  export type DecimalJsLike = runtime.DecimalJsLike

  /**
   * Metrics
   */
  export type Metrics = runtime.Metrics
  export type Metric<T> = runtime.Metric<T>
  export type MetricHistogram = runtime.MetricHistogram
  export type MetricHistogramBucket = runtime.MetricHistogramBucket

  /**
  * Extensions
  */
  export import Extension = $Extensions.UserArgs
  export import getExtensionContext = runtime.Extensions.getExtensionContext
  export import Args = $Public.Args
  export import Payload = $Public.Payload
  export import Result = $Public.Result
  export import Exact = $Public.Exact

  /**
   * Prisma Client JS version: 6.8.0
   * Query Engine version: 2060c79ba17c6bb9f5823312b6f6b7f4a845738e
   */
  export type PrismaVersion = {
    client: string
  }

  export const prismaVersion: PrismaVersion

  /**
   * Utility Types
   */


  export import JsonObject = runtime.JsonObject
  export import JsonArray = runtime.JsonArray
  export import JsonValue = runtime.JsonValue
  export import InputJsonObject = runtime.InputJsonObject
  export import InputJsonArray = runtime.InputJsonArray
  export import InputJsonValue = runtime.InputJsonValue

  /**
   * Types of the values used to represent different kinds of `null` values when working with JSON fields.
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  namespace NullTypes {
    /**
    * Type of `Prisma.DbNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.DbNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class DbNull {
      private DbNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.JsonNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.JsonNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class JsonNull {
      private JsonNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.AnyNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.AnyNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class AnyNull {
      private AnyNull: never
      private constructor()
    }
  }

  /**
   * Helper for filtering JSON entries that have `null` on the database (empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const DbNull: NullTypes.DbNull

  /**
   * Helper for filtering JSON entries that have JSON `null` values (not empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const JsonNull: NullTypes.JsonNull

  /**
   * Helper for filtering JSON entries that are `Prisma.DbNull` or `Prisma.JsonNull`
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const AnyNull: NullTypes.AnyNull

  type SelectAndInclude = {
    select: any
    include: any
  }

  type SelectAndOmit = {
    select: any
    omit: any
  }

  /**
   * Get the type of the value, that the Promise holds.
   */
  export type PromiseType<T extends PromiseLike<any>> = T extends PromiseLike<infer U> ? U : T;

  /**
   * Get the return type of a function which returns a Promise.
   */
  export type PromiseReturnType<T extends (...args: any) => $Utils.JsPromise<any>> = PromiseType<ReturnType<T>>

  /**
   * From T, pick a set of properties whose keys are in the union K
   */
  type Prisma__Pick<T, K extends keyof T> = {
      [P in K]: T[P];
  };


  export type Enumerable<T> = T | Array<T>;

  export type RequiredKeys<T> = {
    [K in keyof T]-?: {} extends Prisma__Pick<T, K> ? never : K
  }[keyof T]

  export type TruthyKeys<T> = keyof {
    [K in keyof T as T[K] extends false | undefined | null ? never : K]: K
  }

  export type TrueKeys<T> = TruthyKeys<Prisma__Pick<T, RequiredKeys<T>>>

  /**
   * Subset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection
   */
  export type Subset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never;
  };

  /**
   * SelectSubset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection.
   * Additionally, it validates, if both select and include are present. If the case, it errors.
   */
  export type SelectSubset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    (T extends SelectAndInclude
      ? 'Please either choose `select` or `include`.'
      : T extends SelectAndOmit
        ? 'Please either choose `select` or `omit`.'
        : {})

  /**
   * Subset + Intersection
   * @desc From `T` pick properties that exist in `U` and intersect `K`
   */
  export type SubsetIntersection<T, U, K> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    K

  type Without<T, U> = { [P in Exclude<keyof T, keyof U>]?: never };

  /**
   * XOR is needed to have a real mutually exclusive union type
   * https://stackoverflow.com/questions/42123407/does-typescript-support-mutually-exclusive-types
   */
  type XOR<T, U> =
    T extends object ?
    U extends object ?
      (Without<T, U> & U) | (Without<U, T> & T)
    : U : T


  /**
   * Is T a Record?
   */
  type IsObject<T extends any> = T extends Array<any>
  ? False
  : T extends Date
  ? False
  : T extends Uint8Array
  ? False
  : T extends BigInt
  ? False
  : T extends object
  ? True
  : False


  /**
   * If it's T[], return T
   */
  export type UnEnumerate<T extends unknown> = T extends Array<infer U> ? U : T

  /**
   * From ts-toolbelt
   */

  type __Either<O extends object, K extends Key> = Omit<O, K> &
    {
      // Merge all but K
      [P in K]: Prisma__Pick<O, P & keyof O> // With K possibilities
    }[K]

  type EitherStrict<O extends object, K extends Key> = Strict<__Either<O, K>>

  type EitherLoose<O extends object, K extends Key> = ComputeRaw<__Either<O, K>>

  type _Either<
    O extends object,
    K extends Key,
    strict extends Boolean
  > = {
    1: EitherStrict<O, K>
    0: EitherLoose<O, K>
  }[strict]

  type Either<
    O extends object,
    K extends Key,
    strict extends Boolean = 1
  > = O extends unknown ? _Either<O, K, strict> : never

  export type Union = any

  type PatchUndefined<O extends object, O1 extends object> = {
    [K in keyof O]: O[K] extends undefined ? At<O1, K> : O[K]
  } & {}

  /** Helper Types for "Merge" **/
  export type IntersectOf<U extends Union> = (
    U extends unknown ? (k: U) => void : never
  ) extends (k: infer I) => void
    ? I
    : never

  export type Overwrite<O extends object, O1 extends object> = {
      [K in keyof O]: K extends keyof O1 ? O1[K] : O[K];
  } & {};

  type _Merge<U extends object> = IntersectOf<Overwrite<U, {
      [K in keyof U]-?: At<U, K>;
  }>>;

  type Key = string | number | symbol;
  type AtBasic<O extends object, K extends Key> = K extends keyof O ? O[K] : never;
  type AtStrict<O extends object, K extends Key> = O[K & keyof O];
  type AtLoose<O extends object, K extends Key> = O extends unknown ? AtStrict<O, K> : never;
  export type At<O extends object, K extends Key, strict extends Boolean = 1> = {
      1: AtStrict<O, K>;
      0: AtLoose<O, K>;
  }[strict];

  export type ComputeRaw<A extends any> = A extends Function ? A : {
    [K in keyof A]: A[K];
  } & {};

  export type OptionalFlat<O> = {
    [K in keyof O]?: O[K];
  } & {};

  type _Record<K extends keyof any, T> = {
    [P in K]: T;
  };

  // cause typescript not to expand types and preserve names
  type NoExpand<T> = T extends unknown ? T : never;

  // this type assumes the passed object is entirely optional
  type AtLeast<O extends object, K extends string> = NoExpand<
    O extends unknown
    ? | (K extends keyof O ? { [P in K]: O[P] } & O : O)
      | {[P in keyof O as P extends K ? P : never]-?: O[P]} & O
    : never>;

  type _Strict<U, _U = U> = U extends unknown ? U & OptionalFlat<_Record<Exclude<Keys<_U>, keyof U>, never>> : never;

  export type Strict<U extends object> = ComputeRaw<_Strict<U>>;
  /** End Helper Types for "Merge" **/

  export type Merge<U extends object> = ComputeRaw<_Merge<Strict<U>>>;

  /**
  A [[Boolean]]
  */
  export type Boolean = True | False

  // /**
  // 1
  // */
  export type True = 1

  /**
  0
  */
  export type False = 0

  export type Not<B extends Boolean> = {
    0: 1
    1: 0
  }[B]

  export type Extends<A1 extends any, A2 extends any> = [A1] extends [never]
    ? 0 // anything `never` is false
    : A1 extends A2
    ? 1
    : 0

  export type Has<U extends Union, U1 extends Union> = Not<
    Extends<Exclude<U1, U>, U1>
  >

  export type Or<B1 extends Boolean, B2 extends Boolean> = {
    0: {
      0: 0
      1: 1
    }
    1: {
      0: 1
      1: 1
    }
  }[B1][B2]

  export type Keys<U extends Union> = U extends unknown ? keyof U : never

  type Cast<A, B> = A extends B ? A : B;

  export const type: unique symbol;



  /**
   * Used by group by
   */

  export type GetScalarType<T, O> = O extends object ? {
    [P in keyof T]: P extends keyof O
      ? O[P]
      : never
  } : never

  type FieldPaths<
    T,
    U = Omit<T, '_avg' | '_sum' | '_count' | '_min' | '_max'>
  > = IsObject<T> extends True ? U : T

  type GetHavingFields<T> = {
    [K in keyof T]: Or<
      Or<Extends<'OR', K>, Extends<'AND', K>>,
      Extends<'NOT', K>
    > extends True
      ? // infer is only needed to not hit TS limit
        // based on the brilliant idea of Pierre-Antoine Mills
        // https://github.com/microsoft/TypeScript/issues/30188#issuecomment-478938437
        T[K] extends infer TK
        ? GetHavingFields<UnEnumerate<TK> extends object ? Merge<UnEnumerate<TK>> : never>
        : never
      : {} extends FieldPaths<T[K]>
      ? never
      : K
  }[keyof T]

  /**
   * Convert tuple to union
   */
  type _TupleToUnion<T> = T extends (infer E)[] ? E : never
  type TupleToUnion<K extends readonly any[]> = _TupleToUnion<K>
  type MaybeTupleToUnion<T> = T extends any[] ? TupleToUnion<T> : T

  /**
   * Like `Pick`, but additionally can also accept an array of keys
   */
  type PickEnumerable<T, K extends Enumerable<keyof T> | keyof T> = Prisma__Pick<T, MaybeTupleToUnion<K>>

  /**
   * Exclude all keys with underscores
   */
  type ExcludeUnderscoreKeys<T extends string> = T extends `_${string}` ? never : T


  export type FieldRef<Model, FieldType> = runtime.FieldRef<Model, FieldType>

  type FieldRefInputType<Model, FieldType> = Model extends never ? never : FieldRef<Model, FieldType>


  export const ModelName: {
    User: 'User',
    Subscription: 'Subscription',
    Integrations: 'Integrations',
    Automation: 'Automation',
    Dms: 'Dms',
    Post: 'Post',
    Listener: 'Listener',
    Trigger: 'Trigger',
    Keyword: 'Keyword'
  };

  export type ModelName = (typeof ModelName)[keyof typeof ModelName]


  export type Datasources = {
    db?: Datasource
  }

  interface TypeMapCb<ClientOptions = {}> extends $Utils.Fn<{extArgs: $Extensions.InternalArgs }, $Utils.Record<string, any>> {
    returns: Prisma.TypeMap<this['params']['extArgs'], ClientOptions extends { omit: infer OmitOptions } ? OmitOptions : {}>
  }

  export type TypeMap<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> = {
    globalOmitOptions: {
      omit: GlobalOmitOptions
    }
    meta: {
      modelProps: "user" | "subscription" | "integrations" | "automation" | "dms" | "post" | "listener" | "trigger" | "keyword"
      txIsolationLevel: Prisma.TransactionIsolationLevel
    }
    model: {
      User: {
        payload: Prisma.$UserPayload<ExtArgs>
        fields: Prisma.UserFieldRefs
        operations: {
          findUnique: {
            args: Prisma.UserFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.UserFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          findFirst: {
            args: Prisma.UserFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.UserFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          findMany: {
            args: Prisma.UserFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[]
          }
          create: {
            args: Prisma.UserCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          createMany: {
            args: Prisma.UserCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.UserCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[]
          }
          delete: {
            args: Prisma.UserDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          update: {
            args: Prisma.UserUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          deleteMany: {
            args: Prisma.UserDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.UserUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.UserUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[]
          }
          upsert: {
            args: Prisma.UserUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          aggregate: {
            args: Prisma.UserAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateUser>
          }
          groupBy: {
            args: Prisma.UserGroupByArgs<ExtArgs>
            result: $Utils.Optional<UserGroupByOutputType>[]
          }
          count: {
            args: Prisma.UserCountArgs<ExtArgs>
            result: $Utils.Optional<UserCountAggregateOutputType> | number
          }
        }
      }
      Subscription: {
        payload: Prisma.$SubscriptionPayload<ExtArgs>
        fields: Prisma.SubscriptionFieldRefs
        operations: {
          findUnique: {
            args: Prisma.SubscriptionFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SubscriptionPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.SubscriptionFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SubscriptionPayload>
          }
          findFirst: {
            args: Prisma.SubscriptionFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SubscriptionPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.SubscriptionFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SubscriptionPayload>
          }
          findMany: {
            args: Prisma.SubscriptionFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SubscriptionPayload>[]
          }
          create: {
            args: Prisma.SubscriptionCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SubscriptionPayload>
          }
          createMany: {
            args: Prisma.SubscriptionCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.SubscriptionCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SubscriptionPayload>[]
          }
          delete: {
            args: Prisma.SubscriptionDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SubscriptionPayload>
          }
          update: {
            args: Prisma.SubscriptionUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SubscriptionPayload>
          }
          deleteMany: {
            args: Prisma.SubscriptionDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.SubscriptionUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.SubscriptionUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SubscriptionPayload>[]
          }
          upsert: {
            args: Prisma.SubscriptionUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SubscriptionPayload>
          }
          aggregate: {
            args: Prisma.SubscriptionAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateSubscription>
          }
          groupBy: {
            args: Prisma.SubscriptionGroupByArgs<ExtArgs>
            result: $Utils.Optional<SubscriptionGroupByOutputType>[]
          }
          count: {
            args: Prisma.SubscriptionCountArgs<ExtArgs>
            result: $Utils.Optional<SubscriptionCountAggregateOutputType> | number
          }
        }
      }
      Integrations: {
        payload: Prisma.$IntegrationsPayload<ExtArgs>
        fields: Prisma.IntegrationsFieldRefs
        operations: {
          findUnique: {
            args: Prisma.IntegrationsFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$IntegrationsPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.IntegrationsFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$IntegrationsPayload>
          }
          findFirst: {
            args: Prisma.IntegrationsFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$IntegrationsPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.IntegrationsFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$IntegrationsPayload>
          }
          findMany: {
            args: Prisma.IntegrationsFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$IntegrationsPayload>[]
          }
          create: {
            args: Prisma.IntegrationsCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$IntegrationsPayload>
          }
          createMany: {
            args: Prisma.IntegrationsCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.IntegrationsCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$IntegrationsPayload>[]
          }
          delete: {
            args: Prisma.IntegrationsDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$IntegrationsPayload>
          }
          update: {
            args: Prisma.IntegrationsUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$IntegrationsPayload>
          }
          deleteMany: {
            args: Prisma.IntegrationsDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.IntegrationsUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.IntegrationsUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$IntegrationsPayload>[]
          }
          upsert: {
            args: Prisma.IntegrationsUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$IntegrationsPayload>
          }
          aggregate: {
            args: Prisma.IntegrationsAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateIntegrations>
          }
          groupBy: {
            args: Prisma.IntegrationsGroupByArgs<ExtArgs>
            result: $Utils.Optional<IntegrationsGroupByOutputType>[]
          }
          count: {
            args: Prisma.IntegrationsCountArgs<ExtArgs>
            result: $Utils.Optional<IntegrationsCountAggregateOutputType> | number
          }
        }
      }
      Automation: {
        payload: Prisma.$AutomationPayload<ExtArgs>
        fields: Prisma.AutomationFieldRefs
        operations: {
          findUnique: {
            args: Prisma.AutomationFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AutomationPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.AutomationFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AutomationPayload>
          }
          findFirst: {
            args: Prisma.AutomationFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AutomationPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.AutomationFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AutomationPayload>
          }
          findMany: {
            args: Prisma.AutomationFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AutomationPayload>[]
          }
          create: {
            args: Prisma.AutomationCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AutomationPayload>
          }
          createMany: {
            args: Prisma.AutomationCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.AutomationCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AutomationPayload>[]
          }
          delete: {
            args: Prisma.AutomationDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AutomationPayload>
          }
          update: {
            args: Prisma.AutomationUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AutomationPayload>
          }
          deleteMany: {
            args: Prisma.AutomationDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.AutomationUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.AutomationUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AutomationPayload>[]
          }
          upsert: {
            args: Prisma.AutomationUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AutomationPayload>
          }
          aggregate: {
            args: Prisma.AutomationAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateAutomation>
          }
          groupBy: {
            args: Prisma.AutomationGroupByArgs<ExtArgs>
            result: $Utils.Optional<AutomationGroupByOutputType>[]
          }
          count: {
            args: Prisma.AutomationCountArgs<ExtArgs>
            result: $Utils.Optional<AutomationCountAggregateOutputType> | number
          }
        }
      }
      Dms: {
        payload: Prisma.$DmsPayload<ExtArgs>
        fields: Prisma.DmsFieldRefs
        operations: {
          findUnique: {
            args: Prisma.DmsFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DmsPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.DmsFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DmsPayload>
          }
          findFirst: {
            args: Prisma.DmsFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DmsPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.DmsFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DmsPayload>
          }
          findMany: {
            args: Prisma.DmsFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DmsPayload>[]
          }
          create: {
            args: Prisma.DmsCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DmsPayload>
          }
          createMany: {
            args: Prisma.DmsCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.DmsCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DmsPayload>[]
          }
          delete: {
            args: Prisma.DmsDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DmsPayload>
          }
          update: {
            args: Prisma.DmsUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DmsPayload>
          }
          deleteMany: {
            args: Prisma.DmsDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.DmsUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.DmsUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DmsPayload>[]
          }
          upsert: {
            args: Prisma.DmsUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DmsPayload>
          }
          aggregate: {
            args: Prisma.DmsAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateDms>
          }
          groupBy: {
            args: Prisma.DmsGroupByArgs<ExtArgs>
            result: $Utils.Optional<DmsGroupByOutputType>[]
          }
          count: {
            args: Prisma.DmsCountArgs<ExtArgs>
            result: $Utils.Optional<DmsCountAggregateOutputType> | number
          }
        }
      }
      Post: {
        payload: Prisma.$PostPayload<ExtArgs>
        fields: Prisma.PostFieldRefs
        operations: {
          findUnique: {
            args: Prisma.PostFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PostPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.PostFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PostPayload>
          }
          findFirst: {
            args: Prisma.PostFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PostPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.PostFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PostPayload>
          }
          findMany: {
            args: Prisma.PostFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PostPayload>[]
          }
          create: {
            args: Prisma.PostCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PostPayload>
          }
          createMany: {
            args: Prisma.PostCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.PostCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PostPayload>[]
          }
          delete: {
            args: Prisma.PostDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PostPayload>
          }
          update: {
            args: Prisma.PostUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PostPayload>
          }
          deleteMany: {
            args: Prisma.PostDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.PostUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.PostUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PostPayload>[]
          }
          upsert: {
            args: Prisma.PostUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PostPayload>
          }
          aggregate: {
            args: Prisma.PostAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregatePost>
          }
          groupBy: {
            args: Prisma.PostGroupByArgs<ExtArgs>
            result: $Utils.Optional<PostGroupByOutputType>[]
          }
          count: {
            args: Prisma.PostCountArgs<ExtArgs>
            result: $Utils.Optional<PostCountAggregateOutputType> | number
          }
        }
      }
      Listener: {
        payload: Prisma.$ListenerPayload<ExtArgs>
        fields: Prisma.ListenerFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ListenerFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ListenerPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ListenerFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ListenerPayload>
          }
          findFirst: {
            args: Prisma.ListenerFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ListenerPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ListenerFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ListenerPayload>
          }
          findMany: {
            args: Prisma.ListenerFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ListenerPayload>[]
          }
          create: {
            args: Prisma.ListenerCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ListenerPayload>
          }
          createMany: {
            args: Prisma.ListenerCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.ListenerCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ListenerPayload>[]
          }
          delete: {
            args: Prisma.ListenerDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ListenerPayload>
          }
          update: {
            args: Prisma.ListenerUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ListenerPayload>
          }
          deleteMany: {
            args: Prisma.ListenerDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.ListenerUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.ListenerUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ListenerPayload>[]
          }
          upsert: {
            args: Prisma.ListenerUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ListenerPayload>
          }
          aggregate: {
            args: Prisma.ListenerAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateListener>
          }
          groupBy: {
            args: Prisma.ListenerGroupByArgs<ExtArgs>
            result: $Utils.Optional<ListenerGroupByOutputType>[]
          }
          count: {
            args: Prisma.ListenerCountArgs<ExtArgs>
            result: $Utils.Optional<ListenerCountAggregateOutputType> | number
          }
        }
      }
      Trigger: {
        payload: Prisma.$TriggerPayload<ExtArgs>
        fields: Prisma.TriggerFieldRefs
        operations: {
          findUnique: {
            args: Prisma.TriggerFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TriggerPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.TriggerFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TriggerPayload>
          }
          findFirst: {
            args: Prisma.TriggerFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TriggerPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.TriggerFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TriggerPayload>
          }
          findMany: {
            args: Prisma.TriggerFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TriggerPayload>[]
          }
          create: {
            args: Prisma.TriggerCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TriggerPayload>
          }
          createMany: {
            args: Prisma.TriggerCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.TriggerCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TriggerPayload>[]
          }
          delete: {
            args: Prisma.TriggerDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TriggerPayload>
          }
          update: {
            args: Prisma.TriggerUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TriggerPayload>
          }
          deleteMany: {
            args: Prisma.TriggerDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.TriggerUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.TriggerUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TriggerPayload>[]
          }
          upsert: {
            args: Prisma.TriggerUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TriggerPayload>
          }
          aggregate: {
            args: Prisma.TriggerAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateTrigger>
          }
          groupBy: {
            args: Prisma.TriggerGroupByArgs<ExtArgs>
            result: $Utils.Optional<TriggerGroupByOutputType>[]
          }
          count: {
            args: Prisma.TriggerCountArgs<ExtArgs>
            result: $Utils.Optional<TriggerCountAggregateOutputType> | number
          }
        }
      }
      Keyword: {
        payload: Prisma.$KeywordPayload<ExtArgs>
        fields: Prisma.KeywordFieldRefs
        operations: {
          findUnique: {
            args: Prisma.KeywordFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$KeywordPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.KeywordFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$KeywordPayload>
          }
          findFirst: {
            args: Prisma.KeywordFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$KeywordPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.KeywordFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$KeywordPayload>
          }
          findMany: {
            args: Prisma.KeywordFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$KeywordPayload>[]
          }
          create: {
            args: Prisma.KeywordCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$KeywordPayload>
          }
          createMany: {
            args: Prisma.KeywordCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.KeywordCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$KeywordPayload>[]
          }
          delete: {
            args: Prisma.KeywordDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$KeywordPayload>
          }
          update: {
            args: Prisma.KeywordUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$KeywordPayload>
          }
          deleteMany: {
            args: Prisma.KeywordDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.KeywordUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.KeywordUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$KeywordPayload>[]
          }
          upsert: {
            args: Prisma.KeywordUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$KeywordPayload>
          }
          aggregate: {
            args: Prisma.KeywordAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateKeyword>
          }
          groupBy: {
            args: Prisma.KeywordGroupByArgs<ExtArgs>
            result: $Utils.Optional<KeywordGroupByOutputType>[]
          }
          count: {
            args: Prisma.KeywordCountArgs<ExtArgs>
            result: $Utils.Optional<KeywordCountAggregateOutputType> | number
          }
        }
      }
    }
  } & {
    other: {
      payload: any
      operations: {
        $executeRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $executeRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
        $queryRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $queryRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
      }
    }
  }
  export const defineExtension: $Extensions.ExtendsHook<"define", Prisma.TypeMapCb, $Extensions.DefaultArgs>
  export type DefaultPrismaClient = PrismaClient
  export type ErrorFormat = 'pretty' | 'colorless' | 'minimal'
  export interface PrismaClientOptions {
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasources?: Datasources
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasourceUrl?: string
    /**
     * @default "colorless"
     */
    errorFormat?: ErrorFormat
    /**
     * @example
     * ```
     * // Defaults to stdout
     * log: ['query', 'info', 'warn', 'error']
     * 
     * // Emit as events
     * log: [
     *   { emit: 'stdout', level: 'query' },
     *   { emit: 'stdout', level: 'info' },
     *   { emit: 'stdout', level: 'warn' }
     *   { emit: 'stdout', level: 'error' }
     * ]
     * ```
     * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/logging#the-log-option).
     */
    log?: (LogLevel | LogDefinition)[]
    /**
     * The default values for transactionOptions
     * maxWait ?= 2000
     * timeout ?= 5000
     */
    transactionOptions?: {
      maxWait?: number
      timeout?: number
      isolationLevel?: Prisma.TransactionIsolationLevel
    }
    /**
     * Global configuration for omitting model fields by default.
     * 
     * @example
     * ```
     * const prisma = new PrismaClient({
     *   omit: {
     *     user: {
     *       password: true
     *     }
     *   }
     * })
     * ```
     */
    omit?: Prisma.GlobalOmitConfig
  }
  export type GlobalOmitConfig = {
    user?: UserOmit
    subscription?: SubscriptionOmit
    integrations?: IntegrationsOmit
    automation?: AutomationOmit
    dms?: DmsOmit
    post?: PostOmit
    listener?: ListenerOmit
    trigger?: TriggerOmit
    keyword?: KeywordOmit
  }

  /* Types for Logging */
  export type LogLevel = 'info' | 'query' | 'warn' | 'error'
  export type LogDefinition = {
    level: LogLevel
    emit: 'stdout' | 'event'
  }

  export type GetLogType<T extends LogLevel | LogDefinition> = T extends LogDefinition ? T['emit'] extends 'event' ? T['level'] : never : never
  export type GetEvents<T extends any> = T extends Array<LogLevel | LogDefinition> ?
    GetLogType<T[0]> | GetLogType<T[1]> | GetLogType<T[2]> | GetLogType<T[3]>
    : never

  export type QueryEvent = {
    timestamp: Date
    query: string
    params: string
    duration: number
    target: string
  }

  export type LogEvent = {
    timestamp: Date
    message: string
    target: string
  }
  /* End Types for Logging */


  export type PrismaAction =
    | 'findUnique'
    | 'findUniqueOrThrow'
    | 'findMany'
    | 'findFirst'
    | 'findFirstOrThrow'
    | 'create'
    | 'createMany'
    | 'createManyAndReturn'
    | 'update'
    | 'updateMany'
    | 'updateManyAndReturn'
    | 'upsert'
    | 'delete'
    | 'deleteMany'
    | 'executeRaw'
    | 'queryRaw'
    | 'aggregate'
    | 'count'
    | 'runCommandRaw'
    | 'findRaw'
    | 'groupBy'

  /**
   * These options are being passed into the middleware as "params"
   */
  export type MiddlewareParams = {
    model?: ModelName
    action: PrismaAction
    args: any
    dataPath: string[]
    runInTransaction: boolean
  }

  /**
   * The `T` type makes sure, that the `return proceed` is not forgotten in the middleware implementation
   */
  export type Middleware<T = any> = (
    params: MiddlewareParams,
    next: (params: MiddlewareParams) => $Utils.JsPromise<T>,
  ) => $Utils.JsPromise<T>

  // tested in getLogLevel.test.ts
  export function getLogLevel(log: Array<LogLevel | LogDefinition>): LogLevel | undefined;

  /**
   * `PrismaClient` proxy available in interactive transactions.
   */
  export type TransactionClient = Omit<Prisma.DefaultPrismaClient, runtime.ITXClientDenyList>

  export type Datasource = {
    url?: string
  }

  /**
   * Count Types
   */


  /**
   * Count Type UserCountOutputType
   */

  export type UserCountOutputType = {
    integrations: number
    automations: number
  }

  export type UserCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    integrations?: boolean | UserCountOutputTypeCountIntegrationsArgs
    automations?: boolean | UserCountOutputTypeCountAutomationsArgs
  }

  // Custom InputTypes
  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserCountOutputType
     */
    select?: UserCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountIntegrationsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: IntegrationsWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountAutomationsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: AutomationWhereInput
  }


  /**
   * Count Type AutomationCountOutputType
   */

  export type AutomationCountOutputType = {
    trigger: number
    posts: number
    dms: number
    keywords: number
  }

  export type AutomationCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    trigger?: boolean | AutomationCountOutputTypeCountTriggerArgs
    posts?: boolean | AutomationCountOutputTypeCountPostsArgs
    dms?: boolean | AutomationCountOutputTypeCountDmsArgs
    keywords?: boolean | AutomationCountOutputTypeCountKeywordsArgs
  }

  // Custom InputTypes
  /**
   * AutomationCountOutputType without action
   */
  export type AutomationCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AutomationCountOutputType
     */
    select?: AutomationCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * AutomationCountOutputType without action
   */
  export type AutomationCountOutputTypeCountTriggerArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: TriggerWhereInput
  }

  /**
   * AutomationCountOutputType without action
   */
  export type AutomationCountOutputTypeCountPostsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: PostWhereInput
  }

  /**
   * AutomationCountOutputType without action
   */
  export type AutomationCountOutputTypeCountDmsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: DmsWhereInput
  }

  /**
   * AutomationCountOutputType without action
   */
  export type AutomationCountOutputTypeCountKeywordsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: KeywordWhereInput
  }


  /**
   * Models
   */

  /**
   * Model User
   */

  export type AggregateUser = {
    _count: UserCountAggregateOutputType | null
    _min: UserMinAggregateOutputType | null
    _max: UserMaxAggregateOutputType | null
  }

  export type UserMinAggregateOutputType = {
    id: string | null
    clerkId: string | null
    email: string | null
    firstname: string | null
    lastname: string | null
    createdAt: Date | null
  }

  export type UserMaxAggregateOutputType = {
    id: string | null
    clerkId: string | null
    email: string | null
    firstname: string | null
    lastname: string | null
    createdAt: Date | null
  }

  export type UserCountAggregateOutputType = {
    id: number
    clerkId: number
    email: number
    firstname: number
    lastname: number
    createdAt: number
    _all: number
  }


  export type UserMinAggregateInputType = {
    id?: true
    clerkId?: true
    email?: true
    firstname?: true
    lastname?: true
    createdAt?: true
  }

  export type UserMaxAggregateInputType = {
    id?: true
    clerkId?: true
    email?: true
    firstname?: true
    lastname?: true
    createdAt?: true
  }

  export type UserCountAggregateInputType = {
    id?: true
    clerkId?: true
    email?: true
    firstname?: true
    lastname?: true
    createdAt?: true
    _all?: true
  }

  export type UserAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which User to aggregate.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Users
    **/
    _count?: true | UserCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: UserMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: UserMaxAggregateInputType
  }

  export type GetUserAggregateType<T extends UserAggregateArgs> = {
        [P in keyof T & keyof AggregateUser]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateUser[P]>
      : GetScalarType<T[P], AggregateUser[P]>
  }




  export type UserGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: UserWhereInput
    orderBy?: UserOrderByWithAggregationInput | UserOrderByWithAggregationInput[]
    by: UserScalarFieldEnum[] | UserScalarFieldEnum
    having?: UserScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: UserCountAggregateInputType | true
    _min?: UserMinAggregateInputType
    _max?: UserMaxAggregateInputType
  }

  export type UserGroupByOutputType = {
    id: string
    clerkId: string
    email: string
    firstname: string | null
    lastname: string | null
    createdAt: Date
    _count: UserCountAggregateOutputType | null
    _min: UserMinAggregateOutputType | null
    _max: UserMaxAggregateOutputType | null
  }

  type GetUserGroupByPayload<T extends UserGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<UserGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof UserGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], UserGroupByOutputType[P]>
            : GetScalarType<T[P], UserGroupByOutputType[P]>
        }
      >
    >


  export type UserSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    clerkId?: boolean
    email?: boolean
    firstname?: boolean
    lastname?: boolean
    createdAt?: boolean
    subscription?: boolean | User$subscriptionArgs<ExtArgs>
    integrations?: boolean | User$integrationsArgs<ExtArgs>
    automations?: boolean | User$automationsArgs<ExtArgs>
    _count?: boolean | UserCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["user"]>

  export type UserSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    clerkId?: boolean
    email?: boolean
    firstname?: boolean
    lastname?: boolean
    createdAt?: boolean
  }, ExtArgs["result"]["user"]>

  export type UserSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    clerkId?: boolean
    email?: boolean
    firstname?: boolean
    lastname?: boolean
    createdAt?: boolean
  }, ExtArgs["result"]["user"]>

  export type UserSelectScalar = {
    id?: boolean
    clerkId?: boolean
    email?: boolean
    firstname?: boolean
    lastname?: boolean
    createdAt?: boolean
  }

  export type UserOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "clerkId" | "email" | "firstname" | "lastname" | "createdAt", ExtArgs["result"]["user"]>
  export type UserInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    subscription?: boolean | User$subscriptionArgs<ExtArgs>
    integrations?: boolean | User$integrationsArgs<ExtArgs>
    automations?: boolean | User$automationsArgs<ExtArgs>
    _count?: boolean | UserCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type UserIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type UserIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $UserPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "User"
    objects: {
      subscription: Prisma.$SubscriptionPayload<ExtArgs> | null
      integrations: Prisma.$IntegrationsPayload<ExtArgs>[]
      automations: Prisma.$AutomationPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      clerkId: string
      email: string
      firstname: string | null
      lastname: string | null
      createdAt: Date
    }, ExtArgs["result"]["user"]>
    composites: {}
  }

  type UserGetPayload<S extends boolean | null | undefined | UserDefaultArgs> = $Result.GetResult<Prisma.$UserPayload, S>

  type UserCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<UserFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: UserCountAggregateInputType | true
    }

  export interface UserDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['User'], meta: { name: 'User' } }
    /**
     * Find zero or one User that matches the filter.
     * @param {UserFindUniqueArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends UserFindUniqueArgs>(args: SelectSubset<T, UserFindUniqueArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one User that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {UserFindUniqueOrThrowArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends UserFindUniqueOrThrowArgs>(args: SelectSubset<T, UserFindUniqueOrThrowArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first User that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindFirstArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends UserFindFirstArgs>(args?: SelectSubset<T, UserFindFirstArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first User that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindFirstOrThrowArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends UserFindFirstOrThrowArgs>(args?: SelectSubset<T, UserFindFirstOrThrowArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Users that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Users
     * const users = await prisma.user.findMany()
     * 
     * // Get first 10 Users
     * const users = await prisma.user.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const userWithIdOnly = await prisma.user.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends UserFindManyArgs>(args?: SelectSubset<T, UserFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a User.
     * @param {UserCreateArgs} args - Arguments to create a User.
     * @example
     * // Create one User
     * const User = await prisma.user.create({
     *   data: {
     *     // ... data to create a User
     *   }
     * })
     * 
     */
    create<T extends UserCreateArgs>(args: SelectSubset<T, UserCreateArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Users.
     * @param {UserCreateManyArgs} args - Arguments to create many Users.
     * @example
     * // Create many Users
     * const user = await prisma.user.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends UserCreateManyArgs>(args?: SelectSubset<T, UserCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Users and returns the data saved in the database.
     * @param {UserCreateManyAndReturnArgs} args - Arguments to create many Users.
     * @example
     * // Create many Users
     * const user = await prisma.user.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Users and only return the `id`
     * const userWithIdOnly = await prisma.user.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends UserCreateManyAndReturnArgs>(args?: SelectSubset<T, UserCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a User.
     * @param {UserDeleteArgs} args - Arguments to delete one User.
     * @example
     * // Delete one User
     * const User = await prisma.user.delete({
     *   where: {
     *     // ... filter to delete one User
     *   }
     * })
     * 
     */
    delete<T extends UserDeleteArgs>(args: SelectSubset<T, UserDeleteArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one User.
     * @param {UserUpdateArgs} args - Arguments to update one User.
     * @example
     * // Update one User
     * const user = await prisma.user.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends UserUpdateArgs>(args: SelectSubset<T, UserUpdateArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Users.
     * @param {UserDeleteManyArgs} args - Arguments to filter Users to delete.
     * @example
     * // Delete a few Users
     * const { count } = await prisma.user.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends UserDeleteManyArgs>(args?: SelectSubset<T, UserDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Users
     * const user = await prisma.user.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends UserUpdateManyArgs>(args: SelectSubset<T, UserUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Users and returns the data updated in the database.
     * @param {UserUpdateManyAndReturnArgs} args - Arguments to update many Users.
     * @example
     * // Update many Users
     * const user = await prisma.user.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Users and only return the `id`
     * const userWithIdOnly = await prisma.user.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends UserUpdateManyAndReturnArgs>(args: SelectSubset<T, UserUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one User.
     * @param {UserUpsertArgs} args - Arguments to update or create a User.
     * @example
     * // Update or create a User
     * const user = await prisma.user.upsert({
     *   create: {
     *     // ... data to create a User
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the User we want to update
     *   }
     * })
     */
    upsert<T extends UserUpsertArgs>(args: SelectSubset<T, UserUpsertArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserCountArgs} args - Arguments to filter Users to count.
     * @example
     * // Count the number of Users
     * const count = await prisma.user.count({
     *   where: {
     *     // ... the filter for the Users we want to count
     *   }
     * })
    **/
    count<T extends UserCountArgs>(
      args?: Subset<T, UserCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], UserCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a User.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends UserAggregateArgs>(args: Subset<T, UserAggregateArgs>): Prisma.PrismaPromise<GetUserAggregateType<T>>

    /**
     * Group by User.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends UserGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: UserGroupByArgs['orderBy'] }
        : { orderBy?: UserGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, UserGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetUserGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the User model
   */
  readonly fields: UserFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for User.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__UserClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    subscription<T extends User$subscriptionArgs<ExtArgs> = {}>(args?: Subset<T, User$subscriptionArgs<ExtArgs>>): Prisma__SubscriptionClient<$Result.GetResult<Prisma.$SubscriptionPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    integrations<T extends User$integrationsArgs<ExtArgs> = {}>(args?: Subset<T, User$integrationsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$IntegrationsPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    automations<T extends User$automationsArgs<ExtArgs> = {}>(args?: Subset<T, User$automationsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AutomationPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the User model
   */
  interface UserFieldRefs {
    readonly id: FieldRef<"User", 'String'>
    readonly clerkId: FieldRef<"User", 'String'>
    readonly email: FieldRef<"User", 'String'>
    readonly firstname: FieldRef<"User", 'String'>
    readonly lastname: FieldRef<"User", 'String'>
    readonly createdAt: FieldRef<"User", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * User findUnique
   */
  export type UserFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User findUniqueOrThrow
   */
  export type UserFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User findFirst
   */
  export type UserFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Users.
     */
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User findFirstOrThrow
   */
  export type UserFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Users.
     */
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User findMany
   */
  export type UserFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which Users to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User create
   */
  export type UserCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The data needed to create a User.
     */
    data: XOR<UserCreateInput, UserUncheckedCreateInput>
  }

  /**
   * User createMany
   */
  export type UserCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Users.
     */
    data: UserCreateManyInput | UserCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * User createManyAndReturn
   */
  export type UserCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * The data used to create many Users.
     */
    data: UserCreateManyInput | UserCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * User update
   */
  export type UserUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The data needed to update a User.
     */
    data: XOR<UserUpdateInput, UserUncheckedUpdateInput>
    /**
     * Choose, which User to update.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User updateMany
   */
  export type UserUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Users.
     */
    data: XOR<UserUpdateManyMutationInput, UserUncheckedUpdateManyInput>
    /**
     * Filter which Users to update
     */
    where?: UserWhereInput
    /**
     * Limit how many Users to update.
     */
    limit?: number
  }

  /**
   * User updateManyAndReturn
   */
  export type UserUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * The data used to update Users.
     */
    data: XOR<UserUpdateManyMutationInput, UserUncheckedUpdateManyInput>
    /**
     * Filter which Users to update
     */
    where?: UserWhereInput
    /**
     * Limit how many Users to update.
     */
    limit?: number
  }

  /**
   * User upsert
   */
  export type UserUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The filter to search for the User to update in case it exists.
     */
    where: UserWhereUniqueInput
    /**
     * In case the User found by the `where` argument doesn't exist, create a new User with this data.
     */
    create: XOR<UserCreateInput, UserUncheckedCreateInput>
    /**
     * In case the User was found with the provided `where` argument, update it with this data.
     */
    update: XOR<UserUpdateInput, UserUncheckedUpdateInput>
  }

  /**
   * User delete
   */
  export type UserDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter which User to delete.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User deleteMany
   */
  export type UserDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Users to delete
     */
    where?: UserWhereInput
    /**
     * Limit how many Users to delete.
     */
    limit?: number
  }

  /**
   * User.subscription
   */
  export type User$subscriptionArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Subscription
     */
    select?: SubscriptionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Subscription
     */
    omit?: SubscriptionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SubscriptionInclude<ExtArgs> | null
    where?: SubscriptionWhereInput
  }

  /**
   * User.integrations
   */
  export type User$integrationsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Integrations
     */
    select?: IntegrationsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Integrations
     */
    omit?: IntegrationsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: IntegrationsInclude<ExtArgs> | null
    where?: IntegrationsWhereInput
    orderBy?: IntegrationsOrderByWithRelationInput | IntegrationsOrderByWithRelationInput[]
    cursor?: IntegrationsWhereUniqueInput
    take?: number
    skip?: number
    distinct?: IntegrationsScalarFieldEnum | IntegrationsScalarFieldEnum[]
  }

  /**
   * User.automations
   */
  export type User$automationsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Automation
     */
    select?: AutomationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Automation
     */
    omit?: AutomationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AutomationInclude<ExtArgs> | null
    where?: AutomationWhereInput
    orderBy?: AutomationOrderByWithRelationInput | AutomationOrderByWithRelationInput[]
    cursor?: AutomationWhereUniqueInput
    take?: number
    skip?: number
    distinct?: AutomationScalarFieldEnum | AutomationScalarFieldEnum[]
  }

  /**
   * User without action
   */
  export type UserDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
  }


  /**
   * Model Subscription
   */

  export type AggregateSubscription = {
    _count: SubscriptionCountAggregateOutputType | null
    _min: SubscriptionMinAggregateOutputType | null
    _max: SubscriptionMaxAggregateOutputType | null
  }

  export type SubscriptionMinAggregateOutputType = {
    id: string | null
    userId: string | null
    createdAt: Date | null
    plan: $Enums.SUBSCRIPTION_PLAN | null
    updatedAt: Date | null
    customerId: string | null
  }

  export type SubscriptionMaxAggregateOutputType = {
    id: string | null
    userId: string | null
    createdAt: Date | null
    plan: $Enums.SUBSCRIPTION_PLAN | null
    updatedAt: Date | null
    customerId: string | null
  }

  export type SubscriptionCountAggregateOutputType = {
    id: number
    userId: number
    createdAt: number
    plan: number
    updatedAt: number
    customerId: number
    _all: number
  }


  export type SubscriptionMinAggregateInputType = {
    id?: true
    userId?: true
    createdAt?: true
    plan?: true
    updatedAt?: true
    customerId?: true
  }

  export type SubscriptionMaxAggregateInputType = {
    id?: true
    userId?: true
    createdAt?: true
    plan?: true
    updatedAt?: true
    customerId?: true
  }

  export type SubscriptionCountAggregateInputType = {
    id?: true
    userId?: true
    createdAt?: true
    plan?: true
    updatedAt?: true
    customerId?: true
    _all?: true
  }

  export type SubscriptionAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Subscription to aggregate.
     */
    where?: SubscriptionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Subscriptions to fetch.
     */
    orderBy?: SubscriptionOrderByWithRelationInput | SubscriptionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: SubscriptionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Subscriptions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Subscriptions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Subscriptions
    **/
    _count?: true | SubscriptionCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: SubscriptionMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: SubscriptionMaxAggregateInputType
  }

  export type GetSubscriptionAggregateType<T extends SubscriptionAggregateArgs> = {
        [P in keyof T & keyof AggregateSubscription]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateSubscription[P]>
      : GetScalarType<T[P], AggregateSubscription[P]>
  }




  export type SubscriptionGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: SubscriptionWhereInput
    orderBy?: SubscriptionOrderByWithAggregationInput | SubscriptionOrderByWithAggregationInput[]
    by: SubscriptionScalarFieldEnum[] | SubscriptionScalarFieldEnum
    having?: SubscriptionScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: SubscriptionCountAggregateInputType | true
    _min?: SubscriptionMinAggregateInputType
    _max?: SubscriptionMaxAggregateInputType
  }

  export type SubscriptionGroupByOutputType = {
    id: string
    userId: string | null
    createdAt: Date
    plan: $Enums.SUBSCRIPTION_PLAN
    updatedAt: Date
    customerId: string | null
    _count: SubscriptionCountAggregateOutputType | null
    _min: SubscriptionMinAggregateOutputType | null
    _max: SubscriptionMaxAggregateOutputType | null
  }

  type GetSubscriptionGroupByPayload<T extends SubscriptionGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<SubscriptionGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof SubscriptionGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], SubscriptionGroupByOutputType[P]>
            : GetScalarType<T[P], SubscriptionGroupByOutputType[P]>
        }
      >
    >


  export type SubscriptionSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    createdAt?: boolean
    plan?: boolean
    updatedAt?: boolean
    customerId?: boolean
    User?: boolean | Subscription$UserArgs<ExtArgs>
  }, ExtArgs["result"]["subscription"]>

  export type SubscriptionSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    createdAt?: boolean
    plan?: boolean
    updatedAt?: boolean
    customerId?: boolean
    User?: boolean | Subscription$UserArgs<ExtArgs>
  }, ExtArgs["result"]["subscription"]>

  export type SubscriptionSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    createdAt?: boolean
    plan?: boolean
    updatedAt?: boolean
    customerId?: boolean
    User?: boolean | Subscription$UserArgs<ExtArgs>
  }, ExtArgs["result"]["subscription"]>

  export type SubscriptionSelectScalar = {
    id?: boolean
    userId?: boolean
    createdAt?: boolean
    plan?: boolean
    updatedAt?: boolean
    customerId?: boolean
  }

  export type SubscriptionOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "userId" | "createdAt" | "plan" | "updatedAt" | "customerId", ExtArgs["result"]["subscription"]>
  export type SubscriptionInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    User?: boolean | Subscription$UserArgs<ExtArgs>
  }
  export type SubscriptionIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    User?: boolean | Subscription$UserArgs<ExtArgs>
  }
  export type SubscriptionIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    User?: boolean | Subscription$UserArgs<ExtArgs>
  }

  export type $SubscriptionPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Subscription"
    objects: {
      User: Prisma.$UserPayload<ExtArgs> | null
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      userId: string | null
      createdAt: Date
      plan: $Enums.SUBSCRIPTION_PLAN
      updatedAt: Date
      customerId: string | null
    }, ExtArgs["result"]["subscription"]>
    composites: {}
  }

  type SubscriptionGetPayload<S extends boolean | null | undefined | SubscriptionDefaultArgs> = $Result.GetResult<Prisma.$SubscriptionPayload, S>

  type SubscriptionCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<SubscriptionFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: SubscriptionCountAggregateInputType | true
    }

  export interface SubscriptionDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Subscription'], meta: { name: 'Subscription' } }
    /**
     * Find zero or one Subscription that matches the filter.
     * @param {SubscriptionFindUniqueArgs} args - Arguments to find a Subscription
     * @example
     * // Get one Subscription
     * const subscription = await prisma.subscription.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends SubscriptionFindUniqueArgs>(args: SelectSubset<T, SubscriptionFindUniqueArgs<ExtArgs>>): Prisma__SubscriptionClient<$Result.GetResult<Prisma.$SubscriptionPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Subscription that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {SubscriptionFindUniqueOrThrowArgs} args - Arguments to find a Subscription
     * @example
     * // Get one Subscription
     * const subscription = await prisma.subscription.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends SubscriptionFindUniqueOrThrowArgs>(args: SelectSubset<T, SubscriptionFindUniqueOrThrowArgs<ExtArgs>>): Prisma__SubscriptionClient<$Result.GetResult<Prisma.$SubscriptionPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Subscription that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SubscriptionFindFirstArgs} args - Arguments to find a Subscription
     * @example
     * // Get one Subscription
     * const subscription = await prisma.subscription.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends SubscriptionFindFirstArgs>(args?: SelectSubset<T, SubscriptionFindFirstArgs<ExtArgs>>): Prisma__SubscriptionClient<$Result.GetResult<Prisma.$SubscriptionPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Subscription that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SubscriptionFindFirstOrThrowArgs} args - Arguments to find a Subscription
     * @example
     * // Get one Subscription
     * const subscription = await prisma.subscription.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends SubscriptionFindFirstOrThrowArgs>(args?: SelectSubset<T, SubscriptionFindFirstOrThrowArgs<ExtArgs>>): Prisma__SubscriptionClient<$Result.GetResult<Prisma.$SubscriptionPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Subscriptions that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SubscriptionFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Subscriptions
     * const subscriptions = await prisma.subscription.findMany()
     * 
     * // Get first 10 Subscriptions
     * const subscriptions = await prisma.subscription.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const subscriptionWithIdOnly = await prisma.subscription.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends SubscriptionFindManyArgs>(args?: SelectSubset<T, SubscriptionFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SubscriptionPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Subscription.
     * @param {SubscriptionCreateArgs} args - Arguments to create a Subscription.
     * @example
     * // Create one Subscription
     * const Subscription = await prisma.subscription.create({
     *   data: {
     *     // ... data to create a Subscription
     *   }
     * })
     * 
     */
    create<T extends SubscriptionCreateArgs>(args: SelectSubset<T, SubscriptionCreateArgs<ExtArgs>>): Prisma__SubscriptionClient<$Result.GetResult<Prisma.$SubscriptionPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Subscriptions.
     * @param {SubscriptionCreateManyArgs} args - Arguments to create many Subscriptions.
     * @example
     * // Create many Subscriptions
     * const subscription = await prisma.subscription.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends SubscriptionCreateManyArgs>(args?: SelectSubset<T, SubscriptionCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Subscriptions and returns the data saved in the database.
     * @param {SubscriptionCreateManyAndReturnArgs} args - Arguments to create many Subscriptions.
     * @example
     * // Create many Subscriptions
     * const subscription = await prisma.subscription.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Subscriptions and only return the `id`
     * const subscriptionWithIdOnly = await prisma.subscription.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends SubscriptionCreateManyAndReturnArgs>(args?: SelectSubset<T, SubscriptionCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SubscriptionPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Subscription.
     * @param {SubscriptionDeleteArgs} args - Arguments to delete one Subscription.
     * @example
     * // Delete one Subscription
     * const Subscription = await prisma.subscription.delete({
     *   where: {
     *     // ... filter to delete one Subscription
     *   }
     * })
     * 
     */
    delete<T extends SubscriptionDeleteArgs>(args: SelectSubset<T, SubscriptionDeleteArgs<ExtArgs>>): Prisma__SubscriptionClient<$Result.GetResult<Prisma.$SubscriptionPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Subscription.
     * @param {SubscriptionUpdateArgs} args - Arguments to update one Subscription.
     * @example
     * // Update one Subscription
     * const subscription = await prisma.subscription.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends SubscriptionUpdateArgs>(args: SelectSubset<T, SubscriptionUpdateArgs<ExtArgs>>): Prisma__SubscriptionClient<$Result.GetResult<Prisma.$SubscriptionPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Subscriptions.
     * @param {SubscriptionDeleteManyArgs} args - Arguments to filter Subscriptions to delete.
     * @example
     * // Delete a few Subscriptions
     * const { count } = await prisma.subscription.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends SubscriptionDeleteManyArgs>(args?: SelectSubset<T, SubscriptionDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Subscriptions.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SubscriptionUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Subscriptions
     * const subscription = await prisma.subscription.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends SubscriptionUpdateManyArgs>(args: SelectSubset<T, SubscriptionUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Subscriptions and returns the data updated in the database.
     * @param {SubscriptionUpdateManyAndReturnArgs} args - Arguments to update many Subscriptions.
     * @example
     * // Update many Subscriptions
     * const subscription = await prisma.subscription.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Subscriptions and only return the `id`
     * const subscriptionWithIdOnly = await prisma.subscription.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends SubscriptionUpdateManyAndReturnArgs>(args: SelectSubset<T, SubscriptionUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SubscriptionPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Subscription.
     * @param {SubscriptionUpsertArgs} args - Arguments to update or create a Subscription.
     * @example
     * // Update or create a Subscription
     * const subscription = await prisma.subscription.upsert({
     *   create: {
     *     // ... data to create a Subscription
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Subscription we want to update
     *   }
     * })
     */
    upsert<T extends SubscriptionUpsertArgs>(args: SelectSubset<T, SubscriptionUpsertArgs<ExtArgs>>): Prisma__SubscriptionClient<$Result.GetResult<Prisma.$SubscriptionPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Subscriptions.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SubscriptionCountArgs} args - Arguments to filter Subscriptions to count.
     * @example
     * // Count the number of Subscriptions
     * const count = await prisma.subscription.count({
     *   where: {
     *     // ... the filter for the Subscriptions we want to count
     *   }
     * })
    **/
    count<T extends SubscriptionCountArgs>(
      args?: Subset<T, SubscriptionCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], SubscriptionCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Subscription.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SubscriptionAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends SubscriptionAggregateArgs>(args: Subset<T, SubscriptionAggregateArgs>): Prisma.PrismaPromise<GetSubscriptionAggregateType<T>>

    /**
     * Group by Subscription.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SubscriptionGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends SubscriptionGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: SubscriptionGroupByArgs['orderBy'] }
        : { orderBy?: SubscriptionGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, SubscriptionGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetSubscriptionGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Subscription model
   */
  readonly fields: SubscriptionFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Subscription.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__SubscriptionClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    User<T extends Subscription$UserArgs<ExtArgs> = {}>(args?: Subset<T, Subscription$UserArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Subscription model
   */
  interface SubscriptionFieldRefs {
    readonly id: FieldRef<"Subscription", 'String'>
    readonly userId: FieldRef<"Subscription", 'String'>
    readonly createdAt: FieldRef<"Subscription", 'DateTime'>
    readonly plan: FieldRef<"Subscription", 'SUBSCRIPTION_PLAN'>
    readonly updatedAt: FieldRef<"Subscription", 'DateTime'>
    readonly customerId: FieldRef<"Subscription", 'String'>
  }
    

  // Custom InputTypes
  /**
   * Subscription findUnique
   */
  export type SubscriptionFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Subscription
     */
    select?: SubscriptionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Subscription
     */
    omit?: SubscriptionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SubscriptionInclude<ExtArgs> | null
    /**
     * Filter, which Subscription to fetch.
     */
    where: SubscriptionWhereUniqueInput
  }

  /**
   * Subscription findUniqueOrThrow
   */
  export type SubscriptionFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Subscription
     */
    select?: SubscriptionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Subscription
     */
    omit?: SubscriptionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SubscriptionInclude<ExtArgs> | null
    /**
     * Filter, which Subscription to fetch.
     */
    where: SubscriptionWhereUniqueInput
  }

  /**
   * Subscription findFirst
   */
  export type SubscriptionFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Subscription
     */
    select?: SubscriptionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Subscription
     */
    omit?: SubscriptionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SubscriptionInclude<ExtArgs> | null
    /**
     * Filter, which Subscription to fetch.
     */
    where?: SubscriptionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Subscriptions to fetch.
     */
    orderBy?: SubscriptionOrderByWithRelationInput | SubscriptionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Subscriptions.
     */
    cursor?: SubscriptionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Subscriptions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Subscriptions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Subscriptions.
     */
    distinct?: SubscriptionScalarFieldEnum | SubscriptionScalarFieldEnum[]
  }

  /**
   * Subscription findFirstOrThrow
   */
  export type SubscriptionFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Subscription
     */
    select?: SubscriptionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Subscription
     */
    omit?: SubscriptionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SubscriptionInclude<ExtArgs> | null
    /**
     * Filter, which Subscription to fetch.
     */
    where?: SubscriptionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Subscriptions to fetch.
     */
    orderBy?: SubscriptionOrderByWithRelationInput | SubscriptionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Subscriptions.
     */
    cursor?: SubscriptionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Subscriptions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Subscriptions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Subscriptions.
     */
    distinct?: SubscriptionScalarFieldEnum | SubscriptionScalarFieldEnum[]
  }

  /**
   * Subscription findMany
   */
  export type SubscriptionFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Subscription
     */
    select?: SubscriptionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Subscription
     */
    omit?: SubscriptionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SubscriptionInclude<ExtArgs> | null
    /**
     * Filter, which Subscriptions to fetch.
     */
    where?: SubscriptionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Subscriptions to fetch.
     */
    orderBy?: SubscriptionOrderByWithRelationInput | SubscriptionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Subscriptions.
     */
    cursor?: SubscriptionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Subscriptions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Subscriptions.
     */
    skip?: number
    distinct?: SubscriptionScalarFieldEnum | SubscriptionScalarFieldEnum[]
  }

  /**
   * Subscription create
   */
  export type SubscriptionCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Subscription
     */
    select?: SubscriptionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Subscription
     */
    omit?: SubscriptionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SubscriptionInclude<ExtArgs> | null
    /**
     * The data needed to create a Subscription.
     */
    data?: XOR<SubscriptionCreateInput, SubscriptionUncheckedCreateInput>
  }

  /**
   * Subscription createMany
   */
  export type SubscriptionCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Subscriptions.
     */
    data: SubscriptionCreateManyInput | SubscriptionCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Subscription createManyAndReturn
   */
  export type SubscriptionCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Subscription
     */
    select?: SubscriptionSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Subscription
     */
    omit?: SubscriptionOmit<ExtArgs> | null
    /**
     * The data used to create many Subscriptions.
     */
    data: SubscriptionCreateManyInput | SubscriptionCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SubscriptionIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Subscription update
   */
  export type SubscriptionUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Subscription
     */
    select?: SubscriptionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Subscription
     */
    omit?: SubscriptionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SubscriptionInclude<ExtArgs> | null
    /**
     * The data needed to update a Subscription.
     */
    data: XOR<SubscriptionUpdateInput, SubscriptionUncheckedUpdateInput>
    /**
     * Choose, which Subscription to update.
     */
    where: SubscriptionWhereUniqueInput
  }

  /**
   * Subscription updateMany
   */
  export type SubscriptionUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Subscriptions.
     */
    data: XOR<SubscriptionUpdateManyMutationInput, SubscriptionUncheckedUpdateManyInput>
    /**
     * Filter which Subscriptions to update
     */
    where?: SubscriptionWhereInput
    /**
     * Limit how many Subscriptions to update.
     */
    limit?: number
  }

  /**
   * Subscription updateManyAndReturn
   */
  export type SubscriptionUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Subscription
     */
    select?: SubscriptionSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Subscription
     */
    omit?: SubscriptionOmit<ExtArgs> | null
    /**
     * The data used to update Subscriptions.
     */
    data: XOR<SubscriptionUpdateManyMutationInput, SubscriptionUncheckedUpdateManyInput>
    /**
     * Filter which Subscriptions to update
     */
    where?: SubscriptionWhereInput
    /**
     * Limit how many Subscriptions to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SubscriptionIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Subscription upsert
   */
  export type SubscriptionUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Subscription
     */
    select?: SubscriptionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Subscription
     */
    omit?: SubscriptionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SubscriptionInclude<ExtArgs> | null
    /**
     * The filter to search for the Subscription to update in case it exists.
     */
    where: SubscriptionWhereUniqueInput
    /**
     * In case the Subscription found by the `where` argument doesn't exist, create a new Subscription with this data.
     */
    create: XOR<SubscriptionCreateInput, SubscriptionUncheckedCreateInput>
    /**
     * In case the Subscription was found with the provided `where` argument, update it with this data.
     */
    update: XOR<SubscriptionUpdateInput, SubscriptionUncheckedUpdateInput>
  }

  /**
   * Subscription delete
   */
  export type SubscriptionDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Subscription
     */
    select?: SubscriptionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Subscription
     */
    omit?: SubscriptionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SubscriptionInclude<ExtArgs> | null
    /**
     * Filter which Subscription to delete.
     */
    where: SubscriptionWhereUniqueInput
  }

  /**
   * Subscription deleteMany
   */
  export type SubscriptionDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Subscriptions to delete
     */
    where?: SubscriptionWhereInput
    /**
     * Limit how many Subscriptions to delete.
     */
    limit?: number
  }

  /**
   * Subscription.User
   */
  export type Subscription$UserArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    where?: UserWhereInput
  }

  /**
   * Subscription without action
   */
  export type SubscriptionDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Subscription
     */
    select?: SubscriptionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Subscription
     */
    omit?: SubscriptionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SubscriptionInclude<ExtArgs> | null
  }


  /**
   * Model Integrations
   */

  export type AggregateIntegrations = {
    _count: IntegrationsCountAggregateOutputType | null
    _min: IntegrationsMinAggregateOutputType | null
    _max: IntegrationsMaxAggregateOutputType | null
  }

  export type IntegrationsMinAggregateOutputType = {
    id: string | null
    name: $Enums.INTEGRATIONS | null
    createdAt: Date | null
    userId: string | null
    token: string | null
    expiresAt: Date | null
    instagramId: string | null
  }

  export type IntegrationsMaxAggregateOutputType = {
    id: string | null
    name: $Enums.INTEGRATIONS | null
    createdAt: Date | null
    userId: string | null
    token: string | null
    expiresAt: Date | null
    instagramId: string | null
  }

  export type IntegrationsCountAggregateOutputType = {
    id: number
    name: number
    createdAt: number
    userId: number
    token: number
    expiresAt: number
    instagramId: number
    _all: number
  }


  export type IntegrationsMinAggregateInputType = {
    id?: true
    name?: true
    createdAt?: true
    userId?: true
    token?: true
    expiresAt?: true
    instagramId?: true
  }

  export type IntegrationsMaxAggregateInputType = {
    id?: true
    name?: true
    createdAt?: true
    userId?: true
    token?: true
    expiresAt?: true
    instagramId?: true
  }

  export type IntegrationsCountAggregateInputType = {
    id?: true
    name?: true
    createdAt?: true
    userId?: true
    token?: true
    expiresAt?: true
    instagramId?: true
    _all?: true
  }

  export type IntegrationsAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Integrations to aggregate.
     */
    where?: IntegrationsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Integrations to fetch.
     */
    orderBy?: IntegrationsOrderByWithRelationInput | IntegrationsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: IntegrationsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Integrations from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Integrations.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Integrations
    **/
    _count?: true | IntegrationsCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: IntegrationsMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: IntegrationsMaxAggregateInputType
  }

  export type GetIntegrationsAggregateType<T extends IntegrationsAggregateArgs> = {
        [P in keyof T & keyof AggregateIntegrations]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateIntegrations[P]>
      : GetScalarType<T[P], AggregateIntegrations[P]>
  }




  export type IntegrationsGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: IntegrationsWhereInput
    orderBy?: IntegrationsOrderByWithAggregationInput | IntegrationsOrderByWithAggregationInput[]
    by: IntegrationsScalarFieldEnum[] | IntegrationsScalarFieldEnum
    having?: IntegrationsScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: IntegrationsCountAggregateInputType | true
    _min?: IntegrationsMinAggregateInputType
    _max?: IntegrationsMaxAggregateInputType
  }

  export type IntegrationsGroupByOutputType = {
    id: string
    name: $Enums.INTEGRATIONS
    createdAt: Date
    userId: string | null
    token: string
    expiresAt: Date | null
    instagramId: string | null
    _count: IntegrationsCountAggregateOutputType | null
    _min: IntegrationsMinAggregateOutputType | null
    _max: IntegrationsMaxAggregateOutputType | null
  }

  type GetIntegrationsGroupByPayload<T extends IntegrationsGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<IntegrationsGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof IntegrationsGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], IntegrationsGroupByOutputType[P]>
            : GetScalarType<T[P], IntegrationsGroupByOutputType[P]>
        }
      >
    >


  export type IntegrationsSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    createdAt?: boolean
    userId?: boolean
    token?: boolean
    expiresAt?: boolean
    instagramId?: boolean
    User?: boolean | Integrations$UserArgs<ExtArgs>
  }, ExtArgs["result"]["integrations"]>

  export type IntegrationsSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    createdAt?: boolean
    userId?: boolean
    token?: boolean
    expiresAt?: boolean
    instagramId?: boolean
    User?: boolean | Integrations$UserArgs<ExtArgs>
  }, ExtArgs["result"]["integrations"]>

  export type IntegrationsSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    createdAt?: boolean
    userId?: boolean
    token?: boolean
    expiresAt?: boolean
    instagramId?: boolean
    User?: boolean | Integrations$UserArgs<ExtArgs>
  }, ExtArgs["result"]["integrations"]>

  export type IntegrationsSelectScalar = {
    id?: boolean
    name?: boolean
    createdAt?: boolean
    userId?: boolean
    token?: boolean
    expiresAt?: boolean
    instagramId?: boolean
  }

  export type IntegrationsOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "name" | "createdAt" | "userId" | "token" | "expiresAt" | "instagramId", ExtArgs["result"]["integrations"]>
  export type IntegrationsInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    User?: boolean | Integrations$UserArgs<ExtArgs>
  }
  export type IntegrationsIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    User?: boolean | Integrations$UserArgs<ExtArgs>
  }
  export type IntegrationsIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    User?: boolean | Integrations$UserArgs<ExtArgs>
  }

  export type $IntegrationsPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Integrations"
    objects: {
      User: Prisma.$UserPayload<ExtArgs> | null
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      name: $Enums.INTEGRATIONS
      createdAt: Date
      userId: string | null
      token: string
      expiresAt: Date | null
      instagramId: string | null
    }, ExtArgs["result"]["integrations"]>
    composites: {}
  }

  type IntegrationsGetPayload<S extends boolean | null | undefined | IntegrationsDefaultArgs> = $Result.GetResult<Prisma.$IntegrationsPayload, S>

  type IntegrationsCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<IntegrationsFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: IntegrationsCountAggregateInputType | true
    }

  export interface IntegrationsDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Integrations'], meta: { name: 'Integrations' } }
    /**
     * Find zero or one Integrations that matches the filter.
     * @param {IntegrationsFindUniqueArgs} args - Arguments to find a Integrations
     * @example
     * // Get one Integrations
     * const integrations = await prisma.integrations.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends IntegrationsFindUniqueArgs>(args: SelectSubset<T, IntegrationsFindUniqueArgs<ExtArgs>>): Prisma__IntegrationsClient<$Result.GetResult<Prisma.$IntegrationsPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Integrations that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {IntegrationsFindUniqueOrThrowArgs} args - Arguments to find a Integrations
     * @example
     * // Get one Integrations
     * const integrations = await prisma.integrations.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends IntegrationsFindUniqueOrThrowArgs>(args: SelectSubset<T, IntegrationsFindUniqueOrThrowArgs<ExtArgs>>): Prisma__IntegrationsClient<$Result.GetResult<Prisma.$IntegrationsPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Integrations that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {IntegrationsFindFirstArgs} args - Arguments to find a Integrations
     * @example
     * // Get one Integrations
     * const integrations = await prisma.integrations.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends IntegrationsFindFirstArgs>(args?: SelectSubset<T, IntegrationsFindFirstArgs<ExtArgs>>): Prisma__IntegrationsClient<$Result.GetResult<Prisma.$IntegrationsPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Integrations that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {IntegrationsFindFirstOrThrowArgs} args - Arguments to find a Integrations
     * @example
     * // Get one Integrations
     * const integrations = await prisma.integrations.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends IntegrationsFindFirstOrThrowArgs>(args?: SelectSubset<T, IntegrationsFindFirstOrThrowArgs<ExtArgs>>): Prisma__IntegrationsClient<$Result.GetResult<Prisma.$IntegrationsPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Integrations that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {IntegrationsFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Integrations
     * const integrations = await prisma.integrations.findMany()
     * 
     * // Get first 10 Integrations
     * const integrations = await prisma.integrations.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const integrationsWithIdOnly = await prisma.integrations.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends IntegrationsFindManyArgs>(args?: SelectSubset<T, IntegrationsFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$IntegrationsPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Integrations.
     * @param {IntegrationsCreateArgs} args - Arguments to create a Integrations.
     * @example
     * // Create one Integrations
     * const Integrations = await prisma.integrations.create({
     *   data: {
     *     // ... data to create a Integrations
     *   }
     * })
     * 
     */
    create<T extends IntegrationsCreateArgs>(args: SelectSubset<T, IntegrationsCreateArgs<ExtArgs>>): Prisma__IntegrationsClient<$Result.GetResult<Prisma.$IntegrationsPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Integrations.
     * @param {IntegrationsCreateManyArgs} args - Arguments to create many Integrations.
     * @example
     * // Create many Integrations
     * const integrations = await prisma.integrations.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends IntegrationsCreateManyArgs>(args?: SelectSubset<T, IntegrationsCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Integrations and returns the data saved in the database.
     * @param {IntegrationsCreateManyAndReturnArgs} args - Arguments to create many Integrations.
     * @example
     * // Create many Integrations
     * const integrations = await prisma.integrations.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Integrations and only return the `id`
     * const integrationsWithIdOnly = await prisma.integrations.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends IntegrationsCreateManyAndReturnArgs>(args?: SelectSubset<T, IntegrationsCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$IntegrationsPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Integrations.
     * @param {IntegrationsDeleteArgs} args - Arguments to delete one Integrations.
     * @example
     * // Delete one Integrations
     * const Integrations = await prisma.integrations.delete({
     *   where: {
     *     // ... filter to delete one Integrations
     *   }
     * })
     * 
     */
    delete<T extends IntegrationsDeleteArgs>(args: SelectSubset<T, IntegrationsDeleteArgs<ExtArgs>>): Prisma__IntegrationsClient<$Result.GetResult<Prisma.$IntegrationsPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Integrations.
     * @param {IntegrationsUpdateArgs} args - Arguments to update one Integrations.
     * @example
     * // Update one Integrations
     * const integrations = await prisma.integrations.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends IntegrationsUpdateArgs>(args: SelectSubset<T, IntegrationsUpdateArgs<ExtArgs>>): Prisma__IntegrationsClient<$Result.GetResult<Prisma.$IntegrationsPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Integrations.
     * @param {IntegrationsDeleteManyArgs} args - Arguments to filter Integrations to delete.
     * @example
     * // Delete a few Integrations
     * const { count } = await prisma.integrations.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends IntegrationsDeleteManyArgs>(args?: SelectSubset<T, IntegrationsDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Integrations.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {IntegrationsUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Integrations
     * const integrations = await prisma.integrations.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends IntegrationsUpdateManyArgs>(args: SelectSubset<T, IntegrationsUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Integrations and returns the data updated in the database.
     * @param {IntegrationsUpdateManyAndReturnArgs} args - Arguments to update many Integrations.
     * @example
     * // Update many Integrations
     * const integrations = await prisma.integrations.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Integrations and only return the `id`
     * const integrationsWithIdOnly = await prisma.integrations.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends IntegrationsUpdateManyAndReturnArgs>(args: SelectSubset<T, IntegrationsUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$IntegrationsPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Integrations.
     * @param {IntegrationsUpsertArgs} args - Arguments to update or create a Integrations.
     * @example
     * // Update or create a Integrations
     * const integrations = await prisma.integrations.upsert({
     *   create: {
     *     // ... data to create a Integrations
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Integrations we want to update
     *   }
     * })
     */
    upsert<T extends IntegrationsUpsertArgs>(args: SelectSubset<T, IntegrationsUpsertArgs<ExtArgs>>): Prisma__IntegrationsClient<$Result.GetResult<Prisma.$IntegrationsPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Integrations.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {IntegrationsCountArgs} args - Arguments to filter Integrations to count.
     * @example
     * // Count the number of Integrations
     * const count = await prisma.integrations.count({
     *   where: {
     *     // ... the filter for the Integrations we want to count
     *   }
     * })
    **/
    count<T extends IntegrationsCountArgs>(
      args?: Subset<T, IntegrationsCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], IntegrationsCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Integrations.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {IntegrationsAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends IntegrationsAggregateArgs>(args: Subset<T, IntegrationsAggregateArgs>): Prisma.PrismaPromise<GetIntegrationsAggregateType<T>>

    /**
     * Group by Integrations.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {IntegrationsGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends IntegrationsGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: IntegrationsGroupByArgs['orderBy'] }
        : { orderBy?: IntegrationsGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, IntegrationsGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetIntegrationsGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Integrations model
   */
  readonly fields: IntegrationsFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Integrations.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__IntegrationsClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    User<T extends Integrations$UserArgs<ExtArgs> = {}>(args?: Subset<T, Integrations$UserArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Integrations model
   */
  interface IntegrationsFieldRefs {
    readonly id: FieldRef<"Integrations", 'String'>
    readonly name: FieldRef<"Integrations", 'INTEGRATIONS'>
    readonly createdAt: FieldRef<"Integrations", 'DateTime'>
    readonly userId: FieldRef<"Integrations", 'String'>
    readonly token: FieldRef<"Integrations", 'String'>
    readonly expiresAt: FieldRef<"Integrations", 'DateTime'>
    readonly instagramId: FieldRef<"Integrations", 'String'>
  }
    

  // Custom InputTypes
  /**
   * Integrations findUnique
   */
  export type IntegrationsFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Integrations
     */
    select?: IntegrationsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Integrations
     */
    omit?: IntegrationsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: IntegrationsInclude<ExtArgs> | null
    /**
     * Filter, which Integrations to fetch.
     */
    where: IntegrationsWhereUniqueInput
  }

  /**
   * Integrations findUniqueOrThrow
   */
  export type IntegrationsFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Integrations
     */
    select?: IntegrationsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Integrations
     */
    omit?: IntegrationsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: IntegrationsInclude<ExtArgs> | null
    /**
     * Filter, which Integrations to fetch.
     */
    where: IntegrationsWhereUniqueInput
  }

  /**
   * Integrations findFirst
   */
  export type IntegrationsFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Integrations
     */
    select?: IntegrationsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Integrations
     */
    omit?: IntegrationsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: IntegrationsInclude<ExtArgs> | null
    /**
     * Filter, which Integrations to fetch.
     */
    where?: IntegrationsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Integrations to fetch.
     */
    orderBy?: IntegrationsOrderByWithRelationInput | IntegrationsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Integrations.
     */
    cursor?: IntegrationsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Integrations from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Integrations.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Integrations.
     */
    distinct?: IntegrationsScalarFieldEnum | IntegrationsScalarFieldEnum[]
  }

  /**
   * Integrations findFirstOrThrow
   */
  export type IntegrationsFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Integrations
     */
    select?: IntegrationsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Integrations
     */
    omit?: IntegrationsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: IntegrationsInclude<ExtArgs> | null
    /**
     * Filter, which Integrations to fetch.
     */
    where?: IntegrationsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Integrations to fetch.
     */
    orderBy?: IntegrationsOrderByWithRelationInput | IntegrationsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Integrations.
     */
    cursor?: IntegrationsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Integrations from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Integrations.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Integrations.
     */
    distinct?: IntegrationsScalarFieldEnum | IntegrationsScalarFieldEnum[]
  }

  /**
   * Integrations findMany
   */
  export type IntegrationsFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Integrations
     */
    select?: IntegrationsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Integrations
     */
    omit?: IntegrationsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: IntegrationsInclude<ExtArgs> | null
    /**
     * Filter, which Integrations to fetch.
     */
    where?: IntegrationsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Integrations to fetch.
     */
    orderBy?: IntegrationsOrderByWithRelationInput | IntegrationsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Integrations.
     */
    cursor?: IntegrationsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Integrations from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Integrations.
     */
    skip?: number
    distinct?: IntegrationsScalarFieldEnum | IntegrationsScalarFieldEnum[]
  }

  /**
   * Integrations create
   */
  export type IntegrationsCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Integrations
     */
    select?: IntegrationsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Integrations
     */
    omit?: IntegrationsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: IntegrationsInclude<ExtArgs> | null
    /**
     * The data needed to create a Integrations.
     */
    data: XOR<IntegrationsCreateInput, IntegrationsUncheckedCreateInput>
  }

  /**
   * Integrations createMany
   */
  export type IntegrationsCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Integrations.
     */
    data: IntegrationsCreateManyInput | IntegrationsCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Integrations createManyAndReturn
   */
  export type IntegrationsCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Integrations
     */
    select?: IntegrationsSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Integrations
     */
    omit?: IntegrationsOmit<ExtArgs> | null
    /**
     * The data used to create many Integrations.
     */
    data: IntegrationsCreateManyInput | IntegrationsCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: IntegrationsIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Integrations update
   */
  export type IntegrationsUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Integrations
     */
    select?: IntegrationsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Integrations
     */
    omit?: IntegrationsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: IntegrationsInclude<ExtArgs> | null
    /**
     * The data needed to update a Integrations.
     */
    data: XOR<IntegrationsUpdateInput, IntegrationsUncheckedUpdateInput>
    /**
     * Choose, which Integrations to update.
     */
    where: IntegrationsWhereUniqueInput
  }

  /**
   * Integrations updateMany
   */
  export type IntegrationsUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Integrations.
     */
    data: XOR<IntegrationsUpdateManyMutationInput, IntegrationsUncheckedUpdateManyInput>
    /**
     * Filter which Integrations to update
     */
    where?: IntegrationsWhereInput
    /**
     * Limit how many Integrations to update.
     */
    limit?: number
  }

  /**
   * Integrations updateManyAndReturn
   */
  export type IntegrationsUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Integrations
     */
    select?: IntegrationsSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Integrations
     */
    omit?: IntegrationsOmit<ExtArgs> | null
    /**
     * The data used to update Integrations.
     */
    data: XOR<IntegrationsUpdateManyMutationInput, IntegrationsUncheckedUpdateManyInput>
    /**
     * Filter which Integrations to update
     */
    where?: IntegrationsWhereInput
    /**
     * Limit how many Integrations to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: IntegrationsIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Integrations upsert
   */
  export type IntegrationsUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Integrations
     */
    select?: IntegrationsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Integrations
     */
    omit?: IntegrationsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: IntegrationsInclude<ExtArgs> | null
    /**
     * The filter to search for the Integrations to update in case it exists.
     */
    where: IntegrationsWhereUniqueInput
    /**
     * In case the Integrations found by the `where` argument doesn't exist, create a new Integrations with this data.
     */
    create: XOR<IntegrationsCreateInput, IntegrationsUncheckedCreateInput>
    /**
     * In case the Integrations was found with the provided `where` argument, update it with this data.
     */
    update: XOR<IntegrationsUpdateInput, IntegrationsUncheckedUpdateInput>
  }

  /**
   * Integrations delete
   */
  export type IntegrationsDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Integrations
     */
    select?: IntegrationsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Integrations
     */
    omit?: IntegrationsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: IntegrationsInclude<ExtArgs> | null
    /**
     * Filter which Integrations to delete.
     */
    where: IntegrationsWhereUniqueInput
  }

  /**
   * Integrations deleteMany
   */
  export type IntegrationsDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Integrations to delete
     */
    where?: IntegrationsWhereInput
    /**
     * Limit how many Integrations to delete.
     */
    limit?: number
  }

  /**
   * Integrations.User
   */
  export type Integrations$UserArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    where?: UserWhereInput
  }

  /**
   * Integrations without action
   */
  export type IntegrationsDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Integrations
     */
    select?: IntegrationsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Integrations
     */
    omit?: IntegrationsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: IntegrationsInclude<ExtArgs> | null
  }


  /**
   * Model Automation
   */

  export type AggregateAutomation = {
    _count: AutomationCountAggregateOutputType | null
    _min: AutomationMinAggregateOutputType | null
    _max: AutomationMaxAggregateOutputType | null
  }

  export type AutomationMinAggregateOutputType = {
    id: string | null
    name: string | null
    createdAt: Date | null
    active: boolean | null
    userId: string | null
  }

  export type AutomationMaxAggregateOutputType = {
    id: string | null
    name: string | null
    createdAt: Date | null
    active: boolean | null
    userId: string | null
  }

  export type AutomationCountAggregateOutputType = {
    id: number
    name: number
    createdAt: number
    active: number
    userId: number
    _all: number
  }


  export type AutomationMinAggregateInputType = {
    id?: true
    name?: true
    createdAt?: true
    active?: true
    userId?: true
  }

  export type AutomationMaxAggregateInputType = {
    id?: true
    name?: true
    createdAt?: true
    active?: true
    userId?: true
  }

  export type AutomationCountAggregateInputType = {
    id?: true
    name?: true
    createdAt?: true
    active?: true
    userId?: true
    _all?: true
  }

  export type AutomationAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Automation to aggregate.
     */
    where?: AutomationWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Automations to fetch.
     */
    orderBy?: AutomationOrderByWithRelationInput | AutomationOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: AutomationWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Automations from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Automations.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Automations
    **/
    _count?: true | AutomationCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: AutomationMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: AutomationMaxAggregateInputType
  }

  export type GetAutomationAggregateType<T extends AutomationAggregateArgs> = {
        [P in keyof T & keyof AggregateAutomation]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateAutomation[P]>
      : GetScalarType<T[P], AggregateAutomation[P]>
  }




  export type AutomationGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: AutomationWhereInput
    orderBy?: AutomationOrderByWithAggregationInput | AutomationOrderByWithAggregationInput[]
    by: AutomationScalarFieldEnum[] | AutomationScalarFieldEnum
    having?: AutomationScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: AutomationCountAggregateInputType | true
    _min?: AutomationMinAggregateInputType
    _max?: AutomationMaxAggregateInputType
  }

  export type AutomationGroupByOutputType = {
    id: string
    name: string
    createdAt: Date
    active: boolean
    userId: string | null
    _count: AutomationCountAggregateOutputType | null
    _min: AutomationMinAggregateOutputType | null
    _max: AutomationMaxAggregateOutputType | null
  }

  type GetAutomationGroupByPayload<T extends AutomationGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<AutomationGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof AutomationGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], AutomationGroupByOutputType[P]>
            : GetScalarType<T[P], AutomationGroupByOutputType[P]>
        }
      >
    >


  export type AutomationSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    createdAt?: boolean
    active?: boolean
    userId?: boolean
    trigger?: boolean | Automation$triggerArgs<ExtArgs>
    listener?: boolean | Automation$listenerArgs<ExtArgs>
    posts?: boolean | Automation$postsArgs<ExtArgs>
    dms?: boolean | Automation$dmsArgs<ExtArgs>
    User?: boolean | Automation$UserArgs<ExtArgs>
    keywords?: boolean | Automation$keywordsArgs<ExtArgs>
    _count?: boolean | AutomationCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["automation"]>

  export type AutomationSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    createdAt?: boolean
    active?: boolean
    userId?: boolean
    User?: boolean | Automation$UserArgs<ExtArgs>
  }, ExtArgs["result"]["automation"]>

  export type AutomationSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    createdAt?: boolean
    active?: boolean
    userId?: boolean
    User?: boolean | Automation$UserArgs<ExtArgs>
  }, ExtArgs["result"]["automation"]>

  export type AutomationSelectScalar = {
    id?: boolean
    name?: boolean
    createdAt?: boolean
    active?: boolean
    userId?: boolean
  }

  export type AutomationOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "name" | "createdAt" | "active" | "userId", ExtArgs["result"]["automation"]>
  export type AutomationInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    trigger?: boolean | Automation$triggerArgs<ExtArgs>
    listener?: boolean | Automation$listenerArgs<ExtArgs>
    posts?: boolean | Automation$postsArgs<ExtArgs>
    dms?: boolean | Automation$dmsArgs<ExtArgs>
    User?: boolean | Automation$UserArgs<ExtArgs>
    keywords?: boolean | Automation$keywordsArgs<ExtArgs>
    _count?: boolean | AutomationCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type AutomationIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    User?: boolean | Automation$UserArgs<ExtArgs>
  }
  export type AutomationIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    User?: boolean | Automation$UserArgs<ExtArgs>
  }

  export type $AutomationPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Automation"
    objects: {
      trigger: Prisma.$TriggerPayload<ExtArgs>[]
      listener: Prisma.$ListenerPayload<ExtArgs> | null
      posts: Prisma.$PostPayload<ExtArgs>[]
      dms: Prisma.$DmsPayload<ExtArgs>[]
      User: Prisma.$UserPayload<ExtArgs> | null
      keywords: Prisma.$KeywordPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      name: string
      createdAt: Date
      active: boolean
      userId: string | null
    }, ExtArgs["result"]["automation"]>
    composites: {}
  }

  type AutomationGetPayload<S extends boolean | null | undefined | AutomationDefaultArgs> = $Result.GetResult<Prisma.$AutomationPayload, S>

  type AutomationCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<AutomationFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: AutomationCountAggregateInputType | true
    }

  export interface AutomationDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Automation'], meta: { name: 'Automation' } }
    /**
     * Find zero or one Automation that matches the filter.
     * @param {AutomationFindUniqueArgs} args - Arguments to find a Automation
     * @example
     * // Get one Automation
     * const automation = await prisma.automation.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends AutomationFindUniqueArgs>(args: SelectSubset<T, AutomationFindUniqueArgs<ExtArgs>>): Prisma__AutomationClient<$Result.GetResult<Prisma.$AutomationPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Automation that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {AutomationFindUniqueOrThrowArgs} args - Arguments to find a Automation
     * @example
     * // Get one Automation
     * const automation = await prisma.automation.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends AutomationFindUniqueOrThrowArgs>(args: SelectSubset<T, AutomationFindUniqueOrThrowArgs<ExtArgs>>): Prisma__AutomationClient<$Result.GetResult<Prisma.$AutomationPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Automation that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AutomationFindFirstArgs} args - Arguments to find a Automation
     * @example
     * // Get one Automation
     * const automation = await prisma.automation.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends AutomationFindFirstArgs>(args?: SelectSubset<T, AutomationFindFirstArgs<ExtArgs>>): Prisma__AutomationClient<$Result.GetResult<Prisma.$AutomationPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Automation that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AutomationFindFirstOrThrowArgs} args - Arguments to find a Automation
     * @example
     * // Get one Automation
     * const automation = await prisma.automation.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends AutomationFindFirstOrThrowArgs>(args?: SelectSubset<T, AutomationFindFirstOrThrowArgs<ExtArgs>>): Prisma__AutomationClient<$Result.GetResult<Prisma.$AutomationPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Automations that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AutomationFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Automations
     * const automations = await prisma.automation.findMany()
     * 
     * // Get first 10 Automations
     * const automations = await prisma.automation.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const automationWithIdOnly = await prisma.automation.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends AutomationFindManyArgs>(args?: SelectSubset<T, AutomationFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AutomationPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Automation.
     * @param {AutomationCreateArgs} args - Arguments to create a Automation.
     * @example
     * // Create one Automation
     * const Automation = await prisma.automation.create({
     *   data: {
     *     // ... data to create a Automation
     *   }
     * })
     * 
     */
    create<T extends AutomationCreateArgs>(args: SelectSubset<T, AutomationCreateArgs<ExtArgs>>): Prisma__AutomationClient<$Result.GetResult<Prisma.$AutomationPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Automations.
     * @param {AutomationCreateManyArgs} args - Arguments to create many Automations.
     * @example
     * // Create many Automations
     * const automation = await prisma.automation.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends AutomationCreateManyArgs>(args?: SelectSubset<T, AutomationCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Automations and returns the data saved in the database.
     * @param {AutomationCreateManyAndReturnArgs} args - Arguments to create many Automations.
     * @example
     * // Create many Automations
     * const automation = await prisma.automation.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Automations and only return the `id`
     * const automationWithIdOnly = await prisma.automation.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends AutomationCreateManyAndReturnArgs>(args?: SelectSubset<T, AutomationCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AutomationPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Automation.
     * @param {AutomationDeleteArgs} args - Arguments to delete one Automation.
     * @example
     * // Delete one Automation
     * const Automation = await prisma.automation.delete({
     *   where: {
     *     // ... filter to delete one Automation
     *   }
     * })
     * 
     */
    delete<T extends AutomationDeleteArgs>(args: SelectSubset<T, AutomationDeleteArgs<ExtArgs>>): Prisma__AutomationClient<$Result.GetResult<Prisma.$AutomationPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Automation.
     * @param {AutomationUpdateArgs} args - Arguments to update one Automation.
     * @example
     * // Update one Automation
     * const automation = await prisma.automation.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends AutomationUpdateArgs>(args: SelectSubset<T, AutomationUpdateArgs<ExtArgs>>): Prisma__AutomationClient<$Result.GetResult<Prisma.$AutomationPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Automations.
     * @param {AutomationDeleteManyArgs} args - Arguments to filter Automations to delete.
     * @example
     * // Delete a few Automations
     * const { count } = await prisma.automation.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends AutomationDeleteManyArgs>(args?: SelectSubset<T, AutomationDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Automations.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AutomationUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Automations
     * const automation = await prisma.automation.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends AutomationUpdateManyArgs>(args: SelectSubset<T, AutomationUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Automations and returns the data updated in the database.
     * @param {AutomationUpdateManyAndReturnArgs} args - Arguments to update many Automations.
     * @example
     * // Update many Automations
     * const automation = await prisma.automation.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Automations and only return the `id`
     * const automationWithIdOnly = await prisma.automation.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends AutomationUpdateManyAndReturnArgs>(args: SelectSubset<T, AutomationUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AutomationPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Automation.
     * @param {AutomationUpsertArgs} args - Arguments to update or create a Automation.
     * @example
     * // Update or create a Automation
     * const automation = await prisma.automation.upsert({
     *   create: {
     *     // ... data to create a Automation
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Automation we want to update
     *   }
     * })
     */
    upsert<T extends AutomationUpsertArgs>(args: SelectSubset<T, AutomationUpsertArgs<ExtArgs>>): Prisma__AutomationClient<$Result.GetResult<Prisma.$AutomationPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Automations.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AutomationCountArgs} args - Arguments to filter Automations to count.
     * @example
     * // Count the number of Automations
     * const count = await prisma.automation.count({
     *   where: {
     *     // ... the filter for the Automations we want to count
     *   }
     * })
    **/
    count<T extends AutomationCountArgs>(
      args?: Subset<T, AutomationCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], AutomationCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Automation.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AutomationAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends AutomationAggregateArgs>(args: Subset<T, AutomationAggregateArgs>): Prisma.PrismaPromise<GetAutomationAggregateType<T>>

    /**
     * Group by Automation.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AutomationGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends AutomationGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: AutomationGroupByArgs['orderBy'] }
        : { orderBy?: AutomationGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, AutomationGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetAutomationGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Automation model
   */
  readonly fields: AutomationFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Automation.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__AutomationClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    trigger<T extends Automation$triggerArgs<ExtArgs> = {}>(args?: Subset<T, Automation$triggerArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TriggerPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    listener<T extends Automation$listenerArgs<ExtArgs> = {}>(args?: Subset<T, Automation$listenerArgs<ExtArgs>>): Prisma__ListenerClient<$Result.GetResult<Prisma.$ListenerPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    posts<T extends Automation$postsArgs<ExtArgs> = {}>(args?: Subset<T, Automation$postsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PostPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    dms<T extends Automation$dmsArgs<ExtArgs> = {}>(args?: Subset<T, Automation$dmsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$DmsPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    User<T extends Automation$UserArgs<ExtArgs> = {}>(args?: Subset<T, Automation$UserArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    keywords<T extends Automation$keywordsArgs<ExtArgs> = {}>(args?: Subset<T, Automation$keywordsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$KeywordPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Automation model
   */
  interface AutomationFieldRefs {
    readonly id: FieldRef<"Automation", 'String'>
    readonly name: FieldRef<"Automation", 'String'>
    readonly createdAt: FieldRef<"Automation", 'DateTime'>
    readonly active: FieldRef<"Automation", 'Boolean'>
    readonly userId: FieldRef<"Automation", 'String'>
  }
    

  // Custom InputTypes
  /**
   * Automation findUnique
   */
  export type AutomationFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Automation
     */
    select?: AutomationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Automation
     */
    omit?: AutomationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AutomationInclude<ExtArgs> | null
    /**
     * Filter, which Automation to fetch.
     */
    where: AutomationWhereUniqueInput
  }

  /**
   * Automation findUniqueOrThrow
   */
  export type AutomationFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Automation
     */
    select?: AutomationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Automation
     */
    omit?: AutomationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AutomationInclude<ExtArgs> | null
    /**
     * Filter, which Automation to fetch.
     */
    where: AutomationWhereUniqueInput
  }

  /**
   * Automation findFirst
   */
  export type AutomationFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Automation
     */
    select?: AutomationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Automation
     */
    omit?: AutomationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AutomationInclude<ExtArgs> | null
    /**
     * Filter, which Automation to fetch.
     */
    where?: AutomationWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Automations to fetch.
     */
    orderBy?: AutomationOrderByWithRelationInput | AutomationOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Automations.
     */
    cursor?: AutomationWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Automations from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Automations.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Automations.
     */
    distinct?: AutomationScalarFieldEnum | AutomationScalarFieldEnum[]
  }

  /**
   * Automation findFirstOrThrow
   */
  export type AutomationFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Automation
     */
    select?: AutomationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Automation
     */
    omit?: AutomationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AutomationInclude<ExtArgs> | null
    /**
     * Filter, which Automation to fetch.
     */
    where?: AutomationWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Automations to fetch.
     */
    orderBy?: AutomationOrderByWithRelationInput | AutomationOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Automations.
     */
    cursor?: AutomationWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Automations from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Automations.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Automations.
     */
    distinct?: AutomationScalarFieldEnum | AutomationScalarFieldEnum[]
  }

  /**
   * Automation findMany
   */
  export type AutomationFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Automation
     */
    select?: AutomationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Automation
     */
    omit?: AutomationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AutomationInclude<ExtArgs> | null
    /**
     * Filter, which Automations to fetch.
     */
    where?: AutomationWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Automations to fetch.
     */
    orderBy?: AutomationOrderByWithRelationInput | AutomationOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Automations.
     */
    cursor?: AutomationWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Automations from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Automations.
     */
    skip?: number
    distinct?: AutomationScalarFieldEnum | AutomationScalarFieldEnum[]
  }

  /**
   * Automation create
   */
  export type AutomationCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Automation
     */
    select?: AutomationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Automation
     */
    omit?: AutomationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AutomationInclude<ExtArgs> | null
    /**
     * The data needed to create a Automation.
     */
    data?: XOR<AutomationCreateInput, AutomationUncheckedCreateInput>
  }

  /**
   * Automation createMany
   */
  export type AutomationCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Automations.
     */
    data: AutomationCreateManyInput | AutomationCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Automation createManyAndReturn
   */
  export type AutomationCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Automation
     */
    select?: AutomationSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Automation
     */
    omit?: AutomationOmit<ExtArgs> | null
    /**
     * The data used to create many Automations.
     */
    data: AutomationCreateManyInput | AutomationCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AutomationIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Automation update
   */
  export type AutomationUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Automation
     */
    select?: AutomationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Automation
     */
    omit?: AutomationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AutomationInclude<ExtArgs> | null
    /**
     * The data needed to update a Automation.
     */
    data: XOR<AutomationUpdateInput, AutomationUncheckedUpdateInput>
    /**
     * Choose, which Automation to update.
     */
    where: AutomationWhereUniqueInput
  }

  /**
   * Automation updateMany
   */
  export type AutomationUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Automations.
     */
    data: XOR<AutomationUpdateManyMutationInput, AutomationUncheckedUpdateManyInput>
    /**
     * Filter which Automations to update
     */
    where?: AutomationWhereInput
    /**
     * Limit how many Automations to update.
     */
    limit?: number
  }

  /**
   * Automation updateManyAndReturn
   */
  export type AutomationUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Automation
     */
    select?: AutomationSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Automation
     */
    omit?: AutomationOmit<ExtArgs> | null
    /**
     * The data used to update Automations.
     */
    data: XOR<AutomationUpdateManyMutationInput, AutomationUncheckedUpdateManyInput>
    /**
     * Filter which Automations to update
     */
    where?: AutomationWhereInput
    /**
     * Limit how many Automations to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AutomationIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Automation upsert
   */
  export type AutomationUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Automation
     */
    select?: AutomationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Automation
     */
    omit?: AutomationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AutomationInclude<ExtArgs> | null
    /**
     * The filter to search for the Automation to update in case it exists.
     */
    where: AutomationWhereUniqueInput
    /**
     * In case the Automation found by the `where` argument doesn't exist, create a new Automation with this data.
     */
    create: XOR<AutomationCreateInput, AutomationUncheckedCreateInput>
    /**
     * In case the Automation was found with the provided `where` argument, update it with this data.
     */
    update: XOR<AutomationUpdateInput, AutomationUncheckedUpdateInput>
  }

  /**
   * Automation delete
   */
  export type AutomationDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Automation
     */
    select?: AutomationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Automation
     */
    omit?: AutomationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AutomationInclude<ExtArgs> | null
    /**
     * Filter which Automation to delete.
     */
    where: AutomationWhereUniqueInput
  }

  /**
   * Automation deleteMany
   */
  export type AutomationDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Automations to delete
     */
    where?: AutomationWhereInput
    /**
     * Limit how many Automations to delete.
     */
    limit?: number
  }

  /**
   * Automation.trigger
   */
  export type Automation$triggerArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Trigger
     */
    select?: TriggerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Trigger
     */
    omit?: TriggerOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TriggerInclude<ExtArgs> | null
    where?: TriggerWhereInput
    orderBy?: TriggerOrderByWithRelationInput | TriggerOrderByWithRelationInput[]
    cursor?: TriggerWhereUniqueInput
    take?: number
    skip?: number
    distinct?: TriggerScalarFieldEnum | TriggerScalarFieldEnum[]
  }

  /**
   * Automation.listener
   */
  export type Automation$listenerArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Listener
     */
    select?: ListenerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Listener
     */
    omit?: ListenerOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ListenerInclude<ExtArgs> | null
    where?: ListenerWhereInput
  }

  /**
   * Automation.posts
   */
  export type Automation$postsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Post
     */
    select?: PostSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Post
     */
    omit?: PostOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PostInclude<ExtArgs> | null
    where?: PostWhereInput
    orderBy?: PostOrderByWithRelationInput | PostOrderByWithRelationInput[]
    cursor?: PostWhereUniqueInput
    take?: number
    skip?: number
    distinct?: PostScalarFieldEnum | PostScalarFieldEnum[]
  }

  /**
   * Automation.dms
   */
  export type Automation$dmsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Dms
     */
    select?: DmsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Dms
     */
    omit?: DmsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DmsInclude<ExtArgs> | null
    where?: DmsWhereInput
    orderBy?: DmsOrderByWithRelationInput | DmsOrderByWithRelationInput[]
    cursor?: DmsWhereUniqueInput
    take?: number
    skip?: number
    distinct?: DmsScalarFieldEnum | DmsScalarFieldEnum[]
  }

  /**
   * Automation.User
   */
  export type Automation$UserArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    where?: UserWhereInput
  }

  /**
   * Automation.keywords
   */
  export type Automation$keywordsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Keyword
     */
    select?: KeywordSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Keyword
     */
    omit?: KeywordOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: KeywordInclude<ExtArgs> | null
    where?: KeywordWhereInput
    orderBy?: KeywordOrderByWithRelationInput | KeywordOrderByWithRelationInput[]
    cursor?: KeywordWhereUniqueInput
    take?: number
    skip?: number
    distinct?: KeywordScalarFieldEnum | KeywordScalarFieldEnum[]
  }

  /**
   * Automation without action
   */
  export type AutomationDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Automation
     */
    select?: AutomationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Automation
     */
    omit?: AutomationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AutomationInclude<ExtArgs> | null
  }


  /**
   * Model Dms
   */

  export type AggregateDms = {
    _count: DmsCountAggregateOutputType | null
    _min: DmsMinAggregateOutputType | null
    _max: DmsMaxAggregateOutputType | null
  }

  export type DmsMinAggregateOutputType = {
    id: string | null
    automationId: string | null
    createdAt: Date | null
    senderId: string | null
    reciever: string | null
    message: string | null
  }

  export type DmsMaxAggregateOutputType = {
    id: string | null
    automationId: string | null
    createdAt: Date | null
    senderId: string | null
    reciever: string | null
    message: string | null
  }

  export type DmsCountAggregateOutputType = {
    id: number
    automationId: number
    createdAt: number
    senderId: number
    reciever: number
    message: number
    metadata: number
    _all: number
  }


  export type DmsMinAggregateInputType = {
    id?: true
    automationId?: true
    createdAt?: true
    senderId?: true
    reciever?: true
    message?: true
  }

  export type DmsMaxAggregateInputType = {
    id?: true
    automationId?: true
    createdAt?: true
    senderId?: true
    reciever?: true
    message?: true
  }

  export type DmsCountAggregateInputType = {
    id?: true
    automationId?: true
    createdAt?: true
    senderId?: true
    reciever?: true
    message?: true
    metadata?: true
    _all?: true
  }

  export type DmsAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Dms to aggregate.
     */
    where?: DmsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Dms to fetch.
     */
    orderBy?: DmsOrderByWithRelationInput | DmsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: DmsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Dms from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Dms.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Dms
    **/
    _count?: true | DmsCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: DmsMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: DmsMaxAggregateInputType
  }

  export type GetDmsAggregateType<T extends DmsAggregateArgs> = {
        [P in keyof T & keyof AggregateDms]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateDms[P]>
      : GetScalarType<T[P], AggregateDms[P]>
  }




  export type DmsGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: DmsWhereInput
    orderBy?: DmsOrderByWithAggregationInput | DmsOrderByWithAggregationInput[]
    by: DmsScalarFieldEnum[] | DmsScalarFieldEnum
    having?: DmsScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: DmsCountAggregateInputType | true
    _min?: DmsMinAggregateInputType
    _max?: DmsMaxAggregateInputType
  }

  export type DmsGroupByOutputType = {
    id: string
    automationId: string | null
    createdAt: Date
    senderId: string | null
    reciever: string | null
    message: string | null
    metadata: JsonValue | null
    _count: DmsCountAggregateOutputType | null
    _min: DmsMinAggregateOutputType | null
    _max: DmsMaxAggregateOutputType | null
  }

  type GetDmsGroupByPayload<T extends DmsGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<DmsGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof DmsGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], DmsGroupByOutputType[P]>
            : GetScalarType<T[P], DmsGroupByOutputType[P]>
        }
      >
    >


  export type DmsSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    automationId?: boolean
    createdAt?: boolean
    senderId?: boolean
    reciever?: boolean
    message?: boolean
    metadata?: boolean
    Automation?: boolean | Dms$AutomationArgs<ExtArgs>
  }, ExtArgs["result"]["dms"]>

  export type DmsSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    automationId?: boolean
    createdAt?: boolean
    senderId?: boolean
    reciever?: boolean
    message?: boolean
    metadata?: boolean
    Automation?: boolean | Dms$AutomationArgs<ExtArgs>
  }, ExtArgs["result"]["dms"]>

  export type DmsSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    automationId?: boolean
    createdAt?: boolean
    senderId?: boolean
    reciever?: boolean
    message?: boolean
    metadata?: boolean
    Automation?: boolean | Dms$AutomationArgs<ExtArgs>
  }, ExtArgs["result"]["dms"]>

  export type DmsSelectScalar = {
    id?: boolean
    automationId?: boolean
    createdAt?: boolean
    senderId?: boolean
    reciever?: boolean
    message?: boolean
    metadata?: boolean
  }

  export type DmsOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "automationId" | "createdAt" | "senderId" | "reciever" | "message" | "metadata", ExtArgs["result"]["dms"]>
  export type DmsInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    Automation?: boolean | Dms$AutomationArgs<ExtArgs>
  }
  export type DmsIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    Automation?: boolean | Dms$AutomationArgs<ExtArgs>
  }
  export type DmsIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    Automation?: boolean | Dms$AutomationArgs<ExtArgs>
  }

  export type $DmsPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Dms"
    objects: {
      Automation: Prisma.$AutomationPayload<ExtArgs> | null
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      automationId: string | null
      createdAt: Date
      senderId: string | null
      reciever: string | null
      message: string | null
      metadata: Prisma.JsonValue | null
    }, ExtArgs["result"]["dms"]>
    composites: {}
  }

  type DmsGetPayload<S extends boolean | null | undefined | DmsDefaultArgs> = $Result.GetResult<Prisma.$DmsPayload, S>

  type DmsCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<DmsFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: DmsCountAggregateInputType | true
    }

  export interface DmsDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Dms'], meta: { name: 'Dms' } }
    /**
     * Find zero or one Dms that matches the filter.
     * @param {DmsFindUniqueArgs} args - Arguments to find a Dms
     * @example
     * // Get one Dms
     * const dms = await prisma.dms.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends DmsFindUniqueArgs>(args: SelectSubset<T, DmsFindUniqueArgs<ExtArgs>>): Prisma__DmsClient<$Result.GetResult<Prisma.$DmsPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Dms that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {DmsFindUniqueOrThrowArgs} args - Arguments to find a Dms
     * @example
     * // Get one Dms
     * const dms = await prisma.dms.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends DmsFindUniqueOrThrowArgs>(args: SelectSubset<T, DmsFindUniqueOrThrowArgs<ExtArgs>>): Prisma__DmsClient<$Result.GetResult<Prisma.$DmsPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Dms that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DmsFindFirstArgs} args - Arguments to find a Dms
     * @example
     * // Get one Dms
     * const dms = await prisma.dms.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends DmsFindFirstArgs>(args?: SelectSubset<T, DmsFindFirstArgs<ExtArgs>>): Prisma__DmsClient<$Result.GetResult<Prisma.$DmsPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Dms that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DmsFindFirstOrThrowArgs} args - Arguments to find a Dms
     * @example
     * // Get one Dms
     * const dms = await prisma.dms.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends DmsFindFirstOrThrowArgs>(args?: SelectSubset<T, DmsFindFirstOrThrowArgs<ExtArgs>>): Prisma__DmsClient<$Result.GetResult<Prisma.$DmsPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Dms that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DmsFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Dms
     * const dms = await prisma.dms.findMany()
     * 
     * // Get first 10 Dms
     * const dms = await prisma.dms.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const dmsWithIdOnly = await prisma.dms.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends DmsFindManyArgs>(args?: SelectSubset<T, DmsFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$DmsPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Dms.
     * @param {DmsCreateArgs} args - Arguments to create a Dms.
     * @example
     * // Create one Dms
     * const Dms = await prisma.dms.create({
     *   data: {
     *     // ... data to create a Dms
     *   }
     * })
     * 
     */
    create<T extends DmsCreateArgs>(args: SelectSubset<T, DmsCreateArgs<ExtArgs>>): Prisma__DmsClient<$Result.GetResult<Prisma.$DmsPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Dms.
     * @param {DmsCreateManyArgs} args - Arguments to create many Dms.
     * @example
     * // Create many Dms
     * const dms = await prisma.dms.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends DmsCreateManyArgs>(args?: SelectSubset<T, DmsCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Dms and returns the data saved in the database.
     * @param {DmsCreateManyAndReturnArgs} args - Arguments to create many Dms.
     * @example
     * // Create many Dms
     * const dms = await prisma.dms.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Dms and only return the `id`
     * const dmsWithIdOnly = await prisma.dms.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends DmsCreateManyAndReturnArgs>(args?: SelectSubset<T, DmsCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$DmsPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Dms.
     * @param {DmsDeleteArgs} args - Arguments to delete one Dms.
     * @example
     * // Delete one Dms
     * const Dms = await prisma.dms.delete({
     *   where: {
     *     // ... filter to delete one Dms
     *   }
     * })
     * 
     */
    delete<T extends DmsDeleteArgs>(args: SelectSubset<T, DmsDeleteArgs<ExtArgs>>): Prisma__DmsClient<$Result.GetResult<Prisma.$DmsPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Dms.
     * @param {DmsUpdateArgs} args - Arguments to update one Dms.
     * @example
     * // Update one Dms
     * const dms = await prisma.dms.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends DmsUpdateArgs>(args: SelectSubset<T, DmsUpdateArgs<ExtArgs>>): Prisma__DmsClient<$Result.GetResult<Prisma.$DmsPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Dms.
     * @param {DmsDeleteManyArgs} args - Arguments to filter Dms to delete.
     * @example
     * // Delete a few Dms
     * const { count } = await prisma.dms.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends DmsDeleteManyArgs>(args?: SelectSubset<T, DmsDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Dms.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DmsUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Dms
     * const dms = await prisma.dms.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends DmsUpdateManyArgs>(args: SelectSubset<T, DmsUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Dms and returns the data updated in the database.
     * @param {DmsUpdateManyAndReturnArgs} args - Arguments to update many Dms.
     * @example
     * // Update many Dms
     * const dms = await prisma.dms.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Dms and only return the `id`
     * const dmsWithIdOnly = await prisma.dms.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends DmsUpdateManyAndReturnArgs>(args: SelectSubset<T, DmsUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$DmsPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Dms.
     * @param {DmsUpsertArgs} args - Arguments to update or create a Dms.
     * @example
     * // Update or create a Dms
     * const dms = await prisma.dms.upsert({
     *   create: {
     *     // ... data to create a Dms
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Dms we want to update
     *   }
     * })
     */
    upsert<T extends DmsUpsertArgs>(args: SelectSubset<T, DmsUpsertArgs<ExtArgs>>): Prisma__DmsClient<$Result.GetResult<Prisma.$DmsPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Dms.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DmsCountArgs} args - Arguments to filter Dms to count.
     * @example
     * // Count the number of Dms
     * const count = await prisma.dms.count({
     *   where: {
     *     // ... the filter for the Dms we want to count
     *   }
     * })
    **/
    count<T extends DmsCountArgs>(
      args?: Subset<T, DmsCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], DmsCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Dms.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DmsAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends DmsAggregateArgs>(args: Subset<T, DmsAggregateArgs>): Prisma.PrismaPromise<GetDmsAggregateType<T>>

    /**
     * Group by Dms.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DmsGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends DmsGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: DmsGroupByArgs['orderBy'] }
        : { orderBy?: DmsGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, DmsGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetDmsGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Dms model
   */
  readonly fields: DmsFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Dms.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__DmsClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    Automation<T extends Dms$AutomationArgs<ExtArgs> = {}>(args?: Subset<T, Dms$AutomationArgs<ExtArgs>>): Prisma__AutomationClient<$Result.GetResult<Prisma.$AutomationPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Dms model
   */
  interface DmsFieldRefs {
    readonly id: FieldRef<"Dms", 'String'>
    readonly automationId: FieldRef<"Dms", 'String'>
    readonly createdAt: FieldRef<"Dms", 'DateTime'>
    readonly senderId: FieldRef<"Dms", 'String'>
    readonly reciever: FieldRef<"Dms", 'String'>
    readonly message: FieldRef<"Dms", 'String'>
    readonly metadata: FieldRef<"Dms", 'Json'>
  }
    

  // Custom InputTypes
  /**
   * Dms findUnique
   */
  export type DmsFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Dms
     */
    select?: DmsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Dms
     */
    omit?: DmsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DmsInclude<ExtArgs> | null
    /**
     * Filter, which Dms to fetch.
     */
    where: DmsWhereUniqueInput
  }

  /**
   * Dms findUniqueOrThrow
   */
  export type DmsFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Dms
     */
    select?: DmsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Dms
     */
    omit?: DmsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DmsInclude<ExtArgs> | null
    /**
     * Filter, which Dms to fetch.
     */
    where: DmsWhereUniqueInput
  }

  /**
   * Dms findFirst
   */
  export type DmsFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Dms
     */
    select?: DmsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Dms
     */
    omit?: DmsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DmsInclude<ExtArgs> | null
    /**
     * Filter, which Dms to fetch.
     */
    where?: DmsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Dms to fetch.
     */
    orderBy?: DmsOrderByWithRelationInput | DmsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Dms.
     */
    cursor?: DmsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Dms from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Dms.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Dms.
     */
    distinct?: DmsScalarFieldEnum | DmsScalarFieldEnum[]
  }

  /**
   * Dms findFirstOrThrow
   */
  export type DmsFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Dms
     */
    select?: DmsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Dms
     */
    omit?: DmsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DmsInclude<ExtArgs> | null
    /**
     * Filter, which Dms to fetch.
     */
    where?: DmsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Dms to fetch.
     */
    orderBy?: DmsOrderByWithRelationInput | DmsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Dms.
     */
    cursor?: DmsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Dms from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Dms.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Dms.
     */
    distinct?: DmsScalarFieldEnum | DmsScalarFieldEnum[]
  }

  /**
   * Dms findMany
   */
  export type DmsFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Dms
     */
    select?: DmsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Dms
     */
    omit?: DmsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DmsInclude<ExtArgs> | null
    /**
     * Filter, which Dms to fetch.
     */
    where?: DmsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Dms to fetch.
     */
    orderBy?: DmsOrderByWithRelationInput | DmsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Dms.
     */
    cursor?: DmsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Dms from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Dms.
     */
    skip?: number
    distinct?: DmsScalarFieldEnum | DmsScalarFieldEnum[]
  }

  /**
   * Dms create
   */
  export type DmsCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Dms
     */
    select?: DmsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Dms
     */
    omit?: DmsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DmsInclude<ExtArgs> | null
    /**
     * The data needed to create a Dms.
     */
    data?: XOR<DmsCreateInput, DmsUncheckedCreateInput>
  }

  /**
   * Dms createMany
   */
  export type DmsCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Dms.
     */
    data: DmsCreateManyInput | DmsCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Dms createManyAndReturn
   */
  export type DmsCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Dms
     */
    select?: DmsSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Dms
     */
    omit?: DmsOmit<ExtArgs> | null
    /**
     * The data used to create many Dms.
     */
    data: DmsCreateManyInput | DmsCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DmsIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Dms update
   */
  export type DmsUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Dms
     */
    select?: DmsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Dms
     */
    omit?: DmsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DmsInclude<ExtArgs> | null
    /**
     * The data needed to update a Dms.
     */
    data: XOR<DmsUpdateInput, DmsUncheckedUpdateInput>
    /**
     * Choose, which Dms to update.
     */
    where: DmsWhereUniqueInput
  }

  /**
   * Dms updateMany
   */
  export type DmsUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Dms.
     */
    data: XOR<DmsUpdateManyMutationInput, DmsUncheckedUpdateManyInput>
    /**
     * Filter which Dms to update
     */
    where?: DmsWhereInput
    /**
     * Limit how many Dms to update.
     */
    limit?: number
  }

  /**
   * Dms updateManyAndReturn
   */
  export type DmsUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Dms
     */
    select?: DmsSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Dms
     */
    omit?: DmsOmit<ExtArgs> | null
    /**
     * The data used to update Dms.
     */
    data: XOR<DmsUpdateManyMutationInput, DmsUncheckedUpdateManyInput>
    /**
     * Filter which Dms to update
     */
    where?: DmsWhereInput
    /**
     * Limit how many Dms to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DmsIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Dms upsert
   */
  export type DmsUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Dms
     */
    select?: DmsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Dms
     */
    omit?: DmsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DmsInclude<ExtArgs> | null
    /**
     * The filter to search for the Dms to update in case it exists.
     */
    where: DmsWhereUniqueInput
    /**
     * In case the Dms found by the `where` argument doesn't exist, create a new Dms with this data.
     */
    create: XOR<DmsCreateInput, DmsUncheckedCreateInput>
    /**
     * In case the Dms was found with the provided `where` argument, update it with this data.
     */
    update: XOR<DmsUpdateInput, DmsUncheckedUpdateInput>
  }

  /**
   * Dms delete
   */
  export type DmsDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Dms
     */
    select?: DmsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Dms
     */
    omit?: DmsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DmsInclude<ExtArgs> | null
    /**
     * Filter which Dms to delete.
     */
    where: DmsWhereUniqueInput
  }

  /**
   * Dms deleteMany
   */
  export type DmsDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Dms to delete
     */
    where?: DmsWhereInput
    /**
     * Limit how many Dms to delete.
     */
    limit?: number
  }

  /**
   * Dms.Automation
   */
  export type Dms$AutomationArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Automation
     */
    select?: AutomationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Automation
     */
    omit?: AutomationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AutomationInclude<ExtArgs> | null
    where?: AutomationWhereInput
  }

  /**
   * Dms without action
   */
  export type DmsDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Dms
     */
    select?: DmsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Dms
     */
    omit?: DmsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DmsInclude<ExtArgs> | null
  }


  /**
   * Model Post
   */

  export type AggregatePost = {
    _count: PostCountAggregateOutputType | null
    _min: PostMinAggregateOutputType | null
    _max: PostMaxAggregateOutputType | null
  }

  export type PostMinAggregateOutputType = {
    id: string | null
    postid: string | null
    caption: string | null
    media: string | null
    mediaType: $Enums.MEDIATYPE | null
    automationId: string | null
  }

  export type PostMaxAggregateOutputType = {
    id: string | null
    postid: string | null
    caption: string | null
    media: string | null
    mediaType: $Enums.MEDIATYPE | null
    automationId: string | null
  }

  export type PostCountAggregateOutputType = {
    id: number
    postid: number
    caption: number
    media: number
    mediaType: number
    automationId: number
    _all: number
  }


  export type PostMinAggregateInputType = {
    id?: true
    postid?: true
    caption?: true
    media?: true
    mediaType?: true
    automationId?: true
  }

  export type PostMaxAggregateInputType = {
    id?: true
    postid?: true
    caption?: true
    media?: true
    mediaType?: true
    automationId?: true
  }

  export type PostCountAggregateInputType = {
    id?: true
    postid?: true
    caption?: true
    media?: true
    mediaType?: true
    automationId?: true
    _all?: true
  }

  export type PostAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Post to aggregate.
     */
    where?: PostWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Posts to fetch.
     */
    orderBy?: PostOrderByWithRelationInput | PostOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: PostWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Posts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Posts.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Posts
    **/
    _count?: true | PostCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: PostMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: PostMaxAggregateInputType
  }

  export type GetPostAggregateType<T extends PostAggregateArgs> = {
        [P in keyof T & keyof AggregatePost]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregatePost[P]>
      : GetScalarType<T[P], AggregatePost[P]>
  }




  export type PostGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: PostWhereInput
    orderBy?: PostOrderByWithAggregationInput | PostOrderByWithAggregationInput[]
    by: PostScalarFieldEnum[] | PostScalarFieldEnum
    having?: PostScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: PostCountAggregateInputType | true
    _min?: PostMinAggregateInputType
    _max?: PostMaxAggregateInputType
  }

  export type PostGroupByOutputType = {
    id: string
    postid: string
    caption: string | null
    media: string
    mediaType: $Enums.MEDIATYPE
    automationId: string | null
    _count: PostCountAggregateOutputType | null
    _min: PostMinAggregateOutputType | null
    _max: PostMaxAggregateOutputType | null
  }

  type GetPostGroupByPayload<T extends PostGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<PostGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof PostGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], PostGroupByOutputType[P]>
            : GetScalarType<T[P], PostGroupByOutputType[P]>
        }
      >
    >


  export type PostSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    postid?: boolean
    caption?: boolean
    media?: boolean
    mediaType?: boolean
    automationId?: boolean
    Automation?: boolean | Post$AutomationArgs<ExtArgs>
  }, ExtArgs["result"]["post"]>

  export type PostSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    postid?: boolean
    caption?: boolean
    media?: boolean
    mediaType?: boolean
    automationId?: boolean
    Automation?: boolean | Post$AutomationArgs<ExtArgs>
  }, ExtArgs["result"]["post"]>

  export type PostSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    postid?: boolean
    caption?: boolean
    media?: boolean
    mediaType?: boolean
    automationId?: boolean
    Automation?: boolean | Post$AutomationArgs<ExtArgs>
  }, ExtArgs["result"]["post"]>

  export type PostSelectScalar = {
    id?: boolean
    postid?: boolean
    caption?: boolean
    media?: boolean
    mediaType?: boolean
    automationId?: boolean
  }

  export type PostOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "postid" | "caption" | "media" | "mediaType" | "automationId", ExtArgs["result"]["post"]>
  export type PostInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    Automation?: boolean | Post$AutomationArgs<ExtArgs>
  }
  export type PostIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    Automation?: boolean | Post$AutomationArgs<ExtArgs>
  }
  export type PostIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    Automation?: boolean | Post$AutomationArgs<ExtArgs>
  }

  export type $PostPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Post"
    objects: {
      Automation: Prisma.$AutomationPayload<ExtArgs> | null
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      postid: string
      caption: string | null
      media: string
      mediaType: $Enums.MEDIATYPE
      automationId: string | null
    }, ExtArgs["result"]["post"]>
    composites: {}
  }

  type PostGetPayload<S extends boolean | null | undefined | PostDefaultArgs> = $Result.GetResult<Prisma.$PostPayload, S>

  type PostCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<PostFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: PostCountAggregateInputType | true
    }

  export interface PostDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Post'], meta: { name: 'Post' } }
    /**
     * Find zero or one Post that matches the filter.
     * @param {PostFindUniqueArgs} args - Arguments to find a Post
     * @example
     * // Get one Post
     * const post = await prisma.post.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends PostFindUniqueArgs>(args: SelectSubset<T, PostFindUniqueArgs<ExtArgs>>): Prisma__PostClient<$Result.GetResult<Prisma.$PostPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Post that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {PostFindUniqueOrThrowArgs} args - Arguments to find a Post
     * @example
     * // Get one Post
     * const post = await prisma.post.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends PostFindUniqueOrThrowArgs>(args: SelectSubset<T, PostFindUniqueOrThrowArgs<ExtArgs>>): Prisma__PostClient<$Result.GetResult<Prisma.$PostPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Post that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PostFindFirstArgs} args - Arguments to find a Post
     * @example
     * // Get one Post
     * const post = await prisma.post.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends PostFindFirstArgs>(args?: SelectSubset<T, PostFindFirstArgs<ExtArgs>>): Prisma__PostClient<$Result.GetResult<Prisma.$PostPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Post that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PostFindFirstOrThrowArgs} args - Arguments to find a Post
     * @example
     * // Get one Post
     * const post = await prisma.post.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends PostFindFirstOrThrowArgs>(args?: SelectSubset<T, PostFindFirstOrThrowArgs<ExtArgs>>): Prisma__PostClient<$Result.GetResult<Prisma.$PostPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Posts that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PostFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Posts
     * const posts = await prisma.post.findMany()
     * 
     * // Get first 10 Posts
     * const posts = await prisma.post.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const postWithIdOnly = await prisma.post.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends PostFindManyArgs>(args?: SelectSubset<T, PostFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PostPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Post.
     * @param {PostCreateArgs} args - Arguments to create a Post.
     * @example
     * // Create one Post
     * const Post = await prisma.post.create({
     *   data: {
     *     // ... data to create a Post
     *   }
     * })
     * 
     */
    create<T extends PostCreateArgs>(args: SelectSubset<T, PostCreateArgs<ExtArgs>>): Prisma__PostClient<$Result.GetResult<Prisma.$PostPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Posts.
     * @param {PostCreateManyArgs} args - Arguments to create many Posts.
     * @example
     * // Create many Posts
     * const post = await prisma.post.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends PostCreateManyArgs>(args?: SelectSubset<T, PostCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Posts and returns the data saved in the database.
     * @param {PostCreateManyAndReturnArgs} args - Arguments to create many Posts.
     * @example
     * // Create many Posts
     * const post = await prisma.post.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Posts and only return the `id`
     * const postWithIdOnly = await prisma.post.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends PostCreateManyAndReturnArgs>(args?: SelectSubset<T, PostCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PostPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Post.
     * @param {PostDeleteArgs} args - Arguments to delete one Post.
     * @example
     * // Delete one Post
     * const Post = await prisma.post.delete({
     *   where: {
     *     // ... filter to delete one Post
     *   }
     * })
     * 
     */
    delete<T extends PostDeleteArgs>(args: SelectSubset<T, PostDeleteArgs<ExtArgs>>): Prisma__PostClient<$Result.GetResult<Prisma.$PostPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Post.
     * @param {PostUpdateArgs} args - Arguments to update one Post.
     * @example
     * // Update one Post
     * const post = await prisma.post.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends PostUpdateArgs>(args: SelectSubset<T, PostUpdateArgs<ExtArgs>>): Prisma__PostClient<$Result.GetResult<Prisma.$PostPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Posts.
     * @param {PostDeleteManyArgs} args - Arguments to filter Posts to delete.
     * @example
     * // Delete a few Posts
     * const { count } = await prisma.post.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends PostDeleteManyArgs>(args?: SelectSubset<T, PostDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Posts.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PostUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Posts
     * const post = await prisma.post.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends PostUpdateManyArgs>(args: SelectSubset<T, PostUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Posts and returns the data updated in the database.
     * @param {PostUpdateManyAndReturnArgs} args - Arguments to update many Posts.
     * @example
     * // Update many Posts
     * const post = await prisma.post.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Posts and only return the `id`
     * const postWithIdOnly = await prisma.post.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends PostUpdateManyAndReturnArgs>(args: SelectSubset<T, PostUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PostPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Post.
     * @param {PostUpsertArgs} args - Arguments to update or create a Post.
     * @example
     * // Update or create a Post
     * const post = await prisma.post.upsert({
     *   create: {
     *     // ... data to create a Post
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Post we want to update
     *   }
     * })
     */
    upsert<T extends PostUpsertArgs>(args: SelectSubset<T, PostUpsertArgs<ExtArgs>>): Prisma__PostClient<$Result.GetResult<Prisma.$PostPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Posts.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PostCountArgs} args - Arguments to filter Posts to count.
     * @example
     * // Count the number of Posts
     * const count = await prisma.post.count({
     *   where: {
     *     // ... the filter for the Posts we want to count
     *   }
     * })
    **/
    count<T extends PostCountArgs>(
      args?: Subset<T, PostCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], PostCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Post.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PostAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends PostAggregateArgs>(args: Subset<T, PostAggregateArgs>): Prisma.PrismaPromise<GetPostAggregateType<T>>

    /**
     * Group by Post.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PostGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends PostGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: PostGroupByArgs['orderBy'] }
        : { orderBy?: PostGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, PostGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetPostGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Post model
   */
  readonly fields: PostFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Post.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__PostClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    Automation<T extends Post$AutomationArgs<ExtArgs> = {}>(args?: Subset<T, Post$AutomationArgs<ExtArgs>>): Prisma__AutomationClient<$Result.GetResult<Prisma.$AutomationPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Post model
   */
  interface PostFieldRefs {
    readonly id: FieldRef<"Post", 'String'>
    readonly postid: FieldRef<"Post", 'String'>
    readonly caption: FieldRef<"Post", 'String'>
    readonly media: FieldRef<"Post", 'String'>
    readonly mediaType: FieldRef<"Post", 'MEDIATYPE'>
    readonly automationId: FieldRef<"Post", 'String'>
  }
    

  // Custom InputTypes
  /**
   * Post findUnique
   */
  export type PostFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Post
     */
    select?: PostSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Post
     */
    omit?: PostOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PostInclude<ExtArgs> | null
    /**
     * Filter, which Post to fetch.
     */
    where: PostWhereUniqueInput
  }

  /**
   * Post findUniqueOrThrow
   */
  export type PostFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Post
     */
    select?: PostSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Post
     */
    omit?: PostOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PostInclude<ExtArgs> | null
    /**
     * Filter, which Post to fetch.
     */
    where: PostWhereUniqueInput
  }

  /**
   * Post findFirst
   */
  export type PostFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Post
     */
    select?: PostSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Post
     */
    omit?: PostOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PostInclude<ExtArgs> | null
    /**
     * Filter, which Post to fetch.
     */
    where?: PostWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Posts to fetch.
     */
    orderBy?: PostOrderByWithRelationInput | PostOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Posts.
     */
    cursor?: PostWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Posts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Posts.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Posts.
     */
    distinct?: PostScalarFieldEnum | PostScalarFieldEnum[]
  }

  /**
   * Post findFirstOrThrow
   */
  export type PostFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Post
     */
    select?: PostSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Post
     */
    omit?: PostOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PostInclude<ExtArgs> | null
    /**
     * Filter, which Post to fetch.
     */
    where?: PostWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Posts to fetch.
     */
    orderBy?: PostOrderByWithRelationInput | PostOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Posts.
     */
    cursor?: PostWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Posts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Posts.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Posts.
     */
    distinct?: PostScalarFieldEnum | PostScalarFieldEnum[]
  }

  /**
   * Post findMany
   */
  export type PostFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Post
     */
    select?: PostSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Post
     */
    omit?: PostOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PostInclude<ExtArgs> | null
    /**
     * Filter, which Posts to fetch.
     */
    where?: PostWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Posts to fetch.
     */
    orderBy?: PostOrderByWithRelationInput | PostOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Posts.
     */
    cursor?: PostWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Posts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Posts.
     */
    skip?: number
    distinct?: PostScalarFieldEnum | PostScalarFieldEnum[]
  }

  /**
   * Post create
   */
  export type PostCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Post
     */
    select?: PostSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Post
     */
    omit?: PostOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PostInclude<ExtArgs> | null
    /**
     * The data needed to create a Post.
     */
    data: XOR<PostCreateInput, PostUncheckedCreateInput>
  }

  /**
   * Post createMany
   */
  export type PostCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Posts.
     */
    data: PostCreateManyInput | PostCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Post createManyAndReturn
   */
  export type PostCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Post
     */
    select?: PostSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Post
     */
    omit?: PostOmit<ExtArgs> | null
    /**
     * The data used to create many Posts.
     */
    data: PostCreateManyInput | PostCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PostIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Post update
   */
  export type PostUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Post
     */
    select?: PostSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Post
     */
    omit?: PostOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PostInclude<ExtArgs> | null
    /**
     * The data needed to update a Post.
     */
    data: XOR<PostUpdateInput, PostUncheckedUpdateInput>
    /**
     * Choose, which Post to update.
     */
    where: PostWhereUniqueInput
  }

  /**
   * Post updateMany
   */
  export type PostUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Posts.
     */
    data: XOR<PostUpdateManyMutationInput, PostUncheckedUpdateManyInput>
    /**
     * Filter which Posts to update
     */
    where?: PostWhereInput
    /**
     * Limit how many Posts to update.
     */
    limit?: number
  }

  /**
   * Post updateManyAndReturn
   */
  export type PostUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Post
     */
    select?: PostSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Post
     */
    omit?: PostOmit<ExtArgs> | null
    /**
     * The data used to update Posts.
     */
    data: XOR<PostUpdateManyMutationInput, PostUncheckedUpdateManyInput>
    /**
     * Filter which Posts to update
     */
    where?: PostWhereInput
    /**
     * Limit how many Posts to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PostIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Post upsert
   */
  export type PostUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Post
     */
    select?: PostSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Post
     */
    omit?: PostOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PostInclude<ExtArgs> | null
    /**
     * The filter to search for the Post to update in case it exists.
     */
    where: PostWhereUniqueInput
    /**
     * In case the Post found by the `where` argument doesn't exist, create a new Post with this data.
     */
    create: XOR<PostCreateInput, PostUncheckedCreateInput>
    /**
     * In case the Post was found with the provided `where` argument, update it with this data.
     */
    update: XOR<PostUpdateInput, PostUncheckedUpdateInput>
  }

  /**
   * Post delete
   */
  export type PostDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Post
     */
    select?: PostSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Post
     */
    omit?: PostOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PostInclude<ExtArgs> | null
    /**
     * Filter which Post to delete.
     */
    where: PostWhereUniqueInput
  }

  /**
   * Post deleteMany
   */
  export type PostDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Posts to delete
     */
    where?: PostWhereInput
    /**
     * Limit how many Posts to delete.
     */
    limit?: number
  }

  /**
   * Post.Automation
   */
  export type Post$AutomationArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Automation
     */
    select?: AutomationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Automation
     */
    omit?: AutomationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AutomationInclude<ExtArgs> | null
    where?: AutomationWhereInput
  }

  /**
   * Post without action
   */
  export type PostDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Post
     */
    select?: PostSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Post
     */
    omit?: PostOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PostInclude<ExtArgs> | null
  }


  /**
   * Model Listener
   */

  export type AggregateListener = {
    _count: ListenerCountAggregateOutputType | null
    _avg: ListenerAvgAggregateOutputType | null
    _sum: ListenerSumAggregateOutputType | null
    _min: ListenerMinAggregateOutputType | null
    _max: ListenerMaxAggregateOutputType | null
  }

  export type ListenerAvgAggregateOutputType = {
    dmCount: number | null
    commentCount: number | null
  }

  export type ListenerSumAggregateOutputType = {
    dmCount: number | null
    commentCount: number | null
  }

  export type ListenerMinAggregateOutputType = {
    id: string | null
    automationId: string | null
    listener: $Enums.LISTENERS | null
    prompt: string | null
    commentReply: string | null
    dmCount: number | null
    commentCount: number | null
  }

  export type ListenerMaxAggregateOutputType = {
    id: string | null
    automationId: string | null
    listener: $Enums.LISTENERS | null
    prompt: string | null
    commentReply: string | null
    dmCount: number | null
    commentCount: number | null
  }

  export type ListenerCountAggregateOutputType = {
    id: number
    automationId: number
    listener: number
    prompt: number
    commentReply: number
    dmCount: number
    commentCount: number
    _all: number
  }


  export type ListenerAvgAggregateInputType = {
    dmCount?: true
    commentCount?: true
  }

  export type ListenerSumAggregateInputType = {
    dmCount?: true
    commentCount?: true
  }

  export type ListenerMinAggregateInputType = {
    id?: true
    automationId?: true
    listener?: true
    prompt?: true
    commentReply?: true
    dmCount?: true
    commentCount?: true
  }

  export type ListenerMaxAggregateInputType = {
    id?: true
    automationId?: true
    listener?: true
    prompt?: true
    commentReply?: true
    dmCount?: true
    commentCount?: true
  }

  export type ListenerCountAggregateInputType = {
    id?: true
    automationId?: true
    listener?: true
    prompt?: true
    commentReply?: true
    dmCount?: true
    commentCount?: true
    _all?: true
  }

  export type ListenerAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Listener to aggregate.
     */
    where?: ListenerWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Listeners to fetch.
     */
    orderBy?: ListenerOrderByWithRelationInput | ListenerOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ListenerWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Listeners from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Listeners.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Listeners
    **/
    _count?: true | ListenerCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: ListenerAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: ListenerSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ListenerMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ListenerMaxAggregateInputType
  }

  export type GetListenerAggregateType<T extends ListenerAggregateArgs> = {
        [P in keyof T & keyof AggregateListener]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateListener[P]>
      : GetScalarType<T[P], AggregateListener[P]>
  }




  export type ListenerGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ListenerWhereInput
    orderBy?: ListenerOrderByWithAggregationInput | ListenerOrderByWithAggregationInput[]
    by: ListenerScalarFieldEnum[] | ListenerScalarFieldEnum
    having?: ListenerScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ListenerCountAggregateInputType | true
    _avg?: ListenerAvgAggregateInputType
    _sum?: ListenerSumAggregateInputType
    _min?: ListenerMinAggregateInputType
    _max?: ListenerMaxAggregateInputType
  }

  export type ListenerGroupByOutputType = {
    id: string
    automationId: string
    listener: $Enums.LISTENERS
    prompt: string
    commentReply: string | null
    dmCount: number
    commentCount: number
    _count: ListenerCountAggregateOutputType | null
    _avg: ListenerAvgAggregateOutputType | null
    _sum: ListenerSumAggregateOutputType | null
    _min: ListenerMinAggregateOutputType | null
    _max: ListenerMaxAggregateOutputType | null
  }

  type GetListenerGroupByPayload<T extends ListenerGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ListenerGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ListenerGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ListenerGroupByOutputType[P]>
            : GetScalarType<T[P], ListenerGroupByOutputType[P]>
        }
      >
    >


  export type ListenerSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    automationId?: boolean
    listener?: boolean
    prompt?: boolean
    commentReply?: boolean
    dmCount?: boolean
    commentCount?: boolean
    Automation?: boolean | AutomationDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["listener"]>

  export type ListenerSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    automationId?: boolean
    listener?: boolean
    prompt?: boolean
    commentReply?: boolean
    dmCount?: boolean
    commentCount?: boolean
    Automation?: boolean | AutomationDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["listener"]>

  export type ListenerSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    automationId?: boolean
    listener?: boolean
    prompt?: boolean
    commentReply?: boolean
    dmCount?: boolean
    commentCount?: boolean
    Automation?: boolean | AutomationDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["listener"]>

  export type ListenerSelectScalar = {
    id?: boolean
    automationId?: boolean
    listener?: boolean
    prompt?: boolean
    commentReply?: boolean
    dmCount?: boolean
    commentCount?: boolean
  }

  export type ListenerOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "automationId" | "listener" | "prompt" | "commentReply" | "dmCount" | "commentCount", ExtArgs["result"]["listener"]>
  export type ListenerInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    Automation?: boolean | AutomationDefaultArgs<ExtArgs>
  }
  export type ListenerIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    Automation?: boolean | AutomationDefaultArgs<ExtArgs>
  }
  export type ListenerIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    Automation?: boolean | AutomationDefaultArgs<ExtArgs>
  }

  export type $ListenerPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Listener"
    objects: {
      Automation: Prisma.$AutomationPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      automationId: string
      listener: $Enums.LISTENERS
      prompt: string
      commentReply: string | null
      dmCount: number
      commentCount: number
    }, ExtArgs["result"]["listener"]>
    composites: {}
  }

  type ListenerGetPayload<S extends boolean | null | undefined | ListenerDefaultArgs> = $Result.GetResult<Prisma.$ListenerPayload, S>

  type ListenerCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<ListenerFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: ListenerCountAggregateInputType | true
    }

  export interface ListenerDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Listener'], meta: { name: 'Listener' } }
    /**
     * Find zero or one Listener that matches the filter.
     * @param {ListenerFindUniqueArgs} args - Arguments to find a Listener
     * @example
     * // Get one Listener
     * const listener = await prisma.listener.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ListenerFindUniqueArgs>(args: SelectSubset<T, ListenerFindUniqueArgs<ExtArgs>>): Prisma__ListenerClient<$Result.GetResult<Prisma.$ListenerPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Listener that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {ListenerFindUniqueOrThrowArgs} args - Arguments to find a Listener
     * @example
     * // Get one Listener
     * const listener = await prisma.listener.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ListenerFindUniqueOrThrowArgs>(args: SelectSubset<T, ListenerFindUniqueOrThrowArgs<ExtArgs>>): Prisma__ListenerClient<$Result.GetResult<Prisma.$ListenerPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Listener that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ListenerFindFirstArgs} args - Arguments to find a Listener
     * @example
     * // Get one Listener
     * const listener = await prisma.listener.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ListenerFindFirstArgs>(args?: SelectSubset<T, ListenerFindFirstArgs<ExtArgs>>): Prisma__ListenerClient<$Result.GetResult<Prisma.$ListenerPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Listener that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ListenerFindFirstOrThrowArgs} args - Arguments to find a Listener
     * @example
     * // Get one Listener
     * const listener = await prisma.listener.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ListenerFindFirstOrThrowArgs>(args?: SelectSubset<T, ListenerFindFirstOrThrowArgs<ExtArgs>>): Prisma__ListenerClient<$Result.GetResult<Prisma.$ListenerPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Listeners that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ListenerFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Listeners
     * const listeners = await prisma.listener.findMany()
     * 
     * // Get first 10 Listeners
     * const listeners = await prisma.listener.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const listenerWithIdOnly = await prisma.listener.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends ListenerFindManyArgs>(args?: SelectSubset<T, ListenerFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ListenerPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Listener.
     * @param {ListenerCreateArgs} args - Arguments to create a Listener.
     * @example
     * // Create one Listener
     * const Listener = await prisma.listener.create({
     *   data: {
     *     // ... data to create a Listener
     *   }
     * })
     * 
     */
    create<T extends ListenerCreateArgs>(args: SelectSubset<T, ListenerCreateArgs<ExtArgs>>): Prisma__ListenerClient<$Result.GetResult<Prisma.$ListenerPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Listeners.
     * @param {ListenerCreateManyArgs} args - Arguments to create many Listeners.
     * @example
     * // Create many Listeners
     * const listener = await prisma.listener.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends ListenerCreateManyArgs>(args?: SelectSubset<T, ListenerCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Listeners and returns the data saved in the database.
     * @param {ListenerCreateManyAndReturnArgs} args - Arguments to create many Listeners.
     * @example
     * // Create many Listeners
     * const listener = await prisma.listener.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Listeners and only return the `id`
     * const listenerWithIdOnly = await prisma.listener.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends ListenerCreateManyAndReturnArgs>(args?: SelectSubset<T, ListenerCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ListenerPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Listener.
     * @param {ListenerDeleteArgs} args - Arguments to delete one Listener.
     * @example
     * // Delete one Listener
     * const Listener = await prisma.listener.delete({
     *   where: {
     *     // ... filter to delete one Listener
     *   }
     * })
     * 
     */
    delete<T extends ListenerDeleteArgs>(args: SelectSubset<T, ListenerDeleteArgs<ExtArgs>>): Prisma__ListenerClient<$Result.GetResult<Prisma.$ListenerPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Listener.
     * @param {ListenerUpdateArgs} args - Arguments to update one Listener.
     * @example
     * // Update one Listener
     * const listener = await prisma.listener.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends ListenerUpdateArgs>(args: SelectSubset<T, ListenerUpdateArgs<ExtArgs>>): Prisma__ListenerClient<$Result.GetResult<Prisma.$ListenerPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Listeners.
     * @param {ListenerDeleteManyArgs} args - Arguments to filter Listeners to delete.
     * @example
     * // Delete a few Listeners
     * const { count } = await prisma.listener.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends ListenerDeleteManyArgs>(args?: SelectSubset<T, ListenerDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Listeners.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ListenerUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Listeners
     * const listener = await prisma.listener.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends ListenerUpdateManyArgs>(args: SelectSubset<T, ListenerUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Listeners and returns the data updated in the database.
     * @param {ListenerUpdateManyAndReturnArgs} args - Arguments to update many Listeners.
     * @example
     * // Update many Listeners
     * const listener = await prisma.listener.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Listeners and only return the `id`
     * const listenerWithIdOnly = await prisma.listener.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends ListenerUpdateManyAndReturnArgs>(args: SelectSubset<T, ListenerUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ListenerPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Listener.
     * @param {ListenerUpsertArgs} args - Arguments to update or create a Listener.
     * @example
     * // Update or create a Listener
     * const listener = await prisma.listener.upsert({
     *   create: {
     *     // ... data to create a Listener
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Listener we want to update
     *   }
     * })
     */
    upsert<T extends ListenerUpsertArgs>(args: SelectSubset<T, ListenerUpsertArgs<ExtArgs>>): Prisma__ListenerClient<$Result.GetResult<Prisma.$ListenerPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Listeners.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ListenerCountArgs} args - Arguments to filter Listeners to count.
     * @example
     * // Count the number of Listeners
     * const count = await prisma.listener.count({
     *   where: {
     *     // ... the filter for the Listeners we want to count
     *   }
     * })
    **/
    count<T extends ListenerCountArgs>(
      args?: Subset<T, ListenerCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ListenerCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Listener.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ListenerAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends ListenerAggregateArgs>(args: Subset<T, ListenerAggregateArgs>): Prisma.PrismaPromise<GetListenerAggregateType<T>>

    /**
     * Group by Listener.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ListenerGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends ListenerGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ListenerGroupByArgs['orderBy'] }
        : { orderBy?: ListenerGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, ListenerGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetListenerGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Listener model
   */
  readonly fields: ListenerFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Listener.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ListenerClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    Automation<T extends AutomationDefaultArgs<ExtArgs> = {}>(args?: Subset<T, AutomationDefaultArgs<ExtArgs>>): Prisma__AutomationClient<$Result.GetResult<Prisma.$AutomationPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Listener model
   */
  interface ListenerFieldRefs {
    readonly id: FieldRef<"Listener", 'String'>
    readonly automationId: FieldRef<"Listener", 'String'>
    readonly listener: FieldRef<"Listener", 'LISTENERS'>
    readonly prompt: FieldRef<"Listener", 'String'>
    readonly commentReply: FieldRef<"Listener", 'String'>
    readonly dmCount: FieldRef<"Listener", 'Int'>
    readonly commentCount: FieldRef<"Listener", 'Int'>
  }
    

  // Custom InputTypes
  /**
   * Listener findUnique
   */
  export type ListenerFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Listener
     */
    select?: ListenerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Listener
     */
    omit?: ListenerOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ListenerInclude<ExtArgs> | null
    /**
     * Filter, which Listener to fetch.
     */
    where: ListenerWhereUniqueInput
  }

  /**
   * Listener findUniqueOrThrow
   */
  export type ListenerFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Listener
     */
    select?: ListenerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Listener
     */
    omit?: ListenerOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ListenerInclude<ExtArgs> | null
    /**
     * Filter, which Listener to fetch.
     */
    where: ListenerWhereUniqueInput
  }

  /**
   * Listener findFirst
   */
  export type ListenerFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Listener
     */
    select?: ListenerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Listener
     */
    omit?: ListenerOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ListenerInclude<ExtArgs> | null
    /**
     * Filter, which Listener to fetch.
     */
    where?: ListenerWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Listeners to fetch.
     */
    orderBy?: ListenerOrderByWithRelationInput | ListenerOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Listeners.
     */
    cursor?: ListenerWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Listeners from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Listeners.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Listeners.
     */
    distinct?: ListenerScalarFieldEnum | ListenerScalarFieldEnum[]
  }

  /**
   * Listener findFirstOrThrow
   */
  export type ListenerFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Listener
     */
    select?: ListenerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Listener
     */
    omit?: ListenerOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ListenerInclude<ExtArgs> | null
    /**
     * Filter, which Listener to fetch.
     */
    where?: ListenerWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Listeners to fetch.
     */
    orderBy?: ListenerOrderByWithRelationInput | ListenerOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Listeners.
     */
    cursor?: ListenerWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Listeners from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Listeners.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Listeners.
     */
    distinct?: ListenerScalarFieldEnum | ListenerScalarFieldEnum[]
  }

  /**
   * Listener findMany
   */
  export type ListenerFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Listener
     */
    select?: ListenerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Listener
     */
    omit?: ListenerOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ListenerInclude<ExtArgs> | null
    /**
     * Filter, which Listeners to fetch.
     */
    where?: ListenerWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Listeners to fetch.
     */
    orderBy?: ListenerOrderByWithRelationInput | ListenerOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Listeners.
     */
    cursor?: ListenerWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Listeners from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Listeners.
     */
    skip?: number
    distinct?: ListenerScalarFieldEnum | ListenerScalarFieldEnum[]
  }

  /**
   * Listener create
   */
  export type ListenerCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Listener
     */
    select?: ListenerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Listener
     */
    omit?: ListenerOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ListenerInclude<ExtArgs> | null
    /**
     * The data needed to create a Listener.
     */
    data: XOR<ListenerCreateInput, ListenerUncheckedCreateInput>
  }

  /**
   * Listener createMany
   */
  export type ListenerCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Listeners.
     */
    data: ListenerCreateManyInput | ListenerCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Listener createManyAndReturn
   */
  export type ListenerCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Listener
     */
    select?: ListenerSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Listener
     */
    omit?: ListenerOmit<ExtArgs> | null
    /**
     * The data used to create many Listeners.
     */
    data: ListenerCreateManyInput | ListenerCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ListenerIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Listener update
   */
  export type ListenerUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Listener
     */
    select?: ListenerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Listener
     */
    omit?: ListenerOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ListenerInclude<ExtArgs> | null
    /**
     * The data needed to update a Listener.
     */
    data: XOR<ListenerUpdateInput, ListenerUncheckedUpdateInput>
    /**
     * Choose, which Listener to update.
     */
    where: ListenerWhereUniqueInput
  }

  /**
   * Listener updateMany
   */
  export type ListenerUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Listeners.
     */
    data: XOR<ListenerUpdateManyMutationInput, ListenerUncheckedUpdateManyInput>
    /**
     * Filter which Listeners to update
     */
    where?: ListenerWhereInput
    /**
     * Limit how many Listeners to update.
     */
    limit?: number
  }

  /**
   * Listener updateManyAndReturn
   */
  export type ListenerUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Listener
     */
    select?: ListenerSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Listener
     */
    omit?: ListenerOmit<ExtArgs> | null
    /**
     * The data used to update Listeners.
     */
    data: XOR<ListenerUpdateManyMutationInput, ListenerUncheckedUpdateManyInput>
    /**
     * Filter which Listeners to update
     */
    where?: ListenerWhereInput
    /**
     * Limit how many Listeners to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ListenerIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Listener upsert
   */
  export type ListenerUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Listener
     */
    select?: ListenerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Listener
     */
    omit?: ListenerOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ListenerInclude<ExtArgs> | null
    /**
     * The filter to search for the Listener to update in case it exists.
     */
    where: ListenerWhereUniqueInput
    /**
     * In case the Listener found by the `where` argument doesn't exist, create a new Listener with this data.
     */
    create: XOR<ListenerCreateInput, ListenerUncheckedCreateInput>
    /**
     * In case the Listener was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ListenerUpdateInput, ListenerUncheckedUpdateInput>
  }

  /**
   * Listener delete
   */
  export type ListenerDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Listener
     */
    select?: ListenerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Listener
     */
    omit?: ListenerOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ListenerInclude<ExtArgs> | null
    /**
     * Filter which Listener to delete.
     */
    where: ListenerWhereUniqueInput
  }

  /**
   * Listener deleteMany
   */
  export type ListenerDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Listeners to delete
     */
    where?: ListenerWhereInput
    /**
     * Limit how many Listeners to delete.
     */
    limit?: number
  }

  /**
   * Listener without action
   */
  export type ListenerDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Listener
     */
    select?: ListenerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Listener
     */
    omit?: ListenerOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ListenerInclude<ExtArgs> | null
  }


  /**
   * Model Trigger
   */

  export type AggregateTrigger = {
    _count: TriggerCountAggregateOutputType | null
    _min: TriggerMinAggregateOutputType | null
    _max: TriggerMaxAggregateOutputType | null
  }

  export type TriggerMinAggregateOutputType = {
    id: string | null
    type: string | null
    automationId: string | null
  }

  export type TriggerMaxAggregateOutputType = {
    id: string | null
    type: string | null
    automationId: string | null
  }

  export type TriggerCountAggregateOutputType = {
    id: number
    type: number
    automationId: number
    _all: number
  }


  export type TriggerMinAggregateInputType = {
    id?: true
    type?: true
    automationId?: true
  }

  export type TriggerMaxAggregateInputType = {
    id?: true
    type?: true
    automationId?: true
  }

  export type TriggerCountAggregateInputType = {
    id?: true
    type?: true
    automationId?: true
    _all?: true
  }

  export type TriggerAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Trigger to aggregate.
     */
    where?: TriggerWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Triggers to fetch.
     */
    orderBy?: TriggerOrderByWithRelationInput | TriggerOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: TriggerWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Triggers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Triggers.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Triggers
    **/
    _count?: true | TriggerCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: TriggerMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: TriggerMaxAggregateInputType
  }

  export type GetTriggerAggregateType<T extends TriggerAggregateArgs> = {
        [P in keyof T & keyof AggregateTrigger]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateTrigger[P]>
      : GetScalarType<T[P], AggregateTrigger[P]>
  }




  export type TriggerGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: TriggerWhereInput
    orderBy?: TriggerOrderByWithAggregationInput | TriggerOrderByWithAggregationInput[]
    by: TriggerScalarFieldEnum[] | TriggerScalarFieldEnum
    having?: TriggerScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: TriggerCountAggregateInputType | true
    _min?: TriggerMinAggregateInputType
    _max?: TriggerMaxAggregateInputType
  }

  export type TriggerGroupByOutputType = {
    id: string
    type: string
    automationId: string | null
    _count: TriggerCountAggregateOutputType | null
    _min: TriggerMinAggregateOutputType | null
    _max: TriggerMaxAggregateOutputType | null
  }

  type GetTriggerGroupByPayload<T extends TriggerGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<TriggerGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof TriggerGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], TriggerGroupByOutputType[P]>
            : GetScalarType<T[P], TriggerGroupByOutputType[P]>
        }
      >
    >


  export type TriggerSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    type?: boolean
    automationId?: boolean
    Automation?: boolean | Trigger$AutomationArgs<ExtArgs>
  }, ExtArgs["result"]["trigger"]>

  export type TriggerSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    type?: boolean
    automationId?: boolean
    Automation?: boolean | Trigger$AutomationArgs<ExtArgs>
  }, ExtArgs["result"]["trigger"]>

  export type TriggerSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    type?: boolean
    automationId?: boolean
    Automation?: boolean | Trigger$AutomationArgs<ExtArgs>
  }, ExtArgs["result"]["trigger"]>

  export type TriggerSelectScalar = {
    id?: boolean
    type?: boolean
    automationId?: boolean
  }

  export type TriggerOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "type" | "automationId", ExtArgs["result"]["trigger"]>
  export type TriggerInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    Automation?: boolean | Trigger$AutomationArgs<ExtArgs>
  }
  export type TriggerIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    Automation?: boolean | Trigger$AutomationArgs<ExtArgs>
  }
  export type TriggerIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    Automation?: boolean | Trigger$AutomationArgs<ExtArgs>
  }

  export type $TriggerPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Trigger"
    objects: {
      Automation: Prisma.$AutomationPayload<ExtArgs> | null
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      type: string
      automationId: string | null
    }, ExtArgs["result"]["trigger"]>
    composites: {}
  }

  type TriggerGetPayload<S extends boolean | null | undefined | TriggerDefaultArgs> = $Result.GetResult<Prisma.$TriggerPayload, S>

  type TriggerCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<TriggerFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: TriggerCountAggregateInputType | true
    }

  export interface TriggerDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Trigger'], meta: { name: 'Trigger' } }
    /**
     * Find zero or one Trigger that matches the filter.
     * @param {TriggerFindUniqueArgs} args - Arguments to find a Trigger
     * @example
     * // Get one Trigger
     * const trigger = await prisma.trigger.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends TriggerFindUniqueArgs>(args: SelectSubset<T, TriggerFindUniqueArgs<ExtArgs>>): Prisma__TriggerClient<$Result.GetResult<Prisma.$TriggerPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Trigger that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {TriggerFindUniqueOrThrowArgs} args - Arguments to find a Trigger
     * @example
     * // Get one Trigger
     * const trigger = await prisma.trigger.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends TriggerFindUniqueOrThrowArgs>(args: SelectSubset<T, TriggerFindUniqueOrThrowArgs<ExtArgs>>): Prisma__TriggerClient<$Result.GetResult<Prisma.$TriggerPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Trigger that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TriggerFindFirstArgs} args - Arguments to find a Trigger
     * @example
     * // Get one Trigger
     * const trigger = await prisma.trigger.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends TriggerFindFirstArgs>(args?: SelectSubset<T, TriggerFindFirstArgs<ExtArgs>>): Prisma__TriggerClient<$Result.GetResult<Prisma.$TriggerPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Trigger that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TriggerFindFirstOrThrowArgs} args - Arguments to find a Trigger
     * @example
     * // Get one Trigger
     * const trigger = await prisma.trigger.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends TriggerFindFirstOrThrowArgs>(args?: SelectSubset<T, TriggerFindFirstOrThrowArgs<ExtArgs>>): Prisma__TriggerClient<$Result.GetResult<Prisma.$TriggerPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Triggers that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TriggerFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Triggers
     * const triggers = await prisma.trigger.findMany()
     * 
     * // Get first 10 Triggers
     * const triggers = await prisma.trigger.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const triggerWithIdOnly = await prisma.trigger.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends TriggerFindManyArgs>(args?: SelectSubset<T, TriggerFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TriggerPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Trigger.
     * @param {TriggerCreateArgs} args - Arguments to create a Trigger.
     * @example
     * // Create one Trigger
     * const Trigger = await prisma.trigger.create({
     *   data: {
     *     // ... data to create a Trigger
     *   }
     * })
     * 
     */
    create<T extends TriggerCreateArgs>(args: SelectSubset<T, TriggerCreateArgs<ExtArgs>>): Prisma__TriggerClient<$Result.GetResult<Prisma.$TriggerPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Triggers.
     * @param {TriggerCreateManyArgs} args - Arguments to create many Triggers.
     * @example
     * // Create many Triggers
     * const trigger = await prisma.trigger.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends TriggerCreateManyArgs>(args?: SelectSubset<T, TriggerCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Triggers and returns the data saved in the database.
     * @param {TriggerCreateManyAndReturnArgs} args - Arguments to create many Triggers.
     * @example
     * // Create many Triggers
     * const trigger = await prisma.trigger.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Triggers and only return the `id`
     * const triggerWithIdOnly = await prisma.trigger.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends TriggerCreateManyAndReturnArgs>(args?: SelectSubset<T, TriggerCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TriggerPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Trigger.
     * @param {TriggerDeleteArgs} args - Arguments to delete one Trigger.
     * @example
     * // Delete one Trigger
     * const Trigger = await prisma.trigger.delete({
     *   where: {
     *     // ... filter to delete one Trigger
     *   }
     * })
     * 
     */
    delete<T extends TriggerDeleteArgs>(args: SelectSubset<T, TriggerDeleteArgs<ExtArgs>>): Prisma__TriggerClient<$Result.GetResult<Prisma.$TriggerPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Trigger.
     * @param {TriggerUpdateArgs} args - Arguments to update one Trigger.
     * @example
     * // Update one Trigger
     * const trigger = await prisma.trigger.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends TriggerUpdateArgs>(args: SelectSubset<T, TriggerUpdateArgs<ExtArgs>>): Prisma__TriggerClient<$Result.GetResult<Prisma.$TriggerPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Triggers.
     * @param {TriggerDeleteManyArgs} args - Arguments to filter Triggers to delete.
     * @example
     * // Delete a few Triggers
     * const { count } = await prisma.trigger.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends TriggerDeleteManyArgs>(args?: SelectSubset<T, TriggerDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Triggers.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TriggerUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Triggers
     * const trigger = await prisma.trigger.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends TriggerUpdateManyArgs>(args: SelectSubset<T, TriggerUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Triggers and returns the data updated in the database.
     * @param {TriggerUpdateManyAndReturnArgs} args - Arguments to update many Triggers.
     * @example
     * // Update many Triggers
     * const trigger = await prisma.trigger.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Triggers and only return the `id`
     * const triggerWithIdOnly = await prisma.trigger.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends TriggerUpdateManyAndReturnArgs>(args: SelectSubset<T, TriggerUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TriggerPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Trigger.
     * @param {TriggerUpsertArgs} args - Arguments to update or create a Trigger.
     * @example
     * // Update or create a Trigger
     * const trigger = await prisma.trigger.upsert({
     *   create: {
     *     // ... data to create a Trigger
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Trigger we want to update
     *   }
     * })
     */
    upsert<T extends TriggerUpsertArgs>(args: SelectSubset<T, TriggerUpsertArgs<ExtArgs>>): Prisma__TriggerClient<$Result.GetResult<Prisma.$TriggerPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Triggers.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TriggerCountArgs} args - Arguments to filter Triggers to count.
     * @example
     * // Count the number of Triggers
     * const count = await prisma.trigger.count({
     *   where: {
     *     // ... the filter for the Triggers we want to count
     *   }
     * })
    **/
    count<T extends TriggerCountArgs>(
      args?: Subset<T, TriggerCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], TriggerCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Trigger.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TriggerAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends TriggerAggregateArgs>(args: Subset<T, TriggerAggregateArgs>): Prisma.PrismaPromise<GetTriggerAggregateType<T>>

    /**
     * Group by Trigger.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TriggerGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends TriggerGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: TriggerGroupByArgs['orderBy'] }
        : { orderBy?: TriggerGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, TriggerGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetTriggerGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Trigger model
   */
  readonly fields: TriggerFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Trigger.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__TriggerClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    Automation<T extends Trigger$AutomationArgs<ExtArgs> = {}>(args?: Subset<T, Trigger$AutomationArgs<ExtArgs>>): Prisma__AutomationClient<$Result.GetResult<Prisma.$AutomationPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Trigger model
   */
  interface TriggerFieldRefs {
    readonly id: FieldRef<"Trigger", 'String'>
    readonly type: FieldRef<"Trigger", 'String'>
    readonly automationId: FieldRef<"Trigger", 'String'>
  }
    

  // Custom InputTypes
  /**
   * Trigger findUnique
   */
  export type TriggerFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Trigger
     */
    select?: TriggerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Trigger
     */
    omit?: TriggerOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TriggerInclude<ExtArgs> | null
    /**
     * Filter, which Trigger to fetch.
     */
    where: TriggerWhereUniqueInput
  }

  /**
   * Trigger findUniqueOrThrow
   */
  export type TriggerFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Trigger
     */
    select?: TriggerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Trigger
     */
    omit?: TriggerOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TriggerInclude<ExtArgs> | null
    /**
     * Filter, which Trigger to fetch.
     */
    where: TriggerWhereUniqueInput
  }

  /**
   * Trigger findFirst
   */
  export type TriggerFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Trigger
     */
    select?: TriggerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Trigger
     */
    omit?: TriggerOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TriggerInclude<ExtArgs> | null
    /**
     * Filter, which Trigger to fetch.
     */
    where?: TriggerWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Triggers to fetch.
     */
    orderBy?: TriggerOrderByWithRelationInput | TriggerOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Triggers.
     */
    cursor?: TriggerWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Triggers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Triggers.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Triggers.
     */
    distinct?: TriggerScalarFieldEnum | TriggerScalarFieldEnum[]
  }

  /**
   * Trigger findFirstOrThrow
   */
  export type TriggerFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Trigger
     */
    select?: TriggerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Trigger
     */
    omit?: TriggerOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TriggerInclude<ExtArgs> | null
    /**
     * Filter, which Trigger to fetch.
     */
    where?: TriggerWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Triggers to fetch.
     */
    orderBy?: TriggerOrderByWithRelationInput | TriggerOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Triggers.
     */
    cursor?: TriggerWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Triggers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Triggers.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Triggers.
     */
    distinct?: TriggerScalarFieldEnum | TriggerScalarFieldEnum[]
  }

  /**
   * Trigger findMany
   */
  export type TriggerFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Trigger
     */
    select?: TriggerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Trigger
     */
    omit?: TriggerOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TriggerInclude<ExtArgs> | null
    /**
     * Filter, which Triggers to fetch.
     */
    where?: TriggerWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Triggers to fetch.
     */
    orderBy?: TriggerOrderByWithRelationInput | TriggerOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Triggers.
     */
    cursor?: TriggerWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Triggers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Triggers.
     */
    skip?: number
    distinct?: TriggerScalarFieldEnum | TriggerScalarFieldEnum[]
  }

  /**
   * Trigger create
   */
  export type TriggerCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Trigger
     */
    select?: TriggerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Trigger
     */
    omit?: TriggerOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TriggerInclude<ExtArgs> | null
    /**
     * The data needed to create a Trigger.
     */
    data: XOR<TriggerCreateInput, TriggerUncheckedCreateInput>
  }

  /**
   * Trigger createMany
   */
  export type TriggerCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Triggers.
     */
    data: TriggerCreateManyInput | TriggerCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Trigger createManyAndReturn
   */
  export type TriggerCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Trigger
     */
    select?: TriggerSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Trigger
     */
    omit?: TriggerOmit<ExtArgs> | null
    /**
     * The data used to create many Triggers.
     */
    data: TriggerCreateManyInput | TriggerCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TriggerIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Trigger update
   */
  export type TriggerUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Trigger
     */
    select?: TriggerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Trigger
     */
    omit?: TriggerOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TriggerInclude<ExtArgs> | null
    /**
     * The data needed to update a Trigger.
     */
    data: XOR<TriggerUpdateInput, TriggerUncheckedUpdateInput>
    /**
     * Choose, which Trigger to update.
     */
    where: TriggerWhereUniqueInput
  }

  /**
   * Trigger updateMany
   */
  export type TriggerUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Triggers.
     */
    data: XOR<TriggerUpdateManyMutationInput, TriggerUncheckedUpdateManyInput>
    /**
     * Filter which Triggers to update
     */
    where?: TriggerWhereInput
    /**
     * Limit how many Triggers to update.
     */
    limit?: number
  }

  /**
   * Trigger updateManyAndReturn
   */
  export type TriggerUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Trigger
     */
    select?: TriggerSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Trigger
     */
    omit?: TriggerOmit<ExtArgs> | null
    /**
     * The data used to update Triggers.
     */
    data: XOR<TriggerUpdateManyMutationInput, TriggerUncheckedUpdateManyInput>
    /**
     * Filter which Triggers to update
     */
    where?: TriggerWhereInput
    /**
     * Limit how many Triggers to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TriggerIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Trigger upsert
   */
  export type TriggerUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Trigger
     */
    select?: TriggerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Trigger
     */
    omit?: TriggerOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TriggerInclude<ExtArgs> | null
    /**
     * The filter to search for the Trigger to update in case it exists.
     */
    where: TriggerWhereUniqueInput
    /**
     * In case the Trigger found by the `where` argument doesn't exist, create a new Trigger with this data.
     */
    create: XOR<TriggerCreateInput, TriggerUncheckedCreateInput>
    /**
     * In case the Trigger was found with the provided `where` argument, update it with this data.
     */
    update: XOR<TriggerUpdateInput, TriggerUncheckedUpdateInput>
  }

  /**
   * Trigger delete
   */
  export type TriggerDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Trigger
     */
    select?: TriggerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Trigger
     */
    omit?: TriggerOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TriggerInclude<ExtArgs> | null
    /**
     * Filter which Trigger to delete.
     */
    where: TriggerWhereUniqueInput
  }

  /**
   * Trigger deleteMany
   */
  export type TriggerDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Triggers to delete
     */
    where?: TriggerWhereInput
    /**
     * Limit how many Triggers to delete.
     */
    limit?: number
  }

  /**
   * Trigger.Automation
   */
  export type Trigger$AutomationArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Automation
     */
    select?: AutomationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Automation
     */
    omit?: AutomationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AutomationInclude<ExtArgs> | null
    where?: AutomationWhereInput
  }

  /**
   * Trigger without action
   */
  export type TriggerDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Trigger
     */
    select?: TriggerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Trigger
     */
    omit?: TriggerOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TriggerInclude<ExtArgs> | null
  }


  /**
   * Model Keyword
   */

  export type AggregateKeyword = {
    _count: KeywordCountAggregateOutputType | null
    _min: KeywordMinAggregateOutputType | null
    _max: KeywordMaxAggregateOutputType | null
  }

  export type KeywordMinAggregateOutputType = {
    id: string | null
    word: string | null
    automationId: string | null
  }

  export type KeywordMaxAggregateOutputType = {
    id: string | null
    word: string | null
    automationId: string | null
  }

  export type KeywordCountAggregateOutputType = {
    id: number
    word: number
    automationId: number
    _all: number
  }


  export type KeywordMinAggregateInputType = {
    id?: true
    word?: true
    automationId?: true
  }

  export type KeywordMaxAggregateInputType = {
    id?: true
    word?: true
    automationId?: true
  }

  export type KeywordCountAggregateInputType = {
    id?: true
    word?: true
    automationId?: true
    _all?: true
  }

  export type KeywordAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Keyword to aggregate.
     */
    where?: KeywordWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Keywords to fetch.
     */
    orderBy?: KeywordOrderByWithRelationInput | KeywordOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: KeywordWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Keywords from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Keywords.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Keywords
    **/
    _count?: true | KeywordCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: KeywordMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: KeywordMaxAggregateInputType
  }

  export type GetKeywordAggregateType<T extends KeywordAggregateArgs> = {
        [P in keyof T & keyof AggregateKeyword]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateKeyword[P]>
      : GetScalarType<T[P], AggregateKeyword[P]>
  }




  export type KeywordGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: KeywordWhereInput
    orderBy?: KeywordOrderByWithAggregationInput | KeywordOrderByWithAggregationInput[]
    by: KeywordScalarFieldEnum[] | KeywordScalarFieldEnum
    having?: KeywordScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: KeywordCountAggregateInputType | true
    _min?: KeywordMinAggregateInputType
    _max?: KeywordMaxAggregateInputType
  }

  export type KeywordGroupByOutputType = {
    id: string
    word: string
    automationId: string | null
    _count: KeywordCountAggregateOutputType | null
    _min: KeywordMinAggregateOutputType | null
    _max: KeywordMaxAggregateOutputType | null
  }

  type GetKeywordGroupByPayload<T extends KeywordGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<KeywordGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof KeywordGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], KeywordGroupByOutputType[P]>
            : GetScalarType<T[P], KeywordGroupByOutputType[P]>
        }
      >
    >


  export type KeywordSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    word?: boolean
    automationId?: boolean
    Automation?: boolean | Keyword$AutomationArgs<ExtArgs>
  }, ExtArgs["result"]["keyword"]>

  export type KeywordSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    word?: boolean
    automationId?: boolean
    Automation?: boolean | Keyword$AutomationArgs<ExtArgs>
  }, ExtArgs["result"]["keyword"]>

  export type KeywordSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    word?: boolean
    automationId?: boolean
    Automation?: boolean | Keyword$AutomationArgs<ExtArgs>
  }, ExtArgs["result"]["keyword"]>

  export type KeywordSelectScalar = {
    id?: boolean
    word?: boolean
    automationId?: boolean
  }

  export type KeywordOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "word" | "automationId", ExtArgs["result"]["keyword"]>
  export type KeywordInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    Automation?: boolean | Keyword$AutomationArgs<ExtArgs>
  }
  export type KeywordIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    Automation?: boolean | Keyword$AutomationArgs<ExtArgs>
  }
  export type KeywordIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    Automation?: boolean | Keyword$AutomationArgs<ExtArgs>
  }

  export type $KeywordPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Keyword"
    objects: {
      Automation: Prisma.$AutomationPayload<ExtArgs> | null
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      word: string
      automationId: string | null
    }, ExtArgs["result"]["keyword"]>
    composites: {}
  }

  type KeywordGetPayload<S extends boolean | null | undefined | KeywordDefaultArgs> = $Result.GetResult<Prisma.$KeywordPayload, S>

  type KeywordCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<KeywordFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: KeywordCountAggregateInputType | true
    }

  export interface KeywordDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Keyword'], meta: { name: 'Keyword' } }
    /**
     * Find zero or one Keyword that matches the filter.
     * @param {KeywordFindUniqueArgs} args - Arguments to find a Keyword
     * @example
     * // Get one Keyword
     * const keyword = await prisma.keyword.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends KeywordFindUniqueArgs>(args: SelectSubset<T, KeywordFindUniqueArgs<ExtArgs>>): Prisma__KeywordClient<$Result.GetResult<Prisma.$KeywordPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Keyword that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {KeywordFindUniqueOrThrowArgs} args - Arguments to find a Keyword
     * @example
     * // Get one Keyword
     * const keyword = await prisma.keyword.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends KeywordFindUniqueOrThrowArgs>(args: SelectSubset<T, KeywordFindUniqueOrThrowArgs<ExtArgs>>): Prisma__KeywordClient<$Result.GetResult<Prisma.$KeywordPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Keyword that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {KeywordFindFirstArgs} args - Arguments to find a Keyword
     * @example
     * // Get one Keyword
     * const keyword = await prisma.keyword.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends KeywordFindFirstArgs>(args?: SelectSubset<T, KeywordFindFirstArgs<ExtArgs>>): Prisma__KeywordClient<$Result.GetResult<Prisma.$KeywordPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Keyword that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {KeywordFindFirstOrThrowArgs} args - Arguments to find a Keyword
     * @example
     * // Get one Keyword
     * const keyword = await prisma.keyword.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends KeywordFindFirstOrThrowArgs>(args?: SelectSubset<T, KeywordFindFirstOrThrowArgs<ExtArgs>>): Prisma__KeywordClient<$Result.GetResult<Prisma.$KeywordPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Keywords that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {KeywordFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Keywords
     * const keywords = await prisma.keyword.findMany()
     * 
     * // Get first 10 Keywords
     * const keywords = await prisma.keyword.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const keywordWithIdOnly = await prisma.keyword.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends KeywordFindManyArgs>(args?: SelectSubset<T, KeywordFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$KeywordPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Keyword.
     * @param {KeywordCreateArgs} args - Arguments to create a Keyword.
     * @example
     * // Create one Keyword
     * const Keyword = await prisma.keyword.create({
     *   data: {
     *     // ... data to create a Keyword
     *   }
     * })
     * 
     */
    create<T extends KeywordCreateArgs>(args: SelectSubset<T, KeywordCreateArgs<ExtArgs>>): Prisma__KeywordClient<$Result.GetResult<Prisma.$KeywordPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Keywords.
     * @param {KeywordCreateManyArgs} args - Arguments to create many Keywords.
     * @example
     * // Create many Keywords
     * const keyword = await prisma.keyword.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends KeywordCreateManyArgs>(args?: SelectSubset<T, KeywordCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Keywords and returns the data saved in the database.
     * @param {KeywordCreateManyAndReturnArgs} args - Arguments to create many Keywords.
     * @example
     * // Create many Keywords
     * const keyword = await prisma.keyword.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Keywords and only return the `id`
     * const keywordWithIdOnly = await prisma.keyword.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends KeywordCreateManyAndReturnArgs>(args?: SelectSubset<T, KeywordCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$KeywordPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Keyword.
     * @param {KeywordDeleteArgs} args - Arguments to delete one Keyword.
     * @example
     * // Delete one Keyword
     * const Keyword = await prisma.keyword.delete({
     *   where: {
     *     // ... filter to delete one Keyword
     *   }
     * })
     * 
     */
    delete<T extends KeywordDeleteArgs>(args: SelectSubset<T, KeywordDeleteArgs<ExtArgs>>): Prisma__KeywordClient<$Result.GetResult<Prisma.$KeywordPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Keyword.
     * @param {KeywordUpdateArgs} args - Arguments to update one Keyword.
     * @example
     * // Update one Keyword
     * const keyword = await prisma.keyword.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends KeywordUpdateArgs>(args: SelectSubset<T, KeywordUpdateArgs<ExtArgs>>): Prisma__KeywordClient<$Result.GetResult<Prisma.$KeywordPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Keywords.
     * @param {KeywordDeleteManyArgs} args - Arguments to filter Keywords to delete.
     * @example
     * // Delete a few Keywords
     * const { count } = await prisma.keyword.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends KeywordDeleteManyArgs>(args?: SelectSubset<T, KeywordDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Keywords.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {KeywordUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Keywords
     * const keyword = await prisma.keyword.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends KeywordUpdateManyArgs>(args: SelectSubset<T, KeywordUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Keywords and returns the data updated in the database.
     * @param {KeywordUpdateManyAndReturnArgs} args - Arguments to update many Keywords.
     * @example
     * // Update many Keywords
     * const keyword = await prisma.keyword.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Keywords and only return the `id`
     * const keywordWithIdOnly = await prisma.keyword.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends KeywordUpdateManyAndReturnArgs>(args: SelectSubset<T, KeywordUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$KeywordPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Keyword.
     * @param {KeywordUpsertArgs} args - Arguments to update or create a Keyword.
     * @example
     * // Update or create a Keyword
     * const keyword = await prisma.keyword.upsert({
     *   create: {
     *     // ... data to create a Keyword
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Keyword we want to update
     *   }
     * })
     */
    upsert<T extends KeywordUpsertArgs>(args: SelectSubset<T, KeywordUpsertArgs<ExtArgs>>): Prisma__KeywordClient<$Result.GetResult<Prisma.$KeywordPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Keywords.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {KeywordCountArgs} args - Arguments to filter Keywords to count.
     * @example
     * // Count the number of Keywords
     * const count = await prisma.keyword.count({
     *   where: {
     *     // ... the filter for the Keywords we want to count
     *   }
     * })
    **/
    count<T extends KeywordCountArgs>(
      args?: Subset<T, KeywordCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], KeywordCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Keyword.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {KeywordAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends KeywordAggregateArgs>(args: Subset<T, KeywordAggregateArgs>): Prisma.PrismaPromise<GetKeywordAggregateType<T>>

    /**
     * Group by Keyword.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {KeywordGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends KeywordGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: KeywordGroupByArgs['orderBy'] }
        : { orderBy?: KeywordGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, KeywordGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetKeywordGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Keyword model
   */
  readonly fields: KeywordFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Keyword.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__KeywordClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    Automation<T extends Keyword$AutomationArgs<ExtArgs> = {}>(args?: Subset<T, Keyword$AutomationArgs<ExtArgs>>): Prisma__AutomationClient<$Result.GetResult<Prisma.$AutomationPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Keyword model
   */
  interface KeywordFieldRefs {
    readonly id: FieldRef<"Keyword", 'String'>
    readonly word: FieldRef<"Keyword", 'String'>
    readonly automationId: FieldRef<"Keyword", 'String'>
  }
    

  // Custom InputTypes
  /**
   * Keyword findUnique
   */
  export type KeywordFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Keyword
     */
    select?: KeywordSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Keyword
     */
    omit?: KeywordOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: KeywordInclude<ExtArgs> | null
    /**
     * Filter, which Keyword to fetch.
     */
    where: KeywordWhereUniqueInput
  }

  /**
   * Keyword findUniqueOrThrow
   */
  export type KeywordFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Keyword
     */
    select?: KeywordSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Keyword
     */
    omit?: KeywordOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: KeywordInclude<ExtArgs> | null
    /**
     * Filter, which Keyword to fetch.
     */
    where: KeywordWhereUniqueInput
  }

  /**
   * Keyword findFirst
   */
  export type KeywordFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Keyword
     */
    select?: KeywordSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Keyword
     */
    omit?: KeywordOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: KeywordInclude<ExtArgs> | null
    /**
     * Filter, which Keyword to fetch.
     */
    where?: KeywordWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Keywords to fetch.
     */
    orderBy?: KeywordOrderByWithRelationInput | KeywordOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Keywords.
     */
    cursor?: KeywordWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Keywords from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Keywords.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Keywords.
     */
    distinct?: KeywordScalarFieldEnum | KeywordScalarFieldEnum[]
  }

  /**
   * Keyword findFirstOrThrow
   */
  export type KeywordFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Keyword
     */
    select?: KeywordSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Keyword
     */
    omit?: KeywordOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: KeywordInclude<ExtArgs> | null
    /**
     * Filter, which Keyword to fetch.
     */
    where?: KeywordWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Keywords to fetch.
     */
    orderBy?: KeywordOrderByWithRelationInput | KeywordOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Keywords.
     */
    cursor?: KeywordWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Keywords from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Keywords.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Keywords.
     */
    distinct?: KeywordScalarFieldEnum | KeywordScalarFieldEnum[]
  }

  /**
   * Keyword findMany
   */
  export type KeywordFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Keyword
     */
    select?: KeywordSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Keyword
     */
    omit?: KeywordOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: KeywordInclude<ExtArgs> | null
    /**
     * Filter, which Keywords to fetch.
     */
    where?: KeywordWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Keywords to fetch.
     */
    orderBy?: KeywordOrderByWithRelationInput | KeywordOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Keywords.
     */
    cursor?: KeywordWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Keywords from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Keywords.
     */
    skip?: number
    distinct?: KeywordScalarFieldEnum | KeywordScalarFieldEnum[]
  }

  /**
   * Keyword create
   */
  export type KeywordCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Keyword
     */
    select?: KeywordSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Keyword
     */
    omit?: KeywordOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: KeywordInclude<ExtArgs> | null
    /**
     * The data needed to create a Keyword.
     */
    data: XOR<KeywordCreateInput, KeywordUncheckedCreateInput>
  }

  /**
   * Keyword createMany
   */
  export type KeywordCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Keywords.
     */
    data: KeywordCreateManyInput | KeywordCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Keyword createManyAndReturn
   */
  export type KeywordCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Keyword
     */
    select?: KeywordSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Keyword
     */
    omit?: KeywordOmit<ExtArgs> | null
    /**
     * The data used to create many Keywords.
     */
    data: KeywordCreateManyInput | KeywordCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: KeywordIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Keyword update
   */
  export type KeywordUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Keyword
     */
    select?: KeywordSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Keyword
     */
    omit?: KeywordOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: KeywordInclude<ExtArgs> | null
    /**
     * The data needed to update a Keyword.
     */
    data: XOR<KeywordUpdateInput, KeywordUncheckedUpdateInput>
    /**
     * Choose, which Keyword to update.
     */
    where: KeywordWhereUniqueInput
  }

  /**
   * Keyword updateMany
   */
  export type KeywordUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Keywords.
     */
    data: XOR<KeywordUpdateManyMutationInput, KeywordUncheckedUpdateManyInput>
    /**
     * Filter which Keywords to update
     */
    where?: KeywordWhereInput
    /**
     * Limit how many Keywords to update.
     */
    limit?: number
  }

  /**
   * Keyword updateManyAndReturn
   */
  export type KeywordUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Keyword
     */
    select?: KeywordSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Keyword
     */
    omit?: KeywordOmit<ExtArgs> | null
    /**
     * The data used to update Keywords.
     */
    data: XOR<KeywordUpdateManyMutationInput, KeywordUncheckedUpdateManyInput>
    /**
     * Filter which Keywords to update
     */
    where?: KeywordWhereInput
    /**
     * Limit how many Keywords to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: KeywordIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Keyword upsert
   */
  export type KeywordUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Keyword
     */
    select?: KeywordSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Keyword
     */
    omit?: KeywordOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: KeywordInclude<ExtArgs> | null
    /**
     * The filter to search for the Keyword to update in case it exists.
     */
    where: KeywordWhereUniqueInput
    /**
     * In case the Keyword found by the `where` argument doesn't exist, create a new Keyword with this data.
     */
    create: XOR<KeywordCreateInput, KeywordUncheckedCreateInput>
    /**
     * In case the Keyword was found with the provided `where` argument, update it with this data.
     */
    update: XOR<KeywordUpdateInput, KeywordUncheckedUpdateInput>
  }

  /**
   * Keyword delete
   */
  export type KeywordDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Keyword
     */
    select?: KeywordSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Keyword
     */
    omit?: KeywordOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: KeywordInclude<ExtArgs> | null
    /**
     * Filter which Keyword to delete.
     */
    where: KeywordWhereUniqueInput
  }

  /**
   * Keyword deleteMany
   */
  export type KeywordDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Keywords to delete
     */
    where?: KeywordWhereInput
    /**
     * Limit how many Keywords to delete.
     */
    limit?: number
  }

  /**
   * Keyword.Automation
   */
  export type Keyword$AutomationArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Automation
     */
    select?: AutomationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Automation
     */
    omit?: AutomationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AutomationInclude<ExtArgs> | null
    where?: AutomationWhereInput
  }

  /**
   * Keyword without action
   */
  export type KeywordDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Keyword
     */
    select?: KeywordSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Keyword
     */
    omit?: KeywordOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: KeywordInclude<ExtArgs> | null
  }


  /**
   * Enums
   */

  export const TransactionIsolationLevel: {
    ReadUncommitted: 'ReadUncommitted',
    ReadCommitted: 'ReadCommitted',
    RepeatableRead: 'RepeatableRead',
    Serializable: 'Serializable'
  };

  export type TransactionIsolationLevel = (typeof TransactionIsolationLevel)[keyof typeof TransactionIsolationLevel]


  export const UserScalarFieldEnum: {
    id: 'id',
    clerkId: 'clerkId',
    email: 'email',
    firstname: 'firstname',
    lastname: 'lastname',
    createdAt: 'createdAt'
  };

  export type UserScalarFieldEnum = (typeof UserScalarFieldEnum)[keyof typeof UserScalarFieldEnum]


  export const SubscriptionScalarFieldEnum: {
    id: 'id',
    userId: 'userId',
    createdAt: 'createdAt',
    plan: 'plan',
    updatedAt: 'updatedAt',
    customerId: 'customerId'
  };

  export type SubscriptionScalarFieldEnum = (typeof SubscriptionScalarFieldEnum)[keyof typeof SubscriptionScalarFieldEnum]


  export const IntegrationsScalarFieldEnum: {
    id: 'id',
    name: 'name',
    createdAt: 'createdAt',
    userId: 'userId',
    token: 'token',
    expiresAt: 'expiresAt',
    instagramId: 'instagramId'
  };

  export type IntegrationsScalarFieldEnum = (typeof IntegrationsScalarFieldEnum)[keyof typeof IntegrationsScalarFieldEnum]


  export const AutomationScalarFieldEnum: {
    id: 'id',
    name: 'name',
    createdAt: 'createdAt',
    active: 'active',
    userId: 'userId'
  };

  export type AutomationScalarFieldEnum = (typeof AutomationScalarFieldEnum)[keyof typeof AutomationScalarFieldEnum]


  export const DmsScalarFieldEnum: {
    id: 'id',
    automationId: 'automationId',
    createdAt: 'createdAt',
    senderId: 'senderId',
    reciever: 'reciever',
    message: 'message',
    metadata: 'metadata'
  };

  export type DmsScalarFieldEnum = (typeof DmsScalarFieldEnum)[keyof typeof DmsScalarFieldEnum]


  export const PostScalarFieldEnum: {
    id: 'id',
    postid: 'postid',
    caption: 'caption',
    media: 'media',
    mediaType: 'mediaType',
    automationId: 'automationId'
  };

  export type PostScalarFieldEnum = (typeof PostScalarFieldEnum)[keyof typeof PostScalarFieldEnum]


  export const ListenerScalarFieldEnum: {
    id: 'id',
    automationId: 'automationId',
    listener: 'listener',
    prompt: 'prompt',
    commentReply: 'commentReply',
    dmCount: 'dmCount',
    commentCount: 'commentCount'
  };

  export type ListenerScalarFieldEnum = (typeof ListenerScalarFieldEnum)[keyof typeof ListenerScalarFieldEnum]


  export const TriggerScalarFieldEnum: {
    id: 'id',
    type: 'type',
    automationId: 'automationId'
  };

  export type TriggerScalarFieldEnum = (typeof TriggerScalarFieldEnum)[keyof typeof TriggerScalarFieldEnum]


  export const KeywordScalarFieldEnum: {
    id: 'id',
    word: 'word',
    automationId: 'automationId'
  };

  export type KeywordScalarFieldEnum = (typeof KeywordScalarFieldEnum)[keyof typeof KeywordScalarFieldEnum]


  export const SortOrder: {
    asc: 'asc',
    desc: 'desc'
  };

  export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder]


  export const NullableJsonNullValueInput: {
    DbNull: typeof DbNull,
    JsonNull: typeof JsonNull
  };

  export type NullableJsonNullValueInput = (typeof NullableJsonNullValueInput)[keyof typeof NullableJsonNullValueInput]


  export const QueryMode: {
    default: 'default',
    insensitive: 'insensitive'
  };

  export type QueryMode = (typeof QueryMode)[keyof typeof QueryMode]


  export const NullsOrder: {
    first: 'first',
    last: 'last'
  };

  export type NullsOrder = (typeof NullsOrder)[keyof typeof NullsOrder]


  export const JsonNullValueFilter: {
    DbNull: typeof DbNull,
    JsonNull: typeof JsonNull,
    AnyNull: typeof AnyNull
  };

  export type JsonNullValueFilter = (typeof JsonNullValueFilter)[keyof typeof JsonNullValueFilter]


  /**
   * Field references
   */


  /**
   * Reference to a field of type 'String'
   */
  export type StringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String'>
    


  /**
   * Reference to a field of type 'String[]'
   */
  export type ListStringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String[]'>
    


  /**
   * Reference to a field of type 'DateTime'
   */
  export type DateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime'>
    


  /**
   * Reference to a field of type 'DateTime[]'
   */
  export type ListDateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime[]'>
    


  /**
   * Reference to a field of type 'SUBSCRIPTION_PLAN'
   */
  export type EnumSUBSCRIPTION_PLANFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'SUBSCRIPTION_PLAN'>
    


  /**
   * Reference to a field of type 'SUBSCRIPTION_PLAN[]'
   */
  export type ListEnumSUBSCRIPTION_PLANFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'SUBSCRIPTION_PLAN[]'>
    


  /**
   * Reference to a field of type 'INTEGRATIONS'
   */
  export type EnumINTEGRATIONSFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'INTEGRATIONS'>
    


  /**
   * Reference to a field of type 'INTEGRATIONS[]'
   */
  export type ListEnumINTEGRATIONSFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'INTEGRATIONS[]'>
    


  /**
   * Reference to a field of type 'Boolean'
   */
  export type BooleanFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Boolean'>
    


  /**
   * Reference to a field of type 'Json'
   */
  export type JsonFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Json'>
    


  /**
   * Reference to a field of type 'QueryMode'
   */
  export type EnumQueryModeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'QueryMode'>
    


  /**
   * Reference to a field of type 'MEDIATYPE'
   */
  export type EnumMEDIATYPEFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'MEDIATYPE'>
    


  /**
   * Reference to a field of type 'MEDIATYPE[]'
   */
  export type ListEnumMEDIATYPEFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'MEDIATYPE[]'>
    


  /**
   * Reference to a field of type 'LISTENERS'
   */
  export type EnumLISTENERSFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'LISTENERS'>
    


  /**
   * Reference to a field of type 'LISTENERS[]'
   */
  export type ListEnumLISTENERSFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'LISTENERS[]'>
    


  /**
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>
    


  /**
   * Reference to a field of type 'Int[]'
   */
  export type ListIntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int[]'>
    


  /**
   * Reference to a field of type 'Float'
   */
  export type FloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float'>
    


  /**
   * Reference to a field of type 'Float[]'
   */
  export type ListFloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float[]'>
    
  /**
   * Deep Input Types
   */


  export type UserWhereInput = {
    AND?: UserWhereInput | UserWhereInput[]
    OR?: UserWhereInput[]
    NOT?: UserWhereInput | UserWhereInput[]
    id?: UuidFilter<"User"> | string
    clerkId?: StringFilter<"User"> | string
    email?: StringFilter<"User"> | string
    firstname?: StringNullableFilter<"User"> | string | null
    lastname?: StringNullableFilter<"User"> | string | null
    createdAt?: DateTimeFilter<"User"> | Date | string
    subscription?: XOR<SubscriptionNullableScalarRelationFilter, SubscriptionWhereInput> | null
    integrations?: IntegrationsListRelationFilter
    automations?: AutomationListRelationFilter
  }

  export type UserOrderByWithRelationInput = {
    id?: SortOrder
    clerkId?: SortOrder
    email?: SortOrder
    firstname?: SortOrderInput | SortOrder
    lastname?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    subscription?: SubscriptionOrderByWithRelationInput
    integrations?: IntegrationsOrderByRelationAggregateInput
    automations?: AutomationOrderByRelationAggregateInput
  }

  export type UserWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    clerkId?: string
    email?: string
    AND?: UserWhereInput | UserWhereInput[]
    OR?: UserWhereInput[]
    NOT?: UserWhereInput | UserWhereInput[]
    firstname?: StringNullableFilter<"User"> | string | null
    lastname?: StringNullableFilter<"User"> | string | null
    createdAt?: DateTimeFilter<"User"> | Date | string
    subscription?: XOR<SubscriptionNullableScalarRelationFilter, SubscriptionWhereInput> | null
    integrations?: IntegrationsListRelationFilter
    automations?: AutomationListRelationFilter
  }, "id" | "clerkId" | "email">

  export type UserOrderByWithAggregationInput = {
    id?: SortOrder
    clerkId?: SortOrder
    email?: SortOrder
    firstname?: SortOrderInput | SortOrder
    lastname?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    _count?: UserCountOrderByAggregateInput
    _max?: UserMaxOrderByAggregateInput
    _min?: UserMinOrderByAggregateInput
  }

  export type UserScalarWhereWithAggregatesInput = {
    AND?: UserScalarWhereWithAggregatesInput | UserScalarWhereWithAggregatesInput[]
    OR?: UserScalarWhereWithAggregatesInput[]
    NOT?: UserScalarWhereWithAggregatesInput | UserScalarWhereWithAggregatesInput[]
    id?: UuidWithAggregatesFilter<"User"> | string
    clerkId?: StringWithAggregatesFilter<"User"> | string
    email?: StringWithAggregatesFilter<"User"> | string
    firstname?: StringNullableWithAggregatesFilter<"User"> | string | null
    lastname?: StringNullableWithAggregatesFilter<"User"> | string | null
    createdAt?: DateTimeWithAggregatesFilter<"User"> | Date | string
  }

  export type SubscriptionWhereInput = {
    AND?: SubscriptionWhereInput | SubscriptionWhereInput[]
    OR?: SubscriptionWhereInput[]
    NOT?: SubscriptionWhereInput | SubscriptionWhereInput[]
    id?: UuidFilter<"Subscription"> | string
    userId?: UuidNullableFilter<"Subscription"> | string | null
    createdAt?: DateTimeFilter<"Subscription"> | Date | string
    plan?: EnumSUBSCRIPTION_PLANFilter<"Subscription"> | $Enums.SUBSCRIPTION_PLAN
    updatedAt?: DateTimeFilter<"Subscription"> | Date | string
    customerId?: StringNullableFilter<"Subscription"> | string | null
    User?: XOR<UserNullableScalarRelationFilter, UserWhereInput> | null
  }

  export type SubscriptionOrderByWithRelationInput = {
    id?: SortOrder
    userId?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    plan?: SortOrder
    updatedAt?: SortOrder
    customerId?: SortOrderInput | SortOrder
    User?: UserOrderByWithRelationInput
  }

  export type SubscriptionWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    userId?: string
    customerId?: string
    AND?: SubscriptionWhereInput | SubscriptionWhereInput[]
    OR?: SubscriptionWhereInput[]
    NOT?: SubscriptionWhereInput | SubscriptionWhereInput[]
    createdAt?: DateTimeFilter<"Subscription"> | Date | string
    plan?: EnumSUBSCRIPTION_PLANFilter<"Subscription"> | $Enums.SUBSCRIPTION_PLAN
    updatedAt?: DateTimeFilter<"Subscription"> | Date | string
    User?: XOR<UserNullableScalarRelationFilter, UserWhereInput> | null
  }, "id" | "userId" | "customerId">

  export type SubscriptionOrderByWithAggregationInput = {
    id?: SortOrder
    userId?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    plan?: SortOrder
    updatedAt?: SortOrder
    customerId?: SortOrderInput | SortOrder
    _count?: SubscriptionCountOrderByAggregateInput
    _max?: SubscriptionMaxOrderByAggregateInput
    _min?: SubscriptionMinOrderByAggregateInput
  }

  export type SubscriptionScalarWhereWithAggregatesInput = {
    AND?: SubscriptionScalarWhereWithAggregatesInput | SubscriptionScalarWhereWithAggregatesInput[]
    OR?: SubscriptionScalarWhereWithAggregatesInput[]
    NOT?: SubscriptionScalarWhereWithAggregatesInput | SubscriptionScalarWhereWithAggregatesInput[]
    id?: UuidWithAggregatesFilter<"Subscription"> | string
    userId?: UuidNullableWithAggregatesFilter<"Subscription"> | string | null
    createdAt?: DateTimeWithAggregatesFilter<"Subscription"> | Date | string
    plan?: EnumSUBSCRIPTION_PLANWithAggregatesFilter<"Subscription"> | $Enums.SUBSCRIPTION_PLAN
    updatedAt?: DateTimeWithAggregatesFilter<"Subscription"> | Date | string
    customerId?: StringNullableWithAggregatesFilter<"Subscription"> | string | null
  }

  export type IntegrationsWhereInput = {
    AND?: IntegrationsWhereInput | IntegrationsWhereInput[]
    OR?: IntegrationsWhereInput[]
    NOT?: IntegrationsWhereInput | IntegrationsWhereInput[]
    id?: UuidFilter<"Integrations"> | string
    name?: EnumINTEGRATIONSFilter<"Integrations"> | $Enums.INTEGRATIONS
    createdAt?: DateTimeFilter<"Integrations"> | Date | string
    userId?: UuidNullableFilter<"Integrations"> | string | null
    token?: StringFilter<"Integrations"> | string
    expiresAt?: DateTimeNullableFilter<"Integrations"> | Date | string | null
    instagramId?: StringNullableFilter<"Integrations"> | string | null
    User?: XOR<UserNullableScalarRelationFilter, UserWhereInput> | null
  }

  export type IntegrationsOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    createdAt?: SortOrder
    userId?: SortOrderInput | SortOrder
    token?: SortOrder
    expiresAt?: SortOrderInput | SortOrder
    instagramId?: SortOrderInput | SortOrder
    User?: UserOrderByWithRelationInput
  }

  export type IntegrationsWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    token?: string
    instagramId?: string
    AND?: IntegrationsWhereInput | IntegrationsWhereInput[]
    OR?: IntegrationsWhereInput[]
    NOT?: IntegrationsWhereInput | IntegrationsWhereInput[]
    name?: EnumINTEGRATIONSFilter<"Integrations"> | $Enums.INTEGRATIONS
    createdAt?: DateTimeFilter<"Integrations"> | Date | string
    userId?: UuidNullableFilter<"Integrations"> | string | null
    expiresAt?: DateTimeNullableFilter<"Integrations"> | Date | string | null
    User?: XOR<UserNullableScalarRelationFilter, UserWhereInput> | null
  }, "id" | "token" | "instagramId">

  export type IntegrationsOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    createdAt?: SortOrder
    userId?: SortOrderInput | SortOrder
    token?: SortOrder
    expiresAt?: SortOrderInput | SortOrder
    instagramId?: SortOrderInput | SortOrder
    _count?: IntegrationsCountOrderByAggregateInput
    _max?: IntegrationsMaxOrderByAggregateInput
    _min?: IntegrationsMinOrderByAggregateInput
  }

  export type IntegrationsScalarWhereWithAggregatesInput = {
    AND?: IntegrationsScalarWhereWithAggregatesInput | IntegrationsScalarWhereWithAggregatesInput[]
    OR?: IntegrationsScalarWhereWithAggregatesInput[]
    NOT?: IntegrationsScalarWhereWithAggregatesInput | IntegrationsScalarWhereWithAggregatesInput[]
    id?: UuidWithAggregatesFilter<"Integrations"> | string
    name?: EnumINTEGRATIONSWithAggregatesFilter<"Integrations"> | $Enums.INTEGRATIONS
    createdAt?: DateTimeWithAggregatesFilter<"Integrations"> | Date | string
    userId?: UuidNullableWithAggregatesFilter<"Integrations"> | string | null
    token?: StringWithAggregatesFilter<"Integrations"> | string
    expiresAt?: DateTimeNullableWithAggregatesFilter<"Integrations"> | Date | string | null
    instagramId?: StringNullableWithAggregatesFilter<"Integrations"> | string | null
  }

  export type AutomationWhereInput = {
    AND?: AutomationWhereInput | AutomationWhereInput[]
    OR?: AutomationWhereInput[]
    NOT?: AutomationWhereInput | AutomationWhereInput[]
    id?: UuidFilter<"Automation"> | string
    name?: StringFilter<"Automation"> | string
    createdAt?: DateTimeFilter<"Automation"> | Date | string
    active?: BoolFilter<"Automation"> | boolean
    userId?: UuidNullableFilter<"Automation"> | string | null
    trigger?: TriggerListRelationFilter
    listener?: XOR<ListenerNullableScalarRelationFilter, ListenerWhereInput> | null
    posts?: PostListRelationFilter
    dms?: DmsListRelationFilter
    User?: XOR<UserNullableScalarRelationFilter, UserWhereInput> | null
    keywords?: KeywordListRelationFilter
  }

  export type AutomationOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    createdAt?: SortOrder
    active?: SortOrder
    userId?: SortOrderInput | SortOrder
    trigger?: TriggerOrderByRelationAggregateInput
    listener?: ListenerOrderByWithRelationInput
    posts?: PostOrderByRelationAggregateInput
    dms?: DmsOrderByRelationAggregateInput
    User?: UserOrderByWithRelationInput
    keywords?: KeywordOrderByRelationAggregateInput
  }

  export type AutomationWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: AutomationWhereInput | AutomationWhereInput[]
    OR?: AutomationWhereInput[]
    NOT?: AutomationWhereInput | AutomationWhereInput[]
    name?: StringFilter<"Automation"> | string
    createdAt?: DateTimeFilter<"Automation"> | Date | string
    active?: BoolFilter<"Automation"> | boolean
    userId?: UuidNullableFilter<"Automation"> | string | null
    trigger?: TriggerListRelationFilter
    listener?: XOR<ListenerNullableScalarRelationFilter, ListenerWhereInput> | null
    posts?: PostListRelationFilter
    dms?: DmsListRelationFilter
    User?: XOR<UserNullableScalarRelationFilter, UserWhereInput> | null
    keywords?: KeywordListRelationFilter
  }, "id">

  export type AutomationOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    createdAt?: SortOrder
    active?: SortOrder
    userId?: SortOrderInput | SortOrder
    _count?: AutomationCountOrderByAggregateInput
    _max?: AutomationMaxOrderByAggregateInput
    _min?: AutomationMinOrderByAggregateInput
  }

  export type AutomationScalarWhereWithAggregatesInput = {
    AND?: AutomationScalarWhereWithAggregatesInput | AutomationScalarWhereWithAggregatesInput[]
    OR?: AutomationScalarWhereWithAggregatesInput[]
    NOT?: AutomationScalarWhereWithAggregatesInput | AutomationScalarWhereWithAggregatesInput[]
    id?: UuidWithAggregatesFilter<"Automation"> | string
    name?: StringWithAggregatesFilter<"Automation"> | string
    createdAt?: DateTimeWithAggregatesFilter<"Automation"> | Date | string
    active?: BoolWithAggregatesFilter<"Automation"> | boolean
    userId?: UuidNullableWithAggregatesFilter<"Automation"> | string | null
  }

  export type DmsWhereInput = {
    AND?: DmsWhereInput | DmsWhereInput[]
    OR?: DmsWhereInput[]
    NOT?: DmsWhereInput | DmsWhereInput[]
    id?: UuidFilter<"Dms"> | string
    automationId?: UuidNullableFilter<"Dms"> | string | null
    createdAt?: DateTimeFilter<"Dms"> | Date | string
    senderId?: StringNullableFilter<"Dms"> | string | null
    reciever?: StringNullableFilter<"Dms"> | string | null
    message?: StringNullableFilter<"Dms"> | string | null
    metadata?: JsonNullableFilter<"Dms">
    Automation?: XOR<AutomationNullableScalarRelationFilter, AutomationWhereInput> | null
  }

  export type DmsOrderByWithRelationInput = {
    id?: SortOrder
    automationId?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    senderId?: SortOrderInput | SortOrder
    reciever?: SortOrderInput | SortOrder
    message?: SortOrderInput | SortOrder
    metadata?: SortOrderInput | SortOrder
    Automation?: AutomationOrderByWithRelationInput
  }

  export type DmsWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: DmsWhereInput | DmsWhereInput[]
    OR?: DmsWhereInput[]
    NOT?: DmsWhereInput | DmsWhereInput[]
    automationId?: UuidNullableFilter<"Dms"> | string | null
    createdAt?: DateTimeFilter<"Dms"> | Date | string
    senderId?: StringNullableFilter<"Dms"> | string | null
    reciever?: StringNullableFilter<"Dms"> | string | null
    message?: StringNullableFilter<"Dms"> | string | null
    metadata?: JsonNullableFilter<"Dms">
    Automation?: XOR<AutomationNullableScalarRelationFilter, AutomationWhereInput> | null
  }, "id">

  export type DmsOrderByWithAggregationInput = {
    id?: SortOrder
    automationId?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    senderId?: SortOrderInput | SortOrder
    reciever?: SortOrderInput | SortOrder
    message?: SortOrderInput | SortOrder
    metadata?: SortOrderInput | SortOrder
    _count?: DmsCountOrderByAggregateInput
    _max?: DmsMaxOrderByAggregateInput
    _min?: DmsMinOrderByAggregateInput
  }

  export type DmsScalarWhereWithAggregatesInput = {
    AND?: DmsScalarWhereWithAggregatesInput | DmsScalarWhereWithAggregatesInput[]
    OR?: DmsScalarWhereWithAggregatesInput[]
    NOT?: DmsScalarWhereWithAggregatesInput | DmsScalarWhereWithAggregatesInput[]
    id?: UuidWithAggregatesFilter<"Dms"> | string
    automationId?: UuidNullableWithAggregatesFilter<"Dms"> | string | null
    createdAt?: DateTimeWithAggregatesFilter<"Dms"> | Date | string
    senderId?: StringNullableWithAggregatesFilter<"Dms"> | string | null
    reciever?: StringNullableWithAggregatesFilter<"Dms"> | string | null
    message?: StringNullableWithAggregatesFilter<"Dms"> | string | null
    metadata?: JsonNullableWithAggregatesFilter<"Dms">
  }

  export type PostWhereInput = {
    AND?: PostWhereInput | PostWhereInput[]
    OR?: PostWhereInput[]
    NOT?: PostWhereInput | PostWhereInput[]
    id?: UuidFilter<"Post"> | string
    postid?: StringFilter<"Post"> | string
    caption?: StringNullableFilter<"Post"> | string | null
    media?: StringFilter<"Post"> | string
    mediaType?: EnumMEDIATYPEFilter<"Post"> | $Enums.MEDIATYPE
    automationId?: UuidNullableFilter<"Post"> | string | null
    Automation?: XOR<AutomationNullableScalarRelationFilter, AutomationWhereInput> | null
  }

  export type PostOrderByWithRelationInput = {
    id?: SortOrder
    postid?: SortOrder
    caption?: SortOrderInput | SortOrder
    media?: SortOrder
    mediaType?: SortOrder
    automationId?: SortOrderInput | SortOrder
    Automation?: AutomationOrderByWithRelationInput
  }

  export type PostWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: PostWhereInput | PostWhereInput[]
    OR?: PostWhereInput[]
    NOT?: PostWhereInput | PostWhereInput[]
    postid?: StringFilter<"Post"> | string
    caption?: StringNullableFilter<"Post"> | string | null
    media?: StringFilter<"Post"> | string
    mediaType?: EnumMEDIATYPEFilter<"Post"> | $Enums.MEDIATYPE
    automationId?: UuidNullableFilter<"Post"> | string | null
    Automation?: XOR<AutomationNullableScalarRelationFilter, AutomationWhereInput> | null
  }, "id">

  export type PostOrderByWithAggregationInput = {
    id?: SortOrder
    postid?: SortOrder
    caption?: SortOrderInput | SortOrder
    media?: SortOrder
    mediaType?: SortOrder
    automationId?: SortOrderInput | SortOrder
    _count?: PostCountOrderByAggregateInput
    _max?: PostMaxOrderByAggregateInput
    _min?: PostMinOrderByAggregateInput
  }

  export type PostScalarWhereWithAggregatesInput = {
    AND?: PostScalarWhereWithAggregatesInput | PostScalarWhereWithAggregatesInput[]
    OR?: PostScalarWhereWithAggregatesInput[]
    NOT?: PostScalarWhereWithAggregatesInput | PostScalarWhereWithAggregatesInput[]
    id?: UuidWithAggregatesFilter<"Post"> | string
    postid?: StringWithAggregatesFilter<"Post"> | string
    caption?: StringNullableWithAggregatesFilter<"Post"> | string | null
    media?: StringWithAggregatesFilter<"Post"> | string
    mediaType?: EnumMEDIATYPEWithAggregatesFilter<"Post"> | $Enums.MEDIATYPE
    automationId?: UuidNullableWithAggregatesFilter<"Post"> | string | null
  }

  export type ListenerWhereInput = {
    AND?: ListenerWhereInput | ListenerWhereInput[]
    OR?: ListenerWhereInput[]
    NOT?: ListenerWhereInput | ListenerWhereInput[]
    id?: UuidFilter<"Listener"> | string
    automationId?: UuidFilter<"Listener"> | string
    listener?: EnumLISTENERSFilter<"Listener"> | $Enums.LISTENERS
    prompt?: StringFilter<"Listener"> | string
    commentReply?: StringNullableFilter<"Listener"> | string | null
    dmCount?: IntFilter<"Listener"> | number
    commentCount?: IntFilter<"Listener"> | number
    Automation?: XOR<AutomationScalarRelationFilter, AutomationWhereInput>
  }

  export type ListenerOrderByWithRelationInput = {
    id?: SortOrder
    automationId?: SortOrder
    listener?: SortOrder
    prompt?: SortOrder
    commentReply?: SortOrderInput | SortOrder
    dmCount?: SortOrder
    commentCount?: SortOrder
    Automation?: AutomationOrderByWithRelationInput
  }

  export type ListenerWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    automationId?: string
    AND?: ListenerWhereInput | ListenerWhereInput[]
    OR?: ListenerWhereInput[]
    NOT?: ListenerWhereInput | ListenerWhereInput[]
    listener?: EnumLISTENERSFilter<"Listener"> | $Enums.LISTENERS
    prompt?: StringFilter<"Listener"> | string
    commentReply?: StringNullableFilter<"Listener"> | string | null
    dmCount?: IntFilter<"Listener"> | number
    commentCount?: IntFilter<"Listener"> | number
    Automation?: XOR<AutomationScalarRelationFilter, AutomationWhereInput>
  }, "id" | "automationId">

  export type ListenerOrderByWithAggregationInput = {
    id?: SortOrder
    automationId?: SortOrder
    listener?: SortOrder
    prompt?: SortOrder
    commentReply?: SortOrderInput | SortOrder
    dmCount?: SortOrder
    commentCount?: SortOrder
    _count?: ListenerCountOrderByAggregateInput
    _avg?: ListenerAvgOrderByAggregateInput
    _max?: ListenerMaxOrderByAggregateInput
    _min?: ListenerMinOrderByAggregateInput
    _sum?: ListenerSumOrderByAggregateInput
  }

  export type ListenerScalarWhereWithAggregatesInput = {
    AND?: ListenerScalarWhereWithAggregatesInput | ListenerScalarWhereWithAggregatesInput[]
    OR?: ListenerScalarWhereWithAggregatesInput[]
    NOT?: ListenerScalarWhereWithAggregatesInput | ListenerScalarWhereWithAggregatesInput[]
    id?: UuidWithAggregatesFilter<"Listener"> | string
    automationId?: UuidWithAggregatesFilter<"Listener"> | string
    listener?: EnumLISTENERSWithAggregatesFilter<"Listener"> | $Enums.LISTENERS
    prompt?: StringWithAggregatesFilter<"Listener"> | string
    commentReply?: StringNullableWithAggregatesFilter<"Listener"> | string | null
    dmCount?: IntWithAggregatesFilter<"Listener"> | number
    commentCount?: IntWithAggregatesFilter<"Listener"> | number
  }

  export type TriggerWhereInput = {
    AND?: TriggerWhereInput | TriggerWhereInput[]
    OR?: TriggerWhereInput[]
    NOT?: TriggerWhereInput | TriggerWhereInput[]
    id?: UuidFilter<"Trigger"> | string
    type?: StringFilter<"Trigger"> | string
    automationId?: UuidNullableFilter<"Trigger"> | string | null
    Automation?: XOR<AutomationNullableScalarRelationFilter, AutomationWhereInput> | null
  }

  export type TriggerOrderByWithRelationInput = {
    id?: SortOrder
    type?: SortOrder
    automationId?: SortOrderInput | SortOrder
    Automation?: AutomationOrderByWithRelationInput
  }

  export type TriggerWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: TriggerWhereInput | TriggerWhereInput[]
    OR?: TriggerWhereInput[]
    NOT?: TriggerWhereInput | TriggerWhereInput[]
    type?: StringFilter<"Trigger"> | string
    automationId?: UuidNullableFilter<"Trigger"> | string | null
    Automation?: XOR<AutomationNullableScalarRelationFilter, AutomationWhereInput> | null
  }, "id">

  export type TriggerOrderByWithAggregationInput = {
    id?: SortOrder
    type?: SortOrder
    automationId?: SortOrderInput | SortOrder
    _count?: TriggerCountOrderByAggregateInput
    _max?: TriggerMaxOrderByAggregateInput
    _min?: TriggerMinOrderByAggregateInput
  }

  export type TriggerScalarWhereWithAggregatesInput = {
    AND?: TriggerScalarWhereWithAggregatesInput | TriggerScalarWhereWithAggregatesInput[]
    OR?: TriggerScalarWhereWithAggregatesInput[]
    NOT?: TriggerScalarWhereWithAggregatesInput | TriggerScalarWhereWithAggregatesInput[]
    id?: UuidWithAggregatesFilter<"Trigger"> | string
    type?: StringWithAggregatesFilter<"Trigger"> | string
    automationId?: UuidNullableWithAggregatesFilter<"Trigger"> | string | null
  }

  export type KeywordWhereInput = {
    AND?: KeywordWhereInput | KeywordWhereInput[]
    OR?: KeywordWhereInput[]
    NOT?: KeywordWhereInput | KeywordWhereInput[]
    id?: UuidFilter<"Keyword"> | string
    word?: StringFilter<"Keyword"> | string
    automationId?: UuidNullableFilter<"Keyword"> | string | null
    Automation?: XOR<AutomationNullableScalarRelationFilter, AutomationWhereInput> | null
  }

  export type KeywordOrderByWithRelationInput = {
    id?: SortOrder
    word?: SortOrder
    automationId?: SortOrderInput | SortOrder
    Automation?: AutomationOrderByWithRelationInput
  }

  export type KeywordWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    automationId_word?: KeywordAutomationIdWordCompoundUniqueInput
    AND?: KeywordWhereInput | KeywordWhereInput[]
    OR?: KeywordWhereInput[]
    NOT?: KeywordWhereInput | KeywordWhereInput[]
    word?: StringFilter<"Keyword"> | string
    automationId?: UuidNullableFilter<"Keyword"> | string | null
    Automation?: XOR<AutomationNullableScalarRelationFilter, AutomationWhereInput> | null
  }, "id" | "automationId_word">

  export type KeywordOrderByWithAggregationInput = {
    id?: SortOrder
    word?: SortOrder
    automationId?: SortOrderInput | SortOrder
    _count?: KeywordCountOrderByAggregateInput
    _max?: KeywordMaxOrderByAggregateInput
    _min?: KeywordMinOrderByAggregateInput
  }

  export type KeywordScalarWhereWithAggregatesInput = {
    AND?: KeywordScalarWhereWithAggregatesInput | KeywordScalarWhereWithAggregatesInput[]
    OR?: KeywordScalarWhereWithAggregatesInput[]
    NOT?: KeywordScalarWhereWithAggregatesInput | KeywordScalarWhereWithAggregatesInput[]
    id?: UuidWithAggregatesFilter<"Keyword"> | string
    word?: StringWithAggregatesFilter<"Keyword"> | string
    automationId?: UuidNullableWithAggregatesFilter<"Keyword"> | string | null
  }

  export type UserCreateInput = {
    id?: string
    clerkId: string
    email: string
    firstname?: string | null
    lastname?: string | null
    createdAt?: Date | string
    subscription?: SubscriptionCreateNestedOneWithoutUserInput
    integrations?: IntegrationsCreateNestedManyWithoutUserInput
    automations?: AutomationCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateInput = {
    id?: string
    clerkId: string
    email: string
    firstname?: string | null
    lastname?: string | null
    createdAt?: Date | string
    subscription?: SubscriptionUncheckedCreateNestedOneWithoutUserInput
    integrations?: IntegrationsUncheckedCreateNestedManyWithoutUserInput
    automations?: AutomationUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    clerkId?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    firstname?: NullableStringFieldUpdateOperationsInput | string | null
    lastname?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    subscription?: SubscriptionUpdateOneWithoutUserNestedInput
    integrations?: IntegrationsUpdateManyWithoutUserNestedInput
    automations?: AutomationUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    clerkId?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    firstname?: NullableStringFieldUpdateOperationsInput | string | null
    lastname?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    subscription?: SubscriptionUncheckedUpdateOneWithoutUserNestedInput
    integrations?: IntegrationsUncheckedUpdateManyWithoutUserNestedInput
    automations?: AutomationUncheckedUpdateManyWithoutUserNestedInput
  }

  export type UserCreateManyInput = {
    id?: string
    clerkId: string
    email: string
    firstname?: string | null
    lastname?: string | null
    createdAt?: Date | string
  }

  export type UserUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    clerkId?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    firstname?: NullableStringFieldUpdateOperationsInput | string | null
    lastname?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    clerkId?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    firstname?: NullableStringFieldUpdateOperationsInput | string | null
    lastname?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SubscriptionCreateInput = {
    id?: string
    createdAt?: Date | string
    plan?: $Enums.SUBSCRIPTION_PLAN
    updatedAt?: Date | string
    customerId?: string | null
    User?: UserCreateNestedOneWithoutSubscriptionInput
  }

  export type SubscriptionUncheckedCreateInput = {
    id?: string
    userId?: string | null
    createdAt?: Date | string
    plan?: $Enums.SUBSCRIPTION_PLAN
    updatedAt?: Date | string
    customerId?: string | null
  }

  export type SubscriptionUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    plan?: EnumSUBSCRIPTION_PLANFieldUpdateOperationsInput | $Enums.SUBSCRIPTION_PLAN
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    customerId?: NullableStringFieldUpdateOperationsInput | string | null
    User?: UserUpdateOneWithoutSubscriptionNestedInput
  }

  export type SubscriptionUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    plan?: EnumSUBSCRIPTION_PLANFieldUpdateOperationsInput | $Enums.SUBSCRIPTION_PLAN
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    customerId?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type SubscriptionCreateManyInput = {
    id?: string
    userId?: string | null
    createdAt?: Date | string
    plan?: $Enums.SUBSCRIPTION_PLAN
    updatedAt?: Date | string
    customerId?: string | null
  }

  export type SubscriptionUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    plan?: EnumSUBSCRIPTION_PLANFieldUpdateOperationsInput | $Enums.SUBSCRIPTION_PLAN
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    customerId?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type SubscriptionUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    plan?: EnumSUBSCRIPTION_PLANFieldUpdateOperationsInput | $Enums.SUBSCRIPTION_PLAN
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    customerId?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type IntegrationsCreateInput = {
    id?: string
    name?: $Enums.INTEGRATIONS
    createdAt?: Date | string
    token: string
    expiresAt?: Date | string | null
    instagramId?: string | null
    User?: UserCreateNestedOneWithoutIntegrationsInput
  }

  export type IntegrationsUncheckedCreateInput = {
    id?: string
    name?: $Enums.INTEGRATIONS
    createdAt?: Date | string
    userId?: string | null
    token: string
    expiresAt?: Date | string | null
    instagramId?: string | null
  }

  export type IntegrationsUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: EnumINTEGRATIONSFieldUpdateOperationsInput | $Enums.INTEGRATIONS
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    token?: StringFieldUpdateOperationsInput | string
    expiresAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    instagramId?: NullableStringFieldUpdateOperationsInput | string | null
    User?: UserUpdateOneWithoutIntegrationsNestedInput
  }

  export type IntegrationsUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: EnumINTEGRATIONSFieldUpdateOperationsInput | $Enums.INTEGRATIONS
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    userId?: NullableStringFieldUpdateOperationsInput | string | null
    token?: StringFieldUpdateOperationsInput | string
    expiresAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    instagramId?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type IntegrationsCreateManyInput = {
    id?: string
    name?: $Enums.INTEGRATIONS
    createdAt?: Date | string
    userId?: string | null
    token: string
    expiresAt?: Date | string | null
    instagramId?: string | null
  }

  export type IntegrationsUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: EnumINTEGRATIONSFieldUpdateOperationsInput | $Enums.INTEGRATIONS
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    token?: StringFieldUpdateOperationsInput | string
    expiresAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    instagramId?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type IntegrationsUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: EnumINTEGRATIONSFieldUpdateOperationsInput | $Enums.INTEGRATIONS
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    userId?: NullableStringFieldUpdateOperationsInput | string | null
    token?: StringFieldUpdateOperationsInput | string
    expiresAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    instagramId?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type AutomationCreateInput = {
    id?: string
    name?: string
    createdAt?: Date | string
    active?: boolean
    trigger?: TriggerCreateNestedManyWithoutAutomationInput
    listener?: ListenerCreateNestedOneWithoutAutomationInput
    posts?: PostCreateNestedManyWithoutAutomationInput
    dms?: DmsCreateNestedManyWithoutAutomationInput
    User?: UserCreateNestedOneWithoutAutomationsInput
    keywords?: KeywordCreateNestedManyWithoutAutomationInput
  }

  export type AutomationUncheckedCreateInput = {
    id?: string
    name?: string
    createdAt?: Date | string
    active?: boolean
    userId?: string | null
    trigger?: TriggerUncheckedCreateNestedManyWithoutAutomationInput
    listener?: ListenerUncheckedCreateNestedOneWithoutAutomationInput
    posts?: PostUncheckedCreateNestedManyWithoutAutomationInput
    dms?: DmsUncheckedCreateNestedManyWithoutAutomationInput
    keywords?: KeywordUncheckedCreateNestedManyWithoutAutomationInput
  }

  export type AutomationUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    active?: BoolFieldUpdateOperationsInput | boolean
    trigger?: TriggerUpdateManyWithoutAutomationNestedInput
    listener?: ListenerUpdateOneWithoutAutomationNestedInput
    posts?: PostUpdateManyWithoutAutomationNestedInput
    dms?: DmsUpdateManyWithoutAutomationNestedInput
    User?: UserUpdateOneWithoutAutomationsNestedInput
    keywords?: KeywordUpdateManyWithoutAutomationNestedInput
  }

  export type AutomationUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    active?: BoolFieldUpdateOperationsInput | boolean
    userId?: NullableStringFieldUpdateOperationsInput | string | null
    trigger?: TriggerUncheckedUpdateManyWithoutAutomationNestedInput
    listener?: ListenerUncheckedUpdateOneWithoutAutomationNestedInput
    posts?: PostUncheckedUpdateManyWithoutAutomationNestedInput
    dms?: DmsUncheckedUpdateManyWithoutAutomationNestedInput
    keywords?: KeywordUncheckedUpdateManyWithoutAutomationNestedInput
  }

  export type AutomationCreateManyInput = {
    id?: string
    name?: string
    createdAt?: Date | string
    active?: boolean
    userId?: string | null
  }

  export type AutomationUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    active?: BoolFieldUpdateOperationsInput | boolean
  }

  export type AutomationUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    active?: BoolFieldUpdateOperationsInput | boolean
    userId?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type DmsCreateInput = {
    id?: string
    createdAt?: Date | string
    senderId?: string | null
    reciever?: string | null
    message?: string | null
    metadata?: NullableJsonNullValueInput | InputJsonValue
    Automation?: AutomationCreateNestedOneWithoutDmsInput
  }

  export type DmsUncheckedCreateInput = {
    id?: string
    automationId?: string | null
    createdAt?: Date | string
    senderId?: string | null
    reciever?: string | null
    message?: string | null
    metadata?: NullableJsonNullValueInput | InputJsonValue
  }

  export type DmsUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    senderId?: NullableStringFieldUpdateOperationsInput | string | null
    reciever?: NullableStringFieldUpdateOperationsInput | string | null
    message?: NullableStringFieldUpdateOperationsInput | string | null
    metadata?: NullableJsonNullValueInput | InputJsonValue
    Automation?: AutomationUpdateOneWithoutDmsNestedInput
  }

  export type DmsUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    automationId?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    senderId?: NullableStringFieldUpdateOperationsInput | string | null
    reciever?: NullableStringFieldUpdateOperationsInput | string | null
    message?: NullableStringFieldUpdateOperationsInput | string | null
    metadata?: NullableJsonNullValueInput | InputJsonValue
  }

  export type DmsCreateManyInput = {
    id?: string
    automationId?: string | null
    createdAt?: Date | string
    senderId?: string | null
    reciever?: string | null
    message?: string | null
    metadata?: NullableJsonNullValueInput | InputJsonValue
  }

  export type DmsUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    senderId?: NullableStringFieldUpdateOperationsInput | string | null
    reciever?: NullableStringFieldUpdateOperationsInput | string | null
    message?: NullableStringFieldUpdateOperationsInput | string | null
    metadata?: NullableJsonNullValueInput | InputJsonValue
  }

  export type DmsUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    automationId?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    senderId?: NullableStringFieldUpdateOperationsInput | string | null
    reciever?: NullableStringFieldUpdateOperationsInput | string | null
    message?: NullableStringFieldUpdateOperationsInput | string | null
    metadata?: NullableJsonNullValueInput | InputJsonValue
  }

  export type PostCreateInput = {
    id?: string
    postid: string
    caption?: string | null
    media: string
    mediaType?: $Enums.MEDIATYPE
    Automation?: AutomationCreateNestedOneWithoutPostsInput
  }

  export type PostUncheckedCreateInput = {
    id?: string
    postid: string
    caption?: string | null
    media: string
    mediaType?: $Enums.MEDIATYPE
    automationId?: string | null
  }

  export type PostUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    postid?: StringFieldUpdateOperationsInput | string
    caption?: NullableStringFieldUpdateOperationsInput | string | null
    media?: StringFieldUpdateOperationsInput | string
    mediaType?: EnumMEDIATYPEFieldUpdateOperationsInput | $Enums.MEDIATYPE
    Automation?: AutomationUpdateOneWithoutPostsNestedInput
  }

  export type PostUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    postid?: StringFieldUpdateOperationsInput | string
    caption?: NullableStringFieldUpdateOperationsInput | string | null
    media?: StringFieldUpdateOperationsInput | string
    mediaType?: EnumMEDIATYPEFieldUpdateOperationsInput | $Enums.MEDIATYPE
    automationId?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type PostCreateManyInput = {
    id?: string
    postid: string
    caption?: string | null
    media: string
    mediaType?: $Enums.MEDIATYPE
    automationId?: string | null
  }

  export type PostUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    postid?: StringFieldUpdateOperationsInput | string
    caption?: NullableStringFieldUpdateOperationsInput | string | null
    media?: StringFieldUpdateOperationsInput | string
    mediaType?: EnumMEDIATYPEFieldUpdateOperationsInput | $Enums.MEDIATYPE
  }

  export type PostUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    postid?: StringFieldUpdateOperationsInput | string
    caption?: NullableStringFieldUpdateOperationsInput | string | null
    media?: StringFieldUpdateOperationsInput | string
    mediaType?: EnumMEDIATYPEFieldUpdateOperationsInput | $Enums.MEDIATYPE
    automationId?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type ListenerCreateInput = {
    id?: string
    listener?: $Enums.LISTENERS
    prompt: string
    commentReply?: string | null
    dmCount?: number
    commentCount?: number
    Automation: AutomationCreateNestedOneWithoutListenerInput
  }

  export type ListenerUncheckedCreateInput = {
    id?: string
    automationId: string
    listener?: $Enums.LISTENERS
    prompt: string
    commentReply?: string | null
    dmCount?: number
    commentCount?: number
  }

  export type ListenerUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    listener?: EnumLISTENERSFieldUpdateOperationsInput | $Enums.LISTENERS
    prompt?: StringFieldUpdateOperationsInput | string
    commentReply?: NullableStringFieldUpdateOperationsInput | string | null
    dmCount?: IntFieldUpdateOperationsInput | number
    commentCount?: IntFieldUpdateOperationsInput | number
    Automation?: AutomationUpdateOneRequiredWithoutListenerNestedInput
  }

  export type ListenerUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    automationId?: StringFieldUpdateOperationsInput | string
    listener?: EnumLISTENERSFieldUpdateOperationsInput | $Enums.LISTENERS
    prompt?: StringFieldUpdateOperationsInput | string
    commentReply?: NullableStringFieldUpdateOperationsInput | string | null
    dmCount?: IntFieldUpdateOperationsInput | number
    commentCount?: IntFieldUpdateOperationsInput | number
  }

  export type ListenerCreateManyInput = {
    id?: string
    automationId: string
    listener?: $Enums.LISTENERS
    prompt: string
    commentReply?: string | null
    dmCount?: number
    commentCount?: number
  }

  export type ListenerUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    listener?: EnumLISTENERSFieldUpdateOperationsInput | $Enums.LISTENERS
    prompt?: StringFieldUpdateOperationsInput | string
    commentReply?: NullableStringFieldUpdateOperationsInput | string | null
    dmCount?: IntFieldUpdateOperationsInput | number
    commentCount?: IntFieldUpdateOperationsInput | number
  }

  export type ListenerUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    automationId?: StringFieldUpdateOperationsInput | string
    listener?: EnumLISTENERSFieldUpdateOperationsInput | $Enums.LISTENERS
    prompt?: StringFieldUpdateOperationsInput | string
    commentReply?: NullableStringFieldUpdateOperationsInput | string | null
    dmCount?: IntFieldUpdateOperationsInput | number
    commentCount?: IntFieldUpdateOperationsInput | number
  }

  export type TriggerCreateInput = {
    id?: string
    type: string
    Automation?: AutomationCreateNestedOneWithoutTriggerInput
  }

  export type TriggerUncheckedCreateInput = {
    id?: string
    type: string
    automationId?: string | null
  }

  export type TriggerUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    Automation?: AutomationUpdateOneWithoutTriggerNestedInput
  }

  export type TriggerUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    automationId?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type TriggerCreateManyInput = {
    id?: string
    type: string
    automationId?: string | null
  }

  export type TriggerUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
  }

  export type TriggerUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    automationId?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type KeywordCreateInput = {
    id?: string
    word: string
    Automation?: AutomationCreateNestedOneWithoutKeywordsInput
  }

  export type KeywordUncheckedCreateInput = {
    id?: string
    word: string
    automationId?: string | null
  }

  export type KeywordUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    word?: StringFieldUpdateOperationsInput | string
    Automation?: AutomationUpdateOneWithoutKeywordsNestedInput
  }

  export type KeywordUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    word?: StringFieldUpdateOperationsInput | string
    automationId?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type KeywordCreateManyInput = {
    id?: string
    word: string
    automationId?: string | null
  }

  export type KeywordUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    word?: StringFieldUpdateOperationsInput | string
  }

  export type KeywordUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    word?: StringFieldUpdateOperationsInput | string
    automationId?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type UuidFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedUuidFilter<$PrismaModel> | string
  }

  export type StringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type StringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type DateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type SubscriptionNullableScalarRelationFilter = {
    is?: SubscriptionWhereInput | null
    isNot?: SubscriptionWhereInput | null
  }

  export type IntegrationsListRelationFilter = {
    every?: IntegrationsWhereInput
    some?: IntegrationsWhereInput
    none?: IntegrationsWhereInput
  }

  export type AutomationListRelationFilter = {
    every?: AutomationWhereInput
    some?: AutomationWhereInput
    none?: AutomationWhereInput
  }

  export type SortOrderInput = {
    sort: SortOrder
    nulls?: NullsOrder
  }

  export type IntegrationsOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type AutomationOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type UserCountOrderByAggregateInput = {
    id?: SortOrder
    clerkId?: SortOrder
    email?: SortOrder
    firstname?: SortOrder
    lastname?: SortOrder
    createdAt?: SortOrder
  }

  export type UserMaxOrderByAggregateInput = {
    id?: SortOrder
    clerkId?: SortOrder
    email?: SortOrder
    firstname?: SortOrder
    lastname?: SortOrder
    createdAt?: SortOrder
  }

  export type UserMinOrderByAggregateInput = {
    id?: SortOrder
    clerkId?: SortOrder
    email?: SortOrder
    firstname?: SortOrder
    lastname?: SortOrder
    createdAt?: SortOrder
  }

  export type UuidWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedUuidWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type StringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type StringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type DateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type UuidNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedUuidNullableFilter<$PrismaModel> | string | null
  }

  export type EnumSUBSCRIPTION_PLANFilter<$PrismaModel = never> = {
    equals?: $Enums.SUBSCRIPTION_PLAN | EnumSUBSCRIPTION_PLANFieldRefInput<$PrismaModel>
    in?: $Enums.SUBSCRIPTION_PLAN[] | ListEnumSUBSCRIPTION_PLANFieldRefInput<$PrismaModel>
    notIn?: $Enums.SUBSCRIPTION_PLAN[] | ListEnumSUBSCRIPTION_PLANFieldRefInput<$PrismaModel>
    not?: NestedEnumSUBSCRIPTION_PLANFilter<$PrismaModel> | $Enums.SUBSCRIPTION_PLAN
  }

  export type UserNullableScalarRelationFilter = {
    is?: UserWhereInput | null
    isNot?: UserWhereInput | null
  }

  export type SubscriptionCountOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    createdAt?: SortOrder
    plan?: SortOrder
    updatedAt?: SortOrder
    customerId?: SortOrder
  }

  export type SubscriptionMaxOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    createdAt?: SortOrder
    plan?: SortOrder
    updatedAt?: SortOrder
    customerId?: SortOrder
  }

  export type SubscriptionMinOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    createdAt?: SortOrder
    plan?: SortOrder
    updatedAt?: SortOrder
    customerId?: SortOrder
  }

  export type UuidNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedUuidNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type EnumSUBSCRIPTION_PLANWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.SUBSCRIPTION_PLAN | EnumSUBSCRIPTION_PLANFieldRefInput<$PrismaModel>
    in?: $Enums.SUBSCRIPTION_PLAN[] | ListEnumSUBSCRIPTION_PLANFieldRefInput<$PrismaModel>
    notIn?: $Enums.SUBSCRIPTION_PLAN[] | ListEnumSUBSCRIPTION_PLANFieldRefInput<$PrismaModel>
    not?: NestedEnumSUBSCRIPTION_PLANWithAggregatesFilter<$PrismaModel> | $Enums.SUBSCRIPTION_PLAN
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumSUBSCRIPTION_PLANFilter<$PrismaModel>
    _max?: NestedEnumSUBSCRIPTION_PLANFilter<$PrismaModel>
  }

  export type EnumINTEGRATIONSFilter<$PrismaModel = never> = {
    equals?: $Enums.INTEGRATIONS | EnumINTEGRATIONSFieldRefInput<$PrismaModel>
    in?: $Enums.INTEGRATIONS[] | ListEnumINTEGRATIONSFieldRefInput<$PrismaModel>
    notIn?: $Enums.INTEGRATIONS[] | ListEnumINTEGRATIONSFieldRefInput<$PrismaModel>
    not?: NestedEnumINTEGRATIONSFilter<$PrismaModel> | $Enums.INTEGRATIONS
  }

  export type DateTimeNullableFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableFilter<$PrismaModel> | Date | string | null
  }

  export type IntegrationsCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    createdAt?: SortOrder
    userId?: SortOrder
    token?: SortOrder
    expiresAt?: SortOrder
    instagramId?: SortOrder
  }

  export type IntegrationsMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    createdAt?: SortOrder
    userId?: SortOrder
    token?: SortOrder
    expiresAt?: SortOrder
    instagramId?: SortOrder
  }

  export type IntegrationsMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    createdAt?: SortOrder
    userId?: SortOrder
    token?: SortOrder
    expiresAt?: SortOrder
    instagramId?: SortOrder
  }

  export type EnumINTEGRATIONSWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.INTEGRATIONS | EnumINTEGRATIONSFieldRefInput<$PrismaModel>
    in?: $Enums.INTEGRATIONS[] | ListEnumINTEGRATIONSFieldRefInput<$PrismaModel>
    notIn?: $Enums.INTEGRATIONS[] | ListEnumINTEGRATIONSFieldRefInput<$PrismaModel>
    not?: NestedEnumINTEGRATIONSWithAggregatesFilter<$PrismaModel> | $Enums.INTEGRATIONS
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumINTEGRATIONSFilter<$PrismaModel>
    _max?: NestedEnumINTEGRATIONSFilter<$PrismaModel>
  }

  export type DateTimeNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableWithAggregatesFilter<$PrismaModel> | Date | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedDateTimeNullableFilter<$PrismaModel>
    _max?: NestedDateTimeNullableFilter<$PrismaModel>
  }

  export type BoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
  }

  export type TriggerListRelationFilter = {
    every?: TriggerWhereInput
    some?: TriggerWhereInput
    none?: TriggerWhereInput
  }

  export type ListenerNullableScalarRelationFilter = {
    is?: ListenerWhereInput | null
    isNot?: ListenerWhereInput | null
  }

  export type PostListRelationFilter = {
    every?: PostWhereInput
    some?: PostWhereInput
    none?: PostWhereInput
  }

  export type DmsListRelationFilter = {
    every?: DmsWhereInput
    some?: DmsWhereInput
    none?: DmsWhereInput
  }

  export type KeywordListRelationFilter = {
    every?: KeywordWhereInput
    some?: KeywordWhereInput
    none?: KeywordWhereInput
  }

  export type TriggerOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type PostOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type DmsOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type KeywordOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type AutomationCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    createdAt?: SortOrder
    active?: SortOrder
    userId?: SortOrder
  }

  export type AutomationMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    createdAt?: SortOrder
    active?: SortOrder
    userId?: SortOrder
  }

  export type AutomationMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    createdAt?: SortOrder
    active?: SortOrder
    userId?: SortOrder
  }

  export type BoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
  }
  export type JsonNullableFilter<$PrismaModel = never> =
    | PatchUndefined<
        Either<Required<JsonNullableFilterBase<$PrismaModel>>, Exclude<keyof Required<JsonNullableFilterBase<$PrismaModel>>, 'path'>>,
        Required<JsonNullableFilterBase<$PrismaModel>>
      >
    | OptionalFlat<Omit<Required<JsonNullableFilterBase<$PrismaModel>>, 'path'>>

  export type JsonNullableFilterBase<$PrismaModel = never> = {
    equals?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
    path?: string[]
    mode?: QueryMode | EnumQueryModeFieldRefInput<$PrismaModel>
    string_contains?: string | StringFieldRefInput<$PrismaModel>
    string_starts_with?: string | StringFieldRefInput<$PrismaModel>
    string_ends_with?: string | StringFieldRefInput<$PrismaModel>
    array_starts_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_ends_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_contains?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    lt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    lte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    not?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
  }

  export type AutomationNullableScalarRelationFilter = {
    is?: AutomationWhereInput | null
    isNot?: AutomationWhereInput | null
  }

  export type DmsCountOrderByAggregateInput = {
    id?: SortOrder
    automationId?: SortOrder
    createdAt?: SortOrder
    senderId?: SortOrder
    reciever?: SortOrder
    message?: SortOrder
    metadata?: SortOrder
  }

  export type DmsMaxOrderByAggregateInput = {
    id?: SortOrder
    automationId?: SortOrder
    createdAt?: SortOrder
    senderId?: SortOrder
    reciever?: SortOrder
    message?: SortOrder
  }

  export type DmsMinOrderByAggregateInput = {
    id?: SortOrder
    automationId?: SortOrder
    createdAt?: SortOrder
    senderId?: SortOrder
    reciever?: SortOrder
    message?: SortOrder
  }
  export type JsonNullableWithAggregatesFilter<$PrismaModel = never> =
    | PatchUndefined<
        Either<Required<JsonNullableWithAggregatesFilterBase<$PrismaModel>>, Exclude<keyof Required<JsonNullableWithAggregatesFilterBase<$PrismaModel>>, 'path'>>,
        Required<JsonNullableWithAggregatesFilterBase<$PrismaModel>>
      >
    | OptionalFlat<Omit<Required<JsonNullableWithAggregatesFilterBase<$PrismaModel>>, 'path'>>

  export type JsonNullableWithAggregatesFilterBase<$PrismaModel = never> = {
    equals?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
    path?: string[]
    mode?: QueryMode | EnumQueryModeFieldRefInput<$PrismaModel>
    string_contains?: string | StringFieldRefInput<$PrismaModel>
    string_starts_with?: string | StringFieldRefInput<$PrismaModel>
    string_ends_with?: string | StringFieldRefInput<$PrismaModel>
    array_starts_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_ends_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_contains?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    lt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    lte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    not?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedJsonNullableFilter<$PrismaModel>
    _max?: NestedJsonNullableFilter<$PrismaModel>
  }

  export type EnumMEDIATYPEFilter<$PrismaModel = never> = {
    equals?: $Enums.MEDIATYPE | EnumMEDIATYPEFieldRefInput<$PrismaModel>
    in?: $Enums.MEDIATYPE[] | ListEnumMEDIATYPEFieldRefInput<$PrismaModel>
    notIn?: $Enums.MEDIATYPE[] | ListEnumMEDIATYPEFieldRefInput<$PrismaModel>
    not?: NestedEnumMEDIATYPEFilter<$PrismaModel> | $Enums.MEDIATYPE
  }

  export type PostCountOrderByAggregateInput = {
    id?: SortOrder
    postid?: SortOrder
    caption?: SortOrder
    media?: SortOrder
    mediaType?: SortOrder
    automationId?: SortOrder
  }

  export type PostMaxOrderByAggregateInput = {
    id?: SortOrder
    postid?: SortOrder
    caption?: SortOrder
    media?: SortOrder
    mediaType?: SortOrder
    automationId?: SortOrder
  }

  export type PostMinOrderByAggregateInput = {
    id?: SortOrder
    postid?: SortOrder
    caption?: SortOrder
    media?: SortOrder
    mediaType?: SortOrder
    automationId?: SortOrder
  }

  export type EnumMEDIATYPEWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.MEDIATYPE | EnumMEDIATYPEFieldRefInput<$PrismaModel>
    in?: $Enums.MEDIATYPE[] | ListEnumMEDIATYPEFieldRefInput<$PrismaModel>
    notIn?: $Enums.MEDIATYPE[] | ListEnumMEDIATYPEFieldRefInput<$PrismaModel>
    not?: NestedEnumMEDIATYPEWithAggregatesFilter<$PrismaModel> | $Enums.MEDIATYPE
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumMEDIATYPEFilter<$PrismaModel>
    _max?: NestedEnumMEDIATYPEFilter<$PrismaModel>
  }

  export type EnumLISTENERSFilter<$PrismaModel = never> = {
    equals?: $Enums.LISTENERS | EnumLISTENERSFieldRefInput<$PrismaModel>
    in?: $Enums.LISTENERS[] | ListEnumLISTENERSFieldRefInput<$PrismaModel>
    notIn?: $Enums.LISTENERS[] | ListEnumLISTENERSFieldRefInput<$PrismaModel>
    not?: NestedEnumLISTENERSFilter<$PrismaModel> | $Enums.LISTENERS
  }

  export type IntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type AutomationScalarRelationFilter = {
    is?: AutomationWhereInput
    isNot?: AutomationWhereInput
  }

  export type ListenerCountOrderByAggregateInput = {
    id?: SortOrder
    automationId?: SortOrder
    listener?: SortOrder
    prompt?: SortOrder
    commentReply?: SortOrder
    dmCount?: SortOrder
    commentCount?: SortOrder
  }

  export type ListenerAvgOrderByAggregateInput = {
    dmCount?: SortOrder
    commentCount?: SortOrder
  }

  export type ListenerMaxOrderByAggregateInput = {
    id?: SortOrder
    automationId?: SortOrder
    listener?: SortOrder
    prompt?: SortOrder
    commentReply?: SortOrder
    dmCount?: SortOrder
    commentCount?: SortOrder
  }

  export type ListenerMinOrderByAggregateInput = {
    id?: SortOrder
    automationId?: SortOrder
    listener?: SortOrder
    prompt?: SortOrder
    commentReply?: SortOrder
    dmCount?: SortOrder
    commentCount?: SortOrder
  }

  export type ListenerSumOrderByAggregateInput = {
    dmCount?: SortOrder
    commentCount?: SortOrder
  }

  export type EnumLISTENERSWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.LISTENERS | EnumLISTENERSFieldRefInput<$PrismaModel>
    in?: $Enums.LISTENERS[] | ListEnumLISTENERSFieldRefInput<$PrismaModel>
    notIn?: $Enums.LISTENERS[] | ListEnumLISTENERSFieldRefInput<$PrismaModel>
    not?: NestedEnumLISTENERSWithAggregatesFilter<$PrismaModel> | $Enums.LISTENERS
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumLISTENERSFilter<$PrismaModel>
    _max?: NestedEnumLISTENERSFilter<$PrismaModel>
  }

  export type IntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type TriggerCountOrderByAggregateInput = {
    id?: SortOrder
    type?: SortOrder
    automationId?: SortOrder
  }

  export type TriggerMaxOrderByAggregateInput = {
    id?: SortOrder
    type?: SortOrder
    automationId?: SortOrder
  }

  export type TriggerMinOrderByAggregateInput = {
    id?: SortOrder
    type?: SortOrder
    automationId?: SortOrder
  }

  export type KeywordAutomationIdWordCompoundUniqueInput = {
    automationId: string
    word: string
  }

  export type KeywordCountOrderByAggregateInput = {
    id?: SortOrder
    word?: SortOrder
    automationId?: SortOrder
  }

  export type KeywordMaxOrderByAggregateInput = {
    id?: SortOrder
    word?: SortOrder
    automationId?: SortOrder
  }

  export type KeywordMinOrderByAggregateInput = {
    id?: SortOrder
    word?: SortOrder
    automationId?: SortOrder
  }

  export type SubscriptionCreateNestedOneWithoutUserInput = {
    create?: XOR<SubscriptionCreateWithoutUserInput, SubscriptionUncheckedCreateWithoutUserInput>
    connectOrCreate?: SubscriptionCreateOrConnectWithoutUserInput
    connect?: SubscriptionWhereUniqueInput
  }

  export type IntegrationsCreateNestedManyWithoutUserInput = {
    create?: XOR<IntegrationsCreateWithoutUserInput, IntegrationsUncheckedCreateWithoutUserInput> | IntegrationsCreateWithoutUserInput[] | IntegrationsUncheckedCreateWithoutUserInput[]
    connectOrCreate?: IntegrationsCreateOrConnectWithoutUserInput | IntegrationsCreateOrConnectWithoutUserInput[]
    createMany?: IntegrationsCreateManyUserInputEnvelope
    connect?: IntegrationsWhereUniqueInput | IntegrationsWhereUniqueInput[]
  }

  export type AutomationCreateNestedManyWithoutUserInput = {
    create?: XOR<AutomationCreateWithoutUserInput, AutomationUncheckedCreateWithoutUserInput> | AutomationCreateWithoutUserInput[] | AutomationUncheckedCreateWithoutUserInput[]
    connectOrCreate?: AutomationCreateOrConnectWithoutUserInput | AutomationCreateOrConnectWithoutUserInput[]
    createMany?: AutomationCreateManyUserInputEnvelope
    connect?: AutomationWhereUniqueInput | AutomationWhereUniqueInput[]
  }

  export type SubscriptionUncheckedCreateNestedOneWithoutUserInput = {
    create?: XOR<SubscriptionCreateWithoutUserInput, SubscriptionUncheckedCreateWithoutUserInput>
    connectOrCreate?: SubscriptionCreateOrConnectWithoutUserInput
    connect?: SubscriptionWhereUniqueInput
  }

  export type IntegrationsUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<IntegrationsCreateWithoutUserInput, IntegrationsUncheckedCreateWithoutUserInput> | IntegrationsCreateWithoutUserInput[] | IntegrationsUncheckedCreateWithoutUserInput[]
    connectOrCreate?: IntegrationsCreateOrConnectWithoutUserInput | IntegrationsCreateOrConnectWithoutUserInput[]
    createMany?: IntegrationsCreateManyUserInputEnvelope
    connect?: IntegrationsWhereUniqueInput | IntegrationsWhereUniqueInput[]
  }

  export type AutomationUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<AutomationCreateWithoutUserInput, AutomationUncheckedCreateWithoutUserInput> | AutomationCreateWithoutUserInput[] | AutomationUncheckedCreateWithoutUserInput[]
    connectOrCreate?: AutomationCreateOrConnectWithoutUserInput | AutomationCreateOrConnectWithoutUserInput[]
    createMany?: AutomationCreateManyUserInputEnvelope
    connect?: AutomationWhereUniqueInput | AutomationWhereUniqueInput[]
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type SubscriptionUpdateOneWithoutUserNestedInput = {
    create?: XOR<SubscriptionCreateWithoutUserInput, SubscriptionUncheckedCreateWithoutUserInput>
    connectOrCreate?: SubscriptionCreateOrConnectWithoutUserInput
    upsert?: SubscriptionUpsertWithoutUserInput
    disconnect?: SubscriptionWhereInput | boolean
    delete?: SubscriptionWhereInput | boolean
    connect?: SubscriptionWhereUniqueInput
    update?: XOR<XOR<SubscriptionUpdateToOneWithWhereWithoutUserInput, SubscriptionUpdateWithoutUserInput>, SubscriptionUncheckedUpdateWithoutUserInput>
  }

  export type IntegrationsUpdateManyWithoutUserNestedInput = {
    create?: XOR<IntegrationsCreateWithoutUserInput, IntegrationsUncheckedCreateWithoutUserInput> | IntegrationsCreateWithoutUserInput[] | IntegrationsUncheckedCreateWithoutUserInput[]
    connectOrCreate?: IntegrationsCreateOrConnectWithoutUserInput | IntegrationsCreateOrConnectWithoutUserInput[]
    upsert?: IntegrationsUpsertWithWhereUniqueWithoutUserInput | IntegrationsUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: IntegrationsCreateManyUserInputEnvelope
    set?: IntegrationsWhereUniqueInput | IntegrationsWhereUniqueInput[]
    disconnect?: IntegrationsWhereUniqueInput | IntegrationsWhereUniqueInput[]
    delete?: IntegrationsWhereUniqueInput | IntegrationsWhereUniqueInput[]
    connect?: IntegrationsWhereUniqueInput | IntegrationsWhereUniqueInput[]
    update?: IntegrationsUpdateWithWhereUniqueWithoutUserInput | IntegrationsUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: IntegrationsUpdateManyWithWhereWithoutUserInput | IntegrationsUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: IntegrationsScalarWhereInput | IntegrationsScalarWhereInput[]
  }

  export type AutomationUpdateManyWithoutUserNestedInput = {
    create?: XOR<AutomationCreateWithoutUserInput, AutomationUncheckedCreateWithoutUserInput> | AutomationCreateWithoutUserInput[] | AutomationUncheckedCreateWithoutUserInput[]
    connectOrCreate?: AutomationCreateOrConnectWithoutUserInput | AutomationCreateOrConnectWithoutUserInput[]
    upsert?: AutomationUpsertWithWhereUniqueWithoutUserInput | AutomationUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: AutomationCreateManyUserInputEnvelope
    set?: AutomationWhereUniqueInput | AutomationWhereUniqueInput[]
    disconnect?: AutomationWhereUniqueInput | AutomationWhereUniqueInput[]
    delete?: AutomationWhereUniqueInput | AutomationWhereUniqueInput[]
    connect?: AutomationWhereUniqueInput | AutomationWhereUniqueInput[]
    update?: AutomationUpdateWithWhereUniqueWithoutUserInput | AutomationUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: AutomationUpdateManyWithWhereWithoutUserInput | AutomationUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: AutomationScalarWhereInput | AutomationScalarWhereInput[]
  }

  export type SubscriptionUncheckedUpdateOneWithoutUserNestedInput = {
    create?: XOR<SubscriptionCreateWithoutUserInput, SubscriptionUncheckedCreateWithoutUserInput>
    connectOrCreate?: SubscriptionCreateOrConnectWithoutUserInput
    upsert?: SubscriptionUpsertWithoutUserInput
    disconnect?: SubscriptionWhereInput | boolean
    delete?: SubscriptionWhereInput | boolean
    connect?: SubscriptionWhereUniqueInput
    update?: XOR<XOR<SubscriptionUpdateToOneWithWhereWithoutUserInput, SubscriptionUpdateWithoutUserInput>, SubscriptionUncheckedUpdateWithoutUserInput>
  }

  export type IntegrationsUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<IntegrationsCreateWithoutUserInput, IntegrationsUncheckedCreateWithoutUserInput> | IntegrationsCreateWithoutUserInput[] | IntegrationsUncheckedCreateWithoutUserInput[]
    connectOrCreate?: IntegrationsCreateOrConnectWithoutUserInput | IntegrationsCreateOrConnectWithoutUserInput[]
    upsert?: IntegrationsUpsertWithWhereUniqueWithoutUserInput | IntegrationsUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: IntegrationsCreateManyUserInputEnvelope
    set?: IntegrationsWhereUniqueInput | IntegrationsWhereUniqueInput[]
    disconnect?: IntegrationsWhereUniqueInput | IntegrationsWhereUniqueInput[]
    delete?: IntegrationsWhereUniqueInput | IntegrationsWhereUniqueInput[]
    connect?: IntegrationsWhereUniqueInput | IntegrationsWhereUniqueInput[]
    update?: IntegrationsUpdateWithWhereUniqueWithoutUserInput | IntegrationsUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: IntegrationsUpdateManyWithWhereWithoutUserInput | IntegrationsUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: IntegrationsScalarWhereInput | IntegrationsScalarWhereInput[]
  }

  export type AutomationUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<AutomationCreateWithoutUserInput, AutomationUncheckedCreateWithoutUserInput> | AutomationCreateWithoutUserInput[] | AutomationUncheckedCreateWithoutUserInput[]
    connectOrCreate?: AutomationCreateOrConnectWithoutUserInput | AutomationCreateOrConnectWithoutUserInput[]
    upsert?: AutomationUpsertWithWhereUniqueWithoutUserInput | AutomationUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: AutomationCreateManyUserInputEnvelope
    set?: AutomationWhereUniqueInput | AutomationWhereUniqueInput[]
    disconnect?: AutomationWhereUniqueInput | AutomationWhereUniqueInput[]
    delete?: AutomationWhereUniqueInput | AutomationWhereUniqueInput[]
    connect?: AutomationWhereUniqueInput | AutomationWhereUniqueInput[]
    update?: AutomationUpdateWithWhereUniqueWithoutUserInput | AutomationUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: AutomationUpdateManyWithWhereWithoutUserInput | AutomationUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: AutomationScalarWhereInput | AutomationScalarWhereInput[]
  }

  export type UserCreateNestedOneWithoutSubscriptionInput = {
    create?: XOR<UserCreateWithoutSubscriptionInput, UserUncheckedCreateWithoutSubscriptionInput>
    connectOrCreate?: UserCreateOrConnectWithoutSubscriptionInput
    connect?: UserWhereUniqueInput
  }

  export type EnumSUBSCRIPTION_PLANFieldUpdateOperationsInput = {
    set?: $Enums.SUBSCRIPTION_PLAN
  }

  export type UserUpdateOneWithoutSubscriptionNestedInput = {
    create?: XOR<UserCreateWithoutSubscriptionInput, UserUncheckedCreateWithoutSubscriptionInput>
    connectOrCreate?: UserCreateOrConnectWithoutSubscriptionInput
    upsert?: UserUpsertWithoutSubscriptionInput
    disconnect?: UserWhereInput | boolean
    delete?: UserWhereInput | boolean
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutSubscriptionInput, UserUpdateWithoutSubscriptionInput>, UserUncheckedUpdateWithoutSubscriptionInput>
  }

  export type UserCreateNestedOneWithoutIntegrationsInput = {
    create?: XOR<UserCreateWithoutIntegrationsInput, UserUncheckedCreateWithoutIntegrationsInput>
    connectOrCreate?: UserCreateOrConnectWithoutIntegrationsInput
    connect?: UserWhereUniqueInput
  }

  export type EnumINTEGRATIONSFieldUpdateOperationsInput = {
    set?: $Enums.INTEGRATIONS
  }

  export type NullableDateTimeFieldUpdateOperationsInput = {
    set?: Date | string | null
  }

  export type UserUpdateOneWithoutIntegrationsNestedInput = {
    create?: XOR<UserCreateWithoutIntegrationsInput, UserUncheckedCreateWithoutIntegrationsInput>
    connectOrCreate?: UserCreateOrConnectWithoutIntegrationsInput
    upsert?: UserUpsertWithoutIntegrationsInput
    disconnect?: UserWhereInput | boolean
    delete?: UserWhereInput | boolean
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutIntegrationsInput, UserUpdateWithoutIntegrationsInput>, UserUncheckedUpdateWithoutIntegrationsInput>
  }

  export type TriggerCreateNestedManyWithoutAutomationInput = {
    create?: XOR<TriggerCreateWithoutAutomationInput, TriggerUncheckedCreateWithoutAutomationInput> | TriggerCreateWithoutAutomationInput[] | TriggerUncheckedCreateWithoutAutomationInput[]
    connectOrCreate?: TriggerCreateOrConnectWithoutAutomationInput | TriggerCreateOrConnectWithoutAutomationInput[]
    createMany?: TriggerCreateManyAutomationInputEnvelope
    connect?: TriggerWhereUniqueInput | TriggerWhereUniqueInput[]
  }

  export type ListenerCreateNestedOneWithoutAutomationInput = {
    create?: XOR<ListenerCreateWithoutAutomationInput, ListenerUncheckedCreateWithoutAutomationInput>
    connectOrCreate?: ListenerCreateOrConnectWithoutAutomationInput
    connect?: ListenerWhereUniqueInput
  }

  export type PostCreateNestedManyWithoutAutomationInput = {
    create?: XOR<PostCreateWithoutAutomationInput, PostUncheckedCreateWithoutAutomationInput> | PostCreateWithoutAutomationInput[] | PostUncheckedCreateWithoutAutomationInput[]
    connectOrCreate?: PostCreateOrConnectWithoutAutomationInput | PostCreateOrConnectWithoutAutomationInput[]
    createMany?: PostCreateManyAutomationInputEnvelope
    connect?: PostWhereUniqueInput | PostWhereUniqueInput[]
  }

  export type DmsCreateNestedManyWithoutAutomationInput = {
    create?: XOR<DmsCreateWithoutAutomationInput, DmsUncheckedCreateWithoutAutomationInput> | DmsCreateWithoutAutomationInput[] | DmsUncheckedCreateWithoutAutomationInput[]
    connectOrCreate?: DmsCreateOrConnectWithoutAutomationInput | DmsCreateOrConnectWithoutAutomationInput[]
    createMany?: DmsCreateManyAutomationInputEnvelope
    connect?: DmsWhereUniqueInput | DmsWhereUniqueInput[]
  }

  export type UserCreateNestedOneWithoutAutomationsInput = {
    create?: XOR<UserCreateWithoutAutomationsInput, UserUncheckedCreateWithoutAutomationsInput>
    connectOrCreate?: UserCreateOrConnectWithoutAutomationsInput
    connect?: UserWhereUniqueInput
  }

  export type KeywordCreateNestedManyWithoutAutomationInput = {
    create?: XOR<KeywordCreateWithoutAutomationInput, KeywordUncheckedCreateWithoutAutomationInput> | KeywordCreateWithoutAutomationInput[] | KeywordUncheckedCreateWithoutAutomationInput[]
    connectOrCreate?: KeywordCreateOrConnectWithoutAutomationInput | KeywordCreateOrConnectWithoutAutomationInput[]
    createMany?: KeywordCreateManyAutomationInputEnvelope
    connect?: KeywordWhereUniqueInput | KeywordWhereUniqueInput[]
  }

  export type TriggerUncheckedCreateNestedManyWithoutAutomationInput = {
    create?: XOR<TriggerCreateWithoutAutomationInput, TriggerUncheckedCreateWithoutAutomationInput> | TriggerCreateWithoutAutomationInput[] | TriggerUncheckedCreateWithoutAutomationInput[]
    connectOrCreate?: TriggerCreateOrConnectWithoutAutomationInput | TriggerCreateOrConnectWithoutAutomationInput[]
    createMany?: TriggerCreateManyAutomationInputEnvelope
    connect?: TriggerWhereUniqueInput | TriggerWhereUniqueInput[]
  }

  export type ListenerUncheckedCreateNestedOneWithoutAutomationInput = {
    create?: XOR<ListenerCreateWithoutAutomationInput, ListenerUncheckedCreateWithoutAutomationInput>
    connectOrCreate?: ListenerCreateOrConnectWithoutAutomationInput
    connect?: ListenerWhereUniqueInput
  }

  export type PostUncheckedCreateNestedManyWithoutAutomationInput = {
    create?: XOR<PostCreateWithoutAutomationInput, PostUncheckedCreateWithoutAutomationInput> | PostCreateWithoutAutomationInput[] | PostUncheckedCreateWithoutAutomationInput[]
    connectOrCreate?: PostCreateOrConnectWithoutAutomationInput | PostCreateOrConnectWithoutAutomationInput[]
    createMany?: PostCreateManyAutomationInputEnvelope
    connect?: PostWhereUniqueInput | PostWhereUniqueInput[]
  }

  export type DmsUncheckedCreateNestedManyWithoutAutomationInput = {
    create?: XOR<DmsCreateWithoutAutomationInput, DmsUncheckedCreateWithoutAutomationInput> | DmsCreateWithoutAutomationInput[] | DmsUncheckedCreateWithoutAutomationInput[]
    connectOrCreate?: DmsCreateOrConnectWithoutAutomationInput | DmsCreateOrConnectWithoutAutomationInput[]
    createMany?: DmsCreateManyAutomationInputEnvelope
    connect?: DmsWhereUniqueInput | DmsWhereUniqueInput[]
  }

  export type KeywordUncheckedCreateNestedManyWithoutAutomationInput = {
    create?: XOR<KeywordCreateWithoutAutomationInput, KeywordUncheckedCreateWithoutAutomationInput> | KeywordCreateWithoutAutomationInput[] | KeywordUncheckedCreateWithoutAutomationInput[]
    connectOrCreate?: KeywordCreateOrConnectWithoutAutomationInput | KeywordCreateOrConnectWithoutAutomationInput[]
    createMany?: KeywordCreateManyAutomationInputEnvelope
    connect?: KeywordWhereUniqueInput | KeywordWhereUniqueInput[]
  }

  export type BoolFieldUpdateOperationsInput = {
    set?: boolean
  }

  export type TriggerUpdateManyWithoutAutomationNestedInput = {
    create?: XOR<TriggerCreateWithoutAutomationInput, TriggerUncheckedCreateWithoutAutomationInput> | TriggerCreateWithoutAutomationInput[] | TriggerUncheckedCreateWithoutAutomationInput[]
    connectOrCreate?: TriggerCreateOrConnectWithoutAutomationInput | TriggerCreateOrConnectWithoutAutomationInput[]
    upsert?: TriggerUpsertWithWhereUniqueWithoutAutomationInput | TriggerUpsertWithWhereUniqueWithoutAutomationInput[]
    createMany?: TriggerCreateManyAutomationInputEnvelope
    set?: TriggerWhereUniqueInput | TriggerWhereUniqueInput[]
    disconnect?: TriggerWhereUniqueInput | TriggerWhereUniqueInput[]
    delete?: TriggerWhereUniqueInput | TriggerWhereUniqueInput[]
    connect?: TriggerWhereUniqueInput | TriggerWhereUniqueInput[]
    update?: TriggerUpdateWithWhereUniqueWithoutAutomationInput | TriggerUpdateWithWhereUniqueWithoutAutomationInput[]
    updateMany?: TriggerUpdateManyWithWhereWithoutAutomationInput | TriggerUpdateManyWithWhereWithoutAutomationInput[]
    deleteMany?: TriggerScalarWhereInput | TriggerScalarWhereInput[]
  }

  export type ListenerUpdateOneWithoutAutomationNestedInput = {
    create?: XOR<ListenerCreateWithoutAutomationInput, ListenerUncheckedCreateWithoutAutomationInput>
    connectOrCreate?: ListenerCreateOrConnectWithoutAutomationInput
    upsert?: ListenerUpsertWithoutAutomationInput
    disconnect?: ListenerWhereInput | boolean
    delete?: ListenerWhereInput | boolean
    connect?: ListenerWhereUniqueInput
    update?: XOR<XOR<ListenerUpdateToOneWithWhereWithoutAutomationInput, ListenerUpdateWithoutAutomationInput>, ListenerUncheckedUpdateWithoutAutomationInput>
  }

  export type PostUpdateManyWithoutAutomationNestedInput = {
    create?: XOR<PostCreateWithoutAutomationInput, PostUncheckedCreateWithoutAutomationInput> | PostCreateWithoutAutomationInput[] | PostUncheckedCreateWithoutAutomationInput[]
    connectOrCreate?: PostCreateOrConnectWithoutAutomationInput | PostCreateOrConnectWithoutAutomationInput[]
    upsert?: PostUpsertWithWhereUniqueWithoutAutomationInput | PostUpsertWithWhereUniqueWithoutAutomationInput[]
    createMany?: PostCreateManyAutomationInputEnvelope
    set?: PostWhereUniqueInput | PostWhereUniqueInput[]
    disconnect?: PostWhereUniqueInput | PostWhereUniqueInput[]
    delete?: PostWhereUniqueInput | PostWhereUniqueInput[]
    connect?: PostWhereUniqueInput | PostWhereUniqueInput[]
    update?: PostUpdateWithWhereUniqueWithoutAutomationInput | PostUpdateWithWhereUniqueWithoutAutomationInput[]
    updateMany?: PostUpdateManyWithWhereWithoutAutomationInput | PostUpdateManyWithWhereWithoutAutomationInput[]
    deleteMany?: PostScalarWhereInput | PostScalarWhereInput[]
  }

  export type DmsUpdateManyWithoutAutomationNestedInput = {
    create?: XOR<DmsCreateWithoutAutomationInput, DmsUncheckedCreateWithoutAutomationInput> | DmsCreateWithoutAutomationInput[] | DmsUncheckedCreateWithoutAutomationInput[]
    connectOrCreate?: DmsCreateOrConnectWithoutAutomationInput | DmsCreateOrConnectWithoutAutomationInput[]
    upsert?: DmsUpsertWithWhereUniqueWithoutAutomationInput | DmsUpsertWithWhereUniqueWithoutAutomationInput[]
    createMany?: DmsCreateManyAutomationInputEnvelope
    set?: DmsWhereUniqueInput | DmsWhereUniqueInput[]
    disconnect?: DmsWhereUniqueInput | DmsWhereUniqueInput[]
    delete?: DmsWhereUniqueInput | DmsWhereUniqueInput[]
    connect?: DmsWhereUniqueInput | DmsWhereUniqueInput[]
    update?: DmsUpdateWithWhereUniqueWithoutAutomationInput | DmsUpdateWithWhereUniqueWithoutAutomationInput[]
    updateMany?: DmsUpdateManyWithWhereWithoutAutomationInput | DmsUpdateManyWithWhereWithoutAutomationInput[]
    deleteMany?: DmsScalarWhereInput | DmsScalarWhereInput[]
  }

  export type UserUpdateOneWithoutAutomationsNestedInput = {
    create?: XOR<UserCreateWithoutAutomationsInput, UserUncheckedCreateWithoutAutomationsInput>
    connectOrCreate?: UserCreateOrConnectWithoutAutomationsInput
    upsert?: UserUpsertWithoutAutomationsInput
    disconnect?: UserWhereInput | boolean
    delete?: UserWhereInput | boolean
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutAutomationsInput, UserUpdateWithoutAutomationsInput>, UserUncheckedUpdateWithoutAutomationsInput>
  }

  export type KeywordUpdateManyWithoutAutomationNestedInput = {
    create?: XOR<KeywordCreateWithoutAutomationInput, KeywordUncheckedCreateWithoutAutomationInput> | KeywordCreateWithoutAutomationInput[] | KeywordUncheckedCreateWithoutAutomationInput[]
    connectOrCreate?: KeywordCreateOrConnectWithoutAutomationInput | KeywordCreateOrConnectWithoutAutomationInput[]
    upsert?: KeywordUpsertWithWhereUniqueWithoutAutomationInput | KeywordUpsertWithWhereUniqueWithoutAutomationInput[]
    createMany?: KeywordCreateManyAutomationInputEnvelope
    set?: KeywordWhereUniqueInput | KeywordWhereUniqueInput[]
    disconnect?: KeywordWhereUniqueInput | KeywordWhereUniqueInput[]
    delete?: KeywordWhereUniqueInput | KeywordWhereUniqueInput[]
    connect?: KeywordWhereUniqueInput | KeywordWhereUniqueInput[]
    update?: KeywordUpdateWithWhereUniqueWithoutAutomationInput | KeywordUpdateWithWhereUniqueWithoutAutomationInput[]
    updateMany?: KeywordUpdateManyWithWhereWithoutAutomationInput | KeywordUpdateManyWithWhereWithoutAutomationInput[]
    deleteMany?: KeywordScalarWhereInput | KeywordScalarWhereInput[]
  }

  export type TriggerUncheckedUpdateManyWithoutAutomationNestedInput = {
    create?: XOR<TriggerCreateWithoutAutomationInput, TriggerUncheckedCreateWithoutAutomationInput> | TriggerCreateWithoutAutomationInput[] | TriggerUncheckedCreateWithoutAutomationInput[]
    connectOrCreate?: TriggerCreateOrConnectWithoutAutomationInput | TriggerCreateOrConnectWithoutAutomationInput[]
    upsert?: TriggerUpsertWithWhereUniqueWithoutAutomationInput | TriggerUpsertWithWhereUniqueWithoutAutomationInput[]
    createMany?: TriggerCreateManyAutomationInputEnvelope
    set?: TriggerWhereUniqueInput | TriggerWhereUniqueInput[]
    disconnect?: TriggerWhereUniqueInput | TriggerWhereUniqueInput[]
    delete?: TriggerWhereUniqueInput | TriggerWhereUniqueInput[]
    connect?: TriggerWhereUniqueInput | TriggerWhereUniqueInput[]
    update?: TriggerUpdateWithWhereUniqueWithoutAutomationInput | TriggerUpdateWithWhereUniqueWithoutAutomationInput[]
    updateMany?: TriggerUpdateManyWithWhereWithoutAutomationInput | TriggerUpdateManyWithWhereWithoutAutomationInput[]
    deleteMany?: TriggerScalarWhereInput | TriggerScalarWhereInput[]
  }

  export type ListenerUncheckedUpdateOneWithoutAutomationNestedInput = {
    create?: XOR<ListenerCreateWithoutAutomationInput, ListenerUncheckedCreateWithoutAutomationInput>
    connectOrCreate?: ListenerCreateOrConnectWithoutAutomationInput
    upsert?: ListenerUpsertWithoutAutomationInput
    disconnect?: ListenerWhereInput | boolean
    delete?: ListenerWhereInput | boolean
    connect?: ListenerWhereUniqueInput
    update?: XOR<XOR<ListenerUpdateToOneWithWhereWithoutAutomationInput, ListenerUpdateWithoutAutomationInput>, ListenerUncheckedUpdateWithoutAutomationInput>
  }

  export type PostUncheckedUpdateManyWithoutAutomationNestedInput = {
    create?: XOR<PostCreateWithoutAutomationInput, PostUncheckedCreateWithoutAutomationInput> | PostCreateWithoutAutomationInput[] | PostUncheckedCreateWithoutAutomationInput[]
    connectOrCreate?: PostCreateOrConnectWithoutAutomationInput | PostCreateOrConnectWithoutAutomationInput[]
    upsert?: PostUpsertWithWhereUniqueWithoutAutomationInput | PostUpsertWithWhereUniqueWithoutAutomationInput[]
    createMany?: PostCreateManyAutomationInputEnvelope
    set?: PostWhereUniqueInput | PostWhereUniqueInput[]
    disconnect?: PostWhereUniqueInput | PostWhereUniqueInput[]
    delete?: PostWhereUniqueInput | PostWhereUniqueInput[]
    connect?: PostWhereUniqueInput | PostWhereUniqueInput[]
    update?: PostUpdateWithWhereUniqueWithoutAutomationInput | PostUpdateWithWhereUniqueWithoutAutomationInput[]
    updateMany?: PostUpdateManyWithWhereWithoutAutomationInput | PostUpdateManyWithWhereWithoutAutomationInput[]
    deleteMany?: PostScalarWhereInput | PostScalarWhereInput[]
  }

  export type DmsUncheckedUpdateManyWithoutAutomationNestedInput = {
    create?: XOR<DmsCreateWithoutAutomationInput, DmsUncheckedCreateWithoutAutomationInput> | DmsCreateWithoutAutomationInput[] | DmsUncheckedCreateWithoutAutomationInput[]
    connectOrCreate?: DmsCreateOrConnectWithoutAutomationInput | DmsCreateOrConnectWithoutAutomationInput[]
    upsert?: DmsUpsertWithWhereUniqueWithoutAutomationInput | DmsUpsertWithWhereUniqueWithoutAutomationInput[]
    createMany?: DmsCreateManyAutomationInputEnvelope
    set?: DmsWhereUniqueInput | DmsWhereUniqueInput[]
    disconnect?: DmsWhereUniqueInput | DmsWhereUniqueInput[]
    delete?: DmsWhereUniqueInput | DmsWhereUniqueInput[]
    connect?: DmsWhereUniqueInput | DmsWhereUniqueInput[]
    update?: DmsUpdateWithWhereUniqueWithoutAutomationInput | DmsUpdateWithWhereUniqueWithoutAutomationInput[]
    updateMany?: DmsUpdateManyWithWhereWithoutAutomationInput | DmsUpdateManyWithWhereWithoutAutomationInput[]
    deleteMany?: DmsScalarWhereInput | DmsScalarWhereInput[]
  }

  export type KeywordUncheckedUpdateManyWithoutAutomationNestedInput = {
    create?: XOR<KeywordCreateWithoutAutomationInput, KeywordUncheckedCreateWithoutAutomationInput> | KeywordCreateWithoutAutomationInput[] | KeywordUncheckedCreateWithoutAutomationInput[]
    connectOrCreate?: KeywordCreateOrConnectWithoutAutomationInput | KeywordCreateOrConnectWithoutAutomationInput[]
    upsert?: KeywordUpsertWithWhereUniqueWithoutAutomationInput | KeywordUpsertWithWhereUniqueWithoutAutomationInput[]
    createMany?: KeywordCreateManyAutomationInputEnvelope
    set?: KeywordWhereUniqueInput | KeywordWhereUniqueInput[]
    disconnect?: KeywordWhereUniqueInput | KeywordWhereUniqueInput[]
    delete?: KeywordWhereUniqueInput | KeywordWhereUniqueInput[]
    connect?: KeywordWhereUniqueInput | KeywordWhereUniqueInput[]
    update?: KeywordUpdateWithWhereUniqueWithoutAutomationInput | KeywordUpdateWithWhereUniqueWithoutAutomationInput[]
    updateMany?: KeywordUpdateManyWithWhereWithoutAutomationInput | KeywordUpdateManyWithWhereWithoutAutomationInput[]
    deleteMany?: KeywordScalarWhereInput | KeywordScalarWhereInput[]
  }

  export type AutomationCreateNestedOneWithoutDmsInput = {
    create?: XOR<AutomationCreateWithoutDmsInput, AutomationUncheckedCreateWithoutDmsInput>
    connectOrCreate?: AutomationCreateOrConnectWithoutDmsInput
    connect?: AutomationWhereUniqueInput
  }

  export type AutomationUpdateOneWithoutDmsNestedInput = {
    create?: XOR<AutomationCreateWithoutDmsInput, AutomationUncheckedCreateWithoutDmsInput>
    connectOrCreate?: AutomationCreateOrConnectWithoutDmsInput
    upsert?: AutomationUpsertWithoutDmsInput
    disconnect?: AutomationWhereInput | boolean
    delete?: AutomationWhereInput | boolean
    connect?: AutomationWhereUniqueInput
    update?: XOR<XOR<AutomationUpdateToOneWithWhereWithoutDmsInput, AutomationUpdateWithoutDmsInput>, AutomationUncheckedUpdateWithoutDmsInput>
  }

  export type AutomationCreateNestedOneWithoutPostsInput = {
    create?: XOR<AutomationCreateWithoutPostsInput, AutomationUncheckedCreateWithoutPostsInput>
    connectOrCreate?: AutomationCreateOrConnectWithoutPostsInput
    connect?: AutomationWhereUniqueInput
  }

  export type EnumMEDIATYPEFieldUpdateOperationsInput = {
    set?: $Enums.MEDIATYPE
  }

  export type AutomationUpdateOneWithoutPostsNestedInput = {
    create?: XOR<AutomationCreateWithoutPostsInput, AutomationUncheckedCreateWithoutPostsInput>
    connectOrCreate?: AutomationCreateOrConnectWithoutPostsInput
    upsert?: AutomationUpsertWithoutPostsInput
    disconnect?: AutomationWhereInput | boolean
    delete?: AutomationWhereInput | boolean
    connect?: AutomationWhereUniqueInput
    update?: XOR<XOR<AutomationUpdateToOneWithWhereWithoutPostsInput, AutomationUpdateWithoutPostsInput>, AutomationUncheckedUpdateWithoutPostsInput>
  }

  export type AutomationCreateNestedOneWithoutListenerInput = {
    create?: XOR<AutomationCreateWithoutListenerInput, AutomationUncheckedCreateWithoutListenerInput>
    connectOrCreate?: AutomationCreateOrConnectWithoutListenerInput
    connect?: AutomationWhereUniqueInput
  }

  export type EnumLISTENERSFieldUpdateOperationsInput = {
    set?: $Enums.LISTENERS
  }

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type AutomationUpdateOneRequiredWithoutListenerNestedInput = {
    create?: XOR<AutomationCreateWithoutListenerInput, AutomationUncheckedCreateWithoutListenerInput>
    connectOrCreate?: AutomationCreateOrConnectWithoutListenerInput
    upsert?: AutomationUpsertWithoutListenerInput
    connect?: AutomationWhereUniqueInput
    update?: XOR<XOR<AutomationUpdateToOneWithWhereWithoutListenerInput, AutomationUpdateWithoutListenerInput>, AutomationUncheckedUpdateWithoutListenerInput>
  }

  export type AutomationCreateNestedOneWithoutTriggerInput = {
    create?: XOR<AutomationCreateWithoutTriggerInput, AutomationUncheckedCreateWithoutTriggerInput>
    connectOrCreate?: AutomationCreateOrConnectWithoutTriggerInput
    connect?: AutomationWhereUniqueInput
  }

  export type AutomationUpdateOneWithoutTriggerNestedInput = {
    create?: XOR<AutomationCreateWithoutTriggerInput, AutomationUncheckedCreateWithoutTriggerInput>
    connectOrCreate?: AutomationCreateOrConnectWithoutTriggerInput
    upsert?: AutomationUpsertWithoutTriggerInput
    disconnect?: AutomationWhereInput | boolean
    delete?: AutomationWhereInput | boolean
    connect?: AutomationWhereUniqueInput
    update?: XOR<XOR<AutomationUpdateToOneWithWhereWithoutTriggerInput, AutomationUpdateWithoutTriggerInput>, AutomationUncheckedUpdateWithoutTriggerInput>
  }

  export type AutomationCreateNestedOneWithoutKeywordsInput = {
    create?: XOR<AutomationCreateWithoutKeywordsInput, AutomationUncheckedCreateWithoutKeywordsInput>
    connectOrCreate?: AutomationCreateOrConnectWithoutKeywordsInput
    connect?: AutomationWhereUniqueInput
  }

  export type AutomationUpdateOneWithoutKeywordsNestedInput = {
    create?: XOR<AutomationCreateWithoutKeywordsInput, AutomationUncheckedCreateWithoutKeywordsInput>
    connectOrCreate?: AutomationCreateOrConnectWithoutKeywordsInput
    upsert?: AutomationUpsertWithoutKeywordsInput
    disconnect?: AutomationWhereInput | boolean
    delete?: AutomationWhereInput | boolean
    connect?: AutomationWhereUniqueInput
    update?: XOR<XOR<AutomationUpdateToOneWithWhereWithoutKeywordsInput, AutomationUpdateWithoutKeywordsInput>, AutomationUncheckedUpdateWithoutKeywordsInput>
  }

  export type NestedUuidFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedUuidFilter<$PrismaModel> | string
  }

  export type NestedStringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type NestedStringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type NestedDateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type NestedUuidWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedUuidWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type NestedIntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type NestedStringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type NestedStringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type NestedIntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }

  export type NestedDateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type NestedUuidNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedUuidNullableFilter<$PrismaModel> | string | null
  }

  export type NestedEnumSUBSCRIPTION_PLANFilter<$PrismaModel = never> = {
    equals?: $Enums.SUBSCRIPTION_PLAN | EnumSUBSCRIPTION_PLANFieldRefInput<$PrismaModel>
    in?: $Enums.SUBSCRIPTION_PLAN[] | ListEnumSUBSCRIPTION_PLANFieldRefInput<$PrismaModel>
    notIn?: $Enums.SUBSCRIPTION_PLAN[] | ListEnumSUBSCRIPTION_PLANFieldRefInput<$PrismaModel>
    not?: NestedEnumSUBSCRIPTION_PLANFilter<$PrismaModel> | $Enums.SUBSCRIPTION_PLAN
  }

  export type NestedUuidNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedUuidNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type NestedEnumSUBSCRIPTION_PLANWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.SUBSCRIPTION_PLAN | EnumSUBSCRIPTION_PLANFieldRefInput<$PrismaModel>
    in?: $Enums.SUBSCRIPTION_PLAN[] | ListEnumSUBSCRIPTION_PLANFieldRefInput<$PrismaModel>
    notIn?: $Enums.SUBSCRIPTION_PLAN[] | ListEnumSUBSCRIPTION_PLANFieldRefInput<$PrismaModel>
    not?: NestedEnumSUBSCRIPTION_PLANWithAggregatesFilter<$PrismaModel> | $Enums.SUBSCRIPTION_PLAN
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumSUBSCRIPTION_PLANFilter<$PrismaModel>
    _max?: NestedEnumSUBSCRIPTION_PLANFilter<$PrismaModel>
  }

  export type NestedEnumINTEGRATIONSFilter<$PrismaModel = never> = {
    equals?: $Enums.INTEGRATIONS | EnumINTEGRATIONSFieldRefInput<$PrismaModel>
    in?: $Enums.INTEGRATIONS[] | ListEnumINTEGRATIONSFieldRefInput<$PrismaModel>
    notIn?: $Enums.INTEGRATIONS[] | ListEnumINTEGRATIONSFieldRefInput<$PrismaModel>
    not?: NestedEnumINTEGRATIONSFilter<$PrismaModel> | $Enums.INTEGRATIONS
  }

  export type NestedDateTimeNullableFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableFilter<$PrismaModel> | Date | string | null
  }

  export type NestedEnumINTEGRATIONSWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.INTEGRATIONS | EnumINTEGRATIONSFieldRefInput<$PrismaModel>
    in?: $Enums.INTEGRATIONS[] | ListEnumINTEGRATIONSFieldRefInput<$PrismaModel>
    notIn?: $Enums.INTEGRATIONS[] | ListEnumINTEGRATIONSFieldRefInput<$PrismaModel>
    not?: NestedEnumINTEGRATIONSWithAggregatesFilter<$PrismaModel> | $Enums.INTEGRATIONS
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumINTEGRATIONSFilter<$PrismaModel>
    _max?: NestedEnumINTEGRATIONSFilter<$PrismaModel>
  }

  export type NestedDateTimeNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableWithAggregatesFilter<$PrismaModel> | Date | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedDateTimeNullableFilter<$PrismaModel>
    _max?: NestedDateTimeNullableFilter<$PrismaModel>
  }

  export type NestedBoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
  }

  export type NestedBoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
  }
  export type NestedJsonNullableFilter<$PrismaModel = never> =
    | PatchUndefined<
        Either<Required<NestedJsonNullableFilterBase<$PrismaModel>>, Exclude<keyof Required<NestedJsonNullableFilterBase<$PrismaModel>>, 'path'>>,
        Required<NestedJsonNullableFilterBase<$PrismaModel>>
      >
    | OptionalFlat<Omit<Required<NestedJsonNullableFilterBase<$PrismaModel>>, 'path'>>

  export type NestedJsonNullableFilterBase<$PrismaModel = never> = {
    equals?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
    path?: string[]
    mode?: QueryMode | EnumQueryModeFieldRefInput<$PrismaModel>
    string_contains?: string | StringFieldRefInput<$PrismaModel>
    string_starts_with?: string | StringFieldRefInput<$PrismaModel>
    string_ends_with?: string | StringFieldRefInput<$PrismaModel>
    array_starts_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_ends_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_contains?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    lt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    lte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    not?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
  }

  export type NestedEnumMEDIATYPEFilter<$PrismaModel = never> = {
    equals?: $Enums.MEDIATYPE | EnumMEDIATYPEFieldRefInput<$PrismaModel>
    in?: $Enums.MEDIATYPE[] | ListEnumMEDIATYPEFieldRefInput<$PrismaModel>
    notIn?: $Enums.MEDIATYPE[] | ListEnumMEDIATYPEFieldRefInput<$PrismaModel>
    not?: NestedEnumMEDIATYPEFilter<$PrismaModel> | $Enums.MEDIATYPE
  }

  export type NestedEnumMEDIATYPEWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.MEDIATYPE | EnumMEDIATYPEFieldRefInput<$PrismaModel>
    in?: $Enums.MEDIATYPE[] | ListEnumMEDIATYPEFieldRefInput<$PrismaModel>
    notIn?: $Enums.MEDIATYPE[] | ListEnumMEDIATYPEFieldRefInput<$PrismaModel>
    not?: NestedEnumMEDIATYPEWithAggregatesFilter<$PrismaModel> | $Enums.MEDIATYPE
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumMEDIATYPEFilter<$PrismaModel>
    _max?: NestedEnumMEDIATYPEFilter<$PrismaModel>
  }

  export type NestedEnumLISTENERSFilter<$PrismaModel = never> = {
    equals?: $Enums.LISTENERS | EnumLISTENERSFieldRefInput<$PrismaModel>
    in?: $Enums.LISTENERS[] | ListEnumLISTENERSFieldRefInput<$PrismaModel>
    notIn?: $Enums.LISTENERS[] | ListEnumLISTENERSFieldRefInput<$PrismaModel>
    not?: NestedEnumLISTENERSFilter<$PrismaModel> | $Enums.LISTENERS
  }

  export type NestedEnumLISTENERSWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.LISTENERS | EnumLISTENERSFieldRefInput<$PrismaModel>
    in?: $Enums.LISTENERS[] | ListEnumLISTENERSFieldRefInput<$PrismaModel>
    notIn?: $Enums.LISTENERS[] | ListEnumLISTENERSFieldRefInput<$PrismaModel>
    not?: NestedEnumLISTENERSWithAggregatesFilter<$PrismaModel> | $Enums.LISTENERS
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumLISTENERSFilter<$PrismaModel>
    _max?: NestedEnumLISTENERSFilter<$PrismaModel>
  }

  export type NestedIntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type NestedFloatFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatFilter<$PrismaModel> | number
  }

  export type SubscriptionCreateWithoutUserInput = {
    id?: string
    createdAt?: Date | string
    plan?: $Enums.SUBSCRIPTION_PLAN
    updatedAt?: Date | string
    customerId?: string | null
  }

  export type SubscriptionUncheckedCreateWithoutUserInput = {
    id?: string
    createdAt?: Date | string
    plan?: $Enums.SUBSCRIPTION_PLAN
    updatedAt?: Date | string
    customerId?: string | null
  }

  export type SubscriptionCreateOrConnectWithoutUserInput = {
    where: SubscriptionWhereUniqueInput
    create: XOR<SubscriptionCreateWithoutUserInput, SubscriptionUncheckedCreateWithoutUserInput>
  }

  export type IntegrationsCreateWithoutUserInput = {
    id?: string
    name?: $Enums.INTEGRATIONS
    createdAt?: Date | string
    token: string
    expiresAt?: Date | string | null
    instagramId?: string | null
  }

  export type IntegrationsUncheckedCreateWithoutUserInput = {
    id?: string
    name?: $Enums.INTEGRATIONS
    createdAt?: Date | string
    token: string
    expiresAt?: Date | string | null
    instagramId?: string | null
  }

  export type IntegrationsCreateOrConnectWithoutUserInput = {
    where: IntegrationsWhereUniqueInput
    create: XOR<IntegrationsCreateWithoutUserInput, IntegrationsUncheckedCreateWithoutUserInput>
  }

  export type IntegrationsCreateManyUserInputEnvelope = {
    data: IntegrationsCreateManyUserInput | IntegrationsCreateManyUserInput[]
    skipDuplicates?: boolean
  }

  export type AutomationCreateWithoutUserInput = {
    id?: string
    name?: string
    createdAt?: Date | string
    active?: boolean
    trigger?: TriggerCreateNestedManyWithoutAutomationInput
    listener?: ListenerCreateNestedOneWithoutAutomationInput
    posts?: PostCreateNestedManyWithoutAutomationInput
    dms?: DmsCreateNestedManyWithoutAutomationInput
    keywords?: KeywordCreateNestedManyWithoutAutomationInput
  }

  export type AutomationUncheckedCreateWithoutUserInput = {
    id?: string
    name?: string
    createdAt?: Date | string
    active?: boolean
    trigger?: TriggerUncheckedCreateNestedManyWithoutAutomationInput
    listener?: ListenerUncheckedCreateNestedOneWithoutAutomationInput
    posts?: PostUncheckedCreateNestedManyWithoutAutomationInput
    dms?: DmsUncheckedCreateNestedManyWithoutAutomationInput
    keywords?: KeywordUncheckedCreateNestedManyWithoutAutomationInput
  }

  export type AutomationCreateOrConnectWithoutUserInput = {
    where: AutomationWhereUniqueInput
    create: XOR<AutomationCreateWithoutUserInput, AutomationUncheckedCreateWithoutUserInput>
  }

  export type AutomationCreateManyUserInputEnvelope = {
    data: AutomationCreateManyUserInput | AutomationCreateManyUserInput[]
    skipDuplicates?: boolean
  }

  export type SubscriptionUpsertWithoutUserInput = {
    update: XOR<SubscriptionUpdateWithoutUserInput, SubscriptionUncheckedUpdateWithoutUserInput>
    create: XOR<SubscriptionCreateWithoutUserInput, SubscriptionUncheckedCreateWithoutUserInput>
    where?: SubscriptionWhereInput
  }

  export type SubscriptionUpdateToOneWithWhereWithoutUserInput = {
    where?: SubscriptionWhereInput
    data: XOR<SubscriptionUpdateWithoutUserInput, SubscriptionUncheckedUpdateWithoutUserInput>
  }

  export type SubscriptionUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    plan?: EnumSUBSCRIPTION_PLANFieldUpdateOperationsInput | $Enums.SUBSCRIPTION_PLAN
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    customerId?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type SubscriptionUncheckedUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    plan?: EnumSUBSCRIPTION_PLANFieldUpdateOperationsInput | $Enums.SUBSCRIPTION_PLAN
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    customerId?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type IntegrationsUpsertWithWhereUniqueWithoutUserInput = {
    where: IntegrationsWhereUniqueInput
    update: XOR<IntegrationsUpdateWithoutUserInput, IntegrationsUncheckedUpdateWithoutUserInput>
    create: XOR<IntegrationsCreateWithoutUserInput, IntegrationsUncheckedCreateWithoutUserInput>
  }

  export type IntegrationsUpdateWithWhereUniqueWithoutUserInput = {
    where: IntegrationsWhereUniqueInput
    data: XOR<IntegrationsUpdateWithoutUserInput, IntegrationsUncheckedUpdateWithoutUserInput>
  }

  export type IntegrationsUpdateManyWithWhereWithoutUserInput = {
    where: IntegrationsScalarWhereInput
    data: XOR<IntegrationsUpdateManyMutationInput, IntegrationsUncheckedUpdateManyWithoutUserInput>
  }

  export type IntegrationsScalarWhereInput = {
    AND?: IntegrationsScalarWhereInput | IntegrationsScalarWhereInput[]
    OR?: IntegrationsScalarWhereInput[]
    NOT?: IntegrationsScalarWhereInput | IntegrationsScalarWhereInput[]
    id?: UuidFilter<"Integrations"> | string
    name?: EnumINTEGRATIONSFilter<"Integrations"> | $Enums.INTEGRATIONS
    createdAt?: DateTimeFilter<"Integrations"> | Date | string
    userId?: UuidNullableFilter<"Integrations"> | string | null
    token?: StringFilter<"Integrations"> | string
    expiresAt?: DateTimeNullableFilter<"Integrations"> | Date | string | null
    instagramId?: StringNullableFilter<"Integrations"> | string | null
  }

  export type AutomationUpsertWithWhereUniqueWithoutUserInput = {
    where: AutomationWhereUniqueInput
    update: XOR<AutomationUpdateWithoutUserInput, AutomationUncheckedUpdateWithoutUserInput>
    create: XOR<AutomationCreateWithoutUserInput, AutomationUncheckedCreateWithoutUserInput>
  }

  export type AutomationUpdateWithWhereUniqueWithoutUserInput = {
    where: AutomationWhereUniqueInput
    data: XOR<AutomationUpdateWithoutUserInput, AutomationUncheckedUpdateWithoutUserInput>
  }

  export type AutomationUpdateManyWithWhereWithoutUserInput = {
    where: AutomationScalarWhereInput
    data: XOR<AutomationUpdateManyMutationInput, AutomationUncheckedUpdateManyWithoutUserInput>
  }

  export type AutomationScalarWhereInput = {
    AND?: AutomationScalarWhereInput | AutomationScalarWhereInput[]
    OR?: AutomationScalarWhereInput[]
    NOT?: AutomationScalarWhereInput | AutomationScalarWhereInput[]
    id?: UuidFilter<"Automation"> | string
    name?: StringFilter<"Automation"> | string
    createdAt?: DateTimeFilter<"Automation"> | Date | string
    active?: BoolFilter<"Automation"> | boolean
    userId?: UuidNullableFilter<"Automation"> | string | null
  }

  export type UserCreateWithoutSubscriptionInput = {
    id?: string
    clerkId: string
    email: string
    firstname?: string | null
    lastname?: string | null
    createdAt?: Date | string
    integrations?: IntegrationsCreateNestedManyWithoutUserInput
    automations?: AutomationCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutSubscriptionInput = {
    id?: string
    clerkId: string
    email: string
    firstname?: string | null
    lastname?: string | null
    createdAt?: Date | string
    integrations?: IntegrationsUncheckedCreateNestedManyWithoutUserInput
    automations?: AutomationUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutSubscriptionInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutSubscriptionInput, UserUncheckedCreateWithoutSubscriptionInput>
  }

  export type UserUpsertWithoutSubscriptionInput = {
    update: XOR<UserUpdateWithoutSubscriptionInput, UserUncheckedUpdateWithoutSubscriptionInput>
    create: XOR<UserCreateWithoutSubscriptionInput, UserUncheckedCreateWithoutSubscriptionInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutSubscriptionInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutSubscriptionInput, UserUncheckedUpdateWithoutSubscriptionInput>
  }

  export type UserUpdateWithoutSubscriptionInput = {
    id?: StringFieldUpdateOperationsInput | string
    clerkId?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    firstname?: NullableStringFieldUpdateOperationsInput | string | null
    lastname?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    integrations?: IntegrationsUpdateManyWithoutUserNestedInput
    automations?: AutomationUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutSubscriptionInput = {
    id?: StringFieldUpdateOperationsInput | string
    clerkId?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    firstname?: NullableStringFieldUpdateOperationsInput | string | null
    lastname?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    integrations?: IntegrationsUncheckedUpdateManyWithoutUserNestedInput
    automations?: AutomationUncheckedUpdateManyWithoutUserNestedInput
  }

  export type UserCreateWithoutIntegrationsInput = {
    id?: string
    clerkId: string
    email: string
    firstname?: string | null
    lastname?: string | null
    createdAt?: Date | string
    subscription?: SubscriptionCreateNestedOneWithoutUserInput
    automations?: AutomationCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutIntegrationsInput = {
    id?: string
    clerkId: string
    email: string
    firstname?: string | null
    lastname?: string | null
    createdAt?: Date | string
    subscription?: SubscriptionUncheckedCreateNestedOneWithoutUserInput
    automations?: AutomationUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutIntegrationsInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutIntegrationsInput, UserUncheckedCreateWithoutIntegrationsInput>
  }

  export type UserUpsertWithoutIntegrationsInput = {
    update: XOR<UserUpdateWithoutIntegrationsInput, UserUncheckedUpdateWithoutIntegrationsInput>
    create: XOR<UserCreateWithoutIntegrationsInput, UserUncheckedCreateWithoutIntegrationsInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutIntegrationsInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutIntegrationsInput, UserUncheckedUpdateWithoutIntegrationsInput>
  }

  export type UserUpdateWithoutIntegrationsInput = {
    id?: StringFieldUpdateOperationsInput | string
    clerkId?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    firstname?: NullableStringFieldUpdateOperationsInput | string | null
    lastname?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    subscription?: SubscriptionUpdateOneWithoutUserNestedInput
    automations?: AutomationUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutIntegrationsInput = {
    id?: StringFieldUpdateOperationsInput | string
    clerkId?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    firstname?: NullableStringFieldUpdateOperationsInput | string | null
    lastname?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    subscription?: SubscriptionUncheckedUpdateOneWithoutUserNestedInput
    automations?: AutomationUncheckedUpdateManyWithoutUserNestedInput
  }

  export type TriggerCreateWithoutAutomationInput = {
    id?: string
    type: string
  }

  export type TriggerUncheckedCreateWithoutAutomationInput = {
    id?: string
    type: string
  }

  export type TriggerCreateOrConnectWithoutAutomationInput = {
    where: TriggerWhereUniqueInput
    create: XOR<TriggerCreateWithoutAutomationInput, TriggerUncheckedCreateWithoutAutomationInput>
  }

  export type TriggerCreateManyAutomationInputEnvelope = {
    data: TriggerCreateManyAutomationInput | TriggerCreateManyAutomationInput[]
    skipDuplicates?: boolean
  }

  export type ListenerCreateWithoutAutomationInput = {
    id?: string
    listener?: $Enums.LISTENERS
    prompt: string
    commentReply?: string | null
    dmCount?: number
    commentCount?: number
  }

  export type ListenerUncheckedCreateWithoutAutomationInput = {
    id?: string
    listener?: $Enums.LISTENERS
    prompt: string
    commentReply?: string | null
    dmCount?: number
    commentCount?: number
  }

  export type ListenerCreateOrConnectWithoutAutomationInput = {
    where: ListenerWhereUniqueInput
    create: XOR<ListenerCreateWithoutAutomationInput, ListenerUncheckedCreateWithoutAutomationInput>
  }

  export type PostCreateWithoutAutomationInput = {
    id?: string
    postid: string
    caption?: string | null
    media: string
    mediaType?: $Enums.MEDIATYPE
  }

  export type PostUncheckedCreateWithoutAutomationInput = {
    id?: string
    postid: string
    caption?: string | null
    media: string
    mediaType?: $Enums.MEDIATYPE
  }

  export type PostCreateOrConnectWithoutAutomationInput = {
    where: PostWhereUniqueInput
    create: XOR<PostCreateWithoutAutomationInput, PostUncheckedCreateWithoutAutomationInput>
  }

  export type PostCreateManyAutomationInputEnvelope = {
    data: PostCreateManyAutomationInput | PostCreateManyAutomationInput[]
    skipDuplicates?: boolean
  }

  export type DmsCreateWithoutAutomationInput = {
    id?: string
    createdAt?: Date | string
    senderId?: string | null
    reciever?: string | null
    message?: string | null
    metadata?: NullableJsonNullValueInput | InputJsonValue
  }

  export type DmsUncheckedCreateWithoutAutomationInput = {
    id?: string
    createdAt?: Date | string
    senderId?: string | null
    reciever?: string | null
    message?: string | null
    metadata?: NullableJsonNullValueInput | InputJsonValue
  }

  export type DmsCreateOrConnectWithoutAutomationInput = {
    where: DmsWhereUniqueInput
    create: XOR<DmsCreateWithoutAutomationInput, DmsUncheckedCreateWithoutAutomationInput>
  }

  export type DmsCreateManyAutomationInputEnvelope = {
    data: DmsCreateManyAutomationInput | DmsCreateManyAutomationInput[]
    skipDuplicates?: boolean
  }

  export type UserCreateWithoutAutomationsInput = {
    id?: string
    clerkId: string
    email: string
    firstname?: string | null
    lastname?: string | null
    createdAt?: Date | string
    subscription?: SubscriptionCreateNestedOneWithoutUserInput
    integrations?: IntegrationsCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutAutomationsInput = {
    id?: string
    clerkId: string
    email: string
    firstname?: string | null
    lastname?: string | null
    createdAt?: Date | string
    subscription?: SubscriptionUncheckedCreateNestedOneWithoutUserInput
    integrations?: IntegrationsUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutAutomationsInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutAutomationsInput, UserUncheckedCreateWithoutAutomationsInput>
  }

  export type KeywordCreateWithoutAutomationInput = {
    id?: string
    word: string
  }

  export type KeywordUncheckedCreateWithoutAutomationInput = {
    id?: string
    word: string
  }

  export type KeywordCreateOrConnectWithoutAutomationInput = {
    where: KeywordWhereUniqueInput
    create: XOR<KeywordCreateWithoutAutomationInput, KeywordUncheckedCreateWithoutAutomationInput>
  }

  export type KeywordCreateManyAutomationInputEnvelope = {
    data: KeywordCreateManyAutomationInput | KeywordCreateManyAutomationInput[]
    skipDuplicates?: boolean
  }

  export type TriggerUpsertWithWhereUniqueWithoutAutomationInput = {
    where: TriggerWhereUniqueInput
    update: XOR<TriggerUpdateWithoutAutomationInput, TriggerUncheckedUpdateWithoutAutomationInput>
    create: XOR<TriggerCreateWithoutAutomationInput, TriggerUncheckedCreateWithoutAutomationInput>
  }

  export type TriggerUpdateWithWhereUniqueWithoutAutomationInput = {
    where: TriggerWhereUniqueInput
    data: XOR<TriggerUpdateWithoutAutomationInput, TriggerUncheckedUpdateWithoutAutomationInput>
  }

  export type TriggerUpdateManyWithWhereWithoutAutomationInput = {
    where: TriggerScalarWhereInput
    data: XOR<TriggerUpdateManyMutationInput, TriggerUncheckedUpdateManyWithoutAutomationInput>
  }

  export type TriggerScalarWhereInput = {
    AND?: TriggerScalarWhereInput | TriggerScalarWhereInput[]
    OR?: TriggerScalarWhereInput[]
    NOT?: TriggerScalarWhereInput | TriggerScalarWhereInput[]
    id?: UuidFilter<"Trigger"> | string
    type?: StringFilter<"Trigger"> | string
    automationId?: UuidNullableFilter<"Trigger"> | string | null
  }

  export type ListenerUpsertWithoutAutomationInput = {
    update: XOR<ListenerUpdateWithoutAutomationInput, ListenerUncheckedUpdateWithoutAutomationInput>
    create: XOR<ListenerCreateWithoutAutomationInput, ListenerUncheckedCreateWithoutAutomationInput>
    where?: ListenerWhereInput
  }

  export type ListenerUpdateToOneWithWhereWithoutAutomationInput = {
    where?: ListenerWhereInput
    data: XOR<ListenerUpdateWithoutAutomationInput, ListenerUncheckedUpdateWithoutAutomationInput>
  }

  export type ListenerUpdateWithoutAutomationInput = {
    id?: StringFieldUpdateOperationsInput | string
    listener?: EnumLISTENERSFieldUpdateOperationsInput | $Enums.LISTENERS
    prompt?: StringFieldUpdateOperationsInput | string
    commentReply?: NullableStringFieldUpdateOperationsInput | string | null
    dmCount?: IntFieldUpdateOperationsInput | number
    commentCount?: IntFieldUpdateOperationsInput | number
  }

  export type ListenerUncheckedUpdateWithoutAutomationInput = {
    id?: StringFieldUpdateOperationsInput | string
    listener?: EnumLISTENERSFieldUpdateOperationsInput | $Enums.LISTENERS
    prompt?: StringFieldUpdateOperationsInput | string
    commentReply?: NullableStringFieldUpdateOperationsInput | string | null
    dmCount?: IntFieldUpdateOperationsInput | number
    commentCount?: IntFieldUpdateOperationsInput | number
  }

  export type PostUpsertWithWhereUniqueWithoutAutomationInput = {
    where: PostWhereUniqueInput
    update: XOR<PostUpdateWithoutAutomationInput, PostUncheckedUpdateWithoutAutomationInput>
    create: XOR<PostCreateWithoutAutomationInput, PostUncheckedCreateWithoutAutomationInput>
  }

  export type PostUpdateWithWhereUniqueWithoutAutomationInput = {
    where: PostWhereUniqueInput
    data: XOR<PostUpdateWithoutAutomationInput, PostUncheckedUpdateWithoutAutomationInput>
  }

  export type PostUpdateManyWithWhereWithoutAutomationInput = {
    where: PostScalarWhereInput
    data: XOR<PostUpdateManyMutationInput, PostUncheckedUpdateManyWithoutAutomationInput>
  }

  export type PostScalarWhereInput = {
    AND?: PostScalarWhereInput | PostScalarWhereInput[]
    OR?: PostScalarWhereInput[]
    NOT?: PostScalarWhereInput | PostScalarWhereInput[]
    id?: UuidFilter<"Post"> | string
    postid?: StringFilter<"Post"> | string
    caption?: StringNullableFilter<"Post"> | string | null
    media?: StringFilter<"Post"> | string
    mediaType?: EnumMEDIATYPEFilter<"Post"> | $Enums.MEDIATYPE
    automationId?: UuidNullableFilter<"Post"> | string | null
  }

  export type DmsUpsertWithWhereUniqueWithoutAutomationInput = {
    where: DmsWhereUniqueInput
    update: XOR<DmsUpdateWithoutAutomationInput, DmsUncheckedUpdateWithoutAutomationInput>
    create: XOR<DmsCreateWithoutAutomationInput, DmsUncheckedCreateWithoutAutomationInput>
  }

  export type DmsUpdateWithWhereUniqueWithoutAutomationInput = {
    where: DmsWhereUniqueInput
    data: XOR<DmsUpdateWithoutAutomationInput, DmsUncheckedUpdateWithoutAutomationInput>
  }

  export type DmsUpdateManyWithWhereWithoutAutomationInput = {
    where: DmsScalarWhereInput
    data: XOR<DmsUpdateManyMutationInput, DmsUncheckedUpdateManyWithoutAutomationInput>
  }

  export type DmsScalarWhereInput = {
    AND?: DmsScalarWhereInput | DmsScalarWhereInput[]
    OR?: DmsScalarWhereInput[]
    NOT?: DmsScalarWhereInput | DmsScalarWhereInput[]
    id?: UuidFilter<"Dms"> | string
    automationId?: UuidNullableFilter<"Dms"> | string | null
    createdAt?: DateTimeFilter<"Dms"> | Date | string
    senderId?: StringNullableFilter<"Dms"> | string | null
    reciever?: StringNullableFilter<"Dms"> | string | null
    message?: StringNullableFilter<"Dms"> | string | null
    metadata?: JsonNullableFilter<"Dms">
  }

  export type UserUpsertWithoutAutomationsInput = {
    update: XOR<UserUpdateWithoutAutomationsInput, UserUncheckedUpdateWithoutAutomationsInput>
    create: XOR<UserCreateWithoutAutomationsInput, UserUncheckedCreateWithoutAutomationsInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutAutomationsInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutAutomationsInput, UserUncheckedUpdateWithoutAutomationsInput>
  }

  export type UserUpdateWithoutAutomationsInput = {
    id?: StringFieldUpdateOperationsInput | string
    clerkId?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    firstname?: NullableStringFieldUpdateOperationsInput | string | null
    lastname?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    subscription?: SubscriptionUpdateOneWithoutUserNestedInput
    integrations?: IntegrationsUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutAutomationsInput = {
    id?: StringFieldUpdateOperationsInput | string
    clerkId?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    firstname?: NullableStringFieldUpdateOperationsInput | string | null
    lastname?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    subscription?: SubscriptionUncheckedUpdateOneWithoutUserNestedInput
    integrations?: IntegrationsUncheckedUpdateManyWithoutUserNestedInput
  }

  export type KeywordUpsertWithWhereUniqueWithoutAutomationInput = {
    where: KeywordWhereUniqueInput
    update: XOR<KeywordUpdateWithoutAutomationInput, KeywordUncheckedUpdateWithoutAutomationInput>
    create: XOR<KeywordCreateWithoutAutomationInput, KeywordUncheckedCreateWithoutAutomationInput>
  }

  export type KeywordUpdateWithWhereUniqueWithoutAutomationInput = {
    where: KeywordWhereUniqueInput
    data: XOR<KeywordUpdateWithoutAutomationInput, KeywordUncheckedUpdateWithoutAutomationInput>
  }

  export type KeywordUpdateManyWithWhereWithoutAutomationInput = {
    where: KeywordScalarWhereInput
    data: XOR<KeywordUpdateManyMutationInput, KeywordUncheckedUpdateManyWithoutAutomationInput>
  }

  export type KeywordScalarWhereInput = {
    AND?: KeywordScalarWhereInput | KeywordScalarWhereInput[]
    OR?: KeywordScalarWhereInput[]
    NOT?: KeywordScalarWhereInput | KeywordScalarWhereInput[]
    id?: UuidFilter<"Keyword"> | string
    word?: StringFilter<"Keyword"> | string
    automationId?: UuidNullableFilter<"Keyword"> | string | null
  }

  export type AutomationCreateWithoutDmsInput = {
    id?: string
    name?: string
    createdAt?: Date | string
    active?: boolean
    trigger?: TriggerCreateNestedManyWithoutAutomationInput
    listener?: ListenerCreateNestedOneWithoutAutomationInput
    posts?: PostCreateNestedManyWithoutAutomationInput
    User?: UserCreateNestedOneWithoutAutomationsInput
    keywords?: KeywordCreateNestedManyWithoutAutomationInput
  }

  export type AutomationUncheckedCreateWithoutDmsInput = {
    id?: string
    name?: string
    createdAt?: Date | string
    active?: boolean
    userId?: string | null
    trigger?: TriggerUncheckedCreateNestedManyWithoutAutomationInput
    listener?: ListenerUncheckedCreateNestedOneWithoutAutomationInput
    posts?: PostUncheckedCreateNestedManyWithoutAutomationInput
    keywords?: KeywordUncheckedCreateNestedManyWithoutAutomationInput
  }

  export type AutomationCreateOrConnectWithoutDmsInput = {
    where: AutomationWhereUniqueInput
    create: XOR<AutomationCreateWithoutDmsInput, AutomationUncheckedCreateWithoutDmsInput>
  }

  export type AutomationUpsertWithoutDmsInput = {
    update: XOR<AutomationUpdateWithoutDmsInput, AutomationUncheckedUpdateWithoutDmsInput>
    create: XOR<AutomationCreateWithoutDmsInput, AutomationUncheckedCreateWithoutDmsInput>
    where?: AutomationWhereInput
  }

  export type AutomationUpdateToOneWithWhereWithoutDmsInput = {
    where?: AutomationWhereInput
    data: XOR<AutomationUpdateWithoutDmsInput, AutomationUncheckedUpdateWithoutDmsInput>
  }

  export type AutomationUpdateWithoutDmsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    active?: BoolFieldUpdateOperationsInput | boolean
    trigger?: TriggerUpdateManyWithoutAutomationNestedInput
    listener?: ListenerUpdateOneWithoutAutomationNestedInput
    posts?: PostUpdateManyWithoutAutomationNestedInput
    User?: UserUpdateOneWithoutAutomationsNestedInput
    keywords?: KeywordUpdateManyWithoutAutomationNestedInput
  }

  export type AutomationUncheckedUpdateWithoutDmsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    active?: BoolFieldUpdateOperationsInput | boolean
    userId?: NullableStringFieldUpdateOperationsInput | string | null
    trigger?: TriggerUncheckedUpdateManyWithoutAutomationNestedInput
    listener?: ListenerUncheckedUpdateOneWithoutAutomationNestedInput
    posts?: PostUncheckedUpdateManyWithoutAutomationNestedInput
    keywords?: KeywordUncheckedUpdateManyWithoutAutomationNestedInput
  }

  export type AutomationCreateWithoutPostsInput = {
    id?: string
    name?: string
    createdAt?: Date | string
    active?: boolean
    trigger?: TriggerCreateNestedManyWithoutAutomationInput
    listener?: ListenerCreateNestedOneWithoutAutomationInput
    dms?: DmsCreateNestedManyWithoutAutomationInput
    User?: UserCreateNestedOneWithoutAutomationsInput
    keywords?: KeywordCreateNestedManyWithoutAutomationInput
  }

  export type AutomationUncheckedCreateWithoutPostsInput = {
    id?: string
    name?: string
    createdAt?: Date | string
    active?: boolean
    userId?: string | null
    trigger?: TriggerUncheckedCreateNestedManyWithoutAutomationInput
    listener?: ListenerUncheckedCreateNestedOneWithoutAutomationInput
    dms?: DmsUncheckedCreateNestedManyWithoutAutomationInput
    keywords?: KeywordUncheckedCreateNestedManyWithoutAutomationInput
  }

  export type AutomationCreateOrConnectWithoutPostsInput = {
    where: AutomationWhereUniqueInput
    create: XOR<AutomationCreateWithoutPostsInput, AutomationUncheckedCreateWithoutPostsInput>
  }

  export type AutomationUpsertWithoutPostsInput = {
    update: XOR<AutomationUpdateWithoutPostsInput, AutomationUncheckedUpdateWithoutPostsInput>
    create: XOR<AutomationCreateWithoutPostsInput, AutomationUncheckedCreateWithoutPostsInput>
    where?: AutomationWhereInput
  }

  export type AutomationUpdateToOneWithWhereWithoutPostsInput = {
    where?: AutomationWhereInput
    data: XOR<AutomationUpdateWithoutPostsInput, AutomationUncheckedUpdateWithoutPostsInput>
  }

  export type AutomationUpdateWithoutPostsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    active?: BoolFieldUpdateOperationsInput | boolean
    trigger?: TriggerUpdateManyWithoutAutomationNestedInput
    listener?: ListenerUpdateOneWithoutAutomationNestedInput
    dms?: DmsUpdateManyWithoutAutomationNestedInput
    User?: UserUpdateOneWithoutAutomationsNestedInput
    keywords?: KeywordUpdateManyWithoutAutomationNestedInput
  }

  export type AutomationUncheckedUpdateWithoutPostsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    active?: BoolFieldUpdateOperationsInput | boolean
    userId?: NullableStringFieldUpdateOperationsInput | string | null
    trigger?: TriggerUncheckedUpdateManyWithoutAutomationNestedInput
    listener?: ListenerUncheckedUpdateOneWithoutAutomationNestedInput
    dms?: DmsUncheckedUpdateManyWithoutAutomationNestedInput
    keywords?: KeywordUncheckedUpdateManyWithoutAutomationNestedInput
  }

  export type AutomationCreateWithoutListenerInput = {
    id?: string
    name?: string
    createdAt?: Date | string
    active?: boolean
    trigger?: TriggerCreateNestedManyWithoutAutomationInput
    posts?: PostCreateNestedManyWithoutAutomationInput
    dms?: DmsCreateNestedManyWithoutAutomationInput
    User?: UserCreateNestedOneWithoutAutomationsInput
    keywords?: KeywordCreateNestedManyWithoutAutomationInput
  }

  export type AutomationUncheckedCreateWithoutListenerInput = {
    id?: string
    name?: string
    createdAt?: Date | string
    active?: boolean
    userId?: string | null
    trigger?: TriggerUncheckedCreateNestedManyWithoutAutomationInput
    posts?: PostUncheckedCreateNestedManyWithoutAutomationInput
    dms?: DmsUncheckedCreateNestedManyWithoutAutomationInput
    keywords?: KeywordUncheckedCreateNestedManyWithoutAutomationInput
  }

  export type AutomationCreateOrConnectWithoutListenerInput = {
    where: AutomationWhereUniqueInput
    create: XOR<AutomationCreateWithoutListenerInput, AutomationUncheckedCreateWithoutListenerInput>
  }

  export type AutomationUpsertWithoutListenerInput = {
    update: XOR<AutomationUpdateWithoutListenerInput, AutomationUncheckedUpdateWithoutListenerInput>
    create: XOR<AutomationCreateWithoutListenerInput, AutomationUncheckedCreateWithoutListenerInput>
    where?: AutomationWhereInput
  }

  export type AutomationUpdateToOneWithWhereWithoutListenerInput = {
    where?: AutomationWhereInput
    data: XOR<AutomationUpdateWithoutListenerInput, AutomationUncheckedUpdateWithoutListenerInput>
  }

  export type AutomationUpdateWithoutListenerInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    active?: BoolFieldUpdateOperationsInput | boolean
    trigger?: TriggerUpdateManyWithoutAutomationNestedInput
    posts?: PostUpdateManyWithoutAutomationNestedInput
    dms?: DmsUpdateManyWithoutAutomationNestedInput
    User?: UserUpdateOneWithoutAutomationsNestedInput
    keywords?: KeywordUpdateManyWithoutAutomationNestedInput
  }

  export type AutomationUncheckedUpdateWithoutListenerInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    active?: BoolFieldUpdateOperationsInput | boolean
    userId?: NullableStringFieldUpdateOperationsInput | string | null
    trigger?: TriggerUncheckedUpdateManyWithoutAutomationNestedInput
    posts?: PostUncheckedUpdateManyWithoutAutomationNestedInput
    dms?: DmsUncheckedUpdateManyWithoutAutomationNestedInput
    keywords?: KeywordUncheckedUpdateManyWithoutAutomationNestedInput
  }

  export type AutomationCreateWithoutTriggerInput = {
    id?: string
    name?: string
    createdAt?: Date | string
    active?: boolean
    listener?: ListenerCreateNestedOneWithoutAutomationInput
    posts?: PostCreateNestedManyWithoutAutomationInput
    dms?: DmsCreateNestedManyWithoutAutomationInput
    User?: UserCreateNestedOneWithoutAutomationsInput
    keywords?: KeywordCreateNestedManyWithoutAutomationInput
  }

  export type AutomationUncheckedCreateWithoutTriggerInput = {
    id?: string
    name?: string
    createdAt?: Date | string
    active?: boolean
    userId?: string | null
    listener?: ListenerUncheckedCreateNestedOneWithoutAutomationInput
    posts?: PostUncheckedCreateNestedManyWithoutAutomationInput
    dms?: DmsUncheckedCreateNestedManyWithoutAutomationInput
    keywords?: KeywordUncheckedCreateNestedManyWithoutAutomationInput
  }

  export type AutomationCreateOrConnectWithoutTriggerInput = {
    where: AutomationWhereUniqueInput
    create: XOR<AutomationCreateWithoutTriggerInput, AutomationUncheckedCreateWithoutTriggerInput>
  }

  export type AutomationUpsertWithoutTriggerInput = {
    update: XOR<AutomationUpdateWithoutTriggerInput, AutomationUncheckedUpdateWithoutTriggerInput>
    create: XOR<AutomationCreateWithoutTriggerInput, AutomationUncheckedCreateWithoutTriggerInput>
    where?: AutomationWhereInput
  }

  export type AutomationUpdateToOneWithWhereWithoutTriggerInput = {
    where?: AutomationWhereInput
    data: XOR<AutomationUpdateWithoutTriggerInput, AutomationUncheckedUpdateWithoutTriggerInput>
  }

  export type AutomationUpdateWithoutTriggerInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    active?: BoolFieldUpdateOperationsInput | boolean
    listener?: ListenerUpdateOneWithoutAutomationNestedInput
    posts?: PostUpdateManyWithoutAutomationNestedInput
    dms?: DmsUpdateManyWithoutAutomationNestedInput
    User?: UserUpdateOneWithoutAutomationsNestedInput
    keywords?: KeywordUpdateManyWithoutAutomationNestedInput
  }

  export type AutomationUncheckedUpdateWithoutTriggerInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    active?: BoolFieldUpdateOperationsInput | boolean
    userId?: NullableStringFieldUpdateOperationsInput | string | null
    listener?: ListenerUncheckedUpdateOneWithoutAutomationNestedInput
    posts?: PostUncheckedUpdateManyWithoutAutomationNestedInput
    dms?: DmsUncheckedUpdateManyWithoutAutomationNestedInput
    keywords?: KeywordUncheckedUpdateManyWithoutAutomationNestedInput
  }

  export type AutomationCreateWithoutKeywordsInput = {
    id?: string
    name?: string
    createdAt?: Date | string
    active?: boolean
    trigger?: TriggerCreateNestedManyWithoutAutomationInput
    listener?: ListenerCreateNestedOneWithoutAutomationInput
    posts?: PostCreateNestedManyWithoutAutomationInput
    dms?: DmsCreateNestedManyWithoutAutomationInput
    User?: UserCreateNestedOneWithoutAutomationsInput
  }

  export type AutomationUncheckedCreateWithoutKeywordsInput = {
    id?: string
    name?: string
    createdAt?: Date | string
    active?: boolean
    userId?: string | null
    trigger?: TriggerUncheckedCreateNestedManyWithoutAutomationInput
    listener?: ListenerUncheckedCreateNestedOneWithoutAutomationInput
    posts?: PostUncheckedCreateNestedManyWithoutAutomationInput
    dms?: DmsUncheckedCreateNestedManyWithoutAutomationInput
  }

  export type AutomationCreateOrConnectWithoutKeywordsInput = {
    where: AutomationWhereUniqueInput
    create: XOR<AutomationCreateWithoutKeywordsInput, AutomationUncheckedCreateWithoutKeywordsInput>
  }

  export type AutomationUpsertWithoutKeywordsInput = {
    update: XOR<AutomationUpdateWithoutKeywordsInput, AutomationUncheckedUpdateWithoutKeywordsInput>
    create: XOR<AutomationCreateWithoutKeywordsInput, AutomationUncheckedCreateWithoutKeywordsInput>
    where?: AutomationWhereInput
  }

  export type AutomationUpdateToOneWithWhereWithoutKeywordsInput = {
    where?: AutomationWhereInput
    data: XOR<AutomationUpdateWithoutKeywordsInput, AutomationUncheckedUpdateWithoutKeywordsInput>
  }

  export type AutomationUpdateWithoutKeywordsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    active?: BoolFieldUpdateOperationsInput | boolean
    trigger?: TriggerUpdateManyWithoutAutomationNestedInput
    listener?: ListenerUpdateOneWithoutAutomationNestedInput
    posts?: PostUpdateManyWithoutAutomationNestedInput
    dms?: DmsUpdateManyWithoutAutomationNestedInput
    User?: UserUpdateOneWithoutAutomationsNestedInput
  }

  export type AutomationUncheckedUpdateWithoutKeywordsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    active?: BoolFieldUpdateOperationsInput | boolean
    userId?: NullableStringFieldUpdateOperationsInput | string | null
    trigger?: TriggerUncheckedUpdateManyWithoutAutomationNestedInput
    listener?: ListenerUncheckedUpdateOneWithoutAutomationNestedInput
    posts?: PostUncheckedUpdateManyWithoutAutomationNestedInput
    dms?: DmsUncheckedUpdateManyWithoutAutomationNestedInput
  }

  export type IntegrationsCreateManyUserInput = {
    id?: string
    name?: $Enums.INTEGRATIONS
    createdAt?: Date | string
    token: string
    expiresAt?: Date | string | null
    instagramId?: string | null
  }

  export type AutomationCreateManyUserInput = {
    id?: string
    name?: string
    createdAt?: Date | string
    active?: boolean
  }

  export type IntegrationsUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: EnumINTEGRATIONSFieldUpdateOperationsInput | $Enums.INTEGRATIONS
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    token?: StringFieldUpdateOperationsInput | string
    expiresAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    instagramId?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type IntegrationsUncheckedUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: EnumINTEGRATIONSFieldUpdateOperationsInput | $Enums.INTEGRATIONS
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    token?: StringFieldUpdateOperationsInput | string
    expiresAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    instagramId?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type IntegrationsUncheckedUpdateManyWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: EnumINTEGRATIONSFieldUpdateOperationsInput | $Enums.INTEGRATIONS
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    token?: StringFieldUpdateOperationsInput | string
    expiresAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    instagramId?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type AutomationUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    active?: BoolFieldUpdateOperationsInput | boolean
    trigger?: TriggerUpdateManyWithoutAutomationNestedInput
    listener?: ListenerUpdateOneWithoutAutomationNestedInput
    posts?: PostUpdateManyWithoutAutomationNestedInput
    dms?: DmsUpdateManyWithoutAutomationNestedInput
    keywords?: KeywordUpdateManyWithoutAutomationNestedInput
  }

  export type AutomationUncheckedUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    active?: BoolFieldUpdateOperationsInput | boolean
    trigger?: TriggerUncheckedUpdateManyWithoutAutomationNestedInput
    listener?: ListenerUncheckedUpdateOneWithoutAutomationNestedInput
    posts?: PostUncheckedUpdateManyWithoutAutomationNestedInput
    dms?: DmsUncheckedUpdateManyWithoutAutomationNestedInput
    keywords?: KeywordUncheckedUpdateManyWithoutAutomationNestedInput
  }

  export type AutomationUncheckedUpdateManyWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    active?: BoolFieldUpdateOperationsInput | boolean
  }

  export type TriggerCreateManyAutomationInput = {
    id?: string
    type: string
  }

  export type PostCreateManyAutomationInput = {
    id?: string
    postid: string
    caption?: string | null
    media: string
    mediaType?: $Enums.MEDIATYPE
  }

  export type DmsCreateManyAutomationInput = {
    id?: string
    createdAt?: Date | string
    senderId?: string | null
    reciever?: string | null
    message?: string | null
    metadata?: NullableJsonNullValueInput | InputJsonValue
  }

  export type KeywordCreateManyAutomationInput = {
    id?: string
    word: string
  }

  export type TriggerUpdateWithoutAutomationInput = {
    id?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
  }

  export type TriggerUncheckedUpdateWithoutAutomationInput = {
    id?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
  }

  export type TriggerUncheckedUpdateManyWithoutAutomationInput = {
    id?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
  }

  export type PostUpdateWithoutAutomationInput = {
    id?: StringFieldUpdateOperationsInput | string
    postid?: StringFieldUpdateOperationsInput | string
    caption?: NullableStringFieldUpdateOperationsInput | string | null
    media?: StringFieldUpdateOperationsInput | string
    mediaType?: EnumMEDIATYPEFieldUpdateOperationsInput | $Enums.MEDIATYPE
  }

  export type PostUncheckedUpdateWithoutAutomationInput = {
    id?: StringFieldUpdateOperationsInput | string
    postid?: StringFieldUpdateOperationsInput | string
    caption?: NullableStringFieldUpdateOperationsInput | string | null
    media?: StringFieldUpdateOperationsInput | string
    mediaType?: EnumMEDIATYPEFieldUpdateOperationsInput | $Enums.MEDIATYPE
  }

  export type PostUncheckedUpdateManyWithoutAutomationInput = {
    id?: StringFieldUpdateOperationsInput | string
    postid?: StringFieldUpdateOperationsInput | string
    caption?: NullableStringFieldUpdateOperationsInput | string | null
    media?: StringFieldUpdateOperationsInput | string
    mediaType?: EnumMEDIATYPEFieldUpdateOperationsInput | $Enums.MEDIATYPE
  }

  export type DmsUpdateWithoutAutomationInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    senderId?: NullableStringFieldUpdateOperationsInput | string | null
    reciever?: NullableStringFieldUpdateOperationsInput | string | null
    message?: NullableStringFieldUpdateOperationsInput | string | null
    metadata?: NullableJsonNullValueInput | InputJsonValue
  }

  export type DmsUncheckedUpdateWithoutAutomationInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    senderId?: NullableStringFieldUpdateOperationsInput | string | null
    reciever?: NullableStringFieldUpdateOperationsInput | string | null
    message?: NullableStringFieldUpdateOperationsInput | string | null
    metadata?: NullableJsonNullValueInput | InputJsonValue
  }

  export type DmsUncheckedUpdateManyWithoutAutomationInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    senderId?: NullableStringFieldUpdateOperationsInput | string | null
    reciever?: NullableStringFieldUpdateOperationsInput | string | null
    message?: NullableStringFieldUpdateOperationsInput | string | null
    metadata?: NullableJsonNullValueInput | InputJsonValue
  }

  export type KeywordUpdateWithoutAutomationInput = {
    id?: StringFieldUpdateOperationsInput | string
    word?: StringFieldUpdateOperationsInput | string
  }

  export type KeywordUncheckedUpdateWithoutAutomationInput = {
    id?: StringFieldUpdateOperationsInput | string
    word?: StringFieldUpdateOperationsInput | string
  }

  export type KeywordUncheckedUpdateManyWithoutAutomationInput = {
    id?: StringFieldUpdateOperationsInput | string
    word?: StringFieldUpdateOperationsInput | string
  }



  /**
   * Batch Payload for updateMany & deleteMany & createMany
   */

  export type BatchPayload = {
    count: number
  }

  /**
   * DMMF
   */
  export const dmmf: runtime.BaseDMMF
}