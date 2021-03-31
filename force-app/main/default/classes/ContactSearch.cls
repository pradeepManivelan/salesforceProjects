public with sharing class ContactSearch {
    public ContactSearch(String str1, String str2) {
        searchForContacts(str1,str2);
    }
    public static Contact [] searchForContacts(String str1, String str2){
        Contact [] cts = [SELECT Id, Name FROM Contact WHERE LastName=:str1 AND MailingPostalCode=:str2];
        return cts;
    }
}
