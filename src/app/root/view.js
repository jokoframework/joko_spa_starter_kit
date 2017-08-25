import Mn from 'backbone.marionette'
import template from './template.hbs'
import UsersView from '../users/view'
import PostsView from '../posts/view'

export default Mn.View.extend({
    
    template: template,
    
    regions: {
        content: '#content'
    },
    
    showUsers() {
        this.getRegion('content').show(new UsersView())
    },
    
    showPosts() {
        this.getRegion('content').show(new PostsView())
    }
    
})