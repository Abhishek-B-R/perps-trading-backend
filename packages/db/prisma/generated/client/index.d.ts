
/**
 * Client
**/

import * as runtime from './runtime/client.js';
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
 * Model Orders
 * 
 */
export type Orders = $Result.DefaultSelection<Prisma.$OrdersPayload>
/**
 * Model Markets
 * 
 */
export type Markets = $Result.DefaultSelection<Prisma.$MarketsPayload>
/**
 * Model Fills
 * 
 */
export type Fills = $Result.DefaultSelection<Prisma.$FillsPayload>

/**
 * Enums
 */
export namespace $Enums {
  export const Type: {
  LONG: 'LONG',
  SHORT: 'SHORT'
};

export type Type = (typeof Type)[keyof typeof Type]


export const OrderType: {
  MARKET: 'MARKET',
  LIMIT: 'LIMIT'
};

export type OrderType = (typeof OrderType)[keyof typeof OrderType]


export const Status: {
  Filled: 'Filled',
  PartiallyFilled: 'PartiallyFilled',
  Cancelled: 'Cancelled',
  Open: 'Open'
};

export type Status = (typeof Status)[keyof typeof Status]

}

export type Type = $Enums.Type

export const Type: typeof $Enums.Type

export type OrderType = $Enums.OrderType

export const OrderType: typeof $Enums.OrderType

export type Status = $Enums.Status

export const Status: typeof $Enums.Status

/**
 * ##  Prisma Client ʲˢ
 *
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient({
 *   adapter: new PrismaPg({ connectionString: process.env.DATABASE_URL })
 * })
 * // Fetch zero or more Users
 * const users = await prisma.user.findMany()
 * ```
 *
 *
 * Read more in our [docs](https://pris.ly/d/client).
 */
export class PrismaClient<
  ClientOptions extends Prisma.PrismaClientOptions = Prisma.PrismaClientOptions,
  const U = 'log' extends keyof ClientOptions ? ClientOptions['log'] extends Array<Prisma.LogLevel | Prisma.LogDefinition> ? Prisma.GetEvents<ClientOptions['log']> : never : never,
  ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
