namespace Model {
    export class Catalog {
        public id: number;
        public name: string;
        public lastName: string;
    }

    export class Photo {
        public id: number;
        public type: string;
        public photo: string;
    }
    export class Menu {
        public id: number;
        public name: string;
        public items: Product[];
    }

    export class Product {
        public id: number;
        public name: string;
        public note: string;

    }
    export class Icecream {
        public id: number;
        public name: string;
    }
    export class Yogurt {
        public id: number;
        public name: string;
    }
    export class Toping {
        public id: number;
        public name: string;
    }
    export class Drink {
        public id: number;
        public name: string;
    }
}
