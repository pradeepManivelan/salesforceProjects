public with sharing class AccountHandler {
    public AccountHandler(String str) {
        System.debug(insertNewAccount(str));
    }

    public static Account insertNewAccount(String AccountName){
        try {
            Account acct = new Account(Name=AccountName);
            insert acct;
            return acct;
        } catch (DmlException e) {
            System.debug('A DML exception has occurred: ' +
                        e.getMessage());
                        return null;
        }
    }
}
