// Uma função que formata um número com 3 dígitos
export function formatNumber(number: number, length: number = 3) {
    return number.toString().padStart(length, '0');
}