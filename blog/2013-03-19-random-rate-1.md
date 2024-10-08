---
title: -σ^2 / 2 の真実に迫る – その1
tags:
  - math
hide_table_of_contents: true
---

先ずは準備運動

元金が$V_0$、利率を$r$（年率）とした場合の単利と複利の場合それぞれで、 $T$年後の元利合計を改めて考えてみましょう（何を今更、、、）。

**単利の場合**

年間に利払いが$N$回あるとすると、1回あたりの利率は$r/N$となったうえで$T$年後までには金利が$TN$回つくのでの元利合計は、

$V(T)=V_0+V_0\cdot\underbrace{(r/N+r/N+\cdots+r/N)}_{TN \text{times}}=V_0\cdot(1+rT)$    ---(1)

うーん文句なし。まったくもってあたりまえだ。

**複利の場合**

上記と同様に利率は$r/N$となるので、

$V(T)=V_0\cdot\underbrace{(1+r/N)(1+r/N)\cdots(1+r/N)}_{TN \text{times}}=V_0\cdot(1+r/N)^{TN}$    ---(2)

となります。

次に上記の式で$N\rightarrow\infty$としてみましょう。世にいう**連続極限**と呼ばれる操作です。 これは年間の利払い回数が無限大、つまり無限に短い期間に無限に小さい利率による利払いが発生し、それが無限に積み重なった場合を考えることです。

**単利の場合**

式(1)の中にNが含まれていないので$N\rightarrow\infty$としても結果は同じです。

**複利の場合**

式(2)で$N\rightarrow\infty$とするとどうなるか、結果だけ書きます（高校数学！）

$ V(T)=V_0\cdot\exp(rT)$    ---(3)

連続極限で指数関数になります。

と、まぁこんな話はどの金融の教科書にも最初のページに書いてあります。

さて上記のケースは全て金利が一定値$r$という場合です。 そうではなく、**金利が乱数**だったらどうなるでしょうか。それが今回の記事で書きたいことです。

その2へ続く、、、
