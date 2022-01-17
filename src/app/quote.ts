export class Quote {
    showDescription:boolean;
    constructor(public name: string,public description:string, public getDate:Date){
        this.showDescription = false;
    }    
}
