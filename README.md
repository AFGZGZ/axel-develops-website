## Personal website/portfolio

[www.axeldevelops.com](https://axeldevelops.com)

### TECH STACK

React + Vite + Tailwind + Motion + three.js (with fiber & drei)

### For deployment in Github Pages:

After creating a new build use 'git subtree push --prefix dist origin **branchName**' to push only the dist folder content to the online branch that manages the deployment.

If you get any issue, this is a way to force it:

**1. Create a branch from dist**

git subtree split --prefix dist -b **tempBranch**

**2. Force push it to the remote deployment branch**

git push origin **tempBranch**: **originBranchName** --force-with-lease

**3. Clean up**

git branch -D **tempBranch**
