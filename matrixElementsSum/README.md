
<h2>matrixElementsSum</h2>

<p>After they became famous, the CodeBots all decided to move to a new building and live together. The building is represented by a rectangular matrix of rooms. Each cell in the matrix contains an integer that represents the price of the room. Some rooms are free (their cost is 0), but that's probably because they are haunted, so all the bots are afraid of them. That is why any room that is free or is located anywhere below a free room in the same column is not considered suitable for the bots to live in.<p>
<p>Help the bots calculate the total price of all the rooms that are suitable for them.<p>

<strong>Example</strong>
<li> For 
    <br>
      matrix = [[0, 1, 1, 2], 
          [0, 5, 0, 0], 
          [2, 0, 3, 3]]
    <br>
    the output should be <br>
    matrixElementsSum(matrix) = 9.
    <br>
    Here's the rooms matrix with unsuitable rooms marked with 'x': 
    <br>
    [[x, 1, 1, 2], 
    [x, 5, x, x], 
    [x, x, x, x]]
    <br>
    Thus, the answer is 1 + 5 + 1 + 2 = 9.
</li>