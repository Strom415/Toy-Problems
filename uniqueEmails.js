/*
Every email consists of a local name and a domain name, separated by the @ sign.

For example, in alice@leetcode.com, alice is the local name, and leetcode.com is the domain name.

Besides lowercase letters, these emails may contain '.'s or '+'s.

If you add periods ('.') between some characters in the local name part of an email address,
mail sent there will be forwarded to the same address without dots in the local name.  
For example, "alice.z@leetcode.com" and "alicez@leetcode.com" forward to the same email address.  
(Note that this rule does not apply for domain names.)

If you add a plus ('+') in the local name, everything after the first plus sign will be ignored.
This allows certain emails to be filtered, for example m.y+name@email.com will be 
forwarded to my@email.com.  (Again, this rule does not apply for domain names.)

It is possible to use both of these rules at the same time.

Given a list of emails, we send one email to each address in the list.  
How many different addresses actually receive mails? 
*/

// solution 1
// let trim = (email) => {
//   let trimmed = "";
//   let ignore = false;
//   let domain = false;

//   for (let i = 0; i < email.length; i++) {
//     if (email[i] === '@') domain = true;
//     if (email[i] === '+') ignore = true;
//     if (!ignore && email[i] !== '.' || domain) trimmed += email[i];
//   }
//   return trimmed;
// }

// let numUniqueEmails = (emails) => {
//   let uniques = new Set();
//   emails.forEach(email => uniques.add(trim(email)));
//   return uniques.size;
// }

// solution 2
let trim2 = (email) => {
  let [local, domain] = email.split('@');
  // return local.substring(0, local.indexOf('+')).split('.').join + domain;
  return local.split('+')[0].split('.').join + domain;
}

let numUniqueEmails2 = (emails) => {
  return new Set(emails.map(email => trim2(email))).size;
}

//solition 3
let numUniqueEmails3 = (emails) => new Set(emails.map(email => email.split('@')[0].split('+')[0].replace(/\./g,'') + email.split('@')[1])).size;

// tests
let emails = ["test.email+alex@leetcode.com","test.e.mail+bob.cathy@leetcode.com","testemail+david@lee.tcode.com"]
let test = numUniqueEmails2(emails);
console.log(test)