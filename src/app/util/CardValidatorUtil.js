class CardValidatorUtil {
  constructor() {}

  validateCard(req) {
    return this.flags(req) && this.numbercard(req) && this.cvv(req);
  }
  

  flags(req) {
    switch (req.body.flag) {
      case "visa":
        return true;
        
      case "mastercard":
        return true;

      case "elo":
        return true;

      default:
        return false;
    }
  }

  numbercard(req) {
    switch (req.body.flag) {
      case "visa":
        return /^4[0-9]{12}(?:[0-9]{3})/.test(req.body.numbercard.replace(/\s/g, ''));

      case "mastercard":
        return /^5[1-5][0-9]{14}/.test(req.body.numbercard.replace(/\s/g, ''));

      case "elo":
        return /^((((636368)|(438935)|(504175)|(451416)|(636297))d{0,10})|((5067)|(4576)|(4011))d{0,12})$/.test(
          req.body.numbercard.replace(/\s/g, '')
        );

      default:
        return false;
    }
  }

  cvv(req) {
    return /^[0-9]{3,4}$/.test(req.body.cvv);
  }

}

module.exports = new CardValidatorUtil();
