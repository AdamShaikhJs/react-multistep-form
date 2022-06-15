export const regexStrings = {
    regexOnlyLetters: "^[a-zA-Z]+$",
    regexOnlyNumber: "^[0-9]+$",
    regexLettersWithSpace: "^[a-zA-Z ]+$",
    regexPAN: "^[a-zA-Z]{5}[0-9]{4}[a-zA-Z]{1}",
    regexVoterID: "^([a-zA-Z]){3}([0-9]){7}?$",
    regexAadhaarNumber: ["^[2-9][0-9]*$", "^[0-9]+$", "^[0-9]+$"],
    regexPassportNumber: "[A-Z]{1}[0-9]{7}$",
    regexDriversLicense:
      "(([A-Z]{2}[0-9]{2})( )|([A-Z]{2}-[0-9]{2}))(19[0-9][0-9]|20[0-9][0-9])([0-9]{7})$",
      regexMobileNumber:"^[6-9][0-9]*$",
  };
  