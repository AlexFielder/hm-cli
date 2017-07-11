module.exports = new (function () {
    const path = require('path'),
        fs = require('fs'),
        mkdirp = require('mkdirp'),
        abbrevTemplate = path.join(__dirname, 'shortextensionname.txt'),
        connectRulesTemplate = path.join(__dirname, '##ConnectRules.txt'),
        connectTypesTemplate = path.join(__dirname, 'connectTypes.txt'),
        constantsTemplate = path.join(__dirname, 'constants.txt'),
        emeainitTemplate = path.join(__dirname, 'emea/init.txt'),
        // extensionDataTemplate = path.join(__dirname, 'extensiondata.txt'),
        extensionTemplate = path.join(__dirname, 'extension.txt'),
        headerTemplate = path.join(__dirname, 'header.txt'),
        initTemplate = path.join(__dirname, 'init.txt'),
        libraryTemplate = path.join(__dirname, 'library.txt'),
        packageTemplate = path.join(__dirname, 'Package.txt'),
        schemeTemplate = path.join(__dirname, '##Scheme.txt'),
        TAGSTemplate = path.join(__dirname, 'TAGS.txt'),
        TAGRSTemplate = path.join(__dirname, 'TAGSRS.txt'),
        worksurfaceTemplate = path.join(__dirname, '##WorkSurface.txt');

    this.scaffold = (name, package, location, shortname, longname, twoletteracronym, desiredversion, callback) => {
        location = location || path.dirname(require.main.filename);
        package = package || extractPackage(location);
        shortname = shortname;
        longname = longname;
        twoletteracronym = twoletteracronym;
        emeaacronym = twoletteracronym + 'e';
        longclassname = longname.replace(' ', '');

        
        createOrReplaceDirectory(location, err => {});
        createOrReplaceDirectory(path.join(location , 'emea'), err => {});

            //populate content
            abbrevContent = populateContent(fs, abbrevTemplate, name, package, shortname, longname, twoletteracronym, longclassname, desiredversion, callback);
            connectRulesContent = populateContent(fs, connectRulesTemplate, name, package, shortname, longname, twoletteracronym, longclassname, desiredversion, callback);
            connectTypesContent = populateContent(fs, connectTypesTemplate, name, package, shortname, longname, twoletteracronym, longclassname, desiredversion, callback);
            constantsContent = populateContent(fs, constantsTemplate, name, package, shortname, longname, twoletteracronym, longclassname, desiredversion, callback);
            extensionContent = populateContent(fs, extensionTemplate, name, package, shortname, longname, twoletteracronym, longclassname, desiredversion, callback);
            // extensionDataContent = populateContent(fs, extensionDataTemplate, name, package, shortname, longname, twoletteracronym, longclassname, desiredversion, callback);
            headerContent = populateContent(fs, headerTemplate, name, package, shortname, longname, twoletteracronym, longclassname, desiredversion, callback);
            initContent = populateContent(fs, initTemplate, name, package, shortname, longname, twoletteracronym, longclassname, desiredversion, callback);
            libraryContent = populateContent(fs, libraryTemplate, name, package, shortname, longname, twoletteracronym, longclassname, desiredversion, callback);
            packageContent = populateContent(fs, packageTemplate, name, package, shortname, longname, twoletteracronym, longclassname, desiredversion, callback);
            schemeContent = populateContent(fs, schemeTemplate, name, package, shortname, longname, twoletteracronym, longclassname, desiredversion, callback);
            TAGSContent = populateContent(fs, TAGSTemplate, name, package, shortname, longname, twoletteracronym, longclassname, desiredversion, callback);
            TAGSRSContent = populateContent(fs, TAGRSTemplate, name, package, shortname, longname, twoletteracronym, longclassname, desiredversion, callback);
            worksurfaceContent = populateContent(fs, worksurfaceTemplate, name, package, shortname, longname, twoletteracronym, longclassname, desiredversion, callback);
            //emea content
            emeainitContent = populateContent(fs, emeainitTemplate, package, shortname, longname, twoletteracronym, longclassname, desiredversion, callback);
        
        let abbrevFile = `${shortname}.cm`,
            connectRulesFile = `${twoletteracronym}connectRules.cm`,
            connectTypesFile = `connectTypes.cm`,
            constantsFile = `constants.cm`,
            extensionFile = `extension.cm`,
            // extensionDataFile = `extension.xml`,
            headerFile = `header.cm`,
            initFile = `init.cm`,
            libraryFile = `library.cm`,
            packageFile = `package.cm`,
            schemeFile = `${twoletteracronym}scheme.cm`,
            TAGSFile = `TAGS`,
            TAGSRSFile = `TAGSRS`,
            worksurfaceFile = `${twoletteracronym}worksurface.cm`,
            //emea files
            emeainitFile = `emea/init.cm`
            ;
            // console.log("connectrulesfilename= " + connectRulesFile);
            // console.log("location= " + path.join(location, connectRulesFile));
            saveFile(location, connectRulesFile, connectRulesContent, callback);
            saveFile(location, connectTypesFile, connectTypesContent,  callback);
            saveFile(location, constantsFile, constantsContent,  callback);
            saveFile(location, extensionFile, extensionContent,  callback);
            // saveFile(location, extensionDataFile, extensionDataContent,  callback);
            saveFile(location, headerFile, headerContent,  callback);
            saveFile(location, initFile, initContent,  callback);
            saveFile(location, libraryFile, libraryContent,  callback);
            saveFile(location, packageFile, packageContent,  callback);
            saveFile(location, schemeFile, schemeContent,  callback);
            saveFile(location, TAGSFile, TAGSContent,  callback);
            saveFile(location, TAGSRSFile, TAGSRSContent,  callback);
            saveFile(location, worksurfaceFile, worksurfaceContent,  callback);
            //emea
            saveFile(location, emeainitFile, emeainitContent,  callback);
    }

    function saveFile(location, hmFile, hmContent, callback) {
        filePath = path.join(location, hmFile);
        fs.writeFileSync(filePath, hmContent, function (err) {
            if (err) throw err;
              console.log(filePath + ' = Saved!');
            });
            console.log(filePath + ' = Saved!');
    }
    


    function populateContent(fs, filelocation, name, package, shortname, longname, twoletteracronym, longclassname, desiredversion, callback) {
        // filelocation = filelocation;
        // name = name;
        // package = package;
        // shortname = shortname;
        // longname = longname;
        // twoletteracronym = twoletteracronym;
        // longclassname = longclassname;
        // desiredversion = desiredversion;
        
        // console.log(filelocation);
        replacedContent = "CHANGEME";
        var content = ''
        content = fs.readFileSync(filelocation,'utf-8');
        replacedContent = content.replace(/##name##/g, name)
        .replace(/##package##/g, package)
        .replace(/##shortname##/g, shortname)
        .replace(/##longname##/g, longname)
        .replace(/##twoletteracronym##/g, twoletteracronym)
        .replace(/##longclassname##/g, longclassname)
        .replace(/##version##/g, desiredversion);
        return replacedContent;

        
    }

    function extractPackage(location) {
        const fullLoc = path.resolve(location);
        if(fullLoc.indexOf('custom') === -1) return 'custom';

        let folders = fullLoc.split('custom');
        var package = 'custom' + folders[1].replace(/\//g, '.').replace(/\\/g, '.'),
            segments = package.split('.');

        package = package.replace(segments[segments.length - 1], firstToLowerCase(segments[segments.length - 1]));
        //console.log(package);
        return package;
    }

    function firstToLowerCase(s) {
        return s[0].toLowerCase() + s.substring(1, s.length);
    }

    function createOrReplaceDirectory(dirName, callback) {
        // console.log(dirName);
        if (!fs.existsSync(dirName)){
                fs.mkdirSync(dirName);
            }
    }
})()