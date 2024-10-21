// Import functions from different modules
import { yearUntilRetirement } from './modules/calculateAge.js';
import { addNumber } from './modules/addNumber.js';
import { calculateArea } from './modules/calculateArea.js';
import { makeAjaxRequest } from './modules/makeAjaxRequest.js';

// 1. Call yearUntilRetirement function
yearUntilRetirement({ year: 1987, firstName: 'John' });

// 2. Call addNumber function
console.log(addNumber(1, 2, 3, 4, 5, 6, 7));

// 3. Call calculateArea function
let area21 = calculateArea({ radius: 21, power: 2 });
let area7 = calculateArea({ radius: 7, power: 2 });
console.log(`area with 21 radius: ${area21}, and area with 7 radius: ${area7}`);

// 4. Call makeAjaxRequest function
makeAjaxRequest('www.google.com');
