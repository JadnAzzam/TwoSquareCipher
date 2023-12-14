function encryptTwoSquareCipher() {   // Encryption function 
    var keyword1 = "TARGET";
    var keyword2 = "HELP";

    // Generating matrices
    var matrix1 = [['t','a','r','g','e'],['b','c','d','f','h'],['i','k','l','m','n'],['o','p','q','s','u'],['v','w','x','y','z']];
    var matrix2 = [['h','e','l','p','a'],['b','c','d','f','g'],['i','k','m','n','o'],['q','r','s','t','u'],['v','w','x','y','z']];

    // Get the plaintext from the input
    var plaintext = document.getElementById("plaintext").value.toLowerCase().replace(/[^a-z]/g, '');

    var result = "";

    // Encrypt the plaintext
    for (var i = 0; i < plaintext.length; i += 2) {
        // Extract characters in pairs
        var char1 = plaintext.charAt(i);
        var char2 = (i + 1 < plaintext.length) ? plaintext.charAt(i + 1) : 'x';

        // Find positions of characters in matrices
        var pos1 = findPosition(char1, matrix1);
        var pos2 = findPosition(char2, matrix2);

        if (pos1 && pos2) { // both positions found
            // Check if characters are in different columns
            if (pos1[1] !== pos2[1]) {
                // Append corresponding characters from the matrices to the result
                result += matrix1[pos1[0]][pos2[1]] + matrix2[pos2[0]][pos1[1]];
            } else {
                // Characters are in the same column, append characters as is
                result += char1 + char2;
            }
        } else {
            // Handle the case where a character is not found in the matrix
            result += char1 + char2;
        }
    }

    // Display the result
    document.getElementById("result").innerText = result;
}

// Decryption function for Two-Square Cipher
function decryptTwoSquareCipher() {
    // Keywords
    var keyword1 = "TARGET";
    var keyword2 = "HELP";

    // Generate matrices
    var matrix1 = [['t','a','r','g','e'],['b','c','d','f','h'],['i','k','l','m','n'],['o','p','q','s','u'],['v','w','x','y','z']];
    var matrix2 = [['h','e','l','p','a'],['b','c','d','f','g'],['i','k','m','n','o'],['q','r','s','t','u'],['v','w','x','y','z']];

    // Get the ciphertext from the input
    var ciphertext = document.getElementById("ciphertext").value.toLowerCase().replace(/[^a-z]/g, '');

    // Prepare the result
    var result = "";

    // Decrypt the ciphertext
    for (var i = 0; i < ciphertext.length; i += 2) {
        // Extract characters in pairs
        var char1 = ciphertext.charAt(i);
        var char2 = (i + 1 < ciphertext.length) ? ciphertext.charAt(i + 1) : 'x';

        // Find positions of characters in matrices
        var pos1 = findPosition(char1, matrix1);
        var pos2 = findPosition(char2, matrix2);

        // Check if both characters are found in the matrices
        if (pos1 && pos2) {
            // Check if characters are in different columns
            if (pos1[1] !== pos2[1]) {
                // Append corresponding characters from the matrices to the result
                result += matrix1[pos1[0]][pos2[1]] + matrix2[pos2[0]][pos1[1]];
            } else {
                // Characters are in the same column, append characters as is
                result += char1 + char2;
            }
        } else {
            // Handle the case where a character is not found in the matrix
            result += char1 + char2;
        }
    }

    // Display the result
    document.getElementById("decryptedResult").innerText = result;
}

// Utility function to find the position of a character in a matrix
function findPosition(char, matrix) {
    for (var i = 0; i < 5; i++) {
        for (var j = 0; j < 5; j++) {
            if (matrix[i][j] === char) {
                return [i, j];
            }
        }
    }
    // Return null if the character is not found in the matrix
    return null;
}
