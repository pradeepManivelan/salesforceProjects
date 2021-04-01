public with sharing class ContactAndLeadSearch {
    public ContactAndLeadSearch(String str1) {
        searchContactsAndLeads(str1);
    }
    public static List<List< sObject>> searchContactsAndLeads(String str1){
        System.debug(str1);
        List<List<sObject>> searchList = [FIND 'Smith' IN NAME FIELDS 
                   RETURNING Contact(Name),Lead(FirstName,LastName)];
        System.debug(searchList);
                   return searchList;
    }
}
