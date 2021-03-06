#!/usr/bin/env node
const cantor = require('./index.js');

const printUsage = function() {
    console.log('\nUsage:\n' + '  $ cantor-dust-cli <n>\n' + '  $ cantor-dust-cli <n> <size>\n' + '\nFlags:\n -b: Draw using block characters\n');
}

const getFlags = function(params) {
    let flags = [];
    if (params) {
        for (let i = 0; i < params.length; i++) {
            if (params[i].startsWith('-')) {
                flags.push(params[i]);
            }
        }
    }
    return flags;
}

const getValues = function(params) {
    let values = [];
    if (params) {
        for (let i = 0; i < params.length; i++) {
            if (!params[i].startsWith('-')) {
                values.push(params[i]);
            }
        }
    }
    return values;
}

const drawBlocks = function(flags) {
    for (let i = 0; i < flags.length; i++) {
        if (flags[i] && flags[i].toLowerCase() === '-b') {
            return true;
        }
    }
    return false;
}

if (process.argv.length > 2) {
    const params = process.argv.slice(2);
    const values = getValues(params);
    const flags = getFlags(params);
    if (values[0] && !isNaN(values[0]) && parseInt(values[0]) >= 0) {
        var n = parseInt(values[0]);
        var s = undefined;
        if (values[1]) {
            if (!isNaN(values[1]) && parseInt(values[1]) >= n) {
                s = parseInt(values[1]);
            } else {
                console.log('\n<size> should be a number greater than or equal to <n>');
                printUsage();
            }
        } else {
            s = n;
        }
        if (n !== undefined && s !== undefined) {
            if (drawBlocks(flags)) {
                console.log(cantor.create(n, s, '█'));
            } else {
                console.log(cantor.create(n, s));
            }
        }
    } else {
        console.log('\n<n> should be a number greater than or equal to 0');
        printUsage();
    }
} else {
    printUsage();
}