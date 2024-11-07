import java.util.*;

class Solution {
    HashMap<String, Integer> parkingInTime = new HashMap<>();
    HashMap<String, Integer> parkingTotalTime = new HashMap<>();
    HashSet<String> carSet = new HashSet<>();
    public int[] solution(int[] fees, String[] records) {
        for (String record : records) {
            String[] splitRecord = record.split(" ");
            String[] currentTime = splitRecord[0].split(":");
            String carNumber = splitRecord[1];
            int currentMin = Integer.parseInt(currentTime[0]) * 60 + Integer.parseInt(currentTime[1]);

            if (splitRecord[2].equals("IN")) {
                carIn(carNumber, currentMin);
            } else{
                carOut(carNumber,currentMin);
            }
        }

        List<String> carList = new ArrayList<>(carSet);

        for (String car : carList) {
            carOut(car, 1439);
        }

        Collections.sort(carList);
        int[] answer = new int[carList.size()];

        for (int i = 0; i < carList.size(); i++) {
            answer[i] = calculateFee(parkingTotalTime.get(carList.get(i)), fees);
        }

        return answer;
    }

    private void carIn(String carNumber, int currentMin) {
        parkingInTime.put(carNumber, currentMin);
        carSet.add(carNumber);
    }

    private void carOut(String carNumber, int currentMin) {
        if (parkingInTime.containsKey(carNumber)) {
            int inTime = parkingInTime.get(carNumber);
            parkingInTime.remove(carNumber);

            parkingTotalTime.put(carNumber, parkingTotalTime.getOrDefault(carNumber, 0) + currentMin - inTime);
        }
    }

    private int calculateFee(int parkingTime, int[] fees) {
        int baseTime = fees[0];
        int baseFare = fees[1];
        int unitTime = fees[2];
        int unitFare = fees[3];

        if (parkingTime <= baseTime) {
            return baseFare;
        }

        int extraTime = parkingTime - baseTime;
        int additionalFare = (int) Math.ceil((double) extraTime / unitTime) * unitFare;

        return baseFare + additionalFare;
    }
}