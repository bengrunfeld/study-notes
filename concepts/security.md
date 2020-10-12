# Security

# General Principle

Awareness + Adequate Protection = Security

## General Security Steps

-   validate input
-   sanitize output
-   use a content security policy
-   use cookie settings like HttpOnly, Secure, and Expire,
-   use HTTPS
-   Force the user to perform an additional step for sensitive actions like chaning passwords, wiring money, etc like entering an SMS-sent code, or going to a confirmation page and making them click the button, etc.
-   flag session cookies as Secure Cookies

## General Security House Keeping

-   update software regularly with new patches
-   back up your data
-   Secure your domain with MFA (DNSSEC)
-   Securte your server (virus scanning, firewall, DDOS prevention services, intrusion detection, etc)
-   join the security community and follow security people on Twitter, which is where a lot of security news breaks first
-

## Terminology

-   Zero Day Attack - The developer has had zero days of awareness and zero days to craft an solution for it.
-   Footprinting - Recon done on a system by hackers. A systematic exploration of a systems defenses and vulnerabilities.

## The Principle of Least Priveledge

Every program and every priveledged user of the system should operate using the least amount of priveledge necessary to complete the job.

No regular user with limited priveledges should have enough system access to edit their own priveledges.

Grant as little access as possible.

## Defense in Depth

Have multiple layers of defense. A lack of defense in depth would look like: having a single login, and after you pass that login, you have root access to EVERYTHING. i.e. having a single point of failure.

Redundant mesaures.

Have layered defenses.

## Defense Controls

-   Physical - locks, security guards
-   Technical - hardware & software protections, MFA, least priveledge, etc
-   Administrative - policies and procedures to keep systems safe - training, sec policy, risk assessments, security reviews, penetration testing

## Security through obscurity (STO)

-   Give out the least amount of info to complete the job
-   Loose lips sink ships

STO is most effective when added to other security measures.

## Deny or Allow Lists

Keeping items restricted by default and using ALLOW LISTS is usually the more secure approach.

## Mapping Exposure Points and Data Passageways

Map all the points that are accessible to an attacker. It's where they could get data in or data out.

Make lists and diagrams showing the paths the data takes.

Check where data enters your systems, how it moves between system parts, and where it's stored, and how it's returned to the User.

Also consider if the data passes through other potentially vulnerable hardware or software not connected to your system.

## Regulate Requests

Filter input, control output. Good data is allowed through, while bad data is kept out.

These measures provide Defense in Depth:

-   Regulate request
-   Validate input
-   Sanitize data

A website should be selective about which requests in accepts. E.g. Make sure you app only accepts the HTTP methods for a specific URL that you expect - e.g. GET/POST, but not DELETE.

### Request response format:

A request usually sends two key-vals: `content-type` and `accept`. `content-type` is used to indicate the format of the incoming data. `accept` is used to specify the format of the response that the browser would like to get back.

The most common formats are HTML, JSON, XML, etc.

It's worth filtering out data formats that are not acceptable.

### Other filtering criteria

You can also filter by

-   IP Address
-   URL
-   Query Params
-   User-Agent String
-   Size

You can also use firewalls and proxies, which are powerful tools for regulating requests.

Regulating requests is a good first line of defense.

## Validate Input

Many hackers use the regular data input access points to hack your site. They do this by sending in malicious data in regular pathways like forms and API requests.

You can to distinguish between _good data_ and _bad data_.

What is considered acceptable vs non-acceptable data.

Some basic validation rules are:

-   length: inputs can't be blank, and can't be more than x characters. Ensure that strings are not longer than the column limit in the database where they'll be stored.
-   type of data. e.g. number vs boolean, pdf ok but jpg not ok, etc
-   format of data: e.g. email address looks like an email address
-   that value is within an acceptable range: e.g. 2 is in a list of 1 - 10, but 11 would not be ok, or that it matches a value in a database. consider using allow and deny lists.
-   uniquenss: e.g. don't allow a new user to use an existing username. a new blog post can't have the same URL as an existing blog post. usually with uniqueness checks, you have to make a call to the DB to check.

