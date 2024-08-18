---
title: -σ^2 / 2 の真実に迫る – その3
tags:
  - math
hide_table_of_contents: true
---

**複利の場合**

$V(T)=V_0\cdot\prod_{i=1}^{TN}r_i(N)=V_0\cdot\prod_{i=1}^{TN}\left(\frac{\sigma}{\sqrt{N}}{\cdot} z_i+\frac{m}{N}+1\right)$    ---(5)

となります。これが離散的な場合の結果であり、議論のスタート台となります。

こいつの連続極限を考えます。 知りたいことは、連続極限で$V(T)$の分布はどうなるか？です。

具体的には、

-   分布形
-   平均
-   分散

といったことを調べます。

式(5)、、、掛け算のままだと取扱いが難しいので、両辺の対数をとりましょう。

${\ln}V(T)={\ln}V_0+\sum_{i=1}^{TN}\ln\left(\frac{\sigma}{\sqrt{N}}{\cdot}z_i+\frac{m}{N}+1\right)$    ---(6)

ここに伝家の宝刀、**[テイラー展開](http://ja.wikipedia.org/wiki/%E3%83%86%E3%82%A4%E3%83%A9%E3%83%BC%E5%B1%95%E9%96%8B)**

$\ln(x+1)=x-\frac{x^2}{2}+\frac{x^3}{3}-\cdots$    ---(7)

を適用します。定石通り1次の項だけとると式(6)は、

${\ln}V(T)= {\ln}V_0+\sum_{i=1}^{TN}\left(\frac{\sigma}{\sqrt{N}}{\cdot}z_i+\frac{m}{N}\right)$    ---(8)

となって、これは正に単利の場合と同一の式でキレイに正規乱数の和に収束することが分かりました。

つまり ${\ln}V(T)$ は**正規分布**になることが判明しました（覚えていますか？正規乱数の和は正規乱数です）。

さてこれで

**対数をとったヤツが正規分布になった$\longrightarrow$元は対数正規分布**

という事実から**連続極限で $V(T)$ は対数正規分布**であると結論付けられました！

では平均と分散はどうなるでしょうか。

式(8)から、

-   $E\left[{\ln}V(T)\right]={\ln}V_0+mT$
-   $V\left[{\ln}V(T)\right]=\sigma^2 T$

でメデタシメデタシ、、、としたいところですが、**これが大間違い！**。本記事の核心がここにあります。

話は[テイラー展開](http://ja.wikipedia.org/wiki/%E3%83%86%E3%82%A4%E3%83%A9%E3%83%BC%E5%B1%95%E9%96%8B)(7)にまで戻ります。

2次の項まで考えます。すると

$$
{\ln}V(T)={\ln}V_0+\sum_{i=1}^{TN}\left(\frac{\sigma}{\sqrt{N}}{\cdot}z_i+\frac{m}{N}\right)-\frac{1}{2}\sum_{i=1}^{TN}\left(\frac{\sigma}{\sqrt{N}}{\cdot}z_i+\frac{m}{N}\right)^2
$$

となります。

この式から平均を計算してみます。\
$$
E\left[{\ln}V(T)\right]={\ln}V_0+mT-\frac{1}{2}\sum_{i}^{TN}\left[\frac{\sigma^2}{N}E(z_i^2)+2\sigma m\sqrt{N}E(z_i)+\frac{m^2}{N^2}\right]
$$

となって、ここで $E(z_i)=0,\;E(z_i^2)=1$ という事実を適用すると、\
$$
E\left[{\ln}V(T)\right]={\ln}V_0+mT-\frac{\sigma^2}{2}T-\frac{m^2T}{2N}
$$

となります。そして連続極限 $N\rightarrow\infty$ をとってみると、

$$
E\left[{\ln}V(T)\right]={\ln}V_0+mT-\frac{\sigma^2}{2}T
$$

が得られます。気が付きましたか？**テーラー展開の2次の近似項から $N$  に依存しない定数が発生しているんですよ！**

分散も同じ要領で計算してみると、こちらは2次の近似項は $N\rightarrow\infty$ で消えてなくなります。従って先ほど計算した通り、

$$
V\left[\ln V(T)\right]=\sigma^2 T
$$

です。

以上まとめると、 $V(T)$ は対数正規分布であり、つまり ${\ln}V(T)$ は正規分布ということになって、

$$
{\ln}V(T){\sim} N\left({\ln}V_0+mT-\frac{\sigma^2}{2}T,\sigma^2T\right)
$$

となります。

標準正規分布に従う確率変数 $Z$ を用いると、\
$$
V(T)=V_0\exp\left[\sigma\sqrt{T}Z+\left(m-\frac{\sigma^2}{2}\right)T\right]
$$

と書き下せます。

最後にもう一言

 ${\ln}V(T)$ の平均が $\left(m-\frac{\sigma^2}{2}\right)T$ である。では $V(T)$ そのものの平均は？

[対数正規分布の公式](/docs/gallery-of-distributions/log-normal-distribution)から、

$$
E\left[V(T)\right]=V_0\exp(mT)
$$

が得られます。どうですか？実に合理的な答えになっていると思いませんか？（[その1](./2013-03-19-random-rate-1.md)の式(3)と比較してみてください）。

長くなりましたが、あのキモチワルイ $-\frac{\sigma^2}{2}$ の出自が理解できましたか？
