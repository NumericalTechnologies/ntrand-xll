---
title: 特異値分解入門(1)
tags:
  - math
  - svd-for-beginners
hide_table_of_contents: true
---

互いに相関を持った正規乱数のセット（多変量正規乱数）を生成すること、これが金融工学のモンテカルロシミュレーションにおいて最も重要な技術となります。 $N$ 系列の正規乱数列を生成する場合を考えます。 これらの乱数列の相関構造を記述するのが**相関行列**と呼ばれる $N\times N$ の正方行列 ${\boldsymbol C}$ です。 最終的に

$$
{\boldsymbol C}={\boldsymbol Q}{\boldsymbol Q}^\text{t}
$$

という形に分解することが目標となります（ここで t は転置行列です）。分解して得られた行列 ${\boldsymbol Q}$ を使って**実際に相関乱数を生成する方法**については、これも一般的な数値計算の教科書に載っていますのでそちらをご覧ください。

すぐ後で説明するように、この分解には**コレスキー分解**を使えと、多くの教科書で教えていますが、実務上コレスキー分解ではうまくいかない場合があります。\
NtRand あるいは Numerical Technologies 社の製品では相関行列の分解に**特異値分解**という方法を採用しています。\
これから3回にわたって、なぜコレスキー分解ではダメなのか、そしてなぜ特異値分解だとうまくいくのかを説明します。

### 相関行列について

相関行列 ${\boldsymbol C}$ は、その ij 成分が確率変数 $X_{i}$ と $X_{j}$ との相関係数 $\rho_{ij}$ である行列です。 この定義から対角成分 $\rho_{ii}$ は確率変数 $X_{i}$ と自分自身との相関、つまり 1 となります。また、$\rho_{ij}=\rho_{ji}$ も定義から明らかです。\
つまりこの行列は、

- $N\times N$正方行列
- 成分は実数
- 対角成分は 1
- 対角成分以外は $-1\leq\rho_{ij}\leq 1$
- 対称（$\rho_{ij}=\rho_{ji}$）

という性質を持っています。\
更に相関係数の定義から、この行列は**半正定値**であることが示されます（半正定値って何だ？それは行列の固有値が全て0以上であること。固有値って何かって？それは勉強してください）。 つまり相関行列はその定義から**半正定値実対称行列**であるということです。

### コレスキー分解 (Cholesky decomposition)

$$
{\boldsymbol C}={\boldsymbol Q}{\boldsymbol Q}^\text{t}
$$

という分解を行う技として、どの教科書にも書いてあるのが**[コレスキー分解](http://ja.wikipedia.org/wiki/%E3%82%B3%E3%83%AC%E3%82%B9%E3%82%AD%E3%83%BC%E5%88%86%E8%A7%A3)**という方法です。 どの教科書にも載っているので、ここでは説明しません。\
この手法は正定値実対称行列を目的の形に分解してくれるので、正定値実対称行列である相関行列に対して使えば目標達成！メデタシ、メデタシとなる筋書きです。\
**しかし...**\
実はコレスキー分解は容易に失敗します。その代表的な状況が**観測データが少ない場合**です。 確率変数の数が100個で、その観測データの数が100個未満の場合は、**定義に従った正しい相関行列**であってもコレスキー分解は失敗します。 なぜなら、この状況で作られる相関行列は必然的に**半**正定値行列になるからです。コレスキー分解は**正定値行列専用**です。\
それでは、少なくとも正しく作られた相関行列では間違いなく

$$
{\boldsymbol C}={\boldsymbol Q}{\boldsymbol Q}^\text{t}
$$

と分解してくれるより強力な方法はないでしょうか？

- 特異値分解入門(1)
- [特異値分解入門(2)](./2010-03-20-svd-for-begninners-2.md)
- [特異値分解入門(3)](./2010-03-20-svd-for-begninners-3.md)