Be careful about values like zero, which can cause issues with conditional logic later on.

e.g.

    if (numberOfKids) return "Ok"

In this example, if `numberOfKids` is `0`, then it will fail the test, even though the value exists. Be careful of `0` and other values that could cause issues later on in your code.

## Sanitize Data

Just because data has passed through your initial validation, that doesn't mean that it's safe.

The easiest attack is to send through malicious data that passes your validations.

To sanitize the data, you can do the following:

-   make sure it's the right data type by expressly typecasting the data in your code. E.g. `parseInt(input)`. Even if the data is already a number, it won't throw an error. Make sure the typecasting happens as early as possible, so we don't forget to do it later.

How we apply sanitization depends on where the data will go next. A Map of Data Pathways will help with this.

If data will be sent in an SQL string to a DB, then it needs SQL sanitization. If it will be sent to the browser as Javascript, then it needs Javascript sanitization.

Some characters have special meanings in a programming language, e.g. `<` in HTML, or `?` in PHP, or a single quote in SQL `'`.

-   You can encode characters to replace characters with special meaning in a programming language to harmless characters.
-   You can also escape these powerful characters

You should NOT attempt to sanitize the code yourself!!! This is extremely difficult to do. Instead, you should use in-built functions in a language for sanitization, or well-tested and trusted libraries to perform the sanitization.

Also, avoid the temptation to remove or correct _bad data_. Stick to **encoding** or **escaping**. That can become a game of cat and mouse.

Retreiving ANY STORED DATA should be treated as new data too.

Sanitize the data coming from a Database. ALWAYS sanitize data before using it.

### Label Sanitized Data

It's important to keep track of which data has been sanitized, and which data has not.

We can use variable names and prefixes to label safe and unsafe data. E.g.

-   dirty, raw, unsafe, unsanitized
-   clean, sanitized, safe

## Keep Code Private

Keep as much of your code, especially code related to security, as private as possible, so that hackers can't see exactly what you're doing.

## Keep Credentials Safe

Separate configuration from code, and make sure you don't hard-code credentials into your files.

Best is to keep them in a Secrets Service and then use Constants.

Be super careful with version control, since it's very hard to purge credentials in a file.

## Keep error message vague

Don't give Hackers a warmer/colder error message - e.g. username not found, password not found. Don't let them learn from previous attempts.

Turn off in-browser error messages in a Production website, because it gives Hackers a TON of information.

Instead, return generic error messages like 400 or 500.

## Logging

Logging is helpful, but it can become a security vulnerability.

Make sure you don't accidentally log sensitive data like usernames, passwords, and credit card numbers.

## Types of Credentials Attacks

-   Credentials theft
-   Brute-Force Attack - checks all character variations
-   Dictionary Attacks - uses words in a dictionary for guesses as well as regular letter number substitutions, as well as regularly used passwords
-   Credentials Stuffing - as soon as a credentials database has been breached, hackers race around the internet to try these newly acquired credentials, because users usually use the same Logins & Passwords

## Strong Passwords

-   Use long passwords (more than 12 characters)
-   Use character variety (A-Z, a-z, 0-9, symbols)
-   Avoid patterns and dictionary words

Length is more important than character variety.

Brute-Force

It takes less than 3 hours to discover any 8 character password
It takes 2 weeks to discovery any 12 character password that uses only lower-case

BUT.... it would take up to 9000 years to discovery any 12 character password that uses character variety!!

Never re-use passwords! Principle of Least Priveledge and Credential Stuffing.

## URL Manipulation & Insecure Direct Object Reference (IDOR)

Make sure that no sensitive or private information is available just by changing the URL.

IDOR is where you can access a secure resource without providing authorization credentials.

By changing the end of the URL, you shouldn't be able to see object references that you aren't authorized to see.

