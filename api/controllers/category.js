module.exports = {

    /**
     *  Returns the list of categories
     * @param req request object
     * @param res response object
     */
    getCategories: function (req, res) {
        res.json([{
            categoryId: '1568881',
            categoryName: 'Testz'
        }]);
    },

    /**
     * Returns products of the category by the given parameters
     *
     * *categoryId*, limit, startsAt
     *
     *
     * @param req
     * @param res
     */
    getProductsByCategory: function(req, res){

    }
}