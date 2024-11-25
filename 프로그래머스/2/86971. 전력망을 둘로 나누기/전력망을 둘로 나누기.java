import java.util.*;

class Solution {
    public int solution(int n, int[][] wires) {
        int answer = n;
        int[][] materix = new int[n + 1][n + 1];
        
        for(int i = 0; i < wires.length; i++){
            materix[wires[i][0]][wires[i][1]] = 1;
            materix[wires[i][1]][wires[i][0]] = 1;
        }
        
        for(int i = 0; i < wires.length; i++){
            int a = wires[i][0];
            int b = wires[i][1];
            
            materix[a][b] = 0;
            materix[b][a] = 0;
            
            answer = Math.min(bfs(n,a,materix),answer);
            
            materix[a][b] = 1;
            materix[b][a] = 1;
        }
        
        
        return answer;
    }
    
    public int bfs(int n, int start,int[][] materix){
        Queue<Integer> queue = new LinkedList<>();
        queue.offer(start);
        int count = 1;
        
        boolean[] visited = new boolean[n + 1];
        
        while(!queue.isEmpty()){
            int poll = queue.poll();
            visited[poll] = true;
            for(int i = 0; i <= n; i++){
                if(!visited[i] && materix[poll][i] == 1){
                    queue.offer(i);
                    count++;
                }
            }
        }
        
        return (int) Math.abs(n- 2 * count);
    }
}