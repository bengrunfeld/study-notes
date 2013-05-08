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


##Using Text Editors

In the beginning, developers working on Unix used to use a text editor called "ed", which is short for editor, and is not user-friendly.

Then Unix developers came out with something that was a little more user friendly, called 
`vi` which is short for 'visual editing mode', which was upgraded and called `vim` (vi improved). 

Vim is still in use. It's a modal editor, where your fingers stay in the middle of the keyboard.

Another popular editor is `Emacs`, which is short for "editor macros". It's power comes from all the macros that have been developed around it, which allow you to automate a lot of your work

A better editor for beginners was pico (pine composer), which lager became nano (1000x larger than pico), which has basic features and is easy to use. Pico was a very simple email program. 

If you type pico into your mac, it will put you into nano.


##Reading Files

Yes, you can nano to read file, but there are other tools in Unix that are JUST for reading files. 

This is important, because you can output the text of a file to different commands and different programs, not just the screen.

Here are some tools to read files: 

`cat` - concatenate. `cat` at its simplest level allows you to read files, but the reason it's called concatenate is that it can also join several files together and print them to the screen, hence the term. The problem with `cat` is that it doesn't paginate the results, so you have to scroll up and down.

`more` - prints a file to the screen, and paginates it, but doesn't allow you to go back through the pages.

`less` - is an improvement of `more` that paginates results but allows you to go backwards through the pages. `less` has completely replaced `more`, (the joke is that less is greater than more), so if you type `more` onto a Mac, it will actually activate `less`. 

`man` pages use `less`. `spacebar` or `f` goes forward, `b` goes backward, `q` exits. `g` goes to the start of the document. `shift + g` goes to the end.

`less -M filename.txt` - gives you a better prompt, shows you how far you've got through the document and which lines you're viewing

`less -N filename.txt` - shows you line numbers

###Reading portions of files

`head` - displays lines from beginning of a file (default: first 10 lines)

`tail` - displays lines form end of a file (default: end 10 lines)

Usefull for peeking at the beginning or end of a file. Good for logs, where newest stuff is at beginning or end of file.

`tail -f` - will follow the file. It won't exit immeditately from viewing the file, but will watch for changes to the file and update your screen if anyone saves something else there.

To exit, use `Control + c`

To look at your system log, use:

	tail -f /var/log/system.log

To see the system log, i.e. requests coming into the server, use:

	tail -f /var/log/apache2/access_log

Or to see the error log, use:

	tail -f /var/log/apache2/error_log
	
##Creating Directories

To create directories, use:

	mkdir directory_name

Or to create a directory inside of another directory:

	mkdir parent/child

But if you create a directory 2 levels deep, it will create 2 directories. So in this example, if parent exists, but the other 2 don't, it will create child and grand_child. You need to pass in the `-p` option, otherwise it won't work. `-p` stands for **parent**.

	mkdir -p parent/child/grand_child

You can also pass in the `-v` option, which stands for **verbose**. Using this will print to the screen a report of which directories were created.

###Copying Files and Directories

To copy a file, use:

	cp oldname.txt newfile.txt

**`cp` Options:**

* `-n` - no overwriting
* `-f` - force overwriting (**default**)
* `-i` - interactive overwriting "ask me"
* `-v` - verbose


Copying directories works the same way, except with one difference. You need to use the `-R` option, which stands for copy Recursively down the line until you finish.

	cp -R dir1 dir2

Sometimes `-r` will work as well, but you should really use `-R`.

###Moving and Renaming Files and Directories

To move a file, use:

	mv filename.txt destination/filename.txt

But destination needs to be an existing directory.

You can even use 

	mv filename.txt destination/
	mv filename.txt destination

And these will both work.

To rename a file:

	mv oldfilename.txt newfilename.txt
	mv oldfile.txt destination/newfile.txt

To rename a directory:

	mv old_dir_name new_dir_name

This only works if new_dir_name doesn't exist. If it exists, it will simple move the directory. But if `new_dir_name` doesn't exist, it will say, "oh, you want to do a rename. ok. BANG!"

**`mv` Options**

* `-n` - no overwriting
* `-f` - force overwriting (**default**)
* `-i` - interactive overwriting "ask me"
* `-v` - verbose




###Deleting Files and Directories

When you delete something, it is destructive, meaning that it is destroyed completely. It is not placed in the trash. It is totally destroyed.

To delete a file, use:

	rm filename.txt

I tested it, and you can also delete multiple files this way just by adding more on to the end.

	rm file1.txt file2.txt

To delete a directory, we have 2 options:

	rmdir dir_name

The issue with this is that `rmdir` will only remove directories that are empty.

To delete a directory that is NOT empty, use

	rm -R dir_name

This will destroy everything inside of the directory, plus the directory itself.



