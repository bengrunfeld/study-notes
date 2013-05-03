#Unix

##What is Unix?

Unix is an operating system, created during 1969 - 1971 by AT&T employees at Bell Labs.

In 1972, Unix was rewritten in the C programming language. It was programmed in assembly before. This allowed it to be portable.

C was developed for the Unix OS.

Because of a court case, AT&T was forbidden from entering the software market, so while they weren't allowed to sell software, they were allowed to give it away for free.

That was very attractive to government, universities and corporations, because if they wrote to AT&T, they'd get a licence and the source code of the OS for free.

The most important of these were universities, because programming really began to take off in 1975, and when new students came to study computer science, the first thing they learned was Unix, so when the went on the found software companies in the 80's and 90's, they based a lot of what they made in Unix.

After 1977, there were a lot of branches and improvements made to Unix. Some of these include:

* Open Source: BSD (Berkley Software Distribution), Linux
* Closed Source: Solaris (Sun/Oracle), AIX (IBM), 
* Mixed Source: Mac OS X (Apple)

These days, Unix means a unix-like system, because no-one really uses System 5 anymore.

Mobile devices (iPhone, iPad, Android) are all based on Unix-like systems.

##Mac OS X

Mac OS X is a combination of BSD Unix and code from NeXT (a company that Steve Jobs founded after leaving Apple - the code was called NeXTSTEP). Then Apple went and bought NeXT and added more code on top of it, and called the combination of those 3 **Darwin**. 

Darwin is the unix that sits underneath Mac OS X. Mac OS X includes a lot more than that - it includes the Finder and other tools too, but Unix is "under the hood".

We can access Unix (aka Darwin) directly from the command line using Terminal.

##Why Use Unix Directly via Terminal?

If we have the GUI, why use the command line tool via the Terminal?

* There's a lot more power in the command line
* When working with data, non-data elements can get in the way

##Other Languages

Most of what we cover in this course is going to apply to any flavor of Unix. All Linux distributions, Red Hat, Ubuntu, DBN, Solaris, AIX, etc. While there might be small differences in these other OS's, the majority of the knowledge should be the same.

##Using the Terminal

The terminal provides command line access to Unix, and comes pre-installed with Mac OS X.

It's located inside /Applications/Utilities/Terminal.

If you're in the Desktop,

	Shift + Command + u

will open the utilities folder.

###Clearing Scrollback

To clear anything above the screen you're in, use View -> Clear Scrollback, or

	Cmd k		//clears scrollback

###What happens when we launch Terminal

The first line tells us the last time we logged in to Unix. 

Every time we open a new window, it logs us in to Unix again as a new Unix session. We can have several of those open at once (i.e. several different Unix sessions open at once). Mac automatically logs you in, but other Unix systems don't necessarily log you in automatically. They might require you to put in your username and password to know who you are, but your Mac already knows who you are.

Unix is fundamentally a multi-user environment. 

So when you log into your Mac, you're being logged in as a user, so when you open up a Terminal window, it uses those credentials to automatically log you into Unix.

###Commands From the Command Prompt

**echo:** You can use echo to simply print something to the screen.

	echo 'hello world'

**exit:** You can use exit to log out of your session, after which you won't be able to type anything in.

	exit

**Ctrl - a:** Will move your cursor to the start of a line.

**Ctrl - e:** Will move your cursor to the end of a line.

**Option + Click:** On a Mac, this will take your cursor to a point on the line. (Terminal only)

**Tab:** Auto-complete a command

**Tab + Tab:** If it can't auto-complete, this will show a list of possible matches.

**Command + ~:** Will cycle between Terminal windows (Terminal only)

**Command + k:** Will clear screen and clear scrollback (Terminal only)

##Command Structure

There is a very definite structure to the commands in Unix. 

	Command		Options		Arguments

You can't pu the Options after the Arguments. They have to go in the middle.

The Command is always a single word. It's the thing we want to do.

Options will modify the behavior of the command in some way.

Arguments are the thing we want the Command to do when it does whatever it does.

e.g.

	echo 'hello world'

