# Values of the `autocomplete` Attribute

## General

* `off` - disable autocomplete
* `on` - enable autocomplete (a browser gives hint by their own judgement)

## Name and Its Components

* `name` - full name (general purpose without breaking down into components below)
* `honorific-prefix` - prefix such as Mrs., Dr. or Mile.
* `honorific-suffix` - suffix such as Jr., PhD or IV
* `given-name` - the first name
* `additional-name` - the middle name
* `family-name` - the last name
* `nickname` - nickname

## Address

* `street-address` - detailed address (without details like city, ZIP etc.)
* `address-line1`, `address-line2`, `address-line3` - if `street-address` is not present
* `address-level1`, `address-level2`, `address-level3`, `address-level4` - address in terms of administrative level
* `country` - country code
* `country-name` - country name
* `postal-code` - postal code (ZIP in the United States)

## Contact

* `email`
* `tel` - a full telephone number
* `tel-country-code`
* `tel-national` - the entire phone number without the country code component, including a country-internal prefix
* `tel-area-code` - the area code, with any country-internal prefix applied if appropriate
* `tel-local` - the phone number without the country or area code
* `tel-local-prefix` - for example 555 for the phone number 555-6502
* `tel-local-suffix` - for example 6502 for the phone number 555-6502
* `tel-extension` - a telephone extension code within the phone number, such as a room or suite number in a hotel or an office extension in a company
* `impp` - a URL for an instant messaging protocol endpoint, such as `xmpp:username@example.net`
* `url`

## Organization Details

* `organization-title`

## Credentials and Accessing

* `username`
* `current-password`
* `new-password` - a browser will suggest a new password
* `one-time-code`

## Credit Card and Payments

* `cc-name` - the full name printed on a card
* `cc-given-name`
* `cc-additional-name`
* `cc-family-name`
* `cc-number`
* `cc-exp` - expiration date in the form `MM/YY` or `MM/YYYY`
* `cc-exp-month`
* `cc-exp-year`
* `cc-csc` - the security code like 3-digit code on the back of the card
* `cc-type` - type of card, like Visa or Master Card
* `transaction-currency`
* `transaction-amount`

## Details

* `bday` - a birth full date
* `bday-day` - the day of the month of a birth date
* `bday-month` - the month of the year of a birth date
* `bday-year` - the year of a birth date
* `sex`
* `photo` - the URL of an image representing the person or company
* `language` - given as a valid BCP 47 language tag (e.g., `en`)

Source: [https://developer.mozilla.org/en-US/docs/Web/HTML/Attributes/autocomplete](https://developer.mozilla.org/en-US/docs/Web/HTML/Attributes/autocomplete)