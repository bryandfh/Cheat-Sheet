// Example of getting data from Account with subqueries in Order, and Contact

// This is focus on Triggers

//Create a Set with Ids
Set<String> ids = new Set<String>();
ids.add('0010Q00000t5gobQAA');
ids.add('0010Q00000t5xP6QAI');

// Get data
List<Account> account_data = [Select Name, (Select Id, LastName from Contacts), (Select Id from Orders) from Account where Id in: ids];

// Retrieve the data
Account one = account_data.get(0);
System.debug(one.Contacts);
System.debug(one.Orders);

/*
To get the name you will have to call (in this one it's Contacts, and Orders) go to the object:
- Order -> For example AccountId it's a Lookup to Account
- Double click AccountId
- Select the name in 'Child Relationship Name' which would be Orders