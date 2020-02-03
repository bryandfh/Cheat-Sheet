# Data Security
### **Access layers:** Organization access. Object access. Record access. Field access

### **Object-Level Security (Permission Sets and Profiles)**
Object-level security or object permissions provide the bluntest way to control data. Using object permissions you can prevent a user from seeing, creating, editing, or deleting any instance of a particular type of object, such as a lead or opportunity. Object permissions let you hide whole tabs and objects from particular users, so that they don’t even know that type of data exists.
You specify object permissions in permission sets and profiles. Permission sets and profiles are collections of settings and permissions that determine what a user can do in the application, similar to a group in a Windows network, where all of the members of the group have the same folder permissions and access to the same software.
Profiles are typically defined by a user’s job function (for example, system administrator or sales representative). A profile can be assigned to many users, but a user can be assigned to only one profile. You can use permission sets to grant additional permissions and access settings to users. It’s easy to manage users’ permissions and access with permission sets, because you can assign multiple permission sets to a single user.

### **Field-Level Security (Permission Sets and Profiles)**
In some cases, you may want users to have access to an object, but limit their access to individual fields in that object. Field-level security—or field permissions—control whether a user can see, edit, and delete the value for a particular field on an object. They let you protect sensitive fields without having to hide the whole object from users. Field permissions are also controlled in permission sets and profiles.
Unlike page layouts, which only control the visibility of fields on detail and edit pages, field permissions control the visibility of fields in any part of the app, including related lists, list views, reports, and search results. To ensure that a user can’t access a particular field, use field permissions. No other settings provide the same level of protection for a field.

### **Record-Level Security (Sharing)**
After setting object and field-level access permissions, you may want to configure access settings for the actual records themselves. Record level security lets you give users access to some object records, but not others. Every record is owned by a user or a queue. The owner has full access to the record. In a hierarchy, users higher in the hierarchy always have the same access to users below them in the hierarchy. This access applies to records owned by users, as well as records shared with them.
To specify record level security, set your organization-wide sharing settings, define a hierarchy, and create sharing rules.

* **Organization-wide sharing settings:** The first step in record-level security is to determine the organization-wide sharing settings for each object. Organization-wide sharing settings specify the default level of access users have to each others’ records.
You use organization-wide sharing settings to lock down your data to the most restrictive level, and then use the other record-level security and sharing tools to selectively give access to other users. For example, let’s say users have object-level permissions to read and edit opportunities, and the organization-wide sharing setting is Read-Only. By default, those users can read all opportunity records, but can’t edit any unless they own the record or are granted additional permissions.
* **Role hierarchy:** Once you’ve specified organization-wide sharing settings, the first way you can give wider access to records is with a role hierarchy. Similar to an organization chart, a role hierarchy represents a level of data access that a user or group of users needs. The role hierarchy ensures that users higher in the hierarchy always have access to the same data as people lower in their hierarchy, regardless of the organization-wide default settings. Role hierarchies don’t have to match your organization chart exactly. Instead, each role in the hierarchy should represent a level of data access that a user or group of users needs.
Similarly, you can use a territory hierarchy to share access to records. See Define Default User Access for Territory Records (Enterprise Territory Management) and Configure Territory Management Settings (original territory management)

* **Sharing rules:** Sharing rules let you make automatic exceptions to organization-wide sharing settings for particular sets of users, to give them access to records they don’t own or can’t normally see. Sharing rules, like role hierarchies, are only used to give additional users access to records—they can’t be stricter than your organization-wide default settings.

* **Manual sharing:** Sometimes it’s impossible to define a consistent group of users who need access to a particular set of records. In those situations, record owners can use manual sharing to give read and edit permissions to users who would not have access to the record any other way. Although manual sharing isn’t automated like organization-wide sharing settings, role hierarchies, or sharing rules, it gives record owners the flexibility to share particular records with users that need to see them.

* **Apex managed sharing:** If sharing rules and manual sharing don’t give you the control you need, you can use Apex managed sharing. Apex managed sharing allows developers to programmatically share custom objects. When you use Apex managed sharing to share a custom object, only users with the “Modify All Data” permission can add or change the sharing on the custom object's record, and the sharing access is maintained across record owner changes.

# Concepts: 

#### Profiles
Profiles define how users access objects and data, and what they can do within the application. When you create users, you assign a profile to each one.

#### Permission Sets
A permission set is a collection of settings and permissions that give users access to various tools and functions. The settings and permissions in permission sets are also found in profiles, but permission sets extend users’ functional access without changing their profiles.

#### App and System Settings in Permission Sets
In permission sets, permissions and settings are organized into app and system categories. These categories reflect the rights users need to administer and use system and app resources.

#### Search Permission Sets
To quickly navigate to other pages in a permission set, you can enter search terms in any permission set detail page.

#### View and Edit Assigned Apps in Permission Sets
Assigned app settings specify the apps that users can select in the Lightning Platform app menu.

#### Enable Custom Permissions in Permission Sets
Custom permissions give you a way to provide access to custom processes or apps. After you’ve created a custom permission and associated it with a process or app, you can enable the permission in permission sets.

#### Manage Permission Set Assignments
You can assign permission sets to a single user from the user detail page or assign multiple users to a permission set from any permission set page.

#### Permission Set Groups
A permission set group streamlines permissions assignment and management. Use a permission set group to bundle permission sets together based on user job functions. Users assigned the permission set group receive the combined permissions of all the permission sets in the group. You can include a permission set in more than one permission set group. Updates in a permission set propagate to all permission set groups that include the permission set. You can also remove individual permissions from a group with the muting feature, to further customize the group.
