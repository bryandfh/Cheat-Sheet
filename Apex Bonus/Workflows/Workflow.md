# Workflow and Process Automation

### Order of execution:
A helpful way of remembering the basics is Very Angry Admins Work Pretty Efficiently :pencil: :
* Very => Validation Rules
* Angry => Assignment Rules
* Admins => Auto-Response Rules
* Work => Workflow
* Pretty => Process
* Efficiently => Escalation Rules

### Workflow Rules Evaluation

* When a record is created.
* Created, and everytime it's edited.
  * The rule will fire every time the record is updated even though the record may have already met the workflow criteria.
* Created, and any time it’s edited to subsequently meet criteria:
  * When a new record is created, or if an existing record is changed from not meeting the rule criteria to meeting the criteria, the workflow rule will fire.
 
### Rule Criteria and Formula Evaluations
It's the logic to determine if the rule should fire. There are 2 ways to define the logic: Criteria are met or Formula evaluates to True.

#### Criteria Are Met
Filter logic with AND,OR,NOT operators.

#### Formula Evaluates to True
The formula return True or False. If True, then the rule is triggered.

### Workflow Capabilities
Workflows and approval processes include the capability to generate the following types of actions:

* Create Tasks
  * Workflow task detail includes fields: Assigned To, Subject, Due Date, Status and Priority.
* Send Emails:
  * Daily limit of 1,000 emails can be sent per Salesforce license per organization.
  * Daily limit of 2,000,000 emails can be sent organization wide.
* Field Updates:
  * Record Owner can be updated.
  * Optionally, all workflow rules on the same object can be re-evaluated after a field update.
*Outbound Messages:
  * Data from specified fields are sent in XML format via an API message.
* Select Existing Action:
  * Can use existing actions either in Immediate Workflow Actions or Time-Dependent Actions.
* Immediate Actions:
  * If multiple actions are defined, the order of execution is not guaranteed, but field updates execute first.
* Time Trigger:
  * Workflow rule is already active (must deactivate, add time trigger, then activate again).
* Time Dependent Actions
![Time Dependent Actions](/images/workflow-time-dependent.png)

### Lightning Process Builder

It's similar to standard workflow but with more powerful. One of the main limitations with Process Builder compared to Workflows is it cannot send outbound messages. Use for if/then requirements.

#### Process Definition
At a high level, a process definition consists of the following steps:
* Select one of the options for starting a process:
  * A record changes
  * A platform event occurs
  * It's invoked by another process
* Define the object for the process.
* Define the criteria when it will run.
* Define the activities that need to be automated.
* Activate the Process.

### Process Builder Actions
* Apex
  * To invoke an Apex class that exists in the org. Ideal for getting complex calculations done or to trigger another code based business process
  
* Create a Record
  * To create a new record of any related or unrelated object

* Email Alerts
  * To invoke an email alert configured in the org. The email alert must also be configured on the same object as the process being defined.

* Flows
  * To invoke a Flow that is already defined in the org. Ideal for performing operations that includes getting a user input / deleting records / updating un-related records etc. Also, Flow can be scheduled on a certain frequency.

* Post to Chatter
  * To make a post onto Chatter. Process Builder Chatter action can be configured to post the message to a User / a Chatter Group / or in context of the record Chatter feed. While defining the message template, @ mentions topics and merge fields can also be defined.

* Processes
  * To select an invocable Process Builder process. Helpful for when there are many repeated steps.

* Quick Actions
  * To invoke a Quick Action that is defined in the org. Can be used to invoke quick actions that creates a record update a record or logs a call. Both Global Action and Object Level actions can be invoked.

* Quip
  * To include standard Quip actions such as send message in chat or document, add members to chat or document, etc.

* Send Custom Notification
  * To send a notification with a custom message to selected recipients. There must be an existing notification type to be able to use this action type.

* Send Survey Invitation
  * To send email survey invitations to leads, contacts, and users. There must be an active survey to be able to use this action type.

