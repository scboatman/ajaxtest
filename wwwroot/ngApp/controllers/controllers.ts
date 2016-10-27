namespace Ajax.Controllers {

    export class ProductsController {
        public Products;

        constructor(TaxService) {
            this.Products = [{
                name: `milk`,
                price: 1.99,
                tax: TaxService.CalculateTax(1.99)

            },

                {
                name: 'Pasta',
                price: .99,
                tax: TaxService.CalculateTax(.99)
            },
                {
                name: 'Steak',
                price: 6.99,
                tax: TaxService.CalculateTax(6.99)
            }
            ];
        }
        //constructor($http: ng.IHttpService) {
        //    $http.get('/api/products/').then((response) => {
        //        this.Products = response.data;

        //    });
        //}
    }
    angular.module('Ajax').controller('ProductsController', ProductsController);

}