### Review:

### What checks are done when users try to access a Salesforce organization?
Profile Level Login Hours, Profile Level IP Ranges, Company Level Trusted IP Ranges, Activation Code Validation

### What are examples of Standard Profiles?
Standard User, Solution Manager, Marketing User, Contract Manager, Read Only, System Administrator

### Why and how are Custom Profiles created?
There are restrictions on what can be changed on a standard profile. Custom profiles are created by cloning a standard profile to be able to customize profile settings.

### How is object access controlled?
Object access is controlled at the profile-level, including permission sets and visibility to the tab.

### What are permission sets?
A group of permissions and settings that can be assigned to one or more users that grant additional privileges beyond the profile

### What do profile permissions grant?
Permissions to app-specific actions, customized actions built, or system-wide actions

### How is the role hierarchy related to record access?
Users will have access to other users' records if they have a role above the record owner in the role hierarchy and grant access through hierarchies is enabled.

### What do organization-wide default settings do?
Determine access to records the user does not own and sets base record access for the org.

### How do Sharing Rules work?
Rules can be created to grant access to groups of users for certain records based on record owner or criteria.

### What does field-level security control?
Controls if a field is visible or read-only at the profile level

### What should be considered when changing OWD settings?
If increasing default access, changes will take effect immediately. If decreasing, changes may take significant time depending on data volumes.

### What is Manual Sharing?
Manual sharing allows a user to use the ‘Sharing’ button to grant access to a specific record to other users, roles, roles & subordinates, territories, territories & subordinates, and public groups.

### How does the Security Health Check work?
Security Health Check measures setting values in Password Policies, Network Access Config and Session Settings against baseline values and calculates a percentage score to indicate risk. 100% means all settings meet or exceed the standard.

### What is the purpose of a public group?
It’s a way of grouping users, roles, and territories so that sharing settings and permissions can be granted efficiently.

### When is identity verification invoked?
When a user logs in from an unrecognized (based on cookies) browser or device, and outside the trusted IP range.

### What can be enabled that helps the administrator spot suspicious login activity?
Login Forensics

### How can folder access be controlled?
Folders can be private or shared. Permissions and visibility can be set for users, roles, territories, or public groups.

### What are folders used for?
To store and organize reports, documents, dashboards and email templates

### What are two methods to find a folder quickly in the Salesforce org?
Folders can be favorited or searched for in Global Search.

### What are the different access levels that can be granted to a folder?
Viewer, Editor (edit, move, save and delete) or Manager (share and rename folder)

### How can reports and dashboards be organized in Lightning Experience?
A subfolder hierarchy can be created to organize reports and dashboards in a logical structure.

### What are the different risk categories associated with a Security Health Check in Salesforce?
High, Medium, Low, and Informational

### Which sharing setting allows a user to manually share their own user record with other users of an organization?
'Manual User Record Sharing' checkbox on the 'Sharing Settings' page in Setup

### Which organization-wide default sharing setting can be used for the Campaign Member object to allow all users to see only the campaign members associated with the campaigns they have access to?
Controlled by Campaign

### What password requirements can an administrator set?
Minimum password length, complexity, password history enforcement, expiration period, minimum password lifetime