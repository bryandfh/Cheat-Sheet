/*
Context: Case is related to two object Campagna_Trade and Accion_Trade. Campagna_Trade can have a parent and that parent has a name that we want
The type and subtype of Accion_Trade is also need it.
For example: 
- Get Accion_Trade Tipo: The object is Accion_Trade__c and the field is Tipo__C in order to get it we do Accion_Trade__r.Tipo__C (Note that we change the c for and r)
- Get parent of related object: With Campagna_Trade__r.ParentId we would get the Id of the parent. Howevere, as the field(Id) is a Default Salesforce object we can get to the 
properties of that object removing the Id and leave it like Campagna_Trade__r.Parent.Name

*/
for(Case c : [SELECT Id, Campagna_Trade__r.Parent.Name , Accion_Trade__r.Subtipo__c, Accion_Trade__r.Tipo__c FROM Case where Id IN :ids and Status = 'Confirmada']){
    if(c.Accion_Trade__r.Tipo__c == 'Digital local'){
        //Do stuff
    } 
}