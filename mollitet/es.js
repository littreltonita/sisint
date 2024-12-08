/**
 * Processes data based on the given parameters.
 *
 * @param {Object} params - The parameters for processing data.
 * @param {boolean} params.flat - A boolean flag indicating if the field names should be flattened.
 */
function processData(params) {
    if (params.flat) {
        console.log('Field names will be flattened.');
        // Implement the logic for flattening field names
    } else {
        console.log('Field names will not be flattened.');
        // Implement the logic for non-flattened field names
    }
}

// Example usage
processData({ flat: true });