Use Access Control

## SQL Injection

"Code injection is the top security threat to web applications" - OWASP

-   Sanitize your inputs!!!
-   Limit the Apps database priveledges
-   Limit permission to Create, Drop, and Update tables
-   Don't grant access priveledges to database users
-   Never let the App connect as the root user

Use a popular SQL Sanitization library

Use prepared SQL Statements.

e.g.

    const query = `SELECT * FROM cars WHERE model = ${modelInput}`

## XSS Attacks

Cross Site Scripting attacks inject code, mostly HTML and Javascript into your web pages so that other uses browsers will execute it. It gets its name because attackers send scripts across your website to someone elses data.

XSS occurs when web pages output User supplied data in the HTML without sanitizing the input first.

Ranked in the top 10 of security threats.

There are 3 types of XSS:

-   Reflected
-   Stored
-   DOM-Based

### Reflected XSS

Reflected are the most common type. In a reflected attack, the hacker puts Javascript in a URL or in the form data to be sent with the request. When the page loads, the script runs immediately. It's called reflected because it bounces right back.

If it's put into the return HTML, a user's browser immediately makes a request to that URL and executes the JavaScript file it receives.

### Stored

Stored and DOM-based attacks use the same principles as Reflected attacks, except they're not immediate, and do not originate from links.

Stored attacks occur when malicious scripts are planted in storage like databases, files, sessions, or cookies.

When the data is retrieved and planted into HTML, the script will execute.

### DOM-based

A DOM-based cross-site scripting attack, embeds a script into the existing page.

A DOM-based attack is similar to a reflected attack but it works with the existing page instead of using a server to return a response.

The primary defense will be to sanitize all data before output. The correct sanitizing technique depends on the output destination. There are five primary output types to monitor. Use HTML sanitization if the data will be used in HTML. Use JavaScript sanitization if it will be used in JavaScript, and so on.

Another important defense is to use HTTPOnly cookies. This prevents JavaScript from accessing and stealing cookie data. You do this by adding the HTTPOnly option when you set a cookie.

#### Content Security Policy (CSP)

A strong layer of defense against cross-site scripting attacks, is to define a content security policy. A CSP provides instructions to a browser about which types of resources can be used and which websites are allowed to provide them.
It can prevent both the loading of remote and inline JavaScript.

It's a best practice to send the policy in the header of a HTTP response, but it could also be in the HTML head in a meta tag. This example policy restricts scripts and plugins to the current domain only. It would not permit remote loading of JavaScripts.

The CSP acts as an allow list for the browser. You could add domains that should be allowed to provide resources.

CSPs can regulate other resources, such as style sheets, images, fonts, audio and video.

You can learn more about content security policies at content-security-policy.com.

Google also has a tool which examines the CSP of websites and makes recommendations for improvements. The combined defenses of validating input, sanitizing output, using HTTPOnly cookies, and setting a content security policy, will be a good protection against cross-site scripting.

## Cross-Site Request Forgery (CSRF)

A cross-site request forgery attack is when an attacker tricks a user's browser into sending a request to another site. Cross-site because the attack originates at one site, but sends a request to another site. And request forgery because the request is not a genuine user request.

One use of a CSRF attack is if a User is still logged in to a service like their bank account or an online poll. If a CSRF link is triggered, it could execute Javascript that could use the existing Users credentials, since they are still logged in, even though it is not the User who is making the action.

For all of these goals, the mechanism of the attack is the same. into making a request to another URL without the user's consent or knowledge. without the user's consent or knowledge.

And attacker can silence any UI response, meaning a state change can happen maliciously in a Users account, and the User has no indication that that has happened.

### CSRF Tokens

First, you generate a long, unique random string which can act as a token. Then you store it in the user's session data. The session data is usually kept on the server, so the user or an attacker would not be able to inspect it.

