<h1> Review Standard and Custom Objects (14%)</h1>

### What can be customized for standard fields?
* Fields Labels
* Field Help
* Picklist Value
* Auto Number Formatting

### What are the main custom field attributes?
* Field Type
* Default Value
* Required
* Unique
* Case sensitive

### What is an External ID?
A field that contains a unique identifier from an external system and can be used for matching records when data is imported or integrated.

### What are roll-up summary fields?
Fields defined on a master object that sum, return [mix, max or count] of a field. 

### What must be configured when creating a custom object?
The Name field is a standard field that is added to custom object to identify records.

### What are two type of relationships that Salesforce supports?
Lookup, and master-detail.

### What is a self relationship?
A lookup to a different record of the same object.

### Which relationship do the record inherit the secutiry and sharing setting of the parent record?
Master-detail.

### In a master-detail relationship between a standard and custom object, which object must be the parent? 
The standard object.

### What is an app in Salesforce? 
An app is a collection of tabs made visible to certain profiles.

### What can be controled in a page layout? 
Layout of fields, buttons, links, report charts, etc.

### What are record type used for? 
Record Types are used when one object has different types or is used for different purposes.

### What is a business process? 
Is a way to capture the lifecycle of leads, opportunities, cases and solutions.

### How are business processes defined and used? 
Value for status fields are selected for a business process from the master picklist values. The business process is then assigned to a record type.

### What happens when a custom field is deleted? 
The field and data is deleted temporarily. After 15 days will be permanently.

### How can formula fields be created? 
As simple formula or advance formula.

### When would creating a formula field be appropiate? 
When a read-only field is required and that is calculated based on values of fields

### Why must an administrator be cautious when changing field types? 
Data loss may occur.

### Why would an admnistrator create a Path? 
To provide visual guidance for helping a user move throughs steps.

### What is the difference between record type and business processes? 
* Record types control the page layout and picklist values based on the selection of record type.
* Business process controls stages and then picklist values based on the stage of certain objects.

### Which type of custom field can be created to store information about the preferred contact hours of a customer?
Time

### What are some considerations when changing the field type of a custom field?
* Data loss may occur.
* Assignment and escalation rules may be affected.
* Any list views based on the fields may be deleted.

### A Salesforce administrator thought it would be a good idea to set up a business process for a new custom object called 'Purchase Order'. Which are valid considerations?
* Lead, Solution, Opportunity, and Case.

### Which features are in lookup relationship but not in master-detail relationship?
* The related record can have a different owner than the master record
* The lookup field does not need to be a required field on the page layout

### What are the basic steps when adding a new custom field?
* Choose field type.
* Enter field details.
* Set field level security.
* Select page layouts.

### What is a case?
 Description of a customer feedback, problem or question

### Work orders can be associated with?
Work Orders can be associated with Accounts, Assets, Cases, Contacts, Entitlements, Service Contracts and other Work Orders. They can also be related to other standard and custom objects with custom relationships. Knowledge articles can be attached to work orders and work order line items.
