({
    doInit: function (component, event, helper) {

        component.set('v.initDone', false);
        component.set('v.shopOptionsSelected', []);
        
        var dataParent = component.get('v.dataParent');       
        console.log('###dataParent: ' + JSON.stringify(dataParent));
        
        

        var action = component.get("c.initData");
        action.setParams({
            campaignId: dataParent.campaignId ? dataParent.campaignId : null,
            accionId: dataParent.accionId ? dataParent.accionId : null,
            accountId: dataParent.accountId ? dataParent.accountId : null,
            caseId: dataParent.caseId ? dataParent.caseId : null,
            idPromocion : dataParent.idpromocion ? dataParent.idpromocion : null
        });
        action.setCallback(this, function (response) {
            try {
                if (response.getState() === 'SUCCESS') {
                    if (response.getReturnValue()) {
                        var dataResponse = JSON.parse(response.getReturnValue());
                        this.processData(dataResponse);

                        var shopOpts=[];
                        for(var id in dataResponse.shopValues){
                            shopOpts.push({value:id,label:dataResponse.shopValues[id]});
                        }
                        component.set("v.shopOptions",shopOpts);
                        console.log('ShopOptions: ');  console.log(JSON.stringify(component.get('v.shopOptions')));

                        var valuesSelectedOpticas = [];

                        if(shopOpts.length == 1){
                            var accountsSelected=[];
                            accountsSelected.push({accountId:shopOpts[0].value});
                            dataResponse.accountsSelected = accountsSelected;
                            valuesSelectedOpticas.push(shopOpts[0].label);
                            console.log('Accounts Selected: '); console.log(JSON.stringify(dataResponse.accountsSelected));
                        }else{       
                            if(dataParent.accountsSelected){
                                dataResponse.accountsSelected=[];

                                for(var id in dataParent.accountsSelected){
                                    dataResponse.accountsSelected.push({accountId:dataParent.accountsSelected[id].accountId});
                                    for(var i in shopOpts) {
                                        console.log(shopOpts[i].value);
                                        console.log(dataParent.accountsSelected[id].accountId);
                                        if(shopOpts[i].value == dataParent.accountsSelected[id].accountId){
                                            valuesSelectedOpticas.push(shopOpts[i].label);
                                        }
                                    }
                                }
                            }
                        }
                        component.set('v.valuesSelectedOpticas',valuesSelectedOpticas);
                        console.log('valuesSelectedOpticas: ');  console.log(JSON.stringify(component.get('v.valuesSelectedOpticas')));


                        console.log('###dataResponse!: ' + JSON.stringify(dataResponse));

                        component.set('v.data', dataResponse);
                        component.set('v.campaignId', dataResponse.campana.id);
                        component.set('v.campaignParentId', dataResponse.campana.parentId);
                        component.set('v.accountId', dataResponse.accountSelected);
                        component.set('v.reportcase', dataResponse.informeCaso);

                        if (dataResponse.dataSet) {
                            helper.getData(component, event, helper);
                            //component.set('v.initDone', true);
                        } else {
                            component.set('v.initDone', true);
                        }
                        //si va todo bien, buscamos registros de aprobación de la petición
                        helper.getApproverInfo(component,event,helper,dataParent.caseId);
                        console.log('salgo de  getApproverInfo ');
                        console.log(' valores de tienda: ');
                        console.log(dataResponse.shopValues);
                    }
                }
            } finally {
                this.decrementLoadingCount(component);
            }
        });
        this.incrementLoadingCount(component);
        $A.enqueueAction(action);
    },
	
    getApproverInfo : function(component,event, helper, caseid){
        
        console.log('entro en  getApproverInfo ');
        var action = component.get("c.findRegistroAprobacion");
        action.setParams({caseid: caseid });
        console.log('caseid: ' + caseid);
        action.setCallback(this, function (response) {
            console.log('entro en  callback ');
            if (response.getState() === 'SUCCESS') {
                var dataResponse = response.getReturnValue();     
                console.log('approver id : ' + dataResponse);
                component.set('v.approverId', dataResponse);                    
            }            
        });
        $A.enqueueAction(action);
    },
    
    
    submitapproval : function(component, event, helper, myaction){
        
        console.log('entro en  getApproverInfo ');
        var idapprover = component.get('v.approverId'); 
        
        var action = component.get("c.submitApproval");
        action.setParams({action: myaction, apid: idapprover });
        action.setCallback(this, function (response) {
            console.log('entro en  callback ');
            if (response.getState() === 'SUCCESS') {  
                var updated = response.getReturnValue();               
                console.log('registro actualizado : ' + updated);                                
                if (updated){
                    // component.set('v.ConfirmationApprovalDialog', true); -- como idea vale
                     if (myaction == 'Approve'){
                         this.toastInfo(component, 'Petición Aprobada correctamente', false);    
                     }
                     else{
                         this.toastInfo(component, 'Petición Rechazada correctamente', false);
                     }
                 }else{
                     this.toastInfo(component, 'Parece que hubo un problema con su petición, consulte con el administrador o intentlo más tarde.', true);
                 } 
            }            
        });
        this.incrementLoadingCount(component);
        $A.enqueueAction(action);
        
    },
    
    searchAcciones: function (component, event, helper, campanaId){
        console.log(' SEARCH ACCIONES FUNCTION ');
        var action = component.get("c.getAcciones");

        action.setParams({ 
            campaignId: campanaId
        });

        action.setCallback(self,function(response){
            if(response.getState()=== 'SUCCESS'){
                var result = JSON.parse(response.getReturnValue());
                console.log('Callback result searchAcciones: '); console.log(result);
                if(result.success){
                    var data = JSON.parse(result.data); //Parseamos el JSON y lo asignamos a una variable de tipo objeto o lista
                    console.log('Callback data result searchAcciones: '); console.log(data);
                    component.set('v.accionesOptions', data);
                }else{
                    console.log('Result error at callback function searchAcciones: ' + result.msg);
                    //helper.showToast('Error','Error',result.msg);
                }
            }else{
                //helper.showToast('Error','Error','Internal error at callback call searchAcciones');
                console.log('Internal error at callback call searchAcciones');

            }
        });
        $A.enqueueAction(action);
    },

    dataChange: function (component, event, helper) {

        if (component.get('v.initDone')) {
            console.log('DATA CHANGE');
            var data = component.get('v.data');

            if (data.accountSelected != component.get('v.accountId')) {
                component.set('v.accountId', data.accountSelected);

                if ((data.accountSelected == null || data.accountSelected == '') && data.campana.parentId != null && data.campana.parentId != '') {
                    data.campana.parentId = null;
                    component.set('v.data', data);
                }
            } else if (data.campana.parentId != component.get('v.campaignParentId')) {
                console.log('MODIFICADO CAMPAÑA PARENT ID : ' + data.campana.parentId);
                component.set('v.campaignParentId', data.campana.parentId);

                if ((data.campana.parentId == null || data.campana.parentId == '') && data.campana.id != null && data.campana.id != '') {
                    data.campana.id = null;
                    component.set('v.data', data);
                }
                if (data.campana.parentId != null && data.campana.parentId != ''){
                    helper.searchAcciones(component, event, helper,data.campana.parentId);
                }
            } else if (data.campana.id != component.get('v.campaignId')) {

                component.set('v.listPrecios', null);
                component.set('v.listJornadas', null);

                helper.getData(component, event, helper);
            }
        }
    },

    getData: function (component, event, helper) {
        console.log('###getData');
        console.log(JSON.parse(JSON.stringify(component.get('v.data'))));
        console.log('---------------------------')
        console.log(JSON.stringify(component.get('v.data')));
        console.log('---------------------------')
        var action = component.get("c.getCampaignData");
        action.setParams({
            jsonMainWrapper: JSON.stringify(component.get('v.data'))
        });
        action.setCallback(helper, function (response) {
            try {
                if (response.getState() === 'SUCCESS') {
                    if (response.getReturnValue()) {
                        var dataResponse = JSON.parse(response.getReturnValue());
                        this.processData(dataResponse);
                        //dataResponse = this.processCommentDates(dataResponse);
                        component.set('v.campaignId', dataResponse.campana.id);
                        component.set('v.campaignParentId', dataResponse.campana.parentId);
                        component.set('v.accountId', dataResponse.accountSelected);
                        component.set('v.data', dataResponse);
                        component.set('v.initDone', true);

                        if (dataResponse.caso.id){
                            helper.preciosData(component, event, helper);
                        }
                        console.log('DATA ES');
                        console.log(JSON.parse(JSON.stringify(component.get('v.data'))));

                    }
                }
                else{
                    console.log('Algo ha ido mal');
                    console.log(response);
                }
            } finally {
                this.decrementLoadingCount(component);
            }
        });
        this.incrementLoadingCount(component);
        $A.enqueueAction(action);
    },

    processCommentDates : function(data) {

        if (data && data.caseComments){
            
            data.caseComments.forEach(function(date){
                console.log(date.CreatedDate);
                
                var fecha = new Date(date.CreatedDate);
                var fecha2 = fecha.toLocaleString();
                date.CreatedDate = fecha2;
                
            },this);
            
        }
        return data;
    },


    preciosData: function (component, event, helper) {
        console.log('###getPreciosData');
        component.set('v.listPrecios', null);
        component.set('v.listJornadas', null);

        var action = component.get("c.getPreciosData");
        
        action.setParams({
            jsonMainWrapper: JSON.stringify(component.get('v.data'))
        });
        action.setCallback(helper, function (response) {
            try {
                if (response.getState() === 'SUCCESS') {
                    if (response.getReturnValue()) {
                        var dataResponse = JSON.parse(response.getReturnValue());

                        var data = component.get('v.data');
                        // Añadir fechas mínima y máxima para validación.
                        dataResponse.forEach(element => {
                            for (var i = 0; i < data.campana.oleadas.length; ++i) {
                                if (element.numOleada == data.campana.oleadas[i].numOleada) {
                                    element.minDate = data.campana.oleadas[i].inicioEjecucion;
                                    element.maxDate = data.campana.oleadas[i].finEjecucion;
                                    return;
                                }
                            }
                        });

                        if (!data.caso.id){
                            dataResponse.forEach(element => {
                                if (element.listPAW && element.listPAW.length > 0 ){
                                    element.listPAW[0].selected = true;
                                    element.configJornadas = element.listPAW[0].configJornadas;                            
                                }
                            });
                        }
                        component.set('v.listPrecios', dataResponse);

                        //console.log('###data es: '); console.log(JSON.stringify(data));
                        
                    }
                }
            } finally {
                this.decrementLoadingCount(component);
            }
        });
        this.incrementLoadingCount(component);
        $A.enqueueAction(action);
    },

    changePrecio: function (component, event, helper) {

        var itemId = event.target.dataset.itemid;
        var numOleada = event.target.dataset.numoleada;
        var listPrecios = component.get('v.listPrecios');

        listPrecios.forEach(element => {
            if (element.numOleada == numOleada) {
                element.listPAW.forEach(element2 => {
                    if (element2.pat.Id == itemId) {
                        element2.selected = true;
                        element.configJornadas = element2.configJornadas;
                    } else {
                        element2.selected = false;
                    }
                });
            }
        });

        component.set('v.listPrecios', listPrecios);
    },

    saveButton: function (component, event, helper) {

        var data = component.get('v.data');
        console.log('###saveButton: ') + console.log(JSON.parse(JSON.stringify(data)));
        var listPrecios = component.get('v.listPrecios');

        var valid = {status: true, msg: ''};

        if (data.accountIds) {
            //helper.checkEmptyCustomLookup(data.accountSelected, component.find('input-optica'), valid, 'Campo "Óptica" obligatorio.');
            helper.checkEmptyField(data.accountsSelected, valid, 'Selecciona al menos una Óptica');
        }

        helper.checkEmptyCustomLookup(data.campana.parentId, component.find('input-campana'), valid, 'Campo "Campaña" obligatorio.'); 
        helper.checkEmptyCustomLookup(data.campana.id, component.find('input-accion'), valid, 'Campo "Acción" obligatorio.');

        if (data.campana.accion.cantidadRequired){
            helper.checkEmptyField(data.caso.cantidad, valid, 'Campo "Cantidad" obligatorio.');
        }

        if (data.campana.accion.briefing){
            helper.checkEmptyField(data.caso.briefing, valid, 'Campo "Briefing" obligatorio.');
        }

        if (data.campana.accion.idioma){
            helper.checkEmptyField(data.caso.idiomaSelected, valid, 'Al menos un "Idioma" obligatorio.');
            if (valid.status){
                var defaultNotSelected = [];
                data.caso.idiomaDefault.forEach(function(def) {
                    for (var i = 0; i < data.caso.idiomaSelected.length; ++i) {
                        if (def == data.caso.idiomaSelected[i]) {
                            return;
                        }
                    }
                    defaultNotSelected.push(def);
                });
                if (defaultNotSelected.length > 0) {
                    if (defaultNotSelected.length == 1) {
                        alert('Atención: Se ha cambiado el idioma de la acción a: ' + defaultNotSelected[0] + '.');
                    } else {
                        var message = 'Atención: Se han deseleccionado varios de los idiomas por defecto: ' + defaultNotSelected[0];
                        for (var i = 1; i < (defaultNotSelected.length - 1); ++i) {
                            message += ', ' + defaultNotSelected[i];
                        }
                        message += ' y ' + defaultNotSelected[defaultNotSelected.length - 1] + '.';
                        alert(message);
                    }
                }
            }
        }

        if (!data.campana.accion.requiereValoracion){
            if (data.campana.oleadas && data.campana.oleadas.length > 0){
                var oneSelected = false;
                data.campana.oleadas.forEach(function (element) {
                    if (element.selected || element.numJornadas > 0){
                        oneSelected = true;
                    }
                });
                if (!oneSelected && valid.status){
                    valid.status = false;
                    valid.msg = 'Se debe seleccionar al menos una oleada';
                }
            }else if (valid.status){
                valid.status = false;
                valid.msg = 'Se debe seleccionar al menos una oleada';
            }
            
            if (valid.status && !listPrecios){
                valid.status = false;
                valid.msg = 'Se debe seleccionar y configurar al menos una oleada';
            }
        }

        var idiomaBloqueado = component.get('v.idiomaBloqueado');
        if (idiomaBloqueado == true){
            valid.status = false;
            valid.msg = 'Selecciona un idioma válido para las cuentas seleccionadas';
        }

        this.checkDefaultValidation(component, valid, 'input-inversion', 'Hay errores en los campos de "Inversión".');
        this.checkDefaultValidation(component, valid, 'input-oleada-fecha', 'Hay errores en los campos de fechas de oleadas.');
        this.checkDefaultValidation(component, valid, 'input-oleada-hora', 'Hay errores en los campos de horas de oleadas.');

        if (valid.status){
            var confirmationData = {
                //optica: data.accountIds ? component.find('input-optica').get('v.selectedRecord.label') : null,
                campana: component.find('input-campana').get('v.selectedRecord.label'),
                accion: component.find('input-accion').get('v.selectedRecord.label'),
                indicadores: component.get('v.data.campana.descripcionDeLaMedicion'),
                totalPrice: this.calculateTotalPrice(listPrecios,component)
            }
            component.set('v.confirmationData', confirmationData);
            
            if(data.accountsSelected.length > 1 && (data.campana.accion.codigoPostal || data.campana.accion.direccion || data.campana.accion.telefono || data.campana.accion.localidad)){
                component.set('v.showDireccionesModal', true);
            }
            else{
                component.set('v.showConfirmationDialog', true);
            } 
        }else{
            helper.toastInfo(component, valid.msg, true);
        }
        
    },

    CancelDireccionModal: function(component,event,helper) {
        component.set('v.showDireccionesModal', false);
    },

    SaveDireccionModal: function(component,event,helper) {
        var data = component.get('v.data');

        var valid = {status: true, msg: ''};
        if (data.campana.accion.codigoPostal){
            for(var i in data.accountsSelected){
                var codigoPostal = data.accountsSelected[i].codigoPostal
                if(codigoPostal == null || codigoPostal == '' || codigoPostal == undefined){
                    valid.status = false;
                    valid.msg = 'Rellena todos los Códigos Postales';
                    break;    
                }
            }
        }

        if (valid.status){
            component.set('v.showDireccionesModal', false);
            component.set('v.showConfirmationDialog', true);
        }else{
            helper.toastInfo(component, valid.msg, true);
        }
    },


    confirmationDialogCancel: function(component) {
        component.set('v.showConfirmationDialog', false);
    },

    confirmationDialogSave: function(component) {
        var data = component.get('v.data');
        var listPrecios = component.get('v.listPrecios');

        component.set('v.peticionSelectedFileUpload','');
        component.set('v.listPeticionesInsertadas',[]);

        var action = component.get("c.saveCase");
        action.setParams({
            jsonData : JSON.stringify(data),
            jsonListPrecios : JSON.stringify(listPrecios)
        });
        action.setCallback(this, function(response) {
            try {
                if (response.getState() === 'SUCCESS') {
                    if (response.getReturnValue()) {
                        var respuesta = response.getReturnValue();
                        console.log('Respuesta: ' + respuesta);
                        if (respuesta.includes(":OK:")) {
                            respuesta = respuesta.replace(":OK:", "");
                            console.log(JSON.parse(respuesta));
                            component.set('v.peticionSelectedFileUpload',JSON.parse(respuesta)[0].Id);
                            component.set('v.listPeticionesInsertadas',JSON.parse(respuesta));
                            console.log(component.get('v.peticionSelectedFileUpload'));
                            this.toastInfo(component, 'Petición creada correctamente', false);
                            component.set('v.showFileUploadModal',true);
                            //component.set("v.dataParent", {caseId : respuesta});
                            //setTimeout($A.getCallback(() => this.navigateToCaseList(component)), 1600);
                        } else {
                            this.toastInfo(component, 'Error: ' + respuesta, true);
                        }
                    } else {
                        this.toastInfo(component, 'Error: response null.', true);
                    }
                } else {
                    this.toastInfo(component, 'Error: State ' + response.getState(), true);
                }
                component.set('v.showConfirmationDialog', false);
            } finally {
                this.decrementLoadingCount(component);
            }
        });
        this.incrementLoadingCount(component);
        $A.enqueueAction(action);
    },

    checkEmptyField: function (field, valid, msg) {
        if (valid.status && (field == null || field == '' || field == undefined)) {
            valid.status = false;
            valid.msg = msg;
        }
    },

    checkEmptyCustomLookup: function(field, inp, valid, msg) {
        if (!field) {
            if (inp) {
                inp.set('v.errorMessage', msg);
            }
            if (valid.status) {
                valid.status = false;
                valid.msg = msg;
            }
        } else if (inp) {
            inp.set('v.errorMessage', null);
        }
    },

    checkDefaultValidation: function(component, valid, identifier, message) {
        var inps = component.find(identifier);
        if (inps) {
            [].concat(inps).forEach(function(input) {
                input.reportValidity();
                if (valid.status && !input.checkValidity()) {
                    valid.status = false;
                    valid.msg = message;
                }
            });
        }
    },

    toastInfo: function (component, message, errorToast) {
        component.set('v.showToast', true);
        component.set('v.toastError', errorToast);
        component.set('v.toastMessage', message);
    },

    createNewCase: function(component) {
        var data = component.get('v.data');
        var evt = component.getEvent("createNewCaseFromPeticion");
        evt.setParams({
            accountId: data.accountSelected,
            campaignId: data.caso.id
        });
        evt.fire();
    },

    closeConfirmationDialog: function(component) {
        component.set('v.confirmationDialogValues', null);
    },

    cancel: function(component) {
        var action = component.get("c.cancelPeticion");
        action.setParams({
            caseId: component.get('v.data.caso.id')
        });
        action.setCallback(this, function(response) {
            try {
                if (response.getState() === 'SUCCESS') {
                    this.toastInfo(component, 'Petición cancelada correctamente', false);
                    component.set('v.data.caso.isCancelable', false);
                } else {
                    this.toastInfo(component, 'Error: State ' + response.getState(), true);
                }
                this.closeConfirmationDialog(component);
            } finally {
                this.decrementLoadingCount(component);
            }
        });
        this.incrementLoadingCount(component);
        $A.enqueueAction(action);
    },

    incrementLoadingCount: function(component) {
        component.set('v.loadingCount', component.get('v.loadingCount') + 1);
    },

    decrementLoadingCount: function(component) {
        component.set('v.loadingCount', component.get('v.loadingCount') - 1);
    },

    processData : function(data) {
        // Procesar oleadas data.campana.oleadas
        if (data && data.campana && data.campana.oleadas) {
            data.campana.oleadas.forEach(function(oleada) {
                Object.defineProperties(oleada, {
                    // Campo que indica si las oleadas están terminadas
                    '_isNotAvailable': {
                        get: function () {
                            // finEjecución es una cadena con el formato YYYY-MM-dd
                            var today = new Date();
                            var strToday = today.getFullYear() + '-'
                                    + (today.getMonth() < 9 ? '0' : '') + (today.getMonth() + 1) + '-'
                                    + (today.getDate() < 10 ? '0' : '') + today.getDate();
                            if( (strToday < this.inicioEjecucion && strToday >= this.inicio && strToday <= this.fin) || data.campana.permitirSolicitarFueraPlazo == true )
                                return false;
                            else
                                return true;
                        }
                    }
                });
            });
        }
    },

    navigateToCaseList: function(component){
        console.log('NavigateToCaseList');
        var navigateToCaseList = component.get('v.navigateToCaseList');
        $A.enqueueAction(navigateToCaseList)
    },

    update: function(component) {
        var action = component.get("c.updateCase");
        action.setParams({
            caseId: component.get('v.dataParent.caseId'),
            values: {
                comentarios: component.get('v.data.caso.comentarios')
            }
        });
        action.setCallback(this, function(response) {
            try {
                if (response.getState() === 'SUCCESS') {
                    this.toastInfo(component, 'Petición actualizada correctamente', false);
                    setTimeout($A.getCallback(() => this.navigateToCaseList(component)), 1000);
                } else {
                    this.toastInfo(component, 'Error: State ' + response.getState(), true);
                }
                this.closeConfirmationDialog(component);
            } finally {
                this.decrementLoadingCount(component);
            }
        });
        this.incrementLoadingCount(component);
        $A.enqueueAction(action);
    },

    calculateTotalPrice: function(listPrecios,component) {
        var totalPrice = 0;
        if (listPrecios) {
            listPrecios.forEach(function(item) {
                item.listPAW.forEach(function(item2) {
                    if (item2.selected) {
                        if (item2.pat.Inversion_minima__c) {
                            totalPrice += item2.inversion;
                        } else {
                            totalPrice += item2.pat.Precio_total__c;
                        }
                    }
                });
            });
        }
        
        console.log('CALCULATE PRICE : ' + totalPrice );
        if (totalPrice != 0){
            //console.log('CALCULATE TOTAL PRICE : ' + component.get('v.data.accountsSelected').length * totalPrice );
        }
        return totalPrice;

    },
        
    getConditionsKPI: function (component,event,helper,identifier){
        let action=component.get("c.getKPI");
		action.setParams({			
			caseId:identifier
		});
		if(action){
			action.setCallback(this,function(res){
				let state=res.getState();
				if(state=="SUCCESS"){
					let result=res.getReturnValue();
                    console.log('entre getConditionKPI')
        			console.log(result)
                    component.set("v.kpiData",result);
                    
				}else{
					//this.processErrors(component,res.getError(),"getInitalData");
                    console.log('error: ' + res.getError());
				}
			});
			$A.enqueueAction(action);
		}   
    },
        
    fetchStatusReport: function (component,event,helper,identifier){
    	let action=component.get("c.getInformeStatus");
        action.setParams({			
        	caseid:identifier
        });
        if(action){
			action.setCallback(this,function(res){
				let state=res.getState();
				if(state=="SUCCESS"){
                    component.set('v.informeButton', res.getReturnValue()); 
				}else{
					//this.processErrors(component,res.getError(),"getInitalData");
                    console.log('error: ' + res.getError());
				}
			});
			$A.enqueueAction(action);
		}
    },

    checkPermisosOpticasAccion: function (component,event,helper,accountsSelected,campanaId){
        


        var shopOptions=component.get('v.shopOptions');
        var accionesOptions =component.get('v.accionesOptions')
        var data = component.get('v.data');
        
        var tipoCampaign = accionesOptions[0].Parent.Tipo__c;
        console.log('Tipo de campaña: ' + tipoCampaign);

        
        //Obtiene datos de la peticion seleccionada
        var peticionSeleccionada;
        var tipoCampaign;
        for(var i in accionesOptions){
            if(accionesOptions[i].Id == campanaId){
                peticionSeleccionada = accionesOptions[i];
            }

        }
        console.log('Peticion Seleccionada: ' + JSON.stringify(peticionSeleccionada));

        //Calcula en cada cuenta seleccionada si tiene permitido realizar la accion
        var accionBloqueadaText = 'No necesitas solicitar la acción para las siguientes ópticas: ';
        var accionBloqueada= false;
        for(var aux in accountsSelected){
            var accountSelected =  accountsSelected[aux].accountId;
            var accountSelectedFull =  accountsSelected[aux].accountId;
            for(var i in data.accountsFull){
                var optica = data.accountsFull[i];
                if(optica.Id == accountSelected){
                    accountSelectedFull = optica;
                }
            }
            console.log('Optica Seleccionada [' + aux + ']: ' + JSON.stringify(accountSelectedFull));
            
            if (tipoCampaign == 'Nacional' && peticionSeleccionada.Bloquear_accion_opticas_CRM__c == true && accountSelectedFull.GIO_WEB__c == true && accountSelectedFull.CRM__c == true){
                accionBloqueadaText += accountSelectedFull.Name + ', ';
                accionBloqueada = true;
            }
            
        }
        
        //component.set('v.accionBloqueada',accionBloqueada);
        
        if(accionBloqueada == true){
            //Elimina la ultima coma del text
            var n = accionBloqueadaText.lastIndexOf(", ");
            if(n != -1){
                accionBloqueadaText = accionBloqueadaText.substring(0, n);
            }
            accionBloqueadaText += ' porque ya estás dentro del circuito de envíos nacionales.'
            console.log(accionBloqueadaText);
            //component.set('v.accionBloqueadaText',accionBloqueadaText);
            helper.toastInfo(component,accionBloqueadaText,true);
        }
        
       return accionBloqueada;

    },

    checkIdiomasDisponible: function(component, event, helper, selectedOptionValue, accountsSelected){

        var idiomaMessages = component.get('v.idiomaMessages');
        idiomaMessages = [];
        
        //Comprueba que los idiomas seleccionados estén disponibles en las cuentas sleccionadas
        var accionTotalBloqueada= false;

        for(var i in accountsSelected){
            var accountSelected = accountsSelected[i];
            var opticaBloqueada = false;
            var opticaBloqueadaText = 'La óptica '  + accountSelected.accountName + ' no tiene disponible los idiomas: ';
            for(var j in selectedOptionValue){
                var idioma = selectedOptionValue[j];
                console.log('Accounts Selected Idiomas: ' + accountSelected);
                console.log('Idioma: ' + idioma);
                if(accountSelected.idiomaMarketingLocal != null && !accountSelected.idiomaMarketingLocal.includes(idioma) && idioma !='Inglés' && idioma !='Francés'){
                    console.log(accountSelected.accountId + ' NO CONTIENE EL IDIOMA: ' + idioma);
                    accionTotalBloqueada = true;
                    opticaBloqueada = true;
                    opticaBloqueadaText += idioma + ', ';
                }
            }
            if(opticaBloqueada == true){
                idiomaMessages.push(opticaBloqueadaText);
            }
        }

        component.set('v.idiomaBloqueado', accionTotalBloqueada);

        //Elimina la ultima coma del text y muestra el toast
        if(accionTotalBloqueada == true){
            /*
            var n = opticaBloqueadaText.lastIndexOf(", ");
            if(n != -1){ opticaBloqueadaText = opticaBloqueadaText.substring(0, n); }
            console.log(opticaBloqueadaText);
            */
            //helper.toastInfo(component,opticaBloqueadaText,true);
            component.set('v.idiomaMessages',idiomaMessages);
        }
        else{
            component.set('v.idiomaMessages',[]);
        }
        console.log('IdiomaMessages: ' + JSON.stringify(idiomaMessages));
        
    },
                    
	saveValidation: function(component, event, helper){
        let action = component.get('v.kpiData');
        let paso = true;
        for (let x in action) {
            if(action[x] == true){
                let inputId = "KPI_" + x.replace(/^./, x[0].toUpperCase()) + "__c";
                if (!(action["inputkpi"][inputId] && action["inputkpi"][inputId].trim().length > 0)){
                    paso = false;      
                }
            } 
        }
        if(!paso){
            for (let y in action) {
                if(action[y] == true){
                    let inputId = "KPI_" + y.replace(/^./, y[0].toUpperCase()) + "__c";
                    action["inputkpi"][inputId] = '';
                }
       		}
        component.set("v.kpiData",action);    	
    	}
        return paso;
   },

    getCaseDocuments: function(component, event, helper,recordid) {
        console.log("entro en obtener documentos");
        console.log("id Caso: " + recordid);
        if (recordid != null){
        var action = component.get("c.getCaseDocumentsApex");
        action.setParams({ recordId: recordid});
        action.setCallback(this, function (response) {
            var state = response.getState();
            if (state === "SUCCESS") {
                var res = JSON.parse(response.getReturnValue());
                console.log('DOCUMENTS');
                console.log(res);
                component.set('v.documents', res);
                console.log(response.getReturnValue());
                console.log('resultado : '+ res);
            } else if (state === "INCOMPLETE") {
            } else if (state === "ERROR") {
                var errors = response.getError();
                if (errors) {
                    if (errors[0] && errors[0].message) {
                        console.log("Error message: " + errors[0].message);
                    }
                } else {
                    console.log("Unknown error");
                }
            }
        });
        $A.enqueueAction(action);
        }
    },

    downloadFile : function(component, event, helper) {
		console.log('DESCARGA');
		console.log(event.currentTarget.dataset.cvid);
        
		var action = component.get('c.getDocumentBlob');
	
        action.setParams({
            "documentId": event.currentTarget.dataset.cvid
		});
        
        component.set('v.loadingCount', 1);
		action.setCallback(this, function(response) {
			var state = response.getState();
            var res = response.getReturnValue();
            console.log('respuesta');
			if (state === "SUCCESS") {

				if(res!=null){
					console.log("SUCCESS");
					console.log(res);
					this.openDocument(component, event, helper,res);
				}
				else this.toastInfo(component, 'El archivo supera el límite de tamaño para poder ser descargado', true);

			}
			else if (state === "INCOMPLETE") {
				// do something
				this.toastInfo(component, 'El archivo supera el límite de tamaño para poder ser descargado', true);
			}
			else if (state === "ERROR") {

				console.log('El archivo supera el límite de tamaño para poder ser descargado');
				this.toastInfo(component, 'El archivo supera el límite de tamaño para poder ser descargado', true);

            }
            component.set('v.loadingCount', 0);
        });
        $A.enqueueAction(action);
    },

    notify : function(component, event, helper,message) {
		console.log(message);
	},

    openDocument : function(component, event, helper,res) {
		console.log('En openDocument del controller');
		console.log(res);

    	var encoded =  res.EncodedVersionData;
		var mime = res.fileMimeType;
        var fileName = res.Title;
		var endFileName = fileName + '.' + res.Extension;

      
       
        if (window.navigator && window.navigator.msSaveOrOpenBlob) { // IE workaround
            	console.log('Explorer');
                var byteCharacters = atob(encoded);
                var byteNumbers = new Array(byteCharacters.length);
                for (var i = 0; i < byteCharacters.length; i++) {
                    byteNumbers[i] = byteCharacters.charCodeAt(i);
                }
                var byteArray = new Uint8Array(byteNumbers);
                var blob = new Blob([byteArray], {type: mime });
                window.navigator.msSaveOrOpenBlob(blob, endFileName);
            }
            else { // much easier if not IE
				console.log('NO es IE');

				var link = window.document.createElement("a");
 				var byteCharacters = atob(encoded);
                var byteNumbers = new Array(byteCharacters.length);
                for (var i = 0; i < byteCharacters.length; i++) {
                    byteNumbers[i] = byteCharacters.charCodeAt(i);
                }
                var byteArray = new Uint8Array(byteNumbers);
				var blob = new Blob([byteArray], {type: mime });
				var fileURL = URL.createObjectURL(blob);
				link.setAttribute("href", fileURL);
				link.setAttribute("download", endFileName);
				document.body.appendChild(link); 
				link.click(); 
				document.body.removeChild(link);

            }
	},


})