> {
  [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['other'] }

    /**
   * ##  Prisma Client ʲˢ
   *
   * Type-safe database client for TypeScript & Node.js
   * @example
   * ```
   * const prisma = new PrismaClient({
   *   adapter: new PrismaPg({ connectionString: process.env.DATABASE_URL })
   * })
   * // Fetch zero or more Users
   * const users = await prisma.user.findMany()
   * ```
   *
   *
   * Read more in our [docs](https://pris.ly/d/client).
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
   * Executes a prepared raw query and returns the number of affected rows.
   * @example
   * ```
   * const result = await prisma.$executeRaw`UPDATE User SET cool = ${true} WHERE email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://pris.ly/d/raw-queries).
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
   * Read more in our [docs](https://pris.ly/d/raw-queries).
   */
  $executeRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Performs a prepared raw query and returns the `SELECT` data.
   * @example
   * ```
   * const result = await prisma.$queryRaw`SELECT * FROM User WHERE id = ${1} OR email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://pris.ly/d/raw-queries).
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
   * Read more in our [docs](https://pris.ly/d/raw-queries).
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
   * Read more in our [docs](https://www.prisma.io/docs/orm/prisma-client/queries/transactions).
   */
  $transaction<P extends Prisma.PrismaPromise<any>[]>(arg: [...P], options?: { maxWait?: number, timeout?: number, isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<runtime.Types.Utils.UnwrapTuple<P>>

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
   * `prisma.orders`: Exposes CRUD operations for the **Orders** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Orders
    * const orders = await prisma.orders.findMany()
    * ```
    */
  get orders(): Prisma.OrdersDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.markets`: Exposes CRUD operations for the **Markets** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Markets
    * const markets = await prisma.markets.findMany()
    * ```
    */
  get markets(): Prisma.MarketsDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.fills`: Exposes CRUD operations for the **Fills** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Fills
    * const fills = await prisma.fills.findMany()
    * ```
    */
  get fills(): Prisma.FillsDelegate<ExtArgs, ClientOptions>;
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
  * Extensions
  */
  export import Extension = $Extensions.UserArgs
  export import getExtensionContext = runtime.Extensions.getExtensionContext
  export import Args = $Public.Args
  export import Payload = $Public.Payload
  export import Result = $Public.Result
  export import Exact = $Public.Exact

  /**
   * Prisma Client JS version: 7.8.0
   * Query Engine version: 3c6e192761c0362d496ed980de936e2f3cebcd3a
   */
  export type PrismaVersion = {
    client: string
    engine: string
  }

  export const prismaVersion: PrismaVersion

  /**
   * Utility Types
   */


  export import Bytes = runtime.Bytes
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
    Orders: 'Orders',
    Markets: 'Markets',
    Fills: 'Fills'
  };

  export type ModelName = (typeof ModelName)[keyof typeof ModelName]



  interface TypeMapCb<ClientOptions = {}> extends $Utils.Fn<{extArgs: $Extensions.InternalArgs }, $Utils.Record<string, any>> {
    returns: Prisma.TypeMap<this['params']['extArgs'], ClientOptions extends { omit: infer OmitOptions } ? OmitOptions : {}>
  }

  export type TypeMap<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> = {
    globalOmitOptions: {
      omit: GlobalOmitOptions
    }
    meta: {
      modelProps: "user" | "orders" | "markets" | "fills"
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
      Orders: {
        payload: Prisma.$OrdersPayload<ExtArgs>
        fields: Prisma.OrdersFieldRefs
        operations: {
          findUnique: {
            args: Prisma.OrdersFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OrdersPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.OrdersFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OrdersPayload>
          }
          findFirst: {
            args: Prisma.OrdersFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OrdersPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.OrdersFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OrdersPayload>
          }
          findMany: {
            args: Prisma.OrdersFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OrdersPayload>[]
          }
          create: {
            args: Prisma.OrdersCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OrdersPayload>
          }
          createMany: {
            args: Prisma.OrdersCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.OrdersCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OrdersPayload>[]
          }
          delete: {
            args: Prisma.OrdersDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OrdersPayload>
          }
          update: {
            args: Prisma.OrdersUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OrdersPayload>
          }
          deleteMany: {
            args: Prisma.OrdersDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.OrdersUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.OrdersUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OrdersPayload>[]
          }
          upsert: {
            args: Prisma.OrdersUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OrdersPayload>
          }
          aggregate: {
            args: Prisma.OrdersAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateOrders>
          }
          groupBy: {
            args: Prisma.OrdersGroupByArgs<ExtArgs>
            result: $Utils.Optional<OrdersGroupByOutputType>[]
          }
          count: {
            args: Prisma.OrdersCountArgs<ExtArgs>
            result: $Utils.Optional<OrdersCountAggregateOutputType> | number
          }
        }
      }
      Markets: {
        payload: Prisma.$MarketsPayload<ExtArgs>
        fields: Prisma.MarketsFieldRefs
        operations: {
          findUnique: {
            args: Prisma.MarketsFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MarketsPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.MarketsFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MarketsPayload>
          }
          findFirst: {
            args: Prisma.MarketsFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MarketsPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.MarketsFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MarketsPayload>
          }
          findMany: {
            args: Prisma.MarketsFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MarketsPayload>[]
          }
          create: {
            args: Prisma.MarketsCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MarketsPayload>
          }
          createMany: {
            args: Prisma.MarketsCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.MarketsCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MarketsPayload>[]
          }
          delete: {
            args: Prisma.MarketsDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MarketsPayload>
          }
          update: {
            args: Prisma.MarketsUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MarketsPayload>
          }
          deleteMany: {
            args: Prisma.MarketsDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.MarketsUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.MarketsUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MarketsPayload>[]
          }
          upsert: {
            args: Prisma.MarketsUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MarketsPayload>
          }
          aggregate: {
            args: Prisma.MarketsAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateMarkets>
          }
          groupBy: {
            args: Prisma.MarketsGroupByArgs<ExtArgs>
            result: $Utils.Optional<MarketsGroupByOutputType>[]
          }
          count: {
            args: Prisma.MarketsCountArgs<ExtArgs>
            result: $Utils.Optional<MarketsCountAggregateOutputType> | number
          }
        }
      }
      Fills: {
        payload: Prisma.$FillsPayload<ExtArgs>
        fields: Prisma.FillsFieldRefs
        operations: {
          findUnique: {
            args: Prisma.FillsFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FillsPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.FillsFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FillsPayload>
          }
          findFirst: {
            args: Prisma.FillsFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FillsPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.FillsFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FillsPayload>
          }
          findMany: {
            args: Prisma.FillsFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FillsPayload>[]
          }
          create: {
            args: Prisma.FillsCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FillsPayload>
          }
          createMany: {
            args: Prisma.FillsCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.FillsCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FillsPayload>[]
          }
          delete: {
            args: Prisma.FillsDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FillsPayload>
          }
          update: {
            args: Prisma.FillsUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FillsPayload>
          }
          deleteMany: {
            args: Prisma.FillsDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.FillsUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.FillsUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FillsPayload>[]
          }
          upsert: {
            args: Prisma.FillsUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FillsPayload>
          }
          aggregate: {
            args: Prisma.FillsAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateFills>
          }
          groupBy: {
            args: Prisma.FillsGroupByArgs<ExtArgs>
            result: $Utils.Optional<FillsGroupByOutputType>[]
          }
          count: {
            args: Prisma.FillsCountArgs<ExtArgs>
            result: $Utils.Optional<FillsCountAggregateOutputType> | number
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
     * @default "colorless"
     */
    errorFormat?: ErrorFormat
    /**
     * @example
     * ```
     * // Shorthand for `emit: 'stdout'`
     * log: ['query', 'info', 'warn', 'error']
     * 
     * // Emit as events only
     * log: [
     *   { emit: 'event', level: 'query' },
     *   { emit: 'event', level: 'info' },
     *   { emit: 'event', level: 'warn' }
     *   { emit: 'event', level: 'error' }
     * ]
     * 
     * / Emit as events and log to stdout
     * og: [
     *  { emit: 'stdout', level: 'query' },
     *  { emit: 'stdout', level: 'info' },
     *  { emit: 'stdout', level: 'warn' }
     *  { emit: 'stdout', level: 'error' }
     * 
     * ```
     * Read more in our [docs](https://pris.ly/d/logging).
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
     * Instance of a Driver Adapter, e.g., like one provided by `@prisma/adapter-planetscale`
     */
    adapter?: runtime.SqlDriverAdapterFactory
    /**
     * Prisma Accelerate URL allowing the client to connect through Accelerate instead of a direct database.
     */
    accelerateUrl?: string
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
    /**
     * SQL commenter plugins that add metadata to SQL queries as comments.
     * Comments follow the sqlcommenter format: https://google.github.io/sqlcommenter/
     * 
     * @example
     * ```
     * const prisma = new PrismaClient({
     *   adapter,
     *   comments: [
     *     traceContext(),
     *     queryInsights(),
     *   ],
     * })
     * ```
     */
    comments?: runtime.SqlCommenterPlugin[]
  }
  export type GlobalOmitConfig = {
    user?: UserOmit
    orders?: OrdersOmit
    markets?: MarketsOmit
    fills?: FillsOmit
  }

  /* Types for Logging */
  export type LogLevel = 'info' | 'query' | 'warn' | 'error'
  export type LogDefinition = {
    level: LogLevel
    emit: 'stdout' | 'event'
  }

  export type CheckIsLogLevel<T> = T extends LogLevel ? T : never;

  export type GetLogType<T> = CheckIsLogLevel<
    T extends LogDefinition ? T['level'] : T
  >;

  export type GetEvents<T extends any[]> = T extends Array<LogLevel | LogDefinition>
    ? GetLogType<T[number]>
    : never;

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
    orders: number
    makerFills: number
    takerFills: number
  }

  export type UserCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    orders?: boolean | UserCountOutputTypeCountOrdersArgs
    makerFills?: boolean | UserCountOutputTypeCountMakerFillsArgs
    takerFills?: boolean | UserCountOutputTypeCountTakerFillsArgs
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
  export type UserCountOutputTypeCountOrdersArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: OrdersWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountMakerFillsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: FillsWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountTakerFillsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: FillsWhereInput
  }


  /**
   * Count Type OrdersCountOutputType
   */

  export type OrdersCountOutputType = {
    makerFills: number
    takerFills: number
  }

  export type OrdersCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    makerFills?: boolean | OrdersCountOutputTypeCountMakerFillsArgs
    takerFills?: boolean | OrdersCountOutputTypeCountTakerFillsArgs
  }

  // Custom InputTypes
  /**
   * OrdersCountOutputType without action
   */
  export type OrdersCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OrdersCountOutputType
     */
    select?: OrdersCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * OrdersCountOutputType without action
   */
  export type OrdersCountOutputTypeCountMakerFillsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: FillsWhereInput
  }

  /**
   * OrdersCountOutputType without action
   */
  export type OrdersCountOutputTypeCountTakerFillsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: FillsWhereInput
  }


  /**
   * Count Type MarketsCountOutputType
   */

  export type MarketsCountOutputType = {
    orders: number
    fills: number
  }

  export type MarketsCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    orders?: boolean | MarketsCountOutputTypeCountOrdersArgs
    fills?: boolean | MarketsCountOutputTypeCountFillsArgs
  }

  // Custom InputTypes
  /**
   * MarketsCountOutputType without action
   */
  export type MarketsCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MarketsCountOutputType
     */
    select?: MarketsCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * MarketsCountOutputType without action
   */
  export type MarketsCountOutputTypeCountOrdersArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: OrdersWhereInput
  }

  /**
   * MarketsCountOutputType without action
   */
  export type MarketsCountOutputTypeCountFillsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: FillsWhereInput
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
    username: string | null
    password: string | null
  }

  export type UserMaxAggregateOutputType = {
    id: string | null
    username: string | null
    password: string | null
  }

  export type UserCountAggregateOutputType = {
    id: number
    username: number
    password: number
    _all: number
  }


  export type UserMinAggregateInputType = {
    id?: true
    username?: true
    password?: true
  }

  export type UserMaxAggregateInputType = {
    id?: true
    username?: true
    password?: true
  }

  export type UserCountAggregateInputType = {
    id?: true
    username?: true
    password?: true
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
    username: string
    password: string
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
    username?: boolean
    password?: boolean
    orders?: boolean | User$ordersArgs<ExtArgs>
    makerFills?: boolean | User$makerFillsArgs<ExtArgs>
    takerFills?: boolean | User$takerFillsArgs<ExtArgs>
    _count?: boolean | UserCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["user"]>

  export type UserSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    username?: boolean
    password?: boolean
  }, ExtArgs["result"]["user"]>

  export type UserSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    username?: boolean
    password?: boolean
  }, ExtArgs["result"]["user"]>

  export type UserSelectScalar = {
    id?: boolean
    username?: boolean
    password?: boolean
  }

  export type UserOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "username" | "password", ExtArgs["result"]["user"]>
  export type UserInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    orders?: boolean | User$ordersArgs<ExtArgs>
    makerFills?: boolean | User$makerFillsArgs<ExtArgs>
    takerFills?: boolean | User$takerFillsArgs<ExtArgs>
    _count?: boolean | UserCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type UserIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type UserIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $UserPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "User"
    objects: {
      orders: Prisma.$OrdersPayload<ExtArgs>[]
      makerFills: Prisma.$FillsPayload<ExtArgs>[]
      takerFills: Prisma.$FillsPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      username: string
      password: string
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
    orders<T extends User$ordersArgs<ExtArgs> = {}>(args?: Subset<T, User$ordersArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$OrdersPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    makerFills<T extends User$makerFillsArgs<ExtArgs> = {}>(args?: Subset<T, User$makerFillsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$FillsPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    takerFills<T extends User$takerFillsArgs<ExtArgs> = {}>(args?: Subset<T, User$takerFillsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$FillsPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
    readonly username: FieldRef<"User", 'String'>
    readonly password: FieldRef<"User", 'String'>
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
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Users.
     */
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
   * User.orders
   */
  export type User$ordersArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Orders
     */
    select?: OrdersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Orders
     */
    omit?: OrdersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrdersInclude<ExtArgs> | null
    where?: OrdersWhereInput
    orderBy?: OrdersOrderByWithRelationInput | OrdersOrderByWithRelationInput[]
    cursor?: OrdersWhereUniqueInput
    take?: number
    skip?: number
    distinct?: OrdersScalarFieldEnum | OrdersScalarFieldEnum[]
  }

  /**
   * User.makerFills
   */
  export type User$makerFillsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Fills
     */
    select?: FillsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Fills
     */
    omit?: FillsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FillsInclude<ExtArgs> | null
    where?: FillsWhereInput
    orderBy?: FillsOrderByWithRelationInput | FillsOrderByWithRelationInput[]
    cursor?: FillsWhereUniqueInput
    take?: number
    skip?: number
    distinct?: FillsScalarFieldEnum | FillsScalarFieldEnum[]
  }

  /**
   * User.takerFills
   */
  export type User$takerFillsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Fills
     */
    select?: FillsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Fills
     */
    omit?: FillsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FillsInclude<ExtArgs> | null
    where?: FillsWhereInput
    orderBy?: FillsOrderByWithRelationInput | FillsOrderByWithRelationInput[]
    cursor?: FillsWhereUniqueInput
    take?: number
    skip?: number
    distinct?: FillsScalarFieldEnum | FillsScalarFieldEnum[]
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
   * Model Orders
   */

  export type AggregateOrders = {
    _count: OrdersCountAggregateOutputType | null
    _avg: OrdersAvgAggregateOutputType | null
    _sum: OrdersSumAggregateOutputType | null
    _min: OrdersMinAggregateOutputType | null
    _max: OrdersMaxAggregateOutputType | null
  }

  export type OrdersAvgAggregateOutputType = {
    slippage: number | null
  }

  export type OrdersSumAggregateOutputType = {
    slippage: number | null
  }

  export type OrdersMinAggregateOutputType = {
    id: string | null
    userID: string | null
    type: $Enums.Type | null
    orderType: $Enums.OrderType | null
    marketId: string | null
    price: string | null
    equity: string | null
    slippage: number | null
    qty: string | null
    status: $Enums.Status | null
    initialMargin: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type OrdersMaxAggregateOutputType = {
    id: string | null
    userID: string | null
    type: $Enums.Type | null
    orderType: $Enums.OrderType | null
    marketId: string | null
    price: string | null
    equity: string | null
    slippage: number | null
    qty: string | null
    status: $Enums.Status | null
    initialMargin: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type OrdersCountAggregateOutputType = {
    id: number
    userID: number
    type: number
    orderType: number
    marketId: number
    price: number
    equity: number
    slippage: number
    qty: number
    status: number
    initialMargin: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type OrdersAvgAggregateInputType = {
    slippage?: true
  }

  export type OrdersSumAggregateInputType = {
    slippage?: true
  }

  export type OrdersMinAggregateInputType = {
    id?: true
    userID?: true
    type?: true
    orderType?: true
    marketId?: true
    price?: true
    equity?: true
    slippage?: true
    qty?: true
    status?: true
    initialMargin?: true
    createdAt?: true
    updatedAt?: true
  }

  export type OrdersMaxAggregateInputType = {
    id?: true
    userID?: true
    type?: true
    orderType?: true
    marketId?: true
    price?: true
    equity?: true
    slippage?: true
    qty?: true
    status?: true
    initialMargin?: true
    createdAt?: true
    updatedAt?: true
  }

  export type OrdersCountAggregateInputType = {
    id?: true
    userID?: true
    type?: true
    orderType?: true
    marketId?: true
    price?: true
    equity?: true
    slippage?: true
    qty?: true
    status?: true
    initialMargin?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type OrdersAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Orders to aggregate.
     */
    where?: OrdersWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Orders to fetch.
     */
    orderBy?: OrdersOrderByWithRelationInput | OrdersOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: OrdersWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Orders from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Orders.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Orders
    **/
    _count?: true | OrdersCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: OrdersAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: OrdersSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: OrdersMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: OrdersMaxAggregateInputType
  }

  export type GetOrdersAggregateType<T extends OrdersAggregateArgs> = {
        [P in keyof T & keyof AggregateOrders]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateOrders[P]>
      : GetScalarType<T[P], AggregateOrders[P]>
  }




  export type OrdersGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: OrdersWhereInput
    orderBy?: OrdersOrderByWithAggregationInput | OrdersOrderByWithAggregationInput[]
    by: OrdersScalarFieldEnum[] | OrdersScalarFieldEnum
    having?: OrdersScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: OrdersCountAggregateInputType | true
    _avg?: OrdersAvgAggregateInputType
    _sum?: OrdersSumAggregateInputType
    _min?: OrdersMinAggregateInputType
    _max?: OrdersMaxAggregateInputType
  }

  export type OrdersGroupByOutputType = {
    id: string
    userID: string
    type: $Enums.Type
    orderType: $Enums.OrderType
    marketId: string
    price: string
    equity: string
    slippage: number
    qty: string
    status: $Enums.Status
    initialMargin: string
    createdAt: Date
    updatedAt: Date
    _count: OrdersCountAggregateOutputType | null
    _avg: OrdersAvgAggregateOutputType | null
    _sum: OrdersSumAggregateOutputType | null
    _min: OrdersMinAggregateOutputType | null
    _max: OrdersMaxAggregateOutputType | null
  }

  type GetOrdersGroupByPayload<T extends OrdersGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<OrdersGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof OrdersGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], OrdersGroupByOutputType[P]>
            : GetScalarType<T[P], OrdersGroupByOutputType[P]>
        }
      >
    >


  export type OrdersSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userID?: boolean
    type?: boolean
    orderType?: boolean
    marketId?: boolean
    price?: boolean
    equity?: boolean
    slippage?: boolean
    qty?: boolean
    status?: boolean
    initialMargin?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    author?: boolean | UserDefaultArgs<ExtArgs>
    market?: boolean | MarketsDefaultArgs<ExtArgs>
    makerFills?: boolean | Orders$makerFillsArgs<ExtArgs>
    takerFills?: boolean | Orders$takerFillsArgs<ExtArgs>
    _count?: boolean | OrdersCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["orders"]>

  export type OrdersSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userID?: boolean
    type?: boolean
    orderType?: boolean
    marketId?: boolean
    price?: boolean
    equity?: boolean
    slippage?: boolean
    qty?: boolean
    status?: boolean
    initialMargin?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    author?: boolean | UserDefaultArgs<ExtArgs>
    market?: boolean | MarketsDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["orders"]>

  export type OrdersSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userID?: boolean
    type?: boolean
    orderType?: boolean
    marketId?: boolean
    price?: boolean
    equity?: boolean
    slippage?: boolean
    qty?: boolean
    status?: boolean
    initialMargin?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    author?: boolean | UserDefaultArgs<ExtArgs>
    market?: boolean | MarketsDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["orders"]>

  export type OrdersSelectScalar = {
    id?: boolean
    userID?: boolean
    type?: boolean
    orderType?: boolean
    marketId?: boolean
    price?: boolean
    equity?: boolean
    slippage?: boolean
    qty?: boolean
    status?: boolean
    initialMargin?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type OrdersOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "userID" | "type" | "orderType" | "marketId" | "price" | "equity" | "slippage" | "qty" | "status" | "initialMargin" | "createdAt" | "updatedAt", ExtArgs["result"]["orders"]>
  export type OrdersInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    author?: boolean | UserDefaultArgs<ExtArgs>
    market?: boolean | MarketsDefaultArgs<ExtArgs>
    makerFills?: boolean | Orders$makerFillsArgs<ExtArgs>
    takerFills?: boolean | Orders$takerFillsArgs<ExtArgs>
    _count?: boolean | OrdersCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type OrdersIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    author?: boolean | UserDefaultArgs<ExtArgs>
    market?: boolean | MarketsDefaultArgs<ExtArgs>
  }
  export type OrdersIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    author?: boolean | UserDefaultArgs<ExtArgs>
    market?: boolean | MarketsDefaultArgs<ExtArgs>
  }

  export type $OrdersPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Orders"
    objects: {
      author: Prisma.$UserPayload<ExtArgs>
      market: Prisma.$MarketsPayload<ExtArgs>
      makerFills: Prisma.$FillsPayload<ExtArgs>[]
      takerFills: Prisma.$FillsPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      userID: string
      type: $Enums.Type
      orderType: $Enums.OrderType
      marketId: string
      price: string
      equity: string
      slippage: number
      qty: string
      status: $Enums.Status
      initialMargin: string
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["orders"]>
    composites: {}
  }

  type OrdersGetPayload<S extends boolean | null | undefined | OrdersDefaultArgs> = $Result.GetResult<Prisma.$OrdersPayload, S>

  type OrdersCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<OrdersFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: OrdersCountAggregateInputType | true
    }

  export interface OrdersDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Orders'], meta: { name: 'Orders' } }
    /**
     * Find zero or one Orders that matches the filter.
     * @param {OrdersFindUniqueArgs} args - Arguments to find a Orders
     * @example
     * // Get one Orders
     * const orders = await prisma.orders.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends OrdersFindUniqueArgs>(args: SelectSubset<T, OrdersFindUniqueArgs<ExtArgs>>): Prisma__OrdersClient<$Result.GetResult<Prisma.$OrdersPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Orders that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {OrdersFindUniqueOrThrowArgs} args - Arguments to find a Orders
     * @example
     * // Get one Orders
     * const orders = await prisma.orders.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends OrdersFindUniqueOrThrowArgs>(args: SelectSubset<T, OrdersFindUniqueOrThrowArgs<ExtArgs>>): Prisma__OrdersClient<$Result.GetResult<Prisma.$OrdersPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Orders that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OrdersFindFirstArgs} args - Arguments to find a Orders
     * @example
     * // Get one Orders
     * const orders = await prisma.orders.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends OrdersFindFirstArgs>(args?: SelectSubset<T, OrdersFindFirstArgs<ExtArgs>>): Prisma__OrdersClient<$Result.GetResult<Prisma.$OrdersPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Orders that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OrdersFindFirstOrThrowArgs} args - Arguments to find a Orders
     * @example
     * // Get one Orders
     * const orders = await prisma.orders.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends OrdersFindFirstOrThrowArgs>(args?: SelectSubset<T, OrdersFindFirstOrThrowArgs<ExtArgs>>): Prisma__OrdersClient<$Result.GetResult<Prisma.$OrdersPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Orders that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OrdersFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Orders
     * const orders = await prisma.orders.findMany()
     * 
     * // Get first 10 Orders
     * const orders = await prisma.orders.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const ordersWithIdOnly = await prisma.orders.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends OrdersFindManyArgs>(args?: SelectSubset<T, OrdersFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$OrdersPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Orders.
     * @param {OrdersCreateArgs} args - Arguments to create a Orders.
     * @example
     * // Create one Orders
     * const Orders = await prisma.orders.create({
     *   data: {
     *     // ... data to create a Orders
     *   }
     * })
     * 
     */
    create<T extends OrdersCreateArgs>(args: SelectSubset<T, OrdersCreateArgs<ExtArgs>>): Prisma__OrdersClient<$Result.GetResult<Prisma.$OrdersPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Orders.
     * @param {OrdersCreateManyArgs} args - Arguments to create many Orders.
     * @example
     * // Create many Orders
     * const orders = await prisma.orders.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends OrdersCreateManyArgs>(args?: SelectSubset<T, OrdersCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Orders and returns the data saved in the database.
     * @param {OrdersCreateManyAndReturnArgs} args - Arguments to create many Orders.
     * @example
     * // Create many Orders
     * const orders = await prisma.orders.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Orders and only return the `id`
     * const ordersWithIdOnly = await prisma.orders.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends OrdersCreateManyAndReturnArgs>(args?: SelectSubset<T, OrdersCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$OrdersPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Orders.
     * @param {OrdersDeleteArgs} args - Arguments to delete one Orders.
     * @example
     * // Delete one Orders
     * const Orders = await prisma.orders.delete({
     *   where: {
     *     // ... filter to delete one Orders
     *   }
     * })
     * 
     */
    delete<T extends OrdersDeleteArgs>(args: SelectSubset<T, OrdersDeleteArgs<ExtArgs>>): Prisma__OrdersClient<$Result.GetResult<Prisma.$OrdersPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Orders.
     * @param {OrdersUpdateArgs} args - Arguments to update one Orders.
     * @example
     * // Update one Orders
     * const orders = await prisma.orders.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends OrdersUpdateArgs>(args: SelectSubset<T, OrdersUpdateArgs<ExtArgs>>): Prisma__OrdersClient<$Result.GetResult<Prisma.$OrdersPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Orders.
     * @param {OrdersDeleteManyArgs} args - Arguments to filter Orders to delete.
     * @example
     * // Delete a few Orders
     * const { count } = await prisma.orders.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends OrdersDeleteManyArgs>(args?: SelectSubset<T, OrdersDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Orders.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OrdersUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Orders
     * const orders = await prisma.orders.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends OrdersUpdateManyArgs>(args: SelectSubset<T, OrdersUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Orders and returns the data updated in the database.
     * @param {OrdersUpdateManyAndReturnArgs} args - Arguments to update many Orders.
     * @example
     * // Update many Orders
     * const orders = await prisma.orders.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Orders and only return the `id`
     * const ordersWithIdOnly = await prisma.orders.updateManyAndReturn({
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
    updateManyAndReturn<T extends OrdersUpdateManyAndReturnArgs>(args: SelectSubset<T, OrdersUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$OrdersPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Orders.
     * @param {OrdersUpsertArgs} args - Arguments to update or create a Orders.
     * @example
     * // Update or create a Orders
     * const orders = await prisma.orders.upsert({
     *   create: {
     *     // ... data to create a Orders
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Orders we want to update
     *   }
     * })
     */
    upsert<T extends OrdersUpsertArgs>(args: SelectSubset<T, OrdersUpsertArgs<ExtArgs>>): Prisma__OrdersClient<$Result.GetResult<Prisma.$OrdersPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Orders.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OrdersCountArgs} args - Arguments to filter Orders to count.
     * @example
     * // Count the number of Orders
     * const count = await prisma.orders.count({
     *   where: {
     *     // ... the filter for the Orders we want to count
     *   }
     * })
    **/
    count<T extends OrdersCountArgs>(
      args?: Subset<T, OrdersCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], OrdersCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Orders.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OrdersAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends OrdersAggregateArgs>(args: Subset<T, OrdersAggregateArgs>): Prisma.PrismaPromise<GetOrdersAggregateType<T>>

    /**
     * Group by Orders.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OrdersGroupByArgs} args - Group by arguments.
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
      T extends OrdersGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: OrdersGroupByArgs['orderBy'] }
        : { orderBy?: OrdersGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, OrdersGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetOrdersGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Orders model
   */
  readonly fields: OrdersFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Orders.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__OrdersClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    author<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    market<T extends MarketsDefaultArgs<ExtArgs> = {}>(args?: Subset<T, MarketsDefaultArgs<ExtArgs>>): Prisma__MarketsClient<$Result.GetResult<Prisma.$MarketsPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    makerFills<T extends Orders$makerFillsArgs<ExtArgs> = {}>(args?: Subset<T, Orders$makerFillsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$FillsPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    takerFills<T extends Orders$takerFillsArgs<ExtArgs> = {}>(args?: Subset<T, Orders$takerFillsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$FillsPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the Orders model
   */
  interface OrdersFieldRefs {
    readonly id: FieldRef<"Orders", 'String'>
    readonly userID: FieldRef<"Orders", 'String'>
    readonly type: FieldRef<"Orders", 'Type'>
    readonly orderType: FieldRef<"Orders", 'OrderType'>
    readonly marketId: FieldRef<"Orders", 'String'>
    readonly price: FieldRef<"Orders", 'String'>
    readonly equity: FieldRef<"Orders", 'String'>
    readonly slippage: FieldRef<"Orders", 'Int'>
    readonly qty: FieldRef<"Orders", 'String'>
    readonly status: FieldRef<"Orders", 'Status'>
    readonly initialMargin: FieldRef<"Orders", 'String'>
    readonly createdAt: FieldRef<"Orders", 'DateTime'>
    readonly updatedAt: FieldRef<"Orders", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Orders findUnique
   */
  export type OrdersFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Orders
     */
    select?: OrdersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Orders
     */
    omit?: OrdersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrdersInclude<ExtArgs> | null
    /**
     * Filter, which Orders to fetch.
     */
    where: OrdersWhereUniqueInput
  }

  /**
   * Orders findUniqueOrThrow
   */
  export type OrdersFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Orders
     */
    select?: OrdersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Orders
     */
    omit?: OrdersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrdersInclude<ExtArgs> | null
    /**
     * Filter, which Orders to fetch.
     */
    where: OrdersWhereUniqueInput
  }

  /**
   * Orders findFirst
   */
  export type OrdersFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Orders
     */
    select?: OrdersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Orders
     */
    omit?: OrdersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrdersInclude<ExtArgs> | null
    /**
     * Filter, which Orders to fetch.
     */
    where?: OrdersWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Orders to fetch.
     */
    orderBy?: OrdersOrderByWithRelationInput | OrdersOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Orders.
     */
    cursor?: OrdersWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Orders from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Orders.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Orders.
     */
    distinct?: OrdersScalarFieldEnum | OrdersScalarFieldEnum[]
  }

  /**
   * Orders findFirstOrThrow
   */
  export type OrdersFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Orders
     */
    select?: OrdersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Orders
     */
    omit?: OrdersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrdersInclude<ExtArgs> | null
    /**
     * Filter, which Orders to fetch.
     */
    where?: OrdersWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Orders to fetch.
     */
    orderBy?: OrdersOrderByWithRelationInput | OrdersOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Orders.
     */
    cursor?: OrdersWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Orders from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Orders.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Orders.
     */
    distinct?: OrdersScalarFieldEnum | OrdersScalarFieldEnum[]
  }

  /**
   * Orders findMany
   */
  export type OrdersFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Orders
     */
    select?: OrdersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Orders
     */
    omit?: OrdersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrdersInclude<ExtArgs> | null
    /**
     * Filter, which Orders to fetch.
     */
    where?: OrdersWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Orders to fetch.
     */
    orderBy?: OrdersOrderByWithRelationInput | OrdersOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Orders.
     */
    cursor?: OrdersWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Orders from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Orders.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Orders.
     */
    distinct?: OrdersScalarFieldEnum | OrdersScalarFieldEnum[]
  }

  /**
   * Orders create
   */
  export type OrdersCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Orders
     */
    select?: OrdersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Orders
     */
    omit?: OrdersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrdersInclude<ExtArgs> | null
    /**
     * The data needed to create a Orders.
     */
    data: XOR<OrdersCreateInput, OrdersUncheckedCreateInput>
  }

  /**
   * Orders createMany
   */
  export type OrdersCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Orders.
     */
    data: OrdersCreateManyInput | OrdersCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Orders createManyAndReturn
   */
  export type OrdersCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Orders
     */
    select?: OrdersSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Orders
     */
    omit?: OrdersOmit<ExtArgs> | null
    /**
     * The data used to create many Orders.
     */
    data: OrdersCreateManyInput | OrdersCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrdersIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Orders update
   */
  export type OrdersUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Orders
     */
    select?: OrdersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Orders
     */
    omit?: OrdersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrdersInclude<ExtArgs> | null
    /**
     * The data needed to update a Orders.
     */
    data: XOR<OrdersUpdateInput, OrdersUncheckedUpdateInput>
    /**
     * Choose, which Orders to update.
     */
    where: OrdersWhereUniqueInput
  }

  /**
   * Orders updateMany
   */
  export type OrdersUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Orders.
     */
    data: XOR<OrdersUpdateManyMutationInput, OrdersUncheckedUpdateManyInput>
    /**
     * Filter which Orders to update
     */
    where?: OrdersWhereInput
    /**
     * Limit how many Orders to update.
     */
    limit?: number
  }

  /**
   * Orders updateManyAndReturn
   */
  export type OrdersUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Orders
     */
    select?: OrdersSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Orders
     */
    omit?: OrdersOmit<ExtArgs> | null
    /**
     * The data used to update Orders.
     */
    data: XOR<OrdersUpdateManyMutationInput, OrdersUncheckedUpdateManyInput>
    /**
     * Filter which Orders to update
     */
    where?: OrdersWhereInput
    /**
     * Limit how many Orders to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrdersIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Orders upsert
   */
  export type OrdersUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Orders
     */
    select?: OrdersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Orders
     */
    omit?: OrdersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrdersInclude<ExtArgs> | null
    /**
     * The filter to search for the Orders to update in case it exists.
     */
    where: OrdersWhereUniqueInput
    /**
     * In case the Orders found by the `where` argument doesn't exist, create a new Orders with this data.
     */
    create: XOR<OrdersCreateInput, OrdersUncheckedCreateInput>
    /**
     * In case the Orders was found with the provided `where` argument, update it with this data.
     */
    update: XOR<OrdersUpdateInput, OrdersUncheckedUpdateInput>
  }

  /**
   * Orders delete
   */
  export type OrdersDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Orders
     */
    select?: OrdersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Orders
     */
    omit?: OrdersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrdersInclude<ExtArgs> | null
    /**
     * Filter which Orders to delete.
     */
    where: OrdersWhereUniqueInput
  }

  /**
   * Orders deleteMany
   */
  export type OrdersDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Orders to delete
     */
    where?: OrdersWhereInput
    /**
     * Limit how many Orders to delete.
     */
    limit?: number
  }

  /**
   * Orders.makerFills
   */
  export type Orders$makerFillsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Fills
     */
    select?: FillsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Fills
     */
    omit?: FillsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FillsInclude<ExtArgs> | null
    where?: FillsWhereInput
    orderBy?: FillsOrderByWithRelationInput | FillsOrderByWithRelationInput[]
    cursor?: FillsWhereUniqueInput
    take?: number
    skip?: number
    distinct?: FillsScalarFieldEnum | FillsScalarFieldEnum[]
  }

  /**
   * Orders.takerFills
   */
  export type Orders$takerFillsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Fills
     */
    select?: FillsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Fills
     */
    omit?: FillsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FillsInclude<ExtArgs> | null
    where?: FillsWhereInput
    orderBy?: FillsOrderByWithRelationInput | FillsOrderByWithRelationInput[]
    cursor?: FillsWhereUniqueInput
    take?: number
    skip?: number
    distinct?: FillsScalarFieldEnum | FillsScalarFieldEnum[]
  }

  /**
   * Orders without action
   */
  export type OrdersDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Orders
     */
    select?: OrdersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Orders
     */
    omit?: OrdersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrdersInclude<ExtArgs> | null
  }


  /**
   * Model Markets
   */

  export type AggregateMarkets = {
    _count: MarketsCountAggregateOutputType | null
    _min: MarketsMinAggregateOutputType | null
    _max: MarketsMaxAggregateOutputType | null
  }

  export type MarketsMinAggregateOutputType = {
    id: string | null
    marketSlug: string | null
    imageUrl: string | null
  }

  export type MarketsMaxAggregateOutputType = {
    id: string | null
    marketSlug: string | null
    imageUrl: string | null
  }

  export type MarketsCountAggregateOutputType = {
    id: number
    marketSlug: number
    imageUrl: number
    _all: number
  }


  export type MarketsMinAggregateInputType = {
    id?: true
    marketSlug?: true
    imageUrl?: true
  }

  export type MarketsMaxAggregateInputType = {
    id?: true
    marketSlug?: true
    imageUrl?: true
  }

  export type MarketsCountAggregateInputType = {
    id?: true
    marketSlug?: true
    imageUrl?: true
    _all?: true
  }

  export type MarketsAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Markets to aggregate.
     */
    where?: MarketsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Markets to fetch.
     */
    orderBy?: MarketsOrderByWithRelationInput | MarketsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: MarketsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Markets from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Markets.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Markets
    **/
    _count?: true | MarketsCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: MarketsMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: MarketsMaxAggregateInputType
  }

  export type GetMarketsAggregateType<T extends MarketsAggregateArgs> = {
        [P in keyof T & keyof AggregateMarkets]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateMarkets[P]>
      : GetScalarType<T[P], AggregateMarkets[P]>
  }




  export type MarketsGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: MarketsWhereInput
    orderBy?: MarketsOrderByWithAggregationInput | MarketsOrderByWithAggregationInput[]
    by: MarketsScalarFieldEnum[] | MarketsScalarFieldEnum
    having?: MarketsScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: MarketsCountAggregateInputType | true
    _min?: MarketsMinAggregateInputType
    _max?: MarketsMaxAggregateInputType
  }

  export type MarketsGroupByOutputType = {
    id: string
    marketSlug: string
    imageUrl: string
    _count: MarketsCountAggregateOutputType | null
    _min: MarketsMinAggregateOutputType | null
    _max: MarketsMaxAggregateOutputType | null
  }

  type GetMarketsGroupByPayload<T extends MarketsGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<MarketsGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof MarketsGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], MarketsGroupByOutputType[P]>
            : GetScalarType<T[P], MarketsGroupByOutputType[P]>
        }
      >
    >


  export type MarketsSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    marketSlug?: boolean
    imageUrl?: boolean
    orders?: boolean | Markets$ordersArgs<ExtArgs>
    fills?: boolean | Markets$fillsArgs<ExtArgs>
    _count?: boolean | MarketsCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["markets"]>

  export type MarketsSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    marketSlug?: boolean
    imageUrl?: boolean
  }, ExtArgs["result"]["markets"]>

  export type MarketsSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    marketSlug?: boolean
    imageUrl?: boolean
  }, ExtArgs["result"]["markets"]>

  export type MarketsSelectScalar = {
    id?: boolean
    marketSlug?: boolean
    imageUrl?: boolean
  }

  export type MarketsOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "marketSlug" | "imageUrl", ExtArgs["result"]["markets"]>
  export type MarketsInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    orders?: boolean | Markets$ordersArgs<ExtArgs>
    fills?: boolean | Markets$fillsArgs<ExtArgs>
    _count?: boolean | MarketsCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type MarketsIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type MarketsIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $MarketsPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Markets"
    objects: {
      orders: Prisma.$OrdersPayload<ExtArgs>[]
      fills: Prisma.$FillsPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      marketSlug: string
      imageUrl: string
    }, ExtArgs["result"]["markets"]>
    composites: {}
  }

  type MarketsGetPayload<S extends boolean | null | undefined | MarketsDefaultArgs> = $Result.GetResult<Prisma.$MarketsPayload, S>

  type MarketsCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<MarketsFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: MarketsCountAggregateInputType | true
    }

  export interface MarketsDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Markets'], meta: { name: 'Markets' } }
    /**
     * Find zero or one Markets that matches the filter.
     * @param {MarketsFindUniqueArgs} args - Arguments to find a Markets
     * @example
     * // Get one Markets
     * const markets = await prisma.markets.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends MarketsFindUniqueArgs>(args: SelectSubset<T, MarketsFindUniqueArgs<ExtArgs>>): Prisma__MarketsClient<$Result.GetResult<Prisma.$MarketsPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Markets that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {MarketsFindUniqueOrThrowArgs} args - Arguments to find a Markets
     * @example
     * // Get one Markets
     * const markets = await prisma.markets.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends MarketsFindUniqueOrThrowArgs>(args: SelectSubset<T, MarketsFindUniqueOrThrowArgs<ExtArgs>>): Prisma__MarketsClient<$Result.GetResult<Prisma.$MarketsPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Markets that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MarketsFindFirstArgs} args - Arguments to find a Markets
     * @example
     * // Get one Markets
     * const markets = await prisma.markets.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends MarketsFindFirstArgs>(args?: SelectSubset<T, MarketsFindFirstArgs<ExtArgs>>): Prisma__MarketsClient<$Result.GetResult<Prisma.$MarketsPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Markets that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MarketsFindFirstOrThrowArgs} args - Arguments to find a Markets
     * @example
     * // Get one Markets
     * const markets = await prisma.markets.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends MarketsFindFirstOrThrowArgs>(args?: SelectSubset<T, MarketsFindFirstOrThrowArgs<ExtArgs>>): Prisma__MarketsClient<$Result.GetResult<Prisma.$MarketsPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Markets that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MarketsFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Markets
     * const markets = await prisma.markets.findMany()
     * 
     * // Get first 10 Markets
     * const markets = await prisma.markets.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const marketsWithIdOnly = await prisma.markets.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends MarketsFindManyArgs>(args?: SelectSubset<T, MarketsFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$MarketsPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Markets.
     * @param {MarketsCreateArgs} args - Arguments to create a Markets.
     * @example
     * // Create one Markets
     * const Markets = await prisma.markets.create({
     *   data: {
     *     // ... data to create a Markets
     *   }
     * })
     * 
     */
    create<T extends MarketsCreateArgs>(args: SelectSubset<T, MarketsCreateArgs<ExtArgs>>): Prisma__MarketsClient<$Result.GetResult<Prisma.$MarketsPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Markets.
     * @param {MarketsCreateManyArgs} args - Arguments to create many Markets.
     * @example
     * // Create many Markets
     * const markets = await prisma.markets.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends MarketsCreateManyArgs>(args?: SelectSubset<T, MarketsCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Markets and returns the data saved in the database.
     * @param {MarketsCreateManyAndReturnArgs} args - Arguments to create many Markets.
     * @example
     * // Create many Markets
     * const markets = await prisma.markets.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Markets and only return the `id`
     * const marketsWithIdOnly = await prisma.markets.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends MarketsCreateManyAndReturnArgs>(args?: SelectSubset<T, MarketsCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$MarketsPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Markets.
     * @param {MarketsDeleteArgs} args - Arguments to delete one Markets.
     * @example
     * // Delete one Markets
     * const Markets = await prisma.markets.delete({
     *   where: {
     *     // ... filter to delete one Markets
     *   }
     * })
     * 
     */
    delete<T extends MarketsDeleteArgs>(args: SelectSubset<T, MarketsDeleteArgs<ExtArgs>>): Prisma__MarketsClient<$Result.GetResult<Prisma.$MarketsPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Markets.
     * @param {MarketsUpdateArgs} args - Arguments to update one Markets.
     * @example
     * // Update one Markets
     * const markets = await prisma.markets.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends MarketsUpdateArgs>(args: SelectSubset<T, MarketsUpdateArgs<ExtArgs>>): Prisma__MarketsClient<$Result.GetResult<Prisma.$MarketsPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Markets.
     * @param {MarketsDeleteManyArgs} args - Arguments to filter Markets to delete.
     * @example
     * // Delete a few Markets
     * const { count } = await prisma.markets.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends MarketsDeleteManyArgs>(args?: SelectSubset<T, MarketsDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Markets.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MarketsUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Markets
     * const markets = await prisma.markets.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends MarketsUpdateManyArgs>(args: SelectSubset<T, MarketsUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Markets and returns the data updated in the database.
     * @param {MarketsUpdateManyAndReturnArgs} args - Arguments to update many Markets.
     * @example
     * // Update many Markets
     * const markets = await prisma.markets.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Markets and only return the `id`
     * const marketsWithIdOnly = await prisma.markets.updateManyAndReturn({
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
    updateManyAndReturn<T extends MarketsUpdateManyAndReturnArgs>(args: SelectSubset<T, MarketsUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$MarketsPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Markets.
     * @param {MarketsUpsertArgs} args - Arguments to update or create a Markets.
     * @example
     * // Update or create a Markets
     * const markets = await prisma.markets.upsert({
     *   create: {
     *     // ... data to create a Markets
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Markets we want to update
     *   }
     * })
     */
    upsert<T extends MarketsUpsertArgs>(args: SelectSubset<T, MarketsUpsertArgs<ExtArgs>>): Prisma__MarketsClient<$Result.GetResult<Prisma.$MarketsPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Markets.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MarketsCountArgs} args - Arguments to filter Markets to count.
     * @example
     * // Count the number of Markets
     * const count = await prisma.markets.count({
     *   where: {
     *     // ... the filter for the Markets we want to count
     *   }
     * })
    **/
    count<T extends MarketsCountArgs>(
      args?: Subset<T, MarketsCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], MarketsCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Markets.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MarketsAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends MarketsAggregateArgs>(args: Subset<T, MarketsAggregateArgs>): Prisma.PrismaPromise<GetMarketsAggregateType<T>>

    /**
     * Group by Markets.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MarketsGroupByArgs} args - Group by arguments.
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
      T extends MarketsGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: MarketsGroupByArgs['orderBy'] }
        : { orderBy?: MarketsGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, MarketsGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetMarketsGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Markets model
   */
  readonly fields: MarketsFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Markets.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__MarketsClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    orders<T extends Markets$ordersArgs<ExtArgs> = {}>(args?: Subset<T, Markets$ordersArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$OrdersPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    fills<T extends Markets$fillsArgs<ExtArgs> = {}>(args?: Subset<T, Markets$fillsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$FillsPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the Markets model
   */
  interface MarketsFieldRefs {
    readonly id: FieldRef<"Markets", 'String'>
    readonly marketSlug: FieldRef<"Markets", 'String'>
    readonly imageUrl: FieldRef<"Markets", 'String'>
  }
    

  // Custom InputTypes
  /**
   * Markets findUnique
   */
  export type MarketsFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Markets
     */
    select?: MarketsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Markets
     */
    omit?: MarketsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MarketsInclude<ExtArgs> | null
    /**
     * Filter, which Markets to fetch.
     */
    where: MarketsWhereUniqueInput
  }

  /**
   * Markets findUniqueOrThrow
   */
  export type MarketsFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Markets
     */
    select?: MarketsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Markets
     */
    omit?: MarketsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MarketsInclude<ExtArgs> | null
    /**
     * Filter, which Markets to fetch.
     */
    where: MarketsWhereUniqueInput
  }

  /**
   * Markets findFirst
   */
  export type MarketsFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Markets
     */
    select?: MarketsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Markets
     */
    omit?: MarketsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MarketsInclude<ExtArgs> | null
    /**
     * Filter, which Markets to fetch.
     */
    where?: MarketsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Markets to fetch.
     */
    orderBy?: MarketsOrderByWithRelationInput | MarketsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Markets.
     */
    cursor?: MarketsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Markets from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Markets.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Markets.
     */
    distinct?: MarketsScalarFieldEnum | MarketsScalarFieldEnum[]
  }

  /**
   * Markets findFirstOrThrow
   */
  export type MarketsFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Markets
     */
    select?: MarketsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Markets
     */
    omit?: MarketsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MarketsInclude<ExtArgs> | null
    /**
     * Filter, which Markets to fetch.
     */
    where?: MarketsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Markets to fetch.
     */
    orderBy?: MarketsOrderByWithRelationInput | MarketsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Markets.
     */
    cursor?: MarketsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Markets from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Markets.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Markets.
     */
    distinct?: MarketsScalarFieldEnum | MarketsScalarFieldEnum[]
  }

  /**
   * Markets findMany
   */
  export type MarketsFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Markets
     */
    select?: MarketsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Markets
     */
    omit?: MarketsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MarketsInclude<ExtArgs> | null
    /**
     * Filter, which Markets to fetch.
     */
    where?: MarketsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Markets to fetch.
     */
    orderBy?: MarketsOrderByWithRelationInput | MarketsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Markets.
     */
    cursor?: MarketsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Markets from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Markets.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Markets.
     */
    distinct?: MarketsScalarFieldEnum | MarketsScalarFieldEnum[]
  }

  /**
   * Markets create
   */
  export type MarketsCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Markets
     */
    select?: MarketsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Markets
     */
    omit?: MarketsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MarketsInclude<ExtArgs> | null
    /**
     * The data needed to create a Markets.
     */
    data: XOR<MarketsCreateInput, MarketsUncheckedCreateInput>
  }

  /**
   * Markets createMany
   */
  export type MarketsCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Markets.
     */
    data: MarketsCreateManyInput | MarketsCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Markets createManyAndReturn
   */
  export type MarketsCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Markets
     */
    select?: MarketsSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Markets
     */
    omit?: MarketsOmit<ExtArgs> | null
    /**
     * The data used to create many Markets.
     */
    data: MarketsCreateManyInput | MarketsCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Markets update
   */
  export type MarketsUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Markets
     */
    select?: MarketsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Markets
     */
    omit?: MarketsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MarketsInclude<ExtArgs> | null
    /**
     * The data needed to update a Markets.
     */
    data: XOR<MarketsUpdateInput, MarketsUncheckedUpdateInput>
    /**
     * Choose, which Markets to update.
     */
    where: MarketsWhereUniqueInput
  }

  /**
   * Markets updateMany
   */
  export type MarketsUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Markets.
     */
    data: XOR<MarketsUpdateManyMutationInput, MarketsUncheckedUpdateManyInput>
    /**
     * Filter which Markets to update
     */
    where?: MarketsWhereInput
    /**
     * Limit how many Markets to update.
     */
    limit?: number
  }

  /**
   * Markets updateManyAndReturn
   */
  export type MarketsUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Markets
     */
    select?: MarketsSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Markets
     */
    omit?: MarketsOmit<ExtArgs> | null
    /**
     * The data used to update Markets.
     */
    data: XOR<MarketsUpdateManyMutationInput, MarketsUncheckedUpdateManyInput>
    /**
     * Filter which Markets to update
     */
    where?: MarketsWhereInput
    /**
     * Limit how many Markets to update.
     */
    limit?: number
  }

  /**
   * Markets upsert
   */
  export type MarketsUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Markets
     */
    select?: MarketsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Markets
     */
    omit?: MarketsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MarketsInclude<ExtArgs> | null
    /**
     * The filter to search for the Markets to update in case it exists.
     */
    where: MarketsWhereUniqueInput
    /**
     * In case the Markets found by the `where` argument doesn't exist, create a new Markets with this data.
     */
    create: XOR<MarketsCreateInput, MarketsUncheckedCreateInput>
    /**
     * In case the Markets was found with the provided `where` argument, update it with this data.
     */
    update: XOR<MarketsUpdateInput, MarketsUncheckedUpdateInput>
  }

  /**
   * Markets delete
   */
  export type MarketsDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Markets
     */
    select?: MarketsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Markets
     */
    omit?: MarketsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MarketsInclude<ExtArgs> | null
    /**
     * Filter which Markets to delete.
     */
    where: MarketsWhereUniqueInput
  }

  /**
   * Markets deleteMany
   */
  export type MarketsDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Markets to delete
     */
    where?: MarketsWhereInput
    /**
     * Limit how many Markets to delete.
     */
    limit?: number
  }

  /**
   * Markets.orders
   */
  export type Markets$ordersArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Orders
     */
    select?: OrdersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Orders
     */
    omit?: OrdersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrdersInclude<ExtArgs> | null
    where?: OrdersWhereInput
    orderBy?: OrdersOrderByWithRelationInput | OrdersOrderByWithRelationInput[]
    cursor?: OrdersWhereUniqueInput
    take?: number
    skip?: number
    distinct?: OrdersScalarFieldEnum | OrdersScalarFieldEnum[]
  }

  /**
   * Markets.fills
   */
  export type Markets$fillsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Fills
     */
    select?: FillsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Fills
     */
    omit?: FillsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FillsInclude<ExtArgs> | null
    where?: FillsWhereInput
    orderBy?: FillsOrderByWithRelationInput | FillsOrderByWithRelationInput[]
    cursor?: FillsWhereUniqueInput
    take?: number
    skip?: number
    distinct?: FillsScalarFieldEnum | FillsScalarFieldEnum[]
  }

  /**
   * Markets without action
   */
  export type MarketsDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Markets
     */
    select?: MarketsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Markets
     */
    omit?: MarketsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MarketsInclude<ExtArgs> | null
  }


  /**
   * Model Fills
   */

  export type AggregateFills = {
    _count: FillsCountAggregateOutputType | null
    _min: FillsMinAggregateOutputType | null
    _max: FillsMaxAggregateOutputType | null
  }

  export type FillsMinAggregateOutputType = {
    id: string | null
    maker: string | null
    taker: string | null
    marketId: string | null
    price: string | null
    qty: string | null
    makerOrderId: string | null
    takerOrderId: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type FillsMaxAggregateOutputType = {
    id: string | null
    maker: string | null
    taker: string | null
    marketId: string | null
    price: string | null
    qty: string | null
    makerOrderId: string | null
    takerOrderId: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type FillsCountAggregateOutputType = {
    id: number
    maker: number
    taker: number
    marketId: number
    price: number
    qty: number
    makerOrderId: number
    takerOrderId: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type FillsMinAggregateInputType = {
    id?: true
    maker?: true
    taker?: true
    marketId?: true
    price?: true
    qty?: true
    makerOrderId?: true
    takerOrderId?: true
    createdAt?: true
    updatedAt?: true
  }

  export type FillsMaxAggregateInputType = {
    id?: true
    maker?: true
    taker?: true
    marketId?: true
    price?: true
    qty?: true
    makerOrderId?: true
    takerOrderId?: true
    createdAt?: true
    updatedAt?: true
  }

  export type FillsCountAggregateInputType = {
    id?: true
    maker?: true
    taker?: true
    marketId?: true
    price?: true
    qty?: true
    makerOrderId?: true
    takerOrderId?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type FillsAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Fills to aggregate.
     */
    where?: FillsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Fills to fetch.
     */
    orderBy?: FillsOrderByWithRelationInput | FillsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: FillsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Fills from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Fills.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Fills
    **/
    _count?: true | FillsCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: FillsMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: FillsMaxAggregateInputType
  }

  export type GetFillsAggregateType<T extends FillsAggregateArgs> = {
        [P in keyof T & keyof AggregateFills]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateFills[P]>
      : GetScalarType<T[P], AggregateFills[P]>
  }




  export type FillsGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: FillsWhereInput
    orderBy?: FillsOrderByWithAggregationInput | FillsOrderByWithAggregationInput[]
    by: FillsScalarFieldEnum[] | FillsScalarFieldEnum
    having?: FillsScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: FillsCountAggregateInputType | true
    _min?: FillsMinAggregateInputType
    _max?: FillsMaxAggregateInputType
  }

  export type FillsGroupByOutputType = {
    id: string
    maker: string
    taker: string
    marketId: string
    price: string
    qty: string
    makerOrderId: string
    takerOrderId: string
    createdAt: Date
    updatedAt: Date
    _count: FillsCountAggregateOutputType | null
    _min: FillsMinAggregateOutputType | null
    _max: FillsMaxAggregateOutputType | null
  }

  type GetFillsGroupByPayload<T extends FillsGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<FillsGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof FillsGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], FillsGroupByOutputType[P]>
            : GetScalarType<T[P], FillsGroupByOutputType[P]>
        }
      >
    >


  export type FillsSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    maker?: boolean
    taker?: boolean
    marketId?: boolean
    price?: boolean
    qty?: boolean
    makerOrderId?: boolean
    takerOrderId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    makerUser?: boolean | UserDefaultArgs<ExtArgs>
    takerUser?: boolean | UserDefaultArgs<ExtArgs>
    market?: boolean | MarketsDefaultArgs<ExtArgs>
    makerOrder?: boolean | OrdersDefaultArgs<ExtArgs>
    takerOrder?: boolean | OrdersDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["fills"]>

  export type FillsSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    maker?: boolean
    taker?: boolean
    marketId?: boolean
    price?: boolean
    qty?: boolean
    makerOrderId?: boolean
    takerOrderId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    makerUser?: boolean | UserDefaultArgs<ExtArgs>
    takerUser?: boolean | UserDefaultArgs<ExtArgs>
    market?: boolean | MarketsDefaultArgs<ExtArgs>
    makerOrder?: boolean | OrdersDefaultArgs<ExtArgs>
    takerOrder?: boolean | OrdersDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["fills"]>

  export type FillsSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    maker?: boolean
    taker?: boolean
    marketId?: boolean
    price?: boolean
    qty?: boolean
    makerOrderId?: boolean
    takerOrderId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    makerUser?: boolean | UserDefaultArgs<ExtArgs>
    takerUser?: boolean | UserDefaultArgs<ExtArgs>
    market?: boolean | MarketsDefaultArgs<ExtArgs>
    makerOrder?: boolean | OrdersDefaultArgs<ExtArgs>
    takerOrder?: boolean | OrdersDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["fills"]>

  export type FillsSelectScalar = {
    id?: boolean
    maker?: boolean
    taker?: boolean
    marketId?: boolean
    price?: boolean
    qty?: boolean
    makerOrderId?: boolean
    takerOrderId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type FillsOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "maker" | "taker" | "marketId" | "price" | "qty" | "makerOrderId" | "takerOrderId" | "createdAt" | "updatedAt", ExtArgs["result"]["fills"]>
  export type FillsInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    makerUser?: boolean | UserDefaultArgs<ExtArgs>
    takerUser?: boolean | UserDefaultArgs<ExtArgs>
    market?: boolean | MarketsDefaultArgs<ExtArgs>
    makerOrder?: boolean | OrdersDefaultArgs<ExtArgs>
    takerOrder?: boolean | OrdersDefaultArgs<ExtArgs>
  }
  export type FillsIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    makerUser?: boolean | UserDefaultArgs<ExtArgs>
    takerUser?: boolean | UserDefaultArgs<ExtArgs>
    market?: boolean | MarketsDefaultArgs<ExtArgs>
    makerOrder?: boolean | OrdersDefaultArgs<ExtArgs>
    takerOrder?: boolean | OrdersDefaultArgs<ExtArgs>
  }
  export type FillsIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    makerUser?: boolean | UserDefaultArgs<ExtArgs>
    takerUser?: boolean | UserDefaultArgs<ExtArgs>
    market?: boolean | MarketsDefaultArgs<ExtArgs>
    makerOrder?: boolean | OrdersDefaultArgs<ExtArgs>
    takerOrder?: boolean | OrdersDefaultArgs<ExtArgs>
  }

  export type $FillsPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Fills"
    objects: {
      makerUser: Prisma.$UserPayload<ExtArgs>
      takerUser: Prisma.$UserPayload<ExtArgs>
      market: Prisma.$MarketsPayload<ExtArgs>
      makerOrder: Prisma.$OrdersPayload<ExtArgs>
      takerOrder: Prisma.$OrdersPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      maker: string
      taker: string
      marketId: string
      price: string
      qty: string
      makerOrderId: string
      takerOrderId: string
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["fills"]>
    composites: {}
  }

  type FillsGetPayload<S extends boolean | null | undefined | FillsDefaultArgs> = $Result.GetResult<Prisma.$FillsPayload, S>

  type FillsCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<FillsFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: FillsCountAggregateInputType | true
    }

  export interface FillsDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Fills'], meta: { name: 'Fills' } }
    /**
     * Find zero or one Fills that matches the filter.
     * @param {FillsFindUniqueArgs} args - Arguments to find a Fills
     * @example
     * // Get one Fills
     * const fills = await prisma.fills.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends FillsFindUniqueArgs>(args: SelectSubset<T, FillsFindUniqueArgs<ExtArgs>>): Prisma__FillsClient<$Result.GetResult<Prisma.$FillsPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Fills that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {FillsFindUniqueOrThrowArgs} args - Arguments to find a Fills
     * @example
     * // Get one Fills
     * const fills = await prisma.fills.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends FillsFindUniqueOrThrowArgs>(args: SelectSubset<T, FillsFindUniqueOrThrowArgs<ExtArgs>>): Prisma__FillsClient<$Result.GetResult<Prisma.$FillsPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Fills that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FillsFindFirstArgs} args - Arguments to find a Fills
     * @example
     * // Get one Fills
     * const fills = await prisma.fills.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends FillsFindFirstArgs>(args?: SelectSubset<T, FillsFindFirstArgs<ExtArgs>>): Prisma__FillsClient<$Result.GetResult<Prisma.$FillsPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Fills that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FillsFindFirstOrThrowArgs} args - Arguments to find a Fills
     * @example
     * // Get one Fills
     * const fills = await prisma.fills.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends FillsFindFirstOrThrowArgs>(args?: SelectSubset<T, FillsFindFirstOrThrowArgs<ExtArgs>>): Prisma__FillsClient<$Result.GetResult<Prisma.$FillsPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Fills that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FillsFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Fills
     * const fills = await prisma.fills.findMany()
     * 
     * // Get first 10 Fills
     * const fills = await prisma.fills.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const fillsWithIdOnly = await prisma.fills.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends FillsFindManyArgs>(args?: SelectSubset<T, FillsFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$FillsPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Fills.
     * @param {FillsCreateArgs} args - Arguments to create a Fills.
     * @example
     * // Create one Fills
     * const Fills = await prisma.fills.create({
     *   data: {
     *     // ... data to create a Fills
     *   }
     * })
     * 
     */
    create<T extends FillsCreateArgs>(args: SelectSubset<T, FillsCreateArgs<ExtArgs>>): Prisma__FillsClient<$Result.GetResult<Prisma.$FillsPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Fills.
     * @param {FillsCreateManyArgs} args - Arguments to create many Fills.
     * @example
     * // Create many Fills
     * const fills = await prisma.fills.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends FillsCreateManyArgs>(args?: SelectSubset<T, FillsCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Fills and returns the data saved in the database.
     * @param {FillsCreateManyAndReturnArgs} args - Arguments to create many Fills.
     * @example
     * // Create many Fills
     * const fills = await prisma.fills.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Fills and only return the `id`
     * const fillsWithIdOnly = await prisma.fills.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends FillsCreateManyAndReturnArgs>(args?: SelectSubset<T, FillsCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$FillsPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Fills.
     * @param {FillsDeleteArgs} args - Arguments to delete one Fills.
     * @example
     * // Delete one Fills
     * const Fills = await prisma.fills.delete({
     *   where: {
     *     // ... filter to delete one Fills
     *   }
     * })
     * 
     */
    delete<T extends FillsDeleteArgs>(args: SelectSubset<T, FillsDeleteArgs<ExtArgs>>): Prisma__FillsClient<$Result.GetResult<Prisma.$FillsPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Fills.
     * @param {FillsUpdateArgs} args - Arguments to update one Fills.
     * @example
     * // Update one Fills
     * const fills = await prisma.fills.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends FillsUpdateArgs>(args: SelectSubset<T, FillsUpdateArgs<ExtArgs>>): Prisma__FillsClient<$Result.GetResult<Prisma.$FillsPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Fills.
     * @param {FillsDeleteManyArgs} args - Arguments to filter Fills to delete.
     * @example
     * // Delete a few Fills
     * const { count } = await prisma.fills.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends FillsDeleteManyArgs>(args?: SelectSubset<T, FillsDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Fills.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FillsUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Fills
     * const fills = await prisma.fills.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends FillsUpdateManyArgs>(args: SelectSubset<T, FillsUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Fills and returns the data updated in the database.
     * @param {FillsUpdateManyAndReturnArgs} args - Arguments to update many Fills.
     * @example
     * // Update many Fills
     * const fills = await prisma.fills.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Fills and only return the `id`
     * const fillsWithIdOnly = await prisma.fills.updateManyAndReturn({
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
    updateManyAndReturn<T extends FillsUpdateManyAndReturnArgs>(args: SelectSubset<T, FillsUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$FillsPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Fills.
     * @param {FillsUpsertArgs} args - Arguments to update or create a Fills.
     * @example
     * // Update or create a Fills
     * const fills = await prisma.fills.upsert({
     *   create: {
     *     // ... data to create a Fills
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Fills we want to update
     *   }
     * })
     */
    upsert<T extends FillsUpsertArgs>(args: SelectSubset<T, FillsUpsertArgs<ExtArgs>>): Prisma__FillsClient<$Result.GetResult<Prisma.$FillsPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Fills.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FillsCountArgs} args - Arguments to filter Fills to count.
     * @example
     * // Count the number of Fills
     * const count = await prisma.fills.count({
     *   where: {
     *     // ... the filter for the Fills we want to count
     *   }
     * })
    **/
    count<T extends FillsCountArgs>(
      args?: Subset<T, FillsCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], FillsCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Fills.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FillsAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends FillsAggregateArgs>(args: Subset<T, FillsAggregateArgs>): Prisma.PrismaPromise<GetFillsAggregateType<T>>

    /**
     * Group by Fills.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FillsGroupByArgs} args - Group by arguments.
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
      T extends FillsGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: FillsGroupByArgs['orderBy'] }
        : { orderBy?: FillsGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, FillsGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetFillsGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Fills model
   */
  readonly fields: FillsFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Fills.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__FillsClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    makerUser<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    takerUser<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    market<T extends MarketsDefaultArgs<ExtArgs> = {}>(args?: Subset<T, MarketsDefaultArgs<ExtArgs>>): Prisma__MarketsClient<$Result.GetResult<Prisma.$MarketsPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    makerOrder<T extends OrdersDefaultArgs<ExtArgs> = {}>(args?: Subset<T, OrdersDefaultArgs<ExtArgs>>): Prisma__OrdersClient<$Result.GetResult<Prisma.$OrdersPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    takerOrder<T extends OrdersDefaultArgs<ExtArgs> = {}>(args?: Subset<T, OrdersDefaultArgs<ExtArgs>>): Prisma__OrdersClient<$Result.GetResult<Prisma.$OrdersPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the Fills model
   */
  interface FillsFieldRefs {
    readonly id: FieldRef<"Fills", 'String'>
    readonly maker: FieldRef<"Fills", 'String'>
    readonly taker: FieldRef<"Fills", 'String'>
    readonly marketId: FieldRef<"Fills", 'String'>
    readonly price: FieldRef<"Fills", 'String'>
    readonly qty: FieldRef<"Fills", 'String'>
    readonly makerOrderId: FieldRef<"Fills", 'String'>
    readonly takerOrderId: FieldRef<"Fills", 'String'>
    readonly createdAt: FieldRef<"Fills", 'DateTime'>
    readonly updatedAt: FieldRef<"Fills", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Fills findUnique
   */
  export type FillsFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Fills
     */
    select?: FillsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Fills
     */
    omit?: FillsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FillsInclude<ExtArgs> | null
    /**
     * Filter, which Fills to fetch.
     */
    where: FillsWhereUniqueInput
  }

  /**
   * Fills findUniqueOrThrow
   */
  export type FillsFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Fills
     */
    select?: FillsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Fills
     */
    omit?: FillsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FillsInclude<ExtArgs> | null
    /**
     * Filter, which Fills to fetch.
     */
    where: FillsWhereUniqueInput
  }

  /**
   * Fills findFirst
   */
  export type FillsFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Fills
     */
    select?: FillsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Fills
     */
    omit?: FillsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FillsInclude<ExtArgs> | null
    /**
     * Filter, which Fills to fetch.
     */
    where?: FillsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Fills to fetch.
     */
    orderBy?: FillsOrderByWithRelationInput | FillsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Fills.
     */
    cursor?: FillsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Fills from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Fills.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Fills.
     */
    distinct?: FillsScalarFieldEnum | FillsScalarFieldEnum[]
  }

  /**
   * Fills findFirstOrThrow
   */
  export type FillsFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Fills
     */
    select?: FillsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Fills
     */
    omit?: FillsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FillsInclude<ExtArgs> | null
    /**
     * Filter, which Fills to fetch.
     */
    where?: FillsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Fills to fetch.
     */
    orderBy?: FillsOrderByWithRelationInput | FillsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Fills.
     */
    cursor?: FillsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Fills from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Fills.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Fills.
     */
    distinct?: FillsScalarFieldEnum | FillsScalarFieldEnum[]
  }

  /**
   * Fills findMany
   */
  export type FillsFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Fills
     */
    select?: FillsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Fills
     */
    omit?: FillsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FillsInclude<ExtArgs> | null
    /**
     * Filter, which Fills to fetch.
     */
    where?: FillsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Fills to fetch.
     */
    orderBy?: FillsOrderByWithRelationInput | FillsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Fills.
     */
    cursor?: FillsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Fills from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Fills.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Fills.
     */
    distinct?: FillsScalarFieldEnum | FillsScalarFieldEnum[]
  }

  /**
   * Fills create
   */
  export type FillsCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Fills
     */
    select?: FillsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Fills
     */
    omit?: FillsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FillsInclude<ExtArgs> | null
    /**
     * The data needed to create a Fills.
     */
    data: XOR<FillsCreateInput, FillsUncheckedCreateInput>
  }

  /**
   * Fills createMany
   */
  export type FillsCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Fills.
     */
    data: FillsCreateManyInput | FillsCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Fills createManyAndReturn
   */
  export type FillsCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Fills
     */
    select?: FillsSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Fills
     */
    omit?: FillsOmit<ExtArgs> | null
    /**
     * The data used to create many Fills.
     */
    data: FillsCreateManyInput | FillsCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FillsIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Fills update
   */
  export type FillsUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Fills
     */
    select?: FillsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Fills
     */
    omit?: FillsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FillsInclude<ExtArgs> | null
    /**
     * The data needed to update a Fills.
     */
    data: XOR<FillsUpdateInput, FillsUncheckedUpdateInput>
    /**
     * Choose, which Fills to update.
     */
    where: FillsWhereUniqueInput
  }

  /**
   * Fills updateMany
   */
  export type FillsUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Fills.
     */
    data: XOR<FillsUpdateManyMutationInput, FillsUncheckedUpdateManyInput>
    /**
     * Filter which Fills to update
     */
    where?: FillsWhereInput
    /**
     * Limit how many Fills to update.
     */
    limit?: number
  }

  /**
   * Fills updateManyAndReturn
   */
  export type FillsUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Fills
     */
    select?: FillsSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Fills
     */
    omit?: FillsOmit<ExtArgs> | null
    /**
     * The data used to update Fills.
     */
    data: XOR<FillsUpdateManyMutationInput, FillsUncheckedUpdateManyInput>
    /**
     * Filter which Fills to update
     */
    where?: FillsWhereInput
    /**
     * Limit how many Fills to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FillsIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Fills upsert
   */
  export type FillsUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Fills
     */
    select?: FillsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Fills
     */
    omit?: FillsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FillsInclude<ExtArgs> | null
    /**
     * The filter to search for the Fills to update in case it exists.
     */
    where: FillsWhereUniqueInput
    /**
     * In case the Fills found by the `where` argument doesn't exist, create a new Fills with this data.
     */
    create: XOR<FillsCreateInput, FillsUncheckedCreateInput>
    /**
     * In case the Fills was found with the provided `where` argument, update it with this data.
     */
    update: XOR<FillsUpdateInput, FillsUncheckedUpdateInput>
  }

  /**
   * Fills delete
   */
  export type FillsDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Fills
     */
    select?: FillsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Fills
     */
    omit?: FillsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FillsInclude<ExtArgs> | null
    /**
     * Filter which Fills to delete.
     */
    where: FillsWhereUniqueInput
  }

  /**
   * Fills deleteMany
   */
  export type FillsDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Fills to delete
     */
    where?: FillsWhereInput
    /**
     * Limit how many Fills to delete.
     */
    limit?: number
  }

  /**
   * Fills without action
   */
  export type FillsDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Fills
     */
    select?: FillsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Fills
     */
    omit?: FillsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FillsInclude<ExtArgs> | null
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
    username: 'username',
    password: 'password'
  };

  export type UserScalarFieldEnum = (typeof UserScalarFieldEnum)[keyof typeof UserScalarFieldEnum]


  export const OrdersScalarFieldEnum: {
    id: 'id',
    userID: 'userID',
    type: 'type',
    orderType: 'orderType',
    marketId: 'marketId',
    price: 'price',
    equity: 'equity',
    slippage: 'slippage',
    qty: 'qty',
    status: 'status',
    initialMargin: 'initialMargin',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type OrdersScalarFieldEnum = (typeof OrdersScalarFieldEnum)[keyof typeof OrdersScalarFieldEnum]


  export const MarketsScalarFieldEnum: {
    id: 'id',
    marketSlug: 'marketSlug',
    imageUrl: 'imageUrl'
  };

  export type MarketsScalarFieldEnum = (typeof MarketsScalarFieldEnum)[keyof typeof MarketsScalarFieldEnum]


  export const FillsScalarFieldEnum: {
    id: 'id',
    maker: 'maker',
    taker: 'taker',
    marketId: 'marketId',
    price: 'price',
    qty: 'qty',
    makerOrderId: 'makerOrderId',
    takerOrderId: 'takerOrderId',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type FillsScalarFieldEnum = (typeof FillsScalarFieldEnum)[keyof typeof FillsScalarFieldEnum]


  export const SortOrder: {
    asc: 'asc',
    desc: 'desc'
  };

  export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder]


  export const QueryMode: {
    default: 'default',
    insensitive: 'insensitive'
  };

  export type QueryMode = (typeof QueryMode)[keyof typeof QueryMode]


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
   * Reference to a field of type 'Type'
   */
  export type EnumTypeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Type'>
    


  /**
   * Reference to a field of type 'Type[]'
   */
  export type ListEnumTypeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Type[]'>
    


  /**
   * Reference to a field of type 'OrderType'
   */
  export type EnumOrderTypeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'OrderType'>
    


  /**
   * Reference to a field of type 'OrderType[]'
   */
  export type ListEnumOrderTypeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'OrderType[]'>
    


  /**
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>
    


  /**
   * Reference to a field of type 'Int[]'
   */
  export type ListIntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int[]'>
    


  /**
   * Reference to a field of type 'Status'
   */
  export type EnumStatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Status'>
    


  /**
   * Reference to a field of type 'Status[]'
   */
  export type ListEnumStatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Status[]'>
    


  /**
   * Reference to a field of type 'DateTime'
   */
  export type DateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime'>
    


  /**
   * Reference to a field of type 'DateTime[]'
   */
  export type ListDateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime[]'>
    


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
    id?: StringFilter<"User"> | string
    username?: StringFilter<"User"> | string
    password?: StringFilter<"User"> | string
    orders?: OrdersListRelationFilter
    makerFills?: FillsListRelationFilter
    takerFills?: FillsListRelationFilter
  }

  export type UserOrderByWithRelationInput = {
    id?: SortOrder
    username?: SortOrder
    password?: SortOrder
    orders?: OrdersOrderByRelationAggregateInput
    makerFills?: FillsOrderByRelationAggregateInput
    takerFills?: FillsOrderByRelationAggregateInput
  }

  export type UserWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    username?: string
    AND?: UserWhereInput | UserWhereInput[]
    OR?: UserWhereInput[]
    NOT?: UserWhereInput | UserWhereInput[]
    password?: StringFilter<"User"> | string
    orders?: OrdersListRelationFilter
    makerFills?: FillsListRelationFilter
    takerFills?: FillsListRelationFilter
  }, "id" | "username">

  export type UserOrderByWithAggregationInput = {
    id?: SortOrder
    username?: SortOrder
    password?: SortOrder
    _count?: UserCountOrderByAggregateInput
    _max?: UserMaxOrderByAggregateInput
    _min?: UserMinOrderByAggregateInput
  }

  export type UserScalarWhereWithAggregatesInput = {
    AND?: UserScalarWhereWithAggregatesInput | UserScalarWhereWithAggregatesInput[]
    OR?: UserScalarWhereWithAggregatesInput[]
    NOT?: UserScalarWhereWithAggregatesInput | UserScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"User"> | string
    username?: StringWithAggregatesFilter<"User"> | string
    password?: StringWithAggregatesFilter<"User"> | string
  }

  export type OrdersWhereInput = {
    AND?: OrdersWhereInput | OrdersWhereInput[]
    OR?: OrdersWhereInput[]
    NOT?: OrdersWhereInput | OrdersWhereInput[]
    id?: StringFilter<"Orders"> | string
    userID?: StringFilter<"Orders"> | string
    type?: EnumTypeFilter<"Orders"> | $Enums.Type
    orderType?: EnumOrderTypeFilter<"Orders"> | $Enums.OrderType
    marketId?: StringFilter<"Orders"> | string
    price?: StringFilter<"Orders"> | string
    equity?: StringFilter<"Orders"> | string
    slippage?: IntFilter<"Orders"> | number
    qty?: StringFilter<"Orders"> | string
    status?: EnumStatusFilter<"Orders"> | $Enums.Status
    initialMargin?: StringFilter<"Orders"> | string
    createdAt?: DateTimeFilter<"Orders"> | Date | string
    updatedAt?: DateTimeFilter<"Orders"> | Date | string
    author?: XOR<UserScalarRelationFilter, UserWhereInput>
    market?: XOR<MarketsScalarRelationFilter, MarketsWhereInput>
    makerFills?: FillsListRelationFilter
    takerFills?: FillsListRelationFilter
  }

  export type OrdersOrderByWithRelationInput = {
    id?: SortOrder
    userID?: SortOrder
    type?: SortOrder
    orderType?: SortOrder
    marketId?: SortOrder
    price?: SortOrder
    equity?: SortOrder
    slippage?: SortOrder
    qty?: SortOrder
    status?: SortOrder
    initialMargin?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    author?: UserOrderByWithRelationInput
    market?: MarketsOrderByWithRelationInput
    makerFills?: FillsOrderByRelationAggregateInput
    takerFills?: FillsOrderByRelationAggregateInput
  }

  export type OrdersWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: OrdersWhereInput | OrdersWhereInput[]
    OR?: OrdersWhereInput[]
    NOT?: OrdersWhereInput | OrdersWhereInput[]
    userID?: StringFilter<"Orders"> | string
    type?: EnumTypeFilter<"Orders"> | $Enums.Type
    orderType?: EnumOrderTypeFilter<"Orders"> | $Enums.OrderType
    marketId?: StringFilter<"Orders"> | string
    price?: StringFilter<"Orders"> | string
    equity?: StringFilter<"Orders"> | string
    slippage?: IntFilter<"Orders"> | number
    qty?: StringFilter<"Orders"> | string
    status?: EnumStatusFilter<"Orders"> | $Enums.Status
    initialMargin?: StringFilter<"Orders"> | string
    createdAt?: DateTimeFilter<"Orders"> | Date | string
    updatedAt?: DateTimeFilter<"Orders"> | Date | string
    author?: XOR<UserScalarRelationFilter, UserWhereInput>
    market?: XOR<MarketsScalarRelationFilter, MarketsWhereInput>
    makerFills?: FillsListRelationFilter
    takerFills?: FillsListRelationFilter
  }, "id">

  export type OrdersOrderByWithAggregationInput = {
    id?: SortOrder
    userID?: SortOrder
    type?: SortOrder
    orderType?: SortOrder
    marketId?: SortOrder
    price?: SortOrder
    equity?: SortOrder
    slippage?: SortOrder
    qty?: SortOrder
    status?: SortOrder
    initialMargin?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: OrdersCountOrderByAggregateInput
    _avg?: OrdersAvgOrderByAggregateInput
    _max?: OrdersMaxOrderByAggregateInput
    _min?: OrdersMinOrderByAggregateInput
    _sum?: OrdersSumOrderByAggregateInput
  }

  export type OrdersScalarWhereWithAggregatesInput = {
    AND?: OrdersScalarWhereWithAggregatesInput | OrdersScalarWhereWithAggregatesInput[]
    OR?: OrdersScalarWhereWithAggregatesInput[]
    NOT?: OrdersScalarWhereWithAggregatesInput | OrdersScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Orders"> | string
    userID?: StringWithAggregatesFilter<"Orders"> | string
    type?: EnumTypeWithAggregatesFilter<"Orders"> | $Enums.Type
    orderType?: EnumOrderTypeWithAggregatesFilter<"Orders"> | $Enums.OrderType
    marketId?: StringWithAggregatesFilter<"Orders"> | string
    price?: StringWithAggregatesFilter<"Orders"> | string
    equity?: StringWithAggregatesFilter<"Orders"> | string
    slippage?: IntWithAggregatesFilter<"Orders"> | number
    qty?: StringWithAggregatesFilter<"Orders"> | string
    status?: EnumStatusWithAggregatesFilter<"Orders"> | $Enums.Status
    initialMargin?: StringWithAggregatesFilter<"Orders"> | string
    createdAt?: DateTimeWithAggregatesFilter<"Orders"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Orders"> | Date | string
  }

  export type MarketsWhereInput = {
    AND?: MarketsWhereInput | MarketsWhereInput[]
    OR?: MarketsWhereInput[]
    NOT?: MarketsWhereInput | MarketsWhereInput[]
    id?: StringFilter<"Markets"> | string
    marketSlug?: StringFilter<"Markets"> | string
    imageUrl?: StringFilter<"Markets"> | string
    orders?: OrdersListRelationFilter
    fills?: FillsListRelationFilter
  }

  export type MarketsOrderByWithRelationInput = {
    id?: SortOrder
    marketSlug?: SortOrder
    imageUrl?: SortOrder
    orders?: OrdersOrderByRelationAggregateInput
    fills?: FillsOrderByRelationAggregateInput
  }

  export type MarketsWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    marketSlug?: string
    AND?: MarketsWhereInput | MarketsWhereInput[]
    OR?: MarketsWhereInput[]
    NOT?: MarketsWhereInput | MarketsWhereInput[]
    imageUrl?: StringFilter<"Markets"> | string
    orders?: OrdersListRelationFilter
    fills?: FillsListRelationFilter
  }, "id" | "marketSlug">

  export type MarketsOrderByWithAggregationInput = {
    id?: SortOrder
    marketSlug?: SortOrder
    imageUrl?: SortOrder
    _count?: MarketsCountOrderByAggregateInput
    _max?: MarketsMaxOrderByAggregateInput
    _min?: MarketsMinOrderByAggregateInput
  }

  export type MarketsScalarWhereWithAggregatesInput = {
    AND?: MarketsScalarWhereWithAggregatesInput | MarketsScalarWhereWithAggregatesInput[]
    OR?: MarketsScalarWhereWithAggregatesInput[]
    NOT?: MarketsScalarWhereWithAggregatesInput | MarketsScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Markets"> | string
    marketSlug?: StringWithAggregatesFilter<"Markets"> | string
    imageUrl?: StringWithAggregatesFilter<"Markets"> | string
  }

  export type FillsWhereInput = {
    AND?: FillsWhereInput | FillsWhereInput[]
    OR?: FillsWhereInput[]
    NOT?: FillsWhereInput | FillsWhereInput[]
    id?: StringFilter<"Fills"> | string
    maker?: StringFilter<"Fills"> | string
    taker?: StringFilter<"Fills"> | string
    marketId?: StringFilter<"Fills"> | string
    price?: StringFilter<"Fills"> | string
    qty?: StringFilter<"Fills"> | string
    makerOrderId?: StringFilter<"Fills"> | string
    takerOrderId?: StringFilter<"Fills"> | string
    createdAt?: DateTimeFilter<"Fills"> | Date | string
    updatedAt?: DateTimeFilter<"Fills"> | Date | string
    makerUser?: XOR<UserScalarRelationFilter, UserWhereInput>
    takerUser?: XOR<UserScalarRelationFilter, UserWhereInput>
    market?: XOR<MarketsScalarRelationFilter, MarketsWhereInput>
    makerOrder?: XOR<OrdersScalarRelationFilter, OrdersWhereInput>
    takerOrder?: XOR<OrdersScalarRelationFilter, OrdersWhereInput>
  }

  export type FillsOrderByWithRelationInput = {
    id?: SortOrder
    maker?: SortOrder
    taker?: SortOrder
    marketId?: SortOrder
    price?: SortOrder
    qty?: SortOrder
    makerOrderId?: SortOrder
    takerOrderId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    makerUser?: UserOrderByWithRelationInput
    takerUser?: UserOrderByWithRelationInput
    market?: MarketsOrderByWithRelationInput
    makerOrder?: OrdersOrderByWithRelationInput
    takerOrder?: OrdersOrderByWithRelationInput
  }

  export type FillsWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: FillsWhereInput | FillsWhereInput[]
    OR?: FillsWhereInput[]
    NOT?: FillsWhereInput | FillsWhereInput[]
    maker?: StringFilter<"Fills"> | string
    taker?: StringFilter<"Fills"> | string
    marketId?: StringFilter<"Fills"> | string
    price?: StringFilter<"Fills"> | string
    qty?: StringFilter<"Fills"> | string
    makerOrderId?: StringFilter<"Fills"> | string
    takerOrderId?: StringFilter<"Fills"> | string
    createdAt?: DateTimeFilter<"Fills"> | Date | string
    updatedAt?: DateTimeFilter<"Fills"> | Date | string
    makerUser?: XOR<UserScalarRelationFilter, UserWhereInput>
    takerUser?: XOR<UserScalarRelationFilter, UserWhereInput>
    market?: XOR<MarketsScalarRelationFilter, MarketsWhereInput>
    makerOrder?: XOR<OrdersScalarRelationFilter, OrdersWhereInput>
    takerOrder?: XOR<OrdersScalarRelationFilter, OrdersWhereInput>
  }, "id">

  export type FillsOrderByWithAggregationInput = {
    id?: SortOrder
    maker?: SortOrder
    taker?: SortOrder
    marketId?: SortOrder
    price?: SortOrder
    qty?: SortOrder
    makerOrderId?: SortOrder
    takerOrderId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: FillsCountOrderByAggregateInput
    _max?: FillsMaxOrderByAggregateInput
    _min?: FillsMinOrderByAggregateInput
  }

  export type FillsScalarWhereWithAggregatesInput = {
    AND?: FillsScalarWhereWithAggregatesInput | FillsScalarWhereWithAggregatesInput[]
    OR?: FillsScalarWhereWithAggregatesInput[]
    NOT?: FillsScalarWhereWithAggregatesInput | FillsScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Fills"> | string
    maker?: StringWithAggregatesFilter<"Fills"> | string
    taker?: StringWithAggregatesFilter<"Fills"> | string
    marketId?: StringWithAggregatesFilter<"Fills"> | string
    price?: StringWithAggregatesFilter<"Fills"> | string
    qty?: StringWithAggregatesFilter<"Fills"> | string
    makerOrderId?: StringWithAggregatesFilter<"Fills"> | string
    takerOrderId?: StringWithAggregatesFilter<"Fills"> | string
    createdAt?: DateTimeWithAggregatesFilter<"Fills"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Fills"> | Date | string
  }

  export type UserCreateInput = {
    id?: string
    username: string
    password: string
    orders?: OrdersCreateNestedManyWithoutAuthorInput
    makerFills?: FillsCreateNestedManyWithoutMakerUserInput
    takerFills?: FillsCreateNestedManyWithoutTakerUserInput
  }

  export type UserUncheckedCreateInput = {
    id?: string
    username: string
    password: string
    orders?: OrdersUncheckedCreateNestedManyWithoutAuthorInput
    makerFills?: FillsUncheckedCreateNestedManyWithoutMakerUserInput
    takerFills?: FillsUncheckedCreateNestedManyWithoutTakerUserInput
  }

  export type UserUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    orders?: OrdersUpdateManyWithoutAuthorNestedInput
    makerFills?: FillsUpdateManyWithoutMakerUserNestedInput
    takerFills?: FillsUpdateManyWithoutTakerUserNestedInput
  }

  export type UserUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    orders?: OrdersUncheckedUpdateManyWithoutAuthorNestedInput
    makerFills?: FillsUncheckedUpdateManyWithoutMakerUserNestedInput
    takerFills?: FillsUncheckedUpdateManyWithoutTakerUserNestedInput
  }

  export type UserCreateManyInput = {
    id?: string
    username: string
    password: string
  }

  export type UserUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
  }

  export type UserUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
  }

  export type OrdersCreateInput = {
    id?: string
    type: $Enums.Type
    orderType: $Enums.OrderType
    price: string
    equity: string
    slippage: number
    qty: string
    status: $Enums.Status
    initialMargin: string
    createdAt?: Date | string
    updatedAt?: Date | string
    author: UserCreateNestedOneWithoutOrdersInput
    market: MarketsCreateNestedOneWithoutOrdersInput
    makerFills?: FillsCreateNestedManyWithoutMakerOrderInput
    takerFills?: FillsCreateNestedManyWithoutTakerOrderInput
  }

  export type OrdersUncheckedCreateInput = {
    id?: string
    userID: string
    type: $Enums.Type
    orderType: $Enums.OrderType
    marketId: string
    price: string
    equity: string
    slippage: number
    qty: string
    status: $Enums.Status
    initialMargin: string
    createdAt?: Date | string
    updatedAt?: Date | string
    makerFills?: FillsUncheckedCreateNestedManyWithoutMakerOrderInput
    takerFills?: FillsUncheckedCreateNestedManyWithoutTakerOrderInput
  }

  export type OrdersUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    type?: EnumTypeFieldUpdateOperationsInput | $Enums.Type
    orderType?: EnumOrderTypeFieldUpdateOperationsInput | $Enums.OrderType
    price?: StringFieldUpdateOperationsInput | string
    equity?: StringFieldUpdateOperationsInput | string
    slippage?: IntFieldUpdateOperationsInput | number
    qty?: StringFieldUpdateOperationsInput | string
    status?: EnumStatusFieldUpdateOperationsInput | $Enums.Status
    initialMargin?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    author?: UserUpdateOneRequiredWithoutOrdersNestedInput
    market?: MarketsUpdateOneRequiredWithoutOrdersNestedInput
    makerFills?: FillsUpdateManyWithoutMakerOrderNestedInput
    takerFills?: FillsUpdateManyWithoutTakerOrderNestedInput
  }

  export type OrdersUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    userID?: StringFieldUpdateOperationsInput | string
    type?: EnumTypeFieldUpdateOperationsInput | $Enums.Type
    orderType?: EnumOrderTypeFieldUpdateOperationsInput | $Enums.OrderType
    marketId?: StringFieldUpdateOperationsInput | string
    price?: StringFieldUpdateOperationsInput | string
    equity?: StringFieldUpdateOperationsInput | string
    slippage?: IntFieldUpdateOperationsInput | number
    qty?: StringFieldUpdateOperationsInput | string
    status?: EnumStatusFieldUpdateOperationsInput | $Enums.Status
    initialMargin?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    makerFills?: FillsUncheckedUpdateManyWithoutMakerOrderNestedInput
    takerFills?: FillsUncheckedUpdateManyWithoutTakerOrderNestedInput
  }

  export type OrdersCreateManyInput = {
    id?: string
    userID: string
    type: $Enums.Type
    orderType: $Enums.OrderType
    marketId: string
    price: string
    equity: string
    slippage: number
    qty: string
    status: $Enums.Status
    initialMargin: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type OrdersUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    type?: EnumTypeFieldUpdateOperationsInput | $Enums.Type
    orderType?: EnumOrderTypeFieldUpdateOperationsInput | $Enums.OrderType
    price?: StringFieldUpdateOperationsInput | string
    equity?: StringFieldUpdateOperationsInput | string
    slippage?: IntFieldUpdateOperationsInput | number
    qty?: StringFieldUpdateOperationsInput | string
    status?: EnumStatusFieldUpdateOperationsInput | $Enums.Status
    initialMargin?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type OrdersUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    userID?: StringFieldUpdateOperationsInput | string
    type?: EnumTypeFieldUpdateOperationsInput | $Enums.Type
    orderType?: EnumOrderTypeFieldUpdateOperationsInput | $Enums.OrderType
    marketId?: StringFieldUpdateOperationsInput | string
    price?: StringFieldUpdateOperationsInput | string
    equity?: StringFieldUpdateOperationsInput | string
    slippage?: IntFieldUpdateOperationsInput | number
    qty?: StringFieldUpdateOperationsInput | string
    status?: EnumStatusFieldUpdateOperationsInput | $Enums.Status
    initialMargin?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type MarketsCreateInput = {
    id?: string
    marketSlug: string
    imageUrl: string
    orders?: OrdersCreateNestedManyWithoutMarketInput
    fills?: FillsCreateNestedManyWithoutMarketInput
  }

  export type MarketsUncheckedCreateInput = {
    id?: string
    marketSlug: string
    imageUrl: string
    orders?: OrdersUncheckedCreateNestedManyWithoutMarketInput
    fills?: FillsUncheckedCreateNestedManyWithoutMarketInput
  }

  export type MarketsUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    marketSlug?: StringFieldUpdateOperationsInput | string
    imageUrl?: StringFieldUpdateOperationsInput | string
    orders?: OrdersUpdateManyWithoutMarketNestedInput
    fills?: FillsUpdateManyWithoutMarketNestedInput
  }

  export type MarketsUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    marketSlug?: StringFieldUpdateOperationsInput | string
    imageUrl?: StringFieldUpdateOperationsInput | string
    orders?: OrdersUncheckedUpdateManyWithoutMarketNestedInput
    fills?: FillsUncheckedUpdateManyWithoutMarketNestedInput
  }

  export type MarketsCreateManyInput = {
    id?: string
    marketSlug: string
    imageUrl: string
  }

  export type MarketsUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    marketSlug?: StringFieldUpdateOperationsInput | string
    imageUrl?: StringFieldUpdateOperationsInput | string
  }

  export type MarketsUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    marketSlug?: StringFieldUpdateOperationsInput | string
    imageUrl?: StringFieldUpdateOperationsInput | string
  }

  export type FillsCreateInput = {
    id?: string
    price: string
    qty: string
    createdAt?: Date | string
    updatedAt?: Date | string
    makerUser: UserCreateNestedOneWithoutMakerFillsInput
    takerUser: UserCreateNestedOneWithoutTakerFillsInput
    market: MarketsCreateNestedOneWithoutFillsInput
    makerOrder: OrdersCreateNestedOneWithoutMakerFillsInput
    takerOrder: OrdersCreateNestedOneWithoutTakerFillsInput
  }

  export type FillsUncheckedCreateInput = {
    id?: string
    maker: string
    taker: string
    marketId: string
    price: string
    qty: string
    makerOrderId: string
    takerOrderId: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type FillsUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    price?: StringFieldUpdateOperationsInput | string
    qty?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    makerUser?: UserUpdateOneRequiredWithoutMakerFillsNestedInput
    takerUser?: UserUpdateOneRequiredWithoutTakerFillsNestedInput
    market?: MarketsUpdateOneRequiredWithoutFillsNestedInput
    makerOrder?: OrdersUpdateOneRequiredWithoutMakerFillsNestedInput
    takerOrder?: OrdersUpdateOneRequiredWithoutTakerFillsNestedInput
  }

  export type FillsUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    maker?: StringFieldUpdateOperationsInput | string
    taker?: StringFieldUpdateOperationsInput | string
    marketId?: StringFieldUpdateOperationsInput | string
    price?: StringFieldUpdateOperationsInput | string
    qty?: StringFieldUpdateOperationsInput | string
    makerOrderId?: StringFieldUpdateOperationsInput | string
    takerOrderId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type FillsCreateManyInput = {
    id?: string
    maker: string
    taker: string
    marketId: string
    price: string
    qty: string
    makerOrderId: string
    takerOrderId: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type FillsUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    price?: StringFieldUpdateOperationsInput | string
    qty?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type FillsUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    maker?: StringFieldUpdateOperationsInput | string
    taker?: StringFieldUpdateOperationsInput | string
    marketId?: StringFieldUpdateOperationsInput | string
    price?: StringFieldUpdateOperationsInput | string
    qty?: StringFieldUpdateOperationsInput | string
    makerOrderId?: StringFieldUpdateOperationsInput | string
    takerOrderId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
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

  export type OrdersListRelationFilter = {
    every?: OrdersWhereInput
    some?: OrdersWhereInput
    none?: OrdersWhereInput
  }

  export type FillsListRelationFilter = {
    every?: FillsWhereInput
    some?: FillsWhereInput
    none?: FillsWhereInput
  }

  export type OrdersOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type FillsOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type UserCountOrderByAggregateInput = {
    id?: SortOrder
    username?: SortOrder
    password?: SortOrder
  }

  export type UserMaxOrderByAggregateInput = {
    id?: SortOrder
    username?: SortOrder
    password?: SortOrder
  }

  export type UserMinOrderByAggregateInput = {
    id?: SortOrder
    username?: SortOrder
    password?: SortOrder
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

  export type EnumTypeFilter<$PrismaModel = never> = {
    equals?: $Enums.Type | EnumTypeFieldRefInput<$PrismaModel>
    in?: $Enums.Type[] | ListEnumTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.Type[] | ListEnumTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumTypeFilter<$PrismaModel> | $Enums.Type
  }

  export type EnumOrderTypeFilter<$PrismaModel = never> = {
    equals?: $Enums.OrderType | EnumOrderTypeFieldRefInput<$PrismaModel>
    in?: $Enums.OrderType[] | ListEnumOrderTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.OrderType[] | ListEnumOrderTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumOrderTypeFilter<$PrismaModel> | $Enums.OrderType
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

  export type EnumStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.Status | EnumStatusFieldRefInput<$PrismaModel>
    in?: $Enums.Status[] | ListEnumStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.Status[] | ListEnumStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumStatusFilter<$PrismaModel> | $Enums.Status
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

  export type UserScalarRelationFilter = {
    is?: UserWhereInput
    isNot?: UserWhereInput
  }

  export type MarketsScalarRelationFilter = {
    is?: MarketsWhereInput
    isNot?: MarketsWhereInput
  }

  export type OrdersCountOrderByAggregateInput = {
    id?: SortOrder
    userID?: SortOrder
    type?: SortOrder
    orderType?: SortOrder
    marketId?: SortOrder
    price?: SortOrder
    equity?: SortOrder
    slippage?: SortOrder
    qty?: SortOrder
    status?: SortOrder
    initialMargin?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type OrdersAvgOrderByAggregateInput = {
    slippage?: SortOrder
  }

  export type OrdersMaxOrderByAggregateInput = {
    id?: SortOrder
    userID?: SortOrder
    type?: SortOrder
    orderType?: SortOrder
    marketId?: SortOrder
    price?: SortOrder
    equity?: SortOrder
    slippage?: SortOrder
    qty?: SortOrder
    status?: SortOrder
    initialMargin?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type OrdersMinOrderByAggregateInput = {
    id?: SortOrder
    userID?: SortOrder
    type?: SortOrder
    orderType?: SortOrder
    marketId?: SortOrder
    price?: SortOrder
    equity?: SortOrder
    slippage?: SortOrder
    qty?: SortOrder
    status?: SortOrder
    initialMargin?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type OrdersSumOrderByAggregateInput = {
    slippage?: SortOrder
  }

  export type EnumTypeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.Type | EnumTypeFieldRefInput<$PrismaModel>
    in?: $Enums.Type[] | ListEnumTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.Type[] | ListEnumTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumTypeWithAggregatesFilter<$PrismaModel> | $Enums.Type
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumTypeFilter<$PrismaModel>
    _max?: NestedEnumTypeFilter<$PrismaModel>
  }

  export type EnumOrderTypeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.OrderType | EnumOrderTypeFieldRefInput<$PrismaModel>
    in?: $Enums.OrderType[] | ListEnumOrderTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.OrderType[] | ListEnumOrderTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumOrderTypeWithAggregatesFilter<$PrismaModel> | $Enums.OrderType
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumOrderTypeFilter<$PrismaModel>
    _max?: NestedEnumOrderTypeFilter<$PrismaModel>
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

  export type EnumStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.Status | EnumStatusFieldRefInput<$PrismaModel>
    in?: $Enums.Status[] | ListEnumStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.Status[] | ListEnumStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumStatusWithAggregatesFilter<$PrismaModel> | $Enums.Status
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumStatusFilter<$PrismaModel>
    _max?: NestedEnumStatusFilter<$PrismaModel>
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

  export type MarketsCountOrderByAggregateInput = {
    id?: SortOrder
    marketSlug?: SortOrder
    imageUrl?: SortOrder
  }

  export type MarketsMaxOrderByAggregateInput = {
    id?: SortOrder
    marketSlug?: SortOrder
    imageUrl?: SortOrder
  }

  export type MarketsMinOrderByAggregateInput = {
    id?: SortOrder
    marketSlug?: SortOrder
    imageUrl?: SortOrder
  }

  export type OrdersScalarRelationFilter = {
    is?: OrdersWhereInput
    isNot?: OrdersWhereInput
  }

  export type FillsCountOrderByAggregateInput = {
    id?: SortOrder
    maker?: SortOrder
    taker?: SortOrder
    marketId?: SortOrder
    price?: SortOrder
    qty?: SortOrder
    makerOrderId?: SortOrder
    takerOrderId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type FillsMaxOrderByAggregateInput = {
    id?: SortOrder
    maker?: SortOrder
    taker?: SortOrder
    marketId?: SortOrder
    price?: SortOrder
    qty?: SortOrder
    makerOrderId?: SortOrder
    takerOrderId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type FillsMinOrderByAggregateInput = {
    id?: SortOrder
    maker?: SortOrder
    taker?: SortOrder
    marketId?: SortOrder
    price?: SortOrder
    qty?: SortOrder
    makerOrderId?: SortOrder
    takerOrderId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type OrdersCreateNestedManyWithoutAuthorInput = {
    create?: XOR<OrdersCreateWithoutAuthorInput, OrdersUncheckedCreateWithoutAuthorInput> | OrdersCreateWithoutAuthorInput[] | OrdersUncheckedCreateWithoutAuthorInput[]
    connectOrCreate?: OrdersCreateOrConnectWithoutAuthorInput | OrdersCreateOrConnectWithoutAuthorInput[]
    createMany?: OrdersCreateManyAuthorInputEnvelope
    connect?: OrdersWhereUniqueInput | OrdersWhereUniqueInput[]
  }

  export type FillsCreateNestedManyWithoutMakerUserInput = {
    create?: XOR<FillsCreateWithoutMakerUserInput, FillsUncheckedCreateWithoutMakerUserInput> | FillsCreateWithoutMakerUserInput[] | FillsUncheckedCreateWithoutMakerUserInput[]
    connectOrCreate?: FillsCreateOrConnectWithoutMakerUserInput | FillsCreateOrConnectWithoutMakerUserInput[]
    createMany?: FillsCreateManyMakerUserInputEnvelope
    connect?: FillsWhereUniqueInput | FillsWhereUniqueInput[]
  }

  export type FillsCreateNestedManyWithoutTakerUserInput = {
    create?: XOR<FillsCreateWithoutTakerUserInput, FillsUncheckedCreateWithoutTakerUserInput> | FillsCreateWithoutTakerUserInput[] | FillsUncheckedCreateWithoutTakerUserInput[]
    connectOrCreate?: FillsCreateOrConnectWithoutTakerUserInput | FillsCreateOrConnectWithoutTakerUserInput[]
    createMany?: FillsCreateManyTakerUserInputEnvelope
    connect?: FillsWhereUniqueInput | FillsWhereUniqueInput[]
  }

  export type OrdersUncheckedCreateNestedManyWithoutAuthorInput = {
    create?: XOR<OrdersCreateWithoutAuthorInput, OrdersUncheckedCreateWithoutAuthorInput> | OrdersCreateWithoutAuthorInput[] | OrdersUncheckedCreateWithoutAuthorInput[]
    connectOrCreate?: OrdersCreateOrConnectWithoutAuthorInput | OrdersCreateOrConnectWithoutAuthorInput[]
    createMany?: OrdersCreateManyAuthorInputEnvelope
    connect?: OrdersWhereUniqueInput | OrdersWhereUniqueInput[]
  }

  export type FillsUncheckedCreateNestedManyWithoutMakerUserInput = {
    create?: XOR<FillsCreateWithoutMakerUserInput, FillsUncheckedCreateWithoutMakerUserInput> | FillsCreateWithoutMakerUserInput[] | FillsUncheckedCreateWithoutMakerUserInput[]
    connectOrCreate?: FillsCreateOrConnectWithoutMakerUserInput | FillsCreateOrConnectWithoutMakerUserInput[]
    createMany?: FillsCreateManyMakerUserInputEnvelope
    connect?: FillsWhereUniqueInput | FillsWhereUniqueInput[]
  }

  export type FillsUncheckedCreateNestedManyWithoutTakerUserInput = {
    create?: XOR<FillsCreateWithoutTakerUserInput, FillsUncheckedCreateWithoutTakerUserInput> | FillsCreateWithoutTakerUserInput[] | FillsUncheckedCreateWithoutTakerUserInput[]
    connectOrCreate?: FillsCreateOrConnectWithoutTakerUserInput | FillsCreateOrConnectWithoutTakerUserInput[]
    createMany?: FillsCreateManyTakerUserInputEnvelope
    connect?: FillsWhereUniqueInput | FillsWhereUniqueInput[]
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type OrdersUpdateManyWithoutAuthorNestedInput = {
    create?: XOR<OrdersCreateWithoutAuthorInput, OrdersUncheckedCreateWithoutAuthorInput> | OrdersCreateWithoutAuthorInput[] | OrdersUncheckedCreateWithoutAuthorInput[]
    connectOrCreate?: OrdersCreateOrConnectWithoutAuthorInput | OrdersCreateOrConnectWithoutAuthorInput[]
    upsert?: OrdersUpsertWithWhereUniqueWithoutAuthorInput | OrdersUpsertWithWhereUniqueWithoutAuthorInput[]
    createMany?: OrdersCreateManyAuthorInputEnvelope
    set?: OrdersWhereUniqueInput | OrdersWhereUniqueInput[]
    disconnect?: OrdersWhereUniqueInput | OrdersWhereUniqueInput[]
    delete?: OrdersWhereUniqueInput | OrdersWhereUniqueInput[]
    connect?: OrdersWhereUniqueInput | OrdersWhereUniqueInput[]
    update?: OrdersUpdateWithWhereUniqueWithoutAuthorInput | OrdersUpdateWithWhereUniqueWithoutAuthorInput[]
    updateMany?: OrdersUpdateManyWithWhereWithoutAuthorInput | OrdersUpdateManyWithWhereWithoutAuthorInput[]
    deleteMany?: OrdersScalarWhereInput | OrdersScalarWhereInput[]
  }

  export type FillsUpdateManyWithoutMakerUserNestedInput = {
    create?: XOR<FillsCreateWithoutMakerUserInput, FillsUncheckedCreateWithoutMakerUserInput> | FillsCreateWithoutMakerUserInput[] | FillsUncheckedCreateWithoutMakerUserInput[]
    connectOrCreate?: FillsCreateOrConnectWithoutMakerUserInput | FillsCreateOrConnectWithoutMakerUserInput[]
    upsert?: FillsUpsertWithWhereUniqueWithoutMakerUserInput | FillsUpsertWithWhereUniqueWithoutMakerUserInput[]
    createMany?: FillsCreateManyMakerUserInputEnvelope
    set?: FillsWhereUniqueInput | FillsWhereUniqueInput[]
    disconnect?: FillsWhereUniqueInput | FillsWhereUniqueInput[]
    delete?: FillsWhereUniqueInput | FillsWhereUniqueInput[]
    connect?: FillsWhereUniqueInput | FillsWhereUniqueInput[]
    update?: FillsUpdateWithWhereUniqueWithoutMakerUserInput | FillsUpdateWithWhereUniqueWithoutMakerUserInput[]
    updateMany?: FillsUpdateManyWithWhereWithoutMakerUserInput | FillsUpdateManyWithWhereWithoutMakerUserInput[]
    deleteMany?: FillsScalarWhereInput | FillsScalarWhereInput[]
  }

  export type FillsUpdateManyWithoutTakerUserNestedInput = {
    create?: XOR<FillsCreateWithoutTakerUserInput, FillsUncheckedCreateWithoutTakerUserInput> | FillsCreateWithoutTakerUserInput[] | FillsUncheckedCreateWithoutTakerUserInput[]
    connectOrCreate?: FillsCreateOrConnectWithoutTakerUserInput | FillsCreateOrConnectWithoutTakerUserInput[]
    upsert?: FillsUpsertWithWhereUniqueWithoutTakerUserInput | FillsUpsertWithWhereUniqueWithoutTakerUserInput[]
    createMany?: FillsCreateManyTakerUserInputEnvelope
    set?: FillsWhereUniqueInput | FillsWhereUniqueInput[]
    disconnect?: FillsWhereUniqueInput | FillsWhereUniqueInput[]
    delete?: FillsWhereUniqueInput | FillsWhereUniqueInput[]
    connect?: FillsWhereUniqueInput | FillsWhereUniqueInput[]
    update?: FillsUpdateWithWhereUniqueWithoutTakerUserInput | FillsUpdateWithWhereUniqueWithoutTakerUserInput[]
    updateMany?: FillsUpdateManyWithWhereWithoutTakerUserInput | FillsUpdateManyWithWhereWithoutTakerUserInput[]
    deleteMany?: FillsScalarWhereInput | FillsScalarWhereInput[]
  }

  export type OrdersUncheckedUpdateManyWithoutAuthorNestedInput = {
    create?: XOR<OrdersCreateWithoutAuthorInput, OrdersUncheckedCreateWithoutAuthorInput> | OrdersCreateWithoutAuthorInput[] | OrdersUncheckedCreateWithoutAuthorInput[]
    connectOrCreate?: OrdersCreateOrConnectWithoutAuthorInput | OrdersCreateOrConnectWithoutAuthorInput[]
    upsert?: OrdersUpsertWithWhereUniqueWithoutAuthorInput | OrdersUpsertWithWhereUniqueWithoutAuthorInput[]
    createMany?: OrdersCreateManyAuthorInputEnvelope
    set?: OrdersWhereUniqueInput | OrdersWhereUniqueInput[]
    disconnect?: OrdersWhereUniqueInput | OrdersWhereUniqueInput[]
    delete?: OrdersWhereUniqueInput | OrdersWhereUniqueInput[]
    connect?: OrdersWhereUniqueInput | OrdersWhereUniqueInput[]
    update?: OrdersUpdateWithWhereUniqueWithoutAuthorInput | OrdersUpdateWithWhereUniqueWithoutAuthorInput[]
    updateMany?: OrdersUpdateManyWithWhereWithoutAuthorInput | OrdersUpdateManyWithWhereWithoutAuthorInput[]
    deleteMany?: OrdersScalarWhereInput | OrdersScalarWhereInput[]
  }

  export type FillsUncheckedUpdateManyWithoutMakerUserNestedInput = {
    create?: XOR<FillsCreateWithoutMakerUserInput, FillsUncheckedCreateWithoutMakerUserInput> | FillsCreateWithoutMakerUserInput[] | FillsUncheckedCreateWithoutMakerUserInput[]
    connectOrCreate?: FillsCreateOrConnectWithoutMakerUserInput | FillsCreateOrConnectWithoutMakerUserInput[]
    upsert?: FillsUpsertWithWhereUniqueWithoutMakerUserInput | FillsUpsertWithWhereUniqueWithoutMakerUserInput[]
    createMany?: FillsCreateManyMakerUserInputEnvelope
    set?: FillsWhereUniqueInput | FillsWhereUniqueInput[]
    disconnect?: FillsWhereUniqueInput | FillsWhereUniqueInput[]
    delete?: FillsWhereUniqueInput | FillsWhereUniqueInput[]
    connect?: FillsWhereUniqueInput | FillsWhereUniqueInput[]
    update?: FillsUpdateWithWhereUniqueWithoutMakerUserInput | FillsUpdateWithWhereUniqueWithoutMakerUserInput[]
    updateMany?: FillsUpdateManyWithWhereWithoutMakerUserInput | FillsUpdateManyWithWhereWithoutMakerUserInput[]
    deleteMany?: FillsScalarWhereInput | FillsScalarWhereInput[]
  }

  export type FillsUncheckedUpdateManyWithoutTakerUserNestedInput = {
    create?: XOR<FillsCreateWithoutTakerUserInput, FillsUncheckedCreateWithoutTakerUserInput> | FillsCreateWithoutTakerUserInput[] | FillsUncheckedCreateWithoutTakerUserInput[]
    connectOrCreate?: FillsCreateOrConnectWithoutTakerUserInput | FillsCreateOrConnectWithoutTakerUserInput[]
    upsert?: FillsUpsertWithWhereUniqueWithoutTakerUserInput | FillsUpsertWithWhereUniqueWithoutTakerUserInput[]
    createMany?: FillsCreateManyTakerUserInputEnvelope
    set?: FillsWhereUniqueInput | FillsWhereUniqueInput[]
    disconnect?: FillsWhereUniqueInput | FillsWhereUniqueInput[]
    delete?: FillsWhereUniqueInput | FillsWhereUniqueInput[]
    connect?: FillsWhereUniqueInput | FillsWhereUniqueInput[]
    update?: FillsUpdateWithWhereUniqueWithoutTakerUserInput | FillsUpdateWithWhereUniqueWithoutTakerUserInput[]
    updateMany?: FillsUpdateManyWithWhereWithoutTakerUserInput | FillsUpdateManyWithWhereWithoutTakerUserInput[]
    deleteMany?: FillsScalarWhereInput | FillsScalarWhereInput[]
  }

  export type UserCreateNestedOneWithoutOrdersInput = {
    create?: XOR<UserCreateWithoutOrdersInput, UserUncheckedCreateWithoutOrdersInput>
    connectOrCreate?: UserCreateOrConnectWithoutOrdersInput
    connect?: UserWhereUniqueInput
  }

  export type MarketsCreateNestedOneWithoutOrdersInput = {
    create?: XOR<MarketsCreateWithoutOrdersInput, MarketsUncheckedCreateWithoutOrdersInput>
    connectOrCreate?: MarketsCreateOrConnectWithoutOrdersInput
    connect?: MarketsWhereUniqueInput
  }

  export type FillsCreateNestedManyWithoutMakerOrderInput = {
    create?: XOR<FillsCreateWithoutMakerOrderInput, FillsUncheckedCreateWithoutMakerOrderInput> | FillsCreateWithoutMakerOrderInput[] | FillsUncheckedCreateWithoutMakerOrderInput[]
    connectOrCreate?: FillsCreateOrConnectWithoutMakerOrderInput | FillsCreateOrConnectWithoutMakerOrderInput[]
    createMany?: FillsCreateManyMakerOrderInputEnvelope
    connect?: FillsWhereUniqueInput | FillsWhereUniqueInput[]
  }

  export type FillsCreateNestedManyWithoutTakerOrderInput = {
    create?: XOR<FillsCreateWithoutTakerOrderInput, FillsUncheckedCreateWithoutTakerOrderInput> | FillsCreateWithoutTakerOrderInput[] | FillsUncheckedCreateWithoutTakerOrderInput[]
    connectOrCreate?: FillsCreateOrConnectWithoutTakerOrderInput | FillsCreateOrConnectWithoutTakerOrderInput[]
    createMany?: FillsCreateManyTakerOrderInputEnvelope
    connect?: FillsWhereUniqueInput | FillsWhereUniqueInput[]
  }

  export type FillsUncheckedCreateNestedManyWithoutMakerOrderInput = {
    create?: XOR<FillsCreateWithoutMakerOrderInput, FillsUncheckedCreateWithoutMakerOrderInput> | FillsCreateWithoutMakerOrderInput[] | FillsUncheckedCreateWithoutMakerOrderInput[]
    connectOrCreate?: FillsCreateOrConnectWithoutMakerOrderInput | FillsCreateOrConnectWithoutMakerOrderInput[]
    createMany?: FillsCreateManyMakerOrderInputEnvelope
    connect?: FillsWhereUniqueInput | FillsWhereUniqueInput[]
  }

  export type FillsUncheckedCreateNestedManyWithoutTakerOrderInput = {
    create?: XOR<FillsCreateWithoutTakerOrderInput, FillsUncheckedCreateWithoutTakerOrderInput> | FillsCreateWithoutTakerOrderInput[] | FillsUncheckedCreateWithoutTakerOrderInput[]
    connectOrCreate?: FillsCreateOrConnectWithoutTakerOrderInput | FillsCreateOrConnectWithoutTakerOrderInput[]
    createMany?: FillsCreateManyTakerOrderInputEnvelope
    connect?: FillsWhereUniqueInput | FillsWhereUniqueInput[]
  }

  export type EnumTypeFieldUpdateOperationsInput = {
    set?: $Enums.Type
  }

  export type EnumOrderTypeFieldUpdateOperationsInput = {
    set?: $Enums.OrderType
  }

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type EnumStatusFieldUpdateOperationsInput = {
    set?: $Enums.Status
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type UserUpdateOneRequiredWithoutOrdersNestedInput = {
    create?: XOR<UserCreateWithoutOrdersInput, UserUncheckedCreateWithoutOrdersInput>
    connectOrCreate?: UserCreateOrConnectWithoutOrdersInput
    upsert?: UserUpsertWithoutOrdersInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutOrdersInput, UserUpdateWithoutOrdersInput>, UserUncheckedUpdateWithoutOrdersInput>
  }

  export type MarketsUpdateOneRequiredWithoutOrdersNestedInput = {
    create?: XOR<MarketsCreateWithoutOrdersInput, MarketsUncheckedCreateWithoutOrdersInput>
    connectOrCreate?: MarketsCreateOrConnectWithoutOrdersInput
    upsert?: MarketsUpsertWithoutOrdersInput
    connect?: MarketsWhereUniqueInput
    update?: XOR<XOR<MarketsUpdateToOneWithWhereWithoutOrdersInput, MarketsUpdateWithoutOrdersInput>, MarketsUncheckedUpdateWithoutOrdersInput>
  }

  export type FillsUpdateManyWithoutMakerOrderNestedInput = {
    create?: XOR<FillsCreateWithoutMakerOrderInput, FillsUncheckedCreateWithoutMakerOrderInput> | FillsCreateWithoutMakerOrderInput[] | FillsUncheckedCreateWithoutMakerOrderInput[]
    connectOrCreate?: FillsCreateOrConnectWithoutMakerOrderInput | FillsCreateOrConnectWithoutMakerOrderInput[]
    upsert?: FillsUpsertWithWhereUniqueWithoutMakerOrderInput | FillsUpsertWithWhereUniqueWithoutMakerOrderInput[]
    createMany?: FillsCreateManyMakerOrderInputEnvelope
    set?: FillsWhereUniqueInput | FillsWhereUniqueInput[]
    disconnect?: FillsWhereUniqueInput | FillsWhereUniqueInput[]
    delete?: FillsWhereUniqueInput | FillsWhereUniqueInput[]
    connect?: FillsWhereUniqueInput | FillsWhereUniqueInput[]
    update?: FillsUpdateWithWhereUniqueWithoutMakerOrderInput | FillsUpdateWithWhereUniqueWithoutMakerOrderInput[]
    updateMany?: FillsUpdateManyWithWhereWithoutMakerOrderInput | FillsUpdateManyWithWhereWithoutMakerOrderInput[]
    deleteMany?: FillsScalarWhereInput | FillsScalarWhereInput[]
  }

  export type FillsUpdateManyWithoutTakerOrderNestedInput = {
    create?: XOR<FillsCreateWithoutTakerOrderInput, FillsUncheckedCreateWithoutTakerOrderInput> | FillsCreateWithoutTakerOrderInput[] | FillsUncheckedCreateWithoutTakerOrderInput[]
    connectOrCreate?: FillsCreateOrConnectWithoutTakerOrderInput | FillsCreateOrConnectWithoutTakerOrderInput[]
    upsert?: FillsUpsertWithWhereUniqueWithoutTakerOrderInput | FillsUpsertWithWhereUniqueWithoutTakerOrderInput[]
    createMany?: FillsCreateManyTakerOrderInputEnvelope
    set?: FillsWhereUniqueInput | FillsWhereUniqueInput[]
    disconnect?: FillsWhereUniqueInput | FillsWhereUniqueInput[]
    delete?: FillsWhereUniqueInput | FillsWhereUniqueInput[]
    connect?: FillsWhereUniqueInput | FillsWhereUniqueInput[]
    update?: FillsUpdateWithWhereUniqueWithoutTakerOrderInput | FillsUpdateWithWhereUniqueWithoutTakerOrderInput[]
    updateMany?: FillsUpdateManyWithWhereWithoutTakerOrderInput | FillsUpdateManyWithWhereWithoutTakerOrderInput[]
    deleteMany?: FillsScalarWhereInput | FillsScalarWhereInput[]
  }

  export type FillsUncheckedUpdateManyWithoutMakerOrderNestedInput = {
    create?: XOR<FillsCreateWithoutMakerOrderInput, FillsUncheckedCreateWithoutMakerOrderInput> | FillsCreateWithoutMakerOrderInput[] | FillsUncheckedCreateWithoutMakerOrderInput[]
    connectOrCreate?: FillsCreateOrConnectWithoutMakerOrderInput | FillsCreateOrConnectWithoutMakerOrderInput[]
    upsert?: FillsUpsertWithWhereUniqueWithoutMakerOrderInput | FillsUpsertWithWhereUniqueWithoutMakerOrderInput[]
    createMany?: FillsCreateManyMakerOrderInputEnvelope
    set?: FillsWhereUniqueInput | FillsWhereUniqueInput[]
    disconnect?: FillsWhereUniqueInput | FillsWhereUniqueInput[]
    delete?: FillsWhereUniqueInput | FillsWhereUniqueInput[]
    connect?: FillsWhereUniqueInput | FillsWhereUniqueInput[]
    update?: FillsUpdateWithWhereUniqueWithoutMakerOrderInput | FillsUpdateWithWhereUniqueWithoutMakerOrderInput[]
    updateMany?: FillsUpdateManyWithWhereWithoutMakerOrderInput | FillsUpdateManyWithWhereWithoutMakerOrderInput[]
    deleteMany?: FillsScalarWhereInput | FillsScalarWhereInput[]
  }

  export type FillsUncheckedUpdateManyWithoutTakerOrderNestedInput = {
    create?: XOR<FillsCreateWithoutTakerOrderInput, FillsUncheckedCreateWithoutTakerOrderInput> | FillsCreateWithoutTakerOrderInput[] | FillsUncheckedCreateWithoutTakerOrderInput[]
    connectOrCreate?: FillsCreateOrConnectWithoutTakerOrderInput | FillsCreateOrConnectWithoutTakerOrderInput[]
    upsert?: FillsUpsertWithWhereUniqueWithoutTakerOrderInput | FillsUpsertWithWhereUniqueWithoutTakerOrderInput[]
    createMany?: FillsCreateManyTakerOrderInputEnvelope
    set?: FillsWhereUniqueInput | FillsWhereUniqueInput[]
    disconnect?: FillsWhereUniqueInput | FillsWhereUniqueInput[]
    delete?: FillsWhereUniqueInput | FillsWhereUniqueInput[]
    connect?: FillsWhereUniqueInput | FillsWhereUniqueInput[]
    update?: FillsUpdateWithWhereUniqueWithoutTakerOrderInput | FillsUpdateWithWhereUniqueWithoutTakerOrderInput[]
    updateMany?: FillsUpdateManyWithWhereWithoutTakerOrderInput | FillsUpdateManyWithWhereWithoutTakerOrderInput[]
    deleteMany?: FillsScalarWhereInput | FillsScalarWhereInput[]
  }

  export type OrdersCreateNestedManyWithoutMarketInput = {
    create?: XOR<OrdersCreateWithoutMarketInput, OrdersUncheckedCreateWithoutMarketInput> | OrdersCreateWithoutMarketInput[] | OrdersUncheckedCreateWithoutMarketInput[]
    connectOrCreate?: OrdersCreateOrConnectWithoutMarketInput | OrdersCreateOrConnectWithoutMarketInput[]
    createMany?: OrdersCreateManyMarketInputEnvelope
    connect?: OrdersWhereUniqueInput | OrdersWhereUniqueInput[]
  }

  export type FillsCreateNestedManyWithoutMarketInput = {
    create?: XOR<FillsCreateWithoutMarketInput, FillsUncheckedCreateWithoutMarketInput> | FillsCreateWithoutMarketInput[] | FillsUncheckedCreateWithoutMarketInput[]
    connectOrCreate?: FillsCreateOrConnectWithoutMarketInput | FillsCreateOrConnectWithoutMarketInput[]
    createMany?: FillsCreateManyMarketInputEnvelope
    connect?: FillsWhereUniqueInput | FillsWhereUniqueInput[]
  }

  export type OrdersUncheckedCreateNestedManyWithoutMarketInput = {
    create?: XOR<OrdersCreateWithoutMarketInput, OrdersUncheckedCreateWithoutMarketInput> | OrdersCreateWithoutMarketInput[] | OrdersUncheckedCreateWithoutMarketInput[]
    connectOrCreate?: OrdersCreateOrConnectWithoutMarketInput | OrdersCreateOrConnectWithoutMarketInput[]
    createMany?: OrdersCreateManyMarketInputEnvelope
    connect?: OrdersWhereUniqueInput | OrdersWhereUniqueInput[]
  }

  export type FillsUncheckedCreateNestedManyWithoutMarketInput = {
    create?: XOR<FillsCreateWithoutMarketInput, FillsUncheckedCreateWithoutMarketInput> | FillsCreateWithoutMarketInput[] | FillsUncheckedCreateWithoutMarketInput[]
    connectOrCreate?: FillsCreateOrConnectWithoutMarketInput | FillsCreateOrConnectWithoutMarketInput[]
    createMany?: FillsCreateManyMarketInputEnvelope
    connect?: FillsWhereUniqueInput | FillsWhereUniqueInput[]
  }

  export type OrdersUpdateManyWithoutMarketNestedInput = {
    create?: XOR<OrdersCreateWithoutMarketInput, OrdersUncheckedCreateWithoutMarketInput> | OrdersCreateWithoutMarketInput[] | OrdersUncheckedCreateWithoutMarketInput[]
    connectOrCreate?: OrdersCreateOrConnectWithoutMarketInput | OrdersCreateOrConnectWithoutMarketInput[]
    upsert?: OrdersUpsertWithWhereUniqueWithoutMarketInput | OrdersUpsertWithWhereUniqueWithoutMarketInput[]
    createMany?: OrdersCreateManyMarketInputEnvelope
    set?: OrdersWhereUniqueInput | OrdersWhereUniqueInput[]
    disconnect?: OrdersWhereUniqueInput | OrdersWhereUniqueInput[]
    delete?: OrdersWhereUniqueInput | OrdersWhereUniqueInput[]
    connect?: OrdersWhereUniqueInput | OrdersWhereUniqueInput[]
    update?: OrdersUpdateWithWhereUniqueWithoutMarketInput | OrdersUpdateWithWhereUniqueWithoutMarketInput[]
    updateMany?: OrdersUpdateManyWithWhereWithoutMarketInput | OrdersUpdateManyWithWhereWithoutMarketInput[]
    deleteMany?: OrdersScalarWhereInput | OrdersScalarWhereInput[]
  }

  export type FillsUpdateManyWithoutMarketNestedInput = {
    create?: XOR<FillsCreateWithoutMarketInput, FillsUncheckedCreateWithoutMarketInput> | FillsCreateWithoutMarketInput[] | FillsUncheckedCreateWithoutMarketInput[]
    connectOrCreate?: FillsCreateOrConnectWithoutMarketInput | FillsCreateOrConnectWithoutMarketInput[]
    upsert?: FillsUpsertWithWhereUniqueWithoutMarketInput | FillsUpsertWithWhereUniqueWithoutMarketInput[]
    createMany?: FillsCreateManyMarketInputEnvelope
    set?: FillsWhereUniqueInput | FillsWhereUniqueInput[]
    disconnect?: FillsWhereUniqueInput | FillsWhereUniqueInput[]
    delete?: FillsWhereUniqueInput | FillsWhereUniqueInput[]
    connect?: FillsWhereUniqueInput | FillsWhereUniqueInput[]
    update?: FillsUpdateWithWhereUniqueWithoutMarketInput | FillsUpdateWithWhereUniqueWithoutMarketInput[]
    updateMany?: FillsUpdateManyWithWhereWithoutMarketInput | FillsUpdateManyWithWhereWithoutMarketInput[]
    deleteMany?: FillsScalarWhereInput | FillsScalarWhereInput[]
  }

  export type OrdersUncheckedUpdateManyWithoutMarketNestedInput = {
    create?: XOR<OrdersCreateWithoutMarketInput, OrdersUncheckedCreateWithoutMarketInput> | OrdersCreateWithoutMarketInput[] | OrdersUncheckedCreateWithoutMarketInput[]
    connectOrCreate?: OrdersCreateOrConnectWithoutMarketInput | OrdersCreateOrConnectWithoutMarketInput[]
    upsert?: OrdersUpsertWithWhereUniqueWithoutMarketInput | OrdersUpsertWithWhereUniqueWithoutMarketInput[]
    createMany?: OrdersCreateManyMarketInputEnvelope
    set?: OrdersWhereUniqueInput | OrdersWhereUniqueInput[]
    disconnect?: OrdersWhereUniqueInput | OrdersWhereUniqueInput[]
    delete?: OrdersWhereUniqueInput | OrdersWhereUniqueInput[]
    connect?: OrdersWhereUniqueInput | OrdersWhereUniqueInput[]
    update?: OrdersUpdateWithWhereUniqueWithoutMarketInput | OrdersUpdateWithWhereUniqueWithoutMarketInput[]
    updateMany?: OrdersUpdateManyWithWhereWithoutMarketInput | OrdersUpdateManyWithWhereWithoutMarketInput[]
    deleteMany?: OrdersScalarWhereInput | OrdersScalarWhereInput[]
  }

  export type FillsUncheckedUpdateManyWithoutMarketNestedInput = {
    create?: XOR<FillsCreateWithoutMarketInput, FillsUncheckedCreateWithoutMarketInput> | FillsCreateWithoutMarketInput[] | FillsUncheckedCreateWithoutMarketInput[]
    connectOrCreate?: FillsCreateOrConnectWithoutMarketInput | FillsCreateOrConnectWithoutMarketInput[]
    upsert?: FillsUpsertWithWhereUniqueWithoutMarketInput | FillsUpsertWithWhereUniqueWithoutMarketInput[]
    createMany?: FillsCreateManyMarketInputEnvelope
    set?: FillsWhereUniqueInput | FillsWhereUniqueInput[]
    disconnect?: FillsWhereUniqueInput | FillsWhereUniqueInput[]
    delete?: FillsWhereUniqueInput | FillsWhereUniqueInput[]
    connect?: FillsWhereUniqueInput | FillsWhereUniqueInput[]
    update?: FillsUpdateWithWhereUniqueWithoutMarketInput | FillsUpdateWithWhereUniqueWithoutMarketInput[]
    updateMany?: FillsUpdateManyWithWhereWithoutMarketInput | FillsUpdateManyWithWhereWithoutMarketInput[]
    deleteMany?: FillsScalarWhereInput | FillsScalarWhereInput[]
  }

  export type UserCreateNestedOneWithoutMakerFillsInput = {
    create?: XOR<UserCreateWithoutMakerFillsInput, UserUncheckedCreateWithoutMakerFillsInput>
    connectOrCreate?: UserCreateOrConnectWithoutMakerFillsInput
    connect?: UserWhereUniqueInput
  }

  export type UserCreateNestedOneWithoutTakerFillsInput = {
    create?: XOR<UserCreateWithoutTakerFillsInput, UserUncheckedCreateWithoutTakerFillsInput>
    connectOrCreate?: UserCreateOrConnectWithoutTakerFillsInput
    connect?: UserWhereUniqueInput
  }

  export type MarketsCreateNestedOneWithoutFillsInput = {
    create?: XOR<MarketsCreateWithoutFillsInput, MarketsUncheckedCreateWithoutFillsInput>
    connectOrCreate?: MarketsCreateOrConnectWithoutFillsInput
    connect?: MarketsWhereUniqueInput
  }

  export type OrdersCreateNestedOneWithoutMakerFillsInput = {
    create?: XOR<OrdersCreateWithoutMakerFillsInput, OrdersUncheckedCreateWithoutMakerFillsInput>
    connectOrCreate?: OrdersCreateOrConnectWithoutMakerFillsInput
    connect?: OrdersWhereUniqueInput
  }

  export type OrdersCreateNestedOneWithoutTakerFillsInput = {
    create?: XOR<OrdersCreateWithoutTakerFillsInput, OrdersUncheckedCreateWithoutTakerFillsInput>
    connectOrCreate?: OrdersCreateOrConnectWithoutTakerFillsInput
    connect?: OrdersWhereUniqueInput
  }

  export type UserUpdateOneRequiredWithoutMakerFillsNestedInput = {
    create?: XOR<UserCreateWithoutMakerFillsInput, UserUncheckedCreateWithoutMakerFillsInput>
    connectOrCreate?: UserCreateOrConnectWithoutMakerFillsInput
    upsert?: UserUpsertWithoutMakerFillsInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutMakerFillsInput, UserUpdateWithoutMakerFillsInput>, UserUncheckedUpdateWithoutMakerFillsInput>
  }

  export type UserUpdateOneRequiredWithoutTakerFillsNestedInput = {
    create?: XOR<UserCreateWithoutTakerFillsInput, UserUncheckedCreateWithoutTakerFillsInput>
    connectOrCreate?: UserCreateOrConnectWithoutTakerFillsInput
    upsert?: UserUpsertWithoutTakerFillsInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutTakerFillsInput, UserUpdateWithoutTakerFillsInput>, UserUncheckedUpdateWithoutTakerFillsInput>
  }

  export type MarketsUpdateOneRequiredWithoutFillsNestedInput = {
    create?: XOR<MarketsCreateWithoutFillsInput, MarketsUncheckedCreateWithoutFillsInput>
    connectOrCreate?: MarketsCreateOrConnectWithoutFillsInput
    upsert?: MarketsUpsertWithoutFillsInput
    connect?: MarketsWhereUniqueInput
    update?: XOR<XOR<MarketsUpdateToOneWithWhereWithoutFillsInput, MarketsUpdateWithoutFillsInput>, MarketsUncheckedUpdateWithoutFillsInput>
  }

  export type OrdersUpdateOneRequiredWithoutMakerFillsNestedInput = {
    create?: XOR<OrdersCreateWithoutMakerFillsInput, OrdersUncheckedCreateWithoutMakerFillsInput>
    connectOrCreate?: OrdersCreateOrConnectWithoutMakerFillsInput
    upsert?: OrdersUpsertWithoutMakerFillsInput
    connect?: OrdersWhereUniqueInput
    update?: XOR<XOR<OrdersUpdateToOneWithWhereWithoutMakerFillsInput, OrdersUpdateWithoutMakerFillsInput>, OrdersUncheckedUpdateWithoutMakerFillsInput>
  }

  export type OrdersUpdateOneRequiredWithoutTakerFillsNestedInput = {
    create?: XOR<OrdersCreateWithoutTakerFillsInput, OrdersUncheckedCreateWithoutTakerFillsInput>
    connectOrCreate?: OrdersCreateOrConnectWithoutTakerFillsInput
    upsert?: OrdersUpsertWithoutTakerFillsInput
    connect?: OrdersWhereUniqueInput
    update?: XOR<XOR<OrdersUpdateToOneWithWhereWithoutTakerFillsInput, OrdersUpdateWithoutTakerFillsInput>, OrdersUncheckedUpdateWithoutTakerFillsInput>
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

  export type NestedEnumTypeFilter<$PrismaModel = never> = {
    equals?: $Enums.Type | EnumTypeFieldRefInput<$PrismaModel>
    in?: $Enums.Type[] | ListEnumTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.Type[] | ListEnumTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumTypeFilter<$PrismaModel> | $Enums.Type
  }

  export type NestedEnumOrderTypeFilter<$PrismaModel = never> = {
    equals?: $Enums.OrderType | EnumOrderTypeFieldRefInput<$PrismaModel>
    in?: $Enums.OrderType[] | ListEnumOrderTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.OrderType[] | ListEnumOrderTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumOrderTypeFilter<$PrismaModel> | $Enums.OrderType
  }

  export type NestedEnumStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.Status | EnumStatusFieldRefInput<$PrismaModel>
    in?: $Enums.Status[] | ListEnumStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.Status[] | ListEnumStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumStatusFilter<$PrismaModel> | $Enums.Status
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

  export type NestedEnumTypeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.Type | EnumTypeFieldRefInput<$PrismaModel>
    in?: $Enums.Type[] | ListEnumTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.Type[] | ListEnumTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumTypeWithAggregatesFilter<$PrismaModel> | $Enums.Type
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumTypeFilter<$PrismaModel>
    _max?: NestedEnumTypeFilter<$PrismaModel>
  }

  export type NestedEnumOrderTypeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.OrderType | EnumOrderTypeFieldRefInput<$PrismaModel>
    in?: $Enums.OrderType[] | ListEnumOrderTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.OrderType[] | ListEnumOrderTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumOrderTypeWithAggregatesFilter<$PrismaModel> | $Enums.OrderType
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumOrderTypeFilter<$PrismaModel>
    _max?: NestedEnumOrderTypeFilter<$PrismaModel>
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

  export type NestedEnumStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.Status | EnumStatusFieldRefInput<$PrismaModel>
    in?: $Enums.Status[] | ListEnumStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.Status[] | ListEnumStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumStatusWithAggregatesFilter<$PrismaModel> | $Enums.Status
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumStatusFilter<$PrismaModel>
    _max?: NestedEnumStatusFilter<$PrismaModel>
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

  export type OrdersCreateWithoutAuthorInput = {
    id?: string
    type: $Enums.Type
    orderType: $Enums.OrderType
    price: string
    equity: string
    slippage: number
    qty: string
    status: $Enums.Status
    initialMargin: string
    createdAt?: Date | string
    updatedAt?: Date | string
    market: MarketsCreateNestedOneWithoutOrdersInput
    makerFills?: FillsCreateNestedManyWithoutMakerOrderInput
    takerFills?: FillsCreateNestedManyWithoutTakerOrderInput
  }

  export type OrdersUncheckedCreateWithoutAuthorInput = {
    id?: string
    type: $Enums.Type
    orderType: $Enums.OrderType
    marketId: string
    price: string
    equity: string
    slippage: number
    qty: string
    status: $Enums.Status
    initialMargin: string
    createdAt?: Date | string
    updatedAt?: Date | string
    makerFills?: FillsUncheckedCreateNestedManyWithoutMakerOrderInput
    takerFills?: FillsUncheckedCreateNestedManyWithoutTakerOrderInput
  }

  export type OrdersCreateOrConnectWithoutAuthorInput = {
    where: OrdersWhereUniqueInput
    create: XOR<OrdersCreateWithoutAuthorInput, OrdersUncheckedCreateWithoutAuthorInput>
  }

  export type OrdersCreateManyAuthorInputEnvelope = {
    data: OrdersCreateManyAuthorInput | OrdersCreateManyAuthorInput[]
    skipDuplicates?: boolean
  }

  export type FillsCreateWithoutMakerUserInput = {
    id?: string
    price: string
    qty: string
    createdAt?: Date | string
    updatedAt?: Date | string
    takerUser: UserCreateNestedOneWithoutTakerFillsInput
    market: MarketsCreateNestedOneWithoutFillsInput
    makerOrder: OrdersCreateNestedOneWithoutMakerFillsInput
    takerOrder: OrdersCreateNestedOneWithoutTakerFillsInput
  }

  export type FillsUncheckedCreateWithoutMakerUserInput = {
    id?: string
    taker: string
    marketId: string
    price: string
    qty: string
    makerOrderId: string
    takerOrderId: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type FillsCreateOrConnectWithoutMakerUserInput = {
    where: FillsWhereUniqueInput
    create: XOR<FillsCreateWithoutMakerUserInput, FillsUncheckedCreateWithoutMakerUserInput>
  }

  export type FillsCreateManyMakerUserInputEnvelope = {
    data: FillsCreateManyMakerUserInput | FillsCreateManyMakerUserInput[]
    skipDuplicates?: boolean
  }

  export type FillsCreateWithoutTakerUserInput = {
    id?: string
    price: string
    qty: string
    createdAt?: Date | string
    updatedAt?: Date | string
    makerUser: UserCreateNestedOneWithoutMakerFillsInput
    market: MarketsCreateNestedOneWithoutFillsInput
    makerOrder: OrdersCreateNestedOneWithoutMakerFillsInput
    takerOrder: OrdersCreateNestedOneWithoutTakerFillsInput
  }

  export type FillsUncheckedCreateWithoutTakerUserInput = {
    id?: string
    maker: string
    marketId: string
    price: string
    qty: string
    makerOrderId: string
    takerOrderId: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type FillsCreateOrConnectWithoutTakerUserInput = {
    where: FillsWhereUniqueInput
    create: XOR<FillsCreateWithoutTakerUserInput, FillsUncheckedCreateWithoutTakerUserInput>
  }

  export type FillsCreateManyTakerUserInputEnvelope = {
    data: FillsCreateManyTakerUserInput | FillsCreateManyTakerUserInput[]
    skipDuplicates?: boolean
  }

  export type OrdersUpsertWithWhereUniqueWithoutAuthorInput = {
    where: OrdersWhereUniqueInput
    update: XOR<OrdersUpdateWithoutAuthorInput, OrdersUncheckedUpdateWithoutAuthorInput>
    create: XOR<OrdersCreateWithoutAuthorInput, OrdersUncheckedCreateWithoutAuthorInput>
  }

  export type OrdersUpdateWithWhereUniqueWithoutAuthorInput = {
    where: OrdersWhereUniqueInput
    data: XOR<OrdersUpdateWithoutAuthorInput, OrdersUncheckedUpdateWithoutAuthorInput>
  }

  export type OrdersUpdateManyWithWhereWithoutAuthorInput = {
    where: OrdersScalarWhereInput
    data: XOR<OrdersUpdateManyMutationInput, OrdersUncheckedUpdateManyWithoutAuthorInput>
  }

  export type OrdersScalarWhereInput = {
    AND?: OrdersScalarWhereInput | OrdersScalarWhereInput[]
    OR?: OrdersScalarWhereInput[]
    NOT?: OrdersScalarWhereInput | OrdersScalarWhereInput[]
    id?: StringFilter<"Orders"> | string
    userID?: StringFilter<"Orders"> | string
    type?: EnumTypeFilter<"Orders"> | $Enums.Type
    orderType?: EnumOrderTypeFilter<"Orders"> | $Enums.OrderType
    marketId?: StringFilter<"Orders"> | string
    price?: StringFilter<"Orders"> | string
    equity?: StringFilter<"Orders"> | string
    slippage?: IntFilter<"Orders"> | number
    qty?: StringFilter<"Orders"> | string
    status?: EnumStatusFilter<"Orders"> | $Enums.Status
    initialMargin?: StringFilter<"Orders"> | string
    createdAt?: DateTimeFilter<"Orders"> | Date | string
    updatedAt?: DateTimeFilter<"Orders"> | Date | string
  }

  export type FillsUpsertWithWhereUniqueWithoutMakerUserInput = {
    where: FillsWhereUniqueInput
    update: XOR<FillsUpdateWithoutMakerUserInput, FillsUncheckedUpdateWithoutMakerUserInput>
    create: XOR<FillsCreateWithoutMakerUserInput, FillsUncheckedCreateWithoutMakerUserInput>
  }

  export type FillsUpdateWithWhereUniqueWithoutMakerUserInput = {
    where: FillsWhereUniqueInput
    data: XOR<FillsUpdateWithoutMakerUserInput, FillsUncheckedUpdateWithoutMakerUserInput>
  }

  export type FillsUpdateManyWithWhereWithoutMakerUserInput = {
    where: FillsScalarWhereInput
    data: XOR<FillsUpdateManyMutationInput, FillsUncheckedUpdateManyWithoutMakerUserInput>
  }

  export type FillsScalarWhereInput = {
    AND?: FillsScalarWhereInput | FillsScalarWhereInput[]
    OR?: FillsScalarWhereInput[]
    NOT?: FillsScalarWhereInput | FillsScalarWhereInput[]
    id?: StringFilter<"Fills"> | string
    maker?: StringFilter<"Fills"> | string
    taker?: StringFilter<"Fills"> | string
    marketId?: StringFilter<"Fills"> | string
    price?: StringFilter<"Fills"> | string
    qty?: StringFilter<"Fills"> | string
    makerOrderId?: StringFilter<"Fills"> | string
    takerOrderId?: StringFilter<"Fills"> | string
    createdAt?: DateTimeFilter<"Fills"> | Date | string
    updatedAt?: DateTimeFilter<"Fills"> | Date | string
  }

  export type FillsUpsertWithWhereUniqueWithoutTakerUserInput = {
    where: FillsWhereUniqueInput
    update: XOR<FillsUpdateWithoutTakerUserInput, FillsUncheckedUpdateWithoutTakerUserInput>
    create: XOR<FillsCreateWithoutTakerUserInput, FillsUncheckedCreateWithoutTakerUserInput>
  }

  export type FillsUpdateWithWhereUniqueWithoutTakerUserInput = {
    where: FillsWhereUniqueInput
    data: XOR<FillsUpdateWithoutTakerUserInput, FillsUncheckedUpdateWithoutTakerUserInput>
  }

  export type FillsUpdateManyWithWhereWithoutTakerUserInput = {
    where: FillsScalarWhereInput
    data: XOR<FillsUpdateManyMutationInput, FillsUncheckedUpdateManyWithoutTakerUserInput>
  }

  export type UserCreateWithoutOrdersInput = {
    id?: string
    username: string
    password: string
    makerFills?: FillsCreateNestedManyWithoutMakerUserInput
    takerFills?: FillsCreateNestedManyWithoutTakerUserInput
  }

  export type UserUncheckedCreateWithoutOrdersInput = {
    id?: string
    username: string
    password: string
    makerFills?: FillsUncheckedCreateNestedManyWithoutMakerUserInput
    takerFills?: FillsUncheckedCreateNestedManyWithoutTakerUserInput
  }

  export type UserCreateOrConnectWithoutOrdersInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutOrdersInput, UserUncheckedCreateWithoutOrdersInput>
  }

  export type MarketsCreateWithoutOrdersInput = {
    id?: string
    marketSlug: string
    imageUrl: string
    fills?: FillsCreateNestedManyWithoutMarketInput
  }

  export type MarketsUncheckedCreateWithoutOrdersInput = {
    id?: string
    marketSlug: string
    imageUrl: string
    fills?: FillsUncheckedCreateNestedManyWithoutMarketInput
  }

  export type MarketsCreateOrConnectWithoutOrdersInput = {
    where: MarketsWhereUniqueInput
    create: XOR<MarketsCreateWithoutOrdersInput, MarketsUncheckedCreateWithoutOrdersInput>
  }

  export type FillsCreateWithoutMakerOrderInput = {
    id?: string
    price: string
    qty: string
    createdAt?: Date | string
    updatedAt?: Date | string
    makerUser: UserCreateNestedOneWithoutMakerFillsInput
    takerUser: UserCreateNestedOneWithoutTakerFillsInput
    market: MarketsCreateNestedOneWithoutFillsInput
    takerOrder: OrdersCreateNestedOneWithoutTakerFillsInput
  }

  export type FillsUncheckedCreateWithoutMakerOrderInput = {
    id?: string
    maker: string
    taker: string
    marketId: string
    price: string
    qty: string
    takerOrderId: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type FillsCreateOrConnectWithoutMakerOrderInput = {
    where: FillsWhereUniqueInput
    create: XOR<FillsCreateWithoutMakerOrderInput, FillsUncheckedCreateWithoutMakerOrderInput>
  }

  export type FillsCreateManyMakerOrderInputEnvelope = {
    data: FillsCreateManyMakerOrderInput | FillsCreateManyMakerOrderInput[]
    skipDuplicates?: boolean
  }

  export type FillsCreateWithoutTakerOrderInput = {
    id?: string
    price: string
    qty: string
    createdAt?: Date | string
    updatedAt?: Date | string
    makerUser: UserCreateNestedOneWithoutMakerFillsInput
    takerUser: UserCreateNestedOneWithoutTakerFillsInput
    market: MarketsCreateNestedOneWithoutFillsInput
    makerOrder: OrdersCreateNestedOneWithoutMakerFillsInput
  }

  export type FillsUncheckedCreateWithoutTakerOrderInput = {
    id?: string
    maker: string
    taker: string
    marketId: string
    price: string
    qty: string
    makerOrderId: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type FillsCreateOrConnectWithoutTakerOrderInput = {
    where: FillsWhereUniqueInput
    create: XOR<FillsCreateWithoutTakerOrderInput, FillsUncheckedCreateWithoutTakerOrderInput>
  }

  export type FillsCreateManyTakerOrderInputEnvelope = {
    data: FillsCreateManyTakerOrderInput | FillsCreateManyTakerOrderInput[]
    skipDuplicates?: boolean
  }

  export type UserUpsertWithoutOrdersInput = {
    update: XOR<UserUpdateWithoutOrdersInput, UserUncheckedUpdateWithoutOrdersInput>
    create: XOR<UserCreateWithoutOrdersInput, UserUncheckedCreateWithoutOrdersInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutOrdersInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutOrdersInput, UserUncheckedUpdateWithoutOrdersInput>
  }

  export type UserUpdateWithoutOrdersInput = {
    id?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    makerFills?: FillsUpdateManyWithoutMakerUserNestedInput
    takerFills?: FillsUpdateManyWithoutTakerUserNestedInput
  }

  export type UserUncheckedUpdateWithoutOrdersInput = {
    id?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    makerFills?: FillsUncheckedUpdateManyWithoutMakerUserNestedInput
    takerFills?: FillsUncheckedUpdateManyWithoutTakerUserNestedInput
  }

  export type MarketsUpsertWithoutOrdersInput = {
    update: XOR<MarketsUpdateWithoutOrdersInput, MarketsUncheckedUpdateWithoutOrdersInput>
    create: XOR<MarketsCreateWithoutOrdersInput, MarketsUncheckedCreateWithoutOrdersInput>
    where?: MarketsWhereInput
  }

  export type MarketsUpdateToOneWithWhereWithoutOrdersInput = {
    where?: MarketsWhereInput
    data: XOR<MarketsUpdateWithoutOrdersInput, MarketsUncheckedUpdateWithoutOrdersInput>
  }

  export type MarketsUpdateWithoutOrdersInput = {
    id?: StringFieldUpdateOperationsInput | string
    marketSlug?: StringFieldUpdateOperationsInput | string
    imageUrl?: StringFieldUpdateOperationsInput | string
    fills?: FillsUpdateManyWithoutMarketNestedInput
  }

  export type MarketsUncheckedUpdateWithoutOrdersInput = {
    id?: StringFieldUpdateOperationsInput | string
    marketSlug?: StringFieldUpdateOperationsInput | string
    imageUrl?: StringFieldUpdateOperationsInput | string
    fills?: FillsUncheckedUpdateManyWithoutMarketNestedInput
  }

  export type FillsUpsertWithWhereUniqueWithoutMakerOrderInput = {
    where: FillsWhereUniqueInput
    update: XOR<FillsUpdateWithoutMakerOrderInput, FillsUncheckedUpdateWithoutMakerOrderInput>
    create: XOR<FillsCreateWithoutMakerOrderInput, FillsUncheckedCreateWithoutMakerOrderInput>
  }

  export type FillsUpdateWithWhereUniqueWithoutMakerOrderInput = {
    where: FillsWhereUniqueInput
    data: XOR<FillsUpdateWithoutMakerOrderInput, FillsUncheckedUpdateWithoutMakerOrderInput>
  }

  export type FillsUpdateManyWithWhereWithoutMakerOrderInput = {
    where: FillsScalarWhereInput
    data: XOR<FillsUpdateManyMutationInput, FillsUncheckedUpdateManyWithoutMakerOrderInput>
  }

  export type FillsUpsertWithWhereUniqueWithoutTakerOrderInput = {
    where: FillsWhereUniqueInput
    update: XOR<FillsUpdateWithoutTakerOrderInput, FillsUncheckedUpdateWithoutTakerOrderInput>
    create: XOR<FillsCreateWithoutTakerOrderInput, FillsUncheckedCreateWithoutTakerOrderInput>
  }

  export type FillsUpdateWithWhereUniqueWithoutTakerOrderInput = {
    where: FillsWhereUniqueInput
    data: XOR<FillsUpdateWithoutTakerOrderInput, FillsUncheckedUpdateWithoutTakerOrderInput>
  }

  export type FillsUpdateManyWithWhereWithoutTakerOrderInput = {
    where: FillsScalarWhereInput
    data: XOR<FillsUpdateManyMutationInput, FillsUncheckedUpdateManyWithoutTakerOrderInput>
  }

  export type OrdersCreateWithoutMarketInput = {
    id?: string
    type: $Enums.Type
    orderType: $Enums.OrderType
    price: string
    equity: string
    slippage: number
    qty: string
    status: $Enums.Status
    initialMargin: string
    createdAt?: Date | string
    updatedAt?: Date | string
    author: UserCreateNestedOneWithoutOrdersInput
    makerFills?: FillsCreateNestedManyWithoutMakerOrderInput
    takerFills?: FillsCreateNestedManyWithoutTakerOrderInput
  }

  export type OrdersUncheckedCreateWithoutMarketInput = {
    id?: string
    userID: string
    type: $Enums.Type
    orderType: $Enums.OrderType
    price: string
    equity: string
    slippage: number
    qty: string
    status: $Enums.Status
    initialMargin: string
    createdAt?: Date | string
    updatedAt?: Date | string
    makerFills?: FillsUncheckedCreateNestedManyWithoutMakerOrderInput
    takerFills?: FillsUncheckedCreateNestedManyWithoutTakerOrderInput
  }

  export type OrdersCreateOrConnectWithoutMarketInput = {
    where: OrdersWhereUniqueInput
    create: XOR<OrdersCreateWithoutMarketInput, OrdersUncheckedCreateWithoutMarketInput>
  }

  export type OrdersCreateManyMarketInputEnvelope = {
    data: OrdersCreateManyMarketInput | OrdersCreateManyMarketInput[]
    skipDuplicates?: boolean
  }

  export type FillsCreateWithoutMarketInput = {
    id?: string
    price: string
    qty: string
    createdAt?: Date | string
    updatedAt?: Date | string
    makerUser: UserCreateNestedOneWithoutMakerFillsInput
    takerUser: UserCreateNestedOneWithoutTakerFillsInput
    makerOrder: OrdersCreateNestedOneWithoutMakerFillsInput
    takerOrder: OrdersCreateNestedOneWithoutTakerFillsInput
  }

  export type FillsUncheckedCreateWithoutMarketInput = {
    id?: string
    maker: string
    taker: string
    price: string
    qty: string
    makerOrderId: string
    takerOrderId: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type FillsCreateOrConnectWithoutMarketInput = {
    where: FillsWhereUniqueInput
    create: XOR<FillsCreateWithoutMarketInput, FillsUncheckedCreateWithoutMarketInput>
  }

  export type FillsCreateManyMarketInputEnvelope = {
    data: FillsCreateManyMarketInput | FillsCreateManyMarketInput[]
    skipDuplicates?: boolean
  }

  export type OrdersUpsertWithWhereUniqueWithoutMarketInput = {
    where: OrdersWhereUniqueInput
    update: XOR<OrdersUpdateWithoutMarketInput, OrdersUncheckedUpdateWithoutMarketInput>
    create: XOR<OrdersCreateWithoutMarketInput, OrdersUncheckedCreateWithoutMarketInput>
  }

  export type OrdersUpdateWithWhereUniqueWithoutMarketInput = {
    where: OrdersWhereUniqueInput
    data: XOR<OrdersUpdateWithoutMarketInput, OrdersUncheckedUpdateWithoutMarketInput>
  }

  export type OrdersUpdateManyWithWhereWithoutMarketInput = {
    where: OrdersScalarWhereInput
    data: XOR<OrdersUpdateManyMutationInput, OrdersUncheckedUpdateManyWithoutMarketInput>
  }

  export type FillsUpsertWithWhereUniqueWithoutMarketInput = {
    where: FillsWhereUniqueInput
    update: XOR<FillsUpdateWithoutMarketInput, FillsUncheckedUpdateWithoutMarketInput>
    create: XOR<FillsCreateWithoutMarketInput, FillsUncheckedCreateWithoutMarketInput>
  }

  export type FillsUpdateWithWhereUniqueWithoutMarketInput = {
    where: FillsWhereUniqueInput
    data: XOR<FillsUpdateWithoutMarketInput, FillsUncheckedUpdateWithoutMarketInput>
  }

  export type FillsUpdateManyWithWhereWithoutMarketInput = {
    where: FillsScalarWhereInput
    data: XOR<FillsUpdateManyMutationInput, FillsUncheckedUpdateManyWithoutMarketInput>
  }

  export type UserCreateWithoutMakerFillsInput = {
    id?: string
    username: string
    password: string
    orders?: OrdersCreateNestedManyWithoutAuthorInput
    takerFills?: FillsCreateNestedManyWithoutTakerUserInput
  }

  export type UserUncheckedCreateWithoutMakerFillsInput = {
    id?: string
    username: string
    password: string
    orders?: OrdersUncheckedCreateNestedManyWithoutAuthorInput
    takerFills?: FillsUncheckedCreateNestedManyWithoutTakerUserInput
  }

  export type UserCreateOrConnectWithoutMakerFillsInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutMakerFillsInput, UserUncheckedCreateWithoutMakerFillsInput>
  }

  export type UserCreateWithoutTakerFillsInput = {
    id?: string
    username: string
    password: string
    orders?: OrdersCreateNestedManyWithoutAuthorInput
    makerFills?: FillsCreateNestedManyWithoutMakerUserInput
  }

  export type UserUncheckedCreateWithoutTakerFillsInput = {
    id?: string
    username: string
    password: string
    orders?: OrdersUncheckedCreateNestedManyWithoutAuthorInput
    makerFills?: FillsUncheckedCreateNestedManyWithoutMakerUserInput
  }

  export type UserCreateOrConnectWithoutTakerFillsInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutTakerFillsInput, UserUncheckedCreateWithoutTakerFillsInput>
  }

  export type MarketsCreateWithoutFillsInput = {
    id?: string
    marketSlug: string
    imageUrl: string
    orders?: OrdersCreateNestedManyWithoutMarketInput
  }

  export type MarketsUncheckedCreateWithoutFillsInput = {
    id?: string
    marketSlug: string
    imageUrl: string
    orders?: OrdersUncheckedCreateNestedManyWithoutMarketInput
  }

  export type MarketsCreateOrConnectWithoutFillsInput = {
    where: MarketsWhereUniqueInput
    create: XOR<MarketsCreateWithoutFillsInput, MarketsUncheckedCreateWithoutFillsInput>
  }

  export type OrdersCreateWithoutMakerFillsInput = {
    id?: string
    type: $Enums.Type
    orderType: $Enums.OrderType
    price: string
    equity: string
    slippage: number
    qty: string
    status: $Enums.Status
    initialMargin: string
    createdAt?: Date | string
    updatedAt?: Date | string
    author: UserCreateNestedOneWithoutOrdersInput
    market: MarketsCreateNestedOneWithoutOrdersInput
    takerFills?: FillsCreateNestedManyWithoutTakerOrderInput
  }

  export type OrdersUncheckedCreateWithoutMakerFillsInput = {
    id?: string
    userID: string
    type: $Enums.Type
    orderType: $Enums.OrderType
    marketId: string
    price: string
    equity: string
    slippage: number
    qty: string
    status: $Enums.Status
    initialMargin: string
    createdAt?: Date | string
    updatedAt?: Date | string
    takerFills?: FillsUncheckedCreateNestedManyWithoutTakerOrderInput
  }

  export type OrdersCreateOrConnectWithoutMakerFillsInput = {
    where: OrdersWhereUniqueInput
    create: XOR<OrdersCreateWithoutMakerFillsInput, OrdersUncheckedCreateWithoutMakerFillsInput>
  }

  export type OrdersCreateWithoutTakerFillsInput = {
    id?: string
    type: $Enums.Type
    orderType: $Enums.OrderType
    price: string
    equity: string
    slippage: number
    qty: string
    status: $Enums.Status
    initialMargin: string
    createdAt?: Date | string
    updatedAt?: Date | string
    author: UserCreateNestedOneWithoutOrdersInput
    market: MarketsCreateNestedOneWithoutOrdersInput
    makerFills?: FillsCreateNestedManyWithoutMakerOrderInput
  }

  export type OrdersUncheckedCreateWithoutTakerFillsInput = {
    id?: string
    userID: string
    type: $Enums.Type
    orderType: $Enums.OrderType
    marketId: string
    price: string
    equity: string
    slippage: number
    qty: string
    status: $Enums.Status
    initialMargin: string
    createdAt?: Date | string
    updatedAt?: Date | string
    makerFills?: FillsUncheckedCreateNestedManyWithoutMakerOrderInput
  }

  export type OrdersCreateOrConnectWithoutTakerFillsInput = {
    where: OrdersWhereUniqueInput
    create: XOR<OrdersCreateWithoutTakerFillsInput, OrdersUncheckedCreateWithoutTakerFillsInput>
  }

  export type UserUpsertWithoutMakerFillsInput = {
    update: XOR<UserUpdateWithoutMakerFillsInput, UserUncheckedUpdateWithoutMakerFillsInput>
    create: XOR<UserCreateWithoutMakerFillsInput, UserUncheckedCreateWithoutMakerFillsInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutMakerFillsInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutMakerFillsInput, UserUncheckedUpdateWithoutMakerFillsInput>
  }

  export type UserUpdateWithoutMakerFillsInput = {
    id?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    orders?: OrdersUpdateManyWithoutAuthorNestedInput
    takerFills?: FillsUpdateManyWithoutTakerUserNestedInput
  }

  export type UserUncheckedUpdateWithoutMakerFillsInput = {
    id?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    orders?: OrdersUncheckedUpdateManyWithoutAuthorNestedInput
    takerFills?: FillsUncheckedUpdateManyWithoutTakerUserNestedInput
  }

  export type UserUpsertWithoutTakerFillsInput = {
    update: XOR<UserUpdateWithoutTakerFillsInput, UserUncheckedUpdateWithoutTakerFillsInput>
    create: XOR<UserCreateWithoutTakerFillsInput, UserUncheckedCreateWithoutTakerFillsInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutTakerFillsInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutTakerFillsInput, UserUncheckedUpdateWithoutTakerFillsInput>
  }

  export type UserUpdateWithoutTakerFillsInput = {
    id?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    orders?: OrdersUpdateManyWithoutAuthorNestedInput
    makerFills?: FillsUpdateManyWithoutMakerUserNestedInput
  }

  export type UserUncheckedUpdateWithoutTakerFillsInput = {
    id?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    orders?: OrdersUncheckedUpdateManyWithoutAuthorNestedInput
    makerFills?: FillsUncheckedUpdateManyWithoutMakerUserNestedInput
  }

  export type MarketsUpsertWithoutFillsInput = {
    update: XOR<MarketsUpdateWithoutFillsInput, MarketsUncheckedUpdateWithoutFillsInput>
    create: XOR<MarketsCreateWithoutFillsInput, MarketsUncheckedCreateWithoutFillsInput>
    where?: MarketsWhereInput
  }

  export type MarketsUpdateToOneWithWhereWithoutFillsInput = {
    where?: MarketsWhereInput
    data: XOR<MarketsUpdateWithoutFillsInput, MarketsUncheckedUpdateWithoutFillsInput>
  }

  export type MarketsUpdateWithoutFillsInput = {
    id?: StringFieldUpdateOperationsInput | string
    marketSlug?: StringFieldUpdateOperationsInput | string
    imageUrl?: StringFieldUpdateOperationsInput | string
    orders?: OrdersUpdateManyWithoutMarketNestedInput
  }

  export type MarketsUncheckedUpdateWithoutFillsInput = {
    id?: StringFieldUpdateOperationsInput | string
    marketSlug?: StringFieldUpdateOperationsInput | string
    imageUrl?: StringFieldUpdateOperationsInput | string
    orders?: OrdersUncheckedUpdateManyWithoutMarketNestedInput
  }

  export type OrdersUpsertWithoutMakerFillsInput = {
    update: XOR<OrdersUpdateWithoutMakerFillsInput, OrdersUncheckedUpdateWithoutMakerFillsInput>
    create: XOR<OrdersCreateWithoutMakerFillsInput, OrdersUncheckedCreateWithoutMakerFillsInput>
    where?: OrdersWhereInput
  }

  export type OrdersUpdateToOneWithWhereWithoutMakerFillsInput = {
    where?: OrdersWhereInput
    data: XOR<OrdersUpdateWithoutMakerFillsInput, OrdersUncheckedUpdateWithoutMakerFillsInput>
  }

  export type OrdersUpdateWithoutMakerFillsInput = {
    id?: StringFieldUpdateOperationsInput | string
    type?: EnumTypeFieldUpdateOperationsInput | $Enums.Type
    orderType?: EnumOrderTypeFieldUpdateOperationsInput | $Enums.OrderType
    price?: StringFieldUpdateOperationsInput | string
    equity?: StringFieldUpdateOperationsInput | string
    slippage?: IntFieldUpdateOperationsInput | number
    qty?: StringFieldUpdateOperationsInput | string
    status?: EnumStatusFieldUpdateOperationsInput | $Enums.Status
    initialMargin?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    author?: UserUpdateOneRequiredWithoutOrdersNestedInput
    market?: MarketsUpdateOneRequiredWithoutOrdersNestedInput
    takerFills?: FillsUpdateManyWithoutTakerOrderNestedInput
  }

  export type OrdersUncheckedUpdateWithoutMakerFillsInput = {
    id?: StringFieldUpdateOperationsInput | string
    userID?: StringFieldUpdateOperationsInput | string
    type?: EnumTypeFieldUpdateOperationsInput | $Enums.Type
    orderType?: EnumOrderTypeFieldUpdateOperationsInput | $Enums.OrderType
    marketId?: StringFieldUpdateOperationsInput | string
    price?: StringFieldUpdateOperationsInput | string
    equity?: StringFieldUpdateOperationsInput | string
    slippage?: IntFieldUpdateOperationsInput | number
    qty?: StringFieldUpdateOperationsInput | string
    status?: EnumStatusFieldUpdateOperationsInput | $Enums.Status
    initialMargin?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    takerFills?: FillsUncheckedUpdateManyWithoutTakerOrderNestedInput
  }

  export type OrdersUpsertWithoutTakerFillsInput = {
    update: XOR<OrdersUpdateWithoutTakerFillsInput, OrdersUncheckedUpdateWithoutTakerFillsInput>
    create: XOR<OrdersCreateWithoutTakerFillsInput, OrdersUncheckedCreateWithoutTakerFillsInput>
    where?: OrdersWhereInput
  }

  export type OrdersUpdateToOneWithWhereWithoutTakerFillsInput = {
    where?: OrdersWhereInput
    data: XOR<OrdersUpdateWithoutTakerFillsInput, OrdersUncheckedUpdateWithoutTakerFillsInput>
  }

  export type OrdersUpdateWithoutTakerFillsInput = {
    id?: StringFieldUpdateOperationsInput | string
    type?: EnumTypeFieldUpdateOperationsInput | $Enums.Type
    orderType?: EnumOrderTypeFieldUpdateOperationsInput | $Enums.OrderType
    price?: StringFieldUpdateOperationsInput | string
    equity?: StringFieldUpdateOperationsInput | string
    slippage?: IntFieldUpdateOperationsInput | number
    qty?: StringFieldUpdateOperationsInput | string
    status?: EnumStatusFieldUpdateOperationsInput | $Enums.Status
    initialMargin?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    author?: UserUpdateOneRequiredWithoutOrdersNestedInput
    market?: MarketsUpdateOneRequiredWithoutOrdersNestedInput
    makerFills?: FillsUpdateManyWithoutMakerOrderNestedInput
  }

  export type OrdersUncheckedUpdateWithoutTakerFillsInput = {
    id?: StringFieldUpdateOperationsInput | string
    userID?: StringFieldUpdateOperationsInput | string
    type?: EnumTypeFieldUpdateOperationsInput | $Enums.Type
    orderType?: EnumOrderTypeFieldUpdateOperationsInput | $Enums.OrderType
    marketId?: StringFieldUpdateOperationsInput | string
    price?: StringFieldUpdateOperationsInput | string
    equity?: StringFieldUpdateOperationsInput | string
    slippage?: IntFieldUpdateOperationsInput | number
    qty?: StringFieldUpdateOperationsInput | string
    status?: EnumStatusFieldUpdateOperationsInput | $Enums.Status
    initialMargin?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    makerFills?: FillsUncheckedUpdateManyWithoutMakerOrderNestedInput
  }

  export type OrdersCreateManyAuthorInput = {
    id?: string
    type: $Enums.Type
    orderType: $Enums.OrderType
    marketId: string
    price: string
    equity: string
    slippage: number
    qty: string
    status: $Enums.Status
    initialMargin: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type FillsCreateManyMakerUserInput = {
    id?: string
    taker: string
    marketId: string
    price: string
    qty: string
    makerOrderId: string
    takerOrderId: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type FillsCreateManyTakerUserInput = {
    id?: string
    maker: string
    marketId: string
    price: string
    qty: string
    makerOrderId: string
    takerOrderId: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type OrdersUpdateWithoutAuthorInput = {
    id?: StringFieldUpdateOperationsInput | string
    type?: EnumTypeFieldUpdateOperationsInput | $Enums.Type
    orderType?: EnumOrderTypeFieldUpdateOperationsInput | $Enums.OrderType
    price?: StringFieldUpdateOperationsInput | string
    equity?: StringFieldUpdateOperationsInput | string
    slippage?: IntFieldUpdateOperationsInput | number
    qty?: StringFieldUpdateOperationsInput | string
    status?: EnumStatusFieldUpdateOperationsInput | $Enums.Status
    initialMargin?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    market?: MarketsUpdateOneRequiredWithoutOrdersNestedInput
    makerFills?: FillsUpdateManyWithoutMakerOrderNestedInput
    takerFills?: FillsUpdateManyWithoutTakerOrderNestedInput
  }

  export type OrdersUncheckedUpdateWithoutAuthorInput = {
    id?: StringFieldUpdateOperationsInput | string
    type?: EnumTypeFieldUpdateOperationsInput | $Enums.Type
    orderType?: EnumOrderTypeFieldUpdateOperationsInput | $Enums.OrderType
    marketId?: StringFieldUpdateOperationsInput | string
    price?: StringFieldUpdateOperationsInput | string
    equity?: StringFieldUpdateOperationsInput | string
    slippage?: IntFieldUpdateOperationsInput | number
    qty?: StringFieldUpdateOperationsInput | string
    status?: EnumStatusFieldUpdateOperationsInput | $Enums.Status
    initialMargin?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    makerFills?: FillsUncheckedUpdateManyWithoutMakerOrderNestedInput
    takerFills?: FillsUncheckedUpdateManyWithoutTakerOrderNestedInput
  }

  export type OrdersUncheckedUpdateManyWithoutAuthorInput = {
    id?: StringFieldUpdateOperationsInput | string
    type?: EnumTypeFieldUpdateOperationsInput | $Enums.Type
    orderType?: EnumOrderTypeFieldUpdateOperationsInput | $Enums.OrderType
    marketId?: StringFieldUpdateOperationsInput | string
    price?: StringFieldUpdateOperationsInput | string
    equity?: StringFieldUpdateOperationsInput | string
    slippage?: IntFieldUpdateOperationsInput | number
    qty?: StringFieldUpdateOperationsInput | string
    status?: EnumStatusFieldUpdateOperationsInput | $Enums.Status
    initialMargin?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type FillsUpdateWithoutMakerUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    price?: StringFieldUpdateOperationsInput | string
    qty?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    takerUser?: UserUpdateOneRequiredWithoutTakerFillsNestedInput
    market?: MarketsUpdateOneRequiredWithoutFillsNestedInput
    makerOrder?: OrdersUpdateOneRequiredWithoutMakerFillsNestedInput
    takerOrder?: OrdersUpdateOneRequiredWithoutTakerFillsNestedInput
  }

  export type FillsUncheckedUpdateWithoutMakerUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    taker?: StringFieldUpdateOperationsInput | string
    marketId?: StringFieldUpdateOperationsInput | string
    price?: StringFieldUpdateOperationsInput | string
    qty?: StringFieldUpdateOperationsInput | string
    makerOrderId?: StringFieldUpdateOperationsInput | string
    takerOrderId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type FillsUncheckedUpdateManyWithoutMakerUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    taker?: StringFieldUpdateOperationsInput | string
    marketId?: StringFieldUpdateOperationsInput | string
    price?: StringFieldUpdateOperationsInput | string
    qty?: StringFieldUpdateOperationsInput | string
    makerOrderId?: StringFieldUpdateOperationsInput | string
    takerOrderId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type FillsUpdateWithoutTakerUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    price?: StringFieldUpdateOperationsInput | string
    qty?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    makerUser?: UserUpdateOneRequiredWithoutMakerFillsNestedInput
    market?: MarketsUpdateOneRequiredWithoutFillsNestedInput
    makerOrder?: OrdersUpdateOneRequiredWithoutMakerFillsNestedInput
    takerOrder?: OrdersUpdateOneRequiredWithoutTakerFillsNestedInput
  }

  export type FillsUncheckedUpdateWithoutTakerUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    maker?: StringFieldUpdateOperationsInput | string
    marketId?: StringFieldUpdateOperationsInput | string
    price?: StringFieldUpdateOperationsInput | string
    qty?: StringFieldUpdateOperationsInput | string
    makerOrderId?: StringFieldUpdateOperationsInput | string
    takerOrderId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type FillsUncheckedUpdateManyWithoutTakerUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    maker?: StringFieldUpdateOperationsInput | string
    marketId?: StringFieldUpdateOperationsInput | string
    price?: StringFieldUpdateOperationsInput | string
    qty?: StringFieldUpdateOperationsInput | string
    makerOrderId?: StringFieldUpdateOperationsInput | string
    takerOrderId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type FillsCreateManyMakerOrderInput = {
    id?: string
    maker: string
    taker: string
    marketId: string
    price: string
    qty: string
    takerOrderId: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type FillsCreateManyTakerOrderInput = {
    id?: string
    maker: string
    taker: string
    marketId: string
    price: string
    qty: string
    makerOrderId: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type FillsUpdateWithoutMakerOrderInput = {
    id?: StringFieldUpdateOperationsInput | string
    price?: StringFieldUpdateOperationsInput | string
    qty?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    makerUser?: UserUpdateOneRequiredWithoutMakerFillsNestedInput
    takerUser?: UserUpdateOneRequiredWithoutTakerFillsNestedInput
    market?: MarketsUpdateOneRequiredWithoutFillsNestedInput
    takerOrder?: OrdersUpdateOneRequiredWithoutTakerFillsNestedInput
  }

  export type FillsUncheckedUpdateWithoutMakerOrderInput = {
    id?: StringFieldUpdateOperationsInput | string
    maker?: StringFieldUpdateOperationsInput | string
    taker?: StringFieldUpdateOperationsInput | string
    marketId?: StringFieldUpdateOperationsInput | string
    price?: StringFieldUpdateOperationsInput | string
    qty?: StringFieldUpdateOperationsInput | string
    takerOrderId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type FillsUncheckedUpdateManyWithoutMakerOrderInput = {
    id?: StringFieldUpdateOperationsInput | string
    maker?: StringFieldUpdateOperationsInput | string
    taker?: StringFieldUpdateOperationsInput | string
    marketId?: StringFieldUpdateOperationsInput | string
    price?: StringFieldUpdateOperationsInput | string
    qty?: StringFieldUpdateOperationsInput | string
    takerOrderId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type FillsUpdateWithoutTakerOrderInput = {
    id?: StringFieldUpdateOperationsInput | string
    price?: StringFieldUpdateOperationsInput | string
    qty?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    makerUser?: UserUpdateOneRequiredWithoutMakerFillsNestedInput
    takerUser?: UserUpdateOneRequiredWithoutTakerFillsNestedInput
    market?: MarketsUpdateOneRequiredWithoutFillsNestedInput
    makerOrder?: OrdersUpdateOneRequiredWithoutMakerFillsNestedInput
  }

  export type FillsUncheckedUpdateWithoutTakerOrderInput = {
    id?: StringFieldUpdateOperationsInput | string
    maker?: StringFieldUpdateOperationsInput | string
    taker?: StringFieldUpdateOperationsInput | string
    marketId?: StringFieldUpdateOperationsInput | string
    price?: StringFieldUpdateOperationsInput | string
    qty?: StringFieldUpdateOperationsInput | string
    makerOrderId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type FillsUncheckedUpdateManyWithoutTakerOrderInput = {
    id?: StringFieldUpdateOperationsInput | string
    maker?: StringFieldUpdateOperationsInput | string
    taker?: StringFieldUpdateOperationsInput | string
    marketId?: StringFieldUpdateOperationsInput | string
    price?: StringFieldUpdateOperationsInput | string
    qty?: StringFieldUpdateOperationsInput | string
    makerOrderId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type OrdersCreateManyMarketInput = {
    id?: string
    userID: string
    type: $Enums.Type
    orderType: $Enums.OrderType
    price: string
    equity: string
    slippage: number
    qty: string
    status: $Enums.Status
    initialMargin: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type FillsCreateManyMarketInput = {
    id?: string
    maker: string
    taker: string
    price: string
    qty: string
    makerOrderId: string
    takerOrderId: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type OrdersUpdateWithoutMarketInput = {
    id?: StringFieldUpdateOperationsInput | string
    type?: EnumTypeFieldUpdateOperationsInput | $Enums.Type
    orderType?: EnumOrderTypeFieldUpdateOperationsInput | $Enums.OrderType
    price?: StringFieldUpdateOperationsInput | string
    equity?: StringFieldUpdateOperationsInput | string
    slippage?: IntFieldUpdateOperationsInput | number
    qty?: StringFieldUpdateOperationsInput | string
    status?: EnumStatusFieldUpdateOperationsInput | $Enums.Status
    initialMargin?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    author?: UserUpdateOneRequiredWithoutOrdersNestedInput
    makerFills?: FillsUpdateManyWithoutMakerOrderNestedInput
    takerFills?: FillsUpdateManyWithoutTakerOrderNestedInput
  }

  export type OrdersUncheckedUpdateWithoutMarketInput = {
    id?: StringFieldUpdateOperationsInput | string
    userID?: StringFieldUpdateOperationsInput | string
    type?: EnumTypeFieldUpdateOperationsInput | $Enums.Type
    orderType?: EnumOrderTypeFieldUpdateOperationsInput | $Enums.OrderType
    price?: StringFieldUpdateOperationsInput | string
    equity?: StringFieldUpdateOperationsInput | string
    slippage?: IntFieldUpdateOperationsInput | number
    qty?: StringFieldUpdateOperationsInput | string
    status?: EnumStatusFieldUpdateOperationsInput | $Enums.Status
    initialMargin?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    makerFills?: FillsUncheckedUpdateManyWithoutMakerOrderNestedInput
    takerFills?: FillsUncheckedUpdateManyWithoutTakerOrderNestedInput
  }

  export type OrdersUncheckedUpdateManyWithoutMarketInput = {
    id?: StringFieldUpdateOperationsInput | string
    userID?: StringFieldUpdateOperationsInput | string
    type?: EnumTypeFieldUpdateOperationsInput | $Enums.Type
    orderType?: EnumOrderTypeFieldUpdateOperationsInput | $Enums.OrderType
    price?: StringFieldUpdateOperationsInput | string
    equity?: StringFieldUpdateOperationsInput | string
    slippage?: IntFieldUpdateOperationsInput | number
    qty?: StringFieldUpdateOperationsInput | string
    status?: EnumStatusFieldUpdateOperationsInput | $Enums.Status
    initialMargin?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type FillsUpdateWithoutMarketInput = {
    id?: StringFieldUpdateOperationsInput | string
    price?: StringFieldUpdateOperationsInput | string
    qty?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    makerUser?: UserUpdateOneRequiredWithoutMakerFillsNestedInput
    takerUser?: UserUpdateOneRequiredWithoutTakerFillsNestedInput
    makerOrder?: OrdersUpdateOneRequiredWithoutMakerFillsNestedInput
    takerOrder?: OrdersUpdateOneRequiredWithoutTakerFillsNestedInput
  }

  export type FillsUncheckedUpdateWithoutMarketInput = {
    id?: StringFieldUpdateOperationsInput | string
    maker?: StringFieldUpdateOperationsInput | string
    taker?: StringFieldUpdateOperationsInput | string
    price?: StringFieldUpdateOperationsInput | string
    qty?: StringFieldUpdateOperationsInput | string
    makerOrderId?: StringFieldUpdateOperationsInput | string
    takerOrderId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type FillsUncheckedUpdateManyWithoutMarketInput = {
    id?: StringFieldUpdateOperationsInput | string
    maker?: StringFieldUpdateOperationsInput | string
    taker?: StringFieldUpdateOperationsInput | string
    price?: StringFieldUpdateOperationsInput | string
    qty?: StringFieldUpdateOperationsInput | string
    makerOrderId?: StringFieldUpdateOperationsInput | string
    takerOrderId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
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