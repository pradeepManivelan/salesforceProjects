public with sharing class StringArrayTest {
    public StringArrayTest(Integer num) {
        System.debug(generateStringArray(num));
    }
    public static String[] generateStringArray(Integer numbers){
        String [] stringArray = new List<String>();
        String temp = '';
        for(Integer i = 0;i < numbers;i++){
            temp = 'Test '+String.valueOf(i);
            stringArray.add(temp);
        }
        return stringArray;
    }
}
