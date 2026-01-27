export function calculateStats(numbers: number[]) {
    if (numbers.length === 0) return { min: 0, max: 0, average: 0 };
    const min = Math.min(...numbers);
    const max = Math.max(...numbers);
    const average = numbers.reduce((a, b) => a + b, 0) / numbers.length;
    return { min, max, average };
}

export function factorial(n: number): number {
    if (n < 0) {
        // Używamy dokładnie tej samej frazy co w teście, bez znaków specjalnych na końcu
        throw new Error('Factorial is not defined for negative numbers');
    }
    if (n === 0 || n === 1) return 1;
    return n * factorial(n - 1);
}

export function isPrime(n: number): boolean {
    if (n <= 1) return false;
    for (let i = 2, s = Math.sqrt(n); i <= s; i++)
        if (n % i === 0) return false;
    return n > 1;
}