TestUtil.createCustomSettings();
        
User usr1 = TestUtil.createUser('111');

System.runAs(new User(Id = UserInfo.getUserId())){
    insert usr1;
}

UsuariosDelegados__c cs1 = TestUtil.createCSUsuarioDelegado(usr1, 'User1');
insert cs1;

