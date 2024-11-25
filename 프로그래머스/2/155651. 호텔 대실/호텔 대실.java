import java.util.*;

class Solution {
    public int solution(String[][] book_time) {
        int answer = 0;
        
        int[][] bookMinute = new int[book_time.length][2];
        
        List<int[]> rooms = new ArrayList<>();
        
        for(int i = 0; i < book_time.length; i++){
            String[] splitInTime = book_time[i][0].split(":");
            String[] splitOutTime = book_time[i][1].split(":");
            
            bookMinute[i][0] = Integer.parseInt(splitInTime[0]) * 60 + Integer.parseInt(splitInTime[1]); 
            bookMinute[i][1] = Integer.parseInt(splitOutTime[0]) * 60 + Integer.parseInt(splitOutTime[1]) + 10; 
        }
        
        Arrays.sort(bookMinute, new Comparator<int[]>(){
            @Override
            public int compare(int[] o1, int[] o2){
                return o1[0] - o2[0];
            }
        });
        
        for(int i = 0; i < bookMinute.length; i++){
            boolean isEnterNewRoom = true;
            
            int checkInTime = bookMinute[i][0];
            int checkOutTime = bookMinute[i][1];
            
            for(int j = 0; j < rooms.size(); j++){
                int existRoomInTime = rooms.get(j)[0];
                int existRoomOutTime = rooms.get(j)[1];
                
                
                
                if(existRoomOutTime<=checkInTime){
                    rooms.set(j,new int[]{checkInTime,checkOutTime});
                    isEnterNewRoom = false;
                    break;
                }
            }
            
            if(isEnterNewRoom){
                rooms.add(new int[]{checkInTime,checkOutTime});
            }
        }
        
        
        return rooms.size();
    }
}