public with sharing class AccountController {
    @AuraEnabled(cacheable=true)
    public static List<Account> getAccountController() {
        return [SELECT Id, Name, Type, Industry from Account WHERE Type != null];
    }

    @AuraEnabled(cacheable=true)
    public static List<Account> filterAccountByType(String type){
        return [SELECT Id, Name, Type from Account WHERE Type =: type LIMIT 5];
    }

    @AuraEnabled(cacheable=true)
    public static List<Account> searchAccounts(String searchKey) {
        String key = '%' + searchKey + '%';
        return [SELECT Id, Name, Type, Industry from Account WHERE Name LIKE :key LIMIT 5];
    }
}
