let firstName = prompt(`Welcome to our advanced Password Generator.
If you want to obtain a fantastic password, type your name.`);

let lastName =
  prompt(`Well done ${firstName}, in order to be "hacker-proof", please type your last name.
We are GDPR compliant, so, with us, your data are safe!`);

let favouriteColor = prompt(`Great job ${firstName} ${lastName}! One last step.
In order to create a non pseudo-randomic seed to hash your password we need to know your favorite color`);

let password = firstName + lastName + favouriteColor + 21;

alert(`Congratulations ${firstName} ${lastName}!
Our advanced AI algorithms have finally created a hyper complex and absolutely secure password.

Your password is:
${password}

Our complex hashing AI needs a really expansive infrastructure to run. We are struggling to keep this service toll-free for all our customers. If you found our service useful, please consider to help us with a small donation.
Thank you for trusting us.`);