`echo` is the command, and `'hello world'` is the arguments.

An example with an option would be:

	echo -n 'hello world'

The `-n` option suppresses a new line.

Options usually have hyphens in front of them.

	ruby -v

This will give us the version of Ruby we have running. `-v` in Unix usually means - show me what version of this I've got running.

That's the same as `--version`.

Usually you'll have a single dash `-` followed by a letter, or two dashes `--` followed by a word.

You can have single letter options being separate with their own hyphens, or you can combine them all with only 1 dash and no spaces. e.g.

	ls -l -a -h desktop
	ls -lah desktop

There is an exeption to this where sometimes an option wants an argument of its own. e.g.

	banner -w 50 'hello world'

The `banner` command has a width option which needs to know how wide you want the banner to be. 

So here, 50 is an argument for `-w`, and `'hello world'` is the argument to `banner`.

To make it clearer though, you can remove the space between the option and its argument, so it can also be written:

	banner -w50 'hello world'

We can also have multiple arguments, such as
	
	cat -n 3rd.html 4th.html

Cat will print out what's in the file, and the `-n` option will print out line numbers.

##Single Quotes or Double Quotes

You can use single or double quotes. It doesn't matter to Unix.

##Using Semi-Colons to Break Up Commands

Like in regular programming, you can break up commands, even if they are on the same line, with a semi-colon `;`, and they will run one after another. E.g.

	echo -n "hello"; echo "world"

##Kernel and Shells

**The Kernel** is the core of the Operating System in Unix. 
It's what takes care of allocating time and memory to programs 
It manages how programs do their thing
Mac OS X uses the Mach Kernal inside Darwin to do that

**The Shell** is the outer layer of the Operating System. That's what we see when we open up a terminal window. We're working in the shell. It interacts with the user and we can think of it as our working environment. The Shell will send requests to the Kernel, and results will then be returned to the shell.

Mac OS X uses the Bash Shell, but it includes other choices as well.

These options are all available in Mac OS X, and date back to the 1970's, and include:

* sh: Thomson Shell - 1971	//deprecated & replaced by Bourne Shell.
* sh: Bourne Shell - 1977
* csh: C Shell - 1979 (programmer humor)
* tcsh: Tabbed C Shell - 1979
* ksh: Korn Shell - 1982
* bash: Bourne-Again Shell - 1987
* zsh: Z Shell - 1990

For beginners, the difference between these is tiny. Stick with bash to learn, because you are working in the bash Shell when you log in.

We can switch into another Shell even while we are in a Shell. It's just another working layer.

	echo $SHELL

Will tell you which Shell will be used to log you in. Dollar sign `$` and all capitals means that it's an environment variable. 

At the moment it reads `/bin/bash`, but that's actually changeable in the Terminal preferences in Startup.

To check the Shell that we're working in right now, we use:

	echo $0

###Changing Shells

To change Shells, just type in the shortened name of that shell, e.g.

	tcsh

Will move us into the Tabbed C Shell (tcsh). If you go a couple of layers deep and keep changing Shells, to get back, just keep typing `exit` until it tells you you're back at `bash`.

##Unix Manual Pages

Unix manual pages help you figure out what you want to do when you're working in Unix. 

The manual pages are often referred to as just *man pages*, because the sytax for calling them is:

	man <command>
	man echo

If you get a colon at the bottom of the screen, it means that there's more to come. To go forward a page, use `spacebar or f`, and to go back a page, use `b`. To quit, use `q`.

`man` even has its own page - `man man`. There's also a shortened version which is `man -h` or `man --help`.

`man` also has a `-k` option which is the same as `apropos`. This searches the whatis database for strings. It searches a set of database files containing short descriptions of system commands for keywords and displays the result on the standard output. 

Basically, it gives you short descriptions of system commands. E.g.

	man -k banner		//returns: print large banner on printer

If you don't use the full word, it gives you all the possible options.

We can also use

	whatis banner

And it will print out the same thing. The only difference is that `whatis` doesn't do keyword searching, so if you do `whatis ban`, it will return nothing.