* Submit for Approval
  * To submit the record in context for approval. Process Builder gives the option to choose which approval process to use and who to submit it as.

* Update Records
  * To update the record or related records of the specific record in context.
  
### Process Builder Considerations
* It must be ensred that two processes are not set up to run infinite loops where Process A invokes Process B, and vice versa.
* Process Builder actions are executed in the order in which they appear.
* PB can automate Chatter task

# Approval Processes Overview
Approval Processes Overview allow defining a series of steps to automate the process for approving records, including custom objects. There are three steps to setting up an Approval Process:
* Create the Approval Process Definition:
 * Entry Criteria
 * Approver Field
 * Record Editability
 * Email Template
 * Approval Request Page Layout
 * Initial Submitters
* Add one or more approval steps
 * Define records that enter the approval step
 * Assign approvers
 * Define approval or rejection actions
* Specify Approval Actions

![Approval Action](/images/approval-action.png)
Approval processes can include actions: Email alerts. Creating Tasks. Field Updates. Outbound messages

### Steps for Approval:
* User submits a record for approval by clicking on the 'Submit for Approval' button.
* Salesforce checks if the Record meets the Criteria from any active approval processes on the object.
* Salesforce performs Initial Submission Actions (e.g. lock the record).
* Record enters one or more approval steps (Approvers are notified and must approve/reject).
* Any approval, rejection or recall actions are performed.
* Record is either Unlocked if it is Rejected or Recalled or Stays Locked if it was approved.

### Considerations for Approvals:
* When a record is submitted for Approval , i is locked for changes until the record has completed the approval process.
* Approval Audit History is recorded on a separate related list.

### Responding to an Approval Request
* When a record is Submitted for Approval, the defined approvers will receive the Email Notification selected in the process with a link to the record and pending approval.
* If enabled in an org, approvers can reply to this email to approve or reject.
* If the notification was sent through chatter and appropriate settings are enabled, users can reply to the chatter post to approve or reject.
* Notification builder can be used to control if approval request notifications are sent to mobile, desktop or both. 
* Approvers have the option to approve, reject or reassign.
* Admins can add an “Items to Approve” component to the Salesforce homepage, allowing approvers to see all pending requests upon login.
* Approvers can add comments prior to submitting their decision.

# Review
* **When are workflow rules evaluated?:**
When a record is created, when it is created and every time it is edited, and when a record is created and any time it is edited to then meet the evaluation criteria

* **How can workflow rules be evaluated?:**
If certain criteria is met or if a formula evaluates to true

* **What are the actions that a workflow rule can invoke?**
Create Task, Send Emails, Field Update or Send Outbound Message

* **When are workflow actions executed?**
Either immediately or after a number of days or hours from a date field or trigger date

* **What are the capabilities of an approval process?**
Define a series of steps and actions for approving selected standard and custom objects that meet certain criteria.

* **What type of actions can be set for approval or rejection?**
Locking/unlocking the record, on the homepage, respond to email, in app notifications, Chatter

* **What options does an approve have for responding to a request?**
Approve, Reject or Reassign

* **Where can an approver see the pending request and respond to it?**
On the Record, on the Homepage, Respond to Email, in App Notifications, Chatter

* **What are some use cases for approval processes?**
Approval of Quotes/Contracts, PTO, Expense Reports, Overtime, Deadline Extensions, Discounts, Funding and Purchasing Requests, Authorization for Work

* **What are the steps to define a process in the PB?**
Define the object, define the criteria, select immediate or scheduled actions, activate the process

* **What actions are possible with PB?**
Create or update records, invoke a quick action, submit a record for approval, post to Chatter, send an email, invoke a flow, invoke Apex class

* **In what case would PB be used over Workflow?**
When needing to create a record, submit for approval or launch a flow

* **When must Workflow be used and not PB?**
When needing to send outbound messages

* **Which automation tools allow sending an automatic email alert to a user when a new member is added to a Chatter group?**
 Workflow Rule and Process Builder
