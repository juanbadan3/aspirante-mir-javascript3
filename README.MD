
Elena@DESKTOP-6F2NBCD MINGW64 ~ (master)
$ git init
Reinitialized existing Git repository in C:/Users/Elena/.git/

Elena@DESKTOP-6F2NBCD MINGW64 ~ (master)
$ pwd
/c/Users/Elena

Elena@DESKTOP-6F2NBCD MINGW64 ~ (master)
$ cd ejercicios

Elena@DESKTOP-6F2NBCD MINGW64 ~/ejercicios (master)
$ pwd
/c/Users/Elena/ejercicios

Elena@DESKTOP-6F2NBCD MINGW64 ~/ejercicios (master)
$ mkdir ejercicio8

Elena@DESKTOP-6F2NBCD MINGW64 ~/ejercicios (master)
$ pwd
/c/Users/Elena/ejercicios

Elena@DESKTOP-6F2NBCD MINGW64 ~/ejercicios (master)
$ cd ejercicio8

Elena@DESKTOP-6F2NBCD MINGW64 ~/ejercicios/ejercicio8 (master)
$ pwd
/c/Users/Elena/ejercicios/ejercicio8

Elena@DESKTOP-6F2NBCD MINGW64 ~/ejercicios/ejercicio8 (master)
$ mkdir aspirantes-mir-javascript3

Elena@DESKTOP-6F2NBCD MINGW64 ~/ejercicios/ejercicio8 (master)
$ cd aspirantes-mir-javascript3

Elena@DESKTOP-6F2NBCD MINGW64 ~/ejercicios/ejercicio8/aspirantes-mir-javascript3 (master)
$ pwd
/c/Users/Elena/ejercicios/ejercicio8/aspirantes-mir-javascript3

Elena@DESKTOP-6F2NBCD MINGW64 ~/ejercicios/ejercicio8/aspirantes-mir-javascript3 (master)
$ git checkout -b develo
Switched to a new branch 'develo'

Elena@DESKTOP-6F2NBCD MINGW64 ~/ejercicios/ejercicio8/aspirantes-mir-javascript3 (develo)
$ git branch -d develo
error: Cannot delete branch 'develo' checked out at 'C:/Users/Elena/ejercicios'

Elena@DESKTOP-6F2NBCD MINGW64 ~/ejercicios/ejercicio8/aspirantes-mir-javascript3 (develo)
$ git branch -d develo
error: Cannot delete branch 'develo' checked out at 'C:/Users/Elena/ejercicios'

Elena@DESKTOP-6F2NBCD MINGW64 ~/ejercicios/ejercicio8/aspirantes-mir-javascript3 (develo)
$ git checkout master
Switched to branch 'master'
M       README.md/README.md

Elena@DESKTOP-6F2NBCD MINGW64 ~/ejercicios/ejercicio8/aspirantes-mir-javascript3 (master)
$ git branch
  develo
  develop
  develop}
  main
* master

Elena@DESKTOP-6F2NBCD MINGW64 ~/ejercicios/ejercicio8/aspirantes-mir-javascript3 (master)
$ git branch develo
fatal: a branch named 'develo' already exists

Elena@DESKTOP-6F2NBCD MINGW64 ~/ejercicios/ejercicio8/aspirantes-mir-javascript3 (master)
$ git branch -d develo
Deleted branch develo (was 0693dc0).

Elena@DESKTOP-6F2NBCD MINGW64 ~/ejercicios/ejercicio8/aspirantes-mir-javascript3 (master)
$ git branch develop
fatal: a branch named 'develop' already exists

Elena@DESKTOP-6F2NBCD MINGW64 ~/ejercicios/ejercicio8/aspirantes-mir-javascript3 (master)
$ git branxch
git: 'branxch' is not a git command. See 'git --help'.

The most similar command is
        branch

Elena@DESKTOP-6F2NBCD MINGW64 ~/ejercicios/ejercicio8/aspirantes-mir-javascript3 (master)
$ git branch
  develop
  develop}
  main
* master

Elena@DESKTOP-6F2NBCD MINGW64 ~/ejercicios/ejercicio8/aspirantes-mir-javascript3 (master)
$ git branch -d develop
Deleted branch develop (was b846322).

