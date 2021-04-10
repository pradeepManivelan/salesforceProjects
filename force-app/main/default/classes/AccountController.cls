public with sharing class AccountController {
    @AuraEnabled(cacheable=true)
    public static List<Account> getAccountController() {
        return [SELECT Id, Name, Type, Industry from Account LIMIT 5];
    }
    public static List<Account> filterAccountByType(String type){
        return [SELECT Id, Name, Type from Account WHERE Type =: type LIMIT 5];
    }
}
