
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
 * Model Appointment
 * 
 */
export type Appointment = $Result.DefaultSelection<Prisma.$AppointmentPayload>
/**
 * Model AppointmentSlotLock
 * 
 */
export type AppointmentSlotLock = $Result.DefaultSelection<Prisma.$AppointmentSlotLockPayload>
/**
 * Model AppointmentStatusLog
 * 
 */
export type AppointmentStatusLog = $Result.DefaultSelection<Prisma.$AppointmentStatusLogPayload>
/**
 * Model AppointmentPayment
 * 
 */
export type AppointmentPayment = $Result.DefaultSelection<Prisma.$AppointmentPaymentPayload>
/**
 * Model PackageOrder
 * 
 */
export type PackageOrder = $Result.DefaultSelection<Prisma.$PackageOrderPayload>
/**
 * Model PackageOrderItem
 * 
 */
export type PackageOrderItem = $Result.DefaultSelection<Prisma.$PackageOrderItemPayload>
/**
 * Model PackagePayment
 * 
 */
export type PackagePayment = $Result.DefaultSelection<Prisma.$PackagePaymentPayload>

/**
 * Enums
 */
export namespace $Enums {
  export const AppointmentStatus: {
  PENDING: 'PENDING',
  CONFIRMED: 'CONFIRMED',
  COMPLETED: 'COMPLETED',
  CANCELLED: 'CANCELLED',
  NO_SHOW: 'NO_SHOW'
};

export type AppointmentStatus = (typeof AppointmentStatus)[keyof typeof AppointmentStatus]


export const AppointmentType: {
  IN_PERSON: 'IN_PERSON',
  ONLINE: 'ONLINE'
};

export type AppointmentType = (typeof AppointmentType)[keyof typeof AppointmentType]


export const PaymentStatus: {
  UNPAID: 'UNPAID',
  PAID: 'PAID',
  FAILED: 'FAILED',
  REFUNDED: 'REFUNDED'
};

export type PaymentStatus = (typeof PaymentStatus)[keyof typeof PaymentStatus]


export const CancelledBy: {
  PATIENT: 'PATIENT',
  DOCTOR: 'DOCTOR',
  OUTLET_USER: 'OUTLET_USER',
  SUPER_ADMIN: 'SUPER_ADMIN',
  SYSTEM: 'SYSTEM'
};

export type CancelledBy = (typeof CancelledBy)[keyof typeof CancelledBy]


export const PaymentGateway: {
  SSLCOMMERZ: 'SSLCOMMERZ',
  MANUAL: 'MANUAL'
};

export type PaymentGateway = (typeof PaymentGateway)[keyof typeof PaymentGateway]


export const PackageOrderStatus: {
  PENDING: 'PENDING',
  CONFIRMED: 'CONFIRMED',
  COMPLETED: 'COMPLETED',
  CANCELLED: 'CANCELLED'
};

export type PackageOrderStatus = (typeof PackageOrderStatus)[keyof typeof PackageOrderStatus]


export const PackagePaymentStatus: {
  UNPAID: 'UNPAID',
  PAID: 'PAID',
  FAILED: 'FAILED',
  REFUNDED: 'REFUNDED'
};

export type PackagePaymentStatus = (typeof PackagePaymentStatus)[keyof typeof PackagePaymentStatus]


export const PackagePaymentMethod: {
  SSLCOMMERZ: 'SSLCOMMERZ',
  CASH: 'CASH',
  MANUAL: 'MANUAL'
};

export type PackagePaymentMethod = (typeof PackagePaymentMethod)[keyof typeof PackagePaymentMethod]

}

export type AppointmentStatus = $Enums.AppointmentStatus

export const AppointmentStatus: typeof $Enums.AppointmentStatus

export type AppointmentType = $Enums.AppointmentType

export const AppointmentType: typeof $Enums.AppointmentType

export type PaymentStatus = $Enums.PaymentStatus

export const PaymentStatus: typeof $Enums.PaymentStatus

export type CancelledBy = $Enums.CancelledBy

export const CancelledBy: typeof $Enums.CancelledBy

export type PaymentGateway = $Enums.PaymentGateway

export const PaymentGateway: typeof $Enums.PaymentGateway

export type PackageOrderStatus = $Enums.PackageOrderStatus

export const PackageOrderStatus: typeof $Enums.PackageOrderStatus

export type PackagePaymentStatus = $Enums.PackagePaymentStatus

export const PackagePaymentStatus: typeof $Enums.PackagePaymentStatus

export type PackagePaymentMethod = $Enums.PackagePaymentMethod

export const PackagePaymentMethod: typeof $Enums.PackagePaymentMethod

/**
 * ##  Prisma Client ʲˢ
 *
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more Appointments
 * const appointments = await prisma.appointment.findMany()
 * ```
 *
 *
 * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
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
   * const prisma = new PrismaClient()
   * // Fetch zero or more Appointments
   * const appointments = await prisma.appointment.findMany()
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
   * `prisma.appointment`: Exposes CRUD operations for the **Appointment** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Appointments
    * const appointments = await prisma.appointment.findMany()
    * ```
    */
  get appointment(): Prisma.AppointmentDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.appointmentSlotLock`: Exposes CRUD operations for the **AppointmentSlotLock** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more AppointmentSlotLocks
    * const appointmentSlotLocks = await prisma.appointmentSlotLock.findMany()
    * ```
    */
  get appointmentSlotLock(): Prisma.AppointmentSlotLockDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.appointmentStatusLog`: Exposes CRUD operations for the **AppointmentStatusLog** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more AppointmentStatusLogs
    * const appointmentStatusLogs = await prisma.appointmentStatusLog.findMany()
    * ```
    */
  get appointmentStatusLog(): Prisma.AppointmentStatusLogDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.appointmentPayment`: Exposes CRUD operations for the **AppointmentPayment** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more AppointmentPayments
    * const appointmentPayments = await prisma.appointmentPayment.findMany()
    * ```
    */
  get appointmentPayment(): Prisma.AppointmentPaymentDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.packageOrder`: Exposes CRUD operations for the **PackageOrder** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more PackageOrders
    * const packageOrders = await prisma.packageOrder.findMany()
    * ```
    */
  get packageOrder(): Prisma.PackageOrderDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.packageOrderItem`: Exposes CRUD operations for the **PackageOrderItem** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more PackageOrderItems
    * const packageOrderItems = await prisma.packageOrderItem.findMany()
    * ```
    */
  get packageOrderItem(): Prisma.PackageOrderItemDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.packagePayment`: Exposes CRUD operations for the **PackagePayment** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more PackagePayments
    * const packagePayments = await prisma.packagePayment.findMany()
    * ```
    */
  get packagePayment(): Prisma.PackagePaymentDelegate<ExtArgs, ClientOptions>;
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
   * Prisma Client JS version: 6.19.0
   * Query Engine version: 2ba551f319ab1df4bc874a89965d8b3641056773
   */
  export type PrismaVersion = {
    client: string
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
    Appointment: 'Appointment',
    AppointmentSlotLock: 'AppointmentSlotLock',
    AppointmentStatusLog: 'AppointmentStatusLog',
    AppointmentPayment: 'AppointmentPayment',
    PackageOrder: 'PackageOrder',
    PackageOrderItem: 'PackageOrderItem',
    PackagePayment: 'PackagePayment'
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
      modelProps: "appointment" | "appointmentSlotLock" | "appointmentStatusLog" | "appointmentPayment" | "packageOrder" | "packageOrderItem" | "packagePayment"
      txIsolationLevel: Prisma.TransactionIsolationLevel
    }
    model: {
      Appointment: {
        payload: Prisma.$AppointmentPayload<ExtArgs>
        fields: Prisma.AppointmentFieldRefs
        operations: {
          findUnique: {
            args: Prisma.AppointmentFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AppointmentPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.AppointmentFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AppointmentPayload>
          }
          findFirst: {
            args: Prisma.AppointmentFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AppointmentPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.AppointmentFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AppointmentPayload>
          }
          findMany: {
            args: Prisma.AppointmentFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AppointmentPayload>[]
          }
          create: {
            args: Prisma.AppointmentCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AppointmentPayload>
          }
          createMany: {
            args: Prisma.AppointmentCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.AppointmentDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AppointmentPayload>
          }
          update: {
            args: Prisma.AppointmentUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AppointmentPayload>
          }
          deleteMany: {
            args: Prisma.AppointmentDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.AppointmentUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.AppointmentUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AppointmentPayload>
          }
          aggregate: {
            args: Prisma.AppointmentAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateAppointment>
          }
          groupBy: {
            args: Prisma.AppointmentGroupByArgs<ExtArgs>
            result: $Utils.Optional<AppointmentGroupByOutputType>[]
          }
          count: {
            args: Prisma.AppointmentCountArgs<ExtArgs>
            result: $Utils.Optional<AppointmentCountAggregateOutputType> | number
          }
        }
      }
      AppointmentSlotLock: {
        payload: Prisma.$AppointmentSlotLockPayload<ExtArgs>
        fields: Prisma.AppointmentSlotLockFieldRefs
        operations: {
          findUnique: {
            args: Prisma.AppointmentSlotLockFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AppointmentSlotLockPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.AppointmentSlotLockFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AppointmentSlotLockPayload>
          }
          findFirst: {
            args: Prisma.AppointmentSlotLockFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AppointmentSlotLockPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.AppointmentSlotLockFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AppointmentSlotLockPayload>
          }
          findMany: {
            args: Prisma.AppointmentSlotLockFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AppointmentSlotLockPayload>[]
          }
          create: {
            args: Prisma.AppointmentSlotLockCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AppointmentSlotLockPayload>
          }
          createMany: {
            args: Prisma.AppointmentSlotLockCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.AppointmentSlotLockDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AppointmentSlotLockPayload>
          }
          update: {
            args: Prisma.AppointmentSlotLockUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AppointmentSlotLockPayload>
          }
          deleteMany: {
            args: Prisma.AppointmentSlotLockDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.AppointmentSlotLockUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.AppointmentSlotLockUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AppointmentSlotLockPayload>
          }
          aggregate: {
            args: Prisma.AppointmentSlotLockAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateAppointmentSlotLock>
          }
          groupBy: {
            args: Prisma.AppointmentSlotLockGroupByArgs<ExtArgs>
            result: $Utils.Optional<AppointmentSlotLockGroupByOutputType>[]
          }
          count: {
            args: Prisma.AppointmentSlotLockCountArgs<ExtArgs>
            result: $Utils.Optional<AppointmentSlotLockCountAggregateOutputType> | number
          }
        }
      }
      AppointmentStatusLog: {
        payload: Prisma.$AppointmentStatusLogPayload<ExtArgs>
        fields: Prisma.AppointmentStatusLogFieldRefs
        operations: {
          findUnique: {
            args: Prisma.AppointmentStatusLogFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AppointmentStatusLogPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.AppointmentStatusLogFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AppointmentStatusLogPayload>
          }
          findFirst: {
            args: Prisma.AppointmentStatusLogFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AppointmentStatusLogPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.AppointmentStatusLogFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AppointmentStatusLogPayload>
          }
          findMany: {
            args: Prisma.AppointmentStatusLogFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AppointmentStatusLogPayload>[]
          }
          create: {
            args: Prisma.AppointmentStatusLogCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AppointmentStatusLogPayload>
          }
          createMany: {
            args: Prisma.AppointmentStatusLogCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.AppointmentStatusLogDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AppointmentStatusLogPayload>
          }
          update: {
            args: Prisma.AppointmentStatusLogUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AppointmentStatusLogPayload>
          }
          deleteMany: {
            args: Prisma.AppointmentStatusLogDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.AppointmentStatusLogUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.AppointmentStatusLogUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AppointmentStatusLogPayload>
          }
          aggregate: {
            args: Prisma.AppointmentStatusLogAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateAppointmentStatusLog>
          }
          groupBy: {
            args: Prisma.AppointmentStatusLogGroupByArgs<ExtArgs>
            result: $Utils.Optional<AppointmentStatusLogGroupByOutputType>[]
          }
          count: {
            args: Prisma.AppointmentStatusLogCountArgs<ExtArgs>
            result: $Utils.Optional<AppointmentStatusLogCountAggregateOutputType> | number
          }
        }
      }
      AppointmentPayment: {
        payload: Prisma.$AppointmentPaymentPayload<ExtArgs>
        fields: Prisma.AppointmentPaymentFieldRefs
        operations: {
          findUnique: {
            args: Prisma.AppointmentPaymentFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AppointmentPaymentPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.AppointmentPaymentFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AppointmentPaymentPayload>
          }
          findFirst: {
            args: Prisma.AppointmentPaymentFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AppointmentPaymentPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.AppointmentPaymentFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AppointmentPaymentPayload>
          }
          findMany: {
            args: Prisma.AppointmentPaymentFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AppointmentPaymentPayload>[]
          }
          create: {
            args: Prisma.AppointmentPaymentCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AppointmentPaymentPayload>
          }
          createMany: {
            args: Prisma.AppointmentPaymentCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.AppointmentPaymentDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AppointmentPaymentPayload>
          }
          update: {
            args: Prisma.AppointmentPaymentUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AppointmentPaymentPayload>
          }
          deleteMany: {
            args: Prisma.AppointmentPaymentDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.AppointmentPaymentUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.AppointmentPaymentUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AppointmentPaymentPayload>
          }
          aggregate: {
            args: Prisma.AppointmentPaymentAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateAppointmentPayment>
          }
          groupBy: {
            args: Prisma.AppointmentPaymentGroupByArgs<ExtArgs>
            result: $Utils.Optional<AppointmentPaymentGroupByOutputType>[]
          }
          count: {
            args: Prisma.AppointmentPaymentCountArgs<ExtArgs>
            result: $Utils.Optional<AppointmentPaymentCountAggregateOutputType> | number
          }
        }
      }
      PackageOrder: {
        payload: Prisma.$PackageOrderPayload<ExtArgs>
        fields: Prisma.PackageOrderFieldRefs
        operations: {
          findUnique: {
            args: Prisma.PackageOrderFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PackageOrderPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.PackageOrderFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PackageOrderPayload>
          }
          findFirst: {
            args: Prisma.PackageOrderFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PackageOrderPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.PackageOrderFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PackageOrderPayload>
          }
          findMany: {
            args: Prisma.PackageOrderFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PackageOrderPayload>[]
          }
          create: {
            args: Prisma.PackageOrderCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PackageOrderPayload>
          }
          createMany: {
            args: Prisma.PackageOrderCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.PackageOrderDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PackageOrderPayload>
          }
          update: {
            args: Prisma.PackageOrderUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PackageOrderPayload>
          }
          deleteMany: {
            args: Prisma.PackageOrderDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.PackageOrderUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.PackageOrderUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PackageOrderPayload>
          }
          aggregate: {
            args: Prisma.PackageOrderAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregatePackageOrder>
          }
          groupBy: {
            args: Prisma.PackageOrderGroupByArgs<ExtArgs>
            result: $Utils.Optional<PackageOrderGroupByOutputType>[]
          }
          count: {
            args: Prisma.PackageOrderCountArgs<ExtArgs>
            result: $Utils.Optional<PackageOrderCountAggregateOutputType> | number
          }
        }
      }
      PackageOrderItem: {
        payload: Prisma.$PackageOrderItemPayload<ExtArgs>
        fields: Prisma.PackageOrderItemFieldRefs
        operations: {
          findUnique: {
            args: Prisma.PackageOrderItemFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PackageOrderItemPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.PackageOrderItemFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PackageOrderItemPayload>
          }
          findFirst: {
            args: Prisma.PackageOrderItemFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PackageOrderItemPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.PackageOrderItemFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PackageOrderItemPayload>
          }
          findMany: {
            args: Prisma.PackageOrderItemFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PackageOrderItemPayload>[]
          }
          create: {
            args: Prisma.PackageOrderItemCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PackageOrderItemPayload>
          }
          createMany: {
            args: Prisma.PackageOrderItemCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.PackageOrderItemDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PackageOrderItemPayload>
          }
          update: {
            args: Prisma.PackageOrderItemUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PackageOrderItemPayload>
          }
          deleteMany: {
            args: Prisma.PackageOrderItemDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.PackageOrderItemUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.PackageOrderItemUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PackageOrderItemPayload>
          }
          aggregate: {
            args: Prisma.PackageOrderItemAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregatePackageOrderItem>
          }
          groupBy: {
            args: Prisma.PackageOrderItemGroupByArgs<ExtArgs>
            result: $Utils.Optional<PackageOrderItemGroupByOutputType>[]
          }
          count: {
            args: Prisma.PackageOrderItemCountArgs<ExtArgs>
            result: $Utils.Optional<PackageOrderItemCountAggregateOutputType> | number
          }
        }
      }
      PackagePayment: {
        payload: Prisma.$PackagePaymentPayload<ExtArgs>
        fields: Prisma.PackagePaymentFieldRefs
        operations: {
          findUnique: {
            args: Prisma.PackagePaymentFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PackagePaymentPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.PackagePaymentFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PackagePaymentPayload>
          }
          findFirst: {
            args: Prisma.PackagePaymentFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PackagePaymentPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.PackagePaymentFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PackagePaymentPayload>
          }
          findMany: {
            args: Prisma.PackagePaymentFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PackagePaymentPayload>[]
          }
          create: {
            args: Prisma.PackagePaymentCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PackagePaymentPayload>
          }
          createMany: {
            args: Prisma.PackagePaymentCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.PackagePaymentDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PackagePaymentPayload>
          }
          update: {
            args: Prisma.PackagePaymentUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PackagePaymentPayload>
          }
          deleteMany: {
            args: Prisma.PackagePaymentDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.PackagePaymentUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.PackagePaymentUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PackagePaymentPayload>
          }
          aggregate: {
            args: Prisma.PackagePaymentAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregatePackagePayment>
          }
          groupBy: {
            args: Prisma.PackagePaymentGroupByArgs<ExtArgs>
            result: $Utils.Optional<PackagePaymentGroupByOutputType>[]
          }
          count: {
            args: Prisma.PackagePaymentCountArgs<ExtArgs>
            result: $Utils.Optional<PackagePaymentCountAggregateOutputType> | number
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
     * Instance of a Driver Adapter, e.g., like one provided by `@prisma/adapter-planetscale`
     */
    adapter?: runtime.SqlDriverAdapterFactory | null
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
    appointment?: AppointmentOmit
    appointmentSlotLock?: AppointmentSlotLockOmit
    appointmentStatusLog?: AppointmentStatusLogOmit
    appointmentPayment?: AppointmentPaymentOmit
    packageOrder?: PackageOrderOmit
    packageOrderItem?: PackageOrderItemOmit
    packagePayment?: PackagePaymentOmit
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
   * Count Type AppointmentCountOutputType
   */

  export type AppointmentCountOutputType = {
    statusLogs: number
  }

  export type AppointmentCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    statusLogs?: boolean | AppointmentCountOutputTypeCountStatusLogsArgs
  }

  // Custom InputTypes
  /**
   * AppointmentCountOutputType without action
   */
  export type AppointmentCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AppointmentCountOutputType
     */
    select?: AppointmentCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * AppointmentCountOutputType without action
   */
  export type AppointmentCountOutputTypeCountStatusLogsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: AppointmentStatusLogWhereInput
  }


  /**
   * Count Type PackageOrderCountOutputType
   */

  export type PackageOrderCountOutputType = {
    items: number
  }

  export type PackageOrderCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    items?: boolean | PackageOrderCountOutputTypeCountItemsArgs
  }

  // Custom InputTypes
  /**
   * PackageOrderCountOutputType without action
   */
  export type PackageOrderCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PackageOrderCountOutputType
     */
    select?: PackageOrderCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * PackageOrderCountOutputType without action
   */
  export type PackageOrderCountOutputTypeCountItemsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: PackageOrderItemWhereInput
  }


  /**
   * Models
   */

  /**
   * Model Appointment
   */

  export type AggregateAppointment = {
    _count: AppointmentCountAggregateOutputType | null
    _avg: AppointmentAvgAggregateOutputType | null
    _sum: AppointmentSumAggregateOutputType | null
    _min: AppointmentMinAggregateOutputType | null
    _max: AppointmentMaxAggregateOutputType | null
  }

  export type AppointmentAvgAggregateOutputType = {
    consultationFee: Decimal | null
  }

  export type AppointmentSumAggregateOutputType = {
    consultationFee: Decimal | null
  }

  export type AppointmentMinAggregateOutputType = {
    id: string | null
    appointmentCode: string | null
    doctorId: string | null
    patientId: string | null
    outletId: string | null
    appointmentDate: Date | null
    startTime: Date | null
    endTime: Date | null
    type: $Enums.AppointmentType | null
    status: $Enums.AppointmentStatus | null
    consultationFee: Decimal | null
    paymentStatus: $Enums.PaymentStatus | null
    reason: string | null
    patientNotes: string | null
    doctorNotes: string | null
    cancelledBy: $Enums.CancelledBy | null
    cancellationReason: string | null
    cancelledAt: Date | null
    confirmedAt: Date | null
    completedAt: Date | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type AppointmentMaxAggregateOutputType = {
    id: string | null
    appointmentCode: string | null
    doctorId: string | null
    patientId: string | null
    outletId: string | null
    appointmentDate: Date | null
    startTime: Date | null
    endTime: Date | null
    type: $Enums.AppointmentType | null
    status: $Enums.AppointmentStatus | null
    consultationFee: Decimal | null
    paymentStatus: $Enums.PaymentStatus | null
    reason: string | null
    patientNotes: string | null
    doctorNotes: string | null
    cancelledBy: $Enums.CancelledBy | null
    cancellationReason: string | null
    cancelledAt: Date | null
    confirmedAt: Date | null
    completedAt: Date | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type AppointmentCountAggregateOutputType = {
    id: number
    appointmentCode: number
    doctorId: number
    patientId: number
    outletId: number
    appointmentDate: number
    startTime: number
    endTime: number
    type: number
    status: number
    consultationFee: number
    paymentStatus: number
    reason: number
    patientNotes: number
    doctorNotes: number
    cancelledBy: number
    cancellationReason: number
    cancelledAt: number
    confirmedAt: number
    completedAt: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type AppointmentAvgAggregateInputType = {
    consultationFee?: true
  }

  export type AppointmentSumAggregateInputType = {
    consultationFee?: true
  }

  export type AppointmentMinAggregateInputType = {
    id?: true
    appointmentCode?: true
    doctorId?: true
    patientId?: true
    outletId?: true
    appointmentDate?: true
    startTime?: true
    endTime?: true
    type?: true
    status?: true
    consultationFee?: true
    paymentStatus?: true
    reason?: true
    patientNotes?: true
    doctorNotes?: true
    cancelledBy?: true
    cancellationReason?: true
    cancelledAt?: true
    confirmedAt?: true
    completedAt?: true
    createdAt?: true
    updatedAt?: true
  }

  export type AppointmentMaxAggregateInputType = {
    id?: true
    appointmentCode?: true
    doctorId?: true
    patientId?: true
    outletId?: true
    appointmentDate?: true
    startTime?: true
    endTime?: true
    type?: true
    status?: true
    consultationFee?: true
    paymentStatus?: true
    reason?: true
    patientNotes?: true
    doctorNotes?: true
    cancelledBy?: true
    cancellationReason?: true
    cancelledAt?: true
    confirmedAt?: true
    completedAt?: true
    createdAt?: true
    updatedAt?: true
  }

  export type AppointmentCountAggregateInputType = {
    id?: true
    appointmentCode?: true
    doctorId?: true
    patientId?: true
    outletId?: true
    appointmentDate?: true
    startTime?: true
    endTime?: true
    type?: true
    status?: true
    consultationFee?: true
    paymentStatus?: true
    reason?: true
    patientNotes?: true
    doctorNotes?: true
    cancelledBy?: true
    cancellationReason?: true
    cancelledAt?: true
    confirmedAt?: true
    completedAt?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type AppointmentAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Appointment to aggregate.
     */
    where?: AppointmentWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Appointments to fetch.
     */
    orderBy?: AppointmentOrderByWithRelationInput | AppointmentOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: AppointmentWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Appointments from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Appointments.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Appointments
    **/
    _count?: true | AppointmentCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: AppointmentAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: AppointmentSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: AppointmentMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: AppointmentMaxAggregateInputType
  }

  export type GetAppointmentAggregateType<T extends AppointmentAggregateArgs> = {
        [P in keyof T & keyof AggregateAppointment]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateAppointment[P]>
      : GetScalarType<T[P], AggregateAppointment[P]>
  }




  export type AppointmentGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: AppointmentWhereInput
    orderBy?: AppointmentOrderByWithAggregationInput | AppointmentOrderByWithAggregationInput[]
    by: AppointmentScalarFieldEnum[] | AppointmentScalarFieldEnum
    having?: AppointmentScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: AppointmentCountAggregateInputType | true
    _avg?: AppointmentAvgAggregateInputType
    _sum?: AppointmentSumAggregateInputType
    _min?: AppointmentMinAggregateInputType
    _max?: AppointmentMaxAggregateInputType
  }

  export type AppointmentGroupByOutputType = {
    id: string
    appointmentCode: string
    doctorId: string
    patientId: string
    outletId: string | null
    appointmentDate: Date
    startTime: Date
    endTime: Date
    type: $Enums.AppointmentType
    status: $Enums.AppointmentStatus
    consultationFee: Decimal | null
    paymentStatus: $Enums.PaymentStatus
    reason: string | null
    patientNotes: string | null
    doctorNotes: string | null
    cancelledBy: $Enums.CancelledBy | null
    cancellationReason: string | null
    cancelledAt: Date | null
    confirmedAt: Date | null
    completedAt: Date | null
    createdAt: Date
    updatedAt: Date
    _count: AppointmentCountAggregateOutputType | null
    _avg: AppointmentAvgAggregateOutputType | null
    _sum: AppointmentSumAggregateOutputType | null
    _min: AppointmentMinAggregateOutputType | null
    _max: AppointmentMaxAggregateOutputType | null
  }

  type GetAppointmentGroupByPayload<T extends AppointmentGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<AppointmentGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof AppointmentGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], AppointmentGroupByOutputType[P]>
            : GetScalarType<T[P], AppointmentGroupByOutputType[P]>
        }
      >
    >


  export type AppointmentSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    appointmentCode?: boolean
    doctorId?: boolean
    patientId?: boolean
    outletId?: boolean
    appointmentDate?: boolean
    startTime?: boolean
    endTime?: boolean
    type?: boolean
    status?: boolean
    consultationFee?: boolean
    paymentStatus?: boolean
    reason?: boolean
    patientNotes?: boolean
    doctorNotes?: boolean
    cancelledBy?: boolean
    cancellationReason?: boolean
    cancelledAt?: boolean
    confirmedAt?: boolean
    completedAt?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    slotLock?: boolean | Appointment$slotLockArgs<ExtArgs>
    statusLogs?: boolean | Appointment$statusLogsArgs<ExtArgs>
    payment?: boolean | Appointment$paymentArgs<ExtArgs>
    _count?: boolean | AppointmentCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["appointment"]>



  export type AppointmentSelectScalar = {
    id?: boolean
    appointmentCode?: boolean
    doctorId?: boolean
    patientId?: boolean
    outletId?: boolean
    appointmentDate?: boolean
    startTime?: boolean
    endTime?: boolean
    type?: boolean
    status?: boolean
    consultationFee?: boolean
    paymentStatus?: boolean
    reason?: boolean
    patientNotes?: boolean
    doctorNotes?: boolean
    cancelledBy?: boolean
    cancellationReason?: boolean
    cancelledAt?: boolean
    confirmedAt?: boolean
    completedAt?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type AppointmentOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "appointmentCode" | "doctorId" | "patientId" | "outletId" | "appointmentDate" | "startTime" | "endTime" | "type" | "status" | "consultationFee" | "paymentStatus" | "reason" | "patientNotes" | "doctorNotes" | "cancelledBy" | "cancellationReason" | "cancelledAt" | "confirmedAt" | "completedAt" | "createdAt" | "updatedAt", ExtArgs["result"]["appointment"]>
  export type AppointmentInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    slotLock?: boolean | Appointment$slotLockArgs<ExtArgs>
    statusLogs?: boolean | Appointment$statusLogsArgs<ExtArgs>
    payment?: boolean | Appointment$paymentArgs<ExtArgs>
    _count?: boolean | AppointmentCountOutputTypeDefaultArgs<ExtArgs>
  }

  export type $AppointmentPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Appointment"
    objects: {
      slotLock: Prisma.$AppointmentSlotLockPayload<ExtArgs> | null
      statusLogs: Prisma.$AppointmentStatusLogPayload<ExtArgs>[]
      payment: Prisma.$AppointmentPaymentPayload<ExtArgs> | null
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      appointmentCode: string
      doctorId: string
      patientId: string
      outletId: string | null
      appointmentDate: Date
      startTime: Date
      endTime: Date
      type: $Enums.AppointmentType
      status: $Enums.AppointmentStatus
      consultationFee: Prisma.Decimal | null
      paymentStatus: $Enums.PaymentStatus
      reason: string | null
      patientNotes: string | null
      doctorNotes: string | null
      cancelledBy: $Enums.CancelledBy | null
      cancellationReason: string | null
      cancelledAt: Date | null
      confirmedAt: Date | null
      completedAt: Date | null
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["appointment"]>
    composites: {}
  }

  type AppointmentGetPayload<S extends boolean | null | undefined | AppointmentDefaultArgs> = $Result.GetResult<Prisma.$AppointmentPayload, S>

  type AppointmentCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<AppointmentFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: AppointmentCountAggregateInputType | true
    }

  export interface AppointmentDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Appointment'], meta: { name: 'Appointment' } }
    /**
     * Find zero or one Appointment that matches the filter.
     * @param {AppointmentFindUniqueArgs} args - Arguments to find a Appointment
     * @example
     * // Get one Appointment
     * const appointment = await prisma.appointment.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends AppointmentFindUniqueArgs>(args: SelectSubset<T, AppointmentFindUniqueArgs<ExtArgs>>): Prisma__AppointmentClient<$Result.GetResult<Prisma.$AppointmentPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Appointment that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {AppointmentFindUniqueOrThrowArgs} args - Arguments to find a Appointment
     * @example
     * // Get one Appointment
     * const appointment = await prisma.appointment.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends AppointmentFindUniqueOrThrowArgs>(args: SelectSubset<T, AppointmentFindUniqueOrThrowArgs<ExtArgs>>): Prisma__AppointmentClient<$Result.GetResult<Prisma.$AppointmentPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Appointment that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AppointmentFindFirstArgs} args - Arguments to find a Appointment
     * @example
     * // Get one Appointment
     * const appointment = await prisma.appointment.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends AppointmentFindFirstArgs>(args?: SelectSubset<T, AppointmentFindFirstArgs<ExtArgs>>): Prisma__AppointmentClient<$Result.GetResult<Prisma.$AppointmentPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Appointment that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AppointmentFindFirstOrThrowArgs} args - Arguments to find a Appointment
     * @example
     * // Get one Appointment
     * const appointment = await prisma.appointment.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends AppointmentFindFirstOrThrowArgs>(args?: SelectSubset<T, AppointmentFindFirstOrThrowArgs<ExtArgs>>): Prisma__AppointmentClient<$Result.GetResult<Prisma.$AppointmentPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Appointments that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AppointmentFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Appointments
     * const appointments = await prisma.appointment.findMany()
     * 
     * // Get first 10 Appointments
     * const appointments = await prisma.appointment.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const appointmentWithIdOnly = await prisma.appointment.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends AppointmentFindManyArgs>(args?: SelectSubset<T, AppointmentFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AppointmentPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Appointment.
     * @param {AppointmentCreateArgs} args - Arguments to create a Appointment.
     * @example
     * // Create one Appointment
     * const Appointment = await prisma.appointment.create({
     *   data: {
     *     // ... data to create a Appointment
     *   }
     * })
     * 
     */
    create<T extends AppointmentCreateArgs>(args: SelectSubset<T, AppointmentCreateArgs<ExtArgs>>): Prisma__AppointmentClient<$Result.GetResult<Prisma.$AppointmentPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Appointments.
     * @param {AppointmentCreateManyArgs} args - Arguments to create many Appointments.
     * @example
     * // Create many Appointments
     * const appointment = await prisma.appointment.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends AppointmentCreateManyArgs>(args?: SelectSubset<T, AppointmentCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Appointment.
     * @param {AppointmentDeleteArgs} args - Arguments to delete one Appointment.
     * @example
     * // Delete one Appointment
     * const Appointment = await prisma.appointment.delete({
     *   where: {
     *     // ... filter to delete one Appointment
     *   }
     * })
     * 
     */
    delete<T extends AppointmentDeleteArgs>(args: SelectSubset<T, AppointmentDeleteArgs<ExtArgs>>): Prisma__AppointmentClient<$Result.GetResult<Prisma.$AppointmentPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Appointment.
     * @param {AppointmentUpdateArgs} args - Arguments to update one Appointment.
     * @example
     * // Update one Appointment
     * const appointment = await prisma.appointment.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends AppointmentUpdateArgs>(args: SelectSubset<T, AppointmentUpdateArgs<ExtArgs>>): Prisma__AppointmentClient<$Result.GetResult<Prisma.$AppointmentPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Appointments.
     * @param {AppointmentDeleteManyArgs} args - Arguments to filter Appointments to delete.
     * @example
     * // Delete a few Appointments
     * const { count } = await prisma.appointment.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends AppointmentDeleteManyArgs>(args?: SelectSubset<T, AppointmentDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Appointments.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AppointmentUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Appointments
     * const appointment = await prisma.appointment.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends AppointmentUpdateManyArgs>(args: SelectSubset<T, AppointmentUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Appointment.
     * @param {AppointmentUpsertArgs} args - Arguments to update or create a Appointment.
     * @example
     * // Update or create a Appointment
     * const appointment = await prisma.appointment.upsert({
     *   create: {
     *     // ... data to create a Appointment
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Appointment we want to update
     *   }
     * })
     */
    upsert<T extends AppointmentUpsertArgs>(args: SelectSubset<T, AppointmentUpsertArgs<ExtArgs>>): Prisma__AppointmentClient<$Result.GetResult<Prisma.$AppointmentPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Appointments.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AppointmentCountArgs} args - Arguments to filter Appointments to count.
     * @example
     * // Count the number of Appointments
     * const count = await prisma.appointment.count({
     *   where: {
     *     // ... the filter for the Appointments we want to count
     *   }
     * })
    **/
    count<T extends AppointmentCountArgs>(
      args?: Subset<T, AppointmentCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], AppointmentCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Appointment.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AppointmentAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends AppointmentAggregateArgs>(args: Subset<T, AppointmentAggregateArgs>): Prisma.PrismaPromise<GetAppointmentAggregateType<T>>

    /**
     * Group by Appointment.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AppointmentGroupByArgs} args - Group by arguments.
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
      T extends AppointmentGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: AppointmentGroupByArgs['orderBy'] }
        : { orderBy?: AppointmentGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, AppointmentGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetAppointmentGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Appointment model
   */
  readonly fields: AppointmentFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Appointment.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__AppointmentClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    slotLock<T extends Appointment$slotLockArgs<ExtArgs> = {}>(args?: Subset<T, Appointment$slotLockArgs<ExtArgs>>): Prisma__AppointmentSlotLockClient<$Result.GetResult<Prisma.$AppointmentSlotLockPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    statusLogs<T extends Appointment$statusLogsArgs<ExtArgs> = {}>(args?: Subset<T, Appointment$statusLogsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AppointmentStatusLogPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    payment<T extends Appointment$paymentArgs<ExtArgs> = {}>(args?: Subset<T, Appointment$paymentArgs<ExtArgs>>): Prisma__AppointmentPaymentClient<$Result.GetResult<Prisma.$AppointmentPaymentPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the Appointment model
   */
  interface AppointmentFieldRefs {
    readonly id: FieldRef<"Appointment", 'String'>
    readonly appointmentCode: FieldRef<"Appointment", 'String'>
    readonly doctorId: FieldRef<"Appointment", 'String'>
    readonly patientId: FieldRef<"Appointment", 'String'>
    readonly outletId: FieldRef<"Appointment", 'String'>
    readonly appointmentDate: FieldRef<"Appointment", 'DateTime'>
    readonly startTime: FieldRef<"Appointment", 'DateTime'>
    readonly endTime: FieldRef<"Appointment", 'DateTime'>
    readonly type: FieldRef<"Appointment", 'AppointmentType'>
    readonly status: FieldRef<"Appointment", 'AppointmentStatus'>
    readonly consultationFee: FieldRef<"Appointment", 'Decimal'>
    readonly paymentStatus: FieldRef<"Appointment", 'PaymentStatus'>
    readonly reason: FieldRef<"Appointment", 'String'>
    readonly patientNotes: FieldRef<"Appointment", 'String'>
    readonly doctorNotes: FieldRef<"Appointment", 'String'>
    readonly cancelledBy: FieldRef<"Appointment", 'CancelledBy'>
    readonly cancellationReason: FieldRef<"Appointment", 'String'>
    readonly cancelledAt: FieldRef<"Appointment", 'DateTime'>
    readonly confirmedAt: FieldRef<"Appointment", 'DateTime'>
    readonly completedAt: FieldRef<"Appointment", 'DateTime'>
    readonly createdAt: FieldRef<"Appointment", 'DateTime'>
    readonly updatedAt: FieldRef<"Appointment", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Appointment findUnique
   */
  export type AppointmentFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Appointment
     */
    select?: AppointmentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Appointment
     */
    omit?: AppointmentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AppointmentInclude<ExtArgs> | null
    /**
     * Filter, which Appointment to fetch.
     */
    where: AppointmentWhereUniqueInput
  }

  /**
   * Appointment findUniqueOrThrow
   */
  export type AppointmentFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Appointment
     */
    select?: AppointmentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Appointment
     */
    omit?: AppointmentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AppointmentInclude<ExtArgs> | null
    /**
     * Filter, which Appointment to fetch.
     */
    where: AppointmentWhereUniqueInput
  }

  /**
   * Appointment findFirst
   */
  export type AppointmentFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Appointment
     */
    select?: AppointmentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Appointment
     */
    omit?: AppointmentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AppointmentInclude<ExtArgs> | null
    /**
     * Filter, which Appointment to fetch.
     */
    where?: AppointmentWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Appointments to fetch.
     */
    orderBy?: AppointmentOrderByWithRelationInput | AppointmentOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Appointments.
     */
    cursor?: AppointmentWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Appointments from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Appointments.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Appointments.
     */
    distinct?: AppointmentScalarFieldEnum | AppointmentScalarFieldEnum[]
  }

  /**
   * Appointment findFirstOrThrow
   */
  export type AppointmentFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Appointment
     */
    select?: AppointmentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Appointment
     */
    omit?: AppointmentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AppointmentInclude<ExtArgs> | null
    /**
     * Filter, which Appointment to fetch.
     */
    where?: AppointmentWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Appointments to fetch.
     */
    orderBy?: AppointmentOrderByWithRelationInput | AppointmentOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Appointments.
     */
    cursor?: AppointmentWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Appointments from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Appointments.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Appointments.
     */
    distinct?: AppointmentScalarFieldEnum | AppointmentScalarFieldEnum[]
  }

  /**
   * Appointment findMany
   */
  export type AppointmentFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Appointment
     */
    select?: AppointmentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Appointment
     */
    omit?: AppointmentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AppointmentInclude<ExtArgs> | null
    /**
     * Filter, which Appointments to fetch.
     */
    where?: AppointmentWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Appointments to fetch.
     */
    orderBy?: AppointmentOrderByWithRelationInput | AppointmentOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Appointments.
     */
    cursor?: AppointmentWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Appointments from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Appointments.
     */
    skip?: number
    distinct?: AppointmentScalarFieldEnum | AppointmentScalarFieldEnum[]
  }

  /**
   * Appointment create
   */
  export type AppointmentCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Appointment
     */
    select?: AppointmentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Appointment
     */
    omit?: AppointmentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AppointmentInclude<ExtArgs> | null
    /**
     * The data needed to create a Appointment.
     */
    data: XOR<AppointmentCreateInput, AppointmentUncheckedCreateInput>
  }

  /**
   * Appointment createMany
   */
  export type AppointmentCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Appointments.
     */
    data: AppointmentCreateManyInput | AppointmentCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Appointment update
   */
  export type AppointmentUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Appointment
     */
    select?: AppointmentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Appointment
     */
    omit?: AppointmentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AppointmentInclude<ExtArgs> | null
    /**
     * The data needed to update a Appointment.
     */
    data: XOR<AppointmentUpdateInput, AppointmentUncheckedUpdateInput>
    /**
     * Choose, which Appointment to update.
     */
    where: AppointmentWhereUniqueInput
  }

  /**
   * Appointment updateMany
   */
  export type AppointmentUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Appointments.
     */
    data: XOR<AppointmentUpdateManyMutationInput, AppointmentUncheckedUpdateManyInput>
    /**
     * Filter which Appointments to update
     */
    where?: AppointmentWhereInput
    /**
     * Limit how many Appointments to update.
     */
    limit?: number
  }

  /**
   * Appointment upsert
   */
  export type AppointmentUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Appointment
     */
    select?: AppointmentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Appointment
     */
    omit?: AppointmentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AppointmentInclude<ExtArgs> | null
    /**
     * The filter to search for the Appointment to update in case it exists.
     */
    where: AppointmentWhereUniqueInput
    /**
     * In case the Appointment found by the `where` argument doesn't exist, create a new Appointment with this data.
     */
    create: XOR<AppointmentCreateInput, AppointmentUncheckedCreateInput>
    /**
     * In case the Appointment was found with the provided `where` argument, update it with this data.
     */
    update: XOR<AppointmentUpdateInput, AppointmentUncheckedUpdateInput>
  }

  /**
   * Appointment delete
   */
  export type AppointmentDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Appointment
     */
    select?: AppointmentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Appointment
     */
    omit?: AppointmentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AppointmentInclude<ExtArgs> | null
    /**
     * Filter which Appointment to delete.
     */
    where: AppointmentWhereUniqueInput
  }

  /**
   * Appointment deleteMany
   */
  export type AppointmentDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Appointments to delete
     */
    where?: AppointmentWhereInput
    /**
     * Limit how many Appointments to delete.
     */
    limit?: number
  }

  /**
   * Appointment.slotLock
   */
  export type Appointment$slotLockArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AppointmentSlotLock
     */
    select?: AppointmentSlotLockSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AppointmentSlotLock
     */
    omit?: AppointmentSlotLockOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AppointmentSlotLockInclude<ExtArgs> | null
    where?: AppointmentSlotLockWhereInput
  }

  /**
   * Appointment.statusLogs
   */
  export type Appointment$statusLogsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AppointmentStatusLog
     */
    select?: AppointmentStatusLogSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AppointmentStatusLog
     */
    omit?: AppointmentStatusLogOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AppointmentStatusLogInclude<ExtArgs> | null
    where?: AppointmentStatusLogWhereInput
    orderBy?: AppointmentStatusLogOrderByWithRelationInput | AppointmentStatusLogOrderByWithRelationInput[]
    cursor?: AppointmentStatusLogWhereUniqueInput
    take?: number
    skip?: number
    distinct?: AppointmentStatusLogScalarFieldEnum | AppointmentStatusLogScalarFieldEnum[]
  }

  /**
   * Appointment.payment
   */
  export type Appointment$paymentArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AppointmentPayment
     */
    select?: AppointmentPaymentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AppointmentPayment
     */
    omit?: AppointmentPaymentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AppointmentPaymentInclude<ExtArgs> | null
    where?: AppointmentPaymentWhereInput
  }

  /**
   * Appointment without action
   */
  export type AppointmentDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Appointment
     */
    select?: AppointmentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Appointment
     */
    omit?: AppointmentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AppointmentInclude<ExtArgs> | null
  }


  /**
   * Model AppointmentSlotLock
   */

  export type AggregateAppointmentSlotLock = {
    _count: AppointmentSlotLockCountAggregateOutputType | null
    _min: AppointmentSlotLockMinAggregateOutputType | null
    _max: AppointmentSlotLockMaxAggregateOutputType | null
  }

  export type AppointmentSlotLockMinAggregateOutputType = {
    id: string | null
    doctorId: string | null
    startTime: Date | null
    appointmentId: string | null
    createdAt: Date | null
  }

  export type AppointmentSlotLockMaxAggregateOutputType = {
    id: string | null
    doctorId: string | null
    startTime: Date | null
    appointmentId: string | null
    createdAt: Date | null
  }

  export type AppointmentSlotLockCountAggregateOutputType = {
    id: number
    doctorId: number
    startTime: number
    appointmentId: number
    createdAt: number
    _all: number
  }


  export type AppointmentSlotLockMinAggregateInputType = {
    id?: true
    doctorId?: true
    startTime?: true
    appointmentId?: true
    createdAt?: true
  }

  export type AppointmentSlotLockMaxAggregateInputType = {
    id?: true
    doctorId?: true
    startTime?: true
    appointmentId?: true
    createdAt?: true
  }

  export type AppointmentSlotLockCountAggregateInputType = {
    id?: true
    doctorId?: true
    startTime?: true
    appointmentId?: true
    createdAt?: true
    _all?: true
  }

  export type AppointmentSlotLockAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which AppointmentSlotLock to aggregate.
     */
    where?: AppointmentSlotLockWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of AppointmentSlotLocks to fetch.
     */
    orderBy?: AppointmentSlotLockOrderByWithRelationInput | AppointmentSlotLockOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: AppointmentSlotLockWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` AppointmentSlotLocks from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` AppointmentSlotLocks.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned AppointmentSlotLocks
    **/
    _count?: true | AppointmentSlotLockCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: AppointmentSlotLockMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: AppointmentSlotLockMaxAggregateInputType
  }

  export type GetAppointmentSlotLockAggregateType<T extends AppointmentSlotLockAggregateArgs> = {
        [P in keyof T & keyof AggregateAppointmentSlotLock]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateAppointmentSlotLock[P]>
      : GetScalarType<T[P], AggregateAppointmentSlotLock[P]>
  }




  export type AppointmentSlotLockGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: AppointmentSlotLockWhereInput
    orderBy?: AppointmentSlotLockOrderByWithAggregationInput | AppointmentSlotLockOrderByWithAggregationInput[]
    by: AppointmentSlotLockScalarFieldEnum[] | AppointmentSlotLockScalarFieldEnum
    having?: AppointmentSlotLockScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: AppointmentSlotLockCountAggregateInputType | true
    _min?: AppointmentSlotLockMinAggregateInputType
    _max?: AppointmentSlotLockMaxAggregateInputType
  }

  export type AppointmentSlotLockGroupByOutputType = {
    id: string
    doctorId: string
    startTime: Date
    appointmentId: string
    createdAt: Date
    _count: AppointmentSlotLockCountAggregateOutputType | null
    _min: AppointmentSlotLockMinAggregateOutputType | null
    _max: AppointmentSlotLockMaxAggregateOutputType | null
  }

  type GetAppointmentSlotLockGroupByPayload<T extends AppointmentSlotLockGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<AppointmentSlotLockGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof AppointmentSlotLockGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], AppointmentSlotLockGroupByOutputType[P]>
            : GetScalarType<T[P], AppointmentSlotLockGroupByOutputType[P]>
        }
      >
    >


  export type AppointmentSlotLockSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    doctorId?: boolean
    startTime?: boolean
    appointmentId?: boolean
    createdAt?: boolean
    appointment?: boolean | AppointmentDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["appointmentSlotLock"]>



  export type AppointmentSlotLockSelectScalar = {
    id?: boolean
    doctorId?: boolean
    startTime?: boolean
    appointmentId?: boolean
    createdAt?: boolean
  }

  export type AppointmentSlotLockOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "doctorId" | "startTime" | "appointmentId" | "createdAt", ExtArgs["result"]["appointmentSlotLock"]>
  export type AppointmentSlotLockInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    appointment?: boolean | AppointmentDefaultArgs<ExtArgs>
  }

  export type $AppointmentSlotLockPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "AppointmentSlotLock"
    objects: {
      appointment: Prisma.$AppointmentPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      doctorId: string
      startTime: Date
      appointmentId: string
      createdAt: Date
    }, ExtArgs["result"]["appointmentSlotLock"]>
    composites: {}
  }

  type AppointmentSlotLockGetPayload<S extends boolean | null | undefined | AppointmentSlotLockDefaultArgs> = $Result.GetResult<Prisma.$AppointmentSlotLockPayload, S>

  type AppointmentSlotLockCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<AppointmentSlotLockFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: AppointmentSlotLockCountAggregateInputType | true
    }

  export interface AppointmentSlotLockDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['AppointmentSlotLock'], meta: { name: 'AppointmentSlotLock' } }
    /**
     * Find zero or one AppointmentSlotLock that matches the filter.
     * @param {AppointmentSlotLockFindUniqueArgs} args - Arguments to find a AppointmentSlotLock
     * @example
     * // Get one AppointmentSlotLock
     * const appointmentSlotLock = await prisma.appointmentSlotLock.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends AppointmentSlotLockFindUniqueArgs>(args: SelectSubset<T, AppointmentSlotLockFindUniqueArgs<ExtArgs>>): Prisma__AppointmentSlotLockClient<$Result.GetResult<Prisma.$AppointmentSlotLockPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one AppointmentSlotLock that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {AppointmentSlotLockFindUniqueOrThrowArgs} args - Arguments to find a AppointmentSlotLock
     * @example
     * // Get one AppointmentSlotLock
     * const appointmentSlotLock = await prisma.appointmentSlotLock.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends AppointmentSlotLockFindUniqueOrThrowArgs>(args: SelectSubset<T, AppointmentSlotLockFindUniqueOrThrowArgs<ExtArgs>>): Prisma__AppointmentSlotLockClient<$Result.GetResult<Prisma.$AppointmentSlotLockPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first AppointmentSlotLock that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AppointmentSlotLockFindFirstArgs} args - Arguments to find a AppointmentSlotLock
     * @example
     * // Get one AppointmentSlotLock
     * const appointmentSlotLock = await prisma.appointmentSlotLock.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends AppointmentSlotLockFindFirstArgs>(args?: SelectSubset<T, AppointmentSlotLockFindFirstArgs<ExtArgs>>): Prisma__AppointmentSlotLockClient<$Result.GetResult<Prisma.$AppointmentSlotLockPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first AppointmentSlotLock that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AppointmentSlotLockFindFirstOrThrowArgs} args - Arguments to find a AppointmentSlotLock
     * @example
     * // Get one AppointmentSlotLock
     * const appointmentSlotLock = await prisma.appointmentSlotLock.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends AppointmentSlotLockFindFirstOrThrowArgs>(args?: SelectSubset<T, AppointmentSlotLockFindFirstOrThrowArgs<ExtArgs>>): Prisma__AppointmentSlotLockClient<$Result.GetResult<Prisma.$AppointmentSlotLockPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more AppointmentSlotLocks that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AppointmentSlotLockFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all AppointmentSlotLocks
     * const appointmentSlotLocks = await prisma.appointmentSlotLock.findMany()
     * 
     * // Get first 10 AppointmentSlotLocks
     * const appointmentSlotLocks = await prisma.appointmentSlotLock.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const appointmentSlotLockWithIdOnly = await prisma.appointmentSlotLock.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends AppointmentSlotLockFindManyArgs>(args?: SelectSubset<T, AppointmentSlotLockFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AppointmentSlotLockPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a AppointmentSlotLock.
     * @param {AppointmentSlotLockCreateArgs} args - Arguments to create a AppointmentSlotLock.
     * @example
     * // Create one AppointmentSlotLock
     * const AppointmentSlotLock = await prisma.appointmentSlotLock.create({
     *   data: {
     *     // ... data to create a AppointmentSlotLock
     *   }
     * })
     * 
     */
    create<T extends AppointmentSlotLockCreateArgs>(args: SelectSubset<T, AppointmentSlotLockCreateArgs<ExtArgs>>): Prisma__AppointmentSlotLockClient<$Result.GetResult<Prisma.$AppointmentSlotLockPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many AppointmentSlotLocks.
     * @param {AppointmentSlotLockCreateManyArgs} args - Arguments to create many AppointmentSlotLocks.
     * @example
     * // Create many AppointmentSlotLocks
     * const appointmentSlotLock = await prisma.appointmentSlotLock.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends AppointmentSlotLockCreateManyArgs>(args?: SelectSubset<T, AppointmentSlotLockCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a AppointmentSlotLock.
     * @param {AppointmentSlotLockDeleteArgs} args - Arguments to delete one AppointmentSlotLock.
     * @example
     * // Delete one AppointmentSlotLock
     * const AppointmentSlotLock = await prisma.appointmentSlotLock.delete({
     *   where: {
     *     // ... filter to delete one AppointmentSlotLock
     *   }
     * })
     * 
     */
    delete<T extends AppointmentSlotLockDeleteArgs>(args: SelectSubset<T, AppointmentSlotLockDeleteArgs<ExtArgs>>): Prisma__AppointmentSlotLockClient<$Result.GetResult<Prisma.$AppointmentSlotLockPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one AppointmentSlotLock.
     * @param {AppointmentSlotLockUpdateArgs} args - Arguments to update one AppointmentSlotLock.
     * @example
     * // Update one AppointmentSlotLock
     * const appointmentSlotLock = await prisma.appointmentSlotLock.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends AppointmentSlotLockUpdateArgs>(args: SelectSubset<T, AppointmentSlotLockUpdateArgs<ExtArgs>>): Prisma__AppointmentSlotLockClient<$Result.GetResult<Prisma.$AppointmentSlotLockPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more AppointmentSlotLocks.
     * @param {AppointmentSlotLockDeleteManyArgs} args - Arguments to filter AppointmentSlotLocks to delete.
     * @example
     * // Delete a few AppointmentSlotLocks
     * const { count } = await prisma.appointmentSlotLock.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends AppointmentSlotLockDeleteManyArgs>(args?: SelectSubset<T, AppointmentSlotLockDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more AppointmentSlotLocks.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AppointmentSlotLockUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many AppointmentSlotLocks
     * const appointmentSlotLock = await prisma.appointmentSlotLock.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends AppointmentSlotLockUpdateManyArgs>(args: SelectSubset<T, AppointmentSlotLockUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one AppointmentSlotLock.
     * @param {AppointmentSlotLockUpsertArgs} args - Arguments to update or create a AppointmentSlotLock.
     * @example
     * // Update or create a AppointmentSlotLock
     * const appointmentSlotLock = await prisma.appointmentSlotLock.upsert({
     *   create: {
     *     // ... data to create a AppointmentSlotLock
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the AppointmentSlotLock we want to update
     *   }
     * })
     */
    upsert<T extends AppointmentSlotLockUpsertArgs>(args: SelectSubset<T, AppointmentSlotLockUpsertArgs<ExtArgs>>): Prisma__AppointmentSlotLockClient<$Result.GetResult<Prisma.$AppointmentSlotLockPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of AppointmentSlotLocks.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AppointmentSlotLockCountArgs} args - Arguments to filter AppointmentSlotLocks to count.
     * @example
     * // Count the number of AppointmentSlotLocks
     * const count = await prisma.appointmentSlotLock.count({
     *   where: {
     *     // ... the filter for the AppointmentSlotLocks we want to count
     *   }
     * })
    **/
    count<T extends AppointmentSlotLockCountArgs>(
      args?: Subset<T, AppointmentSlotLockCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], AppointmentSlotLockCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a AppointmentSlotLock.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AppointmentSlotLockAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends AppointmentSlotLockAggregateArgs>(args: Subset<T, AppointmentSlotLockAggregateArgs>): Prisma.PrismaPromise<GetAppointmentSlotLockAggregateType<T>>

    /**
     * Group by AppointmentSlotLock.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AppointmentSlotLockGroupByArgs} args - Group by arguments.
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
      T extends AppointmentSlotLockGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: AppointmentSlotLockGroupByArgs['orderBy'] }
        : { orderBy?: AppointmentSlotLockGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, AppointmentSlotLockGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetAppointmentSlotLockGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the AppointmentSlotLock model
   */
  readonly fields: AppointmentSlotLockFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for AppointmentSlotLock.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__AppointmentSlotLockClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    appointment<T extends AppointmentDefaultArgs<ExtArgs> = {}>(args?: Subset<T, AppointmentDefaultArgs<ExtArgs>>): Prisma__AppointmentClient<$Result.GetResult<Prisma.$AppointmentPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the AppointmentSlotLock model
   */
  interface AppointmentSlotLockFieldRefs {
    readonly id: FieldRef<"AppointmentSlotLock", 'String'>
    readonly doctorId: FieldRef<"AppointmentSlotLock", 'String'>
    readonly startTime: FieldRef<"AppointmentSlotLock", 'DateTime'>
    readonly appointmentId: FieldRef<"AppointmentSlotLock", 'String'>
    readonly createdAt: FieldRef<"AppointmentSlotLock", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * AppointmentSlotLock findUnique
   */
  export type AppointmentSlotLockFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AppointmentSlotLock
     */
    select?: AppointmentSlotLockSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AppointmentSlotLock
     */
    omit?: AppointmentSlotLockOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AppointmentSlotLockInclude<ExtArgs> | null
    /**
     * Filter, which AppointmentSlotLock to fetch.
     */
    where: AppointmentSlotLockWhereUniqueInput
  }

  /**
   * AppointmentSlotLock findUniqueOrThrow
   */
  export type AppointmentSlotLockFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AppointmentSlotLock
     */
    select?: AppointmentSlotLockSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AppointmentSlotLock
     */
    omit?: AppointmentSlotLockOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AppointmentSlotLockInclude<ExtArgs> | null
    /**
     * Filter, which AppointmentSlotLock to fetch.
     */
    where: AppointmentSlotLockWhereUniqueInput
  }

  /**
   * AppointmentSlotLock findFirst
   */
  export type AppointmentSlotLockFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AppointmentSlotLock
     */
    select?: AppointmentSlotLockSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AppointmentSlotLock
     */
    omit?: AppointmentSlotLockOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AppointmentSlotLockInclude<ExtArgs> | null
    /**
     * Filter, which AppointmentSlotLock to fetch.
     */
    where?: AppointmentSlotLockWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of AppointmentSlotLocks to fetch.
     */
    orderBy?: AppointmentSlotLockOrderByWithRelationInput | AppointmentSlotLockOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for AppointmentSlotLocks.
     */
    cursor?: AppointmentSlotLockWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` AppointmentSlotLocks from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` AppointmentSlotLocks.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of AppointmentSlotLocks.
     */
    distinct?: AppointmentSlotLockScalarFieldEnum | AppointmentSlotLockScalarFieldEnum[]
  }

  /**
   * AppointmentSlotLock findFirstOrThrow
   */
  export type AppointmentSlotLockFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AppointmentSlotLock
     */
    select?: AppointmentSlotLockSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AppointmentSlotLock
     */
    omit?: AppointmentSlotLockOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AppointmentSlotLockInclude<ExtArgs> | null
    /**
     * Filter, which AppointmentSlotLock to fetch.
     */
    where?: AppointmentSlotLockWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of AppointmentSlotLocks to fetch.
     */
    orderBy?: AppointmentSlotLockOrderByWithRelationInput | AppointmentSlotLockOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for AppointmentSlotLocks.
     */
    cursor?: AppointmentSlotLockWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` AppointmentSlotLocks from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` AppointmentSlotLocks.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of AppointmentSlotLocks.
     */
    distinct?: AppointmentSlotLockScalarFieldEnum | AppointmentSlotLockScalarFieldEnum[]
  }

  /**
   * AppointmentSlotLock findMany
   */
  export type AppointmentSlotLockFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AppointmentSlotLock
     */
    select?: AppointmentSlotLockSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AppointmentSlotLock
     */
    omit?: AppointmentSlotLockOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AppointmentSlotLockInclude<ExtArgs> | null
    /**
     * Filter, which AppointmentSlotLocks to fetch.
     */
    where?: AppointmentSlotLockWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of AppointmentSlotLocks to fetch.
     */
    orderBy?: AppointmentSlotLockOrderByWithRelationInput | AppointmentSlotLockOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing AppointmentSlotLocks.
     */
    cursor?: AppointmentSlotLockWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` AppointmentSlotLocks from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` AppointmentSlotLocks.
     */
    skip?: number
    distinct?: AppointmentSlotLockScalarFieldEnum | AppointmentSlotLockScalarFieldEnum[]
  }

  /**
   * AppointmentSlotLock create
   */
  export type AppointmentSlotLockCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AppointmentSlotLock
     */
    select?: AppointmentSlotLockSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AppointmentSlotLock
     */
    omit?: AppointmentSlotLockOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AppointmentSlotLockInclude<ExtArgs> | null
    /**
     * The data needed to create a AppointmentSlotLock.
     */
    data: XOR<AppointmentSlotLockCreateInput, AppointmentSlotLockUncheckedCreateInput>
  }

  /**
   * AppointmentSlotLock createMany
   */
  export type AppointmentSlotLockCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many AppointmentSlotLocks.
     */
    data: AppointmentSlotLockCreateManyInput | AppointmentSlotLockCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * AppointmentSlotLock update
   */
  export type AppointmentSlotLockUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AppointmentSlotLock
     */
    select?: AppointmentSlotLockSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AppointmentSlotLock
     */
    omit?: AppointmentSlotLockOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AppointmentSlotLockInclude<ExtArgs> | null
    /**
     * The data needed to update a AppointmentSlotLock.
     */
    data: XOR<AppointmentSlotLockUpdateInput, AppointmentSlotLockUncheckedUpdateInput>
    /**
     * Choose, which AppointmentSlotLock to update.
     */
    where: AppointmentSlotLockWhereUniqueInput
  }

  /**
   * AppointmentSlotLock updateMany
   */
  export type AppointmentSlotLockUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update AppointmentSlotLocks.
     */
    data: XOR<AppointmentSlotLockUpdateManyMutationInput, AppointmentSlotLockUncheckedUpdateManyInput>
    /**
     * Filter which AppointmentSlotLocks to update
     */
    where?: AppointmentSlotLockWhereInput
    /**
     * Limit how many AppointmentSlotLocks to update.
     */
    limit?: number
  }

  /**
   * AppointmentSlotLock upsert
   */
  export type AppointmentSlotLockUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AppointmentSlotLock
     */
    select?: AppointmentSlotLockSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AppointmentSlotLock
     */
    omit?: AppointmentSlotLockOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AppointmentSlotLockInclude<ExtArgs> | null
    /**
     * The filter to search for the AppointmentSlotLock to update in case it exists.
     */
    where: AppointmentSlotLockWhereUniqueInput
    /**
     * In case the AppointmentSlotLock found by the `where` argument doesn't exist, create a new AppointmentSlotLock with this data.
     */
    create: XOR<AppointmentSlotLockCreateInput, AppointmentSlotLockUncheckedCreateInput>
    /**
     * In case the AppointmentSlotLock was found with the provided `where` argument, update it with this data.
     */
    update: XOR<AppointmentSlotLockUpdateInput, AppointmentSlotLockUncheckedUpdateInput>
  }

  /**
   * AppointmentSlotLock delete
   */
  export type AppointmentSlotLockDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AppointmentSlotLock
     */
    select?: AppointmentSlotLockSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AppointmentSlotLock
     */
    omit?: AppointmentSlotLockOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AppointmentSlotLockInclude<ExtArgs> | null
    /**
     * Filter which AppointmentSlotLock to delete.
     */
    where: AppointmentSlotLockWhereUniqueInput
  }

  /**
   * AppointmentSlotLock deleteMany
   */
  export type AppointmentSlotLockDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which AppointmentSlotLocks to delete
     */
    where?: AppointmentSlotLockWhereInput
    /**
     * Limit how many AppointmentSlotLocks to delete.
     */
    limit?: number
  }

  /**
   * AppointmentSlotLock without action
   */
  export type AppointmentSlotLockDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AppointmentSlotLock
     */
    select?: AppointmentSlotLockSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AppointmentSlotLock
     */
    omit?: AppointmentSlotLockOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AppointmentSlotLockInclude<ExtArgs> | null
  }


  /**
   * Model AppointmentStatusLog
   */

  export type AggregateAppointmentStatusLog = {
    _count: AppointmentStatusLogCountAggregateOutputType | null
    _min: AppointmentStatusLogMinAggregateOutputType | null
    _max: AppointmentStatusLogMaxAggregateOutputType | null
  }

  export type AppointmentStatusLogMinAggregateOutputType = {
    id: string | null
    appointmentId: string | null
    previousStatus: $Enums.AppointmentStatus | null
    newStatus: $Enums.AppointmentStatus | null
    changedById: string | null
    changedByRole: string | null
    note: string | null
    createdAt: Date | null
  }

  export type AppointmentStatusLogMaxAggregateOutputType = {
    id: string | null
    appointmentId: string | null
    previousStatus: $Enums.AppointmentStatus | null
    newStatus: $Enums.AppointmentStatus | null
    changedById: string | null
    changedByRole: string | null
    note: string | null
    createdAt: Date | null
  }

  export type AppointmentStatusLogCountAggregateOutputType = {
    id: number
    appointmentId: number
    previousStatus: number
    newStatus: number
    changedById: number
    changedByRole: number
    note: number
    createdAt: number
    _all: number
  }


  export type AppointmentStatusLogMinAggregateInputType = {
    id?: true
    appointmentId?: true
    previousStatus?: true
    newStatus?: true
    changedById?: true
    changedByRole?: true
    note?: true
    createdAt?: true
  }

  export type AppointmentStatusLogMaxAggregateInputType = {
    id?: true
    appointmentId?: true
    previousStatus?: true
    newStatus?: true
    changedById?: true
    changedByRole?: true
    note?: true
    createdAt?: true
  }

  export type AppointmentStatusLogCountAggregateInputType = {
    id?: true
    appointmentId?: true
    previousStatus?: true
    newStatus?: true
    changedById?: true
    changedByRole?: true
    note?: true
    createdAt?: true
    _all?: true
  }

  export type AppointmentStatusLogAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which AppointmentStatusLog to aggregate.
     */
    where?: AppointmentStatusLogWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of AppointmentStatusLogs to fetch.
     */
    orderBy?: AppointmentStatusLogOrderByWithRelationInput | AppointmentStatusLogOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: AppointmentStatusLogWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` AppointmentStatusLogs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` AppointmentStatusLogs.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned AppointmentStatusLogs
    **/
    _count?: true | AppointmentStatusLogCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: AppointmentStatusLogMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: AppointmentStatusLogMaxAggregateInputType
  }

  export type GetAppointmentStatusLogAggregateType<T extends AppointmentStatusLogAggregateArgs> = {
        [P in keyof T & keyof AggregateAppointmentStatusLog]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateAppointmentStatusLog[P]>
      : GetScalarType<T[P], AggregateAppointmentStatusLog[P]>
  }




  export type AppointmentStatusLogGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: AppointmentStatusLogWhereInput
    orderBy?: AppointmentStatusLogOrderByWithAggregationInput | AppointmentStatusLogOrderByWithAggregationInput[]
    by: AppointmentStatusLogScalarFieldEnum[] | AppointmentStatusLogScalarFieldEnum
    having?: AppointmentStatusLogScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: AppointmentStatusLogCountAggregateInputType | true
    _min?: AppointmentStatusLogMinAggregateInputType
    _max?: AppointmentStatusLogMaxAggregateInputType
  }

  export type AppointmentStatusLogGroupByOutputType = {
    id: string
    appointmentId: string
    previousStatus: $Enums.AppointmentStatus | null
    newStatus: $Enums.AppointmentStatus
    changedById: string | null
    changedByRole: string | null
    note: string | null
    createdAt: Date
    _count: AppointmentStatusLogCountAggregateOutputType | null
    _min: AppointmentStatusLogMinAggregateOutputType | null
    _max: AppointmentStatusLogMaxAggregateOutputType | null
  }

  type GetAppointmentStatusLogGroupByPayload<T extends AppointmentStatusLogGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<AppointmentStatusLogGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof AppointmentStatusLogGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], AppointmentStatusLogGroupByOutputType[P]>
            : GetScalarType<T[P], AppointmentStatusLogGroupByOutputType[P]>
        }
      >
    >


  export type AppointmentStatusLogSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    appointmentId?: boolean
    previousStatus?: boolean
    newStatus?: boolean
    changedById?: boolean
    changedByRole?: boolean
    note?: boolean
    createdAt?: boolean
    appointment?: boolean | AppointmentDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["appointmentStatusLog"]>



  export type AppointmentStatusLogSelectScalar = {
    id?: boolean
    appointmentId?: boolean
    previousStatus?: boolean
    newStatus?: boolean
    changedById?: boolean
    changedByRole?: boolean
    note?: boolean
    createdAt?: boolean
  }

  export type AppointmentStatusLogOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "appointmentId" | "previousStatus" | "newStatus" | "changedById" | "changedByRole" | "note" | "createdAt", ExtArgs["result"]["appointmentStatusLog"]>
  export type AppointmentStatusLogInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    appointment?: boolean | AppointmentDefaultArgs<ExtArgs>
  }

  export type $AppointmentStatusLogPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "AppointmentStatusLog"
    objects: {
      appointment: Prisma.$AppointmentPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      appointmentId: string
      previousStatus: $Enums.AppointmentStatus | null
      newStatus: $Enums.AppointmentStatus
      changedById: string | null
      changedByRole: string | null
      note: string | null
      createdAt: Date
    }, ExtArgs["result"]["appointmentStatusLog"]>
    composites: {}
  }

  type AppointmentStatusLogGetPayload<S extends boolean | null | undefined | AppointmentStatusLogDefaultArgs> = $Result.GetResult<Prisma.$AppointmentStatusLogPayload, S>

  type AppointmentStatusLogCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<AppointmentStatusLogFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: AppointmentStatusLogCountAggregateInputType | true
    }

  export interface AppointmentStatusLogDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['AppointmentStatusLog'], meta: { name: 'AppointmentStatusLog' } }
    /**
     * Find zero or one AppointmentStatusLog that matches the filter.
     * @param {AppointmentStatusLogFindUniqueArgs} args - Arguments to find a AppointmentStatusLog
     * @example
     * // Get one AppointmentStatusLog
     * const appointmentStatusLog = await prisma.appointmentStatusLog.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends AppointmentStatusLogFindUniqueArgs>(args: SelectSubset<T, AppointmentStatusLogFindUniqueArgs<ExtArgs>>): Prisma__AppointmentStatusLogClient<$Result.GetResult<Prisma.$AppointmentStatusLogPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one AppointmentStatusLog that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {AppointmentStatusLogFindUniqueOrThrowArgs} args - Arguments to find a AppointmentStatusLog
     * @example
     * // Get one AppointmentStatusLog
     * const appointmentStatusLog = await prisma.appointmentStatusLog.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends AppointmentStatusLogFindUniqueOrThrowArgs>(args: SelectSubset<T, AppointmentStatusLogFindUniqueOrThrowArgs<ExtArgs>>): Prisma__AppointmentStatusLogClient<$Result.GetResult<Prisma.$AppointmentStatusLogPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first AppointmentStatusLog that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AppointmentStatusLogFindFirstArgs} args - Arguments to find a AppointmentStatusLog
     * @example
     * // Get one AppointmentStatusLog
     * const appointmentStatusLog = await prisma.appointmentStatusLog.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends AppointmentStatusLogFindFirstArgs>(args?: SelectSubset<T, AppointmentStatusLogFindFirstArgs<ExtArgs>>): Prisma__AppointmentStatusLogClient<$Result.GetResult<Prisma.$AppointmentStatusLogPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first AppointmentStatusLog that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AppointmentStatusLogFindFirstOrThrowArgs} args - Arguments to find a AppointmentStatusLog
     * @example
     * // Get one AppointmentStatusLog
     * const appointmentStatusLog = await prisma.appointmentStatusLog.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends AppointmentStatusLogFindFirstOrThrowArgs>(args?: SelectSubset<T, AppointmentStatusLogFindFirstOrThrowArgs<ExtArgs>>): Prisma__AppointmentStatusLogClient<$Result.GetResult<Prisma.$AppointmentStatusLogPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more AppointmentStatusLogs that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AppointmentStatusLogFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all AppointmentStatusLogs
     * const appointmentStatusLogs = await prisma.appointmentStatusLog.findMany()
     * 
     * // Get first 10 AppointmentStatusLogs
     * const appointmentStatusLogs = await prisma.appointmentStatusLog.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const appointmentStatusLogWithIdOnly = await prisma.appointmentStatusLog.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends AppointmentStatusLogFindManyArgs>(args?: SelectSubset<T, AppointmentStatusLogFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AppointmentStatusLogPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a AppointmentStatusLog.
     * @param {AppointmentStatusLogCreateArgs} args - Arguments to create a AppointmentStatusLog.
     * @example
     * // Create one AppointmentStatusLog
     * const AppointmentStatusLog = await prisma.appointmentStatusLog.create({
     *   data: {
     *     // ... data to create a AppointmentStatusLog
     *   }
     * })
     * 
     */
    create<T extends AppointmentStatusLogCreateArgs>(args: SelectSubset<T, AppointmentStatusLogCreateArgs<ExtArgs>>): Prisma__AppointmentStatusLogClient<$Result.GetResult<Prisma.$AppointmentStatusLogPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many AppointmentStatusLogs.
     * @param {AppointmentStatusLogCreateManyArgs} args - Arguments to create many AppointmentStatusLogs.
     * @example
     * // Create many AppointmentStatusLogs
     * const appointmentStatusLog = await prisma.appointmentStatusLog.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends AppointmentStatusLogCreateManyArgs>(args?: SelectSubset<T, AppointmentStatusLogCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a AppointmentStatusLog.
     * @param {AppointmentStatusLogDeleteArgs} args - Arguments to delete one AppointmentStatusLog.
     * @example
     * // Delete one AppointmentStatusLog
     * const AppointmentStatusLog = await prisma.appointmentStatusLog.delete({
     *   where: {
     *     // ... filter to delete one AppointmentStatusLog
     *   }
     * })
     * 
     */
    delete<T extends AppointmentStatusLogDeleteArgs>(args: SelectSubset<T, AppointmentStatusLogDeleteArgs<ExtArgs>>): Prisma__AppointmentStatusLogClient<$Result.GetResult<Prisma.$AppointmentStatusLogPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one AppointmentStatusLog.
     * @param {AppointmentStatusLogUpdateArgs} args - Arguments to update one AppointmentStatusLog.
     * @example
     * // Update one AppointmentStatusLog
     * const appointmentStatusLog = await prisma.appointmentStatusLog.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends AppointmentStatusLogUpdateArgs>(args: SelectSubset<T, AppointmentStatusLogUpdateArgs<ExtArgs>>): Prisma__AppointmentStatusLogClient<$Result.GetResult<Prisma.$AppointmentStatusLogPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more AppointmentStatusLogs.
     * @param {AppointmentStatusLogDeleteManyArgs} args - Arguments to filter AppointmentStatusLogs to delete.
     * @example
     * // Delete a few AppointmentStatusLogs
     * const { count } = await prisma.appointmentStatusLog.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends AppointmentStatusLogDeleteManyArgs>(args?: SelectSubset<T, AppointmentStatusLogDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more AppointmentStatusLogs.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AppointmentStatusLogUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many AppointmentStatusLogs
     * const appointmentStatusLog = await prisma.appointmentStatusLog.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends AppointmentStatusLogUpdateManyArgs>(args: SelectSubset<T, AppointmentStatusLogUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one AppointmentStatusLog.
     * @param {AppointmentStatusLogUpsertArgs} args - Arguments to update or create a AppointmentStatusLog.
     * @example
     * // Update or create a AppointmentStatusLog
     * const appointmentStatusLog = await prisma.appointmentStatusLog.upsert({
     *   create: {
     *     // ... data to create a AppointmentStatusLog
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the AppointmentStatusLog we want to update
     *   }
     * })
     */
    upsert<T extends AppointmentStatusLogUpsertArgs>(args: SelectSubset<T, AppointmentStatusLogUpsertArgs<ExtArgs>>): Prisma__AppointmentStatusLogClient<$Result.GetResult<Prisma.$AppointmentStatusLogPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of AppointmentStatusLogs.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AppointmentStatusLogCountArgs} args - Arguments to filter AppointmentStatusLogs to count.
     * @example
     * // Count the number of AppointmentStatusLogs
     * const count = await prisma.appointmentStatusLog.count({
     *   where: {
     *     // ... the filter for the AppointmentStatusLogs we want to count
     *   }
     * })
    **/
    count<T extends AppointmentStatusLogCountArgs>(
      args?: Subset<T, AppointmentStatusLogCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], AppointmentStatusLogCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a AppointmentStatusLog.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AppointmentStatusLogAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends AppointmentStatusLogAggregateArgs>(args: Subset<T, AppointmentStatusLogAggregateArgs>): Prisma.PrismaPromise<GetAppointmentStatusLogAggregateType<T>>

    /**
     * Group by AppointmentStatusLog.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AppointmentStatusLogGroupByArgs} args - Group by arguments.
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
      T extends AppointmentStatusLogGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: AppointmentStatusLogGroupByArgs['orderBy'] }
        : { orderBy?: AppointmentStatusLogGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, AppointmentStatusLogGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetAppointmentStatusLogGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the AppointmentStatusLog model
   */
  readonly fields: AppointmentStatusLogFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for AppointmentStatusLog.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__AppointmentStatusLogClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    appointment<T extends AppointmentDefaultArgs<ExtArgs> = {}>(args?: Subset<T, AppointmentDefaultArgs<ExtArgs>>): Prisma__AppointmentClient<$Result.GetResult<Prisma.$AppointmentPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the AppointmentStatusLog model
   */
  interface AppointmentStatusLogFieldRefs {
    readonly id: FieldRef<"AppointmentStatusLog", 'String'>
    readonly appointmentId: FieldRef<"AppointmentStatusLog", 'String'>
    readonly previousStatus: FieldRef<"AppointmentStatusLog", 'AppointmentStatus'>
    readonly newStatus: FieldRef<"AppointmentStatusLog", 'AppointmentStatus'>
    readonly changedById: FieldRef<"AppointmentStatusLog", 'String'>
    readonly changedByRole: FieldRef<"AppointmentStatusLog", 'String'>
    readonly note: FieldRef<"AppointmentStatusLog", 'String'>
    readonly createdAt: FieldRef<"AppointmentStatusLog", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * AppointmentStatusLog findUnique
   */
  export type AppointmentStatusLogFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AppointmentStatusLog
     */
    select?: AppointmentStatusLogSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AppointmentStatusLog
     */
    omit?: AppointmentStatusLogOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AppointmentStatusLogInclude<ExtArgs> | null
    /**
     * Filter, which AppointmentStatusLog to fetch.
     */
    where: AppointmentStatusLogWhereUniqueInput
  }

  /**
   * AppointmentStatusLog findUniqueOrThrow
   */
  export type AppointmentStatusLogFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AppointmentStatusLog
     */
    select?: AppointmentStatusLogSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AppointmentStatusLog
     */
    omit?: AppointmentStatusLogOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AppointmentStatusLogInclude<ExtArgs> | null
    /**
     * Filter, which AppointmentStatusLog to fetch.
     */
    where: AppointmentStatusLogWhereUniqueInput
  }

  /**
   * AppointmentStatusLog findFirst
   */
  export type AppointmentStatusLogFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AppointmentStatusLog
     */
    select?: AppointmentStatusLogSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AppointmentStatusLog
     */
    omit?: AppointmentStatusLogOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AppointmentStatusLogInclude<ExtArgs> | null
    /**
     * Filter, which AppointmentStatusLog to fetch.
     */
    where?: AppointmentStatusLogWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of AppointmentStatusLogs to fetch.
     */
    orderBy?: AppointmentStatusLogOrderByWithRelationInput | AppointmentStatusLogOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for AppointmentStatusLogs.
     */
    cursor?: AppointmentStatusLogWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` AppointmentStatusLogs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` AppointmentStatusLogs.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of AppointmentStatusLogs.
     */
    distinct?: AppointmentStatusLogScalarFieldEnum | AppointmentStatusLogScalarFieldEnum[]
  }

  /**
   * AppointmentStatusLog findFirstOrThrow
   */
  export type AppointmentStatusLogFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AppointmentStatusLog
     */
    select?: AppointmentStatusLogSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AppointmentStatusLog
     */
    omit?: AppointmentStatusLogOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AppointmentStatusLogInclude<ExtArgs> | null
    /**
     * Filter, which AppointmentStatusLog to fetch.
     */
    where?: AppointmentStatusLogWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of AppointmentStatusLogs to fetch.
     */
    orderBy?: AppointmentStatusLogOrderByWithRelationInput | AppointmentStatusLogOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for AppointmentStatusLogs.
     */
    cursor?: AppointmentStatusLogWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` AppointmentStatusLogs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` AppointmentStatusLogs.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of AppointmentStatusLogs.
     */
    distinct?: AppointmentStatusLogScalarFieldEnum | AppointmentStatusLogScalarFieldEnum[]
  }

  /**
   * AppointmentStatusLog findMany
   */
  export type AppointmentStatusLogFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AppointmentStatusLog
     */
    select?: AppointmentStatusLogSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AppointmentStatusLog
     */
    omit?: AppointmentStatusLogOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AppointmentStatusLogInclude<ExtArgs> | null
    /**
     * Filter, which AppointmentStatusLogs to fetch.
     */
    where?: AppointmentStatusLogWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of AppointmentStatusLogs to fetch.
     */
    orderBy?: AppointmentStatusLogOrderByWithRelationInput | AppointmentStatusLogOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing AppointmentStatusLogs.
     */
    cursor?: AppointmentStatusLogWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` AppointmentStatusLogs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` AppointmentStatusLogs.
     */
    skip?: number
    distinct?: AppointmentStatusLogScalarFieldEnum | AppointmentStatusLogScalarFieldEnum[]
  }

  /**
   * AppointmentStatusLog create
   */
  export type AppointmentStatusLogCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AppointmentStatusLog
     */
    select?: AppointmentStatusLogSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AppointmentStatusLog
     */
    omit?: AppointmentStatusLogOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AppointmentStatusLogInclude<ExtArgs> | null
    /**
     * The data needed to create a AppointmentStatusLog.
     */
    data: XOR<AppointmentStatusLogCreateInput, AppointmentStatusLogUncheckedCreateInput>
  }

  /**
   * AppointmentStatusLog createMany
   */
  export type AppointmentStatusLogCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many AppointmentStatusLogs.
     */
    data: AppointmentStatusLogCreateManyInput | AppointmentStatusLogCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * AppointmentStatusLog update
   */
  export type AppointmentStatusLogUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AppointmentStatusLog
     */
    select?: AppointmentStatusLogSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AppointmentStatusLog
     */
    omit?: AppointmentStatusLogOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AppointmentStatusLogInclude<ExtArgs> | null
    /**
     * The data needed to update a AppointmentStatusLog.
     */
    data: XOR<AppointmentStatusLogUpdateInput, AppointmentStatusLogUncheckedUpdateInput>
    /**
     * Choose, which AppointmentStatusLog to update.
     */
    where: AppointmentStatusLogWhereUniqueInput
  }

  /**
   * AppointmentStatusLog updateMany
   */
  export type AppointmentStatusLogUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update AppointmentStatusLogs.
     */
    data: XOR<AppointmentStatusLogUpdateManyMutationInput, AppointmentStatusLogUncheckedUpdateManyInput>
    /**
     * Filter which AppointmentStatusLogs to update
     */
    where?: AppointmentStatusLogWhereInput
    /**
     * Limit how many AppointmentStatusLogs to update.
     */
    limit?: number
  }

  /**
   * AppointmentStatusLog upsert
   */
  export type AppointmentStatusLogUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AppointmentStatusLog
     */
    select?: AppointmentStatusLogSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AppointmentStatusLog
     */
    omit?: AppointmentStatusLogOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AppointmentStatusLogInclude<ExtArgs> | null
    /**
     * The filter to search for the AppointmentStatusLog to update in case it exists.
     */
    where: AppointmentStatusLogWhereUniqueInput
    /**
     * In case the AppointmentStatusLog found by the `where` argument doesn't exist, create a new AppointmentStatusLog with this data.
     */
    create: XOR<AppointmentStatusLogCreateInput, AppointmentStatusLogUncheckedCreateInput>
    /**
     * In case the AppointmentStatusLog was found with the provided `where` argument, update it with this data.
     */
    update: XOR<AppointmentStatusLogUpdateInput, AppointmentStatusLogUncheckedUpdateInput>
  }

  /**
   * AppointmentStatusLog delete
   */
  export type AppointmentStatusLogDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AppointmentStatusLog
     */
    select?: AppointmentStatusLogSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AppointmentStatusLog
     */
    omit?: AppointmentStatusLogOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AppointmentStatusLogInclude<ExtArgs> | null
    /**
     * Filter which AppointmentStatusLog to delete.
     */
    where: AppointmentStatusLogWhereUniqueInput
  }

  /**
   * AppointmentStatusLog deleteMany
   */
  export type AppointmentStatusLogDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which AppointmentStatusLogs to delete
     */
    where?: AppointmentStatusLogWhereInput
    /**
     * Limit how many AppointmentStatusLogs to delete.
     */
    limit?: number
  }

  /**
   * AppointmentStatusLog without action
   */
  export type AppointmentStatusLogDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AppointmentStatusLog
     */
    select?: AppointmentStatusLogSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AppointmentStatusLog
     */
    omit?: AppointmentStatusLogOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AppointmentStatusLogInclude<ExtArgs> | null
  }


  /**
   * Model AppointmentPayment
   */

  export type AggregateAppointmentPayment = {
    _count: AppointmentPaymentCountAggregateOutputType | null
    _avg: AppointmentPaymentAvgAggregateOutputType | null
    _sum: AppointmentPaymentSumAggregateOutputType | null
    _min: AppointmentPaymentMinAggregateOutputType | null
    _max: AppointmentPaymentMaxAggregateOutputType | null
  }

  export type AppointmentPaymentAvgAggregateOutputType = {
    amount: Decimal | null
  }

  export type AppointmentPaymentSumAggregateOutputType = {
    amount: Decimal | null
  }

  export type AppointmentPaymentMinAggregateOutputType = {
    id: string | null
    appointmentId: string | null
    amount: Decimal | null
    currency: string | null
    status: $Enums.PaymentStatus | null
    gateway: $Enums.PaymentGateway | null
    transactionId: string | null
    validationId: string | null
    bankTransactionId: string | null
    paymentMethod: string | null
    cardType: string | null
    paidAt: Date | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type AppointmentPaymentMaxAggregateOutputType = {
    id: string | null
    appointmentId: string | null
    amount: Decimal | null
    currency: string | null
    status: $Enums.PaymentStatus | null
    gateway: $Enums.PaymentGateway | null
    transactionId: string | null
    validationId: string | null
    bankTransactionId: string | null
    paymentMethod: string | null
    cardType: string | null
    paidAt: Date | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type AppointmentPaymentCountAggregateOutputType = {
    id: number
    appointmentId: number
    amount: number
    currency: number
    status: number
    gateway: number
    transactionId: number
    validationId: number
    bankTransactionId: number
    paymentMethod: number
    cardType: number
    gatewayResponse: number
    paidAt: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type AppointmentPaymentAvgAggregateInputType = {
    amount?: true
  }

  export type AppointmentPaymentSumAggregateInputType = {
    amount?: true
  }

  export type AppointmentPaymentMinAggregateInputType = {
    id?: true
    appointmentId?: true
    amount?: true
    currency?: true
    status?: true
    gateway?: true
    transactionId?: true
    validationId?: true
    bankTransactionId?: true
    paymentMethod?: true
    cardType?: true
    paidAt?: true
    createdAt?: true
    updatedAt?: true
  }

  export type AppointmentPaymentMaxAggregateInputType = {
    id?: true
    appointmentId?: true
    amount?: true
    currency?: true
    status?: true
    gateway?: true
    transactionId?: true
    validationId?: true
    bankTransactionId?: true
    paymentMethod?: true
    cardType?: true
    paidAt?: true
    createdAt?: true
    updatedAt?: true
  }

  export type AppointmentPaymentCountAggregateInputType = {
    id?: true
    appointmentId?: true
    amount?: true
    currency?: true
    status?: true
    gateway?: true
    transactionId?: true
    validationId?: true
    bankTransactionId?: true
    paymentMethod?: true
    cardType?: true
    gatewayResponse?: true
    paidAt?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type AppointmentPaymentAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which AppointmentPayment to aggregate.
     */
    where?: AppointmentPaymentWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of AppointmentPayments to fetch.
     */
    orderBy?: AppointmentPaymentOrderByWithRelationInput | AppointmentPaymentOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: AppointmentPaymentWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` AppointmentPayments from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` AppointmentPayments.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned AppointmentPayments
    **/
    _count?: true | AppointmentPaymentCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: AppointmentPaymentAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: AppointmentPaymentSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: AppointmentPaymentMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: AppointmentPaymentMaxAggregateInputType
  }

  export type GetAppointmentPaymentAggregateType<T extends AppointmentPaymentAggregateArgs> = {
        [P in keyof T & keyof AggregateAppointmentPayment]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateAppointmentPayment[P]>
      : GetScalarType<T[P], AggregateAppointmentPayment[P]>
  }




  export type AppointmentPaymentGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: AppointmentPaymentWhereInput
    orderBy?: AppointmentPaymentOrderByWithAggregationInput | AppointmentPaymentOrderByWithAggregationInput[]
    by: AppointmentPaymentScalarFieldEnum[] | AppointmentPaymentScalarFieldEnum
    having?: AppointmentPaymentScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: AppointmentPaymentCountAggregateInputType | true
    _avg?: AppointmentPaymentAvgAggregateInputType
    _sum?: AppointmentPaymentSumAggregateInputType
    _min?: AppointmentPaymentMinAggregateInputType
    _max?: AppointmentPaymentMaxAggregateInputType
  }

  export type AppointmentPaymentGroupByOutputType = {
    id: string
    appointmentId: string
    amount: Decimal
    currency: string
    status: $Enums.PaymentStatus
    gateway: $Enums.PaymentGateway
    transactionId: string
    validationId: string | null
    bankTransactionId: string | null
    paymentMethod: string | null
    cardType: string | null
    gatewayResponse: JsonValue | null
    paidAt: Date | null
    createdAt: Date
    updatedAt: Date
    _count: AppointmentPaymentCountAggregateOutputType | null
    _avg: AppointmentPaymentAvgAggregateOutputType | null
    _sum: AppointmentPaymentSumAggregateOutputType | null
    _min: AppointmentPaymentMinAggregateOutputType | null
    _max: AppointmentPaymentMaxAggregateOutputType | null
  }

  type GetAppointmentPaymentGroupByPayload<T extends AppointmentPaymentGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<AppointmentPaymentGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof AppointmentPaymentGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], AppointmentPaymentGroupByOutputType[P]>
            : GetScalarType<T[P], AppointmentPaymentGroupByOutputType[P]>
        }
      >
    >


  export type AppointmentPaymentSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    appointmentId?: boolean
    amount?: boolean
    currency?: boolean
    status?: boolean
    gateway?: boolean
    transactionId?: boolean
    validationId?: boolean
    bankTransactionId?: boolean
    paymentMethod?: boolean
    cardType?: boolean
    gatewayResponse?: boolean
    paidAt?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    appointment?: boolean | AppointmentDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["appointmentPayment"]>



  export type AppointmentPaymentSelectScalar = {
    id?: boolean
    appointmentId?: boolean
    amount?: boolean
    currency?: boolean
    status?: boolean
    gateway?: boolean
    transactionId?: boolean
    validationId?: boolean
    bankTransactionId?: boolean
    paymentMethod?: boolean
    cardType?: boolean
    gatewayResponse?: boolean
    paidAt?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type AppointmentPaymentOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "appointmentId" | "amount" | "currency" | "status" | "gateway" | "transactionId" | "validationId" | "bankTransactionId" | "paymentMethod" | "cardType" | "gatewayResponse" | "paidAt" | "createdAt" | "updatedAt", ExtArgs["result"]["appointmentPayment"]>
  export type AppointmentPaymentInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    appointment?: boolean | AppointmentDefaultArgs<ExtArgs>
  }

  export type $AppointmentPaymentPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "AppointmentPayment"
    objects: {
      appointment: Prisma.$AppointmentPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      appointmentId: string
      amount: Prisma.Decimal
      currency: string
      status: $Enums.PaymentStatus
      gateway: $Enums.PaymentGateway
      transactionId: string
      validationId: string | null
      bankTransactionId: string | null
      paymentMethod: string | null
      cardType: string | null
      gatewayResponse: Prisma.JsonValue | null
      paidAt: Date | null
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["appointmentPayment"]>
    composites: {}
  }

  type AppointmentPaymentGetPayload<S extends boolean | null | undefined | AppointmentPaymentDefaultArgs> = $Result.GetResult<Prisma.$AppointmentPaymentPayload, S>

  type AppointmentPaymentCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<AppointmentPaymentFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: AppointmentPaymentCountAggregateInputType | true
    }

  export interface AppointmentPaymentDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['AppointmentPayment'], meta: { name: 'AppointmentPayment' } }
    /**
     * Find zero or one AppointmentPayment that matches the filter.
     * @param {AppointmentPaymentFindUniqueArgs} args - Arguments to find a AppointmentPayment
     * @example
     * // Get one AppointmentPayment
     * const appointmentPayment = await prisma.appointmentPayment.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends AppointmentPaymentFindUniqueArgs>(args: SelectSubset<T, AppointmentPaymentFindUniqueArgs<ExtArgs>>): Prisma__AppointmentPaymentClient<$Result.GetResult<Prisma.$AppointmentPaymentPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one AppointmentPayment that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {AppointmentPaymentFindUniqueOrThrowArgs} args - Arguments to find a AppointmentPayment
     * @example
     * // Get one AppointmentPayment
     * const appointmentPayment = await prisma.appointmentPayment.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends AppointmentPaymentFindUniqueOrThrowArgs>(args: SelectSubset<T, AppointmentPaymentFindUniqueOrThrowArgs<ExtArgs>>): Prisma__AppointmentPaymentClient<$Result.GetResult<Prisma.$AppointmentPaymentPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first AppointmentPayment that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AppointmentPaymentFindFirstArgs} args - Arguments to find a AppointmentPayment
     * @example
     * // Get one AppointmentPayment
     * const appointmentPayment = await prisma.appointmentPayment.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends AppointmentPaymentFindFirstArgs>(args?: SelectSubset<T, AppointmentPaymentFindFirstArgs<ExtArgs>>): Prisma__AppointmentPaymentClient<$Result.GetResult<Prisma.$AppointmentPaymentPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first AppointmentPayment that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AppointmentPaymentFindFirstOrThrowArgs} args - Arguments to find a AppointmentPayment
     * @example
     * // Get one AppointmentPayment
     * const appointmentPayment = await prisma.appointmentPayment.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends AppointmentPaymentFindFirstOrThrowArgs>(args?: SelectSubset<T, AppointmentPaymentFindFirstOrThrowArgs<ExtArgs>>): Prisma__AppointmentPaymentClient<$Result.GetResult<Prisma.$AppointmentPaymentPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more AppointmentPayments that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AppointmentPaymentFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all AppointmentPayments
     * const appointmentPayments = await prisma.appointmentPayment.findMany()
     * 
     * // Get first 10 AppointmentPayments
     * const appointmentPayments = await prisma.appointmentPayment.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const appointmentPaymentWithIdOnly = await prisma.appointmentPayment.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends AppointmentPaymentFindManyArgs>(args?: SelectSubset<T, AppointmentPaymentFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AppointmentPaymentPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a AppointmentPayment.
     * @param {AppointmentPaymentCreateArgs} args - Arguments to create a AppointmentPayment.
     * @example
     * // Create one AppointmentPayment
     * const AppointmentPayment = await prisma.appointmentPayment.create({
     *   data: {
     *     // ... data to create a AppointmentPayment
     *   }
     * })
     * 
     */
    create<T extends AppointmentPaymentCreateArgs>(args: SelectSubset<T, AppointmentPaymentCreateArgs<ExtArgs>>): Prisma__AppointmentPaymentClient<$Result.GetResult<Prisma.$AppointmentPaymentPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many AppointmentPayments.
     * @param {AppointmentPaymentCreateManyArgs} args - Arguments to create many AppointmentPayments.
     * @example
     * // Create many AppointmentPayments
     * const appointmentPayment = await prisma.appointmentPayment.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends AppointmentPaymentCreateManyArgs>(args?: SelectSubset<T, AppointmentPaymentCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a AppointmentPayment.
     * @param {AppointmentPaymentDeleteArgs} args - Arguments to delete one AppointmentPayment.
     * @example
     * // Delete one AppointmentPayment
     * const AppointmentPayment = await prisma.appointmentPayment.delete({
     *   where: {
     *     // ... filter to delete one AppointmentPayment
     *   }
     * })
     * 
     */
    delete<T extends AppointmentPaymentDeleteArgs>(args: SelectSubset<T, AppointmentPaymentDeleteArgs<ExtArgs>>): Prisma__AppointmentPaymentClient<$Result.GetResult<Prisma.$AppointmentPaymentPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one AppointmentPayment.
     * @param {AppointmentPaymentUpdateArgs} args - Arguments to update one AppointmentPayment.
     * @example
     * // Update one AppointmentPayment
     * const appointmentPayment = await prisma.appointmentPayment.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends AppointmentPaymentUpdateArgs>(args: SelectSubset<T, AppointmentPaymentUpdateArgs<ExtArgs>>): Prisma__AppointmentPaymentClient<$Result.GetResult<Prisma.$AppointmentPaymentPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more AppointmentPayments.
     * @param {AppointmentPaymentDeleteManyArgs} args - Arguments to filter AppointmentPayments to delete.
     * @example
     * // Delete a few AppointmentPayments
     * const { count } = await prisma.appointmentPayment.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends AppointmentPaymentDeleteManyArgs>(args?: SelectSubset<T, AppointmentPaymentDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more AppointmentPayments.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AppointmentPaymentUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many AppointmentPayments
     * const appointmentPayment = await prisma.appointmentPayment.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends AppointmentPaymentUpdateManyArgs>(args: SelectSubset<T, AppointmentPaymentUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one AppointmentPayment.
     * @param {AppointmentPaymentUpsertArgs} args - Arguments to update or create a AppointmentPayment.
     * @example
     * // Update or create a AppointmentPayment
     * const appointmentPayment = await prisma.appointmentPayment.upsert({
     *   create: {
     *     // ... data to create a AppointmentPayment
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the AppointmentPayment we want to update
     *   }
     * })
     */
    upsert<T extends AppointmentPaymentUpsertArgs>(args: SelectSubset<T, AppointmentPaymentUpsertArgs<ExtArgs>>): Prisma__AppointmentPaymentClient<$Result.GetResult<Prisma.$AppointmentPaymentPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of AppointmentPayments.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AppointmentPaymentCountArgs} args - Arguments to filter AppointmentPayments to count.
     * @example
     * // Count the number of AppointmentPayments
     * const count = await prisma.appointmentPayment.count({
     *   where: {
     *     // ... the filter for the AppointmentPayments we want to count
     *   }
     * })
    **/
    count<T extends AppointmentPaymentCountArgs>(
      args?: Subset<T, AppointmentPaymentCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], AppointmentPaymentCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a AppointmentPayment.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AppointmentPaymentAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends AppointmentPaymentAggregateArgs>(args: Subset<T, AppointmentPaymentAggregateArgs>): Prisma.PrismaPromise<GetAppointmentPaymentAggregateType<T>>

    /**
     * Group by AppointmentPayment.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AppointmentPaymentGroupByArgs} args - Group by arguments.
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
      T extends AppointmentPaymentGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: AppointmentPaymentGroupByArgs['orderBy'] }
        : { orderBy?: AppointmentPaymentGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, AppointmentPaymentGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetAppointmentPaymentGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the AppointmentPayment model
   */
  readonly fields: AppointmentPaymentFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for AppointmentPayment.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__AppointmentPaymentClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    appointment<T extends AppointmentDefaultArgs<ExtArgs> = {}>(args?: Subset<T, AppointmentDefaultArgs<ExtArgs>>): Prisma__AppointmentClient<$Result.GetResult<Prisma.$AppointmentPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the AppointmentPayment model
   */
  interface AppointmentPaymentFieldRefs {
    readonly id: FieldRef<"AppointmentPayment", 'String'>
    readonly appointmentId: FieldRef<"AppointmentPayment", 'String'>
    readonly amount: FieldRef<"AppointmentPayment", 'Decimal'>
    readonly currency: FieldRef<"AppointmentPayment", 'String'>
    readonly status: FieldRef<"AppointmentPayment", 'PaymentStatus'>
    readonly gateway: FieldRef<"AppointmentPayment", 'PaymentGateway'>
    readonly transactionId: FieldRef<"AppointmentPayment", 'String'>
    readonly validationId: FieldRef<"AppointmentPayment", 'String'>
    readonly bankTransactionId: FieldRef<"AppointmentPayment", 'String'>
    readonly paymentMethod: FieldRef<"AppointmentPayment", 'String'>
    readonly cardType: FieldRef<"AppointmentPayment", 'String'>
    readonly gatewayResponse: FieldRef<"AppointmentPayment", 'Json'>
    readonly paidAt: FieldRef<"AppointmentPayment", 'DateTime'>
    readonly createdAt: FieldRef<"AppointmentPayment", 'DateTime'>
    readonly updatedAt: FieldRef<"AppointmentPayment", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * AppointmentPayment findUnique
   */
  export type AppointmentPaymentFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AppointmentPayment
     */
    select?: AppointmentPaymentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AppointmentPayment
     */
    omit?: AppointmentPaymentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AppointmentPaymentInclude<ExtArgs> | null
    /**
     * Filter, which AppointmentPayment to fetch.
     */
    where: AppointmentPaymentWhereUniqueInput
  }

  /**
   * AppointmentPayment findUniqueOrThrow
   */
  export type AppointmentPaymentFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AppointmentPayment
     */
    select?: AppointmentPaymentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AppointmentPayment
     */
    omit?: AppointmentPaymentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AppointmentPaymentInclude<ExtArgs> | null
    /**
     * Filter, which AppointmentPayment to fetch.
     */
    where: AppointmentPaymentWhereUniqueInput
  }

  /**
   * AppointmentPayment findFirst
   */
  export type AppointmentPaymentFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AppointmentPayment
     */
    select?: AppointmentPaymentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AppointmentPayment
     */
    omit?: AppointmentPaymentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AppointmentPaymentInclude<ExtArgs> | null
    /**
     * Filter, which AppointmentPayment to fetch.
     */
    where?: AppointmentPaymentWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of AppointmentPayments to fetch.
     */
    orderBy?: AppointmentPaymentOrderByWithRelationInput | AppointmentPaymentOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for AppointmentPayments.
     */
    cursor?: AppointmentPaymentWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` AppointmentPayments from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` AppointmentPayments.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of AppointmentPayments.
     */
    distinct?: AppointmentPaymentScalarFieldEnum | AppointmentPaymentScalarFieldEnum[]
  }

  /**
   * AppointmentPayment findFirstOrThrow
   */
  export type AppointmentPaymentFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AppointmentPayment
     */
    select?: AppointmentPaymentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AppointmentPayment
     */
    omit?: AppointmentPaymentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AppointmentPaymentInclude<ExtArgs> | null
    /**
     * Filter, which AppointmentPayment to fetch.
     */
    where?: AppointmentPaymentWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of AppointmentPayments to fetch.
     */
    orderBy?: AppointmentPaymentOrderByWithRelationInput | AppointmentPaymentOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for AppointmentPayments.
     */
    cursor?: AppointmentPaymentWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` AppointmentPayments from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` AppointmentPayments.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of AppointmentPayments.
     */
    distinct?: AppointmentPaymentScalarFieldEnum | AppointmentPaymentScalarFieldEnum[]
  }

  /**
   * AppointmentPayment findMany
   */
  export type AppointmentPaymentFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AppointmentPayment
     */
    select?: AppointmentPaymentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AppointmentPayment
     */
    omit?: AppointmentPaymentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AppointmentPaymentInclude<ExtArgs> | null
    /**
     * Filter, which AppointmentPayments to fetch.
     */
    where?: AppointmentPaymentWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of AppointmentPayments to fetch.
     */
    orderBy?: AppointmentPaymentOrderByWithRelationInput | AppointmentPaymentOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing AppointmentPayments.
     */
    cursor?: AppointmentPaymentWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` AppointmentPayments from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` AppointmentPayments.
     */
    skip?: number
    distinct?: AppointmentPaymentScalarFieldEnum | AppointmentPaymentScalarFieldEnum[]
  }

  /**
   * AppointmentPayment create
   */
  export type AppointmentPaymentCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AppointmentPayment
     */
    select?: AppointmentPaymentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AppointmentPayment
     */
    omit?: AppointmentPaymentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AppointmentPaymentInclude<ExtArgs> | null
    /**
     * The data needed to create a AppointmentPayment.
     */
    data: XOR<AppointmentPaymentCreateInput, AppointmentPaymentUncheckedCreateInput>
  }

  /**
   * AppointmentPayment createMany
   */
  export type AppointmentPaymentCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many AppointmentPayments.
     */
    data: AppointmentPaymentCreateManyInput | AppointmentPaymentCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * AppointmentPayment update
   */
  export type AppointmentPaymentUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AppointmentPayment
     */
    select?: AppointmentPaymentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AppointmentPayment
     */
    omit?: AppointmentPaymentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AppointmentPaymentInclude<ExtArgs> | null
    /**
     * The data needed to update a AppointmentPayment.
     */
    data: XOR<AppointmentPaymentUpdateInput, AppointmentPaymentUncheckedUpdateInput>
    /**
     * Choose, which AppointmentPayment to update.
     */
    where: AppointmentPaymentWhereUniqueInput
  }

  /**
   * AppointmentPayment updateMany
   */
  export type AppointmentPaymentUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update AppointmentPayments.
     */
    data: XOR<AppointmentPaymentUpdateManyMutationInput, AppointmentPaymentUncheckedUpdateManyInput>
    /**
     * Filter which AppointmentPayments to update
     */
    where?: AppointmentPaymentWhereInput
    /**
     * Limit how many AppointmentPayments to update.
     */
    limit?: number
  }

  /**
   * AppointmentPayment upsert
   */
  export type AppointmentPaymentUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AppointmentPayment
     */
    select?: AppointmentPaymentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AppointmentPayment
     */
    omit?: AppointmentPaymentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AppointmentPaymentInclude<ExtArgs> | null
    /**
     * The filter to search for the AppointmentPayment to update in case it exists.
     */
    where: AppointmentPaymentWhereUniqueInput
    /**
     * In case the AppointmentPayment found by the `where` argument doesn't exist, create a new AppointmentPayment with this data.
     */
    create: XOR<AppointmentPaymentCreateInput, AppointmentPaymentUncheckedCreateInput>
    /**
     * In case the AppointmentPayment was found with the provided `where` argument, update it with this data.
     */
    update: XOR<AppointmentPaymentUpdateInput, AppointmentPaymentUncheckedUpdateInput>
  }

  /**
   * AppointmentPayment delete
   */
  export type AppointmentPaymentDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AppointmentPayment
     */
    select?: AppointmentPaymentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AppointmentPayment
     */
    omit?: AppointmentPaymentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AppointmentPaymentInclude<ExtArgs> | null
    /**
     * Filter which AppointmentPayment to delete.
     */
    where: AppointmentPaymentWhereUniqueInput
  }

  /**
   * AppointmentPayment deleteMany
   */
  export type AppointmentPaymentDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which AppointmentPayments to delete
     */
    where?: AppointmentPaymentWhereInput
    /**
     * Limit how many AppointmentPayments to delete.
     */
    limit?: number
  }

  /**
   * AppointmentPayment without action
   */
  export type AppointmentPaymentDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AppointmentPayment
     */
    select?: AppointmentPaymentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AppointmentPayment
     */
    omit?: AppointmentPaymentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AppointmentPaymentInclude<ExtArgs> | null
  }


  /**
   * Model PackageOrder
   */

  export type AggregatePackageOrder = {
    _count: PackageOrderCountAggregateOutputType | null
    _avg: PackageOrderAvgAggregateOutputType | null
    _sum: PackageOrderSumAggregateOutputType | null
    _min: PackageOrderMinAggregateOutputType | null
    _max: PackageOrderMaxAggregateOutputType | null
  }

  export type PackageOrderAvgAggregateOutputType = {
    totalPrice: Decimal | null
    discountedPrice: Decimal | null
  }

  export type PackageOrderSumAggregateOutputType = {
    totalPrice: Decimal | null
    discountedPrice: Decimal | null
  }

  export type PackageOrderMinAggregateOutputType = {
    id: string | null
    orderCode: string | null
    patientId: string | null
    outletId: string | null
    packageId: string | null
    packageName: string | null
    subtitle: string | null
    totalPrice: Decimal | null
    discountedPrice: Decimal | null
    status: $Enums.PackageOrderStatus | null
    paymentStatus: $Enums.PackagePaymentStatus | null
    paymentMethod: $Enums.PackagePaymentMethod | null
    notes: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type PackageOrderMaxAggregateOutputType = {
    id: string | null
    orderCode: string | null
    patientId: string | null
    outletId: string | null
    packageId: string | null
    packageName: string | null
    subtitle: string | null
    totalPrice: Decimal | null
    discountedPrice: Decimal | null
    status: $Enums.PackageOrderStatus | null
    paymentStatus: $Enums.PackagePaymentStatus | null
    paymentMethod: $Enums.PackagePaymentMethod | null
    notes: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type PackageOrderCountAggregateOutputType = {
    id: number
    orderCode: number
    patientId: number
    outletId: number
    packageId: number
    packageName: number
    subtitle: number
    totalPrice: number
    discountedPrice: number
    status: number
    paymentStatus: number
    paymentMethod: number
    notes: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type PackageOrderAvgAggregateInputType = {
    totalPrice?: true
    discountedPrice?: true
  }

  export type PackageOrderSumAggregateInputType = {
    totalPrice?: true
    discountedPrice?: true
  }

  export type PackageOrderMinAggregateInputType = {
    id?: true
    orderCode?: true
    patientId?: true
    outletId?: true
    packageId?: true
    packageName?: true
    subtitle?: true
    totalPrice?: true
    discountedPrice?: true
    status?: true
    paymentStatus?: true
    paymentMethod?: true
    notes?: true
    createdAt?: true
    updatedAt?: true
  }

  export type PackageOrderMaxAggregateInputType = {
    id?: true
    orderCode?: true
    patientId?: true
    outletId?: true
    packageId?: true
    packageName?: true
    subtitle?: true
    totalPrice?: true
    discountedPrice?: true
    status?: true
    paymentStatus?: true
    paymentMethod?: true
    notes?: true
    createdAt?: true
    updatedAt?: true
  }

  export type PackageOrderCountAggregateInputType = {
    id?: true
    orderCode?: true
    patientId?: true
    outletId?: true
    packageId?: true
    packageName?: true
    subtitle?: true
    totalPrice?: true
    discountedPrice?: true
    status?: true
    paymentStatus?: true
    paymentMethod?: true
    notes?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type PackageOrderAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which PackageOrder to aggregate.
     */
    where?: PackageOrderWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of PackageOrders to fetch.
     */
    orderBy?: PackageOrderOrderByWithRelationInput | PackageOrderOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: PackageOrderWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` PackageOrders from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` PackageOrders.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned PackageOrders
    **/
    _count?: true | PackageOrderCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: PackageOrderAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: PackageOrderSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: PackageOrderMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: PackageOrderMaxAggregateInputType
  }

  export type GetPackageOrderAggregateType<T extends PackageOrderAggregateArgs> = {
        [P in keyof T & keyof AggregatePackageOrder]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregatePackageOrder[P]>
      : GetScalarType<T[P], AggregatePackageOrder[P]>
  }




  export type PackageOrderGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: PackageOrderWhereInput
    orderBy?: PackageOrderOrderByWithAggregationInput | PackageOrderOrderByWithAggregationInput[]
    by: PackageOrderScalarFieldEnum[] | PackageOrderScalarFieldEnum
    having?: PackageOrderScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: PackageOrderCountAggregateInputType | true
    _avg?: PackageOrderAvgAggregateInputType
    _sum?: PackageOrderSumAggregateInputType
    _min?: PackageOrderMinAggregateInputType
    _max?: PackageOrderMaxAggregateInputType
  }

  export type PackageOrderGroupByOutputType = {
    id: string
    orderCode: string
    patientId: string
    outletId: string | null
    packageId: string
    packageName: string
    subtitle: string | null
    totalPrice: Decimal
    discountedPrice: Decimal
    status: $Enums.PackageOrderStatus
    paymentStatus: $Enums.PackagePaymentStatus
    paymentMethod: $Enums.PackagePaymentMethod | null
    notes: string | null
    createdAt: Date
    updatedAt: Date
    _count: PackageOrderCountAggregateOutputType | null
    _avg: PackageOrderAvgAggregateOutputType | null
    _sum: PackageOrderSumAggregateOutputType | null
    _min: PackageOrderMinAggregateOutputType | null
    _max: PackageOrderMaxAggregateOutputType | null
  }

  type GetPackageOrderGroupByPayload<T extends PackageOrderGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<PackageOrderGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof PackageOrderGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], PackageOrderGroupByOutputType[P]>
            : GetScalarType<T[P], PackageOrderGroupByOutputType[P]>
        }
      >
    >


  export type PackageOrderSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    orderCode?: boolean
    patientId?: boolean
    outletId?: boolean
    packageId?: boolean
    packageName?: boolean
    subtitle?: boolean
    totalPrice?: boolean
    discountedPrice?: boolean
    status?: boolean
    paymentStatus?: boolean
    paymentMethod?: boolean
    notes?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    items?: boolean | PackageOrder$itemsArgs<ExtArgs>
    payment?: boolean | PackageOrder$paymentArgs<ExtArgs>
    _count?: boolean | PackageOrderCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["packageOrder"]>



  export type PackageOrderSelectScalar = {
    id?: boolean
    orderCode?: boolean
    patientId?: boolean
    outletId?: boolean
    packageId?: boolean
    packageName?: boolean
    subtitle?: boolean
    totalPrice?: boolean
    discountedPrice?: boolean
    status?: boolean
    paymentStatus?: boolean
    paymentMethod?: boolean
    notes?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type PackageOrderOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "orderCode" | "patientId" | "outletId" | "packageId" | "packageName" | "subtitle" | "totalPrice" | "discountedPrice" | "status" | "paymentStatus" | "paymentMethod" | "notes" | "createdAt" | "updatedAt", ExtArgs["result"]["packageOrder"]>
  export type PackageOrderInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    items?: boolean | PackageOrder$itemsArgs<ExtArgs>
    payment?: boolean | PackageOrder$paymentArgs<ExtArgs>
    _count?: boolean | PackageOrderCountOutputTypeDefaultArgs<ExtArgs>
  }

  export type $PackageOrderPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "PackageOrder"
    objects: {
      items: Prisma.$PackageOrderItemPayload<ExtArgs>[]
      payment: Prisma.$PackagePaymentPayload<ExtArgs> | null
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      orderCode: string
      patientId: string
      outletId: string | null
      packageId: string
      packageName: string
      subtitle: string | null
      totalPrice: Prisma.Decimal
      discountedPrice: Prisma.Decimal
      status: $Enums.PackageOrderStatus
      paymentStatus: $Enums.PackagePaymentStatus
      paymentMethod: $Enums.PackagePaymentMethod | null
      notes: string | null
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["packageOrder"]>
    composites: {}
  }

  type PackageOrderGetPayload<S extends boolean | null | undefined | PackageOrderDefaultArgs> = $Result.GetResult<Prisma.$PackageOrderPayload, S>

  type PackageOrderCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<PackageOrderFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: PackageOrderCountAggregateInputType | true
    }

  export interface PackageOrderDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['PackageOrder'], meta: { name: 'PackageOrder' } }
    /**
     * Find zero or one PackageOrder that matches the filter.
     * @param {PackageOrderFindUniqueArgs} args - Arguments to find a PackageOrder
     * @example
     * // Get one PackageOrder
     * const packageOrder = await prisma.packageOrder.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends PackageOrderFindUniqueArgs>(args: SelectSubset<T, PackageOrderFindUniqueArgs<ExtArgs>>): Prisma__PackageOrderClient<$Result.GetResult<Prisma.$PackageOrderPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one PackageOrder that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {PackageOrderFindUniqueOrThrowArgs} args - Arguments to find a PackageOrder
     * @example
     * // Get one PackageOrder
     * const packageOrder = await prisma.packageOrder.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends PackageOrderFindUniqueOrThrowArgs>(args: SelectSubset<T, PackageOrderFindUniqueOrThrowArgs<ExtArgs>>): Prisma__PackageOrderClient<$Result.GetResult<Prisma.$PackageOrderPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first PackageOrder that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PackageOrderFindFirstArgs} args - Arguments to find a PackageOrder
     * @example
     * // Get one PackageOrder
     * const packageOrder = await prisma.packageOrder.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends PackageOrderFindFirstArgs>(args?: SelectSubset<T, PackageOrderFindFirstArgs<ExtArgs>>): Prisma__PackageOrderClient<$Result.GetResult<Prisma.$PackageOrderPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first PackageOrder that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PackageOrderFindFirstOrThrowArgs} args - Arguments to find a PackageOrder
     * @example
     * // Get one PackageOrder
     * const packageOrder = await prisma.packageOrder.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends PackageOrderFindFirstOrThrowArgs>(args?: SelectSubset<T, PackageOrderFindFirstOrThrowArgs<ExtArgs>>): Prisma__PackageOrderClient<$Result.GetResult<Prisma.$PackageOrderPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more PackageOrders that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PackageOrderFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all PackageOrders
     * const packageOrders = await prisma.packageOrder.findMany()
     * 
     * // Get first 10 PackageOrders
     * const packageOrders = await prisma.packageOrder.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const packageOrderWithIdOnly = await prisma.packageOrder.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends PackageOrderFindManyArgs>(args?: SelectSubset<T, PackageOrderFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PackageOrderPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a PackageOrder.
     * @param {PackageOrderCreateArgs} args - Arguments to create a PackageOrder.
     * @example
     * // Create one PackageOrder
     * const PackageOrder = await prisma.packageOrder.create({
     *   data: {
     *     // ... data to create a PackageOrder
     *   }
     * })
     * 
     */
    create<T extends PackageOrderCreateArgs>(args: SelectSubset<T, PackageOrderCreateArgs<ExtArgs>>): Prisma__PackageOrderClient<$Result.GetResult<Prisma.$PackageOrderPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many PackageOrders.
     * @param {PackageOrderCreateManyArgs} args - Arguments to create many PackageOrders.
     * @example
     * // Create many PackageOrders
     * const packageOrder = await prisma.packageOrder.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends PackageOrderCreateManyArgs>(args?: SelectSubset<T, PackageOrderCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a PackageOrder.
     * @param {PackageOrderDeleteArgs} args - Arguments to delete one PackageOrder.
     * @example
     * // Delete one PackageOrder
     * const PackageOrder = await prisma.packageOrder.delete({
     *   where: {
     *     // ... filter to delete one PackageOrder
     *   }
     * })
     * 
     */
    delete<T extends PackageOrderDeleteArgs>(args: SelectSubset<T, PackageOrderDeleteArgs<ExtArgs>>): Prisma__PackageOrderClient<$Result.GetResult<Prisma.$PackageOrderPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one PackageOrder.
     * @param {PackageOrderUpdateArgs} args - Arguments to update one PackageOrder.
     * @example
     * // Update one PackageOrder
     * const packageOrder = await prisma.packageOrder.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends PackageOrderUpdateArgs>(args: SelectSubset<T, PackageOrderUpdateArgs<ExtArgs>>): Prisma__PackageOrderClient<$Result.GetResult<Prisma.$PackageOrderPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more PackageOrders.
     * @param {PackageOrderDeleteManyArgs} args - Arguments to filter PackageOrders to delete.
     * @example
     * // Delete a few PackageOrders
     * const { count } = await prisma.packageOrder.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends PackageOrderDeleteManyArgs>(args?: SelectSubset<T, PackageOrderDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more PackageOrders.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PackageOrderUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many PackageOrders
     * const packageOrder = await prisma.packageOrder.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends PackageOrderUpdateManyArgs>(args: SelectSubset<T, PackageOrderUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one PackageOrder.
     * @param {PackageOrderUpsertArgs} args - Arguments to update or create a PackageOrder.
     * @example
     * // Update or create a PackageOrder
     * const packageOrder = await prisma.packageOrder.upsert({
     *   create: {
     *     // ... data to create a PackageOrder
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the PackageOrder we want to update
     *   }
     * })
     */
    upsert<T extends PackageOrderUpsertArgs>(args: SelectSubset<T, PackageOrderUpsertArgs<ExtArgs>>): Prisma__PackageOrderClient<$Result.GetResult<Prisma.$PackageOrderPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of PackageOrders.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PackageOrderCountArgs} args - Arguments to filter PackageOrders to count.
     * @example
     * // Count the number of PackageOrders
     * const count = await prisma.packageOrder.count({
     *   where: {
     *     // ... the filter for the PackageOrders we want to count
     *   }
     * })
    **/
    count<T extends PackageOrderCountArgs>(
      args?: Subset<T, PackageOrderCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], PackageOrderCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a PackageOrder.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PackageOrderAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends PackageOrderAggregateArgs>(args: Subset<T, PackageOrderAggregateArgs>): Prisma.PrismaPromise<GetPackageOrderAggregateType<T>>

    /**
     * Group by PackageOrder.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PackageOrderGroupByArgs} args - Group by arguments.
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
      T extends PackageOrderGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: PackageOrderGroupByArgs['orderBy'] }
        : { orderBy?: PackageOrderGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, PackageOrderGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetPackageOrderGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the PackageOrder model
   */
  readonly fields: PackageOrderFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for PackageOrder.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__PackageOrderClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    items<T extends PackageOrder$itemsArgs<ExtArgs> = {}>(args?: Subset<T, PackageOrder$itemsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PackageOrderItemPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    payment<T extends PackageOrder$paymentArgs<ExtArgs> = {}>(args?: Subset<T, PackageOrder$paymentArgs<ExtArgs>>): Prisma__PackagePaymentClient<$Result.GetResult<Prisma.$PackagePaymentPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the PackageOrder model
   */
  interface PackageOrderFieldRefs {
    readonly id: FieldRef<"PackageOrder", 'String'>
    readonly orderCode: FieldRef<"PackageOrder", 'String'>
    readonly patientId: FieldRef<"PackageOrder", 'String'>
    readonly outletId: FieldRef<"PackageOrder", 'String'>
    readonly packageId: FieldRef<"PackageOrder", 'String'>
    readonly packageName: FieldRef<"PackageOrder", 'String'>
    readonly subtitle: FieldRef<"PackageOrder", 'String'>
    readonly totalPrice: FieldRef<"PackageOrder", 'Decimal'>
    readonly discountedPrice: FieldRef<"PackageOrder", 'Decimal'>
    readonly status: FieldRef<"PackageOrder", 'PackageOrderStatus'>
    readonly paymentStatus: FieldRef<"PackageOrder", 'PackagePaymentStatus'>
    readonly paymentMethod: FieldRef<"PackageOrder", 'PackagePaymentMethod'>
    readonly notes: FieldRef<"PackageOrder", 'String'>
    readonly createdAt: FieldRef<"PackageOrder", 'DateTime'>
    readonly updatedAt: FieldRef<"PackageOrder", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * PackageOrder findUnique
   */
  export type PackageOrderFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PackageOrder
     */
    select?: PackageOrderSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PackageOrder
     */
    omit?: PackageOrderOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PackageOrderInclude<ExtArgs> | null
    /**
     * Filter, which PackageOrder to fetch.
     */
    where: PackageOrderWhereUniqueInput
  }

  /**
   * PackageOrder findUniqueOrThrow
   */
  export type PackageOrderFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PackageOrder
     */
    select?: PackageOrderSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PackageOrder
     */
    omit?: PackageOrderOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PackageOrderInclude<ExtArgs> | null
    /**
     * Filter, which PackageOrder to fetch.
     */
    where: PackageOrderWhereUniqueInput
  }

  /**
   * PackageOrder findFirst
   */
  export type PackageOrderFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PackageOrder
     */
    select?: PackageOrderSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PackageOrder
     */
    omit?: PackageOrderOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PackageOrderInclude<ExtArgs> | null
    /**
     * Filter, which PackageOrder to fetch.
     */
    where?: PackageOrderWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of PackageOrders to fetch.
     */
    orderBy?: PackageOrderOrderByWithRelationInput | PackageOrderOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for PackageOrders.
     */
    cursor?: PackageOrderWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` PackageOrders from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` PackageOrders.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of PackageOrders.
     */
    distinct?: PackageOrderScalarFieldEnum | PackageOrderScalarFieldEnum[]
  }

  /**
   * PackageOrder findFirstOrThrow
   */
  export type PackageOrderFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PackageOrder
     */
    select?: PackageOrderSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PackageOrder
     */
    omit?: PackageOrderOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PackageOrderInclude<ExtArgs> | null
    /**
     * Filter, which PackageOrder to fetch.
     */
    where?: PackageOrderWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of PackageOrders to fetch.
     */
    orderBy?: PackageOrderOrderByWithRelationInput | PackageOrderOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for PackageOrders.
     */
    cursor?: PackageOrderWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` PackageOrders from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` PackageOrders.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of PackageOrders.
     */
    distinct?: PackageOrderScalarFieldEnum | PackageOrderScalarFieldEnum[]
  }

  /**
   * PackageOrder findMany
   */
  export type PackageOrderFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PackageOrder
     */
    select?: PackageOrderSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PackageOrder
     */
    omit?: PackageOrderOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PackageOrderInclude<ExtArgs> | null
    /**
     * Filter, which PackageOrders to fetch.
     */
    where?: PackageOrderWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of PackageOrders to fetch.
     */
    orderBy?: PackageOrderOrderByWithRelationInput | PackageOrderOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing PackageOrders.
     */
    cursor?: PackageOrderWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` PackageOrders from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` PackageOrders.
     */
    skip?: number
    distinct?: PackageOrderScalarFieldEnum | PackageOrderScalarFieldEnum[]
  }

  /**
   * PackageOrder create
   */
  export type PackageOrderCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PackageOrder
     */
    select?: PackageOrderSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PackageOrder
     */
    omit?: PackageOrderOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PackageOrderInclude<ExtArgs> | null
    /**
     * The data needed to create a PackageOrder.
     */
    data: XOR<PackageOrderCreateInput, PackageOrderUncheckedCreateInput>
  }

  /**
   * PackageOrder createMany
   */
  export type PackageOrderCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many PackageOrders.
     */
    data: PackageOrderCreateManyInput | PackageOrderCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * PackageOrder update
   */
  export type PackageOrderUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PackageOrder
     */
    select?: PackageOrderSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PackageOrder
     */
    omit?: PackageOrderOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PackageOrderInclude<ExtArgs> | null
    /**
     * The data needed to update a PackageOrder.
     */
    data: XOR<PackageOrderUpdateInput, PackageOrderUncheckedUpdateInput>
    /**
     * Choose, which PackageOrder to update.
     */
    where: PackageOrderWhereUniqueInput
  }

  /**
   * PackageOrder updateMany
   */
  export type PackageOrderUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update PackageOrders.
     */
    data: XOR<PackageOrderUpdateManyMutationInput, PackageOrderUncheckedUpdateManyInput>
    /**
     * Filter which PackageOrders to update
     */
    where?: PackageOrderWhereInput
    /**
     * Limit how many PackageOrders to update.
     */
    limit?: number
  }

  /**
   * PackageOrder upsert
   */
  export type PackageOrderUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PackageOrder
     */
    select?: PackageOrderSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PackageOrder
     */
    omit?: PackageOrderOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PackageOrderInclude<ExtArgs> | null
    /**
     * The filter to search for the PackageOrder to update in case it exists.
     */
    where: PackageOrderWhereUniqueInput
    /**
     * In case the PackageOrder found by the `where` argument doesn't exist, create a new PackageOrder with this data.
     */
    create: XOR<PackageOrderCreateInput, PackageOrderUncheckedCreateInput>
    /**
     * In case the PackageOrder was found with the provided `where` argument, update it with this data.
     */
    update: XOR<PackageOrderUpdateInput, PackageOrderUncheckedUpdateInput>
  }

  /**
   * PackageOrder delete
   */
  export type PackageOrderDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PackageOrder
     */
    select?: PackageOrderSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PackageOrder
     */
    omit?: PackageOrderOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PackageOrderInclude<ExtArgs> | null
    /**
     * Filter which PackageOrder to delete.
     */
    where: PackageOrderWhereUniqueInput
  }

  /**
   * PackageOrder deleteMany
   */
  export type PackageOrderDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which PackageOrders to delete
     */
    where?: PackageOrderWhereInput
    /**
     * Limit how many PackageOrders to delete.
     */
    limit?: number
  }

  /**
   * PackageOrder.items
   */
  export type PackageOrder$itemsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PackageOrderItem
     */
    select?: PackageOrderItemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PackageOrderItem
     */
    omit?: PackageOrderItemOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PackageOrderItemInclude<ExtArgs> | null
    where?: PackageOrderItemWhereInput
    orderBy?: PackageOrderItemOrderByWithRelationInput | PackageOrderItemOrderByWithRelationInput[]
    cursor?: PackageOrderItemWhereUniqueInput
    take?: number
    skip?: number
    distinct?: PackageOrderItemScalarFieldEnum | PackageOrderItemScalarFieldEnum[]
  }

  /**
   * PackageOrder.payment
   */
  export type PackageOrder$paymentArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PackagePayment
     */
    select?: PackagePaymentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PackagePayment
     */
    omit?: PackagePaymentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PackagePaymentInclude<ExtArgs> | null
    where?: PackagePaymentWhereInput
  }

  /**
   * PackageOrder without action
   */
  export type PackageOrderDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PackageOrder
     */
    select?: PackageOrderSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PackageOrder
     */
    omit?: PackageOrderOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PackageOrderInclude<ExtArgs> | null
  }


  /**
   * Model PackageOrderItem
   */

  export type AggregatePackageOrderItem = {
    _count: PackageOrderItemCountAggregateOutputType | null
    _avg: PackageOrderItemAvgAggregateOutputType | null
    _sum: PackageOrderItemSumAggregateOutputType | null
    _min: PackageOrderItemMinAggregateOutputType | null
    _max: PackageOrderItemMaxAggregateOutputType | null
  }

  export type PackageOrderItemAvgAggregateOutputType = {
    price: Decimal | null
  }

  export type PackageOrderItemSumAggregateOutputType = {
    price: Decimal | null
  }

  export type PackageOrderItemMinAggregateOutputType = {
    id: string | null
    orderId: string | null
    testId: string | null
    testName: string | null
    testCode: string | null
    price: Decimal | null
    createdAt: Date | null
  }

  export type PackageOrderItemMaxAggregateOutputType = {
    id: string | null
    orderId: string | null
    testId: string | null
    testName: string | null
    testCode: string | null
    price: Decimal | null
    createdAt: Date | null
  }

  export type PackageOrderItemCountAggregateOutputType = {
    id: number
    orderId: number
    testId: number
    testName: number
    testCode: number
    price: number
    createdAt: number
    _all: number
  }


  export type PackageOrderItemAvgAggregateInputType = {
    price?: true
  }

  export type PackageOrderItemSumAggregateInputType = {
    price?: true
  }

  export type PackageOrderItemMinAggregateInputType = {
    id?: true
    orderId?: true
    testId?: true
    testName?: true
    testCode?: true
    price?: true
    createdAt?: true
  }

  export type PackageOrderItemMaxAggregateInputType = {
    id?: true
    orderId?: true
    testId?: true
    testName?: true
    testCode?: true
    price?: true
    createdAt?: true
  }

  export type PackageOrderItemCountAggregateInputType = {
    id?: true
    orderId?: true
    testId?: true
    testName?: true
    testCode?: true
    price?: true
    createdAt?: true
    _all?: true
  }

  export type PackageOrderItemAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which PackageOrderItem to aggregate.
     */
    where?: PackageOrderItemWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of PackageOrderItems to fetch.
     */
    orderBy?: PackageOrderItemOrderByWithRelationInput | PackageOrderItemOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: PackageOrderItemWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` PackageOrderItems from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` PackageOrderItems.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned PackageOrderItems
    **/
    _count?: true | PackageOrderItemCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: PackageOrderItemAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: PackageOrderItemSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: PackageOrderItemMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: PackageOrderItemMaxAggregateInputType
  }

  export type GetPackageOrderItemAggregateType<T extends PackageOrderItemAggregateArgs> = {
        [P in keyof T & keyof AggregatePackageOrderItem]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregatePackageOrderItem[P]>
      : GetScalarType<T[P], AggregatePackageOrderItem[P]>
  }




  export type PackageOrderItemGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: PackageOrderItemWhereInput
    orderBy?: PackageOrderItemOrderByWithAggregationInput | PackageOrderItemOrderByWithAggregationInput[]
    by: PackageOrderItemScalarFieldEnum[] | PackageOrderItemScalarFieldEnum
    having?: PackageOrderItemScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: PackageOrderItemCountAggregateInputType | true
    _avg?: PackageOrderItemAvgAggregateInputType
    _sum?: PackageOrderItemSumAggregateInputType
    _min?: PackageOrderItemMinAggregateInputType
    _max?: PackageOrderItemMaxAggregateInputType
  }

  export type PackageOrderItemGroupByOutputType = {
    id: string
    orderId: string
    testId: string
    testName: string
    testCode: string | null
    price: Decimal
    createdAt: Date
    _count: PackageOrderItemCountAggregateOutputType | null
    _avg: PackageOrderItemAvgAggregateOutputType | null
    _sum: PackageOrderItemSumAggregateOutputType | null
    _min: PackageOrderItemMinAggregateOutputType | null
    _max: PackageOrderItemMaxAggregateOutputType | null
  }

  type GetPackageOrderItemGroupByPayload<T extends PackageOrderItemGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<PackageOrderItemGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof PackageOrderItemGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], PackageOrderItemGroupByOutputType[P]>
            : GetScalarType<T[P], PackageOrderItemGroupByOutputType[P]>
        }
      >
    >


  export type PackageOrderItemSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    orderId?: boolean
    testId?: boolean
    testName?: boolean
    testCode?: boolean
    price?: boolean
    createdAt?: boolean
    order?: boolean | PackageOrderDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["packageOrderItem"]>



  export type PackageOrderItemSelectScalar = {
    id?: boolean
    orderId?: boolean
    testId?: boolean
    testName?: boolean
    testCode?: boolean
    price?: boolean
    createdAt?: boolean
  }

  export type PackageOrderItemOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "orderId" | "testId" | "testName" | "testCode" | "price" | "createdAt", ExtArgs["result"]["packageOrderItem"]>
  export type PackageOrderItemInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    order?: boolean | PackageOrderDefaultArgs<ExtArgs>
  }

  export type $PackageOrderItemPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "PackageOrderItem"
    objects: {
      order: Prisma.$PackageOrderPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      orderId: string
      testId: string
      testName: string
      testCode: string | null
      price: Prisma.Decimal
      createdAt: Date
    }, ExtArgs["result"]["packageOrderItem"]>
    composites: {}
  }

  type PackageOrderItemGetPayload<S extends boolean | null | undefined | PackageOrderItemDefaultArgs> = $Result.GetResult<Prisma.$PackageOrderItemPayload, S>

  type PackageOrderItemCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<PackageOrderItemFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: PackageOrderItemCountAggregateInputType | true
    }

  export interface PackageOrderItemDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['PackageOrderItem'], meta: { name: 'PackageOrderItem' } }
    /**
     * Find zero or one PackageOrderItem that matches the filter.
     * @param {PackageOrderItemFindUniqueArgs} args - Arguments to find a PackageOrderItem
     * @example
     * // Get one PackageOrderItem
     * const packageOrderItem = await prisma.packageOrderItem.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends PackageOrderItemFindUniqueArgs>(args: SelectSubset<T, PackageOrderItemFindUniqueArgs<ExtArgs>>): Prisma__PackageOrderItemClient<$Result.GetResult<Prisma.$PackageOrderItemPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one PackageOrderItem that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {PackageOrderItemFindUniqueOrThrowArgs} args - Arguments to find a PackageOrderItem
     * @example
     * // Get one PackageOrderItem
     * const packageOrderItem = await prisma.packageOrderItem.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends PackageOrderItemFindUniqueOrThrowArgs>(args: SelectSubset<T, PackageOrderItemFindUniqueOrThrowArgs<ExtArgs>>): Prisma__PackageOrderItemClient<$Result.GetResult<Prisma.$PackageOrderItemPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first PackageOrderItem that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PackageOrderItemFindFirstArgs} args - Arguments to find a PackageOrderItem
     * @example
     * // Get one PackageOrderItem
     * const packageOrderItem = await prisma.packageOrderItem.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends PackageOrderItemFindFirstArgs>(args?: SelectSubset<T, PackageOrderItemFindFirstArgs<ExtArgs>>): Prisma__PackageOrderItemClient<$Result.GetResult<Prisma.$PackageOrderItemPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first PackageOrderItem that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PackageOrderItemFindFirstOrThrowArgs} args - Arguments to find a PackageOrderItem
     * @example
     * // Get one PackageOrderItem
     * const packageOrderItem = await prisma.packageOrderItem.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends PackageOrderItemFindFirstOrThrowArgs>(args?: SelectSubset<T, PackageOrderItemFindFirstOrThrowArgs<ExtArgs>>): Prisma__PackageOrderItemClient<$Result.GetResult<Prisma.$PackageOrderItemPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more PackageOrderItems that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PackageOrderItemFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all PackageOrderItems
     * const packageOrderItems = await prisma.packageOrderItem.findMany()
     * 
     * // Get first 10 PackageOrderItems
     * const packageOrderItems = await prisma.packageOrderItem.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const packageOrderItemWithIdOnly = await prisma.packageOrderItem.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends PackageOrderItemFindManyArgs>(args?: SelectSubset<T, PackageOrderItemFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PackageOrderItemPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a PackageOrderItem.
     * @param {PackageOrderItemCreateArgs} args - Arguments to create a PackageOrderItem.
     * @example
     * // Create one PackageOrderItem
     * const PackageOrderItem = await prisma.packageOrderItem.create({
     *   data: {
     *     // ... data to create a PackageOrderItem
     *   }
     * })
     * 
     */
    create<T extends PackageOrderItemCreateArgs>(args: SelectSubset<T, PackageOrderItemCreateArgs<ExtArgs>>): Prisma__PackageOrderItemClient<$Result.GetResult<Prisma.$PackageOrderItemPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many PackageOrderItems.
     * @param {PackageOrderItemCreateManyArgs} args - Arguments to create many PackageOrderItems.
     * @example
     * // Create many PackageOrderItems
     * const packageOrderItem = await prisma.packageOrderItem.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends PackageOrderItemCreateManyArgs>(args?: SelectSubset<T, PackageOrderItemCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a PackageOrderItem.
     * @param {PackageOrderItemDeleteArgs} args - Arguments to delete one PackageOrderItem.
     * @example
     * // Delete one PackageOrderItem
     * const PackageOrderItem = await prisma.packageOrderItem.delete({
     *   where: {
     *     // ... filter to delete one PackageOrderItem
     *   }
     * })
     * 
     */
    delete<T extends PackageOrderItemDeleteArgs>(args: SelectSubset<T, PackageOrderItemDeleteArgs<ExtArgs>>): Prisma__PackageOrderItemClient<$Result.GetResult<Prisma.$PackageOrderItemPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one PackageOrderItem.
     * @param {PackageOrderItemUpdateArgs} args - Arguments to update one PackageOrderItem.
     * @example
     * // Update one PackageOrderItem
     * const packageOrderItem = await prisma.packageOrderItem.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends PackageOrderItemUpdateArgs>(args: SelectSubset<T, PackageOrderItemUpdateArgs<ExtArgs>>): Prisma__PackageOrderItemClient<$Result.GetResult<Prisma.$PackageOrderItemPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more PackageOrderItems.
     * @param {PackageOrderItemDeleteManyArgs} args - Arguments to filter PackageOrderItems to delete.
     * @example
     * // Delete a few PackageOrderItems
     * const { count } = await prisma.packageOrderItem.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends PackageOrderItemDeleteManyArgs>(args?: SelectSubset<T, PackageOrderItemDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more PackageOrderItems.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PackageOrderItemUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many PackageOrderItems
     * const packageOrderItem = await prisma.packageOrderItem.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends PackageOrderItemUpdateManyArgs>(args: SelectSubset<T, PackageOrderItemUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one PackageOrderItem.
     * @param {PackageOrderItemUpsertArgs} args - Arguments to update or create a PackageOrderItem.
     * @example
     * // Update or create a PackageOrderItem
     * const packageOrderItem = await prisma.packageOrderItem.upsert({
     *   create: {
     *     // ... data to create a PackageOrderItem
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the PackageOrderItem we want to update
     *   }
     * })
     */
    upsert<T extends PackageOrderItemUpsertArgs>(args: SelectSubset<T, PackageOrderItemUpsertArgs<ExtArgs>>): Prisma__PackageOrderItemClient<$Result.GetResult<Prisma.$PackageOrderItemPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of PackageOrderItems.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PackageOrderItemCountArgs} args - Arguments to filter PackageOrderItems to count.
     * @example
     * // Count the number of PackageOrderItems
     * const count = await prisma.packageOrderItem.count({
     *   where: {
     *     // ... the filter for the PackageOrderItems we want to count
     *   }
     * })
    **/
    count<T extends PackageOrderItemCountArgs>(
      args?: Subset<T, PackageOrderItemCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], PackageOrderItemCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a PackageOrderItem.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PackageOrderItemAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends PackageOrderItemAggregateArgs>(args: Subset<T, PackageOrderItemAggregateArgs>): Prisma.PrismaPromise<GetPackageOrderItemAggregateType<T>>

    /**
     * Group by PackageOrderItem.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PackageOrderItemGroupByArgs} args - Group by arguments.
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
      T extends PackageOrderItemGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: PackageOrderItemGroupByArgs['orderBy'] }
        : { orderBy?: PackageOrderItemGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, PackageOrderItemGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetPackageOrderItemGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the PackageOrderItem model
   */
  readonly fields: PackageOrderItemFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for PackageOrderItem.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__PackageOrderItemClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    order<T extends PackageOrderDefaultArgs<ExtArgs> = {}>(args?: Subset<T, PackageOrderDefaultArgs<ExtArgs>>): Prisma__PackageOrderClient<$Result.GetResult<Prisma.$PackageOrderPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the PackageOrderItem model
   */
  interface PackageOrderItemFieldRefs {
    readonly id: FieldRef<"PackageOrderItem", 'String'>
    readonly orderId: FieldRef<"PackageOrderItem", 'String'>
    readonly testId: FieldRef<"PackageOrderItem", 'String'>
    readonly testName: FieldRef<"PackageOrderItem", 'String'>
    readonly testCode: FieldRef<"PackageOrderItem", 'String'>
    readonly price: FieldRef<"PackageOrderItem", 'Decimal'>
    readonly createdAt: FieldRef<"PackageOrderItem", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * PackageOrderItem findUnique
   */
  export type PackageOrderItemFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PackageOrderItem
     */
    select?: PackageOrderItemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PackageOrderItem
     */
    omit?: PackageOrderItemOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PackageOrderItemInclude<ExtArgs> | null
    /**
     * Filter, which PackageOrderItem to fetch.
     */
    where: PackageOrderItemWhereUniqueInput
  }

  /**
   * PackageOrderItem findUniqueOrThrow
   */
  export type PackageOrderItemFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PackageOrderItem
     */
    select?: PackageOrderItemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PackageOrderItem
     */
    omit?: PackageOrderItemOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PackageOrderItemInclude<ExtArgs> | null
    /**
     * Filter, which PackageOrderItem to fetch.
     */
    where: PackageOrderItemWhereUniqueInput
  }

  /**
   * PackageOrderItem findFirst
   */
  export type PackageOrderItemFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PackageOrderItem
     */
    select?: PackageOrderItemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PackageOrderItem
     */
    omit?: PackageOrderItemOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PackageOrderItemInclude<ExtArgs> | null
    /**
     * Filter, which PackageOrderItem to fetch.
     */
    where?: PackageOrderItemWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of PackageOrderItems to fetch.
     */
    orderBy?: PackageOrderItemOrderByWithRelationInput | PackageOrderItemOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for PackageOrderItems.
     */
    cursor?: PackageOrderItemWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` PackageOrderItems from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` PackageOrderItems.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of PackageOrderItems.
     */
    distinct?: PackageOrderItemScalarFieldEnum | PackageOrderItemScalarFieldEnum[]
  }

  /**
   * PackageOrderItem findFirstOrThrow
   */
  export type PackageOrderItemFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PackageOrderItem
     */
    select?: PackageOrderItemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PackageOrderItem
     */
    omit?: PackageOrderItemOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PackageOrderItemInclude<ExtArgs> | null
    /**
     * Filter, which PackageOrderItem to fetch.
     */
    where?: PackageOrderItemWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of PackageOrderItems to fetch.
     */
    orderBy?: PackageOrderItemOrderByWithRelationInput | PackageOrderItemOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for PackageOrderItems.
     */
    cursor?: PackageOrderItemWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` PackageOrderItems from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` PackageOrderItems.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of PackageOrderItems.
     */
    distinct?: PackageOrderItemScalarFieldEnum | PackageOrderItemScalarFieldEnum[]
  }

  /**
   * PackageOrderItem findMany
   */
  export type PackageOrderItemFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PackageOrderItem
     */
    select?: PackageOrderItemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PackageOrderItem
     */
    omit?: PackageOrderItemOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PackageOrderItemInclude<ExtArgs> | null
    /**
     * Filter, which PackageOrderItems to fetch.
     */
    where?: PackageOrderItemWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of PackageOrderItems to fetch.
     */
    orderBy?: PackageOrderItemOrderByWithRelationInput | PackageOrderItemOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing PackageOrderItems.
     */
    cursor?: PackageOrderItemWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` PackageOrderItems from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` PackageOrderItems.
     */
    skip?: number
    distinct?: PackageOrderItemScalarFieldEnum | PackageOrderItemScalarFieldEnum[]
  }

  /**
   * PackageOrderItem create
   */
  export type PackageOrderItemCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PackageOrderItem
     */
    select?: PackageOrderItemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PackageOrderItem
     */
    omit?: PackageOrderItemOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PackageOrderItemInclude<ExtArgs> | null
    /**
     * The data needed to create a PackageOrderItem.
     */
    data: XOR<PackageOrderItemCreateInput, PackageOrderItemUncheckedCreateInput>
  }

  /**
   * PackageOrderItem createMany
   */
  export type PackageOrderItemCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many PackageOrderItems.
     */
    data: PackageOrderItemCreateManyInput | PackageOrderItemCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * PackageOrderItem update
   */
  export type PackageOrderItemUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PackageOrderItem
     */
    select?: PackageOrderItemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PackageOrderItem
     */
    omit?: PackageOrderItemOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PackageOrderItemInclude<ExtArgs> | null
    /**
     * The data needed to update a PackageOrderItem.
     */
    data: XOR<PackageOrderItemUpdateInput, PackageOrderItemUncheckedUpdateInput>
    /**
     * Choose, which PackageOrderItem to update.
     */
    where: PackageOrderItemWhereUniqueInput
  }

  /**
   * PackageOrderItem updateMany
   */
  export type PackageOrderItemUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update PackageOrderItems.
     */
    data: XOR<PackageOrderItemUpdateManyMutationInput, PackageOrderItemUncheckedUpdateManyInput>
    /**
     * Filter which PackageOrderItems to update
     */
    where?: PackageOrderItemWhereInput
    /**
     * Limit how many PackageOrderItems to update.
     */
    limit?: number
  }

  /**
   * PackageOrderItem upsert
   */
  export type PackageOrderItemUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PackageOrderItem
     */
    select?: PackageOrderItemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PackageOrderItem
     */
    omit?: PackageOrderItemOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PackageOrderItemInclude<ExtArgs> | null
    /**
     * The filter to search for the PackageOrderItem to update in case it exists.
     */
    where: PackageOrderItemWhereUniqueInput
    /**
     * In case the PackageOrderItem found by the `where` argument doesn't exist, create a new PackageOrderItem with this data.
     */
    create: XOR<PackageOrderItemCreateInput, PackageOrderItemUncheckedCreateInput>
    /**
     * In case the PackageOrderItem was found with the provided `where` argument, update it with this data.
     */
    update: XOR<PackageOrderItemUpdateInput, PackageOrderItemUncheckedUpdateInput>
  }

  /**
   * PackageOrderItem delete
   */
  export type PackageOrderItemDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PackageOrderItem
     */
    select?: PackageOrderItemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PackageOrderItem
     */
    omit?: PackageOrderItemOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PackageOrderItemInclude<ExtArgs> | null
    /**
     * Filter which PackageOrderItem to delete.
     */
    where: PackageOrderItemWhereUniqueInput
  }

  /**
   * PackageOrderItem deleteMany
   */
  export type PackageOrderItemDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which PackageOrderItems to delete
     */
    where?: PackageOrderItemWhereInput
    /**
     * Limit how many PackageOrderItems to delete.
     */
    limit?: number
  }

  /**
   * PackageOrderItem without action
   */
  export type PackageOrderItemDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PackageOrderItem
     */
    select?: PackageOrderItemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PackageOrderItem
     */
    omit?: PackageOrderItemOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PackageOrderItemInclude<ExtArgs> | null
  }


  /**
   * Model PackagePayment
   */

  export type AggregatePackagePayment = {
    _count: PackagePaymentCountAggregateOutputType | null
    _avg: PackagePaymentAvgAggregateOutputType | null
    _sum: PackagePaymentSumAggregateOutputType | null
    _min: PackagePaymentMinAggregateOutputType | null
    _max: PackagePaymentMaxAggregateOutputType | null
  }

  export type PackagePaymentAvgAggregateOutputType = {
    amount: Decimal | null
  }

  export type PackagePaymentSumAggregateOutputType = {
    amount: Decimal | null
  }

  export type PackagePaymentMinAggregateOutputType = {
    id: string | null
    orderId: string | null
    amount: Decimal | null
    currency: string | null
    status: $Enums.PackagePaymentStatus | null
    method: $Enums.PackagePaymentMethod | null
    transactionId: string | null
    validationId: string | null
    bankTransactionId: string | null
    paymentMethodName: string | null
    cardType: string | null
    paidAt: Date | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type PackagePaymentMaxAggregateOutputType = {
    id: string | null
    orderId: string | null
    amount: Decimal | null
    currency: string | null
    status: $Enums.PackagePaymentStatus | null
    method: $Enums.PackagePaymentMethod | null
    transactionId: string | null
    validationId: string | null
    bankTransactionId: string | null
    paymentMethodName: string | null
    cardType: string | null
    paidAt: Date | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type PackagePaymentCountAggregateOutputType = {
    id: number
    orderId: number
    amount: number
    currency: number
    status: number
    method: number
    transactionId: number
    validationId: number
    bankTransactionId: number
    paymentMethodName: number
    cardType: number
    gatewayResponse: number
    paidAt: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type PackagePaymentAvgAggregateInputType = {
    amount?: true
  }

  export type PackagePaymentSumAggregateInputType = {
    amount?: true
  }

  export type PackagePaymentMinAggregateInputType = {
    id?: true
    orderId?: true
    amount?: true
    currency?: true
    status?: true
    method?: true
    transactionId?: true
    validationId?: true
    bankTransactionId?: true
    paymentMethodName?: true
    cardType?: true
    paidAt?: true
    createdAt?: true
    updatedAt?: true
  }

  export type PackagePaymentMaxAggregateInputType = {
    id?: true
    orderId?: true
    amount?: true
    currency?: true
    status?: true
    method?: true
    transactionId?: true
    validationId?: true
    bankTransactionId?: true
    paymentMethodName?: true
    cardType?: true
    paidAt?: true
    createdAt?: true
    updatedAt?: true
  }

  export type PackagePaymentCountAggregateInputType = {
    id?: true
    orderId?: true
    amount?: true
    currency?: true
    status?: true
    method?: true
    transactionId?: true
    validationId?: true
    bankTransactionId?: true
    paymentMethodName?: true
    cardType?: true
    gatewayResponse?: true
    paidAt?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type PackagePaymentAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which PackagePayment to aggregate.
     */
    where?: PackagePaymentWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of PackagePayments to fetch.
     */
    orderBy?: PackagePaymentOrderByWithRelationInput | PackagePaymentOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: PackagePaymentWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` PackagePayments from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` PackagePayments.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned PackagePayments
    **/
    _count?: true | PackagePaymentCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: PackagePaymentAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: PackagePaymentSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: PackagePaymentMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: PackagePaymentMaxAggregateInputType
  }

  export type GetPackagePaymentAggregateType<T extends PackagePaymentAggregateArgs> = {
        [P in keyof T & keyof AggregatePackagePayment]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregatePackagePayment[P]>
      : GetScalarType<T[P], AggregatePackagePayment[P]>
  }




  export type PackagePaymentGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: PackagePaymentWhereInput
    orderBy?: PackagePaymentOrderByWithAggregationInput | PackagePaymentOrderByWithAggregationInput[]
    by: PackagePaymentScalarFieldEnum[] | PackagePaymentScalarFieldEnum
    having?: PackagePaymentScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: PackagePaymentCountAggregateInputType | true
    _avg?: PackagePaymentAvgAggregateInputType
    _sum?: PackagePaymentSumAggregateInputType
    _min?: PackagePaymentMinAggregateInputType
    _max?: PackagePaymentMaxAggregateInputType
  }

  export type PackagePaymentGroupByOutputType = {
    id: string
    orderId: string
    amount: Decimal
    currency: string
    status: $Enums.PackagePaymentStatus
    method: $Enums.PackagePaymentMethod
    transactionId: string
    validationId: string | null
    bankTransactionId: string | null
    paymentMethodName: string | null
    cardType: string | null
    gatewayResponse: JsonValue | null
    paidAt: Date | null
    createdAt: Date
    updatedAt: Date
    _count: PackagePaymentCountAggregateOutputType | null
    _avg: PackagePaymentAvgAggregateOutputType | null
    _sum: PackagePaymentSumAggregateOutputType | null
    _min: PackagePaymentMinAggregateOutputType | null
    _max: PackagePaymentMaxAggregateOutputType | null
  }

  type GetPackagePaymentGroupByPayload<T extends PackagePaymentGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<PackagePaymentGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof PackagePaymentGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], PackagePaymentGroupByOutputType[P]>
            : GetScalarType<T[P], PackagePaymentGroupByOutputType[P]>
        }
      >
    >


  export type PackagePaymentSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    orderId?: boolean
    amount?: boolean
    currency?: boolean
    status?: boolean
    method?: boolean
    transactionId?: boolean
    validationId?: boolean
    bankTransactionId?: boolean
    paymentMethodName?: boolean
    cardType?: boolean
    gatewayResponse?: boolean
    paidAt?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    order?: boolean | PackageOrderDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["packagePayment"]>



  export type PackagePaymentSelectScalar = {
    id?: boolean
    orderId?: boolean
    amount?: boolean
    currency?: boolean
    status?: boolean
    method?: boolean
    transactionId?: boolean
    validationId?: boolean
    bankTransactionId?: boolean
    paymentMethodName?: boolean
    cardType?: boolean
    gatewayResponse?: boolean
    paidAt?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type PackagePaymentOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "orderId" | "amount" | "currency" | "status" | "method" | "transactionId" | "validationId" | "bankTransactionId" | "paymentMethodName" | "cardType" | "gatewayResponse" | "paidAt" | "createdAt" | "updatedAt", ExtArgs["result"]["packagePayment"]>
  export type PackagePaymentInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    order?: boolean | PackageOrderDefaultArgs<ExtArgs>
  }

  export type $PackagePaymentPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "PackagePayment"
    objects: {
      order: Prisma.$PackageOrderPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      orderId: string
      amount: Prisma.Decimal
      currency: string
      status: $Enums.PackagePaymentStatus
      method: $Enums.PackagePaymentMethod
      transactionId: string
      validationId: string | null
      bankTransactionId: string | null
      paymentMethodName: string | null
      cardType: string | null
      gatewayResponse: Prisma.JsonValue | null
      paidAt: Date | null
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["packagePayment"]>
    composites: {}
  }

  type PackagePaymentGetPayload<S extends boolean | null | undefined | PackagePaymentDefaultArgs> = $Result.GetResult<Prisma.$PackagePaymentPayload, S>

  type PackagePaymentCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<PackagePaymentFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: PackagePaymentCountAggregateInputType | true
    }

  export interface PackagePaymentDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['PackagePayment'], meta: { name: 'PackagePayment' } }
    /**
     * Find zero or one PackagePayment that matches the filter.
     * @param {PackagePaymentFindUniqueArgs} args - Arguments to find a PackagePayment
     * @example
     * // Get one PackagePayment
     * const packagePayment = await prisma.packagePayment.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends PackagePaymentFindUniqueArgs>(args: SelectSubset<T, PackagePaymentFindUniqueArgs<ExtArgs>>): Prisma__PackagePaymentClient<$Result.GetResult<Prisma.$PackagePaymentPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one PackagePayment that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {PackagePaymentFindUniqueOrThrowArgs} args - Arguments to find a PackagePayment
     * @example
     * // Get one PackagePayment
     * const packagePayment = await prisma.packagePayment.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends PackagePaymentFindUniqueOrThrowArgs>(args: SelectSubset<T, PackagePaymentFindUniqueOrThrowArgs<ExtArgs>>): Prisma__PackagePaymentClient<$Result.GetResult<Prisma.$PackagePaymentPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first PackagePayment that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PackagePaymentFindFirstArgs} args - Arguments to find a PackagePayment
     * @example
     * // Get one PackagePayment
     * const packagePayment = await prisma.packagePayment.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends PackagePaymentFindFirstArgs>(args?: SelectSubset<T, PackagePaymentFindFirstArgs<ExtArgs>>): Prisma__PackagePaymentClient<$Result.GetResult<Prisma.$PackagePaymentPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first PackagePayment that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PackagePaymentFindFirstOrThrowArgs} args - Arguments to find a PackagePayment
     * @example
     * // Get one PackagePayment
     * const packagePayment = await prisma.packagePayment.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends PackagePaymentFindFirstOrThrowArgs>(args?: SelectSubset<T, PackagePaymentFindFirstOrThrowArgs<ExtArgs>>): Prisma__PackagePaymentClient<$Result.GetResult<Prisma.$PackagePaymentPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more PackagePayments that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PackagePaymentFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all PackagePayments
     * const packagePayments = await prisma.packagePayment.findMany()
     * 
     * // Get first 10 PackagePayments
     * const packagePayments = await prisma.packagePayment.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const packagePaymentWithIdOnly = await prisma.packagePayment.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends PackagePaymentFindManyArgs>(args?: SelectSubset<T, PackagePaymentFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PackagePaymentPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a PackagePayment.
     * @param {PackagePaymentCreateArgs} args - Arguments to create a PackagePayment.
     * @example
     * // Create one PackagePayment
     * const PackagePayment = await prisma.packagePayment.create({
     *   data: {
     *     // ... data to create a PackagePayment
     *   }
     * })
     * 
     */
    create<T extends PackagePaymentCreateArgs>(args: SelectSubset<T, PackagePaymentCreateArgs<ExtArgs>>): Prisma__PackagePaymentClient<$Result.GetResult<Prisma.$PackagePaymentPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many PackagePayments.
     * @param {PackagePaymentCreateManyArgs} args - Arguments to create many PackagePayments.
     * @example
     * // Create many PackagePayments
     * const packagePayment = await prisma.packagePayment.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends PackagePaymentCreateManyArgs>(args?: SelectSubset<T, PackagePaymentCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a PackagePayment.
     * @param {PackagePaymentDeleteArgs} args - Arguments to delete one PackagePayment.
     * @example
     * // Delete one PackagePayment
     * const PackagePayment = await prisma.packagePayment.delete({
     *   where: {
     *     // ... filter to delete one PackagePayment
     *   }
     * })
     * 
     */
    delete<T extends PackagePaymentDeleteArgs>(args: SelectSubset<T, PackagePaymentDeleteArgs<ExtArgs>>): Prisma__PackagePaymentClient<$Result.GetResult<Prisma.$PackagePaymentPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one PackagePayment.
     * @param {PackagePaymentUpdateArgs} args - Arguments to update one PackagePayment.
     * @example
     * // Update one PackagePayment
     * const packagePayment = await prisma.packagePayment.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends PackagePaymentUpdateArgs>(args: SelectSubset<T, PackagePaymentUpdateArgs<ExtArgs>>): Prisma__PackagePaymentClient<$Result.GetResult<Prisma.$PackagePaymentPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more PackagePayments.
     * @param {PackagePaymentDeleteManyArgs} args - Arguments to filter PackagePayments to delete.
     * @example
     * // Delete a few PackagePayments
     * const { count } = await prisma.packagePayment.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends PackagePaymentDeleteManyArgs>(args?: SelectSubset<T, PackagePaymentDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more PackagePayments.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PackagePaymentUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many PackagePayments
     * const packagePayment = await prisma.packagePayment.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends PackagePaymentUpdateManyArgs>(args: SelectSubset<T, PackagePaymentUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one PackagePayment.
     * @param {PackagePaymentUpsertArgs} args - Arguments to update or create a PackagePayment.
     * @example
     * // Update or create a PackagePayment
     * const packagePayment = await prisma.packagePayment.upsert({
     *   create: {
     *     // ... data to create a PackagePayment
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the PackagePayment we want to update
     *   }
     * })
     */
    upsert<T extends PackagePaymentUpsertArgs>(args: SelectSubset<T, PackagePaymentUpsertArgs<ExtArgs>>): Prisma__PackagePaymentClient<$Result.GetResult<Prisma.$PackagePaymentPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of PackagePayments.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PackagePaymentCountArgs} args - Arguments to filter PackagePayments to count.
     * @example
     * // Count the number of PackagePayments
     * const count = await prisma.packagePayment.count({
     *   where: {
     *     // ... the filter for the PackagePayments we want to count
     *   }
     * })
    **/
    count<T extends PackagePaymentCountArgs>(
      args?: Subset<T, PackagePaymentCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], PackagePaymentCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a PackagePayment.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PackagePaymentAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends PackagePaymentAggregateArgs>(args: Subset<T, PackagePaymentAggregateArgs>): Prisma.PrismaPromise<GetPackagePaymentAggregateType<T>>

    /**
     * Group by PackagePayment.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PackagePaymentGroupByArgs} args - Group by arguments.
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
      T extends PackagePaymentGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: PackagePaymentGroupByArgs['orderBy'] }
        : { orderBy?: PackagePaymentGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, PackagePaymentGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetPackagePaymentGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the PackagePayment model
   */
  readonly fields: PackagePaymentFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for PackagePayment.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__PackagePaymentClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    order<T extends PackageOrderDefaultArgs<ExtArgs> = {}>(args?: Subset<T, PackageOrderDefaultArgs<ExtArgs>>): Prisma__PackageOrderClient<$Result.GetResult<Prisma.$PackageOrderPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the PackagePayment model
   */
  interface PackagePaymentFieldRefs {
    readonly id: FieldRef<"PackagePayment", 'String'>
    readonly orderId: FieldRef<"PackagePayment", 'String'>
    readonly amount: FieldRef<"PackagePayment", 'Decimal'>
    readonly currency: FieldRef<"PackagePayment", 'String'>
    readonly status: FieldRef<"PackagePayment", 'PackagePaymentStatus'>
    readonly method: FieldRef<"PackagePayment", 'PackagePaymentMethod'>
    readonly transactionId: FieldRef<"PackagePayment", 'String'>
    readonly validationId: FieldRef<"PackagePayment", 'String'>
    readonly bankTransactionId: FieldRef<"PackagePayment", 'String'>
    readonly paymentMethodName: FieldRef<"PackagePayment", 'String'>
    readonly cardType: FieldRef<"PackagePayment", 'String'>
    readonly gatewayResponse: FieldRef<"PackagePayment", 'Json'>
    readonly paidAt: FieldRef<"PackagePayment", 'DateTime'>
    readonly createdAt: FieldRef<"PackagePayment", 'DateTime'>
    readonly updatedAt: FieldRef<"PackagePayment", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * PackagePayment findUnique
   */
  export type PackagePaymentFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PackagePayment
     */
    select?: PackagePaymentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PackagePayment
     */
    omit?: PackagePaymentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PackagePaymentInclude<ExtArgs> | null
    /**
     * Filter, which PackagePayment to fetch.
     */
    where: PackagePaymentWhereUniqueInput
  }

  /**
   * PackagePayment findUniqueOrThrow
   */
  export type PackagePaymentFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PackagePayment
     */
    select?: PackagePaymentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PackagePayment
     */
    omit?: PackagePaymentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PackagePaymentInclude<ExtArgs> | null
    /**
     * Filter, which PackagePayment to fetch.
     */
    where: PackagePaymentWhereUniqueInput
  }

  /**
   * PackagePayment findFirst
   */
  export type PackagePaymentFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PackagePayment
     */
    select?: PackagePaymentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PackagePayment
     */
    omit?: PackagePaymentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PackagePaymentInclude<ExtArgs> | null
    /**
     * Filter, which PackagePayment to fetch.
     */
    where?: PackagePaymentWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of PackagePayments to fetch.
     */
    orderBy?: PackagePaymentOrderByWithRelationInput | PackagePaymentOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for PackagePayments.
     */
    cursor?: PackagePaymentWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` PackagePayments from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` PackagePayments.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of PackagePayments.
     */
    distinct?: PackagePaymentScalarFieldEnum | PackagePaymentScalarFieldEnum[]
  }

  /**
   * PackagePayment findFirstOrThrow
   */
  export type PackagePaymentFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PackagePayment
     */
    select?: PackagePaymentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PackagePayment
     */
    omit?: PackagePaymentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PackagePaymentInclude<ExtArgs> | null
    /**
     * Filter, which PackagePayment to fetch.
     */
    where?: PackagePaymentWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of PackagePayments to fetch.
     */
    orderBy?: PackagePaymentOrderByWithRelationInput | PackagePaymentOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for PackagePayments.
     */
    cursor?: PackagePaymentWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` PackagePayments from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` PackagePayments.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of PackagePayments.
     */
    distinct?: PackagePaymentScalarFieldEnum | PackagePaymentScalarFieldEnum[]
  }

  /**
   * PackagePayment findMany
   */
  export type PackagePaymentFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PackagePayment
     */
    select?: PackagePaymentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PackagePayment
     */
    omit?: PackagePaymentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PackagePaymentInclude<ExtArgs> | null
    /**
     * Filter, which PackagePayments to fetch.
     */
    where?: PackagePaymentWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of PackagePayments to fetch.
     */
    orderBy?: PackagePaymentOrderByWithRelationInput | PackagePaymentOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing PackagePayments.
     */
    cursor?: PackagePaymentWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` PackagePayments from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` PackagePayments.
     */
    skip?: number
    distinct?: PackagePaymentScalarFieldEnum | PackagePaymentScalarFieldEnum[]
  }

  /**
   * PackagePayment create
   */
  export type PackagePaymentCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PackagePayment
     */
    select?: PackagePaymentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PackagePayment
     */
    omit?: PackagePaymentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PackagePaymentInclude<ExtArgs> | null
    /**
     * The data needed to create a PackagePayment.
     */
    data: XOR<PackagePaymentCreateInput, PackagePaymentUncheckedCreateInput>
  }

  /**
   * PackagePayment createMany
   */
  export type PackagePaymentCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many PackagePayments.
     */
    data: PackagePaymentCreateManyInput | PackagePaymentCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * PackagePayment update
   */
  export type PackagePaymentUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PackagePayment
     */
    select?: PackagePaymentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PackagePayment
     */
    omit?: PackagePaymentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PackagePaymentInclude<ExtArgs> | null
    /**
     * The data needed to update a PackagePayment.
     */
    data: XOR<PackagePaymentUpdateInput, PackagePaymentUncheckedUpdateInput>
    /**
     * Choose, which PackagePayment to update.
     */
    where: PackagePaymentWhereUniqueInput
  }

  /**
   * PackagePayment updateMany
   */
  export type PackagePaymentUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update PackagePayments.
     */
    data: XOR<PackagePaymentUpdateManyMutationInput, PackagePaymentUncheckedUpdateManyInput>
    /**
     * Filter which PackagePayments to update
     */
    where?: PackagePaymentWhereInput
    /**
     * Limit how many PackagePayments to update.
     */
    limit?: number
  }

  /**
   * PackagePayment upsert
   */
  export type PackagePaymentUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PackagePayment
     */
    select?: PackagePaymentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PackagePayment
     */
    omit?: PackagePaymentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PackagePaymentInclude<ExtArgs> | null
    /**
     * The filter to search for the PackagePayment to update in case it exists.
     */
    where: PackagePaymentWhereUniqueInput
    /**
     * In case the PackagePayment found by the `where` argument doesn't exist, create a new PackagePayment with this data.
     */
    create: XOR<PackagePaymentCreateInput, PackagePaymentUncheckedCreateInput>
    /**
     * In case the PackagePayment was found with the provided `where` argument, update it with this data.
     */
    update: XOR<PackagePaymentUpdateInput, PackagePaymentUncheckedUpdateInput>
  }

  /**
   * PackagePayment delete
   */
  export type PackagePaymentDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PackagePayment
     */
    select?: PackagePaymentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PackagePayment
     */
    omit?: PackagePaymentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PackagePaymentInclude<ExtArgs> | null
    /**
     * Filter which PackagePayment to delete.
     */
    where: PackagePaymentWhereUniqueInput
  }

  /**
   * PackagePayment deleteMany
   */
  export type PackagePaymentDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which PackagePayments to delete
     */
    where?: PackagePaymentWhereInput
    /**
     * Limit how many PackagePayments to delete.
     */
    limit?: number
  }

  /**
   * PackagePayment without action
   */
  export type PackagePaymentDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PackagePayment
     */
    select?: PackagePaymentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PackagePayment
     */
    omit?: PackagePaymentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PackagePaymentInclude<ExtArgs> | null
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


  export const AppointmentScalarFieldEnum: {
    id: 'id',
    appointmentCode: 'appointmentCode',
    doctorId: 'doctorId',
    patientId: 'patientId',
    outletId: 'outletId',
    appointmentDate: 'appointmentDate',
    startTime: 'startTime',
    endTime: 'endTime',
    type: 'type',
    status: 'status',
    consultationFee: 'consultationFee',
    paymentStatus: 'paymentStatus',
    reason: 'reason',
    patientNotes: 'patientNotes',
    doctorNotes: 'doctorNotes',
    cancelledBy: 'cancelledBy',
    cancellationReason: 'cancellationReason',
    cancelledAt: 'cancelledAt',
    confirmedAt: 'confirmedAt',
    completedAt: 'completedAt',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type AppointmentScalarFieldEnum = (typeof AppointmentScalarFieldEnum)[keyof typeof AppointmentScalarFieldEnum]


  export const AppointmentSlotLockScalarFieldEnum: {
    id: 'id',
    doctorId: 'doctorId',
    startTime: 'startTime',
    appointmentId: 'appointmentId',
    createdAt: 'createdAt'
  };

  export type AppointmentSlotLockScalarFieldEnum = (typeof AppointmentSlotLockScalarFieldEnum)[keyof typeof AppointmentSlotLockScalarFieldEnum]


  export const AppointmentStatusLogScalarFieldEnum: {
    id: 'id',
    appointmentId: 'appointmentId',
    previousStatus: 'previousStatus',
    newStatus: 'newStatus',
    changedById: 'changedById',
    changedByRole: 'changedByRole',
    note: 'note',
    createdAt: 'createdAt'
  };

  export type AppointmentStatusLogScalarFieldEnum = (typeof AppointmentStatusLogScalarFieldEnum)[keyof typeof AppointmentStatusLogScalarFieldEnum]


  export const AppointmentPaymentScalarFieldEnum: {
    id: 'id',
    appointmentId: 'appointmentId',
    amount: 'amount',
    currency: 'currency',
    status: 'status',
    gateway: 'gateway',
    transactionId: 'transactionId',
    validationId: 'validationId',
    bankTransactionId: 'bankTransactionId',
    paymentMethod: 'paymentMethod',
    cardType: 'cardType',
    gatewayResponse: 'gatewayResponse',
    paidAt: 'paidAt',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type AppointmentPaymentScalarFieldEnum = (typeof AppointmentPaymentScalarFieldEnum)[keyof typeof AppointmentPaymentScalarFieldEnum]


  export const PackageOrderScalarFieldEnum: {
    id: 'id',
    orderCode: 'orderCode',
    patientId: 'patientId',
    outletId: 'outletId',
    packageId: 'packageId',
    packageName: 'packageName',
    subtitle: 'subtitle',
    totalPrice: 'totalPrice',
    discountedPrice: 'discountedPrice',
    status: 'status',
    paymentStatus: 'paymentStatus',
    paymentMethod: 'paymentMethod',
    notes: 'notes',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type PackageOrderScalarFieldEnum = (typeof PackageOrderScalarFieldEnum)[keyof typeof PackageOrderScalarFieldEnum]


  export const PackageOrderItemScalarFieldEnum: {
    id: 'id',
    orderId: 'orderId',
    testId: 'testId',
    testName: 'testName',
    testCode: 'testCode',
    price: 'price',
    createdAt: 'createdAt'
  };

  export type PackageOrderItemScalarFieldEnum = (typeof PackageOrderItemScalarFieldEnum)[keyof typeof PackageOrderItemScalarFieldEnum]


  export const PackagePaymentScalarFieldEnum: {
    id: 'id',
    orderId: 'orderId',
    amount: 'amount',
    currency: 'currency',
    status: 'status',
    method: 'method',
    transactionId: 'transactionId',
    validationId: 'validationId',
    bankTransactionId: 'bankTransactionId',
    paymentMethodName: 'paymentMethodName',
    cardType: 'cardType',
    gatewayResponse: 'gatewayResponse',
    paidAt: 'paidAt',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type PackagePaymentScalarFieldEnum = (typeof PackagePaymentScalarFieldEnum)[keyof typeof PackagePaymentScalarFieldEnum]


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


  export const NullsOrder: {
    first: 'first',
    last: 'last'
  };

  export type NullsOrder = (typeof NullsOrder)[keyof typeof NullsOrder]


  export const AppointmentOrderByRelevanceFieldEnum: {
    id: 'id',
    appointmentCode: 'appointmentCode',
    doctorId: 'doctorId',
    patientId: 'patientId',
    outletId: 'outletId',
    reason: 'reason',
    patientNotes: 'patientNotes',
    doctorNotes: 'doctorNotes',
    cancellationReason: 'cancellationReason'
  };

  export type AppointmentOrderByRelevanceFieldEnum = (typeof AppointmentOrderByRelevanceFieldEnum)[keyof typeof AppointmentOrderByRelevanceFieldEnum]


  export const AppointmentSlotLockOrderByRelevanceFieldEnum: {
    id: 'id',
    doctorId: 'doctorId',
    appointmentId: 'appointmentId'
  };

  export type AppointmentSlotLockOrderByRelevanceFieldEnum = (typeof AppointmentSlotLockOrderByRelevanceFieldEnum)[keyof typeof AppointmentSlotLockOrderByRelevanceFieldEnum]


  export const AppointmentStatusLogOrderByRelevanceFieldEnum: {
    id: 'id',
    appointmentId: 'appointmentId',
    changedById: 'changedById',
    changedByRole: 'changedByRole',
    note: 'note'
  };

  export type AppointmentStatusLogOrderByRelevanceFieldEnum = (typeof AppointmentStatusLogOrderByRelevanceFieldEnum)[keyof typeof AppointmentStatusLogOrderByRelevanceFieldEnum]


  export const JsonNullValueFilter: {
    DbNull: typeof DbNull,
    JsonNull: typeof JsonNull,
    AnyNull: typeof AnyNull
  };

  export type JsonNullValueFilter = (typeof JsonNullValueFilter)[keyof typeof JsonNullValueFilter]


  export const QueryMode: {
    default: 'default',
    insensitive: 'insensitive'
  };

  export type QueryMode = (typeof QueryMode)[keyof typeof QueryMode]


  export const AppointmentPaymentOrderByRelevanceFieldEnum: {
    id: 'id',
    appointmentId: 'appointmentId',
    currency: 'currency',
    transactionId: 'transactionId',
    validationId: 'validationId',
    bankTransactionId: 'bankTransactionId',
    paymentMethod: 'paymentMethod',
    cardType: 'cardType'
  };

  export type AppointmentPaymentOrderByRelevanceFieldEnum = (typeof AppointmentPaymentOrderByRelevanceFieldEnum)[keyof typeof AppointmentPaymentOrderByRelevanceFieldEnum]


  export const PackageOrderOrderByRelevanceFieldEnum: {
    id: 'id',
    orderCode: 'orderCode',
    patientId: 'patientId',
    outletId: 'outletId',
    packageId: 'packageId',
    packageName: 'packageName',
    subtitle: 'subtitle',
    notes: 'notes'
  };

  export type PackageOrderOrderByRelevanceFieldEnum = (typeof PackageOrderOrderByRelevanceFieldEnum)[keyof typeof PackageOrderOrderByRelevanceFieldEnum]


  export const PackageOrderItemOrderByRelevanceFieldEnum: {
    id: 'id',
    orderId: 'orderId',
    testId: 'testId',
    testName: 'testName',
    testCode: 'testCode'
  };

  export type PackageOrderItemOrderByRelevanceFieldEnum = (typeof PackageOrderItemOrderByRelevanceFieldEnum)[keyof typeof PackageOrderItemOrderByRelevanceFieldEnum]


  export const PackagePaymentOrderByRelevanceFieldEnum: {
    id: 'id',
    orderId: 'orderId',
    currency: 'currency',
    transactionId: 'transactionId',
    validationId: 'validationId',
    bankTransactionId: 'bankTransactionId',
    paymentMethodName: 'paymentMethodName',
    cardType: 'cardType'
  };

  export type PackagePaymentOrderByRelevanceFieldEnum = (typeof PackagePaymentOrderByRelevanceFieldEnum)[keyof typeof PackagePaymentOrderByRelevanceFieldEnum]


  /**
   * Field references
   */


  /**
   * Reference to a field of type 'String'
   */
  export type StringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String'>
    


  /**
   * Reference to a field of type 'DateTime'
   */
  export type DateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime'>
    


  /**
   * Reference to a field of type 'AppointmentType'
   */
  export type EnumAppointmentTypeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'AppointmentType'>
    


  /**
   * Reference to a field of type 'AppointmentStatus'
   */
  export type EnumAppointmentStatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'AppointmentStatus'>
    


  /**
   * Reference to a field of type 'Decimal'
   */
  export type DecimalFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Decimal'>
    


  /**
   * Reference to a field of type 'PaymentStatus'
   */
  export type EnumPaymentStatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'PaymentStatus'>
    


  /**
   * Reference to a field of type 'CancelledBy'
   */
  export type EnumCancelledByFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'CancelledBy'>
    


  /**
   * Reference to a field of type 'PaymentGateway'
   */
  export type EnumPaymentGatewayFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'PaymentGateway'>
    


  /**
   * Reference to a field of type 'Json'
   */
  export type JsonFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Json'>
    


  /**
   * Reference to a field of type 'QueryMode'
   */
  export type EnumQueryModeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'QueryMode'>
    


  /**
   * Reference to a field of type 'PackageOrderStatus'
   */
  export type EnumPackageOrderStatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'PackageOrderStatus'>
    


  /**
   * Reference to a field of type 'PackagePaymentStatus'
   */
  export type EnumPackagePaymentStatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'PackagePaymentStatus'>
    


  /**
   * Reference to a field of type 'PackagePaymentMethod'
   */
  export type EnumPackagePaymentMethodFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'PackagePaymentMethod'>
    


  /**
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>
    
  /**
   * Deep Input Types
   */


  export type AppointmentWhereInput = {
    AND?: AppointmentWhereInput | AppointmentWhereInput[]
    OR?: AppointmentWhereInput[]
    NOT?: AppointmentWhereInput | AppointmentWhereInput[]
    id?: StringFilter<"Appointment"> | string
    appointmentCode?: StringFilter<"Appointment"> | string
    doctorId?: StringFilter<"Appointment"> | string
    patientId?: StringFilter<"Appointment"> | string
    outletId?: StringNullableFilter<"Appointment"> | string | null
    appointmentDate?: DateTimeFilter<"Appointment"> | Date | string
    startTime?: DateTimeFilter<"Appointment"> | Date | string
    endTime?: DateTimeFilter<"Appointment"> | Date | string
    type?: EnumAppointmentTypeFilter<"Appointment"> | $Enums.AppointmentType
    status?: EnumAppointmentStatusFilter<"Appointment"> | $Enums.AppointmentStatus
    consultationFee?: DecimalNullableFilter<"Appointment"> | Decimal | DecimalJsLike | number | string | null
    paymentStatus?: EnumPaymentStatusFilter<"Appointment"> | $Enums.PaymentStatus
    reason?: StringNullableFilter<"Appointment"> | string | null
    patientNotes?: StringNullableFilter<"Appointment"> | string | null
    doctorNotes?: StringNullableFilter<"Appointment"> | string | null
    cancelledBy?: EnumCancelledByNullableFilter<"Appointment"> | $Enums.CancelledBy | null
    cancellationReason?: StringNullableFilter<"Appointment"> | string | null
    cancelledAt?: DateTimeNullableFilter<"Appointment"> | Date | string | null
    confirmedAt?: DateTimeNullableFilter<"Appointment"> | Date | string | null
    completedAt?: DateTimeNullableFilter<"Appointment"> | Date | string | null
    createdAt?: DateTimeFilter<"Appointment"> | Date | string
    updatedAt?: DateTimeFilter<"Appointment"> | Date | string
    slotLock?: XOR<AppointmentSlotLockNullableScalarRelationFilter, AppointmentSlotLockWhereInput> | null
    statusLogs?: AppointmentStatusLogListRelationFilter
    payment?: XOR<AppointmentPaymentNullableScalarRelationFilter, AppointmentPaymentWhereInput> | null
  }

  export type AppointmentOrderByWithRelationInput = {
    id?: SortOrder
    appointmentCode?: SortOrder
    doctorId?: SortOrder
    patientId?: SortOrder
    outletId?: SortOrderInput | SortOrder
    appointmentDate?: SortOrder
    startTime?: SortOrder
    endTime?: SortOrder
    type?: SortOrder
    status?: SortOrder
    consultationFee?: SortOrderInput | SortOrder
    paymentStatus?: SortOrder
    reason?: SortOrderInput | SortOrder
    patientNotes?: SortOrderInput | SortOrder
    doctorNotes?: SortOrderInput | SortOrder
    cancelledBy?: SortOrderInput | SortOrder
    cancellationReason?: SortOrderInput | SortOrder
    cancelledAt?: SortOrderInput | SortOrder
    confirmedAt?: SortOrderInput | SortOrder
    completedAt?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    slotLock?: AppointmentSlotLockOrderByWithRelationInput
    statusLogs?: AppointmentStatusLogOrderByRelationAggregateInput
    payment?: AppointmentPaymentOrderByWithRelationInput
    _relevance?: AppointmentOrderByRelevanceInput
  }

  export type AppointmentWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    appointmentCode?: string
    AND?: AppointmentWhereInput | AppointmentWhereInput[]
    OR?: AppointmentWhereInput[]
    NOT?: AppointmentWhereInput | AppointmentWhereInput[]
    doctorId?: StringFilter<"Appointment"> | string
    patientId?: StringFilter<"Appointment"> | string
    outletId?: StringNullableFilter<"Appointment"> | string | null
    appointmentDate?: DateTimeFilter<"Appointment"> | Date | string
    startTime?: DateTimeFilter<"Appointment"> | Date | string
    endTime?: DateTimeFilter<"Appointment"> | Date | string
    type?: EnumAppointmentTypeFilter<"Appointment"> | $Enums.AppointmentType
    status?: EnumAppointmentStatusFilter<"Appointment"> | $Enums.AppointmentStatus
    consultationFee?: DecimalNullableFilter<"Appointment"> | Decimal | DecimalJsLike | number | string | null
    paymentStatus?: EnumPaymentStatusFilter<"Appointment"> | $Enums.PaymentStatus
    reason?: StringNullableFilter<"Appointment"> | string | null
    patientNotes?: StringNullableFilter<"Appointment"> | string | null
    doctorNotes?: StringNullableFilter<"Appointment"> | string | null
    cancelledBy?: EnumCancelledByNullableFilter<"Appointment"> | $Enums.CancelledBy | null
    cancellationReason?: StringNullableFilter<"Appointment"> | string | null
    cancelledAt?: DateTimeNullableFilter<"Appointment"> | Date | string | null
    confirmedAt?: DateTimeNullableFilter<"Appointment"> | Date | string | null
    completedAt?: DateTimeNullableFilter<"Appointment"> | Date | string | null
    createdAt?: DateTimeFilter<"Appointment"> | Date | string
    updatedAt?: DateTimeFilter<"Appointment"> | Date | string
    slotLock?: XOR<AppointmentSlotLockNullableScalarRelationFilter, AppointmentSlotLockWhereInput> | null
    statusLogs?: AppointmentStatusLogListRelationFilter
    payment?: XOR<AppointmentPaymentNullableScalarRelationFilter, AppointmentPaymentWhereInput> | null
  }, "id" | "appointmentCode">

  export type AppointmentOrderByWithAggregationInput = {
    id?: SortOrder
    appointmentCode?: SortOrder
    doctorId?: SortOrder
    patientId?: SortOrder
    outletId?: SortOrderInput | SortOrder
    appointmentDate?: SortOrder
    startTime?: SortOrder
    endTime?: SortOrder
    type?: SortOrder
    status?: SortOrder
    consultationFee?: SortOrderInput | SortOrder
    paymentStatus?: SortOrder
    reason?: SortOrderInput | SortOrder
    patientNotes?: SortOrderInput | SortOrder
    doctorNotes?: SortOrderInput | SortOrder
    cancelledBy?: SortOrderInput | SortOrder
    cancellationReason?: SortOrderInput | SortOrder
    cancelledAt?: SortOrderInput | SortOrder
    confirmedAt?: SortOrderInput | SortOrder
    completedAt?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: AppointmentCountOrderByAggregateInput
    _avg?: AppointmentAvgOrderByAggregateInput
    _max?: AppointmentMaxOrderByAggregateInput
    _min?: AppointmentMinOrderByAggregateInput
    _sum?: AppointmentSumOrderByAggregateInput
  }

  export type AppointmentScalarWhereWithAggregatesInput = {
    AND?: AppointmentScalarWhereWithAggregatesInput | AppointmentScalarWhereWithAggregatesInput[]
    OR?: AppointmentScalarWhereWithAggregatesInput[]
    NOT?: AppointmentScalarWhereWithAggregatesInput | AppointmentScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Appointment"> | string
    appointmentCode?: StringWithAggregatesFilter<"Appointment"> | string
    doctorId?: StringWithAggregatesFilter<"Appointment"> | string
    patientId?: StringWithAggregatesFilter<"Appointment"> | string
    outletId?: StringNullableWithAggregatesFilter<"Appointment"> | string | null
    appointmentDate?: DateTimeWithAggregatesFilter<"Appointment"> | Date | string
    startTime?: DateTimeWithAggregatesFilter<"Appointment"> | Date | string
    endTime?: DateTimeWithAggregatesFilter<"Appointment"> | Date | string
    type?: EnumAppointmentTypeWithAggregatesFilter<"Appointment"> | $Enums.AppointmentType
    status?: EnumAppointmentStatusWithAggregatesFilter<"Appointment"> | $Enums.AppointmentStatus
    consultationFee?: DecimalNullableWithAggregatesFilter<"Appointment"> | Decimal | DecimalJsLike | number | string | null
    paymentStatus?: EnumPaymentStatusWithAggregatesFilter<"Appointment"> | $Enums.PaymentStatus
    reason?: StringNullableWithAggregatesFilter<"Appointment"> | string | null
    patientNotes?: StringNullableWithAggregatesFilter<"Appointment"> | string | null
    doctorNotes?: StringNullableWithAggregatesFilter<"Appointment"> | string | null
    cancelledBy?: EnumCancelledByNullableWithAggregatesFilter<"Appointment"> | $Enums.CancelledBy | null
    cancellationReason?: StringNullableWithAggregatesFilter<"Appointment"> | string | null
    cancelledAt?: DateTimeNullableWithAggregatesFilter<"Appointment"> | Date | string | null
    confirmedAt?: DateTimeNullableWithAggregatesFilter<"Appointment"> | Date | string | null
    completedAt?: DateTimeNullableWithAggregatesFilter<"Appointment"> | Date | string | null
    createdAt?: DateTimeWithAggregatesFilter<"Appointment"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Appointment"> | Date | string
  }

  export type AppointmentSlotLockWhereInput = {
    AND?: AppointmentSlotLockWhereInput | AppointmentSlotLockWhereInput[]
    OR?: AppointmentSlotLockWhereInput[]
    NOT?: AppointmentSlotLockWhereInput | AppointmentSlotLockWhereInput[]
    id?: StringFilter<"AppointmentSlotLock"> | string
    doctorId?: StringFilter<"AppointmentSlotLock"> | string
    startTime?: DateTimeFilter<"AppointmentSlotLock"> | Date | string
    appointmentId?: StringFilter<"AppointmentSlotLock"> | string
    createdAt?: DateTimeFilter<"AppointmentSlotLock"> | Date | string
    appointment?: XOR<AppointmentScalarRelationFilter, AppointmentWhereInput>
  }

  export type AppointmentSlotLockOrderByWithRelationInput = {
    id?: SortOrder
    doctorId?: SortOrder
    startTime?: SortOrder
    appointmentId?: SortOrder
    createdAt?: SortOrder
    appointment?: AppointmentOrderByWithRelationInput
    _relevance?: AppointmentSlotLockOrderByRelevanceInput
  }

  export type AppointmentSlotLockWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    appointmentId?: string
    doctorId_startTime?: AppointmentSlotLockDoctorIdStartTimeCompoundUniqueInput
    AND?: AppointmentSlotLockWhereInput | AppointmentSlotLockWhereInput[]
    OR?: AppointmentSlotLockWhereInput[]
    NOT?: AppointmentSlotLockWhereInput | AppointmentSlotLockWhereInput[]
    doctorId?: StringFilter<"AppointmentSlotLock"> | string
    startTime?: DateTimeFilter<"AppointmentSlotLock"> | Date | string
    createdAt?: DateTimeFilter<"AppointmentSlotLock"> | Date | string
    appointment?: XOR<AppointmentScalarRelationFilter, AppointmentWhereInput>
  }, "id" | "appointmentId" | "doctorId_startTime">

  export type AppointmentSlotLockOrderByWithAggregationInput = {
    id?: SortOrder
    doctorId?: SortOrder
    startTime?: SortOrder
    appointmentId?: SortOrder
    createdAt?: SortOrder
    _count?: AppointmentSlotLockCountOrderByAggregateInput
    _max?: AppointmentSlotLockMaxOrderByAggregateInput
    _min?: AppointmentSlotLockMinOrderByAggregateInput
  }

  export type AppointmentSlotLockScalarWhereWithAggregatesInput = {
    AND?: AppointmentSlotLockScalarWhereWithAggregatesInput | AppointmentSlotLockScalarWhereWithAggregatesInput[]
    OR?: AppointmentSlotLockScalarWhereWithAggregatesInput[]
    NOT?: AppointmentSlotLockScalarWhereWithAggregatesInput | AppointmentSlotLockScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"AppointmentSlotLock"> | string
    doctorId?: StringWithAggregatesFilter<"AppointmentSlotLock"> | string
    startTime?: DateTimeWithAggregatesFilter<"AppointmentSlotLock"> | Date | string
    appointmentId?: StringWithAggregatesFilter<"AppointmentSlotLock"> | string
    createdAt?: DateTimeWithAggregatesFilter<"AppointmentSlotLock"> | Date | string
  }

  export type AppointmentStatusLogWhereInput = {
    AND?: AppointmentStatusLogWhereInput | AppointmentStatusLogWhereInput[]
    OR?: AppointmentStatusLogWhereInput[]
    NOT?: AppointmentStatusLogWhereInput | AppointmentStatusLogWhereInput[]
    id?: StringFilter<"AppointmentStatusLog"> | string
    appointmentId?: StringFilter<"AppointmentStatusLog"> | string
    previousStatus?: EnumAppointmentStatusNullableFilter<"AppointmentStatusLog"> | $Enums.AppointmentStatus | null
    newStatus?: EnumAppointmentStatusFilter<"AppointmentStatusLog"> | $Enums.AppointmentStatus
    changedById?: StringNullableFilter<"AppointmentStatusLog"> | string | null
    changedByRole?: StringNullableFilter<"AppointmentStatusLog"> | string | null
    note?: StringNullableFilter<"AppointmentStatusLog"> | string | null
    createdAt?: DateTimeFilter<"AppointmentStatusLog"> | Date | string
    appointment?: XOR<AppointmentScalarRelationFilter, AppointmentWhereInput>
  }

  export type AppointmentStatusLogOrderByWithRelationInput = {
    id?: SortOrder
    appointmentId?: SortOrder
    previousStatus?: SortOrderInput | SortOrder
    newStatus?: SortOrder
    changedById?: SortOrderInput | SortOrder
    changedByRole?: SortOrderInput | SortOrder
    note?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    appointment?: AppointmentOrderByWithRelationInput
    _relevance?: AppointmentStatusLogOrderByRelevanceInput
  }

  export type AppointmentStatusLogWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: AppointmentStatusLogWhereInput | AppointmentStatusLogWhereInput[]
    OR?: AppointmentStatusLogWhereInput[]
    NOT?: AppointmentStatusLogWhereInput | AppointmentStatusLogWhereInput[]
    appointmentId?: StringFilter<"AppointmentStatusLog"> | string
    previousStatus?: EnumAppointmentStatusNullableFilter<"AppointmentStatusLog"> | $Enums.AppointmentStatus | null
    newStatus?: EnumAppointmentStatusFilter<"AppointmentStatusLog"> | $Enums.AppointmentStatus
    changedById?: StringNullableFilter<"AppointmentStatusLog"> | string | null
    changedByRole?: StringNullableFilter<"AppointmentStatusLog"> | string | null
    note?: StringNullableFilter<"AppointmentStatusLog"> | string | null
    createdAt?: DateTimeFilter<"AppointmentStatusLog"> | Date | string
    appointment?: XOR<AppointmentScalarRelationFilter, AppointmentWhereInput>
  }, "id">

  export type AppointmentStatusLogOrderByWithAggregationInput = {
    id?: SortOrder
    appointmentId?: SortOrder
    previousStatus?: SortOrderInput | SortOrder
    newStatus?: SortOrder
    changedById?: SortOrderInput | SortOrder
    changedByRole?: SortOrderInput | SortOrder
    note?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    _count?: AppointmentStatusLogCountOrderByAggregateInput
    _max?: AppointmentStatusLogMaxOrderByAggregateInput
    _min?: AppointmentStatusLogMinOrderByAggregateInput
  }

  export type AppointmentStatusLogScalarWhereWithAggregatesInput = {
    AND?: AppointmentStatusLogScalarWhereWithAggregatesInput | AppointmentStatusLogScalarWhereWithAggregatesInput[]
    OR?: AppointmentStatusLogScalarWhereWithAggregatesInput[]
    NOT?: AppointmentStatusLogScalarWhereWithAggregatesInput | AppointmentStatusLogScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"AppointmentStatusLog"> | string
    appointmentId?: StringWithAggregatesFilter<"AppointmentStatusLog"> | string
    previousStatus?: EnumAppointmentStatusNullableWithAggregatesFilter<"AppointmentStatusLog"> | $Enums.AppointmentStatus | null
    newStatus?: EnumAppointmentStatusWithAggregatesFilter<"AppointmentStatusLog"> | $Enums.AppointmentStatus
    changedById?: StringNullableWithAggregatesFilter<"AppointmentStatusLog"> | string | null
    changedByRole?: StringNullableWithAggregatesFilter<"AppointmentStatusLog"> | string | null
    note?: StringNullableWithAggregatesFilter<"AppointmentStatusLog"> | string | null
    createdAt?: DateTimeWithAggregatesFilter<"AppointmentStatusLog"> | Date | string
  }

  export type AppointmentPaymentWhereInput = {
    AND?: AppointmentPaymentWhereInput | AppointmentPaymentWhereInput[]
    OR?: AppointmentPaymentWhereInput[]
    NOT?: AppointmentPaymentWhereInput | AppointmentPaymentWhereInput[]
    id?: StringFilter<"AppointmentPayment"> | string
    appointmentId?: StringFilter<"AppointmentPayment"> | string
    amount?: DecimalFilter<"AppointmentPayment"> | Decimal | DecimalJsLike | number | string
    currency?: StringFilter<"AppointmentPayment"> | string
    status?: EnumPaymentStatusFilter<"AppointmentPayment"> | $Enums.PaymentStatus
    gateway?: EnumPaymentGatewayFilter<"AppointmentPayment"> | $Enums.PaymentGateway
    transactionId?: StringFilter<"AppointmentPayment"> | string
    validationId?: StringNullableFilter<"AppointmentPayment"> | string | null
    bankTransactionId?: StringNullableFilter<"AppointmentPayment"> | string | null
    paymentMethod?: StringNullableFilter<"AppointmentPayment"> | string | null
    cardType?: StringNullableFilter<"AppointmentPayment"> | string | null
    gatewayResponse?: JsonNullableFilter<"AppointmentPayment">
    paidAt?: DateTimeNullableFilter<"AppointmentPayment"> | Date | string | null
    createdAt?: DateTimeFilter<"AppointmentPayment"> | Date | string
    updatedAt?: DateTimeFilter<"AppointmentPayment"> | Date | string
    appointment?: XOR<AppointmentScalarRelationFilter, AppointmentWhereInput>
  }

  export type AppointmentPaymentOrderByWithRelationInput = {
    id?: SortOrder
    appointmentId?: SortOrder
    amount?: SortOrder
    currency?: SortOrder
    status?: SortOrder
    gateway?: SortOrder
    transactionId?: SortOrder
    validationId?: SortOrderInput | SortOrder
    bankTransactionId?: SortOrderInput | SortOrder
    paymentMethod?: SortOrderInput | SortOrder
    cardType?: SortOrderInput | SortOrder
    gatewayResponse?: SortOrderInput | SortOrder
    paidAt?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    appointment?: AppointmentOrderByWithRelationInput
    _relevance?: AppointmentPaymentOrderByRelevanceInput
  }

  export type AppointmentPaymentWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    appointmentId?: string
    transactionId?: string
    AND?: AppointmentPaymentWhereInput | AppointmentPaymentWhereInput[]
    OR?: AppointmentPaymentWhereInput[]
    NOT?: AppointmentPaymentWhereInput | AppointmentPaymentWhereInput[]
    amount?: DecimalFilter<"AppointmentPayment"> | Decimal | DecimalJsLike | number | string
    currency?: StringFilter<"AppointmentPayment"> | string
    status?: EnumPaymentStatusFilter<"AppointmentPayment"> | $Enums.PaymentStatus
    gateway?: EnumPaymentGatewayFilter<"AppointmentPayment"> | $Enums.PaymentGateway
    validationId?: StringNullableFilter<"AppointmentPayment"> | string | null
    bankTransactionId?: StringNullableFilter<"AppointmentPayment"> | string | null
    paymentMethod?: StringNullableFilter<"AppointmentPayment"> | string | null
    cardType?: StringNullableFilter<"AppointmentPayment"> | string | null
    gatewayResponse?: JsonNullableFilter<"AppointmentPayment">
    paidAt?: DateTimeNullableFilter<"AppointmentPayment"> | Date | string | null
    createdAt?: DateTimeFilter<"AppointmentPayment"> | Date | string
    updatedAt?: DateTimeFilter<"AppointmentPayment"> | Date | string
    appointment?: XOR<AppointmentScalarRelationFilter, AppointmentWhereInput>
  }, "id" | "appointmentId" | "transactionId">

  export type AppointmentPaymentOrderByWithAggregationInput = {
    id?: SortOrder
    appointmentId?: SortOrder
    amount?: SortOrder
    currency?: SortOrder
    status?: SortOrder
    gateway?: SortOrder
    transactionId?: SortOrder
    validationId?: SortOrderInput | SortOrder
    bankTransactionId?: SortOrderInput | SortOrder
    paymentMethod?: SortOrderInput | SortOrder
    cardType?: SortOrderInput | SortOrder
    gatewayResponse?: SortOrderInput | SortOrder
    paidAt?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: AppointmentPaymentCountOrderByAggregateInput
    _avg?: AppointmentPaymentAvgOrderByAggregateInput
    _max?: AppointmentPaymentMaxOrderByAggregateInput
    _min?: AppointmentPaymentMinOrderByAggregateInput
    _sum?: AppointmentPaymentSumOrderByAggregateInput
  }

  export type AppointmentPaymentScalarWhereWithAggregatesInput = {
    AND?: AppointmentPaymentScalarWhereWithAggregatesInput | AppointmentPaymentScalarWhereWithAggregatesInput[]
    OR?: AppointmentPaymentScalarWhereWithAggregatesInput[]
    NOT?: AppointmentPaymentScalarWhereWithAggregatesInput | AppointmentPaymentScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"AppointmentPayment"> | string
    appointmentId?: StringWithAggregatesFilter<"AppointmentPayment"> | string
    amount?: DecimalWithAggregatesFilter<"AppointmentPayment"> | Decimal | DecimalJsLike | number | string
    currency?: StringWithAggregatesFilter<"AppointmentPayment"> | string
    status?: EnumPaymentStatusWithAggregatesFilter<"AppointmentPayment"> | $Enums.PaymentStatus
    gateway?: EnumPaymentGatewayWithAggregatesFilter<"AppointmentPayment"> | $Enums.PaymentGateway
    transactionId?: StringWithAggregatesFilter<"AppointmentPayment"> | string
    validationId?: StringNullableWithAggregatesFilter<"AppointmentPayment"> | string | null
    bankTransactionId?: StringNullableWithAggregatesFilter<"AppointmentPayment"> | string | null
    paymentMethod?: StringNullableWithAggregatesFilter<"AppointmentPayment"> | string | null
    cardType?: StringNullableWithAggregatesFilter<"AppointmentPayment"> | string | null
    gatewayResponse?: JsonNullableWithAggregatesFilter<"AppointmentPayment">
    paidAt?: DateTimeNullableWithAggregatesFilter<"AppointmentPayment"> | Date | string | null
    createdAt?: DateTimeWithAggregatesFilter<"AppointmentPayment"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"AppointmentPayment"> | Date | string
  }

  export type PackageOrderWhereInput = {
    AND?: PackageOrderWhereInput | PackageOrderWhereInput[]
    OR?: PackageOrderWhereInput[]
    NOT?: PackageOrderWhereInput | PackageOrderWhereInput[]
    id?: StringFilter<"PackageOrder"> | string
    orderCode?: StringFilter<"PackageOrder"> | string
    patientId?: StringFilter<"PackageOrder"> | string
    outletId?: StringNullableFilter<"PackageOrder"> | string | null
    packageId?: StringFilter<"PackageOrder"> | string
    packageName?: StringFilter<"PackageOrder"> | string
    subtitle?: StringNullableFilter<"PackageOrder"> | string | null
    totalPrice?: DecimalFilter<"PackageOrder"> | Decimal | DecimalJsLike | number | string
    discountedPrice?: DecimalFilter<"PackageOrder"> | Decimal | DecimalJsLike | number | string
    status?: EnumPackageOrderStatusFilter<"PackageOrder"> | $Enums.PackageOrderStatus
    paymentStatus?: EnumPackagePaymentStatusFilter<"PackageOrder"> | $Enums.PackagePaymentStatus
    paymentMethod?: EnumPackagePaymentMethodNullableFilter<"PackageOrder"> | $Enums.PackagePaymentMethod | null
    notes?: StringNullableFilter<"PackageOrder"> | string | null
    createdAt?: DateTimeFilter<"PackageOrder"> | Date | string
    updatedAt?: DateTimeFilter<"PackageOrder"> | Date | string
    items?: PackageOrderItemListRelationFilter
    payment?: XOR<PackagePaymentNullableScalarRelationFilter, PackagePaymentWhereInput> | null
  }

  export type PackageOrderOrderByWithRelationInput = {
    id?: SortOrder
    orderCode?: SortOrder
    patientId?: SortOrder
    outletId?: SortOrderInput | SortOrder
    packageId?: SortOrder
    packageName?: SortOrder
    subtitle?: SortOrderInput | SortOrder
    totalPrice?: SortOrder
    discountedPrice?: SortOrder
    status?: SortOrder
    paymentStatus?: SortOrder
    paymentMethod?: SortOrderInput | SortOrder
    notes?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    items?: PackageOrderItemOrderByRelationAggregateInput
    payment?: PackagePaymentOrderByWithRelationInput
    _relevance?: PackageOrderOrderByRelevanceInput
  }

  export type PackageOrderWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    orderCode?: string
    AND?: PackageOrderWhereInput | PackageOrderWhereInput[]
    OR?: PackageOrderWhereInput[]
    NOT?: PackageOrderWhereInput | PackageOrderWhereInput[]
    patientId?: StringFilter<"PackageOrder"> | string
    outletId?: StringNullableFilter<"PackageOrder"> | string | null
    packageId?: StringFilter<"PackageOrder"> | string
    packageName?: StringFilter<"PackageOrder"> | string
    subtitle?: StringNullableFilter<"PackageOrder"> | string | null
    totalPrice?: DecimalFilter<"PackageOrder"> | Decimal | DecimalJsLike | number | string
    discountedPrice?: DecimalFilter<"PackageOrder"> | Decimal | DecimalJsLike | number | string
    status?: EnumPackageOrderStatusFilter<"PackageOrder"> | $Enums.PackageOrderStatus
    paymentStatus?: EnumPackagePaymentStatusFilter<"PackageOrder"> | $Enums.PackagePaymentStatus
    paymentMethod?: EnumPackagePaymentMethodNullableFilter<"PackageOrder"> | $Enums.PackagePaymentMethod | null
    notes?: StringNullableFilter<"PackageOrder"> | string | null
    createdAt?: DateTimeFilter<"PackageOrder"> | Date | string
    updatedAt?: DateTimeFilter<"PackageOrder"> | Date | string
    items?: PackageOrderItemListRelationFilter
    payment?: XOR<PackagePaymentNullableScalarRelationFilter, PackagePaymentWhereInput> | null
  }, "id" | "orderCode">

  export type PackageOrderOrderByWithAggregationInput = {
    id?: SortOrder
    orderCode?: SortOrder
    patientId?: SortOrder
    outletId?: SortOrderInput | SortOrder
    packageId?: SortOrder
    packageName?: SortOrder
    subtitle?: SortOrderInput | SortOrder
    totalPrice?: SortOrder
    discountedPrice?: SortOrder
    status?: SortOrder
    paymentStatus?: SortOrder
    paymentMethod?: SortOrderInput | SortOrder
    notes?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: PackageOrderCountOrderByAggregateInput
    _avg?: PackageOrderAvgOrderByAggregateInput
    _max?: PackageOrderMaxOrderByAggregateInput
    _min?: PackageOrderMinOrderByAggregateInput
    _sum?: PackageOrderSumOrderByAggregateInput
  }

  export type PackageOrderScalarWhereWithAggregatesInput = {
    AND?: PackageOrderScalarWhereWithAggregatesInput | PackageOrderScalarWhereWithAggregatesInput[]
    OR?: PackageOrderScalarWhereWithAggregatesInput[]
    NOT?: PackageOrderScalarWhereWithAggregatesInput | PackageOrderScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"PackageOrder"> | string
    orderCode?: StringWithAggregatesFilter<"PackageOrder"> | string
    patientId?: StringWithAggregatesFilter<"PackageOrder"> | string
    outletId?: StringNullableWithAggregatesFilter<"PackageOrder"> | string | null
    packageId?: StringWithAggregatesFilter<"PackageOrder"> | string
    packageName?: StringWithAggregatesFilter<"PackageOrder"> | string
    subtitle?: StringNullableWithAggregatesFilter<"PackageOrder"> | string | null
    totalPrice?: DecimalWithAggregatesFilter<"PackageOrder"> | Decimal | DecimalJsLike | number | string
    discountedPrice?: DecimalWithAggregatesFilter<"PackageOrder"> | Decimal | DecimalJsLike | number | string
    status?: EnumPackageOrderStatusWithAggregatesFilter<"PackageOrder"> | $Enums.PackageOrderStatus
    paymentStatus?: EnumPackagePaymentStatusWithAggregatesFilter<"PackageOrder"> | $Enums.PackagePaymentStatus
    paymentMethod?: EnumPackagePaymentMethodNullableWithAggregatesFilter<"PackageOrder"> | $Enums.PackagePaymentMethod | null
    notes?: StringNullableWithAggregatesFilter<"PackageOrder"> | string | null
    createdAt?: DateTimeWithAggregatesFilter<"PackageOrder"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"PackageOrder"> | Date | string
  }

  export type PackageOrderItemWhereInput = {
    AND?: PackageOrderItemWhereInput | PackageOrderItemWhereInput[]
    OR?: PackageOrderItemWhereInput[]
    NOT?: PackageOrderItemWhereInput | PackageOrderItemWhereInput[]
    id?: StringFilter<"PackageOrderItem"> | string
    orderId?: StringFilter<"PackageOrderItem"> | string
    testId?: StringFilter<"PackageOrderItem"> | string
    testName?: StringFilter<"PackageOrderItem"> | string
    testCode?: StringNullableFilter<"PackageOrderItem"> | string | null
    price?: DecimalFilter<"PackageOrderItem"> | Decimal | DecimalJsLike | number | string
    createdAt?: DateTimeFilter<"PackageOrderItem"> | Date | string
    order?: XOR<PackageOrderScalarRelationFilter, PackageOrderWhereInput>
  }

  export type PackageOrderItemOrderByWithRelationInput = {
    id?: SortOrder
    orderId?: SortOrder
    testId?: SortOrder
    testName?: SortOrder
    testCode?: SortOrderInput | SortOrder
    price?: SortOrder
    createdAt?: SortOrder
    order?: PackageOrderOrderByWithRelationInput
    _relevance?: PackageOrderItemOrderByRelevanceInput
  }

  export type PackageOrderItemWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: PackageOrderItemWhereInput | PackageOrderItemWhereInput[]
    OR?: PackageOrderItemWhereInput[]
    NOT?: PackageOrderItemWhereInput | PackageOrderItemWhereInput[]
    orderId?: StringFilter<"PackageOrderItem"> | string
    testId?: StringFilter<"PackageOrderItem"> | string
    testName?: StringFilter<"PackageOrderItem"> | string
    testCode?: StringNullableFilter<"PackageOrderItem"> | string | null
    price?: DecimalFilter<"PackageOrderItem"> | Decimal | DecimalJsLike | number | string
    createdAt?: DateTimeFilter<"PackageOrderItem"> | Date | string
    order?: XOR<PackageOrderScalarRelationFilter, PackageOrderWhereInput>
  }, "id">

  export type PackageOrderItemOrderByWithAggregationInput = {
    id?: SortOrder
    orderId?: SortOrder
    testId?: SortOrder
    testName?: SortOrder
    testCode?: SortOrderInput | SortOrder
    price?: SortOrder
    createdAt?: SortOrder
    _count?: PackageOrderItemCountOrderByAggregateInput
    _avg?: PackageOrderItemAvgOrderByAggregateInput
    _max?: PackageOrderItemMaxOrderByAggregateInput
    _min?: PackageOrderItemMinOrderByAggregateInput
    _sum?: PackageOrderItemSumOrderByAggregateInput
  }

  export type PackageOrderItemScalarWhereWithAggregatesInput = {
    AND?: PackageOrderItemScalarWhereWithAggregatesInput | PackageOrderItemScalarWhereWithAggregatesInput[]
    OR?: PackageOrderItemScalarWhereWithAggregatesInput[]
    NOT?: PackageOrderItemScalarWhereWithAggregatesInput | PackageOrderItemScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"PackageOrderItem"> | string
    orderId?: StringWithAggregatesFilter<"PackageOrderItem"> | string
    testId?: StringWithAggregatesFilter<"PackageOrderItem"> | string
    testName?: StringWithAggregatesFilter<"PackageOrderItem"> | string
    testCode?: StringNullableWithAggregatesFilter<"PackageOrderItem"> | string | null
    price?: DecimalWithAggregatesFilter<"PackageOrderItem"> | Decimal | DecimalJsLike | number | string
    createdAt?: DateTimeWithAggregatesFilter<"PackageOrderItem"> | Date | string
  }

  export type PackagePaymentWhereInput = {
    AND?: PackagePaymentWhereInput | PackagePaymentWhereInput[]
    OR?: PackagePaymentWhereInput[]
    NOT?: PackagePaymentWhereInput | PackagePaymentWhereInput[]
    id?: StringFilter<"PackagePayment"> | string
    orderId?: StringFilter<"PackagePayment"> | string
    amount?: DecimalFilter<"PackagePayment"> | Decimal | DecimalJsLike | number | string
    currency?: StringFilter<"PackagePayment"> | string
    status?: EnumPackagePaymentStatusFilter<"PackagePayment"> | $Enums.PackagePaymentStatus
    method?: EnumPackagePaymentMethodFilter<"PackagePayment"> | $Enums.PackagePaymentMethod
    transactionId?: StringFilter<"PackagePayment"> | string
    validationId?: StringNullableFilter<"PackagePayment"> | string | null
    bankTransactionId?: StringNullableFilter<"PackagePayment"> | string | null
    paymentMethodName?: StringNullableFilter<"PackagePayment"> | string | null
    cardType?: StringNullableFilter<"PackagePayment"> | string | null
    gatewayResponse?: JsonNullableFilter<"PackagePayment">
    paidAt?: DateTimeNullableFilter<"PackagePayment"> | Date | string | null
    createdAt?: DateTimeFilter<"PackagePayment"> | Date | string
    updatedAt?: DateTimeFilter<"PackagePayment"> | Date | string
    order?: XOR<PackageOrderScalarRelationFilter, PackageOrderWhereInput>
  }

  export type PackagePaymentOrderByWithRelationInput = {
    id?: SortOrder
    orderId?: SortOrder
    amount?: SortOrder
    currency?: SortOrder
    status?: SortOrder
    method?: SortOrder
    transactionId?: SortOrder
    validationId?: SortOrderInput | SortOrder
    bankTransactionId?: SortOrderInput | SortOrder
    paymentMethodName?: SortOrderInput | SortOrder
    cardType?: SortOrderInput | SortOrder
    gatewayResponse?: SortOrderInput | SortOrder
    paidAt?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    order?: PackageOrderOrderByWithRelationInput
    _relevance?: PackagePaymentOrderByRelevanceInput
  }

  export type PackagePaymentWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    orderId?: string
    transactionId?: string
    AND?: PackagePaymentWhereInput | PackagePaymentWhereInput[]
    OR?: PackagePaymentWhereInput[]
    NOT?: PackagePaymentWhereInput | PackagePaymentWhereInput[]
    amount?: DecimalFilter<"PackagePayment"> | Decimal | DecimalJsLike | number | string
    currency?: StringFilter<"PackagePayment"> | string
    status?: EnumPackagePaymentStatusFilter<"PackagePayment"> | $Enums.PackagePaymentStatus
    method?: EnumPackagePaymentMethodFilter<"PackagePayment"> | $Enums.PackagePaymentMethod
    validationId?: StringNullableFilter<"PackagePayment"> | string | null
    bankTransactionId?: StringNullableFilter<"PackagePayment"> | string | null
    paymentMethodName?: StringNullableFilter<"PackagePayment"> | string | null
    cardType?: StringNullableFilter<"PackagePayment"> | string | null
    gatewayResponse?: JsonNullableFilter<"PackagePayment">
    paidAt?: DateTimeNullableFilter<"PackagePayment"> | Date | string | null
    createdAt?: DateTimeFilter<"PackagePayment"> | Date | string
    updatedAt?: DateTimeFilter<"PackagePayment"> | Date | string
    order?: XOR<PackageOrderScalarRelationFilter, PackageOrderWhereInput>
  }, "id" | "orderId" | "transactionId">

  export type PackagePaymentOrderByWithAggregationInput = {
    id?: SortOrder
    orderId?: SortOrder
    amount?: SortOrder
    currency?: SortOrder
    status?: SortOrder
    method?: SortOrder
    transactionId?: SortOrder
    validationId?: SortOrderInput | SortOrder
    bankTransactionId?: SortOrderInput | SortOrder
    paymentMethodName?: SortOrderInput | SortOrder
    cardType?: SortOrderInput | SortOrder
    gatewayResponse?: SortOrderInput | SortOrder
    paidAt?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: PackagePaymentCountOrderByAggregateInput
    _avg?: PackagePaymentAvgOrderByAggregateInput
    _max?: PackagePaymentMaxOrderByAggregateInput
    _min?: PackagePaymentMinOrderByAggregateInput
    _sum?: PackagePaymentSumOrderByAggregateInput
  }

  export type PackagePaymentScalarWhereWithAggregatesInput = {
    AND?: PackagePaymentScalarWhereWithAggregatesInput | PackagePaymentScalarWhereWithAggregatesInput[]
    OR?: PackagePaymentScalarWhereWithAggregatesInput[]
    NOT?: PackagePaymentScalarWhereWithAggregatesInput | PackagePaymentScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"PackagePayment"> | string
    orderId?: StringWithAggregatesFilter<"PackagePayment"> | string
    amount?: DecimalWithAggregatesFilter<"PackagePayment"> | Decimal | DecimalJsLike | number | string
    currency?: StringWithAggregatesFilter<"PackagePayment"> | string
    status?: EnumPackagePaymentStatusWithAggregatesFilter<"PackagePayment"> | $Enums.PackagePaymentStatus
    method?: EnumPackagePaymentMethodWithAggregatesFilter<"PackagePayment"> | $Enums.PackagePaymentMethod
    transactionId?: StringWithAggregatesFilter<"PackagePayment"> | string
    validationId?: StringNullableWithAggregatesFilter<"PackagePayment"> | string | null
    bankTransactionId?: StringNullableWithAggregatesFilter<"PackagePayment"> | string | null
    paymentMethodName?: StringNullableWithAggregatesFilter<"PackagePayment"> | string | null
    cardType?: StringNullableWithAggregatesFilter<"PackagePayment"> | string | null
    gatewayResponse?: JsonNullableWithAggregatesFilter<"PackagePayment">
    paidAt?: DateTimeNullableWithAggregatesFilter<"PackagePayment"> | Date | string | null
    createdAt?: DateTimeWithAggregatesFilter<"PackagePayment"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"PackagePayment"> | Date | string
  }

  export type AppointmentCreateInput = {
    id?: string
    appointmentCode: string
    doctorId: string
    patientId: string
    outletId?: string | null
    appointmentDate: Date | string
    startTime: Date | string
    endTime: Date | string
    type?: $Enums.AppointmentType
    status?: $Enums.AppointmentStatus
    consultationFee?: Decimal | DecimalJsLike | number | string | null
    paymentStatus?: $Enums.PaymentStatus
    reason?: string | null
    patientNotes?: string | null
    doctorNotes?: string | null
    cancelledBy?: $Enums.CancelledBy | null
    cancellationReason?: string | null
    cancelledAt?: Date | string | null
    confirmedAt?: Date | string | null
    completedAt?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    slotLock?: AppointmentSlotLockCreateNestedOneWithoutAppointmentInput
    statusLogs?: AppointmentStatusLogCreateNestedManyWithoutAppointmentInput
    payment?: AppointmentPaymentCreateNestedOneWithoutAppointmentInput
  }

  export type AppointmentUncheckedCreateInput = {
    id?: string
    appointmentCode: string
    doctorId: string
    patientId: string
    outletId?: string | null
    appointmentDate: Date | string
    startTime: Date | string
    endTime: Date | string
    type?: $Enums.AppointmentType
    status?: $Enums.AppointmentStatus
    consultationFee?: Decimal | DecimalJsLike | number | string | null
    paymentStatus?: $Enums.PaymentStatus
    reason?: string | null
    patientNotes?: string | null
    doctorNotes?: string | null
    cancelledBy?: $Enums.CancelledBy | null
    cancellationReason?: string | null
    cancelledAt?: Date | string | null
    confirmedAt?: Date | string | null
    completedAt?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    slotLock?: AppointmentSlotLockUncheckedCreateNestedOneWithoutAppointmentInput
    statusLogs?: AppointmentStatusLogUncheckedCreateNestedManyWithoutAppointmentInput
    payment?: AppointmentPaymentUncheckedCreateNestedOneWithoutAppointmentInput
  }

  export type AppointmentUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    appointmentCode?: StringFieldUpdateOperationsInput | string
    doctorId?: StringFieldUpdateOperationsInput | string
    patientId?: StringFieldUpdateOperationsInput | string
    outletId?: NullableStringFieldUpdateOperationsInput | string | null
    appointmentDate?: DateTimeFieldUpdateOperationsInput | Date | string
    startTime?: DateTimeFieldUpdateOperationsInput | Date | string
    endTime?: DateTimeFieldUpdateOperationsInput | Date | string
    type?: EnumAppointmentTypeFieldUpdateOperationsInput | $Enums.AppointmentType
    status?: EnumAppointmentStatusFieldUpdateOperationsInput | $Enums.AppointmentStatus
    consultationFee?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    paymentStatus?: EnumPaymentStatusFieldUpdateOperationsInput | $Enums.PaymentStatus
    reason?: NullableStringFieldUpdateOperationsInput | string | null
    patientNotes?: NullableStringFieldUpdateOperationsInput | string | null
    doctorNotes?: NullableStringFieldUpdateOperationsInput | string | null
    cancelledBy?: NullableEnumCancelledByFieldUpdateOperationsInput | $Enums.CancelledBy | null
    cancellationReason?: NullableStringFieldUpdateOperationsInput | string | null
    cancelledAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    confirmedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    completedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    slotLock?: AppointmentSlotLockUpdateOneWithoutAppointmentNestedInput
    statusLogs?: AppointmentStatusLogUpdateManyWithoutAppointmentNestedInput
    payment?: AppointmentPaymentUpdateOneWithoutAppointmentNestedInput
  }

  export type AppointmentUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    appointmentCode?: StringFieldUpdateOperationsInput | string
    doctorId?: StringFieldUpdateOperationsInput | string
    patientId?: StringFieldUpdateOperationsInput | string
    outletId?: NullableStringFieldUpdateOperationsInput | string | null
    appointmentDate?: DateTimeFieldUpdateOperationsInput | Date | string
    startTime?: DateTimeFieldUpdateOperationsInput | Date | string
    endTime?: DateTimeFieldUpdateOperationsInput | Date | string
    type?: EnumAppointmentTypeFieldUpdateOperationsInput | $Enums.AppointmentType
    status?: EnumAppointmentStatusFieldUpdateOperationsInput | $Enums.AppointmentStatus
    consultationFee?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    paymentStatus?: EnumPaymentStatusFieldUpdateOperationsInput | $Enums.PaymentStatus
    reason?: NullableStringFieldUpdateOperationsInput | string | null
    patientNotes?: NullableStringFieldUpdateOperationsInput | string | null
    doctorNotes?: NullableStringFieldUpdateOperationsInput | string | null
    cancelledBy?: NullableEnumCancelledByFieldUpdateOperationsInput | $Enums.CancelledBy | null
    cancellationReason?: NullableStringFieldUpdateOperationsInput | string | null
    cancelledAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    confirmedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    completedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    slotLock?: AppointmentSlotLockUncheckedUpdateOneWithoutAppointmentNestedInput
    statusLogs?: AppointmentStatusLogUncheckedUpdateManyWithoutAppointmentNestedInput
    payment?: AppointmentPaymentUncheckedUpdateOneWithoutAppointmentNestedInput
  }

  export type AppointmentCreateManyInput = {
    id?: string
    appointmentCode: string
    doctorId: string
    patientId: string
    outletId?: string | null
    appointmentDate: Date | string
    startTime: Date | string
    endTime: Date | string
    type?: $Enums.AppointmentType
    status?: $Enums.AppointmentStatus
    consultationFee?: Decimal | DecimalJsLike | number | string | null
    paymentStatus?: $Enums.PaymentStatus
    reason?: string | null
    patientNotes?: string | null
    doctorNotes?: string | null
    cancelledBy?: $Enums.CancelledBy | null
    cancellationReason?: string | null
    cancelledAt?: Date | string | null
    confirmedAt?: Date | string | null
    completedAt?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type AppointmentUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    appointmentCode?: StringFieldUpdateOperationsInput | string
    doctorId?: StringFieldUpdateOperationsInput | string
    patientId?: StringFieldUpdateOperationsInput | string
    outletId?: NullableStringFieldUpdateOperationsInput | string | null
    appointmentDate?: DateTimeFieldUpdateOperationsInput | Date | string
    startTime?: DateTimeFieldUpdateOperationsInput | Date | string
    endTime?: DateTimeFieldUpdateOperationsInput | Date | string
    type?: EnumAppointmentTypeFieldUpdateOperationsInput | $Enums.AppointmentType
    status?: EnumAppointmentStatusFieldUpdateOperationsInput | $Enums.AppointmentStatus
    consultationFee?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    paymentStatus?: EnumPaymentStatusFieldUpdateOperationsInput | $Enums.PaymentStatus
    reason?: NullableStringFieldUpdateOperationsInput | string | null
    patientNotes?: NullableStringFieldUpdateOperationsInput | string | null
    doctorNotes?: NullableStringFieldUpdateOperationsInput | string | null
    cancelledBy?: NullableEnumCancelledByFieldUpdateOperationsInput | $Enums.CancelledBy | null
    cancellationReason?: NullableStringFieldUpdateOperationsInput | string | null
    cancelledAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    confirmedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    completedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AppointmentUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    appointmentCode?: StringFieldUpdateOperationsInput | string
    doctorId?: StringFieldUpdateOperationsInput | string
    patientId?: StringFieldUpdateOperationsInput | string
    outletId?: NullableStringFieldUpdateOperationsInput | string | null
    appointmentDate?: DateTimeFieldUpdateOperationsInput | Date | string
    startTime?: DateTimeFieldUpdateOperationsInput | Date | string
    endTime?: DateTimeFieldUpdateOperationsInput | Date | string
    type?: EnumAppointmentTypeFieldUpdateOperationsInput | $Enums.AppointmentType
    status?: EnumAppointmentStatusFieldUpdateOperationsInput | $Enums.AppointmentStatus
    consultationFee?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    paymentStatus?: EnumPaymentStatusFieldUpdateOperationsInput | $Enums.PaymentStatus
    reason?: NullableStringFieldUpdateOperationsInput | string | null
    patientNotes?: NullableStringFieldUpdateOperationsInput | string | null
    doctorNotes?: NullableStringFieldUpdateOperationsInput | string | null
    cancelledBy?: NullableEnumCancelledByFieldUpdateOperationsInput | $Enums.CancelledBy | null
    cancellationReason?: NullableStringFieldUpdateOperationsInput | string | null
    cancelledAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    confirmedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    completedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AppointmentSlotLockCreateInput = {
    id?: string
    doctorId: string
    startTime: Date | string
    createdAt?: Date | string
    appointment: AppointmentCreateNestedOneWithoutSlotLockInput
  }

  export type AppointmentSlotLockUncheckedCreateInput = {
    id?: string
    doctorId: string
    startTime: Date | string
    appointmentId: string
    createdAt?: Date | string
  }

  export type AppointmentSlotLockUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    doctorId?: StringFieldUpdateOperationsInput | string
    startTime?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    appointment?: AppointmentUpdateOneRequiredWithoutSlotLockNestedInput
  }

  export type AppointmentSlotLockUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    doctorId?: StringFieldUpdateOperationsInput | string
    startTime?: DateTimeFieldUpdateOperationsInput | Date | string
    appointmentId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AppointmentSlotLockCreateManyInput = {
    id?: string
    doctorId: string
    startTime: Date | string
    appointmentId: string
    createdAt?: Date | string
  }

  export type AppointmentSlotLockUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    doctorId?: StringFieldUpdateOperationsInput | string
    startTime?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AppointmentSlotLockUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    doctorId?: StringFieldUpdateOperationsInput | string
    startTime?: DateTimeFieldUpdateOperationsInput | Date | string
    appointmentId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AppointmentStatusLogCreateInput = {
    id?: string
    previousStatus?: $Enums.AppointmentStatus | null
    newStatus: $Enums.AppointmentStatus
    changedById?: string | null
    changedByRole?: string | null
    note?: string | null
    createdAt?: Date | string
    appointment: AppointmentCreateNestedOneWithoutStatusLogsInput
  }

  export type AppointmentStatusLogUncheckedCreateInput = {
    id?: string
    appointmentId: string
    previousStatus?: $Enums.AppointmentStatus | null
    newStatus: $Enums.AppointmentStatus
    changedById?: string | null
    changedByRole?: string | null
    note?: string | null
    createdAt?: Date | string
  }

  export type AppointmentStatusLogUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    previousStatus?: NullableEnumAppointmentStatusFieldUpdateOperationsInput | $Enums.AppointmentStatus | null
    newStatus?: EnumAppointmentStatusFieldUpdateOperationsInput | $Enums.AppointmentStatus
    changedById?: NullableStringFieldUpdateOperationsInput | string | null
    changedByRole?: NullableStringFieldUpdateOperationsInput | string | null
    note?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    appointment?: AppointmentUpdateOneRequiredWithoutStatusLogsNestedInput
  }

  export type AppointmentStatusLogUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    appointmentId?: StringFieldUpdateOperationsInput | string
    previousStatus?: NullableEnumAppointmentStatusFieldUpdateOperationsInput | $Enums.AppointmentStatus | null
    newStatus?: EnumAppointmentStatusFieldUpdateOperationsInput | $Enums.AppointmentStatus
    changedById?: NullableStringFieldUpdateOperationsInput | string | null
    changedByRole?: NullableStringFieldUpdateOperationsInput | string | null
    note?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AppointmentStatusLogCreateManyInput = {
    id?: string
    appointmentId: string
    previousStatus?: $Enums.AppointmentStatus | null
    newStatus: $Enums.AppointmentStatus
    changedById?: string | null
    changedByRole?: string | null
    note?: string | null
    createdAt?: Date | string
  }

  export type AppointmentStatusLogUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    previousStatus?: NullableEnumAppointmentStatusFieldUpdateOperationsInput | $Enums.AppointmentStatus | null
    newStatus?: EnumAppointmentStatusFieldUpdateOperationsInput | $Enums.AppointmentStatus
    changedById?: NullableStringFieldUpdateOperationsInput | string | null
    changedByRole?: NullableStringFieldUpdateOperationsInput | string | null
    note?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AppointmentStatusLogUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    appointmentId?: StringFieldUpdateOperationsInput | string
    previousStatus?: NullableEnumAppointmentStatusFieldUpdateOperationsInput | $Enums.AppointmentStatus | null
    newStatus?: EnumAppointmentStatusFieldUpdateOperationsInput | $Enums.AppointmentStatus
    changedById?: NullableStringFieldUpdateOperationsInput | string | null
    changedByRole?: NullableStringFieldUpdateOperationsInput | string | null
    note?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AppointmentPaymentCreateInput = {
    id?: string
    amount: Decimal | DecimalJsLike | number | string
    currency?: string
    status?: $Enums.PaymentStatus
    gateway?: $Enums.PaymentGateway
    transactionId: string
    validationId?: string | null
    bankTransactionId?: string | null
    paymentMethod?: string | null
    cardType?: string | null
    gatewayResponse?: NullableJsonNullValueInput | InputJsonValue
    paidAt?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    appointment: AppointmentCreateNestedOneWithoutPaymentInput
  }

  export type AppointmentPaymentUncheckedCreateInput = {
    id?: string
    appointmentId: string
    amount: Decimal | DecimalJsLike | number | string
    currency?: string
    status?: $Enums.PaymentStatus
    gateway?: $Enums.PaymentGateway
    transactionId: string
    validationId?: string | null
    bankTransactionId?: string | null
    paymentMethod?: string | null
    cardType?: string | null
    gatewayResponse?: NullableJsonNullValueInput | InputJsonValue
    paidAt?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type AppointmentPaymentUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    amount?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    currency?: StringFieldUpdateOperationsInput | string
    status?: EnumPaymentStatusFieldUpdateOperationsInput | $Enums.PaymentStatus
    gateway?: EnumPaymentGatewayFieldUpdateOperationsInput | $Enums.PaymentGateway
    transactionId?: StringFieldUpdateOperationsInput | string
    validationId?: NullableStringFieldUpdateOperationsInput | string | null
    bankTransactionId?: NullableStringFieldUpdateOperationsInput | string | null
    paymentMethod?: NullableStringFieldUpdateOperationsInput | string | null
    cardType?: NullableStringFieldUpdateOperationsInput | string | null
    gatewayResponse?: NullableJsonNullValueInput | InputJsonValue
    paidAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    appointment?: AppointmentUpdateOneRequiredWithoutPaymentNestedInput
  }

  export type AppointmentPaymentUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    appointmentId?: StringFieldUpdateOperationsInput | string
    amount?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    currency?: StringFieldUpdateOperationsInput | string
    status?: EnumPaymentStatusFieldUpdateOperationsInput | $Enums.PaymentStatus
    gateway?: EnumPaymentGatewayFieldUpdateOperationsInput | $Enums.PaymentGateway
    transactionId?: StringFieldUpdateOperationsInput | string
    validationId?: NullableStringFieldUpdateOperationsInput | string | null
    bankTransactionId?: NullableStringFieldUpdateOperationsInput | string | null
    paymentMethod?: NullableStringFieldUpdateOperationsInput | string | null
    cardType?: NullableStringFieldUpdateOperationsInput | string | null
    gatewayResponse?: NullableJsonNullValueInput | InputJsonValue
    paidAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AppointmentPaymentCreateManyInput = {
    id?: string
    appointmentId: string
    amount: Decimal | DecimalJsLike | number | string
    currency?: string
    status?: $Enums.PaymentStatus
    gateway?: $Enums.PaymentGateway
    transactionId: string
    validationId?: string | null
    bankTransactionId?: string | null
    paymentMethod?: string | null
    cardType?: string | null
    gatewayResponse?: NullableJsonNullValueInput | InputJsonValue
    paidAt?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type AppointmentPaymentUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    amount?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    currency?: StringFieldUpdateOperationsInput | string
    status?: EnumPaymentStatusFieldUpdateOperationsInput | $Enums.PaymentStatus
    gateway?: EnumPaymentGatewayFieldUpdateOperationsInput | $Enums.PaymentGateway
    transactionId?: StringFieldUpdateOperationsInput | string
    validationId?: NullableStringFieldUpdateOperationsInput | string | null
    bankTransactionId?: NullableStringFieldUpdateOperationsInput | string | null
    paymentMethod?: NullableStringFieldUpdateOperationsInput | string | null
    cardType?: NullableStringFieldUpdateOperationsInput | string | null
    gatewayResponse?: NullableJsonNullValueInput | InputJsonValue
    paidAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AppointmentPaymentUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    appointmentId?: StringFieldUpdateOperationsInput | string
    amount?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    currency?: StringFieldUpdateOperationsInput | string
    status?: EnumPaymentStatusFieldUpdateOperationsInput | $Enums.PaymentStatus
    gateway?: EnumPaymentGatewayFieldUpdateOperationsInput | $Enums.PaymentGateway
    transactionId?: StringFieldUpdateOperationsInput | string
    validationId?: NullableStringFieldUpdateOperationsInput | string | null
    bankTransactionId?: NullableStringFieldUpdateOperationsInput | string | null
    paymentMethod?: NullableStringFieldUpdateOperationsInput | string | null
    cardType?: NullableStringFieldUpdateOperationsInput | string | null
    gatewayResponse?: NullableJsonNullValueInput | InputJsonValue
    paidAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PackageOrderCreateInput = {
    id?: string
    orderCode: string
    patientId: string
    outletId?: string | null
    packageId: string
    packageName: string
    subtitle?: string | null
    totalPrice: Decimal | DecimalJsLike | number | string
    discountedPrice: Decimal | DecimalJsLike | number | string
    status?: $Enums.PackageOrderStatus
    paymentStatus?: $Enums.PackagePaymentStatus
    paymentMethod?: $Enums.PackagePaymentMethod | null
    notes?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    items?: PackageOrderItemCreateNestedManyWithoutOrderInput
    payment?: PackagePaymentCreateNestedOneWithoutOrderInput
  }

  export type PackageOrderUncheckedCreateInput = {
    id?: string
    orderCode: string
    patientId: string
    outletId?: string | null
    packageId: string
    packageName: string
    subtitle?: string | null
    totalPrice: Decimal | DecimalJsLike | number | string
    discountedPrice: Decimal | DecimalJsLike | number | string
    status?: $Enums.PackageOrderStatus
    paymentStatus?: $Enums.PackagePaymentStatus
    paymentMethod?: $Enums.PackagePaymentMethod | null
    notes?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    items?: PackageOrderItemUncheckedCreateNestedManyWithoutOrderInput
    payment?: PackagePaymentUncheckedCreateNestedOneWithoutOrderInput
  }

  export type PackageOrderUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    orderCode?: StringFieldUpdateOperationsInput | string
    patientId?: StringFieldUpdateOperationsInput | string
    outletId?: NullableStringFieldUpdateOperationsInput | string | null
    packageId?: StringFieldUpdateOperationsInput | string
    packageName?: StringFieldUpdateOperationsInput | string
    subtitle?: NullableStringFieldUpdateOperationsInput | string | null
    totalPrice?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    discountedPrice?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    status?: EnumPackageOrderStatusFieldUpdateOperationsInput | $Enums.PackageOrderStatus
    paymentStatus?: EnumPackagePaymentStatusFieldUpdateOperationsInput | $Enums.PackagePaymentStatus
    paymentMethod?: NullableEnumPackagePaymentMethodFieldUpdateOperationsInput | $Enums.PackagePaymentMethod | null
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    items?: PackageOrderItemUpdateManyWithoutOrderNestedInput
    payment?: PackagePaymentUpdateOneWithoutOrderNestedInput
  }

  export type PackageOrderUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    orderCode?: StringFieldUpdateOperationsInput | string
    patientId?: StringFieldUpdateOperationsInput | string
    outletId?: NullableStringFieldUpdateOperationsInput | string | null
    packageId?: StringFieldUpdateOperationsInput | string
    packageName?: StringFieldUpdateOperationsInput | string
    subtitle?: NullableStringFieldUpdateOperationsInput | string | null
    totalPrice?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    discountedPrice?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    status?: EnumPackageOrderStatusFieldUpdateOperationsInput | $Enums.PackageOrderStatus
    paymentStatus?: EnumPackagePaymentStatusFieldUpdateOperationsInput | $Enums.PackagePaymentStatus
    paymentMethod?: NullableEnumPackagePaymentMethodFieldUpdateOperationsInput | $Enums.PackagePaymentMethod | null
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    items?: PackageOrderItemUncheckedUpdateManyWithoutOrderNestedInput
    payment?: PackagePaymentUncheckedUpdateOneWithoutOrderNestedInput
  }

  export type PackageOrderCreateManyInput = {
    id?: string
    orderCode: string
    patientId: string
    outletId?: string | null
    packageId: string
    packageName: string
    subtitle?: string | null
    totalPrice: Decimal | DecimalJsLike | number | string
    discountedPrice: Decimal | DecimalJsLike | number | string
    status?: $Enums.PackageOrderStatus
    paymentStatus?: $Enums.PackagePaymentStatus
    paymentMethod?: $Enums.PackagePaymentMethod | null
    notes?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type PackageOrderUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    orderCode?: StringFieldUpdateOperationsInput | string
    patientId?: StringFieldUpdateOperationsInput | string
    outletId?: NullableStringFieldUpdateOperationsInput | string | null
    packageId?: StringFieldUpdateOperationsInput | string
    packageName?: StringFieldUpdateOperationsInput | string
    subtitle?: NullableStringFieldUpdateOperationsInput | string | null
    totalPrice?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    discountedPrice?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    status?: EnumPackageOrderStatusFieldUpdateOperationsInput | $Enums.PackageOrderStatus
    paymentStatus?: EnumPackagePaymentStatusFieldUpdateOperationsInput | $Enums.PackagePaymentStatus
    paymentMethod?: NullableEnumPackagePaymentMethodFieldUpdateOperationsInput | $Enums.PackagePaymentMethod | null
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PackageOrderUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    orderCode?: StringFieldUpdateOperationsInput | string
    patientId?: StringFieldUpdateOperationsInput | string
    outletId?: NullableStringFieldUpdateOperationsInput | string | null
    packageId?: StringFieldUpdateOperationsInput | string
    packageName?: StringFieldUpdateOperationsInput | string
    subtitle?: NullableStringFieldUpdateOperationsInput | string | null
    totalPrice?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    discountedPrice?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    status?: EnumPackageOrderStatusFieldUpdateOperationsInput | $Enums.PackageOrderStatus
    paymentStatus?: EnumPackagePaymentStatusFieldUpdateOperationsInput | $Enums.PackagePaymentStatus
    paymentMethod?: NullableEnumPackagePaymentMethodFieldUpdateOperationsInput | $Enums.PackagePaymentMethod | null
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PackageOrderItemCreateInput = {
    id?: string
    testId: string
    testName: string
    testCode?: string | null
    price: Decimal | DecimalJsLike | number | string
    createdAt?: Date | string
    order: PackageOrderCreateNestedOneWithoutItemsInput
  }

  export type PackageOrderItemUncheckedCreateInput = {
    id?: string
    orderId: string
    testId: string
    testName: string
    testCode?: string | null
    price: Decimal | DecimalJsLike | number | string
    createdAt?: Date | string
  }

  export type PackageOrderItemUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    testId?: StringFieldUpdateOperationsInput | string
    testName?: StringFieldUpdateOperationsInput | string
    testCode?: NullableStringFieldUpdateOperationsInput | string | null
    price?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    order?: PackageOrderUpdateOneRequiredWithoutItemsNestedInput
  }

  export type PackageOrderItemUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    orderId?: StringFieldUpdateOperationsInput | string
    testId?: StringFieldUpdateOperationsInput | string
    testName?: StringFieldUpdateOperationsInput | string
    testCode?: NullableStringFieldUpdateOperationsInput | string | null
    price?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PackageOrderItemCreateManyInput = {
    id?: string
    orderId: string
    testId: string
    testName: string
    testCode?: string | null
    price: Decimal | DecimalJsLike | number | string
    createdAt?: Date | string
  }

  export type PackageOrderItemUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    testId?: StringFieldUpdateOperationsInput | string
    testName?: StringFieldUpdateOperationsInput | string
    testCode?: NullableStringFieldUpdateOperationsInput | string | null
    price?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PackageOrderItemUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    orderId?: StringFieldUpdateOperationsInput | string
    testId?: StringFieldUpdateOperationsInput | string
    testName?: StringFieldUpdateOperationsInput | string
    testCode?: NullableStringFieldUpdateOperationsInput | string | null
    price?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PackagePaymentCreateInput = {
    id?: string
    amount: Decimal | DecimalJsLike | number | string
    currency?: string
    status?: $Enums.PackagePaymentStatus
    method?: $Enums.PackagePaymentMethod
    transactionId: string
    validationId?: string | null
    bankTransactionId?: string | null
    paymentMethodName?: string | null
    cardType?: string | null
    gatewayResponse?: NullableJsonNullValueInput | InputJsonValue
    paidAt?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    order: PackageOrderCreateNestedOneWithoutPaymentInput
  }

  export type PackagePaymentUncheckedCreateInput = {
    id?: string
    orderId: string
    amount: Decimal | DecimalJsLike | number | string
    currency?: string
    status?: $Enums.PackagePaymentStatus
    method?: $Enums.PackagePaymentMethod
    transactionId: string
    validationId?: string | null
    bankTransactionId?: string | null
    paymentMethodName?: string | null
    cardType?: string | null
    gatewayResponse?: NullableJsonNullValueInput | InputJsonValue
    paidAt?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type PackagePaymentUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    amount?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    currency?: StringFieldUpdateOperationsInput | string
    status?: EnumPackagePaymentStatusFieldUpdateOperationsInput | $Enums.PackagePaymentStatus
    method?: EnumPackagePaymentMethodFieldUpdateOperationsInput | $Enums.PackagePaymentMethod
    transactionId?: StringFieldUpdateOperationsInput | string
    validationId?: NullableStringFieldUpdateOperationsInput | string | null
    bankTransactionId?: NullableStringFieldUpdateOperationsInput | string | null
    paymentMethodName?: NullableStringFieldUpdateOperationsInput | string | null
    cardType?: NullableStringFieldUpdateOperationsInput | string | null
    gatewayResponse?: NullableJsonNullValueInput | InputJsonValue
    paidAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    order?: PackageOrderUpdateOneRequiredWithoutPaymentNestedInput
  }

  export type PackagePaymentUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    orderId?: StringFieldUpdateOperationsInput | string
    amount?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    currency?: StringFieldUpdateOperationsInput | string
    status?: EnumPackagePaymentStatusFieldUpdateOperationsInput | $Enums.PackagePaymentStatus
    method?: EnumPackagePaymentMethodFieldUpdateOperationsInput | $Enums.PackagePaymentMethod
    transactionId?: StringFieldUpdateOperationsInput | string
    validationId?: NullableStringFieldUpdateOperationsInput | string | null
    bankTransactionId?: NullableStringFieldUpdateOperationsInput | string | null
    paymentMethodName?: NullableStringFieldUpdateOperationsInput | string | null
    cardType?: NullableStringFieldUpdateOperationsInput | string | null
    gatewayResponse?: NullableJsonNullValueInput | InputJsonValue
    paidAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PackagePaymentCreateManyInput = {
    id?: string
    orderId: string
    amount: Decimal | DecimalJsLike | number | string
    currency?: string
    status?: $Enums.PackagePaymentStatus
    method?: $Enums.PackagePaymentMethod
    transactionId: string
    validationId?: string | null
    bankTransactionId?: string | null
    paymentMethodName?: string | null
    cardType?: string | null
    gatewayResponse?: NullableJsonNullValueInput | InputJsonValue
    paidAt?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type PackagePaymentUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    amount?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    currency?: StringFieldUpdateOperationsInput | string
    status?: EnumPackagePaymentStatusFieldUpdateOperationsInput | $Enums.PackagePaymentStatus
    method?: EnumPackagePaymentMethodFieldUpdateOperationsInput | $Enums.PackagePaymentMethod
    transactionId?: StringFieldUpdateOperationsInput | string
    validationId?: NullableStringFieldUpdateOperationsInput | string | null
    bankTransactionId?: NullableStringFieldUpdateOperationsInput | string | null
    paymentMethodName?: NullableStringFieldUpdateOperationsInput | string | null
    cardType?: NullableStringFieldUpdateOperationsInput | string | null
    gatewayResponse?: NullableJsonNullValueInput | InputJsonValue
    paidAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PackagePaymentUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    orderId?: StringFieldUpdateOperationsInput | string
    amount?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    currency?: StringFieldUpdateOperationsInput | string
    status?: EnumPackagePaymentStatusFieldUpdateOperationsInput | $Enums.PackagePaymentStatus
    method?: EnumPackagePaymentMethodFieldUpdateOperationsInput | $Enums.PackagePaymentMethod
    transactionId?: StringFieldUpdateOperationsInput | string
    validationId?: NullableStringFieldUpdateOperationsInput | string | null
    bankTransactionId?: NullableStringFieldUpdateOperationsInput | string | null
    paymentMethodName?: NullableStringFieldUpdateOperationsInput | string | null
    cardType?: NullableStringFieldUpdateOperationsInput | string | null
    gatewayResponse?: NullableJsonNullValueInput | InputJsonValue
    paidAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type StringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[]
    notIn?: string[]
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    search?: string
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type StringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | null
    notIn?: string[] | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    search?: string
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type DateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[]
    notIn?: Date[] | string[]
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type EnumAppointmentTypeFilter<$PrismaModel = never> = {
    equals?: $Enums.AppointmentType | EnumAppointmentTypeFieldRefInput<$PrismaModel>
    in?: $Enums.AppointmentType[]
    notIn?: $Enums.AppointmentType[]
    not?: NestedEnumAppointmentTypeFilter<$PrismaModel> | $Enums.AppointmentType
  }

  export type EnumAppointmentStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.AppointmentStatus | EnumAppointmentStatusFieldRefInput<$PrismaModel>
    in?: $Enums.AppointmentStatus[]
    notIn?: $Enums.AppointmentStatus[]
    not?: NestedEnumAppointmentStatusFilter<$PrismaModel> | $Enums.AppointmentStatus
  }

  export type DecimalNullableFilter<$PrismaModel = never> = {
    equals?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel> | null
    in?: Decimal[] | DecimalJsLike[] | number[] | string[] | null
    notIn?: Decimal[] | DecimalJsLike[] | number[] | string[] | null
    lt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    lte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    not?: NestedDecimalNullableFilter<$PrismaModel> | Decimal | DecimalJsLike | number | string | null
  }

  export type EnumPaymentStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.PaymentStatus | EnumPaymentStatusFieldRefInput<$PrismaModel>
    in?: $Enums.PaymentStatus[]
    notIn?: $Enums.PaymentStatus[]
    not?: NestedEnumPaymentStatusFilter<$PrismaModel> | $Enums.PaymentStatus
  }

  export type EnumCancelledByNullableFilter<$PrismaModel = never> = {
    equals?: $Enums.CancelledBy | EnumCancelledByFieldRefInput<$PrismaModel> | null
    in?: $Enums.CancelledBy[] | null
    notIn?: $Enums.CancelledBy[] | null
    not?: NestedEnumCancelledByNullableFilter<$PrismaModel> | $Enums.CancelledBy | null
  }

  export type DateTimeNullableFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | null
    notIn?: Date[] | string[] | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableFilter<$PrismaModel> | Date | string | null
  }

  export type AppointmentSlotLockNullableScalarRelationFilter = {
    is?: AppointmentSlotLockWhereInput | null
    isNot?: AppointmentSlotLockWhereInput | null
  }

  export type AppointmentStatusLogListRelationFilter = {
    every?: AppointmentStatusLogWhereInput
    some?: AppointmentStatusLogWhereInput
    none?: AppointmentStatusLogWhereInput
  }

  export type AppointmentPaymentNullableScalarRelationFilter = {
    is?: AppointmentPaymentWhereInput | null
    isNot?: AppointmentPaymentWhereInput | null
  }

  export type SortOrderInput = {
    sort: SortOrder
    nulls?: NullsOrder
  }

  export type AppointmentStatusLogOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type AppointmentOrderByRelevanceInput = {
    fields: AppointmentOrderByRelevanceFieldEnum | AppointmentOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type AppointmentCountOrderByAggregateInput = {
    id?: SortOrder
    appointmentCode?: SortOrder
    doctorId?: SortOrder
    patientId?: SortOrder
    outletId?: SortOrder
    appointmentDate?: SortOrder
    startTime?: SortOrder
    endTime?: SortOrder
    type?: SortOrder
    status?: SortOrder
    consultationFee?: SortOrder
    paymentStatus?: SortOrder
    reason?: SortOrder
    patientNotes?: SortOrder
    doctorNotes?: SortOrder
    cancelledBy?: SortOrder
    cancellationReason?: SortOrder
    cancelledAt?: SortOrder
    confirmedAt?: SortOrder
    completedAt?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type AppointmentAvgOrderByAggregateInput = {
    consultationFee?: SortOrder
  }

  export type AppointmentMaxOrderByAggregateInput = {
    id?: SortOrder
    appointmentCode?: SortOrder
    doctorId?: SortOrder
    patientId?: SortOrder
    outletId?: SortOrder
    appointmentDate?: SortOrder
    startTime?: SortOrder
    endTime?: SortOrder
    type?: SortOrder
    status?: SortOrder
    consultationFee?: SortOrder
    paymentStatus?: SortOrder
    reason?: SortOrder
    patientNotes?: SortOrder
    doctorNotes?: SortOrder
    cancelledBy?: SortOrder
    cancellationReason?: SortOrder
    cancelledAt?: SortOrder
    confirmedAt?: SortOrder
    completedAt?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type AppointmentMinOrderByAggregateInput = {
    id?: SortOrder
    appointmentCode?: SortOrder
    doctorId?: SortOrder
    patientId?: SortOrder
    outletId?: SortOrder
    appointmentDate?: SortOrder
    startTime?: SortOrder
    endTime?: SortOrder
    type?: SortOrder
    status?: SortOrder
    consultationFee?: SortOrder
    paymentStatus?: SortOrder
    reason?: SortOrder
    patientNotes?: SortOrder
    doctorNotes?: SortOrder
    cancelledBy?: SortOrder
    cancellationReason?: SortOrder
    cancelledAt?: SortOrder
    confirmedAt?: SortOrder
    completedAt?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type AppointmentSumOrderByAggregateInput = {
    consultationFee?: SortOrder
  }

  export type StringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[]
    notIn?: string[]
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    search?: string
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type StringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | null
    notIn?: string[] | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    search?: string
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type DateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[]
    notIn?: Date[] | string[]
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type EnumAppointmentTypeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.AppointmentType | EnumAppointmentTypeFieldRefInput<$PrismaModel>
    in?: $Enums.AppointmentType[]
    notIn?: $Enums.AppointmentType[]
    not?: NestedEnumAppointmentTypeWithAggregatesFilter<$PrismaModel> | $Enums.AppointmentType
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumAppointmentTypeFilter<$PrismaModel>
    _max?: NestedEnumAppointmentTypeFilter<$PrismaModel>
  }

  export type EnumAppointmentStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.AppointmentStatus | EnumAppointmentStatusFieldRefInput<$PrismaModel>
    in?: $Enums.AppointmentStatus[]
    notIn?: $Enums.AppointmentStatus[]
    not?: NestedEnumAppointmentStatusWithAggregatesFilter<$PrismaModel> | $Enums.AppointmentStatus
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumAppointmentStatusFilter<$PrismaModel>
    _max?: NestedEnumAppointmentStatusFilter<$PrismaModel>
  }

  export type DecimalNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel> | null
    in?: Decimal[] | DecimalJsLike[] | number[] | string[] | null
    notIn?: Decimal[] | DecimalJsLike[] | number[] | string[] | null
    lt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    lte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    not?: NestedDecimalNullableWithAggregatesFilter<$PrismaModel> | Decimal | DecimalJsLike | number | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedDecimalNullableFilter<$PrismaModel>
    _sum?: NestedDecimalNullableFilter<$PrismaModel>
    _min?: NestedDecimalNullableFilter<$PrismaModel>
    _max?: NestedDecimalNullableFilter<$PrismaModel>
  }

  export type EnumPaymentStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.PaymentStatus | EnumPaymentStatusFieldRefInput<$PrismaModel>
    in?: $Enums.PaymentStatus[]
    notIn?: $Enums.PaymentStatus[]
    not?: NestedEnumPaymentStatusWithAggregatesFilter<$PrismaModel> | $Enums.PaymentStatus
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumPaymentStatusFilter<$PrismaModel>
    _max?: NestedEnumPaymentStatusFilter<$PrismaModel>
  }

  export type EnumCancelledByNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.CancelledBy | EnumCancelledByFieldRefInput<$PrismaModel> | null
    in?: $Enums.CancelledBy[] | null
    notIn?: $Enums.CancelledBy[] | null
    not?: NestedEnumCancelledByNullableWithAggregatesFilter<$PrismaModel> | $Enums.CancelledBy | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedEnumCancelledByNullableFilter<$PrismaModel>
    _max?: NestedEnumCancelledByNullableFilter<$PrismaModel>
  }

  export type DateTimeNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | null
    notIn?: Date[] | string[] | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableWithAggregatesFilter<$PrismaModel> | Date | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedDateTimeNullableFilter<$PrismaModel>
    _max?: NestedDateTimeNullableFilter<$PrismaModel>
  }

  export type AppointmentScalarRelationFilter = {
    is?: AppointmentWhereInput
    isNot?: AppointmentWhereInput
  }

  export type AppointmentSlotLockOrderByRelevanceInput = {
    fields: AppointmentSlotLockOrderByRelevanceFieldEnum | AppointmentSlotLockOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type AppointmentSlotLockDoctorIdStartTimeCompoundUniqueInput = {
    doctorId: string
    startTime: Date | string
  }

  export type AppointmentSlotLockCountOrderByAggregateInput = {
    id?: SortOrder
    doctorId?: SortOrder
    startTime?: SortOrder
    appointmentId?: SortOrder
    createdAt?: SortOrder
  }

  export type AppointmentSlotLockMaxOrderByAggregateInput = {
    id?: SortOrder
    doctorId?: SortOrder
    startTime?: SortOrder
    appointmentId?: SortOrder
    createdAt?: SortOrder
  }

  export type AppointmentSlotLockMinOrderByAggregateInput = {
    id?: SortOrder
    doctorId?: SortOrder
    startTime?: SortOrder
    appointmentId?: SortOrder
    createdAt?: SortOrder
  }

  export type EnumAppointmentStatusNullableFilter<$PrismaModel = never> = {
    equals?: $Enums.AppointmentStatus | EnumAppointmentStatusFieldRefInput<$PrismaModel> | null
    in?: $Enums.AppointmentStatus[] | null
    notIn?: $Enums.AppointmentStatus[] | null
    not?: NestedEnumAppointmentStatusNullableFilter<$PrismaModel> | $Enums.AppointmentStatus | null
  }

  export type AppointmentStatusLogOrderByRelevanceInput = {
    fields: AppointmentStatusLogOrderByRelevanceFieldEnum | AppointmentStatusLogOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type AppointmentStatusLogCountOrderByAggregateInput = {
    id?: SortOrder
    appointmentId?: SortOrder
    previousStatus?: SortOrder
    newStatus?: SortOrder
    changedById?: SortOrder
    changedByRole?: SortOrder
    note?: SortOrder
    createdAt?: SortOrder
  }

  export type AppointmentStatusLogMaxOrderByAggregateInput = {
    id?: SortOrder
    appointmentId?: SortOrder
    previousStatus?: SortOrder
    newStatus?: SortOrder
    changedById?: SortOrder
    changedByRole?: SortOrder
    note?: SortOrder
    createdAt?: SortOrder
  }

  export type AppointmentStatusLogMinOrderByAggregateInput = {
    id?: SortOrder
    appointmentId?: SortOrder
    previousStatus?: SortOrder
    newStatus?: SortOrder
    changedById?: SortOrder
    changedByRole?: SortOrder
    note?: SortOrder
    createdAt?: SortOrder
  }

  export type EnumAppointmentStatusNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.AppointmentStatus | EnumAppointmentStatusFieldRefInput<$PrismaModel> | null
    in?: $Enums.AppointmentStatus[] | null
    notIn?: $Enums.AppointmentStatus[] | null
    not?: NestedEnumAppointmentStatusNullableWithAggregatesFilter<$PrismaModel> | $Enums.AppointmentStatus | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedEnumAppointmentStatusNullableFilter<$PrismaModel>
    _max?: NestedEnumAppointmentStatusNullableFilter<$PrismaModel>
  }

  export type DecimalFilter<$PrismaModel = never> = {
    equals?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    in?: Decimal[] | DecimalJsLike[] | number[] | string[]
    notIn?: Decimal[] | DecimalJsLike[] | number[] | string[]
    lt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    lte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    not?: NestedDecimalFilter<$PrismaModel> | Decimal | DecimalJsLike | number | string
  }

  export type EnumPaymentGatewayFilter<$PrismaModel = never> = {
    equals?: $Enums.PaymentGateway | EnumPaymentGatewayFieldRefInput<$PrismaModel>
    in?: $Enums.PaymentGateway[]
    notIn?: $Enums.PaymentGateway[]
    not?: NestedEnumPaymentGatewayFilter<$PrismaModel> | $Enums.PaymentGateway
  }
  export type JsonNullableFilter<$PrismaModel = never> =
    | PatchUndefined<
        Either<Required<JsonNullableFilterBase<$PrismaModel>>, Exclude<keyof Required<JsonNullableFilterBase<$PrismaModel>>, 'path'>>,
        Required<JsonNullableFilterBase<$PrismaModel>>
      >
    | OptionalFlat<Omit<Required<JsonNullableFilterBase<$PrismaModel>>, 'path'>>

  export type JsonNullableFilterBase<$PrismaModel = never> = {
    equals?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
    path?: string
    mode?: QueryMode | EnumQueryModeFieldRefInput<$PrismaModel>
    string_contains?: string | StringFieldRefInput<$PrismaModel>
    string_starts_with?: string | StringFieldRefInput<$PrismaModel>
    string_ends_with?: string | StringFieldRefInput<$PrismaModel>
    array_starts_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_ends_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_contains?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    lt?: InputJsonValue
    lte?: InputJsonValue
    gt?: InputJsonValue
    gte?: InputJsonValue
    not?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
  }

  export type AppointmentPaymentOrderByRelevanceInput = {
    fields: AppointmentPaymentOrderByRelevanceFieldEnum | AppointmentPaymentOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type AppointmentPaymentCountOrderByAggregateInput = {
    id?: SortOrder
    appointmentId?: SortOrder
    amount?: SortOrder
    currency?: SortOrder
    status?: SortOrder
    gateway?: SortOrder
    transactionId?: SortOrder
    validationId?: SortOrder
    bankTransactionId?: SortOrder
    paymentMethod?: SortOrder
    cardType?: SortOrder
    gatewayResponse?: SortOrder
    paidAt?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type AppointmentPaymentAvgOrderByAggregateInput = {
    amount?: SortOrder
  }

  export type AppointmentPaymentMaxOrderByAggregateInput = {
    id?: SortOrder
    appointmentId?: SortOrder
    amount?: SortOrder
    currency?: SortOrder
    status?: SortOrder
    gateway?: SortOrder
    transactionId?: SortOrder
    validationId?: SortOrder
    bankTransactionId?: SortOrder
    paymentMethod?: SortOrder
    cardType?: SortOrder
    paidAt?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type AppointmentPaymentMinOrderByAggregateInput = {
    id?: SortOrder
    appointmentId?: SortOrder
    amount?: SortOrder
    currency?: SortOrder
    status?: SortOrder
    gateway?: SortOrder
    transactionId?: SortOrder
    validationId?: SortOrder
    bankTransactionId?: SortOrder
    paymentMethod?: SortOrder
    cardType?: SortOrder
    paidAt?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type AppointmentPaymentSumOrderByAggregateInput = {
    amount?: SortOrder
  }

  export type DecimalWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    in?: Decimal[] | DecimalJsLike[] | number[] | string[]
    notIn?: Decimal[] | DecimalJsLike[] | number[] | string[]
    lt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    lte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    not?: NestedDecimalWithAggregatesFilter<$PrismaModel> | Decimal | DecimalJsLike | number | string
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedDecimalFilter<$PrismaModel>
    _sum?: NestedDecimalFilter<$PrismaModel>
    _min?: NestedDecimalFilter<$PrismaModel>
    _max?: NestedDecimalFilter<$PrismaModel>
  }

  export type EnumPaymentGatewayWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.PaymentGateway | EnumPaymentGatewayFieldRefInput<$PrismaModel>
    in?: $Enums.PaymentGateway[]
    notIn?: $Enums.PaymentGateway[]
    not?: NestedEnumPaymentGatewayWithAggregatesFilter<$PrismaModel> | $Enums.PaymentGateway
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumPaymentGatewayFilter<$PrismaModel>
    _max?: NestedEnumPaymentGatewayFilter<$PrismaModel>
  }
  export type JsonNullableWithAggregatesFilter<$PrismaModel = never> =
    | PatchUndefined<
        Either<Required<JsonNullableWithAggregatesFilterBase<$PrismaModel>>, Exclude<keyof Required<JsonNullableWithAggregatesFilterBase<$PrismaModel>>, 'path'>>,
        Required<JsonNullableWithAggregatesFilterBase<$PrismaModel>>
      >
    | OptionalFlat<Omit<Required<JsonNullableWithAggregatesFilterBase<$PrismaModel>>, 'path'>>

  export type JsonNullableWithAggregatesFilterBase<$PrismaModel = never> = {
    equals?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
    path?: string
    mode?: QueryMode | EnumQueryModeFieldRefInput<$PrismaModel>
    string_contains?: string | StringFieldRefInput<$PrismaModel>
    string_starts_with?: string | StringFieldRefInput<$PrismaModel>
    string_ends_with?: string | StringFieldRefInput<$PrismaModel>
    array_starts_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_ends_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_contains?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    lt?: InputJsonValue
    lte?: InputJsonValue
    gt?: InputJsonValue
    gte?: InputJsonValue
    not?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedJsonNullableFilter<$PrismaModel>
    _max?: NestedJsonNullableFilter<$PrismaModel>
  }

  export type EnumPackageOrderStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.PackageOrderStatus | EnumPackageOrderStatusFieldRefInput<$PrismaModel>
    in?: $Enums.PackageOrderStatus[]
    notIn?: $Enums.PackageOrderStatus[]
    not?: NestedEnumPackageOrderStatusFilter<$PrismaModel> | $Enums.PackageOrderStatus
  }

  export type EnumPackagePaymentStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.PackagePaymentStatus | EnumPackagePaymentStatusFieldRefInput<$PrismaModel>
    in?: $Enums.PackagePaymentStatus[]
    notIn?: $Enums.PackagePaymentStatus[]
    not?: NestedEnumPackagePaymentStatusFilter<$PrismaModel> | $Enums.PackagePaymentStatus
  }

  export type EnumPackagePaymentMethodNullableFilter<$PrismaModel = never> = {
    equals?: $Enums.PackagePaymentMethod | EnumPackagePaymentMethodFieldRefInput<$PrismaModel> | null
    in?: $Enums.PackagePaymentMethod[] | null
    notIn?: $Enums.PackagePaymentMethod[] | null
    not?: NestedEnumPackagePaymentMethodNullableFilter<$PrismaModel> | $Enums.PackagePaymentMethod | null
  }

  export type PackageOrderItemListRelationFilter = {
    every?: PackageOrderItemWhereInput
    some?: PackageOrderItemWhereInput
    none?: PackageOrderItemWhereInput
  }

  export type PackagePaymentNullableScalarRelationFilter = {
    is?: PackagePaymentWhereInput | null
    isNot?: PackagePaymentWhereInput | null
  }

  export type PackageOrderItemOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type PackageOrderOrderByRelevanceInput = {
    fields: PackageOrderOrderByRelevanceFieldEnum | PackageOrderOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type PackageOrderCountOrderByAggregateInput = {
    id?: SortOrder
    orderCode?: SortOrder
    patientId?: SortOrder
    outletId?: SortOrder
    packageId?: SortOrder
    packageName?: SortOrder
    subtitle?: SortOrder
    totalPrice?: SortOrder
    discountedPrice?: SortOrder
    status?: SortOrder
    paymentStatus?: SortOrder
    paymentMethod?: SortOrder
    notes?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type PackageOrderAvgOrderByAggregateInput = {
    totalPrice?: SortOrder
    discountedPrice?: SortOrder
  }

  export type PackageOrderMaxOrderByAggregateInput = {
    id?: SortOrder
    orderCode?: SortOrder
    patientId?: SortOrder
    outletId?: SortOrder
    packageId?: SortOrder
    packageName?: SortOrder
    subtitle?: SortOrder
    totalPrice?: SortOrder
    discountedPrice?: SortOrder
    status?: SortOrder
    paymentStatus?: SortOrder
    paymentMethod?: SortOrder
    notes?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type PackageOrderMinOrderByAggregateInput = {
    id?: SortOrder
    orderCode?: SortOrder
    patientId?: SortOrder
    outletId?: SortOrder
    packageId?: SortOrder
    packageName?: SortOrder
    subtitle?: SortOrder
    totalPrice?: SortOrder
    discountedPrice?: SortOrder
    status?: SortOrder
    paymentStatus?: SortOrder
    paymentMethod?: SortOrder
    notes?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type PackageOrderSumOrderByAggregateInput = {
    totalPrice?: SortOrder
    discountedPrice?: SortOrder
  }

  export type EnumPackageOrderStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.PackageOrderStatus | EnumPackageOrderStatusFieldRefInput<$PrismaModel>
    in?: $Enums.PackageOrderStatus[]
    notIn?: $Enums.PackageOrderStatus[]
    not?: NestedEnumPackageOrderStatusWithAggregatesFilter<$PrismaModel> | $Enums.PackageOrderStatus
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumPackageOrderStatusFilter<$PrismaModel>
    _max?: NestedEnumPackageOrderStatusFilter<$PrismaModel>
  }

  export type EnumPackagePaymentStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.PackagePaymentStatus | EnumPackagePaymentStatusFieldRefInput<$PrismaModel>
    in?: $Enums.PackagePaymentStatus[]
    notIn?: $Enums.PackagePaymentStatus[]
    not?: NestedEnumPackagePaymentStatusWithAggregatesFilter<$PrismaModel> | $Enums.PackagePaymentStatus
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumPackagePaymentStatusFilter<$PrismaModel>
    _max?: NestedEnumPackagePaymentStatusFilter<$PrismaModel>
  }

  export type EnumPackagePaymentMethodNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.PackagePaymentMethod | EnumPackagePaymentMethodFieldRefInput<$PrismaModel> | null
    in?: $Enums.PackagePaymentMethod[] | null
    notIn?: $Enums.PackagePaymentMethod[] | null
    not?: NestedEnumPackagePaymentMethodNullableWithAggregatesFilter<$PrismaModel> | $Enums.PackagePaymentMethod | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedEnumPackagePaymentMethodNullableFilter<$PrismaModel>
    _max?: NestedEnumPackagePaymentMethodNullableFilter<$PrismaModel>
  }

  export type PackageOrderScalarRelationFilter = {
    is?: PackageOrderWhereInput
    isNot?: PackageOrderWhereInput
  }

  export type PackageOrderItemOrderByRelevanceInput = {
    fields: PackageOrderItemOrderByRelevanceFieldEnum | PackageOrderItemOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type PackageOrderItemCountOrderByAggregateInput = {
    id?: SortOrder
    orderId?: SortOrder
    testId?: SortOrder
    testName?: SortOrder
    testCode?: SortOrder
    price?: SortOrder
    createdAt?: SortOrder
  }

  export type PackageOrderItemAvgOrderByAggregateInput = {
    price?: SortOrder
  }

  export type PackageOrderItemMaxOrderByAggregateInput = {
    id?: SortOrder
    orderId?: SortOrder
    testId?: SortOrder
    testName?: SortOrder
    testCode?: SortOrder
    price?: SortOrder
    createdAt?: SortOrder
  }

  export type PackageOrderItemMinOrderByAggregateInput = {
    id?: SortOrder
    orderId?: SortOrder
    testId?: SortOrder
    testName?: SortOrder
    testCode?: SortOrder
    price?: SortOrder
    createdAt?: SortOrder
  }

  export type PackageOrderItemSumOrderByAggregateInput = {
    price?: SortOrder
  }

  export type EnumPackagePaymentMethodFilter<$PrismaModel = never> = {
    equals?: $Enums.PackagePaymentMethod | EnumPackagePaymentMethodFieldRefInput<$PrismaModel>
    in?: $Enums.PackagePaymentMethod[]
    notIn?: $Enums.PackagePaymentMethod[]
    not?: NestedEnumPackagePaymentMethodFilter<$PrismaModel> | $Enums.PackagePaymentMethod
  }

  export type PackagePaymentOrderByRelevanceInput = {
    fields: PackagePaymentOrderByRelevanceFieldEnum | PackagePaymentOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type PackagePaymentCountOrderByAggregateInput = {
    id?: SortOrder
    orderId?: SortOrder
    amount?: SortOrder
    currency?: SortOrder
    status?: SortOrder
    method?: SortOrder
    transactionId?: SortOrder
    validationId?: SortOrder
    bankTransactionId?: SortOrder
    paymentMethodName?: SortOrder
    cardType?: SortOrder
    gatewayResponse?: SortOrder
    paidAt?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type PackagePaymentAvgOrderByAggregateInput = {
    amount?: SortOrder
  }

  export type PackagePaymentMaxOrderByAggregateInput = {
    id?: SortOrder
    orderId?: SortOrder
    amount?: SortOrder
    currency?: SortOrder
    status?: SortOrder
    method?: SortOrder
    transactionId?: SortOrder
    validationId?: SortOrder
    bankTransactionId?: SortOrder
    paymentMethodName?: SortOrder
    cardType?: SortOrder
    paidAt?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type PackagePaymentMinOrderByAggregateInput = {
    id?: SortOrder
    orderId?: SortOrder
    amount?: SortOrder
    currency?: SortOrder
    status?: SortOrder
    method?: SortOrder
    transactionId?: SortOrder
    validationId?: SortOrder
    bankTransactionId?: SortOrder
    paymentMethodName?: SortOrder
    cardType?: SortOrder
    paidAt?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type PackagePaymentSumOrderByAggregateInput = {
    amount?: SortOrder
  }

  export type EnumPackagePaymentMethodWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.PackagePaymentMethod | EnumPackagePaymentMethodFieldRefInput<$PrismaModel>
    in?: $Enums.PackagePaymentMethod[]
    notIn?: $Enums.PackagePaymentMethod[]
    not?: NestedEnumPackagePaymentMethodWithAggregatesFilter<$PrismaModel> | $Enums.PackagePaymentMethod
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumPackagePaymentMethodFilter<$PrismaModel>
    _max?: NestedEnumPackagePaymentMethodFilter<$PrismaModel>
  }

  export type AppointmentSlotLockCreateNestedOneWithoutAppointmentInput = {
    create?: XOR<AppointmentSlotLockCreateWithoutAppointmentInput, AppointmentSlotLockUncheckedCreateWithoutAppointmentInput>
    connectOrCreate?: AppointmentSlotLockCreateOrConnectWithoutAppointmentInput
    connect?: AppointmentSlotLockWhereUniqueInput
  }

  export type AppointmentStatusLogCreateNestedManyWithoutAppointmentInput = {
    create?: XOR<AppointmentStatusLogCreateWithoutAppointmentInput, AppointmentStatusLogUncheckedCreateWithoutAppointmentInput> | AppointmentStatusLogCreateWithoutAppointmentInput[] | AppointmentStatusLogUncheckedCreateWithoutAppointmentInput[]
    connectOrCreate?: AppointmentStatusLogCreateOrConnectWithoutAppointmentInput | AppointmentStatusLogCreateOrConnectWithoutAppointmentInput[]
    createMany?: AppointmentStatusLogCreateManyAppointmentInputEnvelope
    connect?: AppointmentStatusLogWhereUniqueInput | AppointmentStatusLogWhereUniqueInput[]
  }

  export type AppointmentPaymentCreateNestedOneWithoutAppointmentInput = {
    create?: XOR<AppointmentPaymentCreateWithoutAppointmentInput, AppointmentPaymentUncheckedCreateWithoutAppointmentInput>
    connectOrCreate?: AppointmentPaymentCreateOrConnectWithoutAppointmentInput
    connect?: AppointmentPaymentWhereUniqueInput
  }

  export type AppointmentSlotLockUncheckedCreateNestedOneWithoutAppointmentInput = {
    create?: XOR<AppointmentSlotLockCreateWithoutAppointmentInput, AppointmentSlotLockUncheckedCreateWithoutAppointmentInput>
    connectOrCreate?: AppointmentSlotLockCreateOrConnectWithoutAppointmentInput
    connect?: AppointmentSlotLockWhereUniqueInput
  }

  export type AppointmentStatusLogUncheckedCreateNestedManyWithoutAppointmentInput = {
    create?: XOR<AppointmentStatusLogCreateWithoutAppointmentInput, AppointmentStatusLogUncheckedCreateWithoutAppointmentInput> | AppointmentStatusLogCreateWithoutAppointmentInput[] | AppointmentStatusLogUncheckedCreateWithoutAppointmentInput[]
    connectOrCreate?: AppointmentStatusLogCreateOrConnectWithoutAppointmentInput | AppointmentStatusLogCreateOrConnectWithoutAppointmentInput[]
    createMany?: AppointmentStatusLogCreateManyAppointmentInputEnvelope
    connect?: AppointmentStatusLogWhereUniqueInput | AppointmentStatusLogWhereUniqueInput[]
  }

  export type AppointmentPaymentUncheckedCreateNestedOneWithoutAppointmentInput = {
    create?: XOR<AppointmentPaymentCreateWithoutAppointmentInput, AppointmentPaymentUncheckedCreateWithoutAppointmentInput>
    connectOrCreate?: AppointmentPaymentCreateOrConnectWithoutAppointmentInput
    connect?: AppointmentPaymentWhereUniqueInput
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

  export type EnumAppointmentTypeFieldUpdateOperationsInput = {
    set?: $Enums.AppointmentType
  }

  export type EnumAppointmentStatusFieldUpdateOperationsInput = {
    set?: $Enums.AppointmentStatus
  }

  export type NullableDecimalFieldUpdateOperationsInput = {
    set?: Decimal | DecimalJsLike | number | string | null
    increment?: Decimal | DecimalJsLike | number | string
    decrement?: Decimal | DecimalJsLike | number | string
    multiply?: Decimal | DecimalJsLike | number | string
    divide?: Decimal | DecimalJsLike | number | string
  }

  export type EnumPaymentStatusFieldUpdateOperationsInput = {
    set?: $Enums.PaymentStatus
  }

  export type NullableEnumCancelledByFieldUpdateOperationsInput = {
    set?: $Enums.CancelledBy | null
  }

  export type NullableDateTimeFieldUpdateOperationsInput = {
    set?: Date | string | null
  }

  export type AppointmentSlotLockUpdateOneWithoutAppointmentNestedInput = {
    create?: XOR<AppointmentSlotLockCreateWithoutAppointmentInput, AppointmentSlotLockUncheckedCreateWithoutAppointmentInput>
    connectOrCreate?: AppointmentSlotLockCreateOrConnectWithoutAppointmentInput
    upsert?: AppointmentSlotLockUpsertWithoutAppointmentInput
    disconnect?: AppointmentSlotLockWhereInput | boolean
    delete?: AppointmentSlotLockWhereInput | boolean
    connect?: AppointmentSlotLockWhereUniqueInput
    update?: XOR<XOR<AppointmentSlotLockUpdateToOneWithWhereWithoutAppointmentInput, AppointmentSlotLockUpdateWithoutAppointmentInput>, AppointmentSlotLockUncheckedUpdateWithoutAppointmentInput>
  }

  export type AppointmentStatusLogUpdateManyWithoutAppointmentNestedInput = {
    create?: XOR<AppointmentStatusLogCreateWithoutAppointmentInput, AppointmentStatusLogUncheckedCreateWithoutAppointmentInput> | AppointmentStatusLogCreateWithoutAppointmentInput[] | AppointmentStatusLogUncheckedCreateWithoutAppointmentInput[]
    connectOrCreate?: AppointmentStatusLogCreateOrConnectWithoutAppointmentInput | AppointmentStatusLogCreateOrConnectWithoutAppointmentInput[]
    upsert?: AppointmentStatusLogUpsertWithWhereUniqueWithoutAppointmentInput | AppointmentStatusLogUpsertWithWhereUniqueWithoutAppointmentInput[]
    createMany?: AppointmentStatusLogCreateManyAppointmentInputEnvelope
    set?: AppointmentStatusLogWhereUniqueInput | AppointmentStatusLogWhereUniqueInput[]
    disconnect?: AppointmentStatusLogWhereUniqueInput | AppointmentStatusLogWhereUniqueInput[]
    delete?: AppointmentStatusLogWhereUniqueInput | AppointmentStatusLogWhereUniqueInput[]
    connect?: AppointmentStatusLogWhereUniqueInput | AppointmentStatusLogWhereUniqueInput[]
    update?: AppointmentStatusLogUpdateWithWhereUniqueWithoutAppointmentInput | AppointmentStatusLogUpdateWithWhereUniqueWithoutAppointmentInput[]
    updateMany?: AppointmentStatusLogUpdateManyWithWhereWithoutAppointmentInput | AppointmentStatusLogUpdateManyWithWhereWithoutAppointmentInput[]
    deleteMany?: AppointmentStatusLogScalarWhereInput | AppointmentStatusLogScalarWhereInput[]
  }

  export type AppointmentPaymentUpdateOneWithoutAppointmentNestedInput = {
    create?: XOR<AppointmentPaymentCreateWithoutAppointmentInput, AppointmentPaymentUncheckedCreateWithoutAppointmentInput>
    connectOrCreate?: AppointmentPaymentCreateOrConnectWithoutAppointmentInput
    upsert?: AppointmentPaymentUpsertWithoutAppointmentInput
    disconnect?: AppointmentPaymentWhereInput | boolean
    delete?: AppointmentPaymentWhereInput | boolean
    connect?: AppointmentPaymentWhereUniqueInput
    update?: XOR<XOR<AppointmentPaymentUpdateToOneWithWhereWithoutAppointmentInput, AppointmentPaymentUpdateWithoutAppointmentInput>, AppointmentPaymentUncheckedUpdateWithoutAppointmentInput>
  }

  export type AppointmentSlotLockUncheckedUpdateOneWithoutAppointmentNestedInput = {
    create?: XOR<AppointmentSlotLockCreateWithoutAppointmentInput, AppointmentSlotLockUncheckedCreateWithoutAppointmentInput>
    connectOrCreate?: AppointmentSlotLockCreateOrConnectWithoutAppointmentInput
    upsert?: AppointmentSlotLockUpsertWithoutAppointmentInput
    disconnect?: AppointmentSlotLockWhereInput | boolean
    delete?: AppointmentSlotLockWhereInput | boolean
    connect?: AppointmentSlotLockWhereUniqueInput
    update?: XOR<XOR<AppointmentSlotLockUpdateToOneWithWhereWithoutAppointmentInput, AppointmentSlotLockUpdateWithoutAppointmentInput>, AppointmentSlotLockUncheckedUpdateWithoutAppointmentInput>
  }

  export type AppointmentStatusLogUncheckedUpdateManyWithoutAppointmentNestedInput = {
    create?: XOR<AppointmentStatusLogCreateWithoutAppointmentInput, AppointmentStatusLogUncheckedCreateWithoutAppointmentInput> | AppointmentStatusLogCreateWithoutAppointmentInput[] | AppointmentStatusLogUncheckedCreateWithoutAppointmentInput[]
    connectOrCreate?: AppointmentStatusLogCreateOrConnectWithoutAppointmentInput | AppointmentStatusLogCreateOrConnectWithoutAppointmentInput[]
    upsert?: AppointmentStatusLogUpsertWithWhereUniqueWithoutAppointmentInput | AppointmentStatusLogUpsertWithWhereUniqueWithoutAppointmentInput[]
    createMany?: AppointmentStatusLogCreateManyAppointmentInputEnvelope
    set?: AppointmentStatusLogWhereUniqueInput | AppointmentStatusLogWhereUniqueInput[]
    disconnect?: AppointmentStatusLogWhereUniqueInput | AppointmentStatusLogWhereUniqueInput[]
    delete?: AppointmentStatusLogWhereUniqueInput | AppointmentStatusLogWhereUniqueInput[]
    connect?: AppointmentStatusLogWhereUniqueInput | AppointmentStatusLogWhereUniqueInput[]
    update?: AppointmentStatusLogUpdateWithWhereUniqueWithoutAppointmentInput | AppointmentStatusLogUpdateWithWhereUniqueWithoutAppointmentInput[]
    updateMany?: AppointmentStatusLogUpdateManyWithWhereWithoutAppointmentInput | AppointmentStatusLogUpdateManyWithWhereWithoutAppointmentInput[]
    deleteMany?: AppointmentStatusLogScalarWhereInput | AppointmentStatusLogScalarWhereInput[]
  }

  export type AppointmentPaymentUncheckedUpdateOneWithoutAppointmentNestedInput = {
    create?: XOR<AppointmentPaymentCreateWithoutAppointmentInput, AppointmentPaymentUncheckedCreateWithoutAppointmentInput>
    connectOrCreate?: AppointmentPaymentCreateOrConnectWithoutAppointmentInput
    upsert?: AppointmentPaymentUpsertWithoutAppointmentInput
    disconnect?: AppointmentPaymentWhereInput | boolean
    delete?: AppointmentPaymentWhereInput | boolean
    connect?: AppointmentPaymentWhereUniqueInput
    update?: XOR<XOR<AppointmentPaymentUpdateToOneWithWhereWithoutAppointmentInput, AppointmentPaymentUpdateWithoutAppointmentInput>, AppointmentPaymentUncheckedUpdateWithoutAppointmentInput>
  }

  export type AppointmentCreateNestedOneWithoutSlotLockInput = {
    create?: XOR<AppointmentCreateWithoutSlotLockInput, AppointmentUncheckedCreateWithoutSlotLockInput>
    connectOrCreate?: AppointmentCreateOrConnectWithoutSlotLockInput
    connect?: AppointmentWhereUniqueInput
  }

  export type AppointmentUpdateOneRequiredWithoutSlotLockNestedInput = {
    create?: XOR<AppointmentCreateWithoutSlotLockInput, AppointmentUncheckedCreateWithoutSlotLockInput>
    connectOrCreate?: AppointmentCreateOrConnectWithoutSlotLockInput
    upsert?: AppointmentUpsertWithoutSlotLockInput
    connect?: AppointmentWhereUniqueInput
    update?: XOR<XOR<AppointmentUpdateToOneWithWhereWithoutSlotLockInput, AppointmentUpdateWithoutSlotLockInput>, AppointmentUncheckedUpdateWithoutSlotLockInput>
  }

  export type AppointmentCreateNestedOneWithoutStatusLogsInput = {
    create?: XOR<AppointmentCreateWithoutStatusLogsInput, AppointmentUncheckedCreateWithoutStatusLogsInput>
    connectOrCreate?: AppointmentCreateOrConnectWithoutStatusLogsInput
    connect?: AppointmentWhereUniqueInput
  }

  export type NullableEnumAppointmentStatusFieldUpdateOperationsInput = {
    set?: $Enums.AppointmentStatus | null
  }

  export type AppointmentUpdateOneRequiredWithoutStatusLogsNestedInput = {
    create?: XOR<AppointmentCreateWithoutStatusLogsInput, AppointmentUncheckedCreateWithoutStatusLogsInput>
    connectOrCreate?: AppointmentCreateOrConnectWithoutStatusLogsInput
    upsert?: AppointmentUpsertWithoutStatusLogsInput
    connect?: AppointmentWhereUniqueInput
    update?: XOR<XOR<AppointmentUpdateToOneWithWhereWithoutStatusLogsInput, AppointmentUpdateWithoutStatusLogsInput>, AppointmentUncheckedUpdateWithoutStatusLogsInput>
  }

  export type AppointmentCreateNestedOneWithoutPaymentInput = {
    create?: XOR<AppointmentCreateWithoutPaymentInput, AppointmentUncheckedCreateWithoutPaymentInput>
    connectOrCreate?: AppointmentCreateOrConnectWithoutPaymentInput
    connect?: AppointmentWhereUniqueInput
  }

  export type DecimalFieldUpdateOperationsInput = {
    set?: Decimal | DecimalJsLike | number | string
    increment?: Decimal | DecimalJsLike | number | string
    decrement?: Decimal | DecimalJsLike | number | string
    multiply?: Decimal | DecimalJsLike | number | string
    divide?: Decimal | DecimalJsLike | number | string
  }

  export type EnumPaymentGatewayFieldUpdateOperationsInput = {
    set?: $Enums.PaymentGateway
  }

  export type AppointmentUpdateOneRequiredWithoutPaymentNestedInput = {
    create?: XOR<AppointmentCreateWithoutPaymentInput, AppointmentUncheckedCreateWithoutPaymentInput>
    connectOrCreate?: AppointmentCreateOrConnectWithoutPaymentInput
    upsert?: AppointmentUpsertWithoutPaymentInput
    connect?: AppointmentWhereUniqueInput
    update?: XOR<XOR<AppointmentUpdateToOneWithWhereWithoutPaymentInput, AppointmentUpdateWithoutPaymentInput>, AppointmentUncheckedUpdateWithoutPaymentInput>
  }

  export type PackageOrderItemCreateNestedManyWithoutOrderInput = {
    create?: XOR<PackageOrderItemCreateWithoutOrderInput, PackageOrderItemUncheckedCreateWithoutOrderInput> | PackageOrderItemCreateWithoutOrderInput[] | PackageOrderItemUncheckedCreateWithoutOrderInput[]
    connectOrCreate?: PackageOrderItemCreateOrConnectWithoutOrderInput | PackageOrderItemCreateOrConnectWithoutOrderInput[]
    createMany?: PackageOrderItemCreateManyOrderInputEnvelope
    connect?: PackageOrderItemWhereUniqueInput | PackageOrderItemWhereUniqueInput[]
  }

  export type PackagePaymentCreateNestedOneWithoutOrderInput = {
    create?: XOR<PackagePaymentCreateWithoutOrderInput, PackagePaymentUncheckedCreateWithoutOrderInput>
    connectOrCreate?: PackagePaymentCreateOrConnectWithoutOrderInput
    connect?: PackagePaymentWhereUniqueInput
  }

  export type PackageOrderItemUncheckedCreateNestedManyWithoutOrderInput = {
    create?: XOR<PackageOrderItemCreateWithoutOrderInput, PackageOrderItemUncheckedCreateWithoutOrderInput> | PackageOrderItemCreateWithoutOrderInput[] | PackageOrderItemUncheckedCreateWithoutOrderInput[]
    connectOrCreate?: PackageOrderItemCreateOrConnectWithoutOrderInput | PackageOrderItemCreateOrConnectWithoutOrderInput[]
    createMany?: PackageOrderItemCreateManyOrderInputEnvelope
    connect?: PackageOrderItemWhereUniqueInput | PackageOrderItemWhereUniqueInput[]
  }

  export type PackagePaymentUncheckedCreateNestedOneWithoutOrderInput = {
    create?: XOR<PackagePaymentCreateWithoutOrderInput, PackagePaymentUncheckedCreateWithoutOrderInput>
    connectOrCreate?: PackagePaymentCreateOrConnectWithoutOrderInput
    connect?: PackagePaymentWhereUniqueInput
  }

  export type EnumPackageOrderStatusFieldUpdateOperationsInput = {
    set?: $Enums.PackageOrderStatus
  }

  export type EnumPackagePaymentStatusFieldUpdateOperationsInput = {
    set?: $Enums.PackagePaymentStatus
  }

  export type NullableEnumPackagePaymentMethodFieldUpdateOperationsInput = {
    set?: $Enums.PackagePaymentMethod | null
  }

  export type PackageOrderItemUpdateManyWithoutOrderNestedInput = {
    create?: XOR<PackageOrderItemCreateWithoutOrderInput, PackageOrderItemUncheckedCreateWithoutOrderInput> | PackageOrderItemCreateWithoutOrderInput[] | PackageOrderItemUncheckedCreateWithoutOrderInput[]
    connectOrCreate?: PackageOrderItemCreateOrConnectWithoutOrderInput | PackageOrderItemCreateOrConnectWithoutOrderInput[]
    upsert?: PackageOrderItemUpsertWithWhereUniqueWithoutOrderInput | PackageOrderItemUpsertWithWhereUniqueWithoutOrderInput[]
    createMany?: PackageOrderItemCreateManyOrderInputEnvelope
    set?: PackageOrderItemWhereUniqueInput | PackageOrderItemWhereUniqueInput[]
    disconnect?: PackageOrderItemWhereUniqueInput | PackageOrderItemWhereUniqueInput[]
    delete?: PackageOrderItemWhereUniqueInput | PackageOrderItemWhereUniqueInput[]
    connect?: PackageOrderItemWhereUniqueInput | PackageOrderItemWhereUniqueInput[]
    update?: PackageOrderItemUpdateWithWhereUniqueWithoutOrderInput | PackageOrderItemUpdateWithWhereUniqueWithoutOrderInput[]
    updateMany?: PackageOrderItemUpdateManyWithWhereWithoutOrderInput | PackageOrderItemUpdateManyWithWhereWithoutOrderInput[]
    deleteMany?: PackageOrderItemScalarWhereInput | PackageOrderItemScalarWhereInput[]
  }

  export type PackagePaymentUpdateOneWithoutOrderNestedInput = {
    create?: XOR<PackagePaymentCreateWithoutOrderInput, PackagePaymentUncheckedCreateWithoutOrderInput>
    connectOrCreate?: PackagePaymentCreateOrConnectWithoutOrderInput
    upsert?: PackagePaymentUpsertWithoutOrderInput
    disconnect?: PackagePaymentWhereInput | boolean
    delete?: PackagePaymentWhereInput | boolean
    connect?: PackagePaymentWhereUniqueInput
    update?: XOR<XOR<PackagePaymentUpdateToOneWithWhereWithoutOrderInput, PackagePaymentUpdateWithoutOrderInput>, PackagePaymentUncheckedUpdateWithoutOrderInput>
  }

  export type PackageOrderItemUncheckedUpdateManyWithoutOrderNestedInput = {
    create?: XOR<PackageOrderItemCreateWithoutOrderInput, PackageOrderItemUncheckedCreateWithoutOrderInput> | PackageOrderItemCreateWithoutOrderInput[] | PackageOrderItemUncheckedCreateWithoutOrderInput[]
    connectOrCreate?: PackageOrderItemCreateOrConnectWithoutOrderInput | PackageOrderItemCreateOrConnectWithoutOrderInput[]
    upsert?: PackageOrderItemUpsertWithWhereUniqueWithoutOrderInput | PackageOrderItemUpsertWithWhereUniqueWithoutOrderInput[]
    createMany?: PackageOrderItemCreateManyOrderInputEnvelope
    set?: PackageOrderItemWhereUniqueInput | PackageOrderItemWhereUniqueInput[]
    disconnect?: PackageOrderItemWhereUniqueInput | PackageOrderItemWhereUniqueInput[]
    delete?: PackageOrderItemWhereUniqueInput | PackageOrderItemWhereUniqueInput[]
    connect?: PackageOrderItemWhereUniqueInput | PackageOrderItemWhereUniqueInput[]
    update?: PackageOrderItemUpdateWithWhereUniqueWithoutOrderInput | PackageOrderItemUpdateWithWhereUniqueWithoutOrderInput[]
    updateMany?: PackageOrderItemUpdateManyWithWhereWithoutOrderInput | PackageOrderItemUpdateManyWithWhereWithoutOrderInput[]
    deleteMany?: PackageOrderItemScalarWhereInput | PackageOrderItemScalarWhereInput[]
  }

  export type PackagePaymentUncheckedUpdateOneWithoutOrderNestedInput = {
    create?: XOR<PackagePaymentCreateWithoutOrderInput, PackagePaymentUncheckedCreateWithoutOrderInput>
    connectOrCreate?: PackagePaymentCreateOrConnectWithoutOrderInput
    upsert?: PackagePaymentUpsertWithoutOrderInput
    disconnect?: PackagePaymentWhereInput | boolean
    delete?: PackagePaymentWhereInput | boolean
    connect?: PackagePaymentWhereUniqueInput
    update?: XOR<XOR<PackagePaymentUpdateToOneWithWhereWithoutOrderInput, PackagePaymentUpdateWithoutOrderInput>, PackagePaymentUncheckedUpdateWithoutOrderInput>
  }

  export type PackageOrderCreateNestedOneWithoutItemsInput = {
    create?: XOR<PackageOrderCreateWithoutItemsInput, PackageOrderUncheckedCreateWithoutItemsInput>
    connectOrCreate?: PackageOrderCreateOrConnectWithoutItemsInput
    connect?: PackageOrderWhereUniqueInput
  }

  export type PackageOrderUpdateOneRequiredWithoutItemsNestedInput = {
    create?: XOR<PackageOrderCreateWithoutItemsInput, PackageOrderUncheckedCreateWithoutItemsInput>
    connectOrCreate?: PackageOrderCreateOrConnectWithoutItemsInput
    upsert?: PackageOrderUpsertWithoutItemsInput
    connect?: PackageOrderWhereUniqueInput
    update?: XOR<XOR<PackageOrderUpdateToOneWithWhereWithoutItemsInput, PackageOrderUpdateWithoutItemsInput>, PackageOrderUncheckedUpdateWithoutItemsInput>
  }

  export type PackageOrderCreateNestedOneWithoutPaymentInput = {
    create?: XOR<PackageOrderCreateWithoutPaymentInput, PackageOrderUncheckedCreateWithoutPaymentInput>
    connectOrCreate?: PackageOrderCreateOrConnectWithoutPaymentInput
    connect?: PackageOrderWhereUniqueInput
  }

  export type EnumPackagePaymentMethodFieldUpdateOperationsInput = {
    set?: $Enums.PackagePaymentMethod
  }

  export type PackageOrderUpdateOneRequiredWithoutPaymentNestedInput = {
    create?: XOR<PackageOrderCreateWithoutPaymentInput, PackageOrderUncheckedCreateWithoutPaymentInput>
    connectOrCreate?: PackageOrderCreateOrConnectWithoutPaymentInput
    upsert?: PackageOrderUpsertWithoutPaymentInput
    connect?: PackageOrderWhereUniqueInput
    update?: XOR<XOR<PackageOrderUpdateToOneWithWhereWithoutPaymentInput, PackageOrderUpdateWithoutPaymentInput>, PackageOrderUncheckedUpdateWithoutPaymentInput>
  }

  export type NestedStringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[]
    notIn?: string[]
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    search?: string
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type NestedStringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | null
    notIn?: string[] | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    search?: string
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type NestedDateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[]
    notIn?: Date[] | string[]
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type NestedEnumAppointmentTypeFilter<$PrismaModel = never> = {
    equals?: $Enums.AppointmentType | EnumAppointmentTypeFieldRefInput<$PrismaModel>
    in?: $Enums.AppointmentType[]
    notIn?: $Enums.AppointmentType[]
    not?: NestedEnumAppointmentTypeFilter<$PrismaModel> | $Enums.AppointmentType
  }

  export type NestedEnumAppointmentStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.AppointmentStatus | EnumAppointmentStatusFieldRefInput<$PrismaModel>
    in?: $Enums.AppointmentStatus[]
    notIn?: $Enums.AppointmentStatus[]
    not?: NestedEnumAppointmentStatusFilter<$PrismaModel> | $Enums.AppointmentStatus
  }

  export type NestedDecimalNullableFilter<$PrismaModel = never> = {
    equals?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel> | null
    in?: Decimal[] | DecimalJsLike[] | number[] | string[] | null
    notIn?: Decimal[] | DecimalJsLike[] | number[] | string[] | null
    lt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    lte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    not?: NestedDecimalNullableFilter<$PrismaModel> | Decimal | DecimalJsLike | number | string | null
  }

  export type NestedEnumPaymentStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.PaymentStatus | EnumPaymentStatusFieldRefInput<$PrismaModel>
    in?: $Enums.PaymentStatus[]
    notIn?: $Enums.PaymentStatus[]
    not?: NestedEnumPaymentStatusFilter<$PrismaModel> | $Enums.PaymentStatus
  }

  export type NestedEnumCancelledByNullableFilter<$PrismaModel = never> = {
    equals?: $Enums.CancelledBy | EnumCancelledByFieldRefInput<$PrismaModel> | null
    in?: $Enums.CancelledBy[] | null
    notIn?: $Enums.CancelledBy[] | null
    not?: NestedEnumCancelledByNullableFilter<$PrismaModel> | $Enums.CancelledBy | null
  }

  export type NestedDateTimeNullableFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | null
    notIn?: Date[] | string[] | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableFilter<$PrismaModel> | Date | string | null
  }

  export type NestedStringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[]
    notIn?: string[]
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    search?: string
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type NestedIntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type NestedStringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | null
    notIn?: string[] | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    search?: string
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type NestedIntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | null
    notIn?: number[] | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }

  export type NestedDateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[]
    notIn?: Date[] | string[]
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type NestedEnumAppointmentTypeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.AppointmentType | EnumAppointmentTypeFieldRefInput<$PrismaModel>
    in?: $Enums.AppointmentType[]
    notIn?: $Enums.AppointmentType[]
    not?: NestedEnumAppointmentTypeWithAggregatesFilter<$PrismaModel> | $Enums.AppointmentType
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumAppointmentTypeFilter<$PrismaModel>
    _max?: NestedEnumAppointmentTypeFilter<$PrismaModel>
  }

  export type NestedEnumAppointmentStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.AppointmentStatus | EnumAppointmentStatusFieldRefInput<$PrismaModel>
    in?: $Enums.AppointmentStatus[]
    notIn?: $Enums.AppointmentStatus[]
    not?: NestedEnumAppointmentStatusWithAggregatesFilter<$PrismaModel> | $Enums.AppointmentStatus
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumAppointmentStatusFilter<$PrismaModel>
    _max?: NestedEnumAppointmentStatusFilter<$PrismaModel>
  }

  export type NestedDecimalNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel> | null
    in?: Decimal[] | DecimalJsLike[] | number[] | string[] | null
    notIn?: Decimal[] | DecimalJsLike[] | number[] | string[] | null
    lt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    lte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    not?: NestedDecimalNullableWithAggregatesFilter<$PrismaModel> | Decimal | DecimalJsLike | number | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedDecimalNullableFilter<$PrismaModel>
    _sum?: NestedDecimalNullableFilter<$PrismaModel>
    _min?: NestedDecimalNullableFilter<$PrismaModel>
    _max?: NestedDecimalNullableFilter<$PrismaModel>
  }

  export type NestedEnumPaymentStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.PaymentStatus | EnumPaymentStatusFieldRefInput<$PrismaModel>
    in?: $Enums.PaymentStatus[]
    notIn?: $Enums.PaymentStatus[]
    not?: NestedEnumPaymentStatusWithAggregatesFilter<$PrismaModel> | $Enums.PaymentStatus
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumPaymentStatusFilter<$PrismaModel>
    _max?: NestedEnumPaymentStatusFilter<$PrismaModel>
  }

  export type NestedEnumCancelledByNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.CancelledBy | EnumCancelledByFieldRefInput<$PrismaModel> | null
    in?: $Enums.CancelledBy[] | null
    notIn?: $Enums.CancelledBy[] | null
    not?: NestedEnumCancelledByNullableWithAggregatesFilter<$PrismaModel> | $Enums.CancelledBy | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedEnumCancelledByNullableFilter<$PrismaModel>
    _max?: NestedEnumCancelledByNullableFilter<$PrismaModel>
  }

  export type NestedDateTimeNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | null
    notIn?: Date[] | string[] | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableWithAggregatesFilter<$PrismaModel> | Date | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedDateTimeNullableFilter<$PrismaModel>
    _max?: NestedDateTimeNullableFilter<$PrismaModel>
  }

  export type NestedEnumAppointmentStatusNullableFilter<$PrismaModel = never> = {
    equals?: $Enums.AppointmentStatus | EnumAppointmentStatusFieldRefInput<$PrismaModel> | null
    in?: $Enums.AppointmentStatus[] | null
    notIn?: $Enums.AppointmentStatus[] | null
    not?: NestedEnumAppointmentStatusNullableFilter<$PrismaModel> | $Enums.AppointmentStatus | null
  }

  export type NestedEnumAppointmentStatusNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.AppointmentStatus | EnumAppointmentStatusFieldRefInput<$PrismaModel> | null
    in?: $Enums.AppointmentStatus[] | null
    notIn?: $Enums.AppointmentStatus[] | null
    not?: NestedEnumAppointmentStatusNullableWithAggregatesFilter<$PrismaModel> | $Enums.AppointmentStatus | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedEnumAppointmentStatusNullableFilter<$PrismaModel>
    _max?: NestedEnumAppointmentStatusNullableFilter<$PrismaModel>
  }

  export type NestedDecimalFilter<$PrismaModel = never> = {
    equals?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    in?: Decimal[] | DecimalJsLike[] | number[] | string[]
    notIn?: Decimal[] | DecimalJsLike[] | number[] | string[]
    lt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    lte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    not?: NestedDecimalFilter<$PrismaModel> | Decimal | DecimalJsLike | number | string
  }

  export type NestedEnumPaymentGatewayFilter<$PrismaModel = never> = {
    equals?: $Enums.PaymentGateway | EnumPaymentGatewayFieldRefInput<$PrismaModel>
    in?: $Enums.PaymentGateway[]
    notIn?: $Enums.PaymentGateway[]
    not?: NestedEnumPaymentGatewayFilter<$PrismaModel> | $Enums.PaymentGateway
  }

  export type NestedDecimalWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    in?: Decimal[] | DecimalJsLike[] | number[] | string[]
    notIn?: Decimal[] | DecimalJsLike[] | number[] | string[]
    lt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    lte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    not?: NestedDecimalWithAggregatesFilter<$PrismaModel> | Decimal | DecimalJsLike | number | string
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedDecimalFilter<$PrismaModel>
    _sum?: NestedDecimalFilter<$PrismaModel>
    _min?: NestedDecimalFilter<$PrismaModel>
    _max?: NestedDecimalFilter<$PrismaModel>
  }

  export type NestedEnumPaymentGatewayWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.PaymentGateway | EnumPaymentGatewayFieldRefInput<$PrismaModel>
    in?: $Enums.PaymentGateway[]
    notIn?: $Enums.PaymentGateway[]
    not?: NestedEnumPaymentGatewayWithAggregatesFilter<$PrismaModel> | $Enums.PaymentGateway
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumPaymentGatewayFilter<$PrismaModel>
    _max?: NestedEnumPaymentGatewayFilter<$PrismaModel>
  }
  export type NestedJsonNullableFilter<$PrismaModel = never> =
    | PatchUndefined<
        Either<Required<NestedJsonNullableFilterBase<$PrismaModel>>, Exclude<keyof Required<NestedJsonNullableFilterBase<$PrismaModel>>, 'path'>>,
        Required<NestedJsonNullableFilterBase<$PrismaModel>>
      >
    | OptionalFlat<Omit<Required<NestedJsonNullableFilterBase<$PrismaModel>>, 'path'>>

  export type NestedJsonNullableFilterBase<$PrismaModel = never> = {
    equals?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
    path?: string
    mode?: QueryMode | EnumQueryModeFieldRefInput<$PrismaModel>
    string_contains?: string | StringFieldRefInput<$PrismaModel>
    string_starts_with?: string | StringFieldRefInput<$PrismaModel>
    string_ends_with?: string | StringFieldRefInput<$PrismaModel>
    array_starts_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_ends_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_contains?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    lt?: InputJsonValue
    lte?: InputJsonValue
    gt?: InputJsonValue
    gte?: InputJsonValue
    not?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
  }

  export type NestedEnumPackageOrderStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.PackageOrderStatus | EnumPackageOrderStatusFieldRefInput<$PrismaModel>
    in?: $Enums.PackageOrderStatus[]
    notIn?: $Enums.PackageOrderStatus[]
    not?: NestedEnumPackageOrderStatusFilter<$PrismaModel> | $Enums.PackageOrderStatus
  }

  export type NestedEnumPackagePaymentStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.PackagePaymentStatus | EnumPackagePaymentStatusFieldRefInput<$PrismaModel>
    in?: $Enums.PackagePaymentStatus[]
    notIn?: $Enums.PackagePaymentStatus[]
    not?: NestedEnumPackagePaymentStatusFilter<$PrismaModel> | $Enums.PackagePaymentStatus
  }

  export type NestedEnumPackagePaymentMethodNullableFilter<$PrismaModel = never> = {
    equals?: $Enums.PackagePaymentMethod | EnumPackagePaymentMethodFieldRefInput<$PrismaModel> | null
    in?: $Enums.PackagePaymentMethod[] | null
    notIn?: $Enums.PackagePaymentMethod[] | null
    not?: NestedEnumPackagePaymentMethodNullableFilter<$PrismaModel> | $Enums.PackagePaymentMethod | null
  }

  export type NestedEnumPackageOrderStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.PackageOrderStatus | EnumPackageOrderStatusFieldRefInput<$PrismaModel>
    in?: $Enums.PackageOrderStatus[]
    notIn?: $Enums.PackageOrderStatus[]
    not?: NestedEnumPackageOrderStatusWithAggregatesFilter<$PrismaModel> | $Enums.PackageOrderStatus
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumPackageOrderStatusFilter<$PrismaModel>
    _max?: NestedEnumPackageOrderStatusFilter<$PrismaModel>
  }

  export type NestedEnumPackagePaymentStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.PackagePaymentStatus | EnumPackagePaymentStatusFieldRefInput<$PrismaModel>
    in?: $Enums.PackagePaymentStatus[]
    notIn?: $Enums.PackagePaymentStatus[]
    not?: NestedEnumPackagePaymentStatusWithAggregatesFilter<$PrismaModel> | $Enums.PackagePaymentStatus
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumPackagePaymentStatusFilter<$PrismaModel>
    _max?: NestedEnumPackagePaymentStatusFilter<$PrismaModel>
  }

  export type NestedEnumPackagePaymentMethodNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.PackagePaymentMethod | EnumPackagePaymentMethodFieldRefInput<$PrismaModel> | null
    in?: $Enums.PackagePaymentMethod[] | null
    notIn?: $Enums.PackagePaymentMethod[] | null
    not?: NestedEnumPackagePaymentMethodNullableWithAggregatesFilter<$PrismaModel> | $Enums.PackagePaymentMethod | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedEnumPackagePaymentMethodNullableFilter<$PrismaModel>
    _max?: NestedEnumPackagePaymentMethodNullableFilter<$PrismaModel>
  }

  export type NestedEnumPackagePaymentMethodFilter<$PrismaModel = never> = {
    equals?: $Enums.PackagePaymentMethod | EnumPackagePaymentMethodFieldRefInput<$PrismaModel>
    in?: $Enums.PackagePaymentMethod[]
    notIn?: $Enums.PackagePaymentMethod[]
    not?: NestedEnumPackagePaymentMethodFilter<$PrismaModel> | $Enums.PackagePaymentMethod
  }

  export type NestedEnumPackagePaymentMethodWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.PackagePaymentMethod | EnumPackagePaymentMethodFieldRefInput<$PrismaModel>
    in?: $Enums.PackagePaymentMethod[]
    notIn?: $Enums.PackagePaymentMethod[]
    not?: NestedEnumPackagePaymentMethodWithAggregatesFilter<$PrismaModel> | $Enums.PackagePaymentMethod
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumPackagePaymentMethodFilter<$PrismaModel>
    _max?: NestedEnumPackagePaymentMethodFilter<$PrismaModel>
  }

  export type AppointmentSlotLockCreateWithoutAppointmentInput = {
    id?: string
    doctorId: string
    startTime: Date | string
    createdAt?: Date | string
  }

  export type AppointmentSlotLockUncheckedCreateWithoutAppointmentInput = {
    id?: string
    doctorId: string
    startTime: Date | string
    createdAt?: Date | string
  }

  export type AppointmentSlotLockCreateOrConnectWithoutAppointmentInput = {
    where: AppointmentSlotLockWhereUniqueInput
    create: XOR<AppointmentSlotLockCreateWithoutAppointmentInput, AppointmentSlotLockUncheckedCreateWithoutAppointmentInput>
  }

  export type AppointmentStatusLogCreateWithoutAppointmentInput = {
    id?: string
    previousStatus?: $Enums.AppointmentStatus | null
    newStatus: $Enums.AppointmentStatus
    changedById?: string | null
    changedByRole?: string | null
    note?: string | null
    createdAt?: Date | string
  }

  export type AppointmentStatusLogUncheckedCreateWithoutAppointmentInput = {
    id?: string
    previousStatus?: $Enums.AppointmentStatus | null
    newStatus: $Enums.AppointmentStatus
    changedById?: string | null
    changedByRole?: string | null
    note?: string | null
    createdAt?: Date | string
  }

  export type AppointmentStatusLogCreateOrConnectWithoutAppointmentInput = {
    where: AppointmentStatusLogWhereUniqueInput
    create: XOR<AppointmentStatusLogCreateWithoutAppointmentInput, AppointmentStatusLogUncheckedCreateWithoutAppointmentInput>
  }

  export type AppointmentStatusLogCreateManyAppointmentInputEnvelope = {
    data: AppointmentStatusLogCreateManyAppointmentInput | AppointmentStatusLogCreateManyAppointmentInput[]
    skipDuplicates?: boolean
  }

  export type AppointmentPaymentCreateWithoutAppointmentInput = {
    id?: string
    amount: Decimal | DecimalJsLike | number | string
    currency?: string
    status?: $Enums.PaymentStatus
    gateway?: $Enums.PaymentGateway
    transactionId: string
    validationId?: string | null
    bankTransactionId?: string | null
    paymentMethod?: string | null
    cardType?: string | null
    gatewayResponse?: NullableJsonNullValueInput | InputJsonValue
    paidAt?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type AppointmentPaymentUncheckedCreateWithoutAppointmentInput = {
    id?: string
    amount: Decimal | DecimalJsLike | number | string
    currency?: string
    status?: $Enums.PaymentStatus
    gateway?: $Enums.PaymentGateway
    transactionId: string
    validationId?: string | null
    bankTransactionId?: string | null
    paymentMethod?: string | null
    cardType?: string | null
    gatewayResponse?: NullableJsonNullValueInput | InputJsonValue
    paidAt?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type AppointmentPaymentCreateOrConnectWithoutAppointmentInput = {
    where: AppointmentPaymentWhereUniqueInput
    create: XOR<AppointmentPaymentCreateWithoutAppointmentInput, AppointmentPaymentUncheckedCreateWithoutAppointmentInput>
  }

  export type AppointmentSlotLockUpsertWithoutAppointmentInput = {
    update: XOR<AppointmentSlotLockUpdateWithoutAppointmentInput, AppointmentSlotLockUncheckedUpdateWithoutAppointmentInput>
    create: XOR<AppointmentSlotLockCreateWithoutAppointmentInput, AppointmentSlotLockUncheckedCreateWithoutAppointmentInput>
    where?: AppointmentSlotLockWhereInput
  }

  export type AppointmentSlotLockUpdateToOneWithWhereWithoutAppointmentInput = {
    where?: AppointmentSlotLockWhereInput
    data: XOR<AppointmentSlotLockUpdateWithoutAppointmentInput, AppointmentSlotLockUncheckedUpdateWithoutAppointmentInput>
  }

  export type AppointmentSlotLockUpdateWithoutAppointmentInput = {
    id?: StringFieldUpdateOperationsInput | string
    doctorId?: StringFieldUpdateOperationsInput | string
    startTime?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AppointmentSlotLockUncheckedUpdateWithoutAppointmentInput = {
    id?: StringFieldUpdateOperationsInput | string
    doctorId?: StringFieldUpdateOperationsInput | string
    startTime?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AppointmentStatusLogUpsertWithWhereUniqueWithoutAppointmentInput = {
    where: AppointmentStatusLogWhereUniqueInput
    update: XOR<AppointmentStatusLogUpdateWithoutAppointmentInput, AppointmentStatusLogUncheckedUpdateWithoutAppointmentInput>
    create: XOR<AppointmentStatusLogCreateWithoutAppointmentInput, AppointmentStatusLogUncheckedCreateWithoutAppointmentInput>
  }

  export type AppointmentStatusLogUpdateWithWhereUniqueWithoutAppointmentInput = {
    where: AppointmentStatusLogWhereUniqueInput
    data: XOR<AppointmentStatusLogUpdateWithoutAppointmentInput, AppointmentStatusLogUncheckedUpdateWithoutAppointmentInput>
  }

  export type AppointmentStatusLogUpdateManyWithWhereWithoutAppointmentInput = {
    where: AppointmentStatusLogScalarWhereInput
    data: XOR<AppointmentStatusLogUpdateManyMutationInput, AppointmentStatusLogUncheckedUpdateManyWithoutAppointmentInput>
  }

  export type AppointmentStatusLogScalarWhereInput = {
    AND?: AppointmentStatusLogScalarWhereInput | AppointmentStatusLogScalarWhereInput[]
    OR?: AppointmentStatusLogScalarWhereInput[]
    NOT?: AppointmentStatusLogScalarWhereInput | AppointmentStatusLogScalarWhereInput[]
    id?: StringFilter<"AppointmentStatusLog"> | string
    appointmentId?: StringFilter<"AppointmentStatusLog"> | string
    previousStatus?: EnumAppointmentStatusNullableFilter<"AppointmentStatusLog"> | $Enums.AppointmentStatus | null
    newStatus?: EnumAppointmentStatusFilter<"AppointmentStatusLog"> | $Enums.AppointmentStatus
    changedById?: StringNullableFilter<"AppointmentStatusLog"> | string | null
    changedByRole?: StringNullableFilter<"AppointmentStatusLog"> | string | null
    note?: StringNullableFilter<"AppointmentStatusLog"> | string | null
    createdAt?: DateTimeFilter<"AppointmentStatusLog"> | Date | string
  }

  export type AppointmentPaymentUpsertWithoutAppointmentInput = {
    update: XOR<AppointmentPaymentUpdateWithoutAppointmentInput, AppointmentPaymentUncheckedUpdateWithoutAppointmentInput>
    create: XOR<AppointmentPaymentCreateWithoutAppointmentInput, AppointmentPaymentUncheckedCreateWithoutAppointmentInput>
    where?: AppointmentPaymentWhereInput
  }

  export type AppointmentPaymentUpdateToOneWithWhereWithoutAppointmentInput = {
    where?: AppointmentPaymentWhereInput
    data: XOR<AppointmentPaymentUpdateWithoutAppointmentInput, AppointmentPaymentUncheckedUpdateWithoutAppointmentInput>
  }

  export type AppointmentPaymentUpdateWithoutAppointmentInput = {
    id?: StringFieldUpdateOperationsInput | string
    amount?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    currency?: StringFieldUpdateOperationsInput | string
    status?: EnumPaymentStatusFieldUpdateOperationsInput | $Enums.PaymentStatus
    gateway?: EnumPaymentGatewayFieldUpdateOperationsInput | $Enums.PaymentGateway
    transactionId?: StringFieldUpdateOperationsInput | string
    validationId?: NullableStringFieldUpdateOperationsInput | string | null
    bankTransactionId?: NullableStringFieldUpdateOperationsInput | string | null
    paymentMethod?: NullableStringFieldUpdateOperationsInput | string | null
    cardType?: NullableStringFieldUpdateOperationsInput | string | null
    gatewayResponse?: NullableJsonNullValueInput | InputJsonValue
    paidAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AppointmentPaymentUncheckedUpdateWithoutAppointmentInput = {
    id?: StringFieldUpdateOperationsInput | string
    amount?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    currency?: StringFieldUpdateOperationsInput | string
    status?: EnumPaymentStatusFieldUpdateOperationsInput | $Enums.PaymentStatus
    gateway?: EnumPaymentGatewayFieldUpdateOperationsInput | $Enums.PaymentGateway
    transactionId?: StringFieldUpdateOperationsInput | string
    validationId?: NullableStringFieldUpdateOperationsInput | string | null
    bankTransactionId?: NullableStringFieldUpdateOperationsInput | string | null
    paymentMethod?: NullableStringFieldUpdateOperationsInput | string | null
    cardType?: NullableStringFieldUpdateOperationsInput | string | null
    gatewayResponse?: NullableJsonNullValueInput | InputJsonValue
    paidAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AppointmentCreateWithoutSlotLockInput = {
    id?: string
    appointmentCode: string
    doctorId: string
    patientId: string
    outletId?: string | null
    appointmentDate: Date | string
    startTime: Date | string
    endTime: Date | string
    type?: $Enums.AppointmentType
    status?: $Enums.AppointmentStatus
    consultationFee?: Decimal | DecimalJsLike | number | string | null
    paymentStatus?: $Enums.PaymentStatus
    reason?: string | null
    patientNotes?: string | null
    doctorNotes?: string | null
    cancelledBy?: $Enums.CancelledBy | null
    cancellationReason?: string | null
    cancelledAt?: Date | string | null
    confirmedAt?: Date | string | null
    completedAt?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    statusLogs?: AppointmentStatusLogCreateNestedManyWithoutAppointmentInput
    payment?: AppointmentPaymentCreateNestedOneWithoutAppointmentInput
  }

  export type AppointmentUncheckedCreateWithoutSlotLockInput = {
    id?: string
    appointmentCode: string
    doctorId: string
    patientId: string
    outletId?: string | null
    appointmentDate: Date | string
    startTime: Date | string
    endTime: Date | string
    type?: $Enums.AppointmentType
    status?: $Enums.AppointmentStatus
    consultationFee?: Decimal | DecimalJsLike | number | string | null
    paymentStatus?: $Enums.PaymentStatus
    reason?: string | null
    patientNotes?: string | null
    doctorNotes?: string | null
    cancelledBy?: $Enums.CancelledBy | null
    cancellationReason?: string | null
    cancelledAt?: Date | string | null
    confirmedAt?: Date | string | null
    completedAt?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    statusLogs?: AppointmentStatusLogUncheckedCreateNestedManyWithoutAppointmentInput
    payment?: AppointmentPaymentUncheckedCreateNestedOneWithoutAppointmentInput
  }

  export type AppointmentCreateOrConnectWithoutSlotLockInput = {
    where: AppointmentWhereUniqueInput
    create: XOR<AppointmentCreateWithoutSlotLockInput, AppointmentUncheckedCreateWithoutSlotLockInput>
  }

  export type AppointmentUpsertWithoutSlotLockInput = {
    update: XOR<AppointmentUpdateWithoutSlotLockInput, AppointmentUncheckedUpdateWithoutSlotLockInput>
    create: XOR<AppointmentCreateWithoutSlotLockInput, AppointmentUncheckedCreateWithoutSlotLockInput>
    where?: AppointmentWhereInput
  }

  export type AppointmentUpdateToOneWithWhereWithoutSlotLockInput = {
    where?: AppointmentWhereInput
    data: XOR<AppointmentUpdateWithoutSlotLockInput, AppointmentUncheckedUpdateWithoutSlotLockInput>
  }

  export type AppointmentUpdateWithoutSlotLockInput = {
    id?: StringFieldUpdateOperationsInput | string
    appointmentCode?: StringFieldUpdateOperationsInput | string
    doctorId?: StringFieldUpdateOperationsInput | string
    patientId?: StringFieldUpdateOperationsInput | string
    outletId?: NullableStringFieldUpdateOperationsInput | string | null
    appointmentDate?: DateTimeFieldUpdateOperationsInput | Date | string
    startTime?: DateTimeFieldUpdateOperationsInput | Date | string
    endTime?: DateTimeFieldUpdateOperationsInput | Date | string
    type?: EnumAppointmentTypeFieldUpdateOperationsInput | $Enums.AppointmentType
    status?: EnumAppointmentStatusFieldUpdateOperationsInput | $Enums.AppointmentStatus
    consultationFee?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    paymentStatus?: EnumPaymentStatusFieldUpdateOperationsInput | $Enums.PaymentStatus
    reason?: NullableStringFieldUpdateOperationsInput | string | null
    patientNotes?: NullableStringFieldUpdateOperationsInput | string | null
    doctorNotes?: NullableStringFieldUpdateOperationsInput | string | null
    cancelledBy?: NullableEnumCancelledByFieldUpdateOperationsInput | $Enums.CancelledBy | null
    cancellationReason?: NullableStringFieldUpdateOperationsInput | string | null
    cancelledAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    confirmedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    completedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    statusLogs?: AppointmentStatusLogUpdateManyWithoutAppointmentNestedInput
    payment?: AppointmentPaymentUpdateOneWithoutAppointmentNestedInput
  }

  export type AppointmentUncheckedUpdateWithoutSlotLockInput = {
    id?: StringFieldUpdateOperationsInput | string
    appointmentCode?: StringFieldUpdateOperationsInput | string
    doctorId?: StringFieldUpdateOperationsInput | string
    patientId?: StringFieldUpdateOperationsInput | string
    outletId?: NullableStringFieldUpdateOperationsInput | string | null
    appointmentDate?: DateTimeFieldUpdateOperationsInput | Date | string
    startTime?: DateTimeFieldUpdateOperationsInput | Date | string
    endTime?: DateTimeFieldUpdateOperationsInput | Date | string
    type?: EnumAppointmentTypeFieldUpdateOperationsInput | $Enums.AppointmentType
    status?: EnumAppointmentStatusFieldUpdateOperationsInput | $Enums.AppointmentStatus
    consultationFee?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    paymentStatus?: EnumPaymentStatusFieldUpdateOperationsInput | $Enums.PaymentStatus
    reason?: NullableStringFieldUpdateOperationsInput | string | null
    patientNotes?: NullableStringFieldUpdateOperationsInput | string | null
    doctorNotes?: NullableStringFieldUpdateOperationsInput | string | null
    cancelledBy?: NullableEnumCancelledByFieldUpdateOperationsInput | $Enums.CancelledBy | null
    cancellationReason?: NullableStringFieldUpdateOperationsInput | string | null
    cancelledAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    confirmedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    completedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    statusLogs?: AppointmentStatusLogUncheckedUpdateManyWithoutAppointmentNestedInput
    payment?: AppointmentPaymentUncheckedUpdateOneWithoutAppointmentNestedInput
  }

  export type AppointmentCreateWithoutStatusLogsInput = {
    id?: string
    appointmentCode: string
    doctorId: string
    patientId: string
    outletId?: string | null
    appointmentDate: Date | string
    startTime: Date | string
    endTime: Date | string
    type?: $Enums.AppointmentType
    status?: $Enums.AppointmentStatus
    consultationFee?: Decimal | DecimalJsLike | number | string | null
    paymentStatus?: $Enums.PaymentStatus
    reason?: string | null
    patientNotes?: string | null
    doctorNotes?: string | null
    cancelledBy?: $Enums.CancelledBy | null
    cancellationReason?: string | null
    cancelledAt?: Date | string | null
    confirmedAt?: Date | string | null
    completedAt?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    slotLock?: AppointmentSlotLockCreateNestedOneWithoutAppointmentInput
    payment?: AppointmentPaymentCreateNestedOneWithoutAppointmentInput
  }

  export type AppointmentUncheckedCreateWithoutStatusLogsInput = {
    id?: string
    appointmentCode: string
    doctorId: string
    patientId: string
    outletId?: string | null
    appointmentDate: Date | string
    startTime: Date | string
    endTime: Date | string
    type?: $Enums.AppointmentType
    status?: $Enums.AppointmentStatus
    consultationFee?: Decimal | DecimalJsLike | number | string | null
    paymentStatus?: $Enums.PaymentStatus
    reason?: string | null
    patientNotes?: string | null
    doctorNotes?: string | null
    cancelledBy?: $Enums.CancelledBy | null
    cancellationReason?: string | null
    cancelledAt?: Date | string | null
    confirmedAt?: Date | string | null
    completedAt?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    slotLock?: AppointmentSlotLockUncheckedCreateNestedOneWithoutAppointmentInput
    payment?: AppointmentPaymentUncheckedCreateNestedOneWithoutAppointmentInput
  }

  export type AppointmentCreateOrConnectWithoutStatusLogsInput = {
    where: AppointmentWhereUniqueInput
    create: XOR<AppointmentCreateWithoutStatusLogsInput, AppointmentUncheckedCreateWithoutStatusLogsInput>
  }

  export type AppointmentUpsertWithoutStatusLogsInput = {
    update: XOR<AppointmentUpdateWithoutStatusLogsInput, AppointmentUncheckedUpdateWithoutStatusLogsInput>
    create: XOR<AppointmentCreateWithoutStatusLogsInput, AppointmentUncheckedCreateWithoutStatusLogsInput>
    where?: AppointmentWhereInput
  }

  export type AppointmentUpdateToOneWithWhereWithoutStatusLogsInput = {
    where?: AppointmentWhereInput
    data: XOR<AppointmentUpdateWithoutStatusLogsInput, AppointmentUncheckedUpdateWithoutStatusLogsInput>
  }

  export type AppointmentUpdateWithoutStatusLogsInput = {
    id?: StringFieldUpdateOperationsInput | string
    appointmentCode?: StringFieldUpdateOperationsInput | string
    doctorId?: StringFieldUpdateOperationsInput | string
    patientId?: StringFieldUpdateOperationsInput | string
    outletId?: NullableStringFieldUpdateOperationsInput | string | null
    appointmentDate?: DateTimeFieldUpdateOperationsInput | Date | string
    startTime?: DateTimeFieldUpdateOperationsInput | Date | string
    endTime?: DateTimeFieldUpdateOperationsInput | Date | string
    type?: EnumAppointmentTypeFieldUpdateOperationsInput | $Enums.AppointmentType
    status?: EnumAppointmentStatusFieldUpdateOperationsInput | $Enums.AppointmentStatus
    consultationFee?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    paymentStatus?: EnumPaymentStatusFieldUpdateOperationsInput | $Enums.PaymentStatus
    reason?: NullableStringFieldUpdateOperationsInput | string | null
    patientNotes?: NullableStringFieldUpdateOperationsInput | string | null
    doctorNotes?: NullableStringFieldUpdateOperationsInput | string | null
    cancelledBy?: NullableEnumCancelledByFieldUpdateOperationsInput | $Enums.CancelledBy | null
    cancellationReason?: NullableStringFieldUpdateOperationsInput | string | null
    cancelledAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    confirmedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    completedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    slotLock?: AppointmentSlotLockUpdateOneWithoutAppointmentNestedInput
    payment?: AppointmentPaymentUpdateOneWithoutAppointmentNestedInput
  }

  export type AppointmentUncheckedUpdateWithoutStatusLogsInput = {
    id?: StringFieldUpdateOperationsInput | string
    appointmentCode?: StringFieldUpdateOperationsInput | string
    doctorId?: StringFieldUpdateOperationsInput | string
    patientId?: StringFieldUpdateOperationsInput | string
    outletId?: NullableStringFieldUpdateOperationsInput | string | null
    appointmentDate?: DateTimeFieldUpdateOperationsInput | Date | string
    startTime?: DateTimeFieldUpdateOperationsInput | Date | string
    endTime?: DateTimeFieldUpdateOperationsInput | Date | string
    type?: EnumAppointmentTypeFieldUpdateOperationsInput | $Enums.AppointmentType
    status?: EnumAppointmentStatusFieldUpdateOperationsInput | $Enums.AppointmentStatus
    consultationFee?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    paymentStatus?: EnumPaymentStatusFieldUpdateOperationsInput | $Enums.PaymentStatus
    reason?: NullableStringFieldUpdateOperationsInput | string | null
    patientNotes?: NullableStringFieldUpdateOperationsInput | string | null
    doctorNotes?: NullableStringFieldUpdateOperationsInput | string | null
    cancelledBy?: NullableEnumCancelledByFieldUpdateOperationsInput | $Enums.CancelledBy | null
    cancellationReason?: NullableStringFieldUpdateOperationsInput | string | null
    cancelledAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    confirmedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    completedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    slotLock?: AppointmentSlotLockUncheckedUpdateOneWithoutAppointmentNestedInput
    payment?: AppointmentPaymentUncheckedUpdateOneWithoutAppointmentNestedInput
  }

  export type AppointmentCreateWithoutPaymentInput = {
    id?: string
    appointmentCode: string
    doctorId: string
    patientId: string
    outletId?: string | null
    appointmentDate: Date | string
    startTime: Date | string
    endTime: Date | string
    type?: $Enums.AppointmentType
    status?: $Enums.AppointmentStatus
    consultationFee?: Decimal | DecimalJsLike | number | string | null
    paymentStatus?: $Enums.PaymentStatus
    reason?: string | null
    patientNotes?: string | null
    doctorNotes?: string | null
    cancelledBy?: $Enums.CancelledBy | null
    cancellationReason?: string | null
    cancelledAt?: Date | string | null
    confirmedAt?: Date | string | null
    completedAt?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    slotLock?: AppointmentSlotLockCreateNestedOneWithoutAppointmentInput
    statusLogs?: AppointmentStatusLogCreateNestedManyWithoutAppointmentInput
  }

  export type AppointmentUncheckedCreateWithoutPaymentInput = {
    id?: string
    appointmentCode: string
    doctorId: string
    patientId: string
    outletId?: string | null
    appointmentDate: Date | string
    startTime: Date | string
    endTime: Date | string
    type?: $Enums.AppointmentType
    status?: $Enums.AppointmentStatus
    consultationFee?: Decimal | DecimalJsLike | number | string | null
    paymentStatus?: $Enums.PaymentStatus
    reason?: string | null
    patientNotes?: string | null
    doctorNotes?: string | null
    cancelledBy?: $Enums.CancelledBy | null
    cancellationReason?: string | null
    cancelledAt?: Date | string | null
    confirmedAt?: Date | string | null
    completedAt?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    slotLock?: AppointmentSlotLockUncheckedCreateNestedOneWithoutAppointmentInput
    statusLogs?: AppointmentStatusLogUncheckedCreateNestedManyWithoutAppointmentInput
  }

  export type AppointmentCreateOrConnectWithoutPaymentInput = {
    where: AppointmentWhereUniqueInput
    create: XOR<AppointmentCreateWithoutPaymentInput, AppointmentUncheckedCreateWithoutPaymentInput>
  }

  export type AppointmentUpsertWithoutPaymentInput = {
    update: XOR<AppointmentUpdateWithoutPaymentInput, AppointmentUncheckedUpdateWithoutPaymentInput>
    create: XOR<AppointmentCreateWithoutPaymentInput, AppointmentUncheckedCreateWithoutPaymentInput>
    where?: AppointmentWhereInput
  }

  export type AppointmentUpdateToOneWithWhereWithoutPaymentInput = {
    where?: AppointmentWhereInput
    data: XOR<AppointmentUpdateWithoutPaymentInput, AppointmentUncheckedUpdateWithoutPaymentInput>
  }

  export type AppointmentUpdateWithoutPaymentInput = {
    id?: StringFieldUpdateOperationsInput | string
    appointmentCode?: StringFieldUpdateOperationsInput | string
    doctorId?: StringFieldUpdateOperationsInput | string
    patientId?: StringFieldUpdateOperationsInput | string
    outletId?: NullableStringFieldUpdateOperationsInput | string | null
    appointmentDate?: DateTimeFieldUpdateOperationsInput | Date | string
    startTime?: DateTimeFieldUpdateOperationsInput | Date | string
    endTime?: DateTimeFieldUpdateOperationsInput | Date | string
    type?: EnumAppointmentTypeFieldUpdateOperationsInput | $Enums.AppointmentType
    status?: EnumAppointmentStatusFieldUpdateOperationsInput | $Enums.AppointmentStatus
    consultationFee?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    paymentStatus?: EnumPaymentStatusFieldUpdateOperationsInput | $Enums.PaymentStatus
    reason?: NullableStringFieldUpdateOperationsInput | string | null
    patientNotes?: NullableStringFieldUpdateOperationsInput | string | null
    doctorNotes?: NullableStringFieldUpdateOperationsInput | string | null
    cancelledBy?: NullableEnumCancelledByFieldUpdateOperationsInput | $Enums.CancelledBy | null
    cancellationReason?: NullableStringFieldUpdateOperationsInput | string | null
    cancelledAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    confirmedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    completedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    slotLock?: AppointmentSlotLockUpdateOneWithoutAppointmentNestedInput
    statusLogs?: AppointmentStatusLogUpdateManyWithoutAppointmentNestedInput
  }

  export type AppointmentUncheckedUpdateWithoutPaymentInput = {
    id?: StringFieldUpdateOperationsInput | string
    appointmentCode?: StringFieldUpdateOperationsInput | string
    doctorId?: StringFieldUpdateOperationsInput | string
    patientId?: StringFieldUpdateOperationsInput | string
    outletId?: NullableStringFieldUpdateOperationsInput | string | null
    appointmentDate?: DateTimeFieldUpdateOperationsInput | Date | string
    startTime?: DateTimeFieldUpdateOperationsInput | Date | string
    endTime?: DateTimeFieldUpdateOperationsInput | Date | string
    type?: EnumAppointmentTypeFieldUpdateOperationsInput | $Enums.AppointmentType
    status?: EnumAppointmentStatusFieldUpdateOperationsInput | $Enums.AppointmentStatus
    consultationFee?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    paymentStatus?: EnumPaymentStatusFieldUpdateOperationsInput | $Enums.PaymentStatus
    reason?: NullableStringFieldUpdateOperationsInput | string | null
    patientNotes?: NullableStringFieldUpdateOperationsInput | string | null
    doctorNotes?: NullableStringFieldUpdateOperationsInput | string | null
    cancelledBy?: NullableEnumCancelledByFieldUpdateOperationsInput | $Enums.CancelledBy | null
    cancellationReason?: NullableStringFieldUpdateOperationsInput | string | null
    cancelledAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    confirmedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    completedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    slotLock?: AppointmentSlotLockUncheckedUpdateOneWithoutAppointmentNestedInput
    statusLogs?: AppointmentStatusLogUncheckedUpdateManyWithoutAppointmentNestedInput
  }

  export type PackageOrderItemCreateWithoutOrderInput = {
    id?: string
    testId: string
    testName: string
    testCode?: string | null
    price: Decimal | DecimalJsLike | number | string
    createdAt?: Date | string
  }

  export type PackageOrderItemUncheckedCreateWithoutOrderInput = {
    id?: string
    testId: string
    testName: string
    testCode?: string | null
    price: Decimal | DecimalJsLike | number | string
    createdAt?: Date | string
  }

  export type PackageOrderItemCreateOrConnectWithoutOrderInput = {
    where: PackageOrderItemWhereUniqueInput
    create: XOR<PackageOrderItemCreateWithoutOrderInput, PackageOrderItemUncheckedCreateWithoutOrderInput>
  }

  export type PackageOrderItemCreateManyOrderInputEnvelope = {
    data: PackageOrderItemCreateManyOrderInput | PackageOrderItemCreateManyOrderInput[]
    skipDuplicates?: boolean
  }

  export type PackagePaymentCreateWithoutOrderInput = {
    id?: string
    amount: Decimal | DecimalJsLike | number | string
    currency?: string
    status?: $Enums.PackagePaymentStatus
    method?: $Enums.PackagePaymentMethod
    transactionId: string
    validationId?: string | null
    bankTransactionId?: string | null
    paymentMethodName?: string | null
    cardType?: string | null
    gatewayResponse?: NullableJsonNullValueInput | InputJsonValue
    paidAt?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type PackagePaymentUncheckedCreateWithoutOrderInput = {
    id?: string
    amount: Decimal | DecimalJsLike | number | string
    currency?: string
    status?: $Enums.PackagePaymentStatus
    method?: $Enums.PackagePaymentMethod
    transactionId: string
    validationId?: string | null
    bankTransactionId?: string | null
    paymentMethodName?: string | null
    cardType?: string | null
    gatewayResponse?: NullableJsonNullValueInput | InputJsonValue
    paidAt?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type PackagePaymentCreateOrConnectWithoutOrderInput = {
    where: PackagePaymentWhereUniqueInput
    create: XOR<PackagePaymentCreateWithoutOrderInput, PackagePaymentUncheckedCreateWithoutOrderInput>
  }

  export type PackageOrderItemUpsertWithWhereUniqueWithoutOrderInput = {
    where: PackageOrderItemWhereUniqueInput
    update: XOR<PackageOrderItemUpdateWithoutOrderInput, PackageOrderItemUncheckedUpdateWithoutOrderInput>
    create: XOR<PackageOrderItemCreateWithoutOrderInput, PackageOrderItemUncheckedCreateWithoutOrderInput>
  }

  export type PackageOrderItemUpdateWithWhereUniqueWithoutOrderInput = {
    where: PackageOrderItemWhereUniqueInput
    data: XOR<PackageOrderItemUpdateWithoutOrderInput, PackageOrderItemUncheckedUpdateWithoutOrderInput>
  }

  export type PackageOrderItemUpdateManyWithWhereWithoutOrderInput = {
    where: PackageOrderItemScalarWhereInput
    data: XOR<PackageOrderItemUpdateManyMutationInput, PackageOrderItemUncheckedUpdateManyWithoutOrderInput>
  }

  export type PackageOrderItemScalarWhereInput = {
    AND?: PackageOrderItemScalarWhereInput | PackageOrderItemScalarWhereInput[]
    OR?: PackageOrderItemScalarWhereInput[]
    NOT?: PackageOrderItemScalarWhereInput | PackageOrderItemScalarWhereInput[]
    id?: StringFilter<"PackageOrderItem"> | string
    orderId?: StringFilter<"PackageOrderItem"> | string
    testId?: StringFilter<"PackageOrderItem"> | string
    testName?: StringFilter<"PackageOrderItem"> | string
    testCode?: StringNullableFilter<"PackageOrderItem"> | string | null
    price?: DecimalFilter<"PackageOrderItem"> | Decimal | DecimalJsLike | number | string
    createdAt?: DateTimeFilter<"PackageOrderItem"> | Date | string
  }

  export type PackagePaymentUpsertWithoutOrderInput = {
    update: XOR<PackagePaymentUpdateWithoutOrderInput, PackagePaymentUncheckedUpdateWithoutOrderInput>
    create: XOR<PackagePaymentCreateWithoutOrderInput, PackagePaymentUncheckedCreateWithoutOrderInput>
    where?: PackagePaymentWhereInput
  }

  export type PackagePaymentUpdateToOneWithWhereWithoutOrderInput = {
    where?: PackagePaymentWhereInput
    data: XOR<PackagePaymentUpdateWithoutOrderInput, PackagePaymentUncheckedUpdateWithoutOrderInput>
  }

  export type PackagePaymentUpdateWithoutOrderInput = {
    id?: StringFieldUpdateOperationsInput | string
    amount?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    currency?: StringFieldUpdateOperationsInput | string
    status?: EnumPackagePaymentStatusFieldUpdateOperationsInput | $Enums.PackagePaymentStatus
    method?: EnumPackagePaymentMethodFieldUpdateOperationsInput | $Enums.PackagePaymentMethod
    transactionId?: StringFieldUpdateOperationsInput | string
    validationId?: NullableStringFieldUpdateOperationsInput | string | null
    bankTransactionId?: NullableStringFieldUpdateOperationsInput | string | null
    paymentMethodName?: NullableStringFieldUpdateOperationsInput | string | null
    cardType?: NullableStringFieldUpdateOperationsInput | string | null
    gatewayResponse?: NullableJsonNullValueInput | InputJsonValue
    paidAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PackagePaymentUncheckedUpdateWithoutOrderInput = {
    id?: StringFieldUpdateOperationsInput | string
    amount?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    currency?: StringFieldUpdateOperationsInput | string
    status?: EnumPackagePaymentStatusFieldUpdateOperationsInput | $Enums.PackagePaymentStatus
    method?: EnumPackagePaymentMethodFieldUpdateOperationsInput | $Enums.PackagePaymentMethod
    transactionId?: StringFieldUpdateOperationsInput | string
    validationId?: NullableStringFieldUpdateOperationsInput | string | null
    bankTransactionId?: NullableStringFieldUpdateOperationsInput | string | null
    paymentMethodName?: NullableStringFieldUpdateOperationsInput | string | null
    cardType?: NullableStringFieldUpdateOperationsInput | string | null
    gatewayResponse?: NullableJsonNullValueInput | InputJsonValue
    paidAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PackageOrderCreateWithoutItemsInput = {
    id?: string
    orderCode: string
    patientId: string
    outletId?: string | null
    packageId: string
    packageName: string
    subtitle?: string | null
    totalPrice: Decimal | DecimalJsLike | number | string
    discountedPrice: Decimal | DecimalJsLike | number | string
    status?: $Enums.PackageOrderStatus
    paymentStatus?: $Enums.PackagePaymentStatus
    paymentMethod?: $Enums.PackagePaymentMethod | null
    notes?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    payment?: PackagePaymentCreateNestedOneWithoutOrderInput
  }

  export type PackageOrderUncheckedCreateWithoutItemsInput = {
    id?: string
    orderCode: string
    patientId: string
    outletId?: string | null
    packageId: string
    packageName: string
    subtitle?: string | null
    totalPrice: Decimal | DecimalJsLike | number | string
    discountedPrice: Decimal | DecimalJsLike | number | string
    status?: $Enums.PackageOrderStatus
    paymentStatus?: $Enums.PackagePaymentStatus
    paymentMethod?: $Enums.PackagePaymentMethod | null
    notes?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    payment?: PackagePaymentUncheckedCreateNestedOneWithoutOrderInput
  }

  export type PackageOrderCreateOrConnectWithoutItemsInput = {
    where: PackageOrderWhereUniqueInput
    create: XOR<PackageOrderCreateWithoutItemsInput, PackageOrderUncheckedCreateWithoutItemsInput>
  }

  export type PackageOrderUpsertWithoutItemsInput = {
    update: XOR<PackageOrderUpdateWithoutItemsInput, PackageOrderUncheckedUpdateWithoutItemsInput>
    create: XOR<PackageOrderCreateWithoutItemsInput, PackageOrderUncheckedCreateWithoutItemsInput>
    where?: PackageOrderWhereInput
  }

  export type PackageOrderUpdateToOneWithWhereWithoutItemsInput = {
    where?: PackageOrderWhereInput
    data: XOR<PackageOrderUpdateWithoutItemsInput, PackageOrderUncheckedUpdateWithoutItemsInput>
  }

  export type PackageOrderUpdateWithoutItemsInput = {
    id?: StringFieldUpdateOperationsInput | string
    orderCode?: StringFieldUpdateOperationsInput | string
    patientId?: StringFieldUpdateOperationsInput | string
    outletId?: NullableStringFieldUpdateOperationsInput | string | null
    packageId?: StringFieldUpdateOperationsInput | string
    packageName?: StringFieldUpdateOperationsInput | string
    subtitle?: NullableStringFieldUpdateOperationsInput | string | null
    totalPrice?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    discountedPrice?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    status?: EnumPackageOrderStatusFieldUpdateOperationsInput | $Enums.PackageOrderStatus
    paymentStatus?: EnumPackagePaymentStatusFieldUpdateOperationsInput | $Enums.PackagePaymentStatus
    paymentMethod?: NullableEnumPackagePaymentMethodFieldUpdateOperationsInput | $Enums.PackagePaymentMethod | null
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    payment?: PackagePaymentUpdateOneWithoutOrderNestedInput
  }

  export type PackageOrderUncheckedUpdateWithoutItemsInput = {
    id?: StringFieldUpdateOperationsInput | string
    orderCode?: StringFieldUpdateOperationsInput | string
    patientId?: StringFieldUpdateOperationsInput | string
    outletId?: NullableStringFieldUpdateOperationsInput | string | null
    packageId?: StringFieldUpdateOperationsInput | string
    packageName?: StringFieldUpdateOperationsInput | string
    subtitle?: NullableStringFieldUpdateOperationsInput | string | null
    totalPrice?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    discountedPrice?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    status?: EnumPackageOrderStatusFieldUpdateOperationsInput | $Enums.PackageOrderStatus
    paymentStatus?: EnumPackagePaymentStatusFieldUpdateOperationsInput | $Enums.PackagePaymentStatus
    paymentMethod?: NullableEnumPackagePaymentMethodFieldUpdateOperationsInput | $Enums.PackagePaymentMethod | null
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    payment?: PackagePaymentUncheckedUpdateOneWithoutOrderNestedInput
  }

  export type PackageOrderCreateWithoutPaymentInput = {
    id?: string
    orderCode: string
    patientId: string
    outletId?: string | null
    packageId: string
    packageName: string
    subtitle?: string | null
    totalPrice: Decimal | DecimalJsLike | number | string
    discountedPrice: Decimal | DecimalJsLike | number | string
    status?: $Enums.PackageOrderStatus
    paymentStatus?: $Enums.PackagePaymentStatus
    paymentMethod?: $Enums.PackagePaymentMethod | null
    notes?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    items?: PackageOrderItemCreateNestedManyWithoutOrderInput
  }

  export type PackageOrderUncheckedCreateWithoutPaymentInput = {
    id?: string
    orderCode: string
    patientId: string
    outletId?: string | null
    packageId: string
    packageName: string
    subtitle?: string | null
    totalPrice: Decimal | DecimalJsLike | number | string
    discountedPrice: Decimal | DecimalJsLike | number | string
    status?: $Enums.PackageOrderStatus
    paymentStatus?: $Enums.PackagePaymentStatus
    paymentMethod?: $Enums.PackagePaymentMethod | null
    notes?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    items?: PackageOrderItemUncheckedCreateNestedManyWithoutOrderInput
  }

  export type PackageOrderCreateOrConnectWithoutPaymentInput = {
    where: PackageOrderWhereUniqueInput
    create: XOR<PackageOrderCreateWithoutPaymentInput, PackageOrderUncheckedCreateWithoutPaymentInput>
  }

  export type PackageOrderUpsertWithoutPaymentInput = {
    update: XOR<PackageOrderUpdateWithoutPaymentInput, PackageOrderUncheckedUpdateWithoutPaymentInput>
    create: XOR<PackageOrderCreateWithoutPaymentInput, PackageOrderUncheckedCreateWithoutPaymentInput>
    where?: PackageOrderWhereInput
  }

  export type PackageOrderUpdateToOneWithWhereWithoutPaymentInput = {
    where?: PackageOrderWhereInput
    data: XOR<PackageOrderUpdateWithoutPaymentInput, PackageOrderUncheckedUpdateWithoutPaymentInput>
  }

  export type PackageOrderUpdateWithoutPaymentInput = {
    id?: StringFieldUpdateOperationsInput | string
    orderCode?: StringFieldUpdateOperationsInput | string
    patientId?: StringFieldUpdateOperationsInput | string
    outletId?: NullableStringFieldUpdateOperationsInput | string | null
    packageId?: StringFieldUpdateOperationsInput | string
    packageName?: StringFieldUpdateOperationsInput | string
    subtitle?: NullableStringFieldUpdateOperationsInput | string | null
    totalPrice?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    discountedPrice?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    status?: EnumPackageOrderStatusFieldUpdateOperationsInput | $Enums.PackageOrderStatus
    paymentStatus?: EnumPackagePaymentStatusFieldUpdateOperationsInput | $Enums.PackagePaymentStatus
    paymentMethod?: NullableEnumPackagePaymentMethodFieldUpdateOperationsInput | $Enums.PackagePaymentMethod | null
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    items?: PackageOrderItemUpdateManyWithoutOrderNestedInput
  }

  export type PackageOrderUncheckedUpdateWithoutPaymentInput = {
    id?: StringFieldUpdateOperationsInput | string
    orderCode?: StringFieldUpdateOperationsInput | string
    patientId?: StringFieldUpdateOperationsInput | string
    outletId?: NullableStringFieldUpdateOperationsInput | string | null
    packageId?: StringFieldUpdateOperationsInput | string
    packageName?: StringFieldUpdateOperationsInput | string
    subtitle?: NullableStringFieldUpdateOperationsInput | string | null
    totalPrice?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    discountedPrice?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    status?: EnumPackageOrderStatusFieldUpdateOperationsInput | $Enums.PackageOrderStatus
    paymentStatus?: EnumPackagePaymentStatusFieldUpdateOperationsInput | $Enums.PackagePaymentStatus
    paymentMethod?: NullableEnumPackagePaymentMethodFieldUpdateOperationsInput | $Enums.PackagePaymentMethod | null
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    items?: PackageOrderItemUncheckedUpdateManyWithoutOrderNestedInput
  }

  export type AppointmentStatusLogCreateManyAppointmentInput = {
    id?: string
    previousStatus?: $Enums.AppointmentStatus | null
    newStatus: $Enums.AppointmentStatus
    changedById?: string | null
    changedByRole?: string | null
    note?: string | null
    createdAt?: Date | string
  }

  export type AppointmentStatusLogUpdateWithoutAppointmentInput = {
    id?: StringFieldUpdateOperationsInput | string
    previousStatus?: NullableEnumAppointmentStatusFieldUpdateOperationsInput | $Enums.AppointmentStatus | null
    newStatus?: EnumAppointmentStatusFieldUpdateOperationsInput | $Enums.AppointmentStatus
    changedById?: NullableStringFieldUpdateOperationsInput | string | null
    changedByRole?: NullableStringFieldUpdateOperationsInput | string | null
    note?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AppointmentStatusLogUncheckedUpdateWithoutAppointmentInput = {
    id?: StringFieldUpdateOperationsInput | string
    previousStatus?: NullableEnumAppointmentStatusFieldUpdateOperationsInput | $Enums.AppointmentStatus | null
    newStatus?: EnumAppointmentStatusFieldUpdateOperationsInput | $Enums.AppointmentStatus
    changedById?: NullableStringFieldUpdateOperationsInput | string | null
    changedByRole?: NullableStringFieldUpdateOperationsInput | string | null
    note?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AppointmentStatusLogUncheckedUpdateManyWithoutAppointmentInput = {
    id?: StringFieldUpdateOperationsInput | string
    previousStatus?: NullableEnumAppointmentStatusFieldUpdateOperationsInput | $Enums.AppointmentStatus | null
    newStatus?: EnumAppointmentStatusFieldUpdateOperationsInput | $Enums.AppointmentStatus
    changedById?: NullableStringFieldUpdateOperationsInput | string | null
    changedByRole?: NullableStringFieldUpdateOperationsInput | string | null
    note?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PackageOrderItemCreateManyOrderInput = {
    id?: string
    testId: string
    testName: string
    testCode?: string | null
    price: Decimal | DecimalJsLike | number | string
    createdAt?: Date | string
  }

  export type PackageOrderItemUpdateWithoutOrderInput = {
    id?: StringFieldUpdateOperationsInput | string
    testId?: StringFieldUpdateOperationsInput | string
    testName?: StringFieldUpdateOperationsInput | string
    testCode?: NullableStringFieldUpdateOperationsInput | string | null
    price?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PackageOrderItemUncheckedUpdateWithoutOrderInput = {
    id?: StringFieldUpdateOperationsInput | string
    testId?: StringFieldUpdateOperationsInput | string
    testName?: StringFieldUpdateOperationsInput | string
    testCode?: NullableStringFieldUpdateOperationsInput | string | null
    price?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PackageOrderItemUncheckedUpdateManyWithoutOrderInput = {
    id?: StringFieldUpdateOperationsInput | string
    testId?: StringFieldUpdateOperationsInput | string
    testName?: StringFieldUpdateOperationsInput | string
    testCode?: NullableStringFieldUpdateOperationsInput | string | null
    price?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
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