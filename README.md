[![Open in Visual Studio Code](https://classroom.github.com/assets/open-in-vscode-718a45dd9cf7e7f842a935f5ebbe5719a5e09af4491e668f4dbf3b35d5cca122.svg)](https://classroom.github.com/online_ide?assignment_repo_id=11754458&assignment_repo_type=AssignmentRepo)
# Detecting Cycles in Graphs

Kruskal's Algorithm adds edges to the minimum spanning tree, unless they would
add a cycle. In the lectures, we did not talk about how to do this -- you're
going to implement a function to detect cycles in a graph. Start with the
template I provided in `code.js`. You can use any data structures (i.e. any
graph representation) you like. The function should return `true` or `false`,
depending on whether the given graph contains a cycle or not.

I have not provided any test code; you can base yours on test code from other
exercises.

## Runtime Analysis

What is the worst-case big $\Theta$ complexity of your implementation? Add your
answer, including your reasoning, to this markdown file.

The worst-case would be $\Theta(V + E)$ as my first loop to check if a node connects to itself would, under worst-case of will run $V$ times through all edges, $E$. For the actual searching for proper cycles, it will also take $V + E$ time has I am using a modified version of my depth-first-search algorithm which has a worst case of $V + E$

Overall it would be $\Theta(2(V + E))$ or just $\Theta(V + E)$ removing constants