##Directories & Files

The working is the directory where we are right now. When you issue commands, it's important to know what directory you're in, because that's where they'll happen.

To find your current working directory, use 

	pwd

Which stands for present working directory.

	ls 

Will list the files and directories in our present working directory. 

	ls -l -a -h

`-l` will show you a long listing, meaning files will be shown vertically stacked.

`-a` will show us hidden files, meaning files that begin with a dot `.` E.g. `.git`

`-h` will return the size of the files and directories in human readable terms.

Dot files, e.g. `.git` is an invisible config file.

`.DS_STORE` is for the desktop/finder to store information about how we're viewing this folder. Window size, which way we're viewing it, etc.

`.bash_history` is a history of the commands we've been typing. 

Regarding the results from `ls`:

	drwxr-xr-x   8 bengrunfeld  staff    272 May  3 15:38 .
	drwx------+ 10 bengrunfeld  staff    340 May  2 15:19 ..
	drwxr-xr-x  13 bengrunfeld  staff    442 May  3 15:36 .git
	-rw-r--r--@  1 bengrunfeld  staff  64326 May  2 08:49 git_notes.md
	-rw-r--r--@  1 bengrunfeld  staff   1107 Apr 17 17:12 mou_cheatsheet.md
	-rw-r--r--@  1 bengrunfeld  staff   4938 Apr 17 17:12 mou_full_help.md

The `d` at the beginning of the permissions means that it is a directory. The dash `-` means that it is a file. Also, you can sometimes have an `l` there, which means link, or shortcut.

`cd Library/Books` - when using `cd`, you should leave off the slash `/` at the beginning of the path, because if you put it in, it means that this is an absolute path, starting from the root directory.

`cd /` - will take you to the root directory.

`cd ~` - takes you to your user directory. 

`cd -` - takes you to the previous directory that you were in.

###File System Orgranization

In a typical Unix organization, you have the following directories and folders:

**/** - Root of the Hard Drive

Inside the Root, there is typically the following:

**/bin** - where binaries and programs are stored. These are Unix programs, not applications like Dreamweaver.

**/sbin** - are for system binaries and system programs

**/dev** - are where there are references and files for different devices like Keyboard, hard drives, mouse, etc

**/etc** - where system configurations go

**/home** - where user home directories go

On most Unix systems when you log in, you'll be placed into a directory somewhere inside of **/home**. Not on Mac, but on most Unix systems.

**/lib** - is a place for storing Libraries of code that are referred to by various programs. 

**/tmp** - is for temporary files. Temp files are files that you won't really mind if someone comes in and deletes them

**/var** - is for various files that the system uses. 

**/usr** - where the user would put programs, tools and libraries. Not their files, the User's files live in their **/home** directory. These are programs that are for the user.

**/usr/bin**
**/usr/etc**
**/usr/lib**
**/usr/local** - as above

Most versions of Unix will adhere to this structure. They may add a folder or take away a folder, but it they'll mostly be the same. 

Mac is different though.

###Naming Files

Rules of Unix File Naming:

1. Maximum of 255 characters
2. Avoid most symbols - e.g. `/ \ * & ^ % $ # < >` and others
3. Use A-Z, a-z, 0-9, period, underscore, hyphen (but don't start with symbols)
4. Mostly use lowercase letters because Unix is case-sensitive, although not on a Mac. But it's still an issue if you're trying to pull files on to your Mac from a regular Unix system
5. Underscores are better than spaces  
6. escape spaces with `\`
7. Use quotes around names with spaces
8. File extensions (.txt, .php, .html) are not necessary but are very helpful
9. Can't name a file `.` or `..` and shouldn't name any file a Unix command, e.g. `echo.txt`

###Creating Files in Unix

There are 3 main ways to create files in Unix.

1 Unix text editors
2 Direct output to file
3 Touch  
 
	touch

What `touch` does is that it reaches out to a file, and if it exists, it touches it and updates its access time. If it doesn't exist, it creates it for us. 

But if you `touch` a file or directory that exists, it will update the time at which it was accessed last.




















