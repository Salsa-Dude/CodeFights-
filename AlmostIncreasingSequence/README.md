
<h2>AlmostIncreasingSequence</h2>
<p>Given a sequence of integers as an array, determine whether it is possible to obtain a strictly increasing sequence by removing no more than one element from the array.</p>
<strong>Example</strong>
<li>For sequence = [1, 3, 2, 1], the output should be <br>
  almostIncreasingSequence(sequence) = false;
  There is no one element in this array that can be removed in order to get a strictly increasing sequence.
</li>
<li>For sequence = [1, 3, 2], the output should be <br>
  almostIncreasingSequence(sequence) = true.
  You can remove 3 from the array to get the strictly increasing sequence [1, 2]. Alternately, you can remove 2 to get the strictly increasing sequence [1, 3].
</li>