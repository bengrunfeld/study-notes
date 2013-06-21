#Git Cheat Sheet

###To Create a New Repo on GitHub

1. Click the "create new repo" icon on the top right hand corner of the screen.
2. Copy the HTTP address shown in the bar at the top
3. In your main dir in git, use `git remote add <alias> <url>`
4. Then `git push -u <alias> <branch-name>` (afterwards, just use `git push`)
5. `git fetch` will download our code from GH repo to the remote branch – `<alias>`
6. Then go to your master branch and do `git merge origin/master`




