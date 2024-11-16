---
title: Matrix and Quaternion
date: 2024-01-02T19:41:00Z
---
::: details Summary (AI Generation)
<!-- DESC SEP -->
qwe
<!-- AI Summerized -->

<!-- DESC SEP -->
:::

# Matrix


**Maxwell's equations:**

| equation                                                                                                                                                                  | description                                                                            |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------- |
| $\nabla \cdot \vec{\mathbf{B}}  = 0$                                                                                                                                      | divergence of $\vec{\mathbf{B}}$ is zero                                               |
| $\nabla \times \vec{\mathbf{E}}\, +\, \frac1c\, \frac{\partial\vec{\mathbf{B}}}{\partial t}  = \vec{\mathbf{0}}$                                                          | curl of $\vec{\mathbf{E}}$ is proportional to the rate of change of $\vec{\mathbf{B}}$ |
| $\nabla \times \vec{\mathbf{B}} -\, \frac1c\, \frac{\partial\vec{\mathbf{E}}}{\partial t} = \frac{4\pi}{c}\vec{\mathbf{j}}    \nabla \cdot \vec{\mathbf{E}} = 4 \pi \rho$ | _wha?_                                                                                 |


Linear Algebra

## What is a Matrix?
A matrix is a rectangular array of numbers arranged in rows and columns. For example:

\[
\begin{bmatrix}
1 & 2 & 3 \\
4 & 5 & 6 \\
7 & 8 & 9
\end{bmatrix}
\]

Matrices are a fundamental tool in 3D graphics for performing transformations on points and vectors.

---

## Types of Matrices
1. **Identity Matrix:** 
   - A square matrix with 1s on the diagonal and 0s elsewhere.
   - Example:
     \[
     \begin{bmatrix}
     1 & 0 & 0 \\
     0 & 1 & 0 \\
     0 & 0 & 1
     \end{bmatrix}
     \]
   - Represents no transformation.

2. **Zero Matrix:** 
   - A matrix with all elements as 0.
   - Example:
     \[
     \begin{bmatrix}
     0 & 0 \\
     0 & 0
     \end{bmatrix}
     \]

3. **Diagonal Matrix:**
   - A matrix where all non-diagonal elements are 0.
   - Example:
     \[
     \begin{bmatrix}
     3 & 0 \\
     0 & 5
     \end{bmatrix}
     \]

---

## Matrix Operations
### Addition and Subtraction:
- Add or subtract matrices element by element.
- Example:
  \[
  \begin{bmatrix}
  1 & 2 \\
  3 & 4
  \end{bmatrix}
  +
  \begin{bmatrix}
  5 & 6 \\
  7 & 8
  \end{bmatrix}
  =
  \begin{bmatrix}
  6 & 8 \\
  10 & 12
  \end{bmatrix}
  \]

### Scalar Multiplication:
- Multiply each element of the matrix by a scalar.
- Example:
  \[
  2 \times 
  \begin{bmatrix}
  1 & 2 \\
  3 & 4
  \end{bmatrix}
  =
  \begin{bmatrix}
  2 & 4 \\
  6 & 8
  \end{bmatrix}
  \]

### Matrix Multiplication:
- Multiply matrices by summing the product of rows and columns.
- Example:
  \[
  \begin{bmatrix}
  1 & 2 \\
  3 & 4
  \end{bmatrix}
  \times
  \begin{bmatrix}
  5 & 6 \\
  7 & 8
  \end{bmatrix}
  =
  \begin{bmatrix}
  19 & 22 \\
  43 & 50
  \end{bmatrix}
  \]

---

## Determinants and Inverses of Matrices
### Determinants:
- A scalar value representing the "volume" scaling of a transformation.
- Example (for a 2x2 matrix):
  \[
  \text{det} \begin{bmatrix}
  a & b \\
  c & d
  \end{bmatrix}
  = ad - bc
  \]

### Inverses:
- The inverse of a matrix "reverses" its transformation.
- A matrix \( A \) has an inverse \( A^{-1} \) if \( A \times A^{-1} = I \) (Identity matrix).

---

Understanding these basics is essential for working with transformations in 3D graphics.

