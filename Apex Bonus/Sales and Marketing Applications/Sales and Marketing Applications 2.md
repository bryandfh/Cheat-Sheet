<h1> Sales and Marketing Applications II :ghost: </h1>

## Describe the capabilities of lead automation tools

### Leads
Leads are used to track prospects in Salesforce. After qualifying the lead records, they can be converted into:
* Accounts.
* Contacts.
* Opportunities.

### Lead Source: 
Is where the Lead originated from; could be: Web, Phone, Cold Calls, etc.

### Lead queues:
Lead queues are the place to store Leads before they have an owner.
* Assignment Rules can be used to direct leads to different queues based on defined criteria.
* Users can use the ‘Accept’ button to take ownership of a Lead in a queue.
* When a queue is set up, the users, groups or roles that will have access to the queue are specified.
* A Queue is accessed via a List View that is automatically generated when the queue is created

### Duplicate Leads:
Up to 3 Leads can be merged. To merge, must be Lead Owner, Lead Owner Manager or System Administrator.

### Lead Tools:
* Import up to 50000 Leads from a CSV using Lead Import Wizard.
* Mass Delete Leads that meet multiple field criteria.
* Transfer Leads from User or Queue to another User or Queue.
* Mass Email Leads by selecting Leads from a Leads view and selecting the email template to use.
* Mass Add Leads to Campaigns by selecting a campaign, member status and a Lead view from which to select the Leads to be added.

### Converting Leads:
* Convert button create a Contact from the Lead.
* Convert button will create and associate the Contact with a newly created Account based on the Lead company.
* Optionally can create an Opportunity, follow up Task
* Custom Lead Fields can be mapped to custom Account, Contact or Opportunity fields.
* Hiding the opportunity section is useful when sales reps are not required to convert leads into opportunities. 
* It's possible to specify 'Don’t create an opportunity'. The option is selected by default.

### Lead Workspace:
The Lead Workspace is the record page and used to view all information related to a Lead. It contains: 
* Lead Sales Path.
* Key Fields(defined in the Sales Path).
* Guidance(defined for the Lead Status in the Sales Path).
* Activity Tab.
* Collaborate Tab, where Chatter features such as Posts and Polls can be accessed.
* Details Tab, where the Lead fields can be accessed.
* Twitter Profile.
* Notes and Attachments.

### Web-to-Lead:
* Standard and custom fields can be included.
* Salesforce will generate the HTML code that can be added to a website.
* Leads saved from Web-to-Lead will trigger Auto-Response and Assignment Rules.
* If a Lead does not match a lead assignment rule criteria, it will be assigned to a default Lead Owner specified in Lead settings.
* Limited to 500 new leads per day.
* It is possible to require reCAPTCHA Verification.

### Generating Leads from LinkedIn:
* Fill out a form on the company's LinkedIn ad, the data is converted directly to new leads in Salesforce. Those leads can be assigned to a user or queue automatically.
* Default field values can be set up for leads from LinkedIn, and form fields can be mapped to lead fields.
* Each LinkedIn form can have up to three optional questions which can be mapped to custom fields.

## Describe the capabilities of campaign management

### Campaigns:
Campaigns are used to store and track information about direct mail programs, seminars, print ads, email, and other kinds of marketing collateral in Salesforce.
* Campaigns are created to market directly to leads so that prospects can be turned into sales deals
* Both leads and contacts can be associated with campaigns in Salesforce.
* Salesforce can be used to locate, manage, and report on campaigns.

### Tracking Campaign Progress Using Path:
* Path can be used by marketing users to manage the lifecycle of campaigns.
* The steps of a path are based on the values in the picklist field.
* Different patsh can be created for each record type.
* Lightning App Builder can be used to add the Path component to the Campaign page layouts.

#### Associating Leads and Contacts to a Campaign:
* Individual leads and contacts can be added to campaigns using the ‘Add to Campaign’ button on the Campaign History related List on the Lead or Contact record.
* Campaign Member Import Wizard or Data Loader can be used to add campaign members.
* The ‘Add Member – Search’ option from ‘Manage Members’ on the campaign record can be used to search and add multiple leads or contacts

## Describe the capability of Salesforce Content

<h3 > ... in progress ... </h3>

