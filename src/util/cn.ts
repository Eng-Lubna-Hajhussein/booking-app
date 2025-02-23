export default function cn(...classes: (string | undefined | null)[]): string {
  return classes.filter(Boolean).join(" ");
}