##Links and File Aliases

Conceptually, links are similar to file aliases that you create in the Mac OS X Finder. They're not the same thing, though. 

1. Create a file
2. Go to the Finder and then navigate to `File -> Make Alias` (or `Cmd + L`) or we can `option + command + drag the file` to create the Alias
3. Rename the new file
4. There will be an arrow on the icon in the Finder that tells you it's an Alias

If the file or the alias moves, it still points to the file, no matter where we relocate either.

If you delete the file, it will break the alias.

We can also make aliases of folders the same way.

Aliases are bigger files, because that is the info the Finder uses to keep track of the original file.

If we open the file alias or directory alias in the Finder, it will open the original file. This doesn't happen in Unix.

If we open the file alias in Unix, it will open as Gibberish (compliled code). They are only for the Finder.

Instead, we'll need to use the Unix version of aliases, which are called **Links**.

###Hard Links

To make a Hard Link

	ln file_to_link.txt hard_link_name.txt

Creates a reference to a file in the filesystem.

Does not break if file is moved.

Unlike Aliases in the Finder, the file does not break if the original file is deleted.

This is because both files are pointing to the same storage address on the hard drive. This is different to the Alias in the Finder, which points to the file, instead of the memory address.

The hard link doesn't even have to have a file extension.



###Symbolic Links

Also know as **sym links**. To create a symbolic link, use:

	ln -s filetolink symlink
	
The difference between hard links and symbolic links is that symbolic links reference the path to the file. Not the file itself.

So sym links are more interested in the directory the file is in.

Will break if moved. Will break if deleted.

If you do 
	
	ls -la

it will appear as 

	`symlink -> filtolink.txt`

##Searching for Files and Directories

Spotlight is the searchbar that the finder uses. But here's the Unix way:

	find path expression

e.g.

	find ~/Documents -name "myimage.png"
	
This will return anything in **Documents** that has exactly the name **myimage.png**.

To search for something less specific, we need to use wildcard characters. In Unix, these are:

	*	//zero or more characters (glob)
	?	//any one character
	[]	//any character in the brackets
	

Here is an example of how to use a wildcard

	find ~/downloads -name '*.csv'
	find ~/Documents -name 'git_notes.[p]??'
	find ~/Documents -name 'git_notes.*'

And there are many other options you can feed in. If you don't want something that has a certain path, use

	find ~/Documents -name 'git_notes.*' -and -not -path *notes*


##File Ownership and Priveledges

Because Unix is designed to be a multi user system, it would not make sense if all users has all permissions to everyone elses files.

To find out who you are, use:

	whoami

This is useful if you are logged into a remote user, or if you switch users, etc.

If for some reason your permissions are denied, you can check which user you are, just to be sure.

Each user gets a home directory. `cd ~` to get to it.

That value is stored in `$HOME`

You can create other users through OS X interface, but we prefer to do it from the command line.

###Unix Groups 

A **Group** in Unix is a set of users. Each user belongs to at least 1 group. A primary group. And they can belong to any number of other groups as well.

Groups are good for associating a group of users with a file. So file permissions can be set by group. (e.g. IT Group), so all you'd have to do is add a user to a group and they'd have access to that file.

Groups are really used for shared systems, like remote servers, etc.

To see which groups you belong to, use:
	
	groups

###File and Directory Ownership

Ownership is an essential part of working in a multi-user environment. It's how Unix determines which files you can access and which ones you can't. You can see the ownership of files and directories everytime you use `ls -la`

It's the second and third columns in the results list. E.g.

	drwxr-xr-x    6 root         admin    204 Jan 17 12:53 ..
	-rw-------    1 bengrunfeld  staff      3 Jan 26 09:11 .CFUserTextEncoding
	-rw-r--r--@   1 bengrunfeld  staff  15364 May  6 08:25 .DS_Store
	drwx------   20 bengrunfeld  staff    680 May  8 09:09 .Trash

The owner for almost all of the files above is `bengrunfeld`.

The group that owns most of the files about is `staff` 

We can set permissions based on the owner or based on the group.

We can share files with other users.

To change the permissions of a file, we use 

	chown user:group filename.txt

which stands for **"change ownership"**.

To change only the owner or only the group, use:

	chown user filename.txt
	chown :group filename.txt

We can do this for directories as well, but it won't change all of the contents of the directory. The files inside will keep the ownership they already have. To change everything in the directory as well, we use:

	chown -R user:group filename.txt

`-R` stands for recursively. This will go down through everythign inside the directory.

You can't just change the ownership to another user, since that would be a security concern. You can only do this if you are an administrator on the machine, and then you need to use `sudo`. E.g.

	sudo chown user:group filename.txt 

Then it will ask for your password to make sure.














