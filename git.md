文档：http://www.codebaoku.com/git/git-reset.html

- git clone/git fetch 克隆远程仓库到本地
- git init 初始化git
- git config --global user.name "username"   "username"是自己的账户名，
- git config --global user.email "username@email.com"     注册账号时用的邮箱
- git config --list 查看账号密码配置信息 , 英文状态下q键退出
- git add 文件名/.   添加到暂存区， . 代表所有
- git commit -m 'xxx' 提交到本地仓库
- git status 查看状态
- git log 查看git日志 , 英文状态下q键退出
- git remote add origin https://xxxxxx  关联远程仓库
- git push 本地仓库同步到远程仓库 
- git push origin master  将本地的 master 分支推送到 远程的 master 分支
- git push -f(--force)  强制提交
- git pull 拉去远程代码同步到本地
-  -----------------------------------------------------------------------
- git checkout  xxx  切换到 xxx分支
- git checkout -b xxx   创建新分支xxx，并切换到该分支

1. 如果远程不存在xxx分支 git push --set-upstream origin xxx 本地新建的xxx分支推送到远程仓库
2. 如果远程存在xxx分支  git branch --set-upstream-to=origin/xxx   本地与远程分支进行关联，再pull 

- 或者直接  git checkout -b 本地分支名 origin/远程分支名  (将远程git仓库里的指定分支拉取到本地（本地不存在的分支）)

​		如果拉取不成功。我们需要先执行git fetch

-  
- git checkout  xxx.js  还原文件xxx.js，类似撤回
- git checkout  .   未提交时撤销本地开发代码
- git cheackout -  切换到上一个分支
-  -----------------------------------------------------------------------
- git branch 查看本地分支
- git branch -r 查看远程分支
- git branch -a 查看所有分支
- 
- git branch xxx 新建xxx分支

​	    如果远程不存在xxx分支 git push --set-upstream origin xxx 本地新建的xxx分支推送到远程仓库

​        如果远程存在xxx分支  git branch --set-upstream-to=origin/xxx   本地与远程分支进行关联，再pull

- 
- git branch -d xxx 删除本地分支xxx 。注意 ：不能删除当前所在分支
- git push origin --delete(可以缩写d) xxx  或者 git push origin :xxx  删除远程分支xxx    
-   -----------------------------------------------------------------------
- git merge origin/xxx  远程分支xxx在本地的副本合并到本地当前分支，所以需要先checkout到xxx pull后再切回来执行
- git merge xxx  本地xxx合并到本地当前分支，所以需要先checkout到xxx pull后再切回来执行
-  
-  git fetch origin  打个比方，在远程库 origin 新建了一个分支 dev，正常git branch -r/-a是查不到这个分支的，git fetch origin 后就会有一个不可以修改的 origin/dev 指针；这个命令查找 “origin” 是哪一个服务器，从中抓取本地没有的版本库，并且更新本地版本库，不会更新到本地当前代码，需要pull才会更新
-  
- git reset --soft da07c314e77750734c4433a07ba4ef54dd353ac3  软回滚  撤回指定commit版本号xxx到本地暂存区，不会覆盖本地当前代码。之后再git push --force强制提交，中间的commit记录会丢弃，比如版本1、2、3、4，我现在在版本4，回滚到版本1后push，2、3记录会丢弃
- git git reset  --hard da07c314e77750734c4433a07ba4ef54dd353ac3 硬回滚  本地直接回滚到指定commit版本号代码，覆盖本地当前代码
- git reset 跟git reset --soft差不多，不会覆盖本地当前代码，但不是放到暂存区，而且变成修改前代码
- git reset --soft HEAD~1   撤消上一次提交
- git reset --hard feature/dev_33  回滚到feature/dev_33分支日志
-  

**HEAD 说明：**

- HEAD 表示当前版本
- HEAD^ 上一个版本
- HEAD^^ 上上一个版本
- HEAD^^^ 上上上一个版本
- 以此类推...

可以使用 ～数字表示

- HEAD~0 表示当前版本
- HEAD~1 上一个版本
- HEAD^2 上上一个版本
- HEAD^3 上上上一个版本
- 以此类推...

git stash 储存  ，比如：突然要加一个其他新功能，当前分支功能又有很多代码没有提交，切换不了到新分支。一般我们是先提交到本地仓库 再切换新分支开发新功能，回到老分支的时候回滚到上一次。但是还有一个方法，git stash可以储存当前更改，更方便

git stash pop 弹出储存



合并提交日志

git rebase -i 181e09aa70a08d4cc7f29b0e316ca652836211e6 ac223cd16b5284d6404032dbd7156d18c9a8c8eb

起始commitId，结束commitId。不包含起始，包含结束

输入i进入编辑模式。:wq保存并退出。dd删除

[博客详情](https://blog.csdn.net/Var_YanGuangYing/article/details/122340315)

[视频](https://www.douyin.com/video/7122102603516824846)



git cherry-pick  44a62115f1c861bc96cae84a3ecb1ebbad09d341   把其他分支上的一条记录(xxx)合并到当前分支上



rm -f xxx 删除本地文件

