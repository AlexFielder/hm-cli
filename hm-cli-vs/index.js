#!/usr/bin/env node
'use strict';
//throw Error;
const program = require('commander'),
    snapperCommand = require('./snapper/index.js'),
    pkg = require('./package.json');

program
    .version(pkg.version)
    .command('snapper <name>')
    .description('Scaffolds a new HM snapper with all it\'s dependencies')
    .option('-p, --package [package]','Package/namespace')
    .option('-l, --location [location]', 'Location where files will be generated')
    .option('-s, --shortname [shortname]', 'Shortname to use where required')
    .option('-ln, --longname [longname]', 'Long name to use where required, typically "Product Name"')
    .option('-tla, --twoletteracronym [twoletteracronym]', 'Two letter acronym to prefix classes')
    .option('-v, --desiredversion [desiredversion]', 'version to use in the package')
    .action((name, options) => {
        let loc = options.location || "./" + name;
        snapperCommand.scaffold(name, options.package, loc, options.shortname, options.longname, options.twoletteracronym, options.desiredversion, (err, result) => {
            if(err) {
                console.log(`Error while scaffolding ${name}Snapper`);
                console.log(err);
                return;
            }
            console.log(`${name}Snapper generated`);
        });
    });

program.parse(process.argv);

function requireMany () {
    return Array.prototype.slice.call(arguments).map(function (value) {
        try {
            return require(value)
        }
        catch (event) {
            return console.log(event)
        }
    })
}