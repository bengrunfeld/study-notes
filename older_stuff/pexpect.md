# Pexpect

The command parameter may be a string that includes a command and any arguments to the command. For example::
 
    child = pexpect.spawn ('/usr/bin/ftp')
    child = pexpect.spawn ('/usr/bin/ssh user@example.com')
    child = pexpect.spawn ('ls -latr /tmp')
   
You may also construct it with a list of arguments like so::
 
    child = pexpect.spawn ('/usr/bin/ftp', [])
    child = pexpect.spawn ('/usr/bin/ssh', ['user@example.com'])
    child = pexpect.spawn ('ls', ['-latr', '/tmp'])

After this the child application will be created and will be ready to talk to. For normal use, see `expect()` and `send()` and `sendline()`.

Remember that Pexpect does NOT interpret shell meta characters such as redirect, pipe, or wild cards (`>, |, or *`). This is a common mistake. 

If you want to run a command and pipe it through another command then you must also start a shell. For example::
 
    child = pexpect.spawn('/bin/bash -c "ls -l | grep LOG > log_list.txt"')
    child.expect(pexpect.EOF)
    
The second form of spawn (where you pass a list of arguments) is useful in situations where you wish to spawn a command and pass it its own argument list. This can make syntax more clear. For example, the following is equivalent to the previous example::
 
    shell_cmd = 'ls -l | grep LOG > log_list.txt'
    child = pexpect.spawn('/bin/bash', ['-c', shell_cmd])
    child.expect(pexpect.EOF)

The `maxread` attribute sets the read buffer size.

The `searchwindowsize` attribute sets the how far back in the incomming seach buffer Pexpect will search for pattern matches. The default is to search from the beginning of the imcomming buffer each time new data is read from the child. But this can be very inefficient if the result set is too big.

The `logfile` member turns on or off logging.