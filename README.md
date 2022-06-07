
Tomitool - VSCode extension
===========================

This is a VSCode extension to add custom syntax hilighting to plain text files.

This is a local extension that I have not released into
[the marketplace](https://marketplace.visualstudio.com/vscode) since this is mainly about customizations for myself, and maybe a starter for your own customizations.

![Screenshot](sample.txt.jpg)


Purpose
-------

The purpose of this extension is to pick custom strings in a plain text file and hilight them with desired colors. This is a two step process that consists of tokenization with TextMate grammars and then theming the tokens,
[as explained in the docs](https://code.visualstudio.com/api/language-extensions/syntax-highlight-guide).

When I started to use VSCode, I searched the marketplace for syntax hilighting extensions that could fill my need directly but in the end discovered that it does not seem to be possible to have custom tokenization via extension on the fly. The grammar must be defined inside an extension and then built for use.

The 2nd purpose of this extension is to develop my custom commands to VSCode. There is a single sample command "Tomitool.Hello World" that replaces the existing editor text selection with a sample text. This is just a base for further development of commands.


Build
-----

The extension was started by using
[a yoman generator](https://code.visualstudio.com/api/get-started/your-first-extension) as officially recommended.

To build the extension, first install the needed Node tools with ```npm install```.

The grammar is defined in a json file at
[syntaxes/tomitext.tmLanguage.json](syntaxes/tomitext.tmLanguage.json)

The sample command "Tomitool.Hello World" is defined in
[extension.js](extension.js).

After editing these two files, you can build and package the extension for local consumption with a shell script:

    ./install.sh

Then restart VSCode to test and see the extension running in the editor.


Motivation
----------

I keep lots of notes for everything - for work, for hobbies and for daily thougths. Over the years I've tried various apps and file formats but in the end it's plain text that sticks. Plain text is the most versatile format that is compatible with any app.

To make text files more readable I've used colors for standard elements such as links, date headers and todo lists. Standard colors help me to scan big amounts of text quicker.

I have a background of X years with Emacs, then 16.5 years with gVim, running on OSX. I had lots of plugins and customizations over the years. Minimal UI with keyboard access to everything. I also extended Vim with custom Python scripts. My hairy .vimrc was 2263 lines long.

While Vim has all the power in the world, I noticed I became rusty in adding or maintaining my customizations. I did not enjoy fiddling with VimScript. My desire for a "fresh & cleaner" editor grew.

At the end of 2021 I started to use VSCode for Python coding and then in January 2022 after developing this extension, and being able to comfortably master shortcuts and edit plain text files, I finally jumped full time into VSCode, developing code and editing notes in the same editor.

License
-------
MIT License

Author
-------
Developed by [Tomi Mickelsson](https://tomicloud.com).
