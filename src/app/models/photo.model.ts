export class Photo{
  id: number;
  title: string;
  url: string;
  thumbnailUrl: string;
  albumId?: number;

  constructor(formData: any) {
    this.title=formData.title;
    this.url=formData.url;
    this.thumbnailUrl=formData.thumbnailUrl;
    this.albumId=formData.albumId;
  }
}
