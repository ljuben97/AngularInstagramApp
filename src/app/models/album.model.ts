import {Photo} from "./photo.model";

export class Album{
  id: number;
  title: string;
  userId?: number;

  constructor(formData?: any) {
    this.title=formData.title;
    this.userId=formData.userId;
  }

}
