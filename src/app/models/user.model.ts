import {Album} from "./album.model";

export class User {
  id: number;
  name: string;
  username: string;
  email: string;
  address:{
    street: string;
    suite: string;
    city:string;
    zipcode: string;
    geo:{
      lat: number;
      lng: number;
    }
  };
  phone: string;
  website: string;
  company:{
    name: string;
    catchPhrase: string;
    bs: string;
  };

  constructor(formData?: any) {
    this.name=formData.name;
    this.username=formData.username;
    this.email=formData.email;
    this.address={
      street : formData.street,
      zipcode: formData.zipCode,
      city: formData.city,
      suite: formData.suite,
      geo: {
        lat: formData.lat,
        lng: formData.lng
      }
    };
    this.phone=formData.phone;
    this.website=formData.website;
    this.company={
      name: formData.companyName,
      catchPhrase: formData.companyCatchPhrase,
      bs: formData.companyBs,
    }
  }

}
