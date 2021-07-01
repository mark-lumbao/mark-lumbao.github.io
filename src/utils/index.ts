export function breakObject <T>(data: T): string[] {
  return Object.keys(data)
    .map((key) => (
      `${key}: ${(data as any)[key]}`
    ));
}

export const isDark = (theme: string) => theme === 'theme-dark';
