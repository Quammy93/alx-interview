It seems like you're working on a Python script that aims to rotate a 2D matrix 90 degrees clockwise. You've provided a prototype for the function `rotate_2d_matrix(matrix)`, and you have a sample test case in your `main_0.py` script.

Here's an implementation of the `rotate_2d_matrix` function:

```python
def rotate_2d_matrix(matrix):
    n = len(matrix)
    for i in range(n // 2):
        for j in range(i, n - i - 1):
            temp = matrix[i][j]
            matrix[i][j] = matrix[n - j - 1][i]
            matrix[n - j - 1][i] = matrix[n - i - 1][n - j - 1]
            matrix[n - i - 1][n - j - 1] = matrix[j][n - i - 1]
            matrix[j][n - i - 1] = temp
```

This function takes a 2D matrix as input and rotates it 90 degrees clockwise. It does so by swapping elements layer by layer, starting from the outermost layer and moving towards the center.

In your `main_0.py` script, you're using this function to rotate a test matrix:

```python
if __name__ == "__main__":
    matrix = [[1, 2, 3],
              [4, 5, 6],
              [7, 8, 9]]

    rotate_2d_matrix(matrix)
    print(matrix)
```

When you run `main_0.py`, it will rotate the provided matrix in-place and print the resulting matrix. Keep in mind that since `rotate_2d_matrix` modifies the matrix in-place, there's no need to return anything from the function. The rotated matrix will be reflected in the `matrix` variable used in your script.
