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
