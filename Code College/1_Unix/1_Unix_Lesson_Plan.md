# 1. Unix Lesson Plan

Lesson 1 - Basics of Unix

## History

Unix is an operating system, created during 1969 - 1971 by AT&T employees at Bell Labs.

C was developed for the Unix OS, and Unix was then rewritten in C.

Because of a court case, AT&T was forbidden from entering the software market, so while they weren't allowed to sell software, they were allowed to give it away for free.

Universities and corporations adopted Unix because it was free. Generally it was the first thing new students learned. Programming really took off in 1975, so by in the 80's and 90's, when these programming students because to found software companies, they based a lot of what they made in Unix.

After 1977, there were a lot of branches and improvements made to Unix. Some of these include:* Open Source: BSD (Berkley Software Distribution), Linux 
* Closed Source: Solaris (Sun/Oracle), AIX (IBM),* Mixed Source: Mac OS X (Apple)
These days, Unix means a unix-like system, because no-one really uses System 5 anymore.
## Unix: A multi-user environment
Unix is fundamentally a multi-user environment.
So when you log into your Mac, you're being logged in as a user, so when you open up a Terminal window, it uses those credentials to automatically log you into Unix.

## Command StructureThere is a very definite structure to the commands in Unix. 

	Command		Options		Arguments

You can't put the Options after the Arguments. They have to go in the middle.

The Command is always a single word. It's the thing we want to do.

Options will modify the behavior of the command in some way, and are usually prefixed by a hyphen `-`.

Arguments are the thing we want the Command to do when it does whatever it does.

	# Example 1
	
	An example with an option would be:
	
		echo -n 'hello world'
	
	The `-n` option suppresses a new line.


With options, you'll usually have a single dash `-` followed by a letter, or two dashes `--` followed by a word, as in the following example.

	ruby -v
	ruby --version

You can have single letter options being separate with their own hyphens, or you can combine them all with only 1 dash and no spaces. e.g.

	ls -l -a -h ~/Desktop
	ls -lah ~/Desktop

We can also have multiple arguments, such as
	
	cat -n 3rd.html 4th.html
	
Use semi-colons `;` to break up commands.

	echo -n "hello"; echo "world"

## Kernel and Shells

**The Kernel** is the core of the Operating System in Unix. It's what takes care of allocating time and memory to programs. It manages how programs do their thing. Mac OS X uses the Mach Kernel inside Darwin to do that.

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

To check which Shell will be used to log you in

	echo $SHELL

	