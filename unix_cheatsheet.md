#Unix Command Cheat Sheet

`Cmd k` - Clears Scrollback
`echo 'hello world'` - Echoes to the screen

`echo -n 'hello world'` - The `-n` option suppresses a new line.

`exit` - You can use exit to log out of your session, after which you won't be able to type anything in.

`Ctrl - a` - Will move your cursor to the start of a line.

`Ctrl - e` - Will move your cursor to the end of a line.

`Option + Click` - On a Mac, this will take your cursor to a point on the line. (Terminal only)

`Tab` -  Auto-complete a command

`Tab + Tab` - If it can't auto-complete, this will show a list of possible matches.

`Command + ~` - Will cycle between Terminal windows (Terminal only)

`Command + k` -  Will clear screen and clear scrollback (Terminal only)

`ruby -v` - in Unix `-v` usually means - show me what version of this I've got running. That's the same as using `--version`.

`banner -w 50 'hello world'` - prints a banner to the screen with a width of 50 characters.

`cat -n 3rd.html` - Cat will print out what's in the file, and the `-n` option will print out line numbers.

`echo -n "hello"; echo "world"` - you can use semi-colons `;` to break up commands on a single line, and when you press return, they will simply execute one after the other as if you have entered them seperately.

`echo $SHELL` - Will tell you which Shell will be used to log you in.

`echo $0` - Will show you which Shell you're working in right now. 

`tcsh` or `bash` - To change Shells, just type in the shortened name of that shell

`man echo` - man is short for manual pages. This will show you the help page for any command. Use `spacebar` or `f` to forward a page, `b` to go back a page, and `q` to quit.

`man -h banner` - will give you a shortened version

`man -k banner` - is the same as using `apropos`, which gives you a very short description of what the command does.

With the above `man` or `apropos` commands, if you only type part of the command you're searching for, it will give you a list of possible options.

`whatis banner` - whatis does the same things as `man`, but it will not give you a list of possible options if you only enter part of the command. (e.g. `whatis ban`).

`pwd` - present working directory



##Concepts

**The Kernel** is the core of the Operating System in Unix.

**The Shell** is the outer layer of the Operating System.

###Shells Available in Mac OS X

* sh: Bourne Shell - 1977
* csh: C Shell - 1979 (programmer humor)
* tcsh: Tabbed C Shell - 1979
* ksh: Korn Shell - 1982
* bash: Bourne-Again Shell - 1987
* zsh: Z Shell - 1990

