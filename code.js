function hasCycle(graph) {
    for(i in graph){
        for(k in graph[i]){
            if(graph[i][k] == i){
                return true
            }
        }
    }
    if(graph.length < 2){
        return false
    }
    var visited =  Array.from({length: graph.length}, (e, i)=> false)
    var stack = [0]
    while(stack.length > 0){
        startNode = stack[stack.length-1]
        stack.pop()
        //console.log(stack)

        if(!visited[startNode]){
            visited[startNode] = true

            for(var i in graph[startNode]){
                //console.log(graph[startNode][i])
                //console.log("stack check",!visited[graph[startNode][i]])

                if(!visited[graph[startNode][i]]){
                    stack.push(graph[startNode][i])
                }
                else{
                    return true
                }
            }
            //console.log(stack)
        }
        
    }
    return false;
}

g = [[1,4], [0], [], [], [0]]; //debugging
//console.log(hasCycle(g)) 