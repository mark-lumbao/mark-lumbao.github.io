/* eslint-disable import/prefer-default-export */

export function breakObject <T>(data: T): string[] {
  return Object.keys(data)
    .map((key) => (
      `${key}: ${(data as any)[key]}`
    ));
}
