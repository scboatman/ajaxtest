namespace Ajax.Services {

    export class TaxService {
        CalculateTax(Price) {
            return Price * .08;
        }

    }
    angular.module('Ajax').service('TaxService', TaxService);
}
