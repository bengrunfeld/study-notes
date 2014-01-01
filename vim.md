# Vim

Vim has two modes, `Insert` and `Command`.

You can see what mode you are in in the status bar at the top of the editor.

* `ESC` – change to **Command** mode
* `i` – change to **Insert** mode

## Movement

#### Moving the cursor 1 space

In **Command** mode, move the cursor with the following keys(`hjkl`):

* `h` – backwards
* `l` – forwards
* `k` – up
* `j` – down

#### Moving the cursor 1 word

* `w` – moves to the start of next word
* `e` – moves to the end of the word  
* `b` – moves to beginning of the word

You can move 3 words by typing `3w`, or 9 spaces by typing `9l`. This works for all other movement commands.

#### Moving to the beginning or end of the line

* `0` – moves the cursor to the end of the line
* `$` – moves the cursor to the beginning of the line


#### Moving to the beginning or end of the file

**Command Mode**

* `gg` – moves the cursor to the beginning of the file
* `G` – moves the cursor to the end of the file
* `5G` – moves the cursor to the 5th line of a file

#### Moving to the matching parens

To go to the matching parens of a statement, use `%`.


## Working with Text

#### Inserting text

You can insert text multiple times.

In **Insert Mode**, to enter "go" 3 times, type `3igo` then hit the `ESC` button.
 
#### Inserting a line

**Command Mode**

Insert a new line after the current line with `o`, and before the current line with `O`. You will put into **Insert Mode**. When you're finished, hit `ESC` to return to **Command Mode**.

#### Replacing a single character

**Command Mode** 

You can replace a single character at the position of the cursor without switching to **Insert Mode** with `r`. 

#### Deleting a single character

**Command Mode**

Delete text one character at a time with `x`
 and `X`. 

#### Deleting words

**Command Mode**

Use the `d` key to delete things. `d` can be combined with movement commands, so `dw` deletes the first word to the right of the cursor.

`d` copies the deleted content, so you can paste it back it with `p`.

 
## Finding Characters and Words

#### Finding a character

**Command Mode**

Use `f` and `F` to find and move to the next or previous occurance of the character you're looking for.

e.g. `fw` will find and go to the next occurance of the letter `w`.

You can combine `f` with numbers, so `3fw` will find and go to the 3rd occurance of the character `w`.

#### Finding a word

**Command Mode**

Find the next occurance of the word that the cursor is currently sitting under by using `*`, and the previous occurance with `#`.

#### Finding a word by search for text

**Command Mode**

Use `/` to start a text search. Enter the text you're looking for, then hit `Enter`.

To go to the next occurance of the matched search term, use `n`, and `N` to go the previous occurance.

You can also use REGEX in this search.

#### Repeating the last command

**Command Mode**

Use `.` to repeat the previous command. (e.g. `d3e` then `.` will repeat that again as many times as you press `.`)


## Visual Mode

Besides **Command** and **Insert** mode, there is also **Visual Mode**. In **Visual** mode, you can select text using the movement keys before you decide what to do with it.

#### Switching to Visual mode

When in **Command Mode**, hit `v`.

Then you can select a word (e.g. use `el` to highlight the current word plus the space after it, then use `d` to delete it).

## Visual Block Mode

In **Visual Block Mode**, you can insert many lines of text at once.

To enter **Visual Block** mode, hit `Ctl-v` from **Command Mode**. 

Select text area moving vertically, and with `I` prepend to the selected area. `Esc` completes the insertion.

## General Commands

**Command Mode**

* `:w` – save
* `:q` – quit
* `:q!` – quit without saving
* `u` – Undo
* `Ctl-R` – Redo
* `:help` – access help menu

