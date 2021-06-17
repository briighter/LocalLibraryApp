const User = require('./user')
const { userService } = require('./usersService')

// Display list of all Users.
exports.user_list = async function (req, res) {
    User.find({}, function (err, users) {
        if (err) return handleError(err);
        console.log("Read all users")
        res.end()
    }).exec()
};

// Display detail page for a specific User.
exports.user_detail = function (req, res) {
    res.send('NOT IMPLEMENTED: User detail: ' + req.params.id);
};

// Display User create form on GET.
exports.user_create_get = function (req, res) {
    res.send('NOT IMPLEMENTED: User create GET');
};

// Handle User create on POST.
exports.user_create_post = function (req, res) {
    User.create(req.body, function (err, user) {
        if (err) handleError(err)
        console.log("Created new user...")
        // res.send(req.body)

    })
};

// Display User delete form on GET.
exports.user_delete_get = function (req, res) {
    res.send('NOT IMPLEMENTED: User delete GET');
};

// Handle User delete on POST.
exports.user_delete_post = function (req, res) {
    res.send('NOT IMPLEMENTED: User delete POST');
};

// Display User update form on GET.
exports.user_update_get = function (req, res) {
    res.send('NOT IMPLEMENTED: User update GET');
};

// Handle User update on POST.
exports.user_update_post = function (req, res) {
    res.send('NOT IMPLEMENTED: User update POST');
};