When you create an HTML form, you include the token in the form data. Make it a hidden input field. When the form is submitted, the value of the CSRF token will be included in the form data. The code that processes the form data can verify that the form is authentic by retrieving the token stored in the session and comparing it to the token sent by the form. If they match, the form is authentic and not forged.

If the token is missing or does not match, This is a simple CSRF token implementation, and there are variations and improvements which can be made. A token could be only valid for a limited time period. The form token and the session token could be different, complimentary values. For example, encrypting one string could return the other string.

CSRF tokens have one big weakness. If a website is vulnerable to cross-site scripting attacks, then an attacker has a path around our defense.

An attacker might be able to access values stored in the session, to read the token, or an attacker might use Ajax to submit a request that returns a token and then immediately paste that token into their forged request.

Your CSRF defenses rely on having good XSS defenses in place.

Other defenses:

-   An authentic form submission should include a referrer, which is from your domain. A matching referrer is not complete proof that a request is authentic because the referrer value can be spoofed. But if the referrer is missing or wrong, then it indicates a forgery.

-   For forms that use Ajax, you can set a custom header in the XMLHttpRequest, and then validate that the header is present. Browser support is still growing for the SameSite cookie attribute. It's similar to the HttpOnly attribute, but it prevents the browser from sending cookies with forged requests.

-   The best protection for senstive actions like chaning a password or transfering money is to require a second action to confirm the change. It could be a confirmation page before an order is submitted. Some sites use a CAPTCHA image to test whether a person is present. Or it could require re-authentication by providing a password again, or sending and entering a code via SMS.

A CSRF attack would not be able to respond to the confirmation request. A confirmation page is overkill on most forms, but it can be worthwhile in some places.

## Cookie-based Attacks

Browser cookies are easily viewed, easily manipulated, and easily stolen.

Cookie data also may be visible while in transit. Cookie data is sent in plain text in the header of every request to the web server. An attacker with the ability to observe network traffic will see them.

The best prevention is to not put anything of value in a cookie.

It would not be a good idea to store a token that grants access to a restricted webpage in a cookie.

A better place for sensitive data is in a session. Sessions are usually stored in a database or in a file on the server side. A session-ID is stored in the users browser as a cookie, so the session file can be looked up on every request.

With a session, sensitive data stays on the server, so it can't be observed in transit or in storage. The session ID WILL be oberservable in transit, so you still need to take precautions to protect it.

When cookies are created, they should be flagged as HttpOnly, making them unavailable to Javascript.

When a cookie is flagged as being HttpOnly, it cannot be read by document.cookie

When you use an SSL certificate, all data is encrypted between your browser and the server, which prevents cookie data from being read in transit.

Once you're using SSL, you should use Secure Cookies, which can only be sent over HTTPS.

## Session Hijacking

Session hijacking is an attack where a hacker steals a user's active session to gain unauthorized access to parts of a website. Sessions store user data in a file or database on the server. It's more secure to store data in sessions than in browser cookies because the data never leaves the server. It cannot be viewed in transit or in storage. However, a session ID is stored in a browser cookie and like all cookies is vulnerable to theft. An attacker with a stolen session ID can access all of the data stored in the session. Even worse, they can impersonate a logged in user.

To get the session ID, an attacker can either read it from the browser's cookie file, for example, using a cross-site scripting attack, or they can view the data in transit. This is usually done by eavesdropping on an open WiFi network, like those in coffee shops, hotels, and airports.

Without a Secure session cookie, any request to a non-SSL page on the same domain, even the first request before being redirected to HTTPS, could expose the cookie and the session ID.

Secure cookies are usually set in the code, but Session cookies are more general and there's usually a global setting which is set in a config file.

### Defending Against Session Hijacking

-   Expire and Remove old session files regularly
-   Destroy the session when a User logs out. don't just remove a users auth status from the session file
-   Regenerate session ID's periodically at the key action/entry points
-   Regenerating a session ID invalidates any previously stolen session IDs. It's most important to regenerate the session ID after a successful login. Any existing session data is maintained. Only the identifier is updated. Regenerating a session ID forces attackers to find a recent session ID and is also a major defense against session fixation attacks.

### NOT RECOMMENDED DEFENSES

Testing to make the current User Agent String matches the user agent string used at login is not a strong defense.

Testing for an IP address which was used at login is not a strong defense, and it can cause problems. IP addresses may be shared among several users. A user and an attacker on the same WiFi network may have the same IP address. It's also unreliable for legitimate users on mobile networks who may change IP addresses while they're traveling.

## Session Fixation Attack

Session fixation is an attack where the attacker provides a user with a valid session identifier. It's similar to session hijacking, but reversed. Instead of stealing a user's session ID, the attacker gives the user a session ID, one that the attacker controls. In both cases, the result will be that the user and the attacker are using the same session identifier. The purpose of the attack is the same. An attacker can assume the user's identity and share their access privileges. Of course, the session that the attacker provides will not be authenticated. It won't be attached to a logged in user yet. The attacker has to wait patiently. When the user eventually logs into the website again, the application stores a bit of data in the session file to remember that the user has logged in and should be allowed to view other pages. Now the attacker can take advantage of the shared session and visit access-restricted pages.

An attacker can set the user's browser cookie to preferred session ID in other ways, such as using cross-site scripting,

It may also be possible to set the cookie data using a Man-in-the-Middle Attack.

That is when an attacker inserts themselves in the line of communication between the browser and the web server. The attacker secretly relays, and possibly alters, the communication between the two computers. When done well, the attack will be invisible and the computers will believe that they're communicating directly.

### Defending against Session Fixation Attacks

Never accept session identifiers as GET or POST variables, only accept session identifiers from cookies. This removes the easiest way to set a session ID. This is likely the default setting, but it's worth being sure.

Use cross-site scripting defenses. Validate input, sanitize output, send a content security policy, and use smart cookie settings like HTTPOnly, Secure, and Expire. Most importantly, use HTTPS.

These steps keep cookies secure during storage and transmission.

The best defense against session fixation attacks is to automatically regenerate the session identifier after the user logs in. When the user logs in, discard the old session ID and assign a new one. The session file and the data inside do not have to change, this is only a change to the identifier, the value stored in the cookie.

## Remote Code Execution (RCE)

Remote code execution (RCE) is when an attacker can remotely execute internal operating system commands on a server. To put it another way, an attacker can type commands as if they were sitting at the keyboard. They can perform any task that a logged in user can perform.

They can read, add, modify or delete files. They can change access privileges or passwords. They can turn on and off configurations and services and they can communicate to other servers.

If you use a system call function and also provide a way that an attacker can slip their own data to it (e.g. user input data, stored data that may have been corrupted), then they can use that function too.

The best prevention is to avoid using system execution functions at all.

If it's absolutely necessary to use them, then avoid pairing them with user submitted or dynamic code. That is the point in which you give an attacker a potential path to the function and should you really, really need to use them with dynamic data, then make sure to validate all data.

## File Upload Abuse

File upload abuse is where a User can upload a file. They can upload too many, too often, too big, or the wrong file type, or upload a file containing malware.

The best way to prevent file upload abuse is to require users to log in before they can upload files. Don't allow any anonymous uploads. I

Don't make user-uploaded files available for public download or your site could distribute malware to others. Instead, store uploaded files in directories which are not readable by the public. If they need to become public, then scan them for viruses and have a human review them first.

## Denial Of Service Attack - DOS

A denial-of-service attack denies authorized users access to a server, service, or resource to which they would normally expect to have access. Denial of service is an attempt to prevent legitimate users from using a service. The underlying service may remain unaffected but it's no longer available.

Denial-of-service attacks usually use flooding or crashing to make data unavailable. Flooding is when a system is overwhelmed with too many requests.

Crashing is when software or hardware crashes and stops operating.
