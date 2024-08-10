---
title: Overview
sidebar_position: 1
---

# Overview

## Numerical Technologies Random Generator for Excel

**NtRand**, Numerical Technologies's Random Number Generator for Microsoft Excel
is a software where a family of various random numbers such as
[standard normal (Gaussian) random numbers](</glossary/#local_normal(Gaussian)>)
in Monte Carlo method is implemented as add-in functions available with Excel.
It also generates [multivariate correlation random numbers](/glossary/#local_multivariatecorrelation).

NtRand uses [pseudo-random numbers](/glossary/#local_pseudo-random)
by [Mersenne Twister algorithm](/glossary/#local_Mersenne_Twister),
featuring longer period and higher order of equidistribution, which is a
cynosure in simulation technology.

Multivariate Mote Carlo employs [antithetic variant method](/glossary/#local_antitheticvariant)
and [quadratic resampling](/glossary/#local_quadraticresampling)
for higher accuracy. For more information, see
["Enhancement of Monte Carlo by Moment Matching."](/faq/#local_EnhancementofMonteCarlo)

## Why NtRand?

In the VaR computing for risk management, a larger scale Monte Carlo simulation
is often necessary. In this case, the built-in random numbers would not serve
well enough in ensuring the accuracy. Some solutions use the
[physical random numbers](/glossary/#local_physicalrandom).

However, they are less practical because no significant repeatability is observed
on any verification test and some special hardware is required.
[Mersenne Twister](/glossary/#local_Mersenne_Twister) is one of
the approaches to **provide a pragmatic solution in VaR quantification**,
and widely incorporated in [PortfolioBrowser®](http://www.numtech.com/products/)
/ [CreditBrowser®](http://www.numtech.com/products/), risk management
system developed by [Numerical Technologies Incorporated.](http://www.numtech.com/)

## Features

NtRand operates at very high speed with many advanced features. It enables you
to **build a several tens of dimensions** of practical
*Monte Carlo VaR calculating system* or **derivatives pricing model with the Excel**
running on your own computer. That is,
**almost all smaller-scaled VaR management systems** can be configured using NtRand.
We recommend NtRand for **_derivatives pricing_**, **_risk management studies_**,
**_preliminary test_** before introducing a costly calculating system, or writing **_your paper_**.

- Outstanding properties of longer period and higher order of equidistribution for **pseudo-random numbers** (random period of $2^{19937}-1$). For further information, visit the [Mersenne Twister Home Page](http://www.math.sci.hiroshima-u.ac.jp/~m-mat/MT/emt.html) hosted by assistant professor Makoto Matsumoto and Takuji Nishimura at Faculty of Science and Technology, Keio University, Japan.
- **Easy generation** of the multivariate correlation random numbers essential to *the Monte Carlo VaR calculation*.
- **High speed operation** enhanced by the efficient design in engineering. NtRand operates far faster than RAND function in Excel and easily generates random numbers for more than 10,000-time Monte Carlo.
- **Various moment matching methods** available to improve the convergence in Monte Carlo. Enables you to easily use the [antithetic variant method](/glossary/#local_antitheticvariant) and/or [quadratic resampling](/glossary/#local_quadraticresampling). For more information, see ["Enhancement of Monte Carlo by Moment Matching."](/glossary/#local_EnhancementofMonteCarlo)
- **Utilities to supplement the improvement of Monte Carlo's convergence** -- For [uniform/normal random numbers conversion](/glossary/#local_uniform/normal), [the Box-Muller method](/glossary/#local_Box-Muller) is available in addition to [the inverse function method (Moro's algorithm)](/glossary/#local_Inversefunctionmethod).
- **Random number generator and related utility functions for widely acknowledged following 17 different probability distributions widely acknowledged.**

|                                                     | Rand. | Dist. | Inv. | Mom(\*) | Param. | Mean | Stdev. | Skew. | Kurt. |
| --------------------------------------------------- | ----- | ----- | ---- | ------- | ------ | ---- | ------ | ----- | ----- |
| [Uniform](/uniform-distribution/)                   | ✅    | ❌    | ❌   | ❌      | ❌     | ❌   | ❌     | ❌    | ❌    |
| [Beta](/beta-distribution/)                         | ✅    | ✅    | ✅   | ✅      | ✅     | ✅   | ✅     | ✅    | ✅    |
| [Chi](/chi-distribution/)                           | ✅    | ✅    | ✅   | ✅      | ❌     | ✅   | ✅     | ✅    | ✅    |
| [Chi square](/chi-square-distribution/)             | ✅    | ✅    | ✅   | ✅      | ❌     | ✅   | ✅     | ✅    | ✅    |
| [F](/f-distribution/)                               | ✅    | ✅    | ✅   | ✅      | ❌     | ✅   | ✅     | ✅    | ✅    |
| [Gamma](/gamma-distribution/)                       | ✅    | ✅    | ✅   | ✅      | ✅     | ✅   | ✅     | ✅    | ✅    |
| [Gumbel](/gumbel-type-i-distribution/)              | ✅    | ✅    | ✅   | ✅      | ✅     | ✅   | ✅     | ✅    | ✅    |
| [Johnson SU](/johnson-su-distribution/)             | ✅    | ✅    | ✅   | ✅      | ✅     | ✅   | ✅     | ✅    | ✅    |
| [Logistic](/logistic-distribution/)                 | ✅    | ✅    | ✅   | ✅      | ✅     | ✅   | ✅     | ✅    | ✅    |
| [Log Normal](/log-normal-distribution/)             | ✅    | ✅    | ✅   | ✅      | ✅     | ✅   | ✅     | ✅    | ✅    |
| [Standard Normal](/normal-distribution-single/)     | ✅    | ✅    | ✅   | ❌      | ❌     | ❌   | ❌     | ❌    | ❌    |
| [Poisson](/poisson-distribution/)                   | ✅    | ✅    | ✅   | ✅      | ❌     | ✅   | ✅     | ✅    | ✅    |
| [t](/t-distribution/)                               | ✅    | ✅    | ✅   | ✅      | ❌     | ✅   | ✅     | ✅    | ✅    |
| [Triangular](/triangular-distribution/)             | ✅    | ✅    | ✅   | ✅      | ✅     | ✅   | ✅     | ✅    | ✅    |
| [Truncated Normal](/truncated-normal-distribution/) | ✅    | ✅    | ✅   | ✅      | ✅     | ✅   | ✅     | ✅    | ✅    |
| [Weibull](/weibull-distribution/)                   | ✅    | ✅    | ✅   | ✅      | ✅     | ✅   | ✅     | ✅    | ✅    |
| [Multi Normal](/normal-distribution-multi/)         | ✅    | ✅    | ❌   | ❌      | ❌     | ❌   | ❌     | ❌    | ❌    |

(\*) Mom. function returns mean, standard deviation, skewness and kurtosis of the distribution at once.
