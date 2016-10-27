namespace Ajax.Services {

    export class MovieService {
        private MovieResource;

        public listMovies() {
            return this.MovieResource.query();
        }

        constructor($resource: ng.resource.IResourceService) {
            this.MovieResource = $resource('/api/movies');
        }
    }
    angular.module('Ajax').service('movieService', MovieService);
    export class MyService {

    }
    angular.module('Ajax').service('myService', MyService);
    }
