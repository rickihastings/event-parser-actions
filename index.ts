import {getInput, setFailed, setOutput} from '@actions/core';

function executeAction(): void {
    // Get source and variables from the input
    const source = getInput('source');
    const variables = getInput('variables').split(/\r?\n/);

    // Input isn't correct, fail the job
    if (!Array.isArray(variables) || variables.length === 0) {
        return setFailed(`variables input should be an array with items in it.`);
    }

    // Loop through the variables and try find a match
    variables.forEach(function(variable) {
        const variableRegex = new RegExp(`\\b${variable}=(\\S+)`, 'i');
        const matches = source.match(variableRegex);

        if (matches && matches.length > 0) {
            setOutput(variable, matches[1]);
        }
    });
}

try {
    executeAction();
} catch (error) {
    setFailed(error.message);
}
