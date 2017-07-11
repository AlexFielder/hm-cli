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

##Usage:

hm snapper AbakEnvironments --location C:\CetDev\version#.#\home\custom\hermanMiller\abakEnvironments --shortname AbakEnv --longname "Abak Environments" --twoletteracronym ae --desiredversion 0.0.1


