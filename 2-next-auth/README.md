# NEXT AUTH
Authentication, reset passwords, emails, etc

## What I did till now
- Created Project repo. Folders as follows:
    - `src/app/` -> All the folders are routes except `/api` which is used to write backend
    - `/db` : databse connection
    - `/helpers`: utility files
    - `/models`: db schemas
    - Deleted icons, svgs
- userSchema added using `mongoose` (similar to MERN but exported differently)
- Using `nodemailer` to send emails. Function in `mailer.ts` file
- Files in the `/api` folders are apis to connect and perform operations with database.
- The signup folder has route.ts which contains the signup function
- The url would be like `localhost:3000/api/users/signup`
    - localhost:3000 -> the port project is deployed on
    - api folder -> users folder -> signup folder
- Added emailType check in nodemailer
- Create account on [mailtrap](https://mailtrap.io/) -> Inboxes -> Integration -> node.js -> copy the credentials
    - Created HTML page to redirect and verify
- Tested using postman (small env error)
> [! NOTE]  
> - Don't use bcrypt to hash userid to create tokens because it has special characers ($ . %) that get encoded (ex. space -> %20) so it's better to hash using some other module like uuid.
> - Instalation and usage of modules like nodmailer and jwt can cause errors because they need to be download as dev dependency (hover over the export error to get installation code.)
- Verify route -> Search user with verifyToken and vaid expiry and Verify user
- Adding login route - checking for user, comparing hashed password, creating token using jwt, using NextResponse to set cookies.  
- Addin logout -> Unsetting cookies