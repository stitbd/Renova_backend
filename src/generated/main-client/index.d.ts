
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
 * Model DoctorSpecialization
 * 
 */
export type DoctorSpecialization = $Result.DefaultSelection<Prisma.$DoctorSpecializationPayload>
/**
 * Model DoctorDocument
 * 
 */
export type DoctorDocument = $Result.DefaultSelection<Prisma.$DoctorDocumentPayload>
/**
 * Model DoctorSchedule
 * 
 */
export type DoctorSchedule = $Result.DefaultSelection<Prisma.$DoctorSchedulePayload>
/**
 * Model outlet
 * 
 */
export type outlet = $Result.DefaultSelection<Prisma.$outletPayload>
/**
 * Model OutletChildUser
 * 
 */
export type OutletChildUser = $Result.DefaultSelection<Prisma.$OutletChildUserPayload>
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
 * Model OutletUserRole
 * 
 */
export type OutletUserRole = $Result.DefaultSelection<Prisma.$OutletUserRolePayload>
/**
 * Model SuperAdminUserRole
 * 
 */
export type SuperAdminUserRole = $Result.DefaultSelection<Prisma.$SuperAdminUserRolePayload>

/**
 * Enums
 */
export namespace $Enums {
  export const PatientStatus: {
  ACTIVE: 'ACTIVE',
  INACTIVE: 'INACTIVE'
};

export type PatientStatus = (typeof PatientStatus)[keyof typeof PatientStatus]


export const DoctorStatus: {
  ACTIVE: 'ACTIVE',
  INACTIVE: 'INACTIVE'
};

export type DoctorStatus = (typeof DoctorStatus)[keyof typeof DoctorStatus]


export const DoctorOnlineStatus: {
  ONLINE: 'ONLINE',
  OFFLINE: 'OFFLINE'
};

export type DoctorOnlineStatus = (typeof DoctorOnlineStatus)[keyof typeof DoctorOnlineStatus]


export const DocumentType: {
  LICENSE: 'LICENSE',
  CERTIFICATE: 'CERTIFICATE',
  DEGREE: 'DEGREE',
  NID: 'NID',
  OTHER: 'OTHER'
};

export type DocumentType = (typeof DocumentType)[keyof typeof DocumentType]


export const VerificationStatus: {
  PENDING: 'PENDING',
  VERIFIED: 'VERIFIED',
  REJECTED: 'REJECTED'
};

export type VerificationStatus = (typeof VerificationStatus)[keyof typeof VerificationStatus]


export const ScheduleStatus: {
  ACTIVE: 'ACTIVE',
  INACTIVE: 'INACTIVE'
};

export type ScheduleStatus = (typeof ScheduleStatus)[keyof typeof ScheduleStatus]


export const RoleOwnerType: {
  OUTLET: 'OUTLET',
  SUPER_ADMIN: 'SUPER_ADMIN'
};

export type RoleOwnerType = (typeof RoleOwnerType)[keyof typeof RoleOwnerType]

}

export type PatientStatus = $Enums.PatientStatus

export const PatientStatus: typeof $Enums.PatientStatus

export type DoctorStatus = $Enums.DoctorStatus

export const DoctorStatus: typeof $Enums.DoctorStatus

export type DoctorOnlineStatus = $Enums.DoctorOnlineStatus

export const DoctorOnlineStatus: typeof $Enums.DoctorOnlineStatus

export type DocumentType = $Enums.DocumentType

export const DocumentType: typeof $Enums.DocumentType

export type VerificationStatus = $Enums.VerificationStatus

export const VerificationStatus: typeof $Enums.VerificationStatus

export type ScheduleStatus = $Enums.ScheduleStatus

export const ScheduleStatus: typeof $Enums.ScheduleStatus

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
   * `prisma.doctorSpecialization`: Exposes CRUD operations for the **DoctorSpecialization** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more DoctorSpecializations
    * const doctorSpecializations = await prisma.doctorSpecialization.findMany()
    * ```
    */
  get doctorSpecialization(): Prisma.DoctorSpecializationDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.doctorDocument`: Exposes CRUD operations for the **DoctorDocument** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more DoctorDocuments
    * const doctorDocuments = await prisma.doctorDocument.findMany()
    * ```
    */
  get doctorDocument(): Prisma.DoctorDocumentDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.doctorSchedule`: Exposes CRUD operations for the **DoctorSchedule** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more DoctorSchedules
    * const doctorSchedules = await prisma.doctorSchedule.findMany()
    * ```
    */
  get doctorSchedule(): Prisma.DoctorScheduleDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.outlet`: Exposes CRUD operations for the **outlet** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Outlets
    * const outlets = await prisma.outlet.findMany()
    * ```
    */
  get outlet(): Prisma.outletDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.outletChildUser`: Exposes CRUD operations for the **OutletChildUser** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more OutletChildUsers
    * const outletChildUsers = await prisma.outletChildUser.findMany()
    * ```
    */
  get outletChildUser(): Prisma.OutletChildUserDelegate<ExtArgs, ClientOptions>;

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
   * `prisma.outletUserRole`: Exposes CRUD operations for the **OutletUserRole** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more OutletUserRoles
    * const outletUserRoles = await prisma.outletUserRole.findMany()
    * ```
    */
  get outletUserRole(): Prisma.OutletUserRoleDelegate<ExtArgs, ClientOptions>;

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
    DoctorSpecialization: 'DoctorSpecialization',
    DoctorDocument: 'DoctorDocument',
    DoctorSchedule: 'DoctorSchedule',
    outlet: 'outlet',
    OutletChildUser: 'OutletChildUser',
    Role: 'Role',
    Permission: 'Permission',
    RolePermission: 'RolePermission',
    OutletUserRole: 'OutletUserRole',
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
      modelProps: "superAdmins" | "patient" | "doctor" | "doctorSpecialization" | "doctorDocument" | "doctorSchedule" | "outlet" | "outletChildUser" | "role" | "permission" | "rolePermission" | "outletUserRole" | "superAdminUserRole"
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
      DoctorSpecialization: {
        payload: Prisma.$DoctorSpecializationPayload<ExtArgs>
        fields: Prisma.DoctorSpecializationFieldRefs
        operations: {
          findUnique: {
            args: Prisma.DoctorSpecializationFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DoctorSpecializationPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.DoctorSpecializationFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DoctorSpecializationPayload>
          }
          findFirst: {
            args: Prisma.DoctorSpecializationFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DoctorSpecializationPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.DoctorSpecializationFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DoctorSpecializationPayload>
          }
          findMany: {
            args: Prisma.DoctorSpecializationFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DoctorSpecializationPayload>[]
          }
          create: {
            args: Prisma.DoctorSpecializationCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DoctorSpecializationPayload>
          }
          createMany: {
            args: Prisma.DoctorSpecializationCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.DoctorSpecializationDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DoctorSpecializationPayload>
          }
          update: {
            args: Prisma.DoctorSpecializationUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DoctorSpecializationPayload>
          }
          deleteMany: {
            args: Prisma.DoctorSpecializationDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.DoctorSpecializationUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.DoctorSpecializationUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DoctorSpecializationPayload>
          }
          aggregate: {
            args: Prisma.DoctorSpecializationAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateDoctorSpecialization>
          }
          groupBy: {
            args: Prisma.DoctorSpecializationGroupByArgs<ExtArgs>
            result: $Utils.Optional<DoctorSpecializationGroupByOutputType>[]
          }
          count: {
            args: Prisma.DoctorSpecializationCountArgs<ExtArgs>
            result: $Utils.Optional<DoctorSpecializationCountAggregateOutputType> | number
          }
        }
      }
      DoctorDocument: {
        payload: Prisma.$DoctorDocumentPayload<ExtArgs>
        fields: Prisma.DoctorDocumentFieldRefs
        operations: {
          findUnique: {
            args: Prisma.DoctorDocumentFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DoctorDocumentPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.DoctorDocumentFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DoctorDocumentPayload>
          }
          findFirst: {
            args: Prisma.DoctorDocumentFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DoctorDocumentPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.DoctorDocumentFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DoctorDocumentPayload>
          }
          findMany: {
            args: Prisma.DoctorDocumentFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DoctorDocumentPayload>[]
          }
          create: {
            args: Prisma.DoctorDocumentCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DoctorDocumentPayload>
          }
          createMany: {
            args: Prisma.DoctorDocumentCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.DoctorDocumentDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DoctorDocumentPayload>
          }
          update: {
            args: Prisma.DoctorDocumentUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DoctorDocumentPayload>
          }
          deleteMany: {
            args: Prisma.DoctorDocumentDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.DoctorDocumentUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.DoctorDocumentUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DoctorDocumentPayload>
          }
          aggregate: {
            args: Prisma.DoctorDocumentAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateDoctorDocument>
          }
          groupBy: {
            args: Prisma.DoctorDocumentGroupByArgs<ExtArgs>
            result: $Utils.Optional<DoctorDocumentGroupByOutputType>[]
          }
          count: {
            args: Prisma.DoctorDocumentCountArgs<ExtArgs>
            result: $Utils.Optional<DoctorDocumentCountAggregateOutputType> | number
          }
        }
      }
      DoctorSchedule: {
        payload: Prisma.$DoctorSchedulePayload<ExtArgs>
        fields: Prisma.DoctorScheduleFieldRefs
        operations: {
          findUnique: {
            args: Prisma.DoctorScheduleFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DoctorSchedulePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.DoctorScheduleFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DoctorSchedulePayload>
          }
          findFirst: {
            args: Prisma.DoctorScheduleFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DoctorSchedulePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.DoctorScheduleFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DoctorSchedulePayload>
          }
          findMany: {
            args: Prisma.DoctorScheduleFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DoctorSchedulePayload>[]
          }
          create: {
            args: Prisma.DoctorScheduleCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DoctorSchedulePayload>
          }
          createMany: {
            args: Prisma.DoctorScheduleCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.DoctorScheduleDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DoctorSchedulePayload>
          }
          update: {
            args: Prisma.DoctorScheduleUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DoctorSchedulePayload>
          }
          deleteMany: {
            args: Prisma.DoctorScheduleDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.DoctorScheduleUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.DoctorScheduleUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DoctorSchedulePayload>
          }
          aggregate: {
            args: Prisma.DoctorScheduleAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateDoctorSchedule>
          }
          groupBy: {
            args: Prisma.DoctorScheduleGroupByArgs<ExtArgs>
            result: $Utils.Optional<DoctorScheduleGroupByOutputType>[]
          }
          count: {
            args: Prisma.DoctorScheduleCountArgs<ExtArgs>
            result: $Utils.Optional<DoctorScheduleCountAggregateOutputType> | number
          }
        }
      }
      outlet: {
        payload: Prisma.$outletPayload<ExtArgs>
        fields: Prisma.outletFieldRefs
        operations: {
          findUnique: {
            args: Prisma.outletFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$outletPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.outletFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$outletPayload>
          }
          findFirst: {
            args: Prisma.outletFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$outletPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.outletFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$outletPayload>
          }
          findMany: {
            args: Prisma.outletFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$outletPayload>[]
          }
          create: {
            args: Prisma.outletCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$outletPayload>
          }
          createMany: {
            args: Prisma.outletCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.outletDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$outletPayload>
          }
          update: {
            args: Prisma.outletUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$outletPayload>
          }
          deleteMany: {
            args: Prisma.outletDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.outletUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.outletUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$outletPayload>
          }
          aggregate: {
            args: Prisma.OutletAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateOutlet>
          }
          groupBy: {
            args: Prisma.outletGroupByArgs<ExtArgs>
            result: $Utils.Optional<OutletGroupByOutputType>[]
          }
          count: {
            args: Prisma.outletCountArgs<ExtArgs>
            result: $Utils.Optional<OutletCountAggregateOutputType> | number
          }
        }
      }
      OutletChildUser: {
        payload: Prisma.$OutletChildUserPayload<ExtArgs>
        fields: Prisma.OutletChildUserFieldRefs
        operations: {
          findUnique: {
            args: Prisma.OutletChildUserFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OutletChildUserPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.OutletChildUserFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OutletChildUserPayload>
          }
          findFirst: {
            args: Prisma.OutletChildUserFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OutletChildUserPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.OutletChildUserFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OutletChildUserPayload>
          }
          findMany: {
            args: Prisma.OutletChildUserFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OutletChildUserPayload>[]
          }
          create: {
            args: Prisma.OutletChildUserCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OutletChildUserPayload>
          }
          createMany: {
            args: Prisma.OutletChildUserCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.OutletChildUserDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OutletChildUserPayload>
          }
          update: {
            args: Prisma.OutletChildUserUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OutletChildUserPayload>
          }
          deleteMany: {
            args: Prisma.OutletChildUserDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.OutletChildUserUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.OutletChildUserUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OutletChildUserPayload>
          }
          aggregate: {
            args: Prisma.OutletChildUserAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateOutletChildUser>
          }
          groupBy: {
            args: Prisma.OutletChildUserGroupByArgs<ExtArgs>
            result: $Utils.Optional<OutletChildUserGroupByOutputType>[]
          }
          count: {
            args: Prisma.OutletChildUserCountArgs<ExtArgs>
            result: $Utils.Optional<OutletChildUserCountAggregateOutputType> | number
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
      OutletUserRole: {
        payload: Prisma.$OutletUserRolePayload<ExtArgs>
        fields: Prisma.OutletUserRoleFieldRefs
        operations: {
          findUnique: {
            args: Prisma.OutletUserRoleFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OutletUserRolePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.OutletUserRoleFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OutletUserRolePayload>
          }
          findFirst: {
            args: Prisma.OutletUserRoleFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OutletUserRolePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.OutletUserRoleFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OutletUserRolePayload>
          }
          findMany: {
            args: Prisma.OutletUserRoleFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OutletUserRolePayload>[]
          }
          create: {
            args: Prisma.OutletUserRoleCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OutletUserRolePayload>
          }
          createMany: {
            args: Prisma.OutletUserRoleCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.OutletUserRoleDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OutletUserRolePayload>
          }
          update: {
            args: Prisma.OutletUserRoleUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OutletUserRolePayload>
          }
          deleteMany: {
            args: Prisma.OutletUserRoleDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.OutletUserRoleUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.OutletUserRoleUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OutletUserRolePayload>
          }
          aggregate: {
            args: Prisma.OutletUserRoleAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateOutletUserRole>
          }
          groupBy: {
            args: Prisma.OutletUserRoleGroupByArgs<ExtArgs>
            result: $Utils.Optional<OutletUserRoleGroupByOutputType>[]
          }
          count: {
            args: Prisma.OutletUserRoleCountArgs<ExtArgs>
            result: $Utils.Optional<OutletUserRoleCountAggregateOutputType> | number
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
    doctorSpecialization?: DoctorSpecializationOmit
    doctorDocument?: DoctorDocumentOmit
    doctorSchedule?: DoctorScheduleOmit
    outlet?: outletOmit
    outletChildUser?: OutletChildUserOmit
    role?: RoleOmit
    permission?: PermissionOmit
    rolePermission?: RolePermissionOmit
    outletUserRole?: OutletUserRoleOmit
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
   * Count Type DoctorCountOutputType
   */

  export type DoctorCountOutputType = {
    documents: number
    schedules: number
  }

  export type DoctorCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    documents?: boolean | DoctorCountOutputTypeCountDocumentsArgs
    schedules?: boolean | DoctorCountOutputTypeCountSchedulesArgs
  }

  // Custom InputTypes
  /**
   * DoctorCountOutputType without action
   */
  export type DoctorCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DoctorCountOutputType
     */
    select?: DoctorCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * DoctorCountOutputType without action
   */
  export type DoctorCountOutputTypeCountDocumentsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: DoctorDocumentWhereInput
  }

  /**
   * DoctorCountOutputType without action
   */
  export type DoctorCountOutputTypeCountSchedulesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: DoctorScheduleWhereInput
  }


  /**
   * Count Type DoctorSpecializationCountOutputType
   */

  export type DoctorSpecializationCountOutputType = {
    doctors: number
  }

  export type DoctorSpecializationCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    doctors?: boolean | DoctorSpecializationCountOutputTypeCountDoctorsArgs
  }

  // Custom InputTypes
  /**
   * DoctorSpecializationCountOutputType without action
   */
  export type DoctorSpecializationCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DoctorSpecializationCountOutputType
     */
    select?: DoctorSpecializationCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * DoctorSpecializationCountOutputType without action
   */
  export type DoctorSpecializationCountOutputTypeCountDoctorsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: DoctorWhereInput
  }


  /**
   * Count Type OutletCountOutputType
   */

  export type OutletCountOutputType = {
    childUsers: number
    roles: number
    patients: number
    doctors: number
  }

  export type OutletCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    childUsers?: boolean | OutletCountOutputTypeCountChildUsersArgs
    roles?: boolean | OutletCountOutputTypeCountRolesArgs
    patients?: boolean | OutletCountOutputTypeCountPatientsArgs
    doctors?: boolean | OutletCountOutputTypeCountDoctorsArgs
  }

  // Custom InputTypes
  /**
   * OutletCountOutputType without action
   */
  export type OutletCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OutletCountOutputType
     */
    select?: OutletCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * OutletCountOutputType without action
   */
  export type OutletCountOutputTypeCountChildUsersArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: OutletChildUserWhereInput
  }

  /**
   * OutletCountOutputType without action
   */
  export type OutletCountOutputTypeCountRolesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: RoleWhereInput
  }

  /**
   * OutletCountOutputType without action
   */
  export type OutletCountOutputTypeCountPatientsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: PatientWhereInput
  }

  /**
   * OutletCountOutputType without action
   */
  export type OutletCountOutputTypeCountDoctorsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: DoctorWhereInput
  }


  /**
   * Count Type OutletChildUserCountOutputType
   */

  export type OutletChildUserCountOutputType = {
    userRoles: number
  }

  export type OutletChildUserCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    userRoles?: boolean | OutletChildUserCountOutputTypeCountUserRolesArgs
  }

  // Custom InputTypes
  /**
   * OutletChildUserCountOutputType without action
   */
  export type OutletChildUserCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OutletChildUserCountOutputType
     */
    select?: OutletChildUserCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * OutletChildUserCountOutputType without action
   */
  export type OutletChildUserCountOutputTypeCountUserRolesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: OutletUserRoleWhereInput
  }


  /**
   * Count Type RoleCountOutputType
   */

  export type RoleCountOutputType = {
    rolePermissions: number
    OutletUserRoles: number
    superAdminUserRoles: number
  }

  export type RoleCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    rolePermissions?: boolean | RoleCountOutputTypeCountRolePermissionsArgs
    OutletUserRoles?: boolean | RoleCountOutputTypeCountOutletUserRolesArgs
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
  export type RoleCountOutputTypeCountOutletUserRolesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: OutletUserRoleWhereInput
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
    referenceName: string | null
    fullName: string | null
    mobileNumber: string | null
    email: string | null
    password: string | null
    dateOfBirth: Date | null
    age: number | null
    bloodGroup: string | null
    gender: string | null
    address: string | null
    emergencyContact: string | null
    status: $Enums.PatientStatus | null
    otp: string | null
    otpExpiresAt: Date | null
    outletId: string | null
    isActive: boolean | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type PatientMaxAggregateOutputType = {
    id: string | null
    referenceName: string | null
    fullName: string | null
    mobileNumber: string | null
    email: string | null
    password: string | null
    dateOfBirth: Date | null
    age: number | null
    bloodGroup: string | null
    gender: string | null
    address: string | null
    emergencyContact: string | null
    status: $Enums.PatientStatus | null
    otp: string | null
    otpExpiresAt: Date | null
    outletId: string | null
    isActive: boolean | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type PatientCountAggregateOutputType = {
    id: number
    referenceName: number
    fullName: number
    mobileNumber: number
    email: number
    password: number
    dateOfBirth: number
    age: number
    bloodGroup: number
    gender: number
    address: number
    emergencyContact: number
    status: number
    otp: number
    otpExpiresAt: number
    outletId: number
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
    referenceName?: true
    fullName?: true
    mobileNumber?: true
    email?: true
    password?: true
    dateOfBirth?: true
    age?: true
    bloodGroup?: true
    gender?: true
    address?: true
    emergencyContact?: true
    status?: true
    otp?: true
    otpExpiresAt?: true
    outletId?: true
    isActive?: true
    createdAt?: true
    updatedAt?: true
  }

  export type PatientMaxAggregateInputType = {
    id?: true
    referenceName?: true
    fullName?: true
    mobileNumber?: true
    email?: true
    password?: true
    dateOfBirth?: true
    age?: true
    bloodGroup?: true
    gender?: true
    address?: true
    emergencyContact?: true
    status?: true
    otp?: true
    otpExpiresAt?: true
    outletId?: true
    isActive?: true
    createdAt?: true
    updatedAt?: true
  }

  export type PatientCountAggregateInputType = {
    id?: true
    referenceName?: true
    fullName?: true
    mobileNumber?: true
    email?: true
    password?: true
    dateOfBirth?: true
    age?: true
    bloodGroup?: true
    gender?: true
    address?: true
    emergencyContact?: true
    status?: true
    otp?: true
    otpExpiresAt?: true
    outletId?: true
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
    referenceName: string | null
    fullName: string
    mobileNumber: string
    email: string | null
    password: string
    dateOfBirth: Date | null
    age: number | null
    bloodGroup: string | null
    gender: string | null
    address: string | null
    emergencyContact: string | null
    status: $Enums.PatientStatus
    otp: string | null
    otpExpiresAt: Date | null
    outletId: string | null
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
    referenceName?: boolean
    fullName?: boolean
    mobileNumber?: boolean
    email?: boolean
    password?: boolean
    dateOfBirth?: boolean
    age?: boolean
    bloodGroup?: boolean
    gender?: boolean
    address?: boolean
    emergencyContact?: boolean
    status?: boolean
    otp?: boolean
    otpExpiresAt?: boolean
    outletId?: boolean
    isActive?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    outlet?: boolean | Patient$outletArgs<ExtArgs>
  }, ExtArgs["result"]["patient"]>



  export type PatientSelectScalar = {
    id?: boolean
    referenceName?: boolean
    fullName?: boolean
    mobileNumber?: boolean
    email?: boolean
    password?: boolean
    dateOfBirth?: boolean
    age?: boolean
    bloodGroup?: boolean
    gender?: boolean
    address?: boolean
    emergencyContact?: boolean
    status?: boolean
    otp?: boolean
    otpExpiresAt?: boolean
    outletId?: boolean
    isActive?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type PatientOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "referenceName" | "fullName" | "mobileNumber" | "email" | "password" | "dateOfBirth" | "age" | "bloodGroup" | "gender" | "address" | "emergencyContact" | "status" | "otp" | "otpExpiresAt" | "outletId" | "isActive" | "createdAt" | "updatedAt", ExtArgs["result"]["patient"]>
  export type PatientInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    outlet?: boolean | Patient$outletArgs<ExtArgs>
  }

  export type $PatientPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Patient"
    objects: {
      outlet: Prisma.$outletPayload<ExtArgs> | null
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      referenceName: string | null
      fullName: string
      mobileNumber: string
      email: string | null
      password: string
      dateOfBirth: Date | null
      age: number | null
      bloodGroup: string | null
      gender: string | null
      address: string | null
      emergencyContact: string | null
      status: $Enums.PatientStatus
      otp: string | null
      otpExpiresAt: Date | null
      outletId: string | null
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
    outlet<T extends Patient$outletArgs<ExtArgs> = {}>(args?: Subset<T, Patient$outletArgs<ExtArgs>>): Prisma__outletClient<$Result.GetResult<Prisma.$outletPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
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
    readonly referenceName: FieldRef<"Patient", 'String'>
    readonly fullName: FieldRef<"Patient", 'String'>
    readonly mobileNumber: FieldRef<"Patient", 'String'>
    readonly email: FieldRef<"Patient", 'String'>
    readonly password: FieldRef<"Patient", 'String'>
    readonly dateOfBirth: FieldRef<"Patient", 'DateTime'>
    readonly age: FieldRef<"Patient", 'Int'>
    readonly bloodGroup: FieldRef<"Patient", 'String'>
    readonly gender: FieldRef<"Patient", 'String'>
    readonly address: FieldRef<"Patient", 'String'>
    readonly emergencyContact: FieldRef<"Patient", 'String'>
    readonly status: FieldRef<"Patient", 'PatientStatus'>
    readonly otp: FieldRef<"Patient", 'String'>
    readonly otpExpiresAt: FieldRef<"Patient", 'DateTime'>
    readonly outletId: FieldRef<"Patient", 'String'>
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
   * Patient.outlet
   */
  export type Patient$outletArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the outlet
     */
    select?: outletSelect<ExtArgs> | null
    /**
     * Omit specific fields from the outlet
     */
    omit?: outletOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: outletInclude<ExtArgs> | null
    where?: outletWhereInput
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
    experienceYears: number | null
    consultationFee: Decimal | null
  }

  export type DoctorSumAggregateOutputType = {
    experienceYears: number | null
    consultationFee: Decimal | null
  }

  export type DoctorMinAggregateOutputType = {
    id: string | null
    doctorCode: string | null
    fullName: string | null
    mobile: string | null
    email: string | null
    password: string | null
    bmdcNumber: string | null
    subSpecialization: string | null
    qualification: string | null
    experienceYears: number | null
    currentDesignation: string | null
    consultationFee: Decimal | null
    status: $Enums.DoctorStatus | null
    onlineStatus: $Enums.DoctorOnlineStatus | null
    outletId: string | null
    specializationId: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type DoctorMaxAggregateOutputType = {
    id: string | null
    doctorCode: string | null
    fullName: string | null
    mobile: string | null
    email: string | null
    password: string | null
    bmdcNumber: string | null
    subSpecialization: string | null
    qualification: string | null
    experienceYears: number | null
    currentDesignation: string | null
    consultationFee: Decimal | null
    status: $Enums.DoctorStatus | null
    onlineStatus: $Enums.DoctorOnlineStatus | null
    outletId: string | null
    specializationId: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type DoctorCountAggregateOutputType = {
    id: number
    doctorCode: number
    fullName: number
    mobile: number
    email: number
    password: number
    bmdcNumber: number
    subSpecialization: number
    qualification: number
    experienceYears: number
    currentDesignation: number
    consultationFee: number
    status: number
    onlineStatus: number
    outletId: number
    specializationId: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type DoctorAvgAggregateInputType = {
    experienceYears?: true
    consultationFee?: true
  }

  export type DoctorSumAggregateInputType = {
    experienceYears?: true
    consultationFee?: true
  }

  export type DoctorMinAggregateInputType = {
    id?: true
    doctorCode?: true
    fullName?: true
    mobile?: true
    email?: true
    password?: true
    bmdcNumber?: true
    subSpecialization?: true
    qualification?: true
    experienceYears?: true
    currentDesignation?: true
    consultationFee?: true
    status?: true
    onlineStatus?: true
    outletId?: true
    specializationId?: true
    createdAt?: true
    updatedAt?: true
  }

  export type DoctorMaxAggregateInputType = {
    id?: true
    doctorCode?: true
    fullName?: true
    mobile?: true
    email?: true
    password?: true
    bmdcNumber?: true
    subSpecialization?: true
    qualification?: true
    experienceYears?: true
    currentDesignation?: true
    consultationFee?: true
    status?: true
    onlineStatus?: true
    outletId?: true
    specializationId?: true
    createdAt?: true
    updatedAt?: true
  }

  export type DoctorCountAggregateInputType = {
    id?: true
    doctorCode?: true
    fullName?: true
    mobile?: true
    email?: true
    password?: true
    bmdcNumber?: true
    subSpecialization?: true
    qualification?: true
    experienceYears?: true
    currentDesignation?: true
    consultationFee?: true
    status?: true
    onlineStatus?: true
    outletId?: true
    specializationId?: true
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
    doctorCode: string | null
    fullName: string
    mobile: string | null
    email: string
    password: string
    bmdcNumber: string | null
    subSpecialization: string | null
    qualification: string | null
    experienceYears: number | null
    currentDesignation: string | null
    consultationFee: Decimal | null
    status: $Enums.DoctorStatus
    onlineStatus: $Enums.DoctorOnlineStatus
    outletId: string | null
    specializationId: string
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
    doctorCode?: boolean
    fullName?: boolean
    mobile?: boolean
    email?: boolean
    password?: boolean
    bmdcNumber?: boolean
    subSpecialization?: boolean
    qualification?: boolean
    experienceYears?: boolean
    currentDesignation?: boolean
    consultationFee?: boolean
    status?: boolean
    onlineStatus?: boolean
    outletId?: boolean
    specializationId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    outlet?: boolean | Doctor$outletArgs<ExtArgs>
    specialization?: boolean | DoctorSpecializationDefaultArgs<ExtArgs>
    documents?: boolean | Doctor$documentsArgs<ExtArgs>
    schedules?: boolean | Doctor$schedulesArgs<ExtArgs>
    _count?: boolean | DoctorCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["doctor"]>



  export type DoctorSelectScalar = {
    id?: boolean
    doctorCode?: boolean
    fullName?: boolean
    mobile?: boolean
    email?: boolean
    password?: boolean
    bmdcNumber?: boolean
    subSpecialization?: boolean
    qualification?: boolean
    experienceYears?: boolean
    currentDesignation?: boolean
    consultationFee?: boolean
    status?: boolean
    onlineStatus?: boolean
    outletId?: boolean
    specializationId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type DoctorOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "doctorCode" | "fullName" | "mobile" | "email" | "password" | "bmdcNumber" | "subSpecialization" | "qualification" | "experienceYears" | "currentDesignation" | "consultationFee" | "status" | "onlineStatus" | "outletId" | "specializationId" | "createdAt" | "updatedAt", ExtArgs["result"]["doctor"]>
  export type DoctorInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    outlet?: boolean | Doctor$outletArgs<ExtArgs>
    specialization?: boolean | DoctorSpecializationDefaultArgs<ExtArgs>
    documents?: boolean | Doctor$documentsArgs<ExtArgs>
    schedules?: boolean | Doctor$schedulesArgs<ExtArgs>
    _count?: boolean | DoctorCountOutputTypeDefaultArgs<ExtArgs>
  }

  export type $DoctorPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Doctor"
    objects: {
      outlet: Prisma.$outletPayload<ExtArgs> | null
      specialization: Prisma.$DoctorSpecializationPayload<ExtArgs>
      documents: Prisma.$DoctorDocumentPayload<ExtArgs>[]
      schedules: Prisma.$DoctorSchedulePayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      doctorCode: string | null
      fullName: string
      mobile: string | null
      email: string
      password: string
      bmdcNumber: string | null
      subSpecialization: string | null
      qualification: string | null
      experienceYears: number | null
      currentDesignation: string | null
      consultationFee: Prisma.Decimal | null
      status: $Enums.DoctorStatus
      onlineStatus: $Enums.DoctorOnlineStatus
      outletId: string | null
      specializationId: string
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
    outlet<T extends Doctor$outletArgs<ExtArgs> = {}>(args?: Subset<T, Doctor$outletArgs<ExtArgs>>): Prisma__outletClient<$Result.GetResult<Prisma.$outletPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    specialization<T extends DoctorSpecializationDefaultArgs<ExtArgs> = {}>(args?: Subset<T, DoctorSpecializationDefaultArgs<ExtArgs>>): Prisma__DoctorSpecializationClient<$Result.GetResult<Prisma.$DoctorSpecializationPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    documents<T extends Doctor$documentsArgs<ExtArgs> = {}>(args?: Subset<T, Doctor$documentsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$DoctorDocumentPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    schedules<T extends Doctor$schedulesArgs<ExtArgs> = {}>(args?: Subset<T, Doctor$schedulesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$DoctorSchedulePayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
    readonly doctorCode: FieldRef<"Doctor", 'String'>
    readonly fullName: FieldRef<"Doctor", 'String'>
    readonly mobile: FieldRef<"Doctor", 'String'>
    readonly email: FieldRef<"Doctor", 'String'>
    readonly password: FieldRef<"Doctor", 'String'>
    readonly bmdcNumber: FieldRef<"Doctor", 'String'>
    readonly subSpecialization: FieldRef<"Doctor", 'String'>
    readonly qualification: FieldRef<"Doctor", 'String'>
    readonly experienceYears: FieldRef<"Doctor", 'Int'>
    readonly currentDesignation: FieldRef<"Doctor", 'String'>
    readonly consultationFee: FieldRef<"Doctor", 'Decimal'>
    readonly status: FieldRef<"Doctor", 'DoctorStatus'>
    readonly onlineStatus: FieldRef<"Doctor", 'DoctorOnlineStatus'>
    readonly outletId: FieldRef<"Doctor", 'String'>
    readonly specializationId: FieldRef<"Doctor", 'String'>
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
     * Choose, which related nodes to fetch as well
     */
    include?: DoctorInclude<ExtArgs> | null
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
     * Choose, which related nodes to fetch as well
     */
    include?: DoctorInclude<ExtArgs> | null
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
     * Choose, which related nodes to fetch as well
     */
    include?: DoctorInclude<ExtArgs> | null
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
     * Choose, which related nodes to fetch as well
     */
    include?: DoctorInclude<ExtArgs> | null
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
     * Choose, which related nodes to fetch as well
     */
    include?: DoctorInclude<ExtArgs> | null
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
     * Choose, which related nodes to fetch as well
     */
    include?: DoctorInclude<ExtArgs> | null
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
     * Choose, which related nodes to fetch as well
     */
    include?: DoctorInclude<ExtArgs> | null
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
     * Choose, which related nodes to fetch as well
     */
    include?: DoctorInclude<ExtArgs> | null
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
     * Choose, which related nodes to fetch as well
     */
    include?: DoctorInclude<ExtArgs> | null
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
   * Doctor.outlet
   */
  export type Doctor$outletArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the outlet
     */
    select?: outletSelect<ExtArgs> | null
    /**
     * Omit specific fields from the outlet
     */
    omit?: outletOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: outletInclude<ExtArgs> | null
    where?: outletWhereInput
  }

  /**
   * Doctor.documents
   */
  export type Doctor$documentsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DoctorDocument
     */
    select?: DoctorDocumentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DoctorDocument
     */
    omit?: DoctorDocumentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DoctorDocumentInclude<ExtArgs> | null
    where?: DoctorDocumentWhereInput
    orderBy?: DoctorDocumentOrderByWithRelationInput | DoctorDocumentOrderByWithRelationInput[]
    cursor?: DoctorDocumentWhereUniqueInput
    take?: number
    skip?: number
    distinct?: DoctorDocumentScalarFieldEnum | DoctorDocumentScalarFieldEnum[]
  }

  /**
   * Doctor.schedules
   */
  export type Doctor$schedulesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DoctorSchedule
     */
    select?: DoctorScheduleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DoctorSchedule
     */
    omit?: DoctorScheduleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DoctorScheduleInclude<ExtArgs> | null
    where?: DoctorScheduleWhereInput
    orderBy?: DoctorScheduleOrderByWithRelationInput | DoctorScheduleOrderByWithRelationInput[]
    cursor?: DoctorScheduleWhereUniqueInput
    take?: number
    skip?: number
    distinct?: DoctorScheduleScalarFieldEnum | DoctorScheduleScalarFieldEnum[]
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
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DoctorInclude<ExtArgs> | null
  }


  /**
   * Model DoctorSpecialization
   */

  export type AggregateDoctorSpecialization = {
    _count: DoctorSpecializationCountAggregateOutputType | null
    _min: DoctorSpecializationMinAggregateOutputType | null
    _max: DoctorSpecializationMaxAggregateOutputType | null
  }

  export type DoctorSpecializationMinAggregateOutputType = {
    id: string | null
    name: string | null
    status: $Enums.DoctorStatus | null
  }

  export type DoctorSpecializationMaxAggregateOutputType = {
    id: string | null
    name: string | null
    status: $Enums.DoctorStatus | null
  }

  export type DoctorSpecializationCountAggregateOutputType = {
    id: number
    name: number
    status: number
    _all: number
  }


  export type DoctorSpecializationMinAggregateInputType = {
    id?: true
    name?: true
    status?: true
  }

  export type DoctorSpecializationMaxAggregateInputType = {
    id?: true
    name?: true
    status?: true
  }

  export type DoctorSpecializationCountAggregateInputType = {
    id?: true
    name?: true
    status?: true
    _all?: true
  }

  export type DoctorSpecializationAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which DoctorSpecialization to aggregate.
     */
    where?: DoctorSpecializationWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of DoctorSpecializations to fetch.
     */
    orderBy?: DoctorSpecializationOrderByWithRelationInput | DoctorSpecializationOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: DoctorSpecializationWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` DoctorSpecializations from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` DoctorSpecializations.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned DoctorSpecializations
    **/
    _count?: true | DoctorSpecializationCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: DoctorSpecializationMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: DoctorSpecializationMaxAggregateInputType
  }

  export type GetDoctorSpecializationAggregateType<T extends DoctorSpecializationAggregateArgs> = {
        [P in keyof T & keyof AggregateDoctorSpecialization]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateDoctorSpecialization[P]>
      : GetScalarType<T[P], AggregateDoctorSpecialization[P]>
  }




  export type DoctorSpecializationGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: DoctorSpecializationWhereInput
    orderBy?: DoctorSpecializationOrderByWithAggregationInput | DoctorSpecializationOrderByWithAggregationInput[]
    by: DoctorSpecializationScalarFieldEnum[] | DoctorSpecializationScalarFieldEnum
    having?: DoctorSpecializationScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: DoctorSpecializationCountAggregateInputType | true
    _min?: DoctorSpecializationMinAggregateInputType
    _max?: DoctorSpecializationMaxAggregateInputType
  }

  export type DoctorSpecializationGroupByOutputType = {
    id: string
    name: string
    status: $Enums.DoctorStatus
    _count: DoctorSpecializationCountAggregateOutputType | null
    _min: DoctorSpecializationMinAggregateOutputType | null
    _max: DoctorSpecializationMaxAggregateOutputType | null
  }

  type GetDoctorSpecializationGroupByPayload<T extends DoctorSpecializationGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<DoctorSpecializationGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof DoctorSpecializationGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], DoctorSpecializationGroupByOutputType[P]>
            : GetScalarType<T[P], DoctorSpecializationGroupByOutputType[P]>
        }
      >
    >


  export type DoctorSpecializationSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    status?: boolean
    doctors?: boolean | DoctorSpecialization$doctorsArgs<ExtArgs>
    _count?: boolean | DoctorSpecializationCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["doctorSpecialization"]>



  export type DoctorSpecializationSelectScalar = {
    id?: boolean
    name?: boolean
    status?: boolean
  }

  export type DoctorSpecializationOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "name" | "status", ExtArgs["result"]["doctorSpecialization"]>
  export type DoctorSpecializationInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    doctors?: boolean | DoctorSpecialization$doctorsArgs<ExtArgs>
    _count?: boolean | DoctorSpecializationCountOutputTypeDefaultArgs<ExtArgs>
  }

  export type $DoctorSpecializationPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "DoctorSpecialization"
    objects: {
      doctors: Prisma.$DoctorPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      name: string
      status: $Enums.DoctorStatus
    }, ExtArgs["result"]["doctorSpecialization"]>
    composites: {}
  }

  type DoctorSpecializationGetPayload<S extends boolean | null | undefined | DoctorSpecializationDefaultArgs> = $Result.GetResult<Prisma.$DoctorSpecializationPayload, S>

  type DoctorSpecializationCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<DoctorSpecializationFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: DoctorSpecializationCountAggregateInputType | true
    }

  export interface DoctorSpecializationDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['DoctorSpecialization'], meta: { name: 'DoctorSpecialization' } }
    /**
     * Find zero or one DoctorSpecialization that matches the filter.
     * @param {DoctorSpecializationFindUniqueArgs} args - Arguments to find a DoctorSpecialization
     * @example
     * // Get one DoctorSpecialization
     * const doctorSpecialization = await prisma.doctorSpecialization.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends DoctorSpecializationFindUniqueArgs>(args: SelectSubset<T, DoctorSpecializationFindUniqueArgs<ExtArgs>>): Prisma__DoctorSpecializationClient<$Result.GetResult<Prisma.$DoctorSpecializationPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one DoctorSpecialization that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {DoctorSpecializationFindUniqueOrThrowArgs} args - Arguments to find a DoctorSpecialization
     * @example
     * // Get one DoctorSpecialization
     * const doctorSpecialization = await prisma.doctorSpecialization.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends DoctorSpecializationFindUniqueOrThrowArgs>(args: SelectSubset<T, DoctorSpecializationFindUniqueOrThrowArgs<ExtArgs>>): Prisma__DoctorSpecializationClient<$Result.GetResult<Prisma.$DoctorSpecializationPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first DoctorSpecialization that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DoctorSpecializationFindFirstArgs} args - Arguments to find a DoctorSpecialization
     * @example
     * // Get one DoctorSpecialization
     * const doctorSpecialization = await prisma.doctorSpecialization.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends DoctorSpecializationFindFirstArgs>(args?: SelectSubset<T, DoctorSpecializationFindFirstArgs<ExtArgs>>): Prisma__DoctorSpecializationClient<$Result.GetResult<Prisma.$DoctorSpecializationPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first DoctorSpecialization that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DoctorSpecializationFindFirstOrThrowArgs} args - Arguments to find a DoctorSpecialization
     * @example
     * // Get one DoctorSpecialization
     * const doctorSpecialization = await prisma.doctorSpecialization.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends DoctorSpecializationFindFirstOrThrowArgs>(args?: SelectSubset<T, DoctorSpecializationFindFirstOrThrowArgs<ExtArgs>>): Prisma__DoctorSpecializationClient<$Result.GetResult<Prisma.$DoctorSpecializationPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more DoctorSpecializations that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DoctorSpecializationFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all DoctorSpecializations
     * const doctorSpecializations = await prisma.doctorSpecialization.findMany()
     * 
     * // Get first 10 DoctorSpecializations
     * const doctorSpecializations = await prisma.doctorSpecialization.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const doctorSpecializationWithIdOnly = await prisma.doctorSpecialization.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends DoctorSpecializationFindManyArgs>(args?: SelectSubset<T, DoctorSpecializationFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$DoctorSpecializationPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a DoctorSpecialization.
     * @param {DoctorSpecializationCreateArgs} args - Arguments to create a DoctorSpecialization.
     * @example
     * // Create one DoctorSpecialization
     * const DoctorSpecialization = await prisma.doctorSpecialization.create({
     *   data: {
     *     // ... data to create a DoctorSpecialization
     *   }
     * })
     * 
     */
    create<T extends DoctorSpecializationCreateArgs>(args: SelectSubset<T, DoctorSpecializationCreateArgs<ExtArgs>>): Prisma__DoctorSpecializationClient<$Result.GetResult<Prisma.$DoctorSpecializationPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many DoctorSpecializations.
     * @param {DoctorSpecializationCreateManyArgs} args - Arguments to create many DoctorSpecializations.
     * @example
     * // Create many DoctorSpecializations
     * const doctorSpecialization = await prisma.doctorSpecialization.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends DoctorSpecializationCreateManyArgs>(args?: SelectSubset<T, DoctorSpecializationCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a DoctorSpecialization.
     * @param {DoctorSpecializationDeleteArgs} args - Arguments to delete one DoctorSpecialization.
     * @example
     * // Delete one DoctorSpecialization
     * const DoctorSpecialization = await prisma.doctorSpecialization.delete({
     *   where: {
     *     // ... filter to delete one DoctorSpecialization
     *   }
     * })
     * 
     */
    delete<T extends DoctorSpecializationDeleteArgs>(args: SelectSubset<T, DoctorSpecializationDeleteArgs<ExtArgs>>): Prisma__DoctorSpecializationClient<$Result.GetResult<Prisma.$DoctorSpecializationPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one DoctorSpecialization.
     * @param {DoctorSpecializationUpdateArgs} args - Arguments to update one DoctorSpecialization.
     * @example
     * // Update one DoctorSpecialization
     * const doctorSpecialization = await prisma.doctorSpecialization.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends DoctorSpecializationUpdateArgs>(args: SelectSubset<T, DoctorSpecializationUpdateArgs<ExtArgs>>): Prisma__DoctorSpecializationClient<$Result.GetResult<Prisma.$DoctorSpecializationPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more DoctorSpecializations.
     * @param {DoctorSpecializationDeleteManyArgs} args - Arguments to filter DoctorSpecializations to delete.
     * @example
     * // Delete a few DoctorSpecializations
     * const { count } = await prisma.doctorSpecialization.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends DoctorSpecializationDeleteManyArgs>(args?: SelectSubset<T, DoctorSpecializationDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more DoctorSpecializations.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DoctorSpecializationUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many DoctorSpecializations
     * const doctorSpecialization = await prisma.doctorSpecialization.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends DoctorSpecializationUpdateManyArgs>(args: SelectSubset<T, DoctorSpecializationUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one DoctorSpecialization.
     * @param {DoctorSpecializationUpsertArgs} args - Arguments to update or create a DoctorSpecialization.
     * @example
     * // Update or create a DoctorSpecialization
     * const doctorSpecialization = await prisma.doctorSpecialization.upsert({
     *   create: {
     *     // ... data to create a DoctorSpecialization
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the DoctorSpecialization we want to update
     *   }
     * })
     */
    upsert<T extends DoctorSpecializationUpsertArgs>(args: SelectSubset<T, DoctorSpecializationUpsertArgs<ExtArgs>>): Prisma__DoctorSpecializationClient<$Result.GetResult<Prisma.$DoctorSpecializationPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of DoctorSpecializations.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DoctorSpecializationCountArgs} args - Arguments to filter DoctorSpecializations to count.
     * @example
     * // Count the number of DoctorSpecializations
     * const count = await prisma.doctorSpecialization.count({
     *   where: {
     *     // ... the filter for the DoctorSpecializations we want to count
     *   }
     * })
    **/
    count<T extends DoctorSpecializationCountArgs>(
      args?: Subset<T, DoctorSpecializationCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], DoctorSpecializationCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a DoctorSpecialization.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DoctorSpecializationAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends DoctorSpecializationAggregateArgs>(args: Subset<T, DoctorSpecializationAggregateArgs>): Prisma.PrismaPromise<GetDoctorSpecializationAggregateType<T>>

    /**
     * Group by DoctorSpecialization.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DoctorSpecializationGroupByArgs} args - Group by arguments.
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
      T extends DoctorSpecializationGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: DoctorSpecializationGroupByArgs['orderBy'] }
        : { orderBy?: DoctorSpecializationGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, DoctorSpecializationGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetDoctorSpecializationGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the DoctorSpecialization model
   */
  readonly fields: DoctorSpecializationFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for DoctorSpecialization.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__DoctorSpecializationClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    doctors<T extends DoctorSpecialization$doctorsArgs<ExtArgs> = {}>(args?: Subset<T, DoctorSpecialization$doctorsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$DoctorPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the DoctorSpecialization model
   */
  interface DoctorSpecializationFieldRefs {
    readonly id: FieldRef<"DoctorSpecialization", 'String'>
    readonly name: FieldRef<"DoctorSpecialization", 'String'>
    readonly status: FieldRef<"DoctorSpecialization", 'DoctorStatus'>
  }
    

  // Custom InputTypes
  /**
   * DoctorSpecialization findUnique
   */
  export type DoctorSpecializationFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DoctorSpecialization
     */
    select?: DoctorSpecializationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DoctorSpecialization
     */
    omit?: DoctorSpecializationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DoctorSpecializationInclude<ExtArgs> | null
    /**
     * Filter, which DoctorSpecialization to fetch.
     */
    where: DoctorSpecializationWhereUniqueInput
  }

  /**
   * DoctorSpecialization findUniqueOrThrow
   */
  export type DoctorSpecializationFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DoctorSpecialization
     */
    select?: DoctorSpecializationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DoctorSpecialization
     */
    omit?: DoctorSpecializationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DoctorSpecializationInclude<ExtArgs> | null
    /**
     * Filter, which DoctorSpecialization to fetch.
     */
    where: DoctorSpecializationWhereUniqueInput
  }

  /**
   * DoctorSpecialization findFirst
   */
  export type DoctorSpecializationFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DoctorSpecialization
     */
    select?: DoctorSpecializationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DoctorSpecialization
     */
    omit?: DoctorSpecializationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DoctorSpecializationInclude<ExtArgs> | null
    /**
     * Filter, which DoctorSpecialization to fetch.
     */
    where?: DoctorSpecializationWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of DoctorSpecializations to fetch.
     */
    orderBy?: DoctorSpecializationOrderByWithRelationInput | DoctorSpecializationOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for DoctorSpecializations.
     */
    cursor?: DoctorSpecializationWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` DoctorSpecializations from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` DoctorSpecializations.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of DoctorSpecializations.
     */
    distinct?: DoctorSpecializationScalarFieldEnum | DoctorSpecializationScalarFieldEnum[]
  }

  /**
   * DoctorSpecialization findFirstOrThrow
   */
  export type DoctorSpecializationFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DoctorSpecialization
     */
    select?: DoctorSpecializationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DoctorSpecialization
     */
    omit?: DoctorSpecializationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DoctorSpecializationInclude<ExtArgs> | null
    /**
     * Filter, which DoctorSpecialization to fetch.
     */
    where?: DoctorSpecializationWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of DoctorSpecializations to fetch.
     */
    orderBy?: DoctorSpecializationOrderByWithRelationInput | DoctorSpecializationOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for DoctorSpecializations.
     */
    cursor?: DoctorSpecializationWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` DoctorSpecializations from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` DoctorSpecializations.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of DoctorSpecializations.
     */
    distinct?: DoctorSpecializationScalarFieldEnum | DoctorSpecializationScalarFieldEnum[]
  }

  /**
   * DoctorSpecialization findMany
   */
  export type DoctorSpecializationFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DoctorSpecialization
     */
    select?: DoctorSpecializationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DoctorSpecialization
     */
    omit?: DoctorSpecializationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DoctorSpecializationInclude<ExtArgs> | null
    /**
     * Filter, which DoctorSpecializations to fetch.
     */
    where?: DoctorSpecializationWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of DoctorSpecializations to fetch.
     */
    orderBy?: DoctorSpecializationOrderByWithRelationInput | DoctorSpecializationOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing DoctorSpecializations.
     */
    cursor?: DoctorSpecializationWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` DoctorSpecializations from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` DoctorSpecializations.
     */
    skip?: number
    distinct?: DoctorSpecializationScalarFieldEnum | DoctorSpecializationScalarFieldEnum[]
  }

  /**
   * DoctorSpecialization create
   */
  export type DoctorSpecializationCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DoctorSpecialization
     */
    select?: DoctorSpecializationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DoctorSpecialization
     */
    omit?: DoctorSpecializationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DoctorSpecializationInclude<ExtArgs> | null
    /**
     * The data needed to create a DoctorSpecialization.
     */
    data: XOR<DoctorSpecializationCreateInput, DoctorSpecializationUncheckedCreateInput>
  }

  /**
   * DoctorSpecialization createMany
   */
  export type DoctorSpecializationCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many DoctorSpecializations.
     */
    data: DoctorSpecializationCreateManyInput | DoctorSpecializationCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * DoctorSpecialization update
   */
  export type DoctorSpecializationUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DoctorSpecialization
     */
    select?: DoctorSpecializationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DoctorSpecialization
     */
    omit?: DoctorSpecializationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DoctorSpecializationInclude<ExtArgs> | null
    /**
     * The data needed to update a DoctorSpecialization.
     */
    data: XOR<DoctorSpecializationUpdateInput, DoctorSpecializationUncheckedUpdateInput>
    /**
     * Choose, which DoctorSpecialization to update.
     */
    where: DoctorSpecializationWhereUniqueInput
  }

  /**
   * DoctorSpecialization updateMany
   */
  export type DoctorSpecializationUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update DoctorSpecializations.
     */
    data: XOR<DoctorSpecializationUpdateManyMutationInput, DoctorSpecializationUncheckedUpdateManyInput>
    /**
     * Filter which DoctorSpecializations to update
     */
    where?: DoctorSpecializationWhereInput
    /**
     * Limit how many DoctorSpecializations to update.
     */
    limit?: number
  }

  /**
   * DoctorSpecialization upsert
   */
  export type DoctorSpecializationUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DoctorSpecialization
     */
    select?: DoctorSpecializationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DoctorSpecialization
     */
    omit?: DoctorSpecializationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DoctorSpecializationInclude<ExtArgs> | null
    /**
     * The filter to search for the DoctorSpecialization to update in case it exists.
     */
    where: DoctorSpecializationWhereUniqueInput
    /**
     * In case the DoctorSpecialization found by the `where` argument doesn't exist, create a new DoctorSpecialization with this data.
     */
    create: XOR<DoctorSpecializationCreateInput, DoctorSpecializationUncheckedCreateInput>
    /**
     * In case the DoctorSpecialization was found with the provided `where` argument, update it with this data.
     */
    update: XOR<DoctorSpecializationUpdateInput, DoctorSpecializationUncheckedUpdateInput>
  }

  /**
   * DoctorSpecialization delete
   */
  export type DoctorSpecializationDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DoctorSpecialization
     */
    select?: DoctorSpecializationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DoctorSpecialization
     */
    omit?: DoctorSpecializationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DoctorSpecializationInclude<ExtArgs> | null
    /**
     * Filter which DoctorSpecialization to delete.
     */
    where: DoctorSpecializationWhereUniqueInput
  }

  /**
   * DoctorSpecialization deleteMany
   */
  export type DoctorSpecializationDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which DoctorSpecializations to delete
     */
    where?: DoctorSpecializationWhereInput
    /**
     * Limit how many DoctorSpecializations to delete.
     */
    limit?: number
  }

  /**
   * DoctorSpecialization.doctors
   */
  export type DoctorSpecialization$doctorsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Doctor
     */
    select?: DoctorSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Doctor
     */
    omit?: DoctorOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DoctorInclude<ExtArgs> | null
    where?: DoctorWhereInput
    orderBy?: DoctorOrderByWithRelationInput | DoctorOrderByWithRelationInput[]
    cursor?: DoctorWhereUniqueInput
    take?: number
    skip?: number
    distinct?: DoctorScalarFieldEnum | DoctorScalarFieldEnum[]
  }

  /**
   * DoctorSpecialization without action
   */
  export type DoctorSpecializationDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DoctorSpecialization
     */
    select?: DoctorSpecializationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DoctorSpecialization
     */
    omit?: DoctorSpecializationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DoctorSpecializationInclude<ExtArgs> | null
  }


  /**
   * Model DoctorDocument
   */

  export type AggregateDoctorDocument = {
    _count: DoctorDocumentCountAggregateOutputType | null
    _min: DoctorDocumentMinAggregateOutputType | null
    _max: DoctorDocumentMaxAggregateOutputType | null
  }

  export type DoctorDocumentMinAggregateOutputType = {
    id: string | null
    documentType: $Enums.DocumentType | null
    fileUrl: string | null
    verificationStatus: $Enums.VerificationStatus | null
    doctorId: string | null
    createdAt: Date | null
  }

  export type DoctorDocumentMaxAggregateOutputType = {
    id: string | null
    documentType: $Enums.DocumentType | null
    fileUrl: string | null
    verificationStatus: $Enums.VerificationStatus | null
    doctorId: string | null
    createdAt: Date | null
  }

  export type DoctorDocumentCountAggregateOutputType = {
    id: number
    documentType: number
    fileUrl: number
    verificationStatus: number
    doctorId: number
    createdAt: number
    _all: number
  }


  export type DoctorDocumentMinAggregateInputType = {
    id?: true
    documentType?: true
    fileUrl?: true
    verificationStatus?: true
    doctorId?: true
    createdAt?: true
  }

  export type DoctorDocumentMaxAggregateInputType = {
    id?: true
    documentType?: true
    fileUrl?: true
    verificationStatus?: true
    doctorId?: true
    createdAt?: true
  }

  export type DoctorDocumentCountAggregateInputType = {
    id?: true
    documentType?: true
    fileUrl?: true
    verificationStatus?: true
    doctorId?: true
    createdAt?: true
    _all?: true
  }

  export type DoctorDocumentAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which DoctorDocument to aggregate.
     */
    where?: DoctorDocumentWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of DoctorDocuments to fetch.
     */
    orderBy?: DoctorDocumentOrderByWithRelationInput | DoctorDocumentOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: DoctorDocumentWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` DoctorDocuments from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` DoctorDocuments.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned DoctorDocuments
    **/
    _count?: true | DoctorDocumentCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: DoctorDocumentMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: DoctorDocumentMaxAggregateInputType
  }

  export type GetDoctorDocumentAggregateType<T extends DoctorDocumentAggregateArgs> = {
        [P in keyof T & keyof AggregateDoctorDocument]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateDoctorDocument[P]>
      : GetScalarType<T[P], AggregateDoctorDocument[P]>
  }




  export type DoctorDocumentGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: DoctorDocumentWhereInput
    orderBy?: DoctorDocumentOrderByWithAggregationInput | DoctorDocumentOrderByWithAggregationInput[]
    by: DoctorDocumentScalarFieldEnum[] | DoctorDocumentScalarFieldEnum
    having?: DoctorDocumentScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: DoctorDocumentCountAggregateInputType | true
    _min?: DoctorDocumentMinAggregateInputType
    _max?: DoctorDocumentMaxAggregateInputType
  }

  export type DoctorDocumentGroupByOutputType = {
    id: string
    documentType: $Enums.DocumentType
    fileUrl: string
    verificationStatus: $Enums.VerificationStatus
    doctorId: string
    createdAt: Date
    _count: DoctorDocumentCountAggregateOutputType | null
    _min: DoctorDocumentMinAggregateOutputType | null
    _max: DoctorDocumentMaxAggregateOutputType | null
  }

  type GetDoctorDocumentGroupByPayload<T extends DoctorDocumentGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<DoctorDocumentGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof DoctorDocumentGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], DoctorDocumentGroupByOutputType[P]>
            : GetScalarType<T[P], DoctorDocumentGroupByOutputType[P]>
        }
      >
    >


  export type DoctorDocumentSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    documentType?: boolean
    fileUrl?: boolean
    verificationStatus?: boolean
    doctorId?: boolean
    createdAt?: boolean
    doctor?: boolean | DoctorDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["doctorDocument"]>



  export type DoctorDocumentSelectScalar = {
    id?: boolean
    documentType?: boolean
    fileUrl?: boolean
    verificationStatus?: boolean
    doctorId?: boolean
    createdAt?: boolean
  }

  export type DoctorDocumentOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "documentType" | "fileUrl" | "verificationStatus" | "doctorId" | "createdAt", ExtArgs["result"]["doctorDocument"]>
  export type DoctorDocumentInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    doctor?: boolean | DoctorDefaultArgs<ExtArgs>
  }

  export type $DoctorDocumentPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "DoctorDocument"
    objects: {
      doctor: Prisma.$DoctorPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      documentType: $Enums.DocumentType
      fileUrl: string
      verificationStatus: $Enums.VerificationStatus
      doctorId: string
      createdAt: Date
    }, ExtArgs["result"]["doctorDocument"]>
    composites: {}
  }

  type DoctorDocumentGetPayload<S extends boolean | null | undefined | DoctorDocumentDefaultArgs> = $Result.GetResult<Prisma.$DoctorDocumentPayload, S>

  type DoctorDocumentCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<DoctorDocumentFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: DoctorDocumentCountAggregateInputType | true
    }

  export interface DoctorDocumentDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['DoctorDocument'], meta: { name: 'DoctorDocument' } }
    /**
     * Find zero or one DoctorDocument that matches the filter.
     * @param {DoctorDocumentFindUniqueArgs} args - Arguments to find a DoctorDocument
     * @example
     * // Get one DoctorDocument
     * const doctorDocument = await prisma.doctorDocument.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends DoctorDocumentFindUniqueArgs>(args: SelectSubset<T, DoctorDocumentFindUniqueArgs<ExtArgs>>): Prisma__DoctorDocumentClient<$Result.GetResult<Prisma.$DoctorDocumentPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one DoctorDocument that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {DoctorDocumentFindUniqueOrThrowArgs} args - Arguments to find a DoctorDocument
     * @example
     * // Get one DoctorDocument
     * const doctorDocument = await prisma.doctorDocument.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends DoctorDocumentFindUniqueOrThrowArgs>(args: SelectSubset<T, DoctorDocumentFindUniqueOrThrowArgs<ExtArgs>>): Prisma__DoctorDocumentClient<$Result.GetResult<Prisma.$DoctorDocumentPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first DoctorDocument that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DoctorDocumentFindFirstArgs} args - Arguments to find a DoctorDocument
     * @example
     * // Get one DoctorDocument
     * const doctorDocument = await prisma.doctorDocument.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends DoctorDocumentFindFirstArgs>(args?: SelectSubset<T, DoctorDocumentFindFirstArgs<ExtArgs>>): Prisma__DoctorDocumentClient<$Result.GetResult<Prisma.$DoctorDocumentPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first DoctorDocument that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DoctorDocumentFindFirstOrThrowArgs} args - Arguments to find a DoctorDocument
     * @example
     * // Get one DoctorDocument
     * const doctorDocument = await prisma.doctorDocument.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends DoctorDocumentFindFirstOrThrowArgs>(args?: SelectSubset<T, DoctorDocumentFindFirstOrThrowArgs<ExtArgs>>): Prisma__DoctorDocumentClient<$Result.GetResult<Prisma.$DoctorDocumentPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more DoctorDocuments that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DoctorDocumentFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all DoctorDocuments
     * const doctorDocuments = await prisma.doctorDocument.findMany()
     * 
     * // Get first 10 DoctorDocuments
     * const doctorDocuments = await prisma.doctorDocument.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const doctorDocumentWithIdOnly = await prisma.doctorDocument.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends DoctorDocumentFindManyArgs>(args?: SelectSubset<T, DoctorDocumentFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$DoctorDocumentPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a DoctorDocument.
     * @param {DoctorDocumentCreateArgs} args - Arguments to create a DoctorDocument.
     * @example
     * // Create one DoctorDocument
     * const DoctorDocument = await prisma.doctorDocument.create({
     *   data: {
     *     // ... data to create a DoctorDocument
     *   }
     * })
     * 
     */
    create<T extends DoctorDocumentCreateArgs>(args: SelectSubset<T, DoctorDocumentCreateArgs<ExtArgs>>): Prisma__DoctorDocumentClient<$Result.GetResult<Prisma.$DoctorDocumentPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many DoctorDocuments.
     * @param {DoctorDocumentCreateManyArgs} args - Arguments to create many DoctorDocuments.
     * @example
     * // Create many DoctorDocuments
     * const doctorDocument = await prisma.doctorDocument.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends DoctorDocumentCreateManyArgs>(args?: SelectSubset<T, DoctorDocumentCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a DoctorDocument.
     * @param {DoctorDocumentDeleteArgs} args - Arguments to delete one DoctorDocument.
     * @example
     * // Delete one DoctorDocument
     * const DoctorDocument = await prisma.doctorDocument.delete({
     *   where: {
     *     // ... filter to delete one DoctorDocument
     *   }
     * })
     * 
     */
    delete<T extends DoctorDocumentDeleteArgs>(args: SelectSubset<T, DoctorDocumentDeleteArgs<ExtArgs>>): Prisma__DoctorDocumentClient<$Result.GetResult<Prisma.$DoctorDocumentPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one DoctorDocument.
     * @param {DoctorDocumentUpdateArgs} args - Arguments to update one DoctorDocument.
     * @example
     * // Update one DoctorDocument
     * const doctorDocument = await prisma.doctorDocument.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends DoctorDocumentUpdateArgs>(args: SelectSubset<T, DoctorDocumentUpdateArgs<ExtArgs>>): Prisma__DoctorDocumentClient<$Result.GetResult<Prisma.$DoctorDocumentPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more DoctorDocuments.
     * @param {DoctorDocumentDeleteManyArgs} args - Arguments to filter DoctorDocuments to delete.
     * @example
     * // Delete a few DoctorDocuments
     * const { count } = await prisma.doctorDocument.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends DoctorDocumentDeleteManyArgs>(args?: SelectSubset<T, DoctorDocumentDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more DoctorDocuments.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DoctorDocumentUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many DoctorDocuments
     * const doctorDocument = await prisma.doctorDocument.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends DoctorDocumentUpdateManyArgs>(args: SelectSubset<T, DoctorDocumentUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one DoctorDocument.
     * @param {DoctorDocumentUpsertArgs} args - Arguments to update or create a DoctorDocument.
     * @example
     * // Update or create a DoctorDocument
     * const doctorDocument = await prisma.doctorDocument.upsert({
     *   create: {
     *     // ... data to create a DoctorDocument
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the DoctorDocument we want to update
     *   }
     * })
     */
    upsert<T extends DoctorDocumentUpsertArgs>(args: SelectSubset<T, DoctorDocumentUpsertArgs<ExtArgs>>): Prisma__DoctorDocumentClient<$Result.GetResult<Prisma.$DoctorDocumentPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of DoctorDocuments.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DoctorDocumentCountArgs} args - Arguments to filter DoctorDocuments to count.
     * @example
     * // Count the number of DoctorDocuments
     * const count = await prisma.doctorDocument.count({
     *   where: {
     *     // ... the filter for the DoctorDocuments we want to count
     *   }
     * })
    **/
    count<T extends DoctorDocumentCountArgs>(
      args?: Subset<T, DoctorDocumentCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], DoctorDocumentCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a DoctorDocument.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DoctorDocumentAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends DoctorDocumentAggregateArgs>(args: Subset<T, DoctorDocumentAggregateArgs>): Prisma.PrismaPromise<GetDoctorDocumentAggregateType<T>>

    /**
     * Group by DoctorDocument.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DoctorDocumentGroupByArgs} args - Group by arguments.
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
      T extends DoctorDocumentGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: DoctorDocumentGroupByArgs['orderBy'] }
        : { orderBy?: DoctorDocumentGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, DoctorDocumentGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetDoctorDocumentGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the DoctorDocument model
   */
  readonly fields: DoctorDocumentFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for DoctorDocument.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__DoctorDocumentClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    doctor<T extends DoctorDefaultArgs<ExtArgs> = {}>(args?: Subset<T, DoctorDefaultArgs<ExtArgs>>): Prisma__DoctorClient<$Result.GetResult<Prisma.$DoctorPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the DoctorDocument model
   */
  interface DoctorDocumentFieldRefs {
    readonly id: FieldRef<"DoctorDocument", 'String'>
    readonly documentType: FieldRef<"DoctorDocument", 'DocumentType'>
    readonly fileUrl: FieldRef<"DoctorDocument", 'String'>
    readonly verificationStatus: FieldRef<"DoctorDocument", 'VerificationStatus'>
    readonly doctorId: FieldRef<"DoctorDocument", 'String'>
    readonly createdAt: FieldRef<"DoctorDocument", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * DoctorDocument findUnique
   */
  export type DoctorDocumentFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DoctorDocument
     */
    select?: DoctorDocumentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DoctorDocument
     */
    omit?: DoctorDocumentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DoctorDocumentInclude<ExtArgs> | null
    /**
     * Filter, which DoctorDocument to fetch.
     */
    where: DoctorDocumentWhereUniqueInput
  }

  /**
   * DoctorDocument findUniqueOrThrow
   */
  export type DoctorDocumentFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DoctorDocument
     */
    select?: DoctorDocumentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DoctorDocument
     */
    omit?: DoctorDocumentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DoctorDocumentInclude<ExtArgs> | null
    /**
     * Filter, which DoctorDocument to fetch.
     */
    where: DoctorDocumentWhereUniqueInput
  }

  /**
   * DoctorDocument findFirst
   */
  export type DoctorDocumentFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DoctorDocument
     */
    select?: DoctorDocumentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DoctorDocument
     */
    omit?: DoctorDocumentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DoctorDocumentInclude<ExtArgs> | null
    /**
     * Filter, which DoctorDocument to fetch.
     */
    where?: DoctorDocumentWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of DoctorDocuments to fetch.
     */
    orderBy?: DoctorDocumentOrderByWithRelationInput | DoctorDocumentOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for DoctorDocuments.
     */
    cursor?: DoctorDocumentWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` DoctorDocuments from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` DoctorDocuments.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of DoctorDocuments.
     */
    distinct?: DoctorDocumentScalarFieldEnum | DoctorDocumentScalarFieldEnum[]
  }

  /**
   * DoctorDocument findFirstOrThrow
   */
  export type DoctorDocumentFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DoctorDocument
     */
    select?: DoctorDocumentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DoctorDocument
     */
    omit?: DoctorDocumentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DoctorDocumentInclude<ExtArgs> | null
    /**
     * Filter, which DoctorDocument to fetch.
     */
    where?: DoctorDocumentWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of DoctorDocuments to fetch.
     */
    orderBy?: DoctorDocumentOrderByWithRelationInput | DoctorDocumentOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for DoctorDocuments.
     */
    cursor?: DoctorDocumentWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` DoctorDocuments from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` DoctorDocuments.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of DoctorDocuments.
     */
    distinct?: DoctorDocumentScalarFieldEnum | DoctorDocumentScalarFieldEnum[]
  }

  /**
   * DoctorDocument findMany
   */
  export type DoctorDocumentFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DoctorDocument
     */
    select?: DoctorDocumentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DoctorDocument
     */
    omit?: DoctorDocumentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DoctorDocumentInclude<ExtArgs> | null
    /**
     * Filter, which DoctorDocuments to fetch.
     */
    where?: DoctorDocumentWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of DoctorDocuments to fetch.
     */
    orderBy?: DoctorDocumentOrderByWithRelationInput | DoctorDocumentOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing DoctorDocuments.
     */
    cursor?: DoctorDocumentWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` DoctorDocuments from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` DoctorDocuments.
     */
    skip?: number
    distinct?: DoctorDocumentScalarFieldEnum | DoctorDocumentScalarFieldEnum[]
  }

  /**
   * DoctorDocument create
   */
  export type DoctorDocumentCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DoctorDocument
     */
    select?: DoctorDocumentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DoctorDocument
     */
    omit?: DoctorDocumentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DoctorDocumentInclude<ExtArgs> | null
    /**
     * The data needed to create a DoctorDocument.
     */
    data: XOR<DoctorDocumentCreateInput, DoctorDocumentUncheckedCreateInput>
  }

  /**
   * DoctorDocument createMany
   */
  export type DoctorDocumentCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many DoctorDocuments.
     */
    data: DoctorDocumentCreateManyInput | DoctorDocumentCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * DoctorDocument update
   */
  export type DoctorDocumentUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DoctorDocument
     */
    select?: DoctorDocumentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DoctorDocument
     */
    omit?: DoctorDocumentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DoctorDocumentInclude<ExtArgs> | null
    /**
     * The data needed to update a DoctorDocument.
     */
    data: XOR<DoctorDocumentUpdateInput, DoctorDocumentUncheckedUpdateInput>
    /**
     * Choose, which DoctorDocument to update.
     */
    where: DoctorDocumentWhereUniqueInput
  }

  /**
   * DoctorDocument updateMany
   */
  export type DoctorDocumentUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update DoctorDocuments.
     */
    data: XOR<DoctorDocumentUpdateManyMutationInput, DoctorDocumentUncheckedUpdateManyInput>
    /**
     * Filter which DoctorDocuments to update
     */
    where?: DoctorDocumentWhereInput
    /**
     * Limit how many DoctorDocuments to update.
     */
    limit?: number
  }

  /**
   * DoctorDocument upsert
   */
  export type DoctorDocumentUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DoctorDocument
     */
    select?: DoctorDocumentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DoctorDocument
     */
    omit?: DoctorDocumentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DoctorDocumentInclude<ExtArgs> | null
    /**
     * The filter to search for the DoctorDocument to update in case it exists.
     */
    where: DoctorDocumentWhereUniqueInput
    /**
     * In case the DoctorDocument found by the `where` argument doesn't exist, create a new DoctorDocument with this data.
     */
    create: XOR<DoctorDocumentCreateInput, DoctorDocumentUncheckedCreateInput>
    /**
     * In case the DoctorDocument was found with the provided `where` argument, update it with this data.
     */
    update: XOR<DoctorDocumentUpdateInput, DoctorDocumentUncheckedUpdateInput>
  }

  /**
   * DoctorDocument delete
   */
  export type DoctorDocumentDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DoctorDocument
     */
    select?: DoctorDocumentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DoctorDocument
     */
    omit?: DoctorDocumentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DoctorDocumentInclude<ExtArgs> | null
    /**
     * Filter which DoctorDocument to delete.
     */
    where: DoctorDocumentWhereUniqueInput
  }

  /**
   * DoctorDocument deleteMany
   */
  export type DoctorDocumentDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which DoctorDocuments to delete
     */
    where?: DoctorDocumentWhereInput
    /**
     * Limit how many DoctorDocuments to delete.
     */
    limit?: number
  }

  /**
   * DoctorDocument without action
   */
  export type DoctorDocumentDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DoctorDocument
     */
    select?: DoctorDocumentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DoctorDocument
     */
    omit?: DoctorDocumentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DoctorDocumentInclude<ExtArgs> | null
  }


  /**
   * Model DoctorSchedule
   */

  export type AggregateDoctorSchedule = {
    _count: DoctorScheduleCountAggregateOutputType | null
    _avg: DoctorScheduleAvgAggregateOutputType | null
    _sum: DoctorScheduleSumAggregateOutputType | null
    _min: DoctorScheduleMinAggregateOutputType | null
    _max: DoctorScheduleMaxAggregateOutputType | null
  }

  export type DoctorScheduleAvgAggregateOutputType = {
    slotDuration: number | null
  }

  export type DoctorScheduleSumAggregateOutputType = {
    slotDuration: number | null
  }

  export type DoctorScheduleMinAggregateOutputType = {
    id: string | null
    doctorId: string | null
    dayName: string | null
    startTime: string | null
    endTime: string | null
    slotDuration: number | null
    status: $Enums.ScheduleStatus | null
  }

  export type DoctorScheduleMaxAggregateOutputType = {
    id: string | null
    doctorId: string | null
    dayName: string | null
    startTime: string | null
    endTime: string | null
    slotDuration: number | null
    status: $Enums.ScheduleStatus | null
  }

  export type DoctorScheduleCountAggregateOutputType = {
    id: number
    doctorId: number
    dayName: number
    startTime: number
    endTime: number
    slotDuration: number
    status: number
    _all: number
  }


  export type DoctorScheduleAvgAggregateInputType = {
    slotDuration?: true
  }

  export type DoctorScheduleSumAggregateInputType = {
    slotDuration?: true
  }

  export type DoctorScheduleMinAggregateInputType = {
    id?: true
    doctorId?: true
    dayName?: true
    startTime?: true
    endTime?: true
    slotDuration?: true
    status?: true
  }

  export type DoctorScheduleMaxAggregateInputType = {
    id?: true
    doctorId?: true
    dayName?: true
    startTime?: true
    endTime?: true
    slotDuration?: true
    status?: true
  }

  export type DoctorScheduleCountAggregateInputType = {
    id?: true
    doctorId?: true
    dayName?: true
    startTime?: true
    endTime?: true
    slotDuration?: true
    status?: true
    _all?: true
  }

  export type DoctorScheduleAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which DoctorSchedule to aggregate.
     */
    where?: DoctorScheduleWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of DoctorSchedules to fetch.
     */
    orderBy?: DoctorScheduleOrderByWithRelationInput | DoctorScheduleOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: DoctorScheduleWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` DoctorSchedules from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` DoctorSchedules.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned DoctorSchedules
    **/
    _count?: true | DoctorScheduleCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: DoctorScheduleAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: DoctorScheduleSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: DoctorScheduleMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: DoctorScheduleMaxAggregateInputType
  }

  export type GetDoctorScheduleAggregateType<T extends DoctorScheduleAggregateArgs> = {
        [P in keyof T & keyof AggregateDoctorSchedule]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateDoctorSchedule[P]>
      : GetScalarType<T[P], AggregateDoctorSchedule[P]>
  }




  export type DoctorScheduleGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: DoctorScheduleWhereInput
    orderBy?: DoctorScheduleOrderByWithAggregationInput | DoctorScheduleOrderByWithAggregationInput[]
    by: DoctorScheduleScalarFieldEnum[] | DoctorScheduleScalarFieldEnum
    having?: DoctorScheduleScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: DoctorScheduleCountAggregateInputType | true
    _avg?: DoctorScheduleAvgAggregateInputType
    _sum?: DoctorScheduleSumAggregateInputType
    _min?: DoctorScheduleMinAggregateInputType
    _max?: DoctorScheduleMaxAggregateInputType
  }

  export type DoctorScheduleGroupByOutputType = {
    id: string
    doctorId: string
    dayName: string
    startTime: string
    endTime: string
    slotDuration: number
    status: $Enums.ScheduleStatus
    _count: DoctorScheduleCountAggregateOutputType | null
    _avg: DoctorScheduleAvgAggregateOutputType | null
    _sum: DoctorScheduleSumAggregateOutputType | null
    _min: DoctorScheduleMinAggregateOutputType | null
    _max: DoctorScheduleMaxAggregateOutputType | null
  }

  type GetDoctorScheduleGroupByPayload<T extends DoctorScheduleGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<DoctorScheduleGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof DoctorScheduleGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], DoctorScheduleGroupByOutputType[P]>
            : GetScalarType<T[P], DoctorScheduleGroupByOutputType[P]>
        }
      >
    >


  export type DoctorScheduleSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    doctorId?: boolean
    dayName?: boolean
    startTime?: boolean
    endTime?: boolean
    slotDuration?: boolean
    status?: boolean
    doctor?: boolean | DoctorDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["doctorSchedule"]>



  export type DoctorScheduleSelectScalar = {
    id?: boolean
    doctorId?: boolean
    dayName?: boolean
    startTime?: boolean
    endTime?: boolean
    slotDuration?: boolean
    status?: boolean
  }

  export type DoctorScheduleOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "doctorId" | "dayName" | "startTime" | "endTime" | "slotDuration" | "status", ExtArgs["result"]["doctorSchedule"]>
  export type DoctorScheduleInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    doctor?: boolean | DoctorDefaultArgs<ExtArgs>
  }

  export type $DoctorSchedulePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "DoctorSchedule"
    objects: {
      doctor: Prisma.$DoctorPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      doctorId: string
      dayName: string
      startTime: string
      endTime: string
      slotDuration: number
      status: $Enums.ScheduleStatus
    }, ExtArgs["result"]["doctorSchedule"]>
    composites: {}
  }

  type DoctorScheduleGetPayload<S extends boolean | null | undefined | DoctorScheduleDefaultArgs> = $Result.GetResult<Prisma.$DoctorSchedulePayload, S>

  type DoctorScheduleCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<DoctorScheduleFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: DoctorScheduleCountAggregateInputType | true
    }

  export interface DoctorScheduleDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['DoctorSchedule'], meta: { name: 'DoctorSchedule' } }
    /**
     * Find zero or one DoctorSchedule that matches the filter.
     * @param {DoctorScheduleFindUniqueArgs} args - Arguments to find a DoctorSchedule
     * @example
     * // Get one DoctorSchedule
     * const doctorSchedule = await prisma.doctorSchedule.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends DoctorScheduleFindUniqueArgs>(args: SelectSubset<T, DoctorScheduleFindUniqueArgs<ExtArgs>>): Prisma__DoctorScheduleClient<$Result.GetResult<Prisma.$DoctorSchedulePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one DoctorSchedule that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {DoctorScheduleFindUniqueOrThrowArgs} args - Arguments to find a DoctorSchedule
     * @example
     * // Get one DoctorSchedule
     * const doctorSchedule = await prisma.doctorSchedule.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends DoctorScheduleFindUniqueOrThrowArgs>(args: SelectSubset<T, DoctorScheduleFindUniqueOrThrowArgs<ExtArgs>>): Prisma__DoctorScheduleClient<$Result.GetResult<Prisma.$DoctorSchedulePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first DoctorSchedule that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DoctorScheduleFindFirstArgs} args - Arguments to find a DoctorSchedule
     * @example
     * // Get one DoctorSchedule
     * const doctorSchedule = await prisma.doctorSchedule.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends DoctorScheduleFindFirstArgs>(args?: SelectSubset<T, DoctorScheduleFindFirstArgs<ExtArgs>>): Prisma__DoctorScheduleClient<$Result.GetResult<Prisma.$DoctorSchedulePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first DoctorSchedule that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DoctorScheduleFindFirstOrThrowArgs} args - Arguments to find a DoctorSchedule
     * @example
     * // Get one DoctorSchedule
     * const doctorSchedule = await prisma.doctorSchedule.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends DoctorScheduleFindFirstOrThrowArgs>(args?: SelectSubset<T, DoctorScheduleFindFirstOrThrowArgs<ExtArgs>>): Prisma__DoctorScheduleClient<$Result.GetResult<Prisma.$DoctorSchedulePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more DoctorSchedules that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DoctorScheduleFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all DoctorSchedules
     * const doctorSchedules = await prisma.doctorSchedule.findMany()
     * 
     * // Get first 10 DoctorSchedules
     * const doctorSchedules = await prisma.doctorSchedule.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const doctorScheduleWithIdOnly = await prisma.doctorSchedule.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends DoctorScheduleFindManyArgs>(args?: SelectSubset<T, DoctorScheduleFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$DoctorSchedulePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a DoctorSchedule.
     * @param {DoctorScheduleCreateArgs} args - Arguments to create a DoctorSchedule.
     * @example
     * // Create one DoctorSchedule
     * const DoctorSchedule = await prisma.doctorSchedule.create({
     *   data: {
     *     // ... data to create a DoctorSchedule
     *   }
     * })
     * 
     */
    create<T extends DoctorScheduleCreateArgs>(args: SelectSubset<T, DoctorScheduleCreateArgs<ExtArgs>>): Prisma__DoctorScheduleClient<$Result.GetResult<Prisma.$DoctorSchedulePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many DoctorSchedules.
     * @param {DoctorScheduleCreateManyArgs} args - Arguments to create many DoctorSchedules.
     * @example
     * // Create many DoctorSchedules
     * const doctorSchedule = await prisma.doctorSchedule.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends DoctorScheduleCreateManyArgs>(args?: SelectSubset<T, DoctorScheduleCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a DoctorSchedule.
     * @param {DoctorScheduleDeleteArgs} args - Arguments to delete one DoctorSchedule.
     * @example
     * // Delete one DoctorSchedule
     * const DoctorSchedule = await prisma.doctorSchedule.delete({
     *   where: {
     *     // ... filter to delete one DoctorSchedule
     *   }
     * })
     * 
     */
    delete<T extends DoctorScheduleDeleteArgs>(args: SelectSubset<T, DoctorScheduleDeleteArgs<ExtArgs>>): Prisma__DoctorScheduleClient<$Result.GetResult<Prisma.$DoctorSchedulePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one DoctorSchedule.
     * @param {DoctorScheduleUpdateArgs} args - Arguments to update one DoctorSchedule.
     * @example
     * // Update one DoctorSchedule
     * const doctorSchedule = await prisma.doctorSchedule.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends DoctorScheduleUpdateArgs>(args: SelectSubset<T, DoctorScheduleUpdateArgs<ExtArgs>>): Prisma__DoctorScheduleClient<$Result.GetResult<Prisma.$DoctorSchedulePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more DoctorSchedules.
     * @param {DoctorScheduleDeleteManyArgs} args - Arguments to filter DoctorSchedules to delete.
     * @example
     * // Delete a few DoctorSchedules
     * const { count } = await prisma.doctorSchedule.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends DoctorScheduleDeleteManyArgs>(args?: SelectSubset<T, DoctorScheduleDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more DoctorSchedules.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DoctorScheduleUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many DoctorSchedules
     * const doctorSchedule = await prisma.doctorSchedule.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends DoctorScheduleUpdateManyArgs>(args: SelectSubset<T, DoctorScheduleUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one DoctorSchedule.
     * @param {DoctorScheduleUpsertArgs} args - Arguments to update or create a DoctorSchedule.
     * @example
     * // Update or create a DoctorSchedule
     * const doctorSchedule = await prisma.doctorSchedule.upsert({
     *   create: {
     *     // ... data to create a DoctorSchedule
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the DoctorSchedule we want to update
     *   }
     * })
     */
    upsert<T extends DoctorScheduleUpsertArgs>(args: SelectSubset<T, DoctorScheduleUpsertArgs<ExtArgs>>): Prisma__DoctorScheduleClient<$Result.GetResult<Prisma.$DoctorSchedulePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of DoctorSchedules.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DoctorScheduleCountArgs} args - Arguments to filter DoctorSchedules to count.
     * @example
     * // Count the number of DoctorSchedules
     * const count = await prisma.doctorSchedule.count({
     *   where: {
     *     // ... the filter for the DoctorSchedules we want to count
     *   }
     * })
    **/
    count<T extends DoctorScheduleCountArgs>(
      args?: Subset<T, DoctorScheduleCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], DoctorScheduleCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a DoctorSchedule.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DoctorScheduleAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends DoctorScheduleAggregateArgs>(args: Subset<T, DoctorScheduleAggregateArgs>): Prisma.PrismaPromise<GetDoctorScheduleAggregateType<T>>

    /**
     * Group by DoctorSchedule.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DoctorScheduleGroupByArgs} args - Group by arguments.
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
      T extends DoctorScheduleGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: DoctorScheduleGroupByArgs['orderBy'] }
        : { orderBy?: DoctorScheduleGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, DoctorScheduleGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetDoctorScheduleGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the DoctorSchedule model
   */
  readonly fields: DoctorScheduleFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for DoctorSchedule.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__DoctorScheduleClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    doctor<T extends DoctorDefaultArgs<ExtArgs> = {}>(args?: Subset<T, DoctorDefaultArgs<ExtArgs>>): Prisma__DoctorClient<$Result.GetResult<Prisma.$DoctorPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the DoctorSchedule model
   */
  interface DoctorScheduleFieldRefs {
    readonly id: FieldRef<"DoctorSchedule", 'String'>
    readonly doctorId: FieldRef<"DoctorSchedule", 'String'>
    readonly dayName: FieldRef<"DoctorSchedule", 'String'>
    readonly startTime: FieldRef<"DoctorSchedule", 'String'>
    readonly endTime: FieldRef<"DoctorSchedule", 'String'>
    readonly slotDuration: FieldRef<"DoctorSchedule", 'Int'>
    readonly status: FieldRef<"DoctorSchedule", 'ScheduleStatus'>
  }
    

  // Custom InputTypes
  /**
   * DoctorSchedule findUnique
   */
  export type DoctorScheduleFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DoctorSchedule
     */
    select?: DoctorScheduleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DoctorSchedule
     */
    omit?: DoctorScheduleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DoctorScheduleInclude<ExtArgs> | null
    /**
     * Filter, which DoctorSchedule to fetch.
     */
    where: DoctorScheduleWhereUniqueInput
  }

  /**
   * DoctorSchedule findUniqueOrThrow
   */
  export type DoctorScheduleFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DoctorSchedule
     */
    select?: DoctorScheduleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DoctorSchedule
     */
    omit?: DoctorScheduleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DoctorScheduleInclude<ExtArgs> | null
    /**
     * Filter, which DoctorSchedule to fetch.
     */
    where: DoctorScheduleWhereUniqueInput
  }

  /**
   * DoctorSchedule findFirst
   */
  export type DoctorScheduleFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DoctorSchedule
     */
    select?: DoctorScheduleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DoctorSchedule
     */
    omit?: DoctorScheduleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DoctorScheduleInclude<ExtArgs> | null
    /**
     * Filter, which DoctorSchedule to fetch.
     */
    where?: DoctorScheduleWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of DoctorSchedules to fetch.
     */
    orderBy?: DoctorScheduleOrderByWithRelationInput | DoctorScheduleOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for DoctorSchedules.
     */
    cursor?: DoctorScheduleWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` DoctorSchedules from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` DoctorSchedules.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of DoctorSchedules.
     */
    distinct?: DoctorScheduleScalarFieldEnum | DoctorScheduleScalarFieldEnum[]
  }

  /**
   * DoctorSchedule findFirstOrThrow
   */
  export type DoctorScheduleFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DoctorSchedule
     */
    select?: DoctorScheduleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DoctorSchedule
     */
    omit?: DoctorScheduleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DoctorScheduleInclude<ExtArgs> | null
    /**
     * Filter, which DoctorSchedule to fetch.
     */
    where?: DoctorScheduleWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of DoctorSchedules to fetch.
     */
    orderBy?: DoctorScheduleOrderByWithRelationInput | DoctorScheduleOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for DoctorSchedules.
     */
    cursor?: DoctorScheduleWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` DoctorSchedules from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` DoctorSchedules.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of DoctorSchedules.
     */
    distinct?: DoctorScheduleScalarFieldEnum | DoctorScheduleScalarFieldEnum[]
  }

  /**
   * DoctorSchedule findMany
   */
  export type DoctorScheduleFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DoctorSchedule
     */
    select?: DoctorScheduleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DoctorSchedule
     */
    omit?: DoctorScheduleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DoctorScheduleInclude<ExtArgs> | null
    /**
     * Filter, which DoctorSchedules to fetch.
     */
    where?: DoctorScheduleWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of DoctorSchedules to fetch.
     */
    orderBy?: DoctorScheduleOrderByWithRelationInput | DoctorScheduleOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing DoctorSchedules.
     */
    cursor?: DoctorScheduleWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` DoctorSchedules from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` DoctorSchedules.
     */
    skip?: number
    distinct?: DoctorScheduleScalarFieldEnum | DoctorScheduleScalarFieldEnum[]
  }

  /**
   * DoctorSchedule create
   */
  export type DoctorScheduleCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DoctorSchedule
     */
    select?: DoctorScheduleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DoctorSchedule
     */
    omit?: DoctorScheduleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DoctorScheduleInclude<ExtArgs> | null
    /**
     * The data needed to create a DoctorSchedule.
     */
    data: XOR<DoctorScheduleCreateInput, DoctorScheduleUncheckedCreateInput>
  }

  /**
   * DoctorSchedule createMany
   */
  export type DoctorScheduleCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many DoctorSchedules.
     */
    data: DoctorScheduleCreateManyInput | DoctorScheduleCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * DoctorSchedule update
   */
  export type DoctorScheduleUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DoctorSchedule
     */
    select?: DoctorScheduleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DoctorSchedule
     */
    omit?: DoctorScheduleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DoctorScheduleInclude<ExtArgs> | null
    /**
     * The data needed to update a DoctorSchedule.
     */
    data: XOR<DoctorScheduleUpdateInput, DoctorScheduleUncheckedUpdateInput>
    /**
     * Choose, which DoctorSchedule to update.
     */
    where: DoctorScheduleWhereUniqueInput
  }

  /**
   * DoctorSchedule updateMany
   */
  export type DoctorScheduleUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update DoctorSchedules.
     */
    data: XOR<DoctorScheduleUpdateManyMutationInput, DoctorScheduleUncheckedUpdateManyInput>
    /**
     * Filter which DoctorSchedules to update
     */
    where?: DoctorScheduleWhereInput
    /**
     * Limit how many DoctorSchedules to update.
     */
    limit?: number
  }

  /**
   * DoctorSchedule upsert
   */
  export type DoctorScheduleUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DoctorSchedule
     */
    select?: DoctorScheduleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DoctorSchedule
     */
    omit?: DoctorScheduleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DoctorScheduleInclude<ExtArgs> | null
    /**
     * The filter to search for the DoctorSchedule to update in case it exists.
     */
    where: DoctorScheduleWhereUniqueInput
    /**
     * In case the DoctorSchedule found by the `where` argument doesn't exist, create a new DoctorSchedule with this data.
     */
    create: XOR<DoctorScheduleCreateInput, DoctorScheduleUncheckedCreateInput>
    /**
     * In case the DoctorSchedule was found with the provided `where` argument, update it with this data.
     */
    update: XOR<DoctorScheduleUpdateInput, DoctorScheduleUncheckedUpdateInput>
  }

  /**
   * DoctorSchedule delete
   */
  export type DoctorScheduleDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DoctorSchedule
     */
    select?: DoctorScheduleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DoctorSchedule
     */
    omit?: DoctorScheduleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DoctorScheduleInclude<ExtArgs> | null
    /**
     * Filter which DoctorSchedule to delete.
     */
    where: DoctorScheduleWhereUniqueInput
  }

  /**
   * DoctorSchedule deleteMany
   */
  export type DoctorScheduleDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which DoctorSchedules to delete
     */
    where?: DoctorScheduleWhereInput
    /**
     * Limit how many DoctorSchedules to delete.
     */
    limit?: number
  }

  /**
   * DoctorSchedule without action
   */
  export type DoctorScheduleDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DoctorSchedule
     */
    select?: DoctorScheduleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DoctorSchedule
     */
    omit?: DoctorScheduleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DoctorScheduleInclude<ExtArgs> | null
  }


  /**
   * Model outlet
   */

  export type AggregateOutlet = {
    _count: OutletCountAggregateOutputType | null
    _min: OutletMinAggregateOutputType | null
    _max: OutletMaxAggregateOutputType | null
  }

  export type OutletMinAggregateOutputType = {
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

  export type OutletMaxAggregateOutputType = {
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

  export type OutletCountAggregateOutputType = {
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


  export type OutletMinAggregateInputType = {
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

  export type OutletMaxAggregateInputType = {
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

  export type OutletCountAggregateInputType = {
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

  export type OutletAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which outlet to aggregate.
     */
    where?: outletWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of outlets to fetch.
     */
    orderBy?: outletOrderByWithRelationInput | outletOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: outletWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` outlets from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` outlets.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned outlets
    **/
    _count?: true | OutletCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: OutletMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: OutletMaxAggregateInputType
  }

  export type GetOutletAggregateType<T extends OutletAggregateArgs> = {
        [P in keyof T & keyof AggregateOutlet]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateOutlet[P]>
      : GetScalarType<T[P], AggregateOutlet[P]>
  }




  export type outletGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: outletWhereInput
    orderBy?: outletOrderByWithAggregationInput | outletOrderByWithAggregationInput[]
    by: OutletScalarFieldEnum[] | OutletScalarFieldEnum
    having?: outletScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: OutletCountAggregateInputType | true
    _min?: OutletMinAggregateInputType
    _max?: OutletMaxAggregateInputType
  }

  export type OutletGroupByOutputType = {
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
    _count: OutletCountAggregateOutputType | null
    _min: OutletMinAggregateOutputType | null
    _max: OutletMaxAggregateOutputType | null
  }

  type GetOutletGroupByPayload<T extends outletGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<OutletGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof OutletGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], OutletGroupByOutputType[P]>
            : GetScalarType<T[P], OutletGroupByOutputType[P]>
        }
      >
    >


  export type outletSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
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
    childUsers?: boolean | outlet$childUsersArgs<ExtArgs>
    roles?: boolean | outlet$rolesArgs<ExtArgs>
    patients?: boolean | outlet$patientsArgs<ExtArgs>
    doctors?: boolean | outlet$doctorsArgs<ExtArgs>
    _count?: boolean | OutletCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["outlet"]>



  export type outletSelectScalar = {
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

  export type outletOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "name" | "email" | "phone" | "password" | "centerName" | "slug" | "logo" | "address" | "isActive" | "createdAt" | "updatedAt", ExtArgs["result"]["outlet"]>
  export type outletInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    childUsers?: boolean | outlet$childUsersArgs<ExtArgs>
    roles?: boolean | outlet$rolesArgs<ExtArgs>
    patients?: boolean | outlet$patientsArgs<ExtArgs>
    doctors?: boolean | outlet$doctorsArgs<ExtArgs>
    _count?: boolean | OutletCountOutputTypeDefaultArgs<ExtArgs>
  }

  export type $outletPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "outlet"
    objects: {
      childUsers: Prisma.$OutletChildUserPayload<ExtArgs>[]
      roles: Prisma.$RolePayload<ExtArgs>[]
      patients: Prisma.$PatientPayload<ExtArgs>[]
      doctors: Prisma.$DoctorPayload<ExtArgs>[]
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
    }, ExtArgs["result"]["outlet"]>
    composites: {}
  }

  type outletGetPayload<S extends boolean | null | undefined | outletDefaultArgs> = $Result.GetResult<Prisma.$outletPayload, S>

  type outletCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<outletFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: OutletCountAggregateInputType | true
    }

  export interface outletDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['outlet'], meta: { name: 'outlet' } }
    /**
     * Find zero or one Outlet that matches the filter.
     * @param {outletFindUniqueArgs} args - Arguments to find a Outlet
     * @example
     * // Get one Outlet
     * const outlet = await prisma.outlet.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends outletFindUniqueArgs>(args: SelectSubset<T, outletFindUniqueArgs<ExtArgs>>): Prisma__outletClient<$Result.GetResult<Prisma.$outletPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Outlet that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {outletFindUniqueOrThrowArgs} args - Arguments to find a Outlet
     * @example
     * // Get one Outlet
     * const outlet = await prisma.outlet.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends outletFindUniqueOrThrowArgs>(args: SelectSubset<T, outletFindUniqueOrThrowArgs<ExtArgs>>): Prisma__outletClient<$Result.GetResult<Prisma.$outletPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Outlet that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {outletFindFirstArgs} args - Arguments to find a Outlet
     * @example
     * // Get one Outlet
     * const outlet = await prisma.outlet.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends outletFindFirstArgs>(args?: SelectSubset<T, outletFindFirstArgs<ExtArgs>>): Prisma__outletClient<$Result.GetResult<Prisma.$outletPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Outlet that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {outletFindFirstOrThrowArgs} args - Arguments to find a Outlet
     * @example
     * // Get one Outlet
     * const outlet = await prisma.outlet.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends outletFindFirstOrThrowArgs>(args?: SelectSubset<T, outletFindFirstOrThrowArgs<ExtArgs>>): Prisma__outletClient<$Result.GetResult<Prisma.$outletPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Outlets that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {outletFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Outlets
     * const outlets = await prisma.outlet.findMany()
     * 
     * // Get first 10 Outlets
     * const outlets = await prisma.outlet.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const outletWithIdOnly = await prisma.outlet.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends outletFindManyArgs>(args?: SelectSubset<T, outletFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$outletPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Outlet.
     * @param {outletCreateArgs} args - Arguments to create a Outlet.
     * @example
     * // Create one Outlet
     * const Outlet = await prisma.outlet.create({
     *   data: {
     *     // ... data to create a Outlet
     *   }
     * })
     * 
     */
    create<T extends outletCreateArgs>(args: SelectSubset<T, outletCreateArgs<ExtArgs>>): Prisma__outletClient<$Result.GetResult<Prisma.$outletPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Outlets.
     * @param {outletCreateManyArgs} args - Arguments to create many Outlets.
     * @example
     * // Create many Outlets
     * const outlet = await prisma.outlet.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends outletCreateManyArgs>(args?: SelectSubset<T, outletCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Outlet.
     * @param {outletDeleteArgs} args - Arguments to delete one Outlet.
     * @example
     * // Delete one Outlet
     * const Outlet = await prisma.outlet.delete({
     *   where: {
     *     // ... filter to delete one Outlet
     *   }
     * })
     * 
     */
    delete<T extends outletDeleteArgs>(args: SelectSubset<T, outletDeleteArgs<ExtArgs>>): Prisma__outletClient<$Result.GetResult<Prisma.$outletPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Outlet.
     * @param {outletUpdateArgs} args - Arguments to update one Outlet.
     * @example
     * // Update one Outlet
     * const outlet = await prisma.outlet.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends outletUpdateArgs>(args: SelectSubset<T, outletUpdateArgs<ExtArgs>>): Prisma__outletClient<$Result.GetResult<Prisma.$outletPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Outlets.
     * @param {outletDeleteManyArgs} args - Arguments to filter Outlets to delete.
     * @example
     * // Delete a few Outlets
     * const { count } = await prisma.outlet.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends outletDeleteManyArgs>(args?: SelectSubset<T, outletDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Outlets.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {outletUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Outlets
     * const outlet = await prisma.outlet.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends outletUpdateManyArgs>(args: SelectSubset<T, outletUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Outlet.
     * @param {outletUpsertArgs} args - Arguments to update or create a Outlet.
     * @example
     * // Update or create a Outlet
     * const outlet = await prisma.outlet.upsert({
     *   create: {
     *     // ... data to create a Outlet
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Outlet we want to update
     *   }
     * })
     */
    upsert<T extends outletUpsertArgs>(args: SelectSubset<T, outletUpsertArgs<ExtArgs>>): Prisma__outletClient<$Result.GetResult<Prisma.$outletPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Outlets.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {outletCountArgs} args - Arguments to filter Outlets to count.
     * @example
     * // Count the number of Outlets
     * const count = await prisma.outlet.count({
     *   where: {
     *     // ... the filter for the Outlets we want to count
     *   }
     * })
    **/
    count<T extends outletCountArgs>(
      args?: Subset<T, outletCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], OutletCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Outlet.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OutletAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends OutletAggregateArgs>(args: Subset<T, OutletAggregateArgs>): Prisma.PrismaPromise<GetOutletAggregateType<T>>

    /**
     * Group by Outlet.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {outletGroupByArgs} args - Group by arguments.
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
      T extends outletGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: outletGroupByArgs['orderBy'] }
        : { orderBy?: outletGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, outletGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetOutletGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the outlet model
   */
  readonly fields: outletFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for outlet.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__outletClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    childUsers<T extends outlet$childUsersArgs<ExtArgs> = {}>(args?: Subset<T, outlet$childUsersArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$OutletChildUserPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    roles<T extends outlet$rolesArgs<ExtArgs> = {}>(args?: Subset<T, outlet$rolesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$RolePayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    patients<T extends outlet$patientsArgs<ExtArgs> = {}>(args?: Subset<T, outlet$patientsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PatientPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    doctors<T extends outlet$doctorsArgs<ExtArgs> = {}>(args?: Subset<T, outlet$doctorsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$DoctorPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the outlet model
   */
  interface outletFieldRefs {
    readonly id: FieldRef<"outlet", 'String'>
    readonly name: FieldRef<"outlet", 'String'>
    readonly email: FieldRef<"outlet", 'String'>
    readonly phone: FieldRef<"outlet", 'String'>
    readonly password: FieldRef<"outlet", 'String'>
    readonly centerName: FieldRef<"outlet", 'String'>
    readonly slug: FieldRef<"outlet", 'String'>
    readonly logo: FieldRef<"outlet", 'String'>
    readonly address: FieldRef<"outlet", 'String'>
    readonly isActive: FieldRef<"outlet", 'Boolean'>
    readonly createdAt: FieldRef<"outlet", 'DateTime'>
    readonly updatedAt: FieldRef<"outlet", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * outlet findUnique
   */
  export type outletFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the outlet
     */
    select?: outletSelect<ExtArgs> | null
    /**
     * Omit specific fields from the outlet
     */
    omit?: outletOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: outletInclude<ExtArgs> | null
    /**
     * Filter, which outlet to fetch.
     */
    where: outletWhereUniqueInput
  }

  /**
   * outlet findUniqueOrThrow
   */
  export type outletFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the outlet
     */
    select?: outletSelect<ExtArgs> | null
    /**
     * Omit specific fields from the outlet
     */
    omit?: outletOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: outletInclude<ExtArgs> | null
    /**
     * Filter, which outlet to fetch.
     */
    where: outletWhereUniqueInput
  }

  /**
   * outlet findFirst
   */
  export type outletFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the outlet
     */
    select?: outletSelect<ExtArgs> | null
    /**
     * Omit specific fields from the outlet
     */
    omit?: outletOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: outletInclude<ExtArgs> | null
    /**
     * Filter, which outlet to fetch.
     */
    where?: outletWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of outlets to fetch.
     */
    orderBy?: outletOrderByWithRelationInput | outletOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for outlets.
     */
    cursor?: outletWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` outlets from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` outlets.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of outlets.
     */
    distinct?: OutletScalarFieldEnum | OutletScalarFieldEnum[]
  }

  /**
   * outlet findFirstOrThrow
   */
  export type outletFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the outlet
     */
    select?: outletSelect<ExtArgs> | null
    /**
     * Omit specific fields from the outlet
     */
    omit?: outletOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: outletInclude<ExtArgs> | null
    /**
     * Filter, which outlet to fetch.
     */
    where?: outletWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of outlets to fetch.
     */
    orderBy?: outletOrderByWithRelationInput | outletOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for outlets.
     */
    cursor?: outletWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` outlets from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` outlets.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of outlets.
     */
    distinct?: OutletScalarFieldEnum | OutletScalarFieldEnum[]
  }

  /**
   * outlet findMany
   */
  export type outletFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the outlet
     */
    select?: outletSelect<ExtArgs> | null
    /**
     * Omit specific fields from the outlet
     */
    omit?: outletOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: outletInclude<ExtArgs> | null
    /**
     * Filter, which outlets to fetch.
     */
    where?: outletWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of outlets to fetch.
     */
    orderBy?: outletOrderByWithRelationInput | outletOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing outlets.
     */
    cursor?: outletWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` outlets from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` outlets.
     */
    skip?: number
    distinct?: OutletScalarFieldEnum | OutletScalarFieldEnum[]
  }

  /**
   * outlet create
   */
  export type outletCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the outlet
     */
    select?: outletSelect<ExtArgs> | null
    /**
     * Omit specific fields from the outlet
     */
    omit?: outletOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: outletInclude<ExtArgs> | null
    /**
     * The data needed to create a outlet.
     */
    data: XOR<outletCreateInput, outletUncheckedCreateInput>
  }

  /**
   * outlet createMany
   */
  export type outletCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many outlets.
     */
    data: outletCreateManyInput | outletCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * outlet update
   */
  export type outletUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the outlet
     */
    select?: outletSelect<ExtArgs> | null
    /**
     * Omit specific fields from the outlet
     */
    omit?: outletOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: outletInclude<ExtArgs> | null
    /**
     * The data needed to update a outlet.
     */
    data: XOR<outletUpdateInput, outletUncheckedUpdateInput>
    /**
     * Choose, which outlet to update.
     */
    where: outletWhereUniqueInput
  }

  /**
   * outlet updateMany
   */
  export type outletUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update outlets.
     */
    data: XOR<outletUpdateManyMutationInput, outletUncheckedUpdateManyInput>
    /**
     * Filter which outlets to update
     */
    where?: outletWhereInput
    /**
     * Limit how many outlets to update.
     */
    limit?: number
  }

  /**
   * outlet upsert
   */
  export type outletUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the outlet
     */
    select?: outletSelect<ExtArgs> | null
    /**
     * Omit specific fields from the outlet
     */
    omit?: outletOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: outletInclude<ExtArgs> | null
    /**
     * The filter to search for the outlet to update in case it exists.
     */
    where: outletWhereUniqueInput
    /**
     * In case the outlet found by the `where` argument doesn't exist, create a new outlet with this data.
     */
    create: XOR<outletCreateInput, outletUncheckedCreateInput>
    /**
     * In case the outlet was found with the provided `where` argument, update it with this data.
     */
    update: XOR<outletUpdateInput, outletUncheckedUpdateInput>
  }

  /**
   * outlet delete
   */
  export type outletDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the outlet
     */
    select?: outletSelect<ExtArgs> | null
    /**
     * Omit specific fields from the outlet
     */
    omit?: outletOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: outletInclude<ExtArgs> | null
    /**
     * Filter which outlet to delete.
     */
    where: outletWhereUniqueInput
  }

  /**
   * outlet deleteMany
   */
  export type outletDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which outlets to delete
     */
    where?: outletWhereInput
    /**
     * Limit how many outlets to delete.
     */
    limit?: number
  }

  /**
   * outlet.childUsers
   */
  export type outlet$childUsersArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OutletChildUser
     */
    select?: OutletChildUserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the OutletChildUser
     */
    omit?: OutletChildUserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OutletChildUserInclude<ExtArgs> | null
    where?: OutletChildUserWhereInput
    orderBy?: OutletChildUserOrderByWithRelationInput | OutletChildUserOrderByWithRelationInput[]
    cursor?: OutletChildUserWhereUniqueInput
    take?: number
    skip?: number
    distinct?: OutletChildUserScalarFieldEnum | OutletChildUserScalarFieldEnum[]
  }

  /**
   * outlet.roles
   */
  export type outlet$rolesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
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
   * outlet.patients
   */
  export type outlet$patientsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
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
   * outlet.doctors
   */
  export type outlet$doctorsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Doctor
     */
    select?: DoctorSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Doctor
     */
    omit?: DoctorOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DoctorInclude<ExtArgs> | null
    where?: DoctorWhereInput
    orderBy?: DoctorOrderByWithRelationInput | DoctorOrderByWithRelationInput[]
    cursor?: DoctorWhereUniqueInput
    take?: number
    skip?: number
    distinct?: DoctorScalarFieldEnum | DoctorScalarFieldEnum[]
  }

  /**
   * outlet without action
   */
  export type outletDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the outlet
     */
    select?: outletSelect<ExtArgs> | null
    /**
     * Omit specific fields from the outlet
     */
    omit?: outletOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: outletInclude<ExtArgs> | null
  }


  /**
   * Model OutletChildUser
   */

  export type AggregateOutletChildUser = {
    _count: OutletChildUserCountAggregateOutputType | null
    _min: OutletChildUserMinAggregateOutputType | null
    _max: OutletChildUserMaxAggregateOutputType | null
  }

  export type OutletChildUserMinAggregateOutputType = {
    id: string | null
    outletId: string | null
    name: string | null
    email: string | null
    phone: string | null
    password: string | null
    isActive: boolean | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type OutletChildUserMaxAggregateOutputType = {
    id: string | null
    outletId: string | null
    name: string | null
    email: string | null
    phone: string | null
    password: string | null
    isActive: boolean | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type OutletChildUserCountAggregateOutputType = {
    id: number
    outletId: number
    name: number
    email: number
    phone: number
    password: number
    isActive: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type OutletChildUserMinAggregateInputType = {
    id?: true
    outletId?: true
    name?: true
    email?: true
    phone?: true
    password?: true
    isActive?: true
    createdAt?: true
    updatedAt?: true
  }

  export type OutletChildUserMaxAggregateInputType = {
    id?: true
    outletId?: true
    name?: true
    email?: true
    phone?: true
    password?: true
    isActive?: true
    createdAt?: true
    updatedAt?: true
  }

  export type OutletChildUserCountAggregateInputType = {
    id?: true
    outletId?: true
    name?: true
    email?: true
    phone?: true
    password?: true
    isActive?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type OutletChildUserAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which OutletChildUser to aggregate.
     */
    where?: OutletChildUserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of OutletChildUsers to fetch.
     */
    orderBy?: OutletChildUserOrderByWithRelationInput | OutletChildUserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: OutletChildUserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` OutletChildUsers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` OutletChildUsers.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned OutletChildUsers
    **/
    _count?: true | OutletChildUserCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: OutletChildUserMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: OutletChildUserMaxAggregateInputType
  }

  export type GetOutletChildUserAggregateType<T extends OutletChildUserAggregateArgs> = {
        [P in keyof T & keyof AggregateOutletChildUser]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateOutletChildUser[P]>
      : GetScalarType<T[P], AggregateOutletChildUser[P]>
  }




  export type OutletChildUserGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: OutletChildUserWhereInput
    orderBy?: OutletChildUserOrderByWithAggregationInput | OutletChildUserOrderByWithAggregationInput[]
    by: OutletChildUserScalarFieldEnum[] | OutletChildUserScalarFieldEnum
    having?: OutletChildUserScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: OutletChildUserCountAggregateInputType | true
    _min?: OutletChildUserMinAggregateInputType
    _max?: OutletChildUserMaxAggregateInputType
  }

  export type OutletChildUserGroupByOutputType = {
    id: string
    outletId: string
    name: string
    email: string
    phone: string | null
    password: string
    isActive: boolean
    createdAt: Date
    updatedAt: Date
    _count: OutletChildUserCountAggregateOutputType | null
    _min: OutletChildUserMinAggregateOutputType | null
    _max: OutletChildUserMaxAggregateOutputType | null
  }

  type GetOutletChildUserGroupByPayload<T extends OutletChildUserGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<OutletChildUserGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof OutletChildUserGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], OutletChildUserGroupByOutputType[P]>
            : GetScalarType<T[P], OutletChildUserGroupByOutputType[P]>
        }
      >
    >


  export type OutletChildUserSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    outletId?: boolean
    name?: boolean
    email?: boolean
    phone?: boolean
    password?: boolean
    isActive?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    outlet?: boolean | outletDefaultArgs<ExtArgs>
    userRoles?: boolean | OutletChildUser$userRolesArgs<ExtArgs>
    _count?: boolean | OutletChildUserCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["outletChildUser"]>



  export type OutletChildUserSelectScalar = {
    id?: boolean
    outletId?: boolean
    name?: boolean
    email?: boolean
    phone?: boolean
    password?: boolean
    isActive?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type OutletChildUserOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "outletId" | "name" | "email" | "phone" | "password" | "isActive" | "createdAt" | "updatedAt", ExtArgs["result"]["outletChildUser"]>
  export type OutletChildUserInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    outlet?: boolean | outletDefaultArgs<ExtArgs>
    userRoles?: boolean | OutletChildUser$userRolesArgs<ExtArgs>
    _count?: boolean | OutletChildUserCountOutputTypeDefaultArgs<ExtArgs>
  }

  export type $OutletChildUserPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "OutletChildUser"
    objects: {
      outlet: Prisma.$outletPayload<ExtArgs>
      userRoles: Prisma.$OutletUserRolePayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      outletId: string
      name: string
      email: string
      phone: string | null
      password: string
      isActive: boolean
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["outletChildUser"]>
    composites: {}
  }

  type OutletChildUserGetPayload<S extends boolean | null | undefined | OutletChildUserDefaultArgs> = $Result.GetResult<Prisma.$OutletChildUserPayload, S>

  type OutletChildUserCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<OutletChildUserFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: OutletChildUserCountAggregateInputType | true
    }

  export interface OutletChildUserDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['OutletChildUser'], meta: { name: 'OutletChildUser' } }
    /**
     * Find zero or one OutletChildUser that matches the filter.
     * @param {OutletChildUserFindUniqueArgs} args - Arguments to find a OutletChildUser
     * @example
     * // Get one OutletChildUser
     * const outletChildUser = await prisma.outletChildUser.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends OutletChildUserFindUniqueArgs>(args: SelectSubset<T, OutletChildUserFindUniqueArgs<ExtArgs>>): Prisma__OutletChildUserClient<$Result.GetResult<Prisma.$OutletChildUserPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one OutletChildUser that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {OutletChildUserFindUniqueOrThrowArgs} args - Arguments to find a OutletChildUser
     * @example
     * // Get one OutletChildUser
     * const outletChildUser = await prisma.outletChildUser.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends OutletChildUserFindUniqueOrThrowArgs>(args: SelectSubset<T, OutletChildUserFindUniqueOrThrowArgs<ExtArgs>>): Prisma__OutletChildUserClient<$Result.GetResult<Prisma.$OutletChildUserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first OutletChildUser that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OutletChildUserFindFirstArgs} args - Arguments to find a OutletChildUser
     * @example
     * // Get one OutletChildUser
     * const outletChildUser = await prisma.outletChildUser.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends OutletChildUserFindFirstArgs>(args?: SelectSubset<T, OutletChildUserFindFirstArgs<ExtArgs>>): Prisma__OutletChildUserClient<$Result.GetResult<Prisma.$OutletChildUserPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first OutletChildUser that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OutletChildUserFindFirstOrThrowArgs} args - Arguments to find a OutletChildUser
     * @example
     * // Get one OutletChildUser
     * const outletChildUser = await prisma.outletChildUser.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends OutletChildUserFindFirstOrThrowArgs>(args?: SelectSubset<T, OutletChildUserFindFirstOrThrowArgs<ExtArgs>>): Prisma__OutletChildUserClient<$Result.GetResult<Prisma.$OutletChildUserPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more OutletChildUsers that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OutletChildUserFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all OutletChildUsers
     * const outletChildUsers = await prisma.outletChildUser.findMany()
     * 
     * // Get first 10 OutletChildUsers
     * const outletChildUsers = await prisma.outletChildUser.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const outletChildUserWithIdOnly = await prisma.outletChildUser.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends OutletChildUserFindManyArgs>(args?: SelectSubset<T, OutletChildUserFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$OutletChildUserPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a OutletChildUser.
     * @param {OutletChildUserCreateArgs} args - Arguments to create a OutletChildUser.
     * @example
     * // Create one OutletChildUser
     * const OutletChildUser = await prisma.outletChildUser.create({
     *   data: {
     *     // ... data to create a OutletChildUser
     *   }
     * })
     * 
     */
    create<T extends OutletChildUserCreateArgs>(args: SelectSubset<T, OutletChildUserCreateArgs<ExtArgs>>): Prisma__OutletChildUserClient<$Result.GetResult<Prisma.$OutletChildUserPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many OutletChildUsers.
     * @param {OutletChildUserCreateManyArgs} args - Arguments to create many OutletChildUsers.
     * @example
     * // Create many OutletChildUsers
     * const outletChildUser = await prisma.outletChildUser.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends OutletChildUserCreateManyArgs>(args?: SelectSubset<T, OutletChildUserCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a OutletChildUser.
     * @param {OutletChildUserDeleteArgs} args - Arguments to delete one OutletChildUser.
     * @example
     * // Delete one OutletChildUser
     * const OutletChildUser = await prisma.outletChildUser.delete({
     *   where: {
     *     // ... filter to delete one OutletChildUser
     *   }
     * })
     * 
     */
    delete<T extends OutletChildUserDeleteArgs>(args: SelectSubset<T, OutletChildUserDeleteArgs<ExtArgs>>): Prisma__OutletChildUserClient<$Result.GetResult<Prisma.$OutletChildUserPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one OutletChildUser.
     * @param {OutletChildUserUpdateArgs} args - Arguments to update one OutletChildUser.
     * @example
     * // Update one OutletChildUser
     * const outletChildUser = await prisma.outletChildUser.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends OutletChildUserUpdateArgs>(args: SelectSubset<T, OutletChildUserUpdateArgs<ExtArgs>>): Prisma__OutletChildUserClient<$Result.GetResult<Prisma.$OutletChildUserPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more OutletChildUsers.
     * @param {OutletChildUserDeleteManyArgs} args - Arguments to filter OutletChildUsers to delete.
     * @example
     * // Delete a few OutletChildUsers
     * const { count } = await prisma.outletChildUser.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends OutletChildUserDeleteManyArgs>(args?: SelectSubset<T, OutletChildUserDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more OutletChildUsers.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OutletChildUserUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many OutletChildUsers
     * const outletChildUser = await prisma.outletChildUser.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends OutletChildUserUpdateManyArgs>(args: SelectSubset<T, OutletChildUserUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one OutletChildUser.
     * @param {OutletChildUserUpsertArgs} args - Arguments to update or create a OutletChildUser.
     * @example
     * // Update or create a OutletChildUser
     * const outletChildUser = await prisma.outletChildUser.upsert({
     *   create: {
     *     // ... data to create a OutletChildUser
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the OutletChildUser we want to update
     *   }
     * })
     */
    upsert<T extends OutletChildUserUpsertArgs>(args: SelectSubset<T, OutletChildUserUpsertArgs<ExtArgs>>): Prisma__OutletChildUserClient<$Result.GetResult<Prisma.$OutletChildUserPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of OutletChildUsers.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OutletChildUserCountArgs} args - Arguments to filter OutletChildUsers to count.
     * @example
     * // Count the number of OutletChildUsers
     * const count = await prisma.outletChildUser.count({
     *   where: {
     *     // ... the filter for the OutletChildUsers we want to count
     *   }
     * })
    **/
    count<T extends OutletChildUserCountArgs>(
      args?: Subset<T, OutletChildUserCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], OutletChildUserCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a OutletChildUser.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OutletChildUserAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends OutletChildUserAggregateArgs>(args: Subset<T, OutletChildUserAggregateArgs>): Prisma.PrismaPromise<GetOutletChildUserAggregateType<T>>

    /**
     * Group by OutletChildUser.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OutletChildUserGroupByArgs} args - Group by arguments.
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
      T extends OutletChildUserGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: OutletChildUserGroupByArgs['orderBy'] }
        : { orderBy?: OutletChildUserGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, OutletChildUserGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetOutletChildUserGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the OutletChildUser model
   */
  readonly fields: OutletChildUserFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for OutletChildUser.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__OutletChildUserClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    outlet<T extends outletDefaultArgs<ExtArgs> = {}>(args?: Subset<T, outletDefaultArgs<ExtArgs>>): Prisma__outletClient<$Result.GetResult<Prisma.$outletPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    userRoles<T extends OutletChildUser$userRolesArgs<ExtArgs> = {}>(args?: Subset<T, OutletChildUser$userRolesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$OutletUserRolePayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the OutletChildUser model
   */
  interface OutletChildUserFieldRefs {
    readonly id: FieldRef<"OutletChildUser", 'String'>
    readonly outletId: FieldRef<"OutletChildUser", 'String'>
    readonly name: FieldRef<"OutletChildUser", 'String'>
    readonly email: FieldRef<"OutletChildUser", 'String'>
    readonly phone: FieldRef<"OutletChildUser", 'String'>
    readonly password: FieldRef<"OutletChildUser", 'String'>
    readonly isActive: FieldRef<"OutletChildUser", 'Boolean'>
    readonly createdAt: FieldRef<"OutletChildUser", 'DateTime'>
    readonly updatedAt: FieldRef<"OutletChildUser", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * OutletChildUser findUnique
   */
  export type OutletChildUserFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OutletChildUser
     */
    select?: OutletChildUserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the OutletChildUser
     */
    omit?: OutletChildUserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OutletChildUserInclude<ExtArgs> | null
    /**
     * Filter, which OutletChildUser to fetch.
     */
    where: OutletChildUserWhereUniqueInput
  }

  /**
   * OutletChildUser findUniqueOrThrow
   */
  export type OutletChildUserFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OutletChildUser
     */
    select?: OutletChildUserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the OutletChildUser
     */
    omit?: OutletChildUserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OutletChildUserInclude<ExtArgs> | null
    /**
     * Filter, which OutletChildUser to fetch.
     */
    where: OutletChildUserWhereUniqueInput
  }

  /**
   * OutletChildUser findFirst
   */
  export type OutletChildUserFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OutletChildUser
     */
    select?: OutletChildUserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the OutletChildUser
     */
    omit?: OutletChildUserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OutletChildUserInclude<ExtArgs> | null
    /**
     * Filter, which OutletChildUser to fetch.
     */
    where?: OutletChildUserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of OutletChildUsers to fetch.
     */
    orderBy?: OutletChildUserOrderByWithRelationInput | OutletChildUserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for OutletChildUsers.
     */
    cursor?: OutletChildUserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` OutletChildUsers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` OutletChildUsers.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of OutletChildUsers.
     */
    distinct?: OutletChildUserScalarFieldEnum | OutletChildUserScalarFieldEnum[]
  }

  /**
   * OutletChildUser findFirstOrThrow
   */
  export type OutletChildUserFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OutletChildUser
     */
    select?: OutletChildUserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the OutletChildUser
     */
    omit?: OutletChildUserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OutletChildUserInclude<ExtArgs> | null
    /**
     * Filter, which OutletChildUser to fetch.
     */
    where?: OutletChildUserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of OutletChildUsers to fetch.
     */
    orderBy?: OutletChildUserOrderByWithRelationInput | OutletChildUserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for OutletChildUsers.
     */
    cursor?: OutletChildUserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` OutletChildUsers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` OutletChildUsers.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of OutletChildUsers.
     */
    distinct?: OutletChildUserScalarFieldEnum | OutletChildUserScalarFieldEnum[]
  }

  /**
   * OutletChildUser findMany
   */
  export type OutletChildUserFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OutletChildUser
     */
    select?: OutletChildUserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the OutletChildUser
     */
    omit?: OutletChildUserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OutletChildUserInclude<ExtArgs> | null
    /**
     * Filter, which OutletChildUsers to fetch.
     */
    where?: OutletChildUserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of OutletChildUsers to fetch.
     */
    orderBy?: OutletChildUserOrderByWithRelationInput | OutletChildUserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing OutletChildUsers.
     */
    cursor?: OutletChildUserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` OutletChildUsers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` OutletChildUsers.
     */
    skip?: number
    distinct?: OutletChildUserScalarFieldEnum | OutletChildUserScalarFieldEnum[]
  }

  /**
   * OutletChildUser create
   */
  export type OutletChildUserCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OutletChildUser
     */
    select?: OutletChildUserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the OutletChildUser
     */
    omit?: OutletChildUserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OutletChildUserInclude<ExtArgs> | null
    /**
     * The data needed to create a OutletChildUser.
     */
    data: XOR<OutletChildUserCreateInput, OutletChildUserUncheckedCreateInput>
  }

  /**
   * OutletChildUser createMany
   */
  export type OutletChildUserCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many OutletChildUsers.
     */
    data: OutletChildUserCreateManyInput | OutletChildUserCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * OutletChildUser update
   */
  export type OutletChildUserUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OutletChildUser
     */
    select?: OutletChildUserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the OutletChildUser
     */
    omit?: OutletChildUserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OutletChildUserInclude<ExtArgs> | null
    /**
     * The data needed to update a OutletChildUser.
     */
    data: XOR<OutletChildUserUpdateInput, OutletChildUserUncheckedUpdateInput>
    /**
     * Choose, which OutletChildUser to update.
     */
    where: OutletChildUserWhereUniqueInput
  }

  /**
   * OutletChildUser updateMany
   */
  export type OutletChildUserUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update OutletChildUsers.
     */
    data: XOR<OutletChildUserUpdateManyMutationInput, OutletChildUserUncheckedUpdateManyInput>
    /**
     * Filter which OutletChildUsers to update
     */
    where?: OutletChildUserWhereInput
    /**
     * Limit how many OutletChildUsers to update.
     */
    limit?: number
  }

  /**
   * OutletChildUser upsert
   */
  export type OutletChildUserUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OutletChildUser
     */
    select?: OutletChildUserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the OutletChildUser
     */
    omit?: OutletChildUserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OutletChildUserInclude<ExtArgs> | null
    /**
     * The filter to search for the OutletChildUser to update in case it exists.
     */
    where: OutletChildUserWhereUniqueInput
    /**
     * In case the OutletChildUser found by the `where` argument doesn't exist, create a new OutletChildUser with this data.
     */
    create: XOR<OutletChildUserCreateInput, OutletChildUserUncheckedCreateInput>
    /**
     * In case the OutletChildUser was found with the provided `where` argument, update it with this data.
     */
    update: XOR<OutletChildUserUpdateInput, OutletChildUserUncheckedUpdateInput>
  }

  /**
   * OutletChildUser delete
   */
  export type OutletChildUserDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OutletChildUser
     */
    select?: OutletChildUserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the OutletChildUser
     */
    omit?: OutletChildUserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OutletChildUserInclude<ExtArgs> | null
    /**
     * Filter which OutletChildUser to delete.
     */
    where: OutletChildUserWhereUniqueInput
  }

  /**
   * OutletChildUser deleteMany
   */
  export type OutletChildUserDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which OutletChildUsers to delete
     */
    where?: OutletChildUserWhereInput
    /**
     * Limit how many OutletChildUsers to delete.
     */
    limit?: number
  }

  /**
   * OutletChildUser.userRoles
   */
  export type OutletChildUser$userRolesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OutletUserRole
     */
    select?: OutletUserRoleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the OutletUserRole
     */
    omit?: OutletUserRoleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OutletUserRoleInclude<ExtArgs> | null
    where?: OutletUserRoleWhereInput
    orderBy?: OutletUserRoleOrderByWithRelationInput | OutletUserRoleOrderByWithRelationInput[]
    cursor?: OutletUserRoleWhereUniqueInput
    take?: number
    skip?: number
    distinct?: OutletUserRoleScalarFieldEnum | OutletUserRoleScalarFieldEnum[]
  }

  /**
   * OutletChildUser without action
   */
  export type OutletChildUserDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OutletChildUser
     */
    select?: OutletChildUserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the OutletChildUser
     */
    omit?: OutletChildUserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OutletChildUserInclude<ExtArgs> | null
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
    outletId: string | null
    superAdminId: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type RoleMaxAggregateOutputType = {
    id: string | null
    name: string | null
    ownerType: $Enums.RoleOwnerType | null
    outletId: string | null
    superAdminId: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type RoleCountAggregateOutputType = {
    id: number
    name: number
    ownerType: number
    outletId: number
    superAdminId: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type RoleMinAggregateInputType = {
    id?: true
    name?: true
    ownerType?: true
    outletId?: true
    superAdminId?: true
    createdAt?: true
    updatedAt?: true
  }

  export type RoleMaxAggregateInputType = {
    id?: true
    name?: true
    ownerType?: true
    outletId?: true
    superAdminId?: true
    createdAt?: true
    updatedAt?: true
  }

  export type RoleCountAggregateInputType = {
    id?: true
    name?: true
    ownerType?: true
    outletId?: true
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
    outletId: string | null
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
    outletId?: boolean
    superAdminId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    outlet?: boolean | Role$outletArgs<ExtArgs>
    superAdmin?: boolean | Role$superAdminArgs<ExtArgs>
    rolePermissions?: boolean | Role$rolePermissionsArgs<ExtArgs>
    OutletUserRoles?: boolean | Role$OutletUserRolesArgs<ExtArgs>
    superAdminUserRoles?: boolean | Role$superAdminUserRolesArgs<ExtArgs>
    _count?: boolean | RoleCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["role"]>



  export type RoleSelectScalar = {
    id?: boolean
    name?: boolean
    ownerType?: boolean
    outletId?: boolean
    superAdminId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type RoleOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "name" | "ownerType" | "outletId" | "superAdminId" | "createdAt" | "updatedAt", ExtArgs["result"]["role"]>
  export type RoleInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    outlet?: boolean | Role$outletArgs<ExtArgs>
    superAdmin?: boolean | Role$superAdminArgs<ExtArgs>
    rolePermissions?: boolean | Role$rolePermissionsArgs<ExtArgs>
    OutletUserRoles?: boolean | Role$OutletUserRolesArgs<ExtArgs>
    superAdminUserRoles?: boolean | Role$superAdminUserRolesArgs<ExtArgs>
    _count?: boolean | RoleCountOutputTypeDefaultArgs<ExtArgs>
  }

  export type $RolePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Role"
    objects: {
      outlet: Prisma.$outletPayload<ExtArgs> | null
      superAdmin: Prisma.$SuperAdminsPayload<ExtArgs> | null
      rolePermissions: Prisma.$RolePermissionPayload<ExtArgs>[]
      OutletUserRoles: Prisma.$OutletUserRolePayload<ExtArgs>[]
      superAdminUserRoles: Prisma.$SuperAdminUserRolePayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      name: string
      ownerType: $Enums.RoleOwnerType
      outletId: string | null
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
    outlet<T extends Role$outletArgs<ExtArgs> = {}>(args?: Subset<T, Role$outletArgs<ExtArgs>>): Prisma__outletClient<$Result.GetResult<Prisma.$outletPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    superAdmin<T extends Role$superAdminArgs<ExtArgs> = {}>(args?: Subset<T, Role$superAdminArgs<ExtArgs>>): Prisma__SuperAdminsClient<$Result.GetResult<Prisma.$SuperAdminsPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    rolePermissions<T extends Role$rolePermissionsArgs<ExtArgs> = {}>(args?: Subset<T, Role$rolePermissionsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$RolePermissionPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    OutletUserRoles<T extends Role$OutletUserRolesArgs<ExtArgs> = {}>(args?: Subset<T, Role$OutletUserRolesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$OutletUserRolePayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
    readonly outletId: FieldRef<"Role", 'String'>
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
   * Role.outlet
   */
  export type Role$outletArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the outlet
     */
    select?: outletSelect<ExtArgs> | null
    /**
     * Omit specific fields from the outlet
     */
    omit?: outletOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: outletInclude<ExtArgs> | null
    where?: outletWhereInput
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
   * Role.OutletUserRoles
   */
  export type Role$OutletUserRolesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OutletUserRole
     */
    select?: OutletUserRoleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the OutletUserRole
     */
    omit?: OutletUserRoleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OutletUserRoleInclude<ExtArgs> | null
    where?: OutletUserRoleWhereInput
    orderBy?: OutletUserRoleOrderByWithRelationInput | OutletUserRoleOrderByWithRelationInput[]
    cursor?: OutletUserRoleWhereUniqueInput
    take?: number
    skip?: number
    distinct?: OutletUserRoleScalarFieldEnum | OutletUserRoleScalarFieldEnum[]
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
   * Model OutletUserRole
   */

  export type AggregateOutletUserRole = {
    _count: OutletUserRoleCountAggregateOutputType | null
    _min: OutletUserRoleMinAggregateOutputType | null
    _max: OutletUserRoleMaxAggregateOutputType | null
  }

  export type OutletUserRoleMinAggregateOutputType = {
    id: string | null
    OutletChildUserId: string | null
    roleId: string | null
    createdAt: Date | null
  }

  export type OutletUserRoleMaxAggregateOutputType = {
    id: string | null
    OutletChildUserId: string | null
    roleId: string | null
    createdAt: Date | null
  }

  export type OutletUserRoleCountAggregateOutputType = {
    id: number
    OutletChildUserId: number
    roleId: number
    createdAt: number
    _all: number
  }


  export type OutletUserRoleMinAggregateInputType = {
    id?: true
    OutletChildUserId?: true
    roleId?: true
    createdAt?: true
  }

  export type OutletUserRoleMaxAggregateInputType = {
    id?: true
    OutletChildUserId?: true
    roleId?: true
    createdAt?: true
  }

  export type OutletUserRoleCountAggregateInputType = {
    id?: true
    OutletChildUserId?: true
    roleId?: true
    createdAt?: true
    _all?: true
  }

  export type OutletUserRoleAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which OutletUserRole to aggregate.
     */
    where?: OutletUserRoleWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of OutletUserRoles to fetch.
     */
    orderBy?: OutletUserRoleOrderByWithRelationInput | OutletUserRoleOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: OutletUserRoleWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` OutletUserRoles from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` OutletUserRoles.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned OutletUserRoles
    **/
    _count?: true | OutletUserRoleCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: OutletUserRoleMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: OutletUserRoleMaxAggregateInputType
  }

  export type GetOutletUserRoleAggregateType<T extends OutletUserRoleAggregateArgs> = {
        [P in keyof T & keyof AggregateOutletUserRole]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateOutletUserRole[P]>
      : GetScalarType<T[P], AggregateOutletUserRole[P]>
  }




  export type OutletUserRoleGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: OutletUserRoleWhereInput
    orderBy?: OutletUserRoleOrderByWithAggregationInput | OutletUserRoleOrderByWithAggregationInput[]
    by: OutletUserRoleScalarFieldEnum[] | OutletUserRoleScalarFieldEnum
    having?: OutletUserRoleScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: OutletUserRoleCountAggregateInputType | true
    _min?: OutletUserRoleMinAggregateInputType
    _max?: OutletUserRoleMaxAggregateInputType
  }

  export type OutletUserRoleGroupByOutputType = {
    id: string
    OutletChildUserId: string
    roleId: string
    createdAt: Date
    _count: OutletUserRoleCountAggregateOutputType | null
    _min: OutletUserRoleMinAggregateOutputType | null
    _max: OutletUserRoleMaxAggregateOutputType | null
  }

  type GetOutletUserRoleGroupByPayload<T extends OutletUserRoleGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<OutletUserRoleGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof OutletUserRoleGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], OutletUserRoleGroupByOutputType[P]>
            : GetScalarType<T[P], OutletUserRoleGroupByOutputType[P]>
        }
      >
    >


  export type OutletUserRoleSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    OutletChildUserId?: boolean
    roleId?: boolean
    createdAt?: boolean
    OutletChildUser?: boolean | OutletChildUserDefaultArgs<ExtArgs>
    role?: boolean | RoleDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["outletUserRole"]>



  export type OutletUserRoleSelectScalar = {
    id?: boolean
    OutletChildUserId?: boolean
    roleId?: boolean
    createdAt?: boolean
  }

  export type OutletUserRoleOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "OutletChildUserId" | "roleId" | "createdAt", ExtArgs["result"]["outletUserRole"]>
  export type OutletUserRoleInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    OutletChildUser?: boolean | OutletChildUserDefaultArgs<ExtArgs>
    role?: boolean | RoleDefaultArgs<ExtArgs>
  }

  export type $OutletUserRolePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "OutletUserRole"
    objects: {
      OutletChildUser: Prisma.$OutletChildUserPayload<ExtArgs>
      role: Prisma.$RolePayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      OutletChildUserId: string
      roleId: string
      createdAt: Date
    }, ExtArgs["result"]["outletUserRole"]>
    composites: {}
  }

  type OutletUserRoleGetPayload<S extends boolean | null | undefined | OutletUserRoleDefaultArgs> = $Result.GetResult<Prisma.$OutletUserRolePayload, S>

  type OutletUserRoleCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<OutletUserRoleFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: OutletUserRoleCountAggregateInputType | true
    }

  export interface OutletUserRoleDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['OutletUserRole'], meta: { name: 'OutletUserRole' } }
    /**
     * Find zero or one OutletUserRole that matches the filter.
     * @param {OutletUserRoleFindUniqueArgs} args - Arguments to find a OutletUserRole
     * @example
     * // Get one OutletUserRole
     * const outletUserRole = await prisma.outletUserRole.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends OutletUserRoleFindUniqueArgs>(args: SelectSubset<T, OutletUserRoleFindUniqueArgs<ExtArgs>>): Prisma__OutletUserRoleClient<$Result.GetResult<Prisma.$OutletUserRolePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one OutletUserRole that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {OutletUserRoleFindUniqueOrThrowArgs} args - Arguments to find a OutletUserRole
     * @example
     * // Get one OutletUserRole
     * const outletUserRole = await prisma.outletUserRole.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends OutletUserRoleFindUniqueOrThrowArgs>(args: SelectSubset<T, OutletUserRoleFindUniqueOrThrowArgs<ExtArgs>>): Prisma__OutletUserRoleClient<$Result.GetResult<Prisma.$OutletUserRolePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first OutletUserRole that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OutletUserRoleFindFirstArgs} args - Arguments to find a OutletUserRole
     * @example
     * // Get one OutletUserRole
     * const outletUserRole = await prisma.outletUserRole.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends OutletUserRoleFindFirstArgs>(args?: SelectSubset<T, OutletUserRoleFindFirstArgs<ExtArgs>>): Prisma__OutletUserRoleClient<$Result.GetResult<Prisma.$OutletUserRolePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first OutletUserRole that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OutletUserRoleFindFirstOrThrowArgs} args - Arguments to find a OutletUserRole
     * @example
     * // Get one OutletUserRole
     * const outletUserRole = await prisma.outletUserRole.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends OutletUserRoleFindFirstOrThrowArgs>(args?: SelectSubset<T, OutletUserRoleFindFirstOrThrowArgs<ExtArgs>>): Prisma__OutletUserRoleClient<$Result.GetResult<Prisma.$OutletUserRolePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more OutletUserRoles that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OutletUserRoleFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all OutletUserRoles
     * const outletUserRoles = await prisma.outletUserRole.findMany()
     * 
     * // Get first 10 OutletUserRoles
     * const outletUserRoles = await prisma.outletUserRole.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const outletUserRoleWithIdOnly = await prisma.outletUserRole.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends OutletUserRoleFindManyArgs>(args?: SelectSubset<T, OutletUserRoleFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$OutletUserRolePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a OutletUserRole.
     * @param {OutletUserRoleCreateArgs} args - Arguments to create a OutletUserRole.
     * @example
     * // Create one OutletUserRole
     * const OutletUserRole = await prisma.outletUserRole.create({
     *   data: {
     *     // ... data to create a OutletUserRole
     *   }
     * })
     * 
     */
    create<T extends OutletUserRoleCreateArgs>(args: SelectSubset<T, OutletUserRoleCreateArgs<ExtArgs>>): Prisma__OutletUserRoleClient<$Result.GetResult<Prisma.$OutletUserRolePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many OutletUserRoles.
     * @param {OutletUserRoleCreateManyArgs} args - Arguments to create many OutletUserRoles.
     * @example
     * // Create many OutletUserRoles
     * const outletUserRole = await prisma.outletUserRole.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends OutletUserRoleCreateManyArgs>(args?: SelectSubset<T, OutletUserRoleCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a OutletUserRole.
     * @param {OutletUserRoleDeleteArgs} args - Arguments to delete one OutletUserRole.
     * @example
     * // Delete one OutletUserRole
     * const OutletUserRole = await prisma.outletUserRole.delete({
     *   where: {
     *     // ... filter to delete one OutletUserRole
     *   }
     * })
     * 
     */
    delete<T extends OutletUserRoleDeleteArgs>(args: SelectSubset<T, OutletUserRoleDeleteArgs<ExtArgs>>): Prisma__OutletUserRoleClient<$Result.GetResult<Prisma.$OutletUserRolePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one OutletUserRole.
     * @param {OutletUserRoleUpdateArgs} args - Arguments to update one OutletUserRole.
     * @example
     * // Update one OutletUserRole
     * const outletUserRole = await prisma.outletUserRole.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends OutletUserRoleUpdateArgs>(args: SelectSubset<T, OutletUserRoleUpdateArgs<ExtArgs>>): Prisma__OutletUserRoleClient<$Result.GetResult<Prisma.$OutletUserRolePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more OutletUserRoles.
     * @param {OutletUserRoleDeleteManyArgs} args - Arguments to filter OutletUserRoles to delete.
     * @example
     * // Delete a few OutletUserRoles
     * const { count } = await prisma.outletUserRole.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends OutletUserRoleDeleteManyArgs>(args?: SelectSubset<T, OutletUserRoleDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more OutletUserRoles.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OutletUserRoleUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many OutletUserRoles
     * const outletUserRole = await prisma.outletUserRole.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends OutletUserRoleUpdateManyArgs>(args: SelectSubset<T, OutletUserRoleUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one OutletUserRole.
     * @param {OutletUserRoleUpsertArgs} args - Arguments to update or create a OutletUserRole.
     * @example
     * // Update or create a OutletUserRole
     * const outletUserRole = await prisma.outletUserRole.upsert({
     *   create: {
     *     // ... data to create a OutletUserRole
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the OutletUserRole we want to update
     *   }
     * })
     */
    upsert<T extends OutletUserRoleUpsertArgs>(args: SelectSubset<T, OutletUserRoleUpsertArgs<ExtArgs>>): Prisma__OutletUserRoleClient<$Result.GetResult<Prisma.$OutletUserRolePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of OutletUserRoles.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OutletUserRoleCountArgs} args - Arguments to filter OutletUserRoles to count.
     * @example
     * // Count the number of OutletUserRoles
     * const count = await prisma.outletUserRole.count({
     *   where: {
     *     // ... the filter for the OutletUserRoles we want to count
     *   }
     * })
    **/
    count<T extends OutletUserRoleCountArgs>(
      args?: Subset<T, OutletUserRoleCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], OutletUserRoleCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a OutletUserRole.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OutletUserRoleAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends OutletUserRoleAggregateArgs>(args: Subset<T, OutletUserRoleAggregateArgs>): Prisma.PrismaPromise<GetOutletUserRoleAggregateType<T>>

    /**
     * Group by OutletUserRole.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OutletUserRoleGroupByArgs} args - Group by arguments.
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
      T extends OutletUserRoleGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: OutletUserRoleGroupByArgs['orderBy'] }
        : { orderBy?: OutletUserRoleGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, OutletUserRoleGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetOutletUserRoleGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the OutletUserRole model
   */
  readonly fields: OutletUserRoleFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for OutletUserRole.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__OutletUserRoleClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    OutletChildUser<T extends OutletChildUserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, OutletChildUserDefaultArgs<ExtArgs>>): Prisma__OutletChildUserClient<$Result.GetResult<Prisma.$OutletChildUserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the OutletUserRole model
   */
  interface OutletUserRoleFieldRefs {
    readonly id: FieldRef<"OutletUserRole", 'String'>
    readonly OutletChildUserId: FieldRef<"OutletUserRole", 'String'>
    readonly roleId: FieldRef<"OutletUserRole", 'String'>
    readonly createdAt: FieldRef<"OutletUserRole", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * OutletUserRole findUnique
   */
  export type OutletUserRoleFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OutletUserRole
     */
    select?: OutletUserRoleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the OutletUserRole
     */
    omit?: OutletUserRoleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OutletUserRoleInclude<ExtArgs> | null
    /**
     * Filter, which OutletUserRole to fetch.
     */
    where: OutletUserRoleWhereUniqueInput
  }

  /**
   * OutletUserRole findUniqueOrThrow
   */
  export type OutletUserRoleFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OutletUserRole
     */
    select?: OutletUserRoleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the OutletUserRole
     */
    omit?: OutletUserRoleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OutletUserRoleInclude<ExtArgs> | null
    /**
     * Filter, which OutletUserRole to fetch.
     */
    where: OutletUserRoleWhereUniqueInput
  }

  /**
   * OutletUserRole findFirst
   */
  export type OutletUserRoleFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OutletUserRole
     */
    select?: OutletUserRoleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the OutletUserRole
     */
    omit?: OutletUserRoleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OutletUserRoleInclude<ExtArgs> | null
    /**
     * Filter, which OutletUserRole to fetch.
     */
    where?: OutletUserRoleWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of OutletUserRoles to fetch.
     */
    orderBy?: OutletUserRoleOrderByWithRelationInput | OutletUserRoleOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for OutletUserRoles.
     */
    cursor?: OutletUserRoleWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` OutletUserRoles from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` OutletUserRoles.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of OutletUserRoles.
     */
    distinct?: OutletUserRoleScalarFieldEnum | OutletUserRoleScalarFieldEnum[]
  }

  /**
   * OutletUserRole findFirstOrThrow
   */
  export type OutletUserRoleFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OutletUserRole
     */
    select?: OutletUserRoleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the OutletUserRole
     */
    omit?: OutletUserRoleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OutletUserRoleInclude<ExtArgs> | null
    /**
     * Filter, which OutletUserRole to fetch.
     */
    where?: OutletUserRoleWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of OutletUserRoles to fetch.
     */
    orderBy?: OutletUserRoleOrderByWithRelationInput | OutletUserRoleOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for OutletUserRoles.
     */
    cursor?: OutletUserRoleWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` OutletUserRoles from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` OutletUserRoles.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of OutletUserRoles.
     */
    distinct?: OutletUserRoleScalarFieldEnum | OutletUserRoleScalarFieldEnum[]
  }

  /**
   * OutletUserRole findMany
   */
  export type OutletUserRoleFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OutletUserRole
     */
    select?: OutletUserRoleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the OutletUserRole
     */
    omit?: OutletUserRoleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OutletUserRoleInclude<ExtArgs> | null
    /**
     * Filter, which OutletUserRoles to fetch.
     */
    where?: OutletUserRoleWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of OutletUserRoles to fetch.
     */
    orderBy?: OutletUserRoleOrderByWithRelationInput | OutletUserRoleOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing OutletUserRoles.
     */
    cursor?: OutletUserRoleWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` OutletUserRoles from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` OutletUserRoles.
     */
    skip?: number
    distinct?: OutletUserRoleScalarFieldEnum | OutletUserRoleScalarFieldEnum[]
  }

  /**
   * OutletUserRole create
   */
  export type OutletUserRoleCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OutletUserRole
     */
    select?: OutletUserRoleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the OutletUserRole
     */
    omit?: OutletUserRoleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OutletUserRoleInclude<ExtArgs> | null
    /**
     * The data needed to create a OutletUserRole.
     */
    data: XOR<OutletUserRoleCreateInput, OutletUserRoleUncheckedCreateInput>
  }

  /**
   * OutletUserRole createMany
   */
  export type OutletUserRoleCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many OutletUserRoles.
     */
    data: OutletUserRoleCreateManyInput | OutletUserRoleCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * OutletUserRole update
   */
  export type OutletUserRoleUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OutletUserRole
     */
    select?: OutletUserRoleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the OutletUserRole
     */
    omit?: OutletUserRoleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OutletUserRoleInclude<ExtArgs> | null
    /**
     * The data needed to update a OutletUserRole.
     */
    data: XOR<OutletUserRoleUpdateInput, OutletUserRoleUncheckedUpdateInput>
    /**
     * Choose, which OutletUserRole to update.
     */
    where: OutletUserRoleWhereUniqueInput
  }

  /**
   * OutletUserRole updateMany
   */
  export type OutletUserRoleUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update OutletUserRoles.
     */
    data: XOR<OutletUserRoleUpdateManyMutationInput, OutletUserRoleUncheckedUpdateManyInput>
    /**
     * Filter which OutletUserRoles to update
     */
    where?: OutletUserRoleWhereInput
    /**
     * Limit how many OutletUserRoles to update.
     */
    limit?: number
  }

  /**
   * OutletUserRole upsert
   */
  export type OutletUserRoleUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OutletUserRole
     */
    select?: OutletUserRoleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the OutletUserRole
     */
    omit?: OutletUserRoleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OutletUserRoleInclude<ExtArgs> | null
    /**
     * The filter to search for the OutletUserRole to update in case it exists.
     */
    where: OutletUserRoleWhereUniqueInput
    /**
     * In case the OutletUserRole found by the `where` argument doesn't exist, create a new OutletUserRole with this data.
     */
    create: XOR<OutletUserRoleCreateInput, OutletUserRoleUncheckedCreateInput>
    /**
     * In case the OutletUserRole was found with the provided `where` argument, update it with this data.
     */
    update: XOR<OutletUserRoleUpdateInput, OutletUserRoleUncheckedUpdateInput>
  }

  /**
   * OutletUserRole delete
   */
  export type OutletUserRoleDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OutletUserRole
     */
    select?: OutletUserRoleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the OutletUserRole
     */
    omit?: OutletUserRoleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OutletUserRoleInclude<ExtArgs> | null
    /**
     * Filter which OutletUserRole to delete.
     */
    where: OutletUserRoleWhereUniqueInput
  }

  /**
   * OutletUserRole deleteMany
   */
  export type OutletUserRoleDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which OutletUserRoles to delete
     */
    where?: OutletUserRoleWhereInput
    /**
     * Limit how many OutletUserRoles to delete.
     */
    limit?: number
  }

  /**
   * OutletUserRole without action
   */
  export type OutletUserRoleDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OutletUserRole
     */
    select?: OutletUserRoleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the OutletUserRole
     */
    omit?: OutletUserRoleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OutletUserRoleInclude<ExtArgs> | null
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
    referenceName: 'referenceName',
    fullName: 'fullName',
    mobileNumber: 'mobileNumber',
    email: 'email',
    password: 'password',
    dateOfBirth: 'dateOfBirth',
    age: 'age',
    bloodGroup: 'bloodGroup',
    gender: 'gender',
    address: 'address',
    emergencyContact: 'emergencyContact',
    status: 'status',
    otp: 'otp',
    otpExpiresAt: 'otpExpiresAt',
    outletId: 'outletId',
    isActive: 'isActive',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type PatientScalarFieldEnum = (typeof PatientScalarFieldEnum)[keyof typeof PatientScalarFieldEnum]


  export const DoctorScalarFieldEnum: {
    id: 'id',
    doctorCode: 'doctorCode',
    fullName: 'fullName',
    mobile: 'mobile',
    email: 'email',
    password: 'password',
    bmdcNumber: 'bmdcNumber',
    subSpecialization: 'subSpecialization',
    qualification: 'qualification',
    experienceYears: 'experienceYears',
    currentDesignation: 'currentDesignation',
    consultationFee: 'consultationFee',
    status: 'status',
    onlineStatus: 'onlineStatus',
    outletId: 'outletId',
    specializationId: 'specializationId',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type DoctorScalarFieldEnum = (typeof DoctorScalarFieldEnum)[keyof typeof DoctorScalarFieldEnum]


  export const DoctorSpecializationScalarFieldEnum: {
    id: 'id',
    name: 'name',
    status: 'status'
  };

  export type DoctorSpecializationScalarFieldEnum = (typeof DoctorSpecializationScalarFieldEnum)[keyof typeof DoctorSpecializationScalarFieldEnum]


  export const DoctorDocumentScalarFieldEnum: {
    id: 'id',
    documentType: 'documentType',
    fileUrl: 'fileUrl',
    verificationStatus: 'verificationStatus',
    doctorId: 'doctorId',
    createdAt: 'createdAt'
  };

  export type DoctorDocumentScalarFieldEnum = (typeof DoctorDocumentScalarFieldEnum)[keyof typeof DoctorDocumentScalarFieldEnum]


  export const DoctorScheduleScalarFieldEnum: {
    id: 'id',
    doctorId: 'doctorId',
    dayName: 'dayName',
    startTime: 'startTime',
    endTime: 'endTime',
    slotDuration: 'slotDuration',
    status: 'status'
  };

  export type DoctorScheduleScalarFieldEnum = (typeof DoctorScheduleScalarFieldEnum)[keyof typeof DoctorScheduleScalarFieldEnum]


  export const OutletScalarFieldEnum: {
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

  export type OutletScalarFieldEnum = (typeof OutletScalarFieldEnum)[keyof typeof OutletScalarFieldEnum]


  export const OutletChildUserScalarFieldEnum: {
    id: 'id',
    outletId: 'outletId',
    name: 'name',
    email: 'email',
    phone: 'phone',
    password: 'password',
    isActive: 'isActive',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type OutletChildUserScalarFieldEnum = (typeof OutletChildUserScalarFieldEnum)[keyof typeof OutletChildUserScalarFieldEnum]


  export const RoleScalarFieldEnum: {
    id: 'id',
    name: 'name',
    ownerType: 'ownerType',
    outletId: 'outletId',
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


  export const OutletUserRoleScalarFieldEnum: {
    id: 'id',
    OutletChildUserId: 'OutletChildUserId',
    roleId: 'roleId',
    createdAt: 'createdAt'
  };

  export type OutletUserRoleScalarFieldEnum = (typeof OutletUserRoleScalarFieldEnum)[keyof typeof OutletUserRoleScalarFieldEnum]


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
    referenceName: 'referenceName',
    fullName: 'fullName',
    mobileNumber: 'mobileNumber',
    email: 'email',
    password: 'password',
    bloodGroup: 'bloodGroup',
    gender: 'gender',
    address: 'address',
    emergencyContact: 'emergencyContact',
    otp: 'otp',
    outletId: 'outletId'
  };

  export type PatientOrderByRelevanceFieldEnum = (typeof PatientOrderByRelevanceFieldEnum)[keyof typeof PatientOrderByRelevanceFieldEnum]


  export const DoctorOrderByRelevanceFieldEnum: {
    id: 'id',
    doctorCode: 'doctorCode',
    fullName: 'fullName',
    mobile: 'mobile',
    email: 'email',
    password: 'password',
    bmdcNumber: 'bmdcNumber',
    subSpecialization: 'subSpecialization',
    qualification: 'qualification',
    currentDesignation: 'currentDesignation',
    outletId: 'outletId',
    specializationId: 'specializationId'
  };

  export type DoctorOrderByRelevanceFieldEnum = (typeof DoctorOrderByRelevanceFieldEnum)[keyof typeof DoctorOrderByRelevanceFieldEnum]


  export const DoctorSpecializationOrderByRelevanceFieldEnum: {
    id: 'id',
    name: 'name'
  };

  export type DoctorSpecializationOrderByRelevanceFieldEnum = (typeof DoctorSpecializationOrderByRelevanceFieldEnum)[keyof typeof DoctorSpecializationOrderByRelevanceFieldEnum]


  export const DoctorDocumentOrderByRelevanceFieldEnum: {
    id: 'id',
    fileUrl: 'fileUrl',
    doctorId: 'doctorId'
  };

  export type DoctorDocumentOrderByRelevanceFieldEnum = (typeof DoctorDocumentOrderByRelevanceFieldEnum)[keyof typeof DoctorDocumentOrderByRelevanceFieldEnum]


  export const DoctorScheduleOrderByRelevanceFieldEnum: {
    id: 'id',
    doctorId: 'doctorId',
    dayName: 'dayName',
    startTime: 'startTime',
    endTime: 'endTime'
  };

  export type DoctorScheduleOrderByRelevanceFieldEnum = (typeof DoctorScheduleOrderByRelevanceFieldEnum)[keyof typeof DoctorScheduleOrderByRelevanceFieldEnum]


  export const outletOrderByRelevanceFieldEnum: {
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

  export type outletOrderByRelevanceFieldEnum = (typeof outletOrderByRelevanceFieldEnum)[keyof typeof outletOrderByRelevanceFieldEnum]


  export const OutletChildUserOrderByRelevanceFieldEnum: {
    id: 'id',
    outletId: 'outletId',
    name: 'name',
    email: 'email',
    phone: 'phone',
    password: 'password'
  };

  export type OutletChildUserOrderByRelevanceFieldEnum = (typeof OutletChildUserOrderByRelevanceFieldEnum)[keyof typeof OutletChildUserOrderByRelevanceFieldEnum]


  export const RoleOrderByRelevanceFieldEnum: {
    id: 'id',
    name: 'name',
    outletId: 'outletId',
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


  export const OutletUserRoleOrderByRelevanceFieldEnum: {
    id: 'id',
    OutletChildUserId: 'OutletChildUserId',
    roleId: 'roleId'
  };

  export type OutletUserRoleOrderByRelevanceFieldEnum = (typeof OutletUserRoleOrderByRelevanceFieldEnum)[keyof typeof OutletUserRoleOrderByRelevanceFieldEnum]


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
   * Reference to a field of type 'PatientStatus'
   */
  export type EnumPatientStatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'PatientStatus'>
    


  /**
   * Reference to a field of type 'Decimal'
   */
  export type DecimalFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Decimal'>
    


  /**
   * Reference to a field of type 'DoctorStatus'
   */
  export type EnumDoctorStatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DoctorStatus'>
    


  /**
   * Reference to a field of type 'DoctorOnlineStatus'
   */
  export type EnumDoctorOnlineStatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DoctorOnlineStatus'>
    


  /**
   * Reference to a field of type 'DocumentType'
   */
  export type EnumDocumentTypeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DocumentType'>
    


  /**
   * Reference to a field of type 'VerificationStatus'
   */
  export type EnumVerificationStatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'VerificationStatus'>
    


  /**
   * Reference to a field of type 'ScheduleStatus'
   */
  export type EnumScheduleStatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'ScheduleStatus'>
    


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
    referenceName?: StringNullableFilter<"Patient"> | string | null
    fullName?: StringFilter<"Patient"> | string
    mobileNumber?: StringFilter<"Patient"> | string
    email?: StringNullableFilter<"Patient"> | string | null
    password?: StringFilter<"Patient"> | string
    dateOfBirth?: DateTimeNullableFilter<"Patient"> | Date | string | null
    age?: IntNullableFilter<"Patient"> | number | null
    bloodGroup?: StringNullableFilter<"Patient"> | string | null
    gender?: StringNullableFilter<"Patient"> | string | null
    address?: StringNullableFilter<"Patient"> | string | null
    emergencyContact?: StringNullableFilter<"Patient"> | string | null
    status?: EnumPatientStatusFilter<"Patient"> | $Enums.PatientStatus
    otp?: StringNullableFilter<"Patient"> | string | null
    otpExpiresAt?: DateTimeNullableFilter<"Patient"> | Date | string | null
    outletId?: StringNullableFilter<"Patient"> | string | null
    isActive?: BoolFilter<"Patient"> | boolean
    createdAt?: DateTimeFilter<"Patient"> | Date | string
    updatedAt?: DateTimeFilter<"Patient"> | Date | string
    outlet?: XOR<OutletNullableScalarRelationFilter, outletWhereInput> | null
  }

  export type PatientOrderByWithRelationInput = {
    id?: SortOrder
    referenceName?: SortOrderInput | SortOrder
    fullName?: SortOrder
    mobileNumber?: SortOrder
    email?: SortOrderInput | SortOrder
    password?: SortOrder
    dateOfBirth?: SortOrderInput | SortOrder
    age?: SortOrderInput | SortOrder
    bloodGroup?: SortOrderInput | SortOrder
    gender?: SortOrderInput | SortOrder
    address?: SortOrderInput | SortOrder
    emergencyContact?: SortOrderInput | SortOrder
    status?: SortOrder
    otp?: SortOrderInput | SortOrder
    otpExpiresAt?: SortOrderInput | SortOrder
    outletId?: SortOrderInput | SortOrder
    isActive?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    outlet?: outletOrderByWithRelationInput
    _relevance?: PatientOrderByRelevanceInput
  }

  export type PatientWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    mobileNumber?: string
    AND?: PatientWhereInput | PatientWhereInput[]
    OR?: PatientWhereInput[]
    NOT?: PatientWhereInput | PatientWhereInput[]
    referenceName?: StringNullableFilter<"Patient"> | string | null
    fullName?: StringFilter<"Patient"> | string
    email?: StringNullableFilter<"Patient"> | string | null
    password?: StringFilter<"Patient"> | string
    dateOfBirth?: DateTimeNullableFilter<"Patient"> | Date | string | null
    age?: IntNullableFilter<"Patient"> | number | null
    bloodGroup?: StringNullableFilter<"Patient"> | string | null
    gender?: StringNullableFilter<"Patient"> | string | null
    address?: StringNullableFilter<"Patient"> | string | null
    emergencyContact?: StringNullableFilter<"Patient"> | string | null
    status?: EnumPatientStatusFilter<"Patient"> | $Enums.PatientStatus
    otp?: StringNullableFilter<"Patient"> | string | null
    otpExpiresAt?: DateTimeNullableFilter<"Patient"> | Date | string | null
    outletId?: StringNullableFilter<"Patient"> | string | null
    isActive?: BoolFilter<"Patient"> | boolean
    createdAt?: DateTimeFilter<"Patient"> | Date | string
    updatedAt?: DateTimeFilter<"Patient"> | Date | string
    outlet?: XOR<OutletNullableScalarRelationFilter, outletWhereInput> | null
  }, "id" | "mobileNumber">

  export type PatientOrderByWithAggregationInput = {
    id?: SortOrder
    referenceName?: SortOrderInput | SortOrder
    fullName?: SortOrder
    mobileNumber?: SortOrder
    email?: SortOrderInput | SortOrder
    password?: SortOrder
    dateOfBirth?: SortOrderInput | SortOrder
    age?: SortOrderInput | SortOrder
    bloodGroup?: SortOrderInput | SortOrder
    gender?: SortOrderInput | SortOrder
    address?: SortOrderInput | SortOrder
    emergencyContact?: SortOrderInput | SortOrder
    status?: SortOrder
    otp?: SortOrderInput | SortOrder
    otpExpiresAt?: SortOrderInput | SortOrder
    outletId?: SortOrderInput | SortOrder
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
    referenceName?: StringNullableWithAggregatesFilter<"Patient"> | string | null
    fullName?: StringWithAggregatesFilter<"Patient"> | string
    mobileNumber?: StringWithAggregatesFilter<"Patient"> | string
    email?: StringNullableWithAggregatesFilter<"Patient"> | string | null
    password?: StringWithAggregatesFilter<"Patient"> | string
    dateOfBirth?: DateTimeNullableWithAggregatesFilter<"Patient"> | Date | string | null
    age?: IntNullableWithAggregatesFilter<"Patient"> | number | null
    bloodGroup?: StringNullableWithAggregatesFilter<"Patient"> | string | null
    gender?: StringNullableWithAggregatesFilter<"Patient"> | string | null
    address?: StringNullableWithAggregatesFilter<"Patient"> | string | null
    emergencyContact?: StringNullableWithAggregatesFilter<"Patient"> | string | null
    status?: EnumPatientStatusWithAggregatesFilter<"Patient"> | $Enums.PatientStatus
    otp?: StringNullableWithAggregatesFilter<"Patient"> | string | null
    otpExpiresAt?: DateTimeNullableWithAggregatesFilter<"Patient"> | Date | string | null
    outletId?: StringNullableWithAggregatesFilter<"Patient"> | string | null
    isActive?: BoolWithAggregatesFilter<"Patient"> | boolean
    createdAt?: DateTimeWithAggregatesFilter<"Patient"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Patient"> | Date | string
  }

  export type DoctorWhereInput = {
    AND?: DoctorWhereInput | DoctorWhereInput[]
    OR?: DoctorWhereInput[]
    NOT?: DoctorWhereInput | DoctorWhereInput[]
    id?: StringFilter<"Doctor"> | string
    doctorCode?: StringNullableFilter<"Doctor"> | string | null
    fullName?: StringFilter<"Doctor"> | string
    mobile?: StringNullableFilter<"Doctor"> | string | null
    email?: StringFilter<"Doctor"> | string
    password?: StringFilter<"Doctor"> | string
    bmdcNumber?: StringNullableFilter<"Doctor"> | string | null
    subSpecialization?: StringNullableFilter<"Doctor"> | string | null
    qualification?: StringNullableFilter<"Doctor"> | string | null
    experienceYears?: IntNullableFilter<"Doctor"> | number | null
    currentDesignation?: StringNullableFilter<"Doctor"> | string | null
    consultationFee?: DecimalNullableFilter<"Doctor"> | Decimal | DecimalJsLike | number | string | null
    status?: EnumDoctorStatusFilter<"Doctor"> | $Enums.DoctorStatus
    onlineStatus?: EnumDoctorOnlineStatusFilter<"Doctor"> | $Enums.DoctorOnlineStatus
    outletId?: StringNullableFilter<"Doctor"> | string | null
    specializationId?: StringFilter<"Doctor"> | string
    createdAt?: DateTimeFilter<"Doctor"> | Date | string
    updatedAt?: DateTimeFilter<"Doctor"> | Date | string
    outlet?: XOR<OutletNullableScalarRelationFilter, outletWhereInput> | null
    specialization?: XOR<DoctorSpecializationScalarRelationFilter, DoctorSpecializationWhereInput>
    documents?: DoctorDocumentListRelationFilter
    schedules?: DoctorScheduleListRelationFilter
  }

  export type DoctorOrderByWithRelationInput = {
    id?: SortOrder
    doctorCode?: SortOrderInput | SortOrder
    fullName?: SortOrder
    mobile?: SortOrderInput | SortOrder
    email?: SortOrder
    password?: SortOrder
    bmdcNumber?: SortOrderInput | SortOrder
    subSpecialization?: SortOrderInput | SortOrder
    qualification?: SortOrderInput | SortOrder
    experienceYears?: SortOrderInput | SortOrder
    currentDesignation?: SortOrderInput | SortOrder
    consultationFee?: SortOrderInput | SortOrder
    status?: SortOrder
    onlineStatus?: SortOrder
    outletId?: SortOrderInput | SortOrder
    specializationId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    outlet?: outletOrderByWithRelationInput
    specialization?: DoctorSpecializationOrderByWithRelationInput
    documents?: DoctorDocumentOrderByRelationAggregateInput
    schedules?: DoctorScheduleOrderByRelationAggregateInput
    _relevance?: DoctorOrderByRelevanceInput
  }

  export type DoctorWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    doctorCode?: string
    email?: string
    bmdcNumber?: string
    AND?: DoctorWhereInput | DoctorWhereInput[]
    OR?: DoctorWhereInput[]
    NOT?: DoctorWhereInput | DoctorWhereInput[]
    fullName?: StringFilter<"Doctor"> | string
    mobile?: StringNullableFilter<"Doctor"> | string | null
    password?: StringFilter<"Doctor"> | string
    subSpecialization?: StringNullableFilter<"Doctor"> | string | null
    qualification?: StringNullableFilter<"Doctor"> | string | null
    experienceYears?: IntNullableFilter<"Doctor"> | number | null
    currentDesignation?: StringNullableFilter<"Doctor"> | string | null
    consultationFee?: DecimalNullableFilter<"Doctor"> | Decimal | DecimalJsLike | number | string | null
    status?: EnumDoctorStatusFilter<"Doctor"> | $Enums.DoctorStatus
    onlineStatus?: EnumDoctorOnlineStatusFilter<"Doctor"> | $Enums.DoctorOnlineStatus
    outletId?: StringNullableFilter<"Doctor"> | string | null
    specializationId?: StringFilter<"Doctor"> | string
    createdAt?: DateTimeFilter<"Doctor"> | Date | string
    updatedAt?: DateTimeFilter<"Doctor"> | Date | string
    outlet?: XOR<OutletNullableScalarRelationFilter, outletWhereInput> | null
    specialization?: XOR<DoctorSpecializationScalarRelationFilter, DoctorSpecializationWhereInput>
    documents?: DoctorDocumentListRelationFilter
    schedules?: DoctorScheduleListRelationFilter
  }, "id" | "doctorCode" | "email" | "bmdcNumber">

  export type DoctorOrderByWithAggregationInput = {
    id?: SortOrder
    doctorCode?: SortOrderInput | SortOrder
    fullName?: SortOrder
    mobile?: SortOrderInput | SortOrder
    email?: SortOrder
    password?: SortOrder
    bmdcNumber?: SortOrderInput | SortOrder
    subSpecialization?: SortOrderInput | SortOrder
    qualification?: SortOrderInput | SortOrder
    experienceYears?: SortOrderInput | SortOrder
    currentDesignation?: SortOrderInput | SortOrder
    consultationFee?: SortOrderInput | SortOrder
    status?: SortOrder
    onlineStatus?: SortOrder
    outletId?: SortOrderInput | SortOrder
    specializationId?: SortOrder
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
    doctorCode?: StringNullableWithAggregatesFilter<"Doctor"> | string | null
    fullName?: StringWithAggregatesFilter<"Doctor"> | string
    mobile?: StringNullableWithAggregatesFilter<"Doctor"> | string | null
    email?: StringWithAggregatesFilter<"Doctor"> | string
    password?: StringWithAggregatesFilter<"Doctor"> | string
    bmdcNumber?: StringNullableWithAggregatesFilter<"Doctor"> | string | null
    subSpecialization?: StringNullableWithAggregatesFilter<"Doctor"> | string | null
    qualification?: StringNullableWithAggregatesFilter<"Doctor"> | string | null
    experienceYears?: IntNullableWithAggregatesFilter<"Doctor"> | number | null
    currentDesignation?: StringNullableWithAggregatesFilter<"Doctor"> | string | null
    consultationFee?: DecimalNullableWithAggregatesFilter<"Doctor"> | Decimal | DecimalJsLike | number | string | null
    status?: EnumDoctorStatusWithAggregatesFilter<"Doctor"> | $Enums.DoctorStatus
    onlineStatus?: EnumDoctorOnlineStatusWithAggregatesFilter<"Doctor"> | $Enums.DoctorOnlineStatus
    outletId?: StringNullableWithAggregatesFilter<"Doctor"> | string | null
    specializationId?: StringWithAggregatesFilter<"Doctor"> | string
    createdAt?: DateTimeWithAggregatesFilter<"Doctor"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Doctor"> | Date | string
  }

  export type DoctorSpecializationWhereInput = {
    AND?: DoctorSpecializationWhereInput | DoctorSpecializationWhereInput[]
    OR?: DoctorSpecializationWhereInput[]
    NOT?: DoctorSpecializationWhereInput | DoctorSpecializationWhereInput[]
    id?: StringFilter<"DoctorSpecialization"> | string
    name?: StringFilter<"DoctorSpecialization"> | string
    status?: EnumDoctorStatusFilter<"DoctorSpecialization"> | $Enums.DoctorStatus
    doctors?: DoctorListRelationFilter
  }

  export type DoctorSpecializationOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    status?: SortOrder
    doctors?: DoctorOrderByRelationAggregateInput
    _relevance?: DoctorSpecializationOrderByRelevanceInput
  }

  export type DoctorSpecializationWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    name?: string
    AND?: DoctorSpecializationWhereInput | DoctorSpecializationWhereInput[]
    OR?: DoctorSpecializationWhereInput[]
    NOT?: DoctorSpecializationWhereInput | DoctorSpecializationWhereInput[]
    status?: EnumDoctorStatusFilter<"DoctorSpecialization"> | $Enums.DoctorStatus
    doctors?: DoctorListRelationFilter
  }, "id" | "name">

  export type DoctorSpecializationOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    status?: SortOrder
    _count?: DoctorSpecializationCountOrderByAggregateInput
    _max?: DoctorSpecializationMaxOrderByAggregateInput
    _min?: DoctorSpecializationMinOrderByAggregateInput
  }

  export type DoctorSpecializationScalarWhereWithAggregatesInput = {
    AND?: DoctorSpecializationScalarWhereWithAggregatesInput | DoctorSpecializationScalarWhereWithAggregatesInput[]
    OR?: DoctorSpecializationScalarWhereWithAggregatesInput[]
    NOT?: DoctorSpecializationScalarWhereWithAggregatesInput | DoctorSpecializationScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"DoctorSpecialization"> | string
    name?: StringWithAggregatesFilter<"DoctorSpecialization"> | string
    status?: EnumDoctorStatusWithAggregatesFilter<"DoctorSpecialization"> | $Enums.DoctorStatus
  }

  export type DoctorDocumentWhereInput = {
    AND?: DoctorDocumentWhereInput | DoctorDocumentWhereInput[]
    OR?: DoctorDocumentWhereInput[]
    NOT?: DoctorDocumentWhereInput | DoctorDocumentWhereInput[]
    id?: StringFilter<"DoctorDocument"> | string
    documentType?: EnumDocumentTypeFilter<"DoctorDocument"> | $Enums.DocumentType
    fileUrl?: StringFilter<"DoctorDocument"> | string
    verificationStatus?: EnumVerificationStatusFilter<"DoctorDocument"> | $Enums.VerificationStatus
    doctorId?: StringFilter<"DoctorDocument"> | string
    createdAt?: DateTimeFilter<"DoctorDocument"> | Date | string
    doctor?: XOR<DoctorScalarRelationFilter, DoctorWhereInput>
  }

  export type DoctorDocumentOrderByWithRelationInput = {
    id?: SortOrder
    documentType?: SortOrder
    fileUrl?: SortOrder
    verificationStatus?: SortOrder
    doctorId?: SortOrder
    createdAt?: SortOrder
    doctor?: DoctorOrderByWithRelationInput
    _relevance?: DoctorDocumentOrderByRelevanceInput
  }

  export type DoctorDocumentWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: DoctorDocumentWhereInput | DoctorDocumentWhereInput[]
    OR?: DoctorDocumentWhereInput[]
    NOT?: DoctorDocumentWhereInput | DoctorDocumentWhereInput[]
    documentType?: EnumDocumentTypeFilter<"DoctorDocument"> | $Enums.DocumentType
    fileUrl?: StringFilter<"DoctorDocument"> | string
    verificationStatus?: EnumVerificationStatusFilter<"DoctorDocument"> | $Enums.VerificationStatus
    doctorId?: StringFilter<"DoctorDocument"> | string
    createdAt?: DateTimeFilter<"DoctorDocument"> | Date | string
    doctor?: XOR<DoctorScalarRelationFilter, DoctorWhereInput>
  }, "id">

  export type DoctorDocumentOrderByWithAggregationInput = {
    id?: SortOrder
    documentType?: SortOrder
    fileUrl?: SortOrder
    verificationStatus?: SortOrder
    doctorId?: SortOrder
    createdAt?: SortOrder
    _count?: DoctorDocumentCountOrderByAggregateInput
    _max?: DoctorDocumentMaxOrderByAggregateInput
    _min?: DoctorDocumentMinOrderByAggregateInput
  }

  export type DoctorDocumentScalarWhereWithAggregatesInput = {
    AND?: DoctorDocumentScalarWhereWithAggregatesInput | DoctorDocumentScalarWhereWithAggregatesInput[]
    OR?: DoctorDocumentScalarWhereWithAggregatesInput[]
    NOT?: DoctorDocumentScalarWhereWithAggregatesInput | DoctorDocumentScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"DoctorDocument"> | string
    documentType?: EnumDocumentTypeWithAggregatesFilter<"DoctorDocument"> | $Enums.DocumentType
    fileUrl?: StringWithAggregatesFilter<"DoctorDocument"> | string
    verificationStatus?: EnumVerificationStatusWithAggregatesFilter<"DoctorDocument"> | $Enums.VerificationStatus
    doctorId?: StringWithAggregatesFilter<"DoctorDocument"> | string
    createdAt?: DateTimeWithAggregatesFilter<"DoctorDocument"> | Date | string
  }

  export type DoctorScheduleWhereInput = {
    AND?: DoctorScheduleWhereInput | DoctorScheduleWhereInput[]
    OR?: DoctorScheduleWhereInput[]
    NOT?: DoctorScheduleWhereInput | DoctorScheduleWhereInput[]
    id?: StringFilter<"DoctorSchedule"> | string
    doctorId?: StringFilter<"DoctorSchedule"> | string
    dayName?: StringFilter<"DoctorSchedule"> | string
    startTime?: StringFilter<"DoctorSchedule"> | string
    endTime?: StringFilter<"DoctorSchedule"> | string
    slotDuration?: IntFilter<"DoctorSchedule"> | number
    status?: EnumScheduleStatusFilter<"DoctorSchedule"> | $Enums.ScheduleStatus
    doctor?: XOR<DoctorScalarRelationFilter, DoctorWhereInput>
  }

  export type DoctorScheduleOrderByWithRelationInput = {
    id?: SortOrder
    doctorId?: SortOrder
    dayName?: SortOrder
    startTime?: SortOrder
    endTime?: SortOrder
    slotDuration?: SortOrder
    status?: SortOrder
    doctor?: DoctorOrderByWithRelationInput
    _relevance?: DoctorScheduleOrderByRelevanceInput
  }

  export type DoctorScheduleWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: DoctorScheduleWhereInput | DoctorScheduleWhereInput[]
    OR?: DoctorScheduleWhereInput[]
    NOT?: DoctorScheduleWhereInput | DoctorScheduleWhereInput[]
    doctorId?: StringFilter<"DoctorSchedule"> | string
    dayName?: StringFilter<"DoctorSchedule"> | string
    startTime?: StringFilter<"DoctorSchedule"> | string
    endTime?: StringFilter<"DoctorSchedule"> | string
    slotDuration?: IntFilter<"DoctorSchedule"> | number
    status?: EnumScheduleStatusFilter<"DoctorSchedule"> | $Enums.ScheduleStatus
    doctor?: XOR<DoctorScalarRelationFilter, DoctorWhereInput>
  }, "id">

  export type DoctorScheduleOrderByWithAggregationInput = {
    id?: SortOrder
    doctorId?: SortOrder
    dayName?: SortOrder
    startTime?: SortOrder
    endTime?: SortOrder
    slotDuration?: SortOrder
    status?: SortOrder
    _count?: DoctorScheduleCountOrderByAggregateInput
    _avg?: DoctorScheduleAvgOrderByAggregateInput
    _max?: DoctorScheduleMaxOrderByAggregateInput
    _min?: DoctorScheduleMinOrderByAggregateInput
    _sum?: DoctorScheduleSumOrderByAggregateInput
  }

  export type DoctorScheduleScalarWhereWithAggregatesInput = {
    AND?: DoctorScheduleScalarWhereWithAggregatesInput | DoctorScheduleScalarWhereWithAggregatesInput[]
    OR?: DoctorScheduleScalarWhereWithAggregatesInput[]
    NOT?: DoctorScheduleScalarWhereWithAggregatesInput | DoctorScheduleScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"DoctorSchedule"> | string
    doctorId?: StringWithAggregatesFilter<"DoctorSchedule"> | string
    dayName?: StringWithAggregatesFilter<"DoctorSchedule"> | string
    startTime?: StringWithAggregatesFilter<"DoctorSchedule"> | string
    endTime?: StringWithAggregatesFilter<"DoctorSchedule"> | string
    slotDuration?: IntWithAggregatesFilter<"DoctorSchedule"> | number
    status?: EnumScheduleStatusWithAggregatesFilter<"DoctorSchedule"> | $Enums.ScheduleStatus
  }

  export type outletWhereInput = {
    AND?: outletWhereInput | outletWhereInput[]
    OR?: outletWhereInput[]
    NOT?: outletWhereInput | outletWhereInput[]
    id?: StringFilter<"outlet"> | string
    name?: StringFilter<"outlet"> | string
    email?: StringFilter<"outlet"> | string
    phone?: StringNullableFilter<"outlet"> | string | null
    password?: StringFilter<"outlet"> | string
    centerName?: StringFilter<"outlet"> | string
    slug?: StringFilter<"outlet"> | string
    logo?: StringNullableFilter<"outlet"> | string | null
    address?: StringNullableFilter<"outlet"> | string | null
    isActive?: BoolFilter<"outlet"> | boolean
    createdAt?: DateTimeFilter<"outlet"> | Date | string
    updatedAt?: DateTimeFilter<"outlet"> | Date | string
    childUsers?: OutletChildUserListRelationFilter
    roles?: RoleListRelationFilter
    patients?: PatientListRelationFilter
    doctors?: DoctorListRelationFilter
  }

  export type outletOrderByWithRelationInput = {
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
    childUsers?: OutletChildUserOrderByRelationAggregateInput
    roles?: RoleOrderByRelationAggregateInput
    patients?: PatientOrderByRelationAggregateInput
    doctors?: DoctorOrderByRelationAggregateInput
    _relevance?: outletOrderByRelevanceInput
  }

  export type outletWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    email?: string
    slug?: string
    AND?: outletWhereInput | outletWhereInput[]
    OR?: outletWhereInput[]
    NOT?: outletWhereInput | outletWhereInput[]
    name?: StringFilter<"outlet"> | string
    phone?: StringNullableFilter<"outlet"> | string | null
    password?: StringFilter<"outlet"> | string
    centerName?: StringFilter<"outlet"> | string
    logo?: StringNullableFilter<"outlet"> | string | null
    address?: StringNullableFilter<"outlet"> | string | null
    isActive?: BoolFilter<"outlet"> | boolean
    createdAt?: DateTimeFilter<"outlet"> | Date | string
    updatedAt?: DateTimeFilter<"outlet"> | Date | string
    childUsers?: OutletChildUserListRelationFilter
    roles?: RoleListRelationFilter
    patients?: PatientListRelationFilter
    doctors?: DoctorListRelationFilter
  }, "id" | "email" | "slug">

  export type outletOrderByWithAggregationInput = {
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
    _count?: outletCountOrderByAggregateInput
    _max?: outletMaxOrderByAggregateInput
    _min?: outletMinOrderByAggregateInput
  }

  export type outletScalarWhereWithAggregatesInput = {
    AND?: outletScalarWhereWithAggregatesInput | outletScalarWhereWithAggregatesInput[]
    OR?: outletScalarWhereWithAggregatesInput[]
    NOT?: outletScalarWhereWithAggregatesInput | outletScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"outlet"> | string
    name?: StringWithAggregatesFilter<"outlet"> | string
    email?: StringWithAggregatesFilter<"outlet"> | string
    phone?: StringNullableWithAggregatesFilter<"outlet"> | string | null
    password?: StringWithAggregatesFilter<"outlet"> | string
    centerName?: StringWithAggregatesFilter<"outlet"> | string
    slug?: StringWithAggregatesFilter<"outlet"> | string
    logo?: StringNullableWithAggregatesFilter<"outlet"> | string | null
    address?: StringNullableWithAggregatesFilter<"outlet"> | string | null
    isActive?: BoolWithAggregatesFilter<"outlet"> | boolean
    createdAt?: DateTimeWithAggregatesFilter<"outlet"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"outlet"> | Date | string
  }

  export type OutletChildUserWhereInput = {
    AND?: OutletChildUserWhereInput | OutletChildUserWhereInput[]
    OR?: OutletChildUserWhereInput[]
    NOT?: OutletChildUserWhereInput | OutletChildUserWhereInput[]
    id?: StringFilter<"OutletChildUser"> | string
    outletId?: StringFilter<"OutletChildUser"> | string
    name?: StringFilter<"OutletChildUser"> | string
    email?: StringFilter<"OutletChildUser"> | string
    phone?: StringNullableFilter<"OutletChildUser"> | string | null
    password?: StringFilter<"OutletChildUser"> | string
    isActive?: BoolFilter<"OutletChildUser"> | boolean
    createdAt?: DateTimeFilter<"OutletChildUser"> | Date | string
    updatedAt?: DateTimeFilter<"OutletChildUser"> | Date | string
    outlet?: XOR<OutletScalarRelationFilter, outletWhereInput>
    userRoles?: OutletUserRoleListRelationFilter
  }

  export type OutletChildUserOrderByWithRelationInput = {
    id?: SortOrder
    outletId?: SortOrder
    name?: SortOrder
    email?: SortOrder
    phone?: SortOrderInput | SortOrder
    password?: SortOrder
    isActive?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    outlet?: outletOrderByWithRelationInput
    userRoles?: OutletUserRoleOrderByRelationAggregateInput
    _relevance?: OutletChildUserOrderByRelevanceInput
  }

  export type OutletChildUserWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    email_outletId?: OutletChildUserEmailOutletIdCompoundUniqueInput
    AND?: OutletChildUserWhereInput | OutletChildUserWhereInput[]
    OR?: OutletChildUserWhereInput[]
    NOT?: OutletChildUserWhereInput | OutletChildUserWhereInput[]
    outletId?: StringFilter<"OutletChildUser"> | string
    name?: StringFilter<"OutletChildUser"> | string
    email?: StringFilter<"OutletChildUser"> | string
    phone?: StringNullableFilter<"OutletChildUser"> | string | null
    password?: StringFilter<"OutletChildUser"> | string
    isActive?: BoolFilter<"OutletChildUser"> | boolean
    createdAt?: DateTimeFilter<"OutletChildUser"> | Date | string
    updatedAt?: DateTimeFilter<"OutletChildUser"> | Date | string
    outlet?: XOR<OutletScalarRelationFilter, outletWhereInput>
    userRoles?: OutletUserRoleListRelationFilter
  }, "id" | "email_outletId">

  export type OutletChildUserOrderByWithAggregationInput = {
    id?: SortOrder
    outletId?: SortOrder
    name?: SortOrder
    email?: SortOrder
    phone?: SortOrderInput | SortOrder
    password?: SortOrder
    isActive?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: OutletChildUserCountOrderByAggregateInput
    _max?: OutletChildUserMaxOrderByAggregateInput
    _min?: OutletChildUserMinOrderByAggregateInput
  }

  export type OutletChildUserScalarWhereWithAggregatesInput = {
    AND?: OutletChildUserScalarWhereWithAggregatesInput | OutletChildUserScalarWhereWithAggregatesInput[]
    OR?: OutletChildUserScalarWhereWithAggregatesInput[]
    NOT?: OutletChildUserScalarWhereWithAggregatesInput | OutletChildUserScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"OutletChildUser"> | string
    outletId?: StringWithAggregatesFilter<"OutletChildUser"> | string
    name?: StringWithAggregatesFilter<"OutletChildUser"> | string
    email?: StringWithAggregatesFilter<"OutletChildUser"> | string
    phone?: StringNullableWithAggregatesFilter<"OutletChildUser"> | string | null
    password?: StringWithAggregatesFilter<"OutletChildUser"> | string
    isActive?: BoolWithAggregatesFilter<"OutletChildUser"> | boolean
    createdAt?: DateTimeWithAggregatesFilter<"OutletChildUser"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"OutletChildUser"> | Date | string
  }

  export type RoleWhereInput = {
    AND?: RoleWhereInput | RoleWhereInput[]
    OR?: RoleWhereInput[]
    NOT?: RoleWhereInput | RoleWhereInput[]
    id?: StringFilter<"Role"> | string
    name?: StringFilter<"Role"> | string
    ownerType?: EnumRoleOwnerTypeFilter<"Role"> | $Enums.RoleOwnerType
    outletId?: StringNullableFilter<"Role"> | string | null
    superAdminId?: StringNullableFilter<"Role"> | string | null
    createdAt?: DateTimeFilter<"Role"> | Date | string
    updatedAt?: DateTimeFilter<"Role"> | Date | string
    outlet?: XOR<OutletNullableScalarRelationFilter, outletWhereInput> | null
    superAdmin?: XOR<SuperAdminsNullableScalarRelationFilter, SuperAdminsWhereInput> | null
    rolePermissions?: RolePermissionListRelationFilter
    OutletUserRoles?: OutletUserRoleListRelationFilter
    superAdminUserRoles?: SuperAdminUserRoleListRelationFilter
  }

  export type RoleOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    ownerType?: SortOrder
    outletId?: SortOrderInput | SortOrder
    superAdminId?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    outlet?: outletOrderByWithRelationInput
    superAdmin?: SuperAdminsOrderByWithRelationInput
    rolePermissions?: RolePermissionOrderByRelationAggregateInput
    OutletUserRoles?: OutletUserRoleOrderByRelationAggregateInput
    superAdminUserRoles?: SuperAdminUserRoleOrderByRelationAggregateInput
    _relevance?: RoleOrderByRelevanceInput
  }

  export type RoleWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    name_outletId?: RoleNameOutletIdCompoundUniqueInput
    name_superAdminId?: RoleNameSuperAdminIdCompoundUniqueInput
    AND?: RoleWhereInput | RoleWhereInput[]
    OR?: RoleWhereInput[]
    NOT?: RoleWhereInput | RoleWhereInput[]
    name?: StringFilter<"Role"> | string
    ownerType?: EnumRoleOwnerTypeFilter<"Role"> | $Enums.RoleOwnerType
    outletId?: StringNullableFilter<"Role"> | string | null
    superAdminId?: StringNullableFilter<"Role"> | string | null
    createdAt?: DateTimeFilter<"Role"> | Date | string
    updatedAt?: DateTimeFilter<"Role"> | Date | string
    outlet?: XOR<OutletNullableScalarRelationFilter, outletWhereInput> | null
    superAdmin?: XOR<SuperAdminsNullableScalarRelationFilter, SuperAdminsWhereInput> | null
    rolePermissions?: RolePermissionListRelationFilter
    OutletUserRoles?: OutletUserRoleListRelationFilter
    superAdminUserRoles?: SuperAdminUserRoleListRelationFilter
  }, "id" | "name_outletId" | "name_superAdminId">

  export type RoleOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    ownerType?: SortOrder
    outletId?: SortOrderInput | SortOrder
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
    outletId?: StringNullableWithAggregatesFilter<"Role"> | string | null
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

  export type OutletUserRoleWhereInput = {
    AND?: OutletUserRoleWhereInput | OutletUserRoleWhereInput[]
    OR?: OutletUserRoleWhereInput[]
    NOT?: OutletUserRoleWhereInput | OutletUserRoleWhereInput[]
    id?: StringFilter<"OutletUserRole"> | string
    OutletChildUserId?: StringFilter<"OutletUserRole"> | string
    roleId?: StringFilter<"OutletUserRole"> | string
    createdAt?: DateTimeFilter<"OutletUserRole"> | Date | string
    OutletChildUser?: XOR<OutletChildUserScalarRelationFilter, OutletChildUserWhereInput>
    role?: XOR<RoleScalarRelationFilter, RoleWhereInput>
  }

  export type OutletUserRoleOrderByWithRelationInput = {
    id?: SortOrder
    OutletChildUserId?: SortOrder
    roleId?: SortOrder
    createdAt?: SortOrder
    OutletChildUser?: OutletChildUserOrderByWithRelationInput
    role?: RoleOrderByWithRelationInput
    _relevance?: OutletUserRoleOrderByRelevanceInput
  }

  export type OutletUserRoleWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    OutletChildUserId_roleId?: OutletUserRoleOutletChildUserIdRoleIdCompoundUniqueInput
    AND?: OutletUserRoleWhereInput | OutletUserRoleWhereInput[]
    OR?: OutletUserRoleWhereInput[]
    NOT?: OutletUserRoleWhereInput | OutletUserRoleWhereInput[]
    OutletChildUserId?: StringFilter<"OutletUserRole"> | string
    roleId?: StringFilter<"OutletUserRole"> | string
    createdAt?: DateTimeFilter<"OutletUserRole"> | Date | string
    OutletChildUser?: XOR<OutletChildUserScalarRelationFilter, OutletChildUserWhereInput>
    role?: XOR<RoleScalarRelationFilter, RoleWhereInput>
  }, "id" | "OutletChildUserId_roleId">

  export type OutletUserRoleOrderByWithAggregationInput = {
    id?: SortOrder
    OutletChildUserId?: SortOrder
    roleId?: SortOrder
    createdAt?: SortOrder
    _count?: OutletUserRoleCountOrderByAggregateInput
    _max?: OutletUserRoleMaxOrderByAggregateInput
    _min?: OutletUserRoleMinOrderByAggregateInput
  }

  export type OutletUserRoleScalarWhereWithAggregatesInput = {
    AND?: OutletUserRoleScalarWhereWithAggregatesInput | OutletUserRoleScalarWhereWithAggregatesInput[]
    OR?: OutletUserRoleScalarWhereWithAggregatesInput[]
    NOT?: OutletUserRoleScalarWhereWithAggregatesInput | OutletUserRoleScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"OutletUserRole"> | string
    OutletChildUserId?: StringWithAggregatesFilter<"OutletUserRole"> | string
    roleId?: StringWithAggregatesFilter<"OutletUserRole"> | string
    createdAt?: DateTimeWithAggregatesFilter<"OutletUserRole"> | Date | string
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
    referenceName?: string | null
    fullName: string
    mobileNumber: string
    email?: string | null
    password: string
    dateOfBirth?: Date | string | null
    age?: number | null
    bloodGroup?: string | null
    gender?: string | null
    address?: string | null
    emergencyContact?: string | null
    status?: $Enums.PatientStatus
    otp?: string | null
    otpExpiresAt?: Date | string | null
    isActive?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    outlet?: outletCreateNestedOneWithoutPatientsInput
  }

  export type PatientUncheckedCreateInput = {
    id?: string
    referenceName?: string | null
    fullName: string
    mobileNumber: string
    email?: string | null
    password: string
    dateOfBirth?: Date | string | null
    age?: number | null
    bloodGroup?: string | null
    gender?: string | null
    address?: string | null
    emergencyContact?: string | null
    status?: $Enums.PatientStatus
    otp?: string | null
    otpExpiresAt?: Date | string | null
    outletId?: string | null
    isActive?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type PatientUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    referenceName?: NullableStringFieldUpdateOperationsInput | string | null
    fullName?: StringFieldUpdateOperationsInput | string
    mobileNumber?: StringFieldUpdateOperationsInput | string
    email?: NullableStringFieldUpdateOperationsInput | string | null
    password?: StringFieldUpdateOperationsInput | string
    dateOfBirth?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    age?: NullableIntFieldUpdateOperationsInput | number | null
    bloodGroup?: NullableStringFieldUpdateOperationsInput | string | null
    gender?: NullableStringFieldUpdateOperationsInput | string | null
    address?: NullableStringFieldUpdateOperationsInput | string | null
    emergencyContact?: NullableStringFieldUpdateOperationsInput | string | null
    status?: EnumPatientStatusFieldUpdateOperationsInput | $Enums.PatientStatus
    otp?: NullableStringFieldUpdateOperationsInput | string | null
    otpExpiresAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    outlet?: outletUpdateOneWithoutPatientsNestedInput
  }

  export type PatientUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    referenceName?: NullableStringFieldUpdateOperationsInput | string | null
    fullName?: StringFieldUpdateOperationsInput | string
    mobileNumber?: StringFieldUpdateOperationsInput | string
    email?: NullableStringFieldUpdateOperationsInput | string | null
    password?: StringFieldUpdateOperationsInput | string
    dateOfBirth?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    age?: NullableIntFieldUpdateOperationsInput | number | null
    bloodGroup?: NullableStringFieldUpdateOperationsInput | string | null
    gender?: NullableStringFieldUpdateOperationsInput | string | null
    address?: NullableStringFieldUpdateOperationsInput | string | null
    emergencyContact?: NullableStringFieldUpdateOperationsInput | string | null
    status?: EnumPatientStatusFieldUpdateOperationsInput | $Enums.PatientStatus
    otp?: NullableStringFieldUpdateOperationsInput | string | null
    otpExpiresAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    outletId?: NullableStringFieldUpdateOperationsInput | string | null
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PatientCreateManyInput = {
    id?: string
    referenceName?: string | null
    fullName: string
    mobileNumber: string
    email?: string | null
    password: string
    dateOfBirth?: Date | string | null
    age?: number | null
    bloodGroup?: string | null
    gender?: string | null
    address?: string | null
    emergencyContact?: string | null
    status?: $Enums.PatientStatus
    otp?: string | null
    otpExpiresAt?: Date | string | null
    outletId?: string | null
    isActive?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type PatientUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    referenceName?: NullableStringFieldUpdateOperationsInput | string | null
    fullName?: StringFieldUpdateOperationsInput | string
    mobileNumber?: StringFieldUpdateOperationsInput | string
    email?: NullableStringFieldUpdateOperationsInput | string | null
    password?: StringFieldUpdateOperationsInput | string
    dateOfBirth?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    age?: NullableIntFieldUpdateOperationsInput | number | null
    bloodGroup?: NullableStringFieldUpdateOperationsInput | string | null
    gender?: NullableStringFieldUpdateOperationsInput | string | null
    address?: NullableStringFieldUpdateOperationsInput | string | null
    emergencyContact?: NullableStringFieldUpdateOperationsInput | string | null
    status?: EnumPatientStatusFieldUpdateOperationsInput | $Enums.PatientStatus
    otp?: NullableStringFieldUpdateOperationsInput | string | null
    otpExpiresAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PatientUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    referenceName?: NullableStringFieldUpdateOperationsInput | string | null
    fullName?: StringFieldUpdateOperationsInput | string
    mobileNumber?: StringFieldUpdateOperationsInput | string
    email?: NullableStringFieldUpdateOperationsInput | string | null
    password?: StringFieldUpdateOperationsInput | string
    dateOfBirth?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    age?: NullableIntFieldUpdateOperationsInput | number | null
    bloodGroup?: NullableStringFieldUpdateOperationsInput | string | null
    gender?: NullableStringFieldUpdateOperationsInput | string | null
    address?: NullableStringFieldUpdateOperationsInput | string | null
    emergencyContact?: NullableStringFieldUpdateOperationsInput | string | null
    status?: EnumPatientStatusFieldUpdateOperationsInput | $Enums.PatientStatus
    otp?: NullableStringFieldUpdateOperationsInput | string | null
    otpExpiresAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    outletId?: NullableStringFieldUpdateOperationsInput | string | null
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type DoctorCreateInput = {
    id?: string
    doctorCode?: string | null
    fullName: string
    mobile?: string | null
    email: string
    password: string
    bmdcNumber?: string | null
    subSpecialization?: string | null
    qualification?: string | null
    experienceYears?: number | null
    currentDesignation?: string | null
    consultationFee?: Decimal | DecimalJsLike | number | string | null
    status?: $Enums.DoctorStatus
    onlineStatus?: $Enums.DoctorOnlineStatus
    createdAt?: Date | string
    updatedAt?: Date | string
    outlet?: outletCreateNestedOneWithoutDoctorsInput
    specialization: DoctorSpecializationCreateNestedOneWithoutDoctorsInput
    documents?: DoctorDocumentCreateNestedManyWithoutDoctorInput
    schedules?: DoctorScheduleCreateNestedManyWithoutDoctorInput
  }

  export type DoctorUncheckedCreateInput = {
    id?: string
    doctorCode?: string | null
    fullName: string
    mobile?: string | null
    email: string
    password: string
    bmdcNumber?: string | null
    subSpecialization?: string | null
    qualification?: string | null
    experienceYears?: number | null
    currentDesignation?: string | null
    consultationFee?: Decimal | DecimalJsLike | number | string | null
    status?: $Enums.DoctorStatus
    onlineStatus?: $Enums.DoctorOnlineStatus
    outletId?: string | null
    specializationId: string
    createdAt?: Date | string
    updatedAt?: Date | string
    documents?: DoctorDocumentUncheckedCreateNestedManyWithoutDoctorInput
    schedules?: DoctorScheduleUncheckedCreateNestedManyWithoutDoctorInput
  }

  export type DoctorUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    doctorCode?: NullableStringFieldUpdateOperationsInput | string | null
    fullName?: StringFieldUpdateOperationsInput | string
    mobile?: NullableStringFieldUpdateOperationsInput | string | null
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    bmdcNumber?: NullableStringFieldUpdateOperationsInput | string | null
    subSpecialization?: NullableStringFieldUpdateOperationsInput | string | null
    qualification?: NullableStringFieldUpdateOperationsInput | string | null
    experienceYears?: NullableIntFieldUpdateOperationsInput | number | null
    currentDesignation?: NullableStringFieldUpdateOperationsInput | string | null
    consultationFee?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    status?: EnumDoctorStatusFieldUpdateOperationsInput | $Enums.DoctorStatus
    onlineStatus?: EnumDoctorOnlineStatusFieldUpdateOperationsInput | $Enums.DoctorOnlineStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    outlet?: outletUpdateOneWithoutDoctorsNestedInput
    specialization?: DoctorSpecializationUpdateOneRequiredWithoutDoctorsNestedInput
    documents?: DoctorDocumentUpdateManyWithoutDoctorNestedInput
    schedules?: DoctorScheduleUpdateManyWithoutDoctorNestedInput
  }

  export type DoctorUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    doctorCode?: NullableStringFieldUpdateOperationsInput | string | null
    fullName?: StringFieldUpdateOperationsInput | string
    mobile?: NullableStringFieldUpdateOperationsInput | string | null
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    bmdcNumber?: NullableStringFieldUpdateOperationsInput | string | null
    subSpecialization?: NullableStringFieldUpdateOperationsInput | string | null
    qualification?: NullableStringFieldUpdateOperationsInput | string | null
    experienceYears?: NullableIntFieldUpdateOperationsInput | number | null
    currentDesignation?: NullableStringFieldUpdateOperationsInput | string | null
    consultationFee?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    status?: EnumDoctorStatusFieldUpdateOperationsInput | $Enums.DoctorStatus
    onlineStatus?: EnumDoctorOnlineStatusFieldUpdateOperationsInput | $Enums.DoctorOnlineStatus
    outletId?: NullableStringFieldUpdateOperationsInput | string | null
    specializationId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    documents?: DoctorDocumentUncheckedUpdateManyWithoutDoctorNestedInput
    schedules?: DoctorScheduleUncheckedUpdateManyWithoutDoctorNestedInput
  }

  export type DoctorCreateManyInput = {
    id?: string
    doctorCode?: string | null
    fullName: string
    mobile?: string | null
    email: string
    password: string
    bmdcNumber?: string | null
    subSpecialization?: string | null
    qualification?: string | null
    experienceYears?: number | null
    currentDesignation?: string | null
    consultationFee?: Decimal | DecimalJsLike | number | string | null
    status?: $Enums.DoctorStatus
    onlineStatus?: $Enums.DoctorOnlineStatus
    outletId?: string | null
    specializationId: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type DoctorUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    doctorCode?: NullableStringFieldUpdateOperationsInput | string | null
    fullName?: StringFieldUpdateOperationsInput | string
    mobile?: NullableStringFieldUpdateOperationsInput | string | null
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    bmdcNumber?: NullableStringFieldUpdateOperationsInput | string | null
    subSpecialization?: NullableStringFieldUpdateOperationsInput | string | null
    qualification?: NullableStringFieldUpdateOperationsInput | string | null
    experienceYears?: NullableIntFieldUpdateOperationsInput | number | null
    currentDesignation?: NullableStringFieldUpdateOperationsInput | string | null
    consultationFee?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    status?: EnumDoctorStatusFieldUpdateOperationsInput | $Enums.DoctorStatus
    onlineStatus?: EnumDoctorOnlineStatusFieldUpdateOperationsInput | $Enums.DoctorOnlineStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type DoctorUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    doctorCode?: NullableStringFieldUpdateOperationsInput | string | null
    fullName?: StringFieldUpdateOperationsInput | string
    mobile?: NullableStringFieldUpdateOperationsInput | string | null
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    bmdcNumber?: NullableStringFieldUpdateOperationsInput | string | null
    subSpecialization?: NullableStringFieldUpdateOperationsInput | string | null
    qualification?: NullableStringFieldUpdateOperationsInput | string | null
    experienceYears?: NullableIntFieldUpdateOperationsInput | number | null
    currentDesignation?: NullableStringFieldUpdateOperationsInput | string | null
    consultationFee?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    status?: EnumDoctorStatusFieldUpdateOperationsInput | $Enums.DoctorStatus
    onlineStatus?: EnumDoctorOnlineStatusFieldUpdateOperationsInput | $Enums.DoctorOnlineStatus
    outletId?: NullableStringFieldUpdateOperationsInput | string | null
    specializationId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type DoctorSpecializationCreateInput = {
    id?: string
    name: string
    status?: $Enums.DoctorStatus
    doctors?: DoctorCreateNestedManyWithoutSpecializationInput
  }

  export type DoctorSpecializationUncheckedCreateInput = {
    id?: string
    name: string
    status?: $Enums.DoctorStatus
    doctors?: DoctorUncheckedCreateNestedManyWithoutSpecializationInput
  }

  export type DoctorSpecializationUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    status?: EnumDoctorStatusFieldUpdateOperationsInput | $Enums.DoctorStatus
    doctors?: DoctorUpdateManyWithoutSpecializationNestedInput
  }

  export type DoctorSpecializationUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    status?: EnumDoctorStatusFieldUpdateOperationsInput | $Enums.DoctorStatus
    doctors?: DoctorUncheckedUpdateManyWithoutSpecializationNestedInput
  }

  export type DoctorSpecializationCreateManyInput = {
    id?: string
    name: string
    status?: $Enums.DoctorStatus
  }

  export type DoctorSpecializationUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    status?: EnumDoctorStatusFieldUpdateOperationsInput | $Enums.DoctorStatus
  }

  export type DoctorSpecializationUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    status?: EnumDoctorStatusFieldUpdateOperationsInput | $Enums.DoctorStatus
  }

  export type DoctorDocumentCreateInput = {
    id?: string
    documentType: $Enums.DocumentType
    fileUrl: string
    verificationStatus?: $Enums.VerificationStatus
    createdAt?: Date | string
    doctor: DoctorCreateNestedOneWithoutDocumentsInput
  }

  export type DoctorDocumentUncheckedCreateInput = {
    id?: string
    documentType: $Enums.DocumentType
    fileUrl: string
    verificationStatus?: $Enums.VerificationStatus
    doctorId: string
    createdAt?: Date | string
  }

  export type DoctorDocumentUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    documentType?: EnumDocumentTypeFieldUpdateOperationsInput | $Enums.DocumentType
    fileUrl?: StringFieldUpdateOperationsInput | string
    verificationStatus?: EnumVerificationStatusFieldUpdateOperationsInput | $Enums.VerificationStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    doctor?: DoctorUpdateOneRequiredWithoutDocumentsNestedInput
  }

  export type DoctorDocumentUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    documentType?: EnumDocumentTypeFieldUpdateOperationsInput | $Enums.DocumentType
    fileUrl?: StringFieldUpdateOperationsInput | string
    verificationStatus?: EnumVerificationStatusFieldUpdateOperationsInput | $Enums.VerificationStatus
    doctorId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type DoctorDocumentCreateManyInput = {
    id?: string
    documentType: $Enums.DocumentType
    fileUrl: string
    verificationStatus?: $Enums.VerificationStatus
    doctorId: string
    createdAt?: Date | string
  }

  export type DoctorDocumentUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    documentType?: EnumDocumentTypeFieldUpdateOperationsInput | $Enums.DocumentType
    fileUrl?: StringFieldUpdateOperationsInput | string
    verificationStatus?: EnumVerificationStatusFieldUpdateOperationsInput | $Enums.VerificationStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type DoctorDocumentUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    documentType?: EnumDocumentTypeFieldUpdateOperationsInput | $Enums.DocumentType
    fileUrl?: StringFieldUpdateOperationsInput | string
    verificationStatus?: EnumVerificationStatusFieldUpdateOperationsInput | $Enums.VerificationStatus
    doctorId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type DoctorScheduleCreateInput = {
    id?: string
    dayName: string
    startTime: string
    endTime: string
    slotDuration: number
    status?: $Enums.ScheduleStatus
    doctor: DoctorCreateNestedOneWithoutSchedulesInput
  }

  export type DoctorScheduleUncheckedCreateInput = {
    id?: string
    doctorId: string
    dayName: string
    startTime: string
    endTime: string
    slotDuration: number
    status?: $Enums.ScheduleStatus
  }

  export type DoctorScheduleUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    dayName?: StringFieldUpdateOperationsInput | string
    startTime?: StringFieldUpdateOperationsInput | string
    endTime?: StringFieldUpdateOperationsInput | string
    slotDuration?: IntFieldUpdateOperationsInput | number
    status?: EnumScheduleStatusFieldUpdateOperationsInput | $Enums.ScheduleStatus
    doctor?: DoctorUpdateOneRequiredWithoutSchedulesNestedInput
  }

  export type DoctorScheduleUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    doctorId?: StringFieldUpdateOperationsInput | string
    dayName?: StringFieldUpdateOperationsInput | string
    startTime?: StringFieldUpdateOperationsInput | string
    endTime?: StringFieldUpdateOperationsInput | string
    slotDuration?: IntFieldUpdateOperationsInput | number
    status?: EnumScheduleStatusFieldUpdateOperationsInput | $Enums.ScheduleStatus
  }

  export type DoctorScheduleCreateManyInput = {
    id?: string
    doctorId: string
    dayName: string
    startTime: string
    endTime: string
    slotDuration: number
    status?: $Enums.ScheduleStatus
  }

  export type DoctorScheduleUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    dayName?: StringFieldUpdateOperationsInput | string
    startTime?: StringFieldUpdateOperationsInput | string
    endTime?: StringFieldUpdateOperationsInput | string
    slotDuration?: IntFieldUpdateOperationsInput | number
    status?: EnumScheduleStatusFieldUpdateOperationsInput | $Enums.ScheduleStatus
  }

  export type DoctorScheduleUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    doctorId?: StringFieldUpdateOperationsInput | string
    dayName?: StringFieldUpdateOperationsInput | string
    startTime?: StringFieldUpdateOperationsInput | string
    endTime?: StringFieldUpdateOperationsInput | string
    slotDuration?: IntFieldUpdateOperationsInput | number
    status?: EnumScheduleStatusFieldUpdateOperationsInput | $Enums.ScheduleStatus
  }

  export type outletCreateInput = {
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
    childUsers?: OutletChildUserCreateNestedManyWithoutOutletInput
    roles?: RoleCreateNestedManyWithoutOutletInput
    patients?: PatientCreateNestedManyWithoutOutletInput
    doctors?: DoctorCreateNestedManyWithoutOutletInput
  }

  export type outletUncheckedCreateInput = {
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
    childUsers?: OutletChildUserUncheckedCreateNestedManyWithoutOutletInput
    roles?: RoleUncheckedCreateNestedManyWithoutOutletInput
    patients?: PatientUncheckedCreateNestedManyWithoutOutletInput
    doctors?: DoctorUncheckedCreateNestedManyWithoutOutletInput
  }

  export type outletUpdateInput = {
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
    childUsers?: OutletChildUserUpdateManyWithoutOutletNestedInput
    roles?: RoleUpdateManyWithoutOutletNestedInput
    patients?: PatientUpdateManyWithoutOutletNestedInput
    doctors?: DoctorUpdateManyWithoutOutletNestedInput
  }

  export type outletUncheckedUpdateInput = {
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
    childUsers?: OutletChildUserUncheckedUpdateManyWithoutOutletNestedInput
    roles?: RoleUncheckedUpdateManyWithoutOutletNestedInput
    patients?: PatientUncheckedUpdateManyWithoutOutletNestedInput
    doctors?: DoctorUncheckedUpdateManyWithoutOutletNestedInput
  }

  export type outletCreateManyInput = {
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

  export type outletUpdateManyMutationInput = {
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

  export type outletUncheckedUpdateManyInput = {
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

  export type OutletChildUserCreateInput = {
    id?: string
    name: string
    email: string
    phone?: string | null
    password: string
    isActive?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    outlet: outletCreateNestedOneWithoutChildUsersInput
    userRoles?: OutletUserRoleCreateNestedManyWithoutOutletChildUserInput
  }

  export type OutletChildUserUncheckedCreateInput = {
    id?: string
    outletId: string
    name: string
    email: string
    phone?: string | null
    password: string
    isActive?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    userRoles?: OutletUserRoleUncheckedCreateNestedManyWithoutOutletChildUserInput
  }

  export type OutletChildUserUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    password?: StringFieldUpdateOperationsInput | string
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    outlet?: outletUpdateOneRequiredWithoutChildUsersNestedInput
    userRoles?: OutletUserRoleUpdateManyWithoutOutletChildUserNestedInput
  }

  export type OutletChildUserUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    outletId?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    password?: StringFieldUpdateOperationsInput | string
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    userRoles?: OutletUserRoleUncheckedUpdateManyWithoutOutletChildUserNestedInput
  }

  export type OutletChildUserCreateManyInput = {
    id?: string
    outletId: string
    name: string
    email: string
    phone?: string | null
    password: string
    isActive?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type OutletChildUserUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    password?: StringFieldUpdateOperationsInput | string
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type OutletChildUserUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    outletId?: StringFieldUpdateOperationsInput | string
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
    outlet?: outletCreateNestedOneWithoutRolesInput
    superAdmin?: SuperAdminsCreateNestedOneWithoutRolesInput
    rolePermissions?: RolePermissionCreateNestedManyWithoutRoleInput
    OutletUserRoles?: OutletUserRoleCreateNestedManyWithoutRoleInput
    superAdminUserRoles?: SuperAdminUserRoleCreateNestedManyWithoutRoleInput
  }

  export type RoleUncheckedCreateInput = {
    id?: string
    name: string
    ownerType: $Enums.RoleOwnerType
    outletId?: string | null
    superAdminId?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    rolePermissions?: RolePermissionUncheckedCreateNestedManyWithoutRoleInput
    OutletUserRoles?: OutletUserRoleUncheckedCreateNestedManyWithoutRoleInput
    superAdminUserRoles?: SuperAdminUserRoleUncheckedCreateNestedManyWithoutRoleInput
  }

  export type RoleUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    ownerType?: EnumRoleOwnerTypeFieldUpdateOperationsInput | $Enums.RoleOwnerType
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    outlet?: outletUpdateOneWithoutRolesNestedInput
    superAdmin?: SuperAdminsUpdateOneWithoutRolesNestedInput
    rolePermissions?: RolePermissionUpdateManyWithoutRoleNestedInput
    OutletUserRoles?: OutletUserRoleUpdateManyWithoutRoleNestedInput
    superAdminUserRoles?: SuperAdminUserRoleUpdateManyWithoutRoleNestedInput
  }

  export type RoleUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    ownerType?: EnumRoleOwnerTypeFieldUpdateOperationsInput | $Enums.RoleOwnerType
    outletId?: NullableStringFieldUpdateOperationsInput | string | null
    superAdminId?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    rolePermissions?: RolePermissionUncheckedUpdateManyWithoutRoleNestedInput
    OutletUserRoles?: OutletUserRoleUncheckedUpdateManyWithoutRoleNestedInput
    superAdminUserRoles?: SuperAdminUserRoleUncheckedUpdateManyWithoutRoleNestedInput
  }

  export type RoleCreateManyInput = {
    id?: string
    name: string
    ownerType: $Enums.RoleOwnerType
    outletId?: string | null
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
    outletId?: NullableStringFieldUpdateOperationsInput | string | null
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

  export type OutletUserRoleCreateInput = {
    id?: string
    createdAt?: Date | string
    OutletChildUser: OutletChildUserCreateNestedOneWithoutUserRolesInput
    role: RoleCreateNestedOneWithoutOutletUserRolesInput
  }

  export type OutletUserRoleUncheckedCreateInput = {
    id?: string
    OutletChildUserId: string
    roleId: string
    createdAt?: Date | string
  }

  export type OutletUserRoleUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    OutletChildUser?: OutletChildUserUpdateOneRequiredWithoutUserRolesNestedInput
    role?: RoleUpdateOneRequiredWithoutOutletUserRolesNestedInput
  }

  export type OutletUserRoleUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    OutletChildUserId?: StringFieldUpdateOperationsInput | string
    roleId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type OutletUserRoleCreateManyInput = {
    id?: string
    OutletChildUserId: string
    roleId: string
    createdAt?: Date | string
  }

  export type OutletUserRoleUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type OutletUserRoleUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    OutletChildUserId?: StringFieldUpdateOperationsInput | string
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

  export type EnumPatientStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.PatientStatus | EnumPatientStatusFieldRefInput<$PrismaModel>
    in?: $Enums.PatientStatus[]
    notIn?: $Enums.PatientStatus[]
    not?: NestedEnumPatientStatusFilter<$PrismaModel> | $Enums.PatientStatus
  }

  export type OutletNullableScalarRelationFilter = {
    is?: outletWhereInput | null
    isNot?: outletWhereInput | null
  }

  export type PatientOrderByRelevanceInput = {
    fields: PatientOrderByRelevanceFieldEnum | PatientOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type PatientCountOrderByAggregateInput = {
    id?: SortOrder
    referenceName?: SortOrder
    fullName?: SortOrder
    mobileNumber?: SortOrder
    email?: SortOrder
    password?: SortOrder
    dateOfBirth?: SortOrder
    age?: SortOrder
    bloodGroup?: SortOrder
    gender?: SortOrder
    address?: SortOrder
    emergencyContact?: SortOrder
    status?: SortOrder
    otp?: SortOrder
    otpExpiresAt?: SortOrder
    outletId?: SortOrder
    isActive?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type PatientAvgOrderByAggregateInput = {
    age?: SortOrder
  }

  export type PatientMaxOrderByAggregateInput = {
    id?: SortOrder
    referenceName?: SortOrder
    fullName?: SortOrder
    mobileNumber?: SortOrder
    email?: SortOrder
    password?: SortOrder
    dateOfBirth?: SortOrder
    age?: SortOrder
    bloodGroup?: SortOrder
    gender?: SortOrder
    address?: SortOrder
    emergencyContact?: SortOrder
    status?: SortOrder
    otp?: SortOrder
    otpExpiresAt?: SortOrder
    outletId?: SortOrder
    isActive?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type PatientMinOrderByAggregateInput = {
    id?: SortOrder
    referenceName?: SortOrder
    fullName?: SortOrder
    mobileNumber?: SortOrder
    email?: SortOrder
    password?: SortOrder
    dateOfBirth?: SortOrder
    age?: SortOrder
    bloodGroup?: SortOrder
    gender?: SortOrder
    address?: SortOrder
    emergencyContact?: SortOrder
    status?: SortOrder
    otp?: SortOrder
    otpExpiresAt?: SortOrder
    outletId?: SortOrder
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

  export type EnumPatientStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.PatientStatus | EnumPatientStatusFieldRefInput<$PrismaModel>
    in?: $Enums.PatientStatus[]
    notIn?: $Enums.PatientStatus[]
    not?: NestedEnumPatientStatusWithAggregatesFilter<$PrismaModel> | $Enums.PatientStatus
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumPatientStatusFilter<$PrismaModel>
    _max?: NestedEnumPatientStatusFilter<$PrismaModel>
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

  export type EnumDoctorStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.DoctorStatus | EnumDoctorStatusFieldRefInput<$PrismaModel>
    in?: $Enums.DoctorStatus[]
    notIn?: $Enums.DoctorStatus[]
    not?: NestedEnumDoctorStatusFilter<$PrismaModel> | $Enums.DoctorStatus
  }

  export type EnumDoctorOnlineStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.DoctorOnlineStatus | EnumDoctorOnlineStatusFieldRefInput<$PrismaModel>
    in?: $Enums.DoctorOnlineStatus[]
    notIn?: $Enums.DoctorOnlineStatus[]
    not?: NestedEnumDoctorOnlineStatusFilter<$PrismaModel> | $Enums.DoctorOnlineStatus
  }

  export type DoctorSpecializationScalarRelationFilter = {
    is?: DoctorSpecializationWhereInput
    isNot?: DoctorSpecializationWhereInput
  }

  export type DoctorDocumentListRelationFilter = {
    every?: DoctorDocumentWhereInput
    some?: DoctorDocumentWhereInput
    none?: DoctorDocumentWhereInput
  }

  export type DoctorScheduleListRelationFilter = {
    every?: DoctorScheduleWhereInput
    some?: DoctorScheduleWhereInput
    none?: DoctorScheduleWhereInput
  }

  export type DoctorDocumentOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type DoctorScheduleOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type DoctorOrderByRelevanceInput = {
    fields: DoctorOrderByRelevanceFieldEnum | DoctorOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type DoctorCountOrderByAggregateInput = {
    id?: SortOrder
    doctorCode?: SortOrder
    fullName?: SortOrder
    mobile?: SortOrder
    email?: SortOrder
    password?: SortOrder
    bmdcNumber?: SortOrder
    subSpecialization?: SortOrder
    qualification?: SortOrder
    experienceYears?: SortOrder
    currentDesignation?: SortOrder
    consultationFee?: SortOrder
    status?: SortOrder
    onlineStatus?: SortOrder
    outletId?: SortOrder
    specializationId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type DoctorAvgOrderByAggregateInput = {
    experienceYears?: SortOrder
    consultationFee?: SortOrder
  }

  export type DoctorMaxOrderByAggregateInput = {
    id?: SortOrder
    doctorCode?: SortOrder
    fullName?: SortOrder
    mobile?: SortOrder
    email?: SortOrder
    password?: SortOrder
    bmdcNumber?: SortOrder
    subSpecialization?: SortOrder
    qualification?: SortOrder
    experienceYears?: SortOrder
    currentDesignation?: SortOrder
    consultationFee?: SortOrder
    status?: SortOrder
    onlineStatus?: SortOrder
    outletId?: SortOrder
    specializationId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type DoctorMinOrderByAggregateInput = {
    id?: SortOrder
    doctorCode?: SortOrder
    fullName?: SortOrder
    mobile?: SortOrder
    email?: SortOrder
    password?: SortOrder
    bmdcNumber?: SortOrder
    subSpecialization?: SortOrder
    qualification?: SortOrder
    experienceYears?: SortOrder
    currentDesignation?: SortOrder
    consultationFee?: SortOrder
    status?: SortOrder
    onlineStatus?: SortOrder
    outletId?: SortOrder
    specializationId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type DoctorSumOrderByAggregateInput = {
    experienceYears?: SortOrder
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

  export type EnumDoctorStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.DoctorStatus | EnumDoctorStatusFieldRefInput<$PrismaModel>
    in?: $Enums.DoctorStatus[]
    notIn?: $Enums.DoctorStatus[]
    not?: NestedEnumDoctorStatusWithAggregatesFilter<$PrismaModel> | $Enums.DoctorStatus
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumDoctorStatusFilter<$PrismaModel>
    _max?: NestedEnumDoctorStatusFilter<$PrismaModel>
  }

  export type EnumDoctorOnlineStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.DoctorOnlineStatus | EnumDoctorOnlineStatusFieldRefInput<$PrismaModel>
    in?: $Enums.DoctorOnlineStatus[]
    notIn?: $Enums.DoctorOnlineStatus[]
    not?: NestedEnumDoctorOnlineStatusWithAggregatesFilter<$PrismaModel> | $Enums.DoctorOnlineStatus
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumDoctorOnlineStatusFilter<$PrismaModel>
    _max?: NestedEnumDoctorOnlineStatusFilter<$PrismaModel>
  }

  export type DoctorListRelationFilter = {
    every?: DoctorWhereInput
    some?: DoctorWhereInput
    none?: DoctorWhereInput
  }

  export type DoctorOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type DoctorSpecializationOrderByRelevanceInput = {
    fields: DoctorSpecializationOrderByRelevanceFieldEnum | DoctorSpecializationOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type DoctorSpecializationCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    status?: SortOrder
  }

  export type DoctorSpecializationMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    status?: SortOrder
  }

  export type DoctorSpecializationMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    status?: SortOrder
  }

  export type EnumDocumentTypeFilter<$PrismaModel = never> = {
    equals?: $Enums.DocumentType | EnumDocumentTypeFieldRefInput<$PrismaModel>
    in?: $Enums.DocumentType[]
    notIn?: $Enums.DocumentType[]
    not?: NestedEnumDocumentTypeFilter<$PrismaModel> | $Enums.DocumentType
  }

  export type EnumVerificationStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.VerificationStatus | EnumVerificationStatusFieldRefInput<$PrismaModel>
    in?: $Enums.VerificationStatus[]
    notIn?: $Enums.VerificationStatus[]
    not?: NestedEnumVerificationStatusFilter<$PrismaModel> | $Enums.VerificationStatus
  }

  export type DoctorScalarRelationFilter = {
    is?: DoctorWhereInput
    isNot?: DoctorWhereInput
  }

  export type DoctorDocumentOrderByRelevanceInput = {
    fields: DoctorDocumentOrderByRelevanceFieldEnum | DoctorDocumentOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type DoctorDocumentCountOrderByAggregateInput = {
    id?: SortOrder
    documentType?: SortOrder
    fileUrl?: SortOrder
    verificationStatus?: SortOrder
    doctorId?: SortOrder
    createdAt?: SortOrder
  }

  export type DoctorDocumentMaxOrderByAggregateInput = {
    id?: SortOrder
    documentType?: SortOrder
    fileUrl?: SortOrder
    verificationStatus?: SortOrder
    doctorId?: SortOrder
    createdAt?: SortOrder
  }

  export type DoctorDocumentMinOrderByAggregateInput = {
    id?: SortOrder
    documentType?: SortOrder
    fileUrl?: SortOrder
    verificationStatus?: SortOrder
    doctorId?: SortOrder
    createdAt?: SortOrder
  }

  export type EnumDocumentTypeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.DocumentType | EnumDocumentTypeFieldRefInput<$PrismaModel>
    in?: $Enums.DocumentType[]
    notIn?: $Enums.DocumentType[]
    not?: NestedEnumDocumentTypeWithAggregatesFilter<$PrismaModel> | $Enums.DocumentType
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumDocumentTypeFilter<$PrismaModel>
    _max?: NestedEnumDocumentTypeFilter<$PrismaModel>
  }

  export type EnumVerificationStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.VerificationStatus | EnumVerificationStatusFieldRefInput<$PrismaModel>
    in?: $Enums.VerificationStatus[]
    notIn?: $Enums.VerificationStatus[]
    not?: NestedEnumVerificationStatusWithAggregatesFilter<$PrismaModel> | $Enums.VerificationStatus
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumVerificationStatusFilter<$PrismaModel>
    _max?: NestedEnumVerificationStatusFilter<$PrismaModel>
  }

  export type IntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type EnumScheduleStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.ScheduleStatus | EnumScheduleStatusFieldRefInput<$PrismaModel>
    in?: $Enums.ScheduleStatus[]
    notIn?: $Enums.ScheduleStatus[]
    not?: NestedEnumScheduleStatusFilter<$PrismaModel> | $Enums.ScheduleStatus
  }

  export type DoctorScheduleOrderByRelevanceInput = {
    fields: DoctorScheduleOrderByRelevanceFieldEnum | DoctorScheduleOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type DoctorScheduleCountOrderByAggregateInput = {
    id?: SortOrder
    doctorId?: SortOrder
    dayName?: SortOrder
    startTime?: SortOrder
    endTime?: SortOrder
    slotDuration?: SortOrder
    status?: SortOrder
  }

  export type DoctorScheduleAvgOrderByAggregateInput = {
    slotDuration?: SortOrder
  }

  export type DoctorScheduleMaxOrderByAggregateInput = {
    id?: SortOrder
    doctorId?: SortOrder
    dayName?: SortOrder
    startTime?: SortOrder
    endTime?: SortOrder
    slotDuration?: SortOrder
    status?: SortOrder
  }

  export type DoctorScheduleMinOrderByAggregateInput = {
    id?: SortOrder
    doctorId?: SortOrder
    dayName?: SortOrder
    startTime?: SortOrder
    endTime?: SortOrder
    slotDuration?: SortOrder
    status?: SortOrder
  }

  export type DoctorScheduleSumOrderByAggregateInput = {
    slotDuration?: SortOrder
  }

  export type IntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
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

  export type EnumScheduleStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.ScheduleStatus | EnumScheduleStatusFieldRefInput<$PrismaModel>
    in?: $Enums.ScheduleStatus[]
    notIn?: $Enums.ScheduleStatus[]
    not?: NestedEnumScheduleStatusWithAggregatesFilter<$PrismaModel> | $Enums.ScheduleStatus
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumScheduleStatusFilter<$PrismaModel>
    _max?: NestedEnumScheduleStatusFilter<$PrismaModel>
  }

  export type OutletChildUserListRelationFilter = {
    every?: OutletChildUserWhereInput
    some?: OutletChildUserWhereInput
    none?: OutletChildUserWhereInput
  }

  export type PatientListRelationFilter = {
    every?: PatientWhereInput
    some?: PatientWhereInput
    none?: PatientWhereInput
  }

  export type OutletChildUserOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type PatientOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type outletOrderByRelevanceInput = {
    fields: outletOrderByRelevanceFieldEnum | outletOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type outletCountOrderByAggregateInput = {
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

  export type outletMaxOrderByAggregateInput = {
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

  export type outletMinOrderByAggregateInput = {
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

  export type OutletScalarRelationFilter = {
    is?: outletWhereInput
    isNot?: outletWhereInput
  }

  export type OutletUserRoleListRelationFilter = {
    every?: OutletUserRoleWhereInput
    some?: OutletUserRoleWhereInput
    none?: OutletUserRoleWhereInput
  }

  export type OutletUserRoleOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type OutletChildUserOrderByRelevanceInput = {
    fields: OutletChildUserOrderByRelevanceFieldEnum | OutletChildUserOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type OutletChildUserEmailOutletIdCompoundUniqueInput = {
    email: string
    outletId: string
  }

  export type OutletChildUserCountOrderByAggregateInput = {
    id?: SortOrder
    outletId?: SortOrder
    name?: SortOrder
    email?: SortOrder
    phone?: SortOrder
    password?: SortOrder
    isActive?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type OutletChildUserMaxOrderByAggregateInput = {
    id?: SortOrder
    outletId?: SortOrder
    name?: SortOrder
    email?: SortOrder
    phone?: SortOrder
    password?: SortOrder
    isActive?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type OutletChildUserMinOrderByAggregateInput = {
    id?: SortOrder
    outletId?: SortOrder
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

  export type RoleNameOutletIdCompoundUniqueInput = {
    name: string
    outletId: string
  }

  export type RoleNameSuperAdminIdCompoundUniqueInput = {
    name: string
    superAdminId: string
  }

  export type RoleCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    ownerType?: SortOrder
    outletId?: SortOrder
    superAdminId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type RoleMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    ownerType?: SortOrder
    outletId?: SortOrder
    superAdminId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type RoleMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    ownerType?: SortOrder
    outletId?: SortOrder
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

  export type OutletChildUserScalarRelationFilter = {
    is?: OutletChildUserWhereInput
    isNot?: OutletChildUserWhereInput
  }

  export type OutletUserRoleOrderByRelevanceInput = {
    fields: OutletUserRoleOrderByRelevanceFieldEnum | OutletUserRoleOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type OutletUserRoleOutletChildUserIdRoleIdCompoundUniqueInput = {
    OutletChildUserId: string
    roleId: string
  }

  export type OutletUserRoleCountOrderByAggregateInput = {
    id?: SortOrder
    OutletChildUserId?: SortOrder
    roleId?: SortOrder
    createdAt?: SortOrder
  }

  export type OutletUserRoleMaxOrderByAggregateInput = {
    id?: SortOrder
    OutletChildUserId?: SortOrder
    roleId?: SortOrder
    createdAt?: SortOrder
  }

  export type OutletUserRoleMinOrderByAggregateInput = {
    id?: SortOrder
    OutletChildUserId?: SortOrder
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

  export type outletCreateNestedOneWithoutPatientsInput = {
    create?: XOR<outletCreateWithoutPatientsInput, outletUncheckedCreateWithoutPatientsInput>
    connectOrCreate?: outletCreateOrConnectWithoutPatientsInput
    connect?: outletWhereUniqueInput
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

  export type EnumPatientStatusFieldUpdateOperationsInput = {
    set?: $Enums.PatientStatus
  }

  export type outletUpdateOneWithoutPatientsNestedInput = {
    create?: XOR<outletCreateWithoutPatientsInput, outletUncheckedCreateWithoutPatientsInput>
    connectOrCreate?: outletCreateOrConnectWithoutPatientsInput
    upsert?: outletUpsertWithoutPatientsInput
    disconnect?: outletWhereInput | boolean
    delete?: outletWhereInput | boolean
    connect?: outletWhereUniqueInput
    update?: XOR<XOR<outletUpdateToOneWithWhereWithoutPatientsInput, outletUpdateWithoutPatientsInput>, outletUncheckedUpdateWithoutPatientsInput>
  }

  export type outletCreateNestedOneWithoutDoctorsInput = {
    create?: XOR<outletCreateWithoutDoctorsInput, outletUncheckedCreateWithoutDoctorsInput>
    connectOrCreate?: outletCreateOrConnectWithoutDoctorsInput
    connect?: outletWhereUniqueInput
  }

  export type DoctorSpecializationCreateNestedOneWithoutDoctorsInput = {
    create?: XOR<DoctorSpecializationCreateWithoutDoctorsInput, DoctorSpecializationUncheckedCreateWithoutDoctorsInput>
    connectOrCreate?: DoctorSpecializationCreateOrConnectWithoutDoctorsInput
    connect?: DoctorSpecializationWhereUniqueInput
  }

  export type DoctorDocumentCreateNestedManyWithoutDoctorInput = {
    create?: XOR<DoctorDocumentCreateWithoutDoctorInput, DoctorDocumentUncheckedCreateWithoutDoctorInput> | DoctorDocumentCreateWithoutDoctorInput[] | DoctorDocumentUncheckedCreateWithoutDoctorInput[]
    connectOrCreate?: DoctorDocumentCreateOrConnectWithoutDoctorInput | DoctorDocumentCreateOrConnectWithoutDoctorInput[]
    createMany?: DoctorDocumentCreateManyDoctorInputEnvelope
    connect?: DoctorDocumentWhereUniqueInput | DoctorDocumentWhereUniqueInput[]
  }

  export type DoctorScheduleCreateNestedManyWithoutDoctorInput = {
    create?: XOR<DoctorScheduleCreateWithoutDoctorInput, DoctorScheduleUncheckedCreateWithoutDoctorInput> | DoctorScheduleCreateWithoutDoctorInput[] | DoctorScheduleUncheckedCreateWithoutDoctorInput[]
    connectOrCreate?: DoctorScheduleCreateOrConnectWithoutDoctorInput | DoctorScheduleCreateOrConnectWithoutDoctorInput[]
    createMany?: DoctorScheduleCreateManyDoctorInputEnvelope
    connect?: DoctorScheduleWhereUniqueInput | DoctorScheduleWhereUniqueInput[]
  }

  export type DoctorDocumentUncheckedCreateNestedManyWithoutDoctorInput = {
    create?: XOR<DoctorDocumentCreateWithoutDoctorInput, DoctorDocumentUncheckedCreateWithoutDoctorInput> | DoctorDocumentCreateWithoutDoctorInput[] | DoctorDocumentUncheckedCreateWithoutDoctorInput[]
    connectOrCreate?: DoctorDocumentCreateOrConnectWithoutDoctorInput | DoctorDocumentCreateOrConnectWithoutDoctorInput[]
    createMany?: DoctorDocumentCreateManyDoctorInputEnvelope
    connect?: DoctorDocumentWhereUniqueInput | DoctorDocumentWhereUniqueInput[]
  }

  export type DoctorScheduleUncheckedCreateNestedManyWithoutDoctorInput = {
    create?: XOR<DoctorScheduleCreateWithoutDoctorInput, DoctorScheduleUncheckedCreateWithoutDoctorInput> | DoctorScheduleCreateWithoutDoctorInput[] | DoctorScheduleUncheckedCreateWithoutDoctorInput[]
    connectOrCreate?: DoctorScheduleCreateOrConnectWithoutDoctorInput | DoctorScheduleCreateOrConnectWithoutDoctorInput[]
    createMany?: DoctorScheduleCreateManyDoctorInputEnvelope
    connect?: DoctorScheduleWhereUniqueInput | DoctorScheduleWhereUniqueInput[]
  }

  export type NullableDecimalFieldUpdateOperationsInput = {
    set?: Decimal | DecimalJsLike | number | string | null
    increment?: Decimal | DecimalJsLike | number | string
    decrement?: Decimal | DecimalJsLike | number | string
    multiply?: Decimal | DecimalJsLike | number | string
    divide?: Decimal | DecimalJsLike | number | string
  }

  export type EnumDoctorStatusFieldUpdateOperationsInput = {
    set?: $Enums.DoctorStatus
  }

  export type EnumDoctorOnlineStatusFieldUpdateOperationsInput = {
    set?: $Enums.DoctorOnlineStatus
  }

  export type outletUpdateOneWithoutDoctorsNestedInput = {
    create?: XOR<outletCreateWithoutDoctorsInput, outletUncheckedCreateWithoutDoctorsInput>
    connectOrCreate?: outletCreateOrConnectWithoutDoctorsInput
    upsert?: outletUpsertWithoutDoctorsInput
    disconnect?: outletWhereInput | boolean
    delete?: outletWhereInput | boolean
    connect?: outletWhereUniqueInput
    update?: XOR<XOR<outletUpdateToOneWithWhereWithoutDoctorsInput, outletUpdateWithoutDoctorsInput>, outletUncheckedUpdateWithoutDoctorsInput>
  }

  export type DoctorSpecializationUpdateOneRequiredWithoutDoctorsNestedInput = {
    create?: XOR<DoctorSpecializationCreateWithoutDoctorsInput, DoctorSpecializationUncheckedCreateWithoutDoctorsInput>
    connectOrCreate?: DoctorSpecializationCreateOrConnectWithoutDoctorsInput
    upsert?: DoctorSpecializationUpsertWithoutDoctorsInput
    connect?: DoctorSpecializationWhereUniqueInput
    update?: XOR<XOR<DoctorSpecializationUpdateToOneWithWhereWithoutDoctorsInput, DoctorSpecializationUpdateWithoutDoctorsInput>, DoctorSpecializationUncheckedUpdateWithoutDoctorsInput>
  }

  export type DoctorDocumentUpdateManyWithoutDoctorNestedInput = {
    create?: XOR<DoctorDocumentCreateWithoutDoctorInput, DoctorDocumentUncheckedCreateWithoutDoctorInput> | DoctorDocumentCreateWithoutDoctorInput[] | DoctorDocumentUncheckedCreateWithoutDoctorInput[]
    connectOrCreate?: DoctorDocumentCreateOrConnectWithoutDoctorInput | DoctorDocumentCreateOrConnectWithoutDoctorInput[]
    upsert?: DoctorDocumentUpsertWithWhereUniqueWithoutDoctorInput | DoctorDocumentUpsertWithWhereUniqueWithoutDoctorInput[]
    createMany?: DoctorDocumentCreateManyDoctorInputEnvelope
    set?: DoctorDocumentWhereUniqueInput | DoctorDocumentWhereUniqueInput[]
    disconnect?: DoctorDocumentWhereUniqueInput | DoctorDocumentWhereUniqueInput[]
    delete?: DoctorDocumentWhereUniqueInput | DoctorDocumentWhereUniqueInput[]
    connect?: DoctorDocumentWhereUniqueInput | DoctorDocumentWhereUniqueInput[]
    update?: DoctorDocumentUpdateWithWhereUniqueWithoutDoctorInput | DoctorDocumentUpdateWithWhereUniqueWithoutDoctorInput[]
    updateMany?: DoctorDocumentUpdateManyWithWhereWithoutDoctorInput | DoctorDocumentUpdateManyWithWhereWithoutDoctorInput[]
    deleteMany?: DoctorDocumentScalarWhereInput | DoctorDocumentScalarWhereInput[]
  }

  export type DoctorScheduleUpdateManyWithoutDoctorNestedInput = {
    create?: XOR<DoctorScheduleCreateWithoutDoctorInput, DoctorScheduleUncheckedCreateWithoutDoctorInput> | DoctorScheduleCreateWithoutDoctorInput[] | DoctorScheduleUncheckedCreateWithoutDoctorInput[]
    connectOrCreate?: DoctorScheduleCreateOrConnectWithoutDoctorInput | DoctorScheduleCreateOrConnectWithoutDoctorInput[]
    upsert?: DoctorScheduleUpsertWithWhereUniqueWithoutDoctorInput | DoctorScheduleUpsertWithWhereUniqueWithoutDoctorInput[]
    createMany?: DoctorScheduleCreateManyDoctorInputEnvelope
    set?: DoctorScheduleWhereUniqueInput | DoctorScheduleWhereUniqueInput[]
    disconnect?: DoctorScheduleWhereUniqueInput | DoctorScheduleWhereUniqueInput[]
    delete?: DoctorScheduleWhereUniqueInput | DoctorScheduleWhereUniqueInput[]
    connect?: DoctorScheduleWhereUniqueInput | DoctorScheduleWhereUniqueInput[]
    update?: DoctorScheduleUpdateWithWhereUniqueWithoutDoctorInput | DoctorScheduleUpdateWithWhereUniqueWithoutDoctorInput[]
    updateMany?: DoctorScheduleUpdateManyWithWhereWithoutDoctorInput | DoctorScheduleUpdateManyWithWhereWithoutDoctorInput[]
    deleteMany?: DoctorScheduleScalarWhereInput | DoctorScheduleScalarWhereInput[]
  }

  export type DoctorDocumentUncheckedUpdateManyWithoutDoctorNestedInput = {
    create?: XOR<DoctorDocumentCreateWithoutDoctorInput, DoctorDocumentUncheckedCreateWithoutDoctorInput> | DoctorDocumentCreateWithoutDoctorInput[] | DoctorDocumentUncheckedCreateWithoutDoctorInput[]
    connectOrCreate?: DoctorDocumentCreateOrConnectWithoutDoctorInput | DoctorDocumentCreateOrConnectWithoutDoctorInput[]
    upsert?: DoctorDocumentUpsertWithWhereUniqueWithoutDoctorInput | DoctorDocumentUpsertWithWhereUniqueWithoutDoctorInput[]
    createMany?: DoctorDocumentCreateManyDoctorInputEnvelope
    set?: DoctorDocumentWhereUniqueInput | DoctorDocumentWhereUniqueInput[]
    disconnect?: DoctorDocumentWhereUniqueInput | DoctorDocumentWhereUniqueInput[]
    delete?: DoctorDocumentWhereUniqueInput | DoctorDocumentWhereUniqueInput[]
    connect?: DoctorDocumentWhereUniqueInput | DoctorDocumentWhereUniqueInput[]
    update?: DoctorDocumentUpdateWithWhereUniqueWithoutDoctorInput | DoctorDocumentUpdateWithWhereUniqueWithoutDoctorInput[]
    updateMany?: DoctorDocumentUpdateManyWithWhereWithoutDoctorInput | DoctorDocumentUpdateManyWithWhereWithoutDoctorInput[]
    deleteMany?: DoctorDocumentScalarWhereInput | DoctorDocumentScalarWhereInput[]
  }

  export type DoctorScheduleUncheckedUpdateManyWithoutDoctorNestedInput = {
    create?: XOR<DoctorScheduleCreateWithoutDoctorInput, DoctorScheduleUncheckedCreateWithoutDoctorInput> | DoctorScheduleCreateWithoutDoctorInput[] | DoctorScheduleUncheckedCreateWithoutDoctorInput[]
    connectOrCreate?: DoctorScheduleCreateOrConnectWithoutDoctorInput | DoctorScheduleCreateOrConnectWithoutDoctorInput[]
    upsert?: DoctorScheduleUpsertWithWhereUniqueWithoutDoctorInput | DoctorScheduleUpsertWithWhereUniqueWithoutDoctorInput[]
    createMany?: DoctorScheduleCreateManyDoctorInputEnvelope
    set?: DoctorScheduleWhereUniqueInput | DoctorScheduleWhereUniqueInput[]
    disconnect?: DoctorScheduleWhereUniqueInput | DoctorScheduleWhereUniqueInput[]
    delete?: DoctorScheduleWhereUniqueInput | DoctorScheduleWhereUniqueInput[]
    connect?: DoctorScheduleWhereUniqueInput | DoctorScheduleWhereUniqueInput[]
    update?: DoctorScheduleUpdateWithWhereUniqueWithoutDoctorInput | DoctorScheduleUpdateWithWhereUniqueWithoutDoctorInput[]
    updateMany?: DoctorScheduleUpdateManyWithWhereWithoutDoctorInput | DoctorScheduleUpdateManyWithWhereWithoutDoctorInput[]
    deleteMany?: DoctorScheduleScalarWhereInput | DoctorScheduleScalarWhereInput[]
  }

  export type DoctorCreateNestedManyWithoutSpecializationInput = {
    create?: XOR<DoctorCreateWithoutSpecializationInput, DoctorUncheckedCreateWithoutSpecializationInput> | DoctorCreateWithoutSpecializationInput[] | DoctorUncheckedCreateWithoutSpecializationInput[]
    connectOrCreate?: DoctorCreateOrConnectWithoutSpecializationInput | DoctorCreateOrConnectWithoutSpecializationInput[]
    createMany?: DoctorCreateManySpecializationInputEnvelope
    connect?: DoctorWhereUniqueInput | DoctorWhereUniqueInput[]
  }

  export type DoctorUncheckedCreateNestedManyWithoutSpecializationInput = {
    create?: XOR<DoctorCreateWithoutSpecializationInput, DoctorUncheckedCreateWithoutSpecializationInput> | DoctorCreateWithoutSpecializationInput[] | DoctorUncheckedCreateWithoutSpecializationInput[]
    connectOrCreate?: DoctorCreateOrConnectWithoutSpecializationInput | DoctorCreateOrConnectWithoutSpecializationInput[]
    createMany?: DoctorCreateManySpecializationInputEnvelope
    connect?: DoctorWhereUniqueInput | DoctorWhereUniqueInput[]
  }

  export type DoctorUpdateManyWithoutSpecializationNestedInput = {
    create?: XOR<DoctorCreateWithoutSpecializationInput, DoctorUncheckedCreateWithoutSpecializationInput> | DoctorCreateWithoutSpecializationInput[] | DoctorUncheckedCreateWithoutSpecializationInput[]
    connectOrCreate?: DoctorCreateOrConnectWithoutSpecializationInput | DoctorCreateOrConnectWithoutSpecializationInput[]
    upsert?: DoctorUpsertWithWhereUniqueWithoutSpecializationInput | DoctorUpsertWithWhereUniqueWithoutSpecializationInput[]
    createMany?: DoctorCreateManySpecializationInputEnvelope
    set?: DoctorWhereUniqueInput | DoctorWhereUniqueInput[]
    disconnect?: DoctorWhereUniqueInput | DoctorWhereUniqueInput[]
    delete?: DoctorWhereUniqueInput | DoctorWhereUniqueInput[]
    connect?: DoctorWhereUniqueInput | DoctorWhereUniqueInput[]
    update?: DoctorUpdateWithWhereUniqueWithoutSpecializationInput | DoctorUpdateWithWhereUniqueWithoutSpecializationInput[]
    updateMany?: DoctorUpdateManyWithWhereWithoutSpecializationInput | DoctorUpdateManyWithWhereWithoutSpecializationInput[]
    deleteMany?: DoctorScalarWhereInput | DoctorScalarWhereInput[]
  }

  export type DoctorUncheckedUpdateManyWithoutSpecializationNestedInput = {
    create?: XOR<DoctorCreateWithoutSpecializationInput, DoctorUncheckedCreateWithoutSpecializationInput> | DoctorCreateWithoutSpecializationInput[] | DoctorUncheckedCreateWithoutSpecializationInput[]
    connectOrCreate?: DoctorCreateOrConnectWithoutSpecializationInput | DoctorCreateOrConnectWithoutSpecializationInput[]
    upsert?: DoctorUpsertWithWhereUniqueWithoutSpecializationInput | DoctorUpsertWithWhereUniqueWithoutSpecializationInput[]
    createMany?: DoctorCreateManySpecializationInputEnvelope
    set?: DoctorWhereUniqueInput | DoctorWhereUniqueInput[]
    disconnect?: DoctorWhereUniqueInput | DoctorWhereUniqueInput[]
    delete?: DoctorWhereUniqueInput | DoctorWhereUniqueInput[]
    connect?: DoctorWhereUniqueInput | DoctorWhereUniqueInput[]
    update?: DoctorUpdateWithWhereUniqueWithoutSpecializationInput | DoctorUpdateWithWhereUniqueWithoutSpecializationInput[]
    updateMany?: DoctorUpdateManyWithWhereWithoutSpecializationInput | DoctorUpdateManyWithWhereWithoutSpecializationInput[]
    deleteMany?: DoctorScalarWhereInput | DoctorScalarWhereInput[]
  }

  export type DoctorCreateNestedOneWithoutDocumentsInput = {
    create?: XOR<DoctorCreateWithoutDocumentsInput, DoctorUncheckedCreateWithoutDocumentsInput>
    connectOrCreate?: DoctorCreateOrConnectWithoutDocumentsInput
    connect?: DoctorWhereUniqueInput
  }

  export type EnumDocumentTypeFieldUpdateOperationsInput = {
    set?: $Enums.DocumentType
  }

  export type EnumVerificationStatusFieldUpdateOperationsInput = {
    set?: $Enums.VerificationStatus
  }

  export type DoctorUpdateOneRequiredWithoutDocumentsNestedInput = {
    create?: XOR<DoctorCreateWithoutDocumentsInput, DoctorUncheckedCreateWithoutDocumentsInput>
    connectOrCreate?: DoctorCreateOrConnectWithoutDocumentsInput
    upsert?: DoctorUpsertWithoutDocumentsInput
    connect?: DoctorWhereUniqueInput
    update?: XOR<XOR<DoctorUpdateToOneWithWhereWithoutDocumentsInput, DoctorUpdateWithoutDocumentsInput>, DoctorUncheckedUpdateWithoutDocumentsInput>
  }

  export type DoctorCreateNestedOneWithoutSchedulesInput = {
    create?: XOR<DoctorCreateWithoutSchedulesInput, DoctorUncheckedCreateWithoutSchedulesInput>
    connectOrCreate?: DoctorCreateOrConnectWithoutSchedulesInput
    connect?: DoctorWhereUniqueInput
  }

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type EnumScheduleStatusFieldUpdateOperationsInput = {
    set?: $Enums.ScheduleStatus
  }

  export type DoctorUpdateOneRequiredWithoutSchedulesNestedInput = {
    create?: XOR<DoctorCreateWithoutSchedulesInput, DoctorUncheckedCreateWithoutSchedulesInput>
    connectOrCreate?: DoctorCreateOrConnectWithoutSchedulesInput
    upsert?: DoctorUpsertWithoutSchedulesInput
    connect?: DoctorWhereUniqueInput
    update?: XOR<XOR<DoctorUpdateToOneWithWhereWithoutSchedulesInput, DoctorUpdateWithoutSchedulesInput>, DoctorUncheckedUpdateWithoutSchedulesInput>
  }

  export type OutletChildUserCreateNestedManyWithoutOutletInput = {
    create?: XOR<OutletChildUserCreateWithoutOutletInput, OutletChildUserUncheckedCreateWithoutOutletInput> | OutletChildUserCreateWithoutOutletInput[] | OutletChildUserUncheckedCreateWithoutOutletInput[]
    connectOrCreate?: OutletChildUserCreateOrConnectWithoutOutletInput | OutletChildUserCreateOrConnectWithoutOutletInput[]
    createMany?: OutletChildUserCreateManyOutletInputEnvelope
    connect?: OutletChildUserWhereUniqueInput | OutletChildUserWhereUniqueInput[]
  }

  export type RoleCreateNestedManyWithoutOutletInput = {
    create?: XOR<RoleCreateWithoutOutletInput, RoleUncheckedCreateWithoutOutletInput> | RoleCreateWithoutOutletInput[] | RoleUncheckedCreateWithoutOutletInput[]
    connectOrCreate?: RoleCreateOrConnectWithoutOutletInput | RoleCreateOrConnectWithoutOutletInput[]
    createMany?: RoleCreateManyOutletInputEnvelope
    connect?: RoleWhereUniqueInput | RoleWhereUniqueInput[]
  }

  export type PatientCreateNestedManyWithoutOutletInput = {
    create?: XOR<PatientCreateWithoutOutletInput, PatientUncheckedCreateWithoutOutletInput> | PatientCreateWithoutOutletInput[] | PatientUncheckedCreateWithoutOutletInput[]
    connectOrCreate?: PatientCreateOrConnectWithoutOutletInput | PatientCreateOrConnectWithoutOutletInput[]
    createMany?: PatientCreateManyOutletInputEnvelope
    connect?: PatientWhereUniqueInput | PatientWhereUniqueInput[]
  }

  export type DoctorCreateNestedManyWithoutOutletInput = {
    create?: XOR<DoctorCreateWithoutOutletInput, DoctorUncheckedCreateWithoutOutletInput> | DoctorCreateWithoutOutletInput[] | DoctorUncheckedCreateWithoutOutletInput[]
    connectOrCreate?: DoctorCreateOrConnectWithoutOutletInput | DoctorCreateOrConnectWithoutOutletInput[]
    createMany?: DoctorCreateManyOutletInputEnvelope
    connect?: DoctorWhereUniqueInput | DoctorWhereUniqueInput[]
  }

  export type OutletChildUserUncheckedCreateNestedManyWithoutOutletInput = {
    create?: XOR<OutletChildUserCreateWithoutOutletInput, OutletChildUserUncheckedCreateWithoutOutletInput> | OutletChildUserCreateWithoutOutletInput[] | OutletChildUserUncheckedCreateWithoutOutletInput[]
    connectOrCreate?: OutletChildUserCreateOrConnectWithoutOutletInput | OutletChildUserCreateOrConnectWithoutOutletInput[]
    createMany?: OutletChildUserCreateManyOutletInputEnvelope
    connect?: OutletChildUserWhereUniqueInput | OutletChildUserWhereUniqueInput[]
  }

  export type RoleUncheckedCreateNestedManyWithoutOutletInput = {
    create?: XOR<RoleCreateWithoutOutletInput, RoleUncheckedCreateWithoutOutletInput> | RoleCreateWithoutOutletInput[] | RoleUncheckedCreateWithoutOutletInput[]
    connectOrCreate?: RoleCreateOrConnectWithoutOutletInput | RoleCreateOrConnectWithoutOutletInput[]
    createMany?: RoleCreateManyOutletInputEnvelope
    connect?: RoleWhereUniqueInput | RoleWhereUniqueInput[]
  }

  export type PatientUncheckedCreateNestedManyWithoutOutletInput = {
    create?: XOR<PatientCreateWithoutOutletInput, PatientUncheckedCreateWithoutOutletInput> | PatientCreateWithoutOutletInput[] | PatientUncheckedCreateWithoutOutletInput[]
    connectOrCreate?: PatientCreateOrConnectWithoutOutletInput | PatientCreateOrConnectWithoutOutletInput[]
    createMany?: PatientCreateManyOutletInputEnvelope
    connect?: PatientWhereUniqueInput | PatientWhereUniqueInput[]
  }

  export type DoctorUncheckedCreateNestedManyWithoutOutletInput = {
    create?: XOR<DoctorCreateWithoutOutletInput, DoctorUncheckedCreateWithoutOutletInput> | DoctorCreateWithoutOutletInput[] | DoctorUncheckedCreateWithoutOutletInput[]
    connectOrCreate?: DoctorCreateOrConnectWithoutOutletInput | DoctorCreateOrConnectWithoutOutletInput[]
    createMany?: DoctorCreateManyOutletInputEnvelope
    connect?: DoctorWhereUniqueInput | DoctorWhereUniqueInput[]
  }

  export type OutletChildUserUpdateManyWithoutOutletNestedInput = {
    create?: XOR<OutletChildUserCreateWithoutOutletInput, OutletChildUserUncheckedCreateWithoutOutletInput> | OutletChildUserCreateWithoutOutletInput[] | OutletChildUserUncheckedCreateWithoutOutletInput[]
    connectOrCreate?: OutletChildUserCreateOrConnectWithoutOutletInput | OutletChildUserCreateOrConnectWithoutOutletInput[]
    upsert?: OutletChildUserUpsertWithWhereUniqueWithoutOutletInput | OutletChildUserUpsertWithWhereUniqueWithoutOutletInput[]
    createMany?: OutletChildUserCreateManyOutletInputEnvelope
    set?: OutletChildUserWhereUniqueInput | OutletChildUserWhereUniqueInput[]
    disconnect?: OutletChildUserWhereUniqueInput | OutletChildUserWhereUniqueInput[]
    delete?: OutletChildUserWhereUniqueInput | OutletChildUserWhereUniqueInput[]
    connect?: OutletChildUserWhereUniqueInput | OutletChildUserWhereUniqueInput[]
    update?: OutletChildUserUpdateWithWhereUniqueWithoutOutletInput | OutletChildUserUpdateWithWhereUniqueWithoutOutletInput[]
    updateMany?: OutletChildUserUpdateManyWithWhereWithoutOutletInput | OutletChildUserUpdateManyWithWhereWithoutOutletInput[]
    deleteMany?: OutletChildUserScalarWhereInput | OutletChildUserScalarWhereInput[]
  }

  export type RoleUpdateManyWithoutOutletNestedInput = {
    create?: XOR<RoleCreateWithoutOutletInput, RoleUncheckedCreateWithoutOutletInput> | RoleCreateWithoutOutletInput[] | RoleUncheckedCreateWithoutOutletInput[]
    connectOrCreate?: RoleCreateOrConnectWithoutOutletInput | RoleCreateOrConnectWithoutOutletInput[]
    upsert?: RoleUpsertWithWhereUniqueWithoutOutletInput | RoleUpsertWithWhereUniqueWithoutOutletInput[]
    createMany?: RoleCreateManyOutletInputEnvelope
    set?: RoleWhereUniqueInput | RoleWhereUniqueInput[]
    disconnect?: RoleWhereUniqueInput | RoleWhereUniqueInput[]
    delete?: RoleWhereUniqueInput | RoleWhereUniqueInput[]
    connect?: RoleWhereUniqueInput | RoleWhereUniqueInput[]
    update?: RoleUpdateWithWhereUniqueWithoutOutletInput | RoleUpdateWithWhereUniqueWithoutOutletInput[]
    updateMany?: RoleUpdateManyWithWhereWithoutOutletInput | RoleUpdateManyWithWhereWithoutOutletInput[]
    deleteMany?: RoleScalarWhereInput | RoleScalarWhereInput[]
  }

  export type PatientUpdateManyWithoutOutletNestedInput = {
    create?: XOR<PatientCreateWithoutOutletInput, PatientUncheckedCreateWithoutOutletInput> | PatientCreateWithoutOutletInput[] | PatientUncheckedCreateWithoutOutletInput[]
    connectOrCreate?: PatientCreateOrConnectWithoutOutletInput | PatientCreateOrConnectWithoutOutletInput[]
    upsert?: PatientUpsertWithWhereUniqueWithoutOutletInput | PatientUpsertWithWhereUniqueWithoutOutletInput[]
    createMany?: PatientCreateManyOutletInputEnvelope
    set?: PatientWhereUniqueInput | PatientWhereUniqueInput[]
    disconnect?: PatientWhereUniqueInput | PatientWhereUniqueInput[]
    delete?: PatientWhereUniqueInput | PatientWhereUniqueInput[]
    connect?: PatientWhereUniqueInput | PatientWhereUniqueInput[]
    update?: PatientUpdateWithWhereUniqueWithoutOutletInput | PatientUpdateWithWhereUniqueWithoutOutletInput[]
    updateMany?: PatientUpdateManyWithWhereWithoutOutletInput | PatientUpdateManyWithWhereWithoutOutletInput[]
    deleteMany?: PatientScalarWhereInput | PatientScalarWhereInput[]
  }

  export type DoctorUpdateManyWithoutOutletNestedInput = {
    create?: XOR<DoctorCreateWithoutOutletInput, DoctorUncheckedCreateWithoutOutletInput> | DoctorCreateWithoutOutletInput[] | DoctorUncheckedCreateWithoutOutletInput[]
    connectOrCreate?: DoctorCreateOrConnectWithoutOutletInput | DoctorCreateOrConnectWithoutOutletInput[]
    upsert?: DoctorUpsertWithWhereUniqueWithoutOutletInput | DoctorUpsertWithWhereUniqueWithoutOutletInput[]
    createMany?: DoctorCreateManyOutletInputEnvelope
    set?: DoctorWhereUniqueInput | DoctorWhereUniqueInput[]
    disconnect?: DoctorWhereUniqueInput | DoctorWhereUniqueInput[]
    delete?: DoctorWhereUniqueInput | DoctorWhereUniqueInput[]
    connect?: DoctorWhereUniqueInput | DoctorWhereUniqueInput[]
    update?: DoctorUpdateWithWhereUniqueWithoutOutletInput | DoctorUpdateWithWhereUniqueWithoutOutletInput[]
    updateMany?: DoctorUpdateManyWithWhereWithoutOutletInput | DoctorUpdateManyWithWhereWithoutOutletInput[]
    deleteMany?: DoctorScalarWhereInput | DoctorScalarWhereInput[]
  }

  export type OutletChildUserUncheckedUpdateManyWithoutOutletNestedInput = {
    create?: XOR<OutletChildUserCreateWithoutOutletInput, OutletChildUserUncheckedCreateWithoutOutletInput> | OutletChildUserCreateWithoutOutletInput[] | OutletChildUserUncheckedCreateWithoutOutletInput[]
    connectOrCreate?: OutletChildUserCreateOrConnectWithoutOutletInput | OutletChildUserCreateOrConnectWithoutOutletInput[]
    upsert?: OutletChildUserUpsertWithWhereUniqueWithoutOutletInput | OutletChildUserUpsertWithWhereUniqueWithoutOutletInput[]
    createMany?: OutletChildUserCreateManyOutletInputEnvelope
    set?: OutletChildUserWhereUniqueInput | OutletChildUserWhereUniqueInput[]
    disconnect?: OutletChildUserWhereUniqueInput | OutletChildUserWhereUniqueInput[]
    delete?: OutletChildUserWhereUniqueInput | OutletChildUserWhereUniqueInput[]
    connect?: OutletChildUserWhereUniqueInput | OutletChildUserWhereUniqueInput[]
    update?: OutletChildUserUpdateWithWhereUniqueWithoutOutletInput | OutletChildUserUpdateWithWhereUniqueWithoutOutletInput[]
    updateMany?: OutletChildUserUpdateManyWithWhereWithoutOutletInput | OutletChildUserUpdateManyWithWhereWithoutOutletInput[]
    deleteMany?: OutletChildUserScalarWhereInput | OutletChildUserScalarWhereInput[]
  }

  export type RoleUncheckedUpdateManyWithoutOutletNestedInput = {
    create?: XOR<RoleCreateWithoutOutletInput, RoleUncheckedCreateWithoutOutletInput> | RoleCreateWithoutOutletInput[] | RoleUncheckedCreateWithoutOutletInput[]
    connectOrCreate?: RoleCreateOrConnectWithoutOutletInput | RoleCreateOrConnectWithoutOutletInput[]
    upsert?: RoleUpsertWithWhereUniqueWithoutOutletInput | RoleUpsertWithWhereUniqueWithoutOutletInput[]
    createMany?: RoleCreateManyOutletInputEnvelope
    set?: RoleWhereUniqueInput | RoleWhereUniqueInput[]
    disconnect?: RoleWhereUniqueInput | RoleWhereUniqueInput[]
    delete?: RoleWhereUniqueInput | RoleWhereUniqueInput[]
    connect?: RoleWhereUniqueInput | RoleWhereUniqueInput[]
    update?: RoleUpdateWithWhereUniqueWithoutOutletInput | RoleUpdateWithWhereUniqueWithoutOutletInput[]
    updateMany?: RoleUpdateManyWithWhereWithoutOutletInput | RoleUpdateManyWithWhereWithoutOutletInput[]
    deleteMany?: RoleScalarWhereInput | RoleScalarWhereInput[]
  }

  export type PatientUncheckedUpdateManyWithoutOutletNestedInput = {
    create?: XOR<PatientCreateWithoutOutletInput, PatientUncheckedCreateWithoutOutletInput> | PatientCreateWithoutOutletInput[] | PatientUncheckedCreateWithoutOutletInput[]
    connectOrCreate?: PatientCreateOrConnectWithoutOutletInput | PatientCreateOrConnectWithoutOutletInput[]
    upsert?: PatientUpsertWithWhereUniqueWithoutOutletInput | PatientUpsertWithWhereUniqueWithoutOutletInput[]
    createMany?: PatientCreateManyOutletInputEnvelope
    set?: PatientWhereUniqueInput | PatientWhereUniqueInput[]
    disconnect?: PatientWhereUniqueInput | PatientWhereUniqueInput[]
    delete?: PatientWhereUniqueInput | PatientWhereUniqueInput[]
    connect?: PatientWhereUniqueInput | PatientWhereUniqueInput[]
    update?: PatientUpdateWithWhereUniqueWithoutOutletInput | PatientUpdateWithWhereUniqueWithoutOutletInput[]
    updateMany?: PatientUpdateManyWithWhereWithoutOutletInput | PatientUpdateManyWithWhereWithoutOutletInput[]
    deleteMany?: PatientScalarWhereInput | PatientScalarWhereInput[]
  }

  export type DoctorUncheckedUpdateManyWithoutOutletNestedInput = {
    create?: XOR<DoctorCreateWithoutOutletInput, DoctorUncheckedCreateWithoutOutletInput> | DoctorCreateWithoutOutletInput[] | DoctorUncheckedCreateWithoutOutletInput[]
    connectOrCreate?: DoctorCreateOrConnectWithoutOutletInput | DoctorCreateOrConnectWithoutOutletInput[]
    upsert?: DoctorUpsertWithWhereUniqueWithoutOutletInput | DoctorUpsertWithWhereUniqueWithoutOutletInput[]
    createMany?: DoctorCreateManyOutletInputEnvelope
    set?: DoctorWhereUniqueInput | DoctorWhereUniqueInput[]
    disconnect?: DoctorWhereUniqueInput | DoctorWhereUniqueInput[]
    delete?: DoctorWhereUniqueInput | DoctorWhereUniqueInput[]
    connect?: DoctorWhereUniqueInput | DoctorWhereUniqueInput[]
    update?: DoctorUpdateWithWhereUniqueWithoutOutletInput | DoctorUpdateWithWhereUniqueWithoutOutletInput[]
    updateMany?: DoctorUpdateManyWithWhereWithoutOutletInput | DoctorUpdateManyWithWhereWithoutOutletInput[]
    deleteMany?: DoctorScalarWhereInput | DoctorScalarWhereInput[]
  }

  export type outletCreateNestedOneWithoutChildUsersInput = {
    create?: XOR<outletCreateWithoutChildUsersInput, outletUncheckedCreateWithoutChildUsersInput>
    connectOrCreate?: outletCreateOrConnectWithoutChildUsersInput
    connect?: outletWhereUniqueInput
  }

  export type OutletUserRoleCreateNestedManyWithoutOutletChildUserInput = {
    create?: XOR<OutletUserRoleCreateWithoutOutletChildUserInput, OutletUserRoleUncheckedCreateWithoutOutletChildUserInput> | OutletUserRoleCreateWithoutOutletChildUserInput[] | OutletUserRoleUncheckedCreateWithoutOutletChildUserInput[]
    connectOrCreate?: OutletUserRoleCreateOrConnectWithoutOutletChildUserInput | OutletUserRoleCreateOrConnectWithoutOutletChildUserInput[]
    createMany?: OutletUserRoleCreateManyOutletChildUserInputEnvelope
    connect?: OutletUserRoleWhereUniqueInput | OutletUserRoleWhereUniqueInput[]
  }

  export type OutletUserRoleUncheckedCreateNestedManyWithoutOutletChildUserInput = {
    create?: XOR<OutletUserRoleCreateWithoutOutletChildUserInput, OutletUserRoleUncheckedCreateWithoutOutletChildUserInput> | OutletUserRoleCreateWithoutOutletChildUserInput[] | OutletUserRoleUncheckedCreateWithoutOutletChildUserInput[]
    connectOrCreate?: OutletUserRoleCreateOrConnectWithoutOutletChildUserInput | OutletUserRoleCreateOrConnectWithoutOutletChildUserInput[]
    createMany?: OutletUserRoleCreateManyOutletChildUserInputEnvelope
    connect?: OutletUserRoleWhereUniqueInput | OutletUserRoleWhereUniqueInput[]
  }

  export type outletUpdateOneRequiredWithoutChildUsersNestedInput = {
    create?: XOR<outletCreateWithoutChildUsersInput, outletUncheckedCreateWithoutChildUsersInput>
    connectOrCreate?: outletCreateOrConnectWithoutChildUsersInput
    upsert?: outletUpsertWithoutChildUsersInput
    connect?: outletWhereUniqueInput
    update?: XOR<XOR<outletUpdateToOneWithWhereWithoutChildUsersInput, outletUpdateWithoutChildUsersInput>, outletUncheckedUpdateWithoutChildUsersInput>
  }

  export type OutletUserRoleUpdateManyWithoutOutletChildUserNestedInput = {
    create?: XOR<OutletUserRoleCreateWithoutOutletChildUserInput, OutletUserRoleUncheckedCreateWithoutOutletChildUserInput> | OutletUserRoleCreateWithoutOutletChildUserInput[] | OutletUserRoleUncheckedCreateWithoutOutletChildUserInput[]
    connectOrCreate?: OutletUserRoleCreateOrConnectWithoutOutletChildUserInput | OutletUserRoleCreateOrConnectWithoutOutletChildUserInput[]
    upsert?: OutletUserRoleUpsertWithWhereUniqueWithoutOutletChildUserInput | OutletUserRoleUpsertWithWhereUniqueWithoutOutletChildUserInput[]
    createMany?: OutletUserRoleCreateManyOutletChildUserInputEnvelope
    set?: OutletUserRoleWhereUniqueInput | OutletUserRoleWhereUniqueInput[]
    disconnect?: OutletUserRoleWhereUniqueInput | OutletUserRoleWhereUniqueInput[]
    delete?: OutletUserRoleWhereUniqueInput | OutletUserRoleWhereUniqueInput[]
    connect?: OutletUserRoleWhereUniqueInput | OutletUserRoleWhereUniqueInput[]
    update?: OutletUserRoleUpdateWithWhereUniqueWithoutOutletChildUserInput | OutletUserRoleUpdateWithWhereUniqueWithoutOutletChildUserInput[]
    updateMany?: OutletUserRoleUpdateManyWithWhereWithoutOutletChildUserInput | OutletUserRoleUpdateManyWithWhereWithoutOutletChildUserInput[]
    deleteMany?: OutletUserRoleScalarWhereInput | OutletUserRoleScalarWhereInput[]
  }

  export type OutletUserRoleUncheckedUpdateManyWithoutOutletChildUserNestedInput = {
    create?: XOR<OutletUserRoleCreateWithoutOutletChildUserInput, OutletUserRoleUncheckedCreateWithoutOutletChildUserInput> | OutletUserRoleCreateWithoutOutletChildUserInput[] | OutletUserRoleUncheckedCreateWithoutOutletChildUserInput[]
    connectOrCreate?: OutletUserRoleCreateOrConnectWithoutOutletChildUserInput | OutletUserRoleCreateOrConnectWithoutOutletChildUserInput[]
    upsert?: OutletUserRoleUpsertWithWhereUniqueWithoutOutletChildUserInput | OutletUserRoleUpsertWithWhereUniqueWithoutOutletChildUserInput[]
    createMany?: OutletUserRoleCreateManyOutletChildUserInputEnvelope
    set?: OutletUserRoleWhereUniqueInput | OutletUserRoleWhereUniqueInput[]
    disconnect?: OutletUserRoleWhereUniqueInput | OutletUserRoleWhereUniqueInput[]
    delete?: OutletUserRoleWhereUniqueInput | OutletUserRoleWhereUniqueInput[]
    connect?: OutletUserRoleWhereUniqueInput | OutletUserRoleWhereUniqueInput[]
    update?: OutletUserRoleUpdateWithWhereUniqueWithoutOutletChildUserInput | OutletUserRoleUpdateWithWhereUniqueWithoutOutletChildUserInput[]
    updateMany?: OutletUserRoleUpdateManyWithWhereWithoutOutletChildUserInput | OutletUserRoleUpdateManyWithWhereWithoutOutletChildUserInput[]
    deleteMany?: OutletUserRoleScalarWhereInput | OutletUserRoleScalarWhereInput[]
  }

  export type outletCreateNestedOneWithoutRolesInput = {
    create?: XOR<outletCreateWithoutRolesInput, outletUncheckedCreateWithoutRolesInput>
    connectOrCreate?: outletCreateOrConnectWithoutRolesInput
    connect?: outletWhereUniqueInput
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

  export type OutletUserRoleCreateNestedManyWithoutRoleInput = {
    create?: XOR<OutletUserRoleCreateWithoutRoleInput, OutletUserRoleUncheckedCreateWithoutRoleInput> | OutletUserRoleCreateWithoutRoleInput[] | OutletUserRoleUncheckedCreateWithoutRoleInput[]
    connectOrCreate?: OutletUserRoleCreateOrConnectWithoutRoleInput | OutletUserRoleCreateOrConnectWithoutRoleInput[]
    createMany?: OutletUserRoleCreateManyRoleInputEnvelope
    connect?: OutletUserRoleWhereUniqueInput | OutletUserRoleWhereUniqueInput[]
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

  export type OutletUserRoleUncheckedCreateNestedManyWithoutRoleInput = {
    create?: XOR<OutletUserRoleCreateWithoutRoleInput, OutletUserRoleUncheckedCreateWithoutRoleInput> | OutletUserRoleCreateWithoutRoleInput[] | OutletUserRoleUncheckedCreateWithoutRoleInput[]
    connectOrCreate?: OutletUserRoleCreateOrConnectWithoutRoleInput | OutletUserRoleCreateOrConnectWithoutRoleInput[]
    createMany?: OutletUserRoleCreateManyRoleInputEnvelope
    connect?: OutletUserRoleWhereUniqueInput | OutletUserRoleWhereUniqueInput[]
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

  export type outletUpdateOneWithoutRolesNestedInput = {
    create?: XOR<outletCreateWithoutRolesInput, outletUncheckedCreateWithoutRolesInput>
    connectOrCreate?: outletCreateOrConnectWithoutRolesInput
    upsert?: outletUpsertWithoutRolesInput
    disconnect?: outletWhereInput | boolean
    delete?: outletWhereInput | boolean
    connect?: outletWhereUniqueInput
    update?: XOR<XOR<outletUpdateToOneWithWhereWithoutRolesInput, outletUpdateWithoutRolesInput>, outletUncheckedUpdateWithoutRolesInput>
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

  export type OutletUserRoleUpdateManyWithoutRoleNestedInput = {
    create?: XOR<OutletUserRoleCreateWithoutRoleInput, OutletUserRoleUncheckedCreateWithoutRoleInput> | OutletUserRoleCreateWithoutRoleInput[] | OutletUserRoleUncheckedCreateWithoutRoleInput[]
    connectOrCreate?: OutletUserRoleCreateOrConnectWithoutRoleInput | OutletUserRoleCreateOrConnectWithoutRoleInput[]
    upsert?: OutletUserRoleUpsertWithWhereUniqueWithoutRoleInput | OutletUserRoleUpsertWithWhereUniqueWithoutRoleInput[]
    createMany?: OutletUserRoleCreateManyRoleInputEnvelope
    set?: OutletUserRoleWhereUniqueInput | OutletUserRoleWhereUniqueInput[]
    disconnect?: OutletUserRoleWhereUniqueInput | OutletUserRoleWhereUniqueInput[]
    delete?: OutletUserRoleWhereUniqueInput | OutletUserRoleWhereUniqueInput[]
    connect?: OutletUserRoleWhereUniqueInput | OutletUserRoleWhereUniqueInput[]
    update?: OutletUserRoleUpdateWithWhereUniqueWithoutRoleInput | OutletUserRoleUpdateWithWhereUniqueWithoutRoleInput[]
    updateMany?: OutletUserRoleUpdateManyWithWhereWithoutRoleInput | OutletUserRoleUpdateManyWithWhereWithoutRoleInput[]
    deleteMany?: OutletUserRoleScalarWhereInput | OutletUserRoleScalarWhereInput[]
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

  export type OutletUserRoleUncheckedUpdateManyWithoutRoleNestedInput = {
    create?: XOR<OutletUserRoleCreateWithoutRoleInput, OutletUserRoleUncheckedCreateWithoutRoleInput> | OutletUserRoleCreateWithoutRoleInput[] | OutletUserRoleUncheckedCreateWithoutRoleInput[]
    connectOrCreate?: OutletUserRoleCreateOrConnectWithoutRoleInput | OutletUserRoleCreateOrConnectWithoutRoleInput[]
    upsert?: OutletUserRoleUpsertWithWhereUniqueWithoutRoleInput | OutletUserRoleUpsertWithWhereUniqueWithoutRoleInput[]
    createMany?: OutletUserRoleCreateManyRoleInputEnvelope
    set?: OutletUserRoleWhereUniqueInput | OutletUserRoleWhereUniqueInput[]
    disconnect?: OutletUserRoleWhereUniqueInput | OutletUserRoleWhereUniqueInput[]
    delete?: OutletUserRoleWhereUniqueInput | OutletUserRoleWhereUniqueInput[]
    connect?: OutletUserRoleWhereUniqueInput | OutletUserRoleWhereUniqueInput[]
    update?: OutletUserRoleUpdateWithWhereUniqueWithoutRoleInput | OutletUserRoleUpdateWithWhereUniqueWithoutRoleInput[]
    updateMany?: OutletUserRoleUpdateManyWithWhereWithoutRoleInput | OutletUserRoleUpdateManyWithWhereWithoutRoleInput[]
    deleteMany?: OutletUserRoleScalarWhereInput | OutletUserRoleScalarWhereInput[]
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

  export type OutletChildUserCreateNestedOneWithoutUserRolesInput = {
    create?: XOR<OutletChildUserCreateWithoutUserRolesInput, OutletChildUserUncheckedCreateWithoutUserRolesInput>
    connectOrCreate?: OutletChildUserCreateOrConnectWithoutUserRolesInput
    connect?: OutletChildUserWhereUniqueInput
  }

  export type RoleCreateNestedOneWithoutOutletUserRolesInput = {
    create?: XOR<RoleCreateWithoutOutletUserRolesInput, RoleUncheckedCreateWithoutOutletUserRolesInput>
    connectOrCreate?: RoleCreateOrConnectWithoutOutletUserRolesInput
    connect?: RoleWhereUniqueInput
  }

  export type OutletChildUserUpdateOneRequiredWithoutUserRolesNestedInput = {
    create?: XOR<OutletChildUserCreateWithoutUserRolesInput, OutletChildUserUncheckedCreateWithoutUserRolesInput>
    connectOrCreate?: OutletChildUserCreateOrConnectWithoutUserRolesInput
    upsert?: OutletChildUserUpsertWithoutUserRolesInput
    connect?: OutletChildUserWhereUniqueInput
    update?: XOR<XOR<OutletChildUserUpdateToOneWithWhereWithoutUserRolesInput, OutletChildUserUpdateWithoutUserRolesInput>, OutletChildUserUncheckedUpdateWithoutUserRolesInput>
  }

  export type RoleUpdateOneRequiredWithoutOutletUserRolesNestedInput = {
    create?: XOR<RoleCreateWithoutOutletUserRolesInput, RoleUncheckedCreateWithoutOutletUserRolesInput>
    connectOrCreate?: RoleCreateOrConnectWithoutOutletUserRolesInput
    upsert?: RoleUpsertWithoutOutletUserRolesInput
    connect?: RoleWhereUniqueInput
    update?: XOR<XOR<RoleUpdateToOneWithWhereWithoutOutletUserRolesInput, RoleUpdateWithoutOutletUserRolesInput>, RoleUncheckedUpdateWithoutOutletUserRolesInput>
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

  export type NestedEnumPatientStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.PatientStatus | EnumPatientStatusFieldRefInput<$PrismaModel>
    in?: $Enums.PatientStatus[]
    notIn?: $Enums.PatientStatus[]
    not?: NestedEnumPatientStatusFilter<$PrismaModel> | $Enums.PatientStatus
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

  export type NestedEnumPatientStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.PatientStatus | EnumPatientStatusFieldRefInput<$PrismaModel>
    in?: $Enums.PatientStatus[]
    notIn?: $Enums.PatientStatus[]
    not?: NestedEnumPatientStatusWithAggregatesFilter<$PrismaModel> | $Enums.PatientStatus
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumPatientStatusFilter<$PrismaModel>
    _max?: NestedEnumPatientStatusFilter<$PrismaModel>
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

  export type NestedEnumDoctorStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.DoctorStatus | EnumDoctorStatusFieldRefInput<$PrismaModel>
    in?: $Enums.DoctorStatus[]
    notIn?: $Enums.DoctorStatus[]
    not?: NestedEnumDoctorStatusFilter<$PrismaModel> | $Enums.DoctorStatus
  }

  export type NestedEnumDoctorOnlineStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.DoctorOnlineStatus | EnumDoctorOnlineStatusFieldRefInput<$PrismaModel>
    in?: $Enums.DoctorOnlineStatus[]
    notIn?: $Enums.DoctorOnlineStatus[]
    not?: NestedEnumDoctorOnlineStatusFilter<$PrismaModel> | $Enums.DoctorOnlineStatus
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

  export type NestedEnumDoctorStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.DoctorStatus | EnumDoctorStatusFieldRefInput<$PrismaModel>
    in?: $Enums.DoctorStatus[]
    notIn?: $Enums.DoctorStatus[]
    not?: NestedEnumDoctorStatusWithAggregatesFilter<$PrismaModel> | $Enums.DoctorStatus
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumDoctorStatusFilter<$PrismaModel>
    _max?: NestedEnumDoctorStatusFilter<$PrismaModel>
  }

  export type NestedEnumDoctorOnlineStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.DoctorOnlineStatus | EnumDoctorOnlineStatusFieldRefInput<$PrismaModel>
    in?: $Enums.DoctorOnlineStatus[]
    notIn?: $Enums.DoctorOnlineStatus[]
    not?: NestedEnumDoctorOnlineStatusWithAggregatesFilter<$PrismaModel> | $Enums.DoctorOnlineStatus
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumDoctorOnlineStatusFilter<$PrismaModel>
    _max?: NestedEnumDoctorOnlineStatusFilter<$PrismaModel>
  }

  export type NestedEnumDocumentTypeFilter<$PrismaModel = never> = {
    equals?: $Enums.DocumentType | EnumDocumentTypeFieldRefInput<$PrismaModel>
    in?: $Enums.DocumentType[]
    notIn?: $Enums.DocumentType[]
    not?: NestedEnumDocumentTypeFilter<$PrismaModel> | $Enums.DocumentType
  }

  export type NestedEnumVerificationStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.VerificationStatus | EnumVerificationStatusFieldRefInput<$PrismaModel>
    in?: $Enums.VerificationStatus[]
    notIn?: $Enums.VerificationStatus[]
    not?: NestedEnumVerificationStatusFilter<$PrismaModel> | $Enums.VerificationStatus
  }

  export type NestedEnumDocumentTypeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.DocumentType | EnumDocumentTypeFieldRefInput<$PrismaModel>
    in?: $Enums.DocumentType[]
    notIn?: $Enums.DocumentType[]
    not?: NestedEnumDocumentTypeWithAggregatesFilter<$PrismaModel> | $Enums.DocumentType
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumDocumentTypeFilter<$PrismaModel>
    _max?: NestedEnumDocumentTypeFilter<$PrismaModel>
  }

  export type NestedEnumVerificationStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.VerificationStatus | EnumVerificationStatusFieldRefInput<$PrismaModel>
    in?: $Enums.VerificationStatus[]
    notIn?: $Enums.VerificationStatus[]
    not?: NestedEnumVerificationStatusWithAggregatesFilter<$PrismaModel> | $Enums.VerificationStatus
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumVerificationStatusFilter<$PrismaModel>
    _max?: NestedEnumVerificationStatusFilter<$PrismaModel>
  }

  export type NestedEnumScheduleStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.ScheduleStatus | EnumScheduleStatusFieldRefInput<$PrismaModel>
    in?: $Enums.ScheduleStatus[]
    notIn?: $Enums.ScheduleStatus[]
    not?: NestedEnumScheduleStatusFilter<$PrismaModel> | $Enums.ScheduleStatus
  }

  export type NestedIntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
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
    in?: number[]
    notIn?: number[]
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatFilter<$PrismaModel> | number
  }

  export type NestedEnumScheduleStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.ScheduleStatus | EnumScheduleStatusFieldRefInput<$PrismaModel>
    in?: $Enums.ScheduleStatus[]
    notIn?: $Enums.ScheduleStatus[]
    not?: NestedEnumScheduleStatusWithAggregatesFilter<$PrismaModel> | $Enums.ScheduleStatus
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumScheduleStatusFilter<$PrismaModel>
    _max?: NestedEnumScheduleStatusFilter<$PrismaModel>
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
    outlet?: outletCreateNestedOneWithoutRolesInput
    rolePermissions?: RolePermissionCreateNestedManyWithoutRoleInput
    OutletUserRoles?: OutletUserRoleCreateNestedManyWithoutRoleInput
    superAdminUserRoles?: SuperAdminUserRoleCreateNestedManyWithoutRoleInput
  }

  export type RoleUncheckedCreateWithoutSuperAdminInput = {
    id?: string
    name: string
    ownerType: $Enums.RoleOwnerType
    outletId?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    rolePermissions?: RolePermissionUncheckedCreateNestedManyWithoutRoleInput
    OutletUserRoles?: OutletUserRoleUncheckedCreateNestedManyWithoutRoleInput
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
    outletId?: StringNullableFilter<"Role"> | string | null
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

  export type outletCreateWithoutPatientsInput = {
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
    childUsers?: OutletChildUserCreateNestedManyWithoutOutletInput
    roles?: RoleCreateNestedManyWithoutOutletInput
    doctors?: DoctorCreateNestedManyWithoutOutletInput
  }

  export type outletUncheckedCreateWithoutPatientsInput = {
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
    childUsers?: OutletChildUserUncheckedCreateNestedManyWithoutOutletInput
    roles?: RoleUncheckedCreateNestedManyWithoutOutletInput
    doctors?: DoctorUncheckedCreateNestedManyWithoutOutletInput
  }

  export type outletCreateOrConnectWithoutPatientsInput = {
    where: outletWhereUniqueInput
    create: XOR<outletCreateWithoutPatientsInput, outletUncheckedCreateWithoutPatientsInput>
  }

  export type outletUpsertWithoutPatientsInput = {
    update: XOR<outletUpdateWithoutPatientsInput, outletUncheckedUpdateWithoutPatientsInput>
    create: XOR<outletCreateWithoutPatientsInput, outletUncheckedCreateWithoutPatientsInput>
    where?: outletWhereInput
  }

  export type outletUpdateToOneWithWhereWithoutPatientsInput = {
    where?: outletWhereInput
    data: XOR<outletUpdateWithoutPatientsInput, outletUncheckedUpdateWithoutPatientsInput>
  }

  export type outletUpdateWithoutPatientsInput = {
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
    childUsers?: OutletChildUserUpdateManyWithoutOutletNestedInput
    roles?: RoleUpdateManyWithoutOutletNestedInput
    doctors?: DoctorUpdateManyWithoutOutletNestedInput
  }

  export type outletUncheckedUpdateWithoutPatientsInput = {
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
    childUsers?: OutletChildUserUncheckedUpdateManyWithoutOutletNestedInput
    roles?: RoleUncheckedUpdateManyWithoutOutletNestedInput
    doctors?: DoctorUncheckedUpdateManyWithoutOutletNestedInput
  }

  export type outletCreateWithoutDoctorsInput = {
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
    childUsers?: OutletChildUserCreateNestedManyWithoutOutletInput
    roles?: RoleCreateNestedManyWithoutOutletInput
    patients?: PatientCreateNestedManyWithoutOutletInput
  }

  export type outletUncheckedCreateWithoutDoctorsInput = {
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
    childUsers?: OutletChildUserUncheckedCreateNestedManyWithoutOutletInput
    roles?: RoleUncheckedCreateNestedManyWithoutOutletInput
    patients?: PatientUncheckedCreateNestedManyWithoutOutletInput
  }

  export type outletCreateOrConnectWithoutDoctorsInput = {
    where: outletWhereUniqueInput
    create: XOR<outletCreateWithoutDoctorsInput, outletUncheckedCreateWithoutDoctorsInput>
  }

  export type DoctorSpecializationCreateWithoutDoctorsInput = {
    id?: string
    name: string
    status?: $Enums.DoctorStatus
  }

  export type DoctorSpecializationUncheckedCreateWithoutDoctorsInput = {
    id?: string
    name: string
    status?: $Enums.DoctorStatus
  }

  export type DoctorSpecializationCreateOrConnectWithoutDoctorsInput = {
    where: DoctorSpecializationWhereUniqueInput
    create: XOR<DoctorSpecializationCreateWithoutDoctorsInput, DoctorSpecializationUncheckedCreateWithoutDoctorsInput>
  }

  export type DoctorDocumentCreateWithoutDoctorInput = {
    id?: string
    documentType: $Enums.DocumentType
    fileUrl: string
    verificationStatus?: $Enums.VerificationStatus
    createdAt?: Date | string
  }

  export type DoctorDocumentUncheckedCreateWithoutDoctorInput = {
    id?: string
    documentType: $Enums.DocumentType
    fileUrl: string
    verificationStatus?: $Enums.VerificationStatus
    createdAt?: Date | string
  }

  export type DoctorDocumentCreateOrConnectWithoutDoctorInput = {
    where: DoctorDocumentWhereUniqueInput
    create: XOR<DoctorDocumentCreateWithoutDoctorInput, DoctorDocumentUncheckedCreateWithoutDoctorInput>
  }

  export type DoctorDocumentCreateManyDoctorInputEnvelope = {
    data: DoctorDocumentCreateManyDoctorInput | DoctorDocumentCreateManyDoctorInput[]
    skipDuplicates?: boolean
  }

  export type DoctorScheduleCreateWithoutDoctorInput = {
    id?: string
    dayName: string
    startTime: string
    endTime: string
    slotDuration: number
    status?: $Enums.ScheduleStatus
  }

  export type DoctorScheduleUncheckedCreateWithoutDoctorInput = {
    id?: string
    dayName: string
    startTime: string
    endTime: string
    slotDuration: number
    status?: $Enums.ScheduleStatus
  }

  export type DoctorScheduleCreateOrConnectWithoutDoctorInput = {
    where: DoctorScheduleWhereUniqueInput
    create: XOR<DoctorScheduleCreateWithoutDoctorInput, DoctorScheduleUncheckedCreateWithoutDoctorInput>
  }

  export type DoctorScheduleCreateManyDoctorInputEnvelope = {
    data: DoctorScheduleCreateManyDoctorInput | DoctorScheduleCreateManyDoctorInput[]
    skipDuplicates?: boolean
  }

  export type outletUpsertWithoutDoctorsInput = {
    update: XOR<outletUpdateWithoutDoctorsInput, outletUncheckedUpdateWithoutDoctorsInput>
    create: XOR<outletCreateWithoutDoctorsInput, outletUncheckedCreateWithoutDoctorsInput>
    where?: outletWhereInput
  }

  export type outletUpdateToOneWithWhereWithoutDoctorsInput = {
    where?: outletWhereInput
    data: XOR<outletUpdateWithoutDoctorsInput, outletUncheckedUpdateWithoutDoctorsInput>
  }

  export type outletUpdateWithoutDoctorsInput = {
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
    childUsers?: OutletChildUserUpdateManyWithoutOutletNestedInput
    roles?: RoleUpdateManyWithoutOutletNestedInput
    patients?: PatientUpdateManyWithoutOutletNestedInput
  }

  export type outletUncheckedUpdateWithoutDoctorsInput = {
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
    childUsers?: OutletChildUserUncheckedUpdateManyWithoutOutletNestedInput
    roles?: RoleUncheckedUpdateManyWithoutOutletNestedInput
    patients?: PatientUncheckedUpdateManyWithoutOutletNestedInput
  }

  export type DoctorSpecializationUpsertWithoutDoctorsInput = {
    update: XOR<DoctorSpecializationUpdateWithoutDoctorsInput, DoctorSpecializationUncheckedUpdateWithoutDoctorsInput>
    create: XOR<DoctorSpecializationCreateWithoutDoctorsInput, DoctorSpecializationUncheckedCreateWithoutDoctorsInput>
    where?: DoctorSpecializationWhereInput
  }

  export type DoctorSpecializationUpdateToOneWithWhereWithoutDoctorsInput = {
    where?: DoctorSpecializationWhereInput
    data: XOR<DoctorSpecializationUpdateWithoutDoctorsInput, DoctorSpecializationUncheckedUpdateWithoutDoctorsInput>
  }

  export type DoctorSpecializationUpdateWithoutDoctorsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    status?: EnumDoctorStatusFieldUpdateOperationsInput | $Enums.DoctorStatus
  }

  export type DoctorSpecializationUncheckedUpdateWithoutDoctorsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    status?: EnumDoctorStatusFieldUpdateOperationsInput | $Enums.DoctorStatus
  }

  export type DoctorDocumentUpsertWithWhereUniqueWithoutDoctorInput = {
    where: DoctorDocumentWhereUniqueInput
    update: XOR<DoctorDocumentUpdateWithoutDoctorInput, DoctorDocumentUncheckedUpdateWithoutDoctorInput>
    create: XOR<DoctorDocumentCreateWithoutDoctorInput, DoctorDocumentUncheckedCreateWithoutDoctorInput>
  }

  export type DoctorDocumentUpdateWithWhereUniqueWithoutDoctorInput = {
    where: DoctorDocumentWhereUniqueInput
    data: XOR<DoctorDocumentUpdateWithoutDoctorInput, DoctorDocumentUncheckedUpdateWithoutDoctorInput>
  }

  export type DoctorDocumentUpdateManyWithWhereWithoutDoctorInput = {
    where: DoctorDocumentScalarWhereInput
    data: XOR<DoctorDocumentUpdateManyMutationInput, DoctorDocumentUncheckedUpdateManyWithoutDoctorInput>
  }

  export type DoctorDocumentScalarWhereInput = {
    AND?: DoctorDocumentScalarWhereInput | DoctorDocumentScalarWhereInput[]
    OR?: DoctorDocumentScalarWhereInput[]
    NOT?: DoctorDocumentScalarWhereInput | DoctorDocumentScalarWhereInput[]
    id?: StringFilter<"DoctorDocument"> | string
    documentType?: EnumDocumentTypeFilter<"DoctorDocument"> | $Enums.DocumentType
    fileUrl?: StringFilter<"DoctorDocument"> | string
    verificationStatus?: EnumVerificationStatusFilter<"DoctorDocument"> | $Enums.VerificationStatus
    doctorId?: StringFilter<"DoctorDocument"> | string
    createdAt?: DateTimeFilter<"DoctorDocument"> | Date | string
  }

  export type DoctorScheduleUpsertWithWhereUniqueWithoutDoctorInput = {
    where: DoctorScheduleWhereUniqueInput
    update: XOR<DoctorScheduleUpdateWithoutDoctorInput, DoctorScheduleUncheckedUpdateWithoutDoctorInput>
    create: XOR<DoctorScheduleCreateWithoutDoctorInput, DoctorScheduleUncheckedCreateWithoutDoctorInput>
  }

  export type DoctorScheduleUpdateWithWhereUniqueWithoutDoctorInput = {
    where: DoctorScheduleWhereUniqueInput
    data: XOR<DoctorScheduleUpdateWithoutDoctorInput, DoctorScheduleUncheckedUpdateWithoutDoctorInput>
  }

  export type DoctorScheduleUpdateManyWithWhereWithoutDoctorInput = {
    where: DoctorScheduleScalarWhereInput
    data: XOR<DoctorScheduleUpdateManyMutationInput, DoctorScheduleUncheckedUpdateManyWithoutDoctorInput>
  }

  export type DoctorScheduleScalarWhereInput = {
    AND?: DoctorScheduleScalarWhereInput | DoctorScheduleScalarWhereInput[]
    OR?: DoctorScheduleScalarWhereInput[]
    NOT?: DoctorScheduleScalarWhereInput | DoctorScheduleScalarWhereInput[]
    id?: StringFilter<"DoctorSchedule"> | string
    doctorId?: StringFilter<"DoctorSchedule"> | string
    dayName?: StringFilter<"DoctorSchedule"> | string
    startTime?: StringFilter<"DoctorSchedule"> | string
    endTime?: StringFilter<"DoctorSchedule"> | string
    slotDuration?: IntFilter<"DoctorSchedule"> | number
    status?: EnumScheduleStatusFilter<"DoctorSchedule"> | $Enums.ScheduleStatus
  }

  export type DoctorCreateWithoutSpecializationInput = {
    id?: string
    doctorCode?: string | null
    fullName: string
    mobile?: string | null
    email: string
    password: string
    bmdcNumber?: string | null
    subSpecialization?: string | null
    qualification?: string | null
    experienceYears?: number | null
    currentDesignation?: string | null
    consultationFee?: Decimal | DecimalJsLike | number | string | null
    status?: $Enums.DoctorStatus
    onlineStatus?: $Enums.DoctorOnlineStatus
    createdAt?: Date | string
    updatedAt?: Date | string
    outlet?: outletCreateNestedOneWithoutDoctorsInput
    documents?: DoctorDocumentCreateNestedManyWithoutDoctorInput
    schedules?: DoctorScheduleCreateNestedManyWithoutDoctorInput
  }

  export type DoctorUncheckedCreateWithoutSpecializationInput = {
    id?: string
    doctorCode?: string | null
    fullName: string
    mobile?: string | null
    email: string
    password: string
    bmdcNumber?: string | null
    subSpecialization?: string | null
    qualification?: string | null
    experienceYears?: number | null
    currentDesignation?: string | null
    consultationFee?: Decimal | DecimalJsLike | number | string | null
    status?: $Enums.DoctorStatus
    onlineStatus?: $Enums.DoctorOnlineStatus
    outletId?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    documents?: DoctorDocumentUncheckedCreateNestedManyWithoutDoctorInput
    schedules?: DoctorScheduleUncheckedCreateNestedManyWithoutDoctorInput
  }

  export type DoctorCreateOrConnectWithoutSpecializationInput = {
    where: DoctorWhereUniqueInput
    create: XOR<DoctorCreateWithoutSpecializationInput, DoctorUncheckedCreateWithoutSpecializationInput>
  }

  export type DoctorCreateManySpecializationInputEnvelope = {
    data: DoctorCreateManySpecializationInput | DoctorCreateManySpecializationInput[]
    skipDuplicates?: boolean
  }

  export type DoctorUpsertWithWhereUniqueWithoutSpecializationInput = {
    where: DoctorWhereUniqueInput
    update: XOR<DoctorUpdateWithoutSpecializationInput, DoctorUncheckedUpdateWithoutSpecializationInput>
    create: XOR<DoctorCreateWithoutSpecializationInput, DoctorUncheckedCreateWithoutSpecializationInput>
  }

  export type DoctorUpdateWithWhereUniqueWithoutSpecializationInput = {
    where: DoctorWhereUniqueInput
    data: XOR<DoctorUpdateWithoutSpecializationInput, DoctorUncheckedUpdateWithoutSpecializationInput>
  }

  export type DoctorUpdateManyWithWhereWithoutSpecializationInput = {
    where: DoctorScalarWhereInput
    data: XOR<DoctorUpdateManyMutationInput, DoctorUncheckedUpdateManyWithoutSpecializationInput>
  }

  export type DoctorScalarWhereInput = {
    AND?: DoctorScalarWhereInput | DoctorScalarWhereInput[]
    OR?: DoctorScalarWhereInput[]
    NOT?: DoctorScalarWhereInput | DoctorScalarWhereInput[]
    id?: StringFilter<"Doctor"> | string
    doctorCode?: StringNullableFilter<"Doctor"> | string | null
    fullName?: StringFilter<"Doctor"> | string
    mobile?: StringNullableFilter<"Doctor"> | string | null
    email?: StringFilter<"Doctor"> | string
    password?: StringFilter<"Doctor"> | string
    bmdcNumber?: StringNullableFilter<"Doctor"> | string | null
    subSpecialization?: StringNullableFilter<"Doctor"> | string | null
    qualification?: StringNullableFilter<"Doctor"> | string | null
    experienceYears?: IntNullableFilter<"Doctor"> | number | null
    currentDesignation?: StringNullableFilter<"Doctor"> | string | null
    consultationFee?: DecimalNullableFilter<"Doctor"> | Decimal | DecimalJsLike | number | string | null
    status?: EnumDoctorStatusFilter<"Doctor"> | $Enums.DoctorStatus
    onlineStatus?: EnumDoctorOnlineStatusFilter<"Doctor"> | $Enums.DoctorOnlineStatus
    outletId?: StringNullableFilter<"Doctor"> | string | null
    specializationId?: StringFilter<"Doctor"> | string
    createdAt?: DateTimeFilter<"Doctor"> | Date | string
    updatedAt?: DateTimeFilter<"Doctor"> | Date | string
  }

  export type DoctorCreateWithoutDocumentsInput = {
    id?: string
    doctorCode?: string | null
    fullName: string
    mobile?: string | null
    email: string
    password: string
    bmdcNumber?: string | null
    subSpecialization?: string | null
    qualification?: string | null
    experienceYears?: number | null
    currentDesignation?: string | null
    consultationFee?: Decimal | DecimalJsLike | number | string | null
    status?: $Enums.DoctorStatus
    onlineStatus?: $Enums.DoctorOnlineStatus
    createdAt?: Date | string
    updatedAt?: Date | string
    outlet?: outletCreateNestedOneWithoutDoctorsInput
    specialization: DoctorSpecializationCreateNestedOneWithoutDoctorsInput
    schedules?: DoctorScheduleCreateNestedManyWithoutDoctorInput
  }

  export type DoctorUncheckedCreateWithoutDocumentsInput = {
    id?: string
    doctorCode?: string | null
    fullName: string
    mobile?: string | null
    email: string
    password: string
    bmdcNumber?: string | null
    subSpecialization?: string | null
    qualification?: string | null
    experienceYears?: number | null
    currentDesignation?: string | null
    consultationFee?: Decimal | DecimalJsLike | number | string | null
    status?: $Enums.DoctorStatus
    onlineStatus?: $Enums.DoctorOnlineStatus
    outletId?: string | null
    specializationId: string
    createdAt?: Date | string
    updatedAt?: Date | string
    schedules?: DoctorScheduleUncheckedCreateNestedManyWithoutDoctorInput
  }

  export type DoctorCreateOrConnectWithoutDocumentsInput = {
    where: DoctorWhereUniqueInput
    create: XOR<DoctorCreateWithoutDocumentsInput, DoctorUncheckedCreateWithoutDocumentsInput>
  }

  export type DoctorUpsertWithoutDocumentsInput = {
    update: XOR<DoctorUpdateWithoutDocumentsInput, DoctorUncheckedUpdateWithoutDocumentsInput>
    create: XOR<DoctorCreateWithoutDocumentsInput, DoctorUncheckedCreateWithoutDocumentsInput>
    where?: DoctorWhereInput
  }

  export type DoctorUpdateToOneWithWhereWithoutDocumentsInput = {
    where?: DoctorWhereInput
    data: XOR<DoctorUpdateWithoutDocumentsInput, DoctorUncheckedUpdateWithoutDocumentsInput>
  }

  export type DoctorUpdateWithoutDocumentsInput = {
    id?: StringFieldUpdateOperationsInput | string
    doctorCode?: NullableStringFieldUpdateOperationsInput | string | null
    fullName?: StringFieldUpdateOperationsInput | string
    mobile?: NullableStringFieldUpdateOperationsInput | string | null
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    bmdcNumber?: NullableStringFieldUpdateOperationsInput | string | null
    subSpecialization?: NullableStringFieldUpdateOperationsInput | string | null
    qualification?: NullableStringFieldUpdateOperationsInput | string | null
    experienceYears?: NullableIntFieldUpdateOperationsInput | number | null
    currentDesignation?: NullableStringFieldUpdateOperationsInput | string | null
    consultationFee?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    status?: EnumDoctorStatusFieldUpdateOperationsInput | $Enums.DoctorStatus
    onlineStatus?: EnumDoctorOnlineStatusFieldUpdateOperationsInput | $Enums.DoctorOnlineStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    outlet?: outletUpdateOneWithoutDoctorsNestedInput
    specialization?: DoctorSpecializationUpdateOneRequiredWithoutDoctorsNestedInput
    schedules?: DoctorScheduleUpdateManyWithoutDoctorNestedInput
  }

  export type DoctorUncheckedUpdateWithoutDocumentsInput = {
    id?: StringFieldUpdateOperationsInput | string
    doctorCode?: NullableStringFieldUpdateOperationsInput | string | null
    fullName?: StringFieldUpdateOperationsInput | string
    mobile?: NullableStringFieldUpdateOperationsInput | string | null
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    bmdcNumber?: NullableStringFieldUpdateOperationsInput | string | null
    subSpecialization?: NullableStringFieldUpdateOperationsInput | string | null
    qualification?: NullableStringFieldUpdateOperationsInput | string | null
    experienceYears?: NullableIntFieldUpdateOperationsInput | number | null
    currentDesignation?: NullableStringFieldUpdateOperationsInput | string | null
    consultationFee?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    status?: EnumDoctorStatusFieldUpdateOperationsInput | $Enums.DoctorStatus
    onlineStatus?: EnumDoctorOnlineStatusFieldUpdateOperationsInput | $Enums.DoctorOnlineStatus
    outletId?: NullableStringFieldUpdateOperationsInput | string | null
    specializationId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    schedules?: DoctorScheduleUncheckedUpdateManyWithoutDoctorNestedInput
  }

  export type DoctorCreateWithoutSchedulesInput = {
    id?: string
    doctorCode?: string | null
    fullName: string
    mobile?: string | null
    email: string
    password: string
    bmdcNumber?: string | null
    subSpecialization?: string | null
    qualification?: string | null
    experienceYears?: number | null
    currentDesignation?: string | null
    consultationFee?: Decimal | DecimalJsLike | number | string | null
    status?: $Enums.DoctorStatus
    onlineStatus?: $Enums.DoctorOnlineStatus
    createdAt?: Date | string
    updatedAt?: Date | string
    outlet?: outletCreateNestedOneWithoutDoctorsInput
    specialization: DoctorSpecializationCreateNestedOneWithoutDoctorsInput
    documents?: DoctorDocumentCreateNestedManyWithoutDoctorInput
  }

  export type DoctorUncheckedCreateWithoutSchedulesInput = {
    id?: string
    doctorCode?: string | null
    fullName: string
    mobile?: string | null
    email: string
    password: string
    bmdcNumber?: string | null
    subSpecialization?: string | null
    qualification?: string | null
    experienceYears?: number | null
    currentDesignation?: string | null
    consultationFee?: Decimal | DecimalJsLike | number | string | null
    status?: $Enums.DoctorStatus
    onlineStatus?: $Enums.DoctorOnlineStatus
    outletId?: string | null
    specializationId: string
    createdAt?: Date | string
    updatedAt?: Date | string
    documents?: DoctorDocumentUncheckedCreateNestedManyWithoutDoctorInput
  }

  export type DoctorCreateOrConnectWithoutSchedulesInput = {
    where: DoctorWhereUniqueInput
    create: XOR<DoctorCreateWithoutSchedulesInput, DoctorUncheckedCreateWithoutSchedulesInput>
  }

  export type DoctorUpsertWithoutSchedulesInput = {
    update: XOR<DoctorUpdateWithoutSchedulesInput, DoctorUncheckedUpdateWithoutSchedulesInput>
    create: XOR<DoctorCreateWithoutSchedulesInput, DoctorUncheckedCreateWithoutSchedulesInput>
    where?: DoctorWhereInput
  }

  export type DoctorUpdateToOneWithWhereWithoutSchedulesInput = {
    where?: DoctorWhereInput
    data: XOR<DoctorUpdateWithoutSchedulesInput, DoctorUncheckedUpdateWithoutSchedulesInput>
  }

  export type DoctorUpdateWithoutSchedulesInput = {
    id?: StringFieldUpdateOperationsInput | string
    doctorCode?: NullableStringFieldUpdateOperationsInput | string | null
    fullName?: StringFieldUpdateOperationsInput | string
    mobile?: NullableStringFieldUpdateOperationsInput | string | null
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    bmdcNumber?: NullableStringFieldUpdateOperationsInput | string | null
    subSpecialization?: NullableStringFieldUpdateOperationsInput | string | null
    qualification?: NullableStringFieldUpdateOperationsInput | string | null
    experienceYears?: NullableIntFieldUpdateOperationsInput | number | null
    currentDesignation?: NullableStringFieldUpdateOperationsInput | string | null
    consultationFee?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    status?: EnumDoctorStatusFieldUpdateOperationsInput | $Enums.DoctorStatus
    onlineStatus?: EnumDoctorOnlineStatusFieldUpdateOperationsInput | $Enums.DoctorOnlineStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    outlet?: outletUpdateOneWithoutDoctorsNestedInput
    specialization?: DoctorSpecializationUpdateOneRequiredWithoutDoctorsNestedInput
    documents?: DoctorDocumentUpdateManyWithoutDoctorNestedInput
  }

  export type DoctorUncheckedUpdateWithoutSchedulesInput = {
    id?: StringFieldUpdateOperationsInput | string
    doctorCode?: NullableStringFieldUpdateOperationsInput | string | null
    fullName?: StringFieldUpdateOperationsInput | string
    mobile?: NullableStringFieldUpdateOperationsInput | string | null
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    bmdcNumber?: NullableStringFieldUpdateOperationsInput | string | null
    subSpecialization?: NullableStringFieldUpdateOperationsInput | string | null
    qualification?: NullableStringFieldUpdateOperationsInput | string | null
    experienceYears?: NullableIntFieldUpdateOperationsInput | number | null
    currentDesignation?: NullableStringFieldUpdateOperationsInput | string | null
    consultationFee?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    status?: EnumDoctorStatusFieldUpdateOperationsInput | $Enums.DoctorStatus
    onlineStatus?: EnumDoctorOnlineStatusFieldUpdateOperationsInput | $Enums.DoctorOnlineStatus
    outletId?: NullableStringFieldUpdateOperationsInput | string | null
    specializationId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    documents?: DoctorDocumentUncheckedUpdateManyWithoutDoctorNestedInput
  }

  export type OutletChildUserCreateWithoutOutletInput = {
    id?: string
    name: string
    email: string
    phone?: string | null
    password: string
    isActive?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    userRoles?: OutletUserRoleCreateNestedManyWithoutOutletChildUserInput
  }

  export type OutletChildUserUncheckedCreateWithoutOutletInput = {
    id?: string
    name: string
    email: string
    phone?: string | null
    password: string
    isActive?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    userRoles?: OutletUserRoleUncheckedCreateNestedManyWithoutOutletChildUserInput
  }

  export type OutletChildUserCreateOrConnectWithoutOutletInput = {
    where: OutletChildUserWhereUniqueInput
    create: XOR<OutletChildUserCreateWithoutOutletInput, OutletChildUserUncheckedCreateWithoutOutletInput>
  }

  export type OutletChildUserCreateManyOutletInputEnvelope = {
    data: OutletChildUserCreateManyOutletInput | OutletChildUserCreateManyOutletInput[]
    skipDuplicates?: boolean
  }

  export type RoleCreateWithoutOutletInput = {
    id?: string
    name: string
    ownerType: $Enums.RoleOwnerType
    createdAt?: Date | string
    updatedAt?: Date | string
    superAdmin?: SuperAdminsCreateNestedOneWithoutRolesInput
    rolePermissions?: RolePermissionCreateNestedManyWithoutRoleInput
    OutletUserRoles?: OutletUserRoleCreateNestedManyWithoutRoleInput
    superAdminUserRoles?: SuperAdminUserRoleCreateNestedManyWithoutRoleInput
  }

  export type RoleUncheckedCreateWithoutOutletInput = {
    id?: string
    name: string
    ownerType: $Enums.RoleOwnerType
    superAdminId?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    rolePermissions?: RolePermissionUncheckedCreateNestedManyWithoutRoleInput
    OutletUserRoles?: OutletUserRoleUncheckedCreateNestedManyWithoutRoleInput
    superAdminUserRoles?: SuperAdminUserRoleUncheckedCreateNestedManyWithoutRoleInput
  }

  export type RoleCreateOrConnectWithoutOutletInput = {
    where: RoleWhereUniqueInput
    create: XOR<RoleCreateWithoutOutletInput, RoleUncheckedCreateWithoutOutletInput>
  }

  export type RoleCreateManyOutletInputEnvelope = {
    data: RoleCreateManyOutletInput | RoleCreateManyOutletInput[]
    skipDuplicates?: boolean
  }

  export type PatientCreateWithoutOutletInput = {
    id?: string
    referenceName?: string | null
    fullName: string
    mobileNumber: string
    email?: string | null
    password: string
    dateOfBirth?: Date | string | null
    age?: number | null
    bloodGroup?: string | null
    gender?: string | null
    address?: string | null
    emergencyContact?: string | null
    status?: $Enums.PatientStatus
    otp?: string | null
    otpExpiresAt?: Date | string | null
    isActive?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type PatientUncheckedCreateWithoutOutletInput = {
    id?: string
    referenceName?: string | null
    fullName: string
    mobileNumber: string
    email?: string | null
    password: string
    dateOfBirth?: Date | string | null
    age?: number | null
    bloodGroup?: string | null
    gender?: string | null
    address?: string | null
    emergencyContact?: string | null
    status?: $Enums.PatientStatus
    otp?: string | null
    otpExpiresAt?: Date | string | null
    isActive?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type PatientCreateOrConnectWithoutOutletInput = {
    where: PatientWhereUniqueInput
    create: XOR<PatientCreateWithoutOutletInput, PatientUncheckedCreateWithoutOutletInput>
  }

  export type PatientCreateManyOutletInputEnvelope = {
    data: PatientCreateManyOutletInput | PatientCreateManyOutletInput[]
    skipDuplicates?: boolean
  }

  export type DoctorCreateWithoutOutletInput = {
    id?: string
    doctorCode?: string | null
    fullName: string
    mobile?: string | null
    email: string
    password: string
    bmdcNumber?: string | null
    subSpecialization?: string | null
    qualification?: string | null
    experienceYears?: number | null
    currentDesignation?: string | null
    consultationFee?: Decimal | DecimalJsLike | number | string | null
    status?: $Enums.DoctorStatus
    onlineStatus?: $Enums.DoctorOnlineStatus
    createdAt?: Date | string
    updatedAt?: Date | string
    specialization: DoctorSpecializationCreateNestedOneWithoutDoctorsInput
    documents?: DoctorDocumentCreateNestedManyWithoutDoctorInput
    schedules?: DoctorScheduleCreateNestedManyWithoutDoctorInput
  }

  export type DoctorUncheckedCreateWithoutOutletInput = {
    id?: string
    doctorCode?: string | null
    fullName: string
    mobile?: string | null
    email: string
    password: string
    bmdcNumber?: string | null
    subSpecialization?: string | null
    qualification?: string | null
    experienceYears?: number | null
    currentDesignation?: string | null
    consultationFee?: Decimal | DecimalJsLike | number | string | null
    status?: $Enums.DoctorStatus
    onlineStatus?: $Enums.DoctorOnlineStatus
    specializationId: string
    createdAt?: Date | string
    updatedAt?: Date | string
    documents?: DoctorDocumentUncheckedCreateNestedManyWithoutDoctorInput
    schedules?: DoctorScheduleUncheckedCreateNestedManyWithoutDoctorInput
  }

  export type DoctorCreateOrConnectWithoutOutletInput = {
    where: DoctorWhereUniqueInput
    create: XOR<DoctorCreateWithoutOutletInput, DoctorUncheckedCreateWithoutOutletInput>
  }

  export type DoctorCreateManyOutletInputEnvelope = {
    data: DoctorCreateManyOutletInput | DoctorCreateManyOutletInput[]
    skipDuplicates?: boolean
  }

  export type OutletChildUserUpsertWithWhereUniqueWithoutOutletInput = {
    where: OutletChildUserWhereUniqueInput
    update: XOR<OutletChildUserUpdateWithoutOutletInput, OutletChildUserUncheckedUpdateWithoutOutletInput>
    create: XOR<OutletChildUserCreateWithoutOutletInput, OutletChildUserUncheckedCreateWithoutOutletInput>
  }

  export type OutletChildUserUpdateWithWhereUniqueWithoutOutletInput = {
    where: OutletChildUserWhereUniqueInput
    data: XOR<OutletChildUserUpdateWithoutOutletInput, OutletChildUserUncheckedUpdateWithoutOutletInput>
  }

  export type OutletChildUserUpdateManyWithWhereWithoutOutletInput = {
    where: OutletChildUserScalarWhereInput
    data: XOR<OutletChildUserUpdateManyMutationInput, OutletChildUserUncheckedUpdateManyWithoutOutletInput>
  }

  export type OutletChildUserScalarWhereInput = {
    AND?: OutletChildUserScalarWhereInput | OutletChildUserScalarWhereInput[]
    OR?: OutletChildUserScalarWhereInput[]
    NOT?: OutletChildUserScalarWhereInput | OutletChildUserScalarWhereInput[]
    id?: StringFilter<"OutletChildUser"> | string
    outletId?: StringFilter<"OutletChildUser"> | string
    name?: StringFilter<"OutletChildUser"> | string
    email?: StringFilter<"OutletChildUser"> | string
    phone?: StringNullableFilter<"OutletChildUser"> | string | null
    password?: StringFilter<"OutletChildUser"> | string
    isActive?: BoolFilter<"OutletChildUser"> | boolean
    createdAt?: DateTimeFilter<"OutletChildUser"> | Date | string
    updatedAt?: DateTimeFilter<"OutletChildUser"> | Date | string
  }

  export type RoleUpsertWithWhereUniqueWithoutOutletInput = {
    where: RoleWhereUniqueInput
    update: XOR<RoleUpdateWithoutOutletInput, RoleUncheckedUpdateWithoutOutletInput>
    create: XOR<RoleCreateWithoutOutletInput, RoleUncheckedCreateWithoutOutletInput>
  }

  export type RoleUpdateWithWhereUniqueWithoutOutletInput = {
    where: RoleWhereUniqueInput
    data: XOR<RoleUpdateWithoutOutletInput, RoleUncheckedUpdateWithoutOutletInput>
  }

  export type RoleUpdateManyWithWhereWithoutOutletInput = {
    where: RoleScalarWhereInput
    data: XOR<RoleUpdateManyMutationInput, RoleUncheckedUpdateManyWithoutOutletInput>
  }

  export type PatientUpsertWithWhereUniqueWithoutOutletInput = {
    where: PatientWhereUniqueInput
    update: XOR<PatientUpdateWithoutOutletInput, PatientUncheckedUpdateWithoutOutletInput>
    create: XOR<PatientCreateWithoutOutletInput, PatientUncheckedCreateWithoutOutletInput>
  }

  export type PatientUpdateWithWhereUniqueWithoutOutletInput = {
    where: PatientWhereUniqueInput
    data: XOR<PatientUpdateWithoutOutletInput, PatientUncheckedUpdateWithoutOutletInput>
  }

  export type PatientUpdateManyWithWhereWithoutOutletInput = {
    where: PatientScalarWhereInput
    data: XOR<PatientUpdateManyMutationInput, PatientUncheckedUpdateManyWithoutOutletInput>
  }

  export type PatientScalarWhereInput = {
    AND?: PatientScalarWhereInput | PatientScalarWhereInput[]
    OR?: PatientScalarWhereInput[]
    NOT?: PatientScalarWhereInput | PatientScalarWhereInput[]
    id?: StringFilter<"Patient"> | string
    referenceName?: StringNullableFilter<"Patient"> | string | null
    fullName?: StringFilter<"Patient"> | string
    mobileNumber?: StringFilter<"Patient"> | string
    email?: StringNullableFilter<"Patient"> | string | null
    password?: StringFilter<"Patient"> | string
    dateOfBirth?: DateTimeNullableFilter<"Patient"> | Date | string | null
    age?: IntNullableFilter<"Patient"> | number | null
    bloodGroup?: StringNullableFilter<"Patient"> | string | null
    gender?: StringNullableFilter<"Patient"> | string | null
    address?: StringNullableFilter<"Patient"> | string | null
    emergencyContact?: StringNullableFilter<"Patient"> | string | null
    status?: EnumPatientStatusFilter<"Patient"> | $Enums.PatientStatus
    otp?: StringNullableFilter<"Patient"> | string | null
    otpExpiresAt?: DateTimeNullableFilter<"Patient"> | Date | string | null
    outletId?: StringNullableFilter<"Patient"> | string | null
    isActive?: BoolFilter<"Patient"> | boolean
    createdAt?: DateTimeFilter<"Patient"> | Date | string
    updatedAt?: DateTimeFilter<"Patient"> | Date | string
  }

  export type DoctorUpsertWithWhereUniqueWithoutOutletInput = {
    where: DoctorWhereUniqueInput
    update: XOR<DoctorUpdateWithoutOutletInput, DoctorUncheckedUpdateWithoutOutletInput>
    create: XOR<DoctorCreateWithoutOutletInput, DoctorUncheckedCreateWithoutOutletInput>
  }

  export type DoctorUpdateWithWhereUniqueWithoutOutletInput = {
    where: DoctorWhereUniqueInput
    data: XOR<DoctorUpdateWithoutOutletInput, DoctorUncheckedUpdateWithoutOutletInput>
  }

  export type DoctorUpdateManyWithWhereWithoutOutletInput = {
    where: DoctorScalarWhereInput
    data: XOR<DoctorUpdateManyMutationInput, DoctorUncheckedUpdateManyWithoutOutletInput>
  }

  export type outletCreateWithoutChildUsersInput = {
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
    roles?: RoleCreateNestedManyWithoutOutletInput
    patients?: PatientCreateNestedManyWithoutOutletInput
    doctors?: DoctorCreateNestedManyWithoutOutletInput
  }

  export type outletUncheckedCreateWithoutChildUsersInput = {
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
    roles?: RoleUncheckedCreateNestedManyWithoutOutletInput
    patients?: PatientUncheckedCreateNestedManyWithoutOutletInput
    doctors?: DoctorUncheckedCreateNestedManyWithoutOutletInput
  }

  export type outletCreateOrConnectWithoutChildUsersInput = {
    where: outletWhereUniqueInput
    create: XOR<outletCreateWithoutChildUsersInput, outletUncheckedCreateWithoutChildUsersInput>
  }

  export type OutletUserRoleCreateWithoutOutletChildUserInput = {
    id?: string
    createdAt?: Date | string
    role: RoleCreateNestedOneWithoutOutletUserRolesInput
  }

  export type OutletUserRoleUncheckedCreateWithoutOutletChildUserInput = {
    id?: string
    roleId: string
    createdAt?: Date | string
  }

  export type OutletUserRoleCreateOrConnectWithoutOutletChildUserInput = {
    where: OutletUserRoleWhereUniqueInput
    create: XOR<OutletUserRoleCreateWithoutOutletChildUserInput, OutletUserRoleUncheckedCreateWithoutOutletChildUserInput>
  }

  export type OutletUserRoleCreateManyOutletChildUserInputEnvelope = {
    data: OutletUserRoleCreateManyOutletChildUserInput | OutletUserRoleCreateManyOutletChildUserInput[]
    skipDuplicates?: boolean
  }

  export type outletUpsertWithoutChildUsersInput = {
    update: XOR<outletUpdateWithoutChildUsersInput, outletUncheckedUpdateWithoutChildUsersInput>
    create: XOR<outletCreateWithoutChildUsersInput, outletUncheckedCreateWithoutChildUsersInput>
    where?: outletWhereInput
  }

  export type outletUpdateToOneWithWhereWithoutChildUsersInput = {
    where?: outletWhereInput
    data: XOR<outletUpdateWithoutChildUsersInput, outletUncheckedUpdateWithoutChildUsersInput>
  }

  export type outletUpdateWithoutChildUsersInput = {
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
    roles?: RoleUpdateManyWithoutOutletNestedInput
    patients?: PatientUpdateManyWithoutOutletNestedInput
    doctors?: DoctorUpdateManyWithoutOutletNestedInput
  }

  export type outletUncheckedUpdateWithoutChildUsersInput = {
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
    roles?: RoleUncheckedUpdateManyWithoutOutletNestedInput
    patients?: PatientUncheckedUpdateManyWithoutOutletNestedInput
    doctors?: DoctorUncheckedUpdateManyWithoutOutletNestedInput
  }

  export type OutletUserRoleUpsertWithWhereUniqueWithoutOutletChildUserInput = {
    where: OutletUserRoleWhereUniqueInput
    update: XOR<OutletUserRoleUpdateWithoutOutletChildUserInput, OutletUserRoleUncheckedUpdateWithoutOutletChildUserInput>
    create: XOR<OutletUserRoleCreateWithoutOutletChildUserInput, OutletUserRoleUncheckedCreateWithoutOutletChildUserInput>
  }

  export type OutletUserRoleUpdateWithWhereUniqueWithoutOutletChildUserInput = {
    where: OutletUserRoleWhereUniqueInput
    data: XOR<OutletUserRoleUpdateWithoutOutletChildUserInput, OutletUserRoleUncheckedUpdateWithoutOutletChildUserInput>
  }

  export type OutletUserRoleUpdateManyWithWhereWithoutOutletChildUserInput = {
    where: OutletUserRoleScalarWhereInput
    data: XOR<OutletUserRoleUpdateManyMutationInput, OutletUserRoleUncheckedUpdateManyWithoutOutletChildUserInput>
  }

  export type OutletUserRoleScalarWhereInput = {
    AND?: OutletUserRoleScalarWhereInput | OutletUserRoleScalarWhereInput[]
    OR?: OutletUserRoleScalarWhereInput[]
    NOT?: OutletUserRoleScalarWhereInput | OutletUserRoleScalarWhereInput[]
    id?: StringFilter<"OutletUserRole"> | string
    OutletChildUserId?: StringFilter<"OutletUserRole"> | string
    roleId?: StringFilter<"OutletUserRole"> | string
    createdAt?: DateTimeFilter<"OutletUserRole"> | Date | string
  }

  export type outletCreateWithoutRolesInput = {
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
    childUsers?: OutletChildUserCreateNestedManyWithoutOutletInput
    patients?: PatientCreateNestedManyWithoutOutletInput
    doctors?: DoctorCreateNestedManyWithoutOutletInput
  }

  export type outletUncheckedCreateWithoutRolesInput = {
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
    childUsers?: OutletChildUserUncheckedCreateNestedManyWithoutOutletInput
    patients?: PatientUncheckedCreateNestedManyWithoutOutletInput
    doctors?: DoctorUncheckedCreateNestedManyWithoutOutletInput
  }

  export type outletCreateOrConnectWithoutRolesInput = {
    where: outletWhereUniqueInput
    create: XOR<outletCreateWithoutRolesInput, outletUncheckedCreateWithoutRolesInput>
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

  export type OutletUserRoleCreateWithoutRoleInput = {
    id?: string
    createdAt?: Date | string
    OutletChildUser: OutletChildUserCreateNestedOneWithoutUserRolesInput
  }

  export type OutletUserRoleUncheckedCreateWithoutRoleInput = {
    id?: string
    OutletChildUserId: string
    createdAt?: Date | string
  }

  export type OutletUserRoleCreateOrConnectWithoutRoleInput = {
    where: OutletUserRoleWhereUniqueInput
    create: XOR<OutletUserRoleCreateWithoutRoleInput, OutletUserRoleUncheckedCreateWithoutRoleInput>
  }

  export type OutletUserRoleCreateManyRoleInputEnvelope = {
    data: OutletUserRoleCreateManyRoleInput | OutletUserRoleCreateManyRoleInput[]
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

  export type outletUpsertWithoutRolesInput = {
    update: XOR<outletUpdateWithoutRolesInput, outletUncheckedUpdateWithoutRolesInput>
    create: XOR<outletCreateWithoutRolesInput, outletUncheckedCreateWithoutRolesInput>
    where?: outletWhereInput
  }

  export type outletUpdateToOneWithWhereWithoutRolesInput = {
    where?: outletWhereInput
    data: XOR<outletUpdateWithoutRolesInput, outletUncheckedUpdateWithoutRolesInput>
  }

  export type outletUpdateWithoutRolesInput = {
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
    childUsers?: OutletChildUserUpdateManyWithoutOutletNestedInput
    patients?: PatientUpdateManyWithoutOutletNestedInput
    doctors?: DoctorUpdateManyWithoutOutletNestedInput
  }

  export type outletUncheckedUpdateWithoutRolesInput = {
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
    childUsers?: OutletChildUserUncheckedUpdateManyWithoutOutletNestedInput
    patients?: PatientUncheckedUpdateManyWithoutOutletNestedInput
    doctors?: DoctorUncheckedUpdateManyWithoutOutletNestedInput
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

  export type OutletUserRoleUpsertWithWhereUniqueWithoutRoleInput = {
    where: OutletUserRoleWhereUniqueInput
    update: XOR<OutletUserRoleUpdateWithoutRoleInput, OutletUserRoleUncheckedUpdateWithoutRoleInput>
    create: XOR<OutletUserRoleCreateWithoutRoleInput, OutletUserRoleUncheckedCreateWithoutRoleInput>
  }

  export type OutletUserRoleUpdateWithWhereUniqueWithoutRoleInput = {
    where: OutletUserRoleWhereUniqueInput
    data: XOR<OutletUserRoleUpdateWithoutRoleInput, OutletUserRoleUncheckedUpdateWithoutRoleInput>
  }

  export type OutletUserRoleUpdateManyWithWhereWithoutRoleInput = {
    where: OutletUserRoleScalarWhereInput
    data: XOR<OutletUserRoleUpdateManyMutationInput, OutletUserRoleUncheckedUpdateManyWithoutRoleInput>
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
    outlet?: outletCreateNestedOneWithoutRolesInput
    superAdmin?: SuperAdminsCreateNestedOneWithoutRolesInput
    OutletUserRoles?: OutletUserRoleCreateNestedManyWithoutRoleInput
    superAdminUserRoles?: SuperAdminUserRoleCreateNestedManyWithoutRoleInput
  }

  export type RoleUncheckedCreateWithoutRolePermissionsInput = {
    id?: string
    name: string
    ownerType: $Enums.RoleOwnerType
    outletId?: string | null
    superAdminId?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    OutletUserRoles?: OutletUserRoleUncheckedCreateNestedManyWithoutRoleInput
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
    outlet?: outletUpdateOneWithoutRolesNestedInput
    superAdmin?: SuperAdminsUpdateOneWithoutRolesNestedInput
    OutletUserRoles?: OutletUserRoleUpdateManyWithoutRoleNestedInput
    superAdminUserRoles?: SuperAdminUserRoleUpdateManyWithoutRoleNestedInput
  }

  export type RoleUncheckedUpdateWithoutRolePermissionsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    ownerType?: EnumRoleOwnerTypeFieldUpdateOperationsInput | $Enums.RoleOwnerType
    outletId?: NullableStringFieldUpdateOperationsInput | string | null
    superAdminId?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    OutletUserRoles?: OutletUserRoleUncheckedUpdateManyWithoutRoleNestedInput
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

  export type OutletChildUserCreateWithoutUserRolesInput = {
    id?: string
    name: string
    email: string
    phone?: string | null
    password: string
    isActive?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    outlet: outletCreateNestedOneWithoutChildUsersInput
  }

  export type OutletChildUserUncheckedCreateWithoutUserRolesInput = {
    id?: string
    outletId: string
    name: string
    email: string
    phone?: string | null
    password: string
    isActive?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type OutletChildUserCreateOrConnectWithoutUserRolesInput = {
    where: OutletChildUserWhereUniqueInput
    create: XOR<OutletChildUserCreateWithoutUserRolesInput, OutletChildUserUncheckedCreateWithoutUserRolesInput>
  }

  export type RoleCreateWithoutOutletUserRolesInput = {
    id?: string
    name: string
    ownerType: $Enums.RoleOwnerType
    createdAt?: Date | string
    updatedAt?: Date | string
    outlet?: outletCreateNestedOneWithoutRolesInput
    superAdmin?: SuperAdminsCreateNestedOneWithoutRolesInput
    rolePermissions?: RolePermissionCreateNestedManyWithoutRoleInput
    superAdminUserRoles?: SuperAdminUserRoleCreateNestedManyWithoutRoleInput
  }

  export type RoleUncheckedCreateWithoutOutletUserRolesInput = {
    id?: string
    name: string
    ownerType: $Enums.RoleOwnerType
    outletId?: string | null
    superAdminId?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    rolePermissions?: RolePermissionUncheckedCreateNestedManyWithoutRoleInput
    superAdminUserRoles?: SuperAdminUserRoleUncheckedCreateNestedManyWithoutRoleInput
  }

  export type RoleCreateOrConnectWithoutOutletUserRolesInput = {
    where: RoleWhereUniqueInput
    create: XOR<RoleCreateWithoutOutletUserRolesInput, RoleUncheckedCreateWithoutOutletUserRolesInput>
  }

  export type OutletChildUserUpsertWithoutUserRolesInput = {
    update: XOR<OutletChildUserUpdateWithoutUserRolesInput, OutletChildUserUncheckedUpdateWithoutUserRolesInput>
    create: XOR<OutletChildUserCreateWithoutUserRolesInput, OutletChildUserUncheckedCreateWithoutUserRolesInput>
    where?: OutletChildUserWhereInput
  }

  export type OutletChildUserUpdateToOneWithWhereWithoutUserRolesInput = {
    where?: OutletChildUserWhereInput
    data: XOR<OutletChildUserUpdateWithoutUserRolesInput, OutletChildUserUncheckedUpdateWithoutUserRolesInput>
  }

  export type OutletChildUserUpdateWithoutUserRolesInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    password?: StringFieldUpdateOperationsInput | string
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    outlet?: outletUpdateOneRequiredWithoutChildUsersNestedInput
  }

  export type OutletChildUserUncheckedUpdateWithoutUserRolesInput = {
    id?: StringFieldUpdateOperationsInput | string
    outletId?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    password?: StringFieldUpdateOperationsInput | string
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type RoleUpsertWithoutOutletUserRolesInput = {
    update: XOR<RoleUpdateWithoutOutletUserRolesInput, RoleUncheckedUpdateWithoutOutletUserRolesInput>
    create: XOR<RoleCreateWithoutOutletUserRolesInput, RoleUncheckedCreateWithoutOutletUserRolesInput>
    where?: RoleWhereInput
  }

  export type RoleUpdateToOneWithWhereWithoutOutletUserRolesInput = {
    where?: RoleWhereInput
    data: XOR<RoleUpdateWithoutOutletUserRolesInput, RoleUncheckedUpdateWithoutOutletUserRolesInput>
  }

  export type RoleUpdateWithoutOutletUserRolesInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    ownerType?: EnumRoleOwnerTypeFieldUpdateOperationsInput | $Enums.RoleOwnerType
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    outlet?: outletUpdateOneWithoutRolesNestedInput
    superAdmin?: SuperAdminsUpdateOneWithoutRolesNestedInput
    rolePermissions?: RolePermissionUpdateManyWithoutRoleNestedInput
    superAdminUserRoles?: SuperAdminUserRoleUpdateManyWithoutRoleNestedInput
  }

  export type RoleUncheckedUpdateWithoutOutletUserRolesInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    ownerType?: EnumRoleOwnerTypeFieldUpdateOperationsInput | $Enums.RoleOwnerType
    outletId?: NullableStringFieldUpdateOperationsInput | string | null
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
    outlet?: outletCreateNestedOneWithoutRolesInput
    superAdmin?: SuperAdminsCreateNestedOneWithoutRolesInput
    rolePermissions?: RolePermissionCreateNestedManyWithoutRoleInput
    OutletUserRoles?: OutletUserRoleCreateNestedManyWithoutRoleInput
  }

  export type RoleUncheckedCreateWithoutSuperAdminUserRolesInput = {
    id?: string
    name: string
    ownerType: $Enums.RoleOwnerType
    outletId?: string | null
    superAdminId?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    rolePermissions?: RolePermissionUncheckedCreateNestedManyWithoutRoleInput
    OutletUserRoles?: OutletUserRoleUncheckedCreateNestedManyWithoutRoleInput
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
    outlet?: outletUpdateOneWithoutRolesNestedInput
    superAdmin?: SuperAdminsUpdateOneWithoutRolesNestedInput
    rolePermissions?: RolePermissionUpdateManyWithoutRoleNestedInput
    OutletUserRoles?: OutletUserRoleUpdateManyWithoutRoleNestedInput
  }

  export type RoleUncheckedUpdateWithoutSuperAdminUserRolesInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    ownerType?: EnumRoleOwnerTypeFieldUpdateOperationsInput | $Enums.RoleOwnerType
    outletId?: NullableStringFieldUpdateOperationsInput | string | null
    superAdminId?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    rolePermissions?: RolePermissionUncheckedUpdateManyWithoutRoleNestedInput
    OutletUserRoles?: OutletUserRoleUncheckedUpdateManyWithoutRoleNestedInput
  }

  export type RoleCreateManySuperAdminInput = {
    id?: string
    name: string
    ownerType: $Enums.RoleOwnerType
    outletId?: string | null
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
    outlet?: outletUpdateOneWithoutRolesNestedInput
    rolePermissions?: RolePermissionUpdateManyWithoutRoleNestedInput
    OutletUserRoles?: OutletUserRoleUpdateManyWithoutRoleNestedInput
    superAdminUserRoles?: SuperAdminUserRoleUpdateManyWithoutRoleNestedInput
  }

  export type RoleUncheckedUpdateWithoutSuperAdminInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    ownerType?: EnumRoleOwnerTypeFieldUpdateOperationsInput | $Enums.RoleOwnerType
    outletId?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    rolePermissions?: RolePermissionUncheckedUpdateManyWithoutRoleNestedInput
    OutletUserRoles?: OutletUserRoleUncheckedUpdateManyWithoutRoleNestedInput
    superAdminUserRoles?: SuperAdminUserRoleUncheckedUpdateManyWithoutRoleNestedInput
  }

  export type RoleUncheckedUpdateManyWithoutSuperAdminInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    ownerType?: EnumRoleOwnerTypeFieldUpdateOperationsInput | $Enums.RoleOwnerType
    outletId?: NullableStringFieldUpdateOperationsInput | string | null
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

  export type DoctorDocumentCreateManyDoctorInput = {
    id?: string
    documentType: $Enums.DocumentType
    fileUrl: string
    verificationStatus?: $Enums.VerificationStatus
    createdAt?: Date | string
  }

  export type DoctorScheduleCreateManyDoctorInput = {
    id?: string
    dayName: string
    startTime: string
    endTime: string
    slotDuration: number
    status?: $Enums.ScheduleStatus
  }

  export type DoctorDocumentUpdateWithoutDoctorInput = {
    id?: StringFieldUpdateOperationsInput | string
    documentType?: EnumDocumentTypeFieldUpdateOperationsInput | $Enums.DocumentType
    fileUrl?: StringFieldUpdateOperationsInput | string
    verificationStatus?: EnumVerificationStatusFieldUpdateOperationsInput | $Enums.VerificationStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type DoctorDocumentUncheckedUpdateWithoutDoctorInput = {
    id?: StringFieldUpdateOperationsInput | string
    documentType?: EnumDocumentTypeFieldUpdateOperationsInput | $Enums.DocumentType
    fileUrl?: StringFieldUpdateOperationsInput | string
    verificationStatus?: EnumVerificationStatusFieldUpdateOperationsInput | $Enums.VerificationStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type DoctorDocumentUncheckedUpdateManyWithoutDoctorInput = {
    id?: StringFieldUpdateOperationsInput | string
    documentType?: EnumDocumentTypeFieldUpdateOperationsInput | $Enums.DocumentType
    fileUrl?: StringFieldUpdateOperationsInput | string
    verificationStatus?: EnumVerificationStatusFieldUpdateOperationsInput | $Enums.VerificationStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type DoctorScheduleUpdateWithoutDoctorInput = {
    id?: StringFieldUpdateOperationsInput | string
    dayName?: StringFieldUpdateOperationsInput | string
    startTime?: StringFieldUpdateOperationsInput | string
    endTime?: StringFieldUpdateOperationsInput | string
    slotDuration?: IntFieldUpdateOperationsInput | number
    status?: EnumScheduleStatusFieldUpdateOperationsInput | $Enums.ScheduleStatus
  }

  export type DoctorScheduleUncheckedUpdateWithoutDoctorInput = {
    id?: StringFieldUpdateOperationsInput | string
    dayName?: StringFieldUpdateOperationsInput | string
    startTime?: StringFieldUpdateOperationsInput | string
    endTime?: StringFieldUpdateOperationsInput | string
    slotDuration?: IntFieldUpdateOperationsInput | number
    status?: EnumScheduleStatusFieldUpdateOperationsInput | $Enums.ScheduleStatus
  }

  export type DoctorScheduleUncheckedUpdateManyWithoutDoctorInput = {
    id?: StringFieldUpdateOperationsInput | string
    dayName?: StringFieldUpdateOperationsInput | string
    startTime?: StringFieldUpdateOperationsInput | string
    endTime?: StringFieldUpdateOperationsInput | string
    slotDuration?: IntFieldUpdateOperationsInput | number
    status?: EnumScheduleStatusFieldUpdateOperationsInput | $Enums.ScheduleStatus
  }

  export type DoctorCreateManySpecializationInput = {
    id?: string
    doctorCode?: string | null
    fullName: string
    mobile?: string | null
    email: string
    password: string
    bmdcNumber?: string | null
    subSpecialization?: string | null
    qualification?: string | null
    experienceYears?: number | null
    currentDesignation?: string | null
    consultationFee?: Decimal | DecimalJsLike | number | string | null
    status?: $Enums.DoctorStatus
    onlineStatus?: $Enums.DoctorOnlineStatus
    outletId?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type DoctorUpdateWithoutSpecializationInput = {
    id?: StringFieldUpdateOperationsInput | string
    doctorCode?: NullableStringFieldUpdateOperationsInput | string | null
    fullName?: StringFieldUpdateOperationsInput | string
    mobile?: NullableStringFieldUpdateOperationsInput | string | null
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    bmdcNumber?: NullableStringFieldUpdateOperationsInput | string | null
    subSpecialization?: NullableStringFieldUpdateOperationsInput | string | null
    qualification?: NullableStringFieldUpdateOperationsInput | string | null
    experienceYears?: NullableIntFieldUpdateOperationsInput | number | null
    currentDesignation?: NullableStringFieldUpdateOperationsInput | string | null
    consultationFee?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    status?: EnumDoctorStatusFieldUpdateOperationsInput | $Enums.DoctorStatus
    onlineStatus?: EnumDoctorOnlineStatusFieldUpdateOperationsInput | $Enums.DoctorOnlineStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    outlet?: outletUpdateOneWithoutDoctorsNestedInput
    documents?: DoctorDocumentUpdateManyWithoutDoctorNestedInput
    schedules?: DoctorScheduleUpdateManyWithoutDoctorNestedInput
  }

  export type DoctorUncheckedUpdateWithoutSpecializationInput = {
    id?: StringFieldUpdateOperationsInput | string
    doctorCode?: NullableStringFieldUpdateOperationsInput | string | null
    fullName?: StringFieldUpdateOperationsInput | string
    mobile?: NullableStringFieldUpdateOperationsInput | string | null
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    bmdcNumber?: NullableStringFieldUpdateOperationsInput | string | null
    subSpecialization?: NullableStringFieldUpdateOperationsInput | string | null
    qualification?: NullableStringFieldUpdateOperationsInput | string | null
    experienceYears?: NullableIntFieldUpdateOperationsInput | number | null
    currentDesignation?: NullableStringFieldUpdateOperationsInput | string | null
    consultationFee?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    status?: EnumDoctorStatusFieldUpdateOperationsInput | $Enums.DoctorStatus
    onlineStatus?: EnumDoctorOnlineStatusFieldUpdateOperationsInput | $Enums.DoctorOnlineStatus
    outletId?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    documents?: DoctorDocumentUncheckedUpdateManyWithoutDoctorNestedInput
    schedules?: DoctorScheduleUncheckedUpdateManyWithoutDoctorNestedInput
  }

  export type DoctorUncheckedUpdateManyWithoutSpecializationInput = {
    id?: StringFieldUpdateOperationsInput | string
    doctorCode?: NullableStringFieldUpdateOperationsInput | string | null
    fullName?: StringFieldUpdateOperationsInput | string
    mobile?: NullableStringFieldUpdateOperationsInput | string | null
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    bmdcNumber?: NullableStringFieldUpdateOperationsInput | string | null
    subSpecialization?: NullableStringFieldUpdateOperationsInput | string | null
    qualification?: NullableStringFieldUpdateOperationsInput | string | null
    experienceYears?: NullableIntFieldUpdateOperationsInput | number | null
    currentDesignation?: NullableStringFieldUpdateOperationsInput | string | null
    consultationFee?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    status?: EnumDoctorStatusFieldUpdateOperationsInput | $Enums.DoctorStatus
    onlineStatus?: EnumDoctorOnlineStatusFieldUpdateOperationsInput | $Enums.DoctorOnlineStatus
    outletId?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type OutletChildUserCreateManyOutletInput = {
    id?: string
    name: string
    email: string
    phone?: string | null
    password: string
    isActive?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type RoleCreateManyOutletInput = {
    id?: string
    name: string
    ownerType: $Enums.RoleOwnerType
    superAdminId?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type PatientCreateManyOutletInput = {
    id?: string
    referenceName?: string | null
    fullName: string
    mobileNumber: string
    email?: string | null
    password: string
    dateOfBirth?: Date | string | null
    age?: number | null
    bloodGroup?: string | null
    gender?: string | null
    address?: string | null
    emergencyContact?: string | null
    status?: $Enums.PatientStatus
    otp?: string | null
    otpExpiresAt?: Date | string | null
    isActive?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type DoctorCreateManyOutletInput = {
    id?: string
    doctorCode?: string | null
    fullName: string
    mobile?: string | null
    email: string
    password: string
    bmdcNumber?: string | null
    subSpecialization?: string | null
    qualification?: string | null
    experienceYears?: number | null
    currentDesignation?: string | null
    consultationFee?: Decimal | DecimalJsLike | number | string | null
    status?: $Enums.DoctorStatus
    onlineStatus?: $Enums.DoctorOnlineStatus
    specializationId: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type OutletChildUserUpdateWithoutOutletInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    password?: StringFieldUpdateOperationsInput | string
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    userRoles?: OutletUserRoleUpdateManyWithoutOutletChildUserNestedInput
  }

  export type OutletChildUserUncheckedUpdateWithoutOutletInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    password?: StringFieldUpdateOperationsInput | string
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    userRoles?: OutletUserRoleUncheckedUpdateManyWithoutOutletChildUserNestedInput
  }

  export type OutletChildUserUncheckedUpdateManyWithoutOutletInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    password?: StringFieldUpdateOperationsInput | string
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type RoleUpdateWithoutOutletInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    ownerType?: EnumRoleOwnerTypeFieldUpdateOperationsInput | $Enums.RoleOwnerType
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    superAdmin?: SuperAdminsUpdateOneWithoutRolesNestedInput
    rolePermissions?: RolePermissionUpdateManyWithoutRoleNestedInput
    OutletUserRoles?: OutletUserRoleUpdateManyWithoutRoleNestedInput
    superAdminUserRoles?: SuperAdminUserRoleUpdateManyWithoutRoleNestedInput
  }

  export type RoleUncheckedUpdateWithoutOutletInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    ownerType?: EnumRoleOwnerTypeFieldUpdateOperationsInput | $Enums.RoleOwnerType
    superAdminId?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    rolePermissions?: RolePermissionUncheckedUpdateManyWithoutRoleNestedInput
    OutletUserRoles?: OutletUserRoleUncheckedUpdateManyWithoutRoleNestedInput
    superAdminUserRoles?: SuperAdminUserRoleUncheckedUpdateManyWithoutRoleNestedInput
  }

  export type RoleUncheckedUpdateManyWithoutOutletInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    ownerType?: EnumRoleOwnerTypeFieldUpdateOperationsInput | $Enums.RoleOwnerType
    superAdminId?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PatientUpdateWithoutOutletInput = {
    id?: StringFieldUpdateOperationsInput | string
    referenceName?: NullableStringFieldUpdateOperationsInput | string | null
    fullName?: StringFieldUpdateOperationsInput | string
    mobileNumber?: StringFieldUpdateOperationsInput | string
    email?: NullableStringFieldUpdateOperationsInput | string | null
    password?: StringFieldUpdateOperationsInput | string
    dateOfBirth?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    age?: NullableIntFieldUpdateOperationsInput | number | null
    bloodGroup?: NullableStringFieldUpdateOperationsInput | string | null
    gender?: NullableStringFieldUpdateOperationsInput | string | null
    address?: NullableStringFieldUpdateOperationsInput | string | null
    emergencyContact?: NullableStringFieldUpdateOperationsInput | string | null
    status?: EnumPatientStatusFieldUpdateOperationsInput | $Enums.PatientStatus
    otp?: NullableStringFieldUpdateOperationsInput | string | null
    otpExpiresAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PatientUncheckedUpdateWithoutOutletInput = {
    id?: StringFieldUpdateOperationsInput | string
    referenceName?: NullableStringFieldUpdateOperationsInput | string | null
    fullName?: StringFieldUpdateOperationsInput | string
    mobileNumber?: StringFieldUpdateOperationsInput | string
    email?: NullableStringFieldUpdateOperationsInput | string | null
    password?: StringFieldUpdateOperationsInput | string
    dateOfBirth?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    age?: NullableIntFieldUpdateOperationsInput | number | null
    bloodGroup?: NullableStringFieldUpdateOperationsInput | string | null
    gender?: NullableStringFieldUpdateOperationsInput | string | null
    address?: NullableStringFieldUpdateOperationsInput | string | null
    emergencyContact?: NullableStringFieldUpdateOperationsInput | string | null
    status?: EnumPatientStatusFieldUpdateOperationsInput | $Enums.PatientStatus
    otp?: NullableStringFieldUpdateOperationsInput | string | null
    otpExpiresAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PatientUncheckedUpdateManyWithoutOutletInput = {
    id?: StringFieldUpdateOperationsInput | string
    referenceName?: NullableStringFieldUpdateOperationsInput | string | null
    fullName?: StringFieldUpdateOperationsInput | string
    mobileNumber?: StringFieldUpdateOperationsInput | string
    email?: NullableStringFieldUpdateOperationsInput | string | null
    password?: StringFieldUpdateOperationsInput | string
    dateOfBirth?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    age?: NullableIntFieldUpdateOperationsInput | number | null
    bloodGroup?: NullableStringFieldUpdateOperationsInput | string | null
    gender?: NullableStringFieldUpdateOperationsInput | string | null
    address?: NullableStringFieldUpdateOperationsInput | string | null
    emergencyContact?: NullableStringFieldUpdateOperationsInput | string | null
    status?: EnumPatientStatusFieldUpdateOperationsInput | $Enums.PatientStatus
    otp?: NullableStringFieldUpdateOperationsInput | string | null
    otpExpiresAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type DoctorUpdateWithoutOutletInput = {
    id?: StringFieldUpdateOperationsInput | string
    doctorCode?: NullableStringFieldUpdateOperationsInput | string | null
    fullName?: StringFieldUpdateOperationsInput | string
    mobile?: NullableStringFieldUpdateOperationsInput | string | null
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    bmdcNumber?: NullableStringFieldUpdateOperationsInput | string | null
    subSpecialization?: NullableStringFieldUpdateOperationsInput | string | null
    qualification?: NullableStringFieldUpdateOperationsInput | string | null
    experienceYears?: NullableIntFieldUpdateOperationsInput | number | null
    currentDesignation?: NullableStringFieldUpdateOperationsInput | string | null
    consultationFee?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    status?: EnumDoctorStatusFieldUpdateOperationsInput | $Enums.DoctorStatus
    onlineStatus?: EnumDoctorOnlineStatusFieldUpdateOperationsInput | $Enums.DoctorOnlineStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    specialization?: DoctorSpecializationUpdateOneRequiredWithoutDoctorsNestedInput
    documents?: DoctorDocumentUpdateManyWithoutDoctorNestedInput
    schedules?: DoctorScheduleUpdateManyWithoutDoctorNestedInput
  }

  export type DoctorUncheckedUpdateWithoutOutletInput = {
    id?: StringFieldUpdateOperationsInput | string
    doctorCode?: NullableStringFieldUpdateOperationsInput | string | null
    fullName?: StringFieldUpdateOperationsInput | string
    mobile?: NullableStringFieldUpdateOperationsInput | string | null
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    bmdcNumber?: NullableStringFieldUpdateOperationsInput | string | null
    subSpecialization?: NullableStringFieldUpdateOperationsInput | string | null
    qualification?: NullableStringFieldUpdateOperationsInput | string | null
    experienceYears?: NullableIntFieldUpdateOperationsInput | number | null
    currentDesignation?: NullableStringFieldUpdateOperationsInput | string | null
    consultationFee?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    status?: EnumDoctorStatusFieldUpdateOperationsInput | $Enums.DoctorStatus
    onlineStatus?: EnumDoctorOnlineStatusFieldUpdateOperationsInput | $Enums.DoctorOnlineStatus
    specializationId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    documents?: DoctorDocumentUncheckedUpdateManyWithoutDoctorNestedInput
    schedules?: DoctorScheduleUncheckedUpdateManyWithoutDoctorNestedInput
  }

  export type DoctorUncheckedUpdateManyWithoutOutletInput = {
    id?: StringFieldUpdateOperationsInput | string
    doctorCode?: NullableStringFieldUpdateOperationsInput | string | null
    fullName?: StringFieldUpdateOperationsInput | string
    mobile?: NullableStringFieldUpdateOperationsInput | string | null
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    bmdcNumber?: NullableStringFieldUpdateOperationsInput | string | null
    subSpecialization?: NullableStringFieldUpdateOperationsInput | string | null
    qualification?: NullableStringFieldUpdateOperationsInput | string | null
    experienceYears?: NullableIntFieldUpdateOperationsInput | number | null
    currentDesignation?: NullableStringFieldUpdateOperationsInput | string | null
    consultationFee?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    status?: EnumDoctorStatusFieldUpdateOperationsInput | $Enums.DoctorStatus
    onlineStatus?: EnumDoctorOnlineStatusFieldUpdateOperationsInput | $Enums.DoctorOnlineStatus
    specializationId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type OutletUserRoleCreateManyOutletChildUserInput = {
    id?: string
    roleId: string
    createdAt?: Date | string
  }

  export type OutletUserRoleUpdateWithoutOutletChildUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    role?: RoleUpdateOneRequiredWithoutOutletUserRolesNestedInput
  }

  export type OutletUserRoleUncheckedUpdateWithoutOutletChildUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    roleId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type OutletUserRoleUncheckedUpdateManyWithoutOutletChildUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    roleId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type RolePermissionCreateManyRoleInput = {
    id?: string
    permissionId: string
  }

  export type OutletUserRoleCreateManyRoleInput = {
    id?: string
    OutletChildUserId: string
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

  export type OutletUserRoleUpdateWithoutRoleInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    OutletChildUser?: OutletChildUserUpdateOneRequiredWithoutUserRolesNestedInput
  }

  export type OutletUserRoleUncheckedUpdateWithoutRoleInput = {
    id?: StringFieldUpdateOperationsInput | string
    OutletChildUserId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type OutletUserRoleUncheckedUpdateManyWithoutRoleInput = {
    id?: StringFieldUpdateOperationsInput | string
    OutletChildUserId?: StringFieldUpdateOperationsInput | string
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