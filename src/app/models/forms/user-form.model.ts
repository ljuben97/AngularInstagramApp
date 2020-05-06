import {User} from "../user.model";
import {FormControl, FormGroup, Validators} from "@angular/forms";

export class UserForm {
  public formGroup: FormGroup;
  
  public name: FormControl;
  public username: FormControl;
  public email: FormControl;
  public street: FormControl;
  public suite: FormControl;
  public city: FormControl;
  public zipCode: FormControl;
  public lat: FormControl;
  public lng: FormControl;
  public phone: FormControl;
  public website: FormControl;
  public companyName: FormControl;
  public companyCatchPhrase: FormControl;
  public companyBs: FormControl;

  constructor(user?: User) {
    if(!user) {
      this.name = new FormControl('', Validators.required);
      this.username = new FormControl('', Validators.required);
      this.email = new FormControl('', Validators.required);
      this.street = new FormControl('', Validators.required);
      this.suite = new FormControl('', Validators.required);
      this.city = new FormControl('', Validators.required);
      this.zipCode = new FormControl('', Validators.required);
      this.lat = new FormControl('', Validators.required);
      this.lng = new FormControl('', Validators.required);
      this.phone = new FormControl('', Validators.required);
      this.website = new FormControl('', Validators.required);
      this.companyName = new FormControl('', Validators.required);
      this.companyCatchPhrase = new FormControl('', Validators.required);
      this.companyBs = new FormControl('', Validators.required);
    }
    else {
      this.name = new FormControl(user.name, Validators.required);
      this.username = new FormControl(user.username, Validators.required);
      this.email = new FormControl(user.email, Validators.required);
      this.street = new FormControl(user.address.street, Validators.required);
      this.suite = new FormControl(user.address.suite, Validators.required);
      this.city = new FormControl(user.address.city, Validators.required);
      this.zipCode = new FormControl(user.address.zipcode, Validators.required);
      this.lat = new FormControl(user.address.geo.lat, Validators.required);
      this.lng = new FormControl(user.address.geo.lng, Validators.required);
      this.phone = new FormControl(user.phone, Validators.required);
      this.website = new FormControl(user.website, Validators.required);
      this.companyName = new FormControl(user.company.name, Validators.required);
      this.companyCatchPhrase = new FormControl(user.company.catchPhrase, Validators.required);
      this.companyBs = new FormControl(user.company.bs, Validators.required);
    }
    this.formGroup = this.buildFormGroup();

  }



  buildFormGroup(): FormGroup{
    return new FormGroup({
      name: this.name,
      username: this.username,
      email: this.email,
      street: this.street,
      suite: this.suite,
      city: this.city,
      zipCode: this.zipCode,
      lat: this.lat,
      lng: this.lng,
      phone: this.phone,
      website: this.website,
      companyName: this.companyName,
      companyCatchPhrase: this.companyCatchPhrase,
      companyBs: this.companyBs
    })
  }
}
