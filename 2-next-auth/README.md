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