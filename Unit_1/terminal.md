# The Terminal

The terminal is how we interact with our computer and it'd directories(folders) and files.

It is a CLI: Command Line Interface, a text base interface to the computer. 

We can type commands, manipulate files, execute programs, or open documents. More powerful and fast than a GUI.

(GUI is a Graphic user interface using icons, menus, and windows for us to interact in a visual way.)

<hr />

## Terminal Commands

- Print Working Directory
    - `pwd`
    - shows the name of the current directory, prints the full directory file path
- List Directory
    - `LS`
    - shows the content of the current directory, shows all the folders and/or files at the current directory path
- Make Directory 
    - `mkdir`
    - Creates a new directory inside the current one, aka makes a new folder
- Touch or New Item
    - `ni fileName.fileType`
    - `touch fileName.fileType`
    - creates a new file at the current directory path
- Change Directory 
    - `cd`
    - moves into a different directory
    - to move forward: `cd fileOrFolderName`
    - to move backwards: `cd ..`
- Clear
    - `clear` or `cls`
    - clears the terminal

<hr>

## Other Terminal Commands

- Copy File
    - `cp`
    - copies a file, ex: `cp Index.html copyIndex.html`
- Move file
    - `mv` 
    - moves a file, ex `mv Index.html ./newFolderPath`
- Help
    - `help`
    - provides a list of commands and/or opens a help menu
- Remove Here
    - `rm -r` or `rmdir`
    -  removes files/folders, WARNING!: these cannot be recovered as files permanently and not sent to the recycle bin
    - `rm -r` removes a directory's contents (all/any folders and files it contains), `rmdir` removes an empty directory/folder

<hr>

### Other things to note: 

- In the terminal a file path divides parent and child folders and files with a forward slash: /

- ex: desktop/PTSB_Jan_2023/Lecture/Unit_1/terminal.md

    - desktop
        - PTSB_Jan_2023
            - Lecture
                - Unit_1
                    - terminal.md

- Using the tab key can help us finish a folder or file name we are typing out. 

- We do need to type files/folder names EXACTLY 

- How to stop the terminal from running:
    - Use `ctrl+c` and `cmd+c` enter/return
    - stops the terminal from running something and/or exits what's running/a menu, appear in the terminal as `^C`

- On Mac `sudo` may need to be used before commands where we need to elevate from user to admin privileges 
    - a password field will appear and your user computer password needs to be entered 

    

