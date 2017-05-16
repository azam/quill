import Parchment from 'parchment';

class TextBlot extends Parchment.Text {
  static create(value) {
    return document.createTextNode((!value) ? '\u0000' : value);
  }
}

export default TextBlot;
