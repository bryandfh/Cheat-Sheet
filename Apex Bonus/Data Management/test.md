# Data Management 

### Data Management Considerations:
* Recycle Bin: Detele record are store for 15 days or until the limit is reached allowing for record restoration
* File Format: All data file must be in CSV format.
* Salesforce Record ID: 15 character or 18 character.
* Duplicate Management: Controls wheter and when duplicate record can be created using matching rule criteria.
* Data Quality Consideration: Use org-wide standars for data entry, naming convention, importing clean data, using validation rules, and removing duplicate records.
* Mass transfer, Update, and Delete Records: Salesforce allow for Accounts, Leads, SO, approval request, opportunity team, update addresses.

### Salesforce Id: 
* Each record in Salesforce has a globally unique ID assigned when it is created.
* The 15 character case sensitive ID is displayed in the user interface.
* The 18 character case insensitive ID is produced by the API.
* The 18 character ID can be converted to 15 characters by truncating the last 3 characters.
* This record ID will never change even if it is deleted and later undeleted.

### Salesforce External Id:
* Up to 25 custom fields can be used as external IDs on an object.
* External ID field type must be text, number or email and unique. It can also be marked as case sensitive.
* External IDs can be used for matching when importing or updating data.

### Mass Transfer Records:
* Is used to transfer multiple accounts, leads and custom objects from one user to another within Salesforce.
* For Cases, Leads and Campaigns, transfer permission can be granted through sharing.
* Users with ‘Modify All Data’ or ‘Modify All’ can transfer any Record.

![Mass Transfer Records](./images/logo.png)

### Transferring Individual Records:
* In Salesforce individual records can be transferred to other users.
* To transfer a record, the user must be the record owner or a user above the record owner in the role hierarchy.
* To receive a transferred record, the user needs at least 'Read' permission on associated object.
* After transferring an Account, the new user will own associated Contacts, open Opportunities, Contracts in Draft and in Approval Process status, Orders in Draft status, Notes, Attachments, and open Activities created by the original record owner.
* After transferring a Contact, Opportunity, Case, or Lead, the new user will own associated Notes, Attachments, and open Activities created by the original record owner.
* Leads can be transferred to users or queues.

### Salesforce Duplicate Management:
# to be continued ... 

# Review
* What is the Salesforce ID?: 
  * A globally unique ID assigned to each record when created; 15 digit case sensitive when displayed in the UI / reports and 18 digit case insensitive from API / Data Loader

* What happens to deleted records?
  * Deleted records go to the recycle bin. After 15 days or if the bin limit is exceeded, they are permanently deleted. While in the recycle bin, deleted records can be restored.

* How does storage work in Salesforce?
  * Storage is categorized into data and file storage. Data storage is used by storing records (usually 2KB each). File storage is used by attachments, files and documents.
  
* When would you use an External ID?
  * When you want to use an identifier from an external system to import or update data
  
* What are the options for importing and exporting data?
  * Data Import Wizard, Data Loader, 3rd Party Tools for Integration, Export from Reports, Data Export Service
  
* How can Knowledge articles be imported to Salesforce?
  * Import Articles tool from the Setup menu allows articles and any translations to be imported into Salesforce Knowledge. 
  
* What are the main tools for data import?
  * Data Import Wizard and Data Loader

* Up to how many records can Data Import Wizard and Data Loader import?
  * Data Import Wizard can import up to 50,000 records, while Data Loader can import up to 5 million records.
  
* In what format is data imported, exported or deleted?
  * CSV format
  
* What are the steps to import data?
  * Data selection, mapping and import
  
* Which of the data management tools cannot export data?
  * Data Import Wizard
  
* Which of the data import tools can only be used by admins?
  * Data Loader
  
* How can Knowledge articles outside of Salesforce be imported into Salesforce?
  * Import Articles tool

* What can be done with the Mass Transfer tool?
  * Accounts, Leads and Custom objects and some related data can be transferred from one owner to another.
  
* How can data be mass deleted?
  * The Mass Delete tool allows mass deletion of Accounts, Leads, Activities, Contacts, Cases, Solutions, Products and Reports. Criterion can be set to find selected records to delete.
  
* How do validation rules work?
  * A formula expression is defined on an object and checked before a record is created or edited and saved. If the formula returns true, an error message is displayed and the record is not saved.
  
* How can data be automatically exported?
  * The Data Export service can be used to export all or selected data weekly or monthly. An email is sent with a link to a downloadable zip file.
  
* What is the difference between a matching rule and a duplicate rule?
  * Matching rule is used to identify duplicates. Duplicate rule defines what happens to duplicates – allow or block.
  
* What actions can be taken by the administrator to ensure the data quality of an org?
  * Establish organization data standards and naming conventions, import clean data, remove duplicate records, and use validation rules.

* When are validation rules enforced?
  * Enforced immediately on record save, prior to Workflows or Process Builders  
  
* How can system validation be used?
  * To enforce data type, data length, required fields or unique entries
 
* When are custom validation rules used?
  * Used for custom complex validation rules that can involve one or more fields (standard or custom)

* What are the implications of validation rules?
  * Validates data type, field length, enforces required fields and enforces unique setting
  
* What happens when loading records through a Data Import tool and the required fields are blank or not matched?
  * Those records fail to load.
  
* What happens when a formula in a validation rule returns a result “True”?
  * The record is not created or saved and an error message is displayed.
  
* How does the unique field requirement differ from duplication rules?
  * The unique field requirement looks at specific fields and ensures there is no other record with that entry. Duplication rules are used for the record as a whole when only one record should exist.
  
* What formula function is used to ensure the correct formatting of a field entry?
  * RegEx
  
* After selecting the objects to be exported, what else can be optionally included in the export?
  * Images, documents and attachments; Chatter files and Salesforce CRM Content
  
* What are the formats available for exporting reports?
  * CSV files, Excel (.XLS) files  
 
* How does the Data Export service work?
  * All or selected data is exported weekly, monthly or on demand (maximum once every 7 days). An email is sent with a link to a downloadable zip file which becomes an inactive link after 48 hrs.
  
* In which case would a user run into issues with exporting data?
  * Accessing export download link 3 days after link was sent; exporting data from a Sandbox environment 
  
* What are the options for exporting data?
  * Data Loader, Export from Reports, Data Export Service
  
* Which Salesforce features for Lightning Experience allow finding duplicates across the org and merging them?
  * Duplicate Jobs and Duplicate Record Sets 
  
  
  
