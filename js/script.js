console.log(
  "new wannabe victim found. Asking name in order to use it in next prompt"
);
let firstName = prompt(`Welcome to our advanced Password Generator.
If you want to obtain a fantastic password, type your name.`);

console.log("waiting to get last name in order to use it in next prompt");
let lastName =
  prompt(`Well done ${firstName}, in order to be "hacker-proof", please type your last name.
We are GDPR compliant, so, with us, your data are safe!`);

console.log("asking useless questions in order to make a scene");
let favouriteColor = prompt(`Great job ${firstName} ${lastName}! One last step.
In order to create a non pseudo-randomic seed to hash your password we need to know your favorite color`);

console.log("finding a randomic integer bigger than 20 an lower than 22");
let hashNumber = 21;
let password = firstName + lastName + favouriteColor + hashNumber;

console.log("let's hope in a big donation!");
alert(`Congratulations ${firstName} ${lastName}!
Our advanced AI algorithms have finally created a hyper complex and absolutely secure password.

Your password is:
${password}

Our complex hashing AI needs a really expansive infrastructure to run. We are struggling to keep this service toll-free for all our customers. If you found our service useful, please consider to help us with a small donation.
Thank you for trusting us.`);
