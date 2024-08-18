---
title: 特異値分解入門(2)
tags:
  - math
  - svd-for-beginners
hide_table_of_contents: true
---

ここで相関行列 ${\boldsymbol C}$ が**満たしているはず**の性質を今一度列挙してみましょう。

- 成分 $\rho_{ij}$ は実数
- 対称行列 $\rho_{ij}=\rho_{ji}$
- 半正定値
- 対角成分 $\rho_{ii}=1$
- 対角成分以外 $-1\leq\rho_{ij}\leq 1$

この相関行列 ${\boldsymbol C}$ を、

$$
{\boldsymbol C}={\boldsymbol Q}{\boldsymbol Q}^\text{t}
$$

という形に分解するのが目的です（覚えてましたか？）\
[前回](./2010-03-20-svd-for-begninners-1.md)その方法としてコレスキー分解を紹介しましたが、どうも安心して使えなさそうだとわかりました。\
次に紹介するのは**固有値分解**です。これは半正定値実対称行列を分解してくれます。\
ではここからは線形代数の勉強です（証明などの詳細は省きます。教科書に必ず載っていますので調べてみてください）。

### 事実1

任意の実正方行列 ${\boldsymbol A}$ は、ある正方行列 ${\boldsymbol U}$ とこれまた正方行列、ただし対角成分のみしか値がない**対角行列** ${\boldsymbol W}$ を使って、

$$
{\boldsymbol A}={\boldsymbol U}{\boldsymbol W}{\boldsymbol U}^{-1}
$$

という形に分解される（これを行列の**スペクトル分解**といいます）。\
ここで行列 ${\boldsymbol U}$ は行列 ${\boldsymbol A}$ の**固有ベクトル**を横に並べたもので、対角行列 ${\boldsymbol W}$ の成分は行列 ${\boldsymbol A}$ の**固有値**です。

### 事実2

更に行列 ${\boldsymbol A}$ が対称行列であった場合、行列の固有ベクトルが**全て直交する**。すると、

$$
{\boldsymbol U}^{-1}={\boldsymbol U}^\text{t}
$$

となる。というわけで

$$
{\boldsymbol A}={\boldsymbol U}{\boldsymbol W}{\boldsymbol U}^{-1}={\boldsymbol U}{\boldsymbol W}{\boldsymbol U}^\text{t}
$$

### 事実3

更に更に行列 ${\boldsymbol A}$ が半正定値だとすれば、行列の固有値は全て0以上。つまり行列 ${\boldsymbol W}$ は、

$$
{\small \begin{pmatrix}\lambda_1&0&\cdots&0\\0&\lambda_2&\cdots&0\\vdots&\vdots&\ddots&\vdots\\0&0&\cdots&\lambda_{N}\end{pmatrix}=\begin{pmatrix}\sqrt{\lambda_1}&0&\cdots&0\\0&\sqrt{\lambda_2}&\cdots&0\\vdots&\vdots&\ddots&\vdots\\0&0&\cdots&\sqrt{\lambda_{N}}\end{pmatrix}\begin{pmatrix}\sqrt{\lambda_1}&0&\cdots&0\\0&\sqrt{\lambda_2}&\cdots&0\\vdots&\vdots&\ddots&\vdots\\0&0&\cdots&\sqrt{\lambda_{N}}\end{pmatrix}}={\boldsymbol W}^\prime {\boldsymbol W}^\prime
$$

と出来るではないか！すると、

$$
{\boldsymbol A}={\boldsymbol U}{\boldsymbol W}{\boldsymbol U}^{-1}={\boldsymbol U}{\boldsymbol W}{\boldsymbol U}^\text{t}={\boldsymbol U}{\boldsymbol W}^\prime {\boldsymbol W}^\prime {\boldsymbol U}^\text{t}
$$

となります。ここで $({\boldsymbol A}{\boldsymbol B})^\text{t}={\boldsymbol B}^\text{t}{\boldsymbol A}^\text{t}$ という事実（積の順番が入れ替わる）と、対角行列は転置しても変化しないこと（この場合 $({\boldsymbol W}^\prime)^\text{t}={\boldsymbol W}^\prime$）に注意すると、

$$
{\boldsymbol A}={\boldsymbol U}{\boldsymbol W}{\boldsymbol U}^{-1}={\boldsymbol U}{\boldsymbol W}{\boldsymbol U}^\text{t}={\boldsymbol U}{\boldsymbol W}^\prime {\boldsymbol W}^\prime {\boldsymbol U}^\text{t}={\boldsymbol U}{\boldsymbol W}^\prime ({\boldsymbol U}{\boldsymbol W}^\prime)^\text{t}
$$

やった！！ ${\boldsymbol U}{\boldsymbol W}^\prime = {\boldsymbol Q}$ とおけば目標達成じゃないか！

$$
{\boldsymbol A}={\boldsymbol Q}{\boldsymbol Q}^\text{t}
$$

**しかし...**\
実務上（ここがポイント）、相関行列がいつもいつもタチの良い形であるとは限らないのです！もちろん実対称行列であることはどんな場合も間違いないですが（複素数の相関や、$100\times 234$の相関行列を作れるものなら作ってみろ）、 **半正定値を満たさない**場合は往々にしてありえるのです。例えば...

- データに欠損があって、欠損データを適当に埋める
- 乱数列のうち、いくつかのペアについては相関が（観測とは無関係に）与えられている
- 測定誤差

などの場合、相関係数に矛盾が出ることがあるのです。相関係数が矛盾するとはどういうことか、ひとつ最も大げさな例を示してみましょう。\
以下の3変数の相関行列を見てください。

$$
{\boldsymbol C}=\begin{pmatrix}1&1&-1\\1&1&1\\-1&1&1\end{pmatrix}
$$

実数であるとか、対称であるとか相関行列の性質は確かに満たしているんですが...何がおかしいか分かりますか？

- 第1変数と第2変数の相関係数 $\rho_{12}$ は 1。第1変数と第2変数は完全相関で全く同じ値になる
- 第2変数と第3変数の相関係数 $\rho_{23}$ は 1。第2変数と第3変数は完全相関で全く同じ値になる

ってことは必然的に第1変数と第3変数は同じ値になるはずです。しかし与えられた相関係数 $\rho_{13}$ は -1 になっている！つまり矛盾しているわけです。\
要するに相関係数がありえない組み合わせになっている場合がありえるのです（さすがに例のような大げさなのはないでしょうけど）。このとき、相関行列は半正定値ではなくなってコレスキー分解が機能しなくなります。

実務上、相関行列が与えられたら（それに矛盾があろうとなかろうと）計算がストップしてしまうことは望ましくありません。とにかく安定して何らかの答えを出すことが求められます。 もちろん正しい相関行列（半正定値実対称行列）は正しく分解されることが前提です。

そこで NtRand では相関行列の分解に**特異値分解**(Singular Value Decomposition，SVD)という手法を採用しています。

- [特異値分解入門(1)](./2010-03-20-svd-for-begninners-1.md)
- 特異値分解入門(2)
- [特異値分解入門(3)](./2010-03-20-svd-for-begninners-3.md)
