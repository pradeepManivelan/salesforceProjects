public with sharing class MapsLWCController {
    @AuraEnabled(cacheable=true)
    public static List<Account>  getAccounts(){
        return [SELECT Id,Name, BillingeState, BillingCountry, BillingStreet, BillingCity, BillingPostalCode
        Description FROM Account ORDER BY Name LIMIT 10];
    }
}
