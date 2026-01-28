/**
 * Oblicza podstawowe statystyki dla tablicy liczb.
 * Zgodnie z Twoim testem, dla pustej tablicy zwraca zera.
 */
export function calculateStats(numbers: number[]) {
    if (numbers.length === 0) {
        return { min: 0, max: 0, average: 0 };
    }

    const min = Math.min(...numbers);
    const max = Math.max(...numbers);
    const average = numbers.reduce((a, b) => a + b, 0) / numbers.length;

    return { min, max, average };
}

/**
 * Oblicza silnię liczby n.
 * Obsługuje błędy dla liczb niecałkowitych i ujemnych zgodnie z Twoimi testami.
 */
export function factorial(n: number): number {
    // 1. Priorytet: Sprawdzenie czy liczba jest całkowita
    if (!Number.isInteger(n)) {
        throw new Error('Factorial is not defined for non-integer numbers');
    }

    // 2. Sprawdzenie czy liczba jest ujemna
    if (n < 0) {
        throw new Error('Factorial is not defined for negative numbers');
    }

    if (n === 0 || n === 1) {
        return 1;
    }

    return n * factorial(n - 1);
}

/**
 * Sprawdza, czy liczba n jest liczbą pierwszą.
 * Zoptymalizowane pod kątem wydajności dla dużych liczb.
 */
export function isPrime(n: number): boolean {
    if (n <= 1) return false;
    if (n <= 3) return true;
    if (n % 2 === 0 || n % 3 === 0) return false;

    for (let i = 5; i * i <= n; i += 6) {
        if (n % i === 0 || n % (i + 2) === 0) return false;
    }

    return true;
}