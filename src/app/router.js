import Bn from 'backbone'
import Mn from 'backbone.marionette'
import $ from 'jquery'

export default Mn.AppRouter.extend({
    
    initialize() {
        $('a[data-route]').on('click', function (e) {
            e.preventDefault()
            const route = $(this).attr('href')
            Bn.history.navigate(route, true)
        })
    },
    
    appRoutes: {
        ''     : 'showUsers',
        'users': 'showUsers',
        'posts': 'showPosts'
    }
    
})