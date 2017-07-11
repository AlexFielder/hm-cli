# hm-cli
Based on the Awesome-cli available here:

https://github.com/tucaz/awesome-cli

At a minimum, a HM product requires the following:

- connectTypes.cm
- constants.cm
- extension.cm
- extension.xml
- header.cm
- init.cm
- library.cm
- package.cm

- TAGS
- TAGSRS

There is also an abbreviated-productname file with the .rs extension:

- shortextensionname.rs

This is followed by a selection of files with a lowercase two initial prefix such as "ae" (in the case of Abak Environments):


- ##ConnectRules.cm
- ##Scheme.cm
- ##WorkSurface.cm

and a \EMEA sub-folder with some of the above repeated:

- emea\extension.cm
- emea\header.cm
- emea\init.cm
- emea\package.cm

#Installation:

npm install hm-cli

*If you have gone to the trouble of adding the C:\Users\{yourusername}\AppData\Roaming\npm path to the system path variable, and wish to be able to use this or any other node command from anywhere within the system using the Windows Command prompt it is recommended on Windows 10 to run this command in the following path:

C:\Users\{yourusername}\AppData\Roaming\npm

This ensures that the node_modules folder is created in the correct place and means that you will not receive "unknown command" errors.


##Usage:

hm snapper AbakEnvironments --location C:\CetDev\version#.#\home\custom\hermanMiller\abakEnvironments --shortname AbakEnv --longname "Abak Environments" --twoletteracronym ae --desiredversion 0.0.1


