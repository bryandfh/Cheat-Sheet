<h1> Standard Object </h1>

### Standard Objects: 

* No se pueden borrar, sin embargo, se pueden ocultar a los usuarios. 

* Se puedes customizar añadiendo campos, cambiando el page layouts y creando relaciones a otros objetos. 

* Algunos ejemplos de Standard Objects: Accounts, Contact, Activities, Opportunities, and Leads. 

### Standard Object Architecture and Relationship Model: 

… 

### Ejemplos de relationships: 

* Una Account puede ser relacionada con 0,1 o N Contacts. 

* Un Contact puede ser relacionada con varias Opportunities. 

* Un Opportunity sin embargo solo puede relacionarse con una cuenta. 

* Accounts y Opportunity tienen un lookup relationship en Salesforce, esto permite que se cree una oportunidad sin especificar el Account Record. Sin embargo, se comporta también como una relación Master-Detail, esto hace que si por ejemplo se borra una Account se borrarían también todas las oportunidades relacionadas. 

### Diagrama de relationships: 
![Diagrama Relaciones](./images/sales-data-model.png)

### Campaign and Campaign Members: 

Una campaña está formada por diferentes Campaign Members y estos Campaign Member puede ser Lead o Contacts. 

### Lead Conversion: 
![Diagrama Relaciones](./images/lead-account-opportunities.png)

### Account to Calendar Events and Task and Activities
![Diagrama Relaciones](./images/calendar-events.png)

### Contact to Calendar Events and Task and Activities
![Diagrama Relaciones](./images/calendar-events-contact.png)

### Contract to Orders and Case to Solutions
![Diagrama Relaciones](./images/contract-case-orders-solutions-image-6.png)

### Product to Assets and Price Books
![Diagrama Relaciones](./images/pricebooks-asset-products.png)

### Product to Assets and Price Books
![Diagrama Relaciones](./images/pricebooks-asset-products.png)

### Opportunity to Quote, Pirce Book, and Opportunity Products
![Diagrama Relaciones](./images/opportunity-product.png)

### Contact to Case, Work Orders, and Work Order Line Items
![Diagrama Relaciones](./images/contact.png)

### Account and Contract to Order
![Diagrama Relaciones](./images/order.png)

### Work Orders:
* Sirve para seguir reparaciones y mantenimiento
* Se pueden asociar con Accounts, Assets, Cases, Contacts, Entitlements, Service Contracts.
* Una work order se puede asociar con otra a traves de Parent Work Order

### Relationship Types:
* Relaciones se usan cuando se quieren relate un record con otro objeto.
* Relaciones pueden ser creadas entre objetos estandar y custom object o entre dos custom objects

### Lookup Relationships:

### Master-Detail Relationships:

###  Many-to-Many Relationships:

### Example Lookup, Master-Detail and Many-to-Many Relationships
![Diagrama Relaciones](./images/EMM.png)
![Diagrama Relaciones](./images/relationship-image.png)
![Diagrama Relaciones](./images/candidate-application.png)
![Diagrama Relaciones](./images/application-interview.png)
![Diagrama Relaciones](./images/EMM1.png)
![Diagrama Relaciones](./images/EMM2.png)
![Diagrama Relaciones](./images/Hierarchical_Relationship.png)
![Diagrama Relaciones](./images/Lookup_Relationship_Self.png)
