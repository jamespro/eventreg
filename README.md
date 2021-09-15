# eventreg w/API

Work in progress: API for adding/removing events using MongoDB database

Demo URL: https://eventregg.herokuapp.com/

Includes API for event registration

Originally the project was to be a complete registration system, but I have decided to make the main focus of this repo to be the API and do the front-end development in separate projects. Future tasks will be to clear out unrelated files, or I may have simple CRUD forms to help with development. 

## Tech
* Node.js
* Express
* EJS for templating

## Plan
* Complete: The original test to submit everything for an order at once
* Register: Would set up the initial user record
* Demos: for demographic information for a user
* Item: item information
* Items: manage items for a user
* Users: manage users, alternative to Register
* Order: order information... each user gets an order as they go through registration. (Can a user have multiple orders? Or do we add/remove items from the original order?)
* Payment: payments processed

## TODO
- [ ] API: Register: Return user data (ID/uuid) so can keep the session going on Items
- [ ] Admin: Consider using react-admin package
- [ ] Complete: 
- [ ] Register
- [ ] Demos: do later?
- [ ] Item: 
- [ ] Items: 
- [ ] Users: 
- [ ] Order: 
- [ ] Payment: Add Model

## Roadmap / Optimizations
- [ ] Consider GraphQL? Would be helpful for documentation
- [ ] Clear out files used for front-end only if not needed

## DONE
- [x] 20210617: API accepting req.body.values instead of just req.body, to work with how Formik is sending data currently
- [ ] 