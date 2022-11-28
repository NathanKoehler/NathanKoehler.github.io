export default class Dialogbodys {
  title;
  banner;
  body;
  constructor(title, banner, body) {
    this.title = title;
    this.banner = banner;
    this.body = body;
  }

  getTitle() {
    return this.title;
  }

  getBanner() {
    return this.banner;
  }

  getbody() {
    return this.body;
  }

  static new() {
    return new Dialogbodys('Blank Title', []);
  }
}