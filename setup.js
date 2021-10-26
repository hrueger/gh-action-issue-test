const { exec } = require('child_process');


function runCommand(command, cwd) {
    return new Promise((resolve) => {
        exec(`cd ${cwd} && ${command}`, async(err, out, serr) => {
            console.log("Command finished with", err, out, serr);
            resolve();
        });
    });
}

async function main() {
    await runCommand("npm i --legacy-peer-deps", `.`);
    console.log("Setup finished successfully.");
}

main();