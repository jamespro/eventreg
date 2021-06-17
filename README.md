# eventreg w/API

Work in progress: Vanilla javascript test of adding/removing events using MongoDB database

Demo URL: https://eventregg.herokuapp.com/

Includes API for event registration

## TODO
- [ ] API: Register: Return user data (ID/uuid) so can keep the session going on Items
- [ ] Admin: Consider using react-admin package
- [ ] Reg: Add Model
- [ ] Demo: Add Model
- [ ] Item: Add Model
- [ ] Order: Add Model
- [ ] Payment: Add Model

## Roadmap / Optimizations
- [ ] FormFields

## DONE
- [x] 20210617: API accepting req.body.values instead of just req.body, to work with how Formik is sending data currently
- [ ] 