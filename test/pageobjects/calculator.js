class Calculator {
  get one() {
    return $("~1");
  }
  get two() {
    return $("~2");
  }
  get three() {
    return $("~3");
  }
  get four() {
    return $("~4");
  }
  get five() {
    return $("~5");
  }
  get six() {
    return $("~6");
  }
  get seven() {
    return $("~7");
  }
  get eight() {
    return $("~8");
  }
  get nine() {
    return $("~9");
  }
  get zero() {
    return $("~0");
  }

  get plus() {
    return $("~plus");
  }

  get minus() {
    return $("~minus");
  }

  get multiply() {
    return $("~multiply");
  }

  get divide() {
    return $("~divide");
  }

  get equals() {
    return $("~equals");
  }

  get resultPreview() {
    return $("id=com.google.android.calculator:id/result_preview");
  }

  get resultDisplay() {
    return $("id=com.google.android.calculator:id/result_final");
  }

  get display() {
    return $("id=com.google.android.calculator:id/formula");
  }

  get clear() {
    return $("~clear");
  }

  get emptyDisplay() {
    return $("~No formula");
  }
}

module.exports = new Calculator();
