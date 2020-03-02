const core = require('@actions/core');

try {
    // Get source and identifier from the inputs
    const source = core.getInput('source');
    const identifier = core.getInput('identifier');

    console.log(source, identifier);

    const time = (new Date()).toTimeString();
    core.setOutput('time', time);

} catch (error) {
    core.setFailed(error.message);
}