Elena@DESKTOP-6F2NBCD MINGW64 ~/ejercicios/ejercicio8/aspirantes-mir-javascript3 (master)
$ git branch -d develop}
Deleted branch develop} (was b846322).

Elena@DESKTOP-6F2NBCD MINGW64 ~/ejercicios/ejercicio8/aspirantes-mir-javascript3 (master)
$ git bracnh
git: 'bracnh' is not a git command. See 'git --help'.

The most similar command is
        branch

Elena@DESKTOP-6F2NBCD MINGW64 ~/ejercicios/ejercicio8/aspirantes-mir-javascript3 (master)
$ git branch
  main
* master

Elena@DESKTOP-6F2NBCD MINGW64 ~/ejercicios/ejercicio8/aspirantes-mir-javascript3 (master)
$ git checkout -b develop
Switched to a new branch 'develop'

Elena@DESKTOP-6F2NBCD MINGW64 ~/ejercicios/ejercicio8/aspirantes-mir-javascript3 (develop)
$ mkdir js-

Elena@DESKTOP-6F2NBCD MINGW64 ~/ejercicios/ejercicio8/aspirantes-mir-javascript3 (develop)
$ cd js-3

Elena@DESKTOP-6F2NBCD MINGW64 ~/ejercicios/ejercicio8/aspirantes-mir-javascript3/js-3 (develop)
$ pwd
/c/Users/Elena/ejercicios/ejercicio8/aspirantes-mir-javascript3/js-3

Elena@DESKTOP-6F2NBCD MINGW64 ~/ejercicios/ejercicio8/aspirantes-mir-javascript3/js-3 (develop)
$ code .

Elena@DESKTOP-6F2NBCD MINGW64 ~/ejercicios/ejercicio8/aspirantes-mir-javascript3/js-3 (develop)
$ git add js-3
fatal: pathspec 'js-3' did not match any files

Elena@DESKTOP-6F2NBCD MINGW64 ~/ejercicios/ejercicio8/aspirantes-mir-javascript3/js-3 (develop)
$ git add js-3
fatal: pathspec 'js-3' did not match any files

Elena@DESKTOP-6F2NBCD MINGW64 ~/ejercicios/ejercicio8/aspirantes-mir-javascript3/js-3 (develop)
$ git merge developer
merge: developer - not something we can merge

Elena@DESKTOP-6F2NBCD MINGW64 ~/ejercicios/ejercicio8/aspirantes-mir-javascript3/js-3 (develop)
$ git ckeckout master
git: 'ckeckout' is not a git command. See 'git --help'.

The most similar command is
        checkout

Elena@DESKTOP-6F2NBCD MINGW64 ~/ejercicios/ejercicio8/aspirantes-mir-javascript3/js-3 (develop)
$ git checkout -b master
fatal: a branch named 'master' already exists

Elena@DESKTOP-6F2NBCD MINGW64 ~/ejercicios/ejercicio8/aspirantes-mir-javascript3/js-3 (develop)
$ git branch
* develop
  main
  master

Elena@DESKTOP-6F2NBCD MINGW64 ~/ejercicios/ejercicio8/aspirantes-mir-javascript3/js-3 (develop)
$ git checkout -b master
fatal: a branch named 'master' already exists

Elena@DESKTOP-6F2NBCD MINGW64 ~/ejercicios/ejercicio8/aspirantes-mir-javascript3/js-3 (develop)
$ git checkout master
Switched to branch 'master'
M       README.md/README.md

Elena@DESKTOP-6F2NBCD MINGW64 ~/ejercicios/ejercicio8/aspirantes-mir-javascript3/js-3 (master)
$ git add js-3
fatal: pathspec 'js-3' did not match any files

Elena@DESKTOP-6F2NBCD MINGW64 ~/ejercicios/ejercicio8/aspirantes-mir-javascript3/js-3 (master)
$ git commit "solucion a los ejercicios js
> git commit "solcucion a los ejercicios js"
> git branch
>
>
> 3+
> object
>
> object
> code .
> object
>
>
>
>
>
>
>
>
>
>
>
>
>
>
>
>
>
>
>
> object
object1.js  object2.js  object3.js
> object
>
>
> object
>
> git
>

















