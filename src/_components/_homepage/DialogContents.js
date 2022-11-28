export default class DialogContents {
  constructor(title, banner, content) {
    this.title = title;
    this.banner = banner;
    this.content = content;
  }

  getTitle() {
    return this.title;
  }

  getBanner() {
    return this.banner;
  }

  getContent() {
    return this.content;
  }

  static new() {
    return new DialogContents('Blank Title', []);
  }
}