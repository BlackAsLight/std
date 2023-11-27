// Copyright 2018-2023 the Deno authors. All rights reserved. MIT license.
// This module is browser compatible.

/**
 * Returns a new array that drops all elements in the given collection until the
 * last element that does not match the given predicate
 *
 * @example
 * ```ts
 * import { dropLastWhile } from "@std/collections/drop_last_while";
 * import { assertEquals } from "@std/assert/assert_equals";
 *
 * const numbers = [22, 30, 44];
 *
 * const notFortyFour = dropLastWhile(numbers, (i) => i !== 44);
 *
 * assertEquals(
 *   notFortyFour,
 *   [22, 30],
 * );
 * ```
 */
export function dropLastWhile<T>(
  array: readonly T[],
  predicate: (el: T) => boolean,
): T[] {
  let offset = array.length;
  while (0 < offset && predicate(array[offset - 1])) offset--;

  return array.slice(0, offset);
}
