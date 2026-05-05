
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
 * Model SuperAdmins
 * 
 */
export type SuperAdmins = $Result.DefaultSelection<Prisma.$SuperAdminsPayload>
/**
 * Model Patient
 * 
 */
export type Patient = $Result.DefaultSelection<Prisma.$PatientPayload>
/**
 * Model Doctor
 * 
 */
export type Doctor = $Result.DefaultSelection<Prisma.$DoctorPayload>
/**
 * Model DiagnosticAccount
 * 
 */
export type DiagnosticAccount = $Result.DefaultSelection<Prisma.$DiagnosticAccountPayload>
/**
 * Model DiagnosticChildUser
 * 
 */
export type DiagnosticChildUser = $Result.DefaultSelection<Prisma.$DiagnosticChildUserPayload>
/**
 * Model Role
 * 
 */
export type Role = $Result.DefaultSelection<Prisma.$RolePayload>
/**
 * Model Permission
 * 
 */
export type Permission = $Result.DefaultSelection<Prisma.$PermissionPayload>
/**
 * Model RolePermission
 * 
 */
export type RolePermission = $Result.DefaultSelection<Prisma.$RolePermissionPayload>
/**
 * Model DiagnosticUserRole
 * 
 */
export type DiagnosticUserRole = $Result.DefaultSelection<Prisma.$DiagnosticUserRolePayload>
/**
 * Model SuperAdminUserRole
 * 
 */
export type SuperAdminUserRole = $Result.DefaultSelection<Prisma.$SuperAdminUserRolePayload>

/**
 * Enums
 */
export namespace $Enums {
  export const RoleOwnerType: {
  DIAGNOSTIC: 'DIAGNOSTIC',
  SUPER_ADMIN: 'SUPER_ADMIN'
};

export type RoleOwnerType = (typeof RoleOwnerType)[keyof typeof RoleOwnerType]

}

export type RoleOwnerType = $Enums.RoleOwnerType

export const RoleOwnerType: typeof $Enums.RoleOwnerType

/**
 * ##  Prisma Client ʲˢ
 *
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more SuperAdmins
 * const superAdmins = await prisma.superAdmins.findMany()
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
   * // Fetch zero or more SuperAdmins
   * const superAdmins = await prisma.superAdmins.findMany()
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
   * `prisma.superAdmins`: Exposes CRUD operations for the **SuperAdmins** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more SuperAdmins
    * const superAdmins = await prisma.superAdmins.findMany()
    * ```
    */
  get superAdmins(): Prisma.SuperAdminsDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.patient`: Exposes CRUD operations for the **Patient** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Patients
    * const patients = await prisma.patient.findMany()
    * ```
    */
  get patient(): Prisma.PatientDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.doctor`: Exposes CRUD operations for the **Doctor** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Doctors
    * const doctors = await prisma.doctor.findMany()
    * ```
    */
  get doctor(): Prisma.DoctorDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.diagnosticAccount`: Exposes CRUD operations for the **DiagnosticAccount** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more DiagnosticAccounts
    * const diagnosticAccounts = await prisma.diagnosticAccount.findMany()
    * ```
    */
  get diagnosticAccount(): Prisma.DiagnosticAccountDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.diagnosticChildUser`: Exposes CRUD operations for the **DiagnosticChildUser** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more DiagnosticChildUsers
    * const diagnosticChildUsers = await prisma.diagnosticChildUser.findMany()
    * ```
    */
  get diagnosticChildUser(): Prisma.DiagnosticChildUserDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.role`: Exposes CRUD operations for the **Role** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Roles
    * const roles = await prisma.role.findMany()
    * ```
    */
  get role(): Prisma.RoleDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.permission`: Exposes CRUD operations for the **Permission** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Permissions
    * const permissions = await prisma.permission.findMany()
    * ```
    */
  get permission(): Prisma.PermissionDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.rolePermission`: Exposes CRUD operations for the **RolePermission** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more RolePermissions
    * const rolePermissions = await prisma.rolePermission.findMany()
    * ```
    */
  get rolePermission(): Prisma.RolePermissionDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.diagnosticUserRole`: Exposes CRUD operations for the **DiagnosticUserRole** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more DiagnosticUserRoles
    * const diagnosticUserRoles = await prisma.diagnosticUserRole.findMany()
    * ```
    */
  get diagnosticUserRole(): Prisma.DiagnosticUserRoleDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.superAdminUserRole`: Exposes CRUD operations for the **SuperAdminUserRole** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more SuperAdminUserRoles
    * const superAdminUserRoles = await prisma.superAdminUserRole.findMany()
    * ```
    */
  get superAdminUserRole(): Prisma.SuperAdminUserRoleDelegate<ExtArgs, ClientOptions>;
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
    SuperAdmins: 'SuperAdmins',
    Patient: 'Patient',
    Doctor: 'Doctor',
    DiagnosticAccount: 'DiagnosticAccount',
    DiagnosticChildUser: 'DiagnosticChildUser',
    Role: 'Role',
    Permission: 'Permission',
    RolePermission: 'RolePermission',
    DiagnosticUserRole: 'DiagnosticUserRole',
    SuperAdminUserRole: 'SuperAdminUserRole'
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
      modelProps: "superAdmins" | "patient" | "doctor" | "diagnosticAccount" | "diagnosticChildUser" | "role" | "permission" | "rolePermission" | "diagnosticUserRole" | "superAdminUserRole"
      txIsolationLevel: Prisma.TransactionIsolationLevel
    }
    model: {
      SuperAdmins: {
        payload: Prisma.$SuperAdminsPayload<ExtArgs>
        fields: Prisma.SuperAdminsFieldRefs
        operations: {
          findUnique: {
            args: Prisma.SuperAdminsFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SuperAdminsPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.SuperAdminsFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SuperAdminsPayload>
          }
          findFirst: {
            args: Prisma.SuperAdminsFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SuperAdminsPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.SuperAdminsFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SuperAdminsPayload>
          }
          findMany: {
            args: Prisma.SuperAdminsFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SuperAdminsPayload>[]
          }
          create: {
            args: Prisma.SuperAdminsCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SuperAdminsPayload>
          }
          createMany: {
            args: Prisma.SuperAdminsCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.SuperAdminsDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SuperAdminsPayload>
          }
          update: {
            args: Prisma.SuperAdminsUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SuperAdminsPayload>
          }
          deleteMany: {
            args: Prisma.SuperAdminsDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.SuperAdminsUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.SuperAdminsUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SuperAdminsPayload>
          }
          aggregate: {
            args: Prisma.SuperAdminsAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateSuperAdmins>
          }
          groupBy: {
            args: Prisma.SuperAdminsGroupByArgs<ExtArgs>
            result: $Utils.Optional<SuperAdminsGroupByOutputType>[]
          }
          count: {
            args: Prisma.SuperAdminsCountArgs<ExtArgs>
            result: $Utils.Optional<SuperAdminsCountAggregateOutputType> | number
          }
        }
      }
      Patient: {
        payload: Prisma.$PatientPayload<ExtArgs>
        fields: Prisma.PatientFieldRefs
        operations: {
          findUnique: {
            args: Prisma.PatientFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PatientPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.PatientFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PatientPayload>
          }
          findFirst: {
            args: Prisma.PatientFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PatientPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.PatientFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PatientPayload>
          }
          findMany: {
            args: Prisma.PatientFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PatientPayload>[]
          }
          create: {
            args: Prisma.PatientCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PatientPayload>
          }
          createMany: {
            args: Prisma.PatientCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.PatientDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PatientPayload>
          }
          update: {
            args: Prisma.PatientUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PatientPayload>
          }
          deleteMany: {
            args: Prisma.PatientDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.PatientUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.PatientUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PatientPayload>
          }
          aggregate: {
            args: Prisma.PatientAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregatePatient>
          }
          groupBy: {
            args: Prisma.PatientGroupByArgs<ExtArgs>
            result: $Utils.Optional<PatientGroupByOutputType>[]
          }
          count: {
            args: Prisma.PatientCountArgs<ExtArgs>
            result: $Utils.Optional<PatientCountAggregateOutputType> | number
          }
        }
      }
      Doctor: {
        payload: Prisma.$DoctorPayload<ExtArgs>
        fields: Prisma.DoctorFieldRefs
        operations: {
          findUnique: {
            args: Prisma.DoctorFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DoctorPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.DoctorFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DoctorPayload>
          }
          findFirst: {
            args: Prisma.DoctorFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DoctorPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.DoctorFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DoctorPayload>
          }
          findMany: {
            args: Prisma.DoctorFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DoctorPayload>[]
          }
          create: {
            args: Prisma.DoctorCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DoctorPayload>
          }
          createMany: {
            args: Prisma.DoctorCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.DoctorDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DoctorPayload>
          }
          update: {
            args: Prisma.DoctorUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DoctorPayload>
          }
          deleteMany: {
            args: Prisma.DoctorDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.DoctorUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.DoctorUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DoctorPayload>
          }
          aggregate: {
            args: Prisma.DoctorAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateDoctor>
          }
          groupBy: {
            args: Prisma.DoctorGroupByArgs<ExtArgs>
            result: $Utils.Optional<DoctorGroupByOutputType>[]
          }
          count: {
            args: Prisma.DoctorCountArgs<ExtArgs>
            result: $Utils.Optional<DoctorCountAggregateOutputType> | number
          }
        }
      }
      DiagnosticAccount: {
        payload: Prisma.$DiagnosticAccountPayload<ExtArgs>
        fields: Prisma.DiagnosticAccountFieldRefs
        operations: {
          findUnique: {
            args: Prisma.DiagnosticAccountFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DiagnosticAccountPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.DiagnosticAccountFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DiagnosticAccountPayload>
          }
          findFirst: {
            args: Prisma.DiagnosticAccountFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DiagnosticAccountPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.DiagnosticAccountFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DiagnosticAccountPayload>
          }
          findMany: {
            args: Prisma.DiagnosticAccountFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DiagnosticAccountPayload>[]
          }
          create: {
            args: Prisma.DiagnosticAccountCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DiagnosticAccountPayload>
          }
          createMany: {
            args: Prisma.DiagnosticAccountCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.DiagnosticAccountDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DiagnosticAccountPayload>
          }
          update: {
            args: Prisma.DiagnosticAccountUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DiagnosticAccountPayload>
          }
          deleteMany: {
            args: Prisma.DiagnosticAccountDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.DiagnosticAccountUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.DiagnosticAccountUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DiagnosticAccountPayload>
          }
          aggregate: {
            args: Prisma.DiagnosticAccountAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateDiagnosticAccount>
          }
          groupBy: {
            args: Prisma.DiagnosticAccountGroupByArgs<ExtArgs>
            result: $Utils.Optional<DiagnosticAccountGroupByOutputType>[]
          }
          count: {
            args: Prisma.DiagnosticAccountCountArgs<ExtArgs>
            result: $Utils.Optional<DiagnosticAccountCountAggregateOutputType> | number
          }
        }
      }
      DiagnosticChildUser: {
        payload: Prisma.$DiagnosticChildUserPayload<ExtArgs>
        fields: Prisma.DiagnosticChildUserFieldRefs
        operations: {
          findUnique: {
            args: Prisma.DiagnosticChildUserFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DiagnosticChildUserPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.DiagnosticChildUserFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DiagnosticChildUserPayload>
          }
          findFirst: {
            args: Prisma.DiagnosticChildUserFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DiagnosticChildUserPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.DiagnosticChildUserFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DiagnosticChildUserPayload>
          }
          findMany: {
            args: Prisma.DiagnosticChildUserFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DiagnosticChildUserPayload>[]
          }
          create: {
            args: Prisma.DiagnosticChildUserCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DiagnosticChildUserPayload>
          }
          createMany: {
            args: Prisma.DiagnosticChildUserCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.DiagnosticChildUserDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DiagnosticChildUserPayload>
          }
          update: {
            args: Prisma.DiagnosticChildUserUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DiagnosticChildUserPayload>
          }
          deleteMany: {
            args: Prisma.DiagnosticChildUserDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.DiagnosticChildUserUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.DiagnosticChildUserUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DiagnosticChildUserPayload>
          }
          aggregate: {
            args: Prisma.DiagnosticChildUserAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateDiagnosticChildUser>
          }
          groupBy: {
            args: Prisma.DiagnosticChildUserGroupByArgs<ExtArgs>
            result: $Utils.Optional<DiagnosticChildUserGroupByOutputType>[]
          }
          count: {
            args: Prisma.DiagnosticChildUserCountArgs<ExtArgs>
            result: $Utils.Optional<DiagnosticChildUserCountAggregateOutputType> | number
          }
        }
      }
      Role: {
        payload: Prisma.$RolePayload<ExtArgs>
        fields: Prisma.RoleFieldRefs
        operations: {
          findUnique: {
            args: Prisma.RoleFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RolePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.RoleFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RolePayload>
          }
          findFirst: {
            args: Prisma.RoleFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RolePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.RoleFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RolePayload>
          }
          findMany: {
            args: Prisma.RoleFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RolePayload>[]
          }
          create: {
            args: Prisma.RoleCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RolePayload>
          }
          createMany: {
            args: Prisma.RoleCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.RoleDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RolePayload>
          }
          update: {
            args: Prisma.RoleUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RolePayload>
          }
          deleteMany: {
            args: Prisma.RoleDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.RoleUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.RoleUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RolePayload>
          }
          aggregate: {
            args: Prisma.RoleAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateRole>
          }
          groupBy: {
            args: Prisma.RoleGroupByArgs<ExtArgs>
            result: $Utils.Optional<RoleGroupByOutputType>[]
          }
          count: {
            args: Prisma.RoleCountArgs<ExtArgs>
            result: $Utils.Optional<RoleCountAggregateOutputType> | number
          }
        }
      }
      Permission: {
        payload: Prisma.$PermissionPayload<ExtArgs>
        fields: Prisma.PermissionFieldRefs
        operations: {
          findUnique: {
            args: Prisma.PermissionFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PermissionPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.PermissionFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PermissionPayload>
          }
          findFirst: {
            args: Prisma.PermissionFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PermissionPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.PermissionFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PermissionPayload>
          }
          findMany: {
            args: Prisma.PermissionFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PermissionPayload>[]
          }
          create: {
            args: Prisma.PermissionCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PermissionPayload>
          }
          createMany: {
            args: Prisma.PermissionCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.PermissionDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PermissionPayload>
          }
          update: {
            args: Prisma.PermissionUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PermissionPayload>
          }
          deleteMany: {
            args: Prisma.PermissionDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.PermissionUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.PermissionUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PermissionPayload>
          }
          aggregate: {
            args: Prisma.PermissionAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregatePermission>
          }
          groupBy: {
            args: Prisma.PermissionGroupByArgs<ExtArgs>
            result: $Utils.Optional<PermissionGroupByOutputType>[]
          }
          count: {
            args: Prisma.PermissionCountArgs<ExtArgs>
            result: $Utils.Optional<PermissionCountAggregateOutputType> | number
          }
        }
      }
      RolePermission: {
        payload: Prisma.$RolePermissionPayload<ExtArgs>
        fields: Prisma.RolePermissionFieldRefs
        operations: {
          findUnique: {
            args: Prisma.RolePermissionFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RolePermissionPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.RolePermissionFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RolePermissionPayload>
          }
          findFirst: {
            args: Prisma.RolePermissionFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RolePermissionPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.RolePermissionFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RolePermissionPayload>
          }
          findMany: {
            args: Prisma.RolePermissionFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RolePermissionPayload>[]
          }
          create: {
            args: Prisma.RolePermissionCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RolePermissionPayload>
          }
          createMany: {
            args: Prisma.RolePermissionCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.RolePermissionDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RolePermissionPayload>
          }
          update: {
            args: Prisma.RolePermissionUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RolePermissionPayload>
          }
          deleteMany: {
            args: Prisma.RolePermissionDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.RolePermissionUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.RolePermissionUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RolePermissionPayload>
          }
          aggregate: {
            args: Prisma.RolePermissionAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateRolePermission>
          }
          groupBy: {
            args: Prisma.RolePermissionGroupByArgs<ExtArgs>
            result: $Utils.Optional<RolePermissionGroupByOutputType>[]
          }
          count: {
            args: Prisma.RolePermissionCountArgs<ExtArgs>
            result: $Utils.Optional<RolePermissionCountAggregateOutputType> | number
          }
        }
      }
      DiagnosticUserRole: {
        payload: Prisma.$DiagnosticUserRolePayload<ExtArgs>
        fields: Prisma.DiagnosticUserRoleFieldRefs
        operations: {
          findUnique: {
            args: Prisma.DiagnosticUserRoleFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DiagnosticUserRolePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.DiagnosticUserRoleFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DiagnosticUserRolePayload>
          }
          findFirst: {
            args: Prisma.DiagnosticUserRoleFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DiagnosticUserRolePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.DiagnosticUserRoleFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DiagnosticUserRolePayload>
          }
          findMany: {
            args: Prisma.DiagnosticUserRoleFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DiagnosticUserRolePayload>[]
          }
          create: {
            args: Prisma.DiagnosticUserRoleCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DiagnosticUserRolePayload>
          }
          createMany: {
            args: Prisma.DiagnosticUserRoleCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.DiagnosticUserRoleDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DiagnosticUserRolePayload>
          }
          update: {
            args: Prisma.DiagnosticUserRoleUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DiagnosticUserRolePayload>
          }
          deleteMany: {
            args: Prisma.DiagnosticUserRoleDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.DiagnosticUserRoleUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.DiagnosticUserRoleUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DiagnosticUserRolePayload>
          }
          aggregate: {
            args: Prisma.DiagnosticUserRoleAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateDiagnosticUserRole>
          }
          groupBy: {
            args: Prisma.DiagnosticUserRoleGroupByArgs<ExtArgs>
            result: $Utils.Optional<DiagnosticUserRoleGroupByOutputType>[]
          }
          count: {
            args: Prisma.DiagnosticUserRoleCountArgs<ExtArgs>
            result: $Utils.Optional<DiagnosticUserRoleCountAggregateOutputType> | number
          }
        }
      }
      SuperAdminUserRole: {
        payload: Prisma.$SuperAdminUserRolePayload<ExtArgs>
        fields: Prisma.SuperAdminUserRoleFieldRefs
        operations: {
          findUnique: {
            args: Prisma.SuperAdminUserRoleFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SuperAdminUserRolePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.SuperAdminUserRoleFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SuperAdminUserRolePayload>
          }
          findFirst: {
            args: Prisma.SuperAdminUserRoleFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SuperAdminUserRolePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.SuperAdminUserRoleFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SuperAdminUserRolePayload>
          }
          findMany: {
            args: Prisma.SuperAdminUserRoleFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SuperAdminUserRolePayload>[]
          }
          create: {
            args: Prisma.SuperAdminUserRoleCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SuperAdminUserRolePayload>
          }
          createMany: {
            args: Prisma.SuperAdminUserRoleCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.SuperAdminUserRoleDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SuperAdminUserRolePayload>
          }
          update: {
            args: Prisma.SuperAdminUserRoleUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SuperAdminUserRolePayload>
          }
          deleteMany: {
            args: Prisma.SuperAdminUserRoleDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.SuperAdminUserRoleUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.SuperAdminUserRoleUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SuperAdminUserRolePayload>
          }
          aggregate: {
            args: Prisma.SuperAdminUserRoleAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateSuperAdminUserRole>
          }
          groupBy: {
            args: Prisma.SuperAdminUserRoleGroupByArgs<ExtArgs>
            result: $Utils.Optional<SuperAdminUserRoleGroupByOutputType>[]
          }
          count: {
            args: Prisma.SuperAdminUserRoleCountArgs<ExtArgs>
            result: $Utils.Optional<SuperAdminUserRoleCountAggregateOutputType> | number
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
    superAdmins?: SuperAdminsOmit
    patient?: PatientOmit
    doctor?: DoctorOmit
    diagnosticAccount?: DiagnosticAccountOmit
    diagnosticChildUser?: DiagnosticChildUserOmit
    role?: RoleOmit
    permission?: PermissionOmit
    rolePermission?: RolePermissionOmit
    diagnosticUserRole?: DiagnosticUserRoleOmit
    superAdminUserRole?: SuperAdminUserRoleOmit
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
   * Count Type SuperAdminsCountOutputType
   */

  export type SuperAdminsCountOutputType = {
    roles: number
    userRoles: number
  }

  export type SuperAdminsCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    roles?: boolean | SuperAdminsCountOutputTypeCountRolesArgs
    userRoles?: boolean | SuperAdminsCountOutputTypeCountUserRolesArgs
  }

  // Custom InputTypes
  /**
   * SuperAdminsCountOutputType without action
   */
  export type SuperAdminsCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SuperAdminsCountOutputType
     */
    select?: SuperAdminsCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * SuperAdminsCountOutputType without action
   */
  export type SuperAdminsCountOutputTypeCountRolesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: RoleWhereInput
  }

  /**
   * SuperAdminsCountOutputType without action
   */
  export type SuperAdminsCountOutputTypeCountUserRolesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: SuperAdminUserRoleWhereInput
  }


  /**
   * Count Type DiagnosticAccountCountOutputType
   */

  export type DiagnosticAccountCountOutputType = {
    childUsers: number
    roles: number
    patients: number
  }

  export type DiagnosticAccountCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    childUsers?: boolean | DiagnosticAccountCountOutputTypeCountChildUsersArgs
    roles?: boolean | DiagnosticAccountCountOutputTypeCountRolesArgs
    patients?: boolean | DiagnosticAccountCountOutputTypeCountPatientsArgs
  }

  // Custom InputTypes
  /**
   * DiagnosticAccountCountOutputType without action
   */
  export type DiagnosticAccountCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DiagnosticAccountCountOutputType
     */
    select?: DiagnosticAccountCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * DiagnosticAccountCountOutputType without action
   */
  export type DiagnosticAccountCountOutputTypeCountChildUsersArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: DiagnosticChildUserWhereInput
  }

  /**
   * DiagnosticAccountCountOutputType without action
   */
  export type DiagnosticAccountCountOutputTypeCountRolesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: RoleWhereInput
  }

  /**
   * DiagnosticAccountCountOutputType without action
   */
  export type DiagnosticAccountCountOutputTypeCountPatientsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: PatientWhereInput
  }


  /**
   * Count Type DiagnosticChildUserCountOutputType
   */

  export type DiagnosticChildUserCountOutputType = {
    userRoles: number
  }

  export type DiagnosticChildUserCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    userRoles?: boolean | DiagnosticChildUserCountOutputTypeCountUserRolesArgs
  }

  // Custom InputTypes
  /**
   * DiagnosticChildUserCountOutputType without action
   */
  export type DiagnosticChildUserCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DiagnosticChildUserCountOutputType
     */
    select?: DiagnosticChildUserCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * DiagnosticChildUserCountOutputType without action
   */
  export type DiagnosticChildUserCountOutputTypeCountUserRolesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: DiagnosticUserRoleWhereInput
  }


  /**
   * Count Type RoleCountOutputType
   */

  export type RoleCountOutputType = {
    rolePermissions: number
    diagnosticUserRoles: number
    superAdminUserRoles: number
  }

  export type RoleCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    rolePermissions?: boolean | RoleCountOutputTypeCountRolePermissionsArgs
    diagnosticUserRoles?: boolean | RoleCountOutputTypeCountDiagnosticUserRolesArgs
    superAdminUserRoles?: boolean | RoleCountOutputTypeCountSuperAdminUserRolesArgs
  }

  // Custom InputTypes
  /**
   * RoleCountOutputType without action
   */
  export type RoleCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RoleCountOutputType
     */
    select?: RoleCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * RoleCountOutputType without action
   */
  export type RoleCountOutputTypeCountRolePermissionsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: RolePermissionWhereInput
  }

  /**
   * RoleCountOutputType without action
   */
  export type RoleCountOutputTypeCountDiagnosticUserRolesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: DiagnosticUserRoleWhereInput
  }

  /**
   * RoleCountOutputType without action
   */
  export type RoleCountOutputTypeCountSuperAdminUserRolesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: SuperAdminUserRoleWhereInput
  }


  /**
   * Count Type PermissionCountOutputType
   */

  export type PermissionCountOutputType = {
    rolePermissions: number
  }

  export type PermissionCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    rolePermissions?: boolean | PermissionCountOutputTypeCountRolePermissionsArgs
  }

  // Custom InputTypes
  /**
   * PermissionCountOutputType without action
   */
  export type PermissionCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PermissionCountOutputType
     */
    select?: PermissionCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * PermissionCountOutputType without action
   */
  export type PermissionCountOutputTypeCountRolePermissionsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: RolePermissionWhereInput
  }


  /**
   * Models
   */

  /**
   * Model SuperAdmins
   */

  export type AggregateSuperAdmins = {
    _count: SuperAdminsCountAggregateOutputType | null
    _min: SuperAdminsMinAggregateOutputType | null
    _max: SuperAdminsMaxAggregateOutputType | null
  }

  export type SuperAdminsMinAggregateOutputType = {
    id: string | null
    name: string | null
    email: string | null
    phone: string | null
    password: string | null
    isActive: boolean | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type SuperAdminsMaxAggregateOutputType = {
    id: string | null
    name: string | null
    email: string | null
    phone: string | null
    password: string | null
    isActive: boolean | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type SuperAdminsCountAggregateOutputType = {
    id: number
    name: number
    email: number
    phone: number
    password: number
    isActive: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type SuperAdminsMinAggregateInputType = {
    id?: true
    name?: true
    email?: true
    phone?: true
    password?: true
    isActive?: true
    createdAt?: true
    updatedAt?: true
  }

  export type SuperAdminsMaxAggregateInputType = {
    id?: true
    name?: true
    email?: true
    phone?: true
    password?: true
    isActive?: true
    createdAt?: true
    updatedAt?: true
  }

  export type SuperAdminsCountAggregateInputType = {
    id?: true
    name?: true
    email?: true
    phone?: true
    password?: true
    isActive?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type SuperAdminsAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which SuperAdmins to aggregate.
     */
    where?: SuperAdminsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of SuperAdmins to fetch.
     */
    orderBy?: SuperAdminsOrderByWithRelationInput | SuperAdminsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: SuperAdminsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` SuperAdmins from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` SuperAdmins.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned SuperAdmins
    **/
    _count?: true | SuperAdminsCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: SuperAdminsMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: SuperAdminsMaxAggregateInputType
  }

  export type GetSuperAdminsAggregateType<T extends SuperAdminsAggregateArgs> = {
        [P in keyof T & keyof AggregateSuperAdmins]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateSuperAdmins[P]>
      : GetScalarType<T[P], AggregateSuperAdmins[P]>
  }




  export type SuperAdminsGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: SuperAdminsWhereInput
    orderBy?: SuperAdminsOrderByWithAggregationInput | SuperAdminsOrderByWithAggregationInput[]
    by: SuperAdminsScalarFieldEnum[] | SuperAdminsScalarFieldEnum
    having?: SuperAdminsScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: SuperAdminsCountAggregateInputType | true
    _min?: SuperAdminsMinAggregateInputType
    _max?: SuperAdminsMaxAggregateInputType
  }

  export type SuperAdminsGroupByOutputType = {
    id: string
    name: string
    email: string
    phone: string | null
    password: string
    isActive: boolean
    createdAt: Date
    updatedAt: Date
    _count: SuperAdminsCountAggregateOutputType | null
    _min: SuperAdminsMinAggregateOutputType | null
    _max: SuperAdminsMaxAggregateOutputType | null
  }

  type GetSuperAdminsGroupByPayload<T extends SuperAdminsGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<SuperAdminsGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof SuperAdminsGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], SuperAdminsGroupByOutputType[P]>
            : GetScalarType<T[P], SuperAdminsGroupByOutputType[P]>
        }
      >
    >


  export type SuperAdminsSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    email?: boolean
    phone?: boolean
    password?: boolean
    isActive?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    roles?: boolean | SuperAdmins$rolesArgs<ExtArgs>
    userRoles?: boolean | SuperAdmins$userRolesArgs<ExtArgs>
    _count?: boolean | SuperAdminsCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["superAdmins"]>



  export type SuperAdminsSelectScalar = {
    id?: boolean
    name?: boolean
    email?: boolean
    phone?: boolean
    password?: boolean
    isActive?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type SuperAdminsOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "name" | "email" | "phone" | "password" | "isActive" | "createdAt" | "updatedAt", ExtArgs["result"]["superAdmins"]>
  export type SuperAdminsInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    roles?: boolean | SuperAdmins$rolesArgs<ExtArgs>
    userRoles?: boolean | SuperAdmins$userRolesArgs<ExtArgs>
    _count?: boolean | SuperAdminsCountOutputTypeDefaultArgs<ExtArgs>
  }

  export type $SuperAdminsPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "SuperAdmins"
    objects: {
      roles: Prisma.$RolePayload<ExtArgs>[]
      userRoles: Prisma.$SuperAdminUserRolePayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      name: string
      email: string
      phone: string | null
      password: string
      isActive: boolean
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["superAdmins"]>
    composites: {}
  }

  type SuperAdminsGetPayload<S extends boolean | null | undefined | SuperAdminsDefaultArgs> = $Result.GetResult<Prisma.$SuperAdminsPayload, S>

  type SuperAdminsCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<SuperAdminsFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: SuperAdminsCountAggregateInputType | true
    }

  export interface SuperAdminsDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['SuperAdmins'], meta: { name: 'SuperAdmins' } }
    /**
     * Find zero or one SuperAdmins that matches the filter.
     * @param {SuperAdminsFindUniqueArgs} args - Arguments to find a SuperAdmins
     * @example
     * // Get one SuperAdmins
     * const superAdmins = await prisma.superAdmins.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends SuperAdminsFindUniqueArgs>(args: SelectSubset<T, SuperAdminsFindUniqueArgs<ExtArgs>>): Prisma__SuperAdminsClient<$Result.GetResult<Prisma.$SuperAdminsPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one SuperAdmins that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {SuperAdminsFindUniqueOrThrowArgs} args - Arguments to find a SuperAdmins
     * @example
     * // Get one SuperAdmins
     * const superAdmins = await prisma.superAdmins.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends SuperAdminsFindUniqueOrThrowArgs>(args: SelectSubset<T, SuperAdminsFindUniqueOrThrowArgs<ExtArgs>>): Prisma__SuperAdminsClient<$Result.GetResult<Prisma.$SuperAdminsPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first SuperAdmins that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SuperAdminsFindFirstArgs} args - Arguments to find a SuperAdmins
     * @example
     * // Get one SuperAdmins
     * const superAdmins = await prisma.superAdmins.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends SuperAdminsFindFirstArgs>(args?: SelectSubset<T, SuperAdminsFindFirstArgs<ExtArgs>>): Prisma__SuperAdminsClient<$Result.GetResult<Prisma.$SuperAdminsPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first SuperAdmins that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SuperAdminsFindFirstOrThrowArgs} args - Arguments to find a SuperAdmins
     * @example
     * // Get one SuperAdmins
     * const superAdmins = await prisma.superAdmins.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends SuperAdminsFindFirstOrThrowArgs>(args?: SelectSubset<T, SuperAdminsFindFirstOrThrowArgs<ExtArgs>>): Prisma__SuperAdminsClient<$Result.GetResult<Prisma.$SuperAdminsPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more SuperAdmins that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SuperAdminsFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all SuperAdmins
     * const superAdmins = await prisma.superAdmins.findMany()
     * 
     * // Get first 10 SuperAdmins
     * const superAdmins = await prisma.superAdmins.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const superAdminsWithIdOnly = await prisma.superAdmins.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends SuperAdminsFindManyArgs>(args?: SelectSubset<T, SuperAdminsFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SuperAdminsPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a SuperAdmins.
     * @param {SuperAdminsCreateArgs} args - Arguments to create a SuperAdmins.
     * @example
     * // Create one SuperAdmins
     * const SuperAdmins = await prisma.superAdmins.create({
     *   data: {
     *     // ... data to create a SuperAdmins
     *   }
     * })
     * 
     */
    create<T extends SuperAdminsCreateArgs>(args: SelectSubset<T, SuperAdminsCreateArgs<ExtArgs>>): Prisma__SuperAdminsClient<$Result.GetResult<Prisma.$SuperAdminsPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many SuperAdmins.
     * @param {SuperAdminsCreateManyArgs} args - Arguments to create many SuperAdmins.
     * @example
     * // Create many SuperAdmins
     * const superAdmins = await prisma.superAdmins.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends SuperAdminsCreateManyArgs>(args?: SelectSubset<T, SuperAdminsCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a SuperAdmins.
     * @param {SuperAdminsDeleteArgs} args - Arguments to delete one SuperAdmins.
     * @example
     * // Delete one SuperAdmins
     * const SuperAdmins = await prisma.superAdmins.delete({
     *   where: {
     *     // ... filter to delete one SuperAdmins
     *   }
     * })
     * 
     */
    delete<T extends SuperAdminsDeleteArgs>(args: SelectSubset<T, SuperAdminsDeleteArgs<ExtArgs>>): Prisma__SuperAdminsClient<$Result.GetResult<Prisma.$SuperAdminsPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one SuperAdmins.
     * @param {SuperAdminsUpdateArgs} args - Arguments to update one SuperAdmins.
     * @example
     * // Update one SuperAdmins
     * const superAdmins = await prisma.superAdmins.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends SuperAdminsUpdateArgs>(args: SelectSubset<T, SuperAdminsUpdateArgs<ExtArgs>>): Prisma__SuperAdminsClient<$Result.GetResult<Prisma.$SuperAdminsPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more SuperAdmins.
     * @param {SuperAdminsDeleteManyArgs} args - Arguments to filter SuperAdmins to delete.
     * @example
     * // Delete a few SuperAdmins
     * const { count } = await prisma.superAdmins.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends SuperAdminsDeleteManyArgs>(args?: SelectSubset<T, SuperAdminsDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more SuperAdmins.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SuperAdminsUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many SuperAdmins
     * const superAdmins = await prisma.superAdmins.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends SuperAdminsUpdateManyArgs>(args: SelectSubset<T, SuperAdminsUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one SuperAdmins.
     * @param {SuperAdminsUpsertArgs} args - Arguments to update or create a SuperAdmins.
     * @example
     * // Update or create a SuperAdmins
     * const superAdmins = await prisma.superAdmins.upsert({
     *   create: {
     *     // ... data to create a SuperAdmins
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the SuperAdmins we want to update
     *   }
     * })
     */
    upsert<T extends SuperAdminsUpsertArgs>(args: SelectSubset<T, SuperAdminsUpsertArgs<ExtArgs>>): Prisma__SuperAdminsClient<$Result.GetResult<Prisma.$SuperAdminsPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of SuperAdmins.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SuperAdminsCountArgs} args - Arguments to filter SuperAdmins to count.
     * @example
     * // Count the number of SuperAdmins
     * const count = await prisma.superAdmins.count({
     *   where: {
     *     // ... the filter for the SuperAdmins we want to count
     *   }
     * })
    **/
    count<T extends SuperAdminsCountArgs>(
      args?: Subset<T, SuperAdminsCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], SuperAdminsCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a SuperAdmins.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SuperAdminsAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends SuperAdminsAggregateArgs>(args: Subset<T, SuperAdminsAggregateArgs>): Prisma.PrismaPromise<GetSuperAdminsAggregateType<T>>

    /**
     * Group by SuperAdmins.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SuperAdminsGroupByArgs} args - Group by arguments.
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
      T extends SuperAdminsGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: SuperAdminsGroupByArgs['orderBy'] }
        : { orderBy?: SuperAdminsGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, SuperAdminsGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetSuperAdminsGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the SuperAdmins model
   */
  readonly fields: SuperAdminsFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for SuperAdmins.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__SuperAdminsClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    roles<T extends SuperAdmins$rolesArgs<ExtArgs> = {}>(args?: Subset<T, SuperAdmins$rolesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$RolePayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    userRoles<T extends SuperAdmins$userRolesArgs<ExtArgs> = {}>(args?: Subset<T, SuperAdmins$userRolesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SuperAdminUserRolePayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the SuperAdmins model
   */
  interface SuperAdminsFieldRefs {
    readonly id: FieldRef<"SuperAdmins", 'String'>
    readonly name: FieldRef<"SuperAdmins", 'String'>
    readonly email: FieldRef<"SuperAdmins", 'String'>
    readonly phone: FieldRef<"SuperAdmins", 'String'>
    readonly password: FieldRef<"SuperAdmins", 'String'>
    readonly isActive: FieldRef<"SuperAdmins", 'Boolean'>
    readonly createdAt: FieldRef<"SuperAdmins", 'DateTime'>
    readonly updatedAt: FieldRef<"SuperAdmins", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * SuperAdmins findUnique
   */
  export type SuperAdminsFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SuperAdmins
     */
    select?: SuperAdminsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SuperAdmins
     */
    omit?: SuperAdminsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SuperAdminsInclude<ExtArgs> | null
    /**
     * Filter, which SuperAdmins to fetch.
     */
    where: SuperAdminsWhereUniqueInput
  }

  /**
   * SuperAdmins findUniqueOrThrow
   */
  export type SuperAdminsFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SuperAdmins
     */
    select?: SuperAdminsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SuperAdmins
     */
    omit?: SuperAdminsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SuperAdminsInclude<ExtArgs> | null
    /**
     * Filter, which SuperAdmins to fetch.
     */
    where: SuperAdminsWhereUniqueInput
  }

  /**
   * SuperAdmins findFirst
   */
  export type SuperAdminsFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SuperAdmins
     */
    select?: SuperAdminsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SuperAdmins
     */
    omit?: SuperAdminsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SuperAdminsInclude<ExtArgs> | null
    /**
     * Filter, which SuperAdmins to fetch.
     */
    where?: SuperAdminsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of SuperAdmins to fetch.
     */
    orderBy?: SuperAdminsOrderByWithRelationInput | SuperAdminsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for SuperAdmins.
     */
    cursor?: SuperAdminsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` SuperAdmins from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` SuperAdmins.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of SuperAdmins.
     */
    distinct?: SuperAdminsScalarFieldEnum | SuperAdminsScalarFieldEnum[]
  }

  /**
   * SuperAdmins findFirstOrThrow
   */
  export type SuperAdminsFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SuperAdmins
     */
    select?: SuperAdminsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SuperAdmins
     */
    omit?: SuperAdminsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SuperAdminsInclude<ExtArgs> | null
    /**
     * Filter, which SuperAdmins to fetch.
     */
    where?: SuperAdminsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of SuperAdmins to fetch.
     */
    orderBy?: SuperAdminsOrderByWithRelationInput | SuperAdminsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for SuperAdmins.
     */
    cursor?: SuperAdminsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` SuperAdmins from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` SuperAdmins.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of SuperAdmins.
     */
    distinct?: SuperAdminsScalarFieldEnum | SuperAdminsScalarFieldEnum[]
  }

  /**
   * SuperAdmins findMany
   */
  export type SuperAdminsFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SuperAdmins
     */
    select?: SuperAdminsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SuperAdmins
     */
    omit?: SuperAdminsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SuperAdminsInclude<ExtArgs> | null
    /**
     * Filter, which SuperAdmins to fetch.
     */
    where?: SuperAdminsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of SuperAdmins to fetch.
     */
    orderBy?: SuperAdminsOrderByWithRelationInput | SuperAdminsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing SuperAdmins.
     */
    cursor?: SuperAdminsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` SuperAdmins from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` SuperAdmins.
     */
    skip?: number
    distinct?: SuperAdminsScalarFieldEnum | SuperAdminsScalarFieldEnum[]
  }

  /**
   * SuperAdmins create
   */
  export type SuperAdminsCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SuperAdmins
     */
    select?: SuperAdminsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SuperAdmins
     */
    omit?: SuperAdminsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SuperAdminsInclude<ExtArgs> | null
    /**
     * The data needed to create a SuperAdmins.
     */
    data: XOR<SuperAdminsCreateInput, SuperAdminsUncheckedCreateInput>
  }

  /**
   * SuperAdmins createMany
   */
  export type SuperAdminsCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many SuperAdmins.
     */
    data: SuperAdminsCreateManyInput | SuperAdminsCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * SuperAdmins update
   */
  export type SuperAdminsUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SuperAdmins
     */
    select?: SuperAdminsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SuperAdmins
     */
    omit?: SuperAdminsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SuperAdminsInclude<ExtArgs> | null
    /**
     * The data needed to update a SuperAdmins.
     */
    data: XOR<SuperAdminsUpdateInput, SuperAdminsUncheckedUpdateInput>
    /**
     * Choose, which SuperAdmins to update.
     */
    where: SuperAdminsWhereUniqueInput
  }

  /**
   * SuperAdmins updateMany
   */
  export type SuperAdminsUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update SuperAdmins.
     */
    data: XOR<SuperAdminsUpdateManyMutationInput, SuperAdminsUncheckedUpdateManyInput>
    /**
     * Filter which SuperAdmins to update
     */
    where?: SuperAdminsWhereInput
    /**
     * Limit how many SuperAdmins to update.
     */
    limit?: number
  }

  /**
   * SuperAdmins upsert
   */
  export type SuperAdminsUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SuperAdmins
     */
    select?: SuperAdminsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SuperAdmins
     */
    omit?: SuperAdminsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SuperAdminsInclude<ExtArgs> | null
    /**
     * The filter to search for the SuperAdmins to update in case it exists.
     */
    where: SuperAdminsWhereUniqueInput
    /**
     * In case the SuperAdmins found by the `where` argument doesn't exist, create a new SuperAdmins with this data.
     */
    create: XOR<SuperAdminsCreateInput, SuperAdminsUncheckedCreateInput>
    /**
     * In case the SuperAdmins was found with the provided `where` argument, update it with this data.
     */
    update: XOR<SuperAdminsUpdateInput, SuperAdminsUncheckedUpdateInput>
  }

  /**
   * SuperAdmins delete
   */
  export type SuperAdminsDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SuperAdmins
     */
    select?: SuperAdminsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SuperAdmins
     */
    omit?: SuperAdminsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SuperAdminsInclude<ExtArgs> | null
    /**
     * Filter which SuperAdmins to delete.
     */
    where: SuperAdminsWhereUniqueInput
  }

  /**
   * SuperAdmins deleteMany
   */
  export type SuperAdminsDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which SuperAdmins to delete
     */
    where?: SuperAdminsWhereInput
    /**
     * Limit how many SuperAdmins to delete.
     */
    limit?: number
  }

  /**
   * SuperAdmins.roles
   */
  export type SuperAdmins$rolesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Role
     */
    select?: RoleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Role
     */
    omit?: RoleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RoleInclude<ExtArgs> | null
    where?: RoleWhereInput
    orderBy?: RoleOrderByWithRelationInput | RoleOrderByWithRelationInput[]
    cursor?: RoleWhereUniqueInput
    take?: number
    skip?: number
    distinct?: RoleScalarFieldEnum | RoleScalarFieldEnum[]
  }

  /**
   * SuperAdmins.userRoles
   */
  export type SuperAdmins$userRolesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SuperAdminUserRole
     */
    select?: SuperAdminUserRoleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SuperAdminUserRole
     */
    omit?: SuperAdminUserRoleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SuperAdminUserRoleInclude<ExtArgs> | null
    where?: SuperAdminUserRoleWhereInput
    orderBy?: SuperAdminUserRoleOrderByWithRelationInput | SuperAdminUserRoleOrderByWithRelationInput[]
    cursor?: SuperAdminUserRoleWhereUniqueInput
    take?: number
    skip?: number
    distinct?: SuperAdminUserRoleScalarFieldEnum | SuperAdminUserRoleScalarFieldEnum[]
  }

  /**
   * SuperAdmins without action
   */
  export type SuperAdminsDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SuperAdmins
     */
    select?: SuperAdminsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SuperAdmins
     */
    omit?: SuperAdminsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SuperAdminsInclude<ExtArgs> | null
  }


  /**
   * Model Patient
   */

  export type AggregatePatient = {
    _count: PatientCountAggregateOutputType | null
    _avg: PatientAvgAggregateOutputType | null
    _sum: PatientSumAggregateOutputType | null
    _min: PatientMinAggregateOutputType | null
    _max: PatientMaxAggregateOutputType | null
  }

  export type PatientAvgAggregateOutputType = {
    age: number | null
  }

  export type PatientSumAggregateOutputType = {
    age: number | null
  }

  export type PatientMinAggregateOutputType = {
    id: string | null
    fullName: string | null
    mobileNumber: string | null
    otp: string | null
    otpExpiresAt: Date | null
    email: string | null
    dateOfBirth: Date | null
    age: number | null
    bloodGroup: string | null
    gender: string | null
    address: string | null
    diagnosticAccountId: string | null
    isActive: boolean | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type PatientMaxAggregateOutputType = {
    id: string | null
    fullName: string | null
    mobileNumber: string | null
    otp: string | null
    otpExpiresAt: Date | null
    email: string | null
    dateOfBirth: Date | null
    age: number | null
    bloodGroup: string | null
    gender: string | null
    address: string | null
    diagnosticAccountId: string | null
    isActive: boolean | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type PatientCountAggregateOutputType = {
    id: number
    fullName: number
    mobileNumber: number
    otp: number
    otpExpiresAt: number
    email: number
    dateOfBirth: number
    age: number
    bloodGroup: number
    gender: number
    address: number
    diagnosticAccountId: number
    isActive: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type PatientAvgAggregateInputType = {
    age?: true
  }

  export type PatientSumAggregateInputType = {
    age?: true
  }

  export type PatientMinAggregateInputType = {
    id?: true
    fullName?: true
    mobileNumber?: true
    otp?: true
    otpExpiresAt?: true
    email?: true
    dateOfBirth?: true
    age?: true
    bloodGroup?: true
    gender?: true
    address?: true
    diagnosticAccountId?: true
    isActive?: true
    createdAt?: true
    updatedAt?: true
  }

  export type PatientMaxAggregateInputType = {
    id?: true
    fullName?: true
    mobileNumber?: true
    otp?: true
    otpExpiresAt?: true
    email?: true
    dateOfBirth?: true
    age?: true
    bloodGroup?: true
    gender?: true
    address?: true
    diagnosticAccountId?: true
    isActive?: true
    createdAt?: true
    updatedAt?: true
  }

  export type PatientCountAggregateInputType = {
    id?: true
    fullName?: true
    mobileNumber?: true
    otp?: true
    otpExpiresAt?: true
    email?: true
    dateOfBirth?: true
    age?: true
    bloodGroup?: true
    gender?: true
    address?: true
    diagnosticAccountId?: true
    isActive?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type PatientAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Patient to aggregate.
     */
    where?: PatientWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Patients to fetch.
     */
    orderBy?: PatientOrderByWithRelationInput | PatientOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: PatientWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Patients from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Patients.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Patients
    **/
    _count?: true | PatientCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: PatientAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: PatientSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: PatientMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: PatientMaxAggregateInputType
  }

  export type GetPatientAggregateType<T extends PatientAggregateArgs> = {
        [P in keyof T & keyof AggregatePatient]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregatePatient[P]>
      : GetScalarType<T[P], AggregatePatient[P]>
  }




  export type PatientGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: PatientWhereInput
    orderBy?: PatientOrderByWithAggregationInput | PatientOrderByWithAggregationInput[]
    by: PatientScalarFieldEnum[] | PatientScalarFieldEnum
    having?: PatientScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: PatientCountAggregateInputType | true
    _avg?: PatientAvgAggregateInputType
    _sum?: PatientSumAggregateInputType
    _min?: PatientMinAggregateInputType
    _max?: PatientMaxAggregateInputType
  }

  export type PatientGroupByOutputType = {
    id: string
    fullName: string
    mobileNumber: string
    otp: string | null
    otpExpiresAt: Date | null
    email: string | null
    dateOfBirth: Date | null
    age: number | null
    bloodGroup: string | null
    gender: string | null
    address: string | null
    diagnosticAccountId: string | null
    isActive: boolean
    createdAt: Date
    updatedAt: Date
    _count: PatientCountAggregateOutputType | null
    _avg: PatientAvgAggregateOutputType | null
    _sum: PatientSumAggregateOutputType | null
    _min: PatientMinAggregateOutputType | null
    _max: PatientMaxAggregateOutputType | null
  }

  type GetPatientGroupByPayload<T extends PatientGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<PatientGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof PatientGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], PatientGroupByOutputType[P]>
            : GetScalarType<T[P], PatientGroupByOutputType[P]>
        }
      >
    >


  export type PatientSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    fullName?: boolean
    mobileNumber?: boolean
    otp?: boolean
    otpExpiresAt?: boolean
    email?: boolean
    dateOfBirth?: boolean
    age?: boolean
    bloodGroup?: boolean
    gender?: boolean
    address?: boolean
    diagnosticAccountId?: boolean
    isActive?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    diagnosticAccount?: boolean | Patient$diagnosticAccountArgs<ExtArgs>
  }, ExtArgs["result"]["patient"]>



  export type PatientSelectScalar = {
    id?: boolean
    fullName?: boolean
    mobileNumber?: boolean
    otp?: boolean
    otpExpiresAt?: boolean
    email?: boolean
    dateOfBirth?: boolean
    age?: boolean
    bloodGroup?: boolean
    gender?: boolean
    address?: boolean
    diagnosticAccountId?: boolean
    isActive?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type PatientOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "fullName" | "mobileNumber" | "otp" | "otpExpiresAt" | "email" | "dateOfBirth" | "age" | "bloodGroup" | "gender" | "address" | "diagnosticAccountId" | "isActive" | "createdAt" | "updatedAt", ExtArgs["result"]["patient"]>
  export type PatientInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    diagnosticAccount?: boolean | Patient$diagnosticAccountArgs<ExtArgs>
  }

  export type $PatientPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Patient"
    objects: {
      diagnosticAccount: Prisma.$DiagnosticAccountPayload<ExtArgs> | null
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      fullName: string
      mobileNumber: string
      otp: string | null
      otpExpiresAt: Date | null
      email: string | null
      dateOfBirth: Date | null
      age: number | null
      bloodGroup: string | null
      gender: string | null
      address: string | null
      diagnosticAccountId: string | null
      isActive: boolean
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["patient"]>
    composites: {}
  }

  type PatientGetPayload<S extends boolean | null | undefined | PatientDefaultArgs> = $Result.GetResult<Prisma.$PatientPayload, S>

  type PatientCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<PatientFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: PatientCountAggregateInputType | true
    }

  export interface PatientDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Patient'], meta: { name: 'Patient' } }
    /**
     * Find zero or one Patient that matches the filter.
     * @param {PatientFindUniqueArgs} args - Arguments to find a Patient
     * @example
     * // Get one Patient
     * const patient = await prisma.patient.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends PatientFindUniqueArgs>(args: SelectSubset<T, PatientFindUniqueArgs<ExtArgs>>): Prisma__PatientClient<$Result.GetResult<Prisma.$PatientPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Patient that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {PatientFindUniqueOrThrowArgs} args - Arguments to find a Patient
     * @example
     * // Get one Patient
     * const patient = await prisma.patient.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends PatientFindUniqueOrThrowArgs>(args: SelectSubset<T, PatientFindUniqueOrThrowArgs<ExtArgs>>): Prisma__PatientClient<$Result.GetResult<Prisma.$PatientPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Patient that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PatientFindFirstArgs} args - Arguments to find a Patient
     * @example
     * // Get one Patient
     * const patient = await prisma.patient.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends PatientFindFirstArgs>(args?: SelectSubset<T, PatientFindFirstArgs<ExtArgs>>): Prisma__PatientClient<$Result.GetResult<Prisma.$PatientPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Patient that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PatientFindFirstOrThrowArgs} args - Arguments to find a Patient
     * @example
     * // Get one Patient
     * const patient = await prisma.patient.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends PatientFindFirstOrThrowArgs>(args?: SelectSubset<T, PatientFindFirstOrThrowArgs<ExtArgs>>): Prisma__PatientClient<$Result.GetResult<Prisma.$PatientPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Patients that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PatientFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Patients
     * const patients = await prisma.patient.findMany()
     * 
     * // Get first 10 Patients
     * const patients = await prisma.patient.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const patientWithIdOnly = await prisma.patient.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends PatientFindManyArgs>(args?: SelectSubset<T, PatientFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PatientPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Patient.
     * @param {PatientCreateArgs} args - Arguments to create a Patient.
     * @example
     * // Create one Patient
     * const Patient = await prisma.patient.create({
     *   data: {
     *     // ... data to create a Patient
     *   }
     * })
     * 
     */
    create<T extends PatientCreateArgs>(args: SelectSubset<T, PatientCreateArgs<ExtArgs>>): Prisma__PatientClient<$Result.GetResult<Prisma.$PatientPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Patients.
     * @param {PatientCreateManyArgs} args - Arguments to create many Patients.
     * @example
     * // Create many Patients
     * const patient = await prisma.patient.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends PatientCreateManyArgs>(args?: SelectSubset<T, PatientCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Patient.
     * @param {PatientDeleteArgs} args - Arguments to delete one Patient.
     * @example
     * // Delete one Patient
     * const Patient = await prisma.patient.delete({
     *   where: {
     *     // ... filter to delete one Patient
     *   }
     * })
     * 
     */
    delete<T extends PatientDeleteArgs>(args: SelectSubset<T, PatientDeleteArgs<ExtArgs>>): Prisma__PatientClient<$Result.GetResult<Prisma.$PatientPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Patient.
     * @param {PatientUpdateArgs} args - Arguments to update one Patient.
     * @example
     * // Update one Patient
     * const patient = await prisma.patient.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends PatientUpdateArgs>(args: SelectSubset<T, PatientUpdateArgs<ExtArgs>>): Prisma__PatientClient<$Result.GetResult<Prisma.$PatientPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Patients.
     * @param {PatientDeleteManyArgs} args - Arguments to filter Patients to delete.
     * @example
     * // Delete a few Patients
     * const { count } = await prisma.patient.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends PatientDeleteManyArgs>(args?: SelectSubset<T, PatientDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Patients.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PatientUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Patients
     * const patient = await prisma.patient.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends PatientUpdateManyArgs>(args: SelectSubset<T, PatientUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Patient.
     * @param {PatientUpsertArgs} args - Arguments to update or create a Patient.
     * @example
     * // Update or create a Patient
     * const patient = await prisma.patient.upsert({
     *   create: {
     *     // ... data to create a Patient
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Patient we want to update
     *   }
     * })
     */
    upsert<T extends PatientUpsertArgs>(args: SelectSubset<T, PatientUpsertArgs<ExtArgs>>): Prisma__PatientClient<$Result.GetResult<Prisma.$PatientPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Patients.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PatientCountArgs} args - Arguments to filter Patients to count.
     * @example
     * // Count the number of Patients
     * const count = await prisma.patient.count({
     *   where: {
     *     // ... the filter for the Patients we want to count
     *   }
     * })
    **/
    count<T extends PatientCountArgs>(
      args?: Subset<T, PatientCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], PatientCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Patient.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PatientAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends PatientAggregateArgs>(args: Subset<T, PatientAggregateArgs>): Prisma.PrismaPromise<GetPatientAggregateType<T>>

    /**
     * Group by Patient.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PatientGroupByArgs} args - Group by arguments.
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
      T extends PatientGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: PatientGroupByArgs['orderBy'] }
        : { orderBy?: PatientGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, PatientGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetPatientGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Patient model
   */
  readonly fields: PatientFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Patient.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__PatientClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    diagnosticAccount<T extends Patient$diagnosticAccountArgs<ExtArgs> = {}>(args?: Subset<T, Patient$diagnosticAccountArgs<ExtArgs>>): Prisma__DiagnosticAccountClient<$Result.GetResult<Prisma.$DiagnosticAccountPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the Patient model
   */
  interface PatientFieldRefs {
    readonly id: FieldRef<"Patient", 'String'>
    readonly fullName: FieldRef<"Patient", 'String'>
    readonly mobileNumber: FieldRef<"Patient", 'String'>
    readonly otp: FieldRef<"Patient", 'String'>
    readonly otpExpiresAt: FieldRef<"Patient", 'DateTime'>
    readonly email: FieldRef<"Patient", 'String'>
    readonly dateOfBirth: FieldRef<"Patient", 'DateTime'>
    readonly age: FieldRef<"Patient", 'Int'>
    readonly bloodGroup: FieldRef<"Patient", 'String'>
    readonly gender: FieldRef<"Patient", 'String'>
    readonly address: FieldRef<"Patient", 'String'>
    readonly diagnosticAccountId: FieldRef<"Patient", 'String'>
    readonly isActive: FieldRef<"Patient", 'Boolean'>
    readonly createdAt: FieldRef<"Patient", 'DateTime'>
    readonly updatedAt: FieldRef<"Patient", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Patient findUnique
   */
  export type PatientFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Patient
     */
    select?: PatientSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Patient
     */
    omit?: PatientOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PatientInclude<ExtArgs> | null
    /**
     * Filter, which Patient to fetch.
     */
    where: PatientWhereUniqueInput
  }

  /**
   * Patient findUniqueOrThrow
   */
  export type PatientFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Patient
     */
    select?: PatientSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Patient
     */
    omit?: PatientOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PatientInclude<ExtArgs> | null
    /**
     * Filter, which Patient to fetch.
     */
    where: PatientWhereUniqueInput
  }

  /**
   * Patient findFirst
   */
  export type PatientFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Patient
     */
    select?: PatientSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Patient
     */
    omit?: PatientOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PatientInclude<ExtArgs> | null
    /**
     * Filter, which Patient to fetch.
     */
    where?: PatientWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Patients to fetch.
     */
    orderBy?: PatientOrderByWithRelationInput | PatientOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Patients.
     */
    cursor?: PatientWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Patients from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Patients.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Patients.
     */
    distinct?: PatientScalarFieldEnum | PatientScalarFieldEnum[]
  }

  /**
   * Patient findFirstOrThrow
   */
  export type PatientFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Patient
     */
    select?: PatientSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Patient
     */
    omit?: PatientOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PatientInclude<ExtArgs> | null
    /**
     * Filter, which Patient to fetch.
     */
    where?: PatientWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Patients to fetch.
     */
    orderBy?: PatientOrderByWithRelationInput | PatientOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Patients.
     */
    cursor?: PatientWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Patients from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Patients.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Patients.
     */
    distinct?: PatientScalarFieldEnum | PatientScalarFieldEnum[]
  }

  /**
   * Patient findMany
   */
  export type PatientFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Patient
     */
    select?: PatientSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Patient
     */
    omit?: PatientOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PatientInclude<ExtArgs> | null
    /**
     * Filter, which Patients to fetch.
     */
    where?: PatientWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Patients to fetch.
     */
    orderBy?: PatientOrderByWithRelationInput | PatientOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Patients.
     */
    cursor?: PatientWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Patients from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Patients.
     */
    skip?: number
    distinct?: PatientScalarFieldEnum | PatientScalarFieldEnum[]
  }

  /**
   * Patient create
   */
  export type PatientCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Patient
     */
    select?: PatientSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Patient
     */
    omit?: PatientOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PatientInclude<ExtArgs> | null
    /**
     * The data needed to create a Patient.
     */
    data: XOR<PatientCreateInput, PatientUncheckedCreateInput>
  }

  /**
   * Patient createMany
   */
  export type PatientCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Patients.
     */
    data: PatientCreateManyInput | PatientCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Patient update
   */
  export type PatientUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Patient
     */
    select?: PatientSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Patient
     */
    omit?: PatientOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PatientInclude<ExtArgs> | null
    /**
     * The data needed to update a Patient.
     */
    data: XOR<PatientUpdateInput, PatientUncheckedUpdateInput>
    /**
     * Choose, which Patient to update.
     */
    where: PatientWhereUniqueInput
  }

  /**
   * Patient updateMany
   */
  export type PatientUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Patients.
     */
    data: XOR<PatientUpdateManyMutationInput, PatientUncheckedUpdateManyInput>
    /**
     * Filter which Patients to update
     */
    where?: PatientWhereInput
    /**
     * Limit how many Patients to update.
     */
    limit?: number
  }

  /**
   * Patient upsert
   */
  export type PatientUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Patient
     */
    select?: PatientSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Patient
     */
    omit?: PatientOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PatientInclude<ExtArgs> | null
    /**
     * The filter to search for the Patient to update in case it exists.
     */
    where: PatientWhereUniqueInput
    /**
     * In case the Patient found by the `where` argument doesn't exist, create a new Patient with this data.
     */
    create: XOR<PatientCreateInput, PatientUncheckedCreateInput>
    /**
     * In case the Patient was found with the provided `where` argument, update it with this data.
     */
    update: XOR<PatientUpdateInput, PatientUncheckedUpdateInput>
  }

  /**
   * Patient delete
   */
  export type PatientDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Patient
     */
    select?: PatientSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Patient
     */
    omit?: PatientOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PatientInclude<ExtArgs> | null
    /**
     * Filter which Patient to delete.
     */
    where: PatientWhereUniqueInput
  }

  /**
   * Patient deleteMany
   */
  export type PatientDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Patients to delete
     */
    where?: PatientWhereInput
    /**
     * Limit how many Patients to delete.
     */
    limit?: number
  }

  /**
   * Patient.diagnosticAccount
   */
  export type Patient$diagnosticAccountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DiagnosticAccount
     */
    select?: DiagnosticAccountSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DiagnosticAccount
     */
    omit?: DiagnosticAccountOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DiagnosticAccountInclude<ExtArgs> | null
    where?: DiagnosticAccountWhereInput
  }

  /**
   * Patient without action
   */
  export type PatientDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Patient
     */
    select?: PatientSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Patient
     */
    omit?: PatientOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PatientInclude<ExtArgs> | null
  }


  /**
   * Model Doctor
   */

  export type AggregateDoctor = {
    _count: DoctorCountAggregateOutputType | null
    _avg: DoctorAvgAggregateOutputType | null
    _sum: DoctorSumAggregateOutputType | null
    _min: DoctorMinAggregateOutputType | null
    _max: DoctorMaxAggregateOutputType | null
  }

  export type DoctorAvgAggregateOutputType = {
    experience: number | null
    consultationFee: Decimal | null
  }

  export type DoctorSumAggregateOutputType = {
    experience: number | null
    consultationFee: Decimal | null
  }

  export type DoctorMinAggregateOutputType = {
    id: string | null
    name: string | null
    email: string | null
    phone: string | null
    password: string | null
    specialization: string | null
    experience: number | null
    consultationFee: Decimal | null
    bio: string | null
    isActive: boolean | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type DoctorMaxAggregateOutputType = {
    id: string | null
    name: string | null
    email: string | null
    phone: string | null
    password: string | null
    specialization: string | null
    experience: number | null
    consultationFee: Decimal | null
    bio: string | null
    isActive: boolean | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type DoctorCountAggregateOutputType = {
    id: number
    name: number
    email: number
    phone: number
    password: number
    specialization: number
    experience: number
    consultationFee: number
    bio: number
    isActive: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type DoctorAvgAggregateInputType = {
    experience?: true
    consultationFee?: true
  }

  export type DoctorSumAggregateInputType = {
    experience?: true
    consultationFee?: true
  }

  export type DoctorMinAggregateInputType = {
    id?: true
    name?: true
    email?: true
    phone?: true
    password?: true
    specialization?: true
    experience?: true
    consultationFee?: true
    bio?: true
    isActive?: true
    createdAt?: true
    updatedAt?: true
  }

  export type DoctorMaxAggregateInputType = {
    id?: true
    name?: true
    email?: true
    phone?: true
    password?: true
    specialization?: true
    experience?: true
    consultationFee?: true
    bio?: true
    isActive?: true
    createdAt?: true
    updatedAt?: true
  }

  export type DoctorCountAggregateInputType = {
    id?: true
    name?: true
    email?: true
    phone?: true
    password?: true
    specialization?: true
    experience?: true
    consultationFee?: true
    bio?: true
    isActive?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type DoctorAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Doctor to aggregate.
     */
    where?: DoctorWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Doctors to fetch.
     */
    orderBy?: DoctorOrderByWithRelationInput | DoctorOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: DoctorWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Doctors from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Doctors.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Doctors
    **/
    _count?: true | DoctorCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: DoctorAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: DoctorSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: DoctorMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: DoctorMaxAggregateInputType
  }

  export type GetDoctorAggregateType<T extends DoctorAggregateArgs> = {
        [P in keyof T & keyof AggregateDoctor]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateDoctor[P]>
      : GetScalarType<T[P], AggregateDoctor[P]>
  }




  export type DoctorGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: DoctorWhereInput
    orderBy?: DoctorOrderByWithAggregationInput | DoctorOrderByWithAggregationInput[]
    by: DoctorScalarFieldEnum[] | DoctorScalarFieldEnum
    having?: DoctorScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: DoctorCountAggregateInputType | true
    _avg?: DoctorAvgAggregateInputType
    _sum?: DoctorSumAggregateInputType
    _min?: DoctorMinAggregateInputType
    _max?: DoctorMaxAggregateInputType
  }

  export type DoctorGroupByOutputType = {
    id: string
    name: string
    email: string
    phone: string | null
    password: string
    specialization: string
    experience: number | null
    consultationFee: Decimal | null
    bio: string | null
    isActive: boolean
    createdAt: Date
    updatedAt: Date
    _count: DoctorCountAggregateOutputType | null
    _avg: DoctorAvgAggregateOutputType | null
    _sum: DoctorSumAggregateOutputType | null
    _min: DoctorMinAggregateOutputType | null
    _max: DoctorMaxAggregateOutputType | null
  }

  type GetDoctorGroupByPayload<T extends DoctorGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<DoctorGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof DoctorGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], DoctorGroupByOutputType[P]>
            : GetScalarType<T[P], DoctorGroupByOutputType[P]>
        }
      >
    >


  export type DoctorSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    email?: boolean
    phone?: boolean
    password?: boolean
    specialization?: boolean
    experience?: boolean
    consultationFee?: boolean
    bio?: boolean
    isActive?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["doctor"]>



  export type DoctorSelectScalar = {
    id?: boolean
    name?: boolean
    email?: boolean
    phone?: boolean
    password?: boolean
    specialization?: boolean
    experience?: boolean
    consultationFee?: boolean
    bio?: boolean
    isActive?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type DoctorOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "name" | "email" | "phone" | "password" | "specialization" | "experience" | "consultationFee" | "bio" | "isActive" | "createdAt" | "updatedAt", ExtArgs["result"]["doctor"]>

  export type $DoctorPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Doctor"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: string
      name: string
      email: string
      phone: string | null
      password: string
      specialization: string
      experience: number | null
      consultationFee: Prisma.Decimal | null
      bio: string | null
      isActive: boolean
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["doctor"]>
    composites: {}
  }

  type DoctorGetPayload<S extends boolean | null | undefined | DoctorDefaultArgs> = $Result.GetResult<Prisma.$DoctorPayload, S>

  type DoctorCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<DoctorFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: DoctorCountAggregateInputType | true
    }

  export interface DoctorDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Doctor'], meta: { name: 'Doctor' } }
    /**
     * Find zero or one Doctor that matches the filter.
     * @param {DoctorFindUniqueArgs} args - Arguments to find a Doctor
     * @example
     * // Get one Doctor
     * const doctor = await prisma.doctor.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends DoctorFindUniqueArgs>(args: SelectSubset<T, DoctorFindUniqueArgs<ExtArgs>>): Prisma__DoctorClient<$Result.GetResult<Prisma.$DoctorPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Doctor that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {DoctorFindUniqueOrThrowArgs} args - Arguments to find a Doctor
     * @example
     * // Get one Doctor
     * const doctor = await prisma.doctor.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends DoctorFindUniqueOrThrowArgs>(args: SelectSubset<T, DoctorFindUniqueOrThrowArgs<ExtArgs>>): Prisma__DoctorClient<$Result.GetResult<Prisma.$DoctorPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Doctor that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DoctorFindFirstArgs} args - Arguments to find a Doctor
     * @example
     * // Get one Doctor
     * const doctor = await prisma.doctor.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends DoctorFindFirstArgs>(args?: SelectSubset<T, DoctorFindFirstArgs<ExtArgs>>): Prisma__DoctorClient<$Result.GetResult<Prisma.$DoctorPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Doctor that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DoctorFindFirstOrThrowArgs} args - Arguments to find a Doctor
     * @example
     * // Get one Doctor
     * const doctor = await prisma.doctor.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends DoctorFindFirstOrThrowArgs>(args?: SelectSubset<T, DoctorFindFirstOrThrowArgs<ExtArgs>>): Prisma__DoctorClient<$Result.GetResult<Prisma.$DoctorPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Doctors that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DoctorFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Doctors
     * const doctors = await prisma.doctor.findMany()
     * 
     * // Get first 10 Doctors
     * const doctors = await prisma.doctor.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const doctorWithIdOnly = await prisma.doctor.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends DoctorFindManyArgs>(args?: SelectSubset<T, DoctorFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$DoctorPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Doctor.
     * @param {DoctorCreateArgs} args - Arguments to create a Doctor.
     * @example
     * // Create one Doctor
     * const Doctor = await prisma.doctor.create({
     *   data: {
     *     // ... data to create a Doctor
     *   }
     * })
     * 
     */
    create<T extends DoctorCreateArgs>(args: SelectSubset<T, DoctorCreateArgs<ExtArgs>>): Prisma__DoctorClient<$Result.GetResult<Prisma.$DoctorPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Doctors.
     * @param {DoctorCreateManyArgs} args - Arguments to create many Doctors.
     * @example
     * // Create many Doctors
     * const doctor = await prisma.doctor.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends DoctorCreateManyArgs>(args?: SelectSubset<T, DoctorCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Doctor.
     * @param {DoctorDeleteArgs} args - Arguments to delete one Doctor.
     * @example
     * // Delete one Doctor
     * const Doctor = await prisma.doctor.delete({
     *   where: {
     *     // ... filter to delete one Doctor
     *   }
     * })
     * 
     */
    delete<T extends DoctorDeleteArgs>(args: SelectSubset<T, DoctorDeleteArgs<ExtArgs>>): Prisma__DoctorClient<$Result.GetResult<Prisma.$DoctorPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Doctor.
     * @param {DoctorUpdateArgs} args - Arguments to update one Doctor.
     * @example
     * // Update one Doctor
     * const doctor = await prisma.doctor.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends DoctorUpdateArgs>(args: SelectSubset<T, DoctorUpdateArgs<ExtArgs>>): Prisma__DoctorClient<$Result.GetResult<Prisma.$DoctorPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Doctors.
     * @param {DoctorDeleteManyArgs} args - Arguments to filter Doctors to delete.
     * @example
     * // Delete a few Doctors
     * const { count } = await prisma.doctor.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends DoctorDeleteManyArgs>(args?: SelectSubset<T, DoctorDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Doctors.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DoctorUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Doctors
     * const doctor = await prisma.doctor.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends DoctorUpdateManyArgs>(args: SelectSubset<T, DoctorUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Doctor.
     * @param {DoctorUpsertArgs} args - Arguments to update or create a Doctor.
     * @example
     * // Update or create a Doctor
     * const doctor = await prisma.doctor.upsert({
     *   create: {
     *     // ... data to create a Doctor
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Doctor we want to update
     *   }
     * })
     */
    upsert<T extends DoctorUpsertArgs>(args: SelectSubset<T, DoctorUpsertArgs<ExtArgs>>): Prisma__DoctorClient<$Result.GetResult<Prisma.$DoctorPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Doctors.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DoctorCountArgs} args - Arguments to filter Doctors to count.
     * @example
     * // Count the number of Doctors
     * const count = await prisma.doctor.count({
     *   where: {
     *     // ... the filter for the Doctors we want to count
     *   }
     * })
    **/
    count<T extends DoctorCountArgs>(
      args?: Subset<T, DoctorCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], DoctorCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Doctor.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DoctorAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends DoctorAggregateArgs>(args: Subset<T, DoctorAggregateArgs>): Prisma.PrismaPromise<GetDoctorAggregateType<T>>

    /**
     * Group by Doctor.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DoctorGroupByArgs} args - Group by arguments.
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
      T extends DoctorGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: DoctorGroupByArgs['orderBy'] }
        : { orderBy?: DoctorGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, DoctorGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetDoctorGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Doctor model
   */
  readonly fields: DoctorFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Doctor.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__DoctorClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
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
   * Fields of the Doctor model
   */
  interface DoctorFieldRefs {
    readonly id: FieldRef<"Doctor", 'String'>
    readonly name: FieldRef<"Doctor", 'String'>
    readonly email: FieldRef<"Doctor", 'String'>
    readonly phone: FieldRef<"Doctor", 'String'>
    readonly password: FieldRef<"Doctor", 'String'>
    readonly specialization: FieldRef<"Doctor", 'String'>
    readonly experience: FieldRef<"Doctor", 'Int'>
    readonly consultationFee: FieldRef<"Doctor", 'Decimal'>
    readonly bio: FieldRef<"Doctor", 'String'>
    readonly isActive: FieldRef<"Doctor", 'Boolean'>
    readonly createdAt: FieldRef<"Doctor", 'DateTime'>
    readonly updatedAt: FieldRef<"Doctor", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Doctor findUnique
   */
  export type DoctorFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Doctor
     */
    select?: DoctorSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Doctor
     */
    omit?: DoctorOmit<ExtArgs> | null
    /**
     * Filter, which Doctor to fetch.
     */
    where: DoctorWhereUniqueInput
  }

  /**
   * Doctor findUniqueOrThrow
   */
  export type DoctorFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Doctor
     */
    select?: DoctorSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Doctor
     */
    omit?: DoctorOmit<ExtArgs> | null
    /**
     * Filter, which Doctor to fetch.
     */
    where: DoctorWhereUniqueInput
  }

  /**
   * Doctor findFirst
   */
  export type DoctorFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Doctor
     */
    select?: DoctorSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Doctor
     */
    omit?: DoctorOmit<ExtArgs> | null
    /**
     * Filter, which Doctor to fetch.
     */
    where?: DoctorWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Doctors to fetch.
     */
    orderBy?: DoctorOrderByWithRelationInput | DoctorOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Doctors.
     */
    cursor?: DoctorWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Doctors from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Doctors.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Doctors.
     */
    distinct?: DoctorScalarFieldEnum | DoctorScalarFieldEnum[]
  }

  /**
   * Doctor findFirstOrThrow
   */
  export type DoctorFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Doctor
     */
    select?: DoctorSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Doctor
     */
    omit?: DoctorOmit<ExtArgs> | null
    /**
     * Filter, which Doctor to fetch.
     */
    where?: DoctorWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Doctors to fetch.
     */
    orderBy?: DoctorOrderByWithRelationInput | DoctorOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Doctors.
     */
    cursor?: DoctorWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Doctors from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Doctors.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Doctors.
     */
    distinct?: DoctorScalarFieldEnum | DoctorScalarFieldEnum[]
  }

  /**
   * Doctor findMany
   */
  export type DoctorFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Doctor
     */
    select?: DoctorSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Doctor
     */
    omit?: DoctorOmit<ExtArgs> | null
    /**
     * Filter, which Doctors to fetch.
     */
    where?: DoctorWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Doctors to fetch.
     */
    orderBy?: DoctorOrderByWithRelationInput | DoctorOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Doctors.
     */
    cursor?: DoctorWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Doctors from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Doctors.
     */
    skip?: number
    distinct?: DoctorScalarFieldEnum | DoctorScalarFieldEnum[]
  }

  /**
   * Doctor create
   */
  export type DoctorCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Doctor
     */
    select?: DoctorSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Doctor
     */
    omit?: DoctorOmit<ExtArgs> | null
    /**
     * The data needed to create a Doctor.
     */
    data: XOR<DoctorCreateInput, DoctorUncheckedCreateInput>
  }

  /**
   * Doctor createMany
   */
  export type DoctorCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Doctors.
     */
    data: DoctorCreateManyInput | DoctorCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Doctor update
   */
  export type DoctorUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Doctor
     */
    select?: DoctorSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Doctor
     */
    omit?: DoctorOmit<ExtArgs> | null
    /**
     * The data needed to update a Doctor.
     */
    data: XOR<DoctorUpdateInput, DoctorUncheckedUpdateInput>
    /**
     * Choose, which Doctor to update.
     */
    where: DoctorWhereUniqueInput
  }

  /**
   * Doctor updateMany
   */
  export type DoctorUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Doctors.
     */
    data: XOR<DoctorUpdateManyMutationInput, DoctorUncheckedUpdateManyInput>
    /**
     * Filter which Doctors to update
     */
    where?: DoctorWhereInput
    /**
     * Limit how many Doctors to update.
     */
    limit?: number
  }

  /**
   * Doctor upsert
   */
  export type DoctorUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Doctor
     */
    select?: DoctorSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Doctor
     */
    omit?: DoctorOmit<ExtArgs> | null
    /**
     * The filter to search for the Doctor to update in case it exists.
     */
    where: DoctorWhereUniqueInput
    /**
     * In case the Doctor found by the `where` argument doesn't exist, create a new Doctor with this data.
     */
    create: XOR<DoctorCreateInput, DoctorUncheckedCreateInput>
    /**
     * In case the Doctor was found with the provided `where` argument, update it with this data.
     */
    update: XOR<DoctorUpdateInput, DoctorUncheckedUpdateInput>
  }

  /**
   * Doctor delete
   */
  export type DoctorDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Doctor
     */
    select?: DoctorSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Doctor
     */
    omit?: DoctorOmit<ExtArgs> | null
    /**
     * Filter which Doctor to delete.
     */
    where: DoctorWhereUniqueInput
  }

  /**
   * Doctor deleteMany
   */
  export type DoctorDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Doctors to delete
     */
    where?: DoctorWhereInput
    /**
     * Limit how many Doctors to delete.
     */
    limit?: number
  }

  /**
   * Doctor without action
   */
  export type DoctorDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Doctor
     */
    select?: DoctorSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Doctor
     */
    omit?: DoctorOmit<ExtArgs> | null
  }


  /**
   * Model DiagnosticAccount
   */

  export type AggregateDiagnosticAccount = {
    _count: DiagnosticAccountCountAggregateOutputType | null
    _min: DiagnosticAccountMinAggregateOutputType | null
    _max: DiagnosticAccountMaxAggregateOutputType | null
  }

  export type DiagnosticAccountMinAggregateOutputType = {
    id: string | null
    name: string | null
    email: string | null
    phone: string | null
    password: string | null
    centerName: string | null
    slug: string | null
    logo: string | null
    address: string | null
    isActive: boolean | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type DiagnosticAccountMaxAggregateOutputType = {
    id: string | null
    name: string | null
    email: string | null
    phone: string | null
    password: string | null
    centerName: string | null
    slug: string | null
    logo: string | null
    address: string | null
    isActive: boolean | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type DiagnosticAccountCountAggregateOutputType = {
    id: number
    name: number
    email: number
    phone: number
    password: number
    centerName: number
    slug: number
    logo: number
    address: number
    isActive: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type DiagnosticAccountMinAggregateInputType = {
    id?: true
    name?: true
    email?: true
    phone?: true
    password?: true
    centerName?: true
    slug?: true
    logo?: true
    address?: true
    isActive?: true
    createdAt?: true
    updatedAt?: true
  }

  export type DiagnosticAccountMaxAggregateInputType = {
    id?: true
    name?: true
    email?: true
    phone?: true
    password?: true
    centerName?: true
    slug?: true
    logo?: true
    address?: true
    isActive?: true
    createdAt?: true
    updatedAt?: true
  }

  export type DiagnosticAccountCountAggregateInputType = {
    id?: true
    name?: true
    email?: true
    phone?: true
    password?: true
    centerName?: true
    slug?: true
    logo?: true
    address?: true
    isActive?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type DiagnosticAccountAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which DiagnosticAccount to aggregate.
     */
    where?: DiagnosticAccountWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of DiagnosticAccounts to fetch.
     */
    orderBy?: DiagnosticAccountOrderByWithRelationInput | DiagnosticAccountOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: DiagnosticAccountWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` DiagnosticAccounts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` DiagnosticAccounts.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned DiagnosticAccounts
    **/
    _count?: true | DiagnosticAccountCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: DiagnosticAccountMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: DiagnosticAccountMaxAggregateInputType
  }

  export type GetDiagnosticAccountAggregateType<T extends DiagnosticAccountAggregateArgs> = {
        [P in keyof T & keyof AggregateDiagnosticAccount]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateDiagnosticAccount[P]>
      : GetScalarType<T[P], AggregateDiagnosticAccount[P]>
  }




  export type DiagnosticAccountGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: DiagnosticAccountWhereInput
    orderBy?: DiagnosticAccountOrderByWithAggregationInput | DiagnosticAccountOrderByWithAggregationInput[]
    by: DiagnosticAccountScalarFieldEnum[] | DiagnosticAccountScalarFieldEnum
    having?: DiagnosticAccountScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: DiagnosticAccountCountAggregateInputType | true
    _min?: DiagnosticAccountMinAggregateInputType
    _max?: DiagnosticAccountMaxAggregateInputType
  }

  export type DiagnosticAccountGroupByOutputType = {
    id: string
    name: string
    email: string
    phone: string | null
    password: string
    centerName: string
    slug: string
    logo: string | null
    address: string | null
    isActive: boolean
    createdAt: Date
    updatedAt: Date
    _count: DiagnosticAccountCountAggregateOutputType | null
    _min: DiagnosticAccountMinAggregateOutputType | null
    _max: DiagnosticAccountMaxAggregateOutputType | null
  }

  type GetDiagnosticAccountGroupByPayload<T extends DiagnosticAccountGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<DiagnosticAccountGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof DiagnosticAccountGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], DiagnosticAccountGroupByOutputType[P]>
            : GetScalarType<T[P], DiagnosticAccountGroupByOutputType[P]>
        }
      >
    >


  export type DiagnosticAccountSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    email?: boolean
    phone?: boolean
    password?: boolean
    centerName?: boolean
    slug?: boolean
    logo?: boolean
    address?: boolean
    isActive?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    childUsers?: boolean | DiagnosticAccount$childUsersArgs<ExtArgs>
    roles?: boolean | DiagnosticAccount$rolesArgs<ExtArgs>
    patients?: boolean | DiagnosticAccount$patientsArgs<ExtArgs>
    _count?: boolean | DiagnosticAccountCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["diagnosticAccount"]>



  export type DiagnosticAccountSelectScalar = {
    id?: boolean
    name?: boolean
    email?: boolean
    phone?: boolean
    password?: boolean
    centerName?: boolean
    slug?: boolean
    logo?: boolean
    address?: boolean
    isActive?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type DiagnosticAccountOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "name" | "email" | "phone" | "password" | "centerName" | "slug" | "logo" | "address" | "isActive" | "createdAt" | "updatedAt", ExtArgs["result"]["diagnosticAccount"]>
  export type DiagnosticAccountInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    childUsers?: boolean | DiagnosticAccount$childUsersArgs<ExtArgs>
    roles?: boolean | DiagnosticAccount$rolesArgs<ExtArgs>
    patients?: boolean | DiagnosticAccount$patientsArgs<ExtArgs>
    _count?: boolean | DiagnosticAccountCountOutputTypeDefaultArgs<ExtArgs>
  }

  export type $DiagnosticAccountPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "DiagnosticAccount"
    objects: {
      childUsers: Prisma.$DiagnosticChildUserPayload<ExtArgs>[]
      roles: Prisma.$RolePayload<ExtArgs>[]
      patients: Prisma.$PatientPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      name: string
      email: string
      phone: string | null
      password: string
      centerName: string
      slug: string
      logo: string | null
      address: string | null
      isActive: boolean
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["diagnosticAccount"]>
    composites: {}
  }

  type DiagnosticAccountGetPayload<S extends boolean | null | undefined | DiagnosticAccountDefaultArgs> = $Result.GetResult<Prisma.$DiagnosticAccountPayload, S>

  type DiagnosticAccountCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<DiagnosticAccountFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: DiagnosticAccountCountAggregateInputType | true
    }

  export interface DiagnosticAccountDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['DiagnosticAccount'], meta: { name: 'DiagnosticAccount' } }
    /**
     * Find zero or one DiagnosticAccount that matches the filter.
     * @param {DiagnosticAccountFindUniqueArgs} args - Arguments to find a DiagnosticAccount
     * @example
     * // Get one DiagnosticAccount
     * const diagnosticAccount = await prisma.diagnosticAccount.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends DiagnosticAccountFindUniqueArgs>(args: SelectSubset<T, DiagnosticAccountFindUniqueArgs<ExtArgs>>): Prisma__DiagnosticAccountClient<$Result.GetResult<Prisma.$DiagnosticAccountPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one DiagnosticAccount that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {DiagnosticAccountFindUniqueOrThrowArgs} args - Arguments to find a DiagnosticAccount
     * @example
     * // Get one DiagnosticAccount
     * const diagnosticAccount = await prisma.diagnosticAccount.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends DiagnosticAccountFindUniqueOrThrowArgs>(args: SelectSubset<T, DiagnosticAccountFindUniqueOrThrowArgs<ExtArgs>>): Prisma__DiagnosticAccountClient<$Result.GetResult<Prisma.$DiagnosticAccountPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first DiagnosticAccount that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DiagnosticAccountFindFirstArgs} args - Arguments to find a DiagnosticAccount
     * @example
     * // Get one DiagnosticAccount
     * const diagnosticAccount = await prisma.diagnosticAccount.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends DiagnosticAccountFindFirstArgs>(args?: SelectSubset<T, DiagnosticAccountFindFirstArgs<ExtArgs>>): Prisma__DiagnosticAccountClient<$Result.GetResult<Prisma.$DiagnosticAccountPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first DiagnosticAccount that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DiagnosticAccountFindFirstOrThrowArgs} args - Arguments to find a DiagnosticAccount
     * @example
     * // Get one DiagnosticAccount
     * const diagnosticAccount = await prisma.diagnosticAccount.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends DiagnosticAccountFindFirstOrThrowArgs>(args?: SelectSubset<T, DiagnosticAccountFindFirstOrThrowArgs<ExtArgs>>): Prisma__DiagnosticAccountClient<$Result.GetResult<Prisma.$DiagnosticAccountPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more DiagnosticAccounts that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DiagnosticAccountFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all DiagnosticAccounts
     * const diagnosticAccounts = await prisma.diagnosticAccount.findMany()
     * 
     * // Get first 10 DiagnosticAccounts
     * const diagnosticAccounts = await prisma.diagnosticAccount.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const diagnosticAccountWithIdOnly = await prisma.diagnosticAccount.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends DiagnosticAccountFindManyArgs>(args?: SelectSubset<T, DiagnosticAccountFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$DiagnosticAccountPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a DiagnosticAccount.
     * @param {DiagnosticAccountCreateArgs} args - Arguments to create a DiagnosticAccount.
     * @example
     * // Create one DiagnosticAccount
     * const DiagnosticAccount = await prisma.diagnosticAccount.create({
     *   data: {
     *     // ... data to create a DiagnosticAccount
     *   }
     * })
     * 
     */
    create<T extends DiagnosticAccountCreateArgs>(args: SelectSubset<T, DiagnosticAccountCreateArgs<ExtArgs>>): Prisma__DiagnosticAccountClient<$Result.GetResult<Prisma.$DiagnosticAccountPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many DiagnosticAccounts.
     * @param {DiagnosticAccountCreateManyArgs} args - Arguments to create many DiagnosticAccounts.
     * @example
     * // Create many DiagnosticAccounts
     * const diagnosticAccount = await prisma.diagnosticAccount.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends DiagnosticAccountCreateManyArgs>(args?: SelectSubset<T, DiagnosticAccountCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a DiagnosticAccount.
     * @param {DiagnosticAccountDeleteArgs} args - Arguments to delete one DiagnosticAccount.
     * @example
     * // Delete one DiagnosticAccount
     * const DiagnosticAccount = await prisma.diagnosticAccount.delete({
     *   where: {
     *     // ... filter to delete one DiagnosticAccount
     *   }
     * })
     * 
     */
    delete<T extends DiagnosticAccountDeleteArgs>(args: SelectSubset<T, DiagnosticAccountDeleteArgs<ExtArgs>>): Prisma__DiagnosticAccountClient<$Result.GetResult<Prisma.$DiagnosticAccountPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one DiagnosticAccount.
     * @param {DiagnosticAccountUpdateArgs} args - Arguments to update one DiagnosticAccount.
     * @example
     * // Update one DiagnosticAccount
     * const diagnosticAccount = await prisma.diagnosticAccount.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends DiagnosticAccountUpdateArgs>(args: SelectSubset<T, DiagnosticAccountUpdateArgs<ExtArgs>>): Prisma__DiagnosticAccountClient<$Result.GetResult<Prisma.$DiagnosticAccountPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more DiagnosticAccounts.
     * @param {DiagnosticAccountDeleteManyArgs} args - Arguments to filter DiagnosticAccounts to delete.
     * @example
     * // Delete a few DiagnosticAccounts
     * const { count } = await prisma.diagnosticAccount.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends DiagnosticAccountDeleteManyArgs>(args?: SelectSubset<T, DiagnosticAccountDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more DiagnosticAccounts.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DiagnosticAccountUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many DiagnosticAccounts
     * const diagnosticAccount = await prisma.diagnosticAccount.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends DiagnosticAccountUpdateManyArgs>(args: SelectSubset<T, DiagnosticAccountUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one DiagnosticAccount.
     * @param {DiagnosticAccountUpsertArgs} args - Arguments to update or create a DiagnosticAccount.
     * @example
     * // Update or create a DiagnosticAccount
     * const diagnosticAccount = await prisma.diagnosticAccount.upsert({
     *   create: {
     *     // ... data to create a DiagnosticAccount
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the DiagnosticAccount we want to update
     *   }
     * })
     */
    upsert<T extends DiagnosticAccountUpsertArgs>(args: SelectSubset<T, DiagnosticAccountUpsertArgs<ExtArgs>>): Prisma__DiagnosticAccountClient<$Result.GetResult<Prisma.$DiagnosticAccountPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of DiagnosticAccounts.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DiagnosticAccountCountArgs} args - Arguments to filter DiagnosticAccounts to count.
     * @example
     * // Count the number of DiagnosticAccounts
     * const count = await prisma.diagnosticAccount.count({
     *   where: {
     *     // ... the filter for the DiagnosticAccounts we want to count
     *   }
     * })
    **/
    count<T extends DiagnosticAccountCountArgs>(
      args?: Subset<T, DiagnosticAccountCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], DiagnosticAccountCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a DiagnosticAccount.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DiagnosticAccountAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends DiagnosticAccountAggregateArgs>(args: Subset<T, DiagnosticAccountAggregateArgs>): Prisma.PrismaPromise<GetDiagnosticAccountAggregateType<T>>

    /**
     * Group by DiagnosticAccount.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DiagnosticAccountGroupByArgs} args - Group by arguments.
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
      T extends DiagnosticAccountGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: DiagnosticAccountGroupByArgs['orderBy'] }
        : { orderBy?: DiagnosticAccountGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, DiagnosticAccountGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetDiagnosticAccountGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the DiagnosticAccount model
   */
  readonly fields: DiagnosticAccountFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for DiagnosticAccount.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__DiagnosticAccountClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    childUsers<T extends DiagnosticAccount$childUsersArgs<ExtArgs> = {}>(args?: Subset<T, DiagnosticAccount$childUsersArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$DiagnosticChildUserPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    roles<T extends DiagnosticAccount$rolesArgs<ExtArgs> = {}>(args?: Subset<T, DiagnosticAccount$rolesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$RolePayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    patients<T extends DiagnosticAccount$patientsArgs<ExtArgs> = {}>(args?: Subset<T, DiagnosticAccount$patientsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PatientPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the DiagnosticAccount model
   */
  interface DiagnosticAccountFieldRefs {
    readonly id: FieldRef<"DiagnosticAccount", 'String'>
    readonly name: FieldRef<"DiagnosticAccount", 'String'>
    readonly email: FieldRef<"DiagnosticAccount", 'String'>
    readonly phone: FieldRef<"DiagnosticAccount", 'String'>
    readonly password: FieldRef<"DiagnosticAccount", 'String'>
    readonly centerName: FieldRef<"DiagnosticAccount", 'String'>
    readonly slug: FieldRef<"DiagnosticAccount", 'String'>
    readonly logo: FieldRef<"DiagnosticAccount", 'String'>
    readonly address: FieldRef<"DiagnosticAccount", 'String'>
    readonly isActive: FieldRef<"DiagnosticAccount", 'Boolean'>
    readonly createdAt: FieldRef<"DiagnosticAccount", 'DateTime'>
    readonly updatedAt: FieldRef<"DiagnosticAccount", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * DiagnosticAccount findUnique
   */
  export type DiagnosticAccountFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DiagnosticAccount
     */
    select?: DiagnosticAccountSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DiagnosticAccount
     */
    omit?: DiagnosticAccountOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DiagnosticAccountInclude<ExtArgs> | null
    /**
     * Filter, which DiagnosticAccount to fetch.
     */
    where: DiagnosticAccountWhereUniqueInput
  }

  /**
   * DiagnosticAccount findUniqueOrThrow
   */
  export type DiagnosticAccountFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DiagnosticAccount
     */
    select?: DiagnosticAccountSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DiagnosticAccount
     */
    omit?: DiagnosticAccountOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DiagnosticAccountInclude<ExtArgs> | null
    /**
     * Filter, which DiagnosticAccount to fetch.
     */
    where: DiagnosticAccountWhereUniqueInput
  }

  /**
   * DiagnosticAccount findFirst
   */
  export type DiagnosticAccountFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DiagnosticAccount
     */
    select?: DiagnosticAccountSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DiagnosticAccount
     */
    omit?: DiagnosticAccountOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DiagnosticAccountInclude<ExtArgs> | null
    /**
     * Filter, which DiagnosticAccount to fetch.
     */
    where?: DiagnosticAccountWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of DiagnosticAccounts to fetch.
     */
    orderBy?: DiagnosticAccountOrderByWithRelationInput | DiagnosticAccountOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for DiagnosticAccounts.
     */
    cursor?: DiagnosticAccountWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` DiagnosticAccounts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` DiagnosticAccounts.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of DiagnosticAccounts.
     */
    distinct?: DiagnosticAccountScalarFieldEnum | DiagnosticAccountScalarFieldEnum[]
  }

  /**
   * DiagnosticAccount findFirstOrThrow
   */
  export type DiagnosticAccountFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DiagnosticAccount
     */
    select?: DiagnosticAccountSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DiagnosticAccount
     */
    omit?: DiagnosticAccountOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DiagnosticAccountInclude<ExtArgs> | null
    /**
     * Filter, which DiagnosticAccount to fetch.
     */
    where?: DiagnosticAccountWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of DiagnosticAccounts to fetch.
     */
    orderBy?: DiagnosticAccountOrderByWithRelationInput | DiagnosticAccountOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for DiagnosticAccounts.
     */
    cursor?: DiagnosticAccountWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` DiagnosticAccounts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` DiagnosticAccounts.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of DiagnosticAccounts.
     */
    distinct?: DiagnosticAccountScalarFieldEnum | DiagnosticAccountScalarFieldEnum[]
  }

  /**
   * DiagnosticAccount findMany
   */
  export type DiagnosticAccountFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DiagnosticAccount
     */
    select?: DiagnosticAccountSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DiagnosticAccount
     */
    omit?: DiagnosticAccountOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DiagnosticAccountInclude<ExtArgs> | null
    /**
     * Filter, which DiagnosticAccounts to fetch.
     */
    where?: DiagnosticAccountWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of DiagnosticAccounts to fetch.
     */
    orderBy?: DiagnosticAccountOrderByWithRelationInput | DiagnosticAccountOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing DiagnosticAccounts.
     */
    cursor?: DiagnosticAccountWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` DiagnosticAccounts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` DiagnosticAccounts.
     */
    skip?: number
    distinct?: DiagnosticAccountScalarFieldEnum | DiagnosticAccountScalarFieldEnum[]
  }

  /**
   * DiagnosticAccount create
   */
  export type DiagnosticAccountCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DiagnosticAccount
     */
    select?: DiagnosticAccountSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DiagnosticAccount
     */
    omit?: DiagnosticAccountOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DiagnosticAccountInclude<ExtArgs> | null
    /**
     * The data needed to create a DiagnosticAccount.
     */
    data: XOR<DiagnosticAccountCreateInput, DiagnosticAccountUncheckedCreateInput>
  }

  /**
   * DiagnosticAccount createMany
   */
  export type DiagnosticAccountCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many DiagnosticAccounts.
     */
    data: DiagnosticAccountCreateManyInput | DiagnosticAccountCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * DiagnosticAccount update
   */
  export type DiagnosticAccountUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DiagnosticAccount
     */
    select?: DiagnosticAccountSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DiagnosticAccount
     */
    omit?: DiagnosticAccountOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DiagnosticAccountInclude<ExtArgs> | null
    /**
     * The data needed to update a DiagnosticAccount.
     */
    data: XOR<DiagnosticAccountUpdateInput, DiagnosticAccountUncheckedUpdateInput>
    /**
     * Choose, which DiagnosticAccount to update.
     */
    where: DiagnosticAccountWhereUniqueInput
  }

  /**
   * DiagnosticAccount updateMany
   */
  export type DiagnosticAccountUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update DiagnosticAccounts.
     */
    data: XOR<DiagnosticAccountUpdateManyMutationInput, DiagnosticAccountUncheckedUpdateManyInput>
    /**
     * Filter which DiagnosticAccounts to update
     */
    where?: DiagnosticAccountWhereInput
    /**
     * Limit how many DiagnosticAccounts to update.
     */
    limit?: number
  }

  /**
   * DiagnosticAccount upsert
   */
  export type DiagnosticAccountUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DiagnosticAccount
     */
    select?: DiagnosticAccountSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DiagnosticAccount
     */
    omit?: DiagnosticAccountOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DiagnosticAccountInclude<ExtArgs> | null
    /**
     * The filter to search for the DiagnosticAccount to update in case it exists.
     */
    where: DiagnosticAccountWhereUniqueInput
    /**
     * In case the DiagnosticAccount found by the `where` argument doesn't exist, create a new DiagnosticAccount with this data.
     */
    create: XOR<DiagnosticAccountCreateInput, DiagnosticAccountUncheckedCreateInput>
    /**
     * In case the DiagnosticAccount was found with the provided `where` argument, update it with this data.
     */
    update: XOR<DiagnosticAccountUpdateInput, DiagnosticAccountUncheckedUpdateInput>
  }

  /**
   * DiagnosticAccount delete
   */
  export type DiagnosticAccountDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DiagnosticAccount
     */
    select?: DiagnosticAccountSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DiagnosticAccount
     */
    omit?: DiagnosticAccountOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DiagnosticAccountInclude<ExtArgs> | null
    /**
     * Filter which DiagnosticAccount to delete.
     */
    where: DiagnosticAccountWhereUniqueInput
  }

  /**
   * DiagnosticAccount deleteMany
   */
  export type DiagnosticAccountDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which DiagnosticAccounts to delete
     */
    where?: DiagnosticAccountWhereInput
    /**
     * Limit how many DiagnosticAccounts to delete.
     */
    limit?: number
  }

  /**
   * DiagnosticAccount.childUsers
   */
  export type DiagnosticAccount$childUsersArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DiagnosticChildUser
     */
    select?: DiagnosticChildUserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DiagnosticChildUser
     */
    omit?: DiagnosticChildUserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DiagnosticChildUserInclude<ExtArgs> | null
    where?: DiagnosticChildUserWhereInput
    orderBy?: DiagnosticChildUserOrderByWithRelationInput | DiagnosticChildUserOrderByWithRelationInput[]
    cursor?: DiagnosticChildUserWhereUniqueInput
    take?: number
    skip?: number
    distinct?: DiagnosticChildUserScalarFieldEnum | DiagnosticChildUserScalarFieldEnum[]
  }

  /**
   * DiagnosticAccount.roles
   */
  export type DiagnosticAccount$rolesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Role
     */
    select?: RoleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Role
     */
    omit?: RoleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RoleInclude<ExtArgs> | null
    where?: RoleWhereInput
    orderBy?: RoleOrderByWithRelationInput | RoleOrderByWithRelationInput[]
    cursor?: RoleWhereUniqueInput
    take?: number
    skip?: number
    distinct?: RoleScalarFieldEnum | RoleScalarFieldEnum[]
  }

  /**
   * DiagnosticAccount.patients
   */
  export type DiagnosticAccount$patientsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Patient
     */
    select?: PatientSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Patient
     */
    omit?: PatientOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PatientInclude<ExtArgs> | null
    where?: PatientWhereInput
    orderBy?: PatientOrderByWithRelationInput | PatientOrderByWithRelationInput[]
    cursor?: PatientWhereUniqueInput
    take?: number
    skip?: number
    distinct?: PatientScalarFieldEnum | PatientScalarFieldEnum[]
  }

  /**
   * DiagnosticAccount without action
   */
  export type DiagnosticAccountDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DiagnosticAccount
     */
    select?: DiagnosticAccountSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DiagnosticAccount
     */
    omit?: DiagnosticAccountOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DiagnosticAccountInclude<ExtArgs> | null
  }


  /**
   * Model DiagnosticChildUser
   */

  export type AggregateDiagnosticChildUser = {
    _count: DiagnosticChildUserCountAggregateOutputType | null
    _min: DiagnosticChildUserMinAggregateOutputType | null
    _max: DiagnosticChildUserMaxAggregateOutputType | null
  }

  export type DiagnosticChildUserMinAggregateOutputType = {
    id: string | null
    DiagnosticAccountId: string | null
    name: string | null
    email: string | null
    phone: string | null
    password: string | null
    isActive: boolean | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type DiagnosticChildUserMaxAggregateOutputType = {
    id: string | null
    DiagnosticAccountId: string | null
    name: string | null
    email: string | null
    phone: string | null
    password: string | null
    isActive: boolean | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type DiagnosticChildUserCountAggregateOutputType = {
    id: number
    DiagnosticAccountId: number
    name: number
    email: number
    phone: number
    password: number
    isActive: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type DiagnosticChildUserMinAggregateInputType = {
    id?: true
    DiagnosticAccountId?: true
    name?: true
    email?: true
    phone?: true
    password?: true
    isActive?: true
    createdAt?: true
    updatedAt?: true
  }

  export type DiagnosticChildUserMaxAggregateInputType = {
    id?: true
    DiagnosticAccountId?: true
    name?: true
    email?: true
    phone?: true
    password?: true
    isActive?: true
    createdAt?: true
    updatedAt?: true
  }

  export type DiagnosticChildUserCountAggregateInputType = {
    id?: true
    DiagnosticAccountId?: true
    name?: true
    email?: true
    phone?: true
    password?: true
    isActive?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type DiagnosticChildUserAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which DiagnosticChildUser to aggregate.
     */
    where?: DiagnosticChildUserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of DiagnosticChildUsers to fetch.
     */
    orderBy?: DiagnosticChildUserOrderByWithRelationInput | DiagnosticChildUserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: DiagnosticChildUserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` DiagnosticChildUsers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` DiagnosticChildUsers.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned DiagnosticChildUsers
    **/
    _count?: true | DiagnosticChildUserCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: DiagnosticChildUserMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: DiagnosticChildUserMaxAggregateInputType
  }

  export type GetDiagnosticChildUserAggregateType<T extends DiagnosticChildUserAggregateArgs> = {
        [P in keyof T & keyof AggregateDiagnosticChildUser]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateDiagnosticChildUser[P]>
      : GetScalarType<T[P], AggregateDiagnosticChildUser[P]>
  }




  export type DiagnosticChildUserGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: DiagnosticChildUserWhereInput
    orderBy?: DiagnosticChildUserOrderByWithAggregationInput | DiagnosticChildUserOrderByWithAggregationInput[]
    by: DiagnosticChildUserScalarFieldEnum[] | DiagnosticChildUserScalarFieldEnum
    having?: DiagnosticChildUserScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: DiagnosticChildUserCountAggregateInputType | true
    _min?: DiagnosticChildUserMinAggregateInputType
    _max?: DiagnosticChildUserMaxAggregateInputType
  }

  export type DiagnosticChildUserGroupByOutputType = {
    id: string
    DiagnosticAccountId: string
    name: string
    email: string
    phone: string | null
    password: string
    isActive: boolean
    createdAt: Date
    updatedAt: Date
    _count: DiagnosticChildUserCountAggregateOutputType | null
    _min: DiagnosticChildUserMinAggregateOutputType | null
    _max: DiagnosticChildUserMaxAggregateOutputType | null
  }

  type GetDiagnosticChildUserGroupByPayload<T extends DiagnosticChildUserGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<DiagnosticChildUserGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof DiagnosticChildUserGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], DiagnosticChildUserGroupByOutputType[P]>
            : GetScalarType<T[P], DiagnosticChildUserGroupByOutputType[P]>
        }
      >
    >


  export type DiagnosticChildUserSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    DiagnosticAccountId?: boolean
    name?: boolean
    email?: boolean
    phone?: boolean
    password?: boolean
    isActive?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    DiagnosticAccount?: boolean | DiagnosticAccountDefaultArgs<ExtArgs>
    userRoles?: boolean | DiagnosticChildUser$userRolesArgs<ExtArgs>
    _count?: boolean | DiagnosticChildUserCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["diagnosticChildUser"]>



  export type DiagnosticChildUserSelectScalar = {
    id?: boolean
    DiagnosticAccountId?: boolean
    name?: boolean
    email?: boolean
    phone?: boolean
    password?: boolean
    isActive?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type DiagnosticChildUserOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "DiagnosticAccountId" | "name" | "email" | "phone" | "password" | "isActive" | "createdAt" | "updatedAt", ExtArgs["result"]["diagnosticChildUser"]>
  export type DiagnosticChildUserInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    DiagnosticAccount?: boolean | DiagnosticAccountDefaultArgs<ExtArgs>
    userRoles?: boolean | DiagnosticChildUser$userRolesArgs<ExtArgs>
    _count?: boolean | DiagnosticChildUserCountOutputTypeDefaultArgs<ExtArgs>
  }

  export type $DiagnosticChildUserPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "DiagnosticChildUser"
    objects: {
      DiagnosticAccount: Prisma.$DiagnosticAccountPayload<ExtArgs>
      userRoles: Prisma.$DiagnosticUserRolePayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      DiagnosticAccountId: string
      name: string
      email: string
      phone: string | null
      password: string
      isActive: boolean
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["diagnosticChildUser"]>
    composites: {}
  }

  type DiagnosticChildUserGetPayload<S extends boolean | null | undefined | DiagnosticChildUserDefaultArgs> = $Result.GetResult<Prisma.$DiagnosticChildUserPayload, S>

  type DiagnosticChildUserCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<DiagnosticChildUserFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: DiagnosticChildUserCountAggregateInputType | true
    }

  export interface DiagnosticChildUserDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['DiagnosticChildUser'], meta: { name: 'DiagnosticChildUser' } }
    /**
     * Find zero or one DiagnosticChildUser that matches the filter.
     * @param {DiagnosticChildUserFindUniqueArgs} args - Arguments to find a DiagnosticChildUser
     * @example
     * // Get one DiagnosticChildUser
     * const diagnosticChildUser = await prisma.diagnosticChildUser.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends DiagnosticChildUserFindUniqueArgs>(args: SelectSubset<T, DiagnosticChildUserFindUniqueArgs<ExtArgs>>): Prisma__DiagnosticChildUserClient<$Result.GetResult<Prisma.$DiagnosticChildUserPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one DiagnosticChildUser that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {DiagnosticChildUserFindUniqueOrThrowArgs} args - Arguments to find a DiagnosticChildUser
     * @example
     * // Get one DiagnosticChildUser
     * const diagnosticChildUser = await prisma.diagnosticChildUser.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends DiagnosticChildUserFindUniqueOrThrowArgs>(args: SelectSubset<T, DiagnosticChildUserFindUniqueOrThrowArgs<ExtArgs>>): Prisma__DiagnosticChildUserClient<$Result.GetResult<Prisma.$DiagnosticChildUserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first DiagnosticChildUser that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DiagnosticChildUserFindFirstArgs} args - Arguments to find a DiagnosticChildUser
     * @example
     * // Get one DiagnosticChildUser
     * const diagnosticChildUser = await prisma.diagnosticChildUser.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends DiagnosticChildUserFindFirstArgs>(args?: SelectSubset<T, DiagnosticChildUserFindFirstArgs<ExtArgs>>): Prisma__DiagnosticChildUserClient<$Result.GetResult<Prisma.$DiagnosticChildUserPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first DiagnosticChildUser that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DiagnosticChildUserFindFirstOrThrowArgs} args - Arguments to find a DiagnosticChildUser
     * @example
     * // Get one DiagnosticChildUser
     * const diagnosticChildUser = await prisma.diagnosticChildUser.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends DiagnosticChildUserFindFirstOrThrowArgs>(args?: SelectSubset<T, DiagnosticChildUserFindFirstOrThrowArgs<ExtArgs>>): Prisma__DiagnosticChildUserClient<$Result.GetResult<Prisma.$DiagnosticChildUserPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more DiagnosticChildUsers that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DiagnosticChildUserFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all DiagnosticChildUsers
     * const diagnosticChildUsers = await prisma.diagnosticChildUser.findMany()
     * 
     * // Get first 10 DiagnosticChildUsers
     * const diagnosticChildUsers = await prisma.diagnosticChildUser.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const diagnosticChildUserWithIdOnly = await prisma.diagnosticChildUser.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends DiagnosticChildUserFindManyArgs>(args?: SelectSubset<T, DiagnosticChildUserFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$DiagnosticChildUserPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a DiagnosticChildUser.
     * @param {DiagnosticChildUserCreateArgs} args - Arguments to create a DiagnosticChildUser.
     * @example
     * // Create one DiagnosticChildUser
     * const DiagnosticChildUser = await prisma.diagnosticChildUser.create({
     *   data: {
     *     // ... data to create a DiagnosticChildUser
     *   }
     * })
     * 
     */
    create<T extends DiagnosticChildUserCreateArgs>(args: SelectSubset<T, DiagnosticChildUserCreateArgs<ExtArgs>>): Prisma__DiagnosticChildUserClient<$Result.GetResult<Prisma.$DiagnosticChildUserPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many DiagnosticChildUsers.
     * @param {DiagnosticChildUserCreateManyArgs} args - Arguments to create many DiagnosticChildUsers.
     * @example
     * // Create many DiagnosticChildUsers
     * const diagnosticChildUser = await prisma.diagnosticChildUser.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends DiagnosticChildUserCreateManyArgs>(args?: SelectSubset<T, DiagnosticChildUserCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a DiagnosticChildUser.
     * @param {DiagnosticChildUserDeleteArgs} args - Arguments to delete one DiagnosticChildUser.
     * @example
     * // Delete one DiagnosticChildUser
     * const DiagnosticChildUser = await prisma.diagnosticChildUser.delete({
     *   where: {
     *     // ... filter to delete one DiagnosticChildUser
     *   }
     * })
     * 
     */
    delete<T extends DiagnosticChildUserDeleteArgs>(args: SelectSubset<T, DiagnosticChildUserDeleteArgs<ExtArgs>>): Prisma__DiagnosticChildUserClient<$Result.GetResult<Prisma.$DiagnosticChildUserPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one DiagnosticChildUser.
     * @param {DiagnosticChildUserUpdateArgs} args - Arguments to update one DiagnosticChildUser.
     * @example
     * // Update one DiagnosticChildUser
     * const diagnosticChildUser = await prisma.diagnosticChildUser.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends DiagnosticChildUserUpdateArgs>(args: SelectSubset<T, DiagnosticChildUserUpdateArgs<ExtArgs>>): Prisma__DiagnosticChildUserClient<$Result.GetResult<Prisma.$DiagnosticChildUserPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more DiagnosticChildUsers.
     * @param {DiagnosticChildUserDeleteManyArgs} args - Arguments to filter DiagnosticChildUsers to delete.
     * @example
     * // Delete a few DiagnosticChildUsers
     * const { count } = await prisma.diagnosticChildUser.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends DiagnosticChildUserDeleteManyArgs>(args?: SelectSubset<T, DiagnosticChildUserDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more DiagnosticChildUsers.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DiagnosticChildUserUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many DiagnosticChildUsers
     * const diagnosticChildUser = await prisma.diagnosticChildUser.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends DiagnosticChildUserUpdateManyArgs>(args: SelectSubset<T, DiagnosticChildUserUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one DiagnosticChildUser.
     * @param {DiagnosticChildUserUpsertArgs} args - Arguments to update or create a DiagnosticChildUser.
     * @example
     * // Update or create a DiagnosticChildUser
     * const diagnosticChildUser = await prisma.diagnosticChildUser.upsert({
     *   create: {
     *     // ... data to create a DiagnosticChildUser
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the DiagnosticChildUser we want to update
     *   }
     * })
     */
    upsert<T extends DiagnosticChildUserUpsertArgs>(args: SelectSubset<T, DiagnosticChildUserUpsertArgs<ExtArgs>>): Prisma__DiagnosticChildUserClient<$Result.GetResult<Prisma.$DiagnosticChildUserPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of DiagnosticChildUsers.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DiagnosticChildUserCountArgs} args - Arguments to filter DiagnosticChildUsers to count.
     * @example
     * // Count the number of DiagnosticChildUsers
     * const count = await prisma.diagnosticChildUser.count({
     *   where: {
     *     // ... the filter for the DiagnosticChildUsers we want to count
     *   }
     * })
    **/
    count<T extends DiagnosticChildUserCountArgs>(
      args?: Subset<T, DiagnosticChildUserCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], DiagnosticChildUserCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a DiagnosticChildUser.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DiagnosticChildUserAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends DiagnosticChildUserAggregateArgs>(args: Subset<T, DiagnosticChildUserAggregateArgs>): Prisma.PrismaPromise<GetDiagnosticChildUserAggregateType<T>>

    /**
     * Group by DiagnosticChildUser.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DiagnosticChildUserGroupByArgs} args - Group by arguments.
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
      T extends DiagnosticChildUserGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: DiagnosticChildUserGroupByArgs['orderBy'] }
        : { orderBy?: DiagnosticChildUserGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, DiagnosticChildUserGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetDiagnosticChildUserGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the DiagnosticChildUser model
   */
  readonly fields: DiagnosticChildUserFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for DiagnosticChildUser.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__DiagnosticChildUserClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    DiagnosticAccount<T extends DiagnosticAccountDefaultArgs<ExtArgs> = {}>(args?: Subset<T, DiagnosticAccountDefaultArgs<ExtArgs>>): Prisma__DiagnosticAccountClient<$Result.GetResult<Prisma.$DiagnosticAccountPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    userRoles<T extends DiagnosticChildUser$userRolesArgs<ExtArgs> = {}>(args?: Subset<T, DiagnosticChildUser$userRolesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$DiagnosticUserRolePayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the DiagnosticChildUser model
   */
  interface DiagnosticChildUserFieldRefs {
    readonly id: FieldRef<"DiagnosticChildUser", 'String'>
    readonly DiagnosticAccountId: FieldRef<"DiagnosticChildUser", 'String'>
    readonly name: FieldRef<"DiagnosticChildUser", 'String'>
    readonly email: FieldRef<"DiagnosticChildUser", 'String'>
    readonly phone: FieldRef<"DiagnosticChildUser", 'String'>
    readonly password: FieldRef<"DiagnosticChildUser", 'String'>
    readonly isActive: FieldRef<"DiagnosticChildUser", 'Boolean'>
    readonly createdAt: FieldRef<"DiagnosticChildUser", 'DateTime'>
    readonly updatedAt: FieldRef<"DiagnosticChildUser", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * DiagnosticChildUser findUnique
   */
  export type DiagnosticChildUserFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DiagnosticChildUser
     */
    select?: DiagnosticChildUserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DiagnosticChildUser
     */
    omit?: DiagnosticChildUserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DiagnosticChildUserInclude<ExtArgs> | null
    /**
     * Filter, which DiagnosticChildUser to fetch.
     */
    where: DiagnosticChildUserWhereUniqueInput
  }

  /**
   * DiagnosticChildUser findUniqueOrThrow
   */
  export type DiagnosticChildUserFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DiagnosticChildUser
     */
    select?: DiagnosticChildUserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DiagnosticChildUser
     */
    omit?: DiagnosticChildUserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DiagnosticChildUserInclude<ExtArgs> | null
    /**
     * Filter, which DiagnosticChildUser to fetch.
     */
    where: DiagnosticChildUserWhereUniqueInput
  }

  /**
   * DiagnosticChildUser findFirst
   */
  export type DiagnosticChildUserFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DiagnosticChildUser
     */
    select?: DiagnosticChildUserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DiagnosticChildUser
     */
    omit?: DiagnosticChildUserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DiagnosticChildUserInclude<ExtArgs> | null
    /**
     * Filter, which DiagnosticChildUser to fetch.
     */
    where?: DiagnosticChildUserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of DiagnosticChildUsers to fetch.
     */
    orderBy?: DiagnosticChildUserOrderByWithRelationInput | DiagnosticChildUserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for DiagnosticChildUsers.
     */
    cursor?: DiagnosticChildUserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` DiagnosticChildUsers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` DiagnosticChildUsers.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of DiagnosticChildUsers.
     */
    distinct?: DiagnosticChildUserScalarFieldEnum | DiagnosticChildUserScalarFieldEnum[]
  }

  /**
   * DiagnosticChildUser findFirstOrThrow
   */
  export type DiagnosticChildUserFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DiagnosticChildUser
     */
    select?: DiagnosticChildUserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DiagnosticChildUser
     */
    omit?: DiagnosticChildUserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DiagnosticChildUserInclude<ExtArgs> | null
    /**
     * Filter, which DiagnosticChildUser to fetch.
     */
    where?: DiagnosticChildUserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of DiagnosticChildUsers to fetch.
     */
    orderBy?: DiagnosticChildUserOrderByWithRelationInput | DiagnosticChildUserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for DiagnosticChildUsers.
     */
    cursor?: DiagnosticChildUserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` DiagnosticChildUsers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` DiagnosticChildUsers.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of DiagnosticChildUsers.
     */
    distinct?: DiagnosticChildUserScalarFieldEnum | DiagnosticChildUserScalarFieldEnum[]
  }

  /**
   * DiagnosticChildUser findMany
   */
  export type DiagnosticChildUserFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DiagnosticChildUser
     */
    select?: DiagnosticChildUserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DiagnosticChildUser
     */
    omit?: DiagnosticChildUserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DiagnosticChildUserInclude<ExtArgs> | null
    /**
     * Filter, which DiagnosticChildUsers to fetch.
     */
    where?: DiagnosticChildUserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of DiagnosticChildUsers to fetch.
     */
    orderBy?: DiagnosticChildUserOrderByWithRelationInput | DiagnosticChildUserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing DiagnosticChildUsers.
     */
    cursor?: DiagnosticChildUserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` DiagnosticChildUsers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` DiagnosticChildUsers.
     */
    skip?: number
    distinct?: DiagnosticChildUserScalarFieldEnum | DiagnosticChildUserScalarFieldEnum[]
  }

  /**
   * DiagnosticChildUser create
   */
  export type DiagnosticChildUserCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DiagnosticChildUser
     */
    select?: DiagnosticChildUserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DiagnosticChildUser
     */
    omit?: DiagnosticChildUserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DiagnosticChildUserInclude<ExtArgs> | null
    /**
     * The data needed to create a DiagnosticChildUser.
     */
    data: XOR<DiagnosticChildUserCreateInput, DiagnosticChildUserUncheckedCreateInput>
  }

  /**
   * DiagnosticChildUser createMany
   */
  export type DiagnosticChildUserCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many DiagnosticChildUsers.
     */
    data: DiagnosticChildUserCreateManyInput | DiagnosticChildUserCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * DiagnosticChildUser update
   */
  export type DiagnosticChildUserUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DiagnosticChildUser
     */
    select?: DiagnosticChildUserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DiagnosticChildUser
     */
    omit?: DiagnosticChildUserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DiagnosticChildUserInclude<ExtArgs> | null
    /**
     * The data needed to update a DiagnosticChildUser.
     */
    data: XOR<DiagnosticChildUserUpdateInput, DiagnosticChildUserUncheckedUpdateInput>
    /**
     * Choose, which DiagnosticChildUser to update.
     */
    where: DiagnosticChildUserWhereUniqueInput
  }

  /**
   * DiagnosticChildUser updateMany
   */
  export type DiagnosticChildUserUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update DiagnosticChildUsers.
     */
    data: XOR<DiagnosticChildUserUpdateManyMutationInput, DiagnosticChildUserUncheckedUpdateManyInput>
    /**
     * Filter which DiagnosticChildUsers to update
     */
    where?: DiagnosticChildUserWhereInput
    /**
     * Limit how many DiagnosticChildUsers to update.
     */
    limit?: number
  }

  /**
   * DiagnosticChildUser upsert
   */
  export type DiagnosticChildUserUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DiagnosticChildUser
     */
    select?: DiagnosticChildUserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DiagnosticChildUser
     */
    omit?: DiagnosticChildUserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DiagnosticChildUserInclude<ExtArgs> | null
    /**
     * The filter to search for the DiagnosticChildUser to update in case it exists.
     */
    where: DiagnosticChildUserWhereUniqueInput
    /**
     * In case the DiagnosticChildUser found by the `where` argument doesn't exist, create a new DiagnosticChildUser with this data.
     */
    create: XOR<DiagnosticChildUserCreateInput, DiagnosticChildUserUncheckedCreateInput>
    /**
     * In case the DiagnosticChildUser was found with the provided `where` argument, update it with this data.
     */
    update: XOR<DiagnosticChildUserUpdateInput, DiagnosticChildUserUncheckedUpdateInput>
  }

  /**
   * DiagnosticChildUser delete
   */
  export type DiagnosticChildUserDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DiagnosticChildUser
     */
    select?: DiagnosticChildUserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DiagnosticChildUser
     */
    omit?: DiagnosticChildUserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DiagnosticChildUserInclude<ExtArgs> | null
    /**
     * Filter which DiagnosticChildUser to delete.
     */
    where: DiagnosticChildUserWhereUniqueInput
  }

  /**
   * DiagnosticChildUser deleteMany
   */
  export type DiagnosticChildUserDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which DiagnosticChildUsers to delete
     */
    where?: DiagnosticChildUserWhereInput
    /**
     * Limit how many DiagnosticChildUsers to delete.
     */
    limit?: number
  }

  /**
   * DiagnosticChildUser.userRoles
   */
  export type DiagnosticChildUser$userRolesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DiagnosticUserRole
     */
    select?: DiagnosticUserRoleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DiagnosticUserRole
     */
    omit?: DiagnosticUserRoleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DiagnosticUserRoleInclude<ExtArgs> | null
    where?: DiagnosticUserRoleWhereInput
    orderBy?: DiagnosticUserRoleOrderByWithRelationInput | DiagnosticUserRoleOrderByWithRelationInput[]
    cursor?: DiagnosticUserRoleWhereUniqueInput
    take?: number
    skip?: number
    distinct?: DiagnosticUserRoleScalarFieldEnum | DiagnosticUserRoleScalarFieldEnum[]
  }

  /**
   * DiagnosticChildUser without action
   */
  export type DiagnosticChildUserDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DiagnosticChildUser
     */
    select?: DiagnosticChildUserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DiagnosticChildUser
     */
    omit?: DiagnosticChildUserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DiagnosticChildUserInclude<ExtArgs> | null
  }


  /**
   * Model Role
   */

  export type AggregateRole = {
    _count: RoleCountAggregateOutputType | null
    _min: RoleMinAggregateOutputType | null
    _max: RoleMaxAggregateOutputType | null
  }

  export type RoleMinAggregateOutputType = {
    id: string | null
    name: string | null
    ownerType: $Enums.RoleOwnerType | null
    DiagnosticAccountId: string | null
    superAdminId: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type RoleMaxAggregateOutputType = {
    id: string | null
    name: string | null
    ownerType: $Enums.RoleOwnerType | null
    DiagnosticAccountId: string | null
    superAdminId: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type RoleCountAggregateOutputType = {
    id: number
    name: number
    ownerType: number
    DiagnosticAccountId: number
    superAdminId: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type RoleMinAggregateInputType = {
    id?: true
    name?: true
    ownerType?: true
    DiagnosticAccountId?: true
    superAdminId?: true
    createdAt?: true
    updatedAt?: true
  }

  export type RoleMaxAggregateInputType = {
    id?: true
    name?: true
    ownerType?: true
    DiagnosticAccountId?: true
    superAdminId?: true
    createdAt?: true
    updatedAt?: true
  }

  export type RoleCountAggregateInputType = {
    id?: true
    name?: true
    ownerType?: true
    DiagnosticAccountId?: true
    superAdminId?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type RoleAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Role to aggregate.
     */
    where?: RoleWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Roles to fetch.
     */
    orderBy?: RoleOrderByWithRelationInput | RoleOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: RoleWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Roles from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Roles.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Roles
    **/
    _count?: true | RoleCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: RoleMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: RoleMaxAggregateInputType
  }

  export type GetRoleAggregateType<T extends RoleAggregateArgs> = {
        [P in keyof T & keyof AggregateRole]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateRole[P]>
      : GetScalarType<T[P], AggregateRole[P]>
  }




  export type RoleGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: RoleWhereInput
    orderBy?: RoleOrderByWithAggregationInput | RoleOrderByWithAggregationInput[]
    by: RoleScalarFieldEnum[] | RoleScalarFieldEnum
    having?: RoleScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: RoleCountAggregateInputType | true
    _min?: RoleMinAggregateInputType
    _max?: RoleMaxAggregateInputType
  }

  export type RoleGroupByOutputType = {
    id: string
    name: string
    ownerType: $Enums.RoleOwnerType
    DiagnosticAccountId: string | null
    superAdminId: string | null
    createdAt: Date
    updatedAt: Date
    _count: RoleCountAggregateOutputType | null
    _min: RoleMinAggregateOutputType | null
    _max: RoleMaxAggregateOutputType | null
  }

  type GetRoleGroupByPayload<T extends RoleGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<RoleGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof RoleGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], RoleGroupByOutputType[P]>
            : GetScalarType<T[P], RoleGroupByOutputType[P]>
        }
      >
    >


  export type RoleSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    ownerType?: boolean
    DiagnosticAccountId?: boolean
    superAdminId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    DiagnosticAccount?: boolean | Role$DiagnosticAccountArgs<ExtArgs>
    superAdmin?: boolean | Role$superAdminArgs<ExtArgs>
    rolePermissions?: boolean | Role$rolePermissionsArgs<ExtArgs>
    diagnosticUserRoles?: boolean | Role$diagnosticUserRolesArgs<ExtArgs>
    superAdminUserRoles?: boolean | Role$superAdminUserRolesArgs<ExtArgs>
    _count?: boolean | RoleCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["role"]>



  export type RoleSelectScalar = {
    id?: boolean
    name?: boolean
    ownerType?: boolean
    DiagnosticAccountId?: boolean
    superAdminId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type RoleOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "name" | "ownerType" | "DiagnosticAccountId" | "superAdminId" | "createdAt" | "updatedAt", ExtArgs["result"]["role"]>
  export type RoleInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    DiagnosticAccount?: boolean | Role$DiagnosticAccountArgs<ExtArgs>
    superAdmin?: boolean | Role$superAdminArgs<ExtArgs>
    rolePermissions?: boolean | Role$rolePermissionsArgs<ExtArgs>
    diagnosticUserRoles?: boolean | Role$diagnosticUserRolesArgs<ExtArgs>
    superAdminUserRoles?: boolean | Role$superAdminUserRolesArgs<ExtArgs>
    _count?: boolean | RoleCountOutputTypeDefaultArgs<ExtArgs>
  }

  export type $RolePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Role"
    objects: {
      DiagnosticAccount: Prisma.$DiagnosticAccountPayload<ExtArgs> | null
      superAdmin: Prisma.$SuperAdminsPayload<ExtArgs> | null
      rolePermissions: Prisma.$RolePermissionPayload<ExtArgs>[]
      diagnosticUserRoles: Prisma.$DiagnosticUserRolePayload<ExtArgs>[]
      superAdminUserRoles: Prisma.$SuperAdminUserRolePayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      name: string
      ownerType: $Enums.RoleOwnerType
      DiagnosticAccountId: string | null
      superAdminId: string | null
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["role"]>
    composites: {}
  }

  type RoleGetPayload<S extends boolean | null | undefined | RoleDefaultArgs> = $Result.GetResult<Prisma.$RolePayload, S>

  type RoleCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<RoleFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: RoleCountAggregateInputType | true
    }

  export interface RoleDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Role'], meta: { name: 'Role' } }
    /**
     * Find zero or one Role that matches the filter.
     * @param {RoleFindUniqueArgs} args - Arguments to find a Role
     * @example
     * // Get one Role
     * const role = await prisma.role.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends RoleFindUniqueArgs>(args: SelectSubset<T, RoleFindUniqueArgs<ExtArgs>>): Prisma__RoleClient<$Result.GetResult<Prisma.$RolePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Role that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {RoleFindUniqueOrThrowArgs} args - Arguments to find a Role
     * @example
     * // Get one Role
     * const role = await prisma.role.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends RoleFindUniqueOrThrowArgs>(args: SelectSubset<T, RoleFindUniqueOrThrowArgs<ExtArgs>>): Prisma__RoleClient<$Result.GetResult<Prisma.$RolePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Role that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RoleFindFirstArgs} args - Arguments to find a Role
     * @example
     * // Get one Role
     * const role = await prisma.role.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends RoleFindFirstArgs>(args?: SelectSubset<T, RoleFindFirstArgs<ExtArgs>>): Prisma__RoleClient<$Result.GetResult<Prisma.$RolePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Role that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RoleFindFirstOrThrowArgs} args - Arguments to find a Role
     * @example
     * // Get one Role
     * const role = await prisma.role.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends RoleFindFirstOrThrowArgs>(args?: SelectSubset<T, RoleFindFirstOrThrowArgs<ExtArgs>>): Prisma__RoleClient<$Result.GetResult<Prisma.$RolePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Roles that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RoleFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Roles
     * const roles = await prisma.role.findMany()
     * 
     * // Get first 10 Roles
     * const roles = await prisma.role.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const roleWithIdOnly = await prisma.role.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends RoleFindManyArgs>(args?: SelectSubset<T, RoleFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$RolePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Role.
     * @param {RoleCreateArgs} args - Arguments to create a Role.
     * @example
     * // Create one Role
     * const Role = await prisma.role.create({
     *   data: {
     *     // ... data to create a Role
     *   }
     * })
     * 
     */
    create<T extends RoleCreateArgs>(args: SelectSubset<T, RoleCreateArgs<ExtArgs>>): Prisma__RoleClient<$Result.GetResult<Prisma.$RolePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Roles.
     * @param {RoleCreateManyArgs} args - Arguments to create many Roles.
     * @example
     * // Create many Roles
     * const role = await prisma.role.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends RoleCreateManyArgs>(args?: SelectSubset<T, RoleCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Role.
     * @param {RoleDeleteArgs} args - Arguments to delete one Role.
     * @example
     * // Delete one Role
     * const Role = await prisma.role.delete({
     *   where: {
     *     // ... filter to delete one Role
     *   }
     * })
     * 
     */
    delete<T extends RoleDeleteArgs>(args: SelectSubset<T, RoleDeleteArgs<ExtArgs>>): Prisma__RoleClient<$Result.GetResult<Prisma.$RolePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Role.
     * @param {RoleUpdateArgs} args - Arguments to update one Role.
     * @example
     * // Update one Role
     * const role = await prisma.role.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends RoleUpdateArgs>(args: SelectSubset<T, RoleUpdateArgs<ExtArgs>>): Prisma__RoleClient<$Result.GetResult<Prisma.$RolePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Roles.
     * @param {RoleDeleteManyArgs} args - Arguments to filter Roles to delete.
     * @example
     * // Delete a few Roles
     * const { count } = await prisma.role.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends RoleDeleteManyArgs>(args?: SelectSubset<T, RoleDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Roles.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RoleUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Roles
     * const role = await prisma.role.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends RoleUpdateManyArgs>(args: SelectSubset<T, RoleUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Role.
     * @param {RoleUpsertArgs} args - Arguments to update or create a Role.
     * @example
     * // Update or create a Role
     * const role = await prisma.role.upsert({
     *   create: {
     *     // ... data to create a Role
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Role we want to update
     *   }
     * })
     */
    upsert<T extends RoleUpsertArgs>(args: SelectSubset<T, RoleUpsertArgs<ExtArgs>>): Prisma__RoleClient<$Result.GetResult<Prisma.$RolePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Roles.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RoleCountArgs} args - Arguments to filter Roles to count.
     * @example
     * // Count the number of Roles
     * const count = await prisma.role.count({
     *   where: {
     *     // ... the filter for the Roles we want to count
     *   }
     * })
    **/
    count<T extends RoleCountArgs>(
      args?: Subset<T, RoleCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], RoleCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Role.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RoleAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends RoleAggregateArgs>(args: Subset<T, RoleAggregateArgs>): Prisma.PrismaPromise<GetRoleAggregateType<T>>

    /**
     * Group by Role.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RoleGroupByArgs} args - Group by arguments.
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
      T extends RoleGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: RoleGroupByArgs['orderBy'] }
        : { orderBy?: RoleGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, RoleGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetRoleGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Role model
   */
  readonly fields: RoleFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Role.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__RoleClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    DiagnosticAccount<T extends Role$DiagnosticAccountArgs<ExtArgs> = {}>(args?: Subset<T, Role$DiagnosticAccountArgs<ExtArgs>>): Prisma__DiagnosticAccountClient<$Result.GetResult<Prisma.$DiagnosticAccountPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    superAdmin<T extends Role$superAdminArgs<ExtArgs> = {}>(args?: Subset<T, Role$superAdminArgs<ExtArgs>>): Prisma__SuperAdminsClient<$Result.GetResult<Prisma.$SuperAdminsPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    rolePermissions<T extends Role$rolePermissionsArgs<ExtArgs> = {}>(args?: Subset<T, Role$rolePermissionsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$RolePermissionPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    diagnosticUserRoles<T extends Role$diagnosticUserRolesArgs<ExtArgs> = {}>(args?: Subset<T, Role$diagnosticUserRolesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$DiagnosticUserRolePayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    superAdminUserRoles<T extends Role$superAdminUserRolesArgs<ExtArgs> = {}>(args?: Subset<T, Role$superAdminUserRolesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SuperAdminUserRolePayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the Role model
   */
  interface RoleFieldRefs {
    readonly id: FieldRef<"Role", 'String'>
    readonly name: FieldRef<"Role", 'String'>
    readonly ownerType: FieldRef<"Role", 'RoleOwnerType'>
    readonly DiagnosticAccountId: FieldRef<"Role", 'String'>
    readonly superAdminId: FieldRef<"Role", 'String'>
    readonly createdAt: FieldRef<"Role", 'DateTime'>
    readonly updatedAt: FieldRef<"Role", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Role findUnique
   */
  export type RoleFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Role
     */
    select?: RoleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Role
     */
    omit?: RoleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RoleInclude<ExtArgs> | null
    /**
     * Filter, which Role to fetch.
     */
    where: RoleWhereUniqueInput
  }

  /**
   * Role findUniqueOrThrow
   */
  export type RoleFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Role
     */
    select?: RoleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Role
     */
    omit?: RoleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RoleInclude<ExtArgs> | null
    /**
     * Filter, which Role to fetch.
     */
    where: RoleWhereUniqueInput
  }

  /**
   * Role findFirst
   */
  export type RoleFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Role
     */
    select?: RoleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Role
     */
    omit?: RoleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RoleInclude<ExtArgs> | null
    /**
     * Filter, which Role to fetch.
     */
    where?: RoleWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Roles to fetch.
     */
    orderBy?: RoleOrderByWithRelationInput | RoleOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Roles.
     */
    cursor?: RoleWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Roles from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Roles.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Roles.
     */
    distinct?: RoleScalarFieldEnum | RoleScalarFieldEnum[]
  }

  /**
   * Role findFirstOrThrow
   */
  export type RoleFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Role
     */
    select?: RoleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Role
     */
    omit?: RoleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RoleInclude<ExtArgs> | null
    /**
     * Filter, which Role to fetch.
     */
    where?: RoleWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Roles to fetch.
     */
    orderBy?: RoleOrderByWithRelationInput | RoleOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Roles.
     */
    cursor?: RoleWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Roles from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Roles.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Roles.
     */
    distinct?: RoleScalarFieldEnum | RoleScalarFieldEnum[]
  }

  /**
   * Role findMany
   */
  export type RoleFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Role
     */
    select?: RoleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Role
     */
    omit?: RoleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RoleInclude<ExtArgs> | null
    /**
     * Filter, which Roles to fetch.
     */
    where?: RoleWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Roles to fetch.
     */
    orderBy?: RoleOrderByWithRelationInput | RoleOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Roles.
     */
    cursor?: RoleWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Roles from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Roles.
     */
    skip?: number
    distinct?: RoleScalarFieldEnum | RoleScalarFieldEnum[]
  }

  /**
   * Role create
   */
  export type RoleCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Role
     */
    select?: RoleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Role
     */
    omit?: RoleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RoleInclude<ExtArgs> | null
    /**
     * The data needed to create a Role.
     */
    data: XOR<RoleCreateInput, RoleUncheckedCreateInput>
  }

  /**
   * Role createMany
   */
  export type RoleCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Roles.
     */
    data: RoleCreateManyInput | RoleCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Role update
   */
  export type RoleUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Role
     */
    select?: RoleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Role
     */
    omit?: RoleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RoleInclude<ExtArgs> | null
    /**
     * The data needed to update a Role.
     */
    data: XOR<RoleUpdateInput, RoleUncheckedUpdateInput>
    /**
     * Choose, which Role to update.
     */
    where: RoleWhereUniqueInput
  }

  /**
   * Role updateMany
   */
  export type RoleUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Roles.
     */
    data: XOR<RoleUpdateManyMutationInput, RoleUncheckedUpdateManyInput>
    /**
     * Filter which Roles to update
     */
    where?: RoleWhereInput
    /**
     * Limit how many Roles to update.
     */
    limit?: number
  }

  /**
   * Role upsert
   */
  export type RoleUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Role
     */
    select?: RoleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Role
     */
    omit?: RoleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RoleInclude<ExtArgs> | null
    /**
     * The filter to search for the Role to update in case it exists.
     */
    where: RoleWhereUniqueInput
    /**
     * In case the Role found by the `where` argument doesn't exist, create a new Role with this data.
     */
    create: XOR<RoleCreateInput, RoleUncheckedCreateInput>
    /**
     * In case the Role was found with the provided `where` argument, update it with this data.
     */
    update: XOR<RoleUpdateInput, RoleUncheckedUpdateInput>
  }

  /**
   * Role delete
   */
  export type RoleDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Role
     */
    select?: RoleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Role
     */
    omit?: RoleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RoleInclude<ExtArgs> | null
    /**
     * Filter which Role to delete.
     */
    where: RoleWhereUniqueInput
  }

  /**
   * Role deleteMany
   */
  export type RoleDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Roles to delete
     */
    where?: RoleWhereInput
    /**
     * Limit how many Roles to delete.
     */
    limit?: number
  }

  /**
   * Role.DiagnosticAccount
   */
  export type Role$DiagnosticAccountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DiagnosticAccount
     */
    select?: DiagnosticAccountSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DiagnosticAccount
     */
    omit?: DiagnosticAccountOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DiagnosticAccountInclude<ExtArgs> | null
    where?: DiagnosticAccountWhereInput
  }

  /**
   * Role.superAdmin
   */
  export type Role$superAdminArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SuperAdmins
     */
    select?: SuperAdminsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SuperAdmins
     */
    omit?: SuperAdminsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SuperAdminsInclude<ExtArgs> | null
    where?: SuperAdminsWhereInput
  }

  /**
   * Role.rolePermissions
   */
  export type Role$rolePermissionsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RolePermission
     */
    select?: RolePermissionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RolePermission
     */
    omit?: RolePermissionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RolePermissionInclude<ExtArgs> | null
    where?: RolePermissionWhereInput
    orderBy?: RolePermissionOrderByWithRelationInput | RolePermissionOrderByWithRelationInput[]
    cursor?: RolePermissionWhereUniqueInput
    take?: number
    skip?: number
    distinct?: RolePermissionScalarFieldEnum | RolePermissionScalarFieldEnum[]
  }

  /**
   * Role.diagnosticUserRoles
   */
  export type Role$diagnosticUserRolesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DiagnosticUserRole
     */
    select?: DiagnosticUserRoleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DiagnosticUserRole
     */
    omit?: DiagnosticUserRoleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DiagnosticUserRoleInclude<ExtArgs> | null
    where?: DiagnosticUserRoleWhereInput
    orderBy?: DiagnosticUserRoleOrderByWithRelationInput | DiagnosticUserRoleOrderByWithRelationInput[]
    cursor?: DiagnosticUserRoleWhereUniqueInput
    take?: number
    skip?: number
    distinct?: DiagnosticUserRoleScalarFieldEnum | DiagnosticUserRoleScalarFieldEnum[]
  }

  /**
   * Role.superAdminUserRoles
   */
  export type Role$superAdminUserRolesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SuperAdminUserRole
     */
    select?: SuperAdminUserRoleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SuperAdminUserRole
     */
    omit?: SuperAdminUserRoleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SuperAdminUserRoleInclude<ExtArgs> | null
    where?: SuperAdminUserRoleWhereInput
    orderBy?: SuperAdminUserRoleOrderByWithRelationInput | SuperAdminUserRoleOrderByWithRelationInput[]
    cursor?: SuperAdminUserRoleWhereUniqueInput
    take?: number
    skip?: number
    distinct?: SuperAdminUserRoleScalarFieldEnum | SuperAdminUserRoleScalarFieldEnum[]
  }

  /**
   * Role without action
   */
  export type RoleDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Role
     */
    select?: RoleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Role
     */
    omit?: RoleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RoleInclude<ExtArgs> | null
  }


  /**
   * Model Permission
   */

  export type AggregatePermission = {
    _count: PermissionCountAggregateOutputType | null
    _min: PermissionMinAggregateOutputType | null
    _max: PermissionMaxAggregateOutputType | null
  }

  export type PermissionMinAggregateOutputType = {
    id: string | null
    key: string | null
    module: string | null
    description: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type PermissionMaxAggregateOutputType = {
    id: string | null
    key: string | null
    module: string | null
    description: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type PermissionCountAggregateOutputType = {
    id: number
    key: number
    module: number
    description: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type PermissionMinAggregateInputType = {
    id?: true
    key?: true
    module?: true
    description?: true
    createdAt?: true
    updatedAt?: true
  }

  export type PermissionMaxAggregateInputType = {
    id?: true
    key?: true
    module?: true
    description?: true
    createdAt?: true
    updatedAt?: true
  }

  export type PermissionCountAggregateInputType = {
    id?: true
    key?: true
    module?: true
    description?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type PermissionAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Permission to aggregate.
     */
    where?: PermissionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Permissions to fetch.
     */
    orderBy?: PermissionOrderByWithRelationInput | PermissionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: PermissionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Permissions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Permissions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Permissions
    **/
    _count?: true | PermissionCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: PermissionMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: PermissionMaxAggregateInputType
  }

  export type GetPermissionAggregateType<T extends PermissionAggregateArgs> = {
        [P in keyof T & keyof AggregatePermission]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregatePermission[P]>
      : GetScalarType<T[P], AggregatePermission[P]>
  }




  export type PermissionGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: PermissionWhereInput
    orderBy?: PermissionOrderByWithAggregationInput | PermissionOrderByWithAggregationInput[]
    by: PermissionScalarFieldEnum[] | PermissionScalarFieldEnum
    having?: PermissionScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: PermissionCountAggregateInputType | true
    _min?: PermissionMinAggregateInputType
    _max?: PermissionMaxAggregateInputType
  }

  export type PermissionGroupByOutputType = {
    id: string
    key: string
    module: string
    description: string | null
    createdAt: Date
    updatedAt: Date
    _count: PermissionCountAggregateOutputType | null
    _min: PermissionMinAggregateOutputType | null
    _max: PermissionMaxAggregateOutputType | null
  }

  type GetPermissionGroupByPayload<T extends PermissionGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<PermissionGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof PermissionGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], PermissionGroupByOutputType[P]>
            : GetScalarType<T[P], PermissionGroupByOutputType[P]>
        }
      >
    >


  export type PermissionSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    key?: boolean
    module?: boolean
    description?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    rolePermissions?: boolean | Permission$rolePermissionsArgs<ExtArgs>
    _count?: boolean | PermissionCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["permission"]>



  export type PermissionSelectScalar = {
    id?: boolean
    key?: boolean
    module?: boolean
    description?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type PermissionOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "key" | "module" | "description" | "createdAt" | "updatedAt", ExtArgs["result"]["permission"]>
  export type PermissionInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    rolePermissions?: boolean | Permission$rolePermissionsArgs<ExtArgs>
    _count?: boolean | PermissionCountOutputTypeDefaultArgs<ExtArgs>
  }

  export type $PermissionPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Permission"
    objects: {
      rolePermissions: Prisma.$RolePermissionPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      key: string
      module: string
      description: string | null
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["permission"]>
    composites: {}
  }

  type PermissionGetPayload<S extends boolean | null | undefined | PermissionDefaultArgs> = $Result.GetResult<Prisma.$PermissionPayload, S>

  type PermissionCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<PermissionFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: PermissionCountAggregateInputType | true
    }

  export interface PermissionDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Permission'], meta: { name: 'Permission' } }
    /**
     * Find zero or one Permission that matches the filter.
     * @param {PermissionFindUniqueArgs} args - Arguments to find a Permission
     * @example
     * // Get one Permission
     * const permission = await prisma.permission.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends PermissionFindUniqueArgs>(args: SelectSubset<T, PermissionFindUniqueArgs<ExtArgs>>): Prisma__PermissionClient<$Result.GetResult<Prisma.$PermissionPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Permission that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {PermissionFindUniqueOrThrowArgs} args - Arguments to find a Permission
     * @example
     * // Get one Permission
     * const permission = await prisma.permission.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends PermissionFindUniqueOrThrowArgs>(args: SelectSubset<T, PermissionFindUniqueOrThrowArgs<ExtArgs>>): Prisma__PermissionClient<$Result.GetResult<Prisma.$PermissionPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Permission that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PermissionFindFirstArgs} args - Arguments to find a Permission
     * @example
     * // Get one Permission
     * const permission = await prisma.permission.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends PermissionFindFirstArgs>(args?: SelectSubset<T, PermissionFindFirstArgs<ExtArgs>>): Prisma__PermissionClient<$Result.GetResult<Prisma.$PermissionPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Permission that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PermissionFindFirstOrThrowArgs} args - Arguments to find a Permission
     * @example
     * // Get one Permission
     * const permission = await prisma.permission.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends PermissionFindFirstOrThrowArgs>(args?: SelectSubset<T, PermissionFindFirstOrThrowArgs<ExtArgs>>): Prisma__PermissionClient<$Result.GetResult<Prisma.$PermissionPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Permissions that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PermissionFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Permissions
     * const permissions = await prisma.permission.findMany()
     * 
     * // Get first 10 Permissions
     * const permissions = await prisma.permission.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const permissionWithIdOnly = await prisma.permission.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends PermissionFindManyArgs>(args?: SelectSubset<T, PermissionFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PermissionPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Permission.
     * @param {PermissionCreateArgs} args - Arguments to create a Permission.
     * @example
     * // Create one Permission
     * const Permission = await prisma.permission.create({
     *   data: {
     *     // ... data to create a Permission
     *   }
     * })
     * 
     */
    create<T extends PermissionCreateArgs>(args: SelectSubset<T, PermissionCreateArgs<ExtArgs>>): Prisma__PermissionClient<$Result.GetResult<Prisma.$PermissionPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Permissions.
     * @param {PermissionCreateManyArgs} args - Arguments to create many Permissions.
     * @example
     * // Create many Permissions
     * const permission = await prisma.permission.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends PermissionCreateManyArgs>(args?: SelectSubset<T, PermissionCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Permission.
     * @param {PermissionDeleteArgs} args - Arguments to delete one Permission.
     * @example
     * // Delete one Permission
     * const Permission = await prisma.permission.delete({
     *   where: {
     *     // ... filter to delete one Permission
     *   }
     * })
     * 
     */
    delete<T extends PermissionDeleteArgs>(args: SelectSubset<T, PermissionDeleteArgs<ExtArgs>>): Prisma__PermissionClient<$Result.GetResult<Prisma.$PermissionPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Permission.
     * @param {PermissionUpdateArgs} args - Arguments to update one Permission.
     * @example
     * // Update one Permission
     * const permission = await prisma.permission.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends PermissionUpdateArgs>(args: SelectSubset<T, PermissionUpdateArgs<ExtArgs>>): Prisma__PermissionClient<$Result.GetResult<Prisma.$PermissionPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Permissions.
     * @param {PermissionDeleteManyArgs} args - Arguments to filter Permissions to delete.
     * @example
     * // Delete a few Permissions
     * const { count } = await prisma.permission.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends PermissionDeleteManyArgs>(args?: SelectSubset<T, PermissionDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Permissions.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PermissionUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Permissions
     * const permission = await prisma.permission.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends PermissionUpdateManyArgs>(args: SelectSubset<T, PermissionUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Permission.
     * @param {PermissionUpsertArgs} args - Arguments to update or create a Permission.
     * @example
     * // Update or create a Permission
     * const permission = await prisma.permission.upsert({
     *   create: {
     *     // ... data to create a Permission
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Permission we want to update
     *   }
     * })
     */
    upsert<T extends PermissionUpsertArgs>(args: SelectSubset<T, PermissionUpsertArgs<ExtArgs>>): Prisma__PermissionClient<$Result.GetResult<Prisma.$PermissionPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Permissions.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PermissionCountArgs} args - Arguments to filter Permissions to count.
     * @example
     * // Count the number of Permissions
     * const count = await prisma.permission.count({
     *   where: {
     *     // ... the filter for the Permissions we want to count
     *   }
     * })
    **/
    count<T extends PermissionCountArgs>(
      args?: Subset<T, PermissionCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], PermissionCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Permission.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PermissionAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends PermissionAggregateArgs>(args: Subset<T, PermissionAggregateArgs>): Prisma.PrismaPromise<GetPermissionAggregateType<T>>

    /**
     * Group by Permission.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PermissionGroupByArgs} args - Group by arguments.
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
      T extends PermissionGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: PermissionGroupByArgs['orderBy'] }
        : { orderBy?: PermissionGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, PermissionGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetPermissionGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Permission model
   */
  readonly fields: PermissionFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Permission.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__PermissionClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    rolePermissions<T extends Permission$rolePermissionsArgs<ExtArgs> = {}>(args?: Subset<T, Permission$rolePermissionsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$RolePermissionPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the Permission model
   */
  interface PermissionFieldRefs {
    readonly id: FieldRef<"Permission", 'String'>
    readonly key: FieldRef<"Permission", 'String'>
    readonly module: FieldRef<"Permission", 'String'>
    readonly description: FieldRef<"Permission", 'String'>
    readonly createdAt: FieldRef<"Permission", 'DateTime'>
    readonly updatedAt: FieldRef<"Permission", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Permission findUnique
   */
  export type PermissionFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Permission
     */
    select?: PermissionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Permission
     */
    omit?: PermissionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PermissionInclude<ExtArgs> | null
    /**
     * Filter, which Permission to fetch.
     */
    where: PermissionWhereUniqueInput
  }

  /**
   * Permission findUniqueOrThrow
   */
  export type PermissionFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Permission
     */
    select?: PermissionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Permission
     */
    omit?: PermissionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PermissionInclude<ExtArgs> | null
    /**
     * Filter, which Permission to fetch.
     */
    where: PermissionWhereUniqueInput
  }

  /**
   * Permission findFirst
   */
  export type PermissionFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Permission
     */
    select?: PermissionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Permission
     */
    omit?: PermissionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PermissionInclude<ExtArgs> | null
    /**
     * Filter, which Permission to fetch.
     */
    where?: PermissionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Permissions to fetch.
     */
    orderBy?: PermissionOrderByWithRelationInput | PermissionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Permissions.
     */
    cursor?: PermissionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Permissions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Permissions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Permissions.
     */
    distinct?: PermissionScalarFieldEnum | PermissionScalarFieldEnum[]
  }

  /**
   * Permission findFirstOrThrow
   */
  export type PermissionFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Permission
     */
    select?: PermissionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Permission
     */
    omit?: PermissionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PermissionInclude<ExtArgs> | null
    /**
     * Filter, which Permission to fetch.
     */
    where?: PermissionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Permissions to fetch.
     */
    orderBy?: PermissionOrderByWithRelationInput | PermissionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Permissions.
     */
    cursor?: PermissionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Permissions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Permissions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Permissions.
     */
    distinct?: PermissionScalarFieldEnum | PermissionScalarFieldEnum[]
  }

  /**
   * Permission findMany
   */
  export type PermissionFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Permission
     */
    select?: PermissionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Permission
     */
    omit?: PermissionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PermissionInclude<ExtArgs> | null
    /**
     * Filter, which Permissions to fetch.
     */
    where?: PermissionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Permissions to fetch.
     */
    orderBy?: PermissionOrderByWithRelationInput | PermissionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Permissions.
     */
    cursor?: PermissionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Permissions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Permissions.
     */
    skip?: number
    distinct?: PermissionScalarFieldEnum | PermissionScalarFieldEnum[]
  }

  /**
   * Permission create
   */
  export type PermissionCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Permission
     */
    select?: PermissionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Permission
     */
    omit?: PermissionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PermissionInclude<ExtArgs> | null
    /**
     * The data needed to create a Permission.
     */
    data: XOR<PermissionCreateInput, PermissionUncheckedCreateInput>
  }

  /**
   * Permission createMany
   */
  export type PermissionCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Permissions.
     */
    data: PermissionCreateManyInput | PermissionCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Permission update
   */
  export type PermissionUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Permission
     */
    select?: PermissionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Permission
     */
    omit?: PermissionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PermissionInclude<ExtArgs> | null
    /**
     * The data needed to update a Permission.
     */
    data: XOR<PermissionUpdateInput, PermissionUncheckedUpdateInput>
    /**
     * Choose, which Permission to update.
     */
    where: PermissionWhereUniqueInput
  }

  /**
   * Permission updateMany
   */
  export type PermissionUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Permissions.
     */
    data: XOR<PermissionUpdateManyMutationInput, PermissionUncheckedUpdateManyInput>
    /**
     * Filter which Permissions to update
     */
    where?: PermissionWhereInput
    /**
     * Limit how many Permissions to update.
     */
    limit?: number
  }

  /**
   * Permission upsert
   */
  export type PermissionUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Permission
     */
    select?: PermissionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Permission
     */
    omit?: PermissionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PermissionInclude<ExtArgs> | null
    /**
     * The filter to search for the Permission to update in case it exists.
     */
    where: PermissionWhereUniqueInput
    /**
     * In case the Permission found by the `where` argument doesn't exist, create a new Permission with this data.
     */
    create: XOR<PermissionCreateInput, PermissionUncheckedCreateInput>
    /**
     * In case the Permission was found with the provided `where` argument, update it with this data.
     */
    update: XOR<PermissionUpdateInput, PermissionUncheckedUpdateInput>
  }

  /**
   * Permission delete
   */
  export type PermissionDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Permission
     */
    select?: PermissionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Permission
     */
    omit?: PermissionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PermissionInclude<ExtArgs> | null
    /**
     * Filter which Permission to delete.
     */
    where: PermissionWhereUniqueInput
  }

  /**
   * Permission deleteMany
   */
  export type PermissionDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Permissions to delete
     */
    where?: PermissionWhereInput
    /**
     * Limit how many Permissions to delete.
     */
    limit?: number
  }

  /**
   * Permission.rolePermissions
   */
  export type Permission$rolePermissionsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RolePermission
     */
    select?: RolePermissionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RolePermission
     */
    omit?: RolePermissionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RolePermissionInclude<ExtArgs> | null
    where?: RolePermissionWhereInput
    orderBy?: RolePermissionOrderByWithRelationInput | RolePermissionOrderByWithRelationInput[]
    cursor?: RolePermissionWhereUniqueInput
    take?: number
    skip?: number
    distinct?: RolePermissionScalarFieldEnum | RolePermissionScalarFieldEnum[]
  }

  /**
   * Permission without action
   */
  export type PermissionDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Permission
     */
    select?: PermissionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Permission
     */
    omit?: PermissionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PermissionInclude<ExtArgs> | null
  }


  /**
   * Model RolePermission
   */

  export type AggregateRolePermission = {
    _count: RolePermissionCountAggregateOutputType | null
    _min: RolePermissionMinAggregateOutputType | null
    _max: RolePermissionMaxAggregateOutputType | null
  }

  export type RolePermissionMinAggregateOutputType = {
    id: string | null
    roleId: string | null
    permissionId: string | null
  }

  export type RolePermissionMaxAggregateOutputType = {
    id: string | null
    roleId: string | null
    permissionId: string | null
  }

  export type RolePermissionCountAggregateOutputType = {
    id: number
    roleId: number
    permissionId: number
    _all: number
  }


  export type RolePermissionMinAggregateInputType = {
    id?: true
    roleId?: true
    permissionId?: true
  }

  export type RolePermissionMaxAggregateInputType = {
    id?: true
    roleId?: true
    permissionId?: true
  }

  export type RolePermissionCountAggregateInputType = {
    id?: true
    roleId?: true
    permissionId?: true
    _all?: true
  }

  export type RolePermissionAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which RolePermission to aggregate.
     */
    where?: RolePermissionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of RolePermissions to fetch.
     */
    orderBy?: RolePermissionOrderByWithRelationInput | RolePermissionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: RolePermissionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` RolePermissions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` RolePermissions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned RolePermissions
    **/
    _count?: true | RolePermissionCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: RolePermissionMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: RolePermissionMaxAggregateInputType
  }

  export type GetRolePermissionAggregateType<T extends RolePermissionAggregateArgs> = {
        [P in keyof T & keyof AggregateRolePermission]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateRolePermission[P]>
      : GetScalarType<T[P], AggregateRolePermission[P]>
  }




  export type RolePermissionGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: RolePermissionWhereInput
    orderBy?: RolePermissionOrderByWithAggregationInput | RolePermissionOrderByWithAggregationInput[]
    by: RolePermissionScalarFieldEnum[] | RolePermissionScalarFieldEnum
    having?: RolePermissionScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: RolePermissionCountAggregateInputType | true
    _min?: RolePermissionMinAggregateInputType
    _max?: RolePermissionMaxAggregateInputType
  }

  export type RolePermissionGroupByOutputType = {
    id: string
    roleId: string
    permissionId: string
    _count: RolePermissionCountAggregateOutputType | null
    _min: RolePermissionMinAggregateOutputType | null
    _max: RolePermissionMaxAggregateOutputType | null
  }

  type GetRolePermissionGroupByPayload<T extends RolePermissionGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<RolePermissionGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof RolePermissionGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], RolePermissionGroupByOutputType[P]>
            : GetScalarType<T[P], RolePermissionGroupByOutputType[P]>
        }
      >
    >


  export type RolePermissionSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    roleId?: boolean
    permissionId?: boolean
    role?: boolean | RoleDefaultArgs<ExtArgs>
    permission?: boolean | PermissionDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["rolePermission"]>



  export type RolePermissionSelectScalar = {
    id?: boolean
    roleId?: boolean
    permissionId?: boolean
  }

  export type RolePermissionOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "roleId" | "permissionId", ExtArgs["result"]["rolePermission"]>
  export type RolePermissionInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    role?: boolean | RoleDefaultArgs<ExtArgs>
    permission?: boolean | PermissionDefaultArgs<ExtArgs>
  }

  export type $RolePermissionPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "RolePermission"
    objects: {
      role: Prisma.$RolePayload<ExtArgs>
      permission: Prisma.$PermissionPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      roleId: string
      permissionId: string
    }, ExtArgs["result"]["rolePermission"]>
    composites: {}
  }

  type RolePermissionGetPayload<S extends boolean | null | undefined | RolePermissionDefaultArgs> = $Result.GetResult<Prisma.$RolePermissionPayload, S>

  type RolePermissionCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<RolePermissionFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: RolePermissionCountAggregateInputType | true
    }

  export interface RolePermissionDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['RolePermission'], meta: { name: 'RolePermission' } }
    /**
     * Find zero or one RolePermission that matches the filter.
     * @param {RolePermissionFindUniqueArgs} args - Arguments to find a RolePermission
     * @example
     * // Get one RolePermission
     * const rolePermission = await prisma.rolePermission.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends RolePermissionFindUniqueArgs>(args: SelectSubset<T, RolePermissionFindUniqueArgs<ExtArgs>>): Prisma__RolePermissionClient<$Result.GetResult<Prisma.$RolePermissionPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one RolePermission that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {RolePermissionFindUniqueOrThrowArgs} args - Arguments to find a RolePermission
     * @example
     * // Get one RolePermission
     * const rolePermission = await prisma.rolePermission.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends RolePermissionFindUniqueOrThrowArgs>(args: SelectSubset<T, RolePermissionFindUniqueOrThrowArgs<ExtArgs>>): Prisma__RolePermissionClient<$Result.GetResult<Prisma.$RolePermissionPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first RolePermission that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RolePermissionFindFirstArgs} args - Arguments to find a RolePermission
     * @example
     * // Get one RolePermission
     * const rolePermission = await prisma.rolePermission.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends RolePermissionFindFirstArgs>(args?: SelectSubset<T, RolePermissionFindFirstArgs<ExtArgs>>): Prisma__RolePermissionClient<$Result.GetResult<Prisma.$RolePermissionPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first RolePermission that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RolePermissionFindFirstOrThrowArgs} args - Arguments to find a RolePermission
     * @example
     * // Get one RolePermission
     * const rolePermission = await prisma.rolePermission.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends RolePermissionFindFirstOrThrowArgs>(args?: SelectSubset<T, RolePermissionFindFirstOrThrowArgs<ExtArgs>>): Prisma__RolePermissionClient<$Result.GetResult<Prisma.$RolePermissionPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more RolePermissions that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RolePermissionFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all RolePermissions
     * const rolePermissions = await prisma.rolePermission.findMany()
     * 
     * // Get first 10 RolePermissions
     * const rolePermissions = await prisma.rolePermission.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const rolePermissionWithIdOnly = await prisma.rolePermission.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends RolePermissionFindManyArgs>(args?: SelectSubset<T, RolePermissionFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$RolePermissionPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a RolePermission.
     * @param {RolePermissionCreateArgs} args - Arguments to create a RolePermission.
     * @example
     * // Create one RolePermission
     * const RolePermission = await prisma.rolePermission.create({
     *   data: {
     *     // ... data to create a RolePermission
     *   }
     * })
     * 
     */
    create<T extends RolePermissionCreateArgs>(args: SelectSubset<T, RolePermissionCreateArgs<ExtArgs>>): Prisma__RolePermissionClient<$Result.GetResult<Prisma.$RolePermissionPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many RolePermissions.
     * @param {RolePermissionCreateManyArgs} args - Arguments to create many RolePermissions.
     * @example
     * // Create many RolePermissions
     * const rolePermission = await prisma.rolePermission.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends RolePermissionCreateManyArgs>(args?: SelectSubset<T, RolePermissionCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a RolePermission.
     * @param {RolePermissionDeleteArgs} args - Arguments to delete one RolePermission.
     * @example
     * // Delete one RolePermission
     * const RolePermission = await prisma.rolePermission.delete({
     *   where: {
     *     // ... filter to delete one RolePermission
     *   }
     * })
     * 
     */
    delete<T extends RolePermissionDeleteArgs>(args: SelectSubset<T, RolePermissionDeleteArgs<ExtArgs>>): Prisma__RolePermissionClient<$Result.GetResult<Prisma.$RolePermissionPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one RolePermission.
     * @param {RolePermissionUpdateArgs} args - Arguments to update one RolePermission.
     * @example
     * // Update one RolePermission
     * const rolePermission = await prisma.rolePermission.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends RolePermissionUpdateArgs>(args: SelectSubset<T, RolePermissionUpdateArgs<ExtArgs>>): Prisma__RolePermissionClient<$Result.GetResult<Prisma.$RolePermissionPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more RolePermissions.
     * @param {RolePermissionDeleteManyArgs} args - Arguments to filter RolePermissions to delete.
     * @example
     * // Delete a few RolePermissions
     * const { count } = await prisma.rolePermission.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends RolePermissionDeleteManyArgs>(args?: SelectSubset<T, RolePermissionDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more RolePermissions.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RolePermissionUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many RolePermissions
     * const rolePermission = await prisma.rolePermission.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends RolePermissionUpdateManyArgs>(args: SelectSubset<T, RolePermissionUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one RolePermission.
     * @param {RolePermissionUpsertArgs} args - Arguments to update or create a RolePermission.
     * @example
     * // Update or create a RolePermission
     * const rolePermission = await prisma.rolePermission.upsert({
     *   create: {
     *     // ... data to create a RolePermission
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the RolePermission we want to update
     *   }
     * })
     */
    upsert<T extends RolePermissionUpsertArgs>(args: SelectSubset<T, RolePermissionUpsertArgs<ExtArgs>>): Prisma__RolePermissionClient<$Result.GetResult<Prisma.$RolePermissionPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of RolePermissions.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RolePermissionCountArgs} args - Arguments to filter RolePermissions to count.
     * @example
     * // Count the number of RolePermissions
     * const count = await prisma.rolePermission.count({
     *   where: {
     *     // ... the filter for the RolePermissions we want to count
     *   }
     * })
    **/
    count<T extends RolePermissionCountArgs>(
      args?: Subset<T, RolePermissionCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], RolePermissionCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a RolePermission.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RolePermissionAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends RolePermissionAggregateArgs>(args: Subset<T, RolePermissionAggregateArgs>): Prisma.PrismaPromise<GetRolePermissionAggregateType<T>>

    /**
     * Group by RolePermission.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RolePermissionGroupByArgs} args - Group by arguments.
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
      T extends RolePermissionGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: RolePermissionGroupByArgs['orderBy'] }
        : { orderBy?: RolePermissionGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, RolePermissionGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetRolePermissionGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the RolePermission model
   */
  readonly fields: RolePermissionFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for RolePermission.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__RolePermissionClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    role<T extends RoleDefaultArgs<ExtArgs> = {}>(args?: Subset<T, RoleDefaultArgs<ExtArgs>>): Prisma__RoleClient<$Result.GetResult<Prisma.$RolePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    permission<T extends PermissionDefaultArgs<ExtArgs> = {}>(args?: Subset<T, PermissionDefaultArgs<ExtArgs>>): Prisma__PermissionClient<$Result.GetResult<Prisma.$PermissionPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the RolePermission model
   */
  interface RolePermissionFieldRefs {
    readonly id: FieldRef<"RolePermission", 'String'>
    readonly roleId: FieldRef<"RolePermission", 'String'>
    readonly permissionId: FieldRef<"RolePermission", 'String'>
  }
    

  // Custom InputTypes
  /**
   * RolePermission findUnique
   */
  export type RolePermissionFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RolePermission
     */
    select?: RolePermissionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RolePermission
     */
    omit?: RolePermissionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RolePermissionInclude<ExtArgs> | null
    /**
     * Filter, which RolePermission to fetch.
     */
    where: RolePermissionWhereUniqueInput
  }

  /**
   * RolePermission findUniqueOrThrow
   */
  export type RolePermissionFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RolePermission
     */
    select?: RolePermissionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RolePermission
     */
    omit?: RolePermissionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RolePermissionInclude<ExtArgs> | null
    /**
     * Filter, which RolePermission to fetch.
     */
    where: RolePermissionWhereUniqueInput
  }

  /**
   * RolePermission findFirst
   */
  export type RolePermissionFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RolePermission
     */
    select?: RolePermissionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RolePermission
     */
    omit?: RolePermissionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RolePermissionInclude<ExtArgs> | null
    /**
     * Filter, which RolePermission to fetch.
     */
    where?: RolePermissionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of RolePermissions to fetch.
     */
    orderBy?: RolePermissionOrderByWithRelationInput | RolePermissionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for RolePermissions.
     */
    cursor?: RolePermissionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` RolePermissions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` RolePermissions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of RolePermissions.
     */
    distinct?: RolePermissionScalarFieldEnum | RolePermissionScalarFieldEnum[]
  }

  /**
   * RolePermission findFirstOrThrow
   */
  export type RolePermissionFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RolePermission
     */
    select?: RolePermissionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RolePermission
     */
    omit?: RolePermissionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RolePermissionInclude<ExtArgs> | null
    /**
     * Filter, which RolePermission to fetch.
     */
    where?: RolePermissionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of RolePermissions to fetch.
     */
    orderBy?: RolePermissionOrderByWithRelationInput | RolePermissionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for RolePermissions.
     */
    cursor?: RolePermissionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` RolePermissions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` RolePermissions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of RolePermissions.
     */
    distinct?: RolePermissionScalarFieldEnum | RolePermissionScalarFieldEnum[]
  }

  /**
   * RolePermission findMany
   */
  export type RolePermissionFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RolePermission
     */
    select?: RolePermissionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RolePermission
     */
    omit?: RolePermissionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RolePermissionInclude<ExtArgs> | null
    /**
     * Filter, which RolePermissions to fetch.
     */
    where?: RolePermissionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of RolePermissions to fetch.
     */
    orderBy?: RolePermissionOrderByWithRelationInput | RolePermissionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing RolePermissions.
     */
    cursor?: RolePermissionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` RolePermissions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` RolePermissions.
     */
    skip?: number
    distinct?: RolePermissionScalarFieldEnum | RolePermissionScalarFieldEnum[]
  }

  /**
   * RolePermission create
   */
  export type RolePermissionCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RolePermission
     */
    select?: RolePermissionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RolePermission
     */
    omit?: RolePermissionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RolePermissionInclude<ExtArgs> | null
    /**
     * The data needed to create a RolePermission.
     */
    data: XOR<RolePermissionCreateInput, RolePermissionUncheckedCreateInput>
  }

  /**
   * RolePermission createMany
   */
  export type RolePermissionCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many RolePermissions.
     */
    data: RolePermissionCreateManyInput | RolePermissionCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * RolePermission update
   */
  export type RolePermissionUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RolePermission
     */
    select?: RolePermissionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RolePermission
     */
    omit?: RolePermissionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RolePermissionInclude<ExtArgs> | null
    /**
     * The data needed to update a RolePermission.
     */
    data: XOR<RolePermissionUpdateInput, RolePermissionUncheckedUpdateInput>
    /**
     * Choose, which RolePermission to update.
     */
    where: RolePermissionWhereUniqueInput
  }

  /**
   * RolePermission updateMany
   */
  export type RolePermissionUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update RolePermissions.
     */
    data: XOR<RolePermissionUpdateManyMutationInput, RolePermissionUncheckedUpdateManyInput>
    /**
     * Filter which RolePermissions to update
     */
    where?: RolePermissionWhereInput
    /**
     * Limit how many RolePermissions to update.
     */
    limit?: number
  }

  /**
   * RolePermission upsert
   */
  export type RolePermissionUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RolePermission
     */
    select?: RolePermissionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RolePermission
     */
    omit?: RolePermissionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RolePermissionInclude<ExtArgs> | null
    /**
     * The filter to search for the RolePermission to update in case it exists.
     */
    where: RolePermissionWhereUniqueInput
    /**
     * In case the RolePermission found by the `where` argument doesn't exist, create a new RolePermission with this data.
     */
    create: XOR<RolePermissionCreateInput, RolePermissionUncheckedCreateInput>
    /**
     * In case the RolePermission was found with the provided `where` argument, update it with this data.
     */
    update: XOR<RolePermissionUpdateInput, RolePermissionUncheckedUpdateInput>
  }

  /**
   * RolePermission delete
   */
  export type RolePermissionDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RolePermission
     */
    select?: RolePermissionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RolePermission
     */
    omit?: RolePermissionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RolePermissionInclude<ExtArgs> | null
    /**
     * Filter which RolePermission to delete.
     */
    where: RolePermissionWhereUniqueInput
  }

  /**
   * RolePermission deleteMany
   */
  export type RolePermissionDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which RolePermissions to delete
     */
    where?: RolePermissionWhereInput
    /**
     * Limit how many RolePermissions to delete.
     */
    limit?: number
  }

  /**
   * RolePermission without action
   */
  export type RolePermissionDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RolePermission
     */
    select?: RolePermissionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RolePermission
     */
    omit?: RolePermissionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RolePermissionInclude<ExtArgs> | null
  }


  /**
   * Model DiagnosticUserRole
   */

  export type AggregateDiagnosticUserRole = {
    _count: DiagnosticUserRoleCountAggregateOutputType | null
    _min: DiagnosticUserRoleMinAggregateOutputType | null
    _max: DiagnosticUserRoleMaxAggregateOutputType | null
  }

  export type DiagnosticUserRoleMinAggregateOutputType = {
    id: string | null
    DiagnosticChildUserId: string | null
    roleId: string | null
    createdAt: Date | null
  }

  export type DiagnosticUserRoleMaxAggregateOutputType = {
    id: string | null
    DiagnosticChildUserId: string | null
    roleId: string | null
    createdAt: Date | null
  }

  export type DiagnosticUserRoleCountAggregateOutputType = {
    id: number
    DiagnosticChildUserId: number
    roleId: number
    createdAt: number
    _all: number
  }


  export type DiagnosticUserRoleMinAggregateInputType = {
    id?: true
    DiagnosticChildUserId?: true
    roleId?: true
    createdAt?: true
  }

  export type DiagnosticUserRoleMaxAggregateInputType = {
    id?: true
    DiagnosticChildUserId?: true
    roleId?: true
    createdAt?: true
  }

  export type DiagnosticUserRoleCountAggregateInputType = {
    id?: true
    DiagnosticChildUserId?: true
    roleId?: true
    createdAt?: true
    _all?: true
  }

  export type DiagnosticUserRoleAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which DiagnosticUserRole to aggregate.
     */
    where?: DiagnosticUserRoleWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of DiagnosticUserRoles to fetch.
     */
    orderBy?: DiagnosticUserRoleOrderByWithRelationInput | DiagnosticUserRoleOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: DiagnosticUserRoleWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` DiagnosticUserRoles from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` DiagnosticUserRoles.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned DiagnosticUserRoles
    **/
    _count?: true | DiagnosticUserRoleCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: DiagnosticUserRoleMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: DiagnosticUserRoleMaxAggregateInputType
  }

  export type GetDiagnosticUserRoleAggregateType<T extends DiagnosticUserRoleAggregateArgs> = {
        [P in keyof T & keyof AggregateDiagnosticUserRole]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateDiagnosticUserRole[P]>
      : GetScalarType<T[P], AggregateDiagnosticUserRole[P]>
  }




  export type DiagnosticUserRoleGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: DiagnosticUserRoleWhereInput
    orderBy?: DiagnosticUserRoleOrderByWithAggregationInput | DiagnosticUserRoleOrderByWithAggregationInput[]
    by: DiagnosticUserRoleScalarFieldEnum[] | DiagnosticUserRoleScalarFieldEnum
    having?: DiagnosticUserRoleScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: DiagnosticUserRoleCountAggregateInputType | true
    _min?: DiagnosticUserRoleMinAggregateInputType
    _max?: DiagnosticUserRoleMaxAggregateInputType
  }

  export type DiagnosticUserRoleGroupByOutputType = {
    id: string
    DiagnosticChildUserId: string
    roleId: string
    createdAt: Date
    _count: DiagnosticUserRoleCountAggregateOutputType | null
    _min: DiagnosticUserRoleMinAggregateOutputType | null
    _max: DiagnosticUserRoleMaxAggregateOutputType | null
  }

  type GetDiagnosticUserRoleGroupByPayload<T extends DiagnosticUserRoleGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<DiagnosticUserRoleGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof DiagnosticUserRoleGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], DiagnosticUserRoleGroupByOutputType[P]>
            : GetScalarType<T[P], DiagnosticUserRoleGroupByOutputType[P]>
        }
      >
    >


  export type DiagnosticUserRoleSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    DiagnosticChildUserId?: boolean
    roleId?: boolean
    createdAt?: boolean
    DiagnosticChildUser?: boolean | DiagnosticChildUserDefaultArgs<ExtArgs>
    role?: boolean | RoleDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["diagnosticUserRole"]>



  export type DiagnosticUserRoleSelectScalar = {
    id?: boolean
    DiagnosticChildUserId?: boolean
    roleId?: boolean
    createdAt?: boolean
  }

  export type DiagnosticUserRoleOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "DiagnosticChildUserId" | "roleId" | "createdAt", ExtArgs["result"]["diagnosticUserRole"]>
  export type DiagnosticUserRoleInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    DiagnosticChildUser?: boolean | DiagnosticChildUserDefaultArgs<ExtArgs>
    role?: boolean | RoleDefaultArgs<ExtArgs>
  }

  export type $DiagnosticUserRolePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "DiagnosticUserRole"
    objects: {
      DiagnosticChildUser: Prisma.$DiagnosticChildUserPayload<ExtArgs>
      role: Prisma.$RolePayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      DiagnosticChildUserId: string
      roleId: string
      createdAt: Date
    }, ExtArgs["result"]["diagnosticUserRole"]>
    composites: {}
  }

  type DiagnosticUserRoleGetPayload<S extends boolean | null | undefined | DiagnosticUserRoleDefaultArgs> = $Result.GetResult<Prisma.$DiagnosticUserRolePayload, S>

  type DiagnosticUserRoleCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<DiagnosticUserRoleFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: DiagnosticUserRoleCountAggregateInputType | true
    }

  export interface DiagnosticUserRoleDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['DiagnosticUserRole'], meta: { name: 'DiagnosticUserRole' } }
    /**
     * Find zero or one DiagnosticUserRole that matches the filter.
     * @param {DiagnosticUserRoleFindUniqueArgs} args - Arguments to find a DiagnosticUserRole
     * @example
     * // Get one DiagnosticUserRole
     * const diagnosticUserRole = await prisma.diagnosticUserRole.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends DiagnosticUserRoleFindUniqueArgs>(args: SelectSubset<T, DiagnosticUserRoleFindUniqueArgs<ExtArgs>>): Prisma__DiagnosticUserRoleClient<$Result.GetResult<Prisma.$DiagnosticUserRolePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one DiagnosticUserRole that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {DiagnosticUserRoleFindUniqueOrThrowArgs} args - Arguments to find a DiagnosticUserRole
     * @example
     * // Get one DiagnosticUserRole
     * const diagnosticUserRole = await prisma.diagnosticUserRole.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends DiagnosticUserRoleFindUniqueOrThrowArgs>(args: SelectSubset<T, DiagnosticUserRoleFindUniqueOrThrowArgs<ExtArgs>>): Prisma__DiagnosticUserRoleClient<$Result.GetResult<Prisma.$DiagnosticUserRolePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first DiagnosticUserRole that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DiagnosticUserRoleFindFirstArgs} args - Arguments to find a DiagnosticUserRole
     * @example
     * // Get one DiagnosticUserRole
     * const diagnosticUserRole = await prisma.diagnosticUserRole.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends DiagnosticUserRoleFindFirstArgs>(args?: SelectSubset<T, DiagnosticUserRoleFindFirstArgs<ExtArgs>>): Prisma__DiagnosticUserRoleClient<$Result.GetResult<Prisma.$DiagnosticUserRolePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first DiagnosticUserRole that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DiagnosticUserRoleFindFirstOrThrowArgs} args - Arguments to find a DiagnosticUserRole
     * @example
     * // Get one DiagnosticUserRole
     * const diagnosticUserRole = await prisma.diagnosticUserRole.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends DiagnosticUserRoleFindFirstOrThrowArgs>(args?: SelectSubset<T, DiagnosticUserRoleFindFirstOrThrowArgs<ExtArgs>>): Prisma__DiagnosticUserRoleClient<$Result.GetResult<Prisma.$DiagnosticUserRolePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more DiagnosticUserRoles that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DiagnosticUserRoleFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all DiagnosticUserRoles
     * const diagnosticUserRoles = await prisma.diagnosticUserRole.findMany()
     * 
     * // Get first 10 DiagnosticUserRoles
     * const diagnosticUserRoles = await prisma.diagnosticUserRole.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const diagnosticUserRoleWithIdOnly = await prisma.diagnosticUserRole.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends DiagnosticUserRoleFindManyArgs>(args?: SelectSubset<T, DiagnosticUserRoleFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$DiagnosticUserRolePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a DiagnosticUserRole.
     * @param {DiagnosticUserRoleCreateArgs} args - Arguments to create a DiagnosticUserRole.
     * @example
     * // Create one DiagnosticUserRole
     * const DiagnosticUserRole = await prisma.diagnosticUserRole.create({
     *   data: {
     *     // ... data to create a DiagnosticUserRole
     *   }
     * })
     * 
     */
    create<T extends DiagnosticUserRoleCreateArgs>(args: SelectSubset<T, DiagnosticUserRoleCreateArgs<ExtArgs>>): Prisma__DiagnosticUserRoleClient<$Result.GetResult<Prisma.$DiagnosticUserRolePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many DiagnosticUserRoles.
     * @param {DiagnosticUserRoleCreateManyArgs} args - Arguments to create many DiagnosticUserRoles.
     * @example
     * // Create many DiagnosticUserRoles
     * const diagnosticUserRole = await prisma.diagnosticUserRole.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends DiagnosticUserRoleCreateManyArgs>(args?: SelectSubset<T, DiagnosticUserRoleCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a DiagnosticUserRole.
     * @param {DiagnosticUserRoleDeleteArgs} args - Arguments to delete one DiagnosticUserRole.
     * @example
     * // Delete one DiagnosticUserRole
     * const DiagnosticUserRole = await prisma.diagnosticUserRole.delete({
     *   where: {
     *     // ... filter to delete one DiagnosticUserRole
     *   }
     * })
     * 
     */
    delete<T extends DiagnosticUserRoleDeleteArgs>(args: SelectSubset<T, DiagnosticUserRoleDeleteArgs<ExtArgs>>): Prisma__DiagnosticUserRoleClient<$Result.GetResult<Prisma.$DiagnosticUserRolePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one DiagnosticUserRole.
     * @param {DiagnosticUserRoleUpdateArgs} args - Arguments to update one DiagnosticUserRole.
     * @example
     * // Update one DiagnosticUserRole
     * const diagnosticUserRole = await prisma.diagnosticUserRole.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends DiagnosticUserRoleUpdateArgs>(args: SelectSubset<T, DiagnosticUserRoleUpdateArgs<ExtArgs>>): Prisma__DiagnosticUserRoleClient<$Result.GetResult<Prisma.$DiagnosticUserRolePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more DiagnosticUserRoles.
     * @param {DiagnosticUserRoleDeleteManyArgs} args - Arguments to filter DiagnosticUserRoles to delete.
     * @example
     * // Delete a few DiagnosticUserRoles
     * const { count } = await prisma.diagnosticUserRole.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends DiagnosticUserRoleDeleteManyArgs>(args?: SelectSubset<T, DiagnosticUserRoleDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more DiagnosticUserRoles.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DiagnosticUserRoleUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many DiagnosticUserRoles
     * const diagnosticUserRole = await prisma.diagnosticUserRole.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends DiagnosticUserRoleUpdateManyArgs>(args: SelectSubset<T, DiagnosticUserRoleUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one DiagnosticUserRole.
     * @param {DiagnosticUserRoleUpsertArgs} args - Arguments to update or create a DiagnosticUserRole.
     * @example
     * // Update or create a DiagnosticUserRole
     * const diagnosticUserRole = await prisma.diagnosticUserRole.upsert({
     *   create: {
     *     // ... data to create a DiagnosticUserRole
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the DiagnosticUserRole we want to update
     *   }
     * })
     */
    upsert<T extends DiagnosticUserRoleUpsertArgs>(args: SelectSubset<T, DiagnosticUserRoleUpsertArgs<ExtArgs>>): Prisma__DiagnosticUserRoleClient<$Result.GetResult<Prisma.$DiagnosticUserRolePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of DiagnosticUserRoles.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DiagnosticUserRoleCountArgs} args - Arguments to filter DiagnosticUserRoles to count.
     * @example
     * // Count the number of DiagnosticUserRoles
     * const count = await prisma.diagnosticUserRole.count({
     *   where: {
     *     // ... the filter for the DiagnosticUserRoles we want to count
     *   }
     * })
    **/
    count<T extends DiagnosticUserRoleCountArgs>(
      args?: Subset<T, DiagnosticUserRoleCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], DiagnosticUserRoleCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a DiagnosticUserRole.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DiagnosticUserRoleAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends DiagnosticUserRoleAggregateArgs>(args: Subset<T, DiagnosticUserRoleAggregateArgs>): Prisma.PrismaPromise<GetDiagnosticUserRoleAggregateType<T>>

    /**
     * Group by DiagnosticUserRole.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DiagnosticUserRoleGroupByArgs} args - Group by arguments.
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
      T extends DiagnosticUserRoleGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: DiagnosticUserRoleGroupByArgs['orderBy'] }
        : { orderBy?: DiagnosticUserRoleGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, DiagnosticUserRoleGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetDiagnosticUserRoleGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the DiagnosticUserRole model
   */
  readonly fields: DiagnosticUserRoleFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for DiagnosticUserRole.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__DiagnosticUserRoleClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    DiagnosticChildUser<T extends DiagnosticChildUserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, DiagnosticChildUserDefaultArgs<ExtArgs>>): Prisma__DiagnosticChildUserClient<$Result.GetResult<Prisma.$DiagnosticChildUserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    role<T extends RoleDefaultArgs<ExtArgs> = {}>(args?: Subset<T, RoleDefaultArgs<ExtArgs>>): Prisma__RoleClient<$Result.GetResult<Prisma.$RolePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the DiagnosticUserRole model
   */
  interface DiagnosticUserRoleFieldRefs {
    readonly id: FieldRef<"DiagnosticUserRole", 'String'>
    readonly DiagnosticChildUserId: FieldRef<"DiagnosticUserRole", 'String'>
    readonly roleId: FieldRef<"DiagnosticUserRole", 'String'>
    readonly createdAt: FieldRef<"DiagnosticUserRole", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * DiagnosticUserRole findUnique
   */
  export type DiagnosticUserRoleFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DiagnosticUserRole
     */
    select?: DiagnosticUserRoleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DiagnosticUserRole
     */
    omit?: DiagnosticUserRoleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DiagnosticUserRoleInclude<ExtArgs> | null
    /**
     * Filter, which DiagnosticUserRole to fetch.
     */
    where: DiagnosticUserRoleWhereUniqueInput
  }

  /**
   * DiagnosticUserRole findUniqueOrThrow
   */
  export type DiagnosticUserRoleFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DiagnosticUserRole
     */
    select?: DiagnosticUserRoleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DiagnosticUserRole
     */
    omit?: DiagnosticUserRoleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DiagnosticUserRoleInclude<ExtArgs> | null
    /**
     * Filter, which DiagnosticUserRole to fetch.
     */
    where: DiagnosticUserRoleWhereUniqueInput
  }

  /**
   * DiagnosticUserRole findFirst
   */
  export type DiagnosticUserRoleFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DiagnosticUserRole
     */
    select?: DiagnosticUserRoleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DiagnosticUserRole
     */
    omit?: DiagnosticUserRoleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DiagnosticUserRoleInclude<ExtArgs> | null
    /**
     * Filter, which DiagnosticUserRole to fetch.
     */
    where?: DiagnosticUserRoleWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of DiagnosticUserRoles to fetch.
     */
    orderBy?: DiagnosticUserRoleOrderByWithRelationInput | DiagnosticUserRoleOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for DiagnosticUserRoles.
     */
    cursor?: DiagnosticUserRoleWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` DiagnosticUserRoles from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` DiagnosticUserRoles.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of DiagnosticUserRoles.
     */
    distinct?: DiagnosticUserRoleScalarFieldEnum | DiagnosticUserRoleScalarFieldEnum[]
  }

  /**
   * DiagnosticUserRole findFirstOrThrow
   */
  export type DiagnosticUserRoleFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DiagnosticUserRole
     */
    select?: DiagnosticUserRoleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DiagnosticUserRole
     */
    omit?: DiagnosticUserRoleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DiagnosticUserRoleInclude<ExtArgs> | null
    /**
     * Filter, which DiagnosticUserRole to fetch.
     */
    where?: DiagnosticUserRoleWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of DiagnosticUserRoles to fetch.
     */
    orderBy?: DiagnosticUserRoleOrderByWithRelationInput | DiagnosticUserRoleOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for DiagnosticUserRoles.
     */
    cursor?: DiagnosticUserRoleWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` DiagnosticUserRoles from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` DiagnosticUserRoles.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of DiagnosticUserRoles.
     */
    distinct?: DiagnosticUserRoleScalarFieldEnum | DiagnosticUserRoleScalarFieldEnum[]
  }

  /**
   * DiagnosticUserRole findMany
   */
  export type DiagnosticUserRoleFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DiagnosticUserRole
     */
    select?: DiagnosticUserRoleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DiagnosticUserRole
     */
    omit?: DiagnosticUserRoleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DiagnosticUserRoleInclude<ExtArgs> | null
    /**
     * Filter, which DiagnosticUserRoles to fetch.
     */
    where?: DiagnosticUserRoleWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of DiagnosticUserRoles to fetch.
     */
    orderBy?: DiagnosticUserRoleOrderByWithRelationInput | DiagnosticUserRoleOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing DiagnosticUserRoles.
     */
    cursor?: DiagnosticUserRoleWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` DiagnosticUserRoles from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` DiagnosticUserRoles.
     */
    skip?: number
    distinct?: DiagnosticUserRoleScalarFieldEnum | DiagnosticUserRoleScalarFieldEnum[]
  }

  /**
   * DiagnosticUserRole create
   */
  export type DiagnosticUserRoleCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DiagnosticUserRole
     */
    select?: DiagnosticUserRoleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DiagnosticUserRole
     */
    omit?: DiagnosticUserRoleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DiagnosticUserRoleInclude<ExtArgs> | null
    /**
     * The data needed to create a DiagnosticUserRole.
     */
    data: XOR<DiagnosticUserRoleCreateInput, DiagnosticUserRoleUncheckedCreateInput>
  }

  /**
   * DiagnosticUserRole createMany
   */
  export type DiagnosticUserRoleCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many DiagnosticUserRoles.
     */
    data: DiagnosticUserRoleCreateManyInput | DiagnosticUserRoleCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * DiagnosticUserRole update
   */
  export type DiagnosticUserRoleUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DiagnosticUserRole
     */
    select?: DiagnosticUserRoleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DiagnosticUserRole
     */
    omit?: DiagnosticUserRoleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DiagnosticUserRoleInclude<ExtArgs> | null
    /**
     * The data needed to update a DiagnosticUserRole.
     */
    data: XOR<DiagnosticUserRoleUpdateInput, DiagnosticUserRoleUncheckedUpdateInput>
    /**
     * Choose, which DiagnosticUserRole to update.
     */
    where: DiagnosticUserRoleWhereUniqueInput
  }

  /**
   * DiagnosticUserRole updateMany
   */
  export type DiagnosticUserRoleUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update DiagnosticUserRoles.
     */
    data: XOR<DiagnosticUserRoleUpdateManyMutationInput, DiagnosticUserRoleUncheckedUpdateManyInput>
    /**
     * Filter which DiagnosticUserRoles to update
     */
    where?: DiagnosticUserRoleWhereInput
    /**
     * Limit how many DiagnosticUserRoles to update.
     */
    limit?: number
  }

  /**
   * DiagnosticUserRole upsert
   */
  export type DiagnosticUserRoleUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DiagnosticUserRole
     */
    select?: DiagnosticUserRoleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DiagnosticUserRole
     */
    omit?: DiagnosticUserRoleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DiagnosticUserRoleInclude<ExtArgs> | null
    /**
     * The filter to search for the DiagnosticUserRole to update in case it exists.
     */
    where: DiagnosticUserRoleWhereUniqueInput
    /**
     * In case the DiagnosticUserRole found by the `where` argument doesn't exist, create a new DiagnosticUserRole with this data.
     */
    create: XOR<DiagnosticUserRoleCreateInput, DiagnosticUserRoleUncheckedCreateInput>
    /**
     * In case the DiagnosticUserRole was found with the provided `where` argument, update it with this data.
     */
    update: XOR<DiagnosticUserRoleUpdateInput, DiagnosticUserRoleUncheckedUpdateInput>
  }

  /**
   * DiagnosticUserRole delete
   */
  export type DiagnosticUserRoleDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DiagnosticUserRole
     */
    select?: DiagnosticUserRoleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DiagnosticUserRole
     */
    omit?: DiagnosticUserRoleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DiagnosticUserRoleInclude<ExtArgs> | null
    /**
     * Filter which DiagnosticUserRole to delete.
     */
    where: DiagnosticUserRoleWhereUniqueInput
  }

  /**
   * DiagnosticUserRole deleteMany
   */
  export type DiagnosticUserRoleDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which DiagnosticUserRoles to delete
     */
    where?: DiagnosticUserRoleWhereInput
    /**
     * Limit how many DiagnosticUserRoles to delete.
     */
    limit?: number
  }

  /**
   * DiagnosticUserRole without action
   */
  export type DiagnosticUserRoleDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DiagnosticUserRole
     */
    select?: DiagnosticUserRoleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DiagnosticUserRole
     */
    omit?: DiagnosticUserRoleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DiagnosticUserRoleInclude<ExtArgs> | null
  }


  /**
   * Model SuperAdminUserRole
   */

  export type AggregateSuperAdminUserRole = {
    _count: SuperAdminUserRoleCountAggregateOutputType | null
    _min: SuperAdminUserRoleMinAggregateOutputType | null
    _max: SuperAdminUserRoleMaxAggregateOutputType | null
  }

  export type SuperAdminUserRoleMinAggregateOutputType = {
    id: string | null
    superAdminId: string | null
    roleId: string | null
    createdAt: Date | null
  }

  export type SuperAdminUserRoleMaxAggregateOutputType = {
    id: string | null
    superAdminId: string | null
    roleId: string | null
    createdAt: Date | null
  }

  export type SuperAdminUserRoleCountAggregateOutputType = {
    id: number
    superAdminId: number
    roleId: number
    createdAt: number
    _all: number
  }


  export type SuperAdminUserRoleMinAggregateInputType = {
    id?: true
    superAdminId?: true
    roleId?: true
    createdAt?: true
  }

  export type SuperAdminUserRoleMaxAggregateInputType = {
    id?: true
    superAdminId?: true
    roleId?: true
    createdAt?: true
  }

  export type SuperAdminUserRoleCountAggregateInputType = {
    id?: true
    superAdminId?: true
    roleId?: true
    createdAt?: true
    _all?: true
  }

  export type SuperAdminUserRoleAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which SuperAdminUserRole to aggregate.
     */
    where?: SuperAdminUserRoleWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of SuperAdminUserRoles to fetch.
     */
    orderBy?: SuperAdminUserRoleOrderByWithRelationInput | SuperAdminUserRoleOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: SuperAdminUserRoleWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` SuperAdminUserRoles from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` SuperAdminUserRoles.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned SuperAdminUserRoles
    **/
    _count?: true | SuperAdminUserRoleCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: SuperAdminUserRoleMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: SuperAdminUserRoleMaxAggregateInputType
  }

  export type GetSuperAdminUserRoleAggregateType<T extends SuperAdminUserRoleAggregateArgs> = {
        [P in keyof T & keyof AggregateSuperAdminUserRole]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateSuperAdminUserRole[P]>
      : GetScalarType<T[P], AggregateSuperAdminUserRole[P]>
  }




  export type SuperAdminUserRoleGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: SuperAdminUserRoleWhereInput
    orderBy?: SuperAdminUserRoleOrderByWithAggregationInput | SuperAdminUserRoleOrderByWithAggregationInput[]
    by: SuperAdminUserRoleScalarFieldEnum[] | SuperAdminUserRoleScalarFieldEnum
    having?: SuperAdminUserRoleScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: SuperAdminUserRoleCountAggregateInputType | true
    _min?: SuperAdminUserRoleMinAggregateInputType
    _max?: SuperAdminUserRoleMaxAggregateInputType
  }

  export type SuperAdminUserRoleGroupByOutputType = {
    id: string
    superAdminId: string
    roleId: string
    createdAt: Date
    _count: SuperAdminUserRoleCountAggregateOutputType | null
    _min: SuperAdminUserRoleMinAggregateOutputType | null
    _max: SuperAdminUserRoleMaxAggregateOutputType | null
  }

  type GetSuperAdminUserRoleGroupByPayload<T extends SuperAdminUserRoleGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<SuperAdminUserRoleGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof SuperAdminUserRoleGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], SuperAdminUserRoleGroupByOutputType[P]>
            : GetScalarType<T[P], SuperAdminUserRoleGroupByOutputType[P]>
        }
      >
    >


  export type SuperAdminUserRoleSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    superAdminId?: boolean
    roleId?: boolean
    createdAt?: boolean
    superAdmin?: boolean | SuperAdminsDefaultArgs<ExtArgs>
    role?: boolean | RoleDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["superAdminUserRole"]>



  export type SuperAdminUserRoleSelectScalar = {
    id?: boolean
    superAdminId?: boolean
    roleId?: boolean
    createdAt?: boolean
  }

  export type SuperAdminUserRoleOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "superAdminId" | "roleId" | "createdAt", ExtArgs["result"]["superAdminUserRole"]>
  export type SuperAdminUserRoleInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    superAdmin?: boolean | SuperAdminsDefaultArgs<ExtArgs>
    role?: boolean | RoleDefaultArgs<ExtArgs>
  }

  export type $SuperAdminUserRolePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "SuperAdminUserRole"
    objects: {
      superAdmin: Prisma.$SuperAdminsPayload<ExtArgs>
      role: Prisma.$RolePayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      superAdminId: string
      roleId: string
      createdAt: Date
    }, ExtArgs["result"]["superAdminUserRole"]>
    composites: {}
  }

  type SuperAdminUserRoleGetPayload<S extends boolean | null | undefined | SuperAdminUserRoleDefaultArgs> = $Result.GetResult<Prisma.$SuperAdminUserRolePayload, S>

  type SuperAdminUserRoleCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<SuperAdminUserRoleFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: SuperAdminUserRoleCountAggregateInputType | true
    }

  export interface SuperAdminUserRoleDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['SuperAdminUserRole'], meta: { name: 'SuperAdminUserRole' } }
    /**
     * Find zero or one SuperAdminUserRole that matches the filter.
     * @param {SuperAdminUserRoleFindUniqueArgs} args - Arguments to find a SuperAdminUserRole
     * @example
     * // Get one SuperAdminUserRole
     * const superAdminUserRole = await prisma.superAdminUserRole.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends SuperAdminUserRoleFindUniqueArgs>(args: SelectSubset<T, SuperAdminUserRoleFindUniqueArgs<ExtArgs>>): Prisma__SuperAdminUserRoleClient<$Result.GetResult<Prisma.$SuperAdminUserRolePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one SuperAdminUserRole that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {SuperAdminUserRoleFindUniqueOrThrowArgs} args - Arguments to find a SuperAdminUserRole
     * @example
     * // Get one SuperAdminUserRole
     * const superAdminUserRole = await prisma.superAdminUserRole.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends SuperAdminUserRoleFindUniqueOrThrowArgs>(args: SelectSubset<T, SuperAdminUserRoleFindUniqueOrThrowArgs<ExtArgs>>): Prisma__SuperAdminUserRoleClient<$Result.GetResult<Prisma.$SuperAdminUserRolePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first SuperAdminUserRole that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SuperAdminUserRoleFindFirstArgs} args - Arguments to find a SuperAdminUserRole
     * @example
     * // Get one SuperAdminUserRole
     * const superAdminUserRole = await prisma.superAdminUserRole.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends SuperAdminUserRoleFindFirstArgs>(args?: SelectSubset<T, SuperAdminUserRoleFindFirstArgs<ExtArgs>>): Prisma__SuperAdminUserRoleClient<$Result.GetResult<Prisma.$SuperAdminUserRolePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first SuperAdminUserRole that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SuperAdminUserRoleFindFirstOrThrowArgs} args - Arguments to find a SuperAdminUserRole
     * @example
     * // Get one SuperAdminUserRole
     * const superAdminUserRole = await prisma.superAdminUserRole.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends SuperAdminUserRoleFindFirstOrThrowArgs>(args?: SelectSubset<T, SuperAdminUserRoleFindFirstOrThrowArgs<ExtArgs>>): Prisma__SuperAdminUserRoleClient<$Result.GetResult<Prisma.$SuperAdminUserRolePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more SuperAdminUserRoles that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SuperAdminUserRoleFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all SuperAdminUserRoles
     * const superAdminUserRoles = await prisma.superAdminUserRole.findMany()
     * 
     * // Get first 10 SuperAdminUserRoles
     * const superAdminUserRoles = await prisma.superAdminUserRole.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const superAdminUserRoleWithIdOnly = await prisma.superAdminUserRole.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends SuperAdminUserRoleFindManyArgs>(args?: SelectSubset<T, SuperAdminUserRoleFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SuperAdminUserRolePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a SuperAdminUserRole.
     * @param {SuperAdminUserRoleCreateArgs} args - Arguments to create a SuperAdminUserRole.
     * @example
     * // Create one SuperAdminUserRole
     * const SuperAdminUserRole = await prisma.superAdminUserRole.create({
     *   data: {
     *     // ... data to create a SuperAdminUserRole
     *   }
     * })
     * 
     */
    create<T extends SuperAdminUserRoleCreateArgs>(args: SelectSubset<T, SuperAdminUserRoleCreateArgs<ExtArgs>>): Prisma__SuperAdminUserRoleClient<$Result.GetResult<Prisma.$SuperAdminUserRolePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many SuperAdminUserRoles.
     * @param {SuperAdminUserRoleCreateManyArgs} args - Arguments to create many SuperAdminUserRoles.
     * @example
     * // Create many SuperAdminUserRoles
     * const superAdminUserRole = await prisma.superAdminUserRole.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends SuperAdminUserRoleCreateManyArgs>(args?: SelectSubset<T, SuperAdminUserRoleCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a SuperAdminUserRole.
     * @param {SuperAdminUserRoleDeleteArgs} args - Arguments to delete one SuperAdminUserRole.
     * @example
     * // Delete one SuperAdminUserRole
     * const SuperAdminUserRole = await prisma.superAdminUserRole.delete({
     *   where: {
     *     // ... filter to delete one SuperAdminUserRole
     *   }
     * })
     * 
     */
    delete<T extends SuperAdminUserRoleDeleteArgs>(args: SelectSubset<T, SuperAdminUserRoleDeleteArgs<ExtArgs>>): Prisma__SuperAdminUserRoleClient<$Result.GetResult<Prisma.$SuperAdminUserRolePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one SuperAdminUserRole.
     * @param {SuperAdminUserRoleUpdateArgs} args - Arguments to update one SuperAdminUserRole.
     * @example
     * // Update one SuperAdminUserRole
     * const superAdminUserRole = await prisma.superAdminUserRole.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends SuperAdminUserRoleUpdateArgs>(args: SelectSubset<T, SuperAdminUserRoleUpdateArgs<ExtArgs>>): Prisma__SuperAdminUserRoleClient<$Result.GetResult<Prisma.$SuperAdminUserRolePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more SuperAdminUserRoles.
     * @param {SuperAdminUserRoleDeleteManyArgs} args - Arguments to filter SuperAdminUserRoles to delete.
     * @example
     * // Delete a few SuperAdminUserRoles
     * const { count } = await prisma.superAdminUserRole.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends SuperAdminUserRoleDeleteManyArgs>(args?: SelectSubset<T, SuperAdminUserRoleDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more SuperAdminUserRoles.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SuperAdminUserRoleUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many SuperAdminUserRoles
     * const superAdminUserRole = await prisma.superAdminUserRole.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends SuperAdminUserRoleUpdateManyArgs>(args: SelectSubset<T, SuperAdminUserRoleUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one SuperAdminUserRole.
     * @param {SuperAdminUserRoleUpsertArgs} args - Arguments to update or create a SuperAdminUserRole.
     * @example
     * // Update or create a SuperAdminUserRole
     * const superAdminUserRole = await prisma.superAdminUserRole.upsert({
     *   create: {
     *     // ... data to create a SuperAdminUserRole
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the SuperAdminUserRole we want to update
     *   }
     * })
     */
    upsert<T extends SuperAdminUserRoleUpsertArgs>(args: SelectSubset<T, SuperAdminUserRoleUpsertArgs<ExtArgs>>): Prisma__SuperAdminUserRoleClient<$Result.GetResult<Prisma.$SuperAdminUserRolePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of SuperAdminUserRoles.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SuperAdminUserRoleCountArgs} args - Arguments to filter SuperAdminUserRoles to count.
     * @example
     * // Count the number of SuperAdminUserRoles
     * const count = await prisma.superAdminUserRole.count({
     *   where: {
     *     // ... the filter for the SuperAdminUserRoles we want to count
     *   }
     * })
    **/
    count<T extends SuperAdminUserRoleCountArgs>(
      args?: Subset<T, SuperAdminUserRoleCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], SuperAdminUserRoleCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a SuperAdminUserRole.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SuperAdminUserRoleAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends SuperAdminUserRoleAggregateArgs>(args: Subset<T, SuperAdminUserRoleAggregateArgs>): Prisma.PrismaPromise<GetSuperAdminUserRoleAggregateType<T>>

    /**
     * Group by SuperAdminUserRole.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SuperAdminUserRoleGroupByArgs} args - Group by arguments.
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
      T extends SuperAdminUserRoleGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: SuperAdminUserRoleGroupByArgs['orderBy'] }
        : { orderBy?: SuperAdminUserRoleGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, SuperAdminUserRoleGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetSuperAdminUserRoleGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the SuperAdminUserRole model
   */
  readonly fields: SuperAdminUserRoleFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for SuperAdminUserRole.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__SuperAdminUserRoleClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    superAdmin<T extends SuperAdminsDefaultArgs<ExtArgs> = {}>(args?: Subset<T, SuperAdminsDefaultArgs<ExtArgs>>): Prisma__SuperAdminsClient<$Result.GetResult<Prisma.$SuperAdminsPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    role<T extends RoleDefaultArgs<ExtArgs> = {}>(args?: Subset<T, RoleDefaultArgs<ExtArgs>>): Prisma__RoleClient<$Result.GetResult<Prisma.$RolePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the SuperAdminUserRole model
   */
  interface SuperAdminUserRoleFieldRefs {
    readonly id: FieldRef<"SuperAdminUserRole", 'String'>
    readonly superAdminId: FieldRef<"SuperAdminUserRole", 'String'>
    readonly roleId: FieldRef<"SuperAdminUserRole", 'String'>
    readonly createdAt: FieldRef<"SuperAdminUserRole", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * SuperAdminUserRole findUnique
   */
  export type SuperAdminUserRoleFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SuperAdminUserRole
     */
    select?: SuperAdminUserRoleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SuperAdminUserRole
     */
    omit?: SuperAdminUserRoleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SuperAdminUserRoleInclude<ExtArgs> | null
    /**
     * Filter, which SuperAdminUserRole to fetch.
     */
    where: SuperAdminUserRoleWhereUniqueInput
  }

  /**
   * SuperAdminUserRole findUniqueOrThrow
   */
  export type SuperAdminUserRoleFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SuperAdminUserRole
     */
    select?: SuperAdminUserRoleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SuperAdminUserRole
     */
    omit?: SuperAdminUserRoleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SuperAdminUserRoleInclude<ExtArgs> | null
    /**
     * Filter, which SuperAdminUserRole to fetch.
     */
    where: SuperAdminUserRoleWhereUniqueInput
  }

  /**
   * SuperAdminUserRole findFirst
   */
  export type SuperAdminUserRoleFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SuperAdminUserRole
     */
    select?: SuperAdminUserRoleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SuperAdminUserRole
     */
    omit?: SuperAdminUserRoleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SuperAdminUserRoleInclude<ExtArgs> | null
    /**
     * Filter, which SuperAdminUserRole to fetch.
     */
    where?: SuperAdminUserRoleWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of SuperAdminUserRoles to fetch.
     */
    orderBy?: SuperAdminUserRoleOrderByWithRelationInput | SuperAdminUserRoleOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for SuperAdminUserRoles.
     */
    cursor?: SuperAdminUserRoleWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` SuperAdminUserRoles from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` SuperAdminUserRoles.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of SuperAdminUserRoles.
     */
    distinct?: SuperAdminUserRoleScalarFieldEnum | SuperAdminUserRoleScalarFieldEnum[]
  }

  /**
   * SuperAdminUserRole findFirstOrThrow
   */
  export type SuperAdminUserRoleFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SuperAdminUserRole
     */
    select?: SuperAdminUserRoleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SuperAdminUserRole
     */
    omit?: SuperAdminUserRoleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SuperAdminUserRoleInclude<ExtArgs> | null
    /**
     * Filter, which SuperAdminUserRole to fetch.
     */
    where?: SuperAdminUserRoleWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of SuperAdminUserRoles to fetch.
     */
    orderBy?: SuperAdminUserRoleOrderByWithRelationInput | SuperAdminUserRoleOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for SuperAdminUserRoles.
     */
    cursor?: SuperAdminUserRoleWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` SuperAdminUserRoles from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` SuperAdminUserRoles.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of SuperAdminUserRoles.
     */
    distinct?: SuperAdminUserRoleScalarFieldEnum | SuperAdminUserRoleScalarFieldEnum[]
  }

  /**
   * SuperAdminUserRole findMany
   */
  export type SuperAdminUserRoleFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SuperAdminUserRole
     */
    select?: SuperAdminUserRoleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SuperAdminUserRole
     */
    omit?: SuperAdminUserRoleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SuperAdminUserRoleInclude<ExtArgs> | null
    /**
     * Filter, which SuperAdminUserRoles to fetch.
     */
    where?: SuperAdminUserRoleWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of SuperAdminUserRoles to fetch.
     */
    orderBy?: SuperAdminUserRoleOrderByWithRelationInput | SuperAdminUserRoleOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing SuperAdminUserRoles.
     */
    cursor?: SuperAdminUserRoleWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` SuperAdminUserRoles from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` SuperAdminUserRoles.
     */
    skip?: number
    distinct?: SuperAdminUserRoleScalarFieldEnum | SuperAdminUserRoleScalarFieldEnum[]
  }

  /**
   * SuperAdminUserRole create
   */
  export type SuperAdminUserRoleCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SuperAdminUserRole
     */
    select?: SuperAdminUserRoleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SuperAdminUserRole
     */
    omit?: SuperAdminUserRoleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SuperAdminUserRoleInclude<ExtArgs> | null
    /**
     * The data needed to create a SuperAdminUserRole.
     */
    data: XOR<SuperAdminUserRoleCreateInput, SuperAdminUserRoleUncheckedCreateInput>
  }

  /**
   * SuperAdminUserRole createMany
   */
  export type SuperAdminUserRoleCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many SuperAdminUserRoles.
     */
    data: SuperAdminUserRoleCreateManyInput | SuperAdminUserRoleCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * SuperAdminUserRole update
   */
  export type SuperAdminUserRoleUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SuperAdminUserRole
     */
    select?: SuperAdminUserRoleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SuperAdminUserRole
     */
    omit?: SuperAdminUserRoleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SuperAdminUserRoleInclude<ExtArgs> | null
    /**
     * The data needed to update a SuperAdminUserRole.
     */
    data: XOR<SuperAdminUserRoleUpdateInput, SuperAdminUserRoleUncheckedUpdateInput>
    /**
     * Choose, which SuperAdminUserRole to update.
     */
    where: SuperAdminUserRoleWhereUniqueInput
  }

  /**
   * SuperAdminUserRole updateMany
   */
  export type SuperAdminUserRoleUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update SuperAdminUserRoles.
     */
    data: XOR<SuperAdminUserRoleUpdateManyMutationInput, SuperAdminUserRoleUncheckedUpdateManyInput>
    /**
     * Filter which SuperAdminUserRoles to update
     */
    where?: SuperAdminUserRoleWhereInput
    /**
     * Limit how many SuperAdminUserRoles to update.
     */
    limit?: number
  }

  /**
   * SuperAdminUserRole upsert
   */
  export type SuperAdminUserRoleUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SuperAdminUserRole
     */
    select?: SuperAdminUserRoleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SuperAdminUserRole
     */
    omit?: SuperAdminUserRoleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SuperAdminUserRoleInclude<ExtArgs> | null
    /**
     * The filter to search for the SuperAdminUserRole to update in case it exists.
     */
    where: SuperAdminUserRoleWhereUniqueInput
    /**
     * In case the SuperAdminUserRole found by the `where` argument doesn't exist, create a new SuperAdminUserRole with this data.
     */
    create: XOR<SuperAdminUserRoleCreateInput, SuperAdminUserRoleUncheckedCreateInput>
    /**
     * In case the SuperAdminUserRole was found with the provided `where` argument, update it with this data.
     */
    update: XOR<SuperAdminUserRoleUpdateInput, SuperAdminUserRoleUncheckedUpdateInput>
  }

  /**
   * SuperAdminUserRole delete
   */
  export type SuperAdminUserRoleDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SuperAdminUserRole
     */
    select?: SuperAdminUserRoleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SuperAdminUserRole
     */
    omit?: SuperAdminUserRoleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SuperAdminUserRoleInclude<ExtArgs> | null
    /**
     * Filter which SuperAdminUserRole to delete.
     */
    where: SuperAdminUserRoleWhereUniqueInput
  }

  /**
   * SuperAdminUserRole deleteMany
   */
  export type SuperAdminUserRoleDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which SuperAdminUserRoles to delete
     */
    where?: SuperAdminUserRoleWhereInput
    /**
     * Limit how many SuperAdminUserRoles to delete.
     */
    limit?: number
  }

  /**
   * SuperAdminUserRole without action
   */
  export type SuperAdminUserRoleDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SuperAdminUserRole
     */
    select?: SuperAdminUserRoleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SuperAdminUserRole
     */
    omit?: SuperAdminUserRoleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SuperAdminUserRoleInclude<ExtArgs> | null
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


  export const SuperAdminsScalarFieldEnum: {
    id: 'id',
    name: 'name',
    email: 'email',
    phone: 'phone',
    password: 'password',
    isActive: 'isActive',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type SuperAdminsScalarFieldEnum = (typeof SuperAdminsScalarFieldEnum)[keyof typeof SuperAdminsScalarFieldEnum]


  export const PatientScalarFieldEnum: {
    id: 'id',
    fullName: 'fullName',
    mobileNumber: 'mobileNumber',
    otp: 'otp',
    otpExpiresAt: 'otpExpiresAt',
    email: 'email',
    dateOfBirth: 'dateOfBirth',
    age: 'age',
    bloodGroup: 'bloodGroup',
    gender: 'gender',
    address: 'address',
    diagnosticAccountId: 'diagnosticAccountId',
    isActive: 'isActive',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type PatientScalarFieldEnum = (typeof PatientScalarFieldEnum)[keyof typeof PatientScalarFieldEnum]


  export const DoctorScalarFieldEnum: {
    id: 'id',
    name: 'name',
    email: 'email',
    phone: 'phone',
    password: 'password',
    specialization: 'specialization',
    experience: 'experience',
    consultationFee: 'consultationFee',
    bio: 'bio',
    isActive: 'isActive',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type DoctorScalarFieldEnum = (typeof DoctorScalarFieldEnum)[keyof typeof DoctorScalarFieldEnum]


  export const DiagnosticAccountScalarFieldEnum: {
    id: 'id',
    name: 'name',
    email: 'email',
    phone: 'phone',
    password: 'password',
    centerName: 'centerName',
    slug: 'slug',
    logo: 'logo',
    address: 'address',
    isActive: 'isActive',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type DiagnosticAccountScalarFieldEnum = (typeof DiagnosticAccountScalarFieldEnum)[keyof typeof DiagnosticAccountScalarFieldEnum]


  export const DiagnosticChildUserScalarFieldEnum: {
    id: 'id',
    DiagnosticAccountId: 'DiagnosticAccountId',
    name: 'name',
    email: 'email',
    phone: 'phone',
    password: 'password',
    isActive: 'isActive',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type DiagnosticChildUserScalarFieldEnum = (typeof DiagnosticChildUserScalarFieldEnum)[keyof typeof DiagnosticChildUserScalarFieldEnum]


  export const RoleScalarFieldEnum: {
    id: 'id',
    name: 'name',
    ownerType: 'ownerType',
    DiagnosticAccountId: 'DiagnosticAccountId',
    superAdminId: 'superAdminId',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type RoleScalarFieldEnum = (typeof RoleScalarFieldEnum)[keyof typeof RoleScalarFieldEnum]


  export const PermissionScalarFieldEnum: {
    id: 'id',
    key: 'key',
    module: 'module',
    description: 'description',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type PermissionScalarFieldEnum = (typeof PermissionScalarFieldEnum)[keyof typeof PermissionScalarFieldEnum]


  export const RolePermissionScalarFieldEnum: {
    id: 'id',
    roleId: 'roleId',
    permissionId: 'permissionId'
  };

  export type RolePermissionScalarFieldEnum = (typeof RolePermissionScalarFieldEnum)[keyof typeof RolePermissionScalarFieldEnum]


  export const DiagnosticUserRoleScalarFieldEnum: {
    id: 'id',
    DiagnosticChildUserId: 'DiagnosticChildUserId',
    roleId: 'roleId',
    createdAt: 'createdAt'
  };

  export type DiagnosticUserRoleScalarFieldEnum = (typeof DiagnosticUserRoleScalarFieldEnum)[keyof typeof DiagnosticUserRoleScalarFieldEnum]


  export const SuperAdminUserRoleScalarFieldEnum: {
    id: 'id',
    superAdminId: 'superAdminId',
    roleId: 'roleId',
    createdAt: 'createdAt'
  };

  export type SuperAdminUserRoleScalarFieldEnum = (typeof SuperAdminUserRoleScalarFieldEnum)[keyof typeof SuperAdminUserRoleScalarFieldEnum]


  export const SortOrder: {
    asc: 'asc',
    desc: 'desc'
  };

  export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder]


  export const NullsOrder: {
    first: 'first',
    last: 'last'
  };

  export type NullsOrder = (typeof NullsOrder)[keyof typeof NullsOrder]


  export const SuperAdminsOrderByRelevanceFieldEnum: {
    id: 'id',
    name: 'name',
    email: 'email',
    phone: 'phone',
    password: 'password'
  };

  export type SuperAdminsOrderByRelevanceFieldEnum = (typeof SuperAdminsOrderByRelevanceFieldEnum)[keyof typeof SuperAdminsOrderByRelevanceFieldEnum]


  export const PatientOrderByRelevanceFieldEnum: {
    id: 'id',
    fullName: 'fullName',
    mobileNumber: 'mobileNumber',
    otp: 'otp',
    email: 'email',
    bloodGroup: 'bloodGroup',
    gender: 'gender',
    address: 'address',
    diagnosticAccountId: 'diagnosticAccountId'
  };

  export type PatientOrderByRelevanceFieldEnum = (typeof PatientOrderByRelevanceFieldEnum)[keyof typeof PatientOrderByRelevanceFieldEnum]


  export const DoctorOrderByRelevanceFieldEnum: {
    id: 'id',
    name: 'name',
    email: 'email',
    phone: 'phone',
    password: 'password',
    specialization: 'specialization',
    bio: 'bio'
  };

  export type DoctorOrderByRelevanceFieldEnum = (typeof DoctorOrderByRelevanceFieldEnum)[keyof typeof DoctorOrderByRelevanceFieldEnum]


  export const DiagnosticAccountOrderByRelevanceFieldEnum: {
    id: 'id',
    name: 'name',
    email: 'email',
    phone: 'phone',
    password: 'password',
    centerName: 'centerName',
    slug: 'slug',
    logo: 'logo',
    address: 'address'
  };

  export type DiagnosticAccountOrderByRelevanceFieldEnum = (typeof DiagnosticAccountOrderByRelevanceFieldEnum)[keyof typeof DiagnosticAccountOrderByRelevanceFieldEnum]


  export const DiagnosticChildUserOrderByRelevanceFieldEnum: {
    id: 'id',
    DiagnosticAccountId: 'DiagnosticAccountId',
    name: 'name',
    email: 'email',
    phone: 'phone',
    password: 'password'
  };

  export type DiagnosticChildUserOrderByRelevanceFieldEnum = (typeof DiagnosticChildUserOrderByRelevanceFieldEnum)[keyof typeof DiagnosticChildUserOrderByRelevanceFieldEnum]


  export const RoleOrderByRelevanceFieldEnum: {
    id: 'id',
    name: 'name',
    DiagnosticAccountId: 'DiagnosticAccountId',
    superAdminId: 'superAdminId'
  };

  export type RoleOrderByRelevanceFieldEnum = (typeof RoleOrderByRelevanceFieldEnum)[keyof typeof RoleOrderByRelevanceFieldEnum]


  export const PermissionOrderByRelevanceFieldEnum: {
    id: 'id',
    key: 'key',
    module: 'module',
    description: 'description'
  };

  export type PermissionOrderByRelevanceFieldEnum = (typeof PermissionOrderByRelevanceFieldEnum)[keyof typeof PermissionOrderByRelevanceFieldEnum]


  export const RolePermissionOrderByRelevanceFieldEnum: {
    id: 'id',
    roleId: 'roleId',
    permissionId: 'permissionId'
  };

  export type RolePermissionOrderByRelevanceFieldEnum = (typeof RolePermissionOrderByRelevanceFieldEnum)[keyof typeof RolePermissionOrderByRelevanceFieldEnum]


  export const DiagnosticUserRoleOrderByRelevanceFieldEnum: {
    id: 'id',
    DiagnosticChildUserId: 'DiagnosticChildUserId',
    roleId: 'roleId'
  };

  export type DiagnosticUserRoleOrderByRelevanceFieldEnum = (typeof DiagnosticUserRoleOrderByRelevanceFieldEnum)[keyof typeof DiagnosticUserRoleOrderByRelevanceFieldEnum]


  export const SuperAdminUserRoleOrderByRelevanceFieldEnum: {
    id: 'id',
    superAdminId: 'superAdminId',
    roleId: 'roleId'
  };

  export type SuperAdminUserRoleOrderByRelevanceFieldEnum = (typeof SuperAdminUserRoleOrderByRelevanceFieldEnum)[keyof typeof SuperAdminUserRoleOrderByRelevanceFieldEnum]


  /**
   * Field references
   */


  /**
   * Reference to a field of type 'String'
   */
  export type StringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String'>
    


  /**
   * Reference to a field of type 'Boolean'
   */
  export type BooleanFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Boolean'>
    


  /**
   * Reference to a field of type 'DateTime'
   */
  export type DateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime'>
    


  /**
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>
    


  /**
   * Reference to a field of type 'Decimal'
   */
  export type DecimalFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Decimal'>
    


  /**
   * Reference to a field of type 'RoleOwnerType'
   */
  export type EnumRoleOwnerTypeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'RoleOwnerType'>
    


  /**
   * Reference to a field of type 'Float'
   */
  export type FloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float'>
    
  /**
   * Deep Input Types
   */


  export type SuperAdminsWhereInput = {
    AND?: SuperAdminsWhereInput | SuperAdminsWhereInput[]
    OR?: SuperAdminsWhereInput[]
    NOT?: SuperAdminsWhereInput | SuperAdminsWhereInput[]
    id?: StringFilter<"SuperAdmins"> | string
    name?: StringFilter<"SuperAdmins"> | string
    email?: StringFilter<"SuperAdmins"> | string
    phone?: StringNullableFilter<"SuperAdmins"> | string | null
    password?: StringFilter<"SuperAdmins"> | string
    isActive?: BoolFilter<"SuperAdmins"> | boolean
    createdAt?: DateTimeFilter<"SuperAdmins"> | Date | string
    updatedAt?: DateTimeFilter<"SuperAdmins"> | Date | string
    roles?: RoleListRelationFilter
    userRoles?: SuperAdminUserRoleListRelationFilter
  }

  export type SuperAdminsOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    email?: SortOrder
    phone?: SortOrderInput | SortOrder
    password?: SortOrder
    isActive?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    roles?: RoleOrderByRelationAggregateInput
    userRoles?: SuperAdminUserRoleOrderByRelationAggregateInput
    _relevance?: SuperAdminsOrderByRelevanceInput
  }

  export type SuperAdminsWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    email?: string
    AND?: SuperAdminsWhereInput | SuperAdminsWhereInput[]
    OR?: SuperAdminsWhereInput[]
    NOT?: SuperAdminsWhereInput | SuperAdminsWhereInput[]
    name?: StringFilter<"SuperAdmins"> | string
    phone?: StringNullableFilter<"SuperAdmins"> | string | null
    password?: StringFilter<"SuperAdmins"> | string
    isActive?: BoolFilter<"SuperAdmins"> | boolean
    createdAt?: DateTimeFilter<"SuperAdmins"> | Date | string
    updatedAt?: DateTimeFilter<"SuperAdmins"> | Date | string
    roles?: RoleListRelationFilter
    userRoles?: SuperAdminUserRoleListRelationFilter
  }, "id" | "email">

  export type SuperAdminsOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    email?: SortOrder
    phone?: SortOrderInput | SortOrder
    password?: SortOrder
    isActive?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: SuperAdminsCountOrderByAggregateInput
    _max?: SuperAdminsMaxOrderByAggregateInput
    _min?: SuperAdminsMinOrderByAggregateInput
  }

  export type SuperAdminsScalarWhereWithAggregatesInput = {
    AND?: SuperAdminsScalarWhereWithAggregatesInput | SuperAdminsScalarWhereWithAggregatesInput[]
    OR?: SuperAdminsScalarWhereWithAggregatesInput[]
    NOT?: SuperAdminsScalarWhereWithAggregatesInput | SuperAdminsScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"SuperAdmins"> | string
    name?: StringWithAggregatesFilter<"SuperAdmins"> | string
    email?: StringWithAggregatesFilter<"SuperAdmins"> | string
    phone?: StringNullableWithAggregatesFilter<"SuperAdmins"> | string | null
    password?: StringWithAggregatesFilter<"SuperAdmins"> | string
    isActive?: BoolWithAggregatesFilter<"SuperAdmins"> | boolean
    createdAt?: DateTimeWithAggregatesFilter<"SuperAdmins"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"SuperAdmins"> | Date | string
  }

  export type PatientWhereInput = {
    AND?: PatientWhereInput | PatientWhereInput[]
    OR?: PatientWhereInput[]
    NOT?: PatientWhereInput | PatientWhereInput[]
    id?: StringFilter<"Patient"> | string
    fullName?: StringFilter<"Patient"> | string
    mobileNumber?: StringFilter<"Patient"> | string
    otp?: StringNullableFilter<"Patient"> | string | null
    otpExpiresAt?: DateTimeNullableFilter<"Patient"> | Date | string | null
    email?: StringNullableFilter<"Patient"> | string | null
    dateOfBirth?: DateTimeNullableFilter<"Patient"> | Date | string | null
    age?: IntNullableFilter<"Patient"> | number | null
    bloodGroup?: StringNullableFilter<"Patient"> | string | null
    gender?: StringNullableFilter<"Patient"> | string | null
    address?: StringNullableFilter<"Patient"> | string | null
    diagnosticAccountId?: StringNullableFilter<"Patient"> | string | null
    isActive?: BoolFilter<"Patient"> | boolean
    createdAt?: DateTimeFilter<"Patient"> | Date | string
    updatedAt?: DateTimeFilter<"Patient"> | Date | string
    diagnosticAccount?: XOR<DiagnosticAccountNullableScalarRelationFilter, DiagnosticAccountWhereInput> | null
  }

  export type PatientOrderByWithRelationInput = {
    id?: SortOrder
    fullName?: SortOrder
    mobileNumber?: SortOrder
    otp?: SortOrderInput | SortOrder
    otpExpiresAt?: SortOrderInput | SortOrder
    email?: SortOrderInput | SortOrder
    dateOfBirth?: SortOrderInput | SortOrder
    age?: SortOrderInput | SortOrder
    bloodGroup?: SortOrderInput | SortOrder
    gender?: SortOrderInput | SortOrder
    address?: SortOrderInput | SortOrder
    diagnosticAccountId?: SortOrderInput | SortOrder
    isActive?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    diagnosticAccount?: DiagnosticAccountOrderByWithRelationInput
    _relevance?: PatientOrderByRelevanceInput
  }

  export type PatientWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    mobileNumber?: string
    AND?: PatientWhereInput | PatientWhereInput[]
    OR?: PatientWhereInput[]
    NOT?: PatientWhereInput | PatientWhereInput[]
    fullName?: StringFilter<"Patient"> | string
    otp?: StringNullableFilter<"Patient"> | string | null
    otpExpiresAt?: DateTimeNullableFilter<"Patient"> | Date | string | null
    email?: StringNullableFilter<"Patient"> | string | null
    dateOfBirth?: DateTimeNullableFilter<"Patient"> | Date | string | null
    age?: IntNullableFilter<"Patient"> | number | null
    bloodGroup?: StringNullableFilter<"Patient"> | string | null
    gender?: StringNullableFilter<"Patient"> | string | null
    address?: StringNullableFilter<"Patient"> | string | null
    diagnosticAccountId?: StringNullableFilter<"Patient"> | string | null
    isActive?: BoolFilter<"Patient"> | boolean
    createdAt?: DateTimeFilter<"Patient"> | Date | string
    updatedAt?: DateTimeFilter<"Patient"> | Date | string
    diagnosticAccount?: XOR<DiagnosticAccountNullableScalarRelationFilter, DiagnosticAccountWhereInput> | null
  }, "id" | "mobileNumber">

  export type PatientOrderByWithAggregationInput = {
    id?: SortOrder
    fullName?: SortOrder
    mobileNumber?: SortOrder
    otp?: SortOrderInput | SortOrder
    otpExpiresAt?: SortOrderInput | SortOrder
    email?: SortOrderInput | SortOrder
    dateOfBirth?: SortOrderInput | SortOrder
    age?: SortOrderInput | SortOrder
    bloodGroup?: SortOrderInput | SortOrder
    gender?: SortOrderInput | SortOrder
    address?: SortOrderInput | SortOrder
    diagnosticAccountId?: SortOrderInput | SortOrder
    isActive?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: PatientCountOrderByAggregateInput
    _avg?: PatientAvgOrderByAggregateInput
    _max?: PatientMaxOrderByAggregateInput
    _min?: PatientMinOrderByAggregateInput
    _sum?: PatientSumOrderByAggregateInput
  }

  export type PatientScalarWhereWithAggregatesInput = {
    AND?: PatientScalarWhereWithAggregatesInput | PatientScalarWhereWithAggregatesInput[]
    OR?: PatientScalarWhereWithAggregatesInput[]
    NOT?: PatientScalarWhereWithAggregatesInput | PatientScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Patient"> | string
    fullName?: StringWithAggregatesFilter<"Patient"> | string
    mobileNumber?: StringWithAggregatesFilter<"Patient"> | string
    otp?: StringNullableWithAggregatesFilter<"Patient"> | string | null
    otpExpiresAt?: DateTimeNullableWithAggregatesFilter<"Patient"> | Date | string | null
    email?: StringNullableWithAggregatesFilter<"Patient"> | string | null
    dateOfBirth?: DateTimeNullableWithAggregatesFilter<"Patient"> | Date | string | null
    age?: IntNullableWithAggregatesFilter<"Patient"> | number | null
    bloodGroup?: StringNullableWithAggregatesFilter<"Patient"> | string | null
    gender?: StringNullableWithAggregatesFilter<"Patient"> | string | null
    address?: StringNullableWithAggregatesFilter<"Patient"> | string | null
    diagnosticAccountId?: StringNullableWithAggregatesFilter<"Patient"> | string | null
    isActive?: BoolWithAggregatesFilter<"Patient"> | boolean
    createdAt?: DateTimeWithAggregatesFilter<"Patient"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Patient"> | Date | string
  }

  export type DoctorWhereInput = {
    AND?: DoctorWhereInput | DoctorWhereInput[]
    OR?: DoctorWhereInput[]
    NOT?: DoctorWhereInput | DoctorWhereInput[]
    id?: StringFilter<"Doctor"> | string
    name?: StringFilter<"Doctor"> | string
    email?: StringFilter<"Doctor"> | string
    phone?: StringNullableFilter<"Doctor"> | string | null
    password?: StringFilter<"Doctor"> | string
    specialization?: StringFilter<"Doctor"> | string
    experience?: IntNullableFilter<"Doctor"> | number | null
    consultationFee?: DecimalNullableFilter<"Doctor"> | Decimal | DecimalJsLike | number | string | null
    bio?: StringNullableFilter<"Doctor"> | string | null
    isActive?: BoolFilter<"Doctor"> | boolean
    createdAt?: DateTimeFilter<"Doctor"> | Date | string
    updatedAt?: DateTimeFilter<"Doctor"> | Date | string
  }

  export type DoctorOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    email?: SortOrder
    phone?: SortOrderInput | SortOrder
    password?: SortOrder
    specialization?: SortOrder
    experience?: SortOrderInput | SortOrder
    consultationFee?: SortOrderInput | SortOrder
    bio?: SortOrderInput | SortOrder
    isActive?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _relevance?: DoctorOrderByRelevanceInput
  }

  export type DoctorWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    email?: string
    AND?: DoctorWhereInput | DoctorWhereInput[]
    OR?: DoctorWhereInput[]
    NOT?: DoctorWhereInput | DoctorWhereInput[]
    name?: StringFilter<"Doctor"> | string
    phone?: StringNullableFilter<"Doctor"> | string | null
    password?: StringFilter<"Doctor"> | string
    specialization?: StringFilter<"Doctor"> | string
    experience?: IntNullableFilter<"Doctor"> | number | null
    consultationFee?: DecimalNullableFilter<"Doctor"> | Decimal | DecimalJsLike | number | string | null
    bio?: StringNullableFilter<"Doctor"> | string | null
    isActive?: BoolFilter<"Doctor"> | boolean
    createdAt?: DateTimeFilter<"Doctor"> | Date | string
    updatedAt?: DateTimeFilter<"Doctor"> | Date | string
  }, "id" | "email">

  export type DoctorOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    email?: SortOrder
    phone?: SortOrderInput | SortOrder
    password?: SortOrder
    specialization?: SortOrder
    experience?: SortOrderInput | SortOrder
    consultationFee?: SortOrderInput | SortOrder
    bio?: SortOrderInput | SortOrder
    isActive?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: DoctorCountOrderByAggregateInput
    _avg?: DoctorAvgOrderByAggregateInput
    _max?: DoctorMaxOrderByAggregateInput
    _min?: DoctorMinOrderByAggregateInput
    _sum?: DoctorSumOrderByAggregateInput
  }

  export type DoctorScalarWhereWithAggregatesInput = {
    AND?: DoctorScalarWhereWithAggregatesInput | DoctorScalarWhereWithAggregatesInput[]
    OR?: DoctorScalarWhereWithAggregatesInput[]
    NOT?: DoctorScalarWhereWithAggregatesInput | DoctorScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Doctor"> | string
    name?: StringWithAggregatesFilter<"Doctor"> | string
    email?: StringWithAggregatesFilter<"Doctor"> | string
    phone?: StringNullableWithAggregatesFilter<"Doctor"> | string | null
    password?: StringWithAggregatesFilter<"Doctor"> | string
    specialization?: StringWithAggregatesFilter<"Doctor"> | string
    experience?: IntNullableWithAggregatesFilter<"Doctor"> | number | null
    consultationFee?: DecimalNullableWithAggregatesFilter<"Doctor"> | Decimal | DecimalJsLike | number | string | null
    bio?: StringNullableWithAggregatesFilter<"Doctor"> | string | null
    isActive?: BoolWithAggregatesFilter<"Doctor"> | boolean
    createdAt?: DateTimeWithAggregatesFilter<"Doctor"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Doctor"> | Date | string
  }

  export type DiagnosticAccountWhereInput = {
    AND?: DiagnosticAccountWhereInput | DiagnosticAccountWhereInput[]
    OR?: DiagnosticAccountWhereInput[]
    NOT?: DiagnosticAccountWhereInput | DiagnosticAccountWhereInput[]
    id?: StringFilter<"DiagnosticAccount"> | string
    name?: StringFilter<"DiagnosticAccount"> | string
    email?: StringFilter<"DiagnosticAccount"> | string
    phone?: StringNullableFilter<"DiagnosticAccount"> | string | null
    password?: StringFilter<"DiagnosticAccount"> | string
    centerName?: StringFilter<"DiagnosticAccount"> | string
    slug?: StringFilter<"DiagnosticAccount"> | string
    logo?: StringNullableFilter<"DiagnosticAccount"> | string | null
    address?: StringNullableFilter<"DiagnosticAccount"> | string | null
    isActive?: BoolFilter<"DiagnosticAccount"> | boolean
    createdAt?: DateTimeFilter<"DiagnosticAccount"> | Date | string
    updatedAt?: DateTimeFilter<"DiagnosticAccount"> | Date | string
    childUsers?: DiagnosticChildUserListRelationFilter
    roles?: RoleListRelationFilter
    patients?: PatientListRelationFilter
  }

  export type DiagnosticAccountOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    email?: SortOrder
    phone?: SortOrderInput | SortOrder
    password?: SortOrder
    centerName?: SortOrder
    slug?: SortOrder
    logo?: SortOrderInput | SortOrder
    address?: SortOrderInput | SortOrder
    isActive?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    childUsers?: DiagnosticChildUserOrderByRelationAggregateInput
    roles?: RoleOrderByRelationAggregateInput
    patients?: PatientOrderByRelationAggregateInput
    _relevance?: DiagnosticAccountOrderByRelevanceInput
  }

  export type DiagnosticAccountWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    email?: string
    slug?: string
    AND?: DiagnosticAccountWhereInput | DiagnosticAccountWhereInput[]
    OR?: DiagnosticAccountWhereInput[]
    NOT?: DiagnosticAccountWhereInput | DiagnosticAccountWhereInput[]
    name?: StringFilter<"DiagnosticAccount"> | string
    phone?: StringNullableFilter<"DiagnosticAccount"> | string | null
    password?: StringFilter<"DiagnosticAccount"> | string
    centerName?: StringFilter<"DiagnosticAccount"> | string
    logo?: StringNullableFilter<"DiagnosticAccount"> | string | null
    address?: StringNullableFilter<"DiagnosticAccount"> | string | null
    isActive?: BoolFilter<"DiagnosticAccount"> | boolean
    createdAt?: DateTimeFilter<"DiagnosticAccount"> | Date | string
    updatedAt?: DateTimeFilter<"DiagnosticAccount"> | Date | string
    childUsers?: DiagnosticChildUserListRelationFilter
    roles?: RoleListRelationFilter
    patients?: PatientListRelationFilter
  }, "id" | "email" | "slug">

  export type DiagnosticAccountOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    email?: SortOrder
    phone?: SortOrderInput | SortOrder
    password?: SortOrder
    centerName?: SortOrder
    slug?: SortOrder
    logo?: SortOrderInput | SortOrder
    address?: SortOrderInput | SortOrder
    isActive?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: DiagnosticAccountCountOrderByAggregateInput
    _max?: DiagnosticAccountMaxOrderByAggregateInput
    _min?: DiagnosticAccountMinOrderByAggregateInput
  }

  export type DiagnosticAccountScalarWhereWithAggregatesInput = {
    AND?: DiagnosticAccountScalarWhereWithAggregatesInput | DiagnosticAccountScalarWhereWithAggregatesInput[]
    OR?: DiagnosticAccountScalarWhereWithAggregatesInput[]
    NOT?: DiagnosticAccountScalarWhereWithAggregatesInput | DiagnosticAccountScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"DiagnosticAccount"> | string
    name?: StringWithAggregatesFilter<"DiagnosticAccount"> | string
    email?: StringWithAggregatesFilter<"DiagnosticAccount"> | string
    phone?: StringNullableWithAggregatesFilter<"DiagnosticAccount"> | string | null
    password?: StringWithAggregatesFilter<"DiagnosticAccount"> | string
    centerName?: StringWithAggregatesFilter<"DiagnosticAccount"> | string
    slug?: StringWithAggregatesFilter<"DiagnosticAccount"> | string
    logo?: StringNullableWithAggregatesFilter<"DiagnosticAccount"> | string | null
    address?: StringNullableWithAggregatesFilter<"DiagnosticAccount"> | string | null
    isActive?: BoolWithAggregatesFilter<"DiagnosticAccount"> | boolean
    createdAt?: DateTimeWithAggregatesFilter<"DiagnosticAccount"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"DiagnosticAccount"> | Date | string
  }

  export type DiagnosticChildUserWhereInput = {
    AND?: DiagnosticChildUserWhereInput | DiagnosticChildUserWhereInput[]
    OR?: DiagnosticChildUserWhereInput[]
    NOT?: DiagnosticChildUserWhereInput | DiagnosticChildUserWhereInput[]
    id?: StringFilter<"DiagnosticChildUser"> | string
    DiagnosticAccountId?: StringFilter<"DiagnosticChildUser"> | string
    name?: StringFilter<"DiagnosticChildUser"> | string
    email?: StringFilter<"DiagnosticChildUser"> | string
    phone?: StringNullableFilter<"DiagnosticChildUser"> | string | null
    password?: StringFilter<"DiagnosticChildUser"> | string
    isActive?: BoolFilter<"DiagnosticChildUser"> | boolean
    createdAt?: DateTimeFilter<"DiagnosticChildUser"> | Date | string
    updatedAt?: DateTimeFilter<"DiagnosticChildUser"> | Date | string
    DiagnosticAccount?: XOR<DiagnosticAccountScalarRelationFilter, DiagnosticAccountWhereInput>
    userRoles?: DiagnosticUserRoleListRelationFilter
  }

  export type DiagnosticChildUserOrderByWithRelationInput = {
    id?: SortOrder
    DiagnosticAccountId?: SortOrder
    name?: SortOrder
    email?: SortOrder
    phone?: SortOrderInput | SortOrder
    password?: SortOrder
    isActive?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    DiagnosticAccount?: DiagnosticAccountOrderByWithRelationInput
    userRoles?: DiagnosticUserRoleOrderByRelationAggregateInput
    _relevance?: DiagnosticChildUserOrderByRelevanceInput
  }

  export type DiagnosticChildUserWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    email_DiagnosticAccountId?: DiagnosticChildUserEmailDiagnosticAccountIdCompoundUniqueInput
    AND?: DiagnosticChildUserWhereInput | DiagnosticChildUserWhereInput[]
    OR?: DiagnosticChildUserWhereInput[]
    NOT?: DiagnosticChildUserWhereInput | DiagnosticChildUserWhereInput[]
    DiagnosticAccountId?: StringFilter<"DiagnosticChildUser"> | string
    name?: StringFilter<"DiagnosticChildUser"> | string
    email?: StringFilter<"DiagnosticChildUser"> | string
    phone?: StringNullableFilter<"DiagnosticChildUser"> | string | null
    password?: StringFilter<"DiagnosticChildUser"> | string
    isActive?: BoolFilter<"DiagnosticChildUser"> | boolean
    createdAt?: DateTimeFilter<"DiagnosticChildUser"> | Date | string
    updatedAt?: DateTimeFilter<"DiagnosticChildUser"> | Date | string
    DiagnosticAccount?: XOR<DiagnosticAccountScalarRelationFilter, DiagnosticAccountWhereInput>
    userRoles?: DiagnosticUserRoleListRelationFilter
  }, "id" | "email_DiagnosticAccountId">

  export type DiagnosticChildUserOrderByWithAggregationInput = {
    id?: SortOrder
    DiagnosticAccountId?: SortOrder
    name?: SortOrder
    email?: SortOrder
    phone?: SortOrderInput | SortOrder
    password?: SortOrder
    isActive?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: DiagnosticChildUserCountOrderByAggregateInput
    _max?: DiagnosticChildUserMaxOrderByAggregateInput
    _min?: DiagnosticChildUserMinOrderByAggregateInput
  }

  export type DiagnosticChildUserScalarWhereWithAggregatesInput = {
    AND?: DiagnosticChildUserScalarWhereWithAggregatesInput | DiagnosticChildUserScalarWhereWithAggregatesInput[]
    OR?: DiagnosticChildUserScalarWhereWithAggregatesInput[]
    NOT?: DiagnosticChildUserScalarWhereWithAggregatesInput | DiagnosticChildUserScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"DiagnosticChildUser"> | string
    DiagnosticAccountId?: StringWithAggregatesFilter<"DiagnosticChildUser"> | string
    name?: StringWithAggregatesFilter<"DiagnosticChildUser"> | string
    email?: StringWithAggregatesFilter<"DiagnosticChildUser"> | string
    phone?: StringNullableWithAggregatesFilter<"DiagnosticChildUser"> | string | null
    password?: StringWithAggregatesFilter<"DiagnosticChildUser"> | string
    isActive?: BoolWithAggregatesFilter<"DiagnosticChildUser"> | boolean
    createdAt?: DateTimeWithAggregatesFilter<"DiagnosticChildUser"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"DiagnosticChildUser"> | Date | string
  }

  export type RoleWhereInput = {
    AND?: RoleWhereInput | RoleWhereInput[]
    OR?: RoleWhereInput[]
    NOT?: RoleWhereInput | RoleWhereInput[]
    id?: StringFilter<"Role"> | string
    name?: StringFilter<"Role"> | string
    ownerType?: EnumRoleOwnerTypeFilter<"Role"> | $Enums.RoleOwnerType
    DiagnosticAccountId?: StringNullableFilter<"Role"> | string | null
    superAdminId?: StringNullableFilter<"Role"> | string | null
    createdAt?: DateTimeFilter<"Role"> | Date | string
    updatedAt?: DateTimeFilter<"Role"> | Date | string
    DiagnosticAccount?: XOR<DiagnosticAccountNullableScalarRelationFilter, DiagnosticAccountWhereInput> | null
    superAdmin?: XOR<SuperAdminsNullableScalarRelationFilter, SuperAdminsWhereInput> | null
    rolePermissions?: RolePermissionListRelationFilter
    diagnosticUserRoles?: DiagnosticUserRoleListRelationFilter
    superAdminUserRoles?: SuperAdminUserRoleListRelationFilter
  }

  export type RoleOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    ownerType?: SortOrder
    DiagnosticAccountId?: SortOrderInput | SortOrder
    superAdminId?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    DiagnosticAccount?: DiagnosticAccountOrderByWithRelationInput
    superAdmin?: SuperAdminsOrderByWithRelationInput
    rolePermissions?: RolePermissionOrderByRelationAggregateInput
    diagnosticUserRoles?: DiagnosticUserRoleOrderByRelationAggregateInput
    superAdminUserRoles?: SuperAdminUserRoleOrderByRelationAggregateInput
    _relevance?: RoleOrderByRelevanceInput
  }

  export type RoleWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    name_DiagnosticAccountId?: RoleNameDiagnosticAccountIdCompoundUniqueInput
    name_superAdminId?: RoleNameSuperAdminIdCompoundUniqueInput
    AND?: RoleWhereInput | RoleWhereInput[]
    OR?: RoleWhereInput[]
    NOT?: RoleWhereInput | RoleWhereInput[]
    name?: StringFilter<"Role"> | string
    ownerType?: EnumRoleOwnerTypeFilter<"Role"> | $Enums.RoleOwnerType
    DiagnosticAccountId?: StringNullableFilter<"Role"> | string | null
    superAdminId?: StringNullableFilter<"Role"> | string | null
    createdAt?: DateTimeFilter<"Role"> | Date | string
    updatedAt?: DateTimeFilter<"Role"> | Date | string
    DiagnosticAccount?: XOR<DiagnosticAccountNullableScalarRelationFilter, DiagnosticAccountWhereInput> | null
    superAdmin?: XOR<SuperAdminsNullableScalarRelationFilter, SuperAdminsWhereInput> | null
    rolePermissions?: RolePermissionListRelationFilter
    diagnosticUserRoles?: DiagnosticUserRoleListRelationFilter
    superAdminUserRoles?: SuperAdminUserRoleListRelationFilter
  }, "id" | "name_DiagnosticAccountId" | "name_superAdminId">

  export type RoleOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    ownerType?: SortOrder
    DiagnosticAccountId?: SortOrderInput | SortOrder
    superAdminId?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: RoleCountOrderByAggregateInput
    _max?: RoleMaxOrderByAggregateInput
    _min?: RoleMinOrderByAggregateInput
  }

  export type RoleScalarWhereWithAggregatesInput = {
    AND?: RoleScalarWhereWithAggregatesInput | RoleScalarWhereWithAggregatesInput[]
    OR?: RoleScalarWhereWithAggregatesInput[]
    NOT?: RoleScalarWhereWithAggregatesInput | RoleScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Role"> | string
    name?: StringWithAggregatesFilter<"Role"> | string
    ownerType?: EnumRoleOwnerTypeWithAggregatesFilter<"Role"> | $Enums.RoleOwnerType
    DiagnosticAccountId?: StringNullableWithAggregatesFilter<"Role"> | string | null
    superAdminId?: StringNullableWithAggregatesFilter<"Role"> | string | null
    createdAt?: DateTimeWithAggregatesFilter<"Role"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Role"> | Date | string
  }

  export type PermissionWhereInput = {
    AND?: PermissionWhereInput | PermissionWhereInput[]
    OR?: PermissionWhereInput[]
    NOT?: PermissionWhereInput | PermissionWhereInput[]
    id?: StringFilter<"Permission"> | string
    key?: StringFilter<"Permission"> | string
    module?: StringFilter<"Permission"> | string
    description?: StringNullableFilter<"Permission"> | string | null
    createdAt?: DateTimeFilter<"Permission"> | Date | string
    updatedAt?: DateTimeFilter<"Permission"> | Date | string
    rolePermissions?: RolePermissionListRelationFilter
  }

  export type PermissionOrderByWithRelationInput = {
    id?: SortOrder
    key?: SortOrder
    module?: SortOrder
    description?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    rolePermissions?: RolePermissionOrderByRelationAggregateInput
    _relevance?: PermissionOrderByRelevanceInput
  }

  export type PermissionWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    key?: string
    AND?: PermissionWhereInput | PermissionWhereInput[]
    OR?: PermissionWhereInput[]
    NOT?: PermissionWhereInput | PermissionWhereInput[]
    module?: StringFilter<"Permission"> | string
    description?: StringNullableFilter<"Permission"> | string | null
    createdAt?: DateTimeFilter<"Permission"> | Date | string
    updatedAt?: DateTimeFilter<"Permission"> | Date | string
    rolePermissions?: RolePermissionListRelationFilter
  }, "id" | "key">

  export type PermissionOrderByWithAggregationInput = {
    id?: SortOrder
    key?: SortOrder
    module?: SortOrder
    description?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: PermissionCountOrderByAggregateInput
    _max?: PermissionMaxOrderByAggregateInput
    _min?: PermissionMinOrderByAggregateInput
  }

  export type PermissionScalarWhereWithAggregatesInput = {
    AND?: PermissionScalarWhereWithAggregatesInput | PermissionScalarWhereWithAggregatesInput[]
    OR?: PermissionScalarWhereWithAggregatesInput[]
    NOT?: PermissionScalarWhereWithAggregatesInput | PermissionScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Permission"> | string
    key?: StringWithAggregatesFilter<"Permission"> | string
    module?: StringWithAggregatesFilter<"Permission"> | string
    description?: StringNullableWithAggregatesFilter<"Permission"> | string | null
    createdAt?: DateTimeWithAggregatesFilter<"Permission"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Permission"> | Date | string
  }

  export type RolePermissionWhereInput = {
    AND?: RolePermissionWhereInput | RolePermissionWhereInput[]
    OR?: RolePermissionWhereInput[]
    NOT?: RolePermissionWhereInput | RolePermissionWhereInput[]
    id?: StringFilter<"RolePermission"> | string
    roleId?: StringFilter<"RolePermission"> | string
    permissionId?: StringFilter<"RolePermission"> | string
    role?: XOR<RoleScalarRelationFilter, RoleWhereInput>
    permission?: XOR<PermissionScalarRelationFilter, PermissionWhereInput>
  }

  export type RolePermissionOrderByWithRelationInput = {
    id?: SortOrder
    roleId?: SortOrder
    permissionId?: SortOrder
    role?: RoleOrderByWithRelationInput
    permission?: PermissionOrderByWithRelationInput
    _relevance?: RolePermissionOrderByRelevanceInput
  }

  export type RolePermissionWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    roleId_permissionId?: RolePermissionRoleIdPermissionIdCompoundUniqueInput
    AND?: RolePermissionWhereInput | RolePermissionWhereInput[]
    OR?: RolePermissionWhereInput[]
    NOT?: RolePermissionWhereInput | RolePermissionWhereInput[]
    roleId?: StringFilter<"RolePermission"> | string
    permissionId?: StringFilter<"RolePermission"> | string
    role?: XOR<RoleScalarRelationFilter, RoleWhereInput>
    permission?: XOR<PermissionScalarRelationFilter, PermissionWhereInput>
  }, "id" | "roleId_permissionId">

  export type RolePermissionOrderByWithAggregationInput = {
    id?: SortOrder
    roleId?: SortOrder
    permissionId?: SortOrder
    _count?: RolePermissionCountOrderByAggregateInput
    _max?: RolePermissionMaxOrderByAggregateInput
    _min?: RolePermissionMinOrderByAggregateInput
  }

  export type RolePermissionScalarWhereWithAggregatesInput = {
    AND?: RolePermissionScalarWhereWithAggregatesInput | RolePermissionScalarWhereWithAggregatesInput[]
    OR?: RolePermissionScalarWhereWithAggregatesInput[]
    NOT?: RolePermissionScalarWhereWithAggregatesInput | RolePermissionScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"RolePermission"> | string
    roleId?: StringWithAggregatesFilter<"RolePermission"> | string
    permissionId?: StringWithAggregatesFilter<"RolePermission"> | string
  }

  export type DiagnosticUserRoleWhereInput = {
    AND?: DiagnosticUserRoleWhereInput | DiagnosticUserRoleWhereInput[]
    OR?: DiagnosticUserRoleWhereInput[]
    NOT?: DiagnosticUserRoleWhereInput | DiagnosticUserRoleWhereInput[]
    id?: StringFilter<"DiagnosticUserRole"> | string
    DiagnosticChildUserId?: StringFilter<"DiagnosticUserRole"> | string
    roleId?: StringFilter<"DiagnosticUserRole"> | string
    createdAt?: DateTimeFilter<"DiagnosticUserRole"> | Date | string
    DiagnosticChildUser?: XOR<DiagnosticChildUserScalarRelationFilter, DiagnosticChildUserWhereInput>
    role?: XOR<RoleScalarRelationFilter, RoleWhereInput>
  }

  export type DiagnosticUserRoleOrderByWithRelationInput = {
    id?: SortOrder
    DiagnosticChildUserId?: SortOrder
    roleId?: SortOrder
    createdAt?: SortOrder
    DiagnosticChildUser?: DiagnosticChildUserOrderByWithRelationInput
    role?: RoleOrderByWithRelationInput
    _relevance?: DiagnosticUserRoleOrderByRelevanceInput
  }

  export type DiagnosticUserRoleWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    DiagnosticChildUserId_roleId?: DiagnosticUserRoleDiagnosticChildUserIdRoleIdCompoundUniqueInput
    AND?: DiagnosticUserRoleWhereInput | DiagnosticUserRoleWhereInput[]
    OR?: DiagnosticUserRoleWhereInput[]
    NOT?: DiagnosticUserRoleWhereInput | DiagnosticUserRoleWhereInput[]
    DiagnosticChildUserId?: StringFilter<"DiagnosticUserRole"> | string
    roleId?: StringFilter<"DiagnosticUserRole"> | string
    createdAt?: DateTimeFilter<"DiagnosticUserRole"> | Date | string
    DiagnosticChildUser?: XOR<DiagnosticChildUserScalarRelationFilter, DiagnosticChildUserWhereInput>
    role?: XOR<RoleScalarRelationFilter, RoleWhereInput>
  }, "id" | "DiagnosticChildUserId_roleId">

  export type DiagnosticUserRoleOrderByWithAggregationInput = {
    id?: SortOrder
    DiagnosticChildUserId?: SortOrder
    roleId?: SortOrder
    createdAt?: SortOrder
    _count?: DiagnosticUserRoleCountOrderByAggregateInput
    _max?: DiagnosticUserRoleMaxOrderByAggregateInput
    _min?: DiagnosticUserRoleMinOrderByAggregateInput
  }

  export type DiagnosticUserRoleScalarWhereWithAggregatesInput = {
    AND?: DiagnosticUserRoleScalarWhereWithAggregatesInput | DiagnosticUserRoleScalarWhereWithAggregatesInput[]
    OR?: DiagnosticUserRoleScalarWhereWithAggregatesInput[]
    NOT?: DiagnosticUserRoleScalarWhereWithAggregatesInput | DiagnosticUserRoleScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"DiagnosticUserRole"> | string
    DiagnosticChildUserId?: StringWithAggregatesFilter<"DiagnosticUserRole"> | string
    roleId?: StringWithAggregatesFilter<"DiagnosticUserRole"> | string
    createdAt?: DateTimeWithAggregatesFilter<"DiagnosticUserRole"> | Date | string
  }

  export type SuperAdminUserRoleWhereInput = {
    AND?: SuperAdminUserRoleWhereInput | SuperAdminUserRoleWhereInput[]
    OR?: SuperAdminUserRoleWhereInput[]
    NOT?: SuperAdminUserRoleWhereInput | SuperAdminUserRoleWhereInput[]
    id?: StringFilter<"SuperAdminUserRole"> | string
    superAdminId?: StringFilter<"SuperAdminUserRole"> | string
    roleId?: StringFilter<"SuperAdminUserRole"> | string
    createdAt?: DateTimeFilter<"SuperAdminUserRole"> | Date | string
    superAdmin?: XOR<SuperAdminsScalarRelationFilter, SuperAdminsWhereInput>
    role?: XOR<RoleScalarRelationFilter, RoleWhereInput>
  }

  export type SuperAdminUserRoleOrderByWithRelationInput = {
    id?: SortOrder
    superAdminId?: SortOrder
    roleId?: SortOrder
    createdAt?: SortOrder
    superAdmin?: SuperAdminsOrderByWithRelationInput
    role?: RoleOrderByWithRelationInput
    _relevance?: SuperAdminUserRoleOrderByRelevanceInput
  }

  export type SuperAdminUserRoleWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    superAdminId_roleId?: SuperAdminUserRoleSuperAdminIdRoleIdCompoundUniqueInput
    AND?: SuperAdminUserRoleWhereInput | SuperAdminUserRoleWhereInput[]
    OR?: SuperAdminUserRoleWhereInput[]
    NOT?: SuperAdminUserRoleWhereInput | SuperAdminUserRoleWhereInput[]
    superAdminId?: StringFilter<"SuperAdminUserRole"> | string
    roleId?: StringFilter<"SuperAdminUserRole"> | string
    createdAt?: DateTimeFilter<"SuperAdminUserRole"> | Date | string
    superAdmin?: XOR<SuperAdminsScalarRelationFilter, SuperAdminsWhereInput>
    role?: XOR<RoleScalarRelationFilter, RoleWhereInput>
  }, "id" | "superAdminId_roleId">

  export type SuperAdminUserRoleOrderByWithAggregationInput = {
    id?: SortOrder
    superAdminId?: SortOrder
    roleId?: SortOrder
    createdAt?: SortOrder
    _count?: SuperAdminUserRoleCountOrderByAggregateInput
    _max?: SuperAdminUserRoleMaxOrderByAggregateInput
    _min?: SuperAdminUserRoleMinOrderByAggregateInput
  }

  export type SuperAdminUserRoleScalarWhereWithAggregatesInput = {
    AND?: SuperAdminUserRoleScalarWhereWithAggregatesInput | SuperAdminUserRoleScalarWhereWithAggregatesInput[]
    OR?: SuperAdminUserRoleScalarWhereWithAggregatesInput[]
    NOT?: SuperAdminUserRoleScalarWhereWithAggregatesInput | SuperAdminUserRoleScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"SuperAdminUserRole"> | string
    superAdminId?: StringWithAggregatesFilter<"SuperAdminUserRole"> | string
    roleId?: StringWithAggregatesFilter<"SuperAdminUserRole"> | string
    createdAt?: DateTimeWithAggregatesFilter<"SuperAdminUserRole"> | Date | string
  }

  export type SuperAdminsCreateInput = {
    id?: string
    name: string
    email: string
    phone?: string | null
    password: string
    isActive?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    roles?: RoleCreateNestedManyWithoutSuperAdminInput
    userRoles?: SuperAdminUserRoleCreateNestedManyWithoutSuperAdminInput
  }

  export type SuperAdminsUncheckedCreateInput = {
    id?: string
    name: string
    email: string
    phone?: string | null
    password: string
    isActive?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    roles?: RoleUncheckedCreateNestedManyWithoutSuperAdminInput
    userRoles?: SuperAdminUserRoleUncheckedCreateNestedManyWithoutSuperAdminInput
  }

  export type SuperAdminsUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    password?: StringFieldUpdateOperationsInput | string
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    roles?: RoleUpdateManyWithoutSuperAdminNestedInput
    userRoles?: SuperAdminUserRoleUpdateManyWithoutSuperAdminNestedInput
  }

  export type SuperAdminsUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    password?: StringFieldUpdateOperationsInput | string
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    roles?: RoleUncheckedUpdateManyWithoutSuperAdminNestedInput
    userRoles?: SuperAdminUserRoleUncheckedUpdateManyWithoutSuperAdminNestedInput
  }

  export type SuperAdminsCreateManyInput = {
    id?: string
    name: string
    email: string
    phone?: string | null
    password: string
    isActive?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type SuperAdminsUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    password?: StringFieldUpdateOperationsInput | string
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SuperAdminsUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    password?: StringFieldUpdateOperationsInput | string
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PatientCreateInput = {
    id?: string
    fullName: string
    mobileNumber: string
    otp?: string | null
    otpExpiresAt?: Date | string | null
    email?: string | null
    dateOfBirth?: Date | string | null
    age?: number | null
    bloodGroup?: string | null
    gender?: string | null
    address?: string | null
    isActive?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    diagnosticAccount?: DiagnosticAccountCreateNestedOneWithoutPatientsInput
  }

  export type PatientUncheckedCreateInput = {
    id?: string
    fullName: string
    mobileNumber: string
    otp?: string | null
    otpExpiresAt?: Date | string | null
    email?: string | null
    dateOfBirth?: Date | string | null
    age?: number | null
    bloodGroup?: string | null
    gender?: string | null
    address?: string | null
    diagnosticAccountId?: string | null
    isActive?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type PatientUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    fullName?: StringFieldUpdateOperationsInput | string
    mobileNumber?: StringFieldUpdateOperationsInput | string
    otp?: NullableStringFieldUpdateOperationsInput | string | null
    otpExpiresAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    email?: NullableStringFieldUpdateOperationsInput | string | null
    dateOfBirth?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    age?: NullableIntFieldUpdateOperationsInput | number | null
    bloodGroup?: NullableStringFieldUpdateOperationsInput | string | null
    gender?: NullableStringFieldUpdateOperationsInput | string | null
    address?: NullableStringFieldUpdateOperationsInput | string | null
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    diagnosticAccount?: DiagnosticAccountUpdateOneWithoutPatientsNestedInput
  }

  export type PatientUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    fullName?: StringFieldUpdateOperationsInput | string
    mobileNumber?: StringFieldUpdateOperationsInput | string
    otp?: NullableStringFieldUpdateOperationsInput | string | null
    otpExpiresAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    email?: NullableStringFieldUpdateOperationsInput | string | null
    dateOfBirth?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    age?: NullableIntFieldUpdateOperationsInput | number | null
    bloodGroup?: NullableStringFieldUpdateOperationsInput | string | null
    gender?: NullableStringFieldUpdateOperationsInput | string | null
    address?: NullableStringFieldUpdateOperationsInput | string | null
    diagnosticAccountId?: NullableStringFieldUpdateOperationsInput | string | null
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PatientCreateManyInput = {
    id?: string
    fullName: string
    mobileNumber: string
    otp?: string | null
    otpExpiresAt?: Date | string | null
    email?: string | null
    dateOfBirth?: Date | string | null
    age?: number | null
    bloodGroup?: string | null
    gender?: string | null
    address?: string | null
    diagnosticAccountId?: string | null
    isActive?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type PatientUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    fullName?: StringFieldUpdateOperationsInput | string
    mobileNumber?: StringFieldUpdateOperationsInput | string
    otp?: NullableStringFieldUpdateOperationsInput | string | null
    otpExpiresAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    email?: NullableStringFieldUpdateOperationsInput | string | null
    dateOfBirth?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    age?: NullableIntFieldUpdateOperationsInput | number | null
    bloodGroup?: NullableStringFieldUpdateOperationsInput | string | null
    gender?: NullableStringFieldUpdateOperationsInput | string | null
    address?: NullableStringFieldUpdateOperationsInput | string | null
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PatientUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    fullName?: StringFieldUpdateOperationsInput | string
    mobileNumber?: StringFieldUpdateOperationsInput | string
    otp?: NullableStringFieldUpdateOperationsInput | string | null
    otpExpiresAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    email?: NullableStringFieldUpdateOperationsInput | string | null
    dateOfBirth?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    age?: NullableIntFieldUpdateOperationsInput | number | null
    bloodGroup?: NullableStringFieldUpdateOperationsInput | string | null
    gender?: NullableStringFieldUpdateOperationsInput | string | null
    address?: NullableStringFieldUpdateOperationsInput | string | null
    diagnosticAccountId?: NullableStringFieldUpdateOperationsInput | string | null
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type DoctorCreateInput = {
    id?: string
    name: string
    email: string
    phone?: string | null
    password: string
    specialization: string
    experience?: number | null
    consultationFee?: Decimal | DecimalJsLike | number | string | null
    bio?: string | null
    isActive?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type DoctorUncheckedCreateInput = {
    id?: string
    name: string
    email: string
    phone?: string | null
    password: string
    specialization: string
    experience?: number | null
    consultationFee?: Decimal | DecimalJsLike | number | string | null
    bio?: string | null
    isActive?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type DoctorUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    password?: StringFieldUpdateOperationsInput | string
    specialization?: StringFieldUpdateOperationsInput | string
    experience?: NullableIntFieldUpdateOperationsInput | number | null
    consultationFee?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    bio?: NullableStringFieldUpdateOperationsInput | string | null
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type DoctorUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    password?: StringFieldUpdateOperationsInput | string
    specialization?: StringFieldUpdateOperationsInput | string
    experience?: NullableIntFieldUpdateOperationsInput | number | null
    consultationFee?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    bio?: NullableStringFieldUpdateOperationsInput | string | null
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type DoctorCreateManyInput = {
    id?: string
    name: string
    email: string
    phone?: string | null
    password: string
    specialization: string
    experience?: number | null
    consultationFee?: Decimal | DecimalJsLike | number | string | null
    bio?: string | null
    isActive?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type DoctorUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    password?: StringFieldUpdateOperationsInput | string
    specialization?: StringFieldUpdateOperationsInput | string
    experience?: NullableIntFieldUpdateOperationsInput | number | null
    consultationFee?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    bio?: NullableStringFieldUpdateOperationsInput | string | null
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type DoctorUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    password?: StringFieldUpdateOperationsInput | string
    specialization?: StringFieldUpdateOperationsInput | string
    experience?: NullableIntFieldUpdateOperationsInput | number | null
    consultationFee?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    bio?: NullableStringFieldUpdateOperationsInput | string | null
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type DiagnosticAccountCreateInput = {
    id?: string
    name: string
    email: string
    phone?: string | null
    password: string
    centerName: string
    slug: string
    logo?: string | null
    address?: string | null
    isActive?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    childUsers?: DiagnosticChildUserCreateNestedManyWithoutDiagnosticAccountInput
    roles?: RoleCreateNestedManyWithoutDiagnosticAccountInput
    patients?: PatientCreateNestedManyWithoutDiagnosticAccountInput
  }

  export type DiagnosticAccountUncheckedCreateInput = {
    id?: string
    name: string
    email: string
    phone?: string | null
    password: string
    centerName: string
    slug: string
    logo?: string | null
    address?: string | null
    isActive?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    childUsers?: DiagnosticChildUserUncheckedCreateNestedManyWithoutDiagnosticAccountInput
    roles?: RoleUncheckedCreateNestedManyWithoutDiagnosticAccountInput
    patients?: PatientUncheckedCreateNestedManyWithoutDiagnosticAccountInput
  }

  export type DiagnosticAccountUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    password?: StringFieldUpdateOperationsInput | string
    centerName?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    logo?: NullableStringFieldUpdateOperationsInput | string | null
    address?: NullableStringFieldUpdateOperationsInput | string | null
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    childUsers?: DiagnosticChildUserUpdateManyWithoutDiagnosticAccountNestedInput
    roles?: RoleUpdateManyWithoutDiagnosticAccountNestedInput
    patients?: PatientUpdateManyWithoutDiagnosticAccountNestedInput
  }

  export type DiagnosticAccountUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    password?: StringFieldUpdateOperationsInput | string
    centerName?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    logo?: NullableStringFieldUpdateOperationsInput | string | null
    address?: NullableStringFieldUpdateOperationsInput | string | null
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    childUsers?: DiagnosticChildUserUncheckedUpdateManyWithoutDiagnosticAccountNestedInput
    roles?: RoleUncheckedUpdateManyWithoutDiagnosticAccountNestedInput
    patients?: PatientUncheckedUpdateManyWithoutDiagnosticAccountNestedInput
  }

  export type DiagnosticAccountCreateManyInput = {
    id?: string
    name: string
    email: string
    phone?: string | null
    password: string
    centerName: string
    slug: string
    logo?: string | null
    address?: string | null
    isActive?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type DiagnosticAccountUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    password?: StringFieldUpdateOperationsInput | string
    centerName?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    logo?: NullableStringFieldUpdateOperationsInput | string | null
    address?: NullableStringFieldUpdateOperationsInput | string | null
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type DiagnosticAccountUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    password?: StringFieldUpdateOperationsInput | string
    centerName?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    logo?: NullableStringFieldUpdateOperationsInput | string | null
    address?: NullableStringFieldUpdateOperationsInput | string | null
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type DiagnosticChildUserCreateInput = {
    id?: string
    name: string
    email: string
    phone?: string | null
    password: string
    isActive?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    DiagnosticAccount: DiagnosticAccountCreateNestedOneWithoutChildUsersInput
    userRoles?: DiagnosticUserRoleCreateNestedManyWithoutDiagnosticChildUserInput
  }

  export type DiagnosticChildUserUncheckedCreateInput = {
    id?: string
    DiagnosticAccountId: string
    name: string
    email: string
    phone?: string | null
    password: string
    isActive?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    userRoles?: DiagnosticUserRoleUncheckedCreateNestedManyWithoutDiagnosticChildUserInput
  }

  export type DiagnosticChildUserUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    password?: StringFieldUpdateOperationsInput | string
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    DiagnosticAccount?: DiagnosticAccountUpdateOneRequiredWithoutChildUsersNestedInput
    userRoles?: DiagnosticUserRoleUpdateManyWithoutDiagnosticChildUserNestedInput
  }

  export type DiagnosticChildUserUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    DiagnosticAccountId?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    password?: StringFieldUpdateOperationsInput | string
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    userRoles?: DiagnosticUserRoleUncheckedUpdateManyWithoutDiagnosticChildUserNestedInput
  }

  export type DiagnosticChildUserCreateManyInput = {
    id?: string
    DiagnosticAccountId: string
    name: string
    email: string
    phone?: string | null
    password: string
    isActive?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type DiagnosticChildUserUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    password?: StringFieldUpdateOperationsInput | string
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type DiagnosticChildUserUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    DiagnosticAccountId?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    password?: StringFieldUpdateOperationsInput | string
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type RoleCreateInput = {
    id?: string
    name: string
    ownerType: $Enums.RoleOwnerType
    createdAt?: Date | string
    updatedAt?: Date | string
    DiagnosticAccount?: DiagnosticAccountCreateNestedOneWithoutRolesInput
    superAdmin?: SuperAdminsCreateNestedOneWithoutRolesInput
    rolePermissions?: RolePermissionCreateNestedManyWithoutRoleInput
    diagnosticUserRoles?: DiagnosticUserRoleCreateNestedManyWithoutRoleInput
    superAdminUserRoles?: SuperAdminUserRoleCreateNestedManyWithoutRoleInput
  }

  export type RoleUncheckedCreateInput = {
    id?: string
    name: string
    ownerType: $Enums.RoleOwnerType
    DiagnosticAccountId?: string | null
    superAdminId?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    rolePermissions?: RolePermissionUncheckedCreateNestedManyWithoutRoleInput
    diagnosticUserRoles?: DiagnosticUserRoleUncheckedCreateNestedManyWithoutRoleInput
    superAdminUserRoles?: SuperAdminUserRoleUncheckedCreateNestedManyWithoutRoleInput
  }

  export type RoleUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    ownerType?: EnumRoleOwnerTypeFieldUpdateOperationsInput | $Enums.RoleOwnerType
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    DiagnosticAccount?: DiagnosticAccountUpdateOneWithoutRolesNestedInput
    superAdmin?: SuperAdminsUpdateOneWithoutRolesNestedInput
    rolePermissions?: RolePermissionUpdateManyWithoutRoleNestedInput
    diagnosticUserRoles?: DiagnosticUserRoleUpdateManyWithoutRoleNestedInput
    superAdminUserRoles?: SuperAdminUserRoleUpdateManyWithoutRoleNestedInput
  }

  export type RoleUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    ownerType?: EnumRoleOwnerTypeFieldUpdateOperationsInput | $Enums.RoleOwnerType
    DiagnosticAccountId?: NullableStringFieldUpdateOperationsInput | string | null
    superAdminId?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    rolePermissions?: RolePermissionUncheckedUpdateManyWithoutRoleNestedInput
    diagnosticUserRoles?: DiagnosticUserRoleUncheckedUpdateManyWithoutRoleNestedInput
    superAdminUserRoles?: SuperAdminUserRoleUncheckedUpdateManyWithoutRoleNestedInput
  }

  export type RoleCreateManyInput = {
    id?: string
    name: string
    ownerType: $Enums.RoleOwnerType
    DiagnosticAccountId?: string | null
    superAdminId?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type RoleUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    ownerType?: EnumRoleOwnerTypeFieldUpdateOperationsInput | $Enums.RoleOwnerType
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type RoleUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    ownerType?: EnumRoleOwnerTypeFieldUpdateOperationsInput | $Enums.RoleOwnerType
    DiagnosticAccountId?: NullableStringFieldUpdateOperationsInput | string | null
    superAdminId?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PermissionCreateInput = {
    id?: string
    key: string
    module: string
    description?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    rolePermissions?: RolePermissionCreateNestedManyWithoutPermissionInput
  }

  export type PermissionUncheckedCreateInput = {
    id?: string
    key: string
    module: string
    description?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    rolePermissions?: RolePermissionUncheckedCreateNestedManyWithoutPermissionInput
  }

  export type PermissionUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    key?: StringFieldUpdateOperationsInput | string
    module?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    rolePermissions?: RolePermissionUpdateManyWithoutPermissionNestedInput
  }

  export type PermissionUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    key?: StringFieldUpdateOperationsInput | string
    module?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    rolePermissions?: RolePermissionUncheckedUpdateManyWithoutPermissionNestedInput
  }

  export type PermissionCreateManyInput = {
    id?: string
    key: string
    module: string
    description?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type PermissionUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    key?: StringFieldUpdateOperationsInput | string
    module?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PermissionUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    key?: StringFieldUpdateOperationsInput | string
    module?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type RolePermissionCreateInput = {
    id?: string
    role: RoleCreateNestedOneWithoutRolePermissionsInput
    permission: PermissionCreateNestedOneWithoutRolePermissionsInput
  }

  export type RolePermissionUncheckedCreateInput = {
    id?: string
    roleId: string
    permissionId: string
  }

  export type RolePermissionUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    role?: RoleUpdateOneRequiredWithoutRolePermissionsNestedInput
    permission?: PermissionUpdateOneRequiredWithoutRolePermissionsNestedInput
  }

  export type RolePermissionUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    roleId?: StringFieldUpdateOperationsInput | string
    permissionId?: StringFieldUpdateOperationsInput | string
  }

  export type RolePermissionCreateManyInput = {
    id?: string
    roleId: string
    permissionId: string
  }

  export type RolePermissionUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
  }

  export type RolePermissionUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    roleId?: StringFieldUpdateOperationsInput | string
    permissionId?: StringFieldUpdateOperationsInput | string
  }

  export type DiagnosticUserRoleCreateInput = {
    id?: string
    createdAt?: Date | string
    DiagnosticChildUser: DiagnosticChildUserCreateNestedOneWithoutUserRolesInput
    role: RoleCreateNestedOneWithoutDiagnosticUserRolesInput
  }

  export type DiagnosticUserRoleUncheckedCreateInput = {
    id?: string
    DiagnosticChildUserId: string
    roleId: string
    createdAt?: Date | string
  }

  export type DiagnosticUserRoleUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    DiagnosticChildUser?: DiagnosticChildUserUpdateOneRequiredWithoutUserRolesNestedInput
    role?: RoleUpdateOneRequiredWithoutDiagnosticUserRolesNestedInput
  }

  export type DiagnosticUserRoleUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    DiagnosticChildUserId?: StringFieldUpdateOperationsInput | string
    roleId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type DiagnosticUserRoleCreateManyInput = {
    id?: string
    DiagnosticChildUserId: string
    roleId: string
    createdAt?: Date | string
  }

  export type DiagnosticUserRoleUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type DiagnosticUserRoleUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    DiagnosticChildUserId?: StringFieldUpdateOperationsInput | string
    roleId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SuperAdminUserRoleCreateInput = {
    id?: string
    createdAt?: Date | string
    superAdmin: SuperAdminsCreateNestedOneWithoutUserRolesInput
    role: RoleCreateNestedOneWithoutSuperAdminUserRolesInput
  }

  export type SuperAdminUserRoleUncheckedCreateInput = {
    id?: string
    superAdminId: string
    roleId: string
    createdAt?: Date | string
  }

  export type SuperAdminUserRoleUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    superAdmin?: SuperAdminsUpdateOneRequiredWithoutUserRolesNestedInput
    role?: RoleUpdateOneRequiredWithoutSuperAdminUserRolesNestedInput
  }

  export type SuperAdminUserRoleUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    superAdminId?: StringFieldUpdateOperationsInput | string
    roleId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SuperAdminUserRoleCreateManyInput = {
    id?: string
    superAdminId: string
    roleId: string
    createdAt?: Date | string
  }

  export type SuperAdminUserRoleUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SuperAdminUserRoleUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    superAdminId?: StringFieldUpdateOperationsInput | string
    roleId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
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

  export type BoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
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

  export type RoleListRelationFilter = {
    every?: RoleWhereInput
    some?: RoleWhereInput
    none?: RoleWhereInput
  }

  export type SuperAdminUserRoleListRelationFilter = {
    every?: SuperAdminUserRoleWhereInput
    some?: SuperAdminUserRoleWhereInput
    none?: SuperAdminUserRoleWhereInput
  }

  export type SortOrderInput = {
    sort: SortOrder
    nulls?: NullsOrder
  }

  export type RoleOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type SuperAdminUserRoleOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type SuperAdminsOrderByRelevanceInput = {
    fields: SuperAdminsOrderByRelevanceFieldEnum | SuperAdminsOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type SuperAdminsCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    email?: SortOrder
    phone?: SortOrder
    password?: SortOrder
    isActive?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type SuperAdminsMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    email?: SortOrder
    phone?: SortOrder
    password?: SortOrder
    isActive?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type SuperAdminsMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    email?: SortOrder
    phone?: SortOrder
    password?: SortOrder
    isActive?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
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

  export type BoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
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

  export type IntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | null
    notIn?: number[] | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }

  export type DiagnosticAccountNullableScalarRelationFilter = {
    is?: DiagnosticAccountWhereInput | null
    isNot?: DiagnosticAccountWhereInput | null
  }

  export type PatientOrderByRelevanceInput = {
    fields: PatientOrderByRelevanceFieldEnum | PatientOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type PatientCountOrderByAggregateInput = {
    id?: SortOrder
    fullName?: SortOrder
    mobileNumber?: SortOrder
    otp?: SortOrder
    otpExpiresAt?: SortOrder
    email?: SortOrder
    dateOfBirth?: SortOrder
    age?: SortOrder
    bloodGroup?: SortOrder
    gender?: SortOrder
    address?: SortOrder
    diagnosticAccountId?: SortOrder
    isActive?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type PatientAvgOrderByAggregateInput = {
    age?: SortOrder
  }

  export type PatientMaxOrderByAggregateInput = {
    id?: SortOrder
    fullName?: SortOrder
    mobileNumber?: SortOrder
    otp?: SortOrder
    otpExpiresAt?: SortOrder
    email?: SortOrder
    dateOfBirth?: SortOrder
    age?: SortOrder
    bloodGroup?: SortOrder
    gender?: SortOrder
    address?: SortOrder
    diagnosticAccountId?: SortOrder
    isActive?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type PatientMinOrderByAggregateInput = {
    id?: SortOrder
    fullName?: SortOrder
    mobileNumber?: SortOrder
    otp?: SortOrder
    otpExpiresAt?: SortOrder
    email?: SortOrder
    dateOfBirth?: SortOrder
    age?: SortOrder
    bloodGroup?: SortOrder
    gender?: SortOrder
    address?: SortOrder
    diagnosticAccountId?: SortOrder
    isActive?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type PatientSumOrderByAggregateInput = {
    age?: SortOrder
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

  export type IntNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | null
    notIn?: number[] | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableWithAggregatesFilter<$PrismaModel> | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedIntNullableFilter<$PrismaModel>
    _max?: NestedIntNullableFilter<$PrismaModel>
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

  export type DoctorOrderByRelevanceInput = {
    fields: DoctorOrderByRelevanceFieldEnum | DoctorOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type DoctorCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    email?: SortOrder
    phone?: SortOrder
    password?: SortOrder
    specialization?: SortOrder
    experience?: SortOrder
    consultationFee?: SortOrder
    bio?: SortOrder
    isActive?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type DoctorAvgOrderByAggregateInput = {
    experience?: SortOrder
    consultationFee?: SortOrder
  }

  export type DoctorMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    email?: SortOrder
    phone?: SortOrder
    password?: SortOrder
    specialization?: SortOrder
    experience?: SortOrder
    consultationFee?: SortOrder
    bio?: SortOrder
    isActive?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type DoctorMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    email?: SortOrder
    phone?: SortOrder
    password?: SortOrder
    specialization?: SortOrder
    experience?: SortOrder
    consultationFee?: SortOrder
    bio?: SortOrder
    isActive?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type DoctorSumOrderByAggregateInput = {
    experience?: SortOrder
    consultationFee?: SortOrder
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

  export type DiagnosticChildUserListRelationFilter = {
    every?: DiagnosticChildUserWhereInput
    some?: DiagnosticChildUserWhereInput
    none?: DiagnosticChildUserWhereInput
  }

  export type PatientListRelationFilter = {
    every?: PatientWhereInput
    some?: PatientWhereInput
    none?: PatientWhereInput
  }

  export type DiagnosticChildUserOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type PatientOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type DiagnosticAccountOrderByRelevanceInput = {
    fields: DiagnosticAccountOrderByRelevanceFieldEnum | DiagnosticAccountOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type DiagnosticAccountCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    email?: SortOrder
    phone?: SortOrder
    password?: SortOrder
    centerName?: SortOrder
    slug?: SortOrder
    logo?: SortOrder
    address?: SortOrder
    isActive?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type DiagnosticAccountMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    email?: SortOrder
    phone?: SortOrder
    password?: SortOrder
    centerName?: SortOrder
    slug?: SortOrder
    logo?: SortOrder
    address?: SortOrder
    isActive?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type DiagnosticAccountMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    email?: SortOrder
    phone?: SortOrder
    password?: SortOrder
    centerName?: SortOrder
    slug?: SortOrder
    logo?: SortOrder
    address?: SortOrder
    isActive?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type DiagnosticAccountScalarRelationFilter = {
    is?: DiagnosticAccountWhereInput
    isNot?: DiagnosticAccountWhereInput
  }

  export type DiagnosticUserRoleListRelationFilter = {
    every?: DiagnosticUserRoleWhereInput
    some?: DiagnosticUserRoleWhereInput
    none?: DiagnosticUserRoleWhereInput
  }

  export type DiagnosticUserRoleOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type DiagnosticChildUserOrderByRelevanceInput = {
    fields: DiagnosticChildUserOrderByRelevanceFieldEnum | DiagnosticChildUserOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type DiagnosticChildUserEmailDiagnosticAccountIdCompoundUniqueInput = {
    email: string
    DiagnosticAccountId: string
  }

  export type DiagnosticChildUserCountOrderByAggregateInput = {
    id?: SortOrder
    DiagnosticAccountId?: SortOrder
    name?: SortOrder
    email?: SortOrder
    phone?: SortOrder
    password?: SortOrder
    isActive?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type DiagnosticChildUserMaxOrderByAggregateInput = {
    id?: SortOrder
    DiagnosticAccountId?: SortOrder
    name?: SortOrder
    email?: SortOrder
    phone?: SortOrder
    password?: SortOrder
    isActive?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type DiagnosticChildUserMinOrderByAggregateInput = {
    id?: SortOrder
    DiagnosticAccountId?: SortOrder
    name?: SortOrder
    email?: SortOrder
    phone?: SortOrder
    password?: SortOrder
    isActive?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type EnumRoleOwnerTypeFilter<$PrismaModel = never> = {
    equals?: $Enums.RoleOwnerType | EnumRoleOwnerTypeFieldRefInput<$PrismaModel>
    in?: $Enums.RoleOwnerType[]
    notIn?: $Enums.RoleOwnerType[]
    not?: NestedEnumRoleOwnerTypeFilter<$PrismaModel> | $Enums.RoleOwnerType
  }

  export type SuperAdminsNullableScalarRelationFilter = {
    is?: SuperAdminsWhereInput | null
    isNot?: SuperAdminsWhereInput | null
  }

  export type RolePermissionListRelationFilter = {
    every?: RolePermissionWhereInput
    some?: RolePermissionWhereInput
    none?: RolePermissionWhereInput
  }

  export type RolePermissionOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type RoleOrderByRelevanceInput = {
    fields: RoleOrderByRelevanceFieldEnum | RoleOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type RoleNameDiagnosticAccountIdCompoundUniqueInput = {
    name: string
    DiagnosticAccountId: string
  }

  export type RoleNameSuperAdminIdCompoundUniqueInput = {
    name: string
    superAdminId: string
  }

  export type RoleCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    ownerType?: SortOrder
    DiagnosticAccountId?: SortOrder
    superAdminId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type RoleMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    ownerType?: SortOrder
    DiagnosticAccountId?: SortOrder
    superAdminId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type RoleMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    ownerType?: SortOrder
    DiagnosticAccountId?: SortOrder
    superAdminId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type EnumRoleOwnerTypeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.RoleOwnerType | EnumRoleOwnerTypeFieldRefInput<$PrismaModel>
    in?: $Enums.RoleOwnerType[]
    notIn?: $Enums.RoleOwnerType[]
    not?: NestedEnumRoleOwnerTypeWithAggregatesFilter<$PrismaModel> | $Enums.RoleOwnerType
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumRoleOwnerTypeFilter<$PrismaModel>
    _max?: NestedEnumRoleOwnerTypeFilter<$PrismaModel>
  }

  export type PermissionOrderByRelevanceInput = {
    fields: PermissionOrderByRelevanceFieldEnum | PermissionOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type PermissionCountOrderByAggregateInput = {
    id?: SortOrder
    key?: SortOrder
    module?: SortOrder
    description?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type PermissionMaxOrderByAggregateInput = {
    id?: SortOrder
    key?: SortOrder
    module?: SortOrder
    description?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type PermissionMinOrderByAggregateInput = {
    id?: SortOrder
    key?: SortOrder
    module?: SortOrder
    description?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type RoleScalarRelationFilter = {
    is?: RoleWhereInput
    isNot?: RoleWhereInput
  }

  export type PermissionScalarRelationFilter = {
    is?: PermissionWhereInput
    isNot?: PermissionWhereInput
  }

  export type RolePermissionOrderByRelevanceInput = {
    fields: RolePermissionOrderByRelevanceFieldEnum | RolePermissionOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type RolePermissionRoleIdPermissionIdCompoundUniqueInput = {
    roleId: string
    permissionId: string
  }

  export type RolePermissionCountOrderByAggregateInput = {
    id?: SortOrder
    roleId?: SortOrder
    permissionId?: SortOrder
  }

  export type RolePermissionMaxOrderByAggregateInput = {
    id?: SortOrder
    roleId?: SortOrder
    permissionId?: SortOrder
  }

  export type RolePermissionMinOrderByAggregateInput = {
    id?: SortOrder
    roleId?: SortOrder
    permissionId?: SortOrder
  }

  export type DiagnosticChildUserScalarRelationFilter = {
    is?: DiagnosticChildUserWhereInput
    isNot?: DiagnosticChildUserWhereInput
  }

  export type DiagnosticUserRoleOrderByRelevanceInput = {
    fields: DiagnosticUserRoleOrderByRelevanceFieldEnum | DiagnosticUserRoleOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type DiagnosticUserRoleDiagnosticChildUserIdRoleIdCompoundUniqueInput = {
    DiagnosticChildUserId: string
    roleId: string
  }

  export type DiagnosticUserRoleCountOrderByAggregateInput = {
    id?: SortOrder
    DiagnosticChildUserId?: SortOrder
    roleId?: SortOrder
    createdAt?: SortOrder
  }

  export type DiagnosticUserRoleMaxOrderByAggregateInput = {
    id?: SortOrder
    DiagnosticChildUserId?: SortOrder
    roleId?: SortOrder
    createdAt?: SortOrder
  }

  export type DiagnosticUserRoleMinOrderByAggregateInput = {
    id?: SortOrder
    DiagnosticChildUserId?: SortOrder
    roleId?: SortOrder
    createdAt?: SortOrder
  }

  export type SuperAdminsScalarRelationFilter = {
    is?: SuperAdminsWhereInput
    isNot?: SuperAdminsWhereInput
  }

  export type SuperAdminUserRoleOrderByRelevanceInput = {
    fields: SuperAdminUserRoleOrderByRelevanceFieldEnum | SuperAdminUserRoleOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type SuperAdminUserRoleSuperAdminIdRoleIdCompoundUniqueInput = {
    superAdminId: string
    roleId: string
  }

  export type SuperAdminUserRoleCountOrderByAggregateInput = {
    id?: SortOrder
    superAdminId?: SortOrder
    roleId?: SortOrder
    createdAt?: SortOrder
  }

  export type SuperAdminUserRoleMaxOrderByAggregateInput = {
    id?: SortOrder
    superAdminId?: SortOrder
    roleId?: SortOrder
    createdAt?: SortOrder
  }

  export type SuperAdminUserRoleMinOrderByAggregateInput = {
    id?: SortOrder
    superAdminId?: SortOrder
    roleId?: SortOrder
    createdAt?: SortOrder
  }

  export type RoleCreateNestedManyWithoutSuperAdminInput = {
    create?: XOR<RoleCreateWithoutSuperAdminInput, RoleUncheckedCreateWithoutSuperAdminInput> | RoleCreateWithoutSuperAdminInput[] | RoleUncheckedCreateWithoutSuperAdminInput[]
    connectOrCreate?: RoleCreateOrConnectWithoutSuperAdminInput | RoleCreateOrConnectWithoutSuperAdminInput[]
    createMany?: RoleCreateManySuperAdminInputEnvelope
    connect?: RoleWhereUniqueInput | RoleWhereUniqueInput[]
  }

  export type SuperAdminUserRoleCreateNestedManyWithoutSuperAdminInput = {
    create?: XOR<SuperAdminUserRoleCreateWithoutSuperAdminInput, SuperAdminUserRoleUncheckedCreateWithoutSuperAdminInput> | SuperAdminUserRoleCreateWithoutSuperAdminInput[] | SuperAdminUserRoleUncheckedCreateWithoutSuperAdminInput[]
    connectOrCreate?: SuperAdminUserRoleCreateOrConnectWithoutSuperAdminInput | SuperAdminUserRoleCreateOrConnectWithoutSuperAdminInput[]
    createMany?: SuperAdminUserRoleCreateManySuperAdminInputEnvelope
    connect?: SuperAdminUserRoleWhereUniqueInput | SuperAdminUserRoleWhereUniqueInput[]
  }

  export type RoleUncheckedCreateNestedManyWithoutSuperAdminInput = {
    create?: XOR<RoleCreateWithoutSuperAdminInput, RoleUncheckedCreateWithoutSuperAdminInput> | RoleCreateWithoutSuperAdminInput[] | RoleUncheckedCreateWithoutSuperAdminInput[]
    connectOrCreate?: RoleCreateOrConnectWithoutSuperAdminInput | RoleCreateOrConnectWithoutSuperAdminInput[]
    createMany?: RoleCreateManySuperAdminInputEnvelope
    connect?: RoleWhereUniqueInput | RoleWhereUniqueInput[]
  }

  export type SuperAdminUserRoleUncheckedCreateNestedManyWithoutSuperAdminInput = {
    create?: XOR<SuperAdminUserRoleCreateWithoutSuperAdminInput, SuperAdminUserRoleUncheckedCreateWithoutSuperAdminInput> | SuperAdminUserRoleCreateWithoutSuperAdminInput[] | SuperAdminUserRoleUncheckedCreateWithoutSuperAdminInput[]
    connectOrCreate?: SuperAdminUserRoleCreateOrConnectWithoutSuperAdminInput | SuperAdminUserRoleCreateOrConnectWithoutSuperAdminInput[]
    createMany?: SuperAdminUserRoleCreateManySuperAdminInputEnvelope
    connect?: SuperAdminUserRoleWhereUniqueInput | SuperAdminUserRoleWhereUniqueInput[]
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null
  }

  export type BoolFieldUpdateOperationsInput = {
    set?: boolean
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type RoleUpdateManyWithoutSuperAdminNestedInput = {
    create?: XOR<RoleCreateWithoutSuperAdminInput, RoleUncheckedCreateWithoutSuperAdminInput> | RoleCreateWithoutSuperAdminInput[] | RoleUncheckedCreateWithoutSuperAdminInput[]
    connectOrCreate?: RoleCreateOrConnectWithoutSuperAdminInput | RoleCreateOrConnectWithoutSuperAdminInput[]
    upsert?: RoleUpsertWithWhereUniqueWithoutSuperAdminInput | RoleUpsertWithWhereUniqueWithoutSuperAdminInput[]
    createMany?: RoleCreateManySuperAdminInputEnvelope
    set?: RoleWhereUniqueInput | RoleWhereUniqueInput[]
    disconnect?: RoleWhereUniqueInput | RoleWhereUniqueInput[]
    delete?: RoleWhereUniqueInput | RoleWhereUniqueInput[]
    connect?: RoleWhereUniqueInput | RoleWhereUniqueInput[]
    update?: RoleUpdateWithWhereUniqueWithoutSuperAdminInput | RoleUpdateWithWhereUniqueWithoutSuperAdminInput[]
    updateMany?: RoleUpdateManyWithWhereWithoutSuperAdminInput | RoleUpdateManyWithWhereWithoutSuperAdminInput[]
    deleteMany?: RoleScalarWhereInput | RoleScalarWhereInput[]
  }

  export type SuperAdminUserRoleUpdateManyWithoutSuperAdminNestedInput = {
    create?: XOR<SuperAdminUserRoleCreateWithoutSuperAdminInput, SuperAdminUserRoleUncheckedCreateWithoutSuperAdminInput> | SuperAdminUserRoleCreateWithoutSuperAdminInput[] | SuperAdminUserRoleUncheckedCreateWithoutSuperAdminInput[]
    connectOrCreate?: SuperAdminUserRoleCreateOrConnectWithoutSuperAdminInput | SuperAdminUserRoleCreateOrConnectWithoutSuperAdminInput[]
    upsert?: SuperAdminUserRoleUpsertWithWhereUniqueWithoutSuperAdminInput | SuperAdminUserRoleUpsertWithWhereUniqueWithoutSuperAdminInput[]
    createMany?: SuperAdminUserRoleCreateManySuperAdminInputEnvelope
    set?: SuperAdminUserRoleWhereUniqueInput | SuperAdminUserRoleWhereUniqueInput[]
    disconnect?: SuperAdminUserRoleWhereUniqueInput | SuperAdminUserRoleWhereUniqueInput[]
    delete?: SuperAdminUserRoleWhereUniqueInput | SuperAdminUserRoleWhereUniqueInput[]
    connect?: SuperAdminUserRoleWhereUniqueInput | SuperAdminUserRoleWhereUniqueInput[]
    update?: SuperAdminUserRoleUpdateWithWhereUniqueWithoutSuperAdminInput | SuperAdminUserRoleUpdateWithWhereUniqueWithoutSuperAdminInput[]
    updateMany?: SuperAdminUserRoleUpdateManyWithWhereWithoutSuperAdminInput | SuperAdminUserRoleUpdateManyWithWhereWithoutSuperAdminInput[]
    deleteMany?: SuperAdminUserRoleScalarWhereInput | SuperAdminUserRoleScalarWhereInput[]
  }

  export type RoleUncheckedUpdateManyWithoutSuperAdminNestedInput = {
    create?: XOR<RoleCreateWithoutSuperAdminInput, RoleUncheckedCreateWithoutSuperAdminInput> | RoleCreateWithoutSuperAdminInput[] | RoleUncheckedCreateWithoutSuperAdminInput[]
    connectOrCreate?: RoleCreateOrConnectWithoutSuperAdminInput | RoleCreateOrConnectWithoutSuperAdminInput[]
    upsert?: RoleUpsertWithWhereUniqueWithoutSuperAdminInput | RoleUpsertWithWhereUniqueWithoutSuperAdminInput[]
    createMany?: RoleCreateManySuperAdminInputEnvelope
    set?: RoleWhereUniqueInput | RoleWhereUniqueInput[]
    disconnect?: RoleWhereUniqueInput | RoleWhereUniqueInput[]
    delete?: RoleWhereUniqueInput | RoleWhereUniqueInput[]
    connect?: RoleWhereUniqueInput | RoleWhereUniqueInput[]
    update?: RoleUpdateWithWhereUniqueWithoutSuperAdminInput | RoleUpdateWithWhereUniqueWithoutSuperAdminInput[]
    updateMany?: RoleUpdateManyWithWhereWithoutSuperAdminInput | RoleUpdateManyWithWhereWithoutSuperAdminInput[]
    deleteMany?: RoleScalarWhereInput | RoleScalarWhereInput[]
  }

  export type SuperAdminUserRoleUncheckedUpdateManyWithoutSuperAdminNestedInput = {
    create?: XOR<SuperAdminUserRoleCreateWithoutSuperAdminInput, SuperAdminUserRoleUncheckedCreateWithoutSuperAdminInput> | SuperAdminUserRoleCreateWithoutSuperAdminInput[] | SuperAdminUserRoleUncheckedCreateWithoutSuperAdminInput[]
    connectOrCreate?: SuperAdminUserRoleCreateOrConnectWithoutSuperAdminInput | SuperAdminUserRoleCreateOrConnectWithoutSuperAdminInput[]
    upsert?: SuperAdminUserRoleUpsertWithWhereUniqueWithoutSuperAdminInput | SuperAdminUserRoleUpsertWithWhereUniqueWithoutSuperAdminInput[]
    createMany?: SuperAdminUserRoleCreateManySuperAdminInputEnvelope
    set?: SuperAdminUserRoleWhereUniqueInput | SuperAdminUserRoleWhereUniqueInput[]
    disconnect?: SuperAdminUserRoleWhereUniqueInput | SuperAdminUserRoleWhereUniqueInput[]
    delete?: SuperAdminUserRoleWhereUniqueInput | SuperAdminUserRoleWhereUniqueInput[]
    connect?: SuperAdminUserRoleWhereUniqueInput | SuperAdminUserRoleWhereUniqueInput[]
    update?: SuperAdminUserRoleUpdateWithWhereUniqueWithoutSuperAdminInput | SuperAdminUserRoleUpdateWithWhereUniqueWithoutSuperAdminInput[]
    updateMany?: SuperAdminUserRoleUpdateManyWithWhereWithoutSuperAdminInput | SuperAdminUserRoleUpdateManyWithWhereWithoutSuperAdminInput[]
    deleteMany?: SuperAdminUserRoleScalarWhereInput | SuperAdminUserRoleScalarWhereInput[]
  }

  export type DiagnosticAccountCreateNestedOneWithoutPatientsInput = {
    create?: XOR<DiagnosticAccountCreateWithoutPatientsInput, DiagnosticAccountUncheckedCreateWithoutPatientsInput>
    connectOrCreate?: DiagnosticAccountCreateOrConnectWithoutPatientsInput
    connect?: DiagnosticAccountWhereUniqueInput
  }

  export type NullableDateTimeFieldUpdateOperationsInput = {
    set?: Date | string | null
  }

  export type NullableIntFieldUpdateOperationsInput = {
    set?: number | null
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type DiagnosticAccountUpdateOneWithoutPatientsNestedInput = {
    create?: XOR<DiagnosticAccountCreateWithoutPatientsInput, DiagnosticAccountUncheckedCreateWithoutPatientsInput>
    connectOrCreate?: DiagnosticAccountCreateOrConnectWithoutPatientsInput
    upsert?: DiagnosticAccountUpsertWithoutPatientsInput
    disconnect?: DiagnosticAccountWhereInput | boolean
    delete?: DiagnosticAccountWhereInput | boolean
    connect?: DiagnosticAccountWhereUniqueInput
    update?: XOR<XOR<DiagnosticAccountUpdateToOneWithWhereWithoutPatientsInput, DiagnosticAccountUpdateWithoutPatientsInput>, DiagnosticAccountUncheckedUpdateWithoutPatientsInput>
  }

  export type NullableDecimalFieldUpdateOperationsInput = {
    set?: Decimal | DecimalJsLike | number | string | null
    increment?: Decimal | DecimalJsLike | number | string
    decrement?: Decimal | DecimalJsLike | number | string
    multiply?: Decimal | DecimalJsLike | number | string
    divide?: Decimal | DecimalJsLike | number | string
  }

  export type DiagnosticChildUserCreateNestedManyWithoutDiagnosticAccountInput = {
    create?: XOR<DiagnosticChildUserCreateWithoutDiagnosticAccountInput, DiagnosticChildUserUncheckedCreateWithoutDiagnosticAccountInput> | DiagnosticChildUserCreateWithoutDiagnosticAccountInput[] | DiagnosticChildUserUncheckedCreateWithoutDiagnosticAccountInput[]
    connectOrCreate?: DiagnosticChildUserCreateOrConnectWithoutDiagnosticAccountInput | DiagnosticChildUserCreateOrConnectWithoutDiagnosticAccountInput[]
    createMany?: DiagnosticChildUserCreateManyDiagnosticAccountInputEnvelope
    connect?: DiagnosticChildUserWhereUniqueInput | DiagnosticChildUserWhereUniqueInput[]
  }

  export type RoleCreateNestedManyWithoutDiagnosticAccountInput = {
    create?: XOR<RoleCreateWithoutDiagnosticAccountInput, RoleUncheckedCreateWithoutDiagnosticAccountInput> | RoleCreateWithoutDiagnosticAccountInput[] | RoleUncheckedCreateWithoutDiagnosticAccountInput[]
    connectOrCreate?: RoleCreateOrConnectWithoutDiagnosticAccountInput | RoleCreateOrConnectWithoutDiagnosticAccountInput[]
    createMany?: RoleCreateManyDiagnosticAccountInputEnvelope
    connect?: RoleWhereUniqueInput | RoleWhereUniqueInput[]
  }

  export type PatientCreateNestedManyWithoutDiagnosticAccountInput = {
    create?: XOR<PatientCreateWithoutDiagnosticAccountInput, PatientUncheckedCreateWithoutDiagnosticAccountInput> | PatientCreateWithoutDiagnosticAccountInput[] | PatientUncheckedCreateWithoutDiagnosticAccountInput[]
    connectOrCreate?: PatientCreateOrConnectWithoutDiagnosticAccountInput | PatientCreateOrConnectWithoutDiagnosticAccountInput[]
    createMany?: PatientCreateManyDiagnosticAccountInputEnvelope
    connect?: PatientWhereUniqueInput | PatientWhereUniqueInput[]
  }

  export type DiagnosticChildUserUncheckedCreateNestedManyWithoutDiagnosticAccountInput = {
    create?: XOR<DiagnosticChildUserCreateWithoutDiagnosticAccountInput, DiagnosticChildUserUncheckedCreateWithoutDiagnosticAccountInput> | DiagnosticChildUserCreateWithoutDiagnosticAccountInput[] | DiagnosticChildUserUncheckedCreateWithoutDiagnosticAccountInput[]
    connectOrCreate?: DiagnosticChildUserCreateOrConnectWithoutDiagnosticAccountInput | DiagnosticChildUserCreateOrConnectWithoutDiagnosticAccountInput[]
    createMany?: DiagnosticChildUserCreateManyDiagnosticAccountInputEnvelope
    connect?: DiagnosticChildUserWhereUniqueInput | DiagnosticChildUserWhereUniqueInput[]
  }

  export type RoleUncheckedCreateNestedManyWithoutDiagnosticAccountInput = {
    create?: XOR<RoleCreateWithoutDiagnosticAccountInput, RoleUncheckedCreateWithoutDiagnosticAccountInput> | RoleCreateWithoutDiagnosticAccountInput[] | RoleUncheckedCreateWithoutDiagnosticAccountInput[]
    connectOrCreate?: RoleCreateOrConnectWithoutDiagnosticAccountInput | RoleCreateOrConnectWithoutDiagnosticAccountInput[]
    createMany?: RoleCreateManyDiagnosticAccountInputEnvelope
    connect?: RoleWhereUniqueInput | RoleWhereUniqueInput[]
  }

  export type PatientUncheckedCreateNestedManyWithoutDiagnosticAccountInput = {
    create?: XOR<PatientCreateWithoutDiagnosticAccountInput, PatientUncheckedCreateWithoutDiagnosticAccountInput> | PatientCreateWithoutDiagnosticAccountInput[] | PatientUncheckedCreateWithoutDiagnosticAccountInput[]
    connectOrCreate?: PatientCreateOrConnectWithoutDiagnosticAccountInput | PatientCreateOrConnectWithoutDiagnosticAccountInput[]
    createMany?: PatientCreateManyDiagnosticAccountInputEnvelope
    connect?: PatientWhereUniqueInput | PatientWhereUniqueInput[]
  }

  export type DiagnosticChildUserUpdateManyWithoutDiagnosticAccountNestedInput = {
    create?: XOR<DiagnosticChildUserCreateWithoutDiagnosticAccountInput, DiagnosticChildUserUncheckedCreateWithoutDiagnosticAccountInput> | DiagnosticChildUserCreateWithoutDiagnosticAccountInput[] | DiagnosticChildUserUncheckedCreateWithoutDiagnosticAccountInput[]
    connectOrCreate?: DiagnosticChildUserCreateOrConnectWithoutDiagnosticAccountInput | DiagnosticChildUserCreateOrConnectWithoutDiagnosticAccountInput[]
    upsert?: DiagnosticChildUserUpsertWithWhereUniqueWithoutDiagnosticAccountInput | DiagnosticChildUserUpsertWithWhereUniqueWithoutDiagnosticAccountInput[]
    createMany?: DiagnosticChildUserCreateManyDiagnosticAccountInputEnvelope
    set?: DiagnosticChildUserWhereUniqueInput | DiagnosticChildUserWhereUniqueInput[]
    disconnect?: DiagnosticChildUserWhereUniqueInput | DiagnosticChildUserWhereUniqueInput[]
    delete?: DiagnosticChildUserWhereUniqueInput | DiagnosticChildUserWhereUniqueInput[]
    connect?: DiagnosticChildUserWhereUniqueInput | DiagnosticChildUserWhereUniqueInput[]
    update?: DiagnosticChildUserUpdateWithWhereUniqueWithoutDiagnosticAccountInput | DiagnosticChildUserUpdateWithWhereUniqueWithoutDiagnosticAccountInput[]
    updateMany?: DiagnosticChildUserUpdateManyWithWhereWithoutDiagnosticAccountInput | DiagnosticChildUserUpdateManyWithWhereWithoutDiagnosticAccountInput[]
    deleteMany?: DiagnosticChildUserScalarWhereInput | DiagnosticChildUserScalarWhereInput[]
  }

  export type RoleUpdateManyWithoutDiagnosticAccountNestedInput = {
    create?: XOR<RoleCreateWithoutDiagnosticAccountInput, RoleUncheckedCreateWithoutDiagnosticAccountInput> | RoleCreateWithoutDiagnosticAccountInput[] | RoleUncheckedCreateWithoutDiagnosticAccountInput[]
    connectOrCreate?: RoleCreateOrConnectWithoutDiagnosticAccountInput | RoleCreateOrConnectWithoutDiagnosticAccountInput[]
    upsert?: RoleUpsertWithWhereUniqueWithoutDiagnosticAccountInput | RoleUpsertWithWhereUniqueWithoutDiagnosticAccountInput[]
    createMany?: RoleCreateManyDiagnosticAccountInputEnvelope
    set?: RoleWhereUniqueInput | RoleWhereUniqueInput[]
    disconnect?: RoleWhereUniqueInput | RoleWhereUniqueInput[]
    delete?: RoleWhereUniqueInput | RoleWhereUniqueInput[]
    connect?: RoleWhereUniqueInput | RoleWhereUniqueInput[]
    update?: RoleUpdateWithWhereUniqueWithoutDiagnosticAccountInput | RoleUpdateWithWhereUniqueWithoutDiagnosticAccountInput[]
    updateMany?: RoleUpdateManyWithWhereWithoutDiagnosticAccountInput | RoleUpdateManyWithWhereWithoutDiagnosticAccountInput[]
    deleteMany?: RoleScalarWhereInput | RoleScalarWhereInput[]
  }

  export type PatientUpdateManyWithoutDiagnosticAccountNestedInput = {
    create?: XOR<PatientCreateWithoutDiagnosticAccountInput, PatientUncheckedCreateWithoutDiagnosticAccountInput> | PatientCreateWithoutDiagnosticAccountInput[] | PatientUncheckedCreateWithoutDiagnosticAccountInput[]
    connectOrCreate?: PatientCreateOrConnectWithoutDiagnosticAccountInput | PatientCreateOrConnectWithoutDiagnosticAccountInput[]
    upsert?: PatientUpsertWithWhereUniqueWithoutDiagnosticAccountInput | PatientUpsertWithWhereUniqueWithoutDiagnosticAccountInput[]
    createMany?: PatientCreateManyDiagnosticAccountInputEnvelope
    set?: PatientWhereUniqueInput | PatientWhereUniqueInput[]
    disconnect?: PatientWhereUniqueInput | PatientWhereUniqueInput[]
    delete?: PatientWhereUniqueInput | PatientWhereUniqueInput[]
    connect?: PatientWhereUniqueInput | PatientWhereUniqueInput[]
    update?: PatientUpdateWithWhereUniqueWithoutDiagnosticAccountInput | PatientUpdateWithWhereUniqueWithoutDiagnosticAccountInput[]
    updateMany?: PatientUpdateManyWithWhereWithoutDiagnosticAccountInput | PatientUpdateManyWithWhereWithoutDiagnosticAccountInput[]
    deleteMany?: PatientScalarWhereInput | PatientScalarWhereInput[]
  }

  export type DiagnosticChildUserUncheckedUpdateManyWithoutDiagnosticAccountNestedInput = {
    create?: XOR<DiagnosticChildUserCreateWithoutDiagnosticAccountInput, DiagnosticChildUserUncheckedCreateWithoutDiagnosticAccountInput> | DiagnosticChildUserCreateWithoutDiagnosticAccountInput[] | DiagnosticChildUserUncheckedCreateWithoutDiagnosticAccountInput[]
    connectOrCreate?: DiagnosticChildUserCreateOrConnectWithoutDiagnosticAccountInput | DiagnosticChildUserCreateOrConnectWithoutDiagnosticAccountInput[]
    upsert?: DiagnosticChildUserUpsertWithWhereUniqueWithoutDiagnosticAccountInput | DiagnosticChildUserUpsertWithWhereUniqueWithoutDiagnosticAccountInput[]
    createMany?: DiagnosticChildUserCreateManyDiagnosticAccountInputEnvelope
    set?: DiagnosticChildUserWhereUniqueInput | DiagnosticChildUserWhereUniqueInput[]
    disconnect?: DiagnosticChildUserWhereUniqueInput | DiagnosticChildUserWhereUniqueInput[]
    delete?: DiagnosticChildUserWhereUniqueInput | DiagnosticChildUserWhereUniqueInput[]
    connect?: DiagnosticChildUserWhereUniqueInput | DiagnosticChildUserWhereUniqueInput[]
    update?: DiagnosticChildUserUpdateWithWhereUniqueWithoutDiagnosticAccountInput | DiagnosticChildUserUpdateWithWhereUniqueWithoutDiagnosticAccountInput[]
    updateMany?: DiagnosticChildUserUpdateManyWithWhereWithoutDiagnosticAccountInput | DiagnosticChildUserUpdateManyWithWhereWithoutDiagnosticAccountInput[]
    deleteMany?: DiagnosticChildUserScalarWhereInput | DiagnosticChildUserScalarWhereInput[]
  }

  export type RoleUncheckedUpdateManyWithoutDiagnosticAccountNestedInput = {
    create?: XOR<RoleCreateWithoutDiagnosticAccountInput, RoleUncheckedCreateWithoutDiagnosticAccountInput> | RoleCreateWithoutDiagnosticAccountInput[] | RoleUncheckedCreateWithoutDiagnosticAccountInput[]
    connectOrCreate?: RoleCreateOrConnectWithoutDiagnosticAccountInput | RoleCreateOrConnectWithoutDiagnosticAccountInput[]
    upsert?: RoleUpsertWithWhereUniqueWithoutDiagnosticAccountInput | RoleUpsertWithWhereUniqueWithoutDiagnosticAccountInput[]
    createMany?: RoleCreateManyDiagnosticAccountInputEnvelope
    set?: RoleWhereUniqueInput | RoleWhereUniqueInput[]
    disconnect?: RoleWhereUniqueInput | RoleWhereUniqueInput[]
    delete?: RoleWhereUniqueInput | RoleWhereUniqueInput[]
    connect?: RoleWhereUniqueInput | RoleWhereUniqueInput[]
    update?: RoleUpdateWithWhereUniqueWithoutDiagnosticAccountInput | RoleUpdateWithWhereUniqueWithoutDiagnosticAccountInput[]
    updateMany?: RoleUpdateManyWithWhereWithoutDiagnosticAccountInput | RoleUpdateManyWithWhereWithoutDiagnosticAccountInput[]
    deleteMany?: RoleScalarWhereInput | RoleScalarWhereInput[]
  }

  export type PatientUncheckedUpdateManyWithoutDiagnosticAccountNestedInput = {
    create?: XOR<PatientCreateWithoutDiagnosticAccountInput, PatientUncheckedCreateWithoutDiagnosticAccountInput> | PatientCreateWithoutDiagnosticAccountInput[] | PatientUncheckedCreateWithoutDiagnosticAccountInput[]
    connectOrCreate?: PatientCreateOrConnectWithoutDiagnosticAccountInput | PatientCreateOrConnectWithoutDiagnosticAccountInput[]
    upsert?: PatientUpsertWithWhereUniqueWithoutDiagnosticAccountInput | PatientUpsertWithWhereUniqueWithoutDiagnosticAccountInput[]
    createMany?: PatientCreateManyDiagnosticAccountInputEnvelope
    set?: PatientWhereUniqueInput | PatientWhereUniqueInput[]
    disconnect?: PatientWhereUniqueInput | PatientWhereUniqueInput[]
    delete?: PatientWhereUniqueInput | PatientWhereUniqueInput[]
    connect?: PatientWhereUniqueInput | PatientWhereUniqueInput[]
    update?: PatientUpdateWithWhereUniqueWithoutDiagnosticAccountInput | PatientUpdateWithWhereUniqueWithoutDiagnosticAccountInput[]
    updateMany?: PatientUpdateManyWithWhereWithoutDiagnosticAccountInput | PatientUpdateManyWithWhereWithoutDiagnosticAccountInput[]
    deleteMany?: PatientScalarWhereInput | PatientScalarWhereInput[]
  }

  export type DiagnosticAccountCreateNestedOneWithoutChildUsersInput = {
    create?: XOR<DiagnosticAccountCreateWithoutChildUsersInput, DiagnosticAccountUncheckedCreateWithoutChildUsersInput>
    connectOrCreate?: DiagnosticAccountCreateOrConnectWithoutChildUsersInput
    connect?: DiagnosticAccountWhereUniqueInput
  }

  export type DiagnosticUserRoleCreateNestedManyWithoutDiagnosticChildUserInput = {
    create?: XOR<DiagnosticUserRoleCreateWithoutDiagnosticChildUserInput, DiagnosticUserRoleUncheckedCreateWithoutDiagnosticChildUserInput> | DiagnosticUserRoleCreateWithoutDiagnosticChildUserInput[] | DiagnosticUserRoleUncheckedCreateWithoutDiagnosticChildUserInput[]
    connectOrCreate?: DiagnosticUserRoleCreateOrConnectWithoutDiagnosticChildUserInput | DiagnosticUserRoleCreateOrConnectWithoutDiagnosticChildUserInput[]
    createMany?: DiagnosticUserRoleCreateManyDiagnosticChildUserInputEnvelope
    connect?: DiagnosticUserRoleWhereUniqueInput | DiagnosticUserRoleWhereUniqueInput[]
  }

  export type DiagnosticUserRoleUncheckedCreateNestedManyWithoutDiagnosticChildUserInput = {
    create?: XOR<DiagnosticUserRoleCreateWithoutDiagnosticChildUserInput, DiagnosticUserRoleUncheckedCreateWithoutDiagnosticChildUserInput> | DiagnosticUserRoleCreateWithoutDiagnosticChildUserInput[] | DiagnosticUserRoleUncheckedCreateWithoutDiagnosticChildUserInput[]
    connectOrCreate?: DiagnosticUserRoleCreateOrConnectWithoutDiagnosticChildUserInput | DiagnosticUserRoleCreateOrConnectWithoutDiagnosticChildUserInput[]
    createMany?: DiagnosticUserRoleCreateManyDiagnosticChildUserInputEnvelope
    connect?: DiagnosticUserRoleWhereUniqueInput | DiagnosticUserRoleWhereUniqueInput[]
  }

  export type DiagnosticAccountUpdateOneRequiredWithoutChildUsersNestedInput = {
    create?: XOR<DiagnosticAccountCreateWithoutChildUsersInput, DiagnosticAccountUncheckedCreateWithoutChildUsersInput>
    connectOrCreate?: DiagnosticAccountCreateOrConnectWithoutChildUsersInput
    upsert?: DiagnosticAccountUpsertWithoutChildUsersInput
    connect?: DiagnosticAccountWhereUniqueInput
    update?: XOR<XOR<DiagnosticAccountUpdateToOneWithWhereWithoutChildUsersInput, DiagnosticAccountUpdateWithoutChildUsersInput>, DiagnosticAccountUncheckedUpdateWithoutChildUsersInput>
  }

  export type DiagnosticUserRoleUpdateManyWithoutDiagnosticChildUserNestedInput = {
    create?: XOR<DiagnosticUserRoleCreateWithoutDiagnosticChildUserInput, DiagnosticUserRoleUncheckedCreateWithoutDiagnosticChildUserInput> | DiagnosticUserRoleCreateWithoutDiagnosticChildUserInput[] | DiagnosticUserRoleUncheckedCreateWithoutDiagnosticChildUserInput[]
    connectOrCreate?: DiagnosticUserRoleCreateOrConnectWithoutDiagnosticChildUserInput | DiagnosticUserRoleCreateOrConnectWithoutDiagnosticChildUserInput[]
    upsert?: DiagnosticUserRoleUpsertWithWhereUniqueWithoutDiagnosticChildUserInput | DiagnosticUserRoleUpsertWithWhereUniqueWithoutDiagnosticChildUserInput[]
    createMany?: DiagnosticUserRoleCreateManyDiagnosticChildUserInputEnvelope
    set?: DiagnosticUserRoleWhereUniqueInput | DiagnosticUserRoleWhereUniqueInput[]
    disconnect?: DiagnosticUserRoleWhereUniqueInput | DiagnosticUserRoleWhereUniqueInput[]
    delete?: DiagnosticUserRoleWhereUniqueInput | DiagnosticUserRoleWhereUniqueInput[]
    connect?: DiagnosticUserRoleWhereUniqueInput | DiagnosticUserRoleWhereUniqueInput[]
    update?: DiagnosticUserRoleUpdateWithWhereUniqueWithoutDiagnosticChildUserInput | DiagnosticUserRoleUpdateWithWhereUniqueWithoutDiagnosticChildUserInput[]
    updateMany?: DiagnosticUserRoleUpdateManyWithWhereWithoutDiagnosticChildUserInput | DiagnosticUserRoleUpdateManyWithWhereWithoutDiagnosticChildUserInput[]
    deleteMany?: DiagnosticUserRoleScalarWhereInput | DiagnosticUserRoleScalarWhereInput[]
  }

  export type DiagnosticUserRoleUncheckedUpdateManyWithoutDiagnosticChildUserNestedInput = {
    create?: XOR<DiagnosticUserRoleCreateWithoutDiagnosticChildUserInput, DiagnosticUserRoleUncheckedCreateWithoutDiagnosticChildUserInput> | DiagnosticUserRoleCreateWithoutDiagnosticChildUserInput[] | DiagnosticUserRoleUncheckedCreateWithoutDiagnosticChildUserInput[]
    connectOrCreate?: DiagnosticUserRoleCreateOrConnectWithoutDiagnosticChildUserInput | DiagnosticUserRoleCreateOrConnectWithoutDiagnosticChildUserInput[]
    upsert?: DiagnosticUserRoleUpsertWithWhereUniqueWithoutDiagnosticChildUserInput | DiagnosticUserRoleUpsertWithWhereUniqueWithoutDiagnosticChildUserInput[]
    createMany?: DiagnosticUserRoleCreateManyDiagnosticChildUserInputEnvelope
    set?: DiagnosticUserRoleWhereUniqueInput | DiagnosticUserRoleWhereUniqueInput[]
    disconnect?: DiagnosticUserRoleWhereUniqueInput | DiagnosticUserRoleWhereUniqueInput[]
    delete?: DiagnosticUserRoleWhereUniqueInput | DiagnosticUserRoleWhereUniqueInput[]
    connect?: DiagnosticUserRoleWhereUniqueInput | DiagnosticUserRoleWhereUniqueInput[]
    update?: DiagnosticUserRoleUpdateWithWhereUniqueWithoutDiagnosticChildUserInput | DiagnosticUserRoleUpdateWithWhereUniqueWithoutDiagnosticChildUserInput[]
    updateMany?: DiagnosticUserRoleUpdateManyWithWhereWithoutDiagnosticChildUserInput | DiagnosticUserRoleUpdateManyWithWhereWithoutDiagnosticChildUserInput[]
    deleteMany?: DiagnosticUserRoleScalarWhereInput | DiagnosticUserRoleScalarWhereInput[]
  }

  export type DiagnosticAccountCreateNestedOneWithoutRolesInput = {
    create?: XOR<DiagnosticAccountCreateWithoutRolesInput, DiagnosticAccountUncheckedCreateWithoutRolesInput>
    connectOrCreate?: DiagnosticAccountCreateOrConnectWithoutRolesInput
    connect?: DiagnosticAccountWhereUniqueInput
  }

  export type SuperAdminsCreateNestedOneWithoutRolesInput = {
    create?: XOR<SuperAdminsCreateWithoutRolesInput, SuperAdminsUncheckedCreateWithoutRolesInput>
    connectOrCreate?: SuperAdminsCreateOrConnectWithoutRolesInput
    connect?: SuperAdminsWhereUniqueInput
  }

  export type RolePermissionCreateNestedManyWithoutRoleInput = {
    create?: XOR<RolePermissionCreateWithoutRoleInput, RolePermissionUncheckedCreateWithoutRoleInput> | RolePermissionCreateWithoutRoleInput[] | RolePermissionUncheckedCreateWithoutRoleInput[]
    connectOrCreate?: RolePermissionCreateOrConnectWithoutRoleInput | RolePermissionCreateOrConnectWithoutRoleInput[]
    createMany?: RolePermissionCreateManyRoleInputEnvelope
    connect?: RolePermissionWhereUniqueInput | RolePermissionWhereUniqueInput[]
  }

  export type DiagnosticUserRoleCreateNestedManyWithoutRoleInput = {
    create?: XOR<DiagnosticUserRoleCreateWithoutRoleInput, DiagnosticUserRoleUncheckedCreateWithoutRoleInput> | DiagnosticUserRoleCreateWithoutRoleInput[] | DiagnosticUserRoleUncheckedCreateWithoutRoleInput[]
    connectOrCreate?: DiagnosticUserRoleCreateOrConnectWithoutRoleInput | DiagnosticUserRoleCreateOrConnectWithoutRoleInput[]
    createMany?: DiagnosticUserRoleCreateManyRoleInputEnvelope
    connect?: DiagnosticUserRoleWhereUniqueInput | DiagnosticUserRoleWhereUniqueInput[]
  }

  export type SuperAdminUserRoleCreateNestedManyWithoutRoleInput = {
    create?: XOR<SuperAdminUserRoleCreateWithoutRoleInput, SuperAdminUserRoleUncheckedCreateWithoutRoleInput> | SuperAdminUserRoleCreateWithoutRoleInput[] | SuperAdminUserRoleUncheckedCreateWithoutRoleInput[]
    connectOrCreate?: SuperAdminUserRoleCreateOrConnectWithoutRoleInput | SuperAdminUserRoleCreateOrConnectWithoutRoleInput[]
    createMany?: SuperAdminUserRoleCreateManyRoleInputEnvelope
    connect?: SuperAdminUserRoleWhereUniqueInput | SuperAdminUserRoleWhereUniqueInput[]
  }

  export type RolePermissionUncheckedCreateNestedManyWithoutRoleInput = {
    create?: XOR<RolePermissionCreateWithoutRoleInput, RolePermissionUncheckedCreateWithoutRoleInput> | RolePermissionCreateWithoutRoleInput[] | RolePermissionUncheckedCreateWithoutRoleInput[]
    connectOrCreate?: RolePermissionCreateOrConnectWithoutRoleInput | RolePermissionCreateOrConnectWithoutRoleInput[]
    createMany?: RolePermissionCreateManyRoleInputEnvelope
    connect?: RolePermissionWhereUniqueInput | RolePermissionWhereUniqueInput[]
  }

  export type DiagnosticUserRoleUncheckedCreateNestedManyWithoutRoleInput = {
    create?: XOR<DiagnosticUserRoleCreateWithoutRoleInput, DiagnosticUserRoleUncheckedCreateWithoutRoleInput> | DiagnosticUserRoleCreateWithoutRoleInput[] | DiagnosticUserRoleUncheckedCreateWithoutRoleInput[]
    connectOrCreate?: DiagnosticUserRoleCreateOrConnectWithoutRoleInput | DiagnosticUserRoleCreateOrConnectWithoutRoleInput[]
    createMany?: DiagnosticUserRoleCreateManyRoleInputEnvelope
    connect?: DiagnosticUserRoleWhereUniqueInput | DiagnosticUserRoleWhereUniqueInput[]
  }

  export type SuperAdminUserRoleUncheckedCreateNestedManyWithoutRoleInput = {
    create?: XOR<SuperAdminUserRoleCreateWithoutRoleInput, SuperAdminUserRoleUncheckedCreateWithoutRoleInput> | SuperAdminUserRoleCreateWithoutRoleInput[] | SuperAdminUserRoleUncheckedCreateWithoutRoleInput[]
    connectOrCreate?: SuperAdminUserRoleCreateOrConnectWithoutRoleInput | SuperAdminUserRoleCreateOrConnectWithoutRoleInput[]
    createMany?: SuperAdminUserRoleCreateManyRoleInputEnvelope
    connect?: SuperAdminUserRoleWhereUniqueInput | SuperAdminUserRoleWhereUniqueInput[]
  }

  export type EnumRoleOwnerTypeFieldUpdateOperationsInput = {
    set?: $Enums.RoleOwnerType
  }

  export type DiagnosticAccountUpdateOneWithoutRolesNestedInput = {
    create?: XOR<DiagnosticAccountCreateWithoutRolesInput, DiagnosticAccountUncheckedCreateWithoutRolesInput>
    connectOrCreate?: DiagnosticAccountCreateOrConnectWithoutRolesInput
    upsert?: DiagnosticAccountUpsertWithoutRolesInput
    disconnect?: DiagnosticAccountWhereInput | boolean
    delete?: DiagnosticAccountWhereInput | boolean
    connect?: DiagnosticAccountWhereUniqueInput
    update?: XOR<XOR<DiagnosticAccountUpdateToOneWithWhereWithoutRolesInput, DiagnosticAccountUpdateWithoutRolesInput>, DiagnosticAccountUncheckedUpdateWithoutRolesInput>
  }

  export type SuperAdminsUpdateOneWithoutRolesNestedInput = {
    create?: XOR<SuperAdminsCreateWithoutRolesInput, SuperAdminsUncheckedCreateWithoutRolesInput>
    connectOrCreate?: SuperAdminsCreateOrConnectWithoutRolesInput
    upsert?: SuperAdminsUpsertWithoutRolesInput
    disconnect?: SuperAdminsWhereInput | boolean
    delete?: SuperAdminsWhereInput | boolean
    connect?: SuperAdminsWhereUniqueInput
    update?: XOR<XOR<SuperAdminsUpdateToOneWithWhereWithoutRolesInput, SuperAdminsUpdateWithoutRolesInput>, SuperAdminsUncheckedUpdateWithoutRolesInput>
  }

  export type RolePermissionUpdateManyWithoutRoleNestedInput = {
    create?: XOR<RolePermissionCreateWithoutRoleInput, RolePermissionUncheckedCreateWithoutRoleInput> | RolePermissionCreateWithoutRoleInput[] | RolePermissionUncheckedCreateWithoutRoleInput[]
    connectOrCreate?: RolePermissionCreateOrConnectWithoutRoleInput | RolePermissionCreateOrConnectWithoutRoleInput[]
    upsert?: RolePermissionUpsertWithWhereUniqueWithoutRoleInput | RolePermissionUpsertWithWhereUniqueWithoutRoleInput[]
    createMany?: RolePermissionCreateManyRoleInputEnvelope
    set?: RolePermissionWhereUniqueInput | RolePermissionWhereUniqueInput[]
    disconnect?: RolePermissionWhereUniqueInput | RolePermissionWhereUniqueInput[]
    delete?: RolePermissionWhereUniqueInput | RolePermissionWhereUniqueInput[]
    connect?: RolePermissionWhereUniqueInput | RolePermissionWhereUniqueInput[]
    update?: RolePermissionUpdateWithWhereUniqueWithoutRoleInput | RolePermissionUpdateWithWhereUniqueWithoutRoleInput[]
    updateMany?: RolePermissionUpdateManyWithWhereWithoutRoleInput | RolePermissionUpdateManyWithWhereWithoutRoleInput[]
    deleteMany?: RolePermissionScalarWhereInput | RolePermissionScalarWhereInput[]
  }

  export type DiagnosticUserRoleUpdateManyWithoutRoleNestedInput = {
    create?: XOR<DiagnosticUserRoleCreateWithoutRoleInput, DiagnosticUserRoleUncheckedCreateWithoutRoleInput> | DiagnosticUserRoleCreateWithoutRoleInput[] | DiagnosticUserRoleUncheckedCreateWithoutRoleInput[]
    connectOrCreate?: DiagnosticUserRoleCreateOrConnectWithoutRoleInput | DiagnosticUserRoleCreateOrConnectWithoutRoleInput[]
    upsert?: DiagnosticUserRoleUpsertWithWhereUniqueWithoutRoleInput | DiagnosticUserRoleUpsertWithWhereUniqueWithoutRoleInput[]
    createMany?: DiagnosticUserRoleCreateManyRoleInputEnvelope
    set?: DiagnosticUserRoleWhereUniqueInput | DiagnosticUserRoleWhereUniqueInput[]
    disconnect?: DiagnosticUserRoleWhereUniqueInput | DiagnosticUserRoleWhereUniqueInput[]
    delete?: DiagnosticUserRoleWhereUniqueInput | DiagnosticUserRoleWhereUniqueInput[]
    connect?: DiagnosticUserRoleWhereUniqueInput | DiagnosticUserRoleWhereUniqueInput[]
    update?: DiagnosticUserRoleUpdateWithWhereUniqueWithoutRoleInput | DiagnosticUserRoleUpdateWithWhereUniqueWithoutRoleInput[]
    updateMany?: DiagnosticUserRoleUpdateManyWithWhereWithoutRoleInput | DiagnosticUserRoleUpdateManyWithWhereWithoutRoleInput[]
    deleteMany?: DiagnosticUserRoleScalarWhereInput | DiagnosticUserRoleScalarWhereInput[]
  }

  export type SuperAdminUserRoleUpdateManyWithoutRoleNestedInput = {
    create?: XOR<SuperAdminUserRoleCreateWithoutRoleInput, SuperAdminUserRoleUncheckedCreateWithoutRoleInput> | SuperAdminUserRoleCreateWithoutRoleInput[] | SuperAdminUserRoleUncheckedCreateWithoutRoleInput[]
    connectOrCreate?: SuperAdminUserRoleCreateOrConnectWithoutRoleInput | SuperAdminUserRoleCreateOrConnectWithoutRoleInput[]
    upsert?: SuperAdminUserRoleUpsertWithWhereUniqueWithoutRoleInput | SuperAdminUserRoleUpsertWithWhereUniqueWithoutRoleInput[]
    createMany?: SuperAdminUserRoleCreateManyRoleInputEnvelope
    set?: SuperAdminUserRoleWhereUniqueInput | SuperAdminUserRoleWhereUniqueInput[]
    disconnect?: SuperAdminUserRoleWhereUniqueInput | SuperAdminUserRoleWhereUniqueInput[]
    delete?: SuperAdminUserRoleWhereUniqueInput | SuperAdminUserRoleWhereUniqueInput[]
    connect?: SuperAdminUserRoleWhereUniqueInput | SuperAdminUserRoleWhereUniqueInput[]
    update?: SuperAdminUserRoleUpdateWithWhereUniqueWithoutRoleInput | SuperAdminUserRoleUpdateWithWhereUniqueWithoutRoleInput[]
    updateMany?: SuperAdminUserRoleUpdateManyWithWhereWithoutRoleInput | SuperAdminUserRoleUpdateManyWithWhereWithoutRoleInput[]
    deleteMany?: SuperAdminUserRoleScalarWhereInput | SuperAdminUserRoleScalarWhereInput[]
  }

  export type RolePermissionUncheckedUpdateManyWithoutRoleNestedInput = {
    create?: XOR<RolePermissionCreateWithoutRoleInput, RolePermissionUncheckedCreateWithoutRoleInput> | RolePermissionCreateWithoutRoleInput[] | RolePermissionUncheckedCreateWithoutRoleInput[]
    connectOrCreate?: RolePermissionCreateOrConnectWithoutRoleInput | RolePermissionCreateOrConnectWithoutRoleInput[]
    upsert?: RolePermissionUpsertWithWhereUniqueWithoutRoleInput | RolePermissionUpsertWithWhereUniqueWithoutRoleInput[]
    createMany?: RolePermissionCreateManyRoleInputEnvelope
    set?: RolePermissionWhereUniqueInput | RolePermissionWhereUniqueInput[]
    disconnect?: RolePermissionWhereUniqueInput | RolePermissionWhereUniqueInput[]
    delete?: RolePermissionWhereUniqueInput | RolePermissionWhereUniqueInput[]
    connect?: RolePermissionWhereUniqueInput | RolePermissionWhereUniqueInput[]
    update?: RolePermissionUpdateWithWhereUniqueWithoutRoleInput | RolePermissionUpdateWithWhereUniqueWithoutRoleInput[]
    updateMany?: RolePermissionUpdateManyWithWhereWithoutRoleInput | RolePermissionUpdateManyWithWhereWithoutRoleInput[]
    deleteMany?: RolePermissionScalarWhereInput | RolePermissionScalarWhereInput[]
  }

  export type DiagnosticUserRoleUncheckedUpdateManyWithoutRoleNestedInput = {
    create?: XOR<DiagnosticUserRoleCreateWithoutRoleInput, DiagnosticUserRoleUncheckedCreateWithoutRoleInput> | DiagnosticUserRoleCreateWithoutRoleInput[] | DiagnosticUserRoleUncheckedCreateWithoutRoleInput[]
    connectOrCreate?: DiagnosticUserRoleCreateOrConnectWithoutRoleInput | DiagnosticUserRoleCreateOrConnectWithoutRoleInput[]
    upsert?: DiagnosticUserRoleUpsertWithWhereUniqueWithoutRoleInput | DiagnosticUserRoleUpsertWithWhereUniqueWithoutRoleInput[]
    createMany?: DiagnosticUserRoleCreateManyRoleInputEnvelope
    set?: DiagnosticUserRoleWhereUniqueInput | DiagnosticUserRoleWhereUniqueInput[]
    disconnect?: DiagnosticUserRoleWhereUniqueInput | DiagnosticUserRoleWhereUniqueInput[]
    delete?: DiagnosticUserRoleWhereUniqueInput | DiagnosticUserRoleWhereUniqueInput[]
    connect?: DiagnosticUserRoleWhereUniqueInput | DiagnosticUserRoleWhereUniqueInput[]
    update?: DiagnosticUserRoleUpdateWithWhereUniqueWithoutRoleInput | DiagnosticUserRoleUpdateWithWhereUniqueWithoutRoleInput[]
    updateMany?: DiagnosticUserRoleUpdateManyWithWhereWithoutRoleInput | DiagnosticUserRoleUpdateManyWithWhereWithoutRoleInput[]
    deleteMany?: DiagnosticUserRoleScalarWhereInput | DiagnosticUserRoleScalarWhereInput[]
  }

  export type SuperAdminUserRoleUncheckedUpdateManyWithoutRoleNestedInput = {
    create?: XOR<SuperAdminUserRoleCreateWithoutRoleInput, SuperAdminUserRoleUncheckedCreateWithoutRoleInput> | SuperAdminUserRoleCreateWithoutRoleInput[] | SuperAdminUserRoleUncheckedCreateWithoutRoleInput[]
    connectOrCreate?: SuperAdminUserRoleCreateOrConnectWithoutRoleInput | SuperAdminUserRoleCreateOrConnectWithoutRoleInput[]
    upsert?: SuperAdminUserRoleUpsertWithWhereUniqueWithoutRoleInput | SuperAdminUserRoleUpsertWithWhereUniqueWithoutRoleInput[]
    createMany?: SuperAdminUserRoleCreateManyRoleInputEnvelope
    set?: SuperAdminUserRoleWhereUniqueInput | SuperAdminUserRoleWhereUniqueInput[]
    disconnect?: SuperAdminUserRoleWhereUniqueInput | SuperAdminUserRoleWhereUniqueInput[]
    delete?: SuperAdminUserRoleWhereUniqueInput | SuperAdminUserRoleWhereUniqueInput[]
    connect?: SuperAdminUserRoleWhereUniqueInput | SuperAdminUserRoleWhereUniqueInput[]
    update?: SuperAdminUserRoleUpdateWithWhereUniqueWithoutRoleInput | SuperAdminUserRoleUpdateWithWhereUniqueWithoutRoleInput[]
    updateMany?: SuperAdminUserRoleUpdateManyWithWhereWithoutRoleInput | SuperAdminUserRoleUpdateManyWithWhereWithoutRoleInput[]
    deleteMany?: SuperAdminUserRoleScalarWhereInput | SuperAdminUserRoleScalarWhereInput[]
  }

  export type RolePermissionCreateNestedManyWithoutPermissionInput = {
    create?: XOR<RolePermissionCreateWithoutPermissionInput, RolePermissionUncheckedCreateWithoutPermissionInput> | RolePermissionCreateWithoutPermissionInput[] | RolePermissionUncheckedCreateWithoutPermissionInput[]
    connectOrCreate?: RolePermissionCreateOrConnectWithoutPermissionInput | RolePermissionCreateOrConnectWithoutPermissionInput[]
    createMany?: RolePermissionCreateManyPermissionInputEnvelope
    connect?: RolePermissionWhereUniqueInput | RolePermissionWhereUniqueInput[]
  }

  export type RolePermissionUncheckedCreateNestedManyWithoutPermissionInput = {
    create?: XOR<RolePermissionCreateWithoutPermissionInput, RolePermissionUncheckedCreateWithoutPermissionInput> | RolePermissionCreateWithoutPermissionInput[] | RolePermissionUncheckedCreateWithoutPermissionInput[]
    connectOrCreate?: RolePermissionCreateOrConnectWithoutPermissionInput | RolePermissionCreateOrConnectWithoutPermissionInput[]
    createMany?: RolePermissionCreateManyPermissionInputEnvelope
    connect?: RolePermissionWhereUniqueInput | RolePermissionWhereUniqueInput[]
  }

  export type RolePermissionUpdateManyWithoutPermissionNestedInput = {
    create?: XOR<RolePermissionCreateWithoutPermissionInput, RolePermissionUncheckedCreateWithoutPermissionInput> | RolePermissionCreateWithoutPermissionInput[] | RolePermissionUncheckedCreateWithoutPermissionInput[]
    connectOrCreate?: RolePermissionCreateOrConnectWithoutPermissionInput | RolePermissionCreateOrConnectWithoutPermissionInput[]
    upsert?: RolePermissionUpsertWithWhereUniqueWithoutPermissionInput | RolePermissionUpsertWithWhereUniqueWithoutPermissionInput[]
    createMany?: RolePermissionCreateManyPermissionInputEnvelope
    set?: RolePermissionWhereUniqueInput | RolePermissionWhereUniqueInput[]
    disconnect?: RolePermissionWhereUniqueInput | RolePermissionWhereUniqueInput[]
    delete?: RolePermissionWhereUniqueInput | RolePermissionWhereUniqueInput[]
    connect?: RolePermissionWhereUniqueInput | RolePermissionWhereUniqueInput[]
    update?: RolePermissionUpdateWithWhereUniqueWithoutPermissionInput | RolePermissionUpdateWithWhereUniqueWithoutPermissionInput[]
    updateMany?: RolePermissionUpdateManyWithWhereWithoutPermissionInput | RolePermissionUpdateManyWithWhereWithoutPermissionInput[]
    deleteMany?: RolePermissionScalarWhereInput | RolePermissionScalarWhereInput[]
  }

  export type RolePermissionUncheckedUpdateManyWithoutPermissionNestedInput = {
    create?: XOR<RolePermissionCreateWithoutPermissionInput, RolePermissionUncheckedCreateWithoutPermissionInput> | RolePermissionCreateWithoutPermissionInput[] | RolePermissionUncheckedCreateWithoutPermissionInput[]
    connectOrCreate?: RolePermissionCreateOrConnectWithoutPermissionInput | RolePermissionCreateOrConnectWithoutPermissionInput[]
    upsert?: RolePermissionUpsertWithWhereUniqueWithoutPermissionInput | RolePermissionUpsertWithWhereUniqueWithoutPermissionInput[]
    createMany?: RolePermissionCreateManyPermissionInputEnvelope
    set?: RolePermissionWhereUniqueInput | RolePermissionWhereUniqueInput[]
    disconnect?: RolePermissionWhereUniqueInput | RolePermissionWhereUniqueInput[]
    delete?: RolePermissionWhereUniqueInput | RolePermissionWhereUniqueInput[]
    connect?: RolePermissionWhereUniqueInput | RolePermissionWhereUniqueInput[]
    update?: RolePermissionUpdateWithWhereUniqueWithoutPermissionInput | RolePermissionUpdateWithWhereUniqueWithoutPermissionInput[]
    updateMany?: RolePermissionUpdateManyWithWhereWithoutPermissionInput | RolePermissionUpdateManyWithWhereWithoutPermissionInput[]
    deleteMany?: RolePermissionScalarWhereInput | RolePermissionScalarWhereInput[]
  }

  export type RoleCreateNestedOneWithoutRolePermissionsInput = {
    create?: XOR<RoleCreateWithoutRolePermissionsInput, RoleUncheckedCreateWithoutRolePermissionsInput>
    connectOrCreate?: RoleCreateOrConnectWithoutRolePermissionsInput
    connect?: RoleWhereUniqueInput
  }

  export type PermissionCreateNestedOneWithoutRolePermissionsInput = {
    create?: XOR<PermissionCreateWithoutRolePermissionsInput, PermissionUncheckedCreateWithoutRolePermissionsInput>
    connectOrCreate?: PermissionCreateOrConnectWithoutRolePermissionsInput
    connect?: PermissionWhereUniqueInput
  }

  export type RoleUpdateOneRequiredWithoutRolePermissionsNestedInput = {
    create?: XOR<RoleCreateWithoutRolePermissionsInput, RoleUncheckedCreateWithoutRolePermissionsInput>
    connectOrCreate?: RoleCreateOrConnectWithoutRolePermissionsInput
    upsert?: RoleUpsertWithoutRolePermissionsInput
    connect?: RoleWhereUniqueInput
    update?: XOR<XOR<RoleUpdateToOneWithWhereWithoutRolePermissionsInput, RoleUpdateWithoutRolePermissionsInput>, RoleUncheckedUpdateWithoutRolePermissionsInput>
  }

  export type PermissionUpdateOneRequiredWithoutRolePermissionsNestedInput = {
    create?: XOR<PermissionCreateWithoutRolePermissionsInput, PermissionUncheckedCreateWithoutRolePermissionsInput>
    connectOrCreate?: PermissionCreateOrConnectWithoutRolePermissionsInput
    upsert?: PermissionUpsertWithoutRolePermissionsInput
    connect?: PermissionWhereUniqueInput
    update?: XOR<XOR<PermissionUpdateToOneWithWhereWithoutRolePermissionsInput, PermissionUpdateWithoutRolePermissionsInput>, PermissionUncheckedUpdateWithoutRolePermissionsInput>
  }

  export type DiagnosticChildUserCreateNestedOneWithoutUserRolesInput = {
    create?: XOR<DiagnosticChildUserCreateWithoutUserRolesInput, DiagnosticChildUserUncheckedCreateWithoutUserRolesInput>
    connectOrCreate?: DiagnosticChildUserCreateOrConnectWithoutUserRolesInput
    connect?: DiagnosticChildUserWhereUniqueInput
  }

  export type RoleCreateNestedOneWithoutDiagnosticUserRolesInput = {
    create?: XOR<RoleCreateWithoutDiagnosticUserRolesInput, RoleUncheckedCreateWithoutDiagnosticUserRolesInput>
    connectOrCreate?: RoleCreateOrConnectWithoutDiagnosticUserRolesInput
    connect?: RoleWhereUniqueInput
  }

  export type DiagnosticChildUserUpdateOneRequiredWithoutUserRolesNestedInput = {
    create?: XOR<DiagnosticChildUserCreateWithoutUserRolesInput, DiagnosticChildUserUncheckedCreateWithoutUserRolesInput>
    connectOrCreate?: DiagnosticChildUserCreateOrConnectWithoutUserRolesInput
    upsert?: DiagnosticChildUserUpsertWithoutUserRolesInput
    connect?: DiagnosticChildUserWhereUniqueInput
    update?: XOR<XOR<DiagnosticChildUserUpdateToOneWithWhereWithoutUserRolesInput, DiagnosticChildUserUpdateWithoutUserRolesInput>, DiagnosticChildUserUncheckedUpdateWithoutUserRolesInput>
  }

  export type RoleUpdateOneRequiredWithoutDiagnosticUserRolesNestedInput = {
    create?: XOR<RoleCreateWithoutDiagnosticUserRolesInput, RoleUncheckedCreateWithoutDiagnosticUserRolesInput>
    connectOrCreate?: RoleCreateOrConnectWithoutDiagnosticUserRolesInput
    upsert?: RoleUpsertWithoutDiagnosticUserRolesInput
    connect?: RoleWhereUniqueInput
    update?: XOR<XOR<RoleUpdateToOneWithWhereWithoutDiagnosticUserRolesInput, RoleUpdateWithoutDiagnosticUserRolesInput>, RoleUncheckedUpdateWithoutDiagnosticUserRolesInput>
  }

  export type SuperAdminsCreateNestedOneWithoutUserRolesInput = {
    create?: XOR<SuperAdminsCreateWithoutUserRolesInput, SuperAdminsUncheckedCreateWithoutUserRolesInput>
    connectOrCreate?: SuperAdminsCreateOrConnectWithoutUserRolesInput
    connect?: SuperAdminsWhereUniqueInput
  }

  export type RoleCreateNestedOneWithoutSuperAdminUserRolesInput = {
    create?: XOR<RoleCreateWithoutSuperAdminUserRolesInput, RoleUncheckedCreateWithoutSuperAdminUserRolesInput>
    connectOrCreate?: RoleCreateOrConnectWithoutSuperAdminUserRolesInput
    connect?: RoleWhereUniqueInput
  }

  export type SuperAdminsUpdateOneRequiredWithoutUserRolesNestedInput = {
    create?: XOR<SuperAdminsCreateWithoutUserRolesInput, SuperAdminsUncheckedCreateWithoutUserRolesInput>
    connectOrCreate?: SuperAdminsCreateOrConnectWithoutUserRolesInput
    upsert?: SuperAdminsUpsertWithoutUserRolesInput
    connect?: SuperAdminsWhereUniqueInput
    update?: XOR<XOR<SuperAdminsUpdateToOneWithWhereWithoutUserRolesInput, SuperAdminsUpdateWithoutUserRolesInput>, SuperAdminsUncheckedUpdateWithoutUserRolesInput>
  }

  export type RoleUpdateOneRequiredWithoutSuperAdminUserRolesNestedInput = {
    create?: XOR<RoleCreateWithoutSuperAdminUserRolesInput, RoleUncheckedCreateWithoutSuperAdminUserRolesInput>
    connectOrCreate?: RoleCreateOrConnectWithoutSuperAdminUserRolesInput
    upsert?: RoleUpsertWithoutSuperAdminUserRolesInput
    connect?: RoleWhereUniqueInput
    update?: XOR<XOR<RoleUpdateToOneWithWhereWithoutSuperAdminUserRolesInput, RoleUpdateWithoutSuperAdminUserRolesInput>, RoleUncheckedUpdateWithoutSuperAdminUserRolesInput>
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

  export type NestedBoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
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

  export type NestedBoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
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

  export type NestedIntNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | null
    notIn?: number[] | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableWithAggregatesFilter<$PrismaModel> | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedIntNullableFilter<$PrismaModel>
    _max?: NestedIntNullableFilter<$PrismaModel>
  }

  export type NestedFloatNullableFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel> | null
    in?: number[] | null
    notIn?: number[] | null
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatNullableFilter<$PrismaModel> | number | null
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

  export type NestedEnumRoleOwnerTypeFilter<$PrismaModel = never> = {
    equals?: $Enums.RoleOwnerType | EnumRoleOwnerTypeFieldRefInput<$PrismaModel>
    in?: $Enums.RoleOwnerType[]
    notIn?: $Enums.RoleOwnerType[]
    not?: NestedEnumRoleOwnerTypeFilter<$PrismaModel> | $Enums.RoleOwnerType
  }

  export type NestedEnumRoleOwnerTypeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.RoleOwnerType | EnumRoleOwnerTypeFieldRefInput<$PrismaModel>
    in?: $Enums.RoleOwnerType[]
    notIn?: $Enums.RoleOwnerType[]
    not?: NestedEnumRoleOwnerTypeWithAggregatesFilter<$PrismaModel> | $Enums.RoleOwnerType
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumRoleOwnerTypeFilter<$PrismaModel>
    _max?: NestedEnumRoleOwnerTypeFilter<$PrismaModel>
  }

  export type RoleCreateWithoutSuperAdminInput = {
    id?: string
    name: string
    ownerType: $Enums.RoleOwnerType
    createdAt?: Date | string
    updatedAt?: Date | string
    DiagnosticAccount?: DiagnosticAccountCreateNestedOneWithoutRolesInput
    rolePermissions?: RolePermissionCreateNestedManyWithoutRoleInput
    diagnosticUserRoles?: DiagnosticUserRoleCreateNestedManyWithoutRoleInput
    superAdminUserRoles?: SuperAdminUserRoleCreateNestedManyWithoutRoleInput
  }

  export type RoleUncheckedCreateWithoutSuperAdminInput = {
    id?: string
    name: string
    ownerType: $Enums.RoleOwnerType
    DiagnosticAccountId?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    rolePermissions?: RolePermissionUncheckedCreateNestedManyWithoutRoleInput
    diagnosticUserRoles?: DiagnosticUserRoleUncheckedCreateNestedManyWithoutRoleInput
    superAdminUserRoles?: SuperAdminUserRoleUncheckedCreateNestedManyWithoutRoleInput
  }

  export type RoleCreateOrConnectWithoutSuperAdminInput = {
    where: RoleWhereUniqueInput
    create: XOR<RoleCreateWithoutSuperAdminInput, RoleUncheckedCreateWithoutSuperAdminInput>
  }

  export type RoleCreateManySuperAdminInputEnvelope = {
    data: RoleCreateManySuperAdminInput | RoleCreateManySuperAdminInput[]
    skipDuplicates?: boolean
  }

  export type SuperAdminUserRoleCreateWithoutSuperAdminInput = {
    id?: string
    createdAt?: Date | string
    role: RoleCreateNestedOneWithoutSuperAdminUserRolesInput
  }

  export type SuperAdminUserRoleUncheckedCreateWithoutSuperAdminInput = {
    id?: string
    roleId: string
    createdAt?: Date | string
  }

  export type SuperAdminUserRoleCreateOrConnectWithoutSuperAdminInput = {
    where: SuperAdminUserRoleWhereUniqueInput
    create: XOR<SuperAdminUserRoleCreateWithoutSuperAdminInput, SuperAdminUserRoleUncheckedCreateWithoutSuperAdminInput>
  }

  export type SuperAdminUserRoleCreateManySuperAdminInputEnvelope = {
    data: SuperAdminUserRoleCreateManySuperAdminInput | SuperAdminUserRoleCreateManySuperAdminInput[]
    skipDuplicates?: boolean
  }

  export type RoleUpsertWithWhereUniqueWithoutSuperAdminInput = {
    where: RoleWhereUniqueInput
    update: XOR<RoleUpdateWithoutSuperAdminInput, RoleUncheckedUpdateWithoutSuperAdminInput>
    create: XOR<RoleCreateWithoutSuperAdminInput, RoleUncheckedCreateWithoutSuperAdminInput>
  }

  export type RoleUpdateWithWhereUniqueWithoutSuperAdminInput = {
    where: RoleWhereUniqueInput
    data: XOR<RoleUpdateWithoutSuperAdminInput, RoleUncheckedUpdateWithoutSuperAdminInput>
  }

  export type RoleUpdateManyWithWhereWithoutSuperAdminInput = {
    where: RoleScalarWhereInput
    data: XOR<RoleUpdateManyMutationInput, RoleUncheckedUpdateManyWithoutSuperAdminInput>
  }

  export type RoleScalarWhereInput = {
    AND?: RoleScalarWhereInput | RoleScalarWhereInput[]
    OR?: RoleScalarWhereInput[]
    NOT?: RoleScalarWhereInput | RoleScalarWhereInput[]
    id?: StringFilter<"Role"> | string
    name?: StringFilter<"Role"> | string
    ownerType?: EnumRoleOwnerTypeFilter<"Role"> | $Enums.RoleOwnerType
    DiagnosticAccountId?: StringNullableFilter<"Role"> | string | null
    superAdminId?: StringNullableFilter<"Role"> | string | null
    createdAt?: DateTimeFilter<"Role"> | Date | string
    updatedAt?: DateTimeFilter<"Role"> | Date | string
  }

  export type SuperAdminUserRoleUpsertWithWhereUniqueWithoutSuperAdminInput = {
    where: SuperAdminUserRoleWhereUniqueInput
    update: XOR<SuperAdminUserRoleUpdateWithoutSuperAdminInput, SuperAdminUserRoleUncheckedUpdateWithoutSuperAdminInput>
    create: XOR<SuperAdminUserRoleCreateWithoutSuperAdminInput, SuperAdminUserRoleUncheckedCreateWithoutSuperAdminInput>
  }

  export type SuperAdminUserRoleUpdateWithWhereUniqueWithoutSuperAdminInput = {
    where: SuperAdminUserRoleWhereUniqueInput
    data: XOR<SuperAdminUserRoleUpdateWithoutSuperAdminInput, SuperAdminUserRoleUncheckedUpdateWithoutSuperAdminInput>
  }

  export type SuperAdminUserRoleUpdateManyWithWhereWithoutSuperAdminInput = {
    where: SuperAdminUserRoleScalarWhereInput
    data: XOR<SuperAdminUserRoleUpdateManyMutationInput, SuperAdminUserRoleUncheckedUpdateManyWithoutSuperAdminInput>
  }

  export type SuperAdminUserRoleScalarWhereInput = {
    AND?: SuperAdminUserRoleScalarWhereInput | SuperAdminUserRoleScalarWhereInput[]
    OR?: SuperAdminUserRoleScalarWhereInput[]
    NOT?: SuperAdminUserRoleScalarWhereInput | SuperAdminUserRoleScalarWhereInput[]
    id?: StringFilter<"SuperAdminUserRole"> | string
    superAdminId?: StringFilter<"SuperAdminUserRole"> | string
    roleId?: StringFilter<"SuperAdminUserRole"> | string
    createdAt?: DateTimeFilter<"SuperAdminUserRole"> | Date | string
  }

  export type DiagnosticAccountCreateWithoutPatientsInput = {
    id?: string
    name: string
    email: string
    phone?: string | null
    password: string
    centerName: string
    slug: string
    logo?: string | null
    address?: string | null
    isActive?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    childUsers?: DiagnosticChildUserCreateNestedManyWithoutDiagnosticAccountInput
    roles?: RoleCreateNestedManyWithoutDiagnosticAccountInput
  }

  export type DiagnosticAccountUncheckedCreateWithoutPatientsInput = {
    id?: string
    name: string
    email: string
    phone?: string | null
    password: string
    centerName: string
    slug: string
    logo?: string | null
    address?: string | null
    isActive?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    childUsers?: DiagnosticChildUserUncheckedCreateNestedManyWithoutDiagnosticAccountInput
    roles?: RoleUncheckedCreateNestedManyWithoutDiagnosticAccountInput
  }

  export type DiagnosticAccountCreateOrConnectWithoutPatientsInput = {
    where: DiagnosticAccountWhereUniqueInput
    create: XOR<DiagnosticAccountCreateWithoutPatientsInput, DiagnosticAccountUncheckedCreateWithoutPatientsInput>
  }

  export type DiagnosticAccountUpsertWithoutPatientsInput = {
    update: XOR<DiagnosticAccountUpdateWithoutPatientsInput, DiagnosticAccountUncheckedUpdateWithoutPatientsInput>
    create: XOR<DiagnosticAccountCreateWithoutPatientsInput, DiagnosticAccountUncheckedCreateWithoutPatientsInput>
    where?: DiagnosticAccountWhereInput
  }

  export type DiagnosticAccountUpdateToOneWithWhereWithoutPatientsInput = {
    where?: DiagnosticAccountWhereInput
    data: XOR<DiagnosticAccountUpdateWithoutPatientsInput, DiagnosticAccountUncheckedUpdateWithoutPatientsInput>
  }

  export type DiagnosticAccountUpdateWithoutPatientsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    password?: StringFieldUpdateOperationsInput | string
    centerName?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    logo?: NullableStringFieldUpdateOperationsInput | string | null
    address?: NullableStringFieldUpdateOperationsInput | string | null
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    childUsers?: DiagnosticChildUserUpdateManyWithoutDiagnosticAccountNestedInput
    roles?: RoleUpdateManyWithoutDiagnosticAccountNestedInput
  }

  export type DiagnosticAccountUncheckedUpdateWithoutPatientsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    password?: StringFieldUpdateOperationsInput | string
    centerName?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    logo?: NullableStringFieldUpdateOperationsInput | string | null
    address?: NullableStringFieldUpdateOperationsInput | string | null
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    childUsers?: DiagnosticChildUserUncheckedUpdateManyWithoutDiagnosticAccountNestedInput
    roles?: RoleUncheckedUpdateManyWithoutDiagnosticAccountNestedInput
  }

  export type DiagnosticChildUserCreateWithoutDiagnosticAccountInput = {
    id?: string
    name: string
    email: string
    phone?: string | null
    password: string
    isActive?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    userRoles?: DiagnosticUserRoleCreateNestedManyWithoutDiagnosticChildUserInput
  }

  export type DiagnosticChildUserUncheckedCreateWithoutDiagnosticAccountInput = {
    id?: string
    name: string
    email: string
    phone?: string | null
    password: string
    isActive?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    userRoles?: DiagnosticUserRoleUncheckedCreateNestedManyWithoutDiagnosticChildUserInput
  }

  export type DiagnosticChildUserCreateOrConnectWithoutDiagnosticAccountInput = {
    where: DiagnosticChildUserWhereUniqueInput
    create: XOR<DiagnosticChildUserCreateWithoutDiagnosticAccountInput, DiagnosticChildUserUncheckedCreateWithoutDiagnosticAccountInput>
  }

  export type DiagnosticChildUserCreateManyDiagnosticAccountInputEnvelope = {
    data: DiagnosticChildUserCreateManyDiagnosticAccountInput | DiagnosticChildUserCreateManyDiagnosticAccountInput[]
    skipDuplicates?: boolean
  }

  export type RoleCreateWithoutDiagnosticAccountInput = {
    id?: string
    name: string
    ownerType: $Enums.RoleOwnerType
    createdAt?: Date | string
    updatedAt?: Date | string
    superAdmin?: SuperAdminsCreateNestedOneWithoutRolesInput
    rolePermissions?: RolePermissionCreateNestedManyWithoutRoleInput
    diagnosticUserRoles?: DiagnosticUserRoleCreateNestedManyWithoutRoleInput
    superAdminUserRoles?: SuperAdminUserRoleCreateNestedManyWithoutRoleInput
  }

  export type RoleUncheckedCreateWithoutDiagnosticAccountInput = {
    id?: string
    name: string
    ownerType: $Enums.RoleOwnerType
    superAdminId?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    rolePermissions?: RolePermissionUncheckedCreateNestedManyWithoutRoleInput
    diagnosticUserRoles?: DiagnosticUserRoleUncheckedCreateNestedManyWithoutRoleInput
    superAdminUserRoles?: SuperAdminUserRoleUncheckedCreateNestedManyWithoutRoleInput
  }

  export type RoleCreateOrConnectWithoutDiagnosticAccountInput = {
    where: RoleWhereUniqueInput
    create: XOR<RoleCreateWithoutDiagnosticAccountInput, RoleUncheckedCreateWithoutDiagnosticAccountInput>
  }

  export type RoleCreateManyDiagnosticAccountInputEnvelope = {
    data: RoleCreateManyDiagnosticAccountInput | RoleCreateManyDiagnosticAccountInput[]
    skipDuplicates?: boolean
  }

  export type PatientCreateWithoutDiagnosticAccountInput = {
    id?: string
    fullName: string
    mobileNumber: string
    otp?: string | null
    otpExpiresAt?: Date | string | null
    email?: string | null
    dateOfBirth?: Date | string | null
    age?: number | null
    bloodGroup?: string | null
    gender?: string | null
    address?: string | null
    isActive?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type PatientUncheckedCreateWithoutDiagnosticAccountInput = {
    id?: string
    fullName: string
    mobileNumber: string
    otp?: string | null
    otpExpiresAt?: Date | string | null
    email?: string | null
    dateOfBirth?: Date | string | null
    age?: number | null
    bloodGroup?: string | null
    gender?: string | null
    address?: string | null
    isActive?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type PatientCreateOrConnectWithoutDiagnosticAccountInput = {
    where: PatientWhereUniqueInput
    create: XOR<PatientCreateWithoutDiagnosticAccountInput, PatientUncheckedCreateWithoutDiagnosticAccountInput>
  }

  export type PatientCreateManyDiagnosticAccountInputEnvelope = {
    data: PatientCreateManyDiagnosticAccountInput | PatientCreateManyDiagnosticAccountInput[]
    skipDuplicates?: boolean
  }

  export type DiagnosticChildUserUpsertWithWhereUniqueWithoutDiagnosticAccountInput = {
    where: DiagnosticChildUserWhereUniqueInput
    update: XOR<DiagnosticChildUserUpdateWithoutDiagnosticAccountInput, DiagnosticChildUserUncheckedUpdateWithoutDiagnosticAccountInput>
    create: XOR<DiagnosticChildUserCreateWithoutDiagnosticAccountInput, DiagnosticChildUserUncheckedCreateWithoutDiagnosticAccountInput>
  }

  export type DiagnosticChildUserUpdateWithWhereUniqueWithoutDiagnosticAccountInput = {
    where: DiagnosticChildUserWhereUniqueInput
    data: XOR<DiagnosticChildUserUpdateWithoutDiagnosticAccountInput, DiagnosticChildUserUncheckedUpdateWithoutDiagnosticAccountInput>
  }

  export type DiagnosticChildUserUpdateManyWithWhereWithoutDiagnosticAccountInput = {
    where: DiagnosticChildUserScalarWhereInput
    data: XOR<DiagnosticChildUserUpdateManyMutationInput, DiagnosticChildUserUncheckedUpdateManyWithoutDiagnosticAccountInput>
  }

  export type DiagnosticChildUserScalarWhereInput = {
    AND?: DiagnosticChildUserScalarWhereInput | DiagnosticChildUserScalarWhereInput[]
    OR?: DiagnosticChildUserScalarWhereInput[]
    NOT?: DiagnosticChildUserScalarWhereInput | DiagnosticChildUserScalarWhereInput[]
    id?: StringFilter<"DiagnosticChildUser"> | string
    DiagnosticAccountId?: StringFilter<"DiagnosticChildUser"> | string
    name?: StringFilter<"DiagnosticChildUser"> | string
    email?: StringFilter<"DiagnosticChildUser"> | string
    phone?: StringNullableFilter<"DiagnosticChildUser"> | string | null
    password?: StringFilter<"DiagnosticChildUser"> | string
    isActive?: BoolFilter<"DiagnosticChildUser"> | boolean
    createdAt?: DateTimeFilter<"DiagnosticChildUser"> | Date | string
    updatedAt?: DateTimeFilter<"DiagnosticChildUser"> | Date | string
  }

  export type RoleUpsertWithWhereUniqueWithoutDiagnosticAccountInput = {
    where: RoleWhereUniqueInput
    update: XOR<RoleUpdateWithoutDiagnosticAccountInput, RoleUncheckedUpdateWithoutDiagnosticAccountInput>
    create: XOR<RoleCreateWithoutDiagnosticAccountInput, RoleUncheckedCreateWithoutDiagnosticAccountInput>
  }

  export type RoleUpdateWithWhereUniqueWithoutDiagnosticAccountInput = {
    where: RoleWhereUniqueInput
    data: XOR<RoleUpdateWithoutDiagnosticAccountInput, RoleUncheckedUpdateWithoutDiagnosticAccountInput>
  }

  export type RoleUpdateManyWithWhereWithoutDiagnosticAccountInput = {
    where: RoleScalarWhereInput
    data: XOR<RoleUpdateManyMutationInput, RoleUncheckedUpdateManyWithoutDiagnosticAccountInput>
  }

  export type PatientUpsertWithWhereUniqueWithoutDiagnosticAccountInput = {
    where: PatientWhereUniqueInput
    update: XOR<PatientUpdateWithoutDiagnosticAccountInput, PatientUncheckedUpdateWithoutDiagnosticAccountInput>
    create: XOR<PatientCreateWithoutDiagnosticAccountInput, PatientUncheckedCreateWithoutDiagnosticAccountInput>
  }

  export type PatientUpdateWithWhereUniqueWithoutDiagnosticAccountInput = {
    where: PatientWhereUniqueInput
    data: XOR<PatientUpdateWithoutDiagnosticAccountInput, PatientUncheckedUpdateWithoutDiagnosticAccountInput>
  }

  export type PatientUpdateManyWithWhereWithoutDiagnosticAccountInput = {
    where: PatientScalarWhereInput
    data: XOR<PatientUpdateManyMutationInput, PatientUncheckedUpdateManyWithoutDiagnosticAccountInput>
  }

  export type PatientScalarWhereInput = {
    AND?: PatientScalarWhereInput | PatientScalarWhereInput[]
    OR?: PatientScalarWhereInput[]
    NOT?: PatientScalarWhereInput | PatientScalarWhereInput[]
    id?: StringFilter<"Patient"> | string
    fullName?: StringFilter<"Patient"> | string
    mobileNumber?: StringFilter<"Patient"> | string
    otp?: StringNullableFilter<"Patient"> | string | null
    otpExpiresAt?: DateTimeNullableFilter<"Patient"> | Date | string | null
    email?: StringNullableFilter<"Patient"> | string | null
    dateOfBirth?: DateTimeNullableFilter<"Patient"> | Date | string | null
    age?: IntNullableFilter<"Patient"> | number | null
    bloodGroup?: StringNullableFilter<"Patient"> | string | null
    gender?: StringNullableFilter<"Patient"> | string | null
    address?: StringNullableFilter<"Patient"> | string | null
    diagnosticAccountId?: StringNullableFilter<"Patient"> | string | null
    isActive?: BoolFilter<"Patient"> | boolean
    createdAt?: DateTimeFilter<"Patient"> | Date | string
    updatedAt?: DateTimeFilter<"Patient"> | Date | string
  }

  export type DiagnosticAccountCreateWithoutChildUsersInput = {
    id?: string
    name: string
    email: string
    phone?: string | null
    password: string
    centerName: string
    slug: string
    logo?: string | null
    address?: string | null
    isActive?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    roles?: RoleCreateNestedManyWithoutDiagnosticAccountInput
    patients?: PatientCreateNestedManyWithoutDiagnosticAccountInput
  }

  export type DiagnosticAccountUncheckedCreateWithoutChildUsersInput = {
    id?: string
    name: string
    email: string
    phone?: string | null
    password: string
    centerName: string
    slug: string
    logo?: string | null
    address?: string | null
    isActive?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    roles?: RoleUncheckedCreateNestedManyWithoutDiagnosticAccountInput
    patients?: PatientUncheckedCreateNestedManyWithoutDiagnosticAccountInput
  }

  export type DiagnosticAccountCreateOrConnectWithoutChildUsersInput = {
    where: DiagnosticAccountWhereUniqueInput
    create: XOR<DiagnosticAccountCreateWithoutChildUsersInput, DiagnosticAccountUncheckedCreateWithoutChildUsersInput>
  }

  export type DiagnosticUserRoleCreateWithoutDiagnosticChildUserInput = {
    id?: string
    createdAt?: Date | string
    role: RoleCreateNestedOneWithoutDiagnosticUserRolesInput
  }

  export type DiagnosticUserRoleUncheckedCreateWithoutDiagnosticChildUserInput = {
    id?: string
    roleId: string
    createdAt?: Date | string
  }

  export type DiagnosticUserRoleCreateOrConnectWithoutDiagnosticChildUserInput = {
    where: DiagnosticUserRoleWhereUniqueInput
    create: XOR<DiagnosticUserRoleCreateWithoutDiagnosticChildUserInput, DiagnosticUserRoleUncheckedCreateWithoutDiagnosticChildUserInput>
  }

  export type DiagnosticUserRoleCreateManyDiagnosticChildUserInputEnvelope = {
    data: DiagnosticUserRoleCreateManyDiagnosticChildUserInput | DiagnosticUserRoleCreateManyDiagnosticChildUserInput[]
    skipDuplicates?: boolean
  }

  export type DiagnosticAccountUpsertWithoutChildUsersInput = {
    update: XOR<DiagnosticAccountUpdateWithoutChildUsersInput, DiagnosticAccountUncheckedUpdateWithoutChildUsersInput>
    create: XOR<DiagnosticAccountCreateWithoutChildUsersInput, DiagnosticAccountUncheckedCreateWithoutChildUsersInput>
    where?: DiagnosticAccountWhereInput
  }

  export type DiagnosticAccountUpdateToOneWithWhereWithoutChildUsersInput = {
    where?: DiagnosticAccountWhereInput
    data: XOR<DiagnosticAccountUpdateWithoutChildUsersInput, DiagnosticAccountUncheckedUpdateWithoutChildUsersInput>
  }

  export type DiagnosticAccountUpdateWithoutChildUsersInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    password?: StringFieldUpdateOperationsInput | string
    centerName?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    logo?: NullableStringFieldUpdateOperationsInput | string | null
    address?: NullableStringFieldUpdateOperationsInput | string | null
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    roles?: RoleUpdateManyWithoutDiagnosticAccountNestedInput
    patients?: PatientUpdateManyWithoutDiagnosticAccountNestedInput
  }

  export type DiagnosticAccountUncheckedUpdateWithoutChildUsersInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    password?: StringFieldUpdateOperationsInput | string
    centerName?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    logo?: NullableStringFieldUpdateOperationsInput | string | null
    address?: NullableStringFieldUpdateOperationsInput | string | null
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    roles?: RoleUncheckedUpdateManyWithoutDiagnosticAccountNestedInput
    patients?: PatientUncheckedUpdateManyWithoutDiagnosticAccountNestedInput
  }

  export type DiagnosticUserRoleUpsertWithWhereUniqueWithoutDiagnosticChildUserInput = {
    where: DiagnosticUserRoleWhereUniqueInput
    update: XOR<DiagnosticUserRoleUpdateWithoutDiagnosticChildUserInput, DiagnosticUserRoleUncheckedUpdateWithoutDiagnosticChildUserInput>
    create: XOR<DiagnosticUserRoleCreateWithoutDiagnosticChildUserInput, DiagnosticUserRoleUncheckedCreateWithoutDiagnosticChildUserInput>
  }

  export type DiagnosticUserRoleUpdateWithWhereUniqueWithoutDiagnosticChildUserInput = {
    where: DiagnosticUserRoleWhereUniqueInput
    data: XOR<DiagnosticUserRoleUpdateWithoutDiagnosticChildUserInput, DiagnosticUserRoleUncheckedUpdateWithoutDiagnosticChildUserInput>
  }

  export type DiagnosticUserRoleUpdateManyWithWhereWithoutDiagnosticChildUserInput = {
    where: DiagnosticUserRoleScalarWhereInput
    data: XOR<DiagnosticUserRoleUpdateManyMutationInput, DiagnosticUserRoleUncheckedUpdateManyWithoutDiagnosticChildUserInput>
  }

  export type DiagnosticUserRoleScalarWhereInput = {
    AND?: DiagnosticUserRoleScalarWhereInput | DiagnosticUserRoleScalarWhereInput[]
    OR?: DiagnosticUserRoleScalarWhereInput[]
    NOT?: DiagnosticUserRoleScalarWhereInput | DiagnosticUserRoleScalarWhereInput[]
    id?: StringFilter<"DiagnosticUserRole"> | string
    DiagnosticChildUserId?: StringFilter<"DiagnosticUserRole"> | string
    roleId?: StringFilter<"DiagnosticUserRole"> | string
    createdAt?: DateTimeFilter<"DiagnosticUserRole"> | Date | string
  }

  export type DiagnosticAccountCreateWithoutRolesInput = {
    id?: string
    name: string
    email: string
    phone?: string | null
    password: string
    centerName: string
    slug: string
    logo?: string | null
    address?: string | null
    isActive?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    childUsers?: DiagnosticChildUserCreateNestedManyWithoutDiagnosticAccountInput
    patients?: PatientCreateNestedManyWithoutDiagnosticAccountInput
  }

  export type DiagnosticAccountUncheckedCreateWithoutRolesInput = {
    id?: string
    name: string
    email: string
    phone?: string | null
    password: string
    centerName: string
    slug: string
    logo?: string | null
    address?: string | null
    isActive?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    childUsers?: DiagnosticChildUserUncheckedCreateNestedManyWithoutDiagnosticAccountInput
    patients?: PatientUncheckedCreateNestedManyWithoutDiagnosticAccountInput
  }

  export type DiagnosticAccountCreateOrConnectWithoutRolesInput = {
    where: DiagnosticAccountWhereUniqueInput
    create: XOR<DiagnosticAccountCreateWithoutRolesInput, DiagnosticAccountUncheckedCreateWithoutRolesInput>
  }

  export type SuperAdminsCreateWithoutRolesInput = {
    id?: string
    name: string
    email: string
    phone?: string | null
    password: string
    isActive?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    userRoles?: SuperAdminUserRoleCreateNestedManyWithoutSuperAdminInput
  }

  export type SuperAdminsUncheckedCreateWithoutRolesInput = {
    id?: string
    name: string
    email: string
    phone?: string | null
    password: string
    isActive?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    userRoles?: SuperAdminUserRoleUncheckedCreateNestedManyWithoutSuperAdminInput
  }

  export type SuperAdminsCreateOrConnectWithoutRolesInput = {
    where: SuperAdminsWhereUniqueInput
    create: XOR<SuperAdminsCreateWithoutRolesInput, SuperAdminsUncheckedCreateWithoutRolesInput>
  }

  export type RolePermissionCreateWithoutRoleInput = {
    id?: string
    permission: PermissionCreateNestedOneWithoutRolePermissionsInput
  }

  export type RolePermissionUncheckedCreateWithoutRoleInput = {
    id?: string
    permissionId: string
  }

  export type RolePermissionCreateOrConnectWithoutRoleInput = {
    where: RolePermissionWhereUniqueInput
    create: XOR<RolePermissionCreateWithoutRoleInput, RolePermissionUncheckedCreateWithoutRoleInput>
  }

  export type RolePermissionCreateManyRoleInputEnvelope = {
    data: RolePermissionCreateManyRoleInput | RolePermissionCreateManyRoleInput[]
    skipDuplicates?: boolean
  }

  export type DiagnosticUserRoleCreateWithoutRoleInput = {
    id?: string
    createdAt?: Date | string
    DiagnosticChildUser: DiagnosticChildUserCreateNestedOneWithoutUserRolesInput
  }

  export type DiagnosticUserRoleUncheckedCreateWithoutRoleInput = {
    id?: string
    DiagnosticChildUserId: string
    createdAt?: Date | string
  }

  export type DiagnosticUserRoleCreateOrConnectWithoutRoleInput = {
    where: DiagnosticUserRoleWhereUniqueInput
    create: XOR<DiagnosticUserRoleCreateWithoutRoleInput, DiagnosticUserRoleUncheckedCreateWithoutRoleInput>
  }

  export type DiagnosticUserRoleCreateManyRoleInputEnvelope = {
    data: DiagnosticUserRoleCreateManyRoleInput | DiagnosticUserRoleCreateManyRoleInput[]
    skipDuplicates?: boolean
  }

  export type SuperAdminUserRoleCreateWithoutRoleInput = {
    id?: string
    createdAt?: Date | string
    superAdmin: SuperAdminsCreateNestedOneWithoutUserRolesInput
  }

  export type SuperAdminUserRoleUncheckedCreateWithoutRoleInput = {
    id?: string
    superAdminId: string
    createdAt?: Date | string
  }

  export type SuperAdminUserRoleCreateOrConnectWithoutRoleInput = {
    where: SuperAdminUserRoleWhereUniqueInput
    create: XOR<SuperAdminUserRoleCreateWithoutRoleInput, SuperAdminUserRoleUncheckedCreateWithoutRoleInput>
  }

  export type SuperAdminUserRoleCreateManyRoleInputEnvelope = {
    data: SuperAdminUserRoleCreateManyRoleInput | SuperAdminUserRoleCreateManyRoleInput[]
    skipDuplicates?: boolean
  }

  export type DiagnosticAccountUpsertWithoutRolesInput = {
    update: XOR<DiagnosticAccountUpdateWithoutRolesInput, DiagnosticAccountUncheckedUpdateWithoutRolesInput>
    create: XOR<DiagnosticAccountCreateWithoutRolesInput, DiagnosticAccountUncheckedCreateWithoutRolesInput>
    where?: DiagnosticAccountWhereInput
  }

  export type DiagnosticAccountUpdateToOneWithWhereWithoutRolesInput = {
    where?: DiagnosticAccountWhereInput
    data: XOR<DiagnosticAccountUpdateWithoutRolesInput, DiagnosticAccountUncheckedUpdateWithoutRolesInput>
  }

  export type DiagnosticAccountUpdateWithoutRolesInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    password?: StringFieldUpdateOperationsInput | string
    centerName?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    logo?: NullableStringFieldUpdateOperationsInput | string | null
    address?: NullableStringFieldUpdateOperationsInput | string | null
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    childUsers?: DiagnosticChildUserUpdateManyWithoutDiagnosticAccountNestedInput
    patients?: PatientUpdateManyWithoutDiagnosticAccountNestedInput
  }

  export type DiagnosticAccountUncheckedUpdateWithoutRolesInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    password?: StringFieldUpdateOperationsInput | string
    centerName?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    logo?: NullableStringFieldUpdateOperationsInput | string | null
    address?: NullableStringFieldUpdateOperationsInput | string | null
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    childUsers?: DiagnosticChildUserUncheckedUpdateManyWithoutDiagnosticAccountNestedInput
    patients?: PatientUncheckedUpdateManyWithoutDiagnosticAccountNestedInput
  }

  export type SuperAdminsUpsertWithoutRolesInput = {
    update: XOR<SuperAdminsUpdateWithoutRolesInput, SuperAdminsUncheckedUpdateWithoutRolesInput>
    create: XOR<SuperAdminsCreateWithoutRolesInput, SuperAdminsUncheckedCreateWithoutRolesInput>
    where?: SuperAdminsWhereInput
  }

  export type SuperAdminsUpdateToOneWithWhereWithoutRolesInput = {
    where?: SuperAdminsWhereInput
    data: XOR<SuperAdminsUpdateWithoutRolesInput, SuperAdminsUncheckedUpdateWithoutRolesInput>
  }

  export type SuperAdminsUpdateWithoutRolesInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    password?: StringFieldUpdateOperationsInput | string
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    userRoles?: SuperAdminUserRoleUpdateManyWithoutSuperAdminNestedInput
  }

  export type SuperAdminsUncheckedUpdateWithoutRolesInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    password?: StringFieldUpdateOperationsInput | string
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    userRoles?: SuperAdminUserRoleUncheckedUpdateManyWithoutSuperAdminNestedInput
  }

  export type RolePermissionUpsertWithWhereUniqueWithoutRoleInput = {
    where: RolePermissionWhereUniqueInput
    update: XOR<RolePermissionUpdateWithoutRoleInput, RolePermissionUncheckedUpdateWithoutRoleInput>
    create: XOR<RolePermissionCreateWithoutRoleInput, RolePermissionUncheckedCreateWithoutRoleInput>
  }

  export type RolePermissionUpdateWithWhereUniqueWithoutRoleInput = {
    where: RolePermissionWhereUniqueInput
    data: XOR<RolePermissionUpdateWithoutRoleInput, RolePermissionUncheckedUpdateWithoutRoleInput>
  }

  export type RolePermissionUpdateManyWithWhereWithoutRoleInput = {
    where: RolePermissionScalarWhereInput
    data: XOR<RolePermissionUpdateManyMutationInput, RolePermissionUncheckedUpdateManyWithoutRoleInput>
  }

  export type RolePermissionScalarWhereInput = {
    AND?: RolePermissionScalarWhereInput | RolePermissionScalarWhereInput[]
    OR?: RolePermissionScalarWhereInput[]
    NOT?: RolePermissionScalarWhereInput | RolePermissionScalarWhereInput[]
    id?: StringFilter<"RolePermission"> | string
    roleId?: StringFilter<"RolePermission"> | string
    permissionId?: StringFilter<"RolePermission"> | string
  }

  export type DiagnosticUserRoleUpsertWithWhereUniqueWithoutRoleInput = {
    where: DiagnosticUserRoleWhereUniqueInput
    update: XOR<DiagnosticUserRoleUpdateWithoutRoleInput, DiagnosticUserRoleUncheckedUpdateWithoutRoleInput>
    create: XOR<DiagnosticUserRoleCreateWithoutRoleInput, DiagnosticUserRoleUncheckedCreateWithoutRoleInput>
  }

  export type DiagnosticUserRoleUpdateWithWhereUniqueWithoutRoleInput = {
    where: DiagnosticUserRoleWhereUniqueInput
    data: XOR<DiagnosticUserRoleUpdateWithoutRoleInput, DiagnosticUserRoleUncheckedUpdateWithoutRoleInput>
  }

  export type DiagnosticUserRoleUpdateManyWithWhereWithoutRoleInput = {
    where: DiagnosticUserRoleScalarWhereInput
    data: XOR<DiagnosticUserRoleUpdateManyMutationInput, DiagnosticUserRoleUncheckedUpdateManyWithoutRoleInput>
  }

  export type SuperAdminUserRoleUpsertWithWhereUniqueWithoutRoleInput = {
    where: SuperAdminUserRoleWhereUniqueInput
    update: XOR<SuperAdminUserRoleUpdateWithoutRoleInput, SuperAdminUserRoleUncheckedUpdateWithoutRoleInput>
    create: XOR<SuperAdminUserRoleCreateWithoutRoleInput, SuperAdminUserRoleUncheckedCreateWithoutRoleInput>
  }

  export type SuperAdminUserRoleUpdateWithWhereUniqueWithoutRoleInput = {
    where: SuperAdminUserRoleWhereUniqueInput
    data: XOR<SuperAdminUserRoleUpdateWithoutRoleInput, SuperAdminUserRoleUncheckedUpdateWithoutRoleInput>
  }

  export type SuperAdminUserRoleUpdateManyWithWhereWithoutRoleInput = {
    where: SuperAdminUserRoleScalarWhereInput
    data: XOR<SuperAdminUserRoleUpdateManyMutationInput, SuperAdminUserRoleUncheckedUpdateManyWithoutRoleInput>
  }

  export type RolePermissionCreateWithoutPermissionInput = {
    id?: string
    role: RoleCreateNestedOneWithoutRolePermissionsInput
  }

  export type RolePermissionUncheckedCreateWithoutPermissionInput = {
    id?: string
    roleId: string
  }

  export type RolePermissionCreateOrConnectWithoutPermissionInput = {
    where: RolePermissionWhereUniqueInput
    create: XOR<RolePermissionCreateWithoutPermissionInput, RolePermissionUncheckedCreateWithoutPermissionInput>
  }

  export type RolePermissionCreateManyPermissionInputEnvelope = {
    data: RolePermissionCreateManyPermissionInput | RolePermissionCreateManyPermissionInput[]
    skipDuplicates?: boolean
  }

  export type RolePermissionUpsertWithWhereUniqueWithoutPermissionInput = {
    where: RolePermissionWhereUniqueInput
    update: XOR<RolePermissionUpdateWithoutPermissionInput, RolePermissionUncheckedUpdateWithoutPermissionInput>
    create: XOR<RolePermissionCreateWithoutPermissionInput, RolePermissionUncheckedCreateWithoutPermissionInput>
  }

  export type RolePermissionUpdateWithWhereUniqueWithoutPermissionInput = {
    where: RolePermissionWhereUniqueInput
    data: XOR<RolePermissionUpdateWithoutPermissionInput, RolePermissionUncheckedUpdateWithoutPermissionInput>
  }

  export type RolePermissionUpdateManyWithWhereWithoutPermissionInput = {
    where: RolePermissionScalarWhereInput
    data: XOR<RolePermissionUpdateManyMutationInput, RolePermissionUncheckedUpdateManyWithoutPermissionInput>
  }

  export type RoleCreateWithoutRolePermissionsInput = {
    id?: string
    name: string
    ownerType: $Enums.RoleOwnerType
    createdAt?: Date | string
    updatedAt?: Date | string
    DiagnosticAccount?: DiagnosticAccountCreateNestedOneWithoutRolesInput
    superAdmin?: SuperAdminsCreateNestedOneWithoutRolesInput
    diagnosticUserRoles?: DiagnosticUserRoleCreateNestedManyWithoutRoleInput
    superAdminUserRoles?: SuperAdminUserRoleCreateNestedManyWithoutRoleInput
  }

  export type RoleUncheckedCreateWithoutRolePermissionsInput = {
    id?: string
    name: string
    ownerType: $Enums.RoleOwnerType
    DiagnosticAccountId?: string | null
    superAdminId?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    diagnosticUserRoles?: DiagnosticUserRoleUncheckedCreateNestedManyWithoutRoleInput
    superAdminUserRoles?: SuperAdminUserRoleUncheckedCreateNestedManyWithoutRoleInput
  }

  export type RoleCreateOrConnectWithoutRolePermissionsInput = {
    where: RoleWhereUniqueInput
    create: XOR<RoleCreateWithoutRolePermissionsInput, RoleUncheckedCreateWithoutRolePermissionsInput>
  }

  export type PermissionCreateWithoutRolePermissionsInput = {
    id?: string
    key: string
    module: string
    description?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type PermissionUncheckedCreateWithoutRolePermissionsInput = {
    id?: string
    key: string
    module: string
    description?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type PermissionCreateOrConnectWithoutRolePermissionsInput = {
    where: PermissionWhereUniqueInput
    create: XOR<PermissionCreateWithoutRolePermissionsInput, PermissionUncheckedCreateWithoutRolePermissionsInput>
  }

  export type RoleUpsertWithoutRolePermissionsInput = {
    update: XOR<RoleUpdateWithoutRolePermissionsInput, RoleUncheckedUpdateWithoutRolePermissionsInput>
    create: XOR<RoleCreateWithoutRolePermissionsInput, RoleUncheckedCreateWithoutRolePermissionsInput>
    where?: RoleWhereInput
  }

  export type RoleUpdateToOneWithWhereWithoutRolePermissionsInput = {
    where?: RoleWhereInput
    data: XOR<RoleUpdateWithoutRolePermissionsInput, RoleUncheckedUpdateWithoutRolePermissionsInput>
  }

  export type RoleUpdateWithoutRolePermissionsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    ownerType?: EnumRoleOwnerTypeFieldUpdateOperationsInput | $Enums.RoleOwnerType
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    DiagnosticAccount?: DiagnosticAccountUpdateOneWithoutRolesNestedInput
    superAdmin?: SuperAdminsUpdateOneWithoutRolesNestedInput
    diagnosticUserRoles?: DiagnosticUserRoleUpdateManyWithoutRoleNestedInput
    superAdminUserRoles?: SuperAdminUserRoleUpdateManyWithoutRoleNestedInput
  }

  export type RoleUncheckedUpdateWithoutRolePermissionsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    ownerType?: EnumRoleOwnerTypeFieldUpdateOperationsInput | $Enums.RoleOwnerType
    DiagnosticAccountId?: NullableStringFieldUpdateOperationsInput | string | null
    superAdminId?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    diagnosticUserRoles?: DiagnosticUserRoleUncheckedUpdateManyWithoutRoleNestedInput
    superAdminUserRoles?: SuperAdminUserRoleUncheckedUpdateManyWithoutRoleNestedInput
  }

  export type PermissionUpsertWithoutRolePermissionsInput = {
    update: XOR<PermissionUpdateWithoutRolePermissionsInput, PermissionUncheckedUpdateWithoutRolePermissionsInput>
    create: XOR<PermissionCreateWithoutRolePermissionsInput, PermissionUncheckedCreateWithoutRolePermissionsInput>
    where?: PermissionWhereInput
  }

  export type PermissionUpdateToOneWithWhereWithoutRolePermissionsInput = {
    where?: PermissionWhereInput
    data: XOR<PermissionUpdateWithoutRolePermissionsInput, PermissionUncheckedUpdateWithoutRolePermissionsInput>
  }

  export type PermissionUpdateWithoutRolePermissionsInput = {
    id?: StringFieldUpdateOperationsInput | string
    key?: StringFieldUpdateOperationsInput | string
    module?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PermissionUncheckedUpdateWithoutRolePermissionsInput = {
    id?: StringFieldUpdateOperationsInput | string
    key?: StringFieldUpdateOperationsInput | string
    module?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type DiagnosticChildUserCreateWithoutUserRolesInput = {
    id?: string
    name: string
    email: string
    phone?: string | null
    password: string
    isActive?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    DiagnosticAccount: DiagnosticAccountCreateNestedOneWithoutChildUsersInput
  }

  export type DiagnosticChildUserUncheckedCreateWithoutUserRolesInput = {
    id?: string
    DiagnosticAccountId: string
    name: string
    email: string
    phone?: string | null
    password: string
    isActive?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type DiagnosticChildUserCreateOrConnectWithoutUserRolesInput = {
    where: DiagnosticChildUserWhereUniqueInput
    create: XOR<DiagnosticChildUserCreateWithoutUserRolesInput, DiagnosticChildUserUncheckedCreateWithoutUserRolesInput>
  }

  export type RoleCreateWithoutDiagnosticUserRolesInput = {
    id?: string
    name: string
    ownerType: $Enums.RoleOwnerType
    createdAt?: Date | string
    updatedAt?: Date | string
    DiagnosticAccount?: DiagnosticAccountCreateNestedOneWithoutRolesInput
    superAdmin?: SuperAdminsCreateNestedOneWithoutRolesInput
    rolePermissions?: RolePermissionCreateNestedManyWithoutRoleInput
    superAdminUserRoles?: SuperAdminUserRoleCreateNestedManyWithoutRoleInput
  }

  export type RoleUncheckedCreateWithoutDiagnosticUserRolesInput = {
    id?: string
    name: string
    ownerType: $Enums.RoleOwnerType
    DiagnosticAccountId?: string | null
    superAdminId?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    rolePermissions?: RolePermissionUncheckedCreateNestedManyWithoutRoleInput
    superAdminUserRoles?: SuperAdminUserRoleUncheckedCreateNestedManyWithoutRoleInput
  }

  export type RoleCreateOrConnectWithoutDiagnosticUserRolesInput = {
    where: RoleWhereUniqueInput
    create: XOR<RoleCreateWithoutDiagnosticUserRolesInput, RoleUncheckedCreateWithoutDiagnosticUserRolesInput>
  }

  export type DiagnosticChildUserUpsertWithoutUserRolesInput = {
    update: XOR<DiagnosticChildUserUpdateWithoutUserRolesInput, DiagnosticChildUserUncheckedUpdateWithoutUserRolesInput>
    create: XOR<DiagnosticChildUserCreateWithoutUserRolesInput, DiagnosticChildUserUncheckedCreateWithoutUserRolesInput>
    where?: DiagnosticChildUserWhereInput
  }

  export type DiagnosticChildUserUpdateToOneWithWhereWithoutUserRolesInput = {
    where?: DiagnosticChildUserWhereInput
    data: XOR<DiagnosticChildUserUpdateWithoutUserRolesInput, DiagnosticChildUserUncheckedUpdateWithoutUserRolesInput>
  }

  export type DiagnosticChildUserUpdateWithoutUserRolesInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    password?: StringFieldUpdateOperationsInput | string
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    DiagnosticAccount?: DiagnosticAccountUpdateOneRequiredWithoutChildUsersNestedInput
  }

  export type DiagnosticChildUserUncheckedUpdateWithoutUserRolesInput = {
    id?: StringFieldUpdateOperationsInput | string
    DiagnosticAccountId?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    password?: StringFieldUpdateOperationsInput | string
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type RoleUpsertWithoutDiagnosticUserRolesInput = {
    update: XOR<RoleUpdateWithoutDiagnosticUserRolesInput, RoleUncheckedUpdateWithoutDiagnosticUserRolesInput>
    create: XOR<RoleCreateWithoutDiagnosticUserRolesInput, RoleUncheckedCreateWithoutDiagnosticUserRolesInput>
    where?: RoleWhereInput
  }

  export type RoleUpdateToOneWithWhereWithoutDiagnosticUserRolesInput = {
    where?: RoleWhereInput
    data: XOR<RoleUpdateWithoutDiagnosticUserRolesInput, RoleUncheckedUpdateWithoutDiagnosticUserRolesInput>
  }

  export type RoleUpdateWithoutDiagnosticUserRolesInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    ownerType?: EnumRoleOwnerTypeFieldUpdateOperationsInput | $Enums.RoleOwnerType
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    DiagnosticAccount?: DiagnosticAccountUpdateOneWithoutRolesNestedInput
    superAdmin?: SuperAdminsUpdateOneWithoutRolesNestedInput
    rolePermissions?: RolePermissionUpdateManyWithoutRoleNestedInput
    superAdminUserRoles?: SuperAdminUserRoleUpdateManyWithoutRoleNestedInput
  }

  export type RoleUncheckedUpdateWithoutDiagnosticUserRolesInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    ownerType?: EnumRoleOwnerTypeFieldUpdateOperationsInput | $Enums.RoleOwnerType
    DiagnosticAccountId?: NullableStringFieldUpdateOperationsInput | string | null
    superAdminId?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    rolePermissions?: RolePermissionUncheckedUpdateManyWithoutRoleNestedInput
    superAdminUserRoles?: SuperAdminUserRoleUncheckedUpdateManyWithoutRoleNestedInput
  }

  export type SuperAdminsCreateWithoutUserRolesInput = {
    id?: string
    name: string
    email: string
    phone?: string | null
    password: string
    isActive?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    roles?: RoleCreateNestedManyWithoutSuperAdminInput
  }

  export type SuperAdminsUncheckedCreateWithoutUserRolesInput = {
    id?: string
    name: string
    email: string
    phone?: string | null
    password: string
    isActive?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    roles?: RoleUncheckedCreateNestedManyWithoutSuperAdminInput
  }

  export type SuperAdminsCreateOrConnectWithoutUserRolesInput = {
    where: SuperAdminsWhereUniqueInput
    create: XOR<SuperAdminsCreateWithoutUserRolesInput, SuperAdminsUncheckedCreateWithoutUserRolesInput>
  }

  export type RoleCreateWithoutSuperAdminUserRolesInput = {
    id?: string
    name: string
    ownerType: $Enums.RoleOwnerType
    createdAt?: Date | string
    updatedAt?: Date | string
    DiagnosticAccount?: DiagnosticAccountCreateNestedOneWithoutRolesInput
    superAdmin?: SuperAdminsCreateNestedOneWithoutRolesInput
    rolePermissions?: RolePermissionCreateNestedManyWithoutRoleInput
    diagnosticUserRoles?: DiagnosticUserRoleCreateNestedManyWithoutRoleInput
  }

  export type RoleUncheckedCreateWithoutSuperAdminUserRolesInput = {
    id?: string
    name: string
    ownerType: $Enums.RoleOwnerType
    DiagnosticAccountId?: string | null
    superAdminId?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    rolePermissions?: RolePermissionUncheckedCreateNestedManyWithoutRoleInput
    diagnosticUserRoles?: DiagnosticUserRoleUncheckedCreateNestedManyWithoutRoleInput
  }

  export type RoleCreateOrConnectWithoutSuperAdminUserRolesInput = {
    where: RoleWhereUniqueInput
    create: XOR<RoleCreateWithoutSuperAdminUserRolesInput, RoleUncheckedCreateWithoutSuperAdminUserRolesInput>
  }

  export type SuperAdminsUpsertWithoutUserRolesInput = {
    update: XOR<SuperAdminsUpdateWithoutUserRolesInput, SuperAdminsUncheckedUpdateWithoutUserRolesInput>
    create: XOR<SuperAdminsCreateWithoutUserRolesInput, SuperAdminsUncheckedCreateWithoutUserRolesInput>
    where?: SuperAdminsWhereInput
  }

  export type SuperAdminsUpdateToOneWithWhereWithoutUserRolesInput = {
    where?: SuperAdminsWhereInput
    data: XOR<SuperAdminsUpdateWithoutUserRolesInput, SuperAdminsUncheckedUpdateWithoutUserRolesInput>
  }

  export type SuperAdminsUpdateWithoutUserRolesInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    password?: StringFieldUpdateOperationsInput | string
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    roles?: RoleUpdateManyWithoutSuperAdminNestedInput
  }

  export type SuperAdminsUncheckedUpdateWithoutUserRolesInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    password?: StringFieldUpdateOperationsInput | string
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    roles?: RoleUncheckedUpdateManyWithoutSuperAdminNestedInput
  }

  export type RoleUpsertWithoutSuperAdminUserRolesInput = {
    update: XOR<RoleUpdateWithoutSuperAdminUserRolesInput, RoleUncheckedUpdateWithoutSuperAdminUserRolesInput>
    create: XOR<RoleCreateWithoutSuperAdminUserRolesInput, RoleUncheckedCreateWithoutSuperAdminUserRolesInput>
    where?: RoleWhereInput
  }

  export type RoleUpdateToOneWithWhereWithoutSuperAdminUserRolesInput = {
    where?: RoleWhereInput
    data: XOR<RoleUpdateWithoutSuperAdminUserRolesInput, RoleUncheckedUpdateWithoutSuperAdminUserRolesInput>
  }

  export type RoleUpdateWithoutSuperAdminUserRolesInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    ownerType?: EnumRoleOwnerTypeFieldUpdateOperationsInput | $Enums.RoleOwnerType
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    DiagnosticAccount?: DiagnosticAccountUpdateOneWithoutRolesNestedInput
    superAdmin?: SuperAdminsUpdateOneWithoutRolesNestedInput
    rolePermissions?: RolePermissionUpdateManyWithoutRoleNestedInput
    diagnosticUserRoles?: DiagnosticUserRoleUpdateManyWithoutRoleNestedInput
  }

  export type RoleUncheckedUpdateWithoutSuperAdminUserRolesInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    ownerType?: EnumRoleOwnerTypeFieldUpdateOperationsInput | $Enums.RoleOwnerType
    DiagnosticAccountId?: NullableStringFieldUpdateOperationsInput | string | null
    superAdminId?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    rolePermissions?: RolePermissionUncheckedUpdateManyWithoutRoleNestedInput
    diagnosticUserRoles?: DiagnosticUserRoleUncheckedUpdateManyWithoutRoleNestedInput
  }

  export type RoleCreateManySuperAdminInput = {
    id?: string
    name: string
    ownerType: $Enums.RoleOwnerType
    DiagnosticAccountId?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type SuperAdminUserRoleCreateManySuperAdminInput = {
    id?: string
    roleId: string
    createdAt?: Date | string
  }

  export type RoleUpdateWithoutSuperAdminInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    ownerType?: EnumRoleOwnerTypeFieldUpdateOperationsInput | $Enums.RoleOwnerType
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    DiagnosticAccount?: DiagnosticAccountUpdateOneWithoutRolesNestedInput
    rolePermissions?: RolePermissionUpdateManyWithoutRoleNestedInput
    diagnosticUserRoles?: DiagnosticUserRoleUpdateManyWithoutRoleNestedInput
    superAdminUserRoles?: SuperAdminUserRoleUpdateManyWithoutRoleNestedInput
  }

  export type RoleUncheckedUpdateWithoutSuperAdminInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    ownerType?: EnumRoleOwnerTypeFieldUpdateOperationsInput | $Enums.RoleOwnerType
    DiagnosticAccountId?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    rolePermissions?: RolePermissionUncheckedUpdateManyWithoutRoleNestedInput
    diagnosticUserRoles?: DiagnosticUserRoleUncheckedUpdateManyWithoutRoleNestedInput
    superAdminUserRoles?: SuperAdminUserRoleUncheckedUpdateManyWithoutRoleNestedInput
  }

  export type RoleUncheckedUpdateManyWithoutSuperAdminInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    ownerType?: EnumRoleOwnerTypeFieldUpdateOperationsInput | $Enums.RoleOwnerType
    DiagnosticAccountId?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SuperAdminUserRoleUpdateWithoutSuperAdminInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    role?: RoleUpdateOneRequiredWithoutSuperAdminUserRolesNestedInput
  }

  export type SuperAdminUserRoleUncheckedUpdateWithoutSuperAdminInput = {
    id?: StringFieldUpdateOperationsInput | string
    roleId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SuperAdminUserRoleUncheckedUpdateManyWithoutSuperAdminInput = {
    id?: StringFieldUpdateOperationsInput | string
    roleId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type DiagnosticChildUserCreateManyDiagnosticAccountInput = {
    id?: string
    name: string
    email: string
    phone?: string | null
    password: string
    isActive?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type RoleCreateManyDiagnosticAccountInput = {
    id?: string
    name: string
    ownerType: $Enums.RoleOwnerType
    superAdminId?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type PatientCreateManyDiagnosticAccountInput = {
    id?: string
    fullName: string
    mobileNumber: string
    otp?: string | null
    otpExpiresAt?: Date | string | null
    email?: string | null
    dateOfBirth?: Date | string | null
    age?: number | null
    bloodGroup?: string | null
    gender?: string | null
    address?: string | null
    isActive?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type DiagnosticChildUserUpdateWithoutDiagnosticAccountInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    password?: StringFieldUpdateOperationsInput | string
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    userRoles?: DiagnosticUserRoleUpdateManyWithoutDiagnosticChildUserNestedInput
  }

  export type DiagnosticChildUserUncheckedUpdateWithoutDiagnosticAccountInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    password?: StringFieldUpdateOperationsInput | string
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    userRoles?: DiagnosticUserRoleUncheckedUpdateManyWithoutDiagnosticChildUserNestedInput
  }

  export type DiagnosticChildUserUncheckedUpdateManyWithoutDiagnosticAccountInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    password?: StringFieldUpdateOperationsInput | string
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type RoleUpdateWithoutDiagnosticAccountInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    ownerType?: EnumRoleOwnerTypeFieldUpdateOperationsInput | $Enums.RoleOwnerType
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    superAdmin?: SuperAdminsUpdateOneWithoutRolesNestedInput
    rolePermissions?: RolePermissionUpdateManyWithoutRoleNestedInput
    diagnosticUserRoles?: DiagnosticUserRoleUpdateManyWithoutRoleNestedInput
    superAdminUserRoles?: SuperAdminUserRoleUpdateManyWithoutRoleNestedInput
  }

  export type RoleUncheckedUpdateWithoutDiagnosticAccountInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    ownerType?: EnumRoleOwnerTypeFieldUpdateOperationsInput | $Enums.RoleOwnerType
    superAdminId?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    rolePermissions?: RolePermissionUncheckedUpdateManyWithoutRoleNestedInput
    diagnosticUserRoles?: DiagnosticUserRoleUncheckedUpdateManyWithoutRoleNestedInput
    superAdminUserRoles?: SuperAdminUserRoleUncheckedUpdateManyWithoutRoleNestedInput
  }

  export type RoleUncheckedUpdateManyWithoutDiagnosticAccountInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    ownerType?: EnumRoleOwnerTypeFieldUpdateOperationsInput | $Enums.RoleOwnerType
    superAdminId?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PatientUpdateWithoutDiagnosticAccountInput = {
    id?: StringFieldUpdateOperationsInput | string
    fullName?: StringFieldUpdateOperationsInput | string
    mobileNumber?: StringFieldUpdateOperationsInput | string
    otp?: NullableStringFieldUpdateOperationsInput | string | null
    otpExpiresAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    email?: NullableStringFieldUpdateOperationsInput | string | null
    dateOfBirth?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    age?: NullableIntFieldUpdateOperationsInput | number | null
    bloodGroup?: NullableStringFieldUpdateOperationsInput | string | null
    gender?: NullableStringFieldUpdateOperationsInput | string | null
    address?: NullableStringFieldUpdateOperationsInput | string | null
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PatientUncheckedUpdateWithoutDiagnosticAccountInput = {
    id?: StringFieldUpdateOperationsInput | string
    fullName?: StringFieldUpdateOperationsInput | string
    mobileNumber?: StringFieldUpdateOperationsInput | string
    otp?: NullableStringFieldUpdateOperationsInput | string | null
    otpExpiresAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    email?: NullableStringFieldUpdateOperationsInput | string | null
    dateOfBirth?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    age?: NullableIntFieldUpdateOperationsInput | number | null
    bloodGroup?: NullableStringFieldUpdateOperationsInput | string | null
    gender?: NullableStringFieldUpdateOperationsInput | string | null
    address?: NullableStringFieldUpdateOperationsInput | string | null
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PatientUncheckedUpdateManyWithoutDiagnosticAccountInput = {
    id?: StringFieldUpdateOperationsInput | string
    fullName?: StringFieldUpdateOperationsInput | string
    mobileNumber?: StringFieldUpdateOperationsInput | string
    otp?: NullableStringFieldUpdateOperationsInput | string | null
    otpExpiresAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    email?: NullableStringFieldUpdateOperationsInput | string | null
    dateOfBirth?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    age?: NullableIntFieldUpdateOperationsInput | number | null
    bloodGroup?: NullableStringFieldUpdateOperationsInput | string | null
    gender?: NullableStringFieldUpdateOperationsInput | string | null
    address?: NullableStringFieldUpdateOperationsInput | string | null
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type DiagnosticUserRoleCreateManyDiagnosticChildUserInput = {
    id?: string
    roleId: string
    createdAt?: Date | string
  }

  export type DiagnosticUserRoleUpdateWithoutDiagnosticChildUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    role?: RoleUpdateOneRequiredWithoutDiagnosticUserRolesNestedInput
  }

  export type DiagnosticUserRoleUncheckedUpdateWithoutDiagnosticChildUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    roleId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type DiagnosticUserRoleUncheckedUpdateManyWithoutDiagnosticChildUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    roleId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type RolePermissionCreateManyRoleInput = {
    id?: string
    permissionId: string
  }

  export type DiagnosticUserRoleCreateManyRoleInput = {
    id?: string
    DiagnosticChildUserId: string
    createdAt?: Date | string
  }

  export type SuperAdminUserRoleCreateManyRoleInput = {
    id?: string
    superAdminId: string
    createdAt?: Date | string
  }

  export type RolePermissionUpdateWithoutRoleInput = {
    id?: StringFieldUpdateOperationsInput | string
    permission?: PermissionUpdateOneRequiredWithoutRolePermissionsNestedInput
  }

  export type RolePermissionUncheckedUpdateWithoutRoleInput = {
    id?: StringFieldUpdateOperationsInput | string
    permissionId?: StringFieldUpdateOperationsInput | string
  }

  export type RolePermissionUncheckedUpdateManyWithoutRoleInput = {
    id?: StringFieldUpdateOperationsInput | string
    permissionId?: StringFieldUpdateOperationsInput | string
  }

  export type DiagnosticUserRoleUpdateWithoutRoleInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    DiagnosticChildUser?: DiagnosticChildUserUpdateOneRequiredWithoutUserRolesNestedInput
  }

  export type DiagnosticUserRoleUncheckedUpdateWithoutRoleInput = {
    id?: StringFieldUpdateOperationsInput | string
    DiagnosticChildUserId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type DiagnosticUserRoleUncheckedUpdateManyWithoutRoleInput = {
    id?: StringFieldUpdateOperationsInput | string
    DiagnosticChildUserId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SuperAdminUserRoleUpdateWithoutRoleInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    superAdmin?: SuperAdminsUpdateOneRequiredWithoutUserRolesNestedInput
  }

  export type SuperAdminUserRoleUncheckedUpdateWithoutRoleInput = {
    id?: StringFieldUpdateOperationsInput | string
    superAdminId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SuperAdminUserRoleUncheckedUpdateManyWithoutRoleInput = {
    id?: StringFieldUpdateOperationsInput | string
    superAdminId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type RolePermissionCreateManyPermissionInput = {
    id?: string
    roleId: string
  }

  export type RolePermissionUpdateWithoutPermissionInput = {
    id?: StringFieldUpdateOperationsInput | string
    role?: RoleUpdateOneRequiredWithoutRolePermissionsNestedInput
  }

  export type RolePermissionUncheckedUpdateWithoutPermissionInput = {
    id?: StringFieldUpdateOperationsInput | string
    roleId?: StringFieldUpdateOperationsInput | string
  }

  export type RolePermissionUncheckedUpdateManyWithoutPermissionInput = {
    id?: StringFieldUpdateOperationsInput | string
    roleId?: StringFieldUpdateOperationsInput | string
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