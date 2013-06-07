  
#Unix In Depth

##Control Characters

	ctl-m 			//return
	ctl-d 			//logout - same as typing exit
	ctl-g 			//rings bell on the terminal
	ctl-h			//backspace
	ctl-u			//delete whole line
	ctl-s			//pauses output to screen
	ctl-q			//un-pauses output to screen
	


##Unix Mail

	mail			//to read your mail
	Return			//advances to the next email
	d				//deletes the email
	p				//reprint the email
	s <filename>	//saves it in a file that you name
	q				//quit mail
	mail <user>		//opens a new email to <user>
	ctl-d			//sends the email and closes the mail program
	

##LS Options

	ls -t			//sort by time
	ls -u			//gives info on when files were used
	ls -r			//reverses order of any other option used (e.g. -t)
	ls -d			//check just the directory that you're in
	ls -c			//
	ls -i			//reports the i-number of each file (decimal notation)

##CMP
	
	cmp				//compares 2 files byte by byte - diff better

`cmp` works on any type of file, although `diff` only works on text files.


##Directories

	pwd				//print working directory
	echo *			//echoes all the non-hidden files in the directory
	cat *			//prints all the files in the dir
	rm *			//deletes all files in the current directory

##Files

	file			//determines what type a file is

A runnable program is maked by a binary 'magic number' at it's beginning. Use `od` with no options to find it. The octal value `410` marks a purely executable program. `410` is not ASCII text, so an editor cannot create it.

In Unix there is only one type of file, and all that is required to access it is its name.



##Misc

	&				//if you end a command with &, it will start the 					//program but accept further prompts
	od				//octal dump. Shows the bytes of a file. Use with -cx

Programs retrieve the data in a file by a system call (a subroutine in the kernel) called `read`. Each time `read` is called, it retrieves the next part of a file. E.g. the next line of text typed on the terminal.

	rm -f			//forces removal without interactive request
	
	
##Processes

An instance of a running program is called a process. Processes are not the same as programs. 

Every time you run the **program** `wc`, it creates a new **process**.

If several instances of the same program are running at the same time, each is a separate process with a difference process ID.

	kill 0			

This will kill all your processes besides the login shell

	nohup <command> &		

The command will continue to run if you log out and will save any output into the file `nohup.out`

	nice <resource heavy command> &

If you have a command that uses up a lot of processor resources, you can run it with lower priority, so that other users don't suffer.

	at time
	<commands>
	ctl-d

This will run a command at whatever time you like.


##SHELL Variables

	$PS1			//Terminal Prompt
	$PATH			//Search Path
	$TERM			//Name of Terminal you're using

To tell other programs that you want to use a personal variable you've set in `.bash_profile` or just in the terminal, use `export`. e.g.

	export d="/dev/"

##Permissions

When you login, you are assigned a `uid` by the system. 2 different login names can have the same `uid`, making them indistinguishable to the system, although this is not good for security reasons.

Every new user is assigned to the group of `Other`, although this varies by system.

In `/etc/passwd` you'll find all the passwords for all users of the system. While the file is ordinary text, the field definiteions and separators are agreen upon conventions used by the programs that use the file.

	login-in:encrypted-password:uid:group-id:mescellany:login-direcoty:shell

So for my Unix configuration, it's

	root:x:0:0:root:/root:/bin/zsh

If the shell field is empty, it implies that you use the default shell. The miscellany filed may comtain anything (phone number/postal address).

When you give you password to `login`, it encrypts it and compares the result against the encrypted password  in `/etc/passwd`. If they agree, it logs you in.

The file `/etc/group` encodes group names and group id's, and defines which users are in which groups. `/etc/passwd` only identifies users in your login group.

	newgrp				//changes your group permissions to another group 						//and logs you into that group


To change your password, use the `passwd` command.

If you use `which passwd` to find it's path, then use `ls -lah /usr/bin | grep passwd` (or whatever it's path is), you'll see `passwd`'s permissions.

Note that instead of `-rwxr-x-r-x`, it has `-rwsr-xr-x`. The `s` in the execute field means that when the command is run, it is to be given the permissions corresponding to the file owner (i.e. root). This means that any user can run the `passwd` command to edit the password file.

What **executable** means: when you type something like `who` to the shell, it looks in a set of directories name `who`. If it finds the file, and has the execute permission, the shell calls the kernel to run it. The kernel checks the permissions, and if valid, runs the programm. 

NOTE: A program is just a file with excecute permissions.

If you have write permission to a directory, you can delete files in that directory, even if you don't have write permissions to those files.

If you `chmod` a file or directory, it won't update its modification date. That only happens when you modify the contents of a file/dir.

###Inodes

Administrative information, such as permissions, modification dates, disc location, and file size are not stored in the file itself, but in a system structure called an index node, or **Inode**.

There are 3 times in the Inode - last modified, last used (read or executed), last change of Inode itself.

The system's internal name for a file is its **i-number** - the number of the Inode holding the file's information. 

The i-number is stored in the first 2 bytes of a directory, before the name. `od -d` will show you this. These 2 bytes are the only connection between the filename and its contents. Therefore a filename in a dir is actually a *link*, because it links the name in the directory hirarchy to the Inode, and hence the data.

The same i-number can appear in more than 1 directory. The `rm` command removes links, and when the last link to a file disappears, the system removes the Inode itself, and hence the file.

The number printed between permissions and owner with the `ls -lah` command is the number of links to the file. There is no difference between the first link and subsequent ones.


##Devices


