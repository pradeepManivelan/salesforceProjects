public with sharing class MapsLWCController {
    @AuraEnabled(cacheable=true)
    public static List<Account>  getAccounts(){
        return [SELECT Id,Name, BillingState, BillingCountry, BillingStreet, 
        BillingCity, BillingPostalCode, description FROM Account ORDER BY Name LIMIT 10];
    }
}
