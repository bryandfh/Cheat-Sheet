global class aqa_b2c_Ftc_Batch implements Database.Batchable<sObject>, Database.AllowsCallouts { 
	global List<Contact> start(Database.BatchableContext BC) {
        List<Contact> parsedContacts = new List<Contact>();
        try{
            Map<String,String> cred = aqa_b2c_Ftc_Data.getCredentials(null);
            List<Aqa_b2c_Ftc_ApiObject> retrievedContacts = aqa_b2c_Ftc_Data.makeGetCallout(cred);
            if (!retrievedContacts.isEmpty()){
                parsedContacts = aqa_b2c_Ftc_Data.parseContacts(retrievedContacts);
            }
            if (retrievedContacts.isEmpty() || retrievedContacts == null)
                System.debug('There werent new contacts');
        }catch(Exception e){
            System.debug(e.getMessage());
            aqa_b2c_logCreation.getLogData(e);
        }
        System.debug(parsedContacts);
        return parsedContacts;        
    }
    
    global void execute(Database.BatchableContext BC, List<Contact> scope) {
        List<Contact> contactos = scope;
        insert contactos;
    }   
    
    global void finish(Database.BatchableContext BC) {

    }
    
}