function numsForce(nums, requiredSum) {
    //Recorre cada número del array
    for (let i = 0; i < nums.length; i++) {
        // Compara el número actual con cada número siguiente en el array
        for (let j = i + 1; j < nums.length; j++) {
            if (nums[i] + nums[j] === requiredSum) {
                 // Si la suma de los dos números es igual al `requiredSum`, retorna true
                return true;
            }
        }
    }
    // Retorna false si no se encuentra ningún par que sume `requiredSum`
    return false;
}

// Ejemplo de prueba para numsForce
const nums = [5, 7, 1, 2, 8, 4, 3];
const requiredSum = 10;
console.log(numsForce(nums, requiredSum));

function sumOptimized(nums, requiredSum) {
    const seen = new Set(); // Set para almacenar números ya vistos
     // Recorre cada número en el array
    for (const num of nums) {
         // Calcula el complemento necesario para alcanzar el `requiredSum`
        const complement = requiredSum - num;
        // Verifica si el complemento ya existe en el Set `seen`
        if (seen.has(complement)) {
            return true;// Retorna true si el par que suma `requiredSum` se encuentra
        }
        // Si no se encuentra el complemento, agrega el número actual al Set
        seen.add(num);
    }
     // Retorna false si no se encuentra ningún par que sume `requiredSum`
    return false;
}
// Ejemplo de prueba para sumOptimized
console.log(sumOptimized(nums, requiredSum));  