export class Character {
  public id: number;
  public firstName: string;
  public lastName: string;
  public fullName: string;
  public title : string;
  public family: string;
  public image : string;
  public imageUrl : string

    constructor(
        id: number,
        firstName: string,
        lastName: string,
        fullName: string,
        title : string,
        family: string,
        image : string,
        imageUrl : string
    ) {
      this.id = id;
      this.firstName = firstName;
      this.lastName = lastName;
      this.fullName = fullName;
      this.title = title;
      this.family = family;
      this.image = image;
      this.imageUrl = imageUrl;
    }
}