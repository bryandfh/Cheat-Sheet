<h1> Sales and Marketing Applications 1 </h1>

Sales processes allow the definition of a custom set of sales stages that an opportunity must pass through during the lifecycle from open to closed. Salesforce offers various capabilities to support the sales process as an opportunity is in different stages, including forecastingm quotes, splitting revenues amongst team members and orders.

### Opportunity Management Overview:

* Opportunities track sales deals and are used to produced the sales forecast.
* Opportunities advance through sales stages tracking from:
  * Open to closed/won.
  * Open to closed/lost.

### Sales stages:

* If no Opportunity record types are defined, then all sales stage picklist can be selected.
* Stage is they key field to track the Opportunity.
* Each stage is mapped to a type(Open, Close, Closed/Won, Close/Lost).
* Each stage is also mapped to a probability and a forecast category.

#### (Expected Revenue: Calculated by multipying the amount by the probability that is associated with the sales stage)

### Forecast and Quotas:

Forecast are a way of estimating revenue for products and services in the future based on Opportunities and their stages and values. There are two version of forecast: Customizable forecasting, and Collaborative forecasting.
* Customizable Forecasting:
  * This is the original forecasting toll, and has now been replaced with collaborative forecasting.
  * User submit a forecast.
  * Opportunity values for the forecast categories are rolled up.
  * Manager can adjust or reject user forecast.
  * After Salesforce Summer '20 releaser the feautre is retired.
 
* Collaborative Forecasting:
  * Default option for new organizations.
  * Forecast types are available to forecast by revenue, quantity or both.
  * Forecast can utilize Opportunity split data.
  * If Enterprise Territory Managment is enabled, it is possible to forecast opportunity revenue by territory or product vamily revenue by territory.
 
### Forecast Types in Collaborative Forecasting:

* Up to 4 forecast types can be enable for Collaborative Forecasting.
* A measurement and forecast date can be selected for a forecast type.
* Forecast date can be: 
  * Close date.
  * Product date (only available for Lightning).
  * Schedule date (only available for Lightning).
* The following types and measurements are available:
  * Opportunities - Revenue.
  * Opportunities - Quantity.
  * Product Families - Quantity.
  * Opportunity Splits - Revenue.
  * Overlay Split - Revenue.
  * Custom Opportunity Currency Field.
  * Expected Revenue - Revenue.
  * Opportunity Revenue by Territory - Revenue Only.
  * Product Family Revenue by Territory - Revenue Only.
  
### Sharing Forecast:
* When sharing forecast with a user, the acces level can be View Only or View and Edit.
* Forecast adjustments can be made by users with 'View and Edit' access.
* A user can share their forecast with the 'Share' button.

### Quotes: 

* Must be enabled.
* Multiple quotes can be associated with an Opportunity.
* When a quote is created from an Opportunity, the Opportunity Products are added to the quote automatically.
* A PDF can be generated for the quote.
* Quotes can be emailed using the 'Email Quote' button.

### Quotes Syncing:

* Quotes are 'synced' with the Opportunity.
* Only one quote can be 'syncing' quote.

### Opportunity Splits

<h3> ... in progress </h3>



