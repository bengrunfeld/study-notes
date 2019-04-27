# Git Advanced Techniques

## Identify Merged Branches

List branches that have been merged into a branch.
    
    git branch --merged

Prints a list of branches in our local repository which have been merged into the current branch.

    git branch --no-merged

Prints a list of branches in our local repository which have **NOT** been merged into the current branch.

    git branch -r --merged

Prints a list of **remote** branches in our remote repository which have been merged into the current branch.

    git branch --merged <branch name>

Checks to see what branch tips are reachable from the specified commit (the HEAD of the current branch, if not specified). Can be used with:

    git branch -r --merged origin/nodemon
    git branch --merged 18d2d418        // commit id

## Delete Remote Branch

    git push origin :<branch name>

This says, "push nothing up to the remote of <branchname>". Or you can use:

    git push --delete origin <remote branch name>
    git push -d origin <remote branch name>

## Prune Stale Branches

Pruning means to delete all stale remote tracking branches (not remote branches). A remote tracking branch is the local branch that tracks the remote, and typically looks like this `origin/branchname`

A **stale branch** is a remote tracking branch that no longer tracks anything because the actual branch in the remote repository has been deleted.

When we work with remote branches, there are actually 3 different branches.

    1. Remote branch (in the remote repo - e.g. bugfix)
    2. Remote tracking branch (local snapshot of that branch eg origin/bugfix)
    3. Local version of branch

When we call `git fetch`, we fetch the changes from the repo and sync up our tracking branch so that the same changes are there.

If we delete a remote branch using `-d`, it will also delete the remote tracking branch.

We get stale branches when a collaborator deletes the remove branch, as `git fetch` does not automatically prune the remote tracking branch.

    git remote prune origin

Deletes stale remote tracking branches. We can also use:

    git remote prune origin --dry-run

which will let us see what it will do before it does it - i.e. it won't actually make any changes yet.

We can fetch and prune at the same time:

    git fetch --prune
    git fetch -p

We can also set a config to always fetch and prune at the same time:

    git config --global fetch.prune true

Note, this is NOT `git prune` which is part of garbage collection and prunes ALL unreachable objects. You can use it with `git gc` which says clean up all the things which aren't being used in my repo.

## Tags

A tag is a way to mark a point in our Git history which is important. It is essentially a named reference to our commit, which will make it easy to find that commit in the future.

Most often, Tags are used to mark releases (e.g. v.0.0.1, v0.2.3, etc).

It can also be used to mark key features or changes in our code (e.g. typescript implementation, http/3, etc)

Can mark points for points in the code that we want to discuss with our team.

### Types of Tags

There are 2 types of tag:

#### Lightweight tag: 

    git tag tag_name commit_SHA

e.g.
    
    git tag v2.1.3 b318d818

#### Annotated Tag (commonly used):

    git tag -a v2.1.3 -m "Version 2.1.3" b318d818

We can also write it as
    
    git tag -am "message" tag_name commit_SHA

If we were to leave off the `-m` and the message that follows, Git would open up our defaul text editor.

If we were to omit the SHA at the end, then Git would use the current HEAD.

### Listing Tags

    git tag
    git tag --list
    git tag -l

Will all list tags.

    git tag -l "v2*"

Filters list via regex. You must use the `-l` tag tho, otherwise Git will think we want to create a new tag.

This list will only show the tag name, not the annotations. If we want to list the tags with annotations, we need to use the `-n` flag. That will only display one line of the annotation. You need to put a number afterwards if you want to see `x` number of lines of annotations. Can also be written as `-ln`.

We can now work with the tag names just like we would with a SHA. e.g.

    git show v2.1.3
    git diff newFeature..oldFeature

### Deleting Tags

    git tag --delete v2.1.3
    git tag -d v2.1.3

### Push tags to a remote server

If we do a `git push`, it does not transfer tags to our remote repo. It leaves them local. That can be good, because we can have a whole bunch of tags that we just use for ourselves. 

Tags must be transfered **explicitly**

We automatically **GET** tags when we run `git fetch` as it retrieves shared tags. To push a tag to a remote repo:

    git push origin v2.1.3

This pushes a single tag. To push **ALL** of our tags, we can use:

    git push origin --tags

To **ONLY** fetch the tags from the repo (with the necessary commits), we can use:

    git fetch --tags

To delete those tags, we use the same command as the one used to delete remote branches:

    git push origin :v2.1.3
    git push --delete origin v2.1.3
    git push -d origin v2.1.3












