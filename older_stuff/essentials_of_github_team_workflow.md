# Essentials of GitHub Team Workflow

When working together on a project as part of a team, you may not want to grant **Push/Pull** access to every one of your team members.

In fact, you may want to restrict their access and make sure that every change they make goes via you, with you hitting the merge button.

This workflow will teach you how to do that.

#### Terminology

**Owner** – the user that owns the repository, or any user that has *Push Access*

**Contributor** – a team member or user that wants to contribute code to the repository but does not have *Push Access*

If you have 1 team lead and many team members, just imagine that all the other team members are **contributors**, and that all the following rules apply to them. 

#### Forking a Repository – Contributor

1. **Owner** creates the initial repository and sets it as being open.

2. **Contributor** forks the repository by hitting the `fork` button in the GitHub interface while on the **owners** repo.

3. A copy of the repo will now appear in the **contributor's** GitHub account.

4. In the right-hand sidebar menu of the **contributor's** version of the forked repository, you'll see "SSH clone URL". Click the `copy to clipboard` icon, then go to your unix shell.

5. Create or navigate to the directory where you want to store the code and run this code: `git clone <paste URL here>`.

6. The **Contributor** will now have a copy of the code that they forked on their local machine.

7. While the **contributor** now has a copy of the code, they will want to keep up to date with changes made to the **owner's** copy of the code. To do this, add a remote called `upstream` and point it at the **owner's** repository with the following code: `git remote add upstream https://github.com/owner/repo.git`. Then if there is a change in the **owner's** version of the repo, you'll run the code `git fetch upstream`, and then run the code `git merge upstream/master`. You could just use `git pull upstream`, but that would automatically initate a merge, meaning you couldn't review the code first.

#### Initiating a Pull Request – Contributor

1. Once the **contributor** has pushed the change they'd like to make to their forked version of the **owner's** repository, they navigate to the forked version with a web browser.

2. In the top horizontal menu that sits just above the code, click `Pull Request`.

3. The **contributor** will then be able to review the diff between their branch and the **owner's** master branch.

4. The **contributor** will also be able to change *Base Branch* and *Head Branch*, although usually the default is sufficient. *Base Branch* is the destination where you'd like your changes to be sent. *Head Branch* is the destination of your code that you'd like to send to the **owner's** repo.

5. When the **contributor** is ready to initiate the Pull Request, click on the header to start the discussion. You'll be taken to a page where you can enter a title and description regarding the Pull Request.

6. Once you're ready, click the `Send Pull Request` button.

7. Once you've sent the Pull Request, you may realize that you need to make more changes to your branch. Any changes made will update automatically inside the Pull Request.


#### Merging the Pull Request On GitHub – Owner

1. On the **owner's** repository page, click `Pull Requests` in the right-hand sidebar menu. 

2. The **owner** should then find the Pull Request they are interested in and click on it. Truthfully, in an open-source project, anyone can view this page, but only users with **Push Access** can authorize the merge.

3. The **owner** can then review the code changes that are present and discuss any concerns they may have regarding the new code.

4. Anyone with **Push Access** can then click the `Merge Pull Request` button, and if there aren't any merge conflicts, the **owner** will be able to enter a commit message and click `Confirm Merge`. This will merge the Pull Request into the destination branch.

5. If there is a merge conflict, you won't be able to complete the merge on GitHub. If that is the case, follow the instructions for sorting out the merge conflict [here](https://help.github.com/articles/merging-a-pull-request)

6. Once you've merged the Pull Request, you may be left with unneeded branches. Github then provides you with a `Delete this branch` button that allows you to delete the unneeded branch. This keeps your repository nice and clean. If you delete a branch by accident, you can restore it later.

#### Denying the Pull Request – Owner

1. If the **owner** does not want to allow the Pull Request, they can click `Close Pull Request`, which sits under the `Merge Pull Request` button